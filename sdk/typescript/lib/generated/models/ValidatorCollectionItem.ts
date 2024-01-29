/* tslint:disable */
/* eslint-disable */
/**
 * Radix Gateway API - Babylon
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers, and for light queries from front-end dApps. For exchange/asset integrations, back-end dApp integrations, or simple use cases, you should consider using the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Migration guide  Please see [the latest release notes](https://github.com/radixdlt/babylon-gateway/releases).  ## Integration and forward compatibility guarantees  All responses may have additional fields added at any release, so clients are advised to use JSON parsers which ignore unknown fields on JSON objects.  When the Radix protocol is updated, new functionality may be added, and so discriminated unions returned by the API may need to be updated to have new variants added, corresponding to the updated data. Clients may need to update in advance to be able to handle these new variants when a protocol update comes out.  On the very rare occasions we need to make breaking changes to the API, these will be warned in advance with deprecation notices on previous versions. These deprecation notices will include a safe migration path. Deprecation notes or breaking changes will be flagged clearly in release notes for new versions of the Gateway.  The Gateway DB schema is not subject to any compatibility guarantees, and may be changed at any release. DB changes will be flagged in the release notes so clients doing custom DB integrations can prepare. 
 *
 * The version of the OpenAPI document: v1.3.0
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
import type { ValidatorCollectionItemActiveInEpoch } from './ValidatorCollectionItemActiveInEpoch';
import {
    ValidatorCollectionItemActiveInEpochFromJSON,
    ValidatorCollectionItemActiveInEpochFromJSONTyped,
    ValidatorCollectionItemActiveInEpochToJSON,
} from './ValidatorCollectionItemActiveInEpoch';
import type { ValidatorCollectionItemEffectiveFeeFactor } from './ValidatorCollectionItemEffectiveFeeFactor';
import {
    ValidatorCollectionItemEffectiveFeeFactorFromJSON,
    ValidatorCollectionItemEffectiveFeeFactorFromJSONTyped,
    ValidatorCollectionItemEffectiveFeeFactorToJSON,
} from './ValidatorCollectionItemEffectiveFeeFactor';
import type { ValidatorVaultItem } from './ValidatorVaultItem';
import {
    ValidatorVaultItemFromJSON,
    ValidatorVaultItemFromJSONTyped,
    ValidatorVaultItemToJSON,
} from './ValidatorVaultItem';

/**
 * 
 * @export
 * @interface ValidatorCollectionItem
 */
export interface ValidatorCollectionItem {
    /**
     * Bech32m-encoded human readable version of the address.
     * @type {string}
     * @memberof ValidatorCollectionItem
     */
    address: string;
    /**
     * 
     * @type {ValidatorVaultItem}
     * @memberof ValidatorCollectionItem
     */
    stake_vault: ValidatorVaultItem;
    /**
     * 
     * @type {ValidatorVaultItem}
     * @memberof ValidatorCollectionItem
     */
    pending_xrd_withdraw_vault: ValidatorVaultItem;
    /**
     * 
     * @type {ValidatorVaultItem}
     * @memberof ValidatorCollectionItem
     */
    locked_owner_stake_unit_vault: ValidatorVaultItem;
    /**
     * 
     * @type {ValidatorVaultItem}
     * @memberof ValidatorCollectionItem
     */
    pending_owner_stake_unit_unlock_vault: ValidatorVaultItem;
    /**
     * Validator inner state representation.
     * This type is defined in the Core API as `ValidatorFieldStateValue`. See the Core API documentation for more details.
     * @type {object}
     * @memberof ValidatorCollectionItem
     */
    state: object | null;
    /**
     * 
     * @type {ValidatorCollectionItemActiveInEpoch}
     * @memberof ValidatorCollectionItem
     */
    active_in_epoch?: ValidatorCollectionItemActiveInEpoch;
    /**
     * 
     * @type {EntityMetadataCollection}
     * @memberof ValidatorCollectionItem
     */
    metadata: EntityMetadataCollection;
    /**
     * 
     * @type {ValidatorCollectionItemEffectiveFeeFactor}
     * @memberof ValidatorCollectionItem
     */
    effective_fee_factor: ValidatorCollectionItemEffectiveFeeFactor;
}

/**
 * Check if a given object implements the ValidatorCollectionItem interface.
 */
export function instanceOfValidatorCollectionItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "stake_vault" in value;
    isInstance = isInstance && "pending_xrd_withdraw_vault" in value;
    isInstance = isInstance && "locked_owner_stake_unit_vault" in value;
    isInstance = isInstance && "pending_owner_stake_unit_unlock_vault" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "effective_fee_factor" in value;

    return isInstance;
}

export function ValidatorCollectionItemFromJSON(json: any): ValidatorCollectionItem {
    return ValidatorCollectionItemFromJSONTyped(json, false);
}

export function ValidatorCollectionItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorCollectionItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'stake_vault': ValidatorVaultItemFromJSON(json['stake_vault']),
        'pending_xrd_withdraw_vault': ValidatorVaultItemFromJSON(json['pending_xrd_withdraw_vault']),
        'locked_owner_stake_unit_vault': ValidatorVaultItemFromJSON(json['locked_owner_stake_unit_vault']),
        'pending_owner_stake_unit_unlock_vault': ValidatorVaultItemFromJSON(json['pending_owner_stake_unit_unlock_vault']),
        'state': json['state'],
        'active_in_epoch': !exists(json, 'active_in_epoch') ? undefined : ValidatorCollectionItemActiveInEpochFromJSON(json['active_in_epoch']),
        'metadata': EntityMetadataCollectionFromJSON(json['metadata']),
        'effective_fee_factor': ValidatorCollectionItemEffectiveFeeFactorFromJSON(json['effective_fee_factor']),
    };
}

export function ValidatorCollectionItemToJSON(value?: ValidatorCollectionItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'stake_vault': ValidatorVaultItemToJSON(value.stake_vault),
        'pending_xrd_withdraw_vault': ValidatorVaultItemToJSON(value.pending_xrd_withdraw_vault),
        'locked_owner_stake_unit_vault': ValidatorVaultItemToJSON(value.locked_owner_stake_unit_vault),
        'pending_owner_stake_unit_unlock_vault': ValidatorVaultItemToJSON(value.pending_owner_stake_unit_unlock_vault),
        'state': value.state,
        'active_in_epoch': ValidatorCollectionItemActiveInEpochToJSON(value.active_in_epoch),
        'metadata': EntityMetadataCollectionToJSON(value.metadata),
        'effective_fee_factor': ValidatorCollectionItemEffectiveFeeFactorToJSON(value.effective_fee_factor),
    };
}

