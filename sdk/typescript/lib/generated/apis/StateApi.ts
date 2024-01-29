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


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  StateEntityDetailsRequest,
  StateEntityDetailsResponse,
  StateEntityFungibleResourceVaultsPageRequest,
  StateEntityFungibleResourceVaultsPageResponse,
  StateEntityFungiblesPageRequest,
  StateEntityFungiblesPageResponse,
  StateEntityMetadataPageRequest,
  StateEntityMetadataPageResponse,
  StateEntityNonFungibleIdsPageRequest,
  StateEntityNonFungibleIdsPageResponse,
  StateEntityNonFungibleResourceVaultsPageRequest,
  StateEntityNonFungibleResourceVaultsPageResponse,
  StateEntityNonFungiblesPageRequest,
  StateEntityNonFungiblesPageResponse,
  StateKeyValueStoreDataRequest,
  StateKeyValueStoreDataResponse,
  StateNonFungibleDataRequest,
  StateNonFungibleDataResponse,
  StateNonFungibleIdsRequest,
  StateNonFungibleIdsResponse,
  StateNonFungibleLocationRequest,
  StateNonFungibleLocationResponse,
  StateValidatorsListRequest,
  StateValidatorsListResponse,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    StateEntityDetailsRequestFromJSON,
    StateEntityDetailsRequestToJSON,
    StateEntityDetailsResponseFromJSON,
    StateEntityDetailsResponseToJSON,
    StateEntityFungibleResourceVaultsPageRequestFromJSON,
    StateEntityFungibleResourceVaultsPageRequestToJSON,
    StateEntityFungibleResourceVaultsPageResponseFromJSON,
    StateEntityFungibleResourceVaultsPageResponseToJSON,
    StateEntityFungiblesPageRequestFromJSON,
    StateEntityFungiblesPageRequestToJSON,
    StateEntityFungiblesPageResponseFromJSON,
    StateEntityFungiblesPageResponseToJSON,
    StateEntityMetadataPageRequestFromJSON,
    StateEntityMetadataPageRequestToJSON,
    StateEntityMetadataPageResponseFromJSON,
    StateEntityMetadataPageResponseToJSON,
    StateEntityNonFungibleIdsPageRequestFromJSON,
    StateEntityNonFungibleIdsPageRequestToJSON,
    StateEntityNonFungibleIdsPageResponseFromJSON,
    StateEntityNonFungibleIdsPageResponseToJSON,
    StateEntityNonFungibleResourceVaultsPageRequestFromJSON,
    StateEntityNonFungibleResourceVaultsPageRequestToJSON,
    StateEntityNonFungibleResourceVaultsPageResponseFromJSON,
    StateEntityNonFungibleResourceVaultsPageResponseToJSON,
    StateEntityNonFungiblesPageRequestFromJSON,
    StateEntityNonFungiblesPageRequestToJSON,
    StateEntityNonFungiblesPageResponseFromJSON,
    StateEntityNonFungiblesPageResponseToJSON,
    StateKeyValueStoreDataRequestFromJSON,
    StateKeyValueStoreDataRequestToJSON,
    StateKeyValueStoreDataResponseFromJSON,
    StateKeyValueStoreDataResponseToJSON,
    StateNonFungibleDataRequestFromJSON,
    StateNonFungibleDataRequestToJSON,
    StateNonFungibleDataResponseFromJSON,
    StateNonFungibleDataResponseToJSON,
    StateNonFungibleIdsRequestFromJSON,
    StateNonFungibleIdsRequestToJSON,
    StateNonFungibleIdsResponseFromJSON,
    StateNonFungibleIdsResponseToJSON,
    StateNonFungibleLocationRequestFromJSON,
    StateNonFungibleLocationRequestToJSON,
    StateNonFungibleLocationResponseFromJSON,
    StateNonFungibleLocationResponseToJSON,
    StateValidatorsListRequestFromJSON,
    StateValidatorsListRequestToJSON,
    StateValidatorsListResponseFromJSON,
    StateValidatorsListResponseToJSON,
} from '../models';

