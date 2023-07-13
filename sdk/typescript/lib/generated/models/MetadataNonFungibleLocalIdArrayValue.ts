/* tslint:disable */
/* eslint-disable */
/**
 * Babylon Gateway API - RCnet V2
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers. For simple use cases, you can typically use the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs-babylon.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Integration and forward compatibility guarantees  We give no guarantees that other endpoints will not change before Babylon mainnet launch, although changes are expected to be minimal. 
 *
 * The version of the OpenAPI document: 0.4.0
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
 * @interface MetadataNonFungibleLocalIdArrayValue
 */
export interface MetadataNonFungibleLocalIdArrayValue {
    /**
     * 
     * @type {string}
     * @memberof MetadataNonFungibleLocalIdArrayValue
     */
    type: MetadataNonFungibleLocalIdArrayValueTypeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetadataNonFungibleLocalIdArrayValue
     */
    values: Array<string>;
}


/**
 * @export
 */
export const MetadataNonFungibleLocalIdArrayValueTypeEnum = {
    NonFungibleLocalIdArray: 'NonFungibleLocalIdArray'
} as const;
export type MetadataNonFungibleLocalIdArrayValueTypeEnum = typeof MetadataNonFungibleLocalIdArrayValueTypeEnum[keyof typeof MetadataNonFungibleLocalIdArrayValueTypeEnum];


/**
 * Check if a given object implements the MetadataNonFungibleLocalIdArrayValue interface.
 */
export function instanceOfMetadataNonFungibleLocalIdArrayValue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "values" in value;

    return isInstance;
}

export function MetadataNonFungibleLocalIdArrayValueFromJSON(json: any): MetadataNonFungibleLocalIdArrayValue {
    return MetadataNonFungibleLocalIdArrayValueFromJSONTyped(json, false);
}

export function MetadataNonFungibleLocalIdArrayValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataNonFungibleLocalIdArrayValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'values': json['values'],
    };
}

export function MetadataNonFungibleLocalIdArrayValueToJSON(value?: MetadataNonFungibleLocalIdArrayValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'values': value.values,
    };
}

