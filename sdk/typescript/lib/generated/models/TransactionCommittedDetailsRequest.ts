/* tslint:disable */
/* eslint-disable */
/**
 * Babylon Gateway API - RCnet V3
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers. For simple use cases, you can typically use the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs-babylon.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Migration guide  Please see [the latest release notes](https://github.com/radixdlt/babylon-gateway/releases).  ## Integration and forward compatibility guarantees  We give no guarantees that other endpoints will not change before Babylon mainnet launch, although changes are expected to be minimal. 
 *
 * The version of the OpenAPI document: 0.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { LedgerStateSelector } from './LedgerStateSelector';
import {
    LedgerStateSelectorFromJSON,
    LedgerStateSelectorFromJSONTyped,
    LedgerStateSelectorToJSON,
} from './LedgerStateSelector';
import type { TransactionDetailsOptIns } from './TransactionDetailsOptIns';
import {
    TransactionDetailsOptInsFromJSON,
    TransactionDetailsOptInsFromJSONTyped,
    TransactionDetailsOptInsToJSON,
} from './TransactionDetailsOptIns';

/**
 * 
 * @export
 * @interface TransactionCommittedDetailsRequest
 */
export interface TransactionCommittedDetailsRequest {
    /**
     * 
     * @type {LedgerStateSelector}
     * @memberof TransactionCommittedDetailsRequest
     */
    at_ledger_state?: LedgerStateSelector | null;
    /**
     * Bech32m-encoded hash.
     * @type {string}
     * @memberof TransactionCommittedDetailsRequest
     */
    intent_hash: string;
    /**
     * 
     * @type {TransactionDetailsOptIns}
     * @memberof TransactionCommittedDetailsRequest
     */
    opt_ins?: TransactionDetailsOptIns;
}

/**
 * Check if a given object implements the TransactionCommittedDetailsRequest interface.
 */
export function instanceOfTransactionCommittedDetailsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "intent_hash" in value;

    return isInstance;
}

export function TransactionCommittedDetailsRequestFromJSON(json: any): TransactionCommittedDetailsRequest {
    return TransactionCommittedDetailsRequestFromJSONTyped(json, false);
}

export function TransactionCommittedDetailsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionCommittedDetailsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'at_ledger_state': !exists(json, 'at_ledger_state') ? undefined : LedgerStateSelectorFromJSON(json['at_ledger_state']),
        'intent_hash': json['intent_hash'],
        'opt_ins': !exists(json, 'opt_ins') ? undefined : TransactionDetailsOptInsFromJSON(json['opt_ins']),
    };
}

export function TransactionCommittedDetailsRequestToJSON(value?: TransactionCommittedDetailsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'at_ledger_state': LedgerStateSelectorToJSON(value.at_ledger_state),
        'intent_hash': value.intent_hash,
        'opt_ins': TransactionDetailsOptInsToJSON(value.opt_ins),
    };
}
