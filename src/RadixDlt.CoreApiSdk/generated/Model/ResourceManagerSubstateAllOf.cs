/* Copyright 2021 Radix Publishing Ltd incorporated in Jersey (Channel Islands).
 *
 * Licensed under the Radix License, Version 1.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 *
 * radixfoundation.org/licenses/LICENSE-v1
 *
 * The Licensor hereby grants permission for the Canonical version of the Work to be
 * published, distributed and used under or by reference to the Licensor’s trademark
 * Radix ® and use of any unregistered trade names, logos or get-up.
 *
 * The Licensor provides the Work (and each Contributor provides its Contributions) on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied,
 * including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT,
 * MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * Whilst the Work is capable of being deployed, used and adopted (instantiated) to create
 * a distributed ledger it is your responsibility to test and validate the code, together
 * with all logic and performance of that code under all foreseeable scenarios.
 *
 * The Licensor does not make or purport to make and hereby excludes liability for all
 * and any representation, warranty or undertaking in any form whatsoever, whether express
 * or implied, to any entity or person, including any representation, warranty or
 * undertaking, as to the functionality security use, value or other characteristics of
 * any distributed ledger nor in respect the functioning or value of any tokens which may
 * be created stored or transferred using the Work. The Licensor does not warrant that the
 * Work or any use of the Work complies with any law or regulation in any territory where
 * it may be implemented or used or that it will be appropriate for any specific purpose.
 *
 * Neither the licensor nor any current or former employees, officers, directors, partners,
 * trustees, representatives, agents, advisors, contractors, or volunteers of the Licensor
 * shall be liable for any direct or indirect, special, incidental, consequential or other
 * losses of any kind, in tort, contract or otherwise (including but not limited to loss
 * of revenue, income or profits, or loss of use or data, or loss of reputation, or loss
 * of any economic or other opportunity of whatsoever nature or howsoever arising), arising
 * out of or in connection with (without limitation of any use, misuse, of any ledger system
 * or use made or its functionality or any performance or operation of any code or protocol
 * caused by bugs or programming or logic errors or otherwise);
 *
 * A. any offer, purchase, holding, use, sale, exchange or transmission of any
 * cryptographic keys, tokens or assets created, exchanged, stored or arising from any
 * interaction with the Work;
 *
 * B. any failure in a transmission or loss of any token or assets keys or other digital
 * artefacts due to errors in transmission;
 *
 * C. bugs, hacks, logic errors or faults in the Work or any communication;
 *
 * D. system software or apparatus including but not limited to losses caused by errors
 * in holding or transmitting tokens by any third-party;
 *
 * E. breaches or failure of security including hacker attacks, loss or disclosure of
 * password, loss of private key, unauthorised use or misuse of such passwords or keys;
 *
 * F. any losses including loss of anticipated savings or other benefits resulting from
 * use of the Work or any changes to the Work (however implemented).
 *
 * You are solely responsible for; testing, validating and evaluation of all operation
 * logic, functionality, security and appropriateness of using the Work for any commercial
 * or non-commercial purpose and for any reproduction or redistribution by You of the
 * Work. You assume all risks associated with Your use of the Work and the exercise of
 * permissions under this License.
 */

