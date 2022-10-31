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
/**
 * 
 * @export
 * @interface TransactionSubmitResponse
 */
export interface TransactionSubmitResponse {
    /**
     * Is true if the transaction is a duplicate of an existing pending transaction.
     * @type {boolean}
     * @memberof TransactionSubmitResponse
     */
    duplicate: boolean;
}

/**
 * Check if a given object implements the TransactionSubmitResponse interface.
 */
export function instanceOfTransactionSubmitResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "duplicate" in value;

    return isInstance;
}

export function TransactionSubmitResponseFromJSON(json: any): TransactionSubmitResponse {
    return TransactionSubmitResponseFromJSONTyped(json, false);
}

export function TransactionSubmitResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionSubmitResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duplicate': json['duplicate'],
    };
}

export function TransactionSubmitResponseToJSON(value?: TransactionSubmitResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duplicate': value.duplicate,
    };
}
