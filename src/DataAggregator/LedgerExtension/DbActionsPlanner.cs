/* Copyright 2021 Radix Publishing Ltd incorporated in Jersey (Channel Islands).
 *
 * Licensed under the Radix License, Version 1.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 *
 * radixfoundation.org/licenses/LICENSE-v1
 *
 * The Licensor hereby grants permission for the Canonical version of the Work to be
 * published, distributed and used under or by reference to the Licensor’s trademark
 * Radix ® and use of any unregistered trade names, logos or get-up.
 *
 * The Licensor provides the Work (and each Contributor provides its Contributions) on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied,
 * including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT,
 * MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * Whilst the Work is capable of being deployed, used and adopted (instantiated) to create
 * a distributed ledger it is your responsibility to test and validate the code, together
 * with all logic and performance of that code under all foreseeable scenarios.
 *
 * The Licensor does not make or purport to make and hereby excludes liability for all
 * and any representation, warranty or undertaking in any form whatsoever, whether express
 * or implied, to any entity or person, including any representation, warranty or
 * undertaking, as to the functionality security use, value or other characteristics of
 * any distributed ledger nor in respect the functioning or value of any tokens which may
 * be created stored or transferred using the Work. The Licensor does not warrant that the
 * Work or any use of the Work complies with any law or regulation in any territory where
 * it may be implemented or used or that it will be appropriate for any specific purpose.
 *
 * Neither the licensor nor any current or former employees, officers, directors, partners,
 * trustees, representatives, agents, advisors, contractors, or volunteers of the Licensor
 * shall be liable for any direct or indirect, special, incidental, consequential or other
 * losses of any kind, in tort, contract or otherwise (including but not limited to loss
 * of revenue, income or profits, or loss of use or data, or loss of reputation, or loss
 * of any economic or other opportunity of whatsoever nature or howsoever arising), arising
 * out of or in connection with (without limitation of any use, misuse, of any ledger system
 * or use made or its functionality or any performance or operation of any code or protocol
 * caused by bugs or programming or logic errors or otherwise);
 *
 * A. any offer, purchase, holding, use, sale, exchange or transmission of any
 * cryptographic keys, tokens or assets created, exchanged, stored or arising from any
 * interaction with the Work;
 *
 * B. any failure in a transmission or loss of any token or assets keys or other digital
 * artefacts due to errors in transmission;
 *
 * C. bugs, hacks, logic errors or faults in the Work or any communication;
 *
 * D. system software or apparatus including but not limited to losses caused by errors
 * in holding or transmitting tokens by any third-party;
 *
 * E. breaches or failure of security including hacker attacks, loss or disclosure of
 * password, loss of private key, unauthorised use or misuse of such passwords or keys;
 *
 * F. any losses including loss of anticipated savings or other benefits resulting from
 * use of the Work or any changes to the Work (however implemented).
 *
 * You are solely responsible for; testing, validating and evaluation of all operation
 * logic, functionality, security and appropriateness of using the Work for any commercial
 * or non-commercial purpose and for any reproduction or redistribution by You of the
 * Work. You assume all risks associated with Your use of the Work and the exercise of
 * permissions under this License.
 */

using Common.Database.Models.Ledger;
using Common.Database.Models.Ledger.History;
using Common.Database.Models.Ledger.Normalization;
using Common.Database.Models.Ledger.Substates;
using Common.Extensions;
using DataAggregator.DependencyInjection;
using DataAggregator.Exceptions;
using Microsoft.EntityFrameworkCore;

namespace DataAggregator.LedgerExtension;

