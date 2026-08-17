// source: tinvest/marketdata.proto
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
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.Candle', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.CandleInstrument', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.CandleInterval', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.CandleSource', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.CandleSubscription', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.IndicatorInterval', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.IndicatorType', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.TypeOfPrice', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.HistoricCandle', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.InfoInstrument', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.InfoSubscription', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.LastPrice', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.LastPriceType', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.PayloadCase', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.PayloadCase', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.MarketValue', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.MarketValueType', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OpenInterest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.Order', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderBook', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.OrderBookType', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.Trade', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.TradeDirection', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.TradeInstrument', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.TradeSourceType', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.TradeSubscription', null, global);
goog.exportSymbol('proto.tinkoff.public.invest.api.contract.v1.TradingStatus', null, global);
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
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.oneofGroups_);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest';
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
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest';
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
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse';
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest';
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
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.CandleInstrument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.displayName = 'proto.tinkoff.public.invest.api.contract.v1.CandleInstrument';
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse';
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
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.CandleSubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.displayName = 'proto.tinkoff.public.invest.api.contract.v1.CandleSubscription';
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest';
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
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument';
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse';
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
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription';
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest';
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
proto.tinkoff.public.invest.api.contract.v1.TradeInstrument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.TradeInstrument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.displayName = 'proto.tinkoff.public.invest.api.contract.v1.TradeInstrument';
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse';
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
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.TradeSubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.displayName = 'proto.tinkoff.public.invest.api.contract.v1.TradeSubscription';
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest';
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
proto.tinkoff.public.invest.api.contract.v1.InfoInstrument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.InfoInstrument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.displayName = 'proto.tinkoff.public.invest.api.contract.v1.InfoInstrument';
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse';
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
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.InfoSubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.displayName = 'proto.tinkoff.public.invest.api.contract.v1.InfoSubscription';
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest';
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
proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.displayName = 'proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument';
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse';
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
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.displayName = 'proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription';
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
proto.tinkoff.public.invest.api.contract.v1.Candle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.Candle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.Candle.displayName = 'proto.tinkoff.public.invest.api.contract.v1.Candle';
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
proto.tinkoff.public.invest.api.contract.v1.OrderBook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.OrderBook.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OrderBook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OrderBook.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OrderBook';
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
proto.tinkoff.public.invest.api.contract.v1.Order = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.Order, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.Order.displayName = 'proto.tinkoff.public.invest.api.contract.v1.Order';
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
proto.tinkoff.public.invest.api.contract.v1.Trade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.Trade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.Trade.displayName = 'proto.tinkoff.public.invest.api.contract.v1.Trade';
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
proto.tinkoff.public.invest.api.contract.v1.TradingStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.TradingStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.TradingStatus.displayName = 'proto.tinkoff.public.invest.api.contract.v1.TradingStatus';
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
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse';
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
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.HistoricCandle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.displayName = 'proto.tinkoff.public.invest.api.contract.v1.HistoricCandle';
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
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse';
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
proto.tinkoff.public.invest.api.contract.v1.LastPrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.LastPrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.LastPrice.displayName = 'proto.tinkoff.public.invest.api.contract.v1.LastPrice';
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
proto.tinkoff.public.invest.api.contract.v1.OpenInterest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.OpenInterest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.OpenInterest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.OpenInterest';
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse';
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
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse';
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
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse';
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
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse';
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
proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions';
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
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest';
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
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse';
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
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse';
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing';
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation';
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse';
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem';
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
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest';
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
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.displayName = 'proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse';
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
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.repeatedFields_, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.displayName = 'proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument';
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
proto.tinkoff.public.invest.api.contract.v1.MarketValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tinkoff.public.invest.api.contract.v1.MarketValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tinkoff.public.invest.api.contract.v1.MarketValue.displayName = 'proto.tinkoff.public.invest.api.contract.v1.MarketValue';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.oneofGroups_ = [[1,2,3,4,5,6,7,15]];

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  SUBSCRIBE_CANDLES_REQUEST: 1,
  SUBSCRIBE_ORDER_BOOK_REQUEST: 2,
  SUBSCRIBE_TRADES_REQUEST: 3,
  SUBSCRIBE_INFO_REQUEST: 4,
  SUBSCRIBE_LAST_PRICE_REQUEST: 5,
  GET_MY_SUBSCRIPTIONS: 6,
  PING: 7,
  PING_SETTINGS: 15
};

/**
 * @return {proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.PayloadCase}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.getPayloadCase = function() {
  return /** @type {proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.oneofGroups_[0]));
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
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
subscribeCandlesRequest: (f = msg.getSubscribeCandlesRequest()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.toObject(includeInstance, f),
subscribeOrderBookRequest: (f = msg.getSubscribeOrderBookRequest()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.toObject(includeInstance, f),
subscribeTradesRequest: (f = msg.getSubscribeTradesRequest()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.toObject(includeInstance, f),
subscribeInfoRequest: (f = msg.getSubscribeInfoRequest()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.toObject(includeInstance, f),
subscribeLastPriceRequest: (f = msg.getSubscribeLastPriceRequest()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.toObject(includeInstance, f),
getMySubscriptions: (f = msg.getGetMySubscriptions()) && proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.toObject(includeInstance, f),
ping: (f = msg.getPing()) && tinvest_common_pb.PingRequest.toObject(includeInstance, f),
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest;
  return proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.deserializeBinaryFromReader);
      msg.setSubscribeCandlesRequest(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.deserializeBinaryFromReader);
      msg.setSubscribeOrderBookRequest(value);
      break;
    case 3:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.deserializeBinaryFromReader);
      msg.setSubscribeTradesRequest(value);
      break;
    case 4:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.deserializeBinaryFromReader);
      msg.setSubscribeInfoRequest(value);
      break;
    case 5:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.deserializeBinaryFromReader);
      msg.setSubscribeLastPriceRequest(value);
      break;
    case 6:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.deserializeBinaryFromReader);
      msg.setGetMySubscriptions(value);
      break;
    case 7:
      var value = new tinvest_common_pb.PingRequest;
      reader.readMessage(value,tinvest_common_pb.PingRequest.deserializeBinaryFromReader);
      msg.setPing(value);
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
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscribeCandlesRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeOrderBookRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeTradesRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeInfoRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeLastPriceRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetMySubscriptions();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      tinvest_common_pb.PingRequest.serializeBinaryToWriter
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
 * optional SubscribeCandlesRequest subscribe_candles_request = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.getSubscribeCandlesRequest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.setSubscribeCandlesRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.clearSubscribeCandlesRequest = function() {
  return this.setSubscribeCandlesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.hasSubscribeCandlesRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SubscribeOrderBookRequest subscribe_order_book_request = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.getSubscribeOrderBookRequest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.setSubscribeOrderBookRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.clearSubscribeOrderBookRequest = function() {
  return this.setSubscribeOrderBookRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.hasSubscribeOrderBookRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SubscribeTradesRequest subscribe_trades_request = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.getSubscribeTradesRequest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.setSubscribeTradesRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.clearSubscribeTradesRequest = function() {
  return this.setSubscribeTradesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.hasSubscribeTradesRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SubscribeInfoRequest subscribe_info_request = 4;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.getSubscribeInfoRequest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest, 4));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.setSubscribeInfoRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.clearSubscribeInfoRequest = function() {
  return this.setSubscribeInfoRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.hasSubscribeInfoRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SubscribeLastPriceRequest subscribe_last_price_request = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.getSubscribeLastPriceRequest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.setSubscribeLastPriceRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.clearSubscribeLastPriceRequest = function() {
  return this.setSubscribeLastPriceRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.hasSubscribeLastPriceRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional GetMySubscriptions get_my_subscriptions = 6;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.getGetMySubscriptions = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions, 6));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.setGetMySubscriptions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.clearGetMySubscriptions = function() {
  return this.setGetMySubscriptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.hasGetMySubscriptions = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PingRequest ping = 7;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.PingRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.getPing = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.PingRequest} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.PingRequest, 7));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.PingRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.setPing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.clearPing = function() {
  return this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.hasPing = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PingDelaySettings ping_settings = 15;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.getPingSettings = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.PingDelaySettings, 15));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.setPingSettings = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.clearPingSettings = function() {
  return this.setPingSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataRequest.prototype.hasPingSettings = function() {
  return jspb.Message.getField(this, 15) != null;
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
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
subscribeCandlesRequest: (f = msg.getSubscribeCandlesRequest()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.toObject(includeInstance, f),
subscribeOrderBookRequest: (f = msg.getSubscribeOrderBookRequest()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.toObject(includeInstance, f),
subscribeTradesRequest: (f = msg.getSubscribeTradesRequest()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.toObject(includeInstance, f),
subscribeInfoRequest: (f = msg.getSubscribeInfoRequest()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.toObject(includeInstance, f),
subscribeLastPriceRequest: (f = msg.getSubscribeLastPriceRequest()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.toObject(includeInstance, f),
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest;
  return proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.deserializeBinaryFromReader);
      msg.setSubscribeCandlesRequest(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.deserializeBinaryFromReader);
      msg.setSubscribeOrderBookRequest(value);
      break;
    case 3:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.deserializeBinaryFromReader);
      msg.setSubscribeTradesRequest(value);
      break;
    case 4:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.deserializeBinaryFromReader);
      msg.setSubscribeInfoRequest(value);
      break;
    case 5:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.deserializeBinaryFromReader);
      msg.setSubscribeLastPriceRequest(value);
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
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscribeCandlesRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeOrderBookRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeTradesRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeInfoRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeLastPriceRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.serializeBinaryToWriter
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
 * optional SubscribeCandlesRequest subscribe_candles_request = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.getSubscribeCandlesRequest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.setSubscribeCandlesRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.clearSubscribeCandlesRequest = function() {
  return this.setSubscribeCandlesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.hasSubscribeCandlesRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SubscribeOrderBookRequest subscribe_order_book_request = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.getSubscribeOrderBookRequest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.setSubscribeOrderBookRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.clearSubscribeOrderBookRequest = function() {
  return this.setSubscribeOrderBookRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.hasSubscribeOrderBookRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SubscribeTradesRequest subscribe_trades_request = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.getSubscribeTradesRequest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.setSubscribeTradesRequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.clearSubscribeTradesRequest = function() {
  return this.setSubscribeTradesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.hasSubscribeTradesRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SubscribeInfoRequest subscribe_info_request = 4;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.getSubscribeInfoRequest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest, 4));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.setSubscribeInfoRequest = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.clearSubscribeInfoRequest = function() {
  return this.setSubscribeInfoRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.hasSubscribeInfoRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SubscribeLastPriceRequest subscribe_last_price_request = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.getSubscribeLastPriceRequest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.setSubscribeLastPriceRequest = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.clearSubscribeLastPriceRequest = function() {
  return this.setSubscribeLastPriceRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.hasSubscribeLastPriceRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PingDelaySettings ping_settings = 15;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.getPingSettings = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.PingDelaySettings, 15));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.PingDelaySettings|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.setPingSettings = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.clearPingSettings = function() {
  return this.setPingSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest.prototype.hasPingSettings = function() {
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
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12]];

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  SUBSCRIBE_CANDLES_RESPONSE: 1,
  SUBSCRIBE_ORDER_BOOK_RESPONSE: 2,
  SUBSCRIBE_TRADES_RESPONSE: 3,
  SUBSCRIBE_INFO_RESPONSE: 4,
  CANDLE: 5,
  TRADE: 6,
  ORDERBOOK: 7,
  TRADING_STATUS: 8,
  PING: 9,
  SUBSCRIBE_LAST_PRICE_RESPONSE: 10,
  LAST_PRICE: 11,
  OPEN_INTEREST: 12
};

/**
 * @return {proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.PayloadCase}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0]));
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
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
subscribeCandlesResponse: (f = msg.getSubscribeCandlesResponse()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.toObject(includeInstance, f),
subscribeOrderBookResponse: (f = msg.getSubscribeOrderBookResponse()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.toObject(includeInstance, f),
subscribeTradesResponse: (f = msg.getSubscribeTradesResponse()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.toObject(includeInstance, f),
subscribeInfoResponse: (f = msg.getSubscribeInfoResponse()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.toObject(includeInstance, f),
candle: (f = msg.getCandle()) && proto.tinkoff.public.invest.api.contract.v1.Candle.toObject(includeInstance, f),
trade: (f = msg.getTrade()) && proto.tinkoff.public.invest.api.contract.v1.Trade.toObject(includeInstance, f),
orderbook: (f = msg.getOrderbook()) && proto.tinkoff.public.invest.api.contract.v1.OrderBook.toObject(includeInstance, f),
tradingStatus: (f = msg.getTradingStatus()) && proto.tinkoff.public.invest.api.contract.v1.TradingStatus.toObject(includeInstance, f),
ping: (f = msg.getPing()) && tinvest_common_pb.Ping.toObject(includeInstance, f),
subscribeLastPriceResponse: (f = msg.getSubscribeLastPriceResponse()) && proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.toObject(includeInstance, f),
lastPrice: (f = msg.getLastPrice()) && proto.tinkoff.public.invest.api.contract.v1.LastPrice.toObject(includeInstance, f),
openInterest: (f = msg.getOpenInterest()) && proto.tinkoff.public.invest.api.contract.v1.OpenInterest.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse;
  return proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.deserializeBinaryFromReader);
      msg.setSubscribeCandlesResponse(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.deserializeBinaryFromReader);
      msg.setSubscribeOrderBookResponse(value);
      break;
    case 3:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.deserializeBinaryFromReader);
      msg.setSubscribeTradesResponse(value);
      break;
    case 4:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.deserializeBinaryFromReader);
      msg.setSubscribeInfoResponse(value);
      break;
    case 5:
      var value = new proto.tinkoff.public.invest.api.contract.v1.Candle;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.Candle.deserializeBinaryFromReader);
      msg.setCandle(value);
      break;
    case 6:
      var value = new proto.tinkoff.public.invest.api.contract.v1.Trade;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.Trade.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    case 7:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OrderBook;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OrderBook.deserializeBinaryFromReader);
      msg.setOrderbook(value);
      break;
    case 8:
      var value = new proto.tinkoff.public.invest.api.contract.v1.TradingStatus;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.TradingStatus.deserializeBinaryFromReader);
      msg.setTradingStatus(value);
      break;
    case 9:
      var value = new tinvest_common_pb.Ping;
      reader.readMessage(value,tinvest_common_pb.Ping.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    case 10:
      var value = new proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.deserializeBinaryFromReader);
      msg.setSubscribeLastPriceResponse(value);
      break;
    case 11:
      var value = new proto.tinkoff.public.invest.api.contract.v1.LastPrice;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.LastPrice.deserializeBinaryFromReader);
      msg.setLastPrice(value);
      break;
    case 12:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OpenInterest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OpenInterest.deserializeBinaryFromReader);
      msg.setOpenInterest(value);
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
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscribeCandlesResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeOrderBookResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeTradesResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeInfoResponse();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.serializeBinaryToWriter
    );
  }
  f = message.getCandle();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tinkoff.public.invest.api.contract.v1.Candle.serializeBinaryToWriter
    );
  }
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.tinkoff.public.invest.api.contract.v1.Trade.serializeBinaryToWriter
    );
  }
  f = message.getOrderbook();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OrderBook.serializeBinaryToWriter
    );
  }
  f = message.getTradingStatus();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.tinkoff.public.invest.api.contract.v1.TradingStatus.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      tinvest_common_pb.Ping.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeLastPriceResponse();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.serializeBinaryToWriter
    );
  }
  f = message.getLastPrice();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.tinkoff.public.invest.api.contract.v1.LastPrice.serializeBinaryToWriter
    );
  }
  f = message.getOpenInterest();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OpenInterest.serializeBinaryToWriter
    );
  }
};


/**
 * optional SubscribeCandlesResponse subscribe_candles_response = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getSubscribeCandlesResponse = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.setSubscribeCandlesResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.clearSubscribeCandlesResponse = function() {
  return this.setSubscribeCandlesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.hasSubscribeCandlesResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SubscribeOrderBookResponse subscribe_order_book_response = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getSubscribeOrderBookResponse = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.setSubscribeOrderBookResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.clearSubscribeOrderBookResponse = function() {
  return this.setSubscribeOrderBookResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.hasSubscribeOrderBookResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SubscribeTradesResponse subscribe_trades_response = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getSubscribeTradesResponse = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.setSubscribeTradesResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.clearSubscribeTradesResponse = function() {
  return this.setSubscribeTradesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.hasSubscribeTradesResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SubscribeInfoResponse subscribe_info_response = 4;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getSubscribeInfoResponse = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse, 4));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.setSubscribeInfoResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.clearSubscribeInfoResponse = function() {
  return this.setSubscribeInfoResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.hasSubscribeInfoResponse = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Candle candle = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Candle}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getCandle = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Candle} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.Candle, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Candle|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.setCandle = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.clearCandle = function() {
  return this.setCandle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.hasCandle = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Trade trade = 6;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Trade}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getTrade = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Trade} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.Trade, 6));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Trade|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.setTrade = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional OrderBook orderbook = 7;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.OrderBook}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getOrderbook = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.OrderBook} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OrderBook, 7));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.OrderBook|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.setOrderbook = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.clearOrderbook = function() {
  return this.setOrderbook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.hasOrderbook = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TradingStatus trading_status = 8;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.TradingStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getTradingStatus = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.TradingStatus} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.TradingStatus, 8));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.TradingStatus|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.setTradingStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.clearTradingStatus = function() {
  return this.setTradingStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.hasTradingStatus = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Ping ping = 9;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Ping}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getPing = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Ping} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Ping, 9));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Ping|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.setPing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.clearPing = function() {
  return this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.hasPing = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional SubscribeLastPriceResponse subscribe_last_price_response = 10;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getSubscribeLastPriceResponse = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse, 10));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.setSubscribeLastPriceResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.clearSubscribeLastPriceResponse = function() {
  return this.setSubscribeLastPriceResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.hasSubscribeLastPriceResponse = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional LastPrice last_price = 11;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.LastPrice}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getLastPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.LastPrice} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.LastPrice, 11));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.LastPrice|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.setLastPrice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.clearLastPrice = function() {
  return this.setLastPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.hasLastPrice = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional OpenInterest open_interest = 12;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.OpenInterest}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.getOpenInterest = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.OpenInterest} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OpenInterest, 12));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.OpenInterest|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.setOpenInterest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.clearOpenInterest = function() {
  return this.setOpenInterest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketDataResponse.prototype.hasOpenInterest = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.repeatedFields_ = [2];



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
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
subscriptionAction: jspb.Message.getFieldWithDefault(msg, 1, 0),
instrumentsList: jspb.Message.toObjectList(msg.getInstrumentsList(),
    proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.toObject, includeInstance),
waitingClose: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
candleSourceType: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest;
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (reader.readEnum());
      msg.setSubscriptionAction(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.CandleInstrument;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.deserializeBinaryFromReader);
      msg.addInstruments(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWaitingClose(value);
      break;
    case 9:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource} */ (reader.readEnum());
      msg.setCandleSourceType(value);
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptionAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getInstrumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.serializeBinaryToWriter
    );
  }
  f = message.getWaitingClose();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional SubscriptionAction subscription_action = 1;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.getSubscriptionAction = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.setSubscriptionAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated CandleInstrument instruments = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument>}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.getInstrumentsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.CandleInstrument, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.setInstrumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.addInstruments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.CandleInstrument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.clearInstrumentsList = function() {
  return this.setInstrumentsList([]);
};


