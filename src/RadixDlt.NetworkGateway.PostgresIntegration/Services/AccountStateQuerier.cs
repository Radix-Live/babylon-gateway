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

// <copyright file="AccountStateQuerier.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using Dapper;
using Microsoft.EntityFrameworkCore;
using RadixDlt.NetworkGateway.Abstractions;
using RadixDlt.NetworkGateway.Abstractions.Model;
using RadixDlt.NetworkGateway.GatewayApi.Exceptions;
using RadixDlt.NetworkGateway.GatewayApi.Services;
using RadixDlt.NetworkGateway.PostgresIntegration.Models;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using GatewayModel = RadixDlt.NetworkGateway.GatewayApiSdk.Model;

namespace RadixDlt.NetworkGateway.PostgresIntegration.Services;

internal record AccountResourcePreferenceRulesViewModel(
    long FromStateVersion,
    EntityAddress ResourceEntityAddress,
    AccountResourcePreferenceRule AccountResourcePreferenceRule,
    int TotalCount);

internal record AccountAuthorizedDepositorsViewModel(
    long FromStateVersion,
    AuthorizedDepositorBadgeType BadgeType,
    EntityAddress? ResourceBadgeEntityAddress,
    EntityAddress? NonFungibleBadgeResourceEntityAddress,
    string? NonFungibleBadgeNonFungibleId,
    int TotalCount
    );

internal class AccountStateQuerier : IAccountStateQuerier
{
    private readonly IDapperWrapper _dapperWrapper;
    private readonly ReadOnlyDbContext _dbContext;

    public AccountStateQuerier(IDapperWrapper dapperWrapper, ReadOnlyDbContext dbContext)
    {
        _dapperWrapper = dapperWrapper;
        _dbContext = dbContext;
    }

    public async Task<GatewayApiSdk.Model.StateAccountResourcePreferencesPageResponse> AccountResourcePreferences(
        EntityAddress accountAddress,
        GatewayApiSdk.Model.LedgerState ledgerState,
        int offset,
        int limit,
        CancellationToken token = default)
    {
        var accountEntity = await GetEntity<GlobalAccountEntity>(accountAddress, ledgerState, token);

        var cd = new CommandDefinition(
            commandText: @"
WITH slices AS (
SELECT
    entry_ids[@startIndex:@endIndex] AS resource_preference_rules_slice,
    cardinality(entry_ids) AS resource_preference_rules_total_count
FROM account_resource_preference_rule_aggregate_history arprah
WHERE account_entity_id = @accountEntityId AND from_state_version <= @stateVersion
ORDER BY from_state_version DESC
LIMIT 1)
SELECT
       arprh.from_state_version                         AS FromStateVersion,
       resource_entity.address                          AS ResourceEntityAddress,
       arprh.account_resource_preference_rule           AS AccountResourcePreferenceRule,
       slices.resource_preference_rules_total_count     AS TotalCount
FROM slices
INNER JOIN LATERAL UNNEST(resource_preference_rules_slice) WITH ORDINALITY AS resource_preference_join(id, ordinality) ON TRUE
INNER JOIN account_resource_preference_rule_history arprh ON arprh.id = resource_preference_join.id
INNER JOIN entities resource_entity on arprh.resource_entity_id = resource_entity.id
ORDER BY resource_preference_join.ordinality ASC;",
            parameters: new
            {
                accountEntityId = accountEntity.Id,
                stateVersion = ledgerState.StateVersion,
                startIndex = offset + 1,
                endIndex = offset + limit,
            },
            cancellationToken: token);

        var queryResult = (await _dapperWrapper.QueryAsync<AccountResourcePreferenceRulesViewModel>(_dbContext.Database.GetDbConnection(), cd)).ToList();

        int totalCount = queryResult.FirstOrDefault()?.TotalCount ?? 0;

        var mappedItems = queryResult
            .Select(
                item => new GatewayModel.AccountResourcePreferencesResponseItem(
                    resourceAddress: item.ResourceEntityAddress.ToString(),
                    resourcePreferenceRule: item.AccountResourcePreferenceRule.ToGatewayModel(),
                    lastUpdatedAtStateVersion: item.FromStateVersion))
            .ToList();

        return new GatewayApiSdk.Model.StateAccountResourcePreferencesPageResponse(
            ledgerState: ledgerState,
            accountAddress: accountAddress,
            totalCount: totalCount,
            nextCursor: CursorGenerator.GenerateOffsetCursor(offset, limit, totalCount),
            items: mappedItems
        );
    }

