// source: tinvest/orders.proto
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

var tinvest_common_pb = require('../tinvest/common_pb.js');
goog.object.extend(proto, tinvest_common_pb);
var tinvest_stoporders_pb = require('../tinvest/stoporders_pb.js');
goog.object.extend(proto, tinvest_stoporders_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_api_field_behavior_pb = require('../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.InstrumentExtraCase', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderDirection', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderIdType', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderStage', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderState', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.MarkerType', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.PayloadCase', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StatusCauseInfo', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderTrade', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderTrades', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderType', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.TimeInForceType', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.PayloadCase', null, global);
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
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest';
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
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.oneofGroups_);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse';
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
proto.tinkoff.public.invest.api.contract.v1.OrderTrades = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.OrderTrades.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OrderTrades, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OrderTrades.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OrderTrades';
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
proto.tinkoff.public.invest.api.contract.v1.OrderTrade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OrderTrade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OrderTrade.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OrderTrade';
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
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest';
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
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse';
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
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest';
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
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse';
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
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest';
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
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse';
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters';
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
proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse';
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
proto.tinkoff.public.invest.api.contract.v1.OrderState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.OrderState.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OrderState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OrderState.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OrderState';
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
proto.tinkoff.public.invest.api.contract.v1.OrderStage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OrderStage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OrderStage.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OrderStage';
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
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse';
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
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView';
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
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView';
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.oneofGroups_);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse';
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond';
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture';
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
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest';
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
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse';
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
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.oneofGroups_);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse';
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
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState';
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
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.repeatedFields_ = [1];



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
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
pingDelayMs: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest;
  return proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPingDelayMs(value);
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
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
};


