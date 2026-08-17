import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as tinvest_common_pb from '../tinvest/common_pb'; // proto import: "tinvest/common.proto"
import * as google_api_field_behavior_pb from '../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"


export class MarketDataRequest extends jspb.Message {
  getSubscribeCandlesRequest(): SubscribeCandlesRequest | undefined;
  setSubscribeCandlesRequest(value?: SubscribeCandlesRequest): MarketDataRequest;
  hasSubscribeCandlesRequest(): boolean;
  clearSubscribeCandlesRequest(): MarketDataRequest;

  getSubscribeOrderBookRequest(): SubscribeOrderBookRequest | undefined;
  setSubscribeOrderBookRequest(value?: SubscribeOrderBookRequest): MarketDataRequest;
  hasSubscribeOrderBookRequest(): boolean;
  clearSubscribeOrderBookRequest(): MarketDataRequest;

  getSubscribeTradesRequest(): SubscribeTradesRequest | undefined;
  setSubscribeTradesRequest(value?: SubscribeTradesRequest): MarketDataRequest;
  hasSubscribeTradesRequest(): boolean;
  clearSubscribeTradesRequest(): MarketDataRequest;

  getSubscribeInfoRequest(): SubscribeInfoRequest | undefined;
  setSubscribeInfoRequest(value?: SubscribeInfoRequest): MarketDataRequest;
  hasSubscribeInfoRequest(): boolean;
  clearSubscribeInfoRequest(): MarketDataRequest;

  getSubscribeLastPriceRequest(): SubscribeLastPriceRequest | undefined;
  setSubscribeLastPriceRequest(value?: SubscribeLastPriceRequest): MarketDataRequest;
  hasSubscribeLastPriceRequest(): boolean;
  clearSubscribeLastPriceRequest(): MarketDataRequest;

  getGetMySubscriptions(): GetMySubscriptions | undefined;
  setGetMySubscriptions(value?: GetMySubscriptions): MarketDataRequest;
  hasGetMySubscriptions(): boolean;
  clearGetMySubscriptions(): MarketDataRequest;

  getPing(): tinvest_common_pb.PingRequest | undefined;
  setPing(value?: tinvest_common_pb.PingRequest): MarketDataRequest;
  hasPing(): boolean;
  clearPing(): MarketDataRequest;

  getPingSettings(): tinvest_common_pb.PingDelaySettings | undefined;
  setPingSettings(value?: tinvest_common_pb.PingDelaySettings): MarketDataRequest;
  hasPingSettings(): boolean;
  clearPingSettings(): MarketDataRequest;

  getPayloadCase(): MarketDataRequest.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDataRequest): MarketDataRequest.AsObject;
  static serializeBinaryToWriter(message: MarketDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDataRequest;
  static deserializeBinaryFromReader(message: MarketDataRequest, reader: jspb.BinaryReader): MarketDataRequest;
}

export namespace MarketDataRequest {
  export type AsObject = {
    subscribeCandlesRequest?: SubscribeCandlesRequest.AsObject,
    subscribeOrderBookRequest?: SubscribeOrderBookRequest.AsObject,
    subscribeTradesRequest?: SubscribeTradesRequest.AsObject,
    subscribeInfoRequest?: SubscribeInfoRequest.AsObject,
    subscribeLastPriceRequest?: SubscribeLastPriceRequest.AsObject,
    getMySubscriptions?: GetMySubscriptions.AsObject,
    ping?: tinvest_common_pb.PingRequest.AsObject,
    pingSettings?: tinvest_common_pb.PingDelaySettings.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    SUBSCRIBE_CANDLES_REQUEST = 1,
    SUBSCRIBE_ORDER_BOOK_REQUEST = 2,
    SUBSCRIBE_TRADES_REQUEST = 3,
    SUBSCRIBE_INFO_REQUEST = 4,
    SUBSCRIBE_LAST_PRICE_REQUEST = 5,
    GET_MY_SUBSCRIPTIONS = 6,
    PING = 7,
    PING_SETTINGS = 15,
  }
}

export class MarketDataServerSideStreamRequest extends jspb.Message {
  getSubscribeCandlesRequest(): SubscribeCandlesRequest | undefined;
  setSubscribeCandlesRequest(value?: SubscribeCandlesRequest): MarketDataServerSideStreamRequest;
  hasSubscribeCandlesRequest(): boolean;
  clearSubscribeCandlesRequest(): MarketDataServerSideStreamRequest;

  getSubscribeOrderBookRequest(): SubscribeOrderBookRequest | undefined;
  setSubscribeOrderBookRequest(value?: SubscribeOrderBookRequest): MarketDataServerSideStreamRequest;
  hasSubscribeOrderBookRequest(): boolean;
  clearSubscribeOrderBookRequest(): MarketDataServerSideStreamRequest;

  getSubscribeTradesRequest(): SubscribeTradesRequest | undefined;
  setSubscribeTradesRequest(value?: SubscribeTradesRequest): MarketDataServerSideStreamRequest;
  hasSubscribeTradesRequest(): boolean;
  clearSubscribeTradesRequest(): MarketDataServerSideStreamRequest;

  getSubscribeInfoRequest(): SubscribeInfoRequest | undefined;
  setSubscribeInfoRequest(value?: SubscribeInfoRequest): MarketDataServerSideStreamRequest;
  hasSubscribeInfoRequest(): boolean;
  clearSubscribeInfoRequest(): MarketDataServerSideStreamRequest;

  getSubscribeLastPriceRequest(): SubscribeLastPriceRequest | undefined;
  setSubscribeLastPriceRequest(value?: SubscribeLastPriceRequest): MarketDataServerSideStreamRequest;
  hasSubscribeLastPriceRequest(): boolean;
  clearSubscribeLastPriceRequest(): MarketDataServerSideStreamRequest;

  getPingSettings(): tinvest_common_pb.PingDelaySettings | undefined;
  setPingSettings(value?: tinvest_common_pb.PingDelaySettings): MarketDataServerSideStreamRequest;
  hasPingSettings(): boolean;
  clearPingSettings(): MarketDataServerSideStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDataServerSideStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDataServerSideStreamRequest): MarketDataServerSideStreamRequest.AsObject;
  static serializeBinaryToWriter(message: MarketDataServerSideStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDataServerSideStreamRequest;
  static deserializeBinaryFromReader(message: MarketDataServerSideStreamRequest, reader: jspb.BinaryReader): MarketDataServerSideStreamRequest;
}

export namespace MarketDataServerSideStreamRequest {
  export type AsObject = {
    subscribeCandlesRequest?: SubscribeCandlesRequest.AsObject,
    subscribeOrderBookRequest?: SubscribeOrderBookRequest.AsObject,
    subscribeTradesRequest?: SubscribeTradesRequest.AsObject,
    subscribeInfoRequest?: SubscribeInfoRequest.AsObject,
    subscribeLastPriceRequest?: SubscribeLastPriceRequest.AsObject,
    pingSettings?: tinvest_common_pb.PingDelaySettings.AsObject,
  }
}

export class MarketDataResponse extends jspb.Message {
  getSubscribeCandlesResponse(): SubscribeCandlesResponse | undefined;
  setSubscribeCandlesResponse(value?: SubscribeCandlesResponse): MarketDataResponse;
  hasSubscribeCandlesResponse(): boolean;
  clearSubscribeCandlesResponse(): MarketDataResponse;

  getSubscribeOrderBookResponse(): SubscribeOrderBookResponse | undefined;
  setSubscribeOrderBookResponse(value?: SubscribeOrderBookResponse): MarketDataResponse;
  hasSubscribeOrderBookResponse(): boolean;
  clearSubscribeOrderBookResponse(): MarketDataResponse;

  getSubscribeTradesResponse(): SubscribeTradesResponse | undefined;
  setSubscribeTradesResponse(value?: SubscribeTradesResponse): MarketDataResponse;
  hasSubscribeTradesResponse(): boolean;
  clearSubscribeTradesResponse(): MarketDataResponse;

  getSubscribeInfoResponse(): SubscribeInfoResponse | undefined;
  setSubscribeInfoResponse(value?: SubscribeInfoResponse): MarketDataResponse;
  hasSubscribeInfoResponse(): boolean;
  clearSubscribeInfoResponse(): MarketDataResponse;

  getCandle(): Candle | undefined;
  setCandle(value?: Candle): MarketDataResponse;
  hasCandle(): boolean;
  clearCandle(): MarketDataResponse;

  getTrade(): Trade | undefined;
  setTrade(value?: Trade): MarketDataResponse;
  hasTrade(): boolean;
  clearTrade(): MarketDataResponse;

  getOrderbook(): OrderBook | undefined;
  setOrderbook(value?: OrderBook): MarketDataResponse;
  hasOrderbook(): boolean;
  clearOrderbook(): MarketDataResponse;

  getTradingStatus(): TradingStatus | undefined;
  setTradingStatus(value?: TradingStatus): MarketDataResponse;
  hasTradingStatus(): boolean;
  clearTradingStatus(): MarketDataResponse;

  getPing(): tinvest_common_pb.Ping | undefined;
  setPing(value?: tinvest_common_pb.Ping): MarketDataResponse;
  hasPing(): boolean;
  clearPing(): MarketDataResponse;

  getSubscribeLastPriceResponse(): SubscribeLastPriceResponse | undefined;
  setSubscribeLastPriceResponse(value?: SubscribeLastPriceResponse): MarketDataResponse;
  hasSubscribeLastPriceResponse(): boolean;
  clearSubscribeLastPriceResponse(): MarketDataResponse;

  getLastPrice(): LastPrice | undefined;
  setLastPrice(value?: LastPrice): MarketDataResponse;
  hasLastPrice(): boolean;
  clearLastPrice(): MarketDataResponse;

  getOpenInterest(): OpenInterest | undefined;
  setOpenInterest(value?: OpenInterest): MarketDataResponse;
  hasOpenInterest(): boolean;
  clearOpenInterest(): MarketDataResponse;

  getPayloadCase(): MarketDataResponse.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDataResponse): MarketDataResponse.AsObject;
  static serializeBinaryToWriter(message: MarketDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDataResponse;
  static deserializeBinaryFromReader(message: MarketDataResponse, reader: jspb.BinaryReader): MarketDataResponse;
}