    public async Task<GatewayModel.StateAccountAuthorizedDepositorsPageResponse> AccountAuthorizedDepositors(
        EntityAddress accountAddress,
        GatewayModel.LedgerState ledgerState,
        int offset,
        int limit,
        CancellationToken token = default)
    {
        var accountEntity = await GetEntity<GlobalAccountEntity>(accountAddress, ledgerState, token);

        var cd = new CommandDefinition(
            commandText: @"
WITH slices AS (
    SELECT
        entry_ids[@startIndex:@endIndex] AS resource_authorized_depositors_slice,
        cardinality(entry_ids) AS authorized_depositors_total_count
    FROM account_authorized_depositor_aggregate_history aadah
    WHERE account_entity_id = @accountEntityId AND from_state_version <= @stateVersion
    ORDER BY from_state_version DESC
    LIMIT 1)
SELECT
    aadh.from_state_version                     AS FromStateVersion,
    aadh.discriminator                          AS BadgeType,
    resource_entity.address                     AS ResourceBadgeEntityAddress,
    non_fungible_resource_entity.address        AS NonFungibleBadgeResourceEntityAddress,
    nfid.non_fungible_id                        AS NonFungibleBadgeNonFungibleId,
    slices.authorized_depositors_total_count    AS TotalCount
FROM slices
         INNER JOIN LATERAL UNNEST(resource_authorized_depositors_slice) WITH ORDINALITY AS resource_authorized_depositors_join(id, ordinality) ON TRUE
         INNER JOIN account_authorized_depositor_history aadh ON aadh.id = resource_authorized_depositors_join.id
         LEFT JOIN non_fungible_id_data nfid on nfid.id = aadh.non_fungible_id_data_id
         LEFT JOIN entities resource_entity on aadh.resource_entity_id = resource_entity.id
         LEFT JOIN entities non_fungible_resource_entity on aadh.resource_entity_id = non_fungible_resource_entity.id
ORDER BY resource_authorized_depositors_join.ordinality ASC;",
            parameters: new
            {
                accountEntityId = accountEntity.Id,
                stateVersion = ledgerState.StateVersion,
                startIndex = offset + 1,
                endIndex = offset + limit,
            },
            cancellationToken: token);

        var queryResult = (await _dapperWrapper.QueryAsync<AccountAuthorizedDepositorsViewModel>(_dbContext.Database.GetDbConnection(), cd)).ToList();

        int totalCount = queryResult.FirstOrDefault()?.TotalCount ?? 0;

        List<GatewayModel.AccountAuthorizedDepositorsResponseItem> mappedItems = queryResult
            .Select(
                item => (GatewayModel.AccountAuthorizedDepositorsResponseItem)(item.BadgeType switch
                {
                    AuthorizedDepositorBadgeType.Resource => new GatewayModel.AccountAuthorizedDepositorsResourceBadge(
                        resourceAddress: item.ResourceBadgeEntityAddress,
                        lastUpdatedAtStateVersion: item.FromStateVersion),
                    AuthorizedDepositorBadgeType.NonFungible => new GatewayModel.AccountAuthorizedDepositorsNonFungibleResourceBadge(
                        resourceAddress: item.NonFungibleBadgeResourceEntityAddress,
                        nonFungibleId: item.NonFungibleBadgeNonFungibleId,
                        lastUpdatedAtStateVersion: item.FromStateVersion),
                    _ => throw new UnreachableException($"Unsupported badge type: {item.GetType()}"),
                }))
            .ToList();

        return new GatewayApiSdk.Model.StateAccountAuthorizedDepositorsPageResponse(
            ledgerState: ledgerState,
            accountAddress: accountAddress,
            totalCount: totalCount,
            nextCursor: CursorGenerator.GenerateOffsetCursor(offset, limit, totalCount),
            items: mappedItems
        );
    }

    private async Task<TEntity> GetEntity<TEntity>(EntityAddress address, GatewayModel.LedgerState ledgerState, CancellationToken token)
        where TEntity : Entity
    {
        var entity = await _dbContext
            .Entities
            .Where(e => e.FromStateVersion <= ledgerState.StateVersion)
            .AnnotateMetricName()
            .FirstOrDefaultAsync(e => e.Address == address, token);

        if (entity is not TEntity typedEntity)
        {
            throw new InvalidEntityException(address.ToString());
        }

        return typedEntity;
    }
}
