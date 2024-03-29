/* tslint:disable */
/* eslint-disable */
/**
 * Radix Gateway API - Babylon
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers, and for light queries from front-end dApps. For exchange/asset integrations, back-end dApp integrations, or simple use cases, you should consider using the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Migration guide  Please see [the latest release notes](https://github.com/radixdlt/babylon-gateway/releases).  ## Integration and forward compatibility guarantees  All responses may have additional fields added at any release, so clients are advised to use JSON parsers which ignore unknown fields on JSON objects.  When the Radix protocol is updated, new functionality may be added, and so discriminated unions returned by the API may need to be updated to have new variants added, corresponding to the updated data. Clients may need to update in advance to be able to handle these new variants when a protocol update comes out.  On the very rare occasions we need to make breaking changes to the API, these will be warned in advance with deprecation notices on previous versions. These deprecation notices will include a safe migration path. Deprecation notes or breaking changes will be flagged clearly in release notes for new versions of the Gateway.  The Gateway DB schema is not subject to any compatibility guarantees, and may be changed at any release. DB changes will be flagged in the release notes so clients doing custom DB integrations can prepare. 
 *
 * The version of the OpenAPI document: v1.5.0
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
 * @interface PublicKeyEddsaEd25519AllOf
 */
export interface PublicKeyEddsaEd25519AllOf {
    /**
     * The hex-encoded compressed EdDSA Ed25519 public key (32 bytes)
     * @type {string}
     * @memberof PublicKeyEddsaEd25519AllOf
     */
    key_hex: string;
    /**
     * 
     * @type {string}
     * @memberof PublicKeyEddsaEd25519AllOf
     */
    key_type?: PublicKeyEddsaEd25519AllOfKeyTypeEnum;
}


/**
 * @export
 */
export const PublicKeyEddsaEd25519AllOfKeyTypeEnum = {
    EddsaEd25519: 'EddsaEd25519'
} as const;
export type PublicKeyEddsaEd25519AllOfKeyTypeEnum = typeof PublicKeyEddsaEd25519AllOfKeyTypeEnum[keyof typeof PublicKeyEddsaEd25519AllOfKeyTypeEnum];


/**
 * Check if a given object implements the PublicKeyEddsaEd25519AllOf interface.
 */
export function instanceOfPublicKeyEddsaEd25519AllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key_hex" in value;

    return isInstance;
}

export function PublicKeyEddsaEd25519AllOfFromJSON(json: any): PublicKeyEddsaEd25519AllOf {
    return PublicKeyEddsaEd25519AllOfFromJSONTyped(json, false);
}

export function PublicKeyEddsaEd25519AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicKeyEddsaEd25519AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key_hex': json['key_hex'],
        'key_type': !exists(json, 'key_type') ? undefined : json['key_type'],
    };
}

export function PublicKeyEddsaEd25519AllOfToJSON(value?: PublicKeyEddsaEd25519AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key_hex': value.key_hex,
        'key_type': value.key_type,
    };
}

