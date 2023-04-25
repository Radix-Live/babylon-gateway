/* tslint:disable */
/* eslint-disable */
/**
 * Babylon Gateway API - RCnet V1
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers. For simple use cases, you can typically use the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs-babylon.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Integration and forward compatibility guarantees  We give no guarantees that other endpoints will not change before Babylon mainnet launch, although changes are expected to be minimal. 
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NonFungibleResourcesCollectionItemGloballyAggregatedAllOf
 */
export interface NonFungibleResourcesCollectionItemGloballyAggregatedAllOf {
    /**
     * TBA
     * @type {number}
     * @memberof NonFungibleResourcesCollectionItemGloballyAggregatedAllOf
     */
    amount: number;
    /**
     * TBD
     * @type {number}
     * @memberof NonFungibleResourcesCollectionItemGloballyAggregatedAllOf
     */
    last_updated_at_state_version: number;
    /**
     * 
     * @type {string}
     * @memberof NonFungibleResourcesCollectionItemGloballyAggregatedAllOf
     */
    aggregation_level?: NonFungibleResourcesCollectionItemGloballyAggregatedAllOfAggregationLevelEnum;
}


/**
 * @export
 */
export const NonFungibleResourcesCollectionItemGloballyAggregatedAllOfAggregationLevelEnum = {
    Global: 'Global'
} as const;
export type NonFungibleResourcesCollectionItemGloballyAggregatedAllOfAggregationLevelEnum = typeof NonFungibleResourcesCollectionItemGloballyAggregatedAllOfAggregationLevelEnum[keyof typeof NonFungibleResourcesCollectionItemGloballyAggregatedAllOfAggregationLevelEnum];


/**
 * Check if a given object implements the NonFungibleResourcesCollectionItemGloballyAggregatedAllOf interface.
 */
export function instanceOfNonFungibleResourcesCollectionItemGloballyAggregatedAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "last_updated_at_state_version" in value;

    return isInstance;
}

export function NonFungibleResourcesCollectionItemGloballyAggregatedAllOfFromJSON(json: any): NonFungibleResourcesCollectionItemGloballyAggregatedAllOf {
    return NonFungibleResourcesCollectionItemGloballyAggregatedAllOfFromJSONTyped(json, false);
}

export function NonFungibleResourcesCollectionItemGloballyAggregatedAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): NonFungibleResourcesCollectionItemGloballyAggregatedAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'last_updated_at_state_version': json['last_updated_at_state_version'],
        'aggregation_level': !exists(json, 'aggregation_level') ? undefined : json['aggregation_level'],
    };
}

export function NonFungibleResourcesCollectionItemGloballyAggregatedAllOfToJSON(value?: NonFungibleResourcesCollectionItemGloballyAggregatedAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'last_updated_at_state_version': value.last_updated_at_state_version,
        'aggregation_level': value.aggregation_level,
    };
}