export namespace MarketDataResponse {
  export type AsObject = {
    subscribeCandlesResponse?: SubscribeCandlesResponse.AsObject,
    subscribeOrderBookResponse?: SubscribeOrderBookResponse.AsObject,
    subscribeTradesResponse?: SubscribeTradesResponse.AsObject,
    subscribeInfoResponse?: SubscribeInfoResponse.AsObject,
    candle?: Candle.AsObject,
    trade?: Trade.AsObject,
    orderbook?: OrderBook.AsObject,
    tradingStatus?: TradingStatus.AsObject,
    ping?: tinvest_common_pb.Ping.AsObject,
    subscribeLastPriceResponse?: SubscribeLastPriceResponse.AsObject,
    lastPrice?: LastPrice.AsObject,
    openInterest?: OpenInterest.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    SUBSCRIBE_CANDLES_RESPONSE = 1,
    SUBSCRIBE_ORDER_BOOK_RESPONSE = 2,
    SUBSCRIBE_TRADES_RESPONSE = 3,
    SUBSCRIBE_INFO_RESPONSE = 4,
    CANDLE = 5,
    TRADE = 6,
    ORDERBOOK = 7,
    TRADING_STATUS = 8,
    PING = 9,
    SUBSCRIBE_LAST_PRICE_RESPONSE = 10,
    LAST_PRICE = 11,
    OPEN_INTEREST = 12,
  }
}

export class SubscribeCandlesRequest extends jspb.Message {
  getSubscriptionAction(): SubscriptionAction;
  setSubscriptionAction(value: SubscriptionAction): SubscribeCandlesRequest;

  getInstrumentsList(): Array<CandleInstrument>;
  setInstrumentsList(value: Array<CandleInstrument>): SubscribeCandlesRequest;
  clearInstrumentsList(): SubscribeCandlesRequest;
  addInstruments(value?: CandleInstrument, index?: number): CandleInstrument;

  getWaitingClose(): boolean;
  setWaitingClose(value: boolean): SubscribeCandlesRequest;

  getCandleSourceType(): GetCandlesRequest.CandleSource;
  setCandleSourceType(value: GetCandlesRequest.CandleSource): SubscribeCandlesRequest;
  hasCandleSourceType(): boolean;
  clearCandleSourceType(): SubscribeCandlesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeCandlesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeCandlesRequest): SubscribeCandlesRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeCandlesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeCandlesRequest;
  static deserializeBinaryFromReader(message: SubscribeCandlesRequest, reader: jspb.BinaryReader): SubscribeCandlesRequest;
}

export namespace SubscribeCandlesRequest {
  export type AsObject = {
    subscriptionAction: SubscriptionAction,
    instrumentsList: Array<CandleInstrument.AsObject>,
    waitingClose: boolean,
    candleSourceType?: GetCandlesRequest.CandleSource,
  }

  export enum CandleSourceTypeCase { 
    _CANDLE_SOURCE_TYPE_NOT_SET = 0,
    CANDLE_SOURCE_TYPE = 9,
  }
}

export class CandleInstrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): CandleInstrument;

  getInterval(): SubscriptionInterval;
  setInterval(value: SubscriptionInterval): CandleInstrument;

  getInstrumentId(): string;
  setInstrumentId(value: string): CandleInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandleInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: CandleInstrument): CandleInstrument.AsObject;
  static serializeBinaryToWriter(message: CandleInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandleInstrument;
  static deserializeBinaryFromReader(message: CandleInstrument, reader: jspb.BinaryReader): CandleInstrument;
}

export namespace CandleInstrument {
  export type AsObject = {
    figi: string,
    interval: SubscriptionInterval,
    instrumentId: string,
  }
}

export class SubscribeCandlesResponse extends jspb.Message {
  getTrackingId(): string;
  setTrackingId(value: string): SubscribeCandlesResponse;

  getCandlesSubscriptionsList(): Array<CandleSubscription>;
  setCandlesSubscriptionsList(value: Array<CandleSubscription>): SubscribeCandlesResponse;
  clearCandlesSubscriptionsList(): SubscribeCandlesResponse;
  addCandlesSubscriptions(value?: CandleSubscription, index?: number): CandleSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeCandlesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeCandlesResponse): SubscribeCandlesResponse.AsObject;
  static serializeBinaryToWriter(message: SubscribeCandlesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeCandlesResponse;
  static deserializeBinaryFromReader(message: SubscribeCandlesResponse, reader: jspb.BinaryReader): SubscribeCandlesResponse;
}

export namespace SubscribeCandlesResponse {
  export type AsObject = {
    trackingId: string,
    candlesSubscriptionsList: Array<CandleSubscription.AsObject>,
  }
}

export class CandleSubscription extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): CandleSubscription;

  getInterval(): SubscriptionInterval;
  setInterval(value: SubscriptionInterval): CandleSubscription;

  getSubscriptionStatus(): SubscriptionStatus;
  setSubscriptionStatus(value: SubscriptionStatus): CandleSubscription;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): CandleSubscription;

  getWaitingClose(): boolean;
  setWaitingClose(value: boolean): CandleSubscription;

  getStreamId(): string;
  setStreamId(value: string): CandleSubscription;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): CandleSubscription;

  getSubscriptionAction(): SubscriptionAction;
  setSubscriptionAction(value: SubscriptionAction): CandleSubscription;

  getCandleSourceType(): GetCandlesRequest.CandleSource;
  setCandleSourceType(value: GetCandlesRequest.CandleSource): CandleSubscription;
  hasCandleSourceType(): boolean;
  clearCandleSourceType(): CandleSubscription;

  getTicker(): string;
  setTicker(value: string): CandleSubscription;

  getClassCode(): string;
  setClassCode(value: string): CandleSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandleSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: CandleSubscription): CandleSubscription.AsObject;
  static serializeBinaryToWriter(message: CandleSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandleSubscription;
  static deserializeBinaryFromReader(message: CandleSubscription, reader: jspb.BinaryReader): CandleSubscription;
}

export namespace CandleSubscription {
  export type AsObject = {
    figi: string,
    interval: SubscriptionInterval,
    subscriptionStatus: SubscriptionStatus,
    instrumentUid: string,
    waitingClose: boolean,
    streamId: string,
    subscriptionId: string,
    subscriptionAction: SubscriptionAction,
    candleSourceType?: GetCandlesRequest.CandleSource,
    ticker: string,
    classCode: string,
  }

  export enum CandleSourceTypeCase { 
    _CANDLE_SOURCE_TYPE_NOT_SET = 0,
    CANDLE_SOURCE_TYPE = 9,
  }
}

export class SubscribeOrderBookRequest extends jspb.Message {
  getSubscriptionAction(): SubscriptionAction;
  setSubscriptionAction(value: SubscriptionAction): SubscribeOrderBookRequest;

  getInstrumentsList(): Array<OrderBookInstrument>;
  setInstrumentsList(value: Array<OrderBookInstrument>): SubscribeOrderBookRequest;
  clearInstrumentsList(): SubscribeOrderBookRequest;
  addInstruments(value?: OrderBookInstrument, index?: number): OrderBookInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeOrderBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeOrderBookRequest): SubscribeOrderBookRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeOrderBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeOrderBookRequest;
  static deserializeBinaryFromReader(message: SubscribeOrderBookRequest, reader: jspb.BinaryReader): SubscribeOrderBookRequest;
}

export namespace SubscribeOrderBookRequest {
  export type AsObject = {
    subscriptionAction: SubscriptionAction,
    instrumentsList: Array<OrderBookInstrument.AsObject>,
  }
}

export class OrderBookInstrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): OrderBookInstrument;

  getDepth(): number;
  setDepth(value: number): OrderBookInstrument;

  getInstrumentId(): string;
  setInstrumentId(value: string): OrderBookInstrument;

  getOrderBookType(): OrderBookType;
  setOrderBookType(value: OrderBookType): OrderBookInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBookInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBookInstrument): OrderBookInstrument.AsObject;
  static serializeBinaryToWriter(message: OrderBookInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBookInstrument;
  static deserializeBinaryFromReader(message: OrderBookInstrument, reader: jspb.BinaryReader): OrderBookInstrument;
}

export namespace OrderBookInstrument {
  export type AsObject = {
    figi: string,
    depth: number,
    instrumentId: string,
    orderBookType: OrderBookType,
  }
}

export class SubscribeOrderBookResponse extends jspb.Message {
  getTrackingId(): string;
  setTrackingId(value: string): SubscribeOrderBookResponse;

  getOrderBookSubscriptionsList(): Array<OrderBookSubscription>;
  setOrderBookSubscriptionsList(value: Array<OrderBookSubscription>): SubscribeOrderBookResponse;
  clearOrderBookSubscriptionsList(): SubscribeOrderBookResponse;
  addOrderBookSubscriptions(value?: OrderBookSubscription, index?: number): OrderBookSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeOrderBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeOrderBookResponse): SubscribeOrderBookResponse.AsObject;
  static serializeBinaryToWriter(message: SubscribeOrderBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeOrderBookResponse;
  static deserializeBinaryFromReader(message: SubscribeOrderBookResponse, reader: jspb.BinaryReader): SubscribeOrderBookResponse;
}

export namespace SubscribeOrderBookResponse {
  export type AsObject = {
    trackingId: string,
    orderBookSubscriptionsList: Array<OrderBookSubscription.AsObject>,
  }
}

export class OrderBookSubscription extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): OrderBookSubscription;

  getDepth(): number;
  setDepth(value: number): OrderBookSubscription;

  getSubscriptionStatus(): SubscriptionStatus;
  setSubscriptionStatus(value: SubscriptionStatus): OrderBookSubscription;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): OrderBookSubscription;

  getStreamId(): string;
  setStreamId(value: string): OrderBookSubscription;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): OrderBookSubscription;

  getOrderBookType(): OrderBookType;
  setOrderBookType(value: OrderBookType): OrderBookSubscription;

  getSubscriptionAction(): SubscriptionAction;
  setSubscriptionAction(value: SubscriptionAction): OrderBookSubscription;

  getTicker(): string;
  setTicker(value: string): OrderBookSubscription;

  getClassCode(): string;
  setClassCode(value: string): OrderBookSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBookSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBookSubscription): OrderBookSubscription.AsObject;
  static serializeBinaryToWriter(message: OrderBookSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBookSubscription;
  static deserializeBinaryFromReader(message: OrderBookSubscription, reader: jspb.BinaryReader): OrderBookSubscription;
}

export namespace OrderBookSubscription {
  export type AsObject = {
    figi: string,
    depth: number,
    subscriptionStatus: SubscriptionStatus,
    instrumentUid: string,
    streamId: string,
    subscriptionId: string,
    orderBookType: OrderBookType,
    subscriptionAction: SubscriptionAction,
    ticker: string,
    classCode: string,
  }
}