/**
 * optional bool waiting_close = 3;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.getWaitingClose = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.setWaitingClose = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional GetCandlesRequest.CandleSource candle_source_type = 9;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.getCandleSourceType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.setCandleSourceType = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.clearCandleSourceType = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesRequest.prototype.hasCandleSourceType = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
interval: jspb.Message.getFieldWithDefault(msg, 2, 0),
instrumentId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.CandleInstrument;
  return proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval} */ (reader.readEnum());
      msg.setInterval(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentId(value);
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
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getInstrumentId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SubscriptionInterval interval = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.prototype.getInterval = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.prototype.setInterval = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string instrument_id = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleInstrument.prototype.setInstrumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.repeatedFields_ = [2];



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
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
trackingId: jspb.Message.getFieldWithDefault(msg, 1, ""),
candlesSubscriptionsList: jspb.Message.toObjectList(msg.getCandlesSubscriptionsList(),
    proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse;
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tinkoff.public.invest.api.contract.v1.CandleSubscription;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.deserializeBinaryFromReader);
      msg.addCandlesSubscriptions(value);
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackingId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCandlesSubscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tracking_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.prototype.getTrackingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.prototype.setTrackingId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated CandleSubscription candles_subscriptions = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription>}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.prototype.getCandlesSubscriptionsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.CandleSubscription, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.prototype.setCandlesSubscriptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.prototype.addCandlesSubscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.CandleSubscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeCandlesResponse.prototype.clearCandlesSubscriptionsList = function() {
  return this.setCandlesSubscriptionsList([]);
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
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
interval: jspb.Message.getFieldWithDefault(msg, 2, 0),
subscriptionStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 4, ""),
waitingClose: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
streamId: jspb.Message.getFieldWithDefault(msg, 6, ""),
subscriptionId: jspb.Message.getFieldWithDefault(msg, 7, ""),
subscriptionAction: jspb.Message.getFieldWithDefault(msg, 8, 0),
candleSourceType: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
ticker: jspb.Message.getFieldWithDefault(msg, 10, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.CandleSubscription;
  return proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval} */ (reader.readEnum());
      msg.setInterval(value);
      break;
    case 3:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} */ (reader.readEnum());
      msg.setSubscriptionStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWaitingClose(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    case 8:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (reader.readEnum());
      msg.setSubscriptionAction(value);
      break;
    case 9:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource} */ (reader.readEnum());
      msg.setCandleSourceType(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 11:
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
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSubscriptionStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWaitingClose();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getStreamId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSubscriptionAction();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
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
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SubscriptionInterval interval = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.getInterval = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.setInterval = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SubscriptionStatus subscription_status = 3;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.getSubscriptionStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.setSubscriptionStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string instrument_uid = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool waiting_close = 5;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.getWaitingClose = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.setWaitingClose = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string stream_id = 6;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.getStreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string subscription_id = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional SubscriptionAction subscription_action = 8;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.getSubscriptionAction = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.setSubscriptionAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional GetCandlesRequest.CandleSource candle_source_type = 9;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.getCandleSourceType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.setCandleSourceType = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.clearCandleSourceType = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.hasCandleSourceType = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string ticker = 10;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string class_code = 11;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSubscription.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.repeatedFields_ = [2];



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
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
subscriptionAction: jspb.Message.getFieldWithDefault(msg, 1, 0),
instrumentsList: jspb.Message.toObjectList(msg.getInstrumentsList(),
    proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest;
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (reader.readEnum());
      msg.setSubscriptionAction(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.deserializeBinaryFromReader);
      msg.addInstruments(value);
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptionAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getInstrumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.serializeBinaryToWriter
    );
  }
};


/**
 * optional SubscriptionAction subscription_action = 1;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.prototype.getSubscriptionAction = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.prototype.setSubscriptionAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated OrderBookInstrument instruments = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument>}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.prototype.getInstrumentsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.prototype.setInstrumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.prototype.addInstruments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookRequest.prototype.clearInstrumentsList = function() {
  return this.setInstrumentsList([]);
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
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
depth: jspb.Message.getFieldWithDefault(msg, 2, 0),
instrumentId: jspb.Message.getFieldWithDefault(msg, 3, ""),
orderBookType: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument;
  return proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDepth(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentId(value);
      break;
    case 4:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderBookType} */ (reader.readEnum());
      msg.setOrderBookType(value);
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
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDepth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getInstrumentId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrderBookType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 depth = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.prototype.getDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.prototype.setDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string instrument_id = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.prototype.setInstrumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional OrderBookType order_book_type = 4;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookType}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.prototype.getOrderBookType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderBookType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBookType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookInstrument.prototype.setOrderBookType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.repeatedFields_ = [2];



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
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
trackingId: jspb.Message.getFieldWithDefault(msg, 1, ""),
orderBookSubscriptionsList: jspb.Message.toObjectList(msg.getOrderBookSubscriptionsList(),
    proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse;
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.deserializeBinaryFromReader);
      msg.addOrderBookSubscriptions(value);
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackingId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrderBookSubscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tracking_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.prototype.getTrackingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.prototype.setTrackingId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated OrderBookSubscription order_book_subscriptions = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription>}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.prototype.getOrderBookSubscriptionsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.prototype.setOrderBookSubscriptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.prototype.addOrderBookSubscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeOrderBookResponse.prototype.clearOrderBookSubscriptionsList = function() {
  return this.setOrderBookSubscriptionsList([]);
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
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
depth: jspb.Message.getFieldWithDefault(msg, 2, 0),
subscriptionStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 4, ""),
streamId: jspb.Message.getFieldWithDefault(msg, 5, ""),
subscriptionId: jspb.Message.getFieldWithDefault(msg, 6, ""),
orderBookType: jspb.Message.getFieldWithDefault(msg, 7, 0),
subscriptionAction: jspb.Message.getFieldWithDefault(msg, 8, 0),
ticker: jspb.Message.getFieldWithDefault(msg, 9, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription;
  return proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDepth(value);
      break;
    case 3:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} */ (reader.readEnum());
      msg.setSubscriptionStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    case 7:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderBookType} */ (reader.readEnum());
      msg.setOrderBookType(value);
      break;
    case 8:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (reader.readEnum());
      msg.setSubscriptionAction(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 10:
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
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDepth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSubscriptionStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStreamId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOrderBookType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getSubscriptionAction();
  if (f !== 0.0) {
    writer.writeEnum(
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
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 depth = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.getDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.setDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional SubscriptionStatus subscription_status = 3;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.getSubscriptionStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.setSubscriptionStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string instrument_uid = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string stream_id = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.getStreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string subscription_id = 6;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional OrderBookType order_book_type = 7;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookType}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.getOrderBookType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderBookType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBookType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.setOrderBookType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional SubscriptionAction subscription_action = 8;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.getSubscriptionAction = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.setSubscriptionAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string ticker = 9;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string class_code = 10;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookSubscription.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.repeatedFields_ = [2];



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
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
subscriptionAction: jspb.Message.getFieldWithDefault(msg, 1, 0),
instrumentsList: jspb.Message.toObjectList(msg.getInstrumentsList(),
    proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.toObject, includeInstance),
tradeSource: jspb.Message.getFieldWithDefault(msg, 3, 0),
withOpenInterest: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest;
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (reader.readEnum());
      msg.setSubscriptionAction(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.TradeInstrument;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.deserializeBinaryFromReader);
      msg.addInstruments(value);
      break;
    case 3:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType} */ (reader.readEnum());
      msg.setTradeSource(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithOpenInterest(value);
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptionAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getInstrumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.serializeBinaryToWriter
    );
  }
  f = message.getTradeSource();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getWithOpenInterest();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional SubscriptionAction subscription_action = 1;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.prototype.getSubscriptionAction = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.prototype.setSubscriptionAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated TradeInstrument instruments = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.TradeInstrument>}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.prototype.getInstrumentsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.TradeInstrument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.TradeInstrument, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.TradeInstrument>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.prototype.setInstrumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeInstrument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.prototype.addInstruments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.TradeInstrument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.prototype.clearInstrumentsList = function() {
  return this.setInstrumentsList([]);
};


/**
 * optional TradeSourceType trade_source = 3;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.prototype.getTradeSource = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.prototype.setTradeSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool with_open_interest = 4;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.prototype.getWithOpenInterest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesRequest.prototype.setWithOpenInterest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeInstrument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
instrumentId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.TradeInstrument;
  return proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeInstrument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setInstrumentId(value);
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
proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeInstrument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
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
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string instrument_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradeInstrument.prototype.setInstrumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.repeatedFields_ = [2];



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
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
trackingId: jspb.Message.getFieldWithDefault(msg, 1, ""),
tradeSubscriptionsList: jspb.Message.toObjectList(msg.getTradeSubscriptionsList(),
    proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.toObject, includeInstance),
tradeSource: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse;
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tinkoff.public.invest.api.contract.v1.TradeSubscription;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.deserializeBinaryFromReader);
      msg.addTradeSubscriptions(value);
      break;
    case 3:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType} */ (reader.readEnum());
      msg.setTradeSource(value);
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackingId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTradeSubscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.serializeBinaryToWriter
    );
  }
  f = message.getTradeSource();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string tracking_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.prototype.getTrackingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.prototype.setTrackingId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated TradeSubscription trade_subscriptions = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription>}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.prototype.getTradeSubscriptionsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.TradeSubscription, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.prototype.setTradeSubscriptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.prototype.addTradeSubscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.TradeSubscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.prototype.clearTradeSubscriptionsList = function() {
  return this.setTradeSubscriptionsList([]);
};