/// <summary>
/// Batches actions to the database.
///
/// First, for each transaction in the batch, the TransactionContentProcessor goes through the transaction contents,
/// and marks the actions to perform on this class.
///
/// The Actions Planner then proceeds across a few key phases:
///
/// > Phase 1 - (Async) Loads dependencies
/// Referenced items on ledger (eg substates) and previous history values are loaded in in batch to the local context.
///
/// > Phase 2 - Process Actions
/// The transaction contents are processed in turn, adding or mutating things, and running suitable assertions.
/// At this stage, the actions can make calls to any of the dependencies which were looked up earlier.
///
/// Not thread-safe - as per the dbContext it wraps.
/// </summary>
public class DbActionsPlanner
{
    private readonly AggregatorDbContext _dbContext;
    private readonly CancellationToken _cancellationToken;

    private readonly Dictionary<string, long> _resourcesToLoadOrCreate = new(); // The long is the first state version at which it appears
    private readonly Dictionary<Type, HashSet<byte[]>> _substatesToLoad = new();
    private readonly HashSet<AccountResourceDenormalized> _accountResourceHistoryToLoad = new();
    private readonly List<Action> _dbActions = new();

    public DbActionsPlanner(AggregatorDbContext dbContext, CancellationToken cancellationToken)
    {
        _dbContext = dbContext;
        _cancellationToken = cancellationToken;
    }

    public void UpSubstate<TSubstate>(
        TransactionOpLocator transactionOpLocator,
        byte[] identifier,
        Func<TSubstate> createNewSubstate,
        LedgerOperationGroup upOperationGroup,
        int upOperationIndexInGroup
    )
        where TSubstate : SubstateBase
    {
        MarkSubstateToLoadIfExists<TSubstate>(identifier);
        _dbActions.Add(() => UpSubstateFutureAction(transactionOpLocator, identifier, createNewSubstate, upOperationGroup, upOperationIndexInGroup));
    }

    public void DownSubstate<TSubstate>(
        TransactionOpLocator transactionOpLocator,
        byte[] identifier,
        Func<TSubstate> createNewSubstateIfVirtual,
        Func<TSubstate, bool> verifySubstateMatches,
        LedgerOperationGroup downOperationGroup,
        int downOperationIndexInGroup
    )
        where TSubstate : SubstateBase
    {
        MarkSubstateToLoadIfExists<TSubstate>(identifier);
        _dbActions.Add(() => DownSubstateFutureAction(transactionOpLocator, identifier, createNewSubstateIfVirtual, verifySubstateMatches, downOperationGroup, downOperationIndexInGroup));
    }

    /// <summary>
    /// Note that:
    /// * historySelector does not need to care about the StateVersion.
    /// * createNewHistory does not need to care about the StateVersion.
    /// </summary>
    public void AddNewAccountResourceBalanceHistoryEntry(
        AccountResourceDenormalized historyKey,
        Func<AccountResourceBalanceHistory?, AccountResourceBalanceHistory> createNewHistoryFromPrevious,
        long transactionStateVersion
    )
    {
        _accountResourceHistoryToLoad.Add(historyKey);
        _dbActions.Add(() => AddNewHistoryEntryFutureAction(
            h =>
                h.AccountAddress == historyKey.AccountAddress
                && h.Resource == GetResource(historyKey.Rri),
            createNewHistoryFromPrevious,
            transactionStateVersion
        ));
    }

    /// <summary>
    /// This registers the the resource needs to be loaded as a dependency, and returns a resource
    /// lookup which can be used in the action phase to resolve a resourceIdentifier into a Resource.
    /// </summary>
    public Func<Resource> ResolveResource(string resourceIdentifier, long seenAtStateVersion)
    {
        EnsureResourceLoaded(resourceIdentifier, seenAtStateVersion);
        return () => GetResource(resourceIdentifier);
    }

    public async Task ProcessAllChanges()
    {
        await LoadDependencies();
        RunActions();
    }

    /// <summary>
    /// This can only be called from the action phase.
    /// A call to this must have been pre-empted by a call to EnsureResourceLoaded in the dependencies phase.
    /// If this method throws, this is because the EnsureResourceLoaded call was forgotten.
    ///
    /// NB - The resource's id can be as 0, as the resource may not have actually been created yet.
    ///      So be sure to use the resource itself so EF Core can resolve the entity graph correctly upon save.
    /// </summary>
    private Resource GetResource(string resourceIdentifier)
    {
        return _dbContext.Set<Resource>().Local.Single(r => r.ResourceIdentifier == resourceIdentifier);
    }

