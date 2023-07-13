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
 * @interface MetadataDecimalValueAllOf
 */
export interface MetadataDecimalValueAllOf {
    /**
     * 
     * @type {string}
     * @memberof MetadataDecimalValueAllOf
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof MetadataDecimalValueAllOf
     */
    type?: MetadataDecimalValueAllOfTypeEnum;
}


/**
 * @export
 */
export const MetadataDecimalValueAllOfTypeEnum = {
    Decimal: 'Decimal'
} as const;
export type MetadataDecimalValueAllOfTypeEnum = typeof MetadataDecimalValueAllOfTypeEnum[keyof typeof MetadataDecimalValueAllOfTypeEnum];


/**
 * Check if a given object implements the MetadataDecimalValueAllOf interface.
 */
export function instanceOfMetadataDecimalValueAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function MetadataDecimalValueAllOfFromJSON(json: any): MetadataDecimalValueAllOf {
    return MetadataDecimalValueAllOfFromJSONTyped(json, false);
}

export function MetadataDecimalValueAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataDecimalValueAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function MetadataDecimalValueAllOfToJSON(value?: MetadataDecimalValueAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'type': value.type,
    };
}

