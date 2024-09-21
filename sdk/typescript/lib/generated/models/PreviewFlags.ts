/* tslint:disable */
/* eslint-disable */
/**
 * Radix Gateway API - Babylon
 * This API is exposed by the Babylon Radix Gateway to enable clients to efficiently query current and historic state on the RadixDLT ledger, and intelligently handle transaction submission.  It is designed for use by wallets and explorers, and for light queries from front-end dApps. For exchange/asset integrations, back-end dApp integrations, or simple use cases, you should consider using the Core API on a Node. A Gateway is only needed for reading historic snapshots of ledger states or a more robust set-up.  The Gateway API is implemented by the [Network Gateway](https://github.com/radixdlt/babylon-gateway), which is configured to read from [full node(s)](https://github.com/radixdlt/babylon-node) to extract and index data from the network.  This document is an API reference documentation, visit [User Guide](https://docs.radixdlt.com/) to learn more about how to run a Gateway of your own.  ## Migration guide  Please see [the latest release notes](https://github.com/radixdlt/babylon-gateway/releases).  ## Integration and forward compatibility guarantees  All responses may have additional fields added at any release, so clients are advised to use JSON parsers which ignore unknown fields on JSON objects.  When the Radix protocol is updated, new functionality may be added, and so discriminated unions returned by the API may need to be updated to have new variants added, corresponding to the updated data. Clients may need to update in advance to be able to handle these new variants when a protocol update comes out.  On the very rare occasions we need to make breaking changes to the API, these will be warned in advance with deprecation notices on previous versions. These deprecation notices will include a safe migration path. Deprecation notes or breaking changes will be flagged clearly in release notes for new versions of the Gateway.  The Gateway DB schema is not subject to any compatibility guarantees, and may be changed at any release. DB changes will be flagged in the release notes so clients doing custom DB integrations can prepare. 
 *
 * The version of the OpenAPI document: v1.9.2
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
 * @interface PreviewFlags
 */
export interface PreviewFlags {
    /**
     * If enabled, a large simulated pool of XRD is marked as locked.

This mode can be used to estimate fees. To get a reliable estimate, we recommend that your
transaction is as close as possible to the real transaction. For example:
- You should still use a lock fee command, but you can set it to lock a fee of 0.
- You should include the public keys that will sign the transaction, so the cost of
  signature verification and payload size can be accounted for.

     * @type {boolean}
     * @memberof PreviewFlags
     */
    use_free_credit?: boolean;
    /**
     * If enabled, each manifest processor's auth zone will be given a simulated proof of
every signature, which can be used to pass signature access rules.

This can be used to preview transactions even if the required signatures are not
known ahead of time.

See the documentation on
[advanced access rules](https://docs.radixdlt.com/docs/advanced-accessrules#signature-requirements)
for more information.

     * @type {boolean}
     * @memberof PreviewFlags
     */
    assume_all_signature_proofs?: boolean;
    /**
     * If enabled, the various runtime epoch-related verifications are skipped:
- The `start_epoch_inclusive` and `end_epoch_exclusive` parameters, if specified, are ignored.
- The duplicate intent checks (which rely on the expiry epoch) are also ignored.

However, if the start and end epoch are provided, they must still be statically valid.
We recommend using a value of `start_epoch_inclusive = 1` and `end_epoch_exclusive = 2` in this
case.

     * @type {boolean}
     * @memberof PreviewFlags
     */
    skip_epoch_check?: boolean;
    /**
     * If enabled, all authorization checks are skipped during execution.

This could be used to e.g.:
* Preview protocol update style transactions.
* Mint resources for previewing trades with resources you don't own.
  If doing this, be warned: only resources which were potentially mintable/burnable
  at creation time will be mintable/burnable, due to feature flags on the resource.

Warning: this mode of operation is quite a departure from normal operation:
* Calculated fees will likely be lower than a standard execution.
* This mode can subtly break invariants some dApp code might rely on, or result in unexpected
  behaviour, so the execution result might not be valid for your needs. For example,
  if this flag was used to mint pool units to preview a redemption (or some dApp interaction which
  behind the scenes redeemed them), they'd redeem for less than they're currently worth,
  because the blueprint code relies on the total supply of the pool units to calculate their
  redemption worth, and you've just inflated the total supply through the mint operation.

     * @type {boolean}
     * @memberof PreviewFlags
     */
    disable_auth_checks?: boolean;
}

/**
 * Check if a given object implements the PreviewFlags interface.
 */
export function instanceOfPreviewFlags(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PreviewFlagsFromJSON(json: any): PreviewFlags {
    return PreviewFlagsFromJSONTyped(json, false);
}

export function PreviewFlagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreviewFlags {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'use_free_credit': !exists(json, 'use_free_credit') ? undefined : json['use_free_credit'],
        'assume_all_signature_proofs': !exists(json, 'assume_all_signature_proofs') ? undefined : json['assume_all_signature_proofs'],
        'skip_epoch_check': !exists(json, 'skip_epoch_check') ? undefined : json['skip_epoch_check'],
        'disable_auth_checks': !exists(json, 'disable_auth_checks') ? undefined : json['disable_auth_checks'],
    };
}

export function PreviewFlagsToJSON(value?: PreviewFlags | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'use_free_credit': value.use_free_credit,
        'assume_all_signature_proofs': value.assume_all_signature_proofs,
        'skip_epoch_check': value.skip_epoch_check,
        'disable_auth_checks': value.disable_auth_checks,
    };
}
