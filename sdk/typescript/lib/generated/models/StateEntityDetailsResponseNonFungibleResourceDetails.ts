/* tslint:disable */
/* eslint-disable */
/**
 * Radix Gateway API - Babylon
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers, and for light queries from front-end dApps. For exchange/asset integrations, back-end dApp integrations, or simple use cases, you should consider using the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Migration guide  Please see [the latest release notes](https://github.com/radixdlt/babylon-gateway/releases).  ## Integration and forward compatibility guarantees  All responses may have additional fields added at any release, so clients are advised to use JSON parsers which ignore unknown fields on JSON objects.  When the Radix protocol is updated, new functionality may be added, and so discriminated unions returned by the API may need to be updated to have new variants added, corresponding to the updated data. Clients may need to update in advance to be able to handle these new variants when a protocol update comes out.  On the very rare occasions we need to make breaking changes to the API, these will be warned in advance with deprecation notices on previous versions. These deprecation notices will include a safe migration path. Deprecation notes or breaking changes will be flagged clearly in release notes for new versions of the Gateway.  The Gateway DB schema is not subject to any compatibility guarantees, and may be changed at any release. DB changes will be flagged in the release notes so clients doing custom DB integrations can prepare. 
 *
 * The version of the OpenAPI document: v1.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ComponentEntityRoleAssignments } from './ComponentEntityRoleAssignments';
import {
    ComponentEntityRoleAssignmentsFromJSON,
    ComponentEntityRoleAssignmentsFromJSONTyped,
    ComponentEntityRoleAssignmentsToJSON,
} from './ComponentEntityRoleAssignments';
import type { NonFungibleIdType } from './NonFungibleIdType';
import {
    NonFungibleIdTypeFromJSON,
    NonFungibleIdTypeFromJSONTyped,
    NonFungibleIdTypeToJSON,
} from './NonFungibleIdType';

/**
 * 
 * @export
 * @interface StateEntityDetailsResponseNonFungibleResourceDetails
 */
export interface StateEntityDetailsResponseNonFungibleResourceDetails {
    /**
     * 
     * @type {string}
     * @memberof StateEntityDetailsResponseNonFungibleResourceDetails
     */
    type: StateEntityDetailsResponseNonFungibleResourceDetailsTypeEnum;
    /**
     * 
     * @type {ComponentEntityRoleAssignments}
     * @memberof StateEntityDetailsResponseNonFungibleResourceDetails
     */
    role_assignments: ComponentEntityRoleAssignments;
    /**
     * 
     * @type {NonFungibleIdType}
     * @memberof StateEntityDetailsResponseNonFungibleResourceDetails
     */
    non_fungible_id_type: NonFungibleIdType;
    /**
     * String-encoded decimal representing the amount of a related fungible resource.
     * @type {string}
     * @memberof StateEntityDetailsResponseNonFungibleResourceDetails
     */
    total_supply: string;
    /**
     * String-encoded decimal representing the amount of a related fungible resource.
     * @type {string}
     * @memberof StateEntityDetailsResponseNonFungibleResourceDetails
     */
    total_minted: string;
    /**
     * String-encoded decimal representing the amount of a related fungible resource.
     * @type {string}
     * @memberof StateEntityDetailsResponseNonFungibleResourceDetails
     */
    total_burned: string;
}


/**
 * @export
 */
export const StateEntityDetailsResponseNonFungibleResourceDetailsTypeEnum = {
    NonFungibleResource: 'NonFungibleResource'
} as const;
export type StateEntityDetailsResponseNonFungibleResourceDetailsTypeEnum = typeof StateEntityDetailsResponseNonFungibleResourceDetailsTypeEnum[keyof typeof StateEntityDetailsResponseNonFungibleResourceDetailsTypeEnum];


/**
 * Check if a given object implements the StateEntityDetailsResponseNonFungibleResourceDetails interface.
 */
export function instanceOfStateEntityDetailsResponseNonFungibleResourceDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "role_assignments" in value;
    isInstance = isInstance && "non_fungible_id_type" in value;
    isInstance = isInstance && "total_supply" in value;
    isInstance = isInstance && "total_minted" in value;
    isInstance = isInstance && "total_burned" in value;

    return isInstance;
}

export function StateEntityDetailsResponseNonFungibleResourceDetailsFromJSON(json: any): StateEntityDetailsResponseNonFungibleResourceDetails {
    return StateEntityDetailsResponseNonFungibleResourceDetailsFromJSONTyped(json, false);
}

export function StateEntityDetailsResponseNonFungibleResourceDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateEntityDetailsResponseNonFungibleResourceDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'role_assignments': ComponentEntityRoleAssignmentsFromJSON(json['role_assignments']),
        'non_fungible_id_type': NonFungibleIdTypeFromJSON(json['non_fungible_id_type']),
        'total_supply': json['total_supply'],
        'total_minted': json['total_minted'],
        'total_burned': json['total_burned'],
    };
}

export function StateEntityDetailsResponseNonFungibleResourceDetailsToJSON(value?: StateEntityDetailsResponseNonFungibleResourceDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'role_assignments': ComponentEntityRoleAssignmentsToJSON(value.role_assignments),
        'non_fungible_id_type': NonFungibleIdTypeToJSON(value.non_fungible_id_type),
        'total_supply': value.total_supply,
        'total_minted': value.total_minted,
        'total_burned': value.total_burned,
    };
}

