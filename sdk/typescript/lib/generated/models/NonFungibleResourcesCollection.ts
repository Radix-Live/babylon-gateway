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
import type { NonFungibleResourcesCollectionItem } from './NonFungibleResourcesCollectionItem';
import {
    NonFungibleResourcesCollectionItemFromJSON,
    NonFungibleResourcesCollectionItemFromJSONTyped,
    NonFungibleResourcesCollectionItemToJSON,
} from './NonFungibleResourcesCollectionItem';

/**
 * Non-fungible resources collection.
 * @export
 * @interface NonFungibleResourcesCollection
 */
export interface NonFungibleResourcesCollection {
    /**
     * Total number of items in underlying collection, fragment of which is available in `items` collection.
     * @type {number}
     * @memberof NonFungibleResourcesCollection
     */
    total_count?: number | null;
    /**
     * If specified, contains a cursor to query next page of the `items` collection.
     * @type {string}
     * @memberof NonFungibleResourcesCollection
     */
    next_cursor?: string | null;
    /**
     * 
     * @type {Array<NonFungibleResourcesCollectionItem>}
     * @memberof NonFungibleResourcesCollection
     */
    items: Array<NonFungibleResourcesCollectionItem>;
}

/**
 * Check if a given object implements the NonFungibleResourcesCollection interface.
 */
export function instanceOfNonFungibleResourcesCollection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function NonFungibleResourcesCollectionFromJSON(json: any): NonFungibleResourcesCollection {
    return NonFungibleResourcesCollectionFromJSONTyped(json, false);
}

export function NonFungibleResourcesCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): NonFungibleResourcesCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total_count': !exists(json, 'total_count') ? undefined : json['total_count'],
        'next_cursor': !exists(json, 'next_cursor') ? undefined : json['next_cursor'],
        'items': ((json['items'] as Array<any>).map(NonFungibleResourcesCollectionItemFromJSON)),
    };
}

export function NonFungibleResourcesCollectionToJSON(value?: NonFungibleResourcesCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total_count': value.total_count,
        'next_cursor': value.next_cursor,
        'items': ((value.items as Array<any>).map(NonFungibleResourcesCollectionItemToJSON)),
    };
}
