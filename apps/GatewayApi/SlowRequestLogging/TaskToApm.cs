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

// <auto-generated>
#nullable enable

using System;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;

namespace GatewayApi.SlowRequestLogging;

/// <summary>
/// Provides support for efficiently using Tasks to implement the APM (Begin/End) pattern.
/// </summary>
internal static class TaskToApm
{
    /// <summary>
    /// Marshals the Task as an IAsyncResult, using the supplied callback and state
    /// to implement the APM pattern.
    /// </summary>
    /// <param name="task">The Task to be marshaled.</param>
    /// <param name="callback">The callback to be invoked upon completion.</param>
    /// <param name="state">The state to be stored in the IAsyncResult.</param>
    /// <returns>An IAsyncResult to represent the task's asynchronous operation.</returns>
    public static IAsyncResult Begin(Task task, AsyncCallback? callback, object? state) =>
        new TaskAsyncResult(task, state, callback);

    /// <summary>Processes an IAsyncResult returned by Begin.</summary>
    /// <param name="asyncResult">The IAsyncResult to unwrap.</param>
    public static void End(IAsyncResult asyncResult)
    {
        if (asyncResult is TaskAsyncResult twar)
        {
            twar._task.GetAwaiter().GetResult();
            return;
        }

        ArgumentNullException.ThrowIfNull(asyncResult, nameof(asyncResult));
    }

    /// <summary>Processes an IAsyncResult returned by Begin.</summary>
    /// <param name="asyncResult">The IAsyncResult to unwrap.</param>
    public static TResult End<TResult>(IAsyncResult asyncResult)
    {
        if (asyncResult is TaskAsyncResult twar && twar._task is Task<TResult> task)
        {
            return task.GetAwaiter().GetResult();
        }

        throw new ArgumentException($"{nameof(asyncResult)} must be a TaskAsyncResult wrapping a Task returning a {typeof(TResult).Name}.", nameof(asyncResult));
    }

    /// <summary>Provides a simple IAsyncResult that wraps a Task.</summary>
    /// <remarks>
    /// We could use the Task as the IAsyncResult if the Task's AsyncState is the same as the object state,
    /// but that's very rare, in particular in a situation where someone cares about allocation, and always
    /// using TaskAsyncResult simplifies things and enables additional optimizations.
    /// </remarks>
    internal sealed class TaskAsyncResult : IAsyncResult
    {
        /// <summary>The wrapped Task.</summary>
        internal readonly Task _task;
        /// <summary>Callback to invoke when the wrapped task completes.</summary>
        private readonly AsyncCallback? _callback;

        /// <summary>Initializes the IAsyncResult with the Task to wrap and the associated object state.</summary>
        /// <param name="task">The Task to wrap.</param>
        /// <param name="state">The new AsyncState value.</param>
        /// <param name="callback">Callback to invoke when the wrapped task completes.</param>
        internal TaskAsyncResult(Task task, object? state, AsyncCallback? callback)
        {
            Debug.Assert(task != null);
            _task = task;
            AsyncState = state;

            if (task.IsCompleted)
            {
                // Synchronous completion.  Invoke the callback.  No need to store it.
                CompletedSynchronously = true;
                callback?.Invoke(this);
            }
            else if (callback != null)
            {
                // Asynchronous completion, and we have a callback; schedule it. We use OnCompleted rather than ContinueWith in
                // order to avoid running synchronously if the task has already completed by the time we get here but still run
                // synchronously as part of the task's completion if the task completes after (the more common case).
                _callback = callback;
                _task.ConfigureAwait(continueOnCapturedContext: false)
                     .GetAwaiter()
                     .OnCompleted(InvokeCallback); // allocates a delegate, but avoids a closure
            }
        }

        /// <summary>Invokes the callback.</summary>
        private void InvokeCallback()
        {
            Debug.Assert(!CompletedSynchronously);
            Debug.Assert(_callback != null);
            _callback.Invoke(this);
        }

        /// <summary>Gets a user-defined object that qualifies or contains information about an asynchronous operation.</summary>
        public object? AsyncState { get; }
        /// <summary>Gets a value that indicates whether the asynchronous operation completed synchronously.</summary>
        /// <remarks>This is set lazily based on whether the <see cref="_task"/> has completed by the time this object is created.</remarks>
        public bool CompletedSynchronously { get; }
        /// <summary>Gets a value that indicates whether the asynchronous operation has completed.</summary>
        public bool IsCompleted => _task.IsCompleted;
        /// <summary>Gets a <see cref="WaitHandle"/> that is used to wait for an asynchronous operation to complete.</summary>
        public WaitHandle AsyncWaitHandle => ((IAsyncResult)_task).AsyncWaitHandle;
    }
}