/* tslint:disable */
/* eslint-disable */
/**
 * Radix Gateway API - Babylon
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers, and for light queries from front-end dApps. For exchange/asset integrations, back-end dApp integrations, or simple use cases, you should consider using the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Migration guide  Please see [the latest release notes](https://github.com/radixdlt/babylon-gateway/releases).  ## Integration and forward compatibility guarantees  All responses may have additional fields added at any release, so clients are advised to use JSON parsers which ignore unknown fields on JSON objects.  When the Radix protocol is updated, new functionality may be added, and so discriminated unions returned by the API may need to be updated to have new variants added, corresponding to the updated data. Clients may need to update in advance to be able to handle these new variants when a protocol update comes out.  On the very rare occasions we need to make breaking changes to the API, these will be warned in advance with deprecation notices on previous versions. These deprecation notices will include a safe migration path. Deprecation notes or breaking changes will be flagged clearly in release notes for new versions of the Gateway.  The Gateway DB schema is not subject to any compatibility guarantees, and may be changed at any release. DB changes will be flagged in the release notes so clients doing custom DB integrations can prepare. 
 *
 * The version of the OpenAPI document: v1.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { LedgerState } from './LedgerState';
import {
    LedgerStateFromJSON,
    LedgerStateFromJSONTyped,
    LedgerStateToJSON,
} from './LedgerState';
import type { StateNonFungibleLocationResponseItem } from './StateNonFungibleLocationResponseItem';
import {
    StateNonFungibleLocationResponseItemFromJSON,
    StateNonFungibleLocationResponseItemFromJSONTyped,
    StateNonFungibleLocationResponseItemToJSON,
} from './StateNonFungibleLocationResponseItem';

/**
 * 
 * @export
 * @interface StateNonFungibleLocationResponse
 */
export interface StateNonFungibleLocationResponse {
    /**
     * 
     * @type {LedgerState}
     * @memberof StateNonFungibleLocationResponse
     */
    ledger_state: LedgerState;
    /**
     * Bech32m-encoded human readable version of the address.
     * @type {string}
     * @memberof StateNonFungibleLocationResponse
     */
    resource_address: string;
    /**
     * 
     * @type {Array<StateNonFungibleLocationResponseItem>}
     * @memberof StateNonFungibleLocationResponse
     */
    non_fungible_ids: Array<StateNonFungibleLocationResponseItem>;
}

/**
 * Check if a given object implements the StateNonFungibleLocationResponse interface.
 */
export function instanceOfStateNonFungibleLocationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ledger_state" in value;
    isInstance = isInstance && "resource_address" in value;
    isInstance = isInstance && "non_fungible_ids" in value;

    return isInstance;
}

export function StateNonFungibleLocationResponseFromJSON(json: any): StateNonFungibleLocationResponse {
    return StateNonFungibleLocationResponseFromJSONTyped(json, false);
}

export function StateNonFungibleLocationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateNonFungibleLocationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ledger_state': LedgerStateFromJSON(json['ledger_state']),
        'resource_address': json['resource_address'],
        'non_fungible_ids': ((json['non_fungible_ids'] as Array<any>).map(StateNonFungibleLocationResponseItemFromJSON)),
    };
}

export function StateNonFungibleLocationResponseToJSON(value?: StateNonFungibleLocationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ledger_state': LedgerStateToJSON(value.ledger_state),
        'resource_address': value.resource_address,
        'non_fungible_ids': ((value.non_fungible_ids as Array<any>).map(StateNonFungibleLocationResponseItemToJSON)),
    };
}