export interface EntityFungibleResourceVaultPageRequest {
    stateEntityFungibleResourceVaultsPageRequest: StateEntityFungibleResourceVaultsPageRequest;
}

export interface EntityFungiblesPageRequest {
    stateEntityFungiblesPageRequest: StateEntityFungiblesPageRequest;
}

export interface EntityMetadataPageRequest {
    stateEntityMetadataPageRequest: StateEntityMetadataPageRequest;
}

export interface EntityNonFungibleIdsPageRequest {
    stateEntityNonFungibleIdsPageRequest: StateEntityNonFungibleIdsPageRequest;
}

export interface EntityNonFungibleResourceVaultPageRequest {
    stateEntityNonFungibleResourceVaultsPageRequest: StateEntityNonFungibleResourceVaultsPageRequest;
}

export interface EntityNonFungiblesPageRequest {
    stateEntityNonFungiblesPageRequest: StateEntityNonFungiblesPageRequest;
}

export interface KeyValueStoreDataRequest {
    stateKeyValueStoreDataRequest: StateKeyValueStoreDataRequest;
}

export interface NonFungibleDataRequest {
    stateNonFungibleDataRequest: StateNonFungibleDataRequest;
}

export interface NonFungibleIdsRequest {
    stateNonFungibleIdsRequest: StateNonFungibleIdsRequest;
}

export interface NonFungibleLocationRequest {
    stateNonFungibleLocationRequest: StateNonFungibleLocationRequest;
}

export interface StateEntityDetailsOperationRequest {
    stateEntityDetailsRequest: StateEntityDetailsRequest;
}

export interface StateValidatorsListOperationRequest {
    stateValidatorsListRequest: StateValidatorsListRequest;
}

/**
 * 
 */
export class StateApi extends runtime.BaseAPI {