export class SubscribeTradesRequest extends jspb.Message {
  getSubscriptionAction(): SubscriptionAction;
  setSubscriptionAction(value: SubscriptionAction): SubscribeTradesRequest;

  getInstrumentsList(): Array<TradeInstrument>;
  setInstrumentsList(value: Array<TradeInstrument>): SubscribeTradesRequest;
  clearInstrumentsList(): SubscribeTradesRequest;
  addInstruments(value?: TradeInstrument, index?: number): TradeInstrument;

  getTradeSource(): TradeSourceType;
  setTradeSource(value: TradeSourceType): SubscribeTradesRequest;

  getWithOpenInterest(): boolean;
  setWithOpenInterest(value: boolean): SubscribeTradesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeTradesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeTradesRequest): SubscribeTradesRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeTradesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeTradesRequest;
  static deserializeBinaryFromReader(message: SubscribeTradesRequest, reader: jspb.BinaryReader): SubscribeTradesRequest;
}

export namespace SubscribeTradesRequest {
  export type AsObject = {
    subscriptionAction: SubscriptionAction,
    instrumentsList: Array<TradeInstrument.AsObject>,
    tradeSource: TradeSourceType,
    withOpenInterest: boolean,
  }
}

export class TradeInstrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): TradeInstrument;

  getInstrumentId(): string;
  setInstrumentId(value: string): TradeInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: TradeInstrument): TradeInstrument.AsObject;
  static serializeBinaryToWriter(message: TradeInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeInstrument;
  static deserializeBinaryFromReader(message: TradeInstrument, reader: jspb.BinaryReader): TradeInstrument;
}

export namespace TradeInstrument {
  export type AsObject = {
    figi: string,
    instrumentId: string,
  }
}

export class SubscribeTradesResponse extends jspb.Message {
  getTrackingId(): string;
  setTrackingId(value: string): SubscribeTradesResponse;

  getTradeSubscriptionsList(): Array<TradeSubscription>;
  setTradeSubscriptionsList(value: Array<TradeSubscription>): SubscribeTradesResponse;
  clearTradeSubscriptionsList(): SubscribeTradesResponse;
  addTradeSubscriptions(value?: TradeSubscription, index?: number): TradeSubscription;

  getTradeSource(): TradeSourceType;
  setTradeSource(value: TradeSourceType): SubscribeTradesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeTradesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeTradesResponse): SubscribeTradesResponse.AsObject;
  static serializeBinaryToWriter(message: SubscribeTradesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeTradesResponse;
  static deserializeBinaryFromReader(message: SubscribeTradesResponse, reader: jspb.BinaryReader): SubscribeTradesResponse;
}

export namespace SubscribeTradesResponse {
  export type AsObject = {
    trackingId: string,
    tradeSubscriptionsList: Array<TradeSubscription.AsObject>,
    tradeSource: TradeSourceType,
  }
}

export class TradeSubscription extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): TradeSubscription;

  getSubscriptionStatus(): SubscriptionStatus;
  setSubscriptionStatus(value: SubscriptionStatus): TradeSubscription;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): TradeSubscription;

  getStreamId(): string;
  setStreamId(value: string): TradeSubscription;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): TradeSubscription;

  getWithOpenInterest(): boolean;
  setWithOpenInterest(value: boolean): TradeSubscription;

  getSubscriptionAction(): SubscriptionAction;
  setSubscriptionAction(value: SubscriptionAction): TradeSubscription;

  getTicker(): string;
  setTicker(value: string): TradeSubscription;

  getClassCode(): string;
  setClassCode(value: string): TradeSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: TradeSubscription): TradeSubscription.AsObject;
  static serializeBinaryToWriter(message: TradeSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeSubscription;
  static deserializeBinaryFromReader(message: TradeSubscription, reader: jspb.BinaryReader): TradeSubscription;
}

export namespace TradeSubscription {
  export type AsObject = {
    figi: string,
    subscriptionStatus: SubscriptionStatus,
    instrumentUid: string,
    streamId: string,
    subscriptionId: string,
    withOpenInterest: boolean,
    subscriptionAction: SubscriptionAction,
    ticker: string,
    classCode: string,
  }
}

export class SubscribeInfoRequest extends jspb.Message {
  getSubscriptionAction(): SubscriptionAction;
  setSubscriptionAction(value: SubscriptionAction): SubscribeInfoRequest;

  getInstrumentsList(): Array<InfoInstrument>;
  setInstrumentsList(value: Array<InfoInstrument>): SubscribeInfoRequest;
  clearInstrumentsList(): SubscribeInfoRequest;
  addInstruments(value?: InfoInstrument, index?: number): InfoInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeInfoRequest): SubscribeInfoRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeInfoRequest;
  static deserializeBinaryFromReader(message: SubscribeInfoRequest, reader: jspb.BinaryReader): SubscribeInfoRequest;
}

export namespace SubscribeInfoRequest {
  export type AsObject = {
    subscriptionAction: SubscriptionAction,
    instrumentsList: Array<InfoInstrument.AsObject>,
  }
}

export class InfoInstrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): InfoInstrument;

  getInstrumentId(): string;
  setInstrumentId(value: string): InfoInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: InfoInstrument): InfoInstrument.AsObject;
  static serializeBinaryToWriter(message: InfoInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoInstrument;
  static deserializeBinaryFromReader(message: InfoInstrument, reader: jspb.BinaryReader): InfoInstrument;
}

export namespace InfoInstrument {
  export type AsObject = {
    figi: string,
    instrumentId: string,
  }
}

export class SubscribeInfoResponse extends jspb.Message {
  getTrackingId(): string;
  setTrackingId(value: string): SubscribeInfoResponse;

  getInfoSubscriptionsList(): Array<InfoSubscription>;
  setInfoSubscriptionsList(value: Array<InfoSubscription>): SubscribeInfoResponse;
  clearInfoSubscriptionsList(): SubscribeInfoResponse;
  addInfoSubscriptions(value?: InfoSubscription, index?: number): InfoSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeInfoResponse): SubscribeInfoResponse.AsObject;
  static serializeBinaryToWriter(message: SubscribeInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeInfoResponse;
  static deserializeBinaryFromReader(message: SubscribeInfoResponse, reader: jspb.BinaryReader): SubscribeInfoResponse;
}

export namespace SubscribeInfoResponse {
  export type AsObject = {
    trackingId: string,
    infoSubscriptionsList: Array<InfoSubscription.AsObject>,
  }
}

export class InfoSubscription extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): InfoSubscription;

  getSubscriptionStatus(): SubscriptionStatus;
  setSubscriptionStatus(value: SubscriptionStatus): InfoSubscription;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): InfoSubscription;

  getStreamId(): string;
  setStreamId(value: string): InfoSubscription;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): InfoSubscription;

  getSubscriptionAction(): SubscriptionAction;
  setSubscriptionAction(value: SubscriptionAction): InfoSubscription;

  getTicker(): string;
  setTicker(value: string): InfoSubscription;

  getClassCode(): string;
  setClassCode(value: string): InfoSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: InfoSubscription): InfoSubscription.AsObject;
  static serializeBinaryToWriter(message: InfoSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoSubscription;
  static deserializeBinaryFromReader(message: InfoSubscription, reader: jspb.BinaryReader): InfoSubscription;
}

export namespace InfoSubscription {
  export type AsObject = {
    figi: string,
    subscriptionStatus: SubscriptionStatus,
    instrumentUid: string,
    streamId: string,
    subscriptionId: string,
    subscriptionAction: SubscriptionAction,
    ticker: string,
    classCode: string,
  }
}

export class SubscribeLastPriceRequest extends jspb.Message {
  getSubscriptionAction(): SubscriptionAction;
  setSubscriptionAction(value: SubscriptionAction): SubscribeLastPriceRequest;

  getInstrumentsList(): Array<LastPriceInstrument>;
  setInstrumentsList(value: Array<LastPriceInstrument>): SubscribeLastPriceRequest;
  clearInstrumentsList(): SubscribeLastPriceRequest;
  addInstruments(value?: LastPriceInstrument, index?: number): LastPriceInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeLastPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeLastPriceRequest): SubscribeLastPriceRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeLastPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeLastPriceRequest;
  static deserializeBinaryFromReader(message: SubscribeLastPriceRequest, reader: jspb.BinaryReader): SubscribeLastPriceRequest;
}

export namespace SubscribeLastPriceRequest {
  export type AsObject = {
    subscriptionAction: SubscriptionAction,
    instrumentsList: Array<LastPriceInstrument.AsObject>,
  }
}

export class LastPriceInstrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): LastPriceInstrument;

  getInstrumentId(): string;
  setInstrumentId(value: string): LastPriceInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastPriceInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: LastPriceInstrument): LastPriceInstrument.AsObject;
  static serializeBinaryToWriter(message: LastPriceInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastPriceInstrument;
  static deserializeBinaryFromReader(message: LastPriceInstrument, reader: jspb.BinaryReader): LastPriceInstrument;
}

export namespace LastPriceInstrument {
  export type AsObject = {
    figi: string,
    instrumentId: string,
  }
}

export class SubscribeLastPriceResponse extends jspb.Message {
  getTrackingId(): string;
  setTrackingId(value: string): SubscribeLastPriceResponse;

  getLastPriceSubscriptionsList(): Array<LastPriceSubscription>;
  setLastPriceSubscriptionsList(value: Array<LastPriceSubscription>): SubscribeLastPriceResponse;
  clearLastPriceSubscriptionsList(): SubscribeLastPriceResponse;
  addLastPriceSubscriptions(value?: LastPriceSubscription, index?: number): LastPriceSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeLastPriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeLastPriceResponse): SubscribeLastPriceResponse.AsObject;
  static serializeBinaryToWriter(message: SubscribeLastPriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeLastPriceResponse;
  static deserializeBinaryFromReader(message: SubscribeLastPriceResponse, reader: jspb.BinaryReader): SubscribeLastPriceResponse;
}

export namespace SubscribeLastPriceResponse {
  export type AsObject = {
    trackingId: string,
    lastPriceSubscriptionsList: Array<LastPriceSubscription.AsObject>,
  }
}

