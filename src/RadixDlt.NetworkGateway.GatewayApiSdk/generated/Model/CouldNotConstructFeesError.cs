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
    /// CouldNotConstructFeesError
    /// </summary>
    [DataContract(Name = "CouldNotConstructFeesError")]
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
    public partial class CouldNotConstructFeesError : GatewayError, IEquatable<CouldNotConstructFeesError>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CouldNotConstructFeesError" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CouldNotConstructFeesError() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CouldNotConstructFeesError" /> class.
        /// </summary>
        /// <param name="attempts">The number of attempts the system tried and failed to create a consistent transaction fee. (required).</param>
        /// <param name="type">The type of error. Each subtype may have its own additional structured fields. (required) (default to &quot;CouldNotConstructFeesError&quot;).</param>
        public CouldNotConstructFeesError(int attempts = default(int), string type = "CouldNotConstructFeesError") : base(type)
        {
            this.Attempts = attempts;
        }

        /// <summary>
        /// The number of attempts the system tried and failed to create a consistent transaction fee.
        /// </summary>
        /// <value>The number of attempts the system tried and failed to create a consistent transaction fee.</value>
        [DataMember(Name = "attempts", IsRequired = true, EmitDefaultValue = true)]
        public int Attempts { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CouldNotConstructFeesError {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  Attempts: ").Append(Attempts).Append("\n");
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
            return this.Equals(input as CouldNotConstructFeesError);
        }

        /// <summary>
        /// Returns true if CouldNotConstructFeesError instances are equal
        /// </summary>
        /// <param name="input">Instance of CouldNotConstructFeesError to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CouldNotConstructFeesError input)
        {
            if (input == null)
            {
                return false;
            }
            return base.Equals(input) && 
                (
                    this.Attempts == input.Attempts ||
                    this.Attempts.Equals(input.Attempts)
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
                hashCode = (hashCode * 59) + this.Attempts.GetHashCode();
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
