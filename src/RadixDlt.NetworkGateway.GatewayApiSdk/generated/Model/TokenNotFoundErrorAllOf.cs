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
    /// TokenNotFoundErrorAllOf
    /// </summary>
    [DataContract(Name = "TokenNotFoundError_allOf")]
    public partial class TokenNotFoundErrorAllOf : IEquatable<TokenNotFoundErrorAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TokenNotFoundErrorAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected TokenNotFoundErrorAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="TokenNotFoundErrorAllOf" /> class.
        /// </summary>
        /// <param name="tokenNotFound">tokenNotFound (required).</param>
        public TokenNotFoundErrorAllOf(TokenIdentifier tokenNotFound = default(TokenIdentifier))
        {
            // to ensure "tokenNotFound" is required (not null)
            if (tokenNotFound == null)
            {
                throw new ArgumentNullException("tokenNotFound is a required property for TokenNotFoundErrorAllOf and cannot be null");
            }
            this.TokenNotFound = tokenNotFound;
        }

        /// <summary>
        /// Gets or Sets TokenNotFound
        /// </summary>
        [DataMember(Name = "token_not_found", IsRequired = true, EmitDefaultValue = true)]
        public TokenIdentifier TokenNotFound { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TokenNotFoundErrorAllOf {\n");
            sb.Append("  TokenNotFound: ").Append(TokenNotFound).Append("\n");
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
            return this.Equals(input as TokenNotFoundErrorAllOf);
        }

        /// <summary>
        /// Returns true if TokenNotFoundErrorAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of TokenNotFoundErrorAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TokenNotFoundErrorAllOf input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.TokenNotFound == input.TokenNotFound ||
                    (this.TokenNotFound != null &&
                    this.TokenNotFound.Equals(input.TokenNotFound))
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
                if (this.TokenNotFound != null)
                {
                    hashCode = (hashCode * 59) + this.TokenNotFound.GetHashCode();
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