    private void EnsureResourceLoaded(string resourceIdentifier, long seenAtStateVersion)
    {
        if (!_resourcesToLoadOrCreate.ContainsKey(resourceIdentifier))
        {
            _resourcesToLoadOrCreate[resourceIdentifier] = seenAtStateVersion;
        }
    }

    private async Task LoadDependencies()
    {
        await LoadOrCreateResources();
        await LoadSubstatesOfType<AccountResourceBalanceSubstate>();
        await LoadSubstatesOfType<AccountStakeOwnershipBalanceSubstate>();
        await LoadSubstatesOfType<AccountXrdStakeBalanceSubstate>();
        await LoadSubstatesOfType<ValidatorStakeBalanceSubstate>();
        await LoadSubstatesOfType<ResourceDataSubstate>();
        await LoadSubstatesOfType<ValidatorDataSubstate>();
        await LoadAccountResourceBalanceHistoryEntries();
    }

    private void RunActions()
    {
        _dbActions.ForEach(action => action());
    }

    private void MarkSubstateToLoadIfExists<TSubstate>(byte[] identifier)
        where TSubstate : SubstateBase
    {
        var substateIdentifiers = _substatesToLoad.GetOrCreate(typeof(TSubstate), () => new HashSet<byte[]>());
        substateIdentifiers.Add(identifier);
    }

    private void UpSubstateFutureAction<TSubstate>(
        TransactionOpLocator transactionOpLocator,
        byte[] identifier,
        Func<TSubstate> createNewSubstate,
        LedgerOperationGroup upOperationGroup,
        int upOperationIndexInGroup
    )
        where TSubstate : SubstateBase
    {
        var substates = _dbContext.Set<TSubstate>();

        // Could rely on the database to check this constraint at commit time, but this gives us a clearer error
        var existingSubstate = substates.Local
            .SingleOrDefault(s => s.SubstateIdentifier.BytesAreEqual(identifier));
        if (existingSubstate != null)
        {
            throw new InvalidTransactionException(
                transactionOpLocator,
                $"{typeof(TSubstate).FullName} with identifier {identifier.ToHex()} can't be upped, as a substate with that identifier already already exists in the database"
            );
        }

        var newSubstate = createNewSubstate();

        newSubstate.SubstateIdentifier = identifier;
        newSubstate.UpOperationGroup = upOperationGroup;
        newSubstate.UpOperationIndexInGroup = upOperationIndexInGroup;

        substates.Add(newSubstate);
    }

    private void DownSubstateFutureAction<TSubstate>(
        TransactionOpLocator transactionOpLocator,
        byte[] identifier,
        Func<TSubstate> createNewSubstateIfVirtual,
        Func<TSubstate, bool> verifySubstateMatches,
        LedgerOperationGroup downOperationGroup,
        int downOperationIndexInGroup
    )
        where TSubstate : SubstateBase
    {
        var substates = _dbContext.Set<TSubstate>();
        var substate = substates.Local
            .SingleOrDefault(s => s.SubstateIdentifier.BytesAreEqual(identifier));
        if (substate == null)
        {
            if (!SubstateBase.IsVirtualIdentifier(identifier))
            {
                throw new InvalidTransactionException(
                    transactionOpLocator,
                    $"Non-virtual {typeof(TSubstate).Name} with identifier {identifier.ToHex()} could not be downed as it did not exist in the database"
                );
            }

            // Virtual substates can be downed without being upped
            var newSubstate = createNewSubstateIfVirtual();
            newSubstate.SubstateIdentifier = identifier;
            newSubstate.UpOperationGroup = downOperationGroup;
            newSubstate.UpOperationIndexInGroup = downOperationIndexInGroup;
            newSubstate.DownOperationGroup = downOperationGroup;
            newSubstate.DownOperationIndexInGroup = downOperationIndexInGroup;
            substates.Add(newSubstate);
            return;
        }

        if (substate.State == SubstateState.Down)
        {
            throw new InvalidTransactionException(
                transactionOpLocator,
                $"{typeof(TSubstate).Name} with identifier {identifier.ToHex()} could not be downed as it was already down"
            );
        }

        if (!verifySubstateMatches(substate))
        {
            throw new InvalidTransactionException(
                transactionOpLocator,
                $"{typeof(TSubstate).Name} with identifier {identifier.ToHex()} was downed, but the substate contents appear not to match at downing time"
            );
        }

        substate.DownOperationGroup = downOperationGroup;
        substate.DownOperationIndexInGroup = downOperationIndexInGroup;
    }

