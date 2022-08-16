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
    /// TransactionNotFoundErrorAllOf
    /// </summary>
    [DataContract(Name = "TransactionNotFoundError_allOf")]
    public partial class TransactionNotFoundErrorAllOf : IEquatable<TransactionNotFoundErrorAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TransactionNotFoundErrorAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected TransactionNotFoundErrorAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="TransactionNotFoundErrorAllOf" /> class.
        /// </summary>
        /// <param name="transactionNotFound">transactionNotFound (required).</param>
        public TransactionNotFoundErrorAllOf(TransactionIdentifier transactionNotFound = default(TransactionIdentifier))
        {
            // to ensure "transactionNotFound" is required (not null)
            if (transactionNotFound == null)
            {
                throw new ArgumentNullException("transactionNotFound is a required property for TransactionNotFoundErrorAllOf and cannot be null");
            }
            this.TransactionNotFound = transactionNotFound;
        }

        /// <summary>
        /// Gets or Sets TransactionNotFound
        /// </summary>
        [DataMember(Name = "transaction_not_found", IsRequired = true, EmitDefaultValue = true)]
        public TransactionIdentifier TransactionNotFound { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TransactionNotFoundErrorAllOf {\n");
            sb.Append("  TransactionNotFound: ").Append(TransactionNotFound).Append("\n");
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
            return this.Equals(input as TransactionNotFoundErrorAllOf);
        }

        /// <summary>
        /// Returns true if TransactionNotFoundErrorAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of TransactionNotFoundErrorAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TransactionNotFoundErrorAllOf input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.TransactionNotFound == input.TransactionNotFound ||
                    (this.TransactionNotFound != null &&
                    this.TransactionNotFound.Equals(input.TransactionNotFound))
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
                if (this.TransactionNotFound != null)
                {
                    hashCode = (hashCode * 59) + this.TransactionNotFound.GetHashCode();
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
