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
    /// CannotStakeError
    /// </summary>
    [DataContract(Name = "CannotStakeError")]
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
    public partial class CannotStakeError : GatewayError, IEquatable<CannotStakeError>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CannotStakeError" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CannotStakeError() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CannotStakeError" /> class.
        /// </summary>
        /// <param name="owner">owner (required).</param>
        /// <param name="user">user (required).</param>
        /// <param name="type">The type of error. Each subtype may have its own additional structured fields. (required) (default to &quot;CannotStakeError&quot;).</param>
        public CannotStakeError(AccountIdentifier owner = default(AccountIdentifier), AccountIdentifier user = default(AccountIdentifier), string type = "CannotStakeError") : base(type)
        {
            // to ensure "owner" is required (not null)
            if (owner == null)
            {
                throw new ArgumentNullException("owner is a required property for CannotStakeError and cannot be null");
            }
            this.Owner = owner;
            // to ensure "user" is required (not null)
            if (user == null)
            {
                throw new ArgumentNullException("user is a required property for CannotStakeError and cannot be null");
            }
            this.User = user;
        }

        /// <summary>
        /// Gets or Sets Owner
        /// </summary>
        [DataMember(Name = "owner", IsRequired = true, EmitDefaultValue = true)]
        public AccountIdentifier Owner { get; set; }

        /// <summary>
        /// Gets or Sets User
        /// </summary>
        [DataMember(Name = "user", IsRequired = true, EmitDefaultValue = true)]
        public AccountIdentifier User { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CannotStakeError {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  Owner: ").Append(Owner).Append("\n");
            sb.Append("  User: ").Append(User).Append("\n");
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
            return this.Equals(input as CannotStakeError);
        }

        /// <summary>
        /// Returns true if CannotStakeError instances are equal
        /// </summary>
        /// <param name="input">Instance of CannotStakeError to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CannotStakeError input)
        {
            if (input == null)
            {
                return false;
            }
            return base.Equals(input) && 
                (
                    this.Owner == input.Owner ||
                    (this.Owner != null &&
                    this.Owner.Equals(input.Owner))
                ) && base.Equals(input) && 
                (
                    this.User == input.User ||
                    (this.User != null &&
                    this.User.Equals(input.User))
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
                if (this.Owner != null)
                {
                    hashCode = (hashCode * 59) + this.Owner.GetHashCode();
                }
                if (this.User != null)
                {
                    hashCode = (hashCode * 59) + this.User.GetHashCode();
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
