/* tslint:disable */
/* eslint-disable */
/**
 * Radix Gateway API - Babylon
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers, and for light queries from front-end dApps. For exchange/asset integrations, back-end dApp integrations, or simple use cases, you should consider using the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Migration guide  Please see [the latest release notes](https://github.com/radixdlt/babylon-gateway/releases).  ## Integration and forward compatibility guarantees  All responses may have additional fields added at any release, so clients are advised to use JSON parsers which ignore unknown fields on JSON objects.  When the Radix protocol is updated, new functionality may be added, and so discriminated unions returned by the API may need to be updated to have new variants added, corresponding to the updated data. Clients may need to update in advance to be able to handle these new variants when a protocol update comes out.  On the very rare occasions we need to make breaking changes to the API, these will be warned in advance with deprecation notices on previous versions. These deprecation notices will include a safe migration path. Deprecation notes or breaking changes will be flagged clearly in release notes for new versions of the Gateway.  The Gateway DB schema is not subject to any compatibility guarantees, and may be changed at any release. DB changes will be flagged in the release notes so clients doing custom DB integrations can prepare. 
 *
 * The version of the OpenAPI document: v1.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * The ledger state against which the response was generated.
 * Can be used to detect if the Network Gateway is returning up-to-date information.
 * @export
 * @interface LedgerState
 */
export interface LedgerState {
    /**
     * The logical name of the network
     * @type {string}
     * @memberof LedgerState
     */
    network: string;
    /**
     * The state version of the ledger. Each transaction increments the state version by 1.
     * @type {number}
     * @memberof LedgerState
     */
    state_version: number;
    /**
     * The proposer round timestamp of the consensus round when this transaction was committed to ledger.
     * This is not guaranteed to be strictly increasing, as it is computed as an average across the validator set.
     * If this is significantly behind the current timestamp, the Network Gateway is likely reporting out-dated
     * information, or the network has stalled.
     * @type {string}
     * @memberof LedgerState
     */
    proposer_round_timestamp: string;
    /**
     * The epoch number of the ledger at this state version.
     * @type {number}
     * @memberof LedgerState
     */
    epoch: number;
    /**
     * The consensus round in the epoch that this state version was committed in.
     * @type {number}
     * @memberof LedgerState
     */
    round: number;
}

/**
 * Check if a given object implements the LedgerState interface.
 */
export function instanceOfLedgerState(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "state_version" in value;
    isInstance = isInstance && "proposer_round_timestamp" in value;
    isInstance = isInstance && "epoch" in value;
    isInstance = isInstance && "round" in value;

    return isInstance;
}

export function LedgerStateFromJSON(json: any): LedgerState {
    return LedgerStateFromJSONTyped(json, false);
}

export function LedgerStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LedgerState {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'network': json['network'],
        'state_version': json['state_version'],
        'proposer_round_timestamp': json['proposer_round_timestamp'],
        'epoch': json['epoch'],
        'round': json['round'],
    };
}

export function LedgerStateToJSON(value?: LedgerState | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'network': value.network,
        'state_version': value.state_version,
        'proposer_round_timestamp': value.proposer_round_timestamp,
        'epoch': value.epoch,
        'round': value.round,
    };
}

