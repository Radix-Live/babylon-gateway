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
using JsonSubTypes;
using System.ComponentModel.DataAnnotations;
using FileParameter = RadixDlt.NetworkGateway.GatewayApiSdk.Client.FileParameter;
using OpenAPIDateConverter = RadixDlt.NetworkGateway.GatewayApiSdk.Client.OpenAPIDateConverter;

namespace RadixDlt.NetworkGateway.GatewayApiSdk.Model
{
    /// <summary>
    /// BurnTokens
    /// </summary>
    [DataContract(Name = "BurnTokens")]
    [JsonConverter(typeof(JsonSubtypes), "Type")]
    [JsonSubtypes.KnownSubType(typeof(BurnTokens), "BurnTokens")]
    [JsonSubtypes.KnownSubType(typeof(CreateTokenDefinition), "CreateTokenDefinition")]
    [JsonSubtypes.KnownSubType(typeof(MintTokens), "MintTokens")]
    [JsonSubtypes.KnownSubType(typeof(RegisterValidator), "RegisterValidator")]
    [JsonSubtypes.KnownSubType(typeof(StakeTokens), "StakeTokens")]
    [JsonSubtypes.KnownSubType(typeof(TransferTokens), "TransferTokens")]
    [JsonSubtypes.KnownSubType(typeof(UnregisterValidator), "UnregisterValidator")]
    [JsonSubtypes.KnownSubType(typeof(UnstakeTokens), "UnstakeTokens")]
    public partial class BurnTokens : Action, IEquatable<BurnTokens>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BurnTokens" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected BurnTokens() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="BurnTokens" /> class.
        /// </summary>
        /// <param name="fromAccount">fromAccount (required).</param>
        /// <param name="amount">amount (required).</param>
        /// <param name="type">type (required) (default to &quot;BurnTokens&quot;).</param>
        public BurnTokens(AccountIdentifier fromAccount = default(AccountIdentifier), TokenAmount amount = default(TokenAmount), string type = "BurnTokens") : base(type)
        {
            // to ensure "fromAccount" is required (not null)
            if (fromAccount == null)
            {
                throw new ArgumentNullException("fromAccount is a required property for BurnTokens and cannot be null");
            }
            this.FromAccount = fromAccount;
            // to ensure "amount" is required (not null)
            if (amount == null)
            {
                throw new ArgumentNullException("amount is a required property for BurnTokens and cannot be null");
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
            sb.Append("class BurnTokens {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  FromAccount: ").Append(FromAccount).Append("\n");
            sb.Append("  Amount: ").Append(Amount).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public override string ToJson()
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
            return this.Equals(input as BurnTokens);
        }

        /// <summary>
        /// Returns true if BurnTokens instances are equal
        /// </summary>
        /// <param name="input">Instance of BurnTokens to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(BurnTokens input)
        {
            if (input == null)
            {
                return false;
            }
            return base.Equals(input) && 
                (
                    this.FromAccount == input.FromAccount ||
                    (this.FromAccount != null &&
                    this.FromAccount.Equals(input.FromAccount))
                ) && base.Equals(input) && 
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
                int hashCode = base.GetHashCode();
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
            return this.BaseValidate(validationContext);
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        protected IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> BaseValidate(ValidationContext validationContext)
        {
            foreach (var x in base.BaseValidate(validationContext))
            {
                yield return x;
            }
            yield break;
        }
    }

}
