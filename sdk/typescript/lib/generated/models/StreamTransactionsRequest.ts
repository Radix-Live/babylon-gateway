/* tslint:disable */
/* eslint-disable */
/**
 * Radix Gateway API - Babylon
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers, and for light queries from front-end dApps. For exchange/asset integrations, back-end dApp integrations, or simple use cases, you should consider using the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Migration guide  Please see [the latest release notes](https://github.com/radixdlt/babylon-gateway/releases).  ## Integration and forward compatibility guarantees  All responses may have additional fields added at any release, so clients are advised to use JSON parsers which ignore unknown fields on JSON objects.  When the Radix protocol is updated, new functionality may be added, and so discriminated unions returned by the API may need to be updated to have new variants added, corresponding to the updated data. Clients may need to update in advance to be able to handle these new variants when a protocol update comes out.  On the very rare occasions we need to make breaking changes to the API, these will be warned in advance with deprecation notices on previous versions. These deprecation notices will include a safe migration path. Deprecation notes or breaking changes will be flagged clearly in release notes for new versions of the Gateway.  The Gateway DB schema is not subject to any compatibility guarantees, and may be changed at any release. DB changes will be flagged in the release notes so clients doing custom DB integrations can prepare. 
 *
 * The version of the OpenAPI document: v1.2.2
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
import type { StreamTransactionsRequestEventFilterItem } from './StreamTransactionsRequestEventFilterItem';
import {
    StreamTransactionsRequestEventFilterItemFromJSON,
    StreamTransactionsRequestEventFilterItemFromJSONTyped,
    StreamTransactionsRequestEventFilterItemToJSON,
} from './StreamTransactionsRequestEventFilterItem';
import type { TransactionDetailsOptIns } from './TransactionDetailsOptIns';
import {
    TransactionDetailsOptInsFromJSON,
    TransactionDetailsOptInsFromJSONTyped,
    TransactionDetailsOptInsToJSON,
} from './TransactionDetailsOptIns';

/**
 * 
 * @export
 * @interface StreamTransactionsRequest
 */
export interface StreamTransactionsRequest {
    /**
     * 
     * @type {LedgerStateSelector}
     * @memberof StreamTransactionsRequest
     */
    at_ledger_state?: LedgerStateSelector | null;
    /**
     * 
     * @type {LedgerStateSelector}
     * @memberof StreamTransactionsRequest
     */
    from_ledger_state?: LedgerStateSelector | null;
    /**
     * This cursor allows forward pagination, by providing the cursor from the previous request.
     * @type {string}
     * @memberof StreamTransactionsRequest
     */
    cursor?: string | null;
    /**
     * The page size requested.
     * @type {number}
     * @memberof StreamTransactionsRequest
     */
    limit_per_page?: number | null;
    /**
     * Limit returned transactions by their kind. Defaults to `user`.
     * @type {string}
     * @memberof StreamTransactionsRequest
     */
    kind_filter?: StreamTransactionsRequestKindFilterEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof StreamTransactionsRequest
     */
    manifest_accounts_withdrawn_from_filter?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof StreamTransactionsRequest
     */
    manifest_accounts_deposited_into_filter?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof StreamTransactionsRequest
     */
    manifest_resources_filter?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof StreamTransactionsRequest
     */
    affected_global_entities_filter?: Array<string>;
    /**
     * 
     * @type {Array<StreamTransactionsRequestEventFilterItem>}
     * @memberof StreamTransactionsRequest
     */
    events_filter?: Array<StreamTransactionsRequestEventFilterItem>;
    /**
     * Configures the order of returned result set. Defaults to `desc`.
     * @type {string}
     * @memberof StreamTransactionsRequest
     */
    order?: StreamTransactionsRequestOrderEnum;
    /**
     * 
     * @type {TransactionDetailsOptIns}
     * @memberof StreamTransactionsRequest
     */
    opt_ins?: TransactionDetailsOptIns;
}


/**
 * @export
 */
export const StreamTransactionsRequestKindFilterEnum = {
    User: 'User',
    EpochChange: 'EpochChange',
    All: 'All'
} as const;
export type StreamTransactionsRequestKindFilterEnum = typeof StreamTransactionsRequestKindFilterEnum[keyof typeof StreamTransactionsRequestKindFilterEnum];

/**
 * @export
 */
export const StreamTransactionsRequestOrderEnum = {
    Asc: 'Asc',
    Desc: 'Desc'
} as const;
export type StreamTransactionsRequestOrderEnum = typeof StreamTransactionsRequestOrderEnum[keyof typeof StreamTransactionsRequestOrderEnum];


/**
 * Check if a given object implements the StreamTransactionsRequest interface.
 */
export function instanceOfStreamTransactionsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StreamTransactionsRequestFromJSON(json: any): StreamTransactionsRequest {
    return StreamTransactionsRequestFromJSONTyped(json, false);
}

export function StreamTransactionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamTransactionsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'at_ledger_state': !exists(json, 'at_ledger_state') ? undefined : LedgerStateSelectorFromJSON(json['at_ledger_state']),
        'from_ledger_state': !exists(json, 'from_ledger_state') ? undefined : LedgerStateSelectorFromJSON(json['from_ledger_state']),
        'cursor': !exists(json, 'cursor') ? undefined : json['cursor'],
        'limit_per_page': !exists(json, 'limit_per_page') ? undefined : json['limit_per_page'],
        'kind_filter': !exists(json, 'kind_filter') ? undefined : json['kind_filter'],
        'manifest_accounts_withdrawn_from_filter': !exists(json, 'manifest_accounts_withdrawn_from_filter') ? undefined : json['manifest_accounts_withdrawn_from_filter'],
        'manifest_accounts_deposited_into_filter': !exists(json, 'manifest_accounts_deposited_into_filter') ? undefined : json['manifest_accounts_deposited_into_filter'],
        'manifest_resources_filter': !exists(json, 'manifest_resources_filter') ? undefined : json['manifest_resources_filter'],
        'affected_global_entities_filter': !exists(json, 'affected_global_entities_filter') ? undefined : json['affected_global_entities_filter'],
        'events_filter': !exists(json, 'events_filter') ? undefined : ((json['events_filter'] as Array<any>).map(StreamTransactionsRequestEventFilterItemFromJSON)),
        'order': !exists(json, 'order') ? undefined : json['order'],
        'opt_ins': !exists(json, 'opt_ins') ? undefined : TransactionDetailsOptInsFromJSON(json['opt_ins']),
    };
}

export function StreamTransactionsRequestToJSON(value?: StreamTransactionsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'at_ledger_state': LedgerStateSelectorToJSON(value.at_ledger_state),
        'from_ledger_state': LedgerStateSelectorToJSON(value.from_ledger_state),
        'cursor': value.cursor,
        'limit_per_page': value.limit_per_page,
        'kind_filter': value.kind_filter,
        'manifest_accounts_withdrawn_from_filter': value.manifest_accounts_withdrawn_from_filter,
        'manifest_accounts_deposited_into_filter': value.manifest_accounts_deposited_into_filter,
        'manifest_resources_filter': value.manifest_resources_filter,
        'affected_global_entities_filter': value.affected_global_entities_filter,
        'events_filter': value.events_filter === undefined ? undefined : ((value.events_filter as Array<any>).map(StreamTransactionsRequestEventFilterItemToJSON)),
        'order': value.order,
        'opt_ins': TransactionDetailsOptInsToJSON(value.opt_ins),
    };
}

