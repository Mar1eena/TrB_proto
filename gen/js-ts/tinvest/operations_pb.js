// source: tinvest/operations.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var tinvest_common_pb = require('../tinvest/common_pb.js');
goog.object.extend(proto, tinvest_common_pb);
var google_api_field_behavior_pb = require('../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.BrokerReport', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.PayloadCase', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.PayloadCase', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.PayloadCase', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.PayloadCase', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.Operation', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationData', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationItem', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationState', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationTrade', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationType', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationsAccountSubscriptionStatus', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationsRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationsResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.PayloadCase', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.CurrencyRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.PayloadCase', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionStatus', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionData', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionsAccountSubscriptionStatus', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionsFutures', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionsMoney', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionsOptions', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionsRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionsResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.PayloadCase', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OperationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OperationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.Operation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.Operation.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.Operation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.Operation.displayName = 'proto.tinkoff.public.invest.api.contract.v1.Operation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OperationTrade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OperationTrade.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OperationTrade';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PositionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PositionsRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PositionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PositionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PositionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.displayName = 'proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PositionsFutures, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PositionsFutures';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PositionsOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PositionsOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.oneofGroups_);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.oneofGroups_);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.BrokerReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.BrokerReport.displayName = 'proto.tinkoff.public.invest.api.contract.v1.BrokerReport';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.oneofGroups_);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.oneofGroups_);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.displayName = 'proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.oneofGroups_);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.displayName = 'proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.OperationItem.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OperationItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OperationItem.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OperationItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.oneofGroups_);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.PositionData.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PositionData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PositionData.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PositionData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PositionsMoney, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PositionsMoney';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.displayName = 'proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.oneofGroups_);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OperationData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OperationData.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OperationData';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
state: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
figi: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OperationsRequest;
  return proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFigi(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationState} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp from = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp to = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OperationState state = 4;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationState}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.getState = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationState} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationState} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.setState = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.clearState = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.hasState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string figi = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.setFigi = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.clearFigi = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsRequest.prototype.hasFigi = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.tinkoff.public.invest.api.contract.v1.Operation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OperationsResponse;
  return proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.Operation;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.Operation.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.Operation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Operation operations = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.Operation>}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.Operation, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.Operation>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsResponse.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.repeatedFields_ = [14,19];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.Operation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Operation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
parentOperationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
currency: jspb.Message.getFieldWithDefault(msg, 3, ""),
payment: (f = msg.getPayment()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
price: (f = msg.getPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
state: jspb.Message.getFieldWithDefault(msg, 6, 0),
quantity: jspb.Message.getFieldWithDefault(msg, 7, 0),
quantityRest: jspb.Message.getFieldWithDefault(msg, 8, 0),
figi: jspb.Message.getFieldWithDefault(msg, 9, ""),
instrumentType: jspb.Message.getFieldWithDefault(msg, 10, ""),
date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
type: jspb.Message.getFieldWithDefault(msg, 12, ""),
operationType: jspb.Message.getFieldWithDefault(msg, 13, 0),
tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.tinkoff.public.invest.api.contract.v1.OperationTrade.toObject, includeInstance),
assetUid: jspb.Message.getFieldWithDefault(msg, 16, ""),
positionUid: jspb.Message.getFieldWithDefault(msg, 17, ""),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 18, ""),
childOperationsList: jspb.Message.toObjectList(msg.getChildOperationsList(),
    proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.Operation;
  return proto.tinkoff.public.invest.api.contract.v1.Operation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Operation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentOperationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 4:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setPayment(value);
      break;
    case 5:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantityRest(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFigi(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentType(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 13:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationType} */ (reader.readEnum());
      msg.setOperationType(value);
      break;
    case 14:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OperationTrade;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OperationTrade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetUid(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositionUid(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 19:
      var value = new proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.deserializeBinaryFromReader);
      msg.addChildOperations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.Operation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Operation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParentOperationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPayment();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getQuantityRest();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getInstrumentType();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getOperationType();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OperationTrade.serializeBinaryToWriter
    );
  }
  f = message.getAssetUid();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getPositionUid();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getChildOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent_operation_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getParentOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setParentOperationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string currency = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional MoneyValue payment = 4;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getPayment = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 4));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setPayment = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.clearPayment = function() {
  return this.setPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.hasPayment = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MoneyValue price = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional OperationState state = 6;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationState}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getState = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationState} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationState} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional int64 quantity = 7;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 quantity_rest = 8;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getQuantityRest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setQuantityRest = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string figi = 9;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string instrument_type = 10;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getInstrumentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setInstrumentType = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp date = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.hasDate = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string type = 12;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional OperationType operation_type = 13;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationType}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getOperationType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationType} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setOperationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * repeated OperationTrade trades = 14;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationTrade>}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationTrade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OperationTrade, 14));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationTrade>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.tinkoff.public.invest.api.contract.v1.OperationTrade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};


/**
 * optional string asset_uid = 16;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getAssetUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setAssetUid = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string position_uid = 17;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getPositionUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setPositionUid = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string instrument_uid = 18;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * repeated ChildOperationItem child_operations = 19;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem>}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.getChildOperationsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem, 19));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.setChildOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem}
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.addChildOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Operation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Operation.prototype.clearChildOperationsList = function() {
  return this.setChildOperationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OperationTrade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.toObject = function(includeInstance, msg) {
  var f, obj = {
tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
dateTime: (f = msg.getDateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
quantity: jspb.Message.getFieldWithDefault(msg, 3, 0),
price: (f = msg.getPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OperationTrade;
  return proto.tinkoff.public.invest.api.contract.v1.OperationTrade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 4:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OperationTrade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDateTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp date_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.getDateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.setDateTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.clearDateTime = function() {
  return this.setDateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.hasDateTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 quantity = 3;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional MoneyValue price = 4;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 4));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationTrade.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
currency: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest;
  return proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 2:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.CurrencyRequest} */ (reader.readEnum());
      msg.setCurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.CurrencyRequest} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.CurrencyRequest = {
  RUB: 0,
  USD: 1,
  EUR: 2
};

