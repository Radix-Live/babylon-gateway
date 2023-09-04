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
import type { MetadataNonFungibleGlobalIdArrayValueAllOfValues } from './MetadataNonFungibleGlobalIdArrayValueAllOfValues';
import {
    MetadataNonFungibleGlobalIdArrayValueAllOfValuesFromJSON,
    MetadataNonFungibleGlobalIdArrayValueAllOfValuesFromJSONTyped,
    MetadataNonFungibleGlobalIdArrayValueAllOfValuesToJSON,
} from './MetadataNonFungibleGlobalIdArrayValueAllOfValues';

/**
 * 
 * @export
 * @interface MetadataNonFungibleGlobalIdArrayValueAllOf
 */
export interface MetadataNonFungibleGlobalIdArrayValueAllOf {
    /**
     * 
     * @type {Array<MetadataNonFungibleGlobalIdArrayValueAllOfValues>}
     * @memberof MetadataNonFungibleGlobalIdArrayValueAllOf
     */
    values: Array<MetadataNonFungibleGlobalIdArrayValueAllOfValues>;
    /**
     * 
     * @type {string}
     * @memberof MetadataNonFungibleGlobalIdArrayValueAllOf
     */
    type?: MetadataNonFungibleGlobalIdArrayValueAllOfTypeEnum;
}


/**
 * @export
 */
export const MetadataNonFungibleGlobalIdArrayValueAllOfTypeEnum = {
    NonFungibleGlobalIdArray: 'NonFungibleGlobalIdArray'
} as const;
export type MetadataNonFungibleGlobalIdArrayValueAllOfTypeEnum = typeof MetadataNonFungibleGlobalIdArrayValueAllOfTypeEnum[keyof typeof MetadataNonFungibleGlobalIdArrayValueAllOfTypeEnum];


/**
 * Check if a given object implements the MetadataNonFungibleGlobalIdArrayValueAllOf interface.
 */
export function instanceOfMetadataNonFungibleGlobalIdArrayValueAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "values" in value;

    return isInstance;
}

export function MetadataNonFungibleGlobalIdArrayValueAllOfFromJSON(json: any): MetadataNonFungibleGlobalIdArrayValueAllOf {
    return MetadataNonFungibleGlobalIdArrayValueAllOfFromJSONTyped(json, false);
}

export function MetadataNonFungibleGlobalIdArrayValueAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataNonFungibleGlobalIdArrayValueAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'values': ((json['values'] as Array<any>).map(MetadataNonFungibleGlobalIdArrayValueAllOfValuesFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function MetadataNonFungibleGlobalIdArrayValueAllOfToJSON(value?: MetadataNonFungibleGlobalIdArrayValueAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'values': ((value.values as Array<any>).map(MetadataNonFungibleGlobalIdArrayValueAllOfValuesToJSON)),
        'type': value.type,
    };
}