export class LastPriceSubscription extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): LastPriceSubscription;

  getSubscriptionStatus(): SubscriptionStatus;
  setSubscriptionStatus(value: SubscriptionStatus): LastPriceSubscription;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): LastPriceSubscription;

  getStreamId(): string;
  setStreamId(value: string): LastPriceSubscription;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): LastPriceSubscription;

  getSubscriptionAction(): SubscriptionAction;
  setSubscriptionAction(value: SubscriptionAction): LastPriceSubscription;

  getTicker(): string;
  setTicker(value: string): LastPriceSubscription;

  getClassCode(): string;
  setClassCode(value: string): LastPriceSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastPriceSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: LastPriceSubscription): LastPriceSubscription.AsObject;
  static serializeBinaryToWriter(message: LastPriceSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastPriceSubscription;
  static deserializeBinaryFromReader(message: LastPriceSubscription, reader: jspb.BinaryReader): LastPriceSubscription;
}

export namespace LastPriceSubscription {
  export type AsObject = {
    figi: string,
    subscriptionStatus: SubscriptionStatus,
    instrumentUid: string,
    streamId: string,
    subscriptionId: string,
    subscriptionAction: SubscriptionAction,
    ticker: string,
    classCode: string,
  }
}

export class Candle extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): Candle;

  getInterval(): SubscriptionInterval;
  setInterval(value: SubscriptionInterval): Candle;

  getOpen(): tinvest_common_pb.Quotation | undefined;
  setOpen(value?: tinvest_common_pb.Quotation): Candle;
  hasOpen(): boolean;
  clearOpen(): Candle;

  getHigh(): tinvest_common_pb.Quotation | undefined;
  setHigh(value?: tinvest_common_pb.Quotation): Candle;
  hasHigh(): boolean;
  clearHigh(): Candle;

  getLow(): tinvest_common_pb.Quotation | undefined;
  setLow(value?: tinvest_common_pb.Quotation): Candle;
  hasLow(): boolean;
  clearLow(): Candle;

  getClose(): tinvest_common_pb.Quotation | undefined;
  setClose(value?: tinvest_common_pb.Quotation): Candle;
  hasClose(): boolean;
  clearClose(): Candle;

  getVolume(): number;
  setVolume(value: number): Candle;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): Candle;
  hasTime(): boolean;
  clearTime(): Candle;

  getLastTradeTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastTradeTs(value?: google_protobuf_timestamp_pb.Timestamp): Candle;
  hasLastTradeTs(): boolean;
  clearLastTradeTs(): Candle;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): Candle;

  getTicker(): string;
  setTicker(value: string): Candle;

  getClassCode(): string;
  setClassCode(value: string): Candle;

  getVolumeBuy(): number;
  setVolumeBuy(value: number): Candle;

  getVolumeSell(): number;
  setVolumeSell(value: number): Candle;

  getCandleSourceType(): CandleSource;
  setCandleSourceType(value: CandleSource): Candle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Candle.AsObject;
  static toObject(includeInstance: boolean, msg: Candle): Candle.AsObject;
  static serializeBinaryToWriter(message: Candle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Candle;
  static deserializeBinaryFromReader(message: Candle, reader: jspb.BinaryReader): Candle;
}

export namespace Candle {
  export type AsObject = {
    figi: string,
    interval: SubscriptionInterval,
    open?: tinvest_common_pb.Quotation.AsObject,
    high?: tinvest_common_pb.Quotation.AsObject,
    low?: tinvest_common_pb.Quotation.AsObject,
    close?: tinvest_common_pb.Quotation.AsObject,
    volume: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastTradeTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    instrumentUid: string,
    ticker: string,
    classCode: string,
    volumeBuy: number,
    volumeSell: number,
    candleSourceType: CandleSource,
  }
}

export class OrderBook extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): OrderBook;

  getDepth(): number;
  setDepth(value: number): OrderBook;

  getIsConsistent(): boolean;
  setIsConsistent(value: boolean): OrderBook;

  getBidsList(): Array<Order>;
  setBidsList(value: Array<Order>): OrderBook;
  clearBidsList(): OrderBook;
  addBids(value?: Order, index?: number): Order;

  getAsksList(): Array<Order>;
  setAsksList(value: Array<Order>): OrderBook;
  clearAsksList(): OrderBook;
  addAsks(value?: Order, index?: number): Order;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): OrderBook;
  hasTime(): boolean;
  clearTime(): OrderBook;

  getLimitUp(): tinvest_common_pb.Quotation | undefined;
  setLimitUp(value?: tinvest_common_pb.Quotation): OrderBook;
  hasLimitUp(): boolean;
  clearLimitUp(): OrderBook;

  getLimitDown(): tinvest_common_pb.Quotation | undefined;
  setLimitDown(value?: tinvest_common_pb.Quotation): OrderBook;
  hasLimitDown(): boolean;
  clearLimitDown(): OrderBook;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): OrderBook;

  getOrderBookType(): OrderBookType;
  setOrderBookType(value: OrderBookType): OrderBook;

  getTicker(): string;
  setTicker(value: string): OrderBook;

  getClassCode(): string;
  setClassCode(value: string): OrderBook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBook.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBook): OrderBook.AsObject;
  static serializeBinaryToWriter(message: OrderBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBook;
  static deserializeBinaryFromReader(message: OrderBook, reader: jspb.BinaryReader): OrderBook;
}

export namespace OrderBook {
  export type AsObject = {
    figi: string,
    depth: number,
    isConsistent: boolean,
    bidsList: Array<Order.AsObject>,
    asksList: Array<Order.AsObject>,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    limitUp?: tinvest_common_pb.Quotation.AsObject,
    limitDown?: tinvest_common_pb.Quotation.AsObject,
    instrumentUid: string,
    orderBookType: OrderBookType,
    ticker: string,
    classCode: string,
  }
}

export class Order extends jspb.Message {
  getPrice(): tinvest_common_pb.Quotation | undefined;
  setPrice(value?: tinvest_common_pb.Quotation): Order;
  hasPrice(): boolean;
  clearPrice(): Order;

  getQuantity(): number;
  setQuantity(value: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    price?: tinvest_common_pb.Quotation.AsObject,
    quantity: number,
  }
}

export class Trade extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): Trade;

  getDirection(): TradeDirection;
  setDirection(value: TradeDirection): Trade;

  getPrice(): tinvest_common_pb.Quotation | undefined;
  setPrice(value?: tinvest_common_pb.Quotation): Trade;
  hasPrice(): boolean;
  clearPrice(): Trade;

  getQuantity(): number;
  setQuantity(value: number): Trade;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): Trade;
  hasTime(): boolean;
  clearTime(): Trade;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): Trade;

  getTradeSource(): TradeSourceType;
  setTradeSource(value: TradeSourceType): Trade;

  getTicker(): string;
  setTicker(value: string): Trade;

  getClassCode(): string;
  setClassCode(value: string): Trade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trade.AsObject;
  static toObject(includeInstance: boolean, msg: Trade): Trade.AsObject;
  static serializeBinaryToWriter(message: Trade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trade;
  static deserializeBinaryFromReader(message: Trade, reader: jspb.BinaryReader): Trade;
}

export namespace Trade {
  export type AsObject = {
    figi: string,
    direction: TradeDirection,
    price?: tinvest_common_pb.Quotation.AsObject,
    quantity: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    instrumentUid: string,
    tradeSource: TradeSourceType,
    ticker: string,
    classCode: string,
  }
}

export class TradingStatus extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): TradingStatus;

  getTradingStatus(): tinvest_common_pb.SecurityTradingStatus;
  setTradingStatus(value: tinvest_common_pb.SecurityTradingStatus): TradingStatus;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingStatus;
  hasTime(): boolean;
  clearTime(): TradingStatus;

  getLimitOrderAvailableFlag(): boolean;
  setLimitOrderAvailableFlag(value: boolean): TradingStatus;

  getMarketOrderAvailableFlag(): boolean;
  setMarketOrderAvailableFlag(value: boolean): TradingStatus;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): TradingStatus;

  getTicker(): string;
  setTicker(value: string): TradingStatus;

  getClassCode(): string;
  setClassCode(value: string): TradingStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingStatus.AsObject;
  static toObject(includeInstance: boolean, msg: TradingStatus): TradingStatus.AsObject;
  static serializeBinaryToWriter(message: TradingStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingStatus;
  static deserializeBinaryFromReader(message: TradingStatus, reader: jspb.BinaryReader): TradingStatus;
}

export namespace TradingStatus {
  export type AsObject = {
    figi: string,
    tradingStatus: tinvest_common_pb.SecurityTradingStatus,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    limitOrderAvailableFlag: boolean,
    marketOrderAvailableFlag: boolean,
    instrumentUid: string,
    ticker: string,
    classCode: string,
  }
}

export class GetCandlesRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): GetCandlesRequest;
  hasFigi(): boolean;
  clearFigi(): GetCandlesRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetCandlesRequest;
  hasFrom(): boolean;
  clearFrom(): GetCandlesRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetCandlesRequest;
  hasTo(): boolean;
  clearTo(): GetCandlesRequest;

  getInterval(): CandleInterval;
  setInterval(value: CandleInterval): GetCandlesRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): GetCandlesRequest;
  hasInstrumentId(): boolean;
  clearInstrumentId(): GetCandlesRequest;

  getCandleSourceType(): GetCandlesRequest.CandleSource;
  setCandleSourceType(value: GetCandlesRequest.CandleSource): GetCandlesRequest;
  hasCandleSourceType(): boolean;
  clearCandleSourceType(): GetCandlesRequest;

  getLimit(): number;
  setLimit(value: number): GetCandlesRequest;
  hasLimit(): boolean;
  clearLimit(): GetCandlesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCandlesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCandlesRequest): GetCandlesRequest.AsObject;
  static serializeBinaryToWriter(message: GetCandlesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCandlesRequest;
  static deserializeBinaryFromReader(message: GetCandlesRequest, reader: jspb.BinaryReader): GetCandlesRequest;
}

export namespace GetCandlesRequest {
  export type AsObject = {
    figi?: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    interval: CandleInterval,
    instrumentId?: string,
    candleSourceType?: GetCandlesRequest.CandleSource,
    limit?: number,
  }

  export enum CandleSource { 
    CANDLE_SOURCE_UNSPECIFIED = 0,
    CANDLE_SOURCE_EXCHANGE = 1,
    CANDLE_SOURCE_INCLUDE_WEEKEND = 3,
  }

  export enum FigiCase { 
    _FIGI_NOT_SET = 0,
    FIGI = 1,
  }

