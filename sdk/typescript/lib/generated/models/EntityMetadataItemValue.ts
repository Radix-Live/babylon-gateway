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
import type { MetadataTypedValue } from './MetadataTypedValue';
import {
    MetadataTypedValueFromJSON,
    MetadataTypedValueFromJSONTyped,
    MetadataTypedValueToJSON,
} from './MetadataTypedValue';

/**
 * 
 * @export
 * @interface EntityMetadataItemValue
 */
export interface EntityMetadataItemValue {
    /**
     * 
     * @type {string}
     * @memberof EntityMetadataItemValue
     */
    raw_hex: string;
    /**
     * 
     * @type {object}
     * @memberof EntityMetadataItemValue
     */
    programmatic_json: object;
    /**
     * 
     * @type {MetadataTypedValue}
     * @memberof EntityMetadataItemValue
     */
    typed: MetadataTypedValue;
}

/**
 * Check if a given object implements the EntityMetadataItemValue interface.
 */
export function instanceOfEntityMetadataItemValue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "raw_hex" in value;
    isInstance = isInstance && "programmatic_json" in value;
    isInstance = isInstance && "typed" in value;

    return isInstance;
}

export function EntityMetadataItemValueFromJSON(json: any): EntityMetadataItemValue {
    return EntityMetadataItemValueFromJSONTyped(json, false);
}

export function EntityMetadataItemValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityMetadataItemValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'raw_hex': json['raw_hex'],
        'programmatic_json': json['programmatic_json'],
        'typed': MetadataTypedValueFromJSON(json['typed']),
    };
}

export function EntityMetadataItemValueToJSON(value?: EntityMetadataItemValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'raw_hex': value.raw_hex,
        'programmatic_json': value.programmatic_json,
        'typed': MetadataTypedValueToJSON(value.typed),
    };
}