/**
 * optional TradeSourceType trade_source = 3;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.prototype.getTradeSource = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeTradesResponse.prototype.setTradeSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
subscriptionStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 3, ""),
streamId: jspb.Message.getFieldWithDefault(msg, 4, ""),
subscriptionId: jspb.Message.getFieldWithDefault(msg, 5, ""),
withOpenInterest: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
subscriptionAction: jspb.Message.getFieldWithDefault(msg, 7, 0),
ticker: jspb.Message.getFieldWithDefault(msg, 8, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.TradeSubscription;
  return proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} */ (reader.readEnum());
      msg.setSubscriptionStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithOpenInterest(value);
      break;
    case 7:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (reader.readEnum());
      msg.setSubscriptionAction(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 9:
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
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      3,
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
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWithOpenInterest();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getSubscriptionAction();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SubscriptionStatus subscription_status = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.getSubscriptionStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.setSubscriptionStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string instrument_uid = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string stream_id = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.getStreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string subscription_id = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool with_open_interest = 6;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.getWithOpenInterest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.setWithOpenInterest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional SubscriptionAction subscription_action = 7;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.getSubscriptionAction = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.setSubscriptionAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string ticker = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string class_code = 9;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSubscription.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.repeatedFields_ = [2];



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
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
subscriptionAction: jspb.Message.getFieldWithDefault(msg, 1, 0),
instrumentsList: jspb.Message.toObjectList(msg.getInstrumentsList(),
    proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest;
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (reader.readEnum());
      msg.setSubscriptionAction(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.InfoInstrument;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.deserializeBinaryFromReader);
      msg.addInstruments(value);
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptionAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getInstrumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.serializeBinaryToWriter
    );
  }
};


/**
 * optional SubscriptionAction subscription_action = 1;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.prototype.getSubscriptionAction = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.prototype.setSubscriptionAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated InfoInstrument instruments = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.InfoInstrument>}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.prototype.getInstrumentsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.InfoInstrument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.InfoInstrument, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.InfoInstrument>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.prototype.setInstrumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InfoInstrument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.prototype.addInstruments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.InfoInstrument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoRequest.prototype.clearInstrumentsList = function() {
  return this.setInstrumentsList([]);
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
proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InfoInstrument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
instrumentId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.InfoInstrument;
  return proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InfoInstrument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setInstrumentId(value);
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
proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InfoInstrument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
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
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string instrument_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InfoInstrument.prototype.setInstrumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.repeatedFields_ = [2];



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
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
trackingId: jspb.Message.getFieldWithDefault(msg, 1, ""),
infoSubscriptionsList: jspb.Message.toObjectList(msg.getInfoSubscriptionsList(),
    proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse;
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tinkoff.public.invest.api.contract.v1.InfoSubscription;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.deserializeBinaryFromReader);
      msg.addInfoSubscriptions(value);
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackingId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInfoSubscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tracking_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.prototype.getTrackingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.prototype.setTrackingId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated InfoSubscription info_subscriptions = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription>}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.prototype.getInfoSubscriptionsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.InfoSubscription, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.prototype.setInfoSubscriptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.prototype.addInfoSubscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.InfoSubscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeInfoResponse.prototype.clearInfoSubscriptionsList = function() {
  return this.setInfoSubscriptionsList([]);
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
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
subscriptionStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 3, ""),
streamId: jspb.Message.getFieldWithDefault(msg, 4, ""),
subscriptionId: jspb.Message.getFieldWithDefault(msg, 5, ""),
subscriptionAction: jspb.Message.getFieldWithDefault(msg, 6, 0),
ticker: jspb.Message.getFieldWithDefault(msg, 7, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.InfoSubscription;
  return proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} */ (reader.readEnum());
      msg.setSubscriptionStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    case 6:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (reader.readEnum());
      msg.setSubscriptionAction(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 8:
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
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      3,
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
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSubscriptionAction();
  if (f !== 0.0) {
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
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SubscriptionStatus subscription_status = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.getSubscriptionStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.setSubscriptionStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string instrument_uid = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string stream_id = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.getStreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string subscription_id = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional SubscriptionAction subscription_action = 6;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.getSubscriptionAction = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.setSubscriptionAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string ticker = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string class_code = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InfoSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InfoSubscription.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.repeatedFields_ = [2];



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
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
subscriptionAction: jspb.Message.getFieldWithDefault(msg, 1, 0),
instrumentsList: jspb.Message.toObjectList(msg.getInstrumentsList(),
    proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest;
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (reader.readEnum());
      msg.setSubscriptionAction(value);
      break;
    case 2:
      var value = new proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.deserializeBinaryFromReader);
      msg.addInstruments(value);
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptionAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getInstrumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.serializeBinaryToWriter
    );
  }
};


