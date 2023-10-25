/* tslint:disable */
/* eslint-disable */
/**
 * Radix Gateway API - Babylon
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers, and for light queries from front-end dApps. For exchange/asset integrations, back-end dApp integrations, or simple use cases, you should consider using the the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs-babylon.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Migration guide  Please see [the latest release notes](https://github.com/radixdlt/babylon-gateway/releases).  ## Integration and forward compatibility guarantees  All responses may have additional fields added at any release, so clients are advised to use JSON parsers which ignore unknown fields on JSON objects.  When the Radix protocol is updated, new functionality may be added, and so discriminated unions returned by the API may need to be updated to have new variants added, corresponding to the updated data. Clients may need to update in advance to be able to handle these new variants when a protocol update comes out.  On the very rare occasions we need to make breaking changes to the API, these will be warned in advance with deprecation notices on previous versions. These deprecation notices will include a safe migration path. Deprecation notes or breaking changes will be flagged clearly in release notes for new versions of the Gateway.  The Gateway DB schema is not subject to any compatibility guarantees, and may be changed at any release. DB changes will be flagged in the release notes so clients doing custom DB integrations can prepare. 
 *
 * The version of the OpenAPI document: v1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EntityMetadataItemValue } from './EntityMetadataItemValue';
import {
    EntityMetadataItemValueFromJSON,
    EntityMetadataItemValueFromJSONTyped,
    EntityMetadataItemValueToJSON,
} from './EntityMetadataItemValue';

/**
 * Entity metadata key-value pair.
 * @export
 * @interface EntityMetadataItem
 */
export interface EntityMetadataItem {
    /**
     * Entity metadata key.
     * @type {string}
     * @memberof EntityMetadataItem
     */
    key: string;
    /**
     * 
     * @type {EntityMetadataItemValue}
     * @memberof EntityMetadataItem
     */
    value: EntityMetadataItemValue;
    /**
     * 
     * @type {boolean}
     * @memberof EntityMetadataItem
     */
    is_locked: boolean;
    /**
     * The most recent state version underlying object was modified at.
     * @type {number}
     * @memberof EntityMetadataItem
     */
    last_updated_at_state_version: number;
}

/**
 * Check if a given object implements the EntityMetadataItem interface.
 */
export function instanceOfEntityMetadataItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "is_locked" in value;
    isInstance = isInstance && "last_updated_at_state_version" in value;

    return isInstance;
}

export function EntityMetadataItemFromJSON(json: any): EntityMetadataItem {
    return EntityMetadataItemFromJSONTyped(json, false);
}

export function EntityMetadataItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityMetadataItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': EntityMetadataItemValueFromJSON(json['value']),
        'is_locked': json['is_locked'],
        'last_updated_at_state_version': json['last_updated_at_state_version'],
    };
}

export function EntityMetadataItemToJSON(value?: EntityMetadataItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'value': EntityMetadataItemValueToJSON(value.value),
        'is_locked': value.is_locked,
        'last_updated_at_state_version': value.last_updated_at_state_version,
    };
}

