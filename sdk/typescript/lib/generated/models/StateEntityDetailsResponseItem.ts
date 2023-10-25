/* tslint:disable */
/* eslint-disable */
/**
 * Radix Gateway API - Babylon
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers, and for light queries from front-end dApps. For exchange/asset integrations, back-end dApp integrations, or simple use cases, you should consider using the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Migration guide  Please see [the latest release notes](https://github.com/radixdlt/babylon-gateway/releases).  ## Integration and forward compatibility guarantees  All responses may have additional fields added at any release, so clients are advised to use JSON parsers which ignore unknown fields on JSON objects.  When the Radix protocol is updated, new functionality may be added, and so discriminated unions returned by the API may need to be updated to have new variants added, corresponding to the updated data. Clients may need to update in advance to be able to handle these new variants when a protocol update comes out.  On the very rare occasions we need to make breaking changes to the API, these will be warned in advance with deprecation notices on previous versions. These deprecation notices will include a safe migration path. Deprecation notes or breaking changes will be flagged clearly in release notes for new versions of the Gateway.  The Gateway DB schema is not subject to any compatibility guarantees, and may be changed at any release. DB changes will be flagged in the release notes so clients doing custom DB integrations can prepare. 
 *
 * The version of the OpenAPI document: v1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EntityMetadataCollection } from './EntityMetadataCollection';
import {
    EntityMetadataCollectionFromJSON,
    EntityMetadataCollectionFromJSONTyped,
    EntityMetadataCollectionToJSON,
} from './EntityMetadataCollection';
import type { FungibleResourcesCollection } from './FungibleResourcesCollection';
import {
    FungibleResourcesCollectionFromJSON,
    FungibleResourcesCollectionFromJSONTyped,
    FungibleResourcesCollectionToJSON,
} from './FungibleResourcesCollection';
import type { NonFungibleResourcesCollection } from './NonFungibleResourcesCollection';
import {
    NonFungibleResourcesCollectionFromJSON,
    NonFungibleResourcesCollectionFromJSONTyped,
    NonFungibleResourcesCollectionToJSON,
} from './NonFungibleResourcesCollection';
import type { StateEntityDetailsResponseItemAncestorIdentities } from './StateEntityDetailsResponseItemAncestorIdentities';
import {
    StateEntityDetailsResponseItemAncestorIdentitiesFromJSON,
    StateEntityDetailsResponseItemAncestorIdentitiesFromJSONTyped,
    StateEntityDetailsResponseItemAncestorIdentitiesToJSON,
} from './StateEntityDetailsResponseItemAncestorIdentities';
import type { StateEntityDetailsResponseItemDetails } from './StateEntityDetailsResponseItemDetails';
import {
    StateEntityDetailsResponseItemDetailsFromJSON,
    StateEntityDetailsResponseItemDetailsFromJSONTyped,
    StateEntityDetailsResponseItemDetailsToJSON,
} from './StateEntityDetailsResponseItemDetails';

/**
 * 
 * @export
 * @interface StateEntityDetailsResponseItem
 */
export interface StateEntityDetailsResponseItem {
    /**
     * Bech32m-encoded human readable version of the address.
     * @type {string}
     * @memberof StateEntityDetailsResponseItem
     */
    address: string;
    /**
     * 
     * @type {FungibleResourcesCollection}
     * @memberof StateEntityDetailsResponseItem
     */
    fungible_resources?: FungibleResourcesCollection;
    /**
     * 
     * @type {NonFungibleResourcesCollection}
     * @memberof StateEntityDetailsResponseItem
     */
    non_fungible_resources?: NonFungibleResourcesCollection;
    /**
     * 
     * @type {StateEntityDetailsResponseItemAncestorIdentities}
     * @memberof StateEntityDetailsResponseItem
     */
    ancestor_identities?: StateEntityDetailsResponseItemAncestorIdentities;
    /**
     * 
     * @type {EntityMetadataCollection}
     * @memberof StateEntityDetailsResponseItem
     */
    metadata: EntityMetadataCollection;
    /**
     * 
     * @type {EntityMetadataCollection}
     * @memberof StateEntityDetailsResponseItem
     */
    explicit_metadata?: EntityMetadataCollection;
    /**
     * 
     * @type {StateEntityDetailsResponseItemDetails}
     * @memberof StateEntityDetailsResponseItem
     */
    details?: StateEntityDetailsResponseItemDetails;
}

/**
 * Check if a given object implements the StateEntityDetailsResponseItem interface.
 */
export function instanceOfStateEntityDetailsResponseItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "metadata" in value;

    return isInstance;
}

export function StateEntityDetailsResponseItemFromJSON(json: any): StateEntityDetailsResponseItem {
    return StateEntityDetailsResponseItemFromJSONTyped(json, false);
}

export function StateEntityDetailsResponseItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateEntityDetailsResponseItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'fungible_resources': !exists(json, 'fungible_resources') ? undefined : FungibleResourcesCollectionFromJSON(json['fungible_resources']),
        'non_fungible_resources': !exists(json, 'non_fungible_resources') ? undefined : NonFungibleResourcesCollectionFromJSON(json['non_fungible_resources']),
        'ancestor_identities': !exists(json, 'ancestor_identities') ? undefined : StateEntityDetailsResponseItemAncestorIdentitiesFromJSON(json['ancestor_identities']),
        'metadata': EntityMetadataCollectionFromJSON(json['metadata']),
        'explicit_metadata': !exists(json, 'explicit_metadata') ? undefined : EntityMetadataCollectionFromJSON(json['explicit_metadata']),
        'details': !exists(json, 'details') ? undefined : StateEntityDetailsResponseItemDetailsFromJSON(json['details']),
    };
}

export function StateEntityDetailsResponseItemToJSON(value?: StateEntityDetailsResponseItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'fungible_resources': FungibleResourcesCollectionToJSON(value.fungible_resources),
        'non_fungible_resources': NonFungibleResourcesCollectionToJSON(value.non_fungible_resources),
        'ancestor_identities': StateEntityDetailsResponseItemAncestorIdentitiesToJSON(value.ancestor_identities),
        'metadata': EntityMetadataCollectionToJSON(value.metadata),
        'explicit_metadata': EntityMetadataCollectionToJSON(value.explicit_metadata),
        'details': StateEntityDetailsResponseItemDetailsToJSON(value.details),
    };
}

