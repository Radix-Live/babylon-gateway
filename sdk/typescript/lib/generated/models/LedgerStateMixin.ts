/* tslint:disable */
/* eslint-disable */
/**
 * Radix Babylon Gateway API
 * See https://docs.radixdlt.com/main/apis/introduction.html 
 *
 * The version of the OpenAPI document: 2.0.0
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

/**
 * 
 * @export
 * @interface LedgerStateMixin
 */
export interface LedgerStateMixin {
    /**
     * 
     * @type {LedgerState}
     * @memberof LedgerStateMixin
     */
    ledger_state: LedgerState;
}

/**
 * Check if a given object implements the LedgerStateMixin interface.
 */
export function instanceOfLedgerStateMixin(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ledger_state" in value;

    return isInstance;
}

export function LedgerStateMixinFromJSON(json: any): LedgerStateMixin {
    return LedgerStateMixinFromJSONTyped(json, false);
}

export function LedgerStateMixinFromJSONTyped(json: any, ignoreDiscriminator: boolean): LedgerStateMixin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ledger_state': LedgerStateFromJSON(json['ledger_state']),
    };
}

export function LedgerStateMixinToJSON(value?: LedgerStateMixin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ledger_state': LedgerStateToJSON(value.ledger_state),
    };
}
