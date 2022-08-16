/*
 * Radix Babylon Gateway API
 *
 * See https://docs.radixdlt.com/main/apis/introduction.html 
 *
 * The version of the OpenAPI document: 2.0.0
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
using FileParameter = RadixDlt.NetworkGateway.GatewayApiSdk.Client.FileParameter;
using OpenAPIDateConverter = RadixDlt.NetworkGateway.GatewayApiSdk.Client.OpenAPIDateConverter;

namespace RadixDlt.NetworkGateway.GatewayApiSdk.Model
{
    /// <summary>
    /// CreateTokenDefinitionAllOf
    /// </summary>
    [DataContract(Name = "CreateTokenDefinition_allOf")]
    public partial class CreateTokenDefinitionAllOf : IEquatable<CreateTokenDefinitionAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateTokenDefinitionAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateTokenDefinitionAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateTokenDefinitionAllOf" /> class.
        /// </summary>
        /// <param name="tokenProperties">tokenProperties (required).</param>
        /// <param name="tokenSupply">tokenSupply (required).</param>
        /// <param name="toAccount">toAccount.</param>
        public CreateTokenDefinitionAllOf(TokenProperties tokenProperties = default(TokenProperties), TokenAmount tokenSupply = default(TokenAmount), AccountIdentifier toAccount = default(AccountIdentifier))
        {
            // to ensure "tokenProperties" is required (not null)
            if (tokenProperties == null)
            {
                throw new ArgumentNullException("tokenProperties is a required property for CreateTokenDefinitionAllOf and cannot be null");
            }
            this.TokenProperties = tokenProperties;
            // to ensure "tokenSupply" is required (not null)
            if (tokenSupply == null)
            {
                throw new ArgumentNullException("tokenSupply is a required property for CreateTokenDefinitionAllOf and cannot be null");
            }
            this.TokenSupply = tokenSupply;
            this.ToAccount = toAccount;
        }

        /// <summary>
        /// Gets or Sets TokenProperties
        /// </summary>
        [DataMember(Name = "token_properties", IsRequired = true, EmitDefaultValue = true)]
        public TokenProperties TokenProperties { get; set; }

        /// <summary>
        /// Gets or Sets TokenSupply
        /// </summary>
        [DataMember(Name = "token_supply", IsRequired = true, EmitDefaultValue = true)]
        public TokenAmount TokenSupply { get; set; }

        /// <summary>
        /// Gets or Sets ToAccount
        /// </summary>
        [DataMember(Name = "to_account", EmitDefaultValue = false)]
        public AccountIdentifier ToAccount { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateTokenDefinitionAllOf {\n");
            sb.Append("  TokenProperties: ").Append(TokenProperties).Append("\n");
            sb.Append("  TokenSupply: ").Append(TokenSupply).Append("\n");
            sb.Append("  ToAccount: ").Append(ToAccount).Append("\n");
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
            return this.Equals(input as CreateTokenDefinitionAllOf);
        }

        /// <summary>
        /// Returns true if CreateTokenDefinitionAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateTokenDefinitionAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateTokenDefinitionAllOf input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.TokenProperties == input.TokenProperties ||
                    (this.TokenProperties != null &&
                    this.TokenProperties.Equals(input.TokenProperties))
                ) && 
                (
                    this.TokenSupply == input.TokenSupply ||
                    (this.TokenSupply != null &&
                    this.TokenSupply.Equals(input.TokenSupply))
                ) && 
                (
                    this.ToAccount == input.ToAccount ||
                    (this.ToAccount != null &&
                    this.ToAccount.Equals(input.ToAccount))
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
                if (this.TokenProperties != null)
                {
                    hashCode = (hashCode * 59) + this.TokenProperties.GetHashCode();
                }
                if (this.TokenSupply != null)
                {
                    hashCode = (hashCode * 59) + this.TokenSupply.GetHashCode();
                }
                if (this.ToAccount != null)
                {
                    hashCode = (hashCode * 59) + this.ToAccount.GetHashCode();
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
            yield break;
        }
    }

}