  export enum InstrumentIdCase { 
    _INSTRUMENT_ID_NOT_SET = 0,
    INSTRUMENT_ID = 5,
  }

  export enum CandleSourceTypeCase { 
    _CANDLE_SOURCE_TYPE_NOT_SET = 0,
    CANDLE_SOURCE_TYPE = 7,
  }

  export enum LimitCase { 
    _LIMIT_NOT_SET = 0,
    LIMIT = 10,
  }
}

export class GetCandlesResponse extends jspb.Message {
  getCandlesList(): Array<HistoricCandle>;
  setCandlesList(value: Array<HistoricCandle>): GetCandlesResponse;
  clearCandlesList(): GetCandlesResponse;
  addCandles(value?: HistoricCandle, index?: number): HistoricCandle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCandlesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCandlesResponse): GetCandlesResponse.AsObject;
  static serializeBinaryToWriter(message: GetCandlesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCandlesResponse;
  static deserializeBinaryFromReader(message: GetCandlesResponse, reader: jspb.BinaryReader): GetCandlesResponse;
}

export namespace GetCandlesResponse {
  export type AsObject = {
    candlesList: Array<HistoricCandle.AsObject>,
  }
}

export class HistoricCandle extends jspb.Message {
  getOpen(): tinvest_common_pb.Quotation | undefined;
  setOpen(value?: tinvest_common_pb.Quotation): HistoricCandle;
  hasOpen(): boolean;
  clearOpen(): HistoricCandle;

  getHigh(): tinvest_common_pb.Quotation | undefined;
  setHigh(value?: tinvest_common_pb.Quotation): HistoricCandle;
  hasHigh(): boolean;
  clearHigh(): HistoricCandle;

  getLow(): tinvest_common_pb.Quotation | undefined;
  setLow(value?: tinvest_common_pb.Quotation): HistoricCandle;
  hasLow(): boolean;
  clearLow(): HistoricCandle;

  getClose(): tinvest_common_pb.Quotation | undefined;
  setClose(value?: tinvest_common_pb.Quotation): HistoricCandle;
  hasClose(): boolean;
  clearClose(): HistoricCandle;

  getVolume(): number;
  setVolume(value: number): HistoricCandle;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): HistoricCandle;
  hasTime(): boolean;
  clearTime(): HistoricCandle;

  getIsComplete(): boolean;
  setIsComplete(value: boolean): HistoricCandle;

  getCandleSource(): CandleSource;
  setCandleSource(value: CandleSource): HistoricCandle;

  getVolumeBuy(): number;
  setVolumeBuy(value: number): HistoricCandle;

  getVolumeSell(): number;
  setVolumeSell(value: number): HistoricCandle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoricCandle.AsObject;
  static toObject(includeInstance: boolean, msg: HistoricCandle): HistoricCandle.AsObject;
  static serializeBinaryToWriter(message: HistoricCandle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoricCandle;
  static deserializeBinaryFromReader(message: HistoricCandle, reader: jspb.BinaryReader): HistoricCandle;
}

export namespace HistoricCandle {
  export type AsObject = {
    open?: tinvest_common_pb.Quotation.AsObject,
    high?: tinvest_common_pb.Quotation.AsObject,
    low?: tinvest_common_pb.Quotation.AsObject,
    close?: tinvest_common_pb.Quotation.AsObject,
    volume: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isComplete: boolean,
    candleSource: CandleSource,
    volumeBuy: number,
    volumeSell: number,
  }
}

export class GetLastPricesRequest extends jspb.Message {
  getFigiList(): Array<string>;
  setFigiList(value: Array<string>): GetLastPricesRequest;
  clearFigiList(): GetLastPricesRequest;
  addFigi(value: string, index?: number): GetLastPricesRequest;

  getInstrumentIdList(): Array<string>;
  setInstrumentIdList(value: Array<string>): GetLastPricesRequest;
  clearInstrumentIdList(): GetLastPricesRequest;
  addInstrumentId(value: string, index?: number): GetLastPricesRequest;

  getLastPriceType(): LastPriceType;
  setLastPriceType(value: LastPriceType): GetLastPricesRequest;

  getInstrumentStatus(): tinvest_common_pb.InstrumentStatus;
  setInstrumentStatus(value: tinvest_common_pb.InstrumentStatus): GetLastPricesRequest;
  hasInstrumentStatus(): boolean;
  clearInstrumentStatus(): GetLastPricesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastPricesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastPricesRequest): GetLastPricesRequest.AsObject;
  static serializeBinaryToWriter(message: GetLastPricesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastPricesRequest;
  static deserializeBinaryFromReader(message: GetLastPricesRequest, reader: jspb.BinaryReader): GetLastPricesRequest;
}

export namespace GetLastPricesRequest {
  export type AsObject = {
    figiList: Array<string>,
    instrumentIdList: Array<string>,
    lastPriceType: LastPriceType,
    instrumentStatus?: tinvest_common_pb.InstrumentStatus,
  }

  export enum InstrumentStatusCase { 
    _INSTRUMENT_STATUS_NOT_SET = 0,
    INSTRUMENT_STATUS = 9,
  }
}

export class GetLastPricesResponse extends jspb.Message {
  getLastPricesList(): Array<LastPrice>;
  setLastPricesList(value: Array<LastPrice>): GetLastPricesResponse;
  clearLastPricesList(): GetLastPricesResponse;
  addLastPrices(value?: LastPrice, index?: number): LastPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastPricesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastPricesResponse): GetLastPricesResponse.AsObject;
  static serializeBinaryToWriter(message: GetLastPricesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastPricesResponse;
  static deserializeBinaryFromReader(message: GetLastPricesResponse, reader: jspb.BinaryReader): GetLastPricesResponse;
}

export namespace GetLastPricesResponse {
  export type AsObject = {
    lastPricesList: Array<LastPrice.AsObject>,
  }
}

export class LastPrice extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): LastPrice;

  getPrice(): tinvest_common_pb.Quotation | undefined;
  setPrice(value?: tinvest_common_pb.Quotation): LastPrice;
  hasPrice(): boolean;
  clearPrice(): LastPrice;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): LastPrice;
  hasTime(): boolean;
  clearTime(): LastPrice;

  getTicker(): string;
  setTicker(value: string): LastPrice;

  getClassCode(): string;
  setClassCode(value: string): LastPrice;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): LastPrice;

  getLastPriceType(): LastPriceType;
  setLastPriceType(value: LastPriceType): LastPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastPrice.AsObject;
  static toObject(includeInstance: boolean, msg: LastPrice): LastPrice.AsObject;
  static serializeBinaryToWriter(message: LastPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastPrice;
  static deserializeBinaryFromReader(message: LastPrice, reader: jspb.BinaryReader): LastPrice;
}

export namespace LastPrice {
  export type AsObject = {
    figi: string,
    price?: tinvest_common_pb.Quotation.AsObject,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ticker: string,
    classCode: string,
    instrumentUid: string,
    lastPriceType: LastPriceType,
  }
}

export class OpenInterest extends jspb.Message {
  getInstrumentUid(): string;
  setInstrumentUid(value: string): OpenInterest;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): OpenInterest;
  hasTime(): boolean;
  clearTime(): OpenInterest;

  getOpenInterest(): number;
  setOpenInterest(value: number): OpenInterest;

  getTicker(): string;
  setTicker(value: string): OpenInterest;

  getClassCode(): string;
  setClassCode(value: string): OpenInterest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenInterest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenInterest): OpenInterest.AsObject;
  static serializeBinaryToWriter(message: OpenInterest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenInterest;
  static deserializeBinaryFromReader(message: OpenInterest, reader: jspb.BinaryReader): OpenInterest;
}

export namespace OpenInterest {
  export type AsObject = {
    instrumentUid: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    openInterest: number,
    ticker: string,
    classCode: string,
  }
}

export class GetOrderBookRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): GetOrderBookRequest;
  hasFigi(): boolean;
  clearFigi(): GetOrderBookRequest;

  getDepth(): number;
  setDepth(value: number): GetOrderBookRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): GetOrderBookRequest;
  hasInstrumentId(): boolean;
  clearInstrumentId(): GetOrderBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderBookRequest): GetOrderBookRequest.AsObject;
  static serializeBinaryToWriter(message: GetOrderBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderBookRequest;
  static deserializeBinaryFromReader(message: GetOrderBookRequest, reader: jspb.BinaryReader): GetOrderBookRequest;
}

export namespace GetOrderBookRequest {
  export type AsObject = {
    figi?: string,
    depth: number,
    instrumentId?: string,
  }

  export enum FigiCase { 
    _FIGI_NOT_SET = 0,
    FIGI = 1,
  }

  export enum InstrumentIdCase { 
    _INSTRUMENT_ID_NOT_SET = 0,
    INSTRUMENT_ID = 3,
  }
}

export class GetOrderBookResponse extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): GetOrderBookResponse;

  getDepth(): number;
  setDepth(value: number): GetOrderBookResponse;

  getBidsList(): Array<Order>;
  setBidsList(value: Array<Order>): GetOrderBookResponse;
  clearBidsList(): GetOrderBookResponse;
  addBids(value?: Order, index?: number): Order;

  getAsksList(): Array<Order>;
  setAsksList(value: Array<Order>): GetOrderBookResponse;
  clearAsksList(): GetOrderBookResponse;
  addAsks(value?: Order, index?: number): Order;

  getLastPrice(): tinvest_common_pb.Quotation | undefined;
  setLastPrice(value?: tinvest_common_pb.Quotation): GetOrderBookResponse;
  hasLastPrice(): boolean;
  clearLastPrice(): GetOrderBookResponse;

  getClosePrice(): tinvest_common_pb.Quotation | undefined;
  setClosePrice(value?: tinvest_common_pb.Quotation): GetOrderBookResponse;
  hasClosePrice(): boolean;
  clearClosePrice(): GetOrderBookResponse;

  getLimitUp(): tinvest_common_pb.Quotation | undefined;
  setLimitUp(value?: tinvest_common_pb.Quotation): GetOrderBookResponse;
  hasLimitUp(): boolean;
  clearLimitUp(): GetOrderBookResponse;

  getLimitDown(): tinvest_common_pb.Quotation | undefined;
  setLimitDown(value?: tinvest_common_pb.Quotation): GetOrderBookResponse;
  hasLimitDown(): boolean;
  clearLimitDown(): GetOrderBookResponse;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): GetOrderBookResponse;

  getTicker(): string;
  setTicker(value: string): GetOrderBookResponse;

  getClassCode(): string;
  setClassCode(value: string): GetOrderBookResponse;

  getLastPriceTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastPriceTs(value?: google_protobuf_timestamp_pb.Timestamp): GetOrderBookResponse;
  hasLastPriceTs(): boolean;
  clearLastPriceTs(): GetOrderBookResponse;

  getClosePriceTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClosePriceTs(value?: google_protobuf_timestamp_pb.Timestamp): GetOrderBookResponse;
  hasClosePriceTs(): boolean;
  clearClosePriceTs(): GetOrderBookResponse;

  getOrderbookTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOrderbookTs(value?: google_protobuf_timestamp_pb.Timestamp): GetOrderBookResponse;
  hasOrderbookTs(): boolean;
  clearOrderbookTs(): GetOrderBookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderBookResponse): GetOrderBookResponse.AsObject;
  static serializeBinaryToWriter(message: GetOrderBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderBookResponse;
  static deserializeBinaryFromReader(message: GetOrderBookResponse, reader: jspb.BinaryReader): GetOrderBookResponse;
}