/**
 * optional SubscriptionAction subscription_action = 1;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.prototype.getSubscriptionAction = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.prototype.setSubscriptionAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated LastPriceInstrument instruments = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument>}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.prototype.getInstrumentsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.prototype.setInstrumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.prototype.addInstruments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceRequest.prototype.clearInstrumentsList = function() {
  return this.setInstrumentsList([]);
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
proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
instrumentId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument;
  return proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setInstrumentId(value);
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
proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
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
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string instrument_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceInstrument.prototype.setInstrumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.repeatedFields_ = [2];



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
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
trackingId: jspb.Message.getFieldWithDefault(msg, 1, ""),
lastPriceSubscriptionsList: jspb.Message.toObjectList(msg.getLastPriceSubscriptionsList(),
    proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse;
  return proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.deserializeBinaryFromReader);
      msg.addLastPriceSubscriptions(value);
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
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackingId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastPriceSubscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tracking_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.prototype.getTrackingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.prototype.setTrackingId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated LastPriceSubscription last_price_subscriptions = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription>}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.prototype.getLastPriceSubscriptionsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.prototype.setLastPriceSubscriptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.prototype.addLastPriceSubscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.SubscribeLastPriceResponse.prototype.clearLastPriceSubscriptionsList = function() {
  return this.setLastPriceSubscriptionsList([]);
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
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
subscriptionStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 3, ""),
streamId: jspb.Message.getFieldWithDefault(msg, 4, ""),
subscriptionId: jspb.Message.getFieldWithDefault(msg, 5, ""),
subscriptionAction: jspb.Message.getFieldWithDefault(msg, 6, 0),
ticker: jspb.Message.getFieldWithDefault(msg, 7, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription;
  return proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} */ (reader.readEnum());
      msg.setSubscriptionStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    case 6:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (reader.readEnum());
      msg.setSubscriptionAction(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 8:
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
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      3,
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
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSubscriptionAction();
  if (f !== 0.0) {
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
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SubscriptionStatus subscription_status = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.getSubscriptionStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.setSubscriptionStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string instrument_uid = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string stream_id = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.getStreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.setStreamId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string subscription_id = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional SubscriptionAction subscription_action = 6;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.getSubscriptionAction = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.setSubscriptionAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string ticker = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string class_code = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceSubscription.prototype.setClassCode = function(value) {
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
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.Candle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Candle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
interval: jspb.Message.getFieldWithDefault(msg, 2, 0),
open: (f = msg.getOpen()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
high: (f = msg.getHigh()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
low: (f = msg.getLow()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
close: (f = msg.getClose()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
volume: jspb.Message.getFieldWithDefault(msg, 7, 0),
time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
lastTradeTs: (f = msg.getLastTradeTs()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 10, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 11, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 12, ""),
volumeBuy: jspb.Message.getFieldWithDefault(msg, 13, 0),
volumeSell: jspb.Message.getFieldWithDefault(msg, 14, 0),
candleSourceType: jspb.Message.getFieldWithDefault(msg, 19, 0)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.Candle;
  return proto.tinkoff.public.invest.api.contract.v1.Candle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Candle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval} */ (reader.readEnum());
      msg.setInterval(value);
      break;
    case 3:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setOpen(value);
      break;
    case 4:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setHigh(value);
      break;
    case 5:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setLow(value);
      break;
    case 6:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setClose(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastTradeTs(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolumeBuy(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolumeSell(value);
      break;
    case 19:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.CandleSource} */ (reader.readEnum());
      msg.setCandleSourceType(value);
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
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.Candle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Candle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getOpen();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getHigh();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getLow();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getClose();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastTradeTs();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getVolumeBuy();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getVolumeSell();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getCandleSourceType();
  if (f !== 0.0) {
    writer.writeEnum(
      19,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SubscriptionInterval interval = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getInterval = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setInterval = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Quotation open = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getOpen = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setOpen = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.clearOpen = function() {
  return this.setOpen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.hasOpen = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Quotation high = 4;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getHigh = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 4));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setHigh = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.clearHigh = function() {
  return this.setHigh(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.hasHigh = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Quotation low = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getLow = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setLow = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.clearLow = function() {
  return this.setLow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.hasLow = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Quotation close = 6;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getClose = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 6));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setClose = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.clearClose = function() {
  return this.setClose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.hasClose = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 volume = 7;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.hasTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp last_trade_ts = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getLastTradeTs = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setLastTradeTs = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.clearLastTradeTs = function() {
  return this.setLastTradeTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.hasLastTradeTs = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string instrument_uid = 10;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string ticker = 11;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string class_code = 12;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 volume_buy = 13;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getVolumeBuy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setVolumeBuy = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 volume_sell = 14;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getVolumeSell = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setVolumeSell = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional CandleSource candle_source_type = 19;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSource}
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.getCandleSourceType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.CandleSource} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CandleSource} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Candle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Candle.prototype.setCandleSourceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 19, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.repeatedFields_ = [4,5];



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
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OrderBook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
depth: jspb.Message.getFieldWithDefault(msg, 2, 0),
isConsistent: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
bidsList: jspb.Message.toObjectList(msg.getBidsList(),
    proto.tinkoff.public.invest.api.contract.v1.Order.toObject, includeInstance),
asksList: jspb.Message.toObjectList(msg.getAsksList(),
    proto.tinkoff.public.invest.api.contract.v1.Order.toObject, includeInstance),
time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
limitUp: (f = msg.getLimitUp()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
limitDown: (f = msg.getLimitDown()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 9, ""),
orderBookType: jspb.Message.getFieldWithDefault(msg, 10, 0),
ticker: jspb.Message.getFieldWithDefault(msg, 11, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OrderBook;
  return proto.tinkoff.public.invest.api.contract.v1.OrderBook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDepth(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsConsistent(value);
      break;
    case 4:
      var value = new proto.tinkoff.public.invest.api.contract.v1.Order;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.Order.deserializeBinaryFromReader);
      msg.addBids(value);
      break;
    case 5:
      var value = new proto.tinkoff.public.invest.api.contract.v1.Order;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.Order.deserializeBinaryFromReader);
      msg.addAsks(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 7:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setLimitUp(value);
      break;
    case 8:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setLimitDown(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 10:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderBookType} */ (reader.readEnum());
      msg.setOrderBookType(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 12:
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
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OrderBook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDepth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsConsistent();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getBidsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.tinkoff.public.invest.api.contract.v1.Order.serializeBinaryToWriter
    );
  }
  f = message.getAsksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.tinkoff.public.invest.api.contract.v1.Order.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLimitUp();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getLimitDown();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getOrderBookType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 depth = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.getDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.setDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool is_consistent = 3;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.getIsConsistent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.setIsConsistent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated Order bids = 4;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.Order>}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.getBidsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.Order, 4));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.Order>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.setBidsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Order}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.addBids = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.tinkoff.public.invest.api.contract.v1.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.clearBidsList = function() {
  return this.setBidsList([]);
};


/**
 * repeated Order asks = 5;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.Order>}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.getAsksList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.Order, 5));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.Order>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.setAsksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Order}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.addAsks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.tinkoff.public.invest.api.contract.v1.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.clearAsksList = function() {
  return this.setAsksList([]);
};


/**
 * optional google.protobuf.Timestamp time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.hasTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Quotation limit_up = 7;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.getLimitUp = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 7));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.setLimitUp = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.clearLimitUp = function() {
  return this.setLimitUp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.hasLimitUp = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Quotation limit_down = 8;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.getLimitDown = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 8));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.setLimitDown = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.clearLimitDown = function() {
  return this.setLimitDown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.hasLimitDown = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string instrument_uid = 9;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional OrderBookType order_book_type = 10;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBookType}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.getOrderBookType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.OrderBookType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OrderBookType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.setOrderBookType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string ticker = 11;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string class_code = 12;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OrderBook} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBook.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
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
proto.tinkoff.public.invest.api.contract.v1.Order.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.Order.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Order} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.Order.toObject = function(includeInstance, msg) {
  var f, obj = {
price: (f = msg.getPrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
quantity: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Order}
 */
proto.tinkoff.public.invest.api.contract.v1.Order.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.Order;
  return proto.tinkoff.public.invest.api.contract.v1.Order.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Order} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Order}
 */
proto.tinkoff.public.invest.api.contract.v1.Order.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 2:
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
proto.tinkoff.public.invest.api.contract.v1.Order.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.Order.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Order} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.Order.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional Quotation price = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.Order.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Order} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Order.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Order} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Order.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.Order.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 quantity = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.Order.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Order} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Order.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.Trade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Trade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
direction: jspb.Message.getFieldWithDefault(msg, 2, 0),
price: (f = msg.getPrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
quantity: jspb.Message.getFieldWithDefault(msg, 4, 0),
time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 6, ""),
tradeSource: jspb.Message.getFieldWithDefault(msg, 7, 0),
ticker: jspb.Message.getFieldWithDefault(msg, 8, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.Trade;
  return proto.tinkoff.public.invest.api.contract.v1.Trade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Trade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.TradeDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 3:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 7:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType} */ (reader.readEnum());
      msg.setTradeSource(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 9:
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
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.Trade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Trade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTradeSource();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TradeDirection direction = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeDirection}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.getDirection = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.TradeDirection} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeDirection} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Quotation price = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 quantity = 4;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.hasTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string instrument_uid = 6;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional TradeSourceType trade_source = 7;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.getTradeSource = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.setTradeSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string ticker = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string class_code = 9;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.Trade.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
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
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.TradingStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
tradingStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
limitOrderAvailableFlag: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
marketOrderAvailableFlag: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 6, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 7, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.TradingStatus;
  return proto.tinkoff.public.invest.api.contract.v1.TradingStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SecurityTradingStatus} */ (reader.readEnum());
      msg.setTradingStatus(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLimitOrderAvailableFlag(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMarketOrderAvailableFlag(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 8:
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
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.TradingStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTradingStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLimitOrderAvailableFlag();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMarketOrderAvailableFlag();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
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
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SecurityTradingStatus trading_status = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SecurityTradingStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.getTradingStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SecurityTradingStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SecurityTradingStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.setTradingStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool limit_order_available_flag = 4;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.getLimitOrderAvailableFlag = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.setLimitOrderAvailableFlag = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool market_order_available_flag = 5;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.getMarketOrderAvailableFlag = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.setMarketOrderAvailableFlag = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string instrument_uid = 6;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string ticker = 7;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string class_code = 8;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradingStatus} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.TradingStatus.prototype.setClassCode = function(value) {
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
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
interval: jspb.Message.getFieldWithDefault(msg, 4, 0),
instrumentId: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
candleSourceType: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
limit: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.CandleInterval} */ (reader.readEnum());
      msg.setInterval(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentId(value);
      break;
    case 7:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource} */ (reader.readEnum());
      msg.setCandleSourceType(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
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
  f = message.getInterval();
  if (f !== 0.0) {
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
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource = {
  CANDLE_SOURCE_UNSPECIFIED: 0,
  CANDLE_SOURCE_EXCHANGE: 1,
  CANDLE_SOURCE_INCLUDE_WEEKEND: 3
};

/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.setFigi = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.clearFigi = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.hasFigi = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp from = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp to = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CandleInterval interval = 4;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleInterval}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.getInterval = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.CandleInterval} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CandleInterval} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.setInterval = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string instrument_id = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.setInstrumentId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.clearInstrumentId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.hasInstrumentId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CandleSource candle_source_type = 7;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.getCandleSourceType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.CandleSource} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.setCandleSourceType = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.clearCandleSourceType = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.hasCandleSourceType = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 limit = 10;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.repeatedFields_ = [1];



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
proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
candlesList: jspb.Message.toObjectList(msg.getCandlesList(),
    proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.HistoricCandle;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.deserializeBinaryFromReader);
      msg.addCandles(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCandlesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.serializeBinaryToWriter
    );
  }
};


