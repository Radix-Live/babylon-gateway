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
    /// GatewayApiVersions
    /// </summary>
    [DataContract(Name = "GatewayApiVersions")]
    public partial class GatewayApiVersions : IEquatable<GatewayApiVersions>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GatewayApiVersions" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected GatewayApiVersions() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="GatewayApiVersions" /> class.
        /// </summary>
        /// <param name="version">The release that is currently deployed to the Gateway API. (required).</param>
        /// <param name="openApiSchemaVersion">The open api schema version that was used to generate the API models. (required).</param>
        public GatewayApiVersions(string version = default(string), string openApiSchemaVersion = default(string))
        {
            // to ensure "version" is required (not null)
            if (version == null)
            {
                throw new ArgumentNullException("version is a required property for GatewayApiVersions and cannot be null");
            }
            this._Version = version;
            // to ensure "openApiSchemaVersion" is required (not null)
            if (openApiSchemaVersion == null)
            {
                throw new ArgumentNullException("openApiSchemaVersion is a required property for GatewayApiVersions and cannot be null");
            }
            this.OpenApiSchemaVersion = openApiSchemaVersion;
        }

        /// <summary>
        /// The release that is currently deployed to the Gateway API.
        /// </summary>
        /// <value>The release that is currently deployed to the Gateway API.</value>
        [DataMember(Name = "version", IsRequired = true, EmitDefaultValue = true)]
        public string _Version { get; set; }

        /// <summary>
        /// The open api schema version that was used to generate the API models.
        /// </summary>
        /// <value>The open api schema version that was used to generate the API models.</value>
        [DataMember(Name = "open_api_schema_version", IsRequired = true, EmitDefaultValue = true)]
        public string OpenApiSchemaVersion { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GatewayApiVersions {\n");
            sb.Append("  _Version: ").Append(_Version).Append("\n");
            sb.Append("  OpenApiSchemaVersion: ").Append(OpenApiSchemaVersion).Append("\n");
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
            return this.Equals(input as GatewayApiVersions);
        }

        /// <summary>
        /// Returns true if GatewayApiVersions instances are equal
        /// </summary>
        /// <param name="input">Instance of GatewayApiVersions to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GatewayApiVersions input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this._Version == input._Version ||
                    (this._Version != null &&
                    this._Version.Equals(input._Version))
                ) && 
                (
                    this.OpenApiSchemaVersion == input.OpenApiSchemaVersion ||
                    (this.OpenApiSchemaVersion != null &&
                    this.OpenApiSchemaVersion.Equals(input.OpenApiSchemaVersion))
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
                if (this._Version != null)
                {
                    hashCode = (hashCode * 59) + this._Version.GetHashCode();
                }
                if (this.OpenApiSchemaVersion != null)
                {
                    hashCode = (hashCode * 59) + this.OpenApiSchemaVersion.GetHashCode();
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