export namespace GetOrderBookResponse {
  export type AsObject = {
    figi: string,
    depth: number,
    bidsList: Array<Order.AsObject>,
    asksList: Array<Order.AsObject>,
    lastPrice?: tinvest_common_pb.Quotation.AsObject,
    closePrice?: tinvest_common_pb.Quotation.AsObject,
    limitUp?: tinvest_common_pb.Quotation.AsObject,
    limitDown?: tinvest_common_pb.Quotation.AsObject,
    instrumentUid: string,
    ticker: string,
    classCode: string,
    lastPriceTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closePriceTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    orderbookTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetTradingStatusRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): GetTradingStatusRequest;
  hasFigi(): boolean;
  clearFigi(): GetTradingStatusRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): GetTradingStatusRequest;
  hasInstrumentId(): boolean;
  clearInstrumentId(): GetTradingStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradingStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradingStatusRequest): GetTradingStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetTradingStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradingStatusRequest;
  static deserializeBinaryFromReader(message: GetTradingStatusRequest, reader: jspb.BinaryReader): GetTradingStatusRequest;
}

export namespace GetTradingStatusRequest {
  export type AsObject = {
    figi?: string,
    instrumentId?: string,
  }

  export enum FigiCase { 
    _FIGI_NOT_SET = 0,
    FIGI = 1,
  }

  export enum InstrumentIdCase { 
    _INSTRUMENT_ID_NOT_SET = 0,
    INSTRUMENT_ID = 2,
  }
}

export class GetTradingStatusesRequest extends jspb.Message {
  getInstrumentIdList(): Array<string>;
  setInstrumentIdList(value: Array<string>): GetTradingStatusesRequest;
  clearInstrumentIdList(): GetTradingStatusesRequest;
  addInstrumentId(value: string, index?: number): GetTradingStatusesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradingStatusesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradingStatusesRequest): GetTradingStatusesRequest.AsObject;
  static serializeBinaryToWriter(message: GetTradingStatusesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradingStatusesRequest;
  static deserializeBinaryFromReader(message: GetTradingStatusesRequest, reader: jspb.BinaryReader): GetTradingStatusesRequest;
}

export namespace GetTradingStatusesRequest {
  export type AsObject = {
    instrumentIdList: Array<string>,
  }
}

export class GetTradingStatusesResponse extends jspb.Message {
  getTradingStatusesList(): Array<GetTradingStatusResponse>;
  setTradingStatusesList(value: Array<GetTradingStatusResponse>): GetTradingStatusesResponse;
  clearTradingStatusesList(): GetTradingStatusesResponse;
  addTradingStatuses(value?: GetTradingStatusResponse, index?: number): GetTradingStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradingStatusesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradingStatusesResponse): GetTradingStatusesResponse.AsObject;
  static serializeBinaryToWriter(message: GetTradingStatusesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradingStatusesResponse;
  static deserializeBinaryFromReader(message: GetTradingStatusesResponse, reader: jspb.BinaryReader): GetTradingStatusesResponse;
}

export namespace GetTradingStatusesResponse {
  export type AsObject = {
    tradingStatusesList: Array<GetTradingStatusResponse.AsObject>,
  }
}

export class GetTradingStatusResponse extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): GetTradingStatusResponse;

  getTradingStatus(): tinvest_common_pb.SecurityTradingStatus;
  setTradingStatus(value: tinvest_common_pb.SecurityTradingStatus): GetTradingStatusResponse;

  getLimitOrderAvailableFlag(): boolean;
  setLimitOrderAvailableFlag(value: boolean): GetTradingStatusResponse;

  getMarketOrderAvailableFlag(): boolean;
  setMarketOrderAvailableFlag(value: boolean): GetTradingStatusResponse;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): GetTradingStatusResponse;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): GetTradingStatusResponse;

  getBestpriceOrderAvailableFlag(): boolean;
  setBestpriceOrderAvailableFlag(value: boolean): GetTradingStatusResponse;

  getOnlyBestPrice(): boolean;
  setOnlyBestPrice(value: boolean): GetTradingStatusResponse;

  getTicker(): string;
  setTicker(value: string): GetTradingStatusResponse;

  getClassCode(): string;
  setClassCode(value: string): GetTradingStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradingStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradingStatusResponse): GetTradingStatusResponse.AsObject;
  static serializeBinaryToWriter(message: GetTradingStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradingStatusResponse;
  static deserializeBinaryFromReader(message: GetTradingStatusResponse, reader: jspb.BinaryReader): GetTradingStatusResponse;
}

export namespace GetTradingStatusResponse {
  export type AsObject = {
    figi: string,
    tradingStatus: tinvest_common_pb.SecurityTradingStatus,
    limitOrderAvailableFlag: boolean,
    marketOrderAvailableFlag: boolean,
    apiTradeAvailableFlag: boolean,
    instrumentUid: string,
    bestpriceOrderAvailableFlag: boolean,
    onlyBestPrice: boolean,
    ticker: string,
    classCode: string,
  }
}

export class GetLastTradesRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): GetLastTradesRequest;
  hasFigi(): boolean;
  clearFigi(): GetLastTradesRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetLastTradesRequest;
  hasFrom(): boolean;
  clearFrom(): GetLastTradesRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetLastTradesRequest;
  hasTo(): boolean;
  clearTo(): GetLastTradesRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): GetLastTradesRequest;
  hasInstrumentId(): boolean;
  clearInstrumentId(): GetLastTradesRequest;

  getTradeSource(): TradeSourceType;
  setTradeSource(value: TradeSourceType): GetLastTradesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastTradesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastTradesRequest): GetLastTradesRequest.AsObject;
  static serializeBinaryToWriter(message: GetLastTradesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastTradesRequest;
  static deserializeBinaryFromReader(message: GetLastTradesRequest, reader: jspb.BinaryReader): GetLastTradesRequest;
}

export namespace GetLastTradesRequest {
  export type AsObject = {
    figi?: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    instrumentId?: string,
    tradeSource: TradeSourceType,
  }

  export enum FigiCase { 
    _FIGI_NOT_SET = 0,
    FIGI = 1,
  }

  export enum InstrumentIdCase { 
    _INSTRUMENT_ID_NOT_SET = 0,
    INSTRUMENT_ID = 4,
  }
}

export class GetLastTradesResponse extends jspb.Message {
  getTradesList(): Array<Trade>;
  setTradesList(value: Array<Trade>): GetLastTradesResponse;
  clearTradesList(): GetLastTradesResponse;
  addTrades(value?: Trade, index?: number): Trade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastTradesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastTradesResponse): GetLastTradesResponse.AsObject;
  static serializeBinaryToWriter(message: GetLastTradesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastTradesResponse;
  static deserializeBinaryFromReader(message: GetLastTradesResponse, reader: jspb.BinaryReader): GetLastTradesResponse;
}

export namespace GetLastTradesResponse {
  export type AsObject = {
    tradesList: Array<Trade.AsObject>,
  }
}

export class GetMySubscriptions extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMySubscriptions.AsObject;
  static toObject(includeInstance: boolean, msg: GetMySubscriptions): GetMySubscriptions.AsObject;
  static serializeBinaryToWriter(message: GetMySubscriptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMySubscriptions;
  static deserializeBinaryFromReader(message: GetMySubscriptions, reader: jspb.BinaryReader): GetMySubscriptions;
}

export namespace GetMySubscriptions {
  export type AsObject = {
  }
}

export class GetClosePricesRequest extends jspb.Message {
  getInstrumentsList(): Array<InstrumentClosePriceRequest>;
  setInstrumentsList(value: Array<InstrumentClosePriceRequest>): GetClosePricesRequest;
  clearInstrumentsList(): GetClosePricesRequest;
  addInstruments(value?: InstrumentClosePriceRequest, index?: number): InstrumentClosePriceRequest;

  getInstrumentStatus(): tinvest_common_pb.InstrumentStatus;
  setInstrumentStatus(value: tinvest_common_pb.InstrumentStatus): GetClosePricesRequest;
  hasInstrumentStatus(): boolean;
  clearInstrumentStatus(): GetClosePricesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClosePricesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClosePricesRequest): GetClosePricesRequest.AsObject;
  static serializeBinaryToWriter(message: GetClosePricesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClosePricesRequest;
  static deserializeBinaryFromReader(message: GetClosePricesRequest, reader: jspb.BinaryReader): GetClosePricesRequest;
}

export namespace GetClosePricesRequest {
  export type AsObject = {
    instrumentsList: Array<InstrumentClosePriceRequest.AsObject>,
    instrumentStatus?: tinvest_common_pb.InstrumentStatus,
  }

  export enum InstrumentStatusCase { 
    _INSTRUMENT_STATUS_NOT_SET = 0,
    INSTRUMENT_STATUS = 9,
  }
}

export class InstrumentClosePriceRequest extends jspb.Message {
  getInstrumentId(): string;
  setInstrumentId(value: string): InstrumentClosePriceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentClosePriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentClosePriceRequest): InstrumentClosePriceRequest.AsObject;
  static serializeBinaryToWriter(message: InstrumentClosePriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentClosePriceRequest;
  static deserializeBinaryFromReader(message: InstrumentClosePriceRequest, reader: jspb.BinaryReader): InstrumentClosePriceRequest;
}

export namespace InstrumentClosePriceRequest {
  export type AsObject = {
    instrumentId: string,
  }
}