/**
 * repeated HistoricCandle candles = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.prototype.getCandlesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.HistoricCandle, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.prototype.setCandlesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle}
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.prototype.addCandles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.HistoricCandle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetCandlesResponse.prototype.clearCandlesList = function() {
  return this.setCandlesList([]);
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
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.toObject = function(includeInstance, msg) {
  var f, obj = {
open: (f = msg.getOpen()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
high: (f = msg.getHigh()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
low: (f = msg.getLow()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
close: (f = msg.getClose()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
volume: jspb.Message.getFieldWithDefault(msg, 5, 0),
time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
isComplete: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
candleSource: jspb.Message.getFieldWithDefault(msg, 9, 0),
volumeBuy: jspb.Message.getFieldWithDefault(msg, 10, 0),
volumeSell: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.HistoricCandle;
  return proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setOpen(value);
      break;
    case 2:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setHigh(value);
      break;
    case 3:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setLow(value);
      break;
    case 4:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setClose(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsComplete(value);
      break;
    case 9:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.CandleSource} */ (reader.readEnum());
      msg.setCandleSource(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolumeBuy(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolumeSell(value);
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
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpen();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getHigh();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getLow();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getClose();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIsComplete();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getCandleSource();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getVolumeBuy();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getVolumeSell();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * optional Quotation open = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.getOpen = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.setOpen = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.clearOpen = function() {
  return this.setOpen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.hasOpen = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Quotation high = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.getHigh = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.setHigh = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.clearHigh = function() {
  return this.setHigh(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.hasHigh = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Quotation low = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.getLow = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.setLow = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.clearLow = function() {
  return this.setLow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.hasLow = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Quotation close = 4;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.getClose = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 4));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.setClose = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.clearClose = function() {
  return this.setClose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.hasClose = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 volume = 5;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.hasTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_complete = 7;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.getIsComplete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.setIsComplete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional CandleSource candle_source = 9;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.CandleSource}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.getCandleSource = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.CandleSource} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.CandleSource} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.setCandleSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional int64 volume_buy = 10;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.getVolumeBuy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.setVolumeBuy = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 volume_sell = 11;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.getVolumeSell = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.HistoricCandle} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.HistoricCandle.prototype.setVolumeSell = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.repeatedFields_ = [1,2];



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
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
figiList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
instrumentIdList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
lastPriceType: jspb.Message.getFieldWithDefault(msg, 3, 0),
instrumentStatus: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFigi(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addInstrumentId(value);
      break;
    case 3:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.LastPriceType} */ (reader.readEnum());
      msg.setLastPriceType(value);
      break;
    case 9:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.InstrumentStatus} */ (reader.readEnum());
      msg.setInstrumentStatus(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigiList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getInstrumentIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getLastPriceType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.InstrumentStatus} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * repeated string figi = 1;
 * @return {!Array<string>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.getFigiList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.setFigiList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.addFigi = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.clearFigiList = function() {
  return this.setFigiList([]);
};


/**
 * repeated string instrument_id = 2;
 * @return {!Array<string>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.getInstrumentIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.setInstrumentIdList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.addInstrumentId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.clearInstrumentIdList = function() {
  return this.setInstrumentIdList([]);
};


/**
 * optional LastPriceType last_price_type = 3;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceType}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.getLastPriceType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.LastPriceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPriceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.setLastPriceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional InstrumentStatus instrument_status = 9;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.getInstrumentStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.InstrumentStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InstrumentStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.setInstrumentStatus = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.clearInstrumentStatus = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesRequest.prototype.hasInstrumentStatus = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.repeatedFields_ = [1];



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
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
lastPricesList: jspb.Message.toObjectList(msg.getLastPricesList(),
    proto.tinkoff.public.invest.api.contract.v1.LastPrice.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.LastPrice;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.LastPrice.deserializeBinaryFromReader);
      msg.addLastPrices(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastPricesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.LastPrice.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LastPrice last_prices = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.LastPrice>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.prototype.getLastPricesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.LastPrice>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.LastPrice, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.LastPrice>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.prototype.setLastPricesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPrice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPrice}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.prototype.addLastPrices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.LastPrice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastPricesResponse.prototype.clearLastPricesList = function() {
  return this.setLastPricesList([]);
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
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.LastPrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
price: (f = msg.getPrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
ticker: jspb.Message.getFieldWithDefault(msg, 9, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 10, ""),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 11, ""),
lastPriceType: jspb.Message.getFieldWithDefault(msg, 12, 0)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPrice}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.LastPrice;
  return proto.tinkoff.public.invest.api.contract.v1.LastPrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPrice}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
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
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 12:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.LastPriceType} */ (reader.readEnum());
      msg.setLastPriceType(value);
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
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.LastPrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
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
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
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
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLastPriceType();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPrice} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Quotation price = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPrice} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPrice} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPrice} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPrice} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string ticker = 9;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPrice} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string class_code = 10;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPrice} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string instrument_uid = 11;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPrice} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional LastPriceType last_price_type = 12;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPriceType}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.getLastPriceType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.LastPriceType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.LastPriceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.LastPrice} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.LastPrice.prototype.setLastPriceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
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
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.OpenInterest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OpenInterest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.toObject = function(includeInstance, msg) {
  var f, obj = {
instrumentUid: jspb.Message.getFieldWithDefault(msg, 1, ""),
time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
openInterest: jspb.Message.getFieldWithDefault(msg, 3, 0),
ticker: jspb.Message.getFieldWithDefault(msg, 4, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OpenInterest}
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.OpenInterest;
  return proto.tinkoff.public.invest.api.contract.v1.OpenInterest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OpenInterest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OpenInterest}
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOpenInterest(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 5:
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
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.OpenInterest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.OpenInterest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOpenInterest();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string instrument_uid = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OpenInterest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OpenInterest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OpenInterest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.hasTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 open_interest = 3;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.getOpenInterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OpenInterest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.setOpenInterest = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string ticker = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OpenInterest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string class_code = 5;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.OpenInterest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.OpenInterest.prototype.setClassCode = function(value) {
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
depth: jspb.Message.getFieldWithDefault(msg, 2, 0),
instrumentId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDepth(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentId(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDepth();
  if (f !== 0) {
    writer.writeInt32(
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
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.prototype.setFigi = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.prototype.clearFigi = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.prototype.hasFigi = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 depth = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.prototype.getDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.prototype.setDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string instrument_id = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.prototype.setInstrumentId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.prototype.clearInstrumentId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookRequest.prototype.hasInstrumentId = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.repeatedFields_ = [3,4];



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
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
depth: jspb.Message.getFieldWithDefault(msg, 2, 0),
bidsList: jspb.Message.toObjectList(msg.getBidsList(),
    proto.tinkoff.public.invest.api.contract.v1.Order.toObject, includeInstance),
asksList: jspb.Message.toObjectList(msg.getAsksList(),
    proto.tinkoff.public.invest.api.contract.v1.Order.toObject, includeInstance),
lastPrice: (f = msg.getLastPrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
closePrice: (f = msg.getClosePrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
limitUp: (f = msg.getLimitUp()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
limitDown: (f = msg.getLimitDown()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 9, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 10, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 11, ""),
lastPriceTs: (f = msg.getLastPriceTs()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
closePriceTs: (f = msg.getClosePriceTs()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
orderbookTs: (f = msg.getOrderbookTs()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDepth(value);
      break;
    case 3:
      var value = new proto.tinkoff.public.invest.api.contract.v1.Order;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.Order.deserializeBinaryFromReader);
      msg.addBids(value);
      break;
    case 4:
      var value = new proto.tinkoff.public.invest.api.contract.v1.Order;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.Order.deserializeBinaryFromReader);
      msg.addAsks(value);
      break;
    case 5:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setLastPrice(value);
      break;
    case 6:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setClosePrice(value);
      break;
    case 7:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setLimitUp(value);
      break;
    case 8:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setLimitDown(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassCode(value);
      break;
    case 21:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastPriceTs(value);
      break;
    case 22:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setClosePriceTs(value);
      break;
    case 23:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOrderbookTs(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDepth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBidsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tinkoff.public.invest.api.contract.v1.Order.serializeBinaryToWriter
    );
  }
  f = message.getAsksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.tinkoff.public.invest.api.contract.v1.Order.serializeBinaryToWriter
    );
  }
  f = message.getLastPrice();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getClosePrice();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getLimitUp();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getLimitDown();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getInstrumentUid();
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
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLastPriceTs();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getClosePriceTs();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOrderbookTs();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 depth = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Order bids = 3;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.Order>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getBidsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.Order, 3));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.Order>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setBidsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Order}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.addBids = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tinkoff.public.invest.api.contract.v1.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.clearBidsList = function() {
  return this.setBidsList([]);
};


/**
 * repeated Order asks = 4;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.Order>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getAsksList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.Order, 4));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.Order>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setAsksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Order}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.addAsks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.tinkoff.public.invest.api.contract.v1.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.clearAsksList = function() {
  return this.setAsksList([]);
};


/**
 * optional Quotation last_price = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getLastPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setLastPrice = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.clearLastPrice = function() {
  return this.setLastPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.hasLastPrice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Quotation close_price = 6;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getClosePrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 6));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setClosePrice = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.clearClosePrice = function() {
  return this.setClosePrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.hasClosePrice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Quotation limit_up = 7;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getLimitUp = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 7));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setLimitUp = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.clearLimitUp = function() {
  return this.setLimitUp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.hasLimitUp = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Quotation limit_down = 8;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getLimitDown = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 8));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setLimitDown = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.clearLimitDown = function() {
  return this.setLimitDown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.hasLimitDown = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string instrument_uid = 9;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string ticker = 10;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string class_code = 11;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp last_price_ts = 21;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getLastPriceTs = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 21));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setLastPriceTs = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.clearLastPriceTs = function() {
  return this.setLastPriceTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.hasLastPriceTs = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional google.protobuf.Timestamp close_price_ts = 22;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getClosePriceTs = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 22));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setClosePriceTs = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.clearClosePriceTs = function() {
  return this.setClosePriceTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.hasClosePriceTs = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional google.protobuf.Timestamp orderbook_ts = 23;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.getOrderbookTs = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 23));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.setOrderbookTs = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.clearOrderbookTs = function() {
  return this.setOrderbookTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetOrderBookResponse.prototype.hasOrderbookTs = function() {
  return jspb.Message.getField(this, 23) != null;
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
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
instrumentId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setInstrumentId(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
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
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.prototype.setFigi = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.prototype.clearFigi = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.prototype.hasFigi = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string instrument_id = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.prototype.setInstrumentId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.prototype.clearInstrumentId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest.prototype.hasInstrumentId = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.repeatedFields_ = [1];



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
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instrumentIdList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addInstrumentId(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrumentIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string instrument_id = 1;
 * @return {!Array<string>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.prototype.getInstrumentIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.prototype.setInstrumentIdList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.prototype.addInstrumentId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest.prototype.clearInstrumentIdList = function() {
  return this.setInstrumentIdList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.repeatedFields_ = [1];



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
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
tradingStatusesList: jspb.Message.toObjectList(msg.getTradingStatusesList(),
    proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.deserializeBinaryFromReader);
      msg.addTradingStatuses(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradingStatusesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GetTradingStatusResponse trading_statuses = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.prototype.getTradingStatusesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.prototype.setTradingStatusesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.prototype.addTradingStatuses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse.prototype.clearTradingStatusesList = function() {
  return this.setTradingStatusesList([]);
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
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
tradingStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
limitOrderAvailableFlag: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
marketOrderAvailableFlag: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
apiTradeAvailableFlag: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 6, ""),
bestpriceOrderAvailableFlag: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
onlyBestPrice: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
ticker: jspb.Message.getFieldWithDefault(msg, 10, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.SecurityTradingStatus} */ (reader.readEnum());
      msg.setTradingStatus(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLimitOrderAvailableFlag(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMarketOrderAvailableFlag(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setApiTradeAvailableFlag(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBestpriceOrderAvailableFlag(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnlyBestPrice(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 11:
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
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTradingStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLimitOrderAvailableFlag();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getMarketOrderAvailableFlag();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getApiTradeAvailableFlag();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBestpriceOrderAvailableFlag();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getOnlyBestPrice();
  if (f) {
    writer.writeBool(
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
  f = message.getClassCode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SecurityTradingStatus trading_status = 2;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.SecurityTradingStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.getTradingStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.SecurityTradingStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.SecurityTradingStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.setTradingStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool limit_order_available_flag = 3;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.getLimitOrderAvailableFlag = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.setLimitOrderAvailableFlag = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool market_order_available_flag = 4;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.getMarketOrderAvailableFlag = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.setMarketOrderAvailableFlag = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool api_trade_available_flag = 5;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.getApiTradeAvailableFlag = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.setApiTradeAvailableFlag = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string instrument_uid = 6;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool bestprice_order_available_flag = 8;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.getBestpriceOrderAvailableFlag = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.setBestpriceOrderAvailableFlag = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool only_best_price = 9;
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.getOnlyBestPrice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.setOnlyBestPrice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string ticker = 10;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string class_code = 11;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
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
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
instrumentId: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
tradeSource: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentId(value);
      break;
    case 5:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType} */ (reader.readEnum());
      msg.setTradeSource(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTradeSource();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.setFigi = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.clearFigi = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.hasFigi = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp from = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp to = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string instrument_id = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.setInstrumentId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.clearInstrumentId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.hasInstrumentId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TradeSourceType trade_source = 5;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.getTradeSource = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.TradeSourceType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesRequest.prototype.setTradeSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.repeatedFields_ = [1];



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
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.tinkoff.public.invest.api.contract.v1.Trade.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.Trade;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.Trade.deserializeBinaryFromReader);
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
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Trade trades = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.Trade>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.Trade, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.Trade>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.Trade}
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetLastTradesResponse.prototype.clearTradesList = function() {
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
proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions;
  return proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMySubscriptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.repeatedFields_ = [1];



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
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instrumentsList: jspb.Message.toObjectList(msg.getInstrumentsList(),
    proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.toObject, includeInstance),
instrumentStatus: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.deserializeBinaryFromReader);
      msg.addInstruments(value);
      break;
    case 9:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.InstrumentStatus} */ (reader.readEnum());
      msg.setInstrumentStatus(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.InstrumentStatus} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * repeated InstrumentClosePriceRequest instruments = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.prototype.getInstrumentsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.prototype.setInstrumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.prototype.addInstruments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.prototype.clearInstrumentsList = function() {
  return this.setInstrumentsList([]);
};


/**
 * optional InstrumentStatus instrument_status = 9;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentStatus}
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.prototype.getInstrumentStatus = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.InstrumentStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InstrumentStatus} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.prototype.setInstrumentStatus = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.prototype.clearInstrumentStatus = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesRequest.prototype.hasInstrumentStatus = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instrumentId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest;
  return proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrumentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instrument_id = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.prototype.getInstrumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceRequest.prototype.setInstrumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.repeatedFields_ = [1];



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
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
closePricesList: jspb.Message.toObjectList(msg.getClosePricesList(),
    proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.deserializeBinaryFromReader);
      msg.addClosePrices(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClosePricesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InstrumentClosePriceResponse close_prices = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.prototype.getClosePricesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.prototype.setClosePricesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.prototype.addClosePrices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetClosePricesResponse.prototype.clearClosePricesList = function() {
  return this.setClosePricesList([]);
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
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
figi: jspb.Message.getFieldWithDefault(msg, 1, ""),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 2, ""),
ticker: jspb.Message.getFieldWithDefault(msg, 3, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
price: (f = msg.getPrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
eveningSessionPrice: (f = msg.getEveningSessionPrice()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
eveningSessionPriceTime: (f = msg.getEveningSessionPriceTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse;
  return proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 12:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setEveningSessionPrice(value);
      break;
    case 21:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 23:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEveningSessionPriceTime(value);
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
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFigi();
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
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getEveningSessionPrice();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEveningSessionPriceTime();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string figi = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.getFigi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.setFigi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string instrument_uid = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ticker = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string class_code = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.setClassCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Quotation price = 11;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.getPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 11));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Quotation evening_session_price = 12;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.getEveningSessionPrice = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 12));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.setEveningSessionPrice = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.clearEveningSessionPrice = function() {
  return this.setEveningSessionPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.hasEveningSessionPrice = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp time = 21;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 21));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.hasTime = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional google.protobuf.Timestamp evening_session_price_time = 23;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.getEveningSessionPriceTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 23));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.setEveningSessionPriceTime = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.clearEveningSessionPriceTime = function() {
  return this.setEveningSessionPriceTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.InstrumentClosePriceResponse.prototype.hasEveningSessionPriceTime = function() {
  return jspb.Message.getField(this, 23) != null;
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
indicatorType: jspb.Message.getFieldWithDefault(msg, 1, 0),
instrumentUid: jspb.Message.getFieldWithDefault(msg, 2, ""),
from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
to: (f = msg.getTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
interval: jspb.Message.getFieldWithDefault(msg, 5, 0),
typeOfPrice: jspb.Message.getFieldWithDefault(msg, 6, 0),
length: jspb.Message.getFieldWithDefault(msg, 7, 0),
deviation: (f = msg.getDeviation()) && proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.toObject(includeInstance, f),
smoothing: (f = msg.getSmoothing()) && proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.IndicatorType} */ (reader.readEnum());
      msg.setIndicatorType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentUid(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 5:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.IndicatorInterval} */ (reader.readEnum());
      msg.setInterval(value);
      break;
    case 6:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.TypeOfPrice} */ (reader.readEnum());
      msg.setTypeOfPrice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLength(value);
      break;
    case 8:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.deserializeBinaryFromReader);
      msg.setDeviation(value);
      break;
    case 9:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.deserializeBinaryFromReader);
      msg.setSmoothing(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndicatorType();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getTypeOfPrice();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getLength();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getDeviation();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.serializeBinaryToWriter
    );
  }
  f = message.getSmoothing();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.IndicatorInterval = {
  INDICATOR_INTERVAL_UNSPECIFIED: 0,
  INDICATOR_INTERVAL_ONE_MINUTE: 1,
  INDICATOR_INTERVAL_FIVE_MINUTES: 2,
  INDICATOR_INTERVAL_FIFTEEN_MINUTES: 3,
  INDICATOR_INTERVAL_ONE_HOUR: 4,
  INDICATOR_INTERVAL_ONE_DAY: 5,
  INDICATOR_INTERVAL_2_MIN: 6,
  INDICATOR_INTERVAL_3_MIN: 7,
  INDICATOR_INTERVAL_10_MIN: 8,
  INDICATOR_INTERVAL_30_MIN: 9,
  INDICATOR_INTERVAL_2_HOUR: 10,
  INDICATOR_INTERVAL_4_HOUR: 11,
  INDICATOR_INTERVAL_WEEK: 12,
  INDICATOR_INTERVAL_MONTH: 13
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.TypeOfPrice = {
  TYPE_OF_PRICE_UNSPECIFIED: 0,
  TYPE_OF_PRICE_CLOSE: 1,
  TYPE_OF_PRICE_OPEN: 2,
  TYPE_OF_PRICE_HIGH: 3,
  TYPE_OF_PRICE_LOW: 4,
  TYPE_OF_PRICE_AVG: 5
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.IndicatorType = {
  INDICATOR_TYPE_UNSPECIFIED: 0,
  INDICATOR_TYPE_BB: 1,
  INDICATOR_TYPE_EMA: 2,
  INDICATOR_TYPE_RSI: 3,
  INDICATOR_TYPE_MACD: 4,
  INDICATOR_TYPE_SMA: 5
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.toObject = function(includeInstance, msg) {
  var f, obj = {
fastLength: jspb.Message.getFieldWithDefault(msg, 1, 0),
slowLength: jspb.Message.getFieldWithDefault(msg, 2, 0),
signalSmoothing: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing;
  return proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFastLength(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSlowLength(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSignalSmoothing(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFastLength();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSlowLength();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSignalSmoothing();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 fast_length = 1;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.prototype.getFastLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.prototype.setFastLength = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 slow_length = 2;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.prototype.getSlowLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.prototype.setSlowLength = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 signal_smoothing = 3;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.prototype.getSignalSmoothing = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing.prototype.setSignalSmoothing = function(value) {
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.toObject = function(includeInstance, msg) {
  var f, obj = {
deviationMultiplier: (f = msg.getDeviationMultiplier()) && tinvest_common_pb.Quotation.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation;
  return proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setDeviationMultiplier(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviationMultiplier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
};


/**
 * optional Quotation deviation_multiplier = 1;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.prototype.getDeviationMultiplier = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 1));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.prototype.setDeviationMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.prototype.clearDeviationMultiplier = function() {
  return this.setDeviationMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation.prototype.hasDeviationMultiplier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IndicatorType indicator_type = 1;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.IndicatorType}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.getIndicatorType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.IndicatorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.IndicatorType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.setIndicatorType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string instrument_uid = 2;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp from = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp to = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.getTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional IndicatorInterval interval = 5;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.IndicatorInterval}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.getInterval = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.IndicatorInterval} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.IndicatorInterval} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.setInterval = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional TypeOfPrice type_of_price = 6;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.TypeOfPrice}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.getTypeOfPrice = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.TypeOfPrice} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.TypeOfPrice} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.setTypeOfPrice = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional int32 length = 7;
 * @return {number}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.setLength = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional Deviation deviation = 8;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.getDeviation = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation, 8));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Deviation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.setDeviation = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.clearDeviation = function() {
  return this.setDeviation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.hasDeviation = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Smoothing smoothing = 9;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.getSmoothing = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing} */ (
    jspb.Message.getWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing, 9));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.Smoothing|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.setSmoothing = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.clearSmoothing = function() {
  return this.setSmoothing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest.prototype.hasSmoothing = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.repeatedFields_ = [1];



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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
technicalIndicatorsList: jspb.Message.toObjectList(msg.getTechnicalIndicatorsList(),
    proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.deserializeBinaryFromReader);
      msg.addTechnicalIndicators(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTechnicalIndicatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.serializeBinaryToWriter
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
middleBand: (f = msg.getMiddleBand()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
upperBand: (f = msg.getUpperBand()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
lowerBand: (f = msg.getLowerBand()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
signal: (f = msg.getSignal()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
macd: (f = msg.getMacd()) && tinvest_common_pb.Quotation.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem;
  return proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setMiddleBand(value);
      break;
    case 3:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setUpperBand(value);
      break;
    case 4:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setLowerBand(value);
      break;
    case 5:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setSignal(value);
      break;
    case 6:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setMacd(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMiddleBand();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getUpperBand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getLowerBand();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getSignal();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getMacd();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Quotation middle_band = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.getMiddleBand = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.setMiddleBand = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.clearMiddleBand = function() {
  return this.setMiddleBand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.hasMiddleBand = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Quotation upper_band = 3;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.getUpperBand = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 3));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.setUpperBand = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.clearUpperBand = function() {
  return this.setUpperBand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.hasUpperBand = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Quotation lower_band = 4;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.getLowerBand = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 4));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.setLowerBand = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.clearLowerBand = function() {
  return this.setLowerBand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.hasLowerBand = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Quotation signal = 5;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.getSignal = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 5));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.setSignal = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.clearSignal = function() {
  return this.setSignal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.hasSignal = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Quotation macd = 6;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.getMacd = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 6));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.setMacd = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.clearMacd = function() {
  return this.setMacd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem.prototype.hasMacd = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated TechAnalysisItem technical_indicators = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.prototype.getTechnicalIndicatorsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.prototype.setTechnicalIndicatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem}
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.prototype.addTechnicalIndicators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.TechAnalysisItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse.prototype.clearTechnicalIndicatorsList = function() {
  return this.setTechnicalIndicatorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.repeatedFields_ = [1,2];



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
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instrumentIdList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
valuesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest;
  return proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addInstrumentId(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.tinkoff.public.invest.api.contract.v1.MarketValueType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addValues(values[i]);
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
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrumentIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * repeated string instrument_id = 1;
 * @return {!Array<string>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.prototype.getInstrumentIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.prototype.setInstrumentIdList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.prototype.addInstrumentId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.prototype.clearInstrumentIdList = function() {
  return this.setInstrumentIdList([]);
};


/**
 * repeated MarketValueType values = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.MarketValueType>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.prototype.getValuesList = function() {
  return /** @type {!Array<!proto.tinkoff.public.invest.api.contract.v1.MarketValueType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.MarketValueType>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketValueType} value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesRequest.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.repeatedFields_ = [1];



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
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
instrumentsList: jspb.Message.toObjectList(msg.getInstrumentsList(),
    proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.toObject, includeInstance)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse;
  return proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.deserializeBinaryFromReader);
      msg.addInstruments(value);
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
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MarketValueInstrument instruments = 1;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument>}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.prototype.getInstrumentsList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument, 1));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.prototype.setInstrumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.prototype.addInstruments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.GetMarketValuesResponse.prototype.clearInstrumentsList = function() {
  return this.setInstrumentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.repeatedFields_ = [2];



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
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.toObject = function(includeInstance, msg) {
  var f, obj = {
instrumentUid: jspb.Message.getFieldWithDefault(msg, 1, ""),
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.tinkoff.public.invest.api.contract.v1.MarketValue.toObject, includeInstance),
ticker: jspb.Message.getFieldWithDefault(msg, 3, ""),
classCode: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument;
  return proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.tinkoff.public.invest.api.contract.v1.MarketValue;
      reader.readMessage(value,proto.tinkoff.public.invest.api.contract.v1.MarketValue.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 4:
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
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrumentUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tinkoff.public.invest.api.contract.v1.MarketValue.serializeBinaryToWriter
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
};


/**
 * optional string instrument_uid = 1;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.prototype.getInstrumentUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.prototype.setInstrumentUid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated MarketValue values = 2;
 * @return {!Array<!proto.tinkoff.public.invest.api.contract.v1.MarketValue>}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.tinkoff.public.invest.api.contract.v1.MarketValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tinkoff.public.invest.api.contract.v1.MarketValue, 2));
};


/**
 * @param {!Array<!proto.tinkoff.public.invest.api.contract.v1.MarketValue>} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValue}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tinkoff.public.invest.api.contract.v1.MarketValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};


/**
 * optional string ticker = 3;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string class_code = 4;
 * @return {string}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.prototype.getClassCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueInstrument.prototype.setClassCode = function(value) {
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
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.toObject = function(opt_includeInstance) {
  return proto.tinkoff.public.invest.api.contract.v1.MarketValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.toObject = function(includeInstance, msg) {
  var f, obj = {
type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
value: (f = msg.getValue()) && tinvest_common_pb.Quotation.toObject(includeInstance, f),
time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValue}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tinkoff.public.invest.api.contract.v1.MarketValue;
  return proto.tinkoff.public.invest.api.contract.v1.MarketValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValue}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tinkoff.public.invest.api.contract.v1.MarketValueType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new tinvest_common_pb.Quotation;
      reader.readMessage(value,tinvest_common_pb.Quotation.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
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
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tinkoff.public.invest.api.contract.v1.MarketValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.tinkoff.public.invest.api.contract.v1.MarketValueType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tinvest_common_pb.Quotation.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketValueType type = 1;
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValueType}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.getType = function() {
  return /** @type {!proto.tinkoff.public.invest.api.contract.v1.MarketValueType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tinkoff.public.invest.api.contract.v1.MarketValueType} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValue} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValue} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Quotation value = 2;
 * @return {?proto.tinkoff.public.invest.api.contract.v1.Quotation}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.getValue = function() {
  return /** @type{?proto.tinkoff.public.invest.api.contract.v1.Quotation} */ (
    jspb.Message.getWrapperField(this, tinvest_common_pb.Quotation, 2));
};


/**
 * @param {?proto.tinkoff.public.invest.api.contract.v1.Quotation|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValue} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValue} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValue} returns this
*/
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tinkoff.public.invest.api.contract.v1.MarketValue} returns this
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValue.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionAction = {
  SUBSCRIPTION_ACTION_UNSPECIFIED: 0,
  SUBSCRIPTION_ACTION_SUBSCRIBE: 1,
  SUBSCRIPTION_ACTION_UNSUBSCRIBE: 2
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionInterval = {
  SUBSCRIPTION_INTERVAL_UNSPECIFIED: 0,
  SUBSCRIPTION_INTERVAL_ONE_MINUTE: 1,
  SUBSCRIPTION_INTERVAL_FIVE_MINUTES: 2,
  SUBSCRIPTION_INTERVAL_FIFTEEN_MINUTES: 3,
  SUBSCRIPTION_INTERVAL_ONE_HOUR: 4,
  SUBSCRIPTION_INTERVAL_ONE_DAY: 5,
  SUBSCRIPTION_INTERVAL_2_MIN: 6,
  SUBSCRIPTION_INTERVAL_3_MIN: 7,
  SUBSCRIPTION_INTERVAL_10_MIN: 8,
  SUBSCRIPTION_INTERVAL_30_MIN: 9,
  SUBSCRIPTION_INTERVAL_2_HOUR: 10,
  SUBSCRIPTION_INTERVAL_4_HOUR: 11,
  SUBSCRIPTION_INTERVAL_WEEK: 12,
  SUBSCRIPTION_INTERVAL_MONTH: 13
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.SubscriptionStatus = {
  SUBSCRIPTION_STATUS_UNSPECIFIED: 0,
  SUBSCRIPTION_STATUS_SUCCESS: 1,
  SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND: 2,
  SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID: 3,
  SUBSCRIPTION_STATUS_DEPTH_IS_INVALID: 4,
  SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID: 5,
  SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED: 6,
  SUBSCRIPTION_STATUS_INTERNAL_ERROR: 7,
  SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS: 8,
  SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND: 9,
  SUBSCRIPTION_STATUS_SOURCE_IS_INVALID: 10
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeSourceType = {
  TRADE_SOURCE_UNSPECIFIED: 0,
  TRADE_SOURCE_EXCHANGE: 1,
  TRADE_SOURCE_DEALER: 2,
  TRADE_SOURCE_ALL: 3
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.TradeDirection = {
  TRADE_DIRECTION_UNSPECIFIED: 0,
  TRADE_DIRECTION_BUY: 1,
  TRADE_DIRECTION_SELL: 2
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleInterval = {
  CANDLE_INTERVAL_UNSPECIFIED: 0,
  CANDLE_INTERVAL_1_MIN: 1,
  CANDLE_INTERVAL_5_MIN: 2,
  CANDLE_INTERVAL_15_MIN: 3,
  CANDLE_INTERVAL_HOUR: 4,
  CANDLE_INTERVAL_DAY: 5,
  CANDLE_INTERVAL_2_MIN: 6,
  CANDLE_INTERVAL_3_MIN: 7,
  CANDLE_INTERVAL_10_MIN: 8,
  CANDLE_INTERVAL_30_MIN: 9,
  CANDLE_INTERVAL_2_HOUR: 10,
  CANDLE_INTERVAL_4_HOUR: 11,
  CANDLE_INTERVAL_WEEK: 12,
  CANDLE_INTERVAL_MONTH: 13,
  CANDLE_INTERVAL_5_SEC: 14,
  CANDLE_INTERVAL_10_SEC: 15,
  CANDLE_INTERVAL_30_SEC: 16
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.CandleSource = {
  CANDLE_SOURCE_UNSPECIFIED: 0,
  CANDLE_SOURCE_EXCHANGE: 1,
  CANDLE_SOURCE_DEALER_WEEKEND: 2
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.MarketValueType = {
  INSTRUMENT_VALUE_UNSPECIFIED: 0,
  INSTRUMENT_VALUE_LAST_PRICE: 1,
  INSTRUMENT_VALUE_LAST_PRICE_DEALER: 2,
  INSTRUMENT_VALUE_CLOSE_PRICE: 3,
  INSTRUMENT_VALUE_EVENING_SESSION_PRICE: 4,
  INSTRUMENT_VALUE_OPEN_INTEREST: 5,
  INSTRUMENT_VALUE_THEOR_PRICE: 6,
  INSTRUMENT_VALUE_YIELD: 7
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.OrderBookType = {
  ORDERBOOK_TYPE_UNSPECIFIED: 0,
  ORDERBOOK_TYPE_EXCHANGE: 1,
  ORDERBOOK_TYPE_DEALER: 2,
  ORDERBOOK_TYPE_ALL: 3
};

/**
 * @enum {number}
 */
proto.tinkoff.public.invest.api.contract.v1.LastPriceType = {
  LAST_PRICE_UNSPECIFIED: 0,
  LAST_PRICE_EXCHANGE: 1,
  LAST_PRICE_DEALER: 2
};

goog.object.extend(exports, proto.tinkoff.public.invest.api.contract.v1);