    private void AddNewHistoryEntryFutureAction<THistory>(
        Func<THistory, bool> historySelector,
        Func<THistory?, THistory> createNewHistoryFromPrevious,
        long transactionStateVersion
    )
        where THistory : HistoryBase
    {
        var historyEntries = _dbContext.Set<THistory>();
        var existingHistoryItem = historyEntries.Local
            .Where(historySelector)
            .FirstOrDefault(h => h.ToStateVersion == null);

        if (existingHistoryItem == null)
        {
            var newHistoryItem = createNewHistoryFromPrevious(null);
            newHistoryItem.FromStateVersion = transactionStateVersion;
            historyEntries.Add(newHistoryItem);
        }
        else
        {
            var newHistoryItem = createNewHistoryFromPrevious(existingHistoryItem);
            existingHistoryItem.ToStateVersion = transactionStateVersion - 1;
            newHistoryItem.FromStateVersion = transactionStateVersion;
            historyEntries.Add(newHistoryItem);
        }
    }

    private async Task LoadOrCreateResources()
    {
        if (_resourcesToLoadOrCreate.Count == 0)
        {
            return;
        }

        var rrisToLoadOrCreate = _resourcesToLoadOrCreate.Keys.ToHashSet();

        var existingResources = await _dbContext.Set<Resource>()
            .Where(r => rrisToLoadOrCreate.Contains(r.ResourceIdentifier))
            .ToListAsync(_cancellationToken);

        rrisToLoadOrCreate.ExceptWith(existingResources
            .Select(r => r.ResourceIdentifier)
        );

        _dbContext.Set<Resource>()
            .AddRange(
                rrisToLoadOrCreate
                .Select(rri => new Resource
                    {
                        ResourceIdentifier = rri,
                        FromStateVersion = _resourcesToLoadOrCreate[rri],
                    }
                )
            );
    }

    private async Task LoadSubstatesOfType<TSubstate>()
        where TSubstate : SubstateBase
    {
        if (!_substatesToLoad.TryGetValue(typeof(TSubstate), out var identifiersToLoad))
        {
            return;
        }

        // TODO:NG-49 - If we hit limits - instead of doing a large "IN", we could consider using a Temporary Table for these loads
        await _dbContext.Set<TSubstate>()
            .Where(s => identifiersToLoad.Contains(s.SubstateIdentifier))
            .LoadAsync(_cancellationToken);
    }

    private async Task LoadAccountResourceBalanceHistoryEntries()
    {
        if (!_accountResourceHistoryToLoad.Any())
        {
            return;
        }

        await _dbContext.Set<AccountResourceBalanceHistory>()
            .FromSqlRawWithDimensionalIn(
                "SELECT * FROM account_resource_balance_history WHERE to_state_version IS NULL AND (account_address, resource_id)",
                _accountResourceHistoryToLoad,
                ar => new object[] { ar.AccountAddress, GetResource(ar.Rri).Id }
            )
            .LoadAsync(_cancellationToken);
    }
}
