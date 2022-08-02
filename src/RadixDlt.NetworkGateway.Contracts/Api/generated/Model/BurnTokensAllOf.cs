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
using FileParameter = RadixDlt.NetworkGateway.Contracts.Api.Client.FileParameter;
using OpenAPIDateConverter = RadixDlt.NetworkGateway.Contracts.Api.Client.OpenAPIDateConverter;

namespace RadixDlt.NetworkGateway.Contracts.Api.Model
{
    /// <summary>
    /// BurnTokensAllOf
    /// </summary>
    [DataContract(Name = "BurnTokens_allOf")]
    public partial class BurnTokensAllOf : IEquatable<BurnTokensAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BurnTokensAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected BurnTokensAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="BurnTokensAllOf" /> class.
        /// </summary>
        /// <param name="fromAccount">fromAccount (required).</param>
        /// <param name="amount">amount (required).</param>
        public BurnTokensAllOf(AccountIdentifier fromAccount = default(AccountIdentifier), TokenAmount amount = default(TokenAmount))
        {
            // to ensure "fromAccount" is required (not null)
            if (fromAccount == null)
            {
                throw new ArgumentNullException("fromAccount is a required property for BurnTokensAllOf and cannot be null");
            }
            this.FromAccount = fromAccount;
            // to ensure "amount" is required (not null)
            if (amount == null)
            {
                throw new ArgumentNullException("amount is a required property for BurnTokensAllOf and cannot be null");
            }
            this.Amount = amount;
        }

        /// <summary>
        /// Gets or Sets FromAccount
        /// </summary>
        [DataMember(Name = "from_account", IsRequired = true, EmitDefaultValue = true)]
        public AccountIdentifier FromAccount { get; set; }

        /// <summary>
        /// Gets or Sets Amount
        /// </summary>
        [DataMember(Name = "amount", IsRequired = true, EmitDefaultValue = true)]
        public TokenAmount Amount { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class BurnTokensAllOf {\n");
            sb.Append("  FromAccount: ").Append(FromAccount).Append("\n");
            sb.Append("  Amount: ").Append(Amount).Append("\n");
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
            return this.Equals(input as BurnTokensAllOf);
        }

        /// <summary>
        /// Returns true if BurnTokensAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of BurnTokensAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(BurnTokensAllOf input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.FromAccount == input.FromAccount ||
                    (this.FromAccount != null &&
                    this.FromAccount.Equals(input.FromAccount))
                ) && 
                (
                    this.Amount == input.Amount ||
                    (this.Amount != null &&
                    this.Amount.Equals(input.Amount))
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
                if (this.FromAccount != null)
                {
                    hashCode = (hashCode * 59) + this.FromAccount.GetHashCode();
                }
                if (this.Amount != null)
                {
                    hashCode = (hashCode * 59) + this.Amount.GetHashCode();
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