/**
 * repeated string accounts = 1;
 * @return {!Array<string>}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.prototype.getAccountsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.prototype.setAccountsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.prototype.addAccounts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional int32 ping_delay_ms = 15;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.prototype.getPingDelayMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.prototype.setPingDelayMs = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.prototype.clearPingDelayMs = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamRequest.prototype.hasPingDelayMs = function() {
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
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  ORDER_TRADES: 1,
  PING: 2,
  SUBSCRIPTION: 3
};

/**
 * @return {proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.PayloadCase}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.oneofGroups_[0]));
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
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
orderTrades: (f = msg.getOrderTrades()) && proto.tinkoff.public.invest.api.contract.v1.OrderTrades.toObject(includeInstance, f),
ping: (f = msg.getPing()) && tinvest_common_pb.Ping.toObject(includeInstance, f),
subscription: (f = msg.getSubscription()) && proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse;
  return proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OrderTrades;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OrderTrades.deserializeBinaryFromReader);
      msg.setOrderTrades(value);
      break;
    case 2:
      var value = new tinvest_common_pb.Ping;
      reader.readMessage(value,tinvest_common_pb.Ping.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    case 3:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.deserializeBinaryFromReader);
      msg.setSubscription(value);
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
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderTrades();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OrderTrades.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tinvest_common_pb.Ping.serializeBinaryToWriter
    );
  }
  f = message.getSubscription();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional OrderTrades order_trades = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.OrderTrades}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.getOrderTrades = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.OrderTrades} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OrderTrades, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.OrderTrades|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.setOrderTrades = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.clearOrderTrades = function() {
  return this.setOrderTrades(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.hasOrderTrades = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Ping ping = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Ping}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.getPing = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Ping} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Ping, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Ping|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.setPing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.clearPing = function() {
  return this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.hasPing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SubscriptionResponse subscription = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.getSubscription = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.setSubscription = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.clearSubscription = function() {
  return this.setSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.TradesStreamResponse.prototype.hasSubscription = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.repeatedFields_ = [5];



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
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OrderTrades.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.toObject = function(includeInstance, msg) {
  var f, obj = {
orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
direction: jspb.Message.getFieldWithDefault(msg, 3, 0),
figi: jspb.Message.getFieldWithDefault(msg, 4, ""),
tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.tinkoff.public.invest.api.contract.v1.OrderTrade.toObject, includeInstance),
accountId: jspb.Message.getFieldWithDefault(msg, 6, ""),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OrderTrades;
  return proto.tinkoff.public.invest.api.contract.v1.OrderTrades.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFigi(value);
      break;
    case 5:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OrderTrade;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OrderTrade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
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
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OrderTrades.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OrderTrade.serializeBinaryToWriter
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OrderDirection direction = 3;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.getDirection = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string figi = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated OrderTrade trades = 5;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderTrade>}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderTrade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OrderTrade, 5));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderTrade>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.tinkoff.public.invest.api.contract.v1.OrderTrade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};


/**
 * optional string account_id = 6;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string instrument_uid = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrades} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrades.prototype.setInstrumentUid = function(value) {
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
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OrderTrade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.toObject = function(includeInstance, msg) {
  var f, obj = {
dateTime: (f = msg.getDateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
price: (f = msg.getPrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
quantity: jspb.Message.getFieldWithDefault(msg, 3, 0),
tradeId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OrderTrade;
  return proto.tinkoff.public.invest.api.contract.v1.OrderTrade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateTime(value);
      break;
    case 2:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
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
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OrderTrade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp date_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.getDateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.setDateTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.clearDateTime = function() {
  return this.setDateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.hasDateTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Quotation price = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 quantity = 3;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string trade_id = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderTrade.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
quantity: jspb.Message.getFieldWithDefault(msg, 2, 0),
price: (f = msg.getPrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
direction: jspb.Message.getFieldWithDefault(msg, 4, 0),
accountId: jspb.Message.getFieldWithDefault(msg, 5, ""),
orderType: jspb.Message.getFieldWithDefault(msg, 6, 0),
orderId: jspb.Message.getFieldWithDefault(msg, 7, ""),
instrumentId: jspb.Message.getFieldWithDefault(msg, 8, ""),
timeInForce: jspb.Message.getFieldWithDefault(msg, 9, 0),
priceType: jspb.Message.getFieldWithDefault(msg, 10, 0),
confirmMarginTrade: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest;
  return proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setQuantity(value);
      break;
    case 3:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 6:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderType} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentId(value);
      break;
    case 9:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType} */ (reader.readEnum());
      msg.setTimeInForce(value);
      break;
    case 10:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.PriceType} */ (reader.readEnum());
      msg.setPriceType(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConfirmMarginTrade(value);
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
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOrderType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getInstrumentId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTimeInForce();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getPriceType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getConfirmMarginTrade();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.setFigi = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.clearFigi = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.hasFigi = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 quantity = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Quotation price = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OrderDirection direction = 4;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.getDirection = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string account_id = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional OrderType order_type = 6;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderType}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.getOrderType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string order_id = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string instrument_id = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.setInstrumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional TimeInForceType time_in_force = 9;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.getTimeInForce = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.setTimeInForce = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional PriceType price_type = 10;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PriceType}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.getPriceType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.PriceType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PriceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.setPriceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional bool confirm_margin_trade = 11;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.getConfirmMarginTrade = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderRequest.prototype.setConfirmMarginTrade = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
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
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
executionReportStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
lotsRequested: jspb.Message.getFieldWithDefault(msg, 3, 0),
lotsExecuted: jspb.Message.getFieldWithDefault(msg, 4, 0),
initialOrderPrice: (f = msg.getInitialOrderPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
executedOrderPrice: (f = msg.getExecutedOrderPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
totalOrderAmount: (f = msg.getTotalOrderAmount()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
initialCommission: (f = msg.getInitialCommission()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
executedCommission: (f = msg.getExecutedCommission()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
aciValue: (f = msg.getAciValue()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
figi: jspb.Message.getFieldWithDefault(msg, 11, ""),
direction: jspb.Message.getFieldWithDefault(msg, 12, 0),
initialSecurityPrice: (f = msg.getInitialSecurityPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
orderType: jspb.Message.getFieldWithDefault(msg, 14, 0),
message: jspb.Message.getFieldWithDefault(msg, 15, ""),
initialOrderPricePt: (f = msg.getInitialOrderPricePt()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 17, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 18, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 19, ""),
orderRequestId: jspb.Message.getFieldWithDefault(msg, 20, ""),
responseMetadata: (f = msg.getResponseMetadata()) && tinvest_common_pb.ResponseMetadata.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse;
  return proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} */ (reader.readEnum());
      msg.setExecutionReportStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLotsRequested(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLotsExecuted(value);
      break;
    case 5:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setInitialOrderPrice(value);
      break;
    case 6:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setExecutedOrderPrice(value);
      break;
    case 7:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalOrderAmount(value);
      break;
    case 8:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setInitialCommission(value);
      break;
    case 9:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setExecutedCommission(value);
      break;
    case 10:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setAciValue(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFigi(value);
      break;
    case 12:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 13:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setInitialSecurityPrice(value);
      break;
    case 14:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderType} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 16:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setInitialOrderPricePt(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderRequestId(value);
      break;
    case 254:
      var value = new tinvest_common_pb.ResponseMetadata;
      reader.readMessage(value,tinvest_common_pb.ResponseMetadata.deserializeBinaryFromReader);
      msg.setResponseMetadata(value);
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
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecutionReportStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLotsRequested();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLotsExecuted();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getInitialOrderPrice();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExecutedOrderPrice();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getTotalOrderAmount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getInitialCommission();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExecutedCommission();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getAciValue();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getInitialSecurityPrice();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getOrderType();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getInitialOrderPricePt();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getOrderRequestId();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getResponseMetadata();
  if (f != null) {
    writer.writeMessage(
      254,
      f,
      tinvest_common_pb.ResponseMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OrderExecutionReportStatus execution_report_status = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getExecutionReportStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setExecutionReportStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 lots_requested = 3;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getLotsRequested = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setLotsRequested = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 lots_executed = 4;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getLotsExecuted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setLotsExecuted = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional MoneyValue initial_order_price = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getInitialOrderPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setInitialOrderPrice = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.clearInitialOrderPrice = function() {
  return this.setInitialOrderPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.hasInitialOrderPrice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MoneyValue executed_order_price = 6;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getExecutedOrderPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 6));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setExecutedOrderPrice = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.clearExecutedOrderPrice = function() {
  return this.setExecutedOrderPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.hasExecutedOrderPrice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional MoneyValue total_order_amount = 7;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getTotalOrderAmount = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 7));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setTotalOrderAmount = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.clearTotalOrderAmount = function() {
  return this.setTotalOrderAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.hasTotalOrderAmount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional MoneyValue initial_commission = 8;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getInitialCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 8));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setInitialCommission = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.clearInitialCommission = function() {
  return this.setInitialCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.hasInitialCommission = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MoneyValue executed_commission = 9;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getExecutedCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 9));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setExecutedCommission = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.clearExecutedCommission = function() {
  return this.setExecutedCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.hasExecutedCommission = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional MoneyValue aci_value = 10;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getAciValue = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 10));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setAciValue = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.clearAciValue = function() {
  return this.setAciValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.hasAciValue = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string figi = 11;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional OrderDirection direction = 12;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getDirection = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional MoneyValue initial_security_price = 13;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getInitialSecurityPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 13));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setInitialSecurityPrice = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.clearInitialSecurityPrice = function() {
  return this.setInitialSecurityPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.hasInitialSecurityPrice = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional OrderType order_type = 14;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderType}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getOrderType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderType} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional string message = 15;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional Quotation initial_order_price_pt = 16;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getInitialOrderPricePt = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 16));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setInitialOrderPricePt = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.clearInitialOrderPricePt = function() {
  return this.setInitialOrderPricePt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.hasInitialOrderPricePt = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string instrument_uid = 17;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string ticker = 18;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string class_code = 19;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string order_request_id = 20;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getOrderRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setOrderRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional ResponseMetadata response_metadata = 254;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.ResponseMetadata}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.getResponseMetadata = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.ResponseMetadata} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.ResponseMetadata, 254));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.ResponseMetadata|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.setResponseMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 254, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.clearResponseMetadata = function() {
  return this.setResponseMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderResponse.prototype.hasResponseMetadata = function() {
  return jspb.Message.getField(this, 254) != null;
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
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instrumentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
quantity: jspb.Message.getFieldWithDefault(msg, 2, 0),
price: (f = msg.getPrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
direction: jspb.Message.getFieldWithDefault(msg, 4, 0),
accountId: jspb.Message.getFieldWithDefault(msg, 5, ""),
orderType: jspb.Message.getFieldWithDefault(msg, 6, 0),
orderId: jspb.Message.getFieldWithDefault(msg, 7, ""),
timeInForce: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
priceType: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
confirmMarginTrade: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest;
  return proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 3:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 6:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderType} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 8:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType} */ (reader.readEnum());
      msg.setTimeInForce(value);
      break;
    case 9:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.PriceType} */ (reader.readEnum());
      msg.setPriceType(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConfirmMarginTrade(value);
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
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrumentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOrderType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.PriceType} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getConfirmMarginTrade();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional string instrument_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.setInstrumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 quantity = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Quotation price = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OrderDirection direction = 4;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.getDirection = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string account_id = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional OrderType order_type = 6;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderType}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.getOrderType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string order_id = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional TimeInForceType time_in_force = 8;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.getTimeInForce = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.setTimeInForce = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.clearTimeInForce = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.hasTimeInForce = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PriceType price_type = 9;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PriceType}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.getPriceType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.PriceType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PriceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.setPriceType = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.clearPriceType = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.hasPriceType = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool confirm_margin_trade = 10;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.getConfirmMarginTrade = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncRequest.prototype.setConfirmMarginTrade = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
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
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
orderRequestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
executionReportStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
tradeIntentId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse;
  return proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderRequestId(value);
      break;
    case 2:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} */ (reader.readEnum());
      msg.setExecutionReportStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeIntentId(value);
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
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecutionReportStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string order_request_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.prototype.getOrderRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.prototype.setOrderRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OrderExecutionReportStatus execution_report_status = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.prototype.getExecutionReportStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.prototype.setExecutionReportStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string trade_intent_id = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.prototype.getTradeIntentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.prototype.setTradeIntentId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.prototype.clearTradeIntentId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.PostOrderAsyncResponse.prototype.hasTradeIntentId = function() {
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
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
orderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
orderIdType: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest;
  return proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOrderId(value);
      break;
    case 3:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType} */ (reader.readEnum());
      msg.setOrderIdType(value);
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
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
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
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string order_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OrderIdType order_id_type = 3;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType}
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.prototype.getOrderIdType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.prototype.setOrderIdType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.prototype.clearOrderIdType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderRequest.prototype.hasOrderIdType = function() {
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
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
responseMetadata: (f = msg.getResponseMetadata()) && tinvest_common_pb.ResponseMetadata.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse;
  return proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 254:
      var value = new tinvest_common_pb.ResponseMetadata;
      reader.readMessage(value,tinvest_common_pb.ResponseMetadata.deserializeBinaryFromReader);
      msg.setResponseMetadata(value);
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
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResponseMetadata();
  if (f != null) {
    writer.writeMessage(
      254,
      f,
      tinvest_common_pb.ResponseMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ResponseMetadata response_metadata = 254;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.ResponseMetadata}
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.prototype.getResponseMetadata = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.ResponseMetadata} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.ResponseMetadata, 254));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.ResponseMetadata|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.prototype.setResponseMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 254, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.prototype.clearResponseMetadata = function() {
  return this.setResponseMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.CancelOrderResponse.prototype.hasResponseMetadata = function() {
  return jspb.Message.getField(this, 254) != null;
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
orderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
priceType: jspb.Message.getFieldWithDefault(msg, 3, 0),
orderIdType: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOrderId(value);
      break;
    case 3:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.PriceType} */ (reader.readEnum());
      msg.setPriceType(value);
      break;
    case 4:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType} */ (reader.readEnum());
      msg.setOrderIdType(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
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
  f = message.getPriceType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string order_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PriceType price_type = 3;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PriceType}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.prototype.getPriceType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.PriceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PriceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.prototype.setPriceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional OrderIdType order_id_type = 4;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.prototype.getOrderIdType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.prototype.setOrderIdType = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.prototype.clearOrderIdType = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderStateRequest.prototype.hasOrderIdType = function() {
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
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
advancedFilters: (f = msg.getAdvancedFilters()) && proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.deserializeBinaryFromReader);
      msg.setAdvancedFilters(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAdvancedFilters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.repeatedFields_ = [3];



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
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.toObject = function(includeInstance, msg) {
  var f, obj = {
from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
executionStatusList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters;
  return proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addExecutionStatus(values[i]);
      }
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
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExecutionStatusList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp from = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp to = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.hasTo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated OrderExecutionReportStatus execution_status = 3;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.getExecutionStatusList = function() {
  return /** @type {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.setExecutionStatusList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.addExecutionStatus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters.prototype.clearExecutionStatusList = function() {
  return this.setExecutionStatusList([]);
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GetOrdersRequestFilters advanced_filters = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.prototype.getAdvancedFilters = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.GetOrdersRequestFilters|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.prototype.setAdvancedFilters = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.prototype.clearAdvancedFilters = function() {
  return this.setAdvancedFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersRequest.prototype.hasAdvancedFilters = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.repeatedFields_ = [1];



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
proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    proto.tinkoff.public.invest.api.contract.v1.OrderState.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OrderState;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OrderState.deserializeBinaryFromReader);
      msg.addOrders(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OrderState.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OrderState orders = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderState>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OrderState, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderState>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.OrderState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrdersResponse.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.repeatedFields_ = [14];



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
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OrderState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.toObject = function(includeInstance, msg) {
  var f, obj = {
orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
executionReportStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
lotsRequested: jspb.Message.getFieldWithDefault(msg, 3, 0),
lotsExecuted: jspb.Message.getFieldWithDefault(msg, 4, 0),
initialOrderPrice: (f = msg.getInitialOrderPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
executedOrderPrice: (f = msg.getExecutedOrderPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
totalOrderAmount: (f = msg.getTotalOrderAmount()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
averagePositionPrice: (f = msg.getAveragePositionPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
initialCommission: (f = msg.getInitialCommission()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
executedCommission: (f = msg.getExecutedCommission()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
figi: jspb.Message.getFieldWithDefault(msg, 11, ""),
direction: jspb.Message.getFieldWithDefault(msg, 12, 0),
initialSecurityPrice: (f = msg.getInitialSecurityPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
stagesList: jspb.Message.toObjectList(msg.getStagesList(),
    proto.tinkoff.public.invest.api.contract.v1.OrderStage.toObject, includeInstance),
serviceCommission: (f = msg.getServiceCommission()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
currency: jspb.Message.getFieldWithDefault(msg, 16, ""),
orderType: jspb.Message.getFieldWithDefault(msg, 17, 0),
orderDate: (f = msg.getOrderDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 19, ""),
orderRequestId: jspb.Message.getFieldWithDefault(msg, 20, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 21, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 22, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OrderState;
  return proto.tinkoff.public.invest.api.contract.v1.OrderState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} */ (reader.readEnum());
      msg.setExecutionReportStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLotsRequested(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLotsExecuted(value);
      break;
    case 5:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setInitialOrderPrice(value);
      break;
    case 6:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setExecutedOrderPrice(value);
      break;
    case 7:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalOrderAmount(value);
      break;
    case 8:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setAveragePositionPrice(value);
      break;
    case 9:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setInitialCommission(value);
      break;
    case 10:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setExecutedCommission(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFigi(value);
      break;
    case 12:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 13:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setInitialSecurityPrice(value);
      break;
    case 14:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OrderStage;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OrderStage.deserializeBinaryFromReader);
      msg.addStages(value);
      break;
    case 15:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setServiceCommission(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 17:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderType} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOrderDate(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderRequestId(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 22:
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
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OrderState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExecutionReportStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLotsRequested();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLotsExecuted();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getInitialOrderPrice();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExecutedOrderPrice();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getTotalOrderAmount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getAveragePositionPrice();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getInitialCommission();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExecutedCommission();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getInitialSecurityPrice();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getStagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OrderStage.serializeBinaryToWriter
    );
  }
  f = message.getServiceCommission();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getOrderType();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = message.getOrderDate();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getOrderRequestId();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OrderExecutionReportStatus execution_report_status = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getExecutionReportStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setExecutionReportStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 lots_requested = 3;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getLotsRequested = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setLotsRequested = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 lots_executed = 4;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getLotsExecuted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setLotsExecuted = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional MoneyValue initial_order_price = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getInitialOrderPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setInitialOrderPrice = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.clearInitialOrderPrice = function() {
  return this.setInitialOrderPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.hasInitialOrderPrice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MoneyValue executed_order_price = 6;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getExecutedOrderPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 6));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setExecutedOrderPrice = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.clearExecutedOrderPrice = function() {
  return this.setExecutedOrderPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.hasExecutedOrderPrice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional MoneyValue total_order_amount = 7;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getTotalOrderAmount = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 7));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setTotalOrderAmount = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.clearTotalOrderAmount = function() {
  return this.setTotalOrderAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.hasTotalOrderAmount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional MoneyValue average_position_price = 8;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getAveragePositionPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 8));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setAveragePositionPrice = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.clearAveragePositionPrice = function() {
  return this.setAveragePositionPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.hasAveragePositionPrice = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MoneyValue initial_commission = 9;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getInitialCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 9));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setInitialCommission = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.clearInitialCommission = function() {
  return this.setInitialCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.hasInitialCommission = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional MoneyValue executed_commission = 10;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getExecutedCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 10));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setExecutedCommission = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.clearExecutedCommission = function() {
  return this.setExecutedCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.hasExecutedCommission = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string figi = 11;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional OrderDirection direction = 12;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getDirection = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional MoneyValue initial_security_price = 13;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getInitialSecurityPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 13));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setInitialSecurityPrice = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.clearInitialSecurityPrice = function() {
  return this.setInitialSecurityPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.hasInitialSecurityPrice = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated OrderStage stages = 14;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderStage>}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getStagesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderStage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OrderStage, 14));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderStage>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setStagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStage}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.addStages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.tinkoff.public.invest.api.contract.v1.OrderStage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.clearStagesList = function() {
  return this.setStagesList([]);
};


