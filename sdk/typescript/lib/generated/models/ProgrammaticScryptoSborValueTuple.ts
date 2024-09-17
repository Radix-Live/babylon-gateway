/* tslint:disable */
/* eslint-disable */
/**
 * Radix Gateway API - Babylon
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers, and for light queries from front-end dApps. For exchange/asset integrations, back-end dApp integrations, or simple use cases, you should consider using the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Migration guide  Please see [the latest release notes](https://github.com/radixdlt/babylon-gateway/releases).  ## Integration and forward compatibility guarantees  All responses may have additional fields added at any release, so clients are advised to use JSON parsers which ignore unknown fields on JSON objects.  When the Radix protocol is updated, new functionality may be added, and so discriminated unions returned by the API may need to be updated to have new variants added, corresponding to the updated data. Clients may need to update in advance to be able to handle these new variants when a protocol update comes out.  On the very rare occasions we need to make breaking changes to the API, these will be warned in advance with deprecation notices on previous versions. These deprecation notices will include a safe migration path. Deprecation notes or breaking changes will be flagged clearly in release notes for new versions of the Gateway.  The Gateway DB schema is not subject to any compatibility guarantees, and may be changed at any release. DB changes will be flagged in the release notes so clients doing custom DB integrations can prepare. 
 *
 * The version of the OpenAPI document: v1.7.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProgrammaticScryptoSborValue } from './ProgrammaticScryptoSborValue';
import {
    ProgrammaticScryptoSborValueFromJSON,
    ProgrammaticScryptoSborValueFromJSONTyped,
    ProgrammaticScryptoSborValueToJSON,
} from './ProgrammaticScryptoSborValue';

/**
 * 
 * @export
 * @interface ProgrammaticScryptoSborValueTuple
 */
export interface ProgrammaticScryptoSborValueTuple {
    /**
     * 
     * @type {string}
     * @memberof ProgrammaticScryptoSborValueTuple
     */
    kind: ProgrammaticScryptoSborValueTupleKindEnum;
    /**
     * The name of the type of this value.
This is only output when a schema is present and the type has a name.
This property is ignored when the value is used as an input to the API.

     * @type {string}
     * @memberof ProgrammaticScryptoSborValueTuple
     */
    type_name?: string | null;
    /**
     * The name of the field which hosts this value.
This property is only included if this value is a child of a `Tuple` or `Enum` with named fields.
This property is ignored when the value is used as an input to the API.

     * @type {string}
     * @memberof ProgrammaticScryptoSborValueTuple
     */
    field_name?: string | null;
    /**
     * 
     * @type {Array<ProgrammaticScryptoSborValue>}
     * @memberof ProgrammaticScryptoSborValueTuple
     */
    fields: Array<ProgrammaticScryptoSborValue>;
}


/**
 * @export
 */
export const ProgrammaticScryptoSborValueTupleKindEnum = {
    Tuple: 'Tuple'
} as const;
export type ProgrammaticScryptoSborValueTupleKindEnum = typeof ProgrammaticScryptoSborValueTupleKindEnum[keyof typeof ProgrammaticScryptoSborValueTupleKindEnum];


/**
 * Check if a given object implements the ProgrammaticScryptoSborValueTuple interface.
 */
export function instanceOfProgrammaticScryptoSborValueTuple(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "fields" in value;

    return isInstance;
}

export function ProgrammaticScryptoSborValueTupleFromJSON(json: any): ProgrammaticScryptoSborValueTuple {
    return ProgrammaticScryptoSborValueTupleFromJSONTyped(json, false);
}

export function ProgrammaticScryptoSborValueTupleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgrammaticScryptoSborValueTuple {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': json['kind'],
        'type_name': !exists(json, 'type_name') ? undefined : json['type_name'],
        'field_name': !exists(json, 'field_name') ? undefined : json['field_name'],
        'fields': ((json['fields'] as Array<any>).map(ProgrammaticScryptoSborValueFromJSON)),
    };
}

export function ProgrammaticScryptoSborValueTupleToJSON(value?: ProgrammaticScryptoSborValueTuple | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'type_name': value.type_name,
        'field_name': value.field_name,
        'fields': ((value.fields as Array<any>).map(ProgrammaticScryptoSborValueToJSON)),
    };
}