/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CurrencyRequest currency = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.CurrencyRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.prototype.getCurrency = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.CurrencyRequest} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.CurrencyRequest} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.prototype.clearCurrency = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioRequest.prototype.hasCurrency = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.repeatedFields_ = [7,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
totalAmountShares: (f = msg.getTotalAmountShares()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
totalAmountBonds: (f = msg.getTotalAmountBonds()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
totalAmountEtf: (f = msg.getTotalAmountEtf()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
totalAmountCurrencies: (f = msg.getTotalAmountCurrencies()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
totalAmountFutures: (f = msg.getTotalAmountFutures()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
expectedYield: (f = msg.getExpectedYield()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
positionsList: jspb.Message.toObjectList(msg.getPositionsList(),
    proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.toObject, includeInstance),
accountId: jspb.Message.getFieldWithDefault(msg, 8, ""),
totalAmountOptions: (f = msg.getTotalAmountOptions()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
totalAmountSp: (f = msg.getTotalAmountSp()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
totalAmountPortfolio: (f = msg.getTotalAmountPortfolio()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
virtualPositionsList: jspb.Message.toObjectList(msg.getVirtualPositionsList(),
    proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.toObject, includeInstance),
dailyYield: (f = msg.getDailyYield()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
dailyYieldRelative: (f = msg.getDailyYieldRelative()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
totalAmountDfa: (f = msg.getTotalAmountDfa()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse;
  return proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalAmountShares(value);
      break;
    case 2:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalAmountBonds(value);
      break;
    case 3:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalAmountEtf(value);
      break;
    case 4:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalAmountCurrencies(value);
      break;
    case 5:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalAmountFutures(value);
      break;
    case 6:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setExpectedYield(value);
      break;
    case 7:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.deserializeBinaryFromReader);
      msg.addPositions(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 9:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalAmountOptions(value);
      break;
    case 10:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalAmountSp(value);
      break;
    case 11:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalAmountPortfolio(value);
      break;
    case 12:
      var value = new proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.deserializeBinaryFromReader);
      msg.addVirtualPositions(value);
      break;
    case 15:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setDailyYield(value);
      break;
    case 16:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setDailyYieldRelative(value);
      break;
    case 17:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalAmountDfa(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalAmountShares();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getTotalAmountBonds();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getTotalAmountEtf();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getTotalAmountCurrencies();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getTotalAmountFutures();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExpectedYield();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.serializeBinaryToWriter
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTotalAmountOptions();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getTotalAmountSp();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getTotalAmountPortfolio();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getVirtualPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.serializeBinaryToWriter
    );
  }
  f = message.getDailyYield();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getDailyYieldRelative();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getTotalAmountDfa();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional MoneyValue total_amount_shares = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getTotalAmountShares = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setTotalAmountShares = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearTotalAmountShares = function() {
  return this.setTotalAmountShares(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.hasTotalAmountShares = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MoneyValue total_amount_bonds = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getTotalAmountBonds = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setTotalAmountBonds = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearTotalAmountBonds = function() {
  return this.setTotalAmountBonds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.hasTotalAmountBonds = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MoneyValue total_amount_etf = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getTotalAmountEtf = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setTotalAmountEtf = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearTotalAmountEtf = function() {
  return this.setTotalAmountEtf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.hasTotalAmountEtf = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MoneyValue total_amount_currencies = 4;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getTotalAmountCurrencies = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 4));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setTotalAmountCurrencies = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearTotalAmountCurrencies = function() {
  return this.setTotalAmountCurrencies(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.hasTotalAmountCurrencies = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MoneyValue total_amount_futures = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getTotalAmountFutures = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setTotalAmountFutures = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearTotalAmountFutures = function() {
  return this.setTotalAmountFutures(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.hasTotalAmountFutures = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Quotation expected_yield = 6;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getExpectedYield = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 6));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setExpectedYield = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearExpectedYield = function() {
  return this.setExpectedYield(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.hasExpectedYield = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated PortfolioPosition positions = 7;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition>}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getPositionsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition, 7));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setPositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.addPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearPositionsList = function() {
  return this.setPositionsList([]);
};


/**
 * optional string account_id = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional MoneyValue total_amount_options = 9;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getTotalAmountOptions = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 9));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setTotalAmountOptions = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearTotalAmountOptions = function() {
  return this.setTotalAmountOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.hasTotalAmountOptions = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional MoneyValue total_amount_sp = 10;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getTotalAmountSp = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 10));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setTotalAmountSp = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearTotalAmountSp = function() {
  return this.setTotalAmountSp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.hasTotalAmountSp = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MoneyValue total_amount_portfolio = 11;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getTotalAmountPortfolio = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 11));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setTotalAmountPortfolio = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearTotalAmountPortfolio = function() {
  return this.setTotalAmountPortfolio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.hasTotalAmountPortfolio = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated VirtualPortfolioPosition virtual_positions = 12;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition>}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getVirtualPositionsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition, 12));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setVirtualPositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.addVirtualPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearVirtualPositionsList = function() {
  return this.setVirtualPositionsList([]);
};


/**
 * optional MoneyValue daily_yield = 15;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getDailyYield = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 15));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setDailyYield = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearDailyYield = function() {
  return this.setDailyYield(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.hasDailyYield = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Quotation daily_yield_relative = 16;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getDailyYieldRelative = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 16));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setDailyYieldRelative = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearDailyYieldRelative = function() {
  return this.setDailyYieldRelative(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.hasDailyYieldRelative = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional MoneyValue total_amount_dfa = 17;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.getTotalAmountDfa = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 17));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.setTotalAmountDfa = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.clearTotalAmountDfa = function() {
  return this.setTotalAmountDfa(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.prototype.hasTotalAmountDfa = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PositionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PositionsRequest;
  return proto.tinkoff.public.invest.api.contract.v1.PositionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PositionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.repeatedFields_ = [1,2,3,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
moneyList: jspb.Message.toObjectList(msg.getMoneyList(),
    tinvest_common_pb.MoneyValue.toObject, includeInstance),
blockedList: jspb.Message.toObjectList(msg.getBlockedList(),
    tinvest_common_pb.MoneyValue.toObject, includeInstance),
securitiesList: jspb.Message.toObjectList(msg.getSecuritiesList(),
    proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.toObject, includeInstance),
limitsLoadingInProgress: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
futuresList: jspb.Message.toObjectList(msg.getFuturesList(),
    proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.toObject, includeInstance),
optionsList: jspb.Message.toObjectList(msg.getOptionsList(),
    proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.toObject, includeInstance),
accountId: jspb.Message.getFieldWithDefault(msg, 15, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PositionsResponse;
  return proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.addMoney(value);
      break;
    case 2:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.addBlocked(value);
      break;
    case 3:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.deserializeBinaryFromReader);
      msg.addSecurities(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLimitsLoadingInProgress(value);
      break;
    case 5:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PositionsFutures;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.deserializeBinaryFromReader);
      msg.addFutures(value);
      break;
    case 6:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PositionsOptions;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.deserializeBinaryFromReader);
      msg.addOptions(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMoneyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getBlockedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getSecuritiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.serializeBinaryToWriter
    );
  }
  f = message.getLimitsLoadingInProgress();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getFuturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.serializeBinaryToWriter
    );
  }
  f = message.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.serializeBinaryToWriter
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * repeated MoneyValue money = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.getMoneyList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, tinvest_common_pb.MoneyValue, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.setMoneyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MoneyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.addMoney = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.MoneyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.clearMoneyList = function() {
  return this.setMoneyList([]);
};


/**
 * repeated MoneyValue blocked = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.getBlockedList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, tinvest_common_pb.MoneyValue, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.setBlockedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MoneyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.addBlocked = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.MoneyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.clearBlockedList = function() {
  return this.setBlockedList([]);
};


/**
 * repeated PositionsSecurities securities = 3;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities>}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.getSecuritiesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities, 3));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.setSecuritiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.addSecurities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.clearSecuritiesList = function() {
  return this.setSecuritiesList([]);
};


/**
 * optional bool limits_loading_in_progress = 4;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.getLimitsLoadingInProgress = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.setLimitsLoadingInProgress = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated PositionsFutures futures = 5;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures>}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.getFuturesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PositionsFutures, 5));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.setFuturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.addFutures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.tinkoff.public.invest.api.contract.v1.PositionsFutures, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.clearFuturesList = function() {
  return this.setFuturesList([]);
};


/**
 * repeated PositionsOptions options = 6;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions>}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.getOptionsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PositionsOptions, 6));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.setOptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.addOptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.tinkoff.public.invest.api.contract.v1.PositionsOptions, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.clearOptionsList = function() {
  return this.setOptionsList([]);
};


/**
 * optional string account_id = 15;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest;
  return proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
moneyList: jspb.Message.toObjectList(msg.getMoneyList(),
    tinvest_common_pb.MoneyValue.toObject, includeInstance),
blockedList: jspb.Message.toObjectList(msg.getBlockedList(),
    tinvest_common_pb.MoneyValue.toObject, includeInstance),
blockedGuaranteeList: jspb.Message.toObjectList(msg.getBlockedGuaranteeList(),
    tinvest_common_pb.MoneyValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse;
  return proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.addMoney(value);
      break;
    case 2:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.addBlocked(value);
      break;
    case 3:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.addBlockedGuarantee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMoneyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getBlockedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getBlockedGuaranteeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MoneyValue money = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.getMoneyList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, tinvest_common_pb.MoneyValue, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.setMoneyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MoneyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.addMoney = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.MoneyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.clearMoneyList = function() {
  return this.setMoneyList([]);
};


/**
 * repeated MoneyValue blocked = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.getBlockedList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, tinvest_common_pb.MoneyValue, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.setBlockedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MoneyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.addBlocked = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.MoneyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.clearBlockedList = function() {
  return this.setBlockedList([]);
};


/**
 * repeated MoneyValue blocked_guarantee = 3;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.getBlockedGuaranteeList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, tinvest_common_pb.MoneyValue, 3));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.MoneyValue>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.setBlockedGuaranteeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MoneyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.addBlockedGuarantee = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tinkoff.public.invest.api.contract.v1.MoneyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse.prototype.clearBlockedGuaranteeList = function() {
  return this.setBlockedGuaranteeList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
instrumentType: jspb.Message.getFieldWithDefault(msg, 2, ""),
quantity: (f = msg.getQuantity()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
averagePositionPrice: (f = msg.getAveragePositionPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
expectedYield: (f = msg.getExpectedYield()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
currentNkd: (f = msg.getCurrentNkd()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
averagePositionPricePt: (f = msg.getAveragePositionPricePt()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
currentPrice: (f = msg.getCurrentPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
averagePositionPriceFifo: (f = msg.getAveragePositionPriceFifo()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
quantityLots: (f = msg.getQuantityLots()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
blocked: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
blockedLots: (f = msg.getBlockedLots()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
positionUid: jspb.Message.getFieldWithDefault(msg, 24, ""),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 25, ""),
varMargin: (f = msg.getVarMargin()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
expectedYieldFifo: (f = msg.getExpectedYieldFifo()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
dailyYield: (f = msg.getDailyYield()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
ticker: jspb.Message.getFieldWithDefault(msg, 32, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 33, ""),
varMarginSettled: (f = msg.getVarMarginSettled()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition;
  return proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFigi(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentType(value);
      break;
    case 3:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 4:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setAveragePositionPrice(value);
      break;
    case 5:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setExpectedYield(value);
      break;
    case 6:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setCurrentNkd(value);
      break;
    case 7:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setAveragePositionPricePt(value);
      break;
    case 8:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setCurrentPrice(value);
      break;
    case 9:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setAveragePositionPriceFifo(value);
      break;
    case 10:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setQuantityLots(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlocked(value);
      break;
    case 22:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setBlockedLots(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositionUid(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 26:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setVarMargin(value);
      break;
    case 27:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setExpectedYieldFifo(value);
      break;
    case 31:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setDailyYield(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    case 34:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setVarMarginSettled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstrumentType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getAveragePositionPrice();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExpectedYield();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getCurrentNkd();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getAveragePositionPricePt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getCurrentPrice();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getAveragePositionPriceFifo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getQuantityLots();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getBlocked();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getBlockedLots();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getPositionUid();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getVarMargin();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExpectedYieldFifo();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getDailyYield();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
  f = message.getVarMarginSettled();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string instrument_type = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getInstrumentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setInstrumentType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Quotation quantity = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getQuantity = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setQuantity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MoneyValue average_position_price = 4;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getAveragePositionPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 4));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setAveragePositionPrice = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearAveragePositionPrice = function() {
  return this.setAveragePositionPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasAveragePositionPrice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Quotation expected_yield = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getExpectedYield = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setExpectedYield = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearExpectedYield = function() {
  return this.setExpectedYield(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasExpectedYield = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MoneyValue current_nkd = 6;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getCurrentNkd = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 6));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setCurrentNkd = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearCurrentNkd = function() {
  return this.setCurrentNkd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasCurrentNkd = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Quotation average_position_price_pt = 7;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getAveragePositionPricePt = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 7));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setAveragePositionPricePt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearAveragePositionPricePt = function() {
  return this.setAveragePositionPricePt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasAveragePositionPricePt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional MoneyValue current_price = 8;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getCurrentPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 8));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setCurrentPrice = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearCurrentPrice = function() {
  return this.setCurrentPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasCurrentPrice = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MoneyValue average_position_price_fifo = 9;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getAveragePositionPriceFifo = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 9));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setAveragePositionPriceFifo = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearAveragePositionPriceFifo = function() {
  return this.setAveragePositionPriceFifo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasAveragePositionPriceFifo = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Quotation quantity_lots = 10;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getQuantityLots = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 10));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setQuantityLots = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearQuantityLots = function() {
  return this.setQuantityLots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasQuantityLots = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool blocked = 21;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getBlocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setBlocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional Quotation blocked_lots = 22;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getBlockedLots = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 22));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setBlockedLots = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearBlockedLots = function() {
  return this.setBlockedLots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasBlockedLots = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional string position_uid = 24;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getPositionUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setPositionUid = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string instrument_uid = 25;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional MoneyValue var_margin = 26;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getVarMargin = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 26));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setVarMargin = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearVarMargin = function() {
  return this.setVarMargin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasVarMargin = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional Quotation expected_yield_fifo = 27;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getExpectedYieldFifo = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 27));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setExpectedYieldFifo = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearExpectedYieldFifo = function() {
  return this.setExpectedYieldFifo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasExpectedYieldFifo = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional MoneyValue daily_yield = 31;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getDailyYield = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 31));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setDailyYield = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearDailyYield = function() {
  return this.setDailyYield(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasDailyYield = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional string ticker = 32;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string class_code = 33;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};


/**
 * optional MoneyValue var_margin_settled = 34;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.getVarMarginSettled = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 34));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.setVarMarginSettled = function(value) {
  return jspb.Message.setWrapperField(this, 34, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.clearVarMarginSettled = function() {
  return this.setVarMarginSettled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioPosition.prototype.hasVarMarginSettled = function() {
  return jspb.Message.getField(this, 34) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.toObject = function(includeInstance, msg) {
  var f, obj = {
positionUid: jspb.Message.getFieldWithDefault(msg, 1, ""),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 2, ""),
figi: jspb.Message.getFieldWithDefault(msg, 3, ""),
instrumentType: jspb.Message.getFieldWithDefault(msg, 4, ""),
quantity: (f = msg.getQuantity()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
averagePositionPrice: (f = msg.getAveragePositionPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
expectedYield: (f = msg.getExpectedYield()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
expectedYieldFifo: (f = msg.getExpectedYieldFifo()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
expireDate: (f = msg.getExpireDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
currentPrice: (f = msg.getCurrentPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
averagePositionPriceFifo: (f = msg.getAveragePositionPriceFifo()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
dailyYield: (f = msg.getDailyYield()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
ticker: jspb.Message.getFieldWithDefault(msg, 32, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 33, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition;
  return proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositionUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFigi(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentType(value);
      break;
    case 5:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 6:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setAveragePositionPrice(value);
      break;
    case 7:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setExpectedYield(value);
      break;
    case 8:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setExpectedYieldFifo(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpireDate(value);
      break;
    case 10:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setCurrentPrice(value);
      break;
    case 11:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setAveragePositionPriceFifo(value);
      break;
    case 31:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setDailyYield(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInstrumentType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getAveragePositionPrice();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExpectedYield();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getExpectedYieldFifo();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getExpireDate();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCurrentPrice();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getAveragePositionPriceFifo();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getDailyYield();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
};


/**
 * optional string position_uid = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getPositionUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setPositionUid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string instrument_uid = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string figi = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string instrument_type = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getInstrumentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setInstrumentType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Quotation quantity = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getQuantity = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setQuantity = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MoneyValue average_position_price = 6;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getAveragePositionPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 6));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setAveragePositionPrice = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.clearAveragePositionPrice = function() {
  return this.setAveragePositionPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.hasAveragePositionPrice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Quotation expected_yield = 7;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getExpectedYield = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 7));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setExpectedYield = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.clearExpectedYield = function() {
  return this.setExpectedYield(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.hasExpectedYield = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Quotation expected_yield_fifo = 8;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getExpectedYieldFifo = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 8));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setExpectedYieldFifo = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.clearExpectedYieldFifo = function() {
  return this.setExpectedYieldFifo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.hasExpectedYieldFifo = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp expire_date = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getExpireDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setExpireDate = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.clearExpireDate = function() {
  return this.setExpireDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.hasExpireDate = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional MoneyValue current_price = 10;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getCurrentPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 10));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setCurrentPrice = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.clearCurrentPrice = function() {
  return this.setCurrentPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.hasCurrentPrice = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MoneyValue average_position_price_fifo = 11;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getAveragePositionPriceFifo = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 11));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setAveragePositionPriceFifo = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.clearAveragePositionPriceFifo = function() {
  return this.setAveragePositionPriceFifo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.hasAveragePositionPriceFifo = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional MoneyValue daily_yield = 31;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getDailyYield = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 31));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setDailyYield = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.clearDailyYield = function() {
  return this.setDailyYield(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.hasDailyYield = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional string ticker = 32;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string class_code = 33;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.VirtualPortfolioPosition.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
blocked: jspb.Message.getFieldWithDefault(msg, 2, 0),
balance: jspb.Message.getFieldWithDefault(msg, 3, 0),
positionUid: jspb.Message.getFieldWithDefault(msg, 4, ""),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 5, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 6, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 7, ""),
exchangeBlocked: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
instrumentType: jspb.Message.getFieldWithDefault(msg, 16, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities;
  return proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFigi(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlocked(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositionUid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExchangeBlocked(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlocked();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPositionUid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getExchangeBlocked();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getInstrumentType();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 blocked = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.getBlocked = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.setBlocked = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 balance = 3;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string position_uid = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.getPositionUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.setPositionUid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string instrument_uid = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string ticker = 6;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string class_code = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool exchange_blocked = 11;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.getExchangeBlocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.setExchangeBlocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional string instrument_type = 16;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.getInstrumentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.prototype.setInstrumentType = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
blocked: jspb.Message.getFieldWithDefault(msg, 2, 0),
balance: jspb.Message.getFieldWithDefault(msg, 3, 0),
positionUid: jspb.Message.getFieldWithDefault(msg, 4, ""),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 5, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 6, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PositionsFutures;
  return proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFigi(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlocked(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositionUid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlocked();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPositionUid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 blocked = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.getBlocked = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.setBlocked = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 balance = 3;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string position_uid = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.getPositionUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.setPositionUid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string instrument_uid = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string ticker = 6;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string class_code = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
positionUid: jspb.Message.getFieldWithDefault(msg, 1, ""),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 2, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 3, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
blocked: jspb.Message.getFieldWithDefault(msg, 11, 0),
balance: jspb.Message.getFieldWithDefault(msg, 21, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PositionsOptions;
  return proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositionUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlocked(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBlocked();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
};


/**
 * optional string position_uid = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.getPositionUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.setPositionUid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string instrument_uid = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ticker = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string class_code = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 blocked = 11;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.getBlocked = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.setBlocked = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 balance = 21;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  GENERATE_BROKER_REPORT_REQUEST: 1,
  GET_BROKER_REPORT_REQUEST: 2
};

/**
 * @return {proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.PayloadCase}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.prototype.getPayloadCase = function() {
  return /** @type {proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
generateBrokerReportRequest: (f = msg.getGenerateBrokerReportRequest()) && proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.toObject(includeInstance, f),
getBrokerReportRequest: (f = msg.getGetBrokerReportRequest()) && proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest;
  return proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.deserializeBinaryFromReader);
      msg.setGenerateBrokerReportRequest(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.deserializeBinaryFromReader);
      msg.setGetBrokerReportRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGenerateBrokerReportRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetBrokerReportRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional GenerateBrokerReportRequest generate_broker_report_request = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.prototype.getGenerateBrokerReportRequest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.prototype.setGenerateBrokerReportRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.prototype.clearGenerateBrokerReportRequest = function() {
  return this.setGenerateBrokerReportRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.prototype.hasGenerateBrokerReportRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetBrokerReportRequest get_broker_report_request = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.prototype.getGetBrokerReportRequest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.prototype.setGetBrokerReportRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.prototype.clearGetBrokerReportRequest = function() {
  return this.setGetBrokerReportRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportRequest.prototype.hasGetBrokerReportRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  GENERATE_BROKER_REPORT_RESPONSE: 1,
  GET_BROKER_REPORT_RESPONSE: 2
};

/**
 * @return {proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.PayloadCase}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
generateBrokerReportResponse: (f = msg.getGenerateBrokerReportResponse()) && proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.toObject(includeInstance, f),
getBrokerReportResponse: (f = msg.getGetBrokerReportResponse()) && proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse;
  return proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.deserializeBinaryFromReader);
      msg.setGenerateBrokerReportResponse(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.deserializeBinaryFromReader);
      msg.setGetBrokerReportResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGenerateBrokerReportResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetBrokerReportResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional GenerateBrokerReportResponse generate_broker_report_response = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.prototype.getGenerateBrokerReportResponse = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.prototype.setGenerateBrokerReportResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.prototype.clearGenerateBrokerReportResponse = function() {
  return this.setGenerateBrokerReportResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.prototype.hasGenerateBrokerReportResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetBrokerReportResponse get_broker_report_response = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.prototype.getGetBrokerReportResponse = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.prototype.setGetBrokerReportResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.prototype.clearGetBrokerReportResponse = function() {
  return this.setGetBrokerReportResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReportResponse.prototype.hasGetBrokerReportResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp from = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp to = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
taskId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string task_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateBrokerReportResponse.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
taskId: jspb.Message.getFieldWithDefault(msg, 1, ""),
page: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string task_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.prototype.setPage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.prototype.clearPage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
brokerReportList: jspb.Message.toObjectList(msg.getBrokerReportList(),
    proto.tinkoff.public.invest.api.contract.v1.BrokerReport.toObject, includeInstance),
itemscount: jspb.Message.getFieldWithDefault(msg, 2, 0),
pagescount: jspb.Message.getFieldWithDefault(msg, 3, 0),
page: jspb.Message.getFieldWithDefault(msg, 4, 0),
taskId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.BrokerReport;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.BrokerReport.deserializeBinaryFromReader);
      msg.addBrokerReport(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemscount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagescount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrokerReportList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.BrokerReport.serializeBinaryToWriter
    );
  }
  f = message.getItemscount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPagescount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * repeated BrokerReport broker_report = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.BrokerReport>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.getBrokerReportList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.BrokerReport>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.BrokerReport, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.BrokerReport>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.setBrokerReportList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.addBrokerReport = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.BrokerReport, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.clearBrokerReportList = function() {
  return this.setBrokerReportList([]);
};


/**
 * optional int32 itemsCount = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.getItemscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.setItemscount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 pagesCount = 3;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.getPagescount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.setPagescount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page = 4;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string task_id = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetBrokerReportResponse.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.BrokerReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.toObject = function(includeInstance, msg) {
  var f, obj = {
tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
orderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
figi: jspb.Message.getFieldWithDefault(msg, 3, ""),
executeSign: jspb.Message.getFieldWithDefault(msg, 4, ""),
tradeDatetime: (f = msg.getTradeDatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
exchange: jspb.Message.getFieldWithDefault(msg, 6, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 7, ""),
direction: jspb.Message.getFieldWithDefault(msg, 8, ""),
name: jspb.Message.getFieldWithDefault(msg, 9, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 10, ""),
price: (f = msg.getPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
quantity: jspb.Message.getFieldWithDefault(msg, 12, 0),
orderAmount: (f = msg.getOrderAmount()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
aciValue: (f = msg.getAciValue()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
totalOrderAmount: (f = msg.getTotalOrderAmount()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
brokerCommission: (f = msg.getBrokerCommission()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
exchangeCommission: (f = msg.getExchangeCommission()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
exchangeClearingCommission: (f = msg.getExchangeClearingCommission()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
repoRate: (f = msg.getRepoRate()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
party: jspb.Message.getFieldWithDefault(msg, 20, ""),
clearValueDate: (f = msg.getClearValueDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
secValueDate: (f = msg.getSecValueDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
brokerStatus: jspb.Message.getFieldWithDefault(msg, 23, ""),
separateAgreementType: jspb.Message.getFieldWithDefault(msg, 24, ""),
separateAgreementNumber: jspb.Message.getFieldWithDefault(msg, 25, ""),
separateAgreementDate: jspb.Message.getFieldWithDefault(msg, 26, ""),
deliveryType: jspb.Message.getFieldWithDefault(msg, 27, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.BrokerReport;
  return proto.tinkoff.public.invest.api.contract.v1.BrokerReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFigi(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecuteSign(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTradeDatetime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 11:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 13:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setOrderAmount(value);
      break;
    case 14:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setAciValue(value);
      break;
    case 15:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalOrderAmount(value);
      break;
    case 16:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setBrokerCommission(value);
      break;
    case 17:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setExchangeCommission(value);
      break;
    case 18:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setExchangeClearingCommission(value);
      break;
    case 19:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setRepoRate(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setParty(value);
      break;
    case 21:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setClearValueDate(value);
      break;
    case 22:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSecValueDate(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrokerStatus(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeparateAgreementType(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeparateAgreementNumber(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeparateAgreementDate(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeliveryType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.BrokerReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExecuteSign();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTradeDatetime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExchange();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getOrderAmount();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getAciValue();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getTotalOrderAmount();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getBrokerCommission();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExchangeCommission();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExchangeClearingCommission();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getRepoRate();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getClearValueDate();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSecValueDate();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getBrokerStatus();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getSeparateAgreementType();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getSeparateAgreementNumber();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getSeparateAgreementDate();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getDeliveryType();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string order_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string figi = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string execute_sign = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getExecuteSign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setExecuteSign = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp trade_datetime = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getTradeDatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setTradeDatetime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.clearTradeDatetime = function() {
  return this.setTradeDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.hasTradeDatetime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string exchange = 6;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setExchange = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string class_code = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string direction = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string name = 9;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string ticker = 10;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional MoneyValue price = 11;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 11));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int64 quantity = 12;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional MoneyValue order_amount = 13;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getOrderAmount = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 13));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setOrderAmount = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.clearOrderAmount = function() {
  return this.setOrderAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.hasOrderAmount = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Quotation aci_value = 14;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getAciValue = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 14));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setAciValue = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.clearAciValue = function() {
  return this.setAciValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.hasAciValue = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional MoneyValue total_order_amount = 15;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getTotalOrderAmount = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 15));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setTotalOrderAmount = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.clearTotalOrderAmount = function() {
  return this.setTotalOrderAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.hasTotalOrderAmount = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional MoneyValue broker_commission = 16;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getBrokerCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 16));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setBrokerCommission = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.clearBrokerCommission = function() {
  return this.setBrokerCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.hasBrokerCommission = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional MoneyValue exchange_commission = 17;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getExchangeCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 17));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setExchangeCommission = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.clearExchangeCommission = function() {
  return this.setExchangeCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.hasExchangeCommission = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional MoneyValue exchange_clearing_commission = 18;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getExchangeClearingCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 18));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setExchangeClearingCommission = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.clearExchangeClearingCommission = function() {
  return this.setExchangeClearingCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.hasExchangeClearingCommission = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Quotation repo_rate = 19;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getRepoRate = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 19));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setRepoRate = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.clearRepoRate = function() {
  return this.setRepoRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.hasRepoRate = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string party = 20;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional google.protobuf.Timestamp clear_value_date = 21;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getClearValueDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 21));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setClearValueDate = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.clearClearValueDate = function() {
  return this.setClearValueDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.hasClearValueDate = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional google.protobuf.Timestamp sec_value_date = 22;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getSecValueDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 22));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setSecValueDate = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.clearSecValueDate = function() {
  return this.setSecValueDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.hasSecValueDate = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional string broker_status = 23;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getBrokerStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setBrokerStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string separate_agreement_type = 24;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getSeparateAgreementType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setSeparateAgreementType = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string separate_agreement_number = 25;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getSeparateAgreementNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setSeparateAgreementNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string separate_agreement_date = 26;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getSeparateAgreementDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setSeparateAgreementDate = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string delivery_type = 27;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.getDeliveryType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.BrokerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.BrokerReport.prototype.setDeliveryType = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  GENERATE_DIV_FOREIGN_ISSUER_REPORT: 1,
  GET_DIV_FOREIGN_ISSUER_REPORT: 2
};

/**
 * @return {proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.PayloadCase}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.prototype.getPayloadCase = function() {
  return /** @type {proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
generateDivForeignIssuerReport: (f = msg.getGenerateDivForeignIssuerReport()) && proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.toObject(includeInstance, f),
getDivForeignIssuerReport: (f = msg.getGetDivForeignIssuerReport()) && proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.deserializeBinaryFromReader);
      msg.setGenerateDivForeignIssuerReport(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.deserializeBinaryFromReader);
      msg.setGetDivForeignIssuerReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGenerateDivForeignIssuerReport();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetDivForeignIssuerReport();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional GenerateDividendsForeignIssuerReportRequest generate_div_foreign_issuer_report = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.prototype.getGenerateDivForeignIssuerReport = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.prototype.setGenerateDivForeignIssuerReport = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.prototype.clearGenerateDivForeignIssuerReport = function() {
  return this.setGenerateDivForeignIssuerReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.prototype.hasGenerateDivForeignIssuerReport = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetDividendsForeignIssuerReportRequest get_div_foreign_issuer_report = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.prototype.getGetDivForeignIssuerReport = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.prototype.setGetDivForeignIssuerReport = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.prototype.clearGetDivForeignIssuerReport = function() {
  return this.setGetDivForeignIssuerReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest.prototype.hasGetDivForeignIssuerReport = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  GENERATE_DIV_FOREIGN_ISSUER_REPORT_RESPONSE: 1,
  DIV_FOREIGN_ISSUER_REPORT: 2
};

/**
 * @return {proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.PayloadCase}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
generateDivForeignIssuerReportResponse: (f = msg.getGenerateDivForeignIssuerReportResponse()) && proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.toObject(includeInstance, f),
divForeignIssuerReport: (f = msg.getDivForeignIssuerReport()) && proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.deserializeBinaryFromReader);
      msg.setGenerateDivForeignIssuerReportResponse(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.deserializeBinaryFromReader);
      msg.setDivForeignIssuerReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGenerateDivForeignIssuerReportResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.serializeBinaryToWriter
    );
  }
  f = message.getDivForeignIssuerReport();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional GenerateDividendsForeignIssuerReportResponse generate_div_foreign_issuer_report_response = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.prototype.getGenerateDivForeignIssuerReportResponse = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.prototype.setGenerateDivForeignIssuerReportResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.prototype.clearGenerateDivForeignIssuerReportResponse = function() {
  return this.setGenerateDivForeignIssuerReportResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.prototype.hasGenerateDivForeignIssuerReportResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetDividendsForeignIssuerReportResponse div_foreign_issuer_report = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.prototype.getDivForeignIssuerReport = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.prototype.setDivForeignIssuerReport = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.prototype.clearDivForeignIssuerReport = function() {
  return this.setDivForeignIssuerReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse.prototype.hasDivForeignIssuerReport = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp from = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp to = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
taskId: jspb.Message.getFieldWithDefault(msg, 1, ""),
page: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string task_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.prototype.setPage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.prototype.clearPage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
taskId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string task_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GenerateDividendsForeignIssuerReportResponse.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
dividendsForeignIssuerReportList: jspb.Message.toObjectList(msg.getDividendsForeignIssuerReportList(),
    proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.toObject, includeInstance),
itemscount: jspb.Message.getFieldWithDefault(msg, 2, 0),
pagescount: jspb.Message.getFieldWithDefault(msg, 3, 0),
page: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.deserializeBinaryFromReader);
      msg.addDividendsForeignIssuerReport(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemscount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagescount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDividendsForeignIssuerReportList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.serializeBinaryToWriter
    );
  }
  f = message.getItemscount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPagescount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * repeated DividendsForeignIssuerReport dividends_foreign_issuer_report = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.prototype.getDividendsForeignIssuerReportList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.prototype.setDividendsForeignIssuerReportList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.prototype.addDividendsForeignIssuerReport = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.prototype.clearDividendsForeignIssuerReportList = function() {
  return this.setDividendsForeignIssuerReportList([]);
};


/**
 * optional int32 itemsCount = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.prototype.getItemscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.prototype.setItemscount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 pagesCount = 3;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.prototype.getPagescount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.prototype.setPagescount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page = 4;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerReportResponse.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.toObject = function(includeInstance, msg) {
  var f, obj = {
recordDate: (f = msg.getRecordDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
paymentDate: (f = msg.getPaymentDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
securityName: jspb.Message.getFieldWithDefault(msg, 3, ""),
isin: jspb.Message.getFieldWithDefault(msg, 4, ""),
issuerCountry: jspb.Message.getFieldWithDefault(msg, 5, ""),
quantity: jspb.Message.getFieldWithDefault(msg, 6, 0),
dividend: (f = msg.getDividend()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
externalCommission: (f = msg.getExternalCommission()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
dividendGross: (f = msg.getDividendGross()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
tax: (f = msg.getTax()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
dividendAmount: (f = msg.getDividendAmount()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
currency: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport;
  return proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRecordDate(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPaymentDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecurityName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIsin(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIssuerCountry(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 7:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setDividend(value);
      break;
    case 8:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setExternalCommission(value);
      break;
    case 9:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setDividendGross(value);
      break;
    case 10:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setTax(value);
      break;
    case 11:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setDividendAmount(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPaymentDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSecurityName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsin();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIssuerCountry();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getDividend();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getExternalCommission();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getDividendGross();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getTax();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getDividendAmount();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp record_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.getRecordDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.setRecordDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.clearRecordDate = function() {
  return this.setRecordDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.hasRecordDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp payment_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.getPaymentDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.setPaymentDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.clearPaymentDate = function() {
  return this.setPaymentDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.hasPaymentDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string security_name = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.getSecurityName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.setSecurityName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string isin = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.getIsin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.setIsin = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string issuer_country = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.getIssuerCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.setIssuerCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 quantity = 6;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional Quotation dividend = 7;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.getDividend = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 7));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.setDividend = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.clearDividend = function() {
  return this.setDividend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.hasDividend = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Quotation external_commission = 8;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.getExternalCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 8));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.setExternalCommission = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.clearExternalCommission = function() {
  return this.setExternalCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.hasExternalCommission = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Quotation dividend_gross = 9;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.getDividendGross = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 9));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.setDividendGross = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.clearDividendGross = function() {
  return this.setDividendGross(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.hasDividendGross = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Quotation tax = 10;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.getTax = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 10));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.setTax = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.clearTax = function() {
  return this.setTax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.hasTax = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Quotation dividend_amount = 11;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.getDividendAmount = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 11));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.setDividendAmount = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.clearDividendAmount = function() {
  return this.setDividendAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.hasDividendAmount = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string currency = 12;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.DividendsForeignIssuerReport.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
pingSettings: (f = msg.getPingSettings()) && tinvest_common_pb.PingDelaySettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest;
  return proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccounts(value);
      break;
    case 15:
      var value = new tinvest_common_pb.PingDelaySettings;
      reader.readMessage(value,tinvest_common_pb.PingDelaySettings.deserializeBinaryFromReader);
      msg.setPingSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPingSettings();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      tinvest_common_pb.PingDelaySettings.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string accounts = 1;
 * @return {!Array<string>}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.prototype.getAccountsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.prototype.setAccountsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.prototype.addAccounts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional PingDelaySettings ping_settings = 15;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.prototype.getPingSettings = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.PingDelaySettings, 15));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.prototype.setPingSettings = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.prototype.clearPingSettings = function() {
  return this.setPingSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest.prototype.hasPingSettings = function() {
  return jspb.Message.getField(this, 15) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  SUBSCRIPTIONS: 1,
  PORTFOLIO: 2,
  PING: 3
};

/**
 * @return {proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.PayloadCase}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
subscriptions: (f = msg.getSubscriptions()) && proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.toObject(includeInstance, f),
portfolio: (f = msg.getPortfolio()) && proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.toObject(includeInstance, f),
ping: (f = msg.getPing()) && tinvest_common_pb.Ping.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse;
  return proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.deserializeBinaryFromReader);
      msg.setSubscriptions(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.deserializeBinaryFromReader);
      msg.setPortfolio(value);
      break;
    case 3:
      var value = new tinvest_common_pb.Ping;
      reader.readMessage(value,tinvest_common_pb.Ping.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.serializeBinaryToWriter
    );
  }
  f = message.getPortfolio();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.Ping.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortfolioSubscriptionResult subscriptions = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.getSubscriptions = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.setSubscriptions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.clearSubscriptions = function() {
  return this.setSubscriptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.hasSubscriptions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PortfolioResponse portfolio = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.getPortfolio = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.PortfolioResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.setPortfolio = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.clearPortfolio = function() {
  return this.setPortfolio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.hasPortfolio = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Ping ping = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Ping}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.getPing = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Ping} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Ping, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Ping|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.setPing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.clearPing = function() {
  return this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse.prototype.hasPing = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.toObject, includeInstance),
trackingId: jspb.Message.getFieldWithDefault(msg, 7, ""),
streamId: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult;
  return proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.deserializeBinaryFromReader);
      msg.addAccounts(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackingId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.serializeBinaryToWriter
    );
  }
  f = message.getTrackingId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStreamId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * repeated AccountSubscriptionStatus accounts = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus>}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional string tracking_id = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.prototype.getTrackingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.prototype.setTrackingId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string stream_id = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.prototype.getStreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionResult.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
subscriptionStatus: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus;
  return proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 6:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionStatus} */ (reader.readEnum());
      msg.setSubscriptionStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubscriptionStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PortfolioSubscriptionStatus subscription_status = 6;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.prototype.getSubscriptionStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.AccountSubscriptionStatus.prototype.setSubscriptionStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.repeatedFields_ = [13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
instrumentId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
cursor: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
limit: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
operationTypesList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
state: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
withoutCommissions: (f = jspb.Message.getBooleanField(msg, 15)) == null ? undefined : f,
withoutTrades: (f = jspb.Message.getBooleanField(msg, 16)) == null ? undefined : f,
withoutOvernights: (f = jspb.Message.getBooleanField(msg, 17)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentId(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 13:
      var values = /** @type {!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOperationTypes(values[i]);
      }
      break;
    case 14:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithoutCommissions(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithoutTrades(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithoutOvernights(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getOperationTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      13,
      f
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationState} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string instrument_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.setInstrumentId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.clearInstrumentId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.hasInstrumentId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp from = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp to = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string cursor = 11;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.setCursor = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.clearCursor = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.hasCursor = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 limit = 12;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated OperationType operation_types = 13;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationType>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.getOperationTypesList = function() {
  return /** @type {!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationType>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationType>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.setOperationTypesList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationType} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.addOperationTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.clearOperationTypesList = function() {
  return this.setOperationTypesList([]);
};


/**
 * optional OperationState state = 14;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationState}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.getState = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationState} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationState} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.setState = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.clearState = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.hasState = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool without_commissions = 15;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.getWithoutCommissions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.setWithoutCommissions = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.clearWithoutCommissions = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.hasWithoutCommissions = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool without_trades = 16;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.getWithoutTrades = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.setWithoutTrades = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.clearWithoutTrades = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.hasWithoutTrades = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool without_overnights = 17;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.getWithoutOvernights = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.setWithoutOvernights = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.clearWithoutOvernights = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest.prototype.hasWithoutOvernights = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
hasNext: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
nextCursor: jspb.Message.getFieldWithDefault(msg, 2, ""),
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.tinkoff.public.invest.api.contract.v1.OperationItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextCursor(value);
      break;
    case 6:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OperationItem;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OperationItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHasNext();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getNextCursor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OperationItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool has_next = 1;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.prototype.getHasNext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.prototype.setHasNext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string next_cursor = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.prototype.getNextCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.prototype.setNextCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated OperationItem items = 6;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationItem>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OperationItem, 6));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationItem>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.tinkoff.public.invest.api.contract.v1.OperationItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.repeatedFields_ = [65];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OperationItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.toObject = function(includeInstance, msg) {
  var f, obj = {
cursor: jspb.Message.getFieldWithDefault(msg, 1, ""),
brokerAccountId: jspb.Message.getFieldWithDefault(msg, 6, ""),
id: jspb.Message.getFieldWithDefault(msg, 16, ""),
parentOperationId: jspb.Message.getFieldWithDefault(msg, 17, ""),
name: jspb.Message.getFieldWithDefault(msg, 18, ""),
date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
type: jspb.Message.getFieldWithDefault(msg, 22, 0),
description: jspb.Message.getFieldWithDefault(msg, 23, ""),
state: jspb.Message.getFieldWithDefault(msg, 24, 0),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 31, ""),
figi: jspb.Message.getFieldWithDefault(msg, 32, ""),
instrumentType: jspb.Message.getFieldWithDefault(msg, 33, ""),
instrumentKind: jspb.Message.getFieldWithDefault(msg, 34, 0),
positionUid: jspb.Message.getFieldWithDefault(msg, 35, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 36, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 37, ""),
payment: (f = msg.getPayment()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
price: (f = msg.getPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
commission: (f = msg.getCommission()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
yield: (f = msg.getYield()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
yieldRelative: (f = msg.getYieldRelative()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
accruedInt: (f = msg.getAccruedInt()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
quantity: jspb.Message.getFieldWithDefault(msg, 51, 0),
quantityRest: jspb.Message.getFieldWithDefault(msg, 52, 0),
quantityDone: jspb.Message.getFieldWithDefault(msg, 53, 0),
cancelDateTime: (f = msg.getCancelDateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
cancelReason: jspb.Message.getFieldWithDefault(msg, 57, ""),
tradesInfo: (f = msg.getTradesInfo()) && proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.toObject(includeInstance, f),
assetUid: jspb.Message.getFieldWithDefault(msg, 64, ""),
childOperationsList: jspb.Message.toObjectList(msg.getChildOperationsList(),
    proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OperationItem;
  return proto.tinkoff.public.invest.api.contract.v1.OperationItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrokerAccountId(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentOperationId(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 21:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 22:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 24:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setFigi(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentType(value);
      break;
    case 34:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.InstrumentType} */ (reader.readEnum());
      msg.setInstrumentKind(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositionUid(value);
      break;
    case 36:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 37:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    case 41:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setPayment(value);
      break;
    case 42:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 43:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setCommission(value);
      break;
    case 44:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setYield(value);
      break;
    case 45:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setYieldRelative(value);
      break;
    case 46:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setAccruedInt(value);
      break;
    case 51:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 52:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantityRest(value);
      break;
    case 53:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantityDone(value);
      break;
    case 56:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCancelDateTime(value);
      break;
    case 57:
      var value = /** @type {string} */ (reader.readString());
      msg.setCancelReason(value);
      break;
    case 61:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.deserializeBinaryFromReader);
      msg.setTradesInfo(value);
      break;
    case 64:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetUid(value);
      break;
    case 65:
      var value = new proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.deserializeBinaryFromReader);
      msg.addChildOperations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OperationItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCursor();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBrokerAccountId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getParentOperationId();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      24,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getInstrumentType();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
  f = message.getInstrumentKind();
  if (f !== 0.0) {
    writer.writeEnum(
      34,
      f
    );
  }
  f = message.getPositionUid();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      36,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      37,
      f
    );
  }
  f = message.getPayment();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getCommission();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getYield();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getYieldRelative();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getAccruedInt();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      51,
      f
    );
  }
  f = message.getQuantityRest();
  if (f !== 0) {
    writer.writeInt64(
      52,
      f
    );
  }
  f = message.getQuantityDone();
  if (f !== 0) {
    writer.writeInt64(
      53,
      f
    );
  }
  f = message.getCancelDateTime();
  if (f != null) {
    writer.writeMessage(
      56,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCancelReason();
  if (f.length > 0) {
    writer.writeString(
      57,
      f
    );
  }
  f = message.getTradesInfo();
  if (f != null) {
    writer.writeMessage(
      61,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.serializeBinaryToWriter
    );
  }
  f = message.getAssetUid();
  if (f.length > 0) {
    writer.writeString(
      64,
      f
    );
  }
  f = message.getChildOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      65,
      f,
      proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cursor = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string broker_account_id = 6;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getBrokerAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setBrokerAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string id = 16;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string parent_operation_id = 17;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getParentOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setParentOperationId = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string name = 18;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional google.protobuf.Timestamp date = 21;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 21));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.hasDate = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional OperationType type = 22;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationType}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationType} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 22, value);
};


/**
 * optional string description = 23;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional OperationState state = 24;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationState}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getState = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationState} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationState} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 24, value);
};


/**
 * optional string instrument_uid = 31;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * optional string figi = 32;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string instrument_type = 33;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getInstrumentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setInstrumentType = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};


/**
 * optional InstrumentType instrument_kind = 34;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentType}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getInstrumentKind = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.InstrumentType} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InstrumentType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setInstrumentKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 34, value);
};


/**
 * optional string position_uid = 35;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getPositionUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setPositionUid = function(value) {
  return jspb.Message.setProto3StringField(this, 35, value);
};


/**
 * optional string ticker = 36;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 36, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 36, value);
};


/**
 * optional string class_code = 37;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 37, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 37, value);
};


/**
 * optional MoneyValue payment = 41;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getPayment = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 41));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setPayment = function(value) {
  return jspb.Message.setWrapperField(this, 41, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.clearPayment = function() {
  return this.setPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.hasPayment = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional MoneyValue price = 42;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 42));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 42, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional MoneyValue commission = 43;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 43));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setCommission = function(value) {
  return jspb.Message.setWrapperField(this, 43, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.clearCommission = function() {
  return this.setCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.hasCommission = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional MoneyValue yield = 44;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getYield = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 44));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setYield = function(value) {
  return jspb.Message.setWrapperField(this, 44, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.clearYield = function() {
  return this.setYield(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.hasYield = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional Quotation yield_relative = 45;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getYieldRelative = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 45));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setYieldRelative = function(value) {
  return jspb.Message.setWrapperField(this, 45, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.clearYieldRelative = function() {
  return this.setYieldRelative(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.hasYieldRelative = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional MoneyValue accrued_int = 46;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getAccruedInt = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 46));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setAccruedInt = function(value) {
  return jspb.Message.setWrapperField(this, 46, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.clearAccruedInt = function() {
  return this.setAccruedInt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.hasAccruedInt = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional int64 quantity = 51;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 51, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 51, value);
};


/**
 * optional int64 quantity_rest = 52;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getQuantityRest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 52, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setQuantityRest = function(value) {
  return jspb.Message.setProto3IntField(this, 52, value);
};


/**
 * optional int64 quantity_done = 53;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getQuantityDone = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 53, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setQuantityDone = function(value) {
  return jspb.Message.setProto3IntField(this, 53, value);
};


/**
 * optional google.protobuf.Timestamp cancel_date_time = 56;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getCancelDateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 56));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setCancelDateTime = function(value) {
  return jspb.Message.setWrapperField(this, 56, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.clearCancelDateTime = function() {
  return this.setCancelDateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.hasCancelDateTime = function() {
  return jspb.Message.getField(this, 56) != null;
};


/**
 * optional string cancel_reason = 57;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getCancelReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 57, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setCancelReason = function(value) {
  return jspb.Message.setProto3StringField(this, 57, value);
};


/**
 * optional OperationItemTrades trades_info = 61;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getTradesInfo = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades, 61));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setTradesInfo = function(value) {
  return jspb.Message.setWrapperField(this, 61, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.clearTradesInfo = function() {
  return this.setTradesInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.hasTradesInfo = function() {
  return jspb.Message.getField(this, 61) != null;
};


/**
 * optional string asset_uid = 64;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getAssetUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 64, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setAssetUid = function(value) {
  return jspb.Message.setProto3StringField(this, 64, value);
};


/**
 * repeated ChildOperationItem child_operations = 65;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem>}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.getChildOperationsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem, 65));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.setChildOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 65, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.addChildOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 65, opt_value, proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItem.prototype.clearChildOperationsList = function() {
  return this.setChildOperationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.toObject = function(includeInstance, msg) {
  var f, obj = {
tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades;
  return proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OperationItemTrade trades = 6;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade>}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade, 6));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrades.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.toObject = function(includeInstance, msg) {
  var f, obj = {
num: jspb.Message.getFieldWithDefault(msg, 1, ""),
date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
quantity: jspb.Message.getFieldWithDefault(msg, 11, 0),
price: (f = msg.getPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
yield: (f = msg.getYield()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
yieldRelative: (f = msg.getYieldRelative()) && tinvest_common_pb.Quotation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade;
  return proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNum(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 16:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 21:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setYield(value);
      break;
    case 22:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setYieldRelative(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNum();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getYield();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getYieldRelative();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string num = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.getNum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.setNum = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp date = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.hasDate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 quantity = 11;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional MoneyValue price = 16;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 16));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional MoneyValue yield = 21;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.getYield = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 21));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.setYield = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.clearYield = function() {
  return this.setYield(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.hasYield = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional Quotation yield_relative = 22;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.getYieldRelative = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 22));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.setYieldRelative = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.clearYieldRelative = function() {
  return this.setYieldRelative(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationItemTrade.prototype.hasYieldRelative = function() {
  return jspb.Message.getField(this, 22) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
withInitialPositions: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
pingSettings: (f = msg.getPingSettings()) && tinvest_common_pb.PingDelaySettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest;
  return proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccounts(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithInitialPositions(value);
      break;
    case 15:
      var value = new tinvest_common_pb.PingDelaySettings;
      reader.readMessage(value,tinvest_common_pb.PingDelaySettings.deserializeBinaryFromReader);
      msg.setPingSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getWithInitialPositions();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPingSettings();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      tinvest_common_pb.PingDelaySettings.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string accounts = 1;
 * @return {!Array<string>}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.prototype.getAccountsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.prototype.setAccountsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.prototype.addAccounts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional bool with_initial_positions = 3;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.prototype.getWithInitialPositions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.prototype.setWithInitialPositions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional PingDelaySettings ping_settings = 15;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.prototype.getPingSettings = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.PingDelaySettings, 15));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.prototype.setPingSettings = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.prototype.clearPingSettings = function() {
  return this.setPingSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamRequest.prototype.hasPingSettings = function() {
  return jspb.Message.getField(this, 15) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.oneofGroups_ = [[1,2,3,5]];

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  SUBSCRIPTIONS: 1,
  POSITION: 2,
  PING: 3,
  INITIAL_POSITIONS: 5
};

/**
 * @return {proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.PayloadCase}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
subscriptions: (f = msg.getSubscriptions()) && proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.toObject(includeInstance, f),
position: (f = msg.getPosition()) && proto.tinkoff.public.invest.api.contract.v1.PositionData.toObject(includeInstance, f),
ping: (f = msg.getPing()) && tinvest_common_pb.Ping.toObject(includeInstance, f),
initialPositions: (f = msg.getInitialPositions()) && proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse;
  return proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.deserializeBinaryFromReader);
      msg.setSubscriptions(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PositionData;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PositionData.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 3:
      var value = new tinvest_common_pb.Ping;
      reader.readMessage(value,tinvest_common_pb.Ping.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    case 5:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PositionsResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.deserializeBinaryFromReader);
      msg.setInitialPositions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PositionData.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.Ping.serializeBinaryToWriter
    );
  }
  f = message.getInitialPositions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PositionsResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionsSubscriptionResult subscriptions = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.getSubscriptions = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.setSubscriptions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.clearSubscriptions = function() {
  return this.setSubscriptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.hasSubscriptions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PositionData position = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.PositionData}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.getPosition = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.PositionData} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PositionData, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.PositionData|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.setPosition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Ping ping = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Ping}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.getPing = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Ping} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Ping, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Ping|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.setPing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.clearPing = function() {
  return this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.hasPing = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PositionsResponse initial_positions = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.PositionsResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.getInitialPositions = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.PositionsResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PositionsResponse, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.PositionsResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.setInitialPositions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.clearInitialPositions = function() {
  return this.setInitialPositions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsStreamResponse.prototype.hasInitialPositions = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.toObject, includeInstance),
trackingId: jspb.Message.getFieldWithDefault(msg, 7, ""),
streamId: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult;
  return proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.deserializeBinaryFromReader);
      msg.addAccounts(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackingId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.serializeBinaryToWriter
    );
  }
  f = message.getTrackingId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStreamId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * repeated PositionsSubscriptionStatus accounts = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus>}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional string tracking_id = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.prototype.getTrackingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.prototype.setTrackingId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string stream_id = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.prototype.getStreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionResult.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
subscriptionStatus: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus;
  return proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 6:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.PositionsAccountSubscriptionStatus} */ (reader.readEnum());
      msg.setSubscriptionStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubscriptionStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PositionsAccountSubscriptionStatus subscription_status = 6;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsAccountSubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.prototype.getSubscriptionStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.PositionsAccountSubscriptionStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsAccountSubscriptionStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsSubscriptionStatus.prototype.setSubscriptionStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.repeatedFields_ = [2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PositionData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
moneyList: jspb.Message.toObjectList(msg.getMoneyList(),
    proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.toObject, includeInstance),
securitiesList: jspb.Message.toObjectList(msg.getSecuritiesList(),
    proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.toObject, includeInstance),
futuresList: jspb.Message.toObjectList(msg.getFuturesList(),
    proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.toObject, includeInstance),
optionsList: jspb.Message.toObjectList(msg.getOptionsList(),
    proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.toObject, includeInstance),
date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PositionData;
  return proto.tinkoff.public.invest.api.contract.v1.PositionData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PositionsMoney;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.deserializeBinaryFromReader);
      msg.addMoney(value);
      break;
    case 3:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.deserializeBinaryFromReader);
      msg.addSecurities(value);
      break;
    case 4:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PositionsFutures;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.deserializeBinaryFromReader);
      msg.addFutures(value);
      break;
    case 5:
      var value = new proto.tinkoff.public.invest.api.contract.v1.PositionsOptions;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.deserializeBinaryFromReader);
      msg.addOptions(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PositionData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMoneyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.serializeBinaryToWriter
    );
  }
  f = message.getSecuritiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities.serializeBinaryToWriter
    );
  }
  f = message.getFuturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PositionsFutures.serializeBinaryToWriter
    );
  }
  f = message.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.tinkoff.public.invest.api.contract.v1.PositionsOptions.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated PositionsMoney money = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney>}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.getMoneyList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PositionsMoney, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.setMoneyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.addMoney = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.PositionsMoney, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.clearMoneyList = function() {
  return this.setMoneyList([]);
};