export class GetClosePricesResponse extends jspb.Message {
  getClosePricesList(): Array<InstrumentClosePriceResponse>;
  setClosePricesList(value: Array<InstrumentClosePriceResponse>): GetClosePricesResponse;
  clearClosePricesList(): GetClosePricesResponse;
  addClosePrices(value?: InstrumentClosePriceResponse, index?: number): InstrumentClosePriceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClosePricesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetClosePricesResponse): GetClosePricesResponse.AsObject;
  static serializeBinaryToWriter(message: GetClosePricesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClosePricesResponse;
  static deserializeBinaryFromReader(message: GetClosePricesResponse, reader: jspb.BinaryReader): GetClosePricesResponse;
}

export namespace GetClosePricesResponse {
  export type AsObject = {
    closePricesList: Array<InstrumentClosePriceResponse.AsObject>,
  }
}

export class InstrumentClosePriceResponse extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): InstrumentClosePriceResponse;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): InstrumentClosePriceResponse;

  getTicker(): string;
  setTicker(value: string): InstrumentClosePriceResponse;

  getClassCode(): string;
  setClassCode(value: string): InstrumentClosePriceResponse;

  getPrice(): tinvest_common_pb.Quotation | undefined;
  setPrice(value?: tinvest_common_pb.Quotation): InstrumentClosePriceResponse;
  hasPrice(): boolean;
  clearPrice(): InstrumentClosePriceResponse;

  getEveningSessionPrice(): tinvest_common_pb.Quotation | undefined;
  setEveningSessionPrice(value?: tinvest_common_pb.Quotation): InstrumentClosePriceResponse;
  hasEveningSessionPrice(): boolean;
  clearEveningSessionPrice(): InstrumentClosePriceResponse;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): InstrumentClosePriceResponse;
  hasTime(): boolean;
  clearTime(): InstrumentClosePriceResponse;

  getEveningSessionPriceTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEveningSessionPriceTime(value?: google_protobuf_timestamp_pb.Timestamp): InstrumentClosePriceResponse;
  hasEveningSessionPriceTime(): boolean;
  clearEveningSessionPriceTime(): InstrumentClosePriceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentClosePriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentClosePriceResponse): InstrumentClosePriceResponse.AsObject;
  static serializeBinaryToWriter(message: InstrumentClosePriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentClosePriceResponse;
  static deserializeBinaryFromReader(message: InstrumentClosePriceResponse, reader: jspb.BinaryReader): InstrumentClosePriceResponse;
}

export namespace InstrumentClosePriceResponse {
  export type AsObject = {
    figi: string,
    instrumentUid: string,
    ticker: string,
    classCode: string,
    price?: tinvest_common_pb.Quotation.AsObject,
    eveningSessionPrice?: tinvest_common_pb.Quotation.AsObject,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    eveningSessionPriceTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetTechAnalysisRequest extends jspb.Message {
  getIndicatorType(): GetTechAnalysisRequest.IndicatorType;
  setIndicatorType(value: GetTechAnalysisRequest.IndicatorType): GetTechAnalysisRequest;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): GetTechAnalysisRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetTechAnalysisRequest;
  hasFrom(): boolean;
  clearFrom(): GetTechAnalysisRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetTechAnalysisRequest;
  hasTo(): boolean;
  clearTo(): GetTechAnalysisRequest;

  getInterval(): GetTechAnalysisRequest.IndicatorInterval;
  setInterval(value: GetTechAnalysisRequest.IndicatorInterval): GetTechAnalysisRequest;

  getTypeOfPrice(): GetTechAnalysisRequest.TypeOfPrice;
  setTypeOfPrice(value: GetTechAnalysisRequest.TypeOfPrice): GetTechAnalysisRequest;

  getLength(): number;
  setLength(value: number): GetTechAnalysisRequest;

  getDeviation(): GetTechAnalysisRequest.Deviation | undefined;
  setDeviation(value?: GetTechAnalysisRequest.Deviation): GetTechAnalysisRequest;
  hasDeviation(): boolean;
  clearDeviation(): GetTechAnalysisRequest;

  getSmoothing(): GetTechAnalysisRequest.Smoothing | undefined;
  setSmoothing(value?: GetTechAnalysisRequest.Smoothing): GetTechAnalysisRequest;
  hasSmoothing(): boolean;
  clearSmoothing(): GetTechAnalysisRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTechAnalysisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTechAnalysisRequest): GetTechAnalysisRequest.AsObject;
  static serializeBinaryToWriter(message: GetTechAnalysisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTechAnalysisRequest;
  static deserializeBinaryFromReader(message: GetTechAnalysisRequest, reader: jspb.BinaryReader): GetTechAnalysisRequest;
}

export namespace GetTechAnalysisRequest {
  export type AsObject = {
    indicatorType: GetTechAnalysisRequest.IndicatorType,
    instrumentUid: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    interval: GetTechAnalysisRequest.IndicatorInterval,
    typeOfPrice: GetTechAnalysisRequest.TypeOfPrice,
    length: number,
    deviation?: GetTechAnalysisRequest.Deviation.AsObject,
    smoothing?: GetTechAnalysisRequest.Smoothing.AsObject,
  }

  export class Smoothing extends jspb.Message {
    getFastLength(): number;
    setFastLength(value: number): Smoothing;

    getSlowLength(): number;
    setSlowLength(value: number): Smoothing;

    getSignalSmoothing(): number;
    setSignalSmoothing(value: number): Smoothing;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Smoothing.AsObject;
    static toObject(includeInstance: boolean, msg: Smoothing): Smoothing.AsObject;
    static serializeBinaryToWriter(message: Smoothing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Smoothing;
    static deserializeBinaryFromReader(message: Smoothing, reader: jspb.BinaryReader): Smoothing;
  }

  export namespace Smoothing {
    export type AsObject = {
      fastLength: number,
      slowLength: number,
      signalSmoothing: number,
    }
  }


  export class Deviation extends jspb.Message {
    getDeviationMultiplier(): tinvest_common_pb.Quotation | undefined;
    setDeviationMultiplier(value?: tinvest_common_pb.Quotation): Deviation;
    hasDeviationMultiplier(): boolean;
    clearDeviationMultiplier(): Deviation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Deviation.AsObject;
    static toObject(includeInstance: boolean, msg: Deviation): Deviation.AsObject;
    static serializeBinaryToWriter(message: Deviation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Deviation;
    static deserializeBinaryFromReader(message: Deviation, reader: jspb.BinaryReader): Deviation;
  }

  export namespace Deviation {
    export type AsObject = {
      deviationMultiplier?: tinvest_common_pb.Quotation.AsObject,
    }
  }


  export enum IndicatorInterval { 
    INDICATOR_INTERVAL_UNSPECIFIED = 0,
    INDICATOR_INTERVAL_ONE_MINUTE = 1,
    INDICATOR_INTERVAL_FIVE_MINUTES = 2,
    INDICATOR_INTERVAL_FIFTEEN_MINUTES = 3,
    INDICATOR_INTERVAL_ONE_HOUR = 4,
    INDICATOR_INTERVAL_ONE_DAY = 5,
    INDICATOR_INTERVAL_2_MIN = 6,
    INDICATOR_INTERVAL_3_MIN = 7,
    INDICATOR_INTERVAL_10_MIN = 8,
    INDICATOR_INTERVAL_30_MIN = 9,
    INDICATOR_INTERVAL_2_HOUR = 10,
    INDICATOR_INTERVAL_4_HOUR = 11,
    INDICATOR_INTERVAL_WEEK = 12,
    INDICATOR_INTERVAL_MONTH = 13,
  }

  export enum TypeOfPrice { 
    TYPE_OF_PRICE_UNSPECIFIED = 0,
    TYPE_OF_PRICE_CLOSE = 1,
    TYPE_OF_PRICE_OPEN = 2,
    TYPE_OF_PRICE_HIGH = 3,
    TYPE_OF_PRICE_LOW = 4,
    TYPE_OF_PRICE_AVG = 5,
  }

  export enum IndicatorType { 
    INDICATOR_TYPE_UNSPECIFIED = 0,
    INDICATOR_TYPE_BB = 1,
    INDICATOR_TYPE_EMA = 2,
    INDICATOR_TYPE_RSI = 3,
    INDICATOR_TYPE_MACD = 4,
    INDICATOR_TYPE_SMA = 5,
  }
}

export class GetTechAnalysisResponse extends jspb.Message {
  getTechnicalIndicatorsList(): Array<GetTechAnalysisResponse.TechAnalysisItem>;
  setTechnicalIndicatorsList(value: Array<GetTechAnalysisResponse.TechAnalysisItem>): GetTechAnalysisResponse;
  clearTechnicalIndicatorsList(): GetTechAnalysisResponse;
  addTechnicalIndicators(value?: GetTechAnalysisResponse.TechAnalysisItem, index?: number): GetTechAnalysisResponse.TechAnalysisItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTechAnalysisResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTechAnalysisResponse): GetTechAnalysisResponse.AsObject;
  static serializeBinaryToWriter(message: GetTechAnalysisResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTechAnalysisResponse;
  static deserializeBinaryFromReader(message: GetTechAnalysisResponse, reader: jspb.BinaryReader): GetTechAnalysisResponse;
}

export namespace GetTechAnalysisResponse {
  export type AsObject = {
    technicalIndicatorsList: Array<GetTechAnalysisResponse.TechAnalysisItem.AsObject>,
  }

  export class TechAnalysisItem extends jspb.Message {
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TechAnalysisItem;
    hasTimestamp(): boolean;
    clearTimestamp(): TechAnalysisItem;

    getMiddleBand(): tinvest_common_pb.Quotation | undefined;
    setMiddleBand(value?: tinvest_common_pb.Quotation): TechAnalysisItem;
    hasMiddleBand(): boolean;
    clearMiddleBand(): TechAnalysisItem;

    getUpperBand(): tinvest_common_pb.Quotation | undefined;
    setUpperBand(value?: tinvest_common_pb.Quotation): TechAnalysisItem;
    hasUpperBand(): boolean;
    clearUpperBand(): TechAnalysisItem;

    getLowerBand(): tinvest_common_pb.Quotation | undefined;
    setLowerBand(value?: tinvest_common_pb.Quotation): TechAnalysisItem;
    hasLowerBand(): boolean;
    clearLowerBand(): TechAnalysisItem;

    getSignal(): tinvest_common_pb.Quotation | undefined;
    setSignal(value?: tinvest_common_pb.Quotation): TechAnalysisItem;
    hasSignal(): boolean;
    clearSignal(): TechAnalysisItem;

