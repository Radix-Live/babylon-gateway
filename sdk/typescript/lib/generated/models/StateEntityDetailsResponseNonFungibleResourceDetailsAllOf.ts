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
 * @interface StateEntityDetailsResponseNonFungibleResourceDetailsAllOf
 */
export interface StateEntityDetailsResponseNonFungibleResourceDetailsAllOf {
    /**
     * 
     * @type {ComponentEntityRoleAssignments}
     * @memberof StateEntityDetailsResponseNonFungibleResourceDetailsAllOf
     */
    role_assignments: ComponentEntityRoleAssignments;
    /**
     * 
     * @type {NonFungibleIdType}
     * @memberof StateEntityDetailsResponseNonFungibleResourceDetailsAllOf
     */
    non_fungible_id_type: NonFungibleIdType;
    /**
     * String-encoded decimal representing the amount of a related fungible resource.
     * @type {string}
     * @memberof StateEntityDetailsResponseNonFungibleResourceDetailsAllOf
     */
    total_supply: string;
    /**
     * String-encoded decimal representing the amount of a related fungible resource.
     * @type {string}
     * @memberof StateEntityDetailsResponseNonFungibleResourceDetailsAllOf
     */
    total_minted: string;
    /**
     * String-encoded decimal representing the amount of a related fungible resource.
     * @type {string}
     * @memberof StateEntityDetailsResponseNonFungibleResourceDetailsAllOf
     */
    total_burned: string;
    /**
     * 
     * @type {string}
     * @memberof StateEntityDetailsResponseNonFungibleResourceDetailsAllOf
     */
    type?: StateEntityDetailsResponseNonFungibleResourceDetailsAllOfTypeEnum;
}


/**
 * @export
 */
export const StateEntityDetailsResponseNonFungibleResourceDetailsAllOfTypeEnum = {
    NonFungibleResource: 'NonFungibleResource'
} as const;
export type StateEntityDetailsResponseNonFungibleResourceDetailsAllOfTypeEnum = typeof StateEntityDetailsResponseNonFungibleResourceDetailsAllOfTypeEnum[keyof typeof StateEntityDetailsResponseNonFungibleResourceDetailsAllOfTypeEnum];


/**
 * Check if a given object implements the StateEntityDetailsResponseNonFungibleResourceDetailsAllOf interface.
 */
export function instanceOfStateEntityDetailsResponseNonFungibleResourceDetailsAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "role_assignments" in value;
    isInstance = isInstance && "non_fungible_id_type" in value;
    isInstance = isInstance && "total_supply" in value;
    isInstance = isInstance && "total_minted" in value;
    isInstance = isInstance && "total_burned" in value;

    return isInstance;
}

export function StateEntityDetailsResponseNonFungibleResourceDetailsAllOfFromJSON(json: any): StateEntityDetailsResponseNonFungibleResourceDetailsAllOf {
    return StateEntityDetailsResponseNonFungibleResourceDetailsAllOfFromJSONTyped(json, false);
}

export function StateEntityDetailsResponseNonFungibleResourceDetailsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateEntityDetailsResponseNonFungibleResourceDetailsAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'role_assignments': ComponentEntityRoleAssignmentsFromJSON(json['role_assignments']),
        'non_fungible_id_type': NonFungibleIdTypeFromJSON(json['non_fungible_id_type']),
        'total_supply': json['total_supply'],
        'total_minted': json['total_minted'],
        'total_burned': json['total_burned'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function StateEntityDetailsResponseNonFungibleResourceDetailsAllOfToJSON(value?: StateEntityDetailsResponseNonFungibleResourceDetailsAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'role_assignments': ComponentEntityRoleAssignmentsToJSON(value.role_assignments),
        'non_fungible_id_type': NonFungibleIdTypeToJSON(value.non_fungible_id_type),
        'total_supply': value.total_supply,
        'total_minted': value.total_minted,
        'total_burned': value.total_burned,
        'type': value.type,
    };
}
