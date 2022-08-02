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
using FileParameter = RadixDlt.NetworkGateway.Contracts.Api.Client.FileParameter;
using OpenAPIDateConverter = RadixDlt.NetworkGateway.Contracts.Api.Client.OpenAPIDateConverter;

namespace RadixDlt.NetworkGateway.Contracts.Api.Model
{
    /// <summary>
    /// NotEnoughTokensForUnstakeError
    /// </summary>
    [DataContract(Name = "NotEnoughTokensForUnstakeError")]
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
    public partial class NotEnoughTokensForUnstakeError : GatewayError, IEquatable<NotEnoughTokensForUnstakeError>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NotEnoughTokensForUnstakeError" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected NotEnoughTokensForUnstakeError() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="NotEnoughTokensForUnstakeError" /> class.
        /// </summary>
        /// <param name="requestedAmount">requestedAmount (required).</param>
        /// <param name="stake">stake (required).</param>
        /// <param name="pendingStake">pendingStake (required).</param>
        /// <param name="type">The type of error. Each subtype may have its own additional structured fields. (required) (default to &quot;NotEnoughTokensForUnstakeError&quot;).</param>
        public NotEnoughTokensForUnstakeError(TokenAmount requestedAmount = default(TokenAmount), AccountStakeEntry stake = default(AccountStakeEntry), AccountStakeEntry pendingStake = default(AccountStakeEntry), string type = "NotEnoughTokensForUnstakeError") : base(type)
        {
            // to ensure "requestedAmount" is required (not null)
            if (requestedAmount == null)
            {
                throw new ArgumentNullException("requestedAmount is a required property for NotEnoughTokensForUnstakeError and cannot be null");
            }
            this.RequestedAmount = requestedAmount;
            // to ensure "stake" is required (not null)
            if (stake == null)
            {
                throw new ArgumentNullException("stake is a required property for NotEnoughTokensForUnstakeError and cannot be null");
            }
            this.Stake = stake;
            // to ensure "pendingStake" is required (not null)
            if (pendingStake == null)
            {
                throw new ArgumentNullException("pendingStake is a required property for NotEnoughTokensForUnstakeError and cannot be null");
            }
            this.PendingStake = pendingStake;
        }

        /// <summary>
        /// Gets or Sets RequestedAmount
        /// </summary>
        [DataMember(Name = "requested_amount", IsRequired = true, EmitDefaultValue = true)]
        public TokenAmount RequestedAmount { get; set; }

        /// <summary>
        /// Gets or Sets Stake
        /// </summary>
        [DataMember(Name = "stake", IsRequired = true, EmitDefaultValue = true)]
        public AccountStakeEntry Stake { get; set; }

        /// <summary>
        /// Gets or Sets PendingStake
        /// </summary>
        [DataMember(Name = "pending_stake", IsRequired = true, EmitDefaultValue = true)]
        public AccountStakeEntry PendingStake { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class NotEnoughTokensForUnstakeError {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  RequestedAmount: ").Append(RequestedAmount).Append("\n");
            sb.Append("  Stake: ").Append(Stake).Append("\n");
            sb.Append("  PendingStake: ").Append(PendingStake).Append("\n");
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
            return this.Equals(input as NotEnoughTokensForUnstakeError);
        }

        /// <summary>
        /// Returns true if NotEnoughTokensForUnstakeError instances are equal
        /// </summary>
        /// <param name="input">Instance of NotEnoughTokensForUnstakeError to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NotEnoughTokensForUnstakeError input)
        {
            if (input == null)
            {
                return false;
            }
            return base.Equals(input) && 
                (
                    this.RequestedAmount == input.RequestedAmount ||
                    (this.RequestedAmount != null &&
                    this.RequestedAmount.Equals(input.RequestedAmount))
                ) && base.Equals(input) && 
                (
                    this.Stake == input.Stake ||
                    (this.Stake != null &&
                    this.Stake.Equals(input.Stake))
                ) && base.Equals(input) && 
                (
                    this.PendingStake == input.PendingStake ||
                    (this.PendingStake != null &&
                    this.PendingStake.Equals(input.PendingStake))
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
                if (this.RequestedAmount != null)
                {
                    hashCode = (hashCode * 59) + this.RequestedAmount.GetHashCode();
                }
                if (this.Stake != null)
                {
                    hashCode = (hashCode * 59) + this.Stake.GetHashCode();
                }
                if (this.PendingStake != null)
                {
                    hashCode = (hashCode * 59) + this.PendingStake.GetHashCode();
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
