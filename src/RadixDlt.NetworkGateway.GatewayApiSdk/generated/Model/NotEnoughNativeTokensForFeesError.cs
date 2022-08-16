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
    /// NotEnoughNativeTokensForFeesError
    /// </summary>
    [DataContract(Name = "NotEnoughNativeTokensForFeesError")]
    [JsonConverter(typeof(JsonSubtypes), "Type")]
    [JsonSubtypes.KnownSubType(typeof(BelowMinimumStakeError), "BelowMinimumStakeError")]
    [JsonSubtypes.KnownSubType(typeof(CannotStakeError), "CannotStakeError")]
    [JsonSubtypes.KnownSubType(typeof(CouldNotConstructFeesError), "CouldNotConstructFeesError")]
    [JsonSubtypes.KnownSubType(typeof(InternalServerError), "InternalServerError")]
    [JsonSubtypes.KnownSubType(typeof(InvalidAccountAddressError), "InvalidAccountAddressError")]
    [JsonSubtypes.KnownSubType(typeof(InvalidActionError), "InvalidActionError")]
    [JsonSubtypes.KnownSubType(typeof(InvalidPublicKeyError), "InvalidPublicKeyError")]
    [JsonSubtypes.KnownSubType(typeof(InvalidRequestError), "InvalidRequestError")]
    [JsonSubtypes.KnownSubType(typeof(InvalidSignatureError), "InvalidSignatureError")]
    [JsonSubtypes.KnownSubType(typeof(InvalidTokenRRIError), "InvalidTokenRRIError")]
    [JsonSubtypes.KnownSubType(typeof(InvalidTokenSymbolError), "InvalidTokenSymbolError")]
    [JsonSubtypes.KnownSubType(typeof(InvalidTransactionError), "InvalidTransactionError")]
    [JsonSubtypes.KnownSubType(typeof(InvalidValidatorAddressError), "InvalidValidatorAddressError")]
    [JsonSubtypes.KnownSubType(typeof(MessageTooLongError), "MessageTooLongError")]
    [JsonSubtypes.KnownSubType(typeof(NotEnoughNativeTokensForFeesError), "NotEnoughNativeTokensForFeesError")]
    [JsonSubtypes.KnownSubType(typeof(NotEnoughTokensForStakeError), "NotEnoughTokensForStakeError")]
    [JsonSubtypes.KnownSubType(typeof(NotEnoughTokensForTransferError), "NotEnoughTokensForTransferError")]
    [JsonSubtypes.KnownSubType(typeof(NotEnoughTokensForUnstakeError), "NotEnoughTokensForUnstakeError")]
    [JsonSubtypes.KnownSubType(typeof(NotSyncedUpError), "NotSyncedUpError")]
    [JsonSubtypes.KnownSubType(typeof(TokenNotFoundError), "TokenNotFoundError")]
    [JsonSubtypes.KnownSubType(typeof(TransactionNotFoundError), "TransactionNotFoundError")]
    public partial class NotEnoughNativeTokensForFeesError : GatewayError, IEquatable<NotEnoughNativeTokensForFeesError>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NotEnoughNativeTokensForFeesError" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected NotEnoughNativeTokensForFeesError() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="NotEnoughNativeTokensForFeesError" /> class.
        /// </summary>
        /// <param name="requiredAmount">requiredAmount (required).</param>
        /// <param name="availableAmount">availableAmount (required).</param>
        /// <param name="type">The type of error. Each subtype may have its own additional structured fields. (required) (default to &quot;NotEnoughNativeTokensForFeesError&quot;).</param>
        public NotEnoughNativeTokensForFeesError(TokenAmount requiredAmount = default(TokenAmount), TokenAmount availableAmount = default(TokenAmount), string type = "NotEnoughNativeTokensForFeesError") : base(type)
        {
            // to ensure "requiredAmount" is required (not null)
            if (requiredAmount == null)
            {
                throw new ArgumentNullException("requiredAmount is a required property for NotEnoughNativeTokensForFeesError and cannot be null");
            }
            this.RequiredAmount = requiredAmount;
            // to ensure "availableAmount" is required (not null)
            if (availableAmount == null)
            {
                throw new ArgumentNullException("availableAmount is a required property for NotEnoughNativeTokensForFeesError and cannot be null");
            }
            this.AvailableAmount = availableAmount;
        }

        /// <summary>
        /// Gets or Sets RequiredAmount
        /// </summary>
        [DataMember(Name = "required_amount", IsRequired = true, EmitDefaultValue = true)]
        public TokenAmount RequiredAmount { get; set; }

        /// <summary>
        /// Gets or Sets AvailableAmount
        /// </summary>
        [DataMember(Name = "available_amount", IsRequired = true, EmitDefaultValue = true)]
        public TokenAmount AvailableAmount { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class NotEnoughNativeTokensForFeesError {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  RequiredAmount: ").Append(RequiredAmount).Append("\n");
            sb.Append("  AvailableAmount: ").Append(AvailableAmount).Append("\n");
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
            return this.Equals(input as NotEnoughNativeTokensForFeesError);
        }

        /// <summary>
        /// Returns true if NotEnoughNativeTokensForFeesError instances are equal
        /// </summary>
        /// <param name="input">Instance of NotEnoughNativeTokensForFeesError to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NotEnoughNativeTokensForFeesError input)
        {
            if (input == null)
            {
                return false;
            }
            return base.Equals(input) && 
                (
                    this.RequiredAmount == input.RequiredAmount ||
                    (this.RequiredAmount != null &&
                    this.RequiredAmount.Equals(input.RequiredAmount))
                ) && base.Equals(input) && 
                (
                    this.AvailableAmount == input.AvailableAmount ||
                    (this.AvailableAmount != null &&
                    this.AvailableAmount.Equals(input.AvailableAmount))
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
                if (this.RequiredAmount != null)
                {
                    hashCode = (hashCode * 59) + this.RequiredAmount.GetHashCode();
                }
                if (this.AvailableAmount != null)
                {
                    hashCode = (hashCode * 59) + this.AvailableAmount.GetHashCode();
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
