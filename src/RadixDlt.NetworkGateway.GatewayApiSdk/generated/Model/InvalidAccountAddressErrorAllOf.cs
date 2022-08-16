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
    /// InvalidAccountAddressErrorAllOf
    /// </summary>
    [DataContract(Name = "InvalidAccountAddressError_allOf")]
    public partial class InvalidAccountAddressErrorAllOf : IEquatable<InvalidAccountAddressErrorAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidAccountAddressErrorAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InvalidAccountAddressErrorAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidAccountAddressErrorAllOf" /> class.
        /// </summary>
        /// <param name="invalidAccountAddress">The account address which was invalid. A descriptive reason is given in the main error message. (required).</param>
        public InvalidAccountAddressErrorAllOf(string invalidAccountAddress = default(string))
        {
            // to ensure "invalidAccountAddress" is required (not null)
            if (invalidAccountAddress == null)
            {
                throw new ArgumentNullException("invalidAccountAddress is a required property for InvalidAccountAddressErrorAllOf and cannot be null");
            }
            this.InvalidAccountAddress = invalidAccountAddress;
        }

        /// <summary>
        /// The account address which was invalid. A descriptive reason is given in the main error message.
        /// </summary>
        /// <value>The account address which was invalid. A descriptive reason is given in the main error message.</value>
        [DataMember(Name = "invalid_account_address", IsRequired = true, EmitDefaultValue = true)]
        public string InvalidAccountAddress { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InvalidAccountAddressErrorAllOf {\n");
            sb.Append("  InvalidAccountAddress: ").Append(InvalidAccountAddress).Append("\n");
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
            return this.Equals(input as InvalidAccountAddressErrorAllOf);
        }

        /// <summary>
        /// Returns true if InvalidAccountAddressErrorAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of InvalidAccountAddressErrorAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InvalidAccountAddressErrorAllOf input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.InvalidAccountAddress == input.InvalidAccountAddress ||
                    (this.InvalidAccountAddress != null &&
                    this.InvalidAccountAddress.Equals(input.InvalidAccountAddress))
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
                if (this.InvalidAccountAddress != null)
                {
                    hashCode = (hashCode * 59) + this.InvalidAccountAddress.GetHashCode();
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