    getMacd(): tinvest_common_pb.Quotation | undefined;
    setMacd(value?: tinvest_common_pb.Quotation): TechAnalysisItem;
    hasMacd(): boolean;
    clearMacd(): TechAnalysisItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TechAnalysisItem.AsObject;
    static toObject(includeInstance: boolean, msg: TechAnalysisItem): TechAnalysisItem.AsObject;
    static serializeBinaryToWriter(message: TechAnalysisItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TechAnalysisItem;
    static deserializeBinaryFromReader(message: TechAnalysisItem, reader: jspb.BinaryReader): TechAnalysisItem;
  }

  export namespace TechAnalysisItem {
    export type AsObject = {
      timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      middleBand?: tinvest_common_pb.Quotation.AsObject,
      upperBand?: tinvest_common_pb.Quotation.AsObject,
      lowerBand?: tinvest_common_pb.Quotation.AsObject,
      signal?: tinvest_common_pb.Quotation.AsObject,
      macd?: tinvest_common_pb.Quotation.AsObject,
    }

    export enum MiddleBandCase { 
      _MIDDLE_BAND_NOT_SET = 0,
      MIDDLE_BAND = 2,
    }

    export enum UpperBandCase { 
      _UPPER_BAND_NOT_SET = 0,
      UPPER_BAND = 3,
    }

    export enum LowerBandCase { 
      _LOWER_BAND_NOT_SET = 0,
      LOWER_BAND = 4,
    }

    export enum SignalCase { 
      _SIGNAL_NOT_SET = 0,
      SIGNAL = 5,
    }

    export enum MacdCase { 
      _MACD_NOT_SET = 0,
      MACD = 6,
    }
  }

}

export class GetMarketValuesRequest extends jspb.Message {
  getInstrumentIdList(): Array<string>;
  setInstrumentIdList(value: Array<string>): GetMarketValuesRequest;
  clearInstrumentIdList(): GetMarketValuesRequest;
  addInstrumentId(value: string, index?: number): GetMarketValuesRequest;

  getValuesList(): Array<MarketValueType>;
  setValuesList(value: Array<MarketValueType>): GetMarketValuesRequest;
  clearValuesList(): GetMarketValuesRequest;
  addValues(value: MarketValueType, index?: number): GetMarketValuesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketValuesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketValuesRequest): GetMarketValuesRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarketValuesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketValuesRequest;
  static deserializeBinaryFromReader(message: GetMarketValuesRequest, reader: jspb.BinaryReader): GetMarketValuesRequest;
}

export namespace GetMarketValuesRequest {
  export type AsObject = {
    instrumentIdList: Array<string>,
    valuesList: Array<MarketValueType>,
  }
}

export class GetMarketValuesResponse extends jspb.Message {
  getInstrumentsList(): Array<MarketValueInstrument>;
  setInstrumentsList(value: Array<MarketValueInstrument>): GetMarketValuesResponse;
  clearInstrumentsList(): GetMarketValuesResponse;
  addInstruments(value?: MarketValueInstrument, index?: number): MarketValueInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketValuesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketValuesResponse): GetMarketValuesResponse.AsObject;
  static serializeBinaryToWriter(message: GetMarketValuesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketValuesResponse;
  static deserializeBinaryFromReader(message: GetMarketValuesResponse, reader: jspb.BinaryReader): GetMarketValuesResponse;
}

export namespace GetMarketValuesResponse {
  export type AsObject = {
    instrumentsList: Array<MarketValueInstrument.AsObject>,
  }
}

export class MarketValueInstrument extends jspb.Message {
  getInstrumentUid(): string;
  setInstrumentUid(value: string): MarketValueInstrument;

  getValuesList(): Array<MarketValue>;
  setValuesList(value: Array<MarketValue>): MarketValueInstrument;
  clearValuesList(): MarketValueInstrument;
  addValues(value?: MarketValue, index?: number): MarketValue;

  getTicker(): string;
  setTicker(value: string): MarketValueInstrument;

  getClassCode(): string;
  setClassCode(value: string): MarketValueInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketValueInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: MarketValueInstrument): MarketValueInstrument.AsObject;
  static serializeBinaryToWriter(message: MarketValueInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketValueInstrument;
  static deserializeBinaryFromReader(message: MarketValueInstrument, reader: jspb.BinaryReader): MarketValueInstrument;
}

export namespace MarketValueInstrument {
  export type AsObject = {
    instrumentUid: string,
    valuesList: Array<MarketValue.AsObject>,
    ticker: string,
    classCode: string,
  }
}

export class MarketValue extends jspb.Message {
  getType(): MarketValueType;
  setType(value: MarketValueType): MarketValue;
  hasType(): boolean;
  clearType(): MarketValue;

  getValue(): tinvest_common_pb.Quotation | undefined;
  setValue(value?: tinvest_common_pb.Quotation): MarketValue;
  hasValue(): boolean;
  clearValue(): MarketValue;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): MarketValue;
  hasTime(): boolean;
  clearTime(): MarketValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketValue.AsObject;
  static toObject(includeInstance: boolean, msg: MarketValue): MarketValue.AsObject;
  static serializeBinaryToWriter(message: MarketValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketValue;
  static deserializeBinaryFromReader(message: MarketValue, reader: jspb.BinaryReader): MarketValue;
}

export namespace MarketValue {
  export type AsObject = {
    type?: MarketValueType,
    value?: tinvest_common_pb.Quotation.AsObject,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum TypeCase { 
    _TYPE_NOT_SET = 0,
    TYPE = 1,
  }

  export enum ValueCase { 
    _VALUE_NOT_SET = 0,
    VALUE = 2,
  }

  export enum TimeCase { 
    _TIME_NOT_SET = 0,
    TIME = 3,
  }
}

export enum SubscriptionAction { 
  SUBSCRIPTION_ACTION_UNSPECIFIED = 0,
  SUBSCRIPTION_ACTION_SUBSCRIBE = 1,
  SUBSCRIPTION_ACTION_UNSUBSCRIBE = 2,
}
export enum SubscriptionInterval { 
  SUBSCRIPTION_INTERVAL_UNSPECIFIED = 0,
  SUBSCRIPTION_INTERVAL_ONE_MINUTE = 1,
  SUBSCRIPTION_INTERVAL_FIVE_MINUTES = 2,
  SUBSCRIPTION_INTERVAL_FIFTEEN_MINUTES = 3,
  SUBSCRIPTION_INTERVAL_ONE_HOUR = 4,
  SUBSCRIPTION_INTERVAL_ONE_DAY = 5,
  SUBSCRIPTION_INTERVAL_2_MIN = 6,
  SUBSCRIPTION_INTERVAL_3_MIN = 7,
  SUBSCRIPTION_INTERVAL_10_MIN = 8,
  SUBSCRIPTION_INTERVAL_30_MIN = 9,
  SUBSCRIPTION_INTERVAL_2_HOUR = 10,
  SUBSCRIPTION_INTERVAL_4_HOUR = 11,
  SUBSCRIPTION_INTERVAL_WEEK = 12,
  SUBSCRIPTION_INTERVAL_MONTH = 13,
}
export enum SubscriptionStatus { 
  SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
  SUBSCRIPTION_STATUS_SUCCESS = 1,
  SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND = 2,
  SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID = 3,
  SUBSCRIPTION_STATUS_DEPTH_IS_INVALID = 4,
  SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID = 5,
  SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED = 6,
  SUBSCRIPTION_STATUS_INTERNAL_ERROR = 7,
  SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS = 8,
  SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND = 9,
  SUBSCRIPTION_STATUS_SOURCE_IS_INVALID = 10,
}
export enum TradeSourceType { 
  TRADE_SOURCE_UNSPECIFIED = 0,
  TRADE_SOURCE_EXCHANGE = 1,
  TRADE_SOURCE_DEALER = 2,
  TRADE_SOURCE_ALL = 3,
}
export enum TradeDirection { 
  TRADE_DIRECTION_UNSPECIFIED = 0,
  TRADE_DIRECTION_BUY = 1,
  TRADE_DIRECTION_SELL = 2,
}
export enum CandleInterval { 
  CANDLE_INTERVAL_UNSPECIFIED = 0,
  CANDLE_INTERVAL_1_MIN = 1,
  CANDLE_INTERVAL_5_MIN = 2,
  CANDLE_INTERVAL_15_MIN = 3,
  CANDLE_INTERVAL_HOUR = 4,
  CANDLE_INTERVAL_DAY = 5,
  CANDLE_INTERVAL_2_MIN = 6,
  CANDLE_INTERVAL_3_MIN = 7,
  CANDLE_INTERVAL_10_MIN = 8,
  CANDLE_INTERVAL_30_MIN = 9,
  CANDLE_INTERVAL_2_HOUR = 10,
  CANDLE_INTERVAL_4_HOUR = 11,
  CANDLE_INTERVAL_WEEK = 12,
  CANDLE_INTERVAL_MONTH = 13,
  CANDLE_INTERVAL_5_SEC = 14,
  CANDLE_INTERVAL_10_SEC = 15,
  CANDLE_INTERVAL_30_SEC = 16,
}
export enum CandleSource { 
  CANDLE_SOURCE_UNSPECIFIED = 0,
  CANDLE_SOURCE_EXCHANGE = 1,
  CANDLE_SOURCE_DEALER_WEEKEND = 2,
}
export enum MarketValueType { 
  INSTRUMENT_VALUE_UNSPECIFIED = 0,
  INSTRUMENT_VALUE_LAST_PRICE = 1,
  INSTRUMENT_VALUE_LAST_PRICE_DEALER = 2,
  INSTRUMENT_VALUE_CLOSE_PRICE = 3,
  INSTRUMENT_VALUE_EVENING_SESSION_PRICE = 4,
  INSTRUMENT_VALUE_OPEN_INTEREST = 5,
  INSTRUMENT_VALUE_THEOR_PRICE = 6,
  INSTRUMENT_VALUE_YIELD = 7,
}
export enum OrderBookType { 
  ORDERBOOK_TYPE_UNSPECIFIED = 0,
  ORDERBOOK_TYPE_EXCHANGE = 1,
  ORDERBOOK_TYPE_DEALER = 2,
  ORDERBOOK_TYPE_ALL = 3,
}
export enum LastPriceType { 
  LAST_PRICE_UNSPECIFIED = 0,
  LAST_PRICE_EXCHANGE = 1,
  LAST_PRICE_DEALER = 2,
}
