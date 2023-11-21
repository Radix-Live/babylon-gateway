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
/**
 * 
 * @export
 * @interface StateEntityDetailsResponsePackageDetailsSchemaItem
 */
export interface StateEntityDetailsResponsePackageDetailsSchemaItem {
    /**
     * Hex-encoded binary blob.
     * @type {string}
     * @memberof StateEntityDetailsResponsePackageDetailsSchemaItem
     */
    schema_hash_hex: string;
    /**
     * Hex-encoded binary blob.
     * @type {string}
     * @memberof StateEntityDetailsResponsePackageDetailsSchemaItem
     */
    schema_hex: string;
}

/**
 * Check if a given object implements the StateEntityDetailsResponsePackageDetailsSchemaItem interface.
 */
export function instanceOfStateEntityDetailsResponsePackageDetailsSchemaItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "schema_hash_hex" in value;
    isInstance = isInstance && "schema_hex" in value;

    return isInstance;
}

export function StateEntityDetailsResponsePackageDetailsSchemaItemFromJSON(json: any): StateEntityDetailsResponsePackageDetailsSchemaItem {
    return StateEntityDetailsResponsePackageDetailsSchemaItemFromJSONTyped(json, false);
}

export function StateEntityDetailsResponsePackageDetailsSchemaItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateEntityDetailsResponsePackageDetailsSchemaItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema_hash_hex': json['schema_hash_hex'],
        'schema_hex': json['schema_hex'],
    };
}

export function StateEntityDetailsResponsePackageDetailsSchemaItemToJSON(value?: StateEntityDetailsResponsePackageDetailsSchemaItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema_hash_hex': value.schema_hash_hex,
        'schema_hex': value.schema_hex,
    };
}