/**
 * optional MoneyValue service_commission = 15;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getServiceCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 15));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setServiceCommission = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.clearServiceCommission = function() {
  return this.setServiceCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.hasServiceCommission = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string currency = 16;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional OrderType order_type = 17;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderType}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getOrderType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderType} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * optional google.protobuf.Timestamp order_date = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getOrderDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setOrderDate = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.clearOrderDate = function() {
  return this.setOrderDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.hasOrderDate = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string instrument_uid = 19;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string order_request_id = 20;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getOrderRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setOrderRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string ticker = 21;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string class_code = 22;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderState.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
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
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OrderStage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.toObject = function(includeInstance, msg) {
  var f, obj = {
price: (f = msg.getPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
quantity: jspb.Message.getFieldWithDefault(msg, 2, 0),
tradeId: jspb.Message.getFieldWithDefault(msg, 3, ""),
executionTime: (f = msg.getExecutionTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStage}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OrderStage;
  return proto.tinkoff.public.invest.api.contract.v1.OrderStage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStage}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExecutionTime(value);
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
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OrderStage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExecutionTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional MoneyValue price = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStage} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStage} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 quantity = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStage} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string trade_id = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStage} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp execution_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.getExecutionTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStage} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.setExecutionTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStage} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.clearExecutionTime = function() {
  return this.setExecutionTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStage.prototype.hasExecutionTime = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
orderIdType: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
orderId: jspb.Message.getFieldWithDefault(msg, 6, ""),
idempotencyKey: jspb.Message.getFieldWithDefault(msg, 7, ""),
quantity: jspb.Message.getFieldWithDefault(msg, 11, 0),
price: (f = msg.getPrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
priceType: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
confirmMarginTrade: jspb.Message.getBooleanFieldWithDefault(msg, 14, false)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest;
  return proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 5:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType} */ (reader.readEnum());
      msg.setOrderIdType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotencyKey(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 12:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 13:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.PriceType} */ (reader.readEnum());
      msg.setPriceType(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConfirmMarginTrade(value);
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
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIdempotencyKey();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
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
      12,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.PriceType} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getConfirmMarginTrade();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OrderIdType order_id_type = 5;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.getOrderIdType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderIdType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.setOrderIdType = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.clearOrderIdType = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.hasOrderIdType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string order_id = 6;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string idempotency_key = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.getIdempotencyKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.setIdempotencyKey = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 quantity = 11;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional Quotation price = 12;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 12));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional PriceType price_type = 13;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.PriceType}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.getPriceType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.PriceType} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.PriceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.setPriceType = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.clearPriceType = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.hasPriceType = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool confirm_margin_trade = 14;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.getConfirmMarginTrade = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest.prototype.setConfirmMarginTrade = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
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
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
instrumentId: jspb.Message.getFieldWithDefault(msg, 2, ""),
price: (f = msg.getPrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
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
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstrumentId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string instrument_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.prototype.setInstrumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Quotation price = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest.prototype.hasPrice = function() {
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
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
currency: jspb.Message.getFieldWithDefault(msg, 1, ""),
buyLimits: (f = msg.getBuyLimits()) && proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.toObject(includeInstance, f),
buyMarginLimits: (f = msg.getBuyMarginLimits()) && proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.toObject(includeInstance, f),
sellLimits: (f = msg.getSellLimits()) && proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.toObject(includeInstance, f),
sellMarginLimits: (f = msg.getSellMarginLimits()) && proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.deserializeBinaryFromReader);
      msg.setBuyLimits(value);
      break;
    case 3:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.deserializeBinaryFromReader);
      msg.setBuyMarginLimits(value);
      break;
    case 4:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.deserializeBinaryFromReader);
      msg.setSellLimits(value);
      break;
    case 5:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.deserializeBinaryFromReader);
      msg.setSellMarginLimits(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuyLimits();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.serializeBinaryToWriter
    );
  }
  f = message.getBuyMarginLimits();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.serializeBinaryToWriter
    );
  }
  f = message.getSellLimits();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.serializeBinaryToWriter
    );
  }
  f = message.getSellMarginLimits();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.serializeBinaryToWriter
    );
  }
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
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.toObject = function(includeInstance, msg) {
  var f, obj = {
buyMoneyAmount: (f = msg.getBuyMoneyAmount()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
buyMaxLots: jspb.Message.getFieldWithDefault(msg, 2, 0),
buyMaxMarketLots: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView;
  return proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setBuyMoneyAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBuyMaxLots(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBuyMaxMarketLots(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyMoneyAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getBuyMaxLots();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getBuyMaxMarketLots();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional Quotation buy_money_amount = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.prototype.getBuyMoneyAmount = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.prototype.setBuyMoneyAmount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.prototype.clearBuyMoneyAmount = function() {
  return this.setBuyMoneyAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.prototype.hasBuyMoneyAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 buy_max_lots = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.prototype.getBuyMaxLots = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.prototype.setBuyMaxLots = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 buy_max_market_lots = 3;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.prototype.getBuyMaxMarketLots = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView.prototype.setBuyMaxMarketLots = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.toObject = function(includeInstance, msg) {
  var f, obj = {
sellMaxLots: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView;
  return proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSellMaxLots(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSellMaxLots();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 sell_max_lots = 1;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.prototype.getSellMaxLots = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView.prototype.setSellMaxLots = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BuyLimitsView buy_limits = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.getBuyLimits = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.setBuyLimits = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.clearBuyLimits = function() {
  return this.setBuyLimits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.hasBuyLimits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BuyLimitsView buy_margin_limits = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.getBuyMarginLimits = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.BuyLimitsView|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.setBuyMarginLimits = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.clearBuyMarginLimits = function() {
  return this.setBuyMarginLimits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.hasBuyMarginLimits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SellLimitsView sell_limits = 4;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.getSellLimits = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView, 4));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.setSellLimits = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.clearSellLimits = function() {
  return this.setSellLimits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.hasSellLimits = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SellLimitsView sell_margin_limits = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.getSellMarginLimits = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.SellLimitsView|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.setSellMarginLimits = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.clearSellMarginLimits = function() {
  return this.setSellMarginLimits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse.prototype.hasSellMarginLimits = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
instrumentId: jspb.Message.getFieldWithDefault(msg, 2, ""),
price: (f = msg.getPrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
direction: jspb.Message.getFieldWithDefault(msg, 12, 0),
quantity: jspb.Message.getFieldWithDefault(msg, 13, 0)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 12:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstrumentId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
};


/**
 * optional string account_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string instrument_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.setInstrumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Quotation price = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OrderDirection direction = 12;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.getDirection = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional int64 quantity = 13;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceRequest.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.oneofGroups_ = [[12,13]];

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.InstrumentExtraCase = {
  INSTRUMENT_EXTRA_NOT_SET: 0,
  EXTRA_BOND: 12,
  EXTRA_FUTURE: 13
};

/**
 * @return {proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.InstrumentExtraCase}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.getInstrumentExtraCase = function() {
  return /** @type {proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.InstrumentExtraCase} */(jspb.Message.computeOneofCase(this, proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.oneofGroups_[0]));
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
totalOrderAmount: (f = msg.getTotalOrderAmount()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
initialOrderAmount: (f = msg.getInitialOrderAmount()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
lotsRequested: jspb.Message.getFieldWithDefault(msg, 3, 0),
executedCommission: (f = msg.getExecutedCommission()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
executedCommissionRub: (f = msg.getExecutedCommissionRub()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
serviceCommission: (f = msg.getServiceCommission()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
dealCommission: (f = msg.getDealCommission()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
extraBond: (f = msg.getExtraBond()) && proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.toObject(includeInstance, f),
extraFuture: (f = msg.getExtraFuture()) && proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setTotalOrderAmount(value);
      break;
    case 5:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setInitialOrderAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLotsRequested(value);
      break;
    case 7:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setExecutedCommission(value);
      break;
    case 8:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setExecutedCommissionRub(value);
      break;
    case 9:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setServiceCommission(value);
      break;
    case 10:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setDealCommission(value);
      break;
    case 12:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.deserializeBinaryFromReader);
      msg.setExtraBond(value);
      break;
    case 13:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.deserializeBinaryFromReader);
      msg.setExtraFuture(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalOrderAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getInitialOrderAmount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getLotsRequested();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getExecutedCommission();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExecutedCommissionRub();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getServiceCommission();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getDealCommission();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExtraBond();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.serializeBinaryToWriter
    );
  }
  f = message.getExtraFuture();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.serializeBinaryToWriter
    );
  }
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.toObject = function(includeInstance, msg) {
  var f, obj = {
aciValue: (f = msg.getAciValue()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
nominalConversionRate: (f = msg.getNominalConversionRate()) && tinvest_common_pb.Quotation.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond;
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setAciValue(value);
      break;
    case 3:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setNominalConversionRate(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAciValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getNominalConversionRate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
};


/**
 * optional MoneyValue aci_value = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.prototype.getAciValue = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.prototype.setAciValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.prototype.clearAciValue = function() {
  return this.setAciValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.prototype.hasAciValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Quotation nominal_conversion_rate = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.prototype.getNominalConversionRate = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.prototype.setNominalConversionRate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.prototype.clearNominalConversionRate = function() {
  return this.setNominalConversionRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond.prototype.hasNominalConversionRate = function() {
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.toObject = function(includeInstance, msg) {
  var f, obj = {
initialMargin: (f = msg.getInitialMargin()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture;
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setInitialMargin(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInitialMargin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional MoneyValue initial_margin = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.prototype.getInitialMargin = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.prototype.setInitialMargin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.prototype.clearInitialMargin = function() {
  return this.setInitialMargin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture.prototype.hasInitialMargin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MoneyValue total_order_amount = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.getTotalOrderAmount = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.setTotalOrderAmount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.clearTotalOrderAmount = function() {
  return this.setTotalOrderAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.hasTotalOrderAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MoneyValue initial_order_amount = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.getInitialOrderAmount = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.setInitialOrderAmount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.clearInitialOrderAmount = function() {
  return this.setInitialOrderAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.hasInitialOrderAmount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 lots_requested = 3;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.getLotsRequested = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.setLotsRequested = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional MoneyValue executed_commission = 7;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.getExecutedCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 7));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.setExecutedCommission = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.clearExecutedCommission = function() {
  return this.setExecutedCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.hasExecutedCommission = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional MoneyValue executed_commission_rub = 8;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.getExecutedCommissionRub = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 8));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.setExecutedCommissionRub = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.clearExecutedCommissionRub = function() {
  return this.setExecutedCommissionRub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.hasExecutedCommissionRub = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MoneyValue service_commission = 9;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.getServiceCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 9));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.setServiceCommission = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.clearServiceCommission = function() {
  return this.setServiceCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.hasServiceCommission = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional MoneyValue deal_commission = 10;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.getDealCommission = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 10));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.setDealCommission = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.clearDealCommission = function() {
  return this.setDealCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.hasDealCommission = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ExtraBond extra_bond = 12;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.getExtraBond = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond, 12));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraBond|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.setExtraBond = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.clearExtraBond = function() {
  return this.setExtraBond(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.hasExtraBond = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ExtraFuture extra_future = 13;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.getExtraFuture = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture, 13));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.ExtraFuture|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.setExtraFuture = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.clearExtraFuture = function() {
  return this.setExtraFuture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderPriceResponse.prototype.hasExtraFuture = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.repeatedFields_ = [1];



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
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
pingDelayMillis: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest;
  return proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPingDelayMillis(value);
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
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
};


/**
 * repeated string accounts = 1;
 * @return {!Array<string>}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.prototype.getAccountsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.prototype.setAccountsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.prototype.addAccounts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional int32 ping_delay_millis = 15;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.prototype.getPingDelayMillis = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.prototype.setPingDelayMillis = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.prototype.clearPingDelayMillis = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamRequest.prototype.hasPingDelayMillis = function() {
  return jspb.Message.getField(this, 15) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.repeatedFields_ = [5];



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
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
trackingId: jspb.Message.getFieldWithDefault(msg, 1, ""),
status: jspb.Message.getFieldWithDefault(msg, 2, 0),
streamId: jspb.Message.getFieldWithDefault(msg, 4, ""),
accountsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
error: (f = msg.getError()) && tinvest_common_pb.ErrorDetail.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse;
  return proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackingId(value);
      break;
    case 2:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.ResultSubscriptionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccounts(value);
      break;
    case 7:
      var value = new tinvest_common_pb.ErrorDetail;
      reader.readMessage(value,tinvest_common_pb.ErrorDetail.deserializeBinaryFromReader);
      msg.setError(value);
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
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackingId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getStreamId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      tinvest_common_pb.ErrorDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tracking_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.getTrackingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.setTrackingId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ResultSubscriptionStatus status = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.ResultSubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.getStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.ResultSubscriptionStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.ResultSubscriptionStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string stream_id = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.getStreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string accounts = 5;
 * @return {!Array<string>}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.getAccountsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.setAccountsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.addAccounts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional ErrorDetail error = 7;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.ErrorDetail}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.getError = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.ErrorDetail} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.ErrorDetail, 7));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.ErrorDetail|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  ORDER_STATE: 1,
  PING: 2,
  SUBSCRIPTION: 3,
  STOP_ORDER_STATE: 4
};

/**
 * @return {proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.PayloadCase}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.oneofGroups_[0]));
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
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
orderState: (f = msg.getOrderState()) && proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.toObject(includeInstance, f),
ping: (f = msg.getPing()) && tinvest_common_pb.Ping.toObject(includeInstance, f),
subscription: (f = msg.getSubscription()) && proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.toObject(includeInstance, f),
stopOrderState: (f = msg.getStopOrderState()) && proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse;
  return proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.deserializeBinaryFromReader);
      msg.setOrderState(value);
      break;
    case 2:
      var value = new tinvest_common_pb.Ping;
      reader.readMessage(value,tinvest_common_pb.Ping.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    case 3:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.deserializeBinaryFromReader);
      msg.setSubscription(value);
      break;
    case 4:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.deserializeBinaryFromReader);
      msg.setStopOrderState(value);
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
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tinvest_common_pb.Ping.serializeBinaryToWriter
    );
  }
  f = message.getSubscription();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse.serializeBinaryToWriter
    );
  }
  f = message.getStopOrderState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.MarkerType = {
  MARKER_UNKNOWN: 0,
  MARKER_BROKER: 1,
  MARKER_CHAT: 2,
  MARKER_PAPER: 3,
  MARKER_MARGIN: 4,
  MARKER_TKBNM: 5,
  MARKER_SHORT: 6,
  MARKER_SPECMM: 7,
  MARKER_PO: 8
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StatusCauseInfo = {
  CAUSE_UNSPECIFIED: 0,
  CAUSE_CANCELLED_BY_CLIENT: 15,
  CAUSE_CANCELLED_BY_EXCHANGE: 1,
  CAUSE_CANCELLED_NOT_ENOUGH_POSITION: 2,
  CAUSE_CANCELLED_BY_CLIENT_BLOCK: 3,
  CAUSE_REJECTED_BY_BROKER: 4,
  CAUSE_REJECTED_BY_EXCHANGE: 5,
  CAUSE_CANCELLED_BY_BROKER: 6
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.repeatedFields_ = [33];



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
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.toObject = function(includeInstance, msg) {
  var f, obj = {
orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
orderRequestId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
clientCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
executionReportStatus: jspb.Message.getFieldWithDefault(msg, 5, 0),
statusInfo: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
ticker: jspb.Message.getFieldWithDefault(msg, 7, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 8, ""),
lotSize: jspb.Message.getFieldWithDefault(msg, 9, 0),
direction: jspb.Message.getFieldWithDefault(msg, 10, 0),
timeInForce: jspb.Message.getFieldWithDefault(msg, 11, 0),
orderType: jspb.Message.getFieldWithDefault(msg, 12, 0),
accountId: jspb.Message.getFieldWithDefault(msg, 13, ""),
tradeOrderId: jspb.Message.getFieldWithDefault(msg, 14, ""),
initialOrderPrice: (f = msg.getInitialOrderPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
orderPrice: (f = msg.getOrderPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
amount: (f = msg.getAmount()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
executedOrderPrice: (f = msg.getExecutedOrderPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
currency: jspb.Message.getFieldWithDefault(msg, 26, ""),
lotsRequested: jspb.Message.getFieldWithDefault(msg, 27, 0),
lotsExecuted: jspb.Message.getFieldWithDefault(msg, 28, 0),
lotsLeft: jspb.Message.getFieldWithDefault(msg, 29, 0),
lotsCancelled: jspb.Message.getFieldWithDefault(msg, 30, 0),
marker: (f = jspb.Message.getField(msg, 31)) == null ? undefined : f,
tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.tinkoff.public.invest.api.contract.v1.OrderTrade.toObject, includeInstance),
completionTime: (f = msg.getCompletionTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
exchange: jspb.Message.getFieldWithDefault(msg, 36, ""),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 41, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState;
  return proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderRequestId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientCode(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} */ (reader.readEnum());
      msg.setExecutionReportStatus(value);
      break;
    case 6:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StatusCauseInfo} */ (reader.readEnum());
      msg.setStatusInfo(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLotSize(value);
      break;
    case 10:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 11:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType} */ (reader.readEnum());
      msg.setTimeInForce(value);
      break;
    case 12:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderType} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeOrderId(value);
      break;
    case 22:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setInitialOrderPrice(value);
      break;
    case 23:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setOrderPrice(value);
      break;
    case 24:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 25:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setExecutedOrderPrice(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLotsRequested(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLotsExecuted(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLotsLeft(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLotsCancelled(value);
      break;
    case 31:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.MarkerType} */ (reader.readEnum());
      msg.setMarker(value);
      break;
    case 33:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OrderTrade;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OrderTrade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    case 35:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCompletionTime(value);
      break;
    case 36:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 41:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
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
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
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
  f = message.getClientCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExecutionReportStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StatusCauseInfo} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLotSize();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getTimeInForce();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getOrderType();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getTradeOrderId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getInitialOrderPrice();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getOrderPrice();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getExecutedOrderPrice();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getLotsRequested();
  if (f !== 0) {
    writer.writeInt64(
      27,
      f
    );
  }
  f = message.getLotsExecuted();
  if (f !== 0) {
    writer.writeInt64(
      28,
      f
    );
  }
  f = message.getLotsLeft();
  if (f !== 0) {
    writer.writeInt64(
      29,
      f
    );
  }
  f = message.getLotsCancelled();
  if (f !== 0) {
    writer.writeInt64(
      30,
      f
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.MarkerType} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeEnum(
      31,
      f
    );
  }
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      33,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OrderTrade.serializeBinaryToWriter
    );
  }
  f = message.getCompletionTime();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExchange();
  if (f.length > 0) {
    writer.writeString(
      36,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      41,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string order_request_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getOrderRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setOrderRequestId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.clearOrderRequestId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.hasOrderRequestId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string client_code = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getClientCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setClientCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OrderExecutionReportStatus execution_report_status = 5;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getExecutionReportStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setExecutionReportStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional StatusCauseInfo status_info = 6;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StatusCauseInfo}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getStatusInfo = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StatusCauseInfo} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StatusCauseInfo} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setStatusInfo = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.clearStatusInfo = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.hasStatusInfo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string ticker = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string class_code = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 lot_size = 9;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getLotSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setLotSize = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional OrderDirection direction = 10;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getDirection = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional TimeInForceType time_in_force = 11;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getTimeInForce = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TimeInForceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setTimeInForce = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional OrderType order_type = 12;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderType}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getOrderType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional string account_id = 13;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string trade_order_id = 14;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getTradeOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setTradeOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional MoneyValue initial_order_price = 22;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getInitialOrderPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 22));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setInitialOrderPrice = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.clearInitialOrderPrice = function() {
  return this.setInitialOrderPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.hasInitialOrderPrice = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional MoneyValue order_price = 23;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getOrderPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 23));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setOrderPrice = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.clearOrderPrice = function() {
  return this.setOrderPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.hasOrderPrice = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional MoneyValue amount = 24;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getAmount = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 24));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional MoneyValue executed_order_price = 25;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getExecutedOrderPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 25));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setExecutedOrderPrice = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.clearExecutedOrderPrice = function() {
  return this.setExecutedOrderPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.hasExecutedOrderPrice = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional string currency = 26;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional int64 lots_requested = 27;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getLotsRequested = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setLotsRequested = function(value) {
  return jspb.Message.setProto3IntField(this, 27, value);
};


/**
 * optional int64 lots_executed = 28;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getLotsExecuted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setLotsExecuted = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional int64 lots_left = 29;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getLotsLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setLotsLeft = function(value) {
  return jspb.Message.setProto3IntField(this, 29, value);
};


/**
 * optional int64 lots_cancelled = 30;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getLotsCancelled = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setLotsCancelled = function(value) {
  return jspb.Message.setProto3IntField(this, 30, value);
};


/**
 * optional MarkerType marker = 31;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.MarkerType}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getMarker = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.MarkerType} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.MarkerType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setMarker = function(value) {
  return jspb.Message.setField(this, 31, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.clearMarker = function() {
  return jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.hasMarker = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * repeated OrderTrade trades = 33;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderTrade>}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderTrade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OrderTrade, 33));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderTrade>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 33, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderTrade}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 33, opt_value, proto.tinkoff.public.invest.api.contract.v1.OrderTrade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};


/**
 * optional google.protobuf.Timestamp completion_time = 35;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getCompletionTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 35));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setCompletionTime = function(value) {
  return jspb.Message.setWrapperField(this, 35, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.clearCompletionTime = function() {
  return this.setCompletionTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.hasCompletionTime = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional string exchange = 36;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 36, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setExchange = function(value) {
  return jspb.Message.setProto3StringField(this, 36, value);
};


/**
 * optional string instrument_uid = 41;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 41, value);
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
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.toObject = function(includeInstance, msg) {
  var f, obj = {
stopOrderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
accountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
direction: jspb.Message.getFieldWithDefault(msg, 4, 0),
price: (f = msg.getPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
stopPrice: (f = msg.getStopPrice()) && tinvest_common_pb.MoneyValue.toObject(includeInstance, f),
orderType: jspb.Message.getFieldWithDefault(msg, 7, 0),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 8, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 9, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 10, ""),
status: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState;
  return proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStopOrderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 5:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 6:
      var value = new tinvest_common_pb.MoneyValue;
      reader.readMessage(value,tinvest_common_pb.MoneyValue.deserializeBinaryFromReader);
      msg.setStopPrice(value);
      break;
    case 7:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderType} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    case 11:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.StopOrderStatusOption} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStopOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
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
  f = message.getStopPrice();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      tinvest_common_pb.MoneyValue.serializeBinaryToWriter
    );
  }
  f = message.getOrderType();
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
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * optional string stop_order_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.getStopOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.setStopOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string account_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OrderDirection direction = 4;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.getDirection = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderDirection} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional MoneyValue price = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MoneyValue stop_price = 6;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.getStopPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.MoneyValue} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.MoneyValue, 6));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.MoneyValue|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.setStopPrice = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.clearStopPrice = function() {
  return this.setStopPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.hasStopPrice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional OrderType order_type = 7;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderType}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.getOrderType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string instrument_uid = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string ticker = 9;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string class_code = 10;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional StopOrderStatusOption status = 11;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.StopOrderStatusOption}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.getStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.StopOrderStatusOption} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.StopOrderStatusOption} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional OrderState order_state = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.getOrderState = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.OrderState|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.setOrderState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.clearOrderState = function() {
  return this.setOrderState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.hasOrderState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Ping ping = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Ping}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.getPing = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Ping} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Ping, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Ping|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.setPing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.clearPing = function() {
  return this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.hasPing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SubscriptionResponse subscription = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.getSubscription = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscriptionResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.setSubscription = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.clearSubscription = function() {
  return this.setSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.hasSubscription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StopOrderState stop_order_state = 4;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.getStopOrderState = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState, 4));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.StopOrderState|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.setStopOrderState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.clearStopOrderState = function() {
  return this.setStopOrderState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderStateStreamResponse.prototype.hasStopOrderState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderDirection = {
  ORDER_DIRECTION_UNSPECIFIED: 0,
  ORDER_DIRECTION_BUY: 1,
  ORDER_DIRECTION_SELL: 2
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderType = {
  ORDER_TYPE_UNSPECIFIED: 0,
  ORDER_TYPE_LIMIT: 1,
  ORDER_TYPE_MARKET: 2,
  ORDER_TYPE_BESTPRICE: 3
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderExecutionReportStatus = {
  EXECUTION_REPORT_STATUS_UNSPECIFIED: 0,
  EXECUTION_REPORT_STATUS_FILL: 1,
  EXECUTION_REPORT_STATUS_REJECTED: 2,
  EXECUTION_REPORT_STATUS_CANCELLED: 3,
  EXECUTION_REPORT_STATUS_NEW: 4,
  EXECUTION_REPORT_STATUS_PARTIALLYFILL: 5
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.TimeInForceType = {
  TIME_IN_FORCE_UNSPECIFIED: 0,
  TIME_IN_FORCE_DAY: 1,
  TIME_IN_FORCE_FILL_AND_KILL: 2,
  TIME_IN_FORCE_FILL_OR_KILL: 3
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderIdType = {
  ORDER_ID_TYPE_UNSPECIFIED: 0,
  ORDER_ID_TYPE_EXCHANGE: 1,
  ORDER_ID_TYPE_REQUEST: 2
};

goog.object.extend(exports, proto.tinkoff.public.invest.api.contract.v1);
