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
    /// ErrorResponse
    /// </summary>
    [DataContract(Name = "ErrorResponse")]
    public partial class ErrorResponse : IEquatable<ErrorResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ErrorResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ErrorResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ErrorResponse" /> class.
        /// </summary>
        /// <param name="code">A numeric code corresponding to the given error type, roughly aligned with HTTP Status Code semantics (eg 400/404/500). (required).</param>
        /// <param name="message">A human-readable error message. (required).</param>
        /// <param name="details">details.</param>
        /// <param name="traceId">A GUID to be used when reporting errors, to allow correlation with the Gateway API&#39;s error logs..</param>
        public ErrorResponse(int code = default(int), string message = default(string), GatewayError details = default(GatewayError), string traceId = default(string))
        {
            this.Code = code;
            // to ensure "message" is required (not null)
            if (message == null)
            {
                throw new ArgumentNullException("message is a required property for ErrorResponse and cannot be null");
            }
            this.Message = message;
            this.Details = details;
            this.TraceId = traceId;
        }

        /// <summary>
        /// A numeric code corresponding to the given error type, roughly aligned with HTTP Status Code semantics (eg 400/404/500).
        /// </summary>
        /// <value>A numeric code corresponding to the given error type, roughly aligned with HTTP Status Code semantics (eg 400/404/500).</value>
        [DataMember(Name = "code", IsRequired = true, EmitDefaultValue = true)]
        public int Code { get; set; }

        /// <summary>
        /// A human-readable error message.
        /// </summary>
        /// <value>A human-readable error message.</value>
        [DataMember(Name = "message", IsRequired = true, EmitDefaultValue = true)]
        public string Message { get; set; }

        /// <summary>
        /// Gets or Sets Details
        /// </summary>
        [DataMember(Name = "details", EmitDefaultValue = false)]
        public GatewayError Details { get; set; }

        /// <summary>
        /// A GUID to be used when reporting errors, to allow correlation with the Gateway API&#39;s error logs.
        /// </summary>
        /// <value>A GUID to be used when reporting errors, to allow correlation with the Gateway API&#39;s error logs.</value>
        [DataMember(Name = "trace_id", EmitDefaultValue = false)]
        public string TraceId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ErrorResponse {\n");
            sb.Append("  Code: ").Append(Code).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("  Details: ").Append(Details).Append("\n");
            sb.Append("  TraceId: ").Append(TraceId).Append("\n");
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
            return this.Equals(input as ErrorResponse);
        }

        /// <summary>
        /// Returns true if ErrorResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of ErrorResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ErrorResponse input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Code == input.Code ||
                    this.Code.Equals(input.Code)
                ) && 
                (
                    this.Message == input.Message ||
                    (this.Message != null &&
                    this.Message.Equals(input.Message))
                ) && 
                (
                    this.Details == input.Details ||
                    (this.Details != null &&
                    this.Details.Equals(input.Details))
                ) && 
                (
                    this.TraceId == input.TraceId ||
                    (this.TraceId != null &&
                    this.TraceId.Equals(input.TraceId))
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
                hashCode = (hashCode * 59) + this.Code.GetHashCode();
                if (this.Message != null)
                {
                    hashCode = (hashCode * 59) + this.Message.GetHashCode();
                }
                if (this.Details != null)
                {
                    hashCode = (hashCode * 59) + this.Details.GetHashCode();
                }
                if (this.TraceId != null)
                {
                    hashCode = (hashCode * 59) + this.TraceId.GetHashCode();
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