/*
 * Babylon Core API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using FileParameter = RadixDlt.CoreApiSdk.Client.FileParameter;
using OpenAPIDateConverter = RadixDlt.CoreApiSdk.Client.OpenAPIDateConverter;

namespace RadixDlt.CoreApiSdk.Model
{
    /// <summary>
    /// ResourceManagerSubstateAllOf
    /// </summary>
    [DataContract(Name = "ResourceManagerSubstate_allOf")]
    public partial class ResourceManagerSubstateAllOf : IEquatable<ResourceManagerSubstateAllOf>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets ResourceType
        /// </summary>
        [DataMember(Name = "resource_type", IsRequired = true, EmitDefaultValue = true)]
        public ResourceType ResourceType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ResourceManagerSubstateAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ResourceManagerSubstateAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ResourceManagerSubstateAllOf" /> class.
        /// </summary>
        /// <param name="resourceType">resourceType (required).</param>
        /// <param name="fungibleDivisibility">fungibleDivisibility.</param>
        /// <param name="metadata">metadata (required).</param>
        /// <param name="totalSupply">The string-encoded decimal representing the total supply of this resource. A decimal is formed of some signed integer &#x60;m&#x60; of attos (&#x60;10^(-18)&#x60;) units, where &#x60;-2^(256 - 1) &lt;&#x3D; m &lt; 2^(256 - 1)&#x60;.  (required).</param>
        /// <param name="ownedNonFungibleStore">ownedNonFungibleStore.</param>
        /// <param name="authRules">authRules (required).</param>
        public ResourceManagerSubstateAllOf(ResourceType resourceType = default(ResourceType), int fungibleDivisibility = default(int), List<ResourceManagerSubstateAllOfMetadata> metadata = default(List<ResourceManagerSubstateAllOfMetadata>), string totalSupply = default(string), EntityReference ownedNonFungibleStore = default(EntityReference), ResourceManagerSubstateAllOfAuthRules authRules = default(ResourceManagerSubstateAllOfAuthRules))
        {
            this.ResourceType = resourceType;
            // to ensure "metadata" is required (not null)
            if (metadata == null)
            {
                throw new ArgumentNullException("metadata is a required property for ResourceManagerSubstateAllOf and cannot be null");
            }
            this.Metadata = metadata;
            // to ensure "totalSupply" is required (not null)
            if (totalSupply == null)
            {
                throw new ArgumentNullException("totalSupply is a required property for ResourceManagerSubstateAllOf and cannot be null");
            }
            this.TotalSupply = totalSupply;
            // to ensure "authRules" is required (not null)
            if (authRules == null)
            {
                throw new ArgumentNullException("authRules is a required property for ResourceManagerSubstateAllOf and cannot be null");
            }
            this.AuthRules = authRules;
            this.FungibleDivisibility = fungibleDivisibility;
            this.OwnedNonFungibleStore = ownedNonFungibleStore;
        }

        /// <summary>
        /// Gets or Sets FungibleDivisibility
        /// </summary>
        [DataMember(Name = "fungible_divisibility", EmitDefaultValue = true)]
        public int FungibleDivisibility { get; set; }

        /// <summary>
        /// Gets or Sets Metadata
        /// </summary>
        [DataMember(Name = "metadata", IsRequired = true, EmitDefaultValue = true)]
        public List<ResourceManagerSubstateAllOfMetadata> Metadata { get; set; }

        /// <summary>
        /// The string-encoded decimal representing the total supply of this resource. A decimal is formed of some signed integer &#x60;m&#x60; of attos (&#x60;10^(-18)&#x60;) units, where &#x60;-2^(256 - 1) &lt;&#x3D; m &lt; 2^(256 - 1)&#x60;. 
        /// </summary>
        /// <value>The string-encoded decimal representing the total supply of this resource. A decimal is formed of some signed integer &#x60;m&#x60; of attos (&#x60;10^(-18)&#x60;) units, where &#x60;-2^(256 - 1) &lt;&#x3D; m &lt; 2^(256 - 1)&#x60;. </value>
        [DataMember(Name = "total_supply", IsRequired = true, EmitDefaultValue = true)]
        public string TotalSupply { get; set; }

        /// <summary>
        /// Gets or Sets OwnedNonFungibleStore
        /// </summary>
        [DataMember(Name = "owned_non_fungible_store", EmitDefaultValue = true)]
        public EntityReference OwnedNonFungibleStore { get; set; }

        /// <summary>
        /// Gets or Sets AuthRules
        /// </summary>
        [DataMember(Name = "auth_rules", IsRequired = true, EmitDefaultValue = true)]
        public ResourceManagerSubstateAllOfAuthRules AuthRules { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ResourceManagerSubstateAllOf {\n");
            sb.Append("  ResourceType: ").Append(ResourceType).Append("\n");
            sb.Append("  FungibleDivisibility: ").Append(FungibleDivisibility).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  TotalSupply: ").Append(TotalSupply).Append("\n");
            sb.Append("  OwnedNonFungibleStore: ").Append(OwnedNonFungibleStore).Append("\n");
            sb.Append("  AuthRules: ").Append(AuthRules).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as ResourceManagerSubstateAllOf);
        }

        /// <summary>
        /// Returns true if ResourceManagerSubstateAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of ResourceManagerSubstateAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ResourceManagerSubstateAllOf input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.ResourceType == input.ResourceType ||
                    this.ResourceType.Equals(input.ResourceType)
                ) && 
                (
                    this.FungibleDivisibility == input.FungibleDivisibility ||
                    this.FungibleDivisibility.Equals(input.FungibleDivisibility)
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    this.Metadata != null &&
                    input.Metadata != null &&
                    this.Metadata.SequenceEqual(input.Metadata)
                ) && 
                (
                    this.TotalSupply == input.TotalSupply ||
                    (this.TotalSupply != null &&
                    this.TotalSupply.Equals(input.TotalSupply))
                ) && 
                (
                    this.OwnedNonFungibleStore == input.OwnedNonFungibleStore ||
                    (this.OwnedNonFungibleStore != null &&
                    this.OwnedNonFungibleStore.Equals(input.OwnedNonFungibleStore))
                ) && 
                (
                    this.AuthRules == input.AuthRules ||
                    (this.AuthRules != null &&
                    this.AuthRules.Equals(input.AuthRules))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                hashCode = (hashCode * 59) + this.ResourceType.GetHashCode();
                hashCode = (hashCode * 59) + this.FungibleDivisibility.GetHashCode();
                if (this.Metadata != null)
                {
                    hashCode = (hashCode * 59) + this.Metadata.GetHashCode();
                }
                if (this.TotalSupply != null)
                {
                    hashCode = (hashCode * 59) + this.TotalSupply.GetHashCode();
                }
                if (this.OwnedNonFungibleStore != null)
                {
                    hashCode = (hashCode * 59) + this.OwnedNonFungibleStore.GetHashCode();
                }
                if (this.AuthRules != null)
                {
                    hashCode = (hashCode * 59) + this.AuthRules.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            // FungibleDivisibility (int) maximum
            if (this.FungibleDivisibility > (int)18)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for FungibleDivisibility, must be a value less than or equal to 18.", new [] { "FungibleDivisibility" });
            }

            // FungibleDivisibility (int) minimum
            if (this.FungibleDivisibility < (int)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for FungibleDivisibility, must be a value greater than or equal to 0.", new [] { "FungibleDivisibility" });
            }

            yield break;
        }
    }

}
