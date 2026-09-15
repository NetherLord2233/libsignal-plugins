/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $String = $util.global.String, $Array = $util.global.Array, $parseInt = $util.global.parseInt, $Number = $util.global.Number, $BigInt = $util.global.BigInt;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const groupproto = $root.groupproto = (() => {

    /**
     * Namespace groupproto.
     * @exports groupproto
     * @namespace
     */
    const groupproto = {};

    groupproto.SenderKeyMessage = (function() {

        /**
         * Properties of a SenderKeyMessage.
         * @typedef {Object} groupproto.SenderKeyMessage.$Properties
         * @property {number|null} [id] SenderKeyMessage id
         * @property {number|null} [iteration] SenderKeyMessage iteration
         * @property {Uint8Array|null} [ciphertext] SenderKeyMessage ciphertext
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SenderKeyMessage.
         * @memberof groupproto
         * @interface ISenderKeyMessage
         * @augments groupproto.SenderKeyMessage.$Properties
         * @deprecated Use groupproto.SenderKeyMessage.$Properties instead.
         */

        /**
         * Shape of a SenderKeyMessage.
         * @typedef {groupproto.SenderKeyMessage.$Properties} groupproto.SenderKeyMessage.$Shape
         */

        /**
         * Constructs a new SenderKeyMessage.
         * @memberof groupproto
         * @classdesc Represents a SenderKeyMessage.
         * @constructor
         * @param {groupproto.SenderKeyMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SenderKeyMessage = function SenderKeyMessage(properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SenderKeyMessage id.
         * @member {number} id
         * @memberof groupproto.SenderKeyMessage
         * @instance
         */
        SenderKeyMessage.prototype.id = 0;

        /**
         * SenderKeyMessage iteration.
         * @member {number} iteration
         * @memberof groupproto.SenderKeyMessage
         * @instance
         */
        SenderKeyMessage.prototype.iteration = 0;

        /**
         * SenderKeyMessage ciphertext.
         * @member {Uint8Array} ciphertext
         * @memberof groupproto.SenderKeyMessage
         * @instance
         */
        SenderKeyMessage.prototype.ciphertext = $util.newBuffer([]);

        /**
         * Creates a new SenderKeyMessage instance using the specified properties.
         * @function create
         * @memberof groupproto.SenderKeyMessage
         * @static
         * @param {groupproto.SenderKeyMessage.$Properties=} [properties] Properties to set
         * @returns {groupproto.SenderKeyMessage} SenderKeyMessage instance
         * @type {{
         *   (properties: groupproto.SenderKeyMessage.$Shape): groupproto.SenderKeyMessage & groupproto.SenderKeyMessage.$Shape;
         *   (properties?: groupproto.SenderKeyMessage.$Properties): groupproto.SenderKeyMessage;
         * }}
         */
        SenderKeyMessage.create = function(properties) {
            return new SenderKeyMessage(properties);
        };

        /**
         * Encodes the specified SenderKeyMessage message. Does not implicitly {@link groupproto.SenderKeyMessage.verify|verify} messages.
         * @function encode
         * @memberof groupproto.SenderKeyMessage
         * @static
         * @param {groupproto.SenderKeyMessage.$Properties} message SenderKeyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyMessage.encode = function SenderKeyMessage$encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.iteration);
            if (message.ciphertext != null && $Object.hasOwnProperty.call(message, "ciphertext"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ciphertext);
            return writer;
        };

        /**
         * Encodes the specified SenderKeyMessage message, length delimited. Does not implicitly {@link groupproto.SenderKeyMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof groupproto.SenderKeyMessage
         * @static
         * @param {groupproto.SenderKeyMessage.$Properties} message SenderKeyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyMessage.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer.
         * @function decode
         * @memberof groupproto.SenderKeyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {groupproto.SenderKeyMessage & groupproto.SenderKeyMessage.$Shape} SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyMessage.decode = function SenderKeyMessage$decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === $undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.iteration = reader.uint32();
                        break;
                    }
                case 3: {
                        message.ciphertext = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            return message;
        };

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof groupproto.SenderKeyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {groupproto.SenderKeyMessage & groupproto.SenderKeyMessage.$Shape} SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyMessage.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyMessage message.
         * @function verify
         * @memberof groupproto.SenderKeyMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyMessage.verify = function SenderKeyMessage$verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                if (!$util.isInteger(message.iteration))
                    return "iteration: integer expected";
            if (message.ciphertext != null && $Object.hasOwnProperty.call(message, "ciphertext"))
                if (!(message.ciphertext && typeof message.ciphertext.length === "number" || $util.isString(message.ciphertext)))
                    return "ciphertext: buffer expected";
            return null;
        };

        /**
         * Creates a SenderKeyMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof groupproto.SenderKeyMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {groupproto.SenderKeyMessage} SenderKeyMessage
         */
        SenderKeyMessage.fromObject = function SenderKeyMessage$fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".groupproto.SenderKeyMessage: object expected");
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.iteration != null)
                message.iteration = object.iteration >>> 0;
            if (object.ciphertext != null)
                if (typeof object.ciphertext === "string")
                    $util.base64.decode(object.ciphertext, message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext)), 0);
                else if (object.ciphertext.length >= 0)
                    message.ciphertext = object.ciphertext;
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof groupproto.SenderKeyMessage
         * @static
         * @param {groupproto.SenderKeyMessage} message SenderKeyMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyMessage.toObject = function SenderKeyMessage$toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.iteration = 0;
                if (options.bytes === $String)
                    object.ciphertext = "";
                else {
                    object.ciphertext = [];
                    if (options.bytes !== $Array)
                        object.ciphertext = $util.newBuffer(object.ciphertext);
                }
            }
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                object.iteration = message.iteration;
            if (message.ciphertext != null && $Object.hasOwnProperty.call(message, "ciphertext"))
                object.ciphertext = options.bytes === $String ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.ciphertext) : message.ciphertext;
            return object;
        };

        /**
         * Converts this SenderKeyMessage to JSON.
         * @function toJSON
         * @memberof groupproto.SenderKeyMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyMessage.prototype.toJSON = function() {
            return SenderKeyMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SenderKeyMessage
         * @function getTypeUrl
         * @memberof groupproto.SenderKeyMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SenderKeyMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/groupproto.SenderKeyMessage";
        };

        return SenderKeyMessage;
    })();

    groupproto.SenderKeyDistributionMessage = (function() {

        /**
         * Properties of a SenderKeyDistributionMessage.
         * @typedef {Object} groupproto.SenderKeyDistributionMessage.$Properties
         * @property {number|null} [id] SenderKeyDistributionMessage id
         * @property {number|null} [iteration] SenderKeyDistributionMessage iteration
         * @property {Uint8Array|null} [chainKey] SenderKeyDistributionMessage chainKey
         * @property {Uint8Array|null} [signingKey] SenderKeyDistributionMessage signingKey
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SenderKeyDistributionMessage.
         * @memberof groupproto
         * @interface ISenderKeyDistributionMessage
         * @augments groupproto.SenderKeyDistributionMessage.$Properties
         * @deprecated Use groupproto.SenderKeyDistributionMessage.$Properties instead.
         */

        /**
         * Shape of a SenderKeyDistributionMessage.
         * @typedef {groupproto.SenderKeyDistributionMessage.$Properties} groupproto.SenderKeyDistributionMessage.$Shape
         */

        /**
         * Constructs a new SenderKeyDistributionMessage.
         * @memberof groupproto
         * @classdesc Represents a SenderKeyDistributionMessage.
         * @constructor
         * @param {groupproto.SenderKeyDistributionMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SenderKeyDistributionMessage = function SenderKeyDistributionMessage(properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SenderKeyDistributionMessage id.
         * @member {number} id
         * @memberof groupproto.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.id = 0;

        /**
         * SenderKeyDistributionMessage iteration.
         * @member {number} iteration
         * @memberof groupproto.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.iteration = 0;

        /**
         * SenderKeyDistributionMessage chainKey.
         * @member {Uint8Array} chainKey
         * @memberof groupproto.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.chainKey = $util.newBuffer([]);

        /**
         * SenderKeyDistributionMessage signingKey.
         * @member {Uint8Array} signingKey
         * @memberof groupproto.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.signingKey = $util.newBuffer([]);

        /**
         * Creates a new SenderKeyDistributionMessage instance using the specified properties.
         * @function create
         * @memberof groupproto.SenderKeyDistributionMessage
         * @static
         * @param {groupproto.SenderKeyDistributionMessage.$Properties=} [properties] Properties to set
         * @returns {groupproto.SenderKeyDistributionMessage} SenderKeyDistributionMessage instance
         * @type {{
         *   (properties: groupproto.SenderKeyDistributionMessage.$Shape): groupproto.SenderKeyDistributionMessage & groupproto.SenderKeyDistributionMessage.$Shape;
         *   (properties?: groupproto.SenderKeyDistributionMessage.$Properties): groupproto.SenderKeyDistributionMessage;
         * }}
         */
        SenderKeyDistributionMessage.create = function(properties) {
            return new SenderKeyDistributionMessage(properties);
        };

        /**
         * Encodes the specified SenderKeyDistributionMessage message. Does not implicitly {@link groupproto.SenderKeyDistributionMessage.verify|verify} messages.
         * @function encode
         * @memberof groupproto.SenderKeyDistributionMessage
         * @static
         * @param {groupproto.SenderKeyDistributionMessage.$Properties} message SenderKeyDistributionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyDistributionMessage.encode = function SenderKeyDistributionMessage$encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.iteration);
            if (message.chainKey != null && $Object.hasOwnProperty.call(message, "chainKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.chainKey);
            if (message.signingKey != null && $Object.hasOwnProperty.call(message, "signingKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signingKey);
            return writer;
        };

        /**
         * Encodes the specified SenderKeyDistributionMessage message, length delimited. Does not implicitly {@link groupproto.SenderKeyDistributionMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof groupproto.SenderKeyDistributionMessage
         * @static
         * @param {groupproto.SenderKeyDistributionMessage.$Properties} message SenderKeyDistributionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyDistributionMessage.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer.
         * @function decode
         * @memberof groupproto.SenderKeyDistributionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {groupproto.SenderKeyDistributionMessage & groupproto.SenderKeyDistributionMessage.$Shape} SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyDistributionMessage.decode = function SenderKeyDistributionMessage$decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === $undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.iteration = reader.uint32();
                        break;
                    }
                case 3: {
                        message.chainKey = reader.bytes();
                        break;
                    }
                case 4: {
                        message.signingKey = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            return message;
        };

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof groupproto.SenderKeyDistributionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {groupproto.SenderKeyDistributionMessage & groupproto.SenderKeyDistributionMessage.$Shape} SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyDistributionMessage.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyDistributionMessage message.
         * @function verify
         * @memberof groupproto.SenderKeyDistributionMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyDistributionMessage.verify = function SenderKeyDistributionMessage$verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                if (!$util.isInteger(message.iteration))
                    return "iteration: integer expected";
            if (message.chainKey != null && $Object.hasOwnProperty.call(message, "chainKey"))
                if (!(message.chainKey && typeof message.chainKey.length === "number" || $util.isString(message.chainKey)))
                    return "chainKey: buffer expected";
            if (message.signingKey != null && $Object.hasOwnProperty.call(message, "signingKey"))
                if (!(message.signingKey && typeof message.signingKey.length === "number" || $util.isString(message.signingKey)))
                    return "signingKey: buffer expected";
            return null;
        };

        /**
         * Creates a SenderKeyDistributionMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof groupproto.SenderKeyDistributionMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {groupproto.SenderKeyDistributionMessage} SenderKeyDistributionMessage
         */
        SenderKeyDistributionMessage.fromObject = function SenderKeyDistributionMessage$fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".groupproto.SenderKeyDistributionMessage: object expected");
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.iteration != null)
                message.iteration = object.iteration >>> 0;
            if (object.chainKey != null)
                if (typeof object.chainKey === "string")
                    $util.base64.decode(object.chainKey, message.chainKey = $util.newBuffer($util.base64.length(object.chainKey)), 0);
                else if (object.chainKey.length >= 0)
                    message.chainKey = object.chainKey;
            if (object.signingKey != null)
                if (typeof object.signingKey === "string")
                    $util.base64.decode(object.signingKey, message.signingKey = $util.newBuffer($util.base64.length(object.signingKey)), 0);
                else if (object.signingKey.length >= 0)
                    message.signingKey = object.signingKey;
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyDistributionMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof groupproto.SenderKeyDistributionMessage
         * @static
         * @param {groupproto.SenderKeyDistributionMessage} message SenderKeyDistributionMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyDistributionMessage.toObject = function SenderKeyDistributionMessage$toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.iteration = 0;
                if (options.bytes === $String)
                    object.chainKey = "";
                else {
                    object.chainKey = [];
                    if (options.bytes !== $Array)
                        object.chainKey = $util.newBuffer(object.chainKey);
                }
                if (options.bytes === $String)
                    object.signingKey = "";
                else {
                    object.signingKey = [];
                    if (options.bytes !== $Array)
                        object.signingKey = $util.newBuffer(object.signingKey);
                }
            }
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                object.iteration = message.iteration;
            if (message.chainKey != null && $Object.hasOwnProperty.call(message, "chainKey"))
                object.chainKey = options.bytes === $String ? $util.base64.encode(message.chainKey, 0, message.chainKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.chainKey) : message.chainKey;
            if (message.signingKey != null && $Object.hasOwnProperty.call(message, "signingKey"))
                object.signingKey = options.bytes === $String ? $util.base64.encode(message.signingKey, 0, message.signingKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.signingKey) : message.signingKey;
            return object;
        };

        /**
         * Converts this SenderKeyDistributionMessage to JSON.
         * @function toJSON
         * @memberof groupproto.SenderKeyDistributionMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyDistributionMessage.prototype.toJSON = function() {
            return SenderKeyDistributionMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SenderKeyDistributionMessage
         * @function getTypeUrl
         * @memberof groupproto.SenderKeyDistributionMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SenderKeyDistributionMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/groupproto.SenderKeyDistributionMessage";
        };

        return SenderKeyDistributionMessage;
    })();

    groupproto.SenderChainKey = (function() {

        /**
         * Properties of a SenderChainKey.
         * @typedef {Object} groupproto.SenderChainKey.$Properties
         * @property {number|null} [iteration] SenderChainKey iteration
         * @property {Uint8Array|null} [seed] SenderChainKey seed
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SenderChainKey.
         * @memberof groupproto
         * @interface ISenderChainKey
         * @augments groupproto.SenderChainKey.$Properties
         * @deprecated Use groupproto.SenderChainKey.$Properties instead.
         */

        /**
         * Shape of a SenderChainKey.
         * @typedef {groupproto.SenderChainKey.$Properties} groupproto.SenderChainKey.$Shape
         */

        /**
         * Constructs a new SenderChainKey.
         * @memberof groupproto
         * @classdesc Represents a SenderChainKey.
         * @constructor
         * @param {groupproto.SenderChainKey.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SenderChainKey = function SenderChainKey(properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SenderChainKey iteration.
         * @member {number} iteration
         * @memberof groupproto.SenderChainKey
         * @instance
         */
        SenderChainKey.prototype.iteration = 0;

        /**
         * SenderChainKey seed.
         * @member {Uint8Array} seed
         * @memberof groupproto.SenderChainKey
         * @instance
         */
        SenderChainKey.prototype.seed = $util.newBuffer([]);

        /**
         * Creates a new SenderChainKey instance using the specified properties.
         * @function create
         * @memberof groupproto.SenderChainKey
         * @static
         * @param {groupproto.SenderChainKey.$Properties=} [properties] Properties to set
         * @returns {groupproto.SenderChainKey} SenderChainKey instance
         * @type {{
         *   (properties: groupproto.SenderChainKey.$Shape): groupproto.SenderChainKey & groupproto.SenderChainKey.$Shape;
         *   (properties?: groupproto.SenderChainKey.$Properties): groupproto.SenderChainKey;
         * }}
         */
        SenderChainKey.create = function(properties) {
            return new SenderChainKey(properties);
        };

        /**
         * Encodes the specified SenderChainKey message. Does not implicitly {@link groupproto.SenderChainKey.verify|verify} messages.
         * @function encode
         * @memberof groupproto.SenderChainKey
         * @static
         * @param {groupproto.SenderChainKey.$Properties} message SenderChainKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderChainKey.encode = function SenderChainKey$encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
            if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
            return writer;
        };

        /**
         * Encodes the specified SenderChainKey message, length delimited. Does not implicitly {@link groupproto.SenderChainKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof groupproto.SenderChainKey
         * @static
         * @param {groupproto.SenderChainKey.$Properties} message SenderChainKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderChainKey.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SenderChainKey message from the specified reader or buffer.
         * @function decode
         * @memberof groupproto.SenderChainKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {groupproto.SenderChainKey & groupproto.SenderChainKey.$Shape} SenderChainKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderChainKey.decode = function SenderChainKey$decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === $undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.iteration = reader.uint32();
                        break;
                    }
                case 2: {
                        message.seed = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            return message;
        };

        /**
         * Decodes a SenderChainKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof groupproto.SenderChainKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {groupproto.SenderChainKey & groupproto.SenderChainKey.$Shape} SenderChainKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderChainKey.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderChainKey message.
         * @function verify
         * @memberof groupproto.SenderChainKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderChainKey.verify = function SenderChainKey$verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                if (!$util.isInteger(message.iteration))
                    return "iteration: integer expected";
            if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                    return "seed: buffer expected";
            return null;
        };

        /**
         * Creates a SenderChainKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof groupproto.SenderChainKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {groupproto.SenderChainKey} SenderChainKey
         */
        SenderChainKey.fromObject = function SenderChainKey$fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".groupproto.SenderChainKey: object expected");
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.iteration != null)
                message.iteration = object.iteration >>> 0;
            if (object.seed != null)
                if (typeof object.seed === "string")
                    $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                else if (object.seed.length >= 0)
                    message.seed = object.seed;
            return message;
        };

        /**
         * Creates a plain object from a SenderChainKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof groupproto.SenderChainKey
         * @static
         * @param {groupproto.SenderChainKey} message SenderChainKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderChainKey.toObject = function SenderChainKey$toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.iteration = 0;
                if (options.bytes === $String)
                    object.seed = "";
                else {
                    object.seed = [];
                    if (options.bytes !== $Array)
                        object.seed = $util.newBuffer(object.seed);
                }
            }
            if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                object.iteration = message.iteration;
            if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                object.seed = options.bytes === $String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.seed) : message.seed;
            return object;
        };

        /**
         * Converts this SenderChainKey to JSON.
         * @function toJSON
         * @memberof groupproto.SenderChainKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderChainKey.prototype.toJSON = function() {
            return SenderChainKey.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SenderChainKey
         * @function getTypeUrl
         * @memberof groupproto.SenderChainKey
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SenderChainKey.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/groupproto.SenderChainKey";
        };

        return SenderChainKey;
    })();

    groupproto.SenderMessageKey = (function() {

        /**
         * Properties of a SenderMessageKey.
         * @typedef {Object} groupproto.SenderMessageKey.$Properties
         * @property {number|null} [iteration] SenderMessageKey iteration
         * @property {Uint8Array|null} [seed] SenderMessageKey seed
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SenderMessageKey.
         * @memberof groupproto
         * @interface ISenderMessageKey
         * @augments groupproto.SenderMessageKey.$Properties
         * @deprecated Use groupproto.SenderMessageKey.$Properties instead.
         */

        /**
         * Shape of a SenderMessageKey.
         * @typedef {groupproto.SenderMessageKey.$Properties} groupproto.SenderMessageKey.$Shape
         */

        /**
         * Constructs a new SenderMessageKey.
         * @memberof groupproto
         * @classdesc Represents a SenderMessageKey.
         * @constructor
         * @param {groupproto.SenderMessageKey.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SenderMessageKey = function SenderMessageKey(properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SenderMessageKey iteration.
         * @member {number} iteration
         * @memberof groupproto.SenderMessageKey
         * @instance
         */
        SenderMessageKey.prototype.iteration = 0;

        /**
         * SenderMessageKey seed.
         * @member {Uint8Array} seed
         * @memberof groupproto.SenderMessageKey
         * @instance
         */
        SenderMessageKey.prototype.seed = $util.newBuffer([]);

        /**
         * Creates a new SenderMessageKey instance using the specified properties.
         * @function create
         * @memberof groupproto.SenderMessageKey
         * @static
         * @param {groupproto.SenderMessageKey.$Properties=} [properties] Properties to set
         * @returns {groupproto.SenderMessageKey} SenderMessageKey instance
         * @type {{
         *   (properties: groupproto.SenderMessageKey.$Shape): groupproto.SenderMessageKey & groupproto.SenderMessageKey.$Shape;
         *   (properties?: groupproto.SenderMessageKey.$Properties): groupproto.SenderMessageKey;
         * }}
         */
        SenderMessageKey.create = function(properties) {
            return new SenderMessageKey(properties);
        };

        /**
         * Encodes the specified SenderMessageKey message. Does not implicitly {@link groupproto.SenderMessageKey.verify|verify} messages.
         * @function encode
         * @memberof groupproto.SenderMessageKey
         * @static
         * @param {groupproto.SenderMessageKey.$Properties} message SenderMessageKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderMessageKey.encode = function SenderMessageKey$encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
            if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
            return writer;
        };

        /**
         * Encodes the specified SenderMessageKey message, length delimited. Does not implicitly {@link groupproto.SenderMessageKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof groupproto.SenderMessageKey
         * @static
         * @param {groupproto.SenderMessageKey.$Properties} message SenderMessageKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderMessageKey.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SenderMessageKey message from the specified reader or buffer.
         * @function decode
         * @memberof groupproto.SenderMessageKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {groupproto.SenderMessageKey & groupproto.SenderMessageKey.$Shape} SenderMessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderMessageKey.decode = function SenderMessageKey$decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === $undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.iteration = reader.uint32();
                        break;
                    }
                case 2: {
                        message.seed = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            return message;
        };

        /**
         * Decodes a SenderMessageKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof groupproto.SenderMessageKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {groupproto.SenderMessageKey & groupproto.SenderMessageKey.$Shape} SenderMessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderMessageKey.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderMessageKey message.
         * @function verify
         * @memberof groupproto.SenderMessageKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderMessageKey.verify = function SenderMessageKey$verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                if (!$util.isInteger(message.iteration))
                    return "iteration: integer expected";
            if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                    return "seed: buffer expected";
            return null;
        };

        /**
         * Creates a SenderMessageKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof groupproto.SenderMessageKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {groupproto.SenderMessageKey} SenderMessageKey
         */
        SenderMessageKey.fromObject = function SenderMessageKey$fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".groupproto.SenderMessageKey: object expected");
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.iteration != null)
                message.iteration = object.iteration >>> 0;
            if (object.seed != null)
                if (typeof object.seed === "string")
                    $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                else if (object.seed.length >= 0)
                    message.seed = object.seed;
            return message;
        };

        /**
         * Creates a plain object from a SenderMessageKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof groupproto.SenderMessageKey
         * @static
         * @param {groupproto.SenderMessageKey} message SenderMessageKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderMessageKey.toObject = function SenderMessageKey$toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.iteration = 0;
                if (options.bytes === $String)
                    object.seed = "";
                else {
                    object.seed = [];
                    if (options.bytes !== $Array)
                        object.seed = $util.newBuffer(object.seed);
                }
            }
            if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                object.iteration = message.iteration;
            if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                object.seed = options.bytes === $String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.seed) : message.seed;
            return object;
        };

        /**
         * Converts this SenderMessageKey to JSON.
         * @function toJSON
         * @memberof groupproto.SenderMessageKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderMessageKey.prototype.toJSON = function() {
            return SenderMessageKey.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SenderMessageKey
         * @function getTypeUrl
         * @memberof groupproto.SenderMessageKey
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SenderMessageKey.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/groupproto.SenderMessageKey";
        };

        return SenderMessageKey;
    })();

    groupproto.SenderSigningKey = (function() {

        /**
         * Properties of a SenderSigningKey.
         * @typedef {Object} groupproto.SenderSigningKey.$Properties
         * @property {Uint8Array|null} ["public"] SenderSigningKey public
         * @property {Uint8Array|null} ["private"] SenderSigningKey private
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SenderSigningKey.
         * @memberof groupproto
         * @interface ISenderSigningKey
         * @augments groupproto.SenderSigningKey.$Properties
         * @deprecated Use groupproto.SenderSigningKey.$Properties instead.
         */

        /**
         * Shape of a SenderSigningKey.
         * @typedef {groupproto.SenderSigningKey.$Properties} groupproto.SenderSigningKey.$Shape
         */

        /**
         * Constructs a new SenderSigningKey.
         * @memberof groupproto
         * @classdesc Represents a SenderSigningKey.
         * @constructor
         * @param {groupproto.SenderSigningKey.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SenderSigningKey = function SenderSigningKey(properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SenderSigningKey public.
         * @member {Uint8Array} public
         * @memberof groupproto.SenderSigningKey
         * @instance
         */
        SenderSigningKey.prototype["public"] = $util.newBuffer([]);

        /**
         * SenderSigningKey private.
         * @member {Uint8Array} private
         * @memberof groupproto.SenderSigningKey
         * @instance
         */
        SenderSigningKey.prototype["private"] = $util.newBuffer([]);

        /**
         * Creates a new SenderSigningKey instance using the specified properties.
         * @function create
         * @memberof groupproto.SenderSigningKey
         * @static
         * @param {groupproto.SenderSigningKey.$Properties=} [properties] Properties to set
         * @returns {groupproto.SenderSigningKey} SenderSigningKey instance
         * @type {{
         *   (properties: groupproto.SenderSigningKey.$Shape): groupproto.SenderSigningKey & groupproto.SenderSigningKey.$Shape;
         *   (properties?: groupproto.SenderSigningKey.$Properties): groupproto.SenderSigningKey;
         * }}
         */
        SenderSigningKey.create = function(properties) {
            return new SenderSigningKey(properties);
        };

        /**
         * Encodes the specified SenderSigningKey message. Does not implicitly {@link groupproto.SenderSigningKey.verify|verify} messages.
         * @function encode
         * @memberof groupproto.SenderSigningKey
         * @static
         * @param {groupproto.SenderSigningKey.$Properties} message SenderSigningKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderSigningKey.encode = function SenderSigningKey$encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message["public"] != null && $Object.hasOwnProperty.call(message, "public"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message["public"]);
            if (message["private"] != null && $Object.hasOwnProperty.call(message, "private"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message["private"]);
            return writer;
        };

        /**
         * Encodes the specified SenderSigningKey message, length delimited. Does not implicitly {@link groupproto.SenderSigningKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof groupproto.SenderSigningKey
         * @static
         * @param {groupproto.SenderSigningKey.$Properties} message SenderSigningKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderSigningKey.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SenderSigningKey message from the specified reader or buffer.
         * @function decode
         * @memberof groupproto.SenderSigningKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {groupproto.SenderSigningKey & groupproto.SenderSigningKey.$Shape} SenderSigningKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderSigningKey.decode = function SenderSigningKey$decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === $undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message["public"] = reader.bytes();
                        break;
                    }
                case 2: {
                        message["private"] = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            return message;
        };

        /**
         * Decodes a SenderSigningKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof groupproto.SenderSigningKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {groupproto.SenderSigningKey & groupproto.SenderSigningKey.$Shape} SenderSigningKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderSigningKey.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderSigningKey message.
         * @function verify
         * @memberof groupproto.SenderSigningKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderSigningKey.verify = function SenderSigningKey$verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message["public"] != null && $Object.hasOwnProperty.call(message, "public"))
                if (!(message["public"] && typeof message["public"].length === "number" || $util.isString(message["public"])))
                    return "public: buffer expected";
            if (message["private"] != null && $Object.hasOwnProperty.call(message, "private"))
                if (!(message["private"] && typeof message["private"].length === "number" || $util.isString(message["private"])))
                    return "private: buffer expected";
            return null;
        };

        /**
         * Creates a SenderSigningKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof groupproto.SenderSigningKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {groupproto.SenderSigningKey} SenderSigningKey
         */
        SenderSigningKey.fromObject = function SenderSigningKey$fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".groupproto.SenderSigningKey: object expected");
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object["public"] != null)
                if (typeof object["public"] === "string")
                    $util.base64.decode(object["public"], message["public"] = $util.newBuffer($util.base64.length(object["public"])), 0);
                else if (object["public"].length >= 0)
                    message["public"] = object["public"];
            if (object["private"] != null)
                if (typeof object["private"] === "string")
                    $util.base64.decode(object["private"], message["private"] = $util.newBuffer($util.base64.length(object["private"])), 0);
                else if (object["private"].length >= 0)
                    message["private"] = object["private"];
            return message;
        };

        /**
         * Creates a plain object from a SenderSigningKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof groupproto.SenderSigningKey
         * @static
         * @param {groupproto.SenderSigningKey} message SenderSigningKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderSigningKey.toObject = function SenderSigningKey$toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                if (options.bytes === $String)
                    object["public"] = "";
                else {
                    object["public"] = [];
                    if (options.bytes !== $Array)
                        object["public"] = $util.newBuffer(object["public"]);
                }
                if (options.bytes === $String)
                    object["private"] = "";
                else {
                    object["private"] = [];
                    if (options.bytes !== $Array)
                        object["private"] = $util.newBuffer(object["private"]);
                }
            }
            if (message["public"] != null && $Object.hasOwnProperty.call(message, "public"))
                object["public"] = options.bytes === $String ? $util.base64.encode(message["public"], 0, message["public"].length) : options.bytes === $Array ? $Array.prototype.slice.call(message["public"]) : message["public"];
            if (message["private"] != null && $Object.hasOwnProperty.call(message, "private"))
                object["private"] = options.bytes === $String ? $util.base64.encode(message["private"], 0, message["private"].length) : options.bytes === $Array ? $Array.prototype.slice.call(message["private"]) : message["private"];
            return object;
        };

        /**
         * Converts this SenderSigningKey to JSON.
         * @function toJSON
         * @memberof groupproto.SenderSigningKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderSigningKey.prototype.toJSON = function() {
            return SenderSigningKey.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SenderSigningKey
         * @function getTypeUrl
         * @memberof groupproto.SenderSigningKey
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SenderSigningKey.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/groupproto.SenderSigningKey";
        };

        return SenderSigningKey;
    })();

    groupproto.SenderKeyStateStructure = (function() {

        /**
         * Properties of a SenderKeyStateStructure.
         * @typedef {Object} groupproto.SenderKeyStateStructure.$Properties
         * @property {number|null} [senderKeyId] SenderKeyStateStructure senderKeyId
         * @property {groupproto.SenderChainKey.$Properties|null} [senderChainKey] SenderKeyStateStructure senderChainKey
         * @property {groupproto.SenderSigningKey.$Properties|null} [senderSigningKey] SenderKeyStateStructure senderSigningKey
         * @property {Array.<groupproto.SenderMessageKey.$Properties>|null} [senderMessageKeys] SenderKeyStateStructure senderMessageKeys
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SenderKeyStateStructure.
         * @memberof groupproto
         * @interface ISenderKeyStateStructure
         * @augments groupproto.SenderKeyStateStructure.$Properties
         * @deprecated Use groupproto.SenderKeyStateStructure.$Properties instead.
         */

        /**
         * Shape of a SenderKeyStateStructure.
         * @typedef {groupproto.SenderKeyStateStructure.$Properties} groupproto.SenderKeyStateStructure.$Shape
         */

        /**
         * Constructs a new SenderKeyStateStructure.
         * @memberof groupproto
         * @classdesc Represents a SenderKeyStateStructure.
         * @constructor
         * @param {groupproto.SenderKeyStateStructure.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SenderKeyStateStructure = function SenderKeyStateStructure(properties) {
            this.senderMessageKeys = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SenderKeyStateStructure senderKeyId.
         * @member {number} senderKeyId
         * @memberof groupproto.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderKeyId = 0;

        /**
         * SenderKeyStateStructure senderChainKey.
         * @member {groupproto.SenderChainKey.$Properties|null|undefined} senderChainKey
         * @memberof groupproto.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderChainKey = null;

        /**
         * SenderKeyStateStructure senderSigningKey.
         * @member {groupproto.SenderSigningKey.$Properties|null|undefined} senderSigningKey
         * @memberof groupproto.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderSigningKey = null;

        /**
         * SenderKeyStateStructure senderMessageKeys.
         * @member {Array.<groupproto.SenderMessageKey.$Properties>} senderMessageKeys
         * @memberof groupproto.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderMessageKeys = $util.emptyArray;

        /**
         * Creates a new SenderKeyStateStructure instance using the specified properties.
         * @function create
         * @memberof groupproto.SenderKeyStateStructure
         * @static
         * @param {groupproto.SenderKeyStateStructure.$Properties=} [properties] Properties to set
         * @returns {groupproto.SenderKeyStateStructure} SenderKeyStateStructure instance
         * @type {{
         *   (properties: groupproto.SenderKeyStateStructure.$Shape): groupproto.SenderKeyStateStructure & groupproto.SenderKeyStateStructure.$Shape;
         *   (properties?: groupproto.SenderKeyStateStructure.$Properties): groupproto.SenderKeyStateStructure;
         * }}
         */
        SenderKeyStateStructure.create = function(properties) {
            return new SenderKeyStateStructure(properties);
        };

        /**
         * Encodes the specified SenderKeyStateStructure message. Does not implicitly {@link groupproto.SenderKeyStateStructure.verify|verify} messages.
         * @function encode
         * @memberof groupproto.SenderKeyStateStructure
         * @static
         * @param {groupproto.SenderKeyStateStructure.$Properties} message SenderKeyStateStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyStateStructure.encode = function SenderKeyStateStructure$encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.senderKeyId != null && $Object.hasOwnProperty.call(message, "senderKeyId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.senderKeyId);
            if (message.senderChainKey != null && $Object.hasOwnProperty.call(message, "senderChainKey"))
                $root.groupproto.SenderChainKey.encode(message.senderChainKey, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.senderSigningKey != null && $Object.hasOwnProperty.call(message, "senderSigningKey"))
                $root.groupproto.SenderSigningKey.encode(message.senderSigningKey, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.senderMessageKeys != null && message.senderMessageKeys.length)
                for (let i = 0; i < message.senderMessageKeys.length; ++i)
                    $root.groupproto.SenderMessageKey.encode(message.senderMessageKeys[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SenderKeyStateStructure message, length delimited. Does not implicitly {@link groupproto.SenderKeyStateStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof groupproto.SenderKeyStateStructure
         * @static
         * @param {groupproto.SenderKeyStateStructure.$Properties} message SenderKeyStateStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyStateStructure.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer.
         * @function decode
         * @memberof groupproto.SenderKeyStateStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {groupproto.SenderKeyStateStructure & groupproto.SenderKeyStateStructure.$Shape} SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyStateStructure.decode = function SenderKeyStateStructure$decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === $undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.senderKeyId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.senderChainKey = $root.groupproto.SenderChainKey.decode(reader, reader.uint32(), $undefined, long + 1);
                        break;
                    }
                case 3: {
                        message.senderSigningKey = $root.groupproto.SenderSigningKey.decode(reader, reader.uint32(), $undefined, long + 1);
                        break;
                    }
                case 4: {
                        if (!(message.senderMessageKeys && message.senderMessageKeys.length))
                            message.senderMessageKeys = [];
                        message.senderMessageKeys.push($root.groupproto.SenderMessageKey.decode(reader, reader.uint32(), $undefined, long + 1));
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            return message;
        };

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof groupproto.SenderKeyStateStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {groupproto.SenderKeyStateStructure & groupproto.SenderKeyStateStructure.$Shape} SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyStateStructure.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyStateStructure message.
         * @function verify
         * @memberof groupproto.SenderKeyStateStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyStateStructure.verify = function SenderKeyStateStructure$verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.senderKeyId != null && $Object.hasOwnProperty.call(message, "senderKeyId"))
                if (!$util.isInteger(message.senderKeyId))
                    return "senderKeyId: integer expected";
            if (message.senderChainKey != null && $Object.hasOwnProperty.call(message, "senderChainKey")) {
                let error = $root.groupproto.SenderChainKey.verify(message.senderChainKey, long + 1);
                if (error)
                    return "senderChainKey." + error;
            }
            if (message.senderSigningKey != null && $Object.hasOwnProperty.call(message, "senderSigningKey")) {
                let error = $root.groupproto.SenderSigningKey.verify(message.senderSigningKey, long + 1);
                if (error)
                    return "senderSigningKey." + error;
            }
            if (message.senderMessageKeys != null && $Object.hasOwnProperty.call(message, "senderMessageKeys")) {
                if (!$Array.isArray(message.senderMessageKeys))
                    return "senderMessageKeys: array expected";
                for (let i = 0; i < message.senderMessageKeys.length; ++i) {
                    let error = $root.groupproto.SenderMessageKey.verify(message.senderMessageKeys[i], long + 1);
                    if (error)
                        return "senderMessageKeys." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SenderKeyStateStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof groupproto.SenderKeyStateStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {groupproto.SenderKeyStateStructure} SenderKeyStateStructure
         */
        SenderKeyStateStructure.fromObject = function SenderKeyStateStructure$fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".groupproto.SenderKeyStateStructure: object expected");
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.senderKeyId != null)
                message.senderKeyId = object.senderKeyId >>> 0;
            if (object.senderChainKey != null) {
                if (!$util.isObject(object.senderChainKey))
                    throw $TypeError(".groupproto.SenderKeyStateStructure.senderChainKey: object expected");
                message.senderChainKey = $root.groupproto.SenderChainKey.fromObject(object.senderChainKey, long + 1);
            }
            if (object.senderSigningKey != null) {
                if (!$util.isObject(object.senderSigningKey))
                    throw $TypeError(".groupproto.SenderKeyStateStructure.senderSigningKey: object expected");
                message.senderSigningKey = $root.groupproto.SenderSigningKey.fromObject(object.senderSigningKey, long + 1);
            }
            if (object.senderMessageKeys) {
                if (!$Array.isArray(object.senderMessageKeys))
                    throw $TypeError(".groupproto.SenderKeyStateStructure.senderMessageKeys: array expected");
                message.senderMessageKeys = [];
                for (let i = 0; i < object.senderMessageKeys.length; ++i) {
                    if (!$util.isObject(object.senderMessageKeys[i]))
                        throw $TypeError(".groupproto.SenderKeyStateStructure.senderMessageKeys: object expected");
                    message.senderMessageKeys[i] = $root.groupproto.SenderMessageKey.fromObject(object.senderMessageKeys[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyStateStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof groupproto.SenderKeyStateStructure
         * @static
         * @param {groupproto.SenderKeyStateStructure} message SenderKeyStateStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyStateStructure.toObject = function SenderKeyStateStructure$toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.senderMessageKeys = [];
            if (options.defaults) {
                object.senderKeyId = 0;
                object.senderChainKey = null;
                object.senderSigningKey = null;
            }
            if (message.senderKeyId != null && $Object.hasOwnProperty.call(message, "senderKeyId"))
                object.senderKeyId = message.senderKeyId;
            if (message.senderChainKey != null && $Object.hasOwnProperty.call(message, "senderChainKey"))
                object.senderChainKey = $root.groupproto.SenderChainKey.toObject(message.senderChainKey, options, _depth + 1);
            if (message.senderSigningKey != null && $Object.hasOwnProperty.call(message, "senderSigningKey"))
                object.senderSigningKey = $root.groupproto.SenderSigningKey.toObject(message.senderSigningKey, options, _depth + 1);
            if (message.senderMessageKeys && message.senderMessageKeys.length) {
                object.senderMessageKeys = [];
                for (let j = 0; j < message.senderMessageKeys.length; ++j)
                    object.senderMessageKeys[j] = $root.groupproto.SenderMessageKey.toObject(message.senderMessageKeys[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this SenderKeyStateStructure to JSON.
         * @function toJSON
         * @memberof groupproto.SenderKeyStateStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyStateStructure.prototype.toJSON = function() {
            return SenderKeyStateStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SenderKeyStateStructure
         * @function getTypeUrl
         * @memberof groupproto.SenderKeyStateStructure
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SenderKeyStateStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/groupproto.SenderKeyStateStructure";
        };

        return SenderKeyStateStructure;
    })();

    groupproto.SenderKeyRecordStructure = (function() {

        /**
         * Properties of a SenderKeyRecordStructure.
         * @typedef {Object} groupproto.SenderKeyRecordStructure.$Properties
         * @property {Array.<groupproto.SenderKeyStateStructure.$Properties>|null} [senderKeyStates] SenderKeyRecordStructure senderKeyStates
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SenderKeyRecordStructure.
         * @memberof groupproto
         * @interface ISenderKeyRecordStructure
         * @augments groupproto.SenderKeyRecordStructure.$Properties
         * @deprecated Use groupproto.SenderKeyRecordStructure.$Properties instead.
         */

        /**
         * Shape of a SenderKeyRecordStructure.
         * @typedef {groupproto.SenderKeyRecordStructure.$Properties} groupproto.SenderKeyRecordStructure.$Shape
         */

        /**
         * Constructs a new SenderKeyRecordStructure.
         * @memberof groupproto
         * @classdesc Represents a SenderKeyRecordStructure.
         * @constructor
         * @param {groupproto.SenderKeyRecordStructure.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SenderKeyRecordStructure = function SenderKeyRecordStructure(properties) {
            this.senderKeyStates = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SenderKeyRecordStructure senderKeyStates.
         * @member {Array.<groupproto.SenderKeyStateStructure.$Properties>} senderKeyStates
         * @memberof groupproto.SenderKeyRecordStructure
         * @instance
         */
        SenderKeyRecordStructure.prototype.senderKeyStates = $util.emptyArray;

        /**
         * Creates a new SenderKeyRecordStructure instance using the specified properties.
         * @function create
         * @memberof groupproto.SenderKeyRecordStructure
         * @static
         * @param {groupproto.SenderKeyRecordStructure.$Properties=} [properties] Properties to set
         * @returns {groupproto.SenderKeyRecordStructure} SenderKeyRecordStructure instance
         * @type {{
         *   (properties: groupproto.SenderKeyRecordStructure.$Shape): groupproto.SenderKeyRecordStructure & groupproto.SenderKeyRecordStructure.$Shape;
         *   (properties?: groupproto.SenderKeyRecordStructure.$Properties): groupproto.SenderKeyRecordStructure;
         * }}
         */
        SenderKeyRecordStructure.create = function(properties) {
            return new SenderKeyRecordStructure(properties);
        };

        /**
         * Encodes the specified SenderKeyRecordStructure message. Does not implicitly {@link groupproto.SenderKeyRecordStructure.verify|verify} messages.
         * @function encode
         * @memberof groupproto.SenderKeyRecordStructure
         * @static
         * @param {groupproto.SenderKeyRecordStructure.$Properties} message SenderKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyRecordStructure.encode = function SenderKeyRecordStructure$encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.senderKeyStates != null && message.senderKeyStates.length)
                for (let i = 0; i < message.senderKeyStates.length; ++i)
                    $root.groupproto.SenderKeyStateStructure.encode(message.senderKeyStates[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SenderKeyRecordStructure message, length delimited. Does not implicitly {@link groupproto.SenderKeyRecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof groupproto.SenderKeyRecordStructure
         * @static
         * @param {groupproto.SenderKeyRecordStructure.$Properties} message SenderKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyRecordStructure.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof groupproto.SenderKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {groupproto.SenderKeyRecordStructure & groupproto.SenderKeyRecordStructure.$Shape} SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyRecordStructure.decode = function SenderKeyRecordStructure$decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === $undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.senderKeyStates && message.senderKeyStates.length))
                            message.senderKeyStates = [];
                        message.senderKeyStates.push($root.groupproto.SenderKeyStateStructure.decode(reader, reader.uint32(), $undefined, long + 1));
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            return message;
        };

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof groupproto.SenderKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {groupproto.SenderKeyRecordStructure & groupproto.SenderKeyRecordStructure.$Shape} SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyRecordStructure.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyRecordStructure message.
         * @function verify
         * @memberof groupproto.SenderKeyRecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyRecordStructure.verify = function SenderKeyRecordStructure$verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.senderKeyStates != null && $Object.hasOwnProperty.call(message, "senderKeyStates")) {
                if (!$Array.isArray(message.senderKeyStates))
                    return "senderKeyStates: array expected";
                for (let i = 0; i < message.senderKeyStates.length; ++i) {
                    let error = $root.groupproto.SenderKeyStateStructure.verify(message.senderKeyStates[i], long + 1);
                    if (error)
                        return "senderKeyStates." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SenderKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof groupproto.SenderKeyRecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {groupproto.SenderKeyRecordStructure} SenderKeyRecordStructure
         */
        SenderKeyRecordStructure.fromObject = function SenderKeyRecordStructure$fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".groupproto.SenderKeyRecordStructure: object expected");
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.senderKeyStates) {
                if (!$Array.isArray(object.senderKeyStates))
                    throw $TypeError(".groupproto.SenderKeyRecordStructure.senderKeyStates: array expected");
                message.senderKeyStates = [];
                for (let i = 0; i < object.senderKeyStates.length; ++i) {
                    if (!$util.isObject(object.senderKeyStates[i]))
                        throw $TypeError(".groupproto.SenderKeyRecordStructure.senderKeyStates: object expected");
                    message.senderKeyStates[i] = $root.groupproto.SenderKeyStateStructure.fromObject(object.senderKeyStates[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyRecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof groupproto.SenderKeyRecordStructure
         * @static
         * @param {groupproto.SenderKeyRecordStructure} message SenderKeyRecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyRecordStructure.toObject = function SenderKeyRecordStructure$toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.senderKeyStates = [];
            if (message.senderKeyStates && message.senderKeyStates.length) {
                object.senderKeyStates = [];
                for (let j = 0; j < message.senderKeyStates.length; ++j)
                    object.senderKeyStates[j] = $root.groupproto.SenderKeyStateStructure.toObject(message.senderKeyStates[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this SenderKeyRecordStructure to JSON.
         * @function toJSON
         * @memberof groupproto.SenderKeyRecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyRecordStructure.prototype.toJSON = function() {
            return SenderKeyRecordStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SenderKeyRecordStructure
         * @function getTypeUrl
         * @memberof groupproto.SenderKeyRecordStructure
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SenderKeyRecordStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/groupproto.SenderKeyRecordStructure";
        };

        return SenderKeyRecordStructure;
    })();

    return groupproto;
})();

export const signal = $root.signal = (() => {

    /**
     * Namespace signal.
     * @exports signal
     * @namespace
     */
    const signal = {};

    signal.storage = (function() {

        /**
         * Namespace storage.
         * @memberof signal
         * @namespace
         */
        const storage = {};

        storage.SessionRecord = (function() {

            /**
             * Properties of a SessionRecord.
             * @typedef {Object} signal.storage.SessionRecord.$Properties
             * @property {number|null} [version] SessionRecord version
             * @property {signal.storage.Session.$Properties|null} [current] SessionRecord current
             * @property {Array.<signal.storage.Session.$Properties>|null} [archived] SessionRecord archived
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SessionRecord.
             * @memberof signal.storage
             * @interface ISessionRecord
             * @augments signal.storage.SessionRecord.$Properties
             * @deprecated Use signal.storage.SessionRecord.$Properties instead.
             */

            /**
             * Shape of a SessionRecord.
             * @typedef {signal.storage.SessionRecord.$Properties} signal.storage.SessionRecord.$Shape
             */

            /**
             * Constructs a new SessionRecord.
             * @memberof signal.storage
             * @classdesc Represents a SessionRecord.
             * @constructor
             * @param {signal.storage.SessionRecord.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SessionRecord = function SessionRecord(properties) {
                this.archived = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SessionRecord version.
             * @member {number} version
             * @memberof signal.storage.SessionRecord
             * @instance
             */
            SessionRecord.prototype.version = 0;

            /**
             * SessionRecord current.
             * @member {signal.storage.Session.$Properties|null|undefined} current
             * @memberof signal.storage.SessionRecord
             * @instance
             */
            SessionRecord.prototype.current = null;

            /**
             * SessionRecord archived.
             * @member {Array.<signal.storage.Session.$Properties>} archived
             * @memberof signal.storage.SessionRecord
             * @instance
             */
            SessionRecord.prototype.archived = $util.emptyArray;

            /**
             * Creates a new SessionRecord instance using the specified properties.
             * @function create
             * @memberof signal.storage.SessionRecord
             * @static
             * @param {signal.storage.SessionRecord.$Properties=} [properties] Properties to set
             * @returns {signal.storage.SessionRecord} SessionRecord instance
             * @type {{
             *   (properties: signal.storage.SessionRecord.$Shape): signal.storage.SessionRecord & signal.storage.SessionRecord.$Shape;
             *   (properties?: signal.storage.SessionRecord.$Properties): signal.storage.SessionRecord;
             * }}
             */
            SessionRecord.create = function(properties) {
                return new SessionRecord(properties);
            };

            /**
             * Encodes the specified SessionRecord message. Does not implicitly {@link signal.storage.SessionRecord.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.SessionRecord
             * @static
             * @param {signal.storage.SessionRecord.$Properties} message SessionRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionRecord.encode = function SessionRecord$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
                if (message.current != null && $Object.hasOwnProperty.call(message, "current"))
                    $root.signal.storage.Session.encode(message.current, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.archived != null && message.archived.length)
                    for (let i = 0; i < message.archived.length; ++i)
                        $root.signal.storage.Session.encode(message.archived[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SessionRecord message, length delimited. Does not implicitly {@link signal.storage.SessionRecord.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.SessionRecord
             * @static
             * @param {signal.storage.SessionRecord.$Properties} message SessionRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionRecord.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SessionRecord message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.SessionRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.SessionRecord & signal.storage.SessionRecord.$Shape} SessionRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionRecord.decode = function SessionRecord$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.version = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.current = $root.signal.storage.Session.decode(reader, reader.uint32(), $undefined, long + 1);
                            break;
                        }
                    case 3: {
                            if (!(message.archived && message.archived.length))
                                message.archived = [];
                            message.archived.push($root.signal.storage.Session.decode(reader, reader.uint32(), $undefined, long + 1));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a SessionRecord message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.SessionRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.SessionRecord & signal.storage.SessionRecord.$Shape} SessionRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionRecord.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SessionRecord message.
             * @function verify
             * @memberof signal.storage.SessionRecord
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SessionRecord.verify = function SessionRecord$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    if (!$util.isInteger(message.version))
                        return "version: integer expected";
                if (message.current != null && $Object.hasOwnProperty.call(message, "current")) {
                    let error = $root.signal.storage.Session.verify(message.current, long + 1);
                    if (error)
                        return "current." + error;
                }
                if (message.archived != null && $Object.hasOwnProperty.call(message, "archived")) {
                    if (!$Array.isArray(message.archived))
                        return "archived: array expected";
                    for (let i = 0; i < message.archived.length; ++i) {
                        let error = $root.signal.storage.Session.verify(message.archived[i], long + 1);
                        if (error)
                            return "archived." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SessionRecord message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.SessionRecord
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.SessionRecord} SessionRecord
             */
            SessionRecord.fromObject = function SessionRecord$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.SessionRecord: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.version != null)
                    message.version = object.version >>> 0;
                if (object.current != null) {
                    if (!$util.isObject(object.current))
                        throw $TypeError(".signal.storage.SessionRecord.current: object expected");
                    message.current = $root.signal.storage.Session.fromObject(object.current, long + 1);
                }
                if (object.archived) {
                    if (!$Array.isArray(object.archived))
                        throw $TypeError(".signal.storage.SessionRecord.archived: array expected");
                    message.archived = [];
                    for (let i = 0; i < object.archived.length; ++i) {
                        if (!$util.isObject(object.archived[i]))
                            throw $TypeError(".signal.storage.SessionRecord.archived: object expected");
                        message.archived[i] = $root.signal.storage.Session.fromObject(object.archived[i], long + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SessionRecord message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.SessionRecord
             * @static
             * @param {signal.storage.SessionRecord} message SessionRecord
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SessionRecord.toObject = function SessionRecord$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.archived = [];
                if (options.defaults) {
                    object.version = 0;
                    object.current = null;
                }
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    object.version = message.version;
                if (message.current != null && $Object.hasOwnProperty.call(message, "current"))
                    object.current = $root.signal.storage.Session.toObject(message.current, options, _depth + 1);
                if (message.archived && message.archived.length) {
                    object.archived = [];
                    for (let j = 0; j < message.archived.length; ++j)
                        object.archived[j] = $root.signal.storage.Session.toObject(message.archived[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this SessionRecord to JSON.
             * @function toJSON
             * @memberof signal.storage.SessionRecord
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SessionRecord.prototype.toJSON = function() {
                return SessionRecord.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SessionRecord
             * @function getTypeUrl
             * @memberof signal.storage.SessionRecord
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SessionRecord.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.SessionRecord";
            };

            return SessionRecord;
        })();

        storage.Session = (function() {

            /**
             * Properties of a Session.
             * @typedef {Object} signal.storage.Session.$Properties
             * @property {Uint8Array|null} [localIdentityPublic] Session localIdentityPublic
             * @property {Uint8Array|null} [remoteIdentityPublic] Session remoteIdentityPublic
             * @property {number|null} [localRegistrationId] Session localRegistrationId
             * @property {number|null} [remoteRegistrationId] Session remoteRegistrationId
             * @property {Uint8Array|null} [rootKey] Session rootKey
             * @property {number|null} [previousCounter] Session previousCounter
             * @property {signal.storage.SenderChain.$Properties|null} [senderChain] Session senderChain
             * @property {Array.<signal.storage.ReceiverChain.$Properties>|null} [receiverChains] Session receiverChains
             * @property {signal.storage.PendingPreKey.$Properties|null} [pendingPreKey] Session pendingPreKey
             * @property {Uint8Array|null} [aliceBaseKey] Session aliceBaseKey
             * @property {signal.storage.SessionMetadata.$Properties|null} [metadata] Session metadata
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Session.
             * @memberof signal.storage
             * @interface ISession
             * @augments signal.storage.Session.$Properties
             * @deprecated Use signal.storage.Session.$Properties instead.
             */

            /**
             * Shape of a Session.
             * @typedef {signal.storage.Session.$Properties} signal.storage.Session.$Shape
             */

            /**
             * Constructs a new Session.
             * @memberof signal.storage
             * @classdesc Represents a Session.
             * @constructor
             * @param {signal.storage.Session.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Session = function Session(properties) {
                this.receiverChains = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Session localIdentityPublic.
             * @member {Uint8Array} localIdentityPublic
             * @memberof signal.storage.Session
             * @instance
             */
            Session.prototype.localIdentityPublic = $util.newBuffer([]);

            /**
             * Session remoteIdentityPublic.
             * @member {Uint8Array} remoteIdentityPublic
             * @memberof signal.storage.Session
             * @instance
             */
            Session.prototype.remoteIdentityPublic = $util.newBuffer([]);

            /**
             * Session localRegistrationId.
             * @member {number} localRegistrationId
             * @memberof signal.storage.Session
             * @instance
             */
            Session.prototype.localRegistrationId = 0;

            /**
             * Session remoteRegistrationId.
             * @member {number} remoteRegistrationId
             * @memberof signal.storage.Session
             * @instance
             */
            Session.prototype.remoteRegistrationId = 0;

            /**
             * Session rootKey.
             * @member {Uint8Array} rootKey
             * @memberof signal.storage.Session
             * @instance
             */
            Session.prototype.rootKey = $util.newBuffer([]);

            /**
             * Session previousCounter.
             * @member {number} previousCounter
             * @memberof signal.storage.Session
             * @instance
             */
            Session.prototype.previousCounter = 0;

            /**
             * Session senderChain.
             * @member {signal.storage.SenderChain.$Properties|null|undefined} senderChain
             * @memberof signal.storage.Session
             * @instance
             */
            Session.prototype.senderChain = null;

            /**
             * Session receiverChains.
             * @member {Array.<signal.storage.ReceiverChain.$Properties>} receiverChains
             * @memberof signal.storage.Session
             * @instance
             */
            Session.prototype.receiverChains = $util.emptyArray;

            /**
             * Session pendingPreKey.
             * @member {signal.storage.PendingPreKey.$Properties|null|undefined} pendingPreKey
             * @memberof signal.storage.Session
             * @instance
             */
            Session.prototype.pendingPreKey = null;

            /**
             * Session aliceBaseKey.
             * @member {Uint8Array} aliceBaseKey
             * @memberof signal.storage.Session
             * @instance
             */
            Session.prototype.aliceBaseKey = $util.newBuffer([]);

            /**
             * Session metadata.
             * @member {signal.storage.SessionMetadata.$Properties|null|undefined} metadata
             * @memberof signal.storage.Session
             * @instance
             */
            Session.prototype.metadata = null;

            /**
             * Creates a new Session instance using the specified properties.
             * @function create
             * @memberof signal.storage.Session
             * @static
             * @param {signal.storage.Session.$Properties=} [properties] Properties to set
             * @returns {signal.storage.Session} Session instance
             * @type {{
             *   (properties: signal.storage.Session.$Shape): signal.storage.Session & signal.storage.Session.$Shape;
             *   (properties?: signal.storage.Session.$Properties): signal.storage.Session;
             * }}
             */
            Session.create = function(properties) {
                return new Session(properties);
            };

            /**
             * Encodes the specified Session message. Does not implicitly {@link signal.storage.Session.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.Session
             * @static
             * @param {signal.storage.Session.$Properties} message Session message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Session.encode = function Session$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.localIdentityPublic != null && $Object.hasOwnProperty.call(message, "localIdentityPublic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.localIdentityPublic);
                if (message.remoteIdentityPublic != null && $Object.hasOwnProperty.call(message, "remoteIdentityPublic"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.remoteIdentityPublic);
                if (message.localRegistrationId != null && $Object.hasOwnProperty.call(message, "localRegistrationId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.localRegistrationId);
                if (message.remoteRegistrationId != null && $Object.hasOwnProperty.call(message, "remoteRegistrationId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.remoteRegistrationId);
                if (message.rootKey != null && $Object.hasOwnProperty.call(message, "rootKey"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.rootKey);
                if (message.previousCounter != null && $Object.hasOwnProperty.call(message, "previousCounter"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.previousCounter);
                if (message.senderChain != null && $Object.hasOwnProperty.call(message, "senderChain"))
                    $root.signal.storage.SenderChain.encode(message.senderChain, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                if (message.receiverChains != null && message.receiverChains.length)
                    for (let i = 0; i < message.receiverChains.length; ++i)
                        $root.signal.storage.ReceiverChain.encode(message.receiverChains[i], writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                if (message.pendingPreKey != null && $Object.hasOwnProperty.call(message, "pendingPreKey"))
                    $root.signal.storage.PendingPreKey.encode(message.pendingPreKey, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
                if (message.aliceBaseKey != null && $Object.hasOwnProperty.call(message, "aliceBaseKey"))
                    writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.aliceBaseKey);
                if (message.metadata != null && $Object.hasOwnProperty.call(message, "metadata"))
                    $root.signal.storage.SessionMetadata.encode(message.metadata, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Session message, length delimited. Does not implicitly {@link signal.storage.Session.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.Session
             * @static
             * @param {signal.storage.Session.$Properties} message Session message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Session.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Session message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.Session
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.Session & signal.storage.Session.$Shape} Session
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Session.decode = function Session$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.localIdentityPublic = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.remoteIdentityPublic = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.localRegistrationId = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.remoteRegistrationId = reader.uint32();
                            break;
                        }
                    case 5: {
                            message.rootKey = reader.bytes();
                            break;
                        }
                    case 6: {
                            message.previousCounter = reader.uint32();
                            break;
                        }
                    case 7: {
                            message.senderChain = $root.signal.storage.SenderChain.decode(reader, reader.uint32(), $undefined, long + 1);
                            break;
                        }
                    case 8: {
                            if (!(message.receiverChains && message.receiverChains.length))
                                message.receiverChains = [];
                            message.receiverChains.push($root.signal.storage.ReceiverChain.decode(reader, reader.uint32(), $undefined, long + 1));
                            break;
                        }
                    case 9: {
                            message.pendingPreKey = $root.signal.storage.PendingPreKey.decode(reader, reader.uint32(), $undefined, long + 1);
                            break;
                        }
                    case 10: {
                            message.aliceBaseKey = reader.bytes();
                            break;
                        }
                    case 11: {
                            message.metadata = $root.signal.storage.SessionMetadata.decode(reader, reader.uint32(), $undefined, long + 1);
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a Session message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.Session
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.Session & signal.storage.Session.$Shape} Session
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Session.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Session message.
             * @function verify
             * @memberof signal.storage.Session
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Session.verify = function Session$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.localIdentityPublic != null && $Object.hasOwnProperty.call(message, "localIdentityPublic"))
                    if (!(message.localIdentityPublic && typeof message.localIdentityPublic.length === "number" || $util.isString(message.localIdentityPublic)))
                        return "localIdentityPublic: buffer expected";
                if (message.remoteIdentityPublic != null && $Object.hasOwnProperty.call(message, "remoteIdentityPublic"))
                    if (!(message.remoteIdentityPublic && typeof message.remoteIdentityPublic.length === "number" || $util.isString(message.remoteIdentityPublic)))
                        return "remoteIdentityPublic: buffer expected";
                if (message.localRegistrationId != null && $Object.hasOwnProperty.call(message, "localRegistrationId"))
                    if (!$util.isInteger(message.localRegistrationId))
                        return "localRegistrationId: integer expected";
                if (message.remoteRegistrationId != null && $Object.hasOwnProperty.call(message, "remoteRegistrationId"))
                    if (!$util.isInteger(message.remoteRegistrationId))
                        return "remoteRegistrationId: integer expected";
                if (message.rootKey != null && $Object.hasOwnProperty.call(message, "rootKey"))
                    if (!(message.rootKey && typeof message.rootKey.length === "number" || $util.isString(message.rootKey)))
                        return "rootKey: buffer expected";
                if (message.previousCounter != null && $Object.hasOwnProperty.call(message, "previousCounter"))
                    if (!$util.isInteger(message.previousCounter))
                        return "previousCounter: integer expected";
                if (message.senderChain != null && $Object.hasOwnProperty.call(message, "senderChain")) {
                    let error = $root.signal.storage.SenderChain.verify(message.senderChain, long + 1);
                    if (error)
                        return "senderChain." + error;
                }
                if (message.receiverChains != null && $Object.hasOwnProperty.call(message, "receiverChains")) {
                    if (!$Array.isArray(message.receiverChains))
                        return "receiverChains: array expected";
                    for (let i = 0; i < message.receiverChains.length; ++i) {
                        let error = $root.signal.storage.ReceiverChain.verify(message.receiverChains[i], long + 1);
                        if (error)
                            return "receiverChains." + error;
                    }
                }
                if (message.pendingPreKey != null && $Object.hasOwnProperty.call(message, "pendingPreKey")) {
                    let error = $root.signal.storage.PendingPreKey.verify(message.pendingPreKey, long + 1);
                    if (error)
                        return "pendingPreKey." + error;
                }
                if (message.aliceBaseKey != null && $Object.hasOwnProperty.call(message, "aliceBaseKey"))
                    if (!(message.aliceBaseKey && typeof message.aliceBaseKey.length === "number" || $util.isString(message.aliceBaseKey)))
                        return "aliceBaseKey: buffer expected";
                if (message.metadata != null && $Object.hasOwnProperty.call(message, "metadata")) {
                    let error = $root.signal.storage.SessionMetadata.verify(message.metadata, long + 1);
                    if (error)
                        return "metadata." + error;
                }
                return null;
            };

            /**
             * Creates a Session message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.Session
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.Session} Session
             */
            Session.fromObject = function Session$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.Session: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.localIdentityPublic != null)
                    if (typeof object.localIdentityPublic === "string")
                        $util.base64.decode(object.localIdentityPublic, message.localIdentityPublic = $util.newBuffer($util.base64.length(object.localIdentityPublic)), 0);
                    else if (object.localIdentityPublic.length >= 0)
                        message.localIdentityPublic = object.localIdentityPublic;
                if (object.remoteIdentityPublic != null)
                    if (typeof object.remoteIdentityPublic === "string")
                        $util.base64.decode(object.remoteIdentityPublic, message.remoteIdentityPublic = $util.newBuffer($util.base64.length(object.remoteIdentityPublic)), 0);
                    else if (object.remoteIdentityPublic.length >= 0)
                        message.remoteIdentityPublic = object.remoteIdentityPublic;
                if (object.localRegistrationId != null)
                    message.localRegistrationId = object.localRegistrationId >>> 0;
                if (object.remoteRegistrationId != null)
                    message.remoteRegistrationId = object.remoteRegistrationId >>> 0;
                if (object.rootKey != null)
                    if (typeof object.rootKey === "string")
                        $util.base64.decode(object.rootKey, message.rootKey = $util.newBuffer($util.base64.length(object.rootKey)), 0);
                    else if (object.rootKey.length >= 0)
                        message.rootKey = object.rootKey;
                if (object.previousCounter != null)
                    message.previousCounter = object.previousCounter >>> 0;
                if (object.senderChain != null) {
                    if (!$util.isObject(object.senderChain))
                        throw $TypeError(".signal.storage.Session.senderChain: object expected");
                    message.senderChain = $root.signal.storage.SenderChain.fromObject(object.senderChain, long + 1);
                }
                if (object.receiverChains) {
                    if (!$Array.isArray(object.receiverChains))
                        throw $TypeError(".signal.storage.Session.receiverChains: array expected");
                    message.receiverChains = [];
                    for (let i = 0; i < object.receiverChains.length; ++i) {
                        if (!$util.isObject(object.receiverChains[i]))
                            throw $TypeError(".signal.storage.Session.receiverChains: object expected");
                        message.receiverChains[i] = $root.signal.storage.ReceiverChain.fromObject(object.receiverChains[i], long + 1);
                    }
                }
                if (object.pendingPreKey != null) {
                    if (!$util.isObject(object.pendingPreKey))
                        throw $TypeError(".signal.storage.Session.pendingPreKey: object expected");
                    message.pendingPreKey = $root.signal.storage.PendingPreKey.fromObject(object.pendingPreKey, long + 1);
                }
                if (object.aliceBaseKey != null)
                    if (typeof object.aliceBaseKey === "string")
                        $util.base64.decode(object.aliceBaseKey, message.aliceBaseKey = $util.newBuffer($util.base64.length(object.aliceBaseKey)), 0);
                    else if (object.aliceBaseKey.length >= 0)
                        message.aliceBaseKey = object.aliceBaseKey;
                if (object.metadata != null) {
                    if (!$util.isObject(object.metadata))
                        throw $TypeError(".signal.storage.Session.metadata: object expected");
                    message.metadata = $root.signal.storage.SessionMetadata.fromObject(object.metadata, long + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a Session message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.Session
             * @static
             * @param {signal.storage.Session} message Session
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Session.toObject = function Session$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.receiverChains = [];
                if (options.defaults) {
                    if (options.bytes === $String)
                        object.localIdentityPublic = "";
                    else {
                        object.localIdentityPublic = [];
                        if (options.bytes !== $Array)
                            object.localIdentityPublic = $util.newBuffer(object.localIdentityPublic);
                    }
                    if (options.bytes === $String)
                        object.remoteIdentityPublic = "";
                    else {
                        object.remoteIdentityPublic = [];
                        if (options.bytes !== $Array)
                            object.remoteIdentityPublic = $util.newBuffer(object.remoteIdentityPublic);
                    }
                    object.localRegistrationId = 0;
                    object.remoteRegistrationId = 0;
                    if (options.bytes === $String)
                        object.rootKey = "";
                    else {
                        object.rootKey = [];
                        if (options.bytes !== $Array)
                            object.rootKey = $util.newBuffer(object.rootKey);
                    }
                    object.previousCounter = 0;
                    object.senderChain = null;
                    object.pendingPreKey = null;
                    if (options.bytes === $String)
                        object.aliceBaseKey = "";
                    else {
                        object.aliceBaseKey = [];
                        if (options.bytes !== $Array)
                            object.aliceBaseKey = $util.newBuffer(object.aliceBaseKey);
                    }
                    object.metadata = null;
                }
                if (message.localIdentityPublic != null && $Object.hasOwnProperty.call(message, "localIdentityPublic"))
                    object.localIdentityPublic = options.bytes === $String ? $util.base64.encode(message.localIdentityPublic, 0, message.localIdentityPublic.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.localIdentityPublic) : message.localIdentityPublic;
                if (message.remoteIdentityPublic != null && $Object.hasOwnProperty.call(message, "remoteIdentityPublic"))
                    object.remoteIdentityPublic = options.bytes === $String ? $util.base64.encode(message.remoteIdentityPublic, 0, message.remoteIdentityPublic.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.remoteIdentityPublic) : message.remoteIdentityPublic;
                if (message.localRegistrationId != null && $Object.hasOwnProperty.call(message, "localRegistrationId"))
                    object.localRegistrationId = message.localRegistrationId;
                if (message.remoteRegistrationId != null && $Object.hasOwnProperty.call(message, "remoteRegistrationId"))
                    object.remoteRegistrationId = message.remoteRegistrationId;
                if (message.rootKey != null && $Object.hasOwnProperty.call(message, "rootKey"))
                    object.rootKey = options.bytes === $String ? $util.base64.encode(message.rootKey, 0, message.rootKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.rootKey) : message.rootKey;
                if (message.previousCounter != null && $Object.hasOwnProperty.call(message, "previousCounter"))
                    object.previousCounter = message.previousCounter;
                if (message.senderChain != null && $Object.hasOwnProperty.call(message, "senderChain"))
                    object.senderChain = $root.signal.storage.SenderChain.toObject(message.senderChain, options, _depth + 1);
                if (message.receiverChains && message.receiverChains.length) {
                    object.receiverChains = [];
                    for (let j = 0; j < message.receiverChains.length; ++j)
                        object.receiverChains[j] = $root.signal.storage.ReceiverChain.toObject(message.receiverChains[j], options, _depth + 1);
                }
                if (message.pendingPreKey != null && $Object.hasOwnProperty.call(message, "pendingPreKey"))
                    object.pendingPreKey = $root.signal.storage.PendingPreKey.toObject(message.pendingPreKey, options, _depth + 1);
                if (message.aliceBaseKey != null && $Object.hasOwnProperty.call(message, "aliceBaseKey"))
                    object.aliceBaseKey = options.bytes === $String ? $util.base64.encode(message.aliceBaseKey, 0, message.aliceBaseKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.aliceBaseKey) : message.aliceBaseKey;
                if (message.metadata != null && $Object.hasOwnProperty.call(message, "metadata"))
                    object.metadata = $root.signal.storage.SessionMetadata.toObject(message.metadata, options, _depth + 1);
                return object;
            };

            /**
             * Converts this Session to JSON.
             * @function toJSON
             * @memberof signal.storage.Session
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Session.prototype.toJSON = function() {
                return Session.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Session
             * @function getTypeUrl
             * @memberof signal.storage.Session
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Session.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.Session";
            };

            return Session;
        })();

        storage.SenderChain = (function() {

            /**
             * Properties of a SenderChain.
             * @typedef {Object} signal.storage.SenderChain.$Properties
             * @property {Uint8Array|null} [ratchetPublic] SenderChain ratchetPublic
             * @property {Uint8Array|null} [ratchetPrivate] SenderChain ratchetPrivate
             * @property {signal.storage.ChainKey.$Properties|null} [chainKey] SenderChain chainKey
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SenderChain.
             * @memberof signal.storage
             * @interface ISenderChain
             * @augments signal.storage.SenderChain.$Properties
             * @deprecated Use signal.storage.SenderChain.$Properties instead.
             */

            /**
             * Shape of a SenderChain.
             * @typedef {signal.storage.SenderChain.$Properties} signal.storage.SenderChain.$Shape
             */

            /**
             * Constructs a new SenderChain.
             * @memberof signal.storage
             * @classdesc Represents a SenderChain.
             * @constructor
             * @param {signal.storage.SenderChain.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SenderChain = function SenderChain(properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SenderChain ratchetPublic.
             * @member {Uint8Array} ratchetPublic
             * @memberof signal.storage.SenderChain
             * @instance
             */
            SenderChain.prototype.ratchetPublic = $util.newBuffer([]);

            /**
             * SenderChain ratchetPrivate.
             * @member {Uint8Array} ratchetPrivate
             * @memberof signal.storage.SenderChain
             * @instance
             */
            SenderChain.prototype.ratchetPrivate = $util.newBuffer([]);

            /**
             * SenderChain chainKey.
             * @member {signal.storage.ChainKey.$Properties|null|undefined} chainKey
             * @memberof signal.storage.SenderChain
             * @instance
             */
            SenderChain.prototype.chainKey = null;

            /**
             * Creates a new SenderChain instance using the specified properties.
             * @function create
             * @memberof signal.storage.SenderChain
             * @static
             * @param {signal.storage.SenderChain.$Properties=} [properties] Properties to set
             * @returns {signal.storage.SenderChain} SenderChain instance
             * @type {{
             *   (properties: signal.storage.SenderChain.$Shape): signal.storage.SenderChain & signal.storage.SenderChain.$Shape;
             *   (properties?: signal.storage.SenderChain.$Properties): signal.storage.SenderChain;
             * }}
             */
            SenderChain.create = function(properties) {
                return new SenderChain(properties);
            };

            /**
             * Encodes the specified SenderChain message. Does not implicitly {@link signal.storage.SenderChain.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.SenderChain
             * @static
             * @param {signal.storage.SenderChain.$Properties} message SenderChain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderChain.encode = function SenderChain$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.ratchetPublic != null && $Object.hasOwnProperty.call(message, "ratchetPublic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ratchetPublic);
                if (message.ratchetPrivate != null && $Object.hasOwnProperty.call(message, "ratchetPrivate"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ratchetPrivate);
                if (message.chainKey != null && $Object.hasOwnProperty.call(message, "chainKey"))
                    $root.signal.storage.ChainKey.encode(message.chainKey, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SenderChain message, length delimited. Does not implicitly {@link signal.storage.SenderChain.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.SenderChain
             * @static
             * @param {signal.storage.SenderChain.$Properties} message SenderChain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderChain.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SenderChain message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.SenderChain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.SenderChain & signal.storage.SenderChain.$Shape} SenderChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderChain.decode = function SenderChain$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.ratchetPublic = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.ratchetPrivate = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.chainKey = $root.signal.storage.ChainKey.decode(reader, reader.uint32(), $undefined, long + 1);
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a SenderChain message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.SenderChain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.SenderChain & signal.storage.SenderChain.$Shape} SenderChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderChain.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderChain message.
             * @function verify
             * @memberof signal.storage.SenderChain
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderChain.verify = function SenderChain$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.ratchetPublic != null && $Object.hasOwnProperty.call(message, "ratchetPublic"))
                    if (!(message.ratchetPublic && typeof message.ratchetPublic.length === "number" || $util.isString(message.ratchetPublic)))
                        return "ratchetPublic: buffer expected";
                if (message.ratchetPrivate != null && $Object.hasOwnProperty.call(message, "ratchetPrivate"))
                    if (!(message.ratchetPrivate && typeof message.ratchetPrivate.length === "number" || $util.isString(message.ratchetPrivate)))
                        return "ratchetPrivate: buffer expected";
                if (message.chainKey != null && $Object.hasOwnProperty.call(message, "chainKey")) {
                    let error = $root.signal.storage.ChainKey.verify(message.chainKey, long + 1);
                    if (error)
                        return "chainKey." + error;
                }
                return null;
            };

            /**
             * Creates a SenderChain message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.SenderChain
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.SenderChain} SenderChain
             */
            SenderChain.fromObject = function SenderChain$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.SenderChain: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.ratchetPublic != null)
                    if (typeof object.ratchetPublic === "string")
                        $util.base64.decode(object.ratchetPublic, message.ratchetPublic = $util.newBuffer($util.base64.length(object.ratchetPublic)), 0);
                    else if (object.ratchetPublic.length >= 0)
                        message.ratchetPublic = object.ratchetPublic;
                if (object.ratchetPrivate != null)
                    if (typeof object.ratchetPrivate === "string")
                        $util.base64.decode(object.ratchetPrivate, message.ratchetPrivate = $util.newBuffer($util.base64.length(object.ratchetPrivate)), 0);
                    else if (object.ratchetPrivate.length >= 0)
                        message.ratchetPrivate = object.ratchetPrivate;
                if (object.chainKey != null) {
                    if (!$util.isObject(object.chainKey))
                        throw $TypeError(".signal.storage.SenderChain.chainKey: object expected");
                    message.chainKey = $root.signal.storage.ChainKey.fromObject(object.chainKey, long + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a SenderChain message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.SenderChain
             * @static
             * @param {signal.storage.SenderChain} message SenderChain
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderChain.toObject = function SenderChain$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if (options.bytes === $String)
                        object.ratchetPublic = "";
                    else {
                        object.ratchetPublic = [];
                        if (options.bytes !== $Array)
                            object.ratchetPublic = $util.newBuffer(object.ratchetPublic);
                    }
                    if (options.bytes === $String)
                        object.ratchetPrivate = "";
                    else {
                        object.ratchetPrivate = [];
                        if (options.bytes !== $Array)
                            object.ratchetPrivate = $util.newBuffer(object.ratchetPrivate);
                    }
                    object.chainKey = null;
                }
                if (message.ratchetPublic != null && $Object.hasOwnProperty.call(message, "ratchetPublic"))
                    object.ratchetPublic = options.bytes === $String ? $util.base64.encode(message.ratchetPublic, 0, message.ratchetPublic.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.ratchetPublic) : message.ratchetPublic;
                if (message.ratchetPrivate != null && $Object.hasOwnProperty.call(message, "ratchetPrivate"))
                    object.ratchetPrivate = options.bytes === $String ? $util.base64.encode(message.ratchetPrivate, 0, message.ratchetPrivate.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.ratchetPrivate) : message.ratchetPrivate;
                if (message.chainKey != null && $Object.hasOwnProperty.call(message, "chainKey"))
                    object.chainKey = $root.signal.storage.ChainKey.toObject(message.chainKey, options, _depth + 1);
                return object;
            };

            /**
             * Converts this SenderChain to JSON.
             * @function toJSON
             * @memberof signal.storage.SenderChain
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderChain.prototype.toJSON = function() {
                return SenderChain.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SenderChain
             * @function getTypeUrl
             * @memberof signal.storage.SenderChain
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SenderChain.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.SenderChain";
            };

            return SenderChain;
        })();

        storage.ReceiverChain = (function() {

            /**
             * Properties of a ReceiverChain.
             * @typedef {Object} signal.storage.ReceiverChain.$Properties
             * @property {Uint8Array|null} [ratchetPublic] ReceiverChain ratchetPublic
             * @property {signal.storage.ChainKey.$Properties|null} [chainKey] ReceiverChain chainKey
             * @property {Array.<signal.storage.MessageKey.$Properties>|null} [messageKeys] ReceiverChain messageKeys
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ReceiverChain.
             * @memberof signal.storage
             * @interface IReceiverChain
             * @augments signal.storage.ReceiverChain.$Properties
             * @deprecated Use signal.storage.ReceiverChain.$Properties instead.
             */

            /**
             * Shape of a ReceiverChain.
             * @typedef {signal.storage.ReceiverChain.$Properties} signal.storage.ReceiverChain.$Shape
             */

            /**
             * Constructs a new ReceiverChain.
             * @memberof signal.storage
             * @classdesc Represents a ReceiverChain.
             * @constructor
             * @param {signal.storage.ReceiverChain.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const ReceiverChain = function ReceiverChain(properties) {
                this.messageKeys = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ReceiverChain ratchetPublic.
             * @member {Uint8Array} ratchetPublic
             * @memberof signal.storage.ReceiverChain
             * @instance
             */
            ReceiverChain.prototype.ratchetPublic = $util.newBuffer([]);

            /**
             * ReceiverChain chainKey.
             * @member {signal.storage.ChainKey.$Properties|null|undefined} chainKey
             * @memberof signal.storage.ReceiverChain
             * @instance
             */
            ReceiverChain.prototype.chainKey = null;

            /**
             * ReceiverChain messageKeys.
             * @member {Array.<signal.storage.MessageKey.$Properties>} messageKeys
             * @memberof signal.storage.ReceiverChain
             * @instance
             */
            ReceiverChain.prototype.messageKeys = $util.emptyArray;

            /**
             * Creates a new ReceiverChain instance using the specified properties.
             * @function create
             * @memberof signal.storage.ReceiverChain
             * @static
             * @param {signal.storage.ReceiverChain.$Properties=} [properties] Properties to set
             * @returns {signal.storage.ReceiverChain} ReceiverChain instance
             * @type {{
             *   (properties: signal.storage.ReceiverChain.$Shape): signal.storage.ReceiverChain & signal.storage.ReceiverChain.$Shape;
             *   (properties?: signal.storage.ReceiverChain.$Properties): signal.storage.ReceiverChain;
             * }}
             */
            ReceiverChain.create = function(properties) {
                return new ReceiverChain(properties);
            };

            /**
             * Encodes the specified ReceiverChain message. Does not implicitly {@link signal.storage.ReceiverChain.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.ReceiverChain
             * @static
             * @param {signal.storage.ReceiverChain.$Properties} message ReceiverChain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReceiverChain.encode = function ReceiverChain$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.ratchetPublic != null && $Object.hasOwnProperty.call(message, "ratchetPublic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ratchetPublic);
                if (message.chainKey != null && $Object.hasOwnProperty.call(message, "chainKey"))
                    $root.signal.storage.ChainKey.encode(message.chainKey, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.messageKeys != null && message.messageKeys.length)
                    for (let i = 0; i < message.messageKeys.length; ++i)
                        $root.signal.storage.MessageKey.encode(message.messageKeys[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ReceiverChain message, length delimited. Does not implicitly {@link signal.storage.ReceiverChain.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.ReceiverChain
             * @static
             * @param {signal.storage.ReceiverChain.$Properties} message ReceiverChain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReceiverChain.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a ReceiverChain message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.ReceiverChain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.ReceiverChain & signal.storage.ReceiverChain.$Shape} ReceiverChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReceiverChain.decode = function ReceiverChain$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.ratchetPublic = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.chainKey = $root.signal.storage.ChainKey.decode(reader, reader.uint32(), $undefined, long + 1);
                            break;
                        }
                    case 3: {
                            if (!(message.messageKeys && message.messageKeys.length))
                                message.messageKeys = [];
                            message.messageKeys.push($root.signal.storage.MessageKey.decode(reader, reader.uint32(), $undefined, long + 1));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a ReceiverChain message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.ReceiverChain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.ReceiverChain & signal.storage.ReceiverChain.$Shape} ReceiverChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReceiverChain.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReceiverChain message.
             * @function verify
             * @memberof signal.storage.ReceiverChain
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReceiverChain.verify = function ReceiverChain$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.ratchetPublic != null && $Object.hasOwnProperty.call(message, "ratchetPublic"))
                    if (!(message.ratchetPublic && typeof message.ratchetPublic.length === "number" || $util.isString(message.ratchetPublic)))
                        return "ratchetPublic: buffer expected";
                if (message.chainKey != null && $Object.hasOwnProperty.call(message, "chainKey")) {
                    let error = $root.signal.storage.ChainKey.verify(message.chainKey, long + 1);
                    if (error)
                        return "chainKey." + error;
                }
                if (message.messageKeys != null && $Object.hasOwnProperty.call(message, "messageKeys")) {
                    if (!$Array.isArray(message.messageKeys))
                        return "messageKeys: array expected";
                    for (let i = 0; i < message.messageKeys.length; ++i) {
                        let error = $root.signal.storage.MessageKey.verify(message.messageKeys[i], long + 1);
                        if (error)
                            return "messageKeys." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ReceiverChain message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.ReceiverChain
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.ReceiverChain} ReceiverChain
             */
            ReceiverChain.fromObject = function ReceiverChain$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.ReceiverChain: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.ratchetPublic != null)
                    if (typeof object.ratchetPublic === "string")
                        $util.base64.decode(object.ratchetPublic, message.ratchetPublic = $util.newBuffer($util.base64.length(object.ratchetPublic)), 0);
                    else if (object.ratchetPublic.length >= 0)
                        message.ratchetPublic = object.ratchetPublic;
                if (object.chainKey != null) {
                    if (!$util.isObject(object.chainKey))
                        throw $TypeError(".signal.storage.ReceiverChain.chainKey: object expected");
                    message.chainKey = $root.signal.storage.ChainKey.fromObject(object.chainKey, long + 1);
                }
                if (object.messageKeys) {
                    if (!$Array.isArray(object.messageKeys))
                        throw $TypeError(".signal.storage.ReceiverChain.messageKeys: array expected");
                    message.messageKeys = [];
                    for (let i = 0; i < object.messageKeys.length; ++i) {
                        if (!$util.isObject(object.messageKeys[i]))
                            throw $TypeError(".signal.storage.ReceiverChain.messageKeys: object expected");
                        message.messageKeys[i] = $root.signal.storage.MessageKey.fromObject(object.messageKeys[i], long + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ReceiverChain message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.ReceiverChain
             * @static
             * @param {signal.storage.ReceiverChain} message ReceiverChain
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReceiverChain.toObject = function ReceiverChain$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.messageKeys = [];
                if (options.defaults) {
                    if (options.bytes === $String)
                        object.ratchetPublic = "";
                    else {
                        object.ratchetPublic = [];
                        if (options.bytes !== $Array)
                            object.ratchetPublic = $util.newBuffer(object.ratchetPublic);
                    }
                    object.chainKey = null;
                }
                if (message.ratchetPublic != null && $Object.hasOwnProperty.call(message, "ratchetPublic"))
                    object.ratchetPublic = options.bytes === $String ? $util.base64.encode(message.ratchetPublic, 0, message.ratchetPublic.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.ratchetPublic) : message.ratchetPublic;
                if (message.chainKey != null && $Object.hasOwnProperty.call(message, "chainKey"))
                    object.chainKey = $root.signal.storage.ChainKey.toObject(message.chainKey, options, _depth + 1);
                if (message.messageKeys && message.messageKeys.length) {
                    object.messageKeys = [];
                    for (let j = 0; j < message.messageKeys.length; ++j)
                        object.messageKeys[j] = $root.signal.storage.MessageKey.toObject(message.messageKeys[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this ReceiverChain to JSON.
             * @function toJSON
             * @memberof signal.storage.ReceiverChain
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReceiverChain.prototype.toJSON = function() {
                return ReceiverChain.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ReceiverChain
             * @function getTypeUrl
             * @memberof signal.storage.ReceiverChain
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ReceiverChain.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.ReceiverChain";
            };

            return ReceiverChain;
        })();

        storage.ChainKey = (function() {

            /**
             * Properties of a ChainKey.
             * @typedef {Object} signal.storage.ChainKey.$Properties
             * @property {number|null} [counter] ChainKey counter
             * @property {Uint8Array|null} [key] ChainKey key
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ChainKey.
             * @memberof signal.storage
             * @interface IChainKey
             * @augments signal.storage.ChainKey.$Properties
             * @deprecated Use signal.storage.ChainKey.$Properties instead.
             */

            /**
             * Shape of a ChainKey.
             * @typedef {signal.storage.ChainKey.$Properties} signal.storage.ChainKey.$Shape
             */

            /**
             * Constructs a new ChainKey.
             * @memberof signal.storage
             * @classdesc Represents a ChainKey.
             * @constructor
             * @param {signal.storage.ChainKey.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const ChainKey = function ChainKey(properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ChainKey counter.
             * @member {number} counter
             * @memberof signal.storage.ChainKey
             * @instance
             */
            ChainKey.prototype.counter = 0;

            /**
             * ChainKey key.
             * @member {Uint8Array} key
             * @memberof signal.storage.ChainKey
             * @instance
             */
            ChainKey.prototype.key = $util.newBuffer([]);

            /**
             * Creates a new ChainKey instance using the specified properties.
             * @function create
             * @memberof signal.storage.ChainKey
             * @static
             * @param {signal.storage.ChainKey.$Properties=} [properties] Properties to set
             * @returns {signal.storage.ChainKey} ChainKey instance
             * @type {{
             *   (properties: signal.storage.ChainKey.$Shape): signal.storage.ChainKey & signal.storage.ChainKey.$Shape;
             *   (properties?: signal.storage.ChainKey.$Properties): signal.storage.ChainKey;
             * }}
             */
            ChainKey.create = function(properties) {
                return new ChainKey(properties);
            };

            /**
             * Encodes the specified ChainKey message. Does not implicitly {@link signal.storage.ChainKey.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.ChainKey
             * @static
             * @param {signal.storage.ChainKey.$Properties} message ChainKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChainKey.encode = function ChainKey$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.counter != null && $Object.hasOwnProperty.call(message, "counter"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.counter);
                if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.key);
                return writer;
            };

            /**
             * Encodes the specified ChainKey message, length delimited. Does not implicitly {@link signal.storage.ChainKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.ChainKey
             * @static
             * @param {signal.storage.ChainKey.$Properties} message ChainKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChainKey.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a ChainKey message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.ChainKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.ChainKey & signal.storage.ChainKey.$Shape} ChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChainKey.decode = function ChainKey$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.counter = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.key = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a ChainKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.ChainKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.ChainKey & signal.storage.ChainKey.$Shape} ChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChainKey.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChainKey message.
             * @function verify
             * @memberof signal.storage.ChainKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChainKey.verify = function ChainKey$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.counter != null && $Object.hasOwnProperty.call(message, "counter"))
                    if (!$util.isInteger(message.counter))
                        return "counter: integer expected";
                if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                    if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                        return "key: buffer expected";
                return null;
            };

            /**
             * Creates a ChainKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.ChainKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.ChainKey} ChainKey
             */
            ChainKey.fromObject = function ChainKey$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.ChainKey: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.counter != null)
                    message.counter = object.counter >>> 0;
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                    else if (object.key.length >= 0)
                        message.key = object.key;
                return message;
            };

            /**
             * Creates a plain object from a ChainKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.ChainKey
             * @static
             * @param {signal.storage.ChainKey} message ChainKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChainKey.toObject = function ChainKey$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.counter = 0;
                    if (options.bytes === $String)
                        object.key = "";
                    else {
                        object.key = [];
                        if (options.bytes !== $Array)
                            object.key = $util.newBuffer(object.key);
                    }
                }
                if (message.counter != null && $Object.hasOwnProperty.call(message, "counter"))
                    object.counter = message.counter;
                if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                    object.key = options.bytes === $String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.key) : message.key;
                return object;
            };

            /**
             * Converts this ChainKey to JSON.
             * @function toJSON
             * @memberof signal.storage.ChainKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChainKey.prototype.toJSON = function() {
                return ChainKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ChainKey
             * @function getTypeUrl
             * @memberof signal.storage.ChainKey
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ChainKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.ChainKey";
            };

            return ChainKey;
        })();

        storage.MessageKey = (function() {

            /**
             * Properties of a MessageKey.
             * @typedef {Object} signal.storage.MessageKey.$Properties
             * @property {number|null} [counter] MessageKey counter
             * @property {Uint8Array|null} [seed] MessageKey seed
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a MessageKey.
             * @memberof signal.storage
             * @interface IMessageKey
             * @augments signal.storage.MessageKey.$Properties
             * @deprecated Use signal.storage.MessageKey.$Properties instead.
             */

            /**
             * Shape of a MessageKey.
             * @typedef {signal.storage.MessageKey.$Properties} signal.storage.MessageKey.$Shape
             */

            /**
             * Constructs a new MessageKey.
             * @memberof signal.storage
             * @classdesc Represents a MessageKey.
             * @constructor
             * @param {signal.storage.MessageKey.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const MessageKey = function MessageKey(properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * MessageKey counter.
             * @member {number} counter
             * @memberof signal.storage.MessageKey
             * @instance
             */
            MessageKey.prototype.counter = 0;

            /**
             * MessageKey seed.
             * @member {Uint8Array} seed
             * @memberof signal.storage.MessageKey
             * @instance
             */
            MessageKey.prototype.seed = $util.newBuffer([]);

            /**
             * Creates a new MessageKey instance using the specified properties.
             * @function create
             * @memberof signal.storage.MessageKey
             * @static
             * @param {signal.storage.MessageKey.$Properties=} [properties] Properties to set
             * @returns {signal.storage.MessageKey} MessageKey instance
             * @type {{
             *   (properties: signal.storage.MessageKey.$Shape): signal.storage.MessageKey & signal.storage.MessageKey.$Shape;
             *   (properties?: signal.storage.MessageKey.$Properties): signal.storage.MessageKey;
             * }}
             */
            MessageKey.create = function(properties) {
                return new MessageKey(properties);
            };

            /**
             * Encodes the specified MessageKey message. Does not implicitly {@link signal.storage.MessageKey.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.MessageKey
             * @static
             * @param {signal.storage.MessageKey.$Properties} message MessageKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageKey.encode = function MessageKey$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.counter != null && $Object.hasOwnProperty.call(message, "counter"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.counter);
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
                return writer;
            };

            /**
             * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link signal.storage.MessageKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.MessageKey
             * @static
             * @param {signal.storage.MessageKey.$Properties} message MessageKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageKey.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a MessageKey message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.MessageKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.MessageKey & signal.storage.MessageKey.$Shape} MessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageKey.decode = function MessageKey$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.counter = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.seed = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a MessageKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.MessageKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.MessageKey & signal.storage.MessageKey.$Shape} MessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageKey.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageKey message.
             * @function verify
             * @memberof signal.storage.MessageKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageKey.verify = function MessageKey$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.counter != null && $Object.hasOwnProperty.call(message, "counter"))
                    if (!$util.isInteger(message.counter))
                        return "counter: integer expected";
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                        return "seed: buffer expected";
                return null;
            };

            /**
             * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.MessageKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.MessageKey} MessageKey
             */
            MessageKey.fromObject = function MessageKey$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.MessageKey: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.counter != null)
                    message.counter = object.counter >>> 0;
                if (object.seed != null)
                    if (typeof object.seed === "string")
                        $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                    else if (object.seed.length >= 0)
                        message.seed = object.seed;
                return message;
            };

            /**
             * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.MessageKey
             * @static
             * @param {signal.storage.MessageKey} message MessageKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageKey.toObject = function MessageKey$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.counter = 0;
                    if (options.bytes === $String)
                        object.seed = "";
                    else {
                        object.seed = [];
                        if (options.bytes !== $Array)
                            object.seed = $util.newBuffer(object.seed);
                    }
                }
                if (message.counter != null && $Object.hasOwnProperty.call(message, "counter"))
                    object.counter = message.counter;
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    object.seed = options.bytes === $String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.seed) : message.seed;
                return object;
            };

            /**
             * Converts this MessageKey to JSON.
             * @function toJSON
             * @memberof signal.storage.MessageKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageKey.prototype.toJSON = function() {
                return MessageKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for MessageKey
             * @function getTypeUrl
             * @memberof signal.storage.MessageKey
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            MessageKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.MessageKey";
            };

            return MessageKey;
        })();

        storage.PendingPreKey = (function() {

            /**
             * Properties of a PendingPreKey.
             * @typedef {Object} signal.storage.PendingPreKey.$Properties
             * @property {number|null} [prekeyId] PendingPreKey prekeyId
             * @property {number|null} [signedPrekeyId] PendingPreKey signedPrekeyId
             * @property {Uint8Array|null} [baseKey] PendingPreKey baseKey
             * @property {number|Long|null} [timestamp] PendingPreKey timestamp
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PendingPreKey.
             * @memberof signal.storage
             * @interface IPendingPreKey
             * @augments signal.storage.PendingPreKey.$Properties
             * @deprecated Use signal.storage.PendingPreKey.$Properties instead.
             */

            /**
             * Shape of a PendingPreKey.
             * @typedef {signal.storage.PendingPreKey.$Properties} signal.storage.PendingPreKey.$Shape
             */

            /**
             * Constructs a new PendingPreKey.
             * @memberof signal.storage
             * @classdesc Represents a PendingPreKey.
             * @constructor
             * @param {signal.storage.PendingPreKey.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PendingPreKey = function PendingPreKey(properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PendingPreKey prekeyId.
             * @member {number|null|undefined} prekeyId
             * @memberof signal.storage.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.prekeyId = null;

            /**
             * PendingPreKey signedPrekeyId.
             * @member {number} signedPrekeyId
             * @memberof signal.storage.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.signedPrekeyId = 0;

            /**
             * PendingPreKey baseKey.
             * @member {Uint8Array} baseKey
             * @memberof signal.storage.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.baseKey = $util.newBuffer([]);

            /**
             * PendingPreKey timestamp.
             * @member {number|Long} timestamp
             * @memberof signal.storage.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingPreKey.prototype, "_prekeyId", {
                get: $util.oneOfGetter($oneOfFields = ["prekeyId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new PendingPreKey instance using the specified properties.
             * @function create
             * @memberof signal.storage.PendingPreKey
             * @static
             * @param {signal.storage.PendingPreKey.$Properties=} [properties] Properties to set
             * @returns {signal.storage.PendingPreKey} PendingPreKey instance
             * @type {{
             *   (properties: signal.storage.PendingPreKey.$Shape): signal.storage.PendingPreKey & signal.storage.PendingPreKey.$Shape;
             *   (properties?: signal.storage.PendingPreKey.$Properties): signal.storage.PendingPreKey;
             * }}
             */
            PendingPreKey.create = function(properties) {
                return new PendingPreKey(properties);
            };

            /**
             * Encodes the specified PendingPreKey message. Does not implicitly {@link signal.storage.PendingPreKey.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.PendingPreKey
             * @static
             * @param {signal.storage.PendingPreKey.$Properties} message PendingPreKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingPreKey.encode = function PendingPreKey$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.prekeyId != null && $Object.hasOwnProperty.call(message, "prekeyId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.prekeyId);
                if (message.signedPrekeyId != null && $Object.hasOwnProperty.call(message, "signedPrekeyId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.signedPrekeyId);
                if (message.baseKey != null && $Object.hasOwnProperty.call(message, "baseKey"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.baseKey);
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified PendingPreKey message, length delimited. Does not implicitly {@link signal.storage.PendingPreKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.PendingPreKey
             * @static
             * @param {signal.storage.PendingPreKey.$Properties} message PendingPreKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingPreKey.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a PendingPreKey message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.PendingPreKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.PendingPreKey & signal.storage.PendingPreKey.$Shape} PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingPreKey.decode = function PendingPreKey$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.prekeyId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.signedPrekeyId = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.baseKey = reader.bytes();
                            break;
                        }
                    case 4: {
                            message.timestamp = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a PendingPreKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.PendingPreKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.PendingPreKey & signal.storage.PendingPreKey.$Shape} PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingPreKey.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PendingPreKey message.
             * @function verify
             * @memberof signal.storage.PendingPreKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PendingPreKey.verify = function PendingPreKey$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                let properties = {};
                if (message.prekeyId != null && $Object.hasOwnProperty.call(message, "prekeyId")) {
                    properties._prekeyId = 1;
                    if (!$util.isInteger(message.prekeyId))
                        return "prekeyId: integer expected";
                }
                if (message.signedPrekeyId != null && $Object.hasOwnProperty.call(message, "signedPrekeyId"))
                    if (!$util.isInteger(message.signedPrekeyId))
                        return "signedPrekeyId: integer expected";
                if (message.baseKey != null && $Object.hasOwnProperty.call(message, "baseKey"))
                    if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                        return "baseKey: buffer expected";
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a PendingPreKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.PendingPreKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.PendingPreKey} PendingPreKey
             */
            PendingPreKey.fromObject = function PendingPreKey$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.PendingPreKey: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.prekeyId != null)
                    message.prekeyId = object.prekeyId >>> 0;
                if (object.signedPrekeyId != null)
                    message.signedPrekeyId = object.signedPrekeyId >>> 0;
                if (object.baseKey != null)
                    if (typeof object.baseKey === "string")
                        $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                    else if (object.baseKey.length >= 0)
                        message.baseKey = object.baseKey;
                if (object.timestamp != null)
                    if ($util.Long)
                        message.timestamp = $util.Long.fromValue(object.timestamp, true);
                    else if (typeof object.timestamp === "string")
                        message.timestamp = $parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a PendingPreKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.PendingPreKey
             * @static
             * @param {signal.storage.PendingPreKey} message PendingPreKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PendingPreKey.toObject = function PendingPreKey$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.signedPrekeyId = 0;
                    if (options.bytes === $String)
                        object.baseKey = "";
                    else {
                        object.baseKey = [];
                        if (options.bytes !== $Array)
                            object.baseKey = $util.newBuffer(object.baseKey);
                    }
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.timestamp = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (message.prekeyId != null && $Object.hasOwnProperty.call(message, "prekeyId")) {
                    object.prekeyId = message.prekeyId;
                    if (options.oneofs)
                        object._prekeyId = "prekeyId";
                }
                if (message.signedPrekeyId != null && $Object.hasOwnProperty.call(message, "signedPrekeyId"))
                    object.signedPrekeyId = message.signedPrekeyId;
                if (message.baseKey != null && $Object.hasOwnProperty.call(message, "baseKey"))
                    object.baseKey = options.bytes === $String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.baseKey) : message.baseKey;
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.timestamp = typeof message.timestamp === "number" ? $BigInt(message.timestamp) : $util.Long.fromBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0, true).toBigInt();
                    else if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === $String ? $String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === $Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                return object;
            };

            /**
             * Converts this PendingPreKey to JSON.
             * @function toJSON
             * @memberof signal.storage.PendingPreKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PendingPreKey.prototype.toJSON = function() {
                return PendingPreKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PendingPreKey
             * @function getTypeUrl
             * @memberof signal.storage.PendingPreKey
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PendingPreKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.PendingPreKey";
            };

            return PendingPreKey;
        })();

        storage.SessionMetadata = (function() {

            /**
             * Properties of a SessionMetadata.
             * @typedef {Object} signal.storage.SessionMetadata.$Properties
             * @property {number|Long|null} [createdAt] SessionMetadata createdAt
             * @property {number|Long|null} [lastUsed] SessionMetadata lastUsed
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SessionMetadata.
             * @memberof signal.storage
             * @interface ISessionMetadata
             * @augments signal.storage.SessionMetadata.$Properties
             * @deprecated Use signal.storage.SessionMetadata.$Properties instead.
             */

            /**
             * Shape of a SessionMetadata.
             * @typedef {signal.storage.SessionMetadata.$Properties} signal.storage.SessionMetadata.$Shape
             */

            /**
             * Constructs a new SessionMetadata.
             * @memberof signal.storage
             * @classdesc Represents a SessionMetadata.
             * @constructor
             * @param {signal.storage.SessionMetadata.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SessionMetadata = function SessionMetadata(properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SessionMetadata createdAt.
             * @member {number|Long} createdAt
             * @memberof signal.storage.SessionMetadata
             * @instance
             */
            SessionMetadata.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SessionMetadata lastUsed.
             * @member {number|Long} lastUsed
             * @memberof signal.storage.SessionMetadata
             * @instance
             */
            SessionMetadata.prototype.lastUsed = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SessionMetadata instance using the specified properties.
             * @function create
             * @memberof signal.storage.SessionMetadata
             * @static
             * @param {signal.storage.SessionMetadata.$Properties=} [properties] Properties to set
             * @returns {signal.storage.SessionMetadata} SessionMetadata instance
             * @type {{
             *   (properties: signal.storage.SessionMetadata.$Shape): signal.storage.SessionMetadata & signal.storage.SessionMetadata.$Shape;
             *   (properties?: signal.storage.SessionMetadata.$Properties): signal.storage.SessionMetadata;
             * }}
             */
            SessionMetadata.create = function(properties) {
                return new SessionMetadata(properties);
            };

            /**
             * Encodes the specified SessionMetadata message. Does not implicitly {@link signal.storage.SessionMetadata.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.SessionMetadata
             * @static
             * @param {signal.storage.SessionMetadata.$Properties} message SessionMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionMetadata.encode = function SessionMetadata$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.createdAt);
                if (message.lastUsed != null && $Object.hasOwnProperty.call(message, "lastUsed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.lastUsed);
                return writer;
            };

            /**
             * Encodes the specified SessionMetadata message, length delimited. Does not implicitly {@link signal.storage.SessionMetadata.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.SessionMetadata
             * @static
             * @param {signal.storage.SessionMetadata.$Properties} message SessionMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionMetadata.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SessionMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.SessionMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.SessionMetadata & signal.storage.SessionMetadata.$Shape} SessionMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionMetadata.decode = function SessionMetadata$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.createdAt = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.lastUsed = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a SessionMetadata message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.SessionMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.SessionMetadata & signal.storage.SessionMetadata.$Shape} SessionMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionMetadata.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SessionMetadata message.
             * @function verify
             * @memberof signal.storage.SessionMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SessionMetadata.verify = function SessionMetadata$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt"))
                    if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                        return "createdAt: integer|Long expected";
                if (message.lastUsed != null && $Object.hasOwnProperty.call(message, "lastUsed"))
                    if (!$util.isInteger(message.lastUsed) && !(message.lastUsed && $util.isInteger(message.lastUsed.low) && $util.isInteger(message.lastUsed.high)))
                        return "lastUsed: integer|Long expected";
                return null;
            };

            /**
             * Creates a SessionMetadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.SessionMetadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.SessionMetadata} SessionMetadata
             */
            SessionMetadata.fromObject = function SessionMetadata$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.SessionMetadata: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.createdAt != null)
                    if ($util.Long)
                        message.createdAt = $util.Long.fromValue(object.createdAt, true);
                    else if (typeof object.createdAt === "string")
                        message.createdAt = $parseInt(object.createdAt, 10);
                    else if (typeof object.createdAt === "number")
                        message.createdAt = object.createdAt;
                    else if (typeof object.createdAt === "object")
                        message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber(true);
                if (object.lastUsed != null)
                    if ($util.Long)
                        message.lastUsed = $util.Long.fromValue(object.lastUsed, true);
                    else if (typeof object.lastUsed === "string")
                        message.lastUsed = $parseInt(object.lastUsed, 10);
                    else if (typeof object.lastUsed === "number")
                        message.lastUsed = object.lastUsed;
                    else if (typeof object.lastUsed === "object")
                        message.lastUsed = new $util.LongBits(object.lastUsed.low >>> 0, object.lastUsed.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SessionMetadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.SessionMetadata
             * @static
             * @param {signal.storage.SessionMetadata} message SessionMetadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SessionMetadata.toObject = function SessionMetadata$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.createdAt = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.createdAt = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.lastUsed = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.lastUsed = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.createdAt = typeof message.createdAt === "number" ? $BigInt(message.createdAt) : $util.Long.fromBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0, true).toBigInt();
                    else if (typeof message.createdAt === "number")
                        object.createdAt = options.longs === $String ? $String(message.createdAt) : message.createdAt;
                    else
                        object.createdAt = options.longs === $String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === $Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber(true) : message.createdAt;
                if (message.lastUsed != null && $Object.hasOwnProperty.call(message, "lastUsed"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.lastUsed = typeof message.lastUsed === "number" ? $BigInt(message.lastUsed) : $util.Long.fromBits(message.lastUsed.low >>> 0, message.lastUsed.high >>> 0, true).toBigInt();
                    else if (typeof message.lastUsed === "number")
                        object.lastUsed = options.longs === $String ? $String(message.lastUsed) : message.lastUsed;
                    else
                        object.lastUsed = options.longs === $String ? $util.Long.prototype.toString.call(message.lastUsed) : options.longs === $Number ? new $util.LongBits(message.lastUsed.low >>> 0, message.lastUsed.high >>> 0).toNumber(true) : message.lastUsed;
                return object;
            };

            /**
             * Converts this SessionMetadata to JSON.
             * @function toJSON
             * @memberof signal.storage.SessionMetadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SessionMetadata.prototype.toJSON = function() {
                return SessionMetadata.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SessionMetadata
             * @function getTypeUrl
             * @memberof signal.storage.SessionMetadata
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SessionMetadata.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.SessionMetadata";
            };

            return SessionMetadata;
        })();

        storage.PreKeyRecord = (function() {

            /**
             * Properties of a PreKeyRecord.
             * @typedef {Object} signal.storage.PreKeyRecord.$Properties
             * @property {number|null} [id] PreKeyRecord id
             * @property {Uint8Array|null} [publicKey] PreKeyRecord publicKey
             * @property {Uint8Array|null} [privateKey] PreKeyRecord privateKey
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PreKeyRecord.
             * @memberof signal.storage
             * @interface IPreKeyRecord
             * @augments signal.storage.PreKeyRecord.$Properties
             * @deprecated Use signal.storage.PreKeyRecord.$Properties instead.
             */

            /**
             * Shape of a PreKeyRecord.
             * @typedef {signal.storage.PreKeyRecord.$Properties} signal.storage.PreKeyRecord.$Shape
             */

            /**
             * Constructs a new PreKeyRecord.
             * @memberof signal.storage
             * @classdesc Represents a PreKeyRecord.
             * @constructor
             * @param {signal.storage.PreKeyRecord.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PreKeyRecord = function PreKeyRecord(properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PreKeyRecord id.
             * @member {number} id
             * @memberof signal.storage.PreKeyRecord
             * @instance
             */
            PreKeyRecord.prototype.id = 0;

            /**
             * PreKeyRecord publicKey.
             * @member {Uint8Array} publicKey
             * @memberof signal.storage.PreKeyRecord
             * @instance
             */
            PreKeyRecord.prototype.publicKey = $util.newBuffer([]);

            /**
             * PreKeyRecord privateKey.
             * @member {Uint8Array} privateKey
             * @memberof signal.storage.PreKeyRecord
             * @instance
             */
            PreKeyRecord.prototype.privateKey = $util.newBuffer([]);

            /**
             * Creates a new PreKeyRecord instance using the specified properties.
             * @function create
             * @memberof signal.storage.PreKeyRecord
             * @static
             * @param {signal.storage.PreKeyRecord.$Properties=} [properties] Properties to set
             * @returns {signal.storage.PreKeyRecord} PreKeyRecord instance
             * @type {{
             *   (properties: signal.storage.PreKeyRecord.$Shape): signal.storage.PreKeyRecord & signal.storage.PreKeyRecord.$Shape;
             *   (properties?: signal.storage.PreKeyRecord.$Properties): signal.storage.PreKeyRecord;
             * }}
             */
            PreKeyRecord.create = function(properties) {
                return new PreKeyRecord(properties);
            };

            /**
             * Encodes the specified PreKeyRecord message. Does not implicitly {@link signal.storage.PreKeyRecord.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.PreKeyRecord
             * @static
             * @param {signal.storage.PreKeyRecord.$Properties} message PreKeyRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PreKeyRecord.encode = function PreKeyRecord$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.publicKey);
                if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.privateKey);
                return writer;
            };

            /**
             * Encodes the specified PreKeyRecord message, length delimited. Does not implicitly {@link signal.storage.PreKeyRecord.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.PreKeyRecord
             * @static
             * @param {signal.storage.PreKeyRecord.$Properties} message PreKeyRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PreKeyRecord.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a PreKeyRecord message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.PreKeyRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.PreKeyRecord & signal.storage.PreKeyRecord.$Shape} PreKeyRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PreKeyRecord.decode = function PreKeyRecord$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.publicKey = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.privateKey = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a PreKeyRecord message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.PreKeyRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.PreKeyRecord & signal.storage.PreKeyRecord.$Shape} PreKeyRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PreKeyRecord.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PreKeyRecord message.
             * @function verify
             * @memberof signal.storage.PreKeyRecord
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PreKeyRecord.verify = function PreKeyRecord$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                    if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                        return "publicKey: buffer expected";
                if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                    if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                        return "privateKey: buffer expected";
                return null;
            };

            /**
             * Creates a PreKeyRecord message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.PreKeyRecord
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.PreKeyRecord} PreKeyRecord
             */
            PreKeyRecord.fromObject = function PreKeyRecord$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.PreKeyRecord: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.publicKey != null)
                    if (typeof object.publicKey === "string")
                        $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                    else if (object.publicKey.length >= 0)
                        message.publicKey = object.publicKey;
                if (object.privateKey != null)
                    if (typeof object.privateKey === "string")
                        $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                    else if (object.privateKey.length >= 0)
                        message.privateKey = object.privateKey;
                return message;
            };

            /**
             * Creates a plain object from a PreKeyRecord message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.PreKeyRecord
             * @static
             * @param {signal.storage.PreKeyRecord} message PreKeyRecord
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PreKeyRecord.toObject = function PreKeyRecord$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.id = 0;
                    if (options.bytes === $String)
                        object.publicKey = "";
                    else {
                        object.publicKey = [];
                        if (options.bytes !== $Array)
                            object.publicKey = $util.newBuffer(object.publicKey);
                    }
                    if (options.bytes === $String)
                        object.privateKey = "";
                    else {
                        object.privateKey = [];
                        if (options.bytes !== $Array)
                            object.privateKey = $util.newBuffer(object.privateKey);
                    }
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = message.id;
                if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                    object.publicKey = options.bytes === $String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.publicKey) : message.publicKey;
                if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                    object.privateKey = options.bytes === $String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.privateKey) : message.privateKey;
                return object;
            };

            /**
             * Converts this PreKeyRecord to JSON.
             * @function toJSON
             * @memberof signal.storage.PreKeyRecord
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PreKeyRecord.prototype.toJSON = function() {
                return PreKeyRecord.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PreKeyRecord
             * @function getTypeUrl
             * @memberof signal.storage.PreKeyRecord
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PreKeyRecord.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.PreKeyRecord";
            };

            return PreKeyRecord;
        })();

        storage.SignedPreKeyRecord = (function() {

            /**
             * Properties of a SignedPreKeyRecord.
             * @typedef {Object} signal.storage.SignedPreKeyRecord.$Properties
             * @property {number|null} [id] SignedPreKeyRecord id
             * @property {Uint8Array|null} [publicKey] SignedPreKeyRecord publicKey
             * @property {Uint8Array|null} [privateKey] SignedPreKeyRecord privateKey
             * @property {Uint8Array|null} [signature] SignedPreKeyRecord signature
             * @property {number|Long|null} [timestamp] SignedPreKeyRecord timestamp
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SignedPreKeyRecord.
             * @memberof signal.storage
             * @interface ISignedPreKeyRecord
             * @augments signal.storage.SignedPreKeyRecord.$Properties
             * @deprecated Use signal.storage.SignedPreKeyRecord.$Properties instead.
             */

            /**
             * Shape of a SignedPreKeyRecord.
             * @typedef {signal.storage.SignedPreKeyRecord.$Properties} signal.storage.SignedPreKeyRecord.$Shape
             */

            /**
             * Constructs a new SignedPreKeyRecord.
             * @memberof signal.storage
             * @classdesc Represents a SignedPreKeyRecord.
             * @constructor
             * @param {signal.storage.SignedPreKeyRecord.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SignedPreKeyRecord = function SignedPreKeyRecord(properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SignedPreKeyRecord id.
             * @member {number} id
             * @memberof signal.storage.SignedPreKeyRecord
             * @instance
             */
            SignedPreKeyRecord.prototype.id = 0;

            /**
             * SignedPreKeyRecord publicKey.
             * @member {Uint8Array} publicKey
             * @memberof signal.storage.SignedPreKeyRecord
             * @instance
             */
            SignedPreKeyRecord.prototype.publicKey = $util.newBuffer([]);

            /**
             * SignedPreKeyRecord privateKey.
             * @member {Uint8Array} privateKey
             * @memberof signal.storage.SignedPreKeyRecord
             * @instance
             */
            SignedPreKeyRecord.prototype.privateKey = $util.newBuffer([]);

            /**
             * SignedPreKeyRecord signature.
             * @member {Uint8Array} signature
             * @memberof signal.storage.SignedPreKeyRecord
             * @instance
             */
            SignedPreKeyRecord.prototype.signature = $util.newBuffer([]);

            /**
             * SignedPreKeyRecord timestamp.
             * @member {number|Long} timestamp
             * @memberof signal.storage.SignedPreKeyRecord
             * @instance
             */
            SignedPreKeyRecord.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SignedPreKeyRecord instance using the specified properties.
             * @function create
             * @memberof signal.storage.SignedPreKeyRecord
             * @static
             * @param {signal.storage.SignedPreKeyRecord.$Properties=} [properties] Properties to set
             * @returns {signal.storage.SignedPreKeyRecord} SignedPreKeyRecord instance
             * @type {{
             *   (properties: signal.storage.SignedPreKeyRecord.$Shape): signal.storage.SignedPreKeyRecord & signal.storage.SignedPreKeyRecord.$Shape;
             *   (properties?: signal.storage.SignedPreKeyRecord.$Properties): signal.storage.SignedPreKeyRecord;
             * }}
             */
            SignedPreKeyRecord.create = function(properties) {
                return new SignedPreKeyRecord(properties);
            };

            /**
             * Encodes the specified SignedPreKeyRecord message. Does not implicitly {@link signal.storage.SignedPreKeyRecord.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.SignedPreKeyRecord
             * @static
             * @param {signal.storage.SignedPreKeyRecord.$Properties} message SignedPreKeyRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignedPreKeyRecord.encode = function SignedPreKeyRecord$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.publicKey);
                if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.privateKey);
                if (message.signature != null && $Object.hasOwnProperty.call(message, "signature"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signature);
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified SignedPreKeyRecord message, length delimited. Does not implicitly {@link signal.storage.SignedPreKeyRecord.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.SignedPreKeyRecord
             * @static
             * @param {signal.storage.SignedPreKeyRecord.$Properties} message SignedPreKeyRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignedPreKeyRecord.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SignedPreKeyRecord message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.SignedPreKeyRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.SignedPreKeyRecord & signal.storage.SignedPreKeyRecord.$Shape} SignedPreKeyRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignedPreKeyRecord.decode = function SignedPreKeyRecord$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.publicKey = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.privateKey = reader.bytes();
                            break;
                        }
                    case 4: {
                            message.signature = reader.bytes();
                            break;
                        }
                    case 5: {
                            message.timestamp = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a SignedPreKeyRecord message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.SignedPreKeyRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.SignedPreKeyRecord & signal.storage.SignedPreKeyRecord.$Shape} SignedPreKeyRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignedPreKeyRecord.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignedPreKeyRecord message.
             * @function verify
             * @memberof signal.storage.SignedPreKeyRecord
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignedPreKeyRecord.verify = function SignedPreKeyRecord$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                    if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                        return "publicKey: buffer expected";
                if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                    if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                        return "privateKey: buffer expected";
                if (message.signature != null && $Object.hasOwnProperty.call(message, "signature"))
                    if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                        return "signature: buffer expected";
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a SignedPreKeyRecord message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.SignedPreKeyRecord
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.SignedPreKeyRecord} SignedPreKeyRecord
             */
            SignedPreKeyRecord.fromObject = function SignedPreKeyRecord$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.SignedPreKeyRecord: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.publicKey != null)
                    if (typeof object.publicKey === "string")
                        $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                    else if (object.publicKey.length >= 0)
                        message.publicKey = object.publicKey;
                if (object.privateKey != null)
                    if (typeof object.privateKey === "string")
                        $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                    else if (object.privateKey.length >= 0)
                        message.privateKey = object.privateKey;
                if (object.signature != null)
                    if (typeof object.signature === "string")
                        $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                    else if (object.signature.length >= 0)
                        message.signature = object.signature;
                if (object.timestamp != null)
                    if ($util.Long)
                        message.timestamp = $util.Long.fromValue(object.timestamp, true);
                    else if (typeof object.timestamp === "string")
                        message.timestamp = $parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SignedPreKeyRecord message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.SignedPreKeyRecord
             * @static
             * @param {signal.storage.SignedPreKeyRecord} message SignedPreKeyRecord
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignedPreKeyRecord.toObject = function SignedPreKeyRecord$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.id = 0;
                    if (options.bytes === $String)
                        object.publicKey = "";
                    else {
                        object.publicKey = [];
                        if (options.bytes !== $Array)
                            object.publicKey = $util.newBuffer(object.publicKey);
                    }
                    if (options.bytes === $String)
                        object.privateKey = "";
                    else {
                        object.privateKey = [];
                        if (options.bytes !== $Array)
                            object.privateKey = $util.newBuffer(object.privateKey);
                    }
                    if (options.bytes === $String)
                        object.signature = "";
                    else {
                        object.signature = [];
                        if (options.bytes !== $Array)
                            object.signature = $util.newBuffer(object.signature);
                    }
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.timestamp = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = message.id;
                if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                    object.publicKey = options.bytes === $String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.publicKey) : message.publicKey;
                if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                    object.privateKey = options.bytes === $String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.privateKey) : message.privateKey;
                if (message.signature != null && $Object.hasOwnProperty.call(message, "signature"))
                    object.signature = options.bytes === $String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.signature) : message.signature;
                if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.timestamp = typeof message.timestamp === "number" ? $BigInt(message.timestamp) : $util.Long.fromBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0, true).toBigInt();
                    else if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === $String ? $String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === $Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                return object;
            };

            /**
             * Converts this SignedPreKeyRecord to JSON.
             * @function toJSON
             * @memberof signal.storage.SignedPreKeyRecord
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignedPreKeyRecord.prototype.toJSON = function() {
                return SignedPreKeyRecord.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SignedPreKeyRecord
             * @function getTypeUrl
             * @memberof signal.storage.SignedPreKeyRecord
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SignedPreKeyRecord.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.SignedPreKeyRecord";
            };

            return SignedPreKeyRecord;
        })();

        storage.IdentityKeyPair = (function() {

            /**
             * Properties of an IdentityKeyPair.
             * @typedef {Object} signal.storage.IdentityKeyPair.$Properties
             * @property {Uint8Array|null} [publicKey] IdentityKeyPair publicKey
             * @property {Uint8Array|null} [privateKey] IdentityKeyPair privateKey
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an IdentityKeyPair.
             * @memberof signal.storage
             * @interface IIdentityKeyPair
             * @augments signal.storage.IdentityKeyPair.$Properties
             * @deprecated Use signal.storage.IdentityKeyPair.$Properties instead.
             */

            /**
             * Shape of an IdentityKeyPair.
             * @typedef {signal.storage.IdentityKeyPair.$Properties} signal.storage.IdentityKeyPair.$Shape
             */

            /**
             * Constructs a new IdentityKeyPair.
             * @memberof signal.storage
             * @classdesc Represents an IdentityKeyPair.
             * @constructor
             * @param {signal.storage.IdentityKeyPair.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const IdentityKeyPair = function IdentityKeyPair(properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * IdentityKeyPair publicKey.
             * @member {Uint8Array} publicKey
             * @memberof signal.storage.IdentityKeyPair
             * @instance
             */
            IdentityKeyPair.prototype.publicKey = $util.newBuffer([]);

            /**
             * IdentityKeyPair privateKey.
             * @member {Uint8Array} privateKey
             * @memberof signal.storage.IdentityKeyPair
             * @instance
             */
            IdentityKeyPair.prototype.privateKey = $util.newBuffer([]);

            /**
             * Creates a new IdentityKeyPair instance using the specified properties.
             * @function create
             * @memberof signal.storage.IdentityKeyPair
             * @static
             * @param {signal.storage.IdentityKeyPair.$Properties=} [properties] Properties to set
             * @returns {signal.storage.IdentityKeyPair} IdentityKeyPair instance
             * @type {{
             *   (properties: signal.storage.IdentityKeyPair.$Shape): signal.storage.IdentityKeyPair & signal.storage.IdentityKeyPair.$Shape;
             *   (properties?: signal.storage.IdentityKeyPair.$Properties): signal.storage.IdentityKeyPair;
             * }}
             */
            IdentityKeyPair.create = function(properties) {
                return new IdentityKeyPair(properties);
            };

            /**
             * Encodes the specified IdentityKeyPair message. Does not implicitly {@link signal.storage.IdentityKeyPair.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.IdentityKeyPair
             * @static
             * @param {signal.storage.IdentityKeyPair.$Properties} message IdentityKeyPair message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IdentityKeyPair.encode = function IdentityKeyPair$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
                if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.privateKey);
                return writer;
            };

            /**
             * Encodes the specified IdentityKeyPair message, length delimited. Does not implicitly {@link signal.storage.IdentityKeyPair.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.IdentityKeyPair
             * @static
             * @param {signal.storage.IdentityKeyPair.$Properties} message IdentityKeyPair message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IdentityKeyPair.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an IdentityKeyPair message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.IdentityKeyPair
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.IdentityKeyPair & signal.storage.IdentityKeyPair.$Shape} IdentityKeyPair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IdentityKeyPair.decode = function IdentityKeyPair$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.publicKey = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.privateKey = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes an IdentityKeyPair message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.IdentityKeyPair
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.IdentityKeyPair & signal.storage.IdentityKeyPair.$Shape} IdentityKeyPair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IdentityKeyPair.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IdentityKeyPair message.
             * @function verify
             * @memberof signal.storage.IdentityKeyPair
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IdentityKeyPair.verify = function IdentityKeyPair$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                    if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                        return "publicKey: buffer expected";
                if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                    if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                        return "privateKey: buffer expected";
                return null;
            };

            /**
             * Creates an IdentityKeyPair message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.IdentityKeyPair
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.IdentityKeyPair} IdentityKeyPair
             */
            IdentityKeyPair.fromObject = function IdentityKeyPair$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.IdentityKeyPair: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.publicKey != null)
                    if (typeof object.publicKey === "string")
                        $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                    else if (object.publicKey.length >= 0)
                        message.publicKey = object.publicKey;
                if (object.privateKey != null)
                    if (typeof object.privateKey === "string")
                        $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                    else if (object.privateKey.length >= 0)
                        message.privateKey = object.privateKey;
                return message;
            };

            /**
             * Creates a plain object from an IdentityKeyPair message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.IdentityKeyPair
             * @static
             * @param {signal.storage.IdentityKeyPair} message IdentityKeyPair
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IdentityKeyPair.toObject = function IdentityKeyPair$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if (options.bytes === $String)
                        object.publicKey = "";
                    else {
                        object.publicKey = [];
                        if (options.bytes !== $Array)
                            object.publicKey = $util.newBuffer(object.publicKey);
                    }
                    if (options.bytes === $String)
                        object.privateKey = "";
                    else {
                        object.privateKey = [];
                        if (options.bytes !== $Array)
                            object.privateKey = $util.newBuffer(object.privateKey);
                    }
                }
                if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                    object.publicKey = options.bytes === $String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.publicKey) : message.publicKey;
                if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                    object.privateKey = options.bytes === $String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.privateKey) : message.privateKey;
                return object;
            };

            /**
             * Converts this IdentityKeyPair to JSON.
             * @function toJSON
             * @memberof signal.storage.IdentityKeyPair
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IdentityKeyPair.prototype.toJSON = function() {
                return IdentityKeyPair.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for IdentityKeyPair
             * @function getTypeUrl
             * @memberof signal.storage.IdentityKeyPair
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            IdentityKeyPair.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.IdentityKeyPair";
            };

            return IdentityKeyPair;
        })();

        storage.SenderKeyState = (function() {

            /**
             * Properties of a SenderKeyState.
             * @typedef {Object} signal.storage.SenderKeyState.$Properties
             * @property {number|null} [chainId] SenderKeyState chainId
             * @property {signal.storage.SenderChainKey.$Properties|null} [senderChainKey] SenderKeyState senderChainKey
             * @property {signal.storage.SenderSigningKey.$Properties|null} [senderSigningKey] SenderKeyState senderSigningKey
             * @property {Array.<signal.storage.SenderMessageKey.$Properties>|null} [senderMessageKeys] SenderKeyState senderMessageKeys
             * @property {number|null} [messageVersion] SenderKeyState messageVersion
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SenderKeyState.
             * @memberof signal.storage
             * @interface ISenderKeyState
             * @augments signal.storage.SenderKeyState.$Properties
             * @deprecated Use signal.storage.SenderKeyState.$Properties instead.
             */

            /**
             * Shape of a SenderKeyState.
             * @typedef {signal.storage.SenderKeyState.$Properties} signal.storage.SenderKeyState.$Shape
             */

            /**
             * Constructs a new SenderKeyState.
             * @memberof signal.storage
             * @classdesc Represents a SenderKeyState.
             * @constructor
             * @param {signal.storage.SenderKeyState.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SenderKeyState = function SenderKeyState(properties) {
                this.senderMessageKeys = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SenderKeyState chainId.
             * @member {number} chainId
             * @memberof signal.storage.SenderKeyState
             * @instance
             */
            SenderKeyState.prototype.chainId = 0;

            /**
             * SenderKeyState senderChainKey.
             * @member {signal.storage.SenderChainKey.$Properties|null|undefined} senderChainKey
             * @memberof signal.storage.SenderKeyState
             * @instance
             */
            SenderKeyState.prototype.senderChainKey = null;

            /**
             * SenderKeyState senderSigningKey.
             * @member {signal.storage.SenderSigningKey.$Properties|null|undefined} senderSigningKey
             * @memberof signal.storage.SenderKeyState
             * @instance
             */
            SenderKeyState.prototype.senderSigningKey = null;

            /**
             * SenderKeyState senderMessageKeys.
             * @member {Array.<signal.storage.SenderMessageKey.$Properties>} senderMessageKeys
             * @memberof signal.storage.SenderKeyState
             * @instance
             */
            SenderKeyState.prototype.senderMessageKeys = $util.emptyArray;

            /**
             * SenderKeyState messageVersion.
             * @member {number} messageVersion
             * @memberof signal.storage.SenderKeyState
             * @instance
             */
            SenderKeyState.prototype.messageVersion = 0;

            /**
             * Creates a new SenderKeyState instance using the specified properties.
             * @function create
             * @memberof signal.storage.SenderKeyState
             * @static
             * @param {signal.storage.SenderKeyState.$Properties=} [properties] Properties to set
             * @returns {signal.storage.SenderKeyState} SenderKeyState instance
             * @type {{
             *   (properties: signal.storage.SenderKeyState.$Shape): signal.storage.SenderKeyState & signal.storage.SenderKeyState.$Shape;
             *   (properties?: signal.storage.SenderKeyState.$Properties): signal.storage.SenderKeyState;
             * }}
             */
            SenderKeyState.create = function(properties) {
                return new SenderKeyState(properties);
            };

            /**
             * Encodes the specified SenderKeyState message. Does not implicitly {@link signal.storage.SenderKeyState.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.SenderKeyState
             * @static
             * @param {signal.storage.SenderKeyState.$Properties} message SenderKeyState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderKeyState.encode = function SenderKeyState$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.chainId != null && $Object.hasOwnProperty.call(message, "chainId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.chainId);
                if (message.senderChainKey != null && $Object.hasOwnProperty.call(message, "senderChainKey"))
                    $root.signal.storage.SenderChainKey.encode(message.senderChainKey, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.senderSigningKey != null && $Object.hasOwnProperty.call(message, "senderSigningKey"))
                    $root.signal.storage.SenderSigningKey.encode(message.senderSigningKey, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.senderMessageKeys != null && message.senderMessageKeys.length)
                    for (let i = 0; i < message.senderMessageKeys.length; ++i)
                        $root.signal.storage.SenderMessageKey.encode(message.senderMessageKeys[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.messageVersion != null && $Object.hasOwnProperty.call(message, "messageVersion"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.messageVersion);
                return writer;
            };

            /**
             * Encodes the specified SenderKeyState message, length delimited. Does not implicitly {@link signal.storage.SenderKeyState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.SenderKeyState
             * @static
             * @param {signal.storage.SenderKeyState.$Properties} message SenderKeyState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderKeyState.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SenderKeyState message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.SenderKeyState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.SenderKeyState & signal.storage.SenderKeyState.$Shape} SenderKeyState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderKeyState.decode = function SenderKeyState$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.chainId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.senderChainKey = $root.signal.storage.SenderChainKey.decode(reader, reader.uint32(), $undefined, long + 1);
                            break;
                        }
                    case 3: {
                            message.senderSigningKey = $root.signal.storage.SenderSigningKey.decode(reader, reader.uint32(), $undefined, long + 1);
                            break;
                        }
                    case 4: {
                            if (!(message.senderMessageKeys && message.senderMessageKeys.length))
                                message.senderMessageKeys = [];
                            message.senderMessageKeys.push($root.signal.storage.SenderMessageKey.decode(reader, reader.uint32(), $undefined, long + 1));
                            break;
                        }
                    case 5: {
                            message.messageVersion = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a SenderKeyState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.SenderKeyState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.SenderKeyState & signal.storage.SenderKeyState.$Shape} SenderKeyState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderKeyState.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderKeyState message.
             * @function verify
             * @memberof signal.storage.SenderKeyState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderKeyState.verify = function SenderKeyState$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.chainId != null && $Object.hasOwnProperty.call(message, "chainId"))
                    if (!$util.isInteger(message.chainId))
                        return "chainId: integer expected";
                if (message.senderChainKey != null && $Object.hasOwnProperty.call(message, "senderChainKey")) {
                    let error = $root.signal.storage.SenderChainKey.verify(message.senderChainKey, long + 1);
                    if (error)
                        return "senderChainKey." + error;
                }
                if (message.senderSigningKey != null && $Object.hasOwnProperty.call(message, "senderSigningKey")) {
                    let error = $root.signal.storage.SenderSigningKey.verify(message.senderSigningKey, long + 1);
                    if (error)
                        return "senderSigningKey." + error;
                }
                if (message.senderMessageKeys != null && $Object.hasOwnProperty.call(message, "senderMessageKeys")) {
                    if (!$Array.isArray(message.senderMessageKeys))
                        return "senderMessageKeys: array expected";
                    for (let i = 0; i < message.senderMessageKeys.length; ++i) {
                        let error = $root.signal.storage.SenderMessageKey.verify(message.senderMessageKeys[i], long + 1);
                        if (error)
                            return "senderMessageKeys." + error;
                    }
                }
                if (message.messageVersion != null && $Object.hasOwnProperty.call(message, "messageVersion"))
                    if (!$util.isInteger(message.messageVersion))
                        return "messageVersion: integer expected";
                return null;
            };

            /**
             * Creates a SenderKeyState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.SenderKeyState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.SenderKeyState} SenderKeyState
             */
            SenderKeyState.fromObject = function SenderKeyState$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.SenderKeyState: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.chainId != null)
                    message.chainId = object.chainId >>> 0;
                if (object.senderChainKey != null) {
                    if (!$util.isObject(object.senderChainKey))
                        throw $TypeError(".signal.storage.SenderKeyState.senderChainKey: object expected");
                    message.senderChainKey = $root.signal.storage.SenderChainKey.fromObject(object.senderChainKey, long + 1);
                }
                if (object.senderSigningKey != null) {
                    if (!$util.isObject(object.senderSigningKey))
                        throw $TypeError(".signal.storage.SenderKeyState.senderSigningKey: object expected");
                    message.senderSigningKey = $root.signal.storage.SenderSigningKey.fromObject(object.senderSigningKey, long + 1);
                }
                if (object.senderMessageKeys) {
                    if (!$Array.isArray(object.senderMessageKeys))
                        throw $TypeError(".signal.storage.SenderKeyState.senderMessageKeys: array expected");
                    message.senderMessageKeys = [];
                    for (let i = 0; i < object.senderMessageKeys.length; ++i) {
                        if (!$util.isObject(object.senderMessageKeys[i]))
                            throw $TypeError(".signal.storage.SenderKeyState.senderMessageKeys: object expected");
                        message.senderMessageKeys[i] = $root.signal.storage.SenderMessageKey.fromObject(object.senderMessageKeys[i], long + 1);
                    }
                }
                if (object.messageVersion != null)
                    message.messageVersion = object.messageVersion >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SenderKeyState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.SenderKeyState
             * @static
             * @param {signal.storage.SenderKeyState} message SenderKeyState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderKeyState.toObject = function SenderKeyState$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.senderMessageKeys = [];
                if (options.defaults) {
                    object.chainId = 0;
                    object.senderChainKey = null;
                    object.senderSigningKey = null;
                    object.messageVersion = 0;
                }
                if (message.chainId != null && $Object.hasOwnProperty.call(message, "chainId"))
                    object.chainId = message.chainId;
                if (message.senderChainKey != null && $Object.hasOwnProperty.call(message, "senderChainKey"))
                    object.senderChainKey = $root.signal.storage.SenderChainKey.toObject(message.senderChainKey, options, _depth + 1);
                if (message.senderSigningKey != null && $Object.hasOwnProperty.call(message, "senderSigningKey"))
                    object.senderSigningKey = $root.signal.storage.SenderSigningKey.toObject(message.senderSigningKey, options, _depth + 1);
                if (message.senderMessageKeys && message.senderMessageKeys.length) {
                    object.senderMessageKeys = [];
                    for (let j = 0; j < message.senderMessageKeys.length; ++j)
                        object.senderMessageKeys[j] = $root.signal.storage.SenderMessageKey.toObject(message.senderMessageKeys[j], options, _depth + 1);
                }
                if (message.messageVersion != null && $Object.hasOwnProperty.call(message, "messageVersion"))
                    object.messageVersion = message.messageVersion;
                return object;
            };

            /**
             * Converts this SenderKeyState to JSON.
             * @function toJSON
             * @memberof signal.storage.SenderKeyState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderKeyState.prototype.toJSON = function() {
                return SenderKeyState.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SenderKeyState
             * @function getTypeUrl
             * @memberof signal.storage.SenderKeyState
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SenderKeyState.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.SenderKeyState";
            };

            return SenderKeyState;
        })();

        storage.SenderChainKey = (function() {

            /**
             * Properties of a SenderChainKey.
             * @typedef {Object} signal.storage.SenderChainKey.$Properties
             * @property {number|null} [iteration] SenderChainKey iteration
             * @property {Uint8Array|null} [seed] SenderChainKey seed
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SenderChainKey.
             * @memberof signal.storage
             * @interface ISenderChainKey
             * @augments signal.storage.SenderChainKey.$Properties
             * @deprecated Use signal.storage.SenderChainKey.$Properties instead.
             */

            /**
             * Shape of a SenderChainKey.
             * @typedef {signal.storage.SenderChainKey.$Properties} signal.storage.SenderChainKey.$Shape
             */

            /**
             * Constructs a new SenderChainKey.
             * @memberof signal.storage
             * @classdesc Represents a SenderChainKey.
             * @constructor
             * @param {signal.storage.SenderChainKey.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SenderChainKey = function SenderChainKey(properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SenderChainKey iteration.
             * @member {number} iteration
             * @memberof signal.storage.SenderChainKey
             * @instance
             */
            SenderChainKey.prototype.iteration = 0;

            /**
             * SenderChainKey seed.
             * @member {Uint8Array} seed
             * @memberof signal.storage.SenderChainKey
             * @instance
             */
            SenderChainKey.prototype.seed = $util.newBuffer([]);

            /**
             * Creates a new SenderChainKey instance using the specified properties.
             * @function create
             * @memberof signal.storage.SenderChainKey
             * @static
             * @param {signal.storage.SenderChainKey.$Properties=} [properties] Properties to set
             * @returns {signal.storage.SenderChainKey} SenderChainKey instance
             * @type {{
             *   (properties: signal.storage.SenderChainKey.$Shape): signal.storage.SenderChainKey & signal.storage.SenderChainKey.$Shape;
             *   (properties?: signal.storage.SenderChainKey.$Properties): signal.storage.SenderChainKey;
             * }}
             */
            SenderChainKey.create = function(properties) {
                return new SenderChainKey(properties);
            };

            /**
             * Encodes the specified SenderChainKey message. Does not implicitly {@link signal.storage.SenderChainKey.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.SenderChainKey
             * @static
             * @param {signal.storage.SenderChainKey.$Properties} message SenderChainKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderChainKey.encode = function SenderChainKey$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
                return writer;
            };

            /**
             * Encodes the specified SenderChainKey message, length delimited. Does not implicitly {@link signal.storage.SenderChainKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.SenderChainKey
             * @static
             * @param {signal.storage.SenderChainKey.$Properties} message SenderChainKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderChainKey.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SenderChainKey message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.SenderChainKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.SenderChainKey & signal.storage.SenderChainKey.$Shape} SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderChainKey.decode = function SenderChainKey$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.iteration = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.seed = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a SenderChainKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.SenderChainKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.SenderChainKey & signal.storage.SenderChainKey.$Shape} SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderChainKey.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderChainKey message.
             * @function verify
             * @memberof signal.storage.SenderChainKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderChainKey.verify = function SenderChainKey$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                    if (!$util.isInteger(message.iteration))
                        return "iteration: integer expected";
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                        return "seed: buffer expected";
                return null;
            };

            /**
             * Creates a SenderChainKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.SenderChainKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.SenderChainKey} SenderChainKey
             */
            SenderChainKey.fromObject = function SenderChainKey$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.SenderChainKey: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.iteration != null)
                    message.iteration = object.iteration >>> 0;
                if (object.seed != null)
                    if (typeof object.seed === "string")
                        $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                    else if (object.seed.length >= 0)
                        message.seed = object.seed;
                return message;
            };

            /**
             * Creates a plain object from a SenderChainKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.SenderChainKey
             * @static
             * @param {signal.storage.SenderChainKey} message SenderChainKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderChainKey.toObject = function SenderChainKey$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.iteration = 0;
                    if (options.bytes === $String)
                        object.seed = "";
                    else {
                        object.seed = [];
                        if (options.bytes !== $Array)
                            object.seed = $util.newBuffer(object.seed);
                    }
                }
                if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                    object.iteration = message.iteration;
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    object.seed = options.bytes === $String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.seed) : message.seed;
                return object;
            };

            /**
             * Converts this SenderChainKey to JSON.
             * @function toJSON
             * @memberof signal.storage.SenderChainKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderChainKey.prototype.toJSON = function() {
                return SenderChainKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SenderChainKey
             * @function getTypeUrl
             * @memberof signal.storage.SenderChainKey
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SenderChainKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.SenderChainKey";
            };

            return SenderChainKey;
        })();

        storage.SenderMessageKey = (function() {

            /**
             * Properties of a SenderMessageKey.
             * @typedef {Object} signal.storage.SenderMessageKey.$Properties
             * @property {number|null} [iteration] SenderMessageKey iteration
             * @property {Uint8Array|null} [seed] SenderMessageKey seed
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SenderMessageKey.
             * @memberof signal.storage
             * @interface ISenderMessageKey
             * @augments signal.storage.SenderMessageKey.$Properties
             * @deprecated Use signal.storage.SenderMessageKey.$Properties instead.
             */

            /**
             * Shape of a SenderMessageKey.
             * @typedef {signal.storage.SenderMessageKey.$Properties} signal.storage.SenderMessageKey.$Shape
             */

            /**
             * Constructs a new SenderMessageKey.
             * @memberof signal.storage
             * @classdesc Represents a SenderMessageKey.
             * @constructor
             * @param {signal.storage.SenderMessageKey.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SenderMessageKey = function SenderMessageKey(properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SenderMessageKey iteration.
             * @member {number} iteration
             * @memberof signal.storage.SenderMessageKey
             * @instance
             */
            SenderMessageKey.prototype.iteration = 0;

            /**
             * SenderMessageKey seed.
             * @member {Uint8Array} seed
             * @memberof signal.storage.SenderMessageKey
             * @instance
             */
            SenderMessageKey.prototype.seed = $util.newBuffer([]);

            /**
             * Creates a new SenderMessageKey instance using the specified properties.
             * @function create
             * @memberof signal.storage.SenderMessageKey
             * @static
             * @param {signal.storage.SenderMessageKey.$Properties=} [properties] Properties to set
             * @returns {signal.storage.SenderMessageKey} SenderMessageKey instance
             * @type {{
             *   (properties: signal.storage.SenderMessageKey.$Shape): signal.storage.SenderMessageKey & signal.storage.SenderMessageKey.$Shape;
             *   (properties?: signal.storage.SenderMessageKey.$Properties): signal.storage.SenderMessageKey;
             * }}
             */
            SenderMessageKey.create = function(properties) {
                return new SenderMessageKey(properties);
            };

            /**
             * Encodes the specified SenderMessageKey message. Does not implicitly {@link signal.storage.SenderMessageKey.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.SenderMessageKey
             * @static
             * @param {signal.storage.SenderMessageKey.$Properties} message SenderMessageKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderMessageKey.encode = function SenderMessageKey$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
                return writer;
            };

            /**
             * Encodes the specified SenderMessageKey message, length delimited. Does not implicitly {@link signal.storage.SenderMessageKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.SenderMessageKey
             * @static
             * @param {signal.storage.SenderMessageKey.$Properties} message SenderMessageKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderMessageKey.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SenderMessageKey message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.SenderMessageKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.SenderMessageKey & signal.storage.SenderMessageKey.$Shape} SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderMessageKey.decode = function SenderMessageKey$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.iteration = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.seed = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a SenderMessageKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.SenderMessageKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.SenderMessageKey & signal.storage.SenderMessageKey.$Shape} SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderMessageKey.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderMessageKey message.
             * @function verify
             * @memberof signal.storage.SenderMessageKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderMessageKey.verify = function SenderMessageKey$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                    if (!$util.isInteger(message.iteration))
                        return "iteration: integer expected";
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                        return "seed: buffer expected";
                return null;
            };

            /**
             * Creates a SenderMessageKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.SenderMessageKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.SenderMessageKey} SenderMessageKey
             */
            SenderMessageKey.fromObject = function SenderMessageKey$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.SenderMessageKey: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.iteration != null)
                    message.iteration = object.iteration >>> 0;
                if (object.seed != null)
                    if (typeof object.seed === "string")
                        $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                    else if (object.seed.length >= 0)
                        message.seed = object.seed;
                return message;
            };

            /**
             * Creates a plain object from a SenderMessageKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.SenderMessageKey
             * @static
             * @param {signal.storage.SenderMessageKey} message SenderMessageKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderMessageKey.toObject = function SenderMessageKey$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.iteration = 0;
                    if (options.bytes === $String)
                        object.seed = "";
                    else {
                        object.seed = [];
                        if (options.bytes !== $Array)
                            object.seed = $util.newBuffer(object.seed);
                    }
                }
                if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                    object.iteration = message.iteration;
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    object.seed = options.bytes === $String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.seed) : message.seed;
                return object;
            };

            /**
             * Converts this SenderMessageKey to JSON.
             * @function toJSON
             * @memberof signal.storage.SenderMessageKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderMessageKey.prototype.toJSON = function() {
                return SenderMessageKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SenderMessageKey
             * @function getTypeUrl
             * @memberof signal.storage.SenderMessageKey
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SenderMessageKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.SenderMessageKey";
            };

            return SenderMessageKey;
        })();

        storage.SenderSigningKey = (function() {

            /**
             * Properties of a SenderSigningKey.
             * @typedef {Object} signal.storage.SenderSigningKey.$Properties
             * @property {Uint8Array|null} [publicKey] SenderSigningKey publicKey
             * @property {Uint8Array|null} [privateKey] SenderSigningKey privateKey
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SenderSigningKey.
             * @memberof signal.storage
             * @interface ISenderSigningKey
             * @augments signal.storage.SenderSigningKey.$Properties
             * @deprecated Use signal.storage.SenderSigningKey.$Properties instead.
             */

            /**
             * Shape of a SenderSigningKey.
             * @typedef {signal.storage.SenderSigningKey.$Properties} signal.storage.SenderSigningKey.$Shape
             */

            /**
             * Constructs a new SenderSigningKey.
             * @memberof signal.storage
             * @classdesc Represents a SenderSigningKey.
             * @constructor
             * @param {signal.storage.SenderSigningKey.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SenderSigningKey = function SenderSigningKey(properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SenderSigningKey publicKey.
             * @member {Uint8Array} publicKey
             * @memberof signal.storage.SenderSigningKey
             * @instance
             */
            SenderSigningKey.prototype.publicKey = $util.newBuffer([]);

            /**
             * SenderSigningKey privateKey.
             * @member {Uint8Array} privateKey
             * @memberof signal.storage.SenderSigningKey
             * @instance
             */
            SenderSigningKey.prototype.privateKey = $util.newBuffer([]);

            /**
             * Creates a new SenderSigningKey instance using the specified properties.
             * @function create
             * @memberof signal.storage.SenderSigningKey
             * @static
             * @param {signal.storage.SenderSigningKey.$Properties=} [properties] Properties to set
             * @returns {signal.storage.SenderSigningKey} SenderSigningKey instance
             * @type {{
             *   (properties: signal.storage.SenderSigningKey.$Shape): signal.storage.SenderSigningKey & signal.storage.SenderSigningKey.$Shape;
             *   (properties?: signal.storage.SenderSigningKey.$Properties): signal.storage.SenderSigningKey;
             * }}
             */
            SenderSigningKey.create = function(properties) {
                return new SenderSigningKey(properties);
            };

            /**
             * Encodes the specified SenderSigningKey message. Does not implicitly {@link signal.storage.SenderSigningKey.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.SenderSigningKey
             * @static
             * @param {signal.storage.SenderSigningKey.$Properties} message SenderSigningKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderSigningKey.encode = function SenderSigningKey$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
                if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.privateKey);
                return writer;
            };

            /**
             * Encodes the specified SenderSigningKey message, length delimited. Does not implicitly {@link signal.storage.SenderSigningKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.SenderSigningKey
             * @static
             * @param {signal.storage.SenderSigningKey.$Properties} message SenderSigningKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderSigningKey.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SenderSigningKey message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.SenderSigningKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.SenderSigningKey & signal.storage.SenderSigningKey.$Shape} SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderSigningKey.decode = function SenderSigningKey$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.publicKey = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.privateKey = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a SenderSigningKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.SenderSigningKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.SenderSigningKey & signal.storage.SenderSigningKey.$Shape} SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderSigningKey.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderSigningKey message.
             * @function verify
             * @memberof signal.storage.SenderSigningKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderSigningKey.verify = function SenderSigningKey$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                    if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                        return "publicKey: buffer expected";
                if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                    if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                        return "privateKey: buffer expected";
                return null;
            };

            /**
             * Creates a SenderSigningKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.SenderSigningKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.SenderSigningKey} SenderSigningKey
             */
            SenderSigningKey.fromObject = function SenderSigningKey$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.SenderSigningKey: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.publicKey != null)
                    if (typeof object.publicKey === "string")
                        $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                    else if (object.publicKey.length >= 0)
                        message.publicKey = object.publicKey;
                if (object.privateKey != null)
                    if (typeof object.privateKey === "string")
                        $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                    else if (object.privateKey.length >= 0)
                        message.privateKey = object.privateKey;
                return message;
            };

            /**
             * Creates a plain object from a SenderSigningKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.SenderSigningKey
             * @static
             * @param {signal.storage.SenderSigningKey} message SenderSigningKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderSigningKey.toObject = function SenderSigningKey$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    if (options.bytes === $String)
                        object.publicKey = "";
                    else {
                        object.publicKey = [];
                        if (options.bytes !== $Array)
                            object.publicKey = $util.newBuffer(object.publicKey);
                    }
                    if (options.bytes === $String)
                        object.privateKey = "";
                    else {
                        object.privateKey = [];
                        if (options.bytes !== $Array)
                            object.privateKey = $util.newBuffer(object.privateKey);
                    }
                }
                if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                    object.publicKey = options.bytes === $String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.publicKey) : message.publicKey;
                if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                    object.privateKey = options.bytes === $String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.privateKey) : message.privateKey;
                return object;
            };

            /**
             * Converts this SenderSigningKey to JSON.
             * @function toJSON
             * @memberof signal.storage.SenderSigningKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderSigningKey.prototype.toJSON = function() {
                return SenderSigningKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SenderSigningKey
             * @function getTypeUrl
             * @memberof signal.storage.SenderSigningKey
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SenderSigningKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.SenderSigningKey";
            };

            return SenderSigningKey;
        })();

        storage.SenderKeyRecord = (function() {

            /**
             * Properties of a SenderKeyRecord.
             * @typedef {Object} signal.storage.SenderKeyRecord.$Properties
             * @property {Array.<signal.storage.SenderKeyState.$Properties>|null} [senderKeyStates] SenderKeyRecord senderKeyStates
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SenderKeyRecord.
             * @memberof signal.storage
             * @interface ISenderKeyRecord
             * @augments signal.storage.SenderKeyRecord.$Properties
             * @deprecated Use signal.storage.SenderKeyRecord.$Properties instead.
             */

            /**
             * Shape of a SenderKeyRecord.
             * @typedef {signal.storage.SenderKeyRecord.$Properties} signal.storage.SenderKeyRecord.$Shape
             */

            /**
             * Constructs a new SenderKeyRecord.
             * @memberof signal.storage
             * @classdesc Represents a SenderKeyRecord.
             * @constructor
             * @param {signal.storage.SenderKeyRecord.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const SenderKeyRecord = function SenderKeyRecord(properties) {
                this.senderKeyStates = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SenderKeyRecord senderKeyStates.
             * @member {Array.<signal.storage.SenderKeyState.$Properties>} senderKeyStates
             * @memberof signal.storage.SenderKeyRecord
             * @instance
             */
            SenderKeyRecord.prototype.senderKeyStates = $util.emptyArray;

            /**
             * Creates a new SenderKeyRecord instance using the specified properties.
             * @function create
             * @memberof signal.storage.SenderKeyRecord
             * @static
             * @param {signal.storage.SenderKeyRecord.$Properties=} [properties] Properties to set
             * @returns {signal.storage.SenderKeyRecord} SenderKeyRecord instance
             * @type {{
             *   (properties: signal.storage.SenderKeyRecord.$Shape): signal.storage.SenderKeyRecord & signal.storage.SenderKeyRecord.$Shape;
             *   (properties?: signal.storage.SenderKeyRecord.$Properties): signal.storage.SenderKeyRecord;
             * }}
             */
            SenderKeyRecord.create = function(properties) {
                return new SenderKeyRecord(properties);
            };

            /**
             * Encodes the specified SenderKeyRecord message. Does not implicitly {@link signal.storage.SenderKeyRecord.verify|verify} messages.
             * @function encode
             * @memberof signal.storage.SenderKeyRecord
             * @static
             * @param {signal.storage.SenderKeyRecord.$Properties} message SenderKeyRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderKeyRecord.encode = function SenderKeyRecord$encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.senderKeyStates != null && message.senderKeyStates.length)
                    for (let i = 0; i < message.senderKeyStates.length; ++i)
                        $root.signal.storage.SenderKeyState.encode(message.senderKeyStates[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SenderKeyRecord message, length delimited. Does not implicitly {@link signal.storage.SenderKeyRecord.verify|verify} messages.
             * @function encodeDelimited
             * @memberof signal.storage.SenderKeyRecord
             * @static
             * @param {signal.storage.SenderKeyRecord.$Properties} message SenderKeyRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderKeyRecord.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SenderKeyRecord message from the specified reader or buffer.
             * @function decode
             * @memberof signal.storage.SenderKeyRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {signal.storage.SenderKeyRecord & signal.storage.SenderKeyRecord.$Shape} SenderKeyRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderKeyRecord.decode = function SenderKeyRecord$decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === $undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = new this.ctor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.senderKeyStates && message.senderKeyStates.length))
                                message.senderKeyStates = [];
                            message.senderKeyStates.push($root.signal.storage.SenderKeyState.decode(reader, reader.uint32(), $undefined, long + 1));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                return message;
            };

            /**
             * Decodes a SenderKeyRecord message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof signal.storage.SenderKeyRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {signal.storage.SenderKeyRecord & signal.storage.SenderKeyRecord.$Shape} SenderKeyRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderKeyRecord.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderKeyRecord message.
             * @function verify
             * @memberof signal.storage.SenderKeyRecord
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderKeyRecord.verify = function SenderKeyRecord$verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.senderKeyStates != null && $Object.hasOwnProperty.call(message, "senderKeyStates")) {
                    if (!$Array.isArray(message.senderKeyStates))
                        return "senderKeyStates: array expected";
                    for (let i = 0; i < message.senderKeyStates.length; ++i) {
                        let error = $root.signal.storage.SenderKeyState.verify(message.senderKeyStates[i], long + 1);
                        if (error)
                            return "senderKeyStates." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SenderKeyRecord message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof signal.storage.SenderKeyRecord
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {signal.storage.SenderKeyRecord} SenderKeyRecord
             */
            SenderKeyRecord.fromObject = function SenderKeyRecord$fromObject(object, long) {
                if (object instanceof this.ctor)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".signal.storage.SenderKeyRecord: object expected");
                if (long === $undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw $Error("maximum nesting depth exceeded");
                let message = new this.ctor();
                if (object.senderKeyStates) {
                    if (!$Array.isArray(object.senderKeyStates))
                        throw $TypeError(".signal.storage.SenderKeyRecord.senderKeyStates: array expected");
                    message.senderKeyStates = [];
                    for (let i = 0; i < object.senderKeyStates.length; ++i) {
                        if (!$util.isObject(object.senderKeyStates[i]))
                            throw $TypeError(".signal.storage.SenderKeyRecord.senderKeyStates: object expected");
                        message.senderKeyStates[i] = $root.signal.storage.SenderKeyState.fromObject(object.senderKeyStates[i], long + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SenderKeyRecord message. Also converts values to other types if specified.
             * @function toObject
             * @memberof signal.storage.SenderKeyRecord
             * @static
             * @param {signal.storage.SenderKeyRecord} message SenderKeyRecord
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderKeyRecord.toObject = function SenderKeyRecord$toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.senderKeyStates = [];
                if (message.senderKeyStates && message.senderKeyStates.length) {
                    object.senderKeyStates = [];
                    for (let j = 0; j < message.senderKeyStates.length; ++j)
                        object.senderKeyStates[j] = $root.signal.storage.SenderKeyState.toObject(message.senderKeyStates[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this SenderKeyRecord to JSON.
             * @function toJSON
             * @memberof signal.storage.SenderKeyRecord
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderKeyRecord.prototype.toJSON = function() {
                return SenderKeyRecord.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SenderKeyRecord
             * @function getTypeUrl
             * @memberof signal.storage.SenderKeyRecord
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SenderKeyRecord.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/signal.storage.SenderKeyRecord";
            };

            return SenderKeyRecord;
        })();

        return storage;
    })();

    return signal;
})();

export const textsecure = $root.textsecure = (() => {

    /**
     * Namespace textsecure.
     * @exports textsecure
     * @namespace
     */
    const textsecure = {};

    textsecure.WhisperMessage = (function() {

        /**
         * Properties of a WhisperMessage.
         * @typedef {Object} textsecure.WhisperMessage.$Properties
         * @property {Uint8Array|null} [ephemeralKey] WhisperMessage ephemeralKey
         * @property {number|null} [counter] WhisperMessage counter
         * @property {number|null} [previousCounter] WhisperMessage previousCounter
         * @property {Uint8Array|null} [ciphertext] WhisperMessage ciphertext
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a WhisperMessage.
         * @memberof textsecure
         * @interface IWhisperMessage
         * @augments textsecure.WhisperMessage.$Properties
         * @deprecated Use textsecure.WhisperMessage.$Properties instead.
         */

        /**
         * Shape of a WhisperMessage.
         * @typedef {textsecure.WhisperMessage.$Properties} textsecure.WhisperMessage.$Shape
         */

        /**
         * Constructs a new WhisperMessage.
         * @memberof textsecure
         * @classdesc Represents a WhisperMessage.
         * @constructor
         * @param {textsecure.WhisperMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const WhisperMessage = function WhisperMessage(properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * WhisperMessage ephemeralKey.
         * @member {Uint8Array} ephemeralKey
         * @memberof textsecure.WhisperMessage
         * @instance
         */
        WhisperMessage.prototype.ephemeralKey = $util.newBuffer([]);

        /**
         * WhisperMessage counter.
         * @member {number} counter
         * @memberof textsecure.WhisperMessage
         * @instance
         */
        WhisperMessage.prototype.counter = 0;

        /**
         * WhisperMessage previousCounter.
         * @member {number} previousCounter
         * @memberof textsecure.WhisperMessage
         * @instance
         */
        WhisperMessage.prototype.previousCounter = 0;

        /**
         * WhisperMessage ciphertext.
         * @member {Uint8Array} ciphertext
         * @memberof textsecure.WhisperMessage
         * @instance
         */
        WhisperMessage.prototype.ciphertext = $util.newBuffer([]);

        /**
         * Creates a new WhisperMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {textsecure.WhisperMessage.$Properties=} [properties] Properties to set
         * @returns {textsecure.WhisperMessage} WhisperMessage instance
         * @type {{
         *   (properties: textsecure.WhisperMessage.$Shape): textsecure.WhisperMessage & textsecure.WhisperMessage.$Shape;
         *   (properties?: textsecure.WhisperMessage.$Properties): textsecure.WhisperMessage;
         * }}
         */
        WhisperMessage.create = function(properties) {
            return new WhisperMessage(properties);
        };

        /**
         * Encodes the specified WhisperMessage message. Does not implicitly {@link textsecure.WhisperMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {textsecure.WhisperMessage.$Properties} message WhisperMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhisperMessage.encode = function WhisperMessage$encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.ephemeralKey != null && $Object.hasOwnProperty.call(message, "ephemeralKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ephemeralKey);
            if (message.counter != null && $Object.hasOwnProperty.call(message, "counter"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.counter);
            if (message.previousCounter != null && $Object.hasOwnProperty.call(message, "previousCounter"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.previousCounter);
            if (message.ciphertext != null && $Object.hasOwnProperty.call(message, "ciphertext"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ciphertext);
            return writer;
        };

        /**
         * Encodes the specified WhisperMessage message, length delimited. Does not implicitly {@link textsecure.WhisperMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {textsecure.WhisperMessage.$Properties} message WhisperMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WhisperMessage.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a WhisperMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.WhisperMessage & textsecure.WhisperMessage.$Shape} WhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhisperMessage.decode = function WhisperMessage$decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === $undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.ephemeralKey = reader.bytes();
                        break;
                    }
                case 2: {
                        message.counter = reader.uint32();
                        break;
                    }
                case 3: {
                        message.previousCounter = reader.uint32();
                        break;
                    }
                case 4: {
                        message.ciphertext = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            return message;
        };

        /**
         * Decodes a WhisperMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.WhisperMessage & textsecure.WhisperMessage.$Shape} WhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WhisperMessage.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WhisperMessage message.
         * @function verify
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WhisperMessage.verify = function WhisperMessage$verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.ephemeralKey != null && $Object.hasOwnProperty.call(message, "ephemeralKey"))
                if (!(message.ephemeralKey && typeof message.ephemeralKey.length === "number" || $util.isString(message.ephemeralKey)))
                    return "ephemeralKey: buffer expected";
            if (message.counter != null && $Object.hasOwnProperty.call(message, "counter"))
                if (!$util.isInteger(message.counter))
                    return "counter: integer expected";
            if (message.previousCounter != null && $Object.hasOwnProperty.call(message, "previousCounter"))
                if (!$util.isInteger(message.previousCounter))
                    return "previousCounter: integer expected";
            if (message.ciphertext != null && $Object.hasOwnProperty.call(message, "ciphertext"))
                if (!(message.ciphertext && typeof message.ciphertext.length === "number" || $util.isString(message.ciphertext)))
                    return "ciphertext: buffer expected";
            return null;
        };

        /**
         * Creates a WhisperMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.WhisperMessage} WhisperMessage
         */
        WhisperMessage.fromObject = function WhisperMessage$fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".textsecure.WhisperMessage: object expected");
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.ephemeralKey != null)
                if (typeof object.ephemeralKey === "string")
                    $util.base64.decode(object.ephemeralKey, message.ephemeralKey = $util.newBuffer($util.base64.length(object.ephemeralKey)), 0);
                else if (object.ephemeralKey.length >= 0)
                    message.ephemeralKey = object.ephemeralKey;
            if (object.counter != null)
                message.counter = object.counter >>> 0;
            if (object.previousCounter != null)
                message.previousCounter = object.previousCounter >>> 0;
            if (object.ciphertext != null)
                if (typeof object.ciphertext === "string")
                    $util.base64.decode(object.ciphertext, message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext)), 0);
                else if (object.ciphertext.length >= 0)
                    message.ciphertext = object.ciphertext;
            return message;
        };

        /**
         * Creates a plain object from a WhisperMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {textsecure.WhisperMessage} message WhisperMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WhisperMessage.toObject = function WhisperMessage$toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                if (options.bytes === $String)
                    object.ephemeralKey = "";
                else {
                    object.ephemeralKey = [];
                    if (options.bytes !== $Array)
                        object.ephemeralKey = $util.newBuffer(object.ephemeralKey);
                }
                object.counter = 0;
                object.previousCounter = 0;
                if (options.bytes === $String)
                    object.ciphertext = "";
                else {
                    object.ciphertext = [];
                    if (options.bytes !== $Array)
                        object.ciphertext = $util.newBuffer(object.ciphertext);
                }
            }
            if (message.ephemeralKey != null && $Object.hasOwnProperty.call(message, "ephemeralKey"))
                object.ephemeralKey = options.bytes === $String ? $util.base64.encode(message.ephemeralKey, 0, message.ephemeralKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.ephemeralKey) : message.ephemeralKey;
            if (message.counter != null && $Object.hasOwnProperty.call(message, "counter"))
                object.counter = message.counter;
            if (message.previousCounter != null && $Object.hasOwnProperty.call(message, "previousCounter"))
                object.previousCounter = message.previousCounter;
            if (message.ciphertext != null && $Object.hasOwnProperty.call(message, "ciphertext"))
                object.ciphertext = options.bytes === $String ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.ciphertext) : message.ciphertext;
            return object;
        };

        /**
         * Converts this WhisperMessage to JSON.
         * @function toJSON
         * @memberof textsecure.WhisperMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WhisperMessage.prototype.toJSON = function() {
            return WhisperMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for WhisperMessage
         * @function getTypeUrl
         * @memberof textsecure.WhisperMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        WhisperMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/textsecure.WhisperMessage";
        };

        return WhisperMessage;
    })();

    textsecure.PreKeyWhisperMessage = (function() {

        /**
         * Properties of a PreKeyWhisperMessage.
         * @typedef {Object} textsecure.PreKeyWhisperMessage.$Properties
         * @property {number|null} [registrationId] PreKeyWhisperMessage registrationId
         * @property {number|null} [preKeyId] PreKeyWhisperMessage preKeyId
         * @property {number|null} [signedPreKeyId] PreKeyWhisperMessage signedPreKeyId
         * @property {Uint8Array|null} [baseKey] PreKeyWhisperMessage baseKey
         * @property {Uint8Array|null} [identityKey] PreKeyWhisperMessage identityKey
         * @property {Uint8Array|null} [message] PreKeyWhisperMessage message
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PreKeyWhisperMessage.
         * @memberof textsecure
         * @interface IPreKeyWhisperMessage
         * @augments textsecure.PreKeyWhisperMessage.$Properties
         * @deprecated Use textsecure.PreKeyWhisperMessage.$Properties instead.
         */

        /**
         * Shape of a PreKeyWhisperMessage.
         * @typedef {textsecure.PreKeyWhisperMessage.$Properties} textsecure.PreKeyWhisperMessage.$Shape
         */

        /**
         * Constructs a new PreKeyWhisperMessage.
         * @memberof textsecure
         * @classdesc Represents a PreKeyWhisperMessage.
         * @constructor
         * @param {textsecure.PreKeyWhisperMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PreKeyWhisperMessage = function PreKeyWhisperMessage(properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * PreKeyWhisperMessage registrationId.
         * @member {number} registrationId
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.registrationId = 0;

        /**
         * PreKeyWhisperMessage preKeyId.
         * @member {number} preKeyId
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.preKeyId = 0;

        /**
         * PreKeyWhisperMessage signedPreKeyId.
         * @member {number} signedPreKeyId
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.signedPreKeyId = 0;

        /**
         * PreKeyWhisperMessage baseKey.
         * @member {Uint8Array} baseKey
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.baseKey = $util.newBuffer([]);

        /**
         * PreKeyWhisperMessage identityKey.
         * @member {Uint8Array} identityKey
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.identityKey = $util.newBuffer([]);

        /**
         * PreKeyWhisperMessage message.
         * @member {Uint8Array} message
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         */
        PreKeyWhisperMessage.prototype.message = $util.newBuffer([]);

        /**
         * Creates a new PreKeyWhisperMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {textsecure.PreKeyWhisperMessage.$Properties=} [properties] Properties to set
         * @returns {textsecure.PreKeyWhisperMessage} PreKeyWhisperMessage instance
         * @type {{
         *   (properties: textsecure.PreKeyWhisperMessage.$Shape): textsecure.PreKeyWhisperMessage & textsecure.PreKeyWhisperMessage.$Shape;
         *   (properties?: textsecure.PreKeyWhisperMessage.$Properties): textsecure.PreKeyWhisperMessage;
         * }}
         */
        PreKeyWhisperMessage.create = function(properties) {
            return new PreKeyWhisperMessage(properties);
        };

        /**
         * Encodes the specified PreKeyWhisperMessage message. Does not implicitly {@link textsecure.PreKeyWhisperMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {textsecure.PreKeyWhisperMessage.$Properties} message PreKeyWhisperMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeyWhisperMessage.encode = function PreKeyWhisperMessage$encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.preKeyId != null && $Object.hasOwnProperty.call(message, "preKeyId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.preKeyId);
            if (message.baseKey != null && $Object.hasOwnProperty.call(message, "baseKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
            if (message.identityKey != null && $Object.hasOwnProperty.call(message, "identityKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.identityKey);
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.message);
            if (message.registrationId != null && $Object.hasOwnProperty.call(message, "registrationId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.registrationId);
            if (message.signedPreKeyId != null && $Object.hasOwnProperty.call(message, "signedPreKeyId"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.signedPreKeyId);
            return writer;
        };

        /**
         * Encodes the specified PreKeyWhisperMessage message, length delimited. Does not implicitly {@link textsecure.PreKeyWhisperMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {textsecure.PreKeyWhisperMessage.$Properties} message PreKeyWhisperMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeyWhisperMessage.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a PreKeyWhisperMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.PreKeyWhisperMessage & textsecure.PreKeyWhisperMessage.$Shape} PreKeyWhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeyWhisperMessage.decode = function PreKeyWhisperMessage$decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === $undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 5: {
                        message.registrationId = reader.uint32();
                        break;
                    }
                case 1: {
                        message.preKeyId = reader.uint32();
                        break;
                    }
                case 6: {
                        message.signedPreKeyId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.baseKey = reader.bytes();
                        break;
                    }
                case 3: {
                        message.identityKey = reader.bytes();
                        break;
                    }
                case 4: {
                        message.message = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            return message;
        };

        /**
         * Decodes a PreKeyWhisperMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.PreKeyWhisperMessage & textsecure.PreKeyWhisperMessage.$Shape} PreKeyWhisperMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeyWhisperMessage.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreKeyWhisperMessage message.
         * @function verify
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreKeyWhisperMessage.verify = function PreKeyWhisperMessage$verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.registrationId != null && $Object.hasOwnProperty.call(message, "registrationId"))
                if (!$util.isInteger(message.registrationId))
                    return "registrationId: integer expected";
            if (message.preKeyId != null && $Object.hasOwnProperty.call(message, "preKeyId"))
                if (!$util.isInteger(message.preKeyId))
                    return "preKeyId: integer expected";
            if (message.signedPreKeyId != null && $Object.hasOwnProperty.call(message, "signedPreKeyId"))
                if (!$util.isInteger(message.signedPreKeyId))
                    return "signedPreKeyId: integer expected";
            if (message.baseKey != null && $Object.hasOwnProperty.call(message, "baseKey"))
                if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                    return "baseKey: buffer expected";
            if (message.identityKey != null && $Object.hasOwnProperty.call(message, "identityKey"))
                if (!(message.identityKey && typeof message.identityKey.length === "number" || $util.isString(message.identityKey)))
                    return "identityKey: buffer expected";
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            return null;
        };

        /**
         * Creates a PreKeyWhisperMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.PreKeyWhisperMessage} PreKeyWhisperMessage
         */
        PreKeyWhisperMessage.fromObject = function PreKeyWhisperMessage$fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".textsecure.PreKeyWhisperMessage: object expected");
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.registrationId != null)
                message.registrationId = object.registrationId >>> 0;
            if (object.preKeyId != null)
                message.preKeyId = object.preKeyId >>> 0;
            if (object.signedPreKeyId != null)
                message.signedPreKeyId = object.signedPreKeyId >>> 0;
            if (object.baseKey != null)
                if (typeof object.baseKey === "string")
                    $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                else if (object.baseKey.length >= 0)
                    message.baseKey = object.baseKey;
            if (object.identityKey != null)
                if (typeof object.identityKey === "string")
                    $util.base64.decode(object.identityKey, message.identityKey = $util.newBuffer($util.base64.length(object.identityKey)), 0);
                else if (object.identityKey.length >= 0)
                    message.identityKey = object.identityKey;
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length >= 0)
                    message.message = object.message;
            return message;
        };

        /**
         * Creates a plain object from a PreKeyWhisperMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {textsecure.PreKeyWhisperMessage} message PreKeyWhisperMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreKeyWhisperMessage.toObject = function PreKeyWhisperMessage$toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.preKeyId = 0;
                if (options.bytes === $String)
                    object.baseKey = "";
                else {
                    object.baseKey = [];
                    if (options.bytes !== $Array)
                        object.baseKey = $util.newBuffer(object.baseKey);
                }
                if (options.bytes === $String)
                    object.identityKey = "";
                else {
                    object.identityKey = [];
                    if (options.bytes !== $Array)
                        object.identityKey = $util.newBuffer(object.identityKey);
                }
                if (options.bytes === $String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== $Array)
                        object.message = $util.newBuffer(object.message);
                }
                object.registrationId = 0;
                object.signedPreKeyId = 0;
            }
            if (message.preKeyId != null && $Object.hasOwnProperty.call(message, "preKeyId"))
                object.preKeyId = message.preKeyId;
            if (message.baseKey != null && $Object.hasOwnProperty.call(message, "baseKey"))
                object.baseKey = options.bytes === $String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.baseKey) : message.baseKey;
            if (message.identityKey != null && $Object.hasOwnProperty.call(message, "identityKey"))
                object.identityKey = options.bytes === $String ? $util.base64.encode(message.identityKey, 0, message.identityKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.identityKey) : message.identityKey;
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                object.message = options.bytes === $String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.message) : message.message;
            if (message.registrationId != null && $Object.hasOwnProperty.call(message, "registrationId"))
                object.registrationId = message.registrationId;
            if (message.signedPreKeyId != null && $Object.hasOwnProperty.call(message, "signedPreKeyId"))
                object.signedPreKeyId = message.signedPreKeyId;
            return object;
        };

        /**
         * Converts this PreKeyWhisperMessage to JSON.
         * @function toJSON
         * @memberof textsecure.PreKeyWhisperMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreKeyWhisperMessage.prototype.toJSON = function() {
            return PreKeyWhisperMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PreKeyWhisperMessage
         * @function getTypeUrl
         * @memberof textsecure.PreKeyWhisperMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PreKeyWhisperMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/textsecure.PreKeyWhisperMessage";
        };

        return PreKeyWhisperMessage;
    })();

    textsecure.KeyExchangeMessage = (function() {

        /**
         * Properties of a KeyExchangeMessage.
         * @typedef {Object} textsecure.KeyExchangeMessage.$Properties
         * @property {number|null} [id] KeyExchangeMessage id
         * @property {Uint8Array|null} [baseKey] KeyExchangeMessage baseKey
         * @property {Uint8Array|null} [ephemeralKey] KeyExchangeMessage ephemeralKey
         * @property {Uint8Array|null} [identityKey] KeyExchangeMessage identityKey
         * @property {Uint8Array|null} [baseKeySignature] KeyExchangeMessage baseKeySignature
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a KeyExchangeMessage.
         * @memberof textsecure
         * @interface IKeyExchangeMessage
         * @augments textsecure.KeyExchangeMessage.$Properties
         * @deprecated Use textsecure.KeyExchangeMessage.$Properties instead.
         */

        /**
         * Shape of a KeyExchangeMessage.
         * @typedef {textsecure.KeyExchangeMessage.$Properties} textsecure.KeyExchangeMessage.$Shape
         */

        /**
         * Constructs a new KeyExchangeMessage.
         * @memberof textsecure
         * @classdesc Represents a KeyExchangeMessage.
         * @constructor
         * @param {textsecure.KeyExchangeMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const KeyExchangeMessage = function KeyExchangeMessage(properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * KeyExchangeMessage id.
         * @member {number} id
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.id = 0;

        /**
         * KeyExchangeMessage baseKey.
         * @member {Uint8Array} baseKey
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.baseKey = $util.newBuffer([]);

        /**
         * KeyExchangeMessage ephemeralKey.
         * @member {Uint8Array} ephemeralKey
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.ephemeralKey = $util.newBuffer([]);

        /**
         * KeyExchangeMessage identityKey.
         * @member {Uint8Array} identityKey
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.identityKey = $util.newBuffer([]);

        /**
         * KeyExchangeMessage baseKeySignature.
         * @member {Uint8Array} baseKeySignature
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.baseKeySignature = $util.newBuffer([]);

        /**
         * Creates a new KeyExchangeMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.KeyExchangeMessage.$Properties=} [properties] Properties to set
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage instance
         * @type {{
         *   (properties: textsecure.KeyExchangeMessage.$Shape): textsecure.KeyExchangeMessage & textsecure.KeyExchangeMessage.$Shape;
         *   (properties?: textsecure.KeyExchangeMessage.$Properties): textsecure.KeyExchangeMessage;
         * }}
         */
        KeyExchangeMessage.create = function(properties) {
            return new KeyExchangeMessage(properties);
        };

        /**
         * Encodes the specified KeyExchangeMessage message. Does not implicitly {@link textsecure.KeyExchangeMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.KeyExchangeMessage.$Properties} message KeyExchangeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyExchangeMessage.encode = function KeyExchangeMessage$encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.baseKey != null && $Object.hasOwnProperty.call(message, "baseKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
            if (message.ephemeralKey != null && $Object.hasOwnProperty.call(message, "ephemeralKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ephemeralKey);
            if (message.identityKey != null && $Object.hasOwnProperty.call(message, "identityKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.identityKey);
            if (message.baseKeySignature != null && $Object.hasOwnProperty.call(message, "baseKeySignature"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.baseKeySignature);
            return writer;
        };

        /**
         * Encodes the specified KeyExchangeMessage message, length delimited. Does not implicitly {@link textsecure.KeyExchangeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.KeyExchangeMessage.$Properties} message KeyExchangeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyExchangeMessage.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.KeyExchangeMessage & textsecure.KeyExchangeMessage.$Shape} KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyExchangeMessage.decode = function KeyExchangeMessage$decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === $undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = new this.ctor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.baseKey = reader.bytes();
                        break;
                    }
                case 3: {
                        message.ephemeralKey = reader.bytes();
                        break;
                    }
                case 4: {
                        message.identityKey = reader.bytes();
                        break;
                    }
                case 5: {
                        message.baseKeySignature = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            return message;
        };

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.KeyExchangeMessage & textsecure.KeyExchangeMessage.$Shape} KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyExchangeMessage.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyExchangeMessage message.
         * @function verify
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyExchangeMessage.verify = function KeyExchangeMessage$verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.baseKey != null && $Object.hasOwnProperty.call(message, "baseKey"))
                if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                    return "baseKey: buffer expected";
            if (message.ephemeralKey != null && $Object.hasOwnProperty.call(message, "ephemeralKey"))
                if (!(message.ephemeralKey && typeof message.ephemeralKey.length === "number" || $util.isString(message.ephemeralKey)))
                    return "ephemeralKey: buffer expected";
            if (message.identityKey != null && $Object.hasOwnProperty.call(message, "identityKey"))
                if (!(message.identityKey && typeof message.identityKey.length === "number" || $util.isString(message.identityKey)))
                    return "identityKey: buffer expected";
            if (message.baseKeySignature != null && $Object.hasOwnProperty.call(message, "baseKeySignature"))
                if (!(message.baseKeySignature && typeof message.baseKeySignature.length === "number" || $util.isString(message.baseKeySignature)))
                    return "baseKeySignature: buffer expected";
            return null;
        };

        /**
         * Creates a KeyExchangeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage
         */
        KeyExchangeMessage.fromObject = function KeyExchangeMessage$fromObject(object, long) {
            if (object instanceof this.ctor)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".textsecure.KeyExchangeMessage: object expected");
            if (long === $undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw $Error("maximum nesting depth exceeded");
            let message = new this.ctor();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.baseKey != null)
                if (typeof object.baseKey === "string")
                    $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                else if (object.baseKey.length >= 0)
                    message.baseKey = object.baseKey;
            if (object.ephemeralKey != null)
                if (typeof object.ephemeralKey === "string")
                    $util.base64.decode(object.ephemeralKey, message.ephemeralKey = $util.newBuffer($util.base64.length(object.ephemeralKey)), 0);
                else if (object.ephemeralKey.length >= 0)
                    message.ephemeralKey = object.ephemeralKey;
            if (object.identityKey != null)
                if (typeof object.identityKey === "string")
                    $util.base64.decode(object.identityKey, message.identityKey = $util.newBuffer($util.base64.length(object.identityKey)), 0);
                else if (object.identityKey.length >= 0)
                    message.identityKey = object.identityKey;
            if (object.baseKeySignature != null)
                if (typeof object.baseKeySignature === "string")
                    $util.base64.decode(object.baseKeySignature, message.baseKeySignature = $util.newBuffer($util.base64.length(object.baseKeySignature)), 0);
                else if (object.baseKeySignature.length >= 0)
                    message.baseKeySignature = object.baseKeySignature;
            return message;
        };

        /**
         * Creates a plain object from a KeyExchangeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.KeyExchangeMessage} message KeyExchangeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyExchangeMessage.toObject = function KeyExchangeMessage$toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.id = 0;
                if (options.bytes === $String)
                    object.baseKey = "";
                else {
                    object.baseKey = [];
                    if (options.bytes !== $Array)
                        object.baseKey = $util.newBuffer(object.baseKey);
                }
                if (options.bytes === $String)
                    object.ephemeralKey = "";
                else {
                    object.ephemeralKey = [];
                    if (options.bytes !== $Array)
                        object.ephemeralKey = $util.newBuffer(object.ephemeralKey);
                }
                if (options.bytes === $String)
                    object.identityKey = "";
                else {
                    object.identityKey = [];
                    if (options.bytes !== $Array)
                        object.identityKey = $util.newBuffer(object.identityKey);
                }
                if (options.bytes === $String)
                    object.baseKeySignature = "";
                else {
                    object.baseKeySignature = [];
                    if (options.bytes !== $Array)
                        object.baseKeySignature = $util.newBuffer(object.baseKeySignature);
                }
            }
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.baseKey != null && $Object.hasOwnProperty.call(message, "baseKey"))
                object.baseKey = options.bytes === $String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.baseKey) : message.baseKey;
            if (message.ephemeralKey != null && $Object.hasOwnProperty.call(message, "ephemeralKey"))
                object.ephemeralKey = options.bytes === $String ? $util.base64.encode(message.ephemeralKey, 0, message.ephemeralKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.ephemeralKey) : message.ephemeralKey;
            if (message.identityKey != null && $Object.hasOwnProperty.call(message, "identityKey"))
                object.identityKey = options.bytes === $String ? $util.base64.encode(message.identityKey, 0, message.identityKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.identityKey) : message.identityKey;
            if (message.baseKeySignature != null && $Object.hasOwnProperty.call(message, "baseKeySignature"))
                object.baseKeySignature = options.bytes === $String ? $util.base64.encode(message.baseKeySignature, 0, message.baseKeySignature.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.baseKeySignature) : message.baseKeySignature;
            return object;
        };

        /**
         * Converts this KeyExchangeMessage to JSON.
         * @function toJSON
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyExchangeMessage.prototype.toJSON = function() {
            return KeyExchangeMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for KeyExchangeMessage
         * @function getTypeUrl
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        KeyExchangeMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/textsecure.KeyExchangeMessage";
        };

        return KeyExchangeMessage;
    })();

    return textsecure;
})();

export {
  $root as default
};