    /**
     * Returns vaults for fungible resource owned by a given global entity. The returned response is in a paginated format, ordered by the resource\'s first appearance on the ledger. 
     * Get page of Global Entity Fungible Resource Vaults
     */
    async entityFungibleResourceVaultPageRaw(requestParameters: EntityFungibleResourceVaultPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateEntityFungibleResourceVaultsPageResponse>> {
        if (requestParameters.stateEntityFungibleResourceVaultsPageRequest === null || requestParameters.stateEntityFungibleResourceVaultsPageRequest === undefined) {
            throw new runtime.RequiredError('stateEntityFungibleResourceVaultsPageRequest','Required parameter requestParameters.stateEntityFungibleResourceVaultsPageRequest was null or undefined when calling entityFungibleResourceVaultPage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/state/entity/page/fungible-vaults/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateEntityFungibleResourceVaultsPageRequestToJSON(requestParameters.stateEntityFungibleResourceVaultsPageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateEntityFungibleResourceVaultsPageResponseFromJSON(jsonValue));
    }

    /**
     * Returns vaults for fungible resource owned by a given global entity. The returned response is in a paginated format, ordered by the resource\'s first appearance on the ledger. 
     * Get page of Global Entity Fungible Resource Vaults
     */
    async entityFungibleResourceVaultPage(requestParameters: EntityFungibleResourceVaultPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateEntityFungibleResourceVaultsPageResponse> {
        const response = await this.entityFungibleResourceVaultPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the total amount of each fungible resource owned by a given global entity. Result can be aggregated globally or per vault. The returned response is in a paginated format, ordered by the resource\'s first appearance on the ledger. 
     * Get page of Global Entity Fungible Resource Balances
     */
    async entityFungiblesPageRaw(requestParameters: EntityFungiblesPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateEntityFungiblesPageResponse>> {
        if (requestParameters.stateEntityFungiblesPageRequest === null || requestParameters.stateEntityFungiblesPageRequest === undefined) {
            throw new runtime.RequiredError('stateEntityFungiblesPageRequest','Required parameter requestParameters.stateEntityFungiblesPageRequest was null or undefined when calling entityFungiblesPage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/state/entity/page/fungibles/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateEntityFungiblesPageRequestToJSON(requestParameters.stateEntityFungiblesPageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateEntityFungiblesPageResponseFromJSON(jsonValue));
    }

    /**
     * Returns the total amount of each fungible resource owned by a given global entity. Result can be aggregated globally or per vault. The returned response is in a paginated format, ordered by the resource\'s first appearance on the ledger. 
     * Get page of Global Entity Fungible Resource Balances
     */
    async entityFungiblesPage(requestParameters: EntityFungiblesPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateEntityFungiblesPageResponse> {
        const response = await this.entityFungiblesPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all the metadata properties associated with a given global entity. The returned response is in a paginated format, ordered by first appearance on the ledger. 
     * Get Entity Metadata Page
     */
    async entityMetadataPageRaw(requestParameters: EntityMetadataPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateEntityMetadataPageResponse>> {
        if (requestParameters.stateEntityMetadataPageRequest === null || requestParameters.stateEntityMetadataPageRequest === undefined) {
            throw new runtime.RequiredError('stateEntityMetadataPageRequest','Required parameter requestParameters.stateEntityMetadataPageRequest was null or undefined when calling entityMetadataPage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/state/entity/page/metadata`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateEntityMetadataPageRequestToJSON(requestParameters.stateEntityMetadataPageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateEntityMetadataPageResponseFromJSON(jsonValue));
    }

    /**
     * Returns all the metadata properties associated with a given global entity. The returned response is in a paginated format, ordered by first appearance on the ledger. 
     * Get Entity Metadata Page
     */
    async entityMetadataPage(requestParameters: EntityMetadataPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateEntityMetadataPageResponse> {
        const response = await this.entityMetadataPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all non-fungible IDs of a given non-fungible resource owned by a given entity. The returned response is in a paginated format, ordered by the resource\'s first appearence on the ledger. 
     * Get page of Non-Fungibles in Vault
     */
    async entityNonFungibleIdsPageRaw(requestParameters: EntityNonFungibleIdsPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateEntityNonFungibleIdsPageResponse>> {
        if (requestParameters.stateEntityNonFungibleIdsPageRequest === null || requestParameters.stateEntityNonFungibleIdsPageRequest === undefined) {
            throw new runtime.RequiredError('stateEntityNonFungibleIdsPageRequest','Required parameter requestParameters.stateEntityNonFungibleIdsPageRequest was null or undefined when calling entityNonFungibleIdsPage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/state/entity/page/non-fungible-vault/ids`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateEntityNonFungibleIdsPageRequestToJSON(requestParameters.stateEntityNonFungibleIdsPageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateEntityNonFungibleIdsPageResponseFromJSON(jsonValue));
    }

    /**
     * Returns all non-fungible IDs of a given non-fungible resource owned by a given entity. The returned response is in a paginated format, ordered by the resource\'s first appearence on the ledger. 
     * Get page of Non-Fungibles in Vault
     */
    async entityNonFungibleIdsPage(requestParameters: EntityNonFungibleIdsPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateEntityNonFungibleIdsPageResponse> {
        const response = await this.entityNonFungibleIdsPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns vaults for non fungible resource owned by a given global entity. The returned response is in a paginated format, ordered by the resource\'s first appearance on the ledger. 
     * Get page of Global Entity Non-Fungible Resource Vaults
     */
    async entityNonFungibleResourceVaultPageRaw(requestParameters: EntityNonFungibleResourceVaultPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateEntityNonFungibleResourceVaultsPageResponse>> {
        if (requestParameters.stateEntityNonFungibleResourceVaultsPageRequest === null || requestParameters.stateEntityNonFungibleResourceVaultsPageRequest === undefined) {
            throw new runtime.RequiredError('stateEntityNonFungibleResourceVaultsPageRequest','Required parameter requestParameters.stateEntityNonFungibleResourceVaultsPageRequest was null or undefined when calling entityNonFungibleResourceVaultPage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/state/entity/page/non-fungible-vaults/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateEntityNonFungibleResourceVaultsPageRequestToJSON(requestParameters.stateEntityNonFungibleResourceVaultsPageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateEntityNonFungibleResourceVaultsPageResponseFromJSON(jsonValue));
    }

    /**
     * Returns vaults for non fungible resource owned by a given global entity. The returned response is in a paginated format, ordered by the resource\'s first appearance on the ledger. 
     * Get page of Global Entity Non-Fungible Resource Vaults
     */
    async entityNonFungibleResourceVaultPage(requestParameters: EntityNonFungibleResourceVaultPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateEntityNonFungibleResourceVaultsPageResponse> {
        const response = await this.entityNonFungibleResourceVaultPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the total amount of each non-fungible resource owned by a given global entity. Result can be aggregated globally or per vault. The returned response is in a paginated format, ordered by the resource\'s first appearance on the ledger. 
     * Get page of Global Entity Non-Fungible Resource Balances
     */
    async entityNonFungiblesPageRaw(requestParameters: EntityNonFungiblesPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateEntityNonFungiblesPageResponse>> {
        if (requestParameters.stateEntityNonFungiblesPageRequest === null || requestParameters.stateEntityNonFungiblesPageRequest === undefined) {
            throw new runtime.RequiredError('stateEntityNonFungiblesPageRequest','Required parameter requestParameters.stateEntityNonFungiblesPageRequest was null or undefined when calling entityNonFungiblesPage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/state/entity/page/non-fungibles/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateEntityNonFungiblesPageRequestToJSON(requestParameters.stateEntityNonFungiblesPageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateEntityNonFungiblesPageResponseFromJSON(jsonValue));
    }

    /**
     * Returns the total amount of each non-fungible resource owned by a given global entity. Result can be aggregated globally or per vault. The returned response is in a paginated format, ordered by the resource\'s first appearance on the ledger. 
     * Get page of Global Entity Non-Fungible Resource Balances
     */
    async entityNonFungiblesPage(requestParameters: EntityNonFungiblesPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateEntityNonFungiblesPageResponse> {
        const response = await this.entityNonFungiblesPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns data (value) associated with a given key of a given key-value store. [Check detailed documentation for explanation](#section/How-to-query-the-content-of-a-key-value-store-inside-a-component) 
     * Get KeyValueStore Data
     */
    async keyValueStoreDataRaw(requestParameters: KeyValueStoreDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateKeyValueStoreDataResponse>> {
        if (requestParameters.stateKeyValueStoreDataRequest === null || requestParameters.stateKeyValueStoreDataRequest === undefined) {
            throw new runtime.RequiredError('stateKeyValueStoreDataRequest','Required parameter requestParameters.stateKeyValueStoreDataRequest was null or undefined when calling keyValueStoreData.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/state/key-value-store/data`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateKeyValueStoreDataRequestToJSON(requestParameters.stateKeyValueStoreDataRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateKeyValueStoreDataResponseFromJSON(jsonValue));
    }

    /**
     * Returns data (value) associated with a given key of a given key-value store. [Check detailed documentation for explanation](#section/How-to-query-the-content-of-a-key-value-store-inside-a-component) 
     * Get KeyValueStore Data
     */
    async keyValueStoreData(requestParameters: KeyValueStoreDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateKeyValueStoreDataResponse> {
        const response = await this.keyValueStoreDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns data associated with a given non-fungible ID of a given non-fungible resource. 
     * Get Non-Fungible Data
     */
    async nonFungibleDataRaw(requestParameters: NonFungibleDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateNonFungibleDataResponse>> {
        if (requestParameters.stateNonFungibleDataRequest === null || requestParameters.stateNonFungibleDataRequest === undefined) {
            throw new runtime.RequiredError('stateNonFungibleDataRequest','Required parameter requestParameters.stateNonFungibleDataRequest was null or undefined when calling nonFungibleData.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/state/non-fungible/data`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateNonFungibleDataRequestToJSON(requestParameters.stateNonFungibleDataRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateNonFungibleDataResponseFromJSON(jsonValue));
    }

    /**
     * Returns data associated with a given non-fungible ID of a given non-fungible resource. 
     * Get Non-Fungible Data
     */
    async nonFungibleData(requestParameters: NonFungibleDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateNonFungibleDataResponse> {
        const response = await this.nonFungibleDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the non-fungible IDs of a given non-fungible resource. Returned response is in a paginated format, ordered by their first appearance on the ledger. 
     * Get page of Non-Fungible Ids in Resource Collection
     */
    async nonFungibleIdsRaw(requestParameters: NonFungibleIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateNonFungibleIdsResponse>> {
        if (requestParameters.stateNonFungibleIdsRequest === null || requestParameters.stateNonFungibleIdsRequest === undefined) {
            throw new runtime.RequiredError('stateNonFungibleIdsRequest','Required parameter requestParameters.stateNonFungibleIdsRequest was null or undefined when calling nonFungibleIds.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/state/non-fungible/ids`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateNonFungibleIdsRequestToJSON(requestParameters.stateNonFungibleIdsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateNonFungibleIdsResponseFromJSON(jsonValue));
    }

    /**
     * Returns the non-fungible IDs of a given non-fungible resource. Returned response is in a paginated format, ordered by their first appearance on the ledger. 
     * Get page of Non-Fungible Ids in Resource Collection
     */
    async nonFungibleIds(requestParameters: NonFungibleIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateNonFungibleIdsResponse> {
        const response = await this.nonFungibleIdsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns location of a given non-fungible ID. 
     * Get Non-Fungible Location
     */
    async nonFungibleLocationRaw(requestParameters: NonFungibleLocationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateNonFungibleLocationResponse>> {
        if (requestParameters.stateNonFungibleLocationRequest === null || requestParameters.stateNonFungibleLocationRequest === undefined) {
            throw new runtime.RequiredError('stateNonFungibleLocationRequest','Required parameter requestParameters.stateNonFungibleLocationRequest was null or undefined when calling nonFungibleLocation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/state/non-fungible/location`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateNonFungibleLocationRequestToJSON(requestParameters.stateNonFungibleLocationRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateNonFungibleLocationResponseFromJSON(jsonValue));
    }

    /**
     * Returns location of a given non-fungible ID. 
     * Get Non-Fungible Location
     */
    async nonFungibleLocation(requestParameters: NonFungibleLocationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateNonFungibleLocationResponse> {
        const response = await this.nonFungibleLocationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns detailed information for collection of entities. Aggregate resources globally by default. 
     * Get Entity Details
     */
    async stateEntityDetailsRaw(requestParameters: StateEntityDetailsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateEntityDetailsResponse>> {
        if (requestParameters.stateEntityDetailsRequest === null || requestParameters.stateEntityDetailsRequest === undefined) {
            throw new runtime.RequiredError('stateEntityDetailsRequest','Required parameter requestParameters.stateEntityDetailsRequest was null or undefined when calling stateEntityDetails.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/state/entity/details`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateEntityDetailsRequestToJSON(requestParameters.stateEntityDetailsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateEntityDetailsResponseFromJSON(jsonValue));
    }

    /**
     * Returns detailed information for collection of entities. Aggregate resources globally by default. 
     * Get Entity Details
     */
    async stateEntityDetails(requestParameters: StateEntityDetailsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateEntityDetailsResponse> {
        const response = await this.stateEntityDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Validators List
     */
    async stateValidatorsListRaw(requestParameters: StateValidatorsListOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateValidatorsListResponse>> {
        if (requestParameters.stateValidatorsListRequest === null || requestParameters.stateValidatorsListRequest === undefined) {
            throw new runtime.RequiredError('stateValidatorsListRequest','Required parameter requestParameters.stateValidatorsListRequest was null or undefined when calling stateValidatorsList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/state/validators/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateValidatorsListRequestToJSON(requestParameters.stateValidatorsListRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateValidatorsListResponseFromJSON(jsonValue));
    }

    /**
     * Get Validators List
     */
    async stateValidatorsList(requestParameters: StateValidatorsListOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateValidatorsListResponse> {
        const response = await this.stateValidatorsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
