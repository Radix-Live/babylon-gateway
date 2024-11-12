/* tslint:disable */
/* eslint-disable */
/**
 * Radix Gateway API - Babylon
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers, and for light queries from front-end dApps. For exchange/asset integrations, back-end dApp integrations, or simple use cases, you should consider using the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Migration guide  Please see [the latest release notes](https://github.com/radixdlt/babylon-gateway/releases).  ## Integration and forward compatibility guarantees  All responses may have additional fields added at any release, so clients are advised to use JSON parsers which ignore unknown fields on JSON objects.  When the Radix protocol is updated, new functionality may be added, and so discriminated unions returned by the API may need to be updated to have new variants added, corresponding to the updated data. Clients may need to update in advance to be able to handle these new variants when a protocol update comes out.  On the very rare occasions we need to make breaking changes to the API, these will be warned in advance with deprecation notices on previous versions. These deprecation notices will include a safe migration path. Deprecation notes or breaking changes will be flagged clearly in release notes for new versions of the Gateway.  The Gateway DB schema is not subject to any compatibility guarantees, and may be changed at any release. DB changes will be flagged in the release notes so clients doing custom DB integrations can prepare. 
 *
 * The version of the OpenAPI document: v1.9.0
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
 * @interface CompiledPreviewTransactionAllOf
 */
export interface CompiledPreviewTransactionAllOf {
    /**
     * A hex-encoded, compiled `RawPreviewTransaction`.

As of Cuttlefish, only `PreviewTransactionV2` is supported.

A `PreviewTransactionV2` can be created with a v2 transaction builder:
* If using Rust, it can be created with a `TransactionV2Builder` using `build_preview_transaction()`
  and then converted to hex with `preview_transaction.to_raw().unwrap().to_hex()`
* If using the toolkit, you can create this using the v2 transaction builder.

Some subtleties:
* Partial transactions can't be previewed. Instead, they must be wrapped inside a
  transaction wrapper, so that the engine knows how to yield to them appropriately.
* Currently the builder assumes that the signed partial transactions have real signatures.
  This isn't strictly required, and we may create a builder in future which allows providing
  public keys when building partial transactions for use in preview.
* If you don't have signatures to hand, you can simply not sign the partial transactions,
  and then use the `assume_all_signature_proofs` preview flag, although be advised that
  this may result in the fee estimate being slightly lower during preview.
* We may create more ergonomic builders for PreviewTransactions which allow use of
  public keys to denote the signers of subintents. Let us know if this is important
  for your use case.

     * @type {string}
     * @memberof CompiledPreviewTransactionAllOf
     */
    preview_transaction_hex: string;
    /**
     * 
     * @type {string}
     * @memberof CompiledPreviewTransactionAllOf
     */
    type?: CompiledPreviewTransactionAllOfTypeEnum;
}


/**
 * @export
 */
export const CompiledPreviewTransactionAllOfTypeEnum = {
    Compiled: 'Compiled'
} as const;
export type CompiledPreviewTransactionAllOfTypeEnum = typeof CompiledPreviewTransactionAllOfTypeEnum[keyof typeof CompiledPreviewTransactionAllOfTypeEnum];


/**
 * Check if a given object implements the CompiledPreviewTransactionAllOf interface.
 */
export function instanceOfCompiledPreviewTransactionAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "preview_transaction_hex" in value;

    return isInstance;
}

export function CompiledPreviewTransactionAllOfFromJSON(json: any): CompiledPreviewTransactionAllOf {
    return CompiledPreviewTransactionAllOfFromJSONTyped(json, false);
}

export function CompiledPreviewTransactionAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompiledPreviewTransactionAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'preview_transaction_hex': json['preview_transaction_hex'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function CompiledPreviewTransactionAllOfToJSON(value?: CompiledPreviewTransactionAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preview_transaction_hex': value.preview_transaction_hex,
        'type': value.type,
    };
}