/**
 * repeated PositionsSecurities securities = 3;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities>}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.getSecuritiesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities, 3));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.setSecuritiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.addSecurities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tinkoff.public.invest.api.contract.v1.PositionsSecurities, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.clearSecuritiesList = function() {
  return this.setSecuritiesList([]);
};


/**
 * repeated PositionsFutures futures = 4;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures>}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.getFuturesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PositionsFutures, 4));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.setFuturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsFutures}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.addFutures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.tinkoff.public.invest.api.contract.v1.PositionsFutures, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.clearFuturesList = function() {
  return this.setFuturesList([]);
};


/**
 * repeated PositionsOptions options = 5;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions>}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.getOptionsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.PositionsOptions, 5));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.setOptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsOptions}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.addOptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.tinkoff.public.invest.api.contract.v1.PositionsOptions, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.clearOptionsList = function() {
  return this.setOptionsList([]);
};


/**
 * optional google.protobuf.Timestamp date = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionData.prototype.hasDate = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.toObject = function(includeInstance, msg) {
  var f, obj = {
availableValue: (f = msg.getAvailableValue()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
blockedValue: (f = msg.getBlockedValue()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PositionsMoney;
  return proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setAvailableValue(value);
      break;
    case 2:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setBlockedValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailableValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getBlockedValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional MoneyValue available_value = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.prototype.getAvailableValue = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.prototype.setAvailableValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.prototype.clearAvailableValue = function() {
  return this.setAvailableValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.prototype.hasAvailableValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MoneyValue blocked_value = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.prototype.getBlockedValue = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.prototype.setBlockedValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PositionsMoney} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.prototype.clearBlockedValue = function() {
  return this.setBlockedValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsMoney.prototype.hasBlockedValue = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.toObject = function(includeInstance, msg) {
  var f, obj = {
instrumentUid: jspb.Message.getFieldWithDefault(msg, 1, ""),
payment: (f = msg.getPayment()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem}
 */
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem;
  return proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem}
 */
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 2:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setPayment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instrument_uid = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MoneyValue payment = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.prototype.getPayment = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.prototype.setPayment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.prototype.clearPayment = function() {
  return this.setPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.ChildOperationItem.prototype.hasPayment = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
pingSettings: (f = msg.getPingSettings()) && tinvest_common_pb.PingDelaySettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest;
  return proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccounts(value);
      break;
    case 15:
      var value = new tinvest_common_pb.PingDelaySettings;
      reader.readMessage(value,tinvest_common_pb.PingDelaySettings.deserializeBinaryFromReader);
      msg.setPingSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPingSettings();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      tinvest_common_pb.PingDelaySettings.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string accounts = 1;
 * @return {!Array<string>}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.prototype.getAccountsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.prototype.setAccountsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.prototype.addAccounts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional PingDelaySettings ping_settings = 15;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.prototype.getPingSettings = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.PingDelaySettings, 15));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.prototype.setPingSettings = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.prototype.clearPingSettings = function() {
  return this.setPingSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamRequest.prototype.hasPingSettings = function() {
  return jspb.Message.getField(this, 15) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  SUBSCRIPTIONS: 1,
  OPERATION: 2,
  PING: 3
};

/**
 * @return {proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.PayloadCase}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
subscriptions: (f = msg.getSubscriptions()) && proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.toObject(includeInstance, f),
operation: (f = msg.getOperation()) && proto.tinkoff.public.invest.api.contract.v1.OperationData.toObject(includeInstance, f),
ping: (f = msg.getPing()) && tinvest_common_pb.Ping.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse;
  return proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.deserializeBinaryFromReader);
      msg.setSubscriptions(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OperationData;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OperationData.deserializeBinaryFromReader);
      msg.setOperation(value);
      break;
    case 3:
      var value = new tinvest_common_pb.Ping;
      reader.readMessage(value,tinvest_common_pb.Ping.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.serializeBinaryToWriter
    );
  }
  f = message.getOperation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OperationData.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.Ping.serializeBinaryToWriter
    );
  }
};


/**
 * optional OperationsSubscriptionResult subscriptions = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.getSubscriptions = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.setSubscriptions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.clearSubscriptions = function() {
  return this.setSubscriptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.hasSubscriptions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OperationData operation = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.OperationData}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.getOperation = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.OperationData} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OperationData, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.OperationData|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.setOperation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.clearOperation = function() {
  return this.setOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.hasOperation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Ping ping = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Ping}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.getPing = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Ping} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Ping, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Ping|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.setPing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.clearPing = function() {
  return this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsStreamResponse.prototype.hasPing = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
accountsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
subscriptionStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
trackingId: jspb.Message.getFieldWithDefault(msg, 7, ""),
streamId: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult;
  return proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccounts(value);
      break;
    case 2:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationsAccountSubscriptionStatus} */ (reader.readEnum());
      msg.setSubscriptionStatus(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackingId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getSubscriptionStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTrackingId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStreamId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * repeated string accounts = 1;
 * @return {!Array<string>}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.prototype.getAccountsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.prototype.setAccountsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.prototype.addAccounts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional OperationsAccountSubscriptionStatus subscription_status = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsAccountSubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.prototype.getSubscriptionStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationsAccountSubscriptionStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationsAccountSubscriptionStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.prototype.setSubscriptionStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string tracking_id = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.prototype.getTrackingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.prototype.setTrackingId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string stream_id = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.prototype.getStreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsSubscriptionResult.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OperationData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.toObject = function(includeInstance, msg) {
  var f, obj = {
brokerAccountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: jspb.Message.getFieldWithDefault(msg, 2, ""),
parentOperationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
type: jspb.Message.getFieldWithDefault(msg, 6, 0),
state: jspb.Message.getFieldWithDefault(msg, 7, 0),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 8, ""),
figi: jspb.Message.getFieldWithDefault(msg, 9, ""),
instrumentType: jspb.Message.getFieldWithDefault(msg, 10, ""),
instrumentKind: jspb.Message.getFieldWithDefault(msg, 11, 0),
positionUid: jspb.Message.getFieldWithDefault(msg, 12, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 13, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 14, ""),
payment: (f = msg.getPayment()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OperationData;
  return proto.tinkoff.public.invest.api.contract.v1.OperationData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrokerAccountId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentOperationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 6:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFigi(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentType(value);
      break;
    case 11:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.InstrumentType} */ (reader.readEnum());
      msg.setInstrumentKind(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositionUid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    case 15:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setPayment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OperationData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrokerAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParentOperationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getInstrumentType();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getInstrumentKind();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getPositionUid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPayment();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string broker_account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getBrokerAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setBrokerAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parent_operation_id = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getParentOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setParentOperationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp date = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.hasDate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional OperationType type = 6;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationType}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional OperationState state = 7;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationState}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getState = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OperationState} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OperationState} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string instrument_uid = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string figi = 9;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string instrument_type = 10;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getInstrumentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setInstrumentType = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional InstrumentType instrument_kind = 11;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentType}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getInstrumentKind = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.InstrumentType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InstrumentType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setInstrumentKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string position_uid = 12;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getPositionUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setPositionUid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string ticker = 13;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string class_code = 14;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional MoneyValue payment = 15;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.getPayment = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 15));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.setPayment = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OperationData} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.clearPayment = function() {
  return this.setPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationData.prototype.hasPayment = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationState = {
  OPERATION_STATE_UNSPECIFIED: 0,
  OPERATION_STATE_EXECUTED: 1,
  OPERATION_STATE_CANCELED: 2,
  OPERATION_STATE_PROGRESS: 3
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationType = {
  OPERATION_TYPE_UNSPECIFIED: 0,
  OPERATION_TYPE_INPUT: 1,
  OPERATION_TYPE_BOND_TAX: 2,
  OPERATION_TYPE_OUTPUT_SECURITIES: 3,
  OPERATION_TYPE_OVERNIGHT: 4,
  OPERATION_TYPE_TAX: 5,
  OPERATION_TYPE_BOND_REPAYMENT_FULL: 6,
  OPERATION_TYPE_SELL_CARD: 7,
  OPERATION_TYPE_DIVIDEND_TAX: 8,
  OPERATION_TYPE_OUTPUT: 9,
  OPERATION_TYPE_BOND_REPAYMENT: 10,
  OPERATION_TYPE_TAX_CORRECTION: 11,
  OPERATION_TYPE_SERVICE_FEE: 12,
  OPERATION_TYPE_BENEFIT_TAX: 13,
  OPERATION_TYPE_MARGIN_FEE: 14,
  OPERATION_TYPE_BUY: 15,
  OPERATION_TYPE_BUY_CARD: 16,
  OPERATION_TYPE_INPUT_SECURITIES: 17,
  OPERATION_TYPE_SELL_MARGIN: 18,
  OPERATION_TYPE_BROKER_FEE: 19,
  OPERATION_TYPE_BUY_MARGIN: 20,
  OPERATION_TYPE_DIVIDEND: 21,
  OPERATION_TYPE_SELL: 22,
  OPERATION_TYPE_COUPON: 23,
  OPERATION_TYPE_SUCCESS_FEE: 24,
  OPERATION_TYPE_DIVIDEND_TRANSFER: 25,
  OPERATION_TYPE_ACCRUING_VARMARGIN: 26,
  OPERATION_TYPE_WRITING_OFF_VARMARGIN: 27,
  OPERATION_TYPE_DELIVERY_BUY: 28,
  OPERATION_TYPE_DELIVERY_SELL: 29,
  OPERATION_TYPE_TRACK_MFEE: 30,
  OPERATION_TYPE_TRACK_PFEE: 31,
  OPERATION_TYPE_TAX_PROGRESSIVE: 32,
  OPERATION_TYPE_BOND_TAX_PROGRESSIVE: 33,
  OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE: 34,
  OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE: 35,
  OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE: 36,
  OPERATION_TYPE_TAX_REPO_PROGRESSIVE: 37,
  OPERATION_TYPE_TAX_REPO: 38,
  OPERATION_TYPE_TAX_REPO_HOLD: 39,
  OPERATION_TYPE_TAX_REPO_REFUND: 40,
  OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE: 41,
  OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE: 42,
  OPERATION_TYPE_DIV_EXT: 43,
  OPERATION_TYPE_TAX_CORRECTION_COUPON: 44,
  OPERATION_TYPE_CASH_FEE: 45,
  OPERATION_TYPE_OUT_FEE: 46,
  OPERATION_TYPE_OUT_STAMP_DUTY: 47,
  OPERATION_TYPE_OUTPUT_SWIFT: 50,
  OPERATION_TYPE_INPUT_SWIFT: 51,
  OPERATION_TYPE_OUTPUT_ACQUIRING: 53,
  OPERATION_TYPE_INPUT_ACQUIRING: 54,
  OPERATION_TYPE_OUTPUT_PENALTY: 55,
  OPERATION_TYPE_ADVICE_FEE: 56,
  OPERATION_TYPE_TRANS_IIS_BS: 57,
  OPERATION_TYPE_TRANS_BS_BS: 58,
  OPERATION_TYPE_OUT_MULTI: 59,
  OPERATION_TYPE_INP_MULTI: 60,
  OPERATION_TYPE_OVER_PLACEMENT: 61,
  OPERATION_TYPE_OVER_COM: 62,
  OPERATION_TYPE_OVER_INCOME: 63,
  OPERATION_TYPE_OPTION_EXPIRATION: 64,
  OPERATION_TYPE_FUTURE_EXPIRATION: 65,
  OPERATION_TYPE_OTHER_FEE: 66,
  OPERATION_TYPE_OTHER: 67,
  OPERATION_TYPE_DFA_REDEMPTION: 68,
  OPERATION_TYPE_PRIMARY_ORDER: 69,
  OPERATION_TYPE_FUNDING: 70
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PortfolioSubscriptionStatus = {
  PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED: 0,
  PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS: 1,
  PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND: 2,
  PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR: 3
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PositionsAccountSubscriptionStatus = {
  POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED: 0,
  POSITIONS_SUBSCRIPTION_STATUS_SUCCESS: 1,
  POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND: 2,
  POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR: 3
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OperationsAccountSubscriptionStatus = {
  OPERATIONS_SUBSCRIPTION_STATUS_UNSPECIFIED: 0,
  OPERATIONS_SUBSCRIPTION_STATUS_SUCCESS: 1,
  OPERATIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND: 2,
  OPERATIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR: 3
};

goog.object.extend(exports, proto.tinkoff.public.invest.api.contract.v1);
