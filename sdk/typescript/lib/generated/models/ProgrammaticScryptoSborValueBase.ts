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
import type { ProgrammaticScryptoSborValueKind } from './ProgrammaticScryptoSborValueKind';
import {
    ProgrammaticScryptoSborValueKindFromJSON,
    ProgrammaticScryptoSborValueKindFromJSONTyped,
    ProgrammaticScryptoSborValueKindToJSON,
} from './ProgrammaticScryptoSborValueKind';

/**
 * Arbitrary SBOR value represented as programmatic JSON with optional property name annotations.
 * 
 * All scalar types (`Bool`, `I*`, `U*`, `String`, `Reference`, `Own`, `Decimal`, `PreciseDecimal`, `NonFungibleLocalId`)
 * convey their value via `value` string property with notable exception of `Bool` type that uses regular JSON boolean type.
 * Numeric values as string-encoded to preserve accuracy and simplify implementation on platforms with no native support
 * for 64-bit long numerical values.
 * 
 * Common properties represented as nullable strings:
 *   * `type_name` is only output when a schema is present and the type has a name,
 *   * `field_name` is only output when the value is a child of a `Tuple` or `Enum`, which has a type with named fields,
 *   * `variant_name` is only output when a schema is present and the type is an `Enum`.
 * 
 * The following is a non-normative example annotated `Tuple` value with `String` and `U32` fields:
 * ```
 * {
 *   "kind": "Tuple",
 *   "type_name": "CustomStructure",
 *   "fields": [
 *     {
 *       "kind": "String",
 *       "field_name": "favorite_color",
 *       "value": "Blue"
 *     },
 *     {
 *       "kind": "U32",
 *       "field_name": "usage_counter",
 *       "value": "462231"
 *     }
 *   ]
 * }
 * ```
 * @export
 * @interface ProgrammaticScryptoSborValueBase
 */
export interface ProgrammaticScryptoSborValueBase {
    /**
     * 
     * @type {ProgrammaticScryptoSborValueKind}
     * @memberof ProgrammaticScryptoSborValueBase
     */
    kind: ProgrammaticScryptoSborValueKind;
    /**
     * Object type name; available only when a schema is present and the type has a name.
     * @type {string}
     * @memberof ProgrammaticScryptoSborValueBase
     */
    type_name?: string | null;
    /**
     * Field name; available only when the value is a child of a `Tuple` or `Enum`, which has a type with named fields.
     * @type {string}
     * @memberof ProgrammaticScryptoSborValueBase
     */
    field_name?: string | null;
}

/**
 * Check if a given object implements the ProgrammaticScryptoSborValueBase interface.
 */
export function instanceOfProgrammaticScryptoSborValueBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;

    return isInstance;
}

export function ProgrammaticScryptoSborValueBaseFromJSON(json: any): ProgrammaticScryptoSborValueBase {
    return ProgrammaticScryptoSborValueBaseFromJSONTyped(json, false);
}

export function ProgrammaticScryptoSborValueBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgrammaticScryptoSborValueBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': ProgrammaticScryptoSborValueKindFromJSON(json['kind']),
        'type_name': !exists(json, 'type_name') ? undefined : json['type_name'],
        'field_name': !exists(json, 'field_name') ? undefined : json['field_name'],
    };
}

export function ProgrammaticScryptoSborValueBaseToJSON(value?: ProgrammaticScryptoSborValueBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': ProgrammaticScryptoSborValueKindToJSON(value.kind),
        'type_name': value.type_name,
        'field_name': value.field_name,
    };
}
