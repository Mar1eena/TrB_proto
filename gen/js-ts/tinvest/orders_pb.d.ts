import * as jspb from 'google-protobuf'

import * as tinvest_common_pb from '../tinvest/common_pb'; // proto import: "tinvest/common.proto"
import * as tinvest_stoporders_pb from '../tinvest/stoporders_pb'; // proto import: "tinvest/stoporders.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_api_field_behavior_pb from '../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"


export class TradesStreamRequest extends jspb.Message {
  getAccountsList(): Array<string>;
  setAccountsList(value: Array<string>): TradesStreamRequest;
  clearAccountsList(): TradesStreamRequest;
  addAccounts(value: string, index?: number): TradesStreamRequest;

  getPingDelayMs(): number;
  setPingDelayMs(value: number): TradesStreamRequest;
  hasPingDelayMs(): boolean;
  clearPingDelayMs(): TradesStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradesStreamRequest): TradesStreamRequest.AsObject;
  static serializeBinaryToWriter(message: TradesStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesStreamRequest;
  static deserializeBinaryFromReader(message: TradesStreamRequest, reader: jspb.BinaryReader): TradesStreamRequest;
}

export namespace TradesStreamRequest {
  export type AsObject = {
    accountsList: Array<string>,
    pingDelayMs?: number,
  }

  export enum PingDelayMsCase { 
    _PING_DELAY_MS_NOT_SET = 0,
    PING_DELAY_MS = 15,
  }
}

export class TradesStreamResponse extends jspb.Message {
  getOrderTrades(): OrderTrades | undefined;
  setOrderTrades(value?: OrderTrades): TradesStreamResponse;
  hasOrderTrades(): boolean;
  clearOrderTrades(): TradesStreamResponse;

  getPing(): tinvest_common_pb.Ping | undefined;
  setPing(value?: tinvest_common_pb.Ping): TradesStreamResponse;
  hasPing(): boolean;
  clearPing(): TradesStreamResponse;

  getSubscription(): SubscriptionResponse | undefined;
  setSubscription(value?: SubscriptionResponse): TradesStreamResponse;
  hasSubscription(): boolean;
  clearSubscription(): TradesStreamResponse;

  getPayloadCase(): TradesStreamResponse.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TradesStreamResponse): TradesStreamResponse.AsObject;
  static serializeBinaryToWriter(message: TradesStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesStreamResponse;
  static deserializeBinaryFromReader(message: TradesStreamResponse, reader: jspb.BinaryReader): TradesStreamResponse;
}

export namespace TradesStreamResponse {
  export type AsObject = {
    orderTrades?: OrderTrades.AsObject,
    ping?: tinvest_common_pb.Ping.AsObject,
    subscription?: SubscriptionResponse.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    ORDER_TRADES = 1,
    PING = 2,
    SUBSCRIPTION = 3,
  }
}

export class OrderTrades extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): OrderTrades;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OrderTrades;
  hasCreatedAt(): boolean;
  clearCreatedAt(): OrderTrades;

  getDirection(): OrderDirection;
  setDirection(value: OrderDirection): OrderTrades;

  getFigi(): string;
  setFigi(value: string): OrderTrades;

  getTradesList(): Array<OrderTrade>;
  setTradesList(value: Array<OrderTrade>): OrderTrades;
  clearTradesList(): OrderTrades;
  addTrades(value?: OrderTrade, index?: number): OrderTrade;

  getAccountId(): string;
  setAccountId(value: string): OrderTrades;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): OrderTrades;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderTrades.AsObject;
  static toObject(includeInstance: boolean, msg: OrderTrades): OrderTrades.AsObject;
  static serializeBinaryToWriter(message: OrderTrades, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderTrades;
  static deserializeBinaryFromReader(message: OrderTrades, reader: jspb.BinaryReader): OrderTrades;
}

export namespace OrderTrades {
  export type AsObject = {
    orderId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    direction: OrderDirection,
    figi: string,
    tradesList: Array<OrderTrade.AsObject>,
    accountId: string,
    instrumentUid: string,
  }
}

export class OrderTrade extends jspb.Message {
  getDateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateTime(value?: google_protobuf_timestamp_pb.Timestamp): OrderTrade;
  hasDateTime(): boolean;
  clearDateTime(): OrderTrade;

  getPrice(): tinvest_common_pb.Quotation | undefined;
  setPrice(value?: tinvest_common_pb.Quotation): OrderTrade;
  hasPrice(): boolean;
  clearPrice(): OrderTrade;

  getQuantity(): number;
  setQuantity(value: number): OrderTrade;

  getTradeId(): string;
  setTradeId(value: string): OrderTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderTrade.AsObject;
  static toObject(includeInstance: boolean, msg: OrderTrade): OrderTrade.AsObject;
  static serializeBinaryToWriter(message: OrderTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderTrade;
  static deserializeBinaryFromReader(message: OrderTrade, reader: jspb.BinaryReader): OrderTrade;
}

export namespace OrderTrade {
  export type AsObject = {
    dateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    price?: tinvest_common_pb.Quotation.AsObject,
    quantity: number,
    tradeId: string,
  }
}

export class PostOrderRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): PostOrderRequest;
  hasFigi(): boolean;
  clearFigi(): PostOrderRequest;

  getQuantity(): number;
  setQuantity(value: number): PostOrderRequest;

  getPrice(): tinvest_common_pb.Quotation | undefined;
  setPrice(value?: tinvest_common_pb.Quotation): PostOrderRequest;
  hasPrice(): boolean;
  clearPrice(): PostOrderRequest;

  getDirection(): OrderDirection;
  setDirection(value: OrderDirection): PostOrderRequest;

  getAccountId(): string;
  setAccountId(value: string): PostOrderRequest;

  getOrderType(): OrderType;
  setOrderType(value: OrderType): PostOrderRequest;

  getOrderId(): string;
  setOrderId(value: string): PostOrderRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): PostOrderRequest;

  getTimeInForce(): TimeInForceType;
  setTimeInForce(value: TimeInForceType): PostOrderRequest;

  getPriceType(): tinvest_common_pb.PriceType;
  setPriceType(value: tinvest_common_pb.PriceType): PostOrderRequest;

  getConfirmMarginTrade(): boolean;
  setConfirmMarginTrade(value: boolean): PostOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostOrderRequest): PostOrderRequest.AsObject;
  static serializeBinaryToWriter(message: PostOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostOrderRequest;
  static deserializeBinaryFromReader(message: PostOrderRequest, reader: jspb.BinaryReader): PostOrderRequest;
}

export namespace PostOrderRequest {
  export type AsObject = {
    figi?: string,
    quantity: number,
    price?: tinvest_common_pb.Quotation.AsObject,
    direction: OrderDirection,
    accountId: string,
    orderType: OrderType,
    orderId: string,
    instrumentId: string,
    timeInForce: TimeInForceType,
    priceType: tinvest_common_pb.PriceType,
    confirmMarginTrade: boolean,
  }

  export enum FigiCase { 
    _FIGI_NOT_SET = 0,
    FIGI = 1,
  }

  export enum PriceCase { 
    _PRICE_NOT_SET = 0,
    PRICE = 3,
  }
}

export class PostOrderResponse extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): PostOrderResponse;

  getExecutionReportStatus(): OrderExecutionReportStatus;
  setExecutionReportStatus(value: OrderExecutionReportStatus): PostOrderResponse;

  getLotsRequested(): number;
  setLotsRequested(value: number): PostOrderResponse;

  getLotsExecuted(): number;
  setLotsExecuted(value: number): PostOrderResponse;

  getInitialOrderPrice(): tinvest_common_pb.MoneyValue | undefined;
  setInitialOrderPrice(value?: tinvest_common_pb.MoneyValue): PostOrderResponse;
  hasInitialOrderPrice(): boolean;
  clearInitialOrderPrice(): PostOrderResponse;

  getExecutedOrderPrice(): tinvest_common_pb.MoneyValue | undefined;
  setExecutedOrderPrice(value?: tinvest_common_pb.MoneyValue): PostOrderResponse;
  hasExecutedOrderPrice(): boolean;
  clearExecutedOrderPrice(): PostOrderResponse;

  getTotalOrderAmount(): tinvest_common_pb.MoneyValue | undefined;
  setTotalOrderAmount(value?: tinvest_common_pb.MoneyValue): PostOrderResponse;
  hasTotalOrderAmount(): boolean;
  clearTotalOrderAmount(): PostOrderResponse;

  getInitialCommission(): tinvest_common_pb.MoneyValue | undefined;
  setInitialCommission(value?: tinvest_common_pb.MoneyValue): PostOrderResponse;
  hasInitialCommission(): boolean;
  clearInitialCommission(): PostOrderResponse;

  getExecutedCommission(): tinvest_common_pb.MoneyValue | undefined;
  setExecutedCommission(value?: tinvest_common_pb.MoneyValue): PostOrderResponse;
  hasExecutedCommission(): boolean;
  clearExecutedCommission(): PostOrderResponse;

  getAciValue(): tinvest_common_pb.MoneyValue | undefined;
  setAciValue(value?: tinvest_common_pb.MoneyValue): PostOrderResponse;
  hasAciValue(): boolean;
  clearAciValue(): PostOrderResponse;

  getFigi(): string;
  setFigi(value: string): PostOrderResponse;

  getDirection(): OrderDirection;
  setDirection(value: OrderDirection): PostOrderResponse;

  getInitialSecurityPrice(): tinvest_common_pb.MoneyValue | undefined;
  setInitialSecurityPrice(value?: tinvest_common_pb.MoneyValue): PostOrderResponse;
  hasInitialSecurityPrice(): boolean;
  clearInitialSecurityPrice(): PostOrderResponse;

  getOrderType(): OrderType;
  setOrderType(value: OrderType): PostOrderResponse;

  getMessage(): string;
  setMessage(value: string): PostOrderResponse;

  getInitialOrderPricePt(): tinvest_common_pb.Quotation | undefined;
  setInitialOrderPricePt(value?: tinvest_common_pb.Quotation): PostOrderResponse;
  hasInitialOrderPricePt(): boolean;
  clearInitialOrderPricePt(): PostOrderResponse;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): PostOrderResponse;

  getTicker(): string;
  setTicker(value: string): PostOrderResponse;

  getClassCode(): string;
  setClassCode(value: string): PostOrderResponse;

  getOrderRequestId(): string;
  setOrderRequestId(value: string): PostOrderResponse;

  getResponseMetadata(): tinvest_common_pb.ResponseMetadata | undefined;
  setResponseMetadata(value?: tinvest_common_pb.ResponseMetadata): PostOrderResponse;
  hasResponseMetadata(): boolean;
  clearResponseMetadata(): PostOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostOrderResponse): PostOrderResponse.AsObject;
  static serializeBinaryToWriter(message: PostOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostOrderResponse;
  static deserializeBinaryFromReader(message: PostOrderResponse, reader: jspb.BinaryReader): PostOrderResponse;
}

export namespace PostOrderResponse {
  export type AsObject = {
    orderId: string,
    executionReportStatus: OrderExecutionReportStatus,
    lotsRequested: number,
    lotsExecuted: number,
    initialOrderPrice?: tinvest_common_pb.MoneyValue.AsObject,
    executedOrderPrice?: tinvest_common_pb.MoneyValue.AsObject,
    totalOrderAmount?: tinvest_common_pb.MoneyValue.AsObject,
    initialCommission?: tinvest_common_pb.MoneyValue.AsObject,
    executedCommission?: tinvest_common_pb.MoneyValue.AsObject,
    aciValue?: tinvest_common_pb.MoneyValue.AsObject,
    figi: string,
    direction: OrderDirection,
    initialSecurityPrice?: tinvest_common_pb.MoneyValue.AsObject,
    orderType: OrderType,
    message: string,
    initialOrderPricePt?: tinvest_common_pb.Quotation.AsObject,
    instrumentUid: string,
    ticker: string,
    classCode: string,
    orderRequestId: string,
    responseMetadata?: tinvest_common_pb.ResponseMetadata.AsObject,
  }
}

export class PostOrderAsyncRequest extends jspb.Message {
  getInstrumentId(): string;
  setInstrumentId(value: string): PostOrderAsyncRequest;

  getQuantity(): number;
  setQuantity(value: number): PostOrderAsyncRequest;

  getPrice(): tinvest_common_pb.Quotation | undefined;
  setPrice(value?: tinvest_common_pb.Quotation): PostOrderAsyncRequest;
  hasPrice(): boolean;
  clearPrice(): PostOrderAsyncRequest;

  getDirection(): OrderDirection;
  setDirection(value: OrderDirection): PostOrderAsyncRequest;

  getAccountId(): string;
  setAccountId(value: string): PostOrderAsyncRequest;

  getOrderType(): OrderType;
  setOrderType(value: OrderType): PostOrderAsyncRequest;

  getOrderId(): string;
  setOrderId(value: string): PostOrderAsyncRequest;

  getTimeInForce(): TimeInForceType;
  setTimeInForce(value: TimeInForceType): PostOrderAsyncRequest;
  hasTimeInForce(): boolean;
  clearTimeInForce(): PostOrderAsyncRequest;

  getPriceType(): tinvest_common_pb.PriceType;
  setPriceType(value: tinvest_common_pb.PriceType): PostOrderAsyncRequest;
  hasPriceType(): boolean;
  clearPriceType(): PostOrderAsyncRequest;

  getConfirmMarginTrade(): boolean;
  setConfirmMarginTrade(value: boolean): PostOrderAsyncRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostOrderAsyncRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostOrderAsyncRequest): PostOrderAsyncRequest.AsObject;
  static serializeBinaryToWriter(message: PostOrderAsyncRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostOrderAsyncRequest;
  static deserializeBinaryFromReader(message: PostOrderAsyncRequest, reader: jspb.BinaryReader): PostOrderAsyncRequest;
}

export namespace PostOrderAsyncRequest {
  export type AsObject = {
    instrumentId: string,
    quantity: number,
    price?: tinvest_common_pb.Quotation.AsObject,
    direction: OrderDirection,
    accountId: string,
    orderType: OrderType,
    orderId: string,
    timeInForce?: TimeInForceType,
    priceType?: tinvest_common_pb.PriceType,
    confirmMarginTrade: boolean,
  }

  export enum PriceCase { 
    _PRICE_NOT_SET = 0,
    PRICE = 3,
  }

  export enum TimeInForceCase { 
    _TIME_IN_FORCE_NOT_SET = 0,
    TIME_IN_FORCE = 8,
  }

  export enum PriceTypeCase { 
    _PRICE_TYPE_NOT_SET = 0,
    PRICE_TYPE = 9,
  }
}

export class PostOrderAsyncResponse extends jspb.Message {
  getOrderRequestId(): string;
  setOrderRequestId(value: string): PostOrderAsyncResponse;

  getExecutionReportStatus(): OrderExecutionReportStatus;
  setExecutionReportStatus(value: OrderExecutionReportStatus): PostOrderAsyncResponse;

  getTradeIntentId(): string;
  setTradeIntentId(value: string): PostOrderAsyncResponse;
  hasTradeIntentId(): boolean;
  clearTradeIntentId(): PostOrderAsyncResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostOrderAsyncResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostOrderAsyncResponse): PostOrderAsyncResponse.AsObject;
  static serializeBinaryToWriter(message: PostOrderAsyncResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostOrderAsyncResponse;
  static deserializeBinaryFromReader(message: PostOrderAsyncResponse, reader: jspb.BinaryReader): PostOrderAsyncResponse;
}

export namespace PostOrderAsyncResponse {
  export type AsObject = {
    orderRequestId: string,
    executionReportStatus: OrderExecutionReportStatus,
    tradeIntentId?: string,
  }

  export enum TradeIntentIdCase { 
    _TRADE_INTENT_ID_NOT_SET = 0,
    TRADE_INTENT_ID = 3,
  }
}

export class CancelOrderRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): CancelOrderRequest;

  getOrderId(): string;
  setOrderId(value: string): CancelOrderRequest;

  getOrderIdType(): OrderIdType;
  setOrderIdType(value: OrderIdType): CancelOrderRequest;
  hasOrderIdType(): boolean;
  clearOrderIdType(): CancelOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderRequest): CancelOrderRequest.AsObject;
  static serializeBinaryToWriter(message: CancelOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderRequest;
  static deserializeBinaryFromReader(message: CancelOrderRequest, reader: jspb.BinaryReader): CancelOrderRequest;
}

export namespace CancelOrderRequest {
  export type AsObject = {
    accountId: string,
    orderId: string,
    orderIdType?: OrderIdType,
  }

  export enum OrderIdTypeCase { 
    _ORDER_ID_TYPE_NOT_SET = 0,
    ORDER_ID_TYPE = 3,
  }
}

export class CancelOrderResponse extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): CancelOrderResponse;
  hasTime(): boolean;
  clearTime(): CancelOrderResponse;

  getResponseMetadata(): tinvest_common_pb.ResponseMetadata | undefined;
  setResponseMetadata(value?: tinvest_common_pb.ResponseMetadata): CancelOrderResponse;
  hasResponseMetadata(): boolean;
  clearResponseMetadata(): CancelOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderResponse): CancelOrderResponse.AsObject;
  static serializeBinaryToWriter(message: CancelOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderResponse;
  static deserializeBinaryFromReader(message: CancelOrderResponse, reader: jspb.BinaryReader): CancelOrderResponse;
}

export namespace CancelOrderResponse {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    responseMetadata?: tinvest_common_pb.ResponseMetadata.AsObject,
  }
}

export class GetOrderStateRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): GetOrderStateRequest;

  getOrderId(): string;
  setOrderId(value: string): GetOrderStateRequest;

  getPriceType(): tinvest_common_pb.PriceType;
  setPriceType(value: tinvest_common_pb.PriceType): GetOrderStateRequest;

  getOrderIdType(): OrderIdType;
  setOrderIdType(value: OrderIdType): GetOrderStateRequest;
  hasOrderIdType(): boolean;
  clearOrderIdType(): GetOrderStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderStateRequest): GetOrderStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetOrderStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderStateRequest;
  static deserializeBinaryFromReader(message: GetOrderStateRequest, reader: jspb.BinaryReader): GetOrderStateRequest;
}

export namespace GetOrderStateRequest {
  export type AsObject = {
    accountId: string,
    orderId: string,
    priceType: tinvest_common_pb.PriceType,
    orderIdType?: OrderIdType,
  }

  export enum OrderIdTypeCase { 
    _ORDER_ID_TYPE_NOT_SET = 0,
    ORDER_ID_TYPE = 4,
  }
}

export class GetOrdersRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): GetOrdersRequest;

  getAdvancedFilters(): GetOrdersRequest.GetOrdersRequestFilters | undefined;
  setAdvancedFilters(value?: GetOrdersRequest.GetOrdersRequestFilters): GetOrdersRequest;
  hasAdvancedFilters(): boolean;
  clearAdvancedFilters(): GetOrdersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrdersRequest): GetOrdersRequest.AsObject;
  static serializeBinaryToWriter(message: GetOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrdersRequest;
  static deserializeBinaryFromReader(message: GetOrdersRequest, reader: jspb.BinaryReader): GetOrdersRequest;
}

export namespace GetOrdersRequest {
  export type AsObject = {
    accountId: string,
    advancedFilters?: GetOrdersRequest.GetOrdersRequestFilters.AsObject,
  }

  export class GetOrdersRequestFilters extends jspb.Message {
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetOrdersRequestFilters;
    hasFrom(): boolean;
    clearFrom(): GetOrdersRequestFilters;

    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetOrdersRequestFilters;
    hasTo(): boolean;
    clearTo(): GetOrdersRequestFilters;

    getExecutionStatusList(): Array<OrderExecutionReportStatus>;
    setExecutionStatusList(value: Array<OrderExecutionReportStatus>): GetOrdersRequestFilters;
    clearExecutionStatusList(): GetOrdersRequestFilters;
    addExecutionStatus(value: OrderExecutionReportStatus, index?: number): GetOrdersRequestFilters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersRequestFilters.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersRequestFilters): GetOrdersRequestFilters.AsObject;
    static serializeBinaryToWriter(message: GetOrdersRequestFilters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersRequestFilters;
    static deserializeBinaryFromReader(message: GetOrdersRequestFilters, reader: jspb.BinaryReader): GetOrdersRequestFilters;
  }

  export namespace GetOrdersRequestFilters {
    export type AsObject = {
      from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      executionStatusList: Array<OrderExecutionReportStatus>,
    }

    export enum FromCase { 
      _FROM_NOT_SET = 0,
      FROM = 1,
    }

    export enum ToCase { 
      _TO_NOT_SET = 0,
      TO = 2,
    }
  }


  export enum AdvancedFiltersCase { 
    _ADVANCED_FILTERS_NOT_SET = 0,
    ADVANCED_FILTERS = 2,
  }
}

export class GetOrdersResponse extends jspb.Message {
  getOrdersList(): Array<OrderState>;
  setOrdersList(value: Array<OrderState>): GetOrdersResponse;
  clearOrdersList(): GetOrdersResponse;
  addOrders(value?: OrderState, index?: number): OrderState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrdersResponse): GetOrdersResponse.AsObject;
  static serializeBinaryToWriter(message: GetOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrdersResponse;
  static deserializeBinaryFromReader(message: GetOrdersResponse, reader: jspb.BinaryReader): GetOrdersResponse;
}

export namespace GetOrdersResponse {
  export type AsObject = {
    ordersList: Array<OrderState.AsObject>,
  }
}

export class OrderState extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): OrderState;

  getExecutionReportStatus(): OrderExecutionReportStatus;
  setExecutionReportStatus(value: OrderExecutionReportStatus): OrderState;

  getLotsRequested(): number;
  setLotsRequested(value: number): OrderState;

  getLotsExecuted(): number;
  setLotsExecuted(value: number): OrderState;

  getInitialOrderPrice(): tinvest_common_pb.MoneyValue | undefined;
  setInitialOrderPrice(value?: tinvest_common_pb.MoneyValue): OrderState;
  hasInitialOrderPrice(): boolean;
  clearInitialOrderPrice(): OrderState;

  getExecutedOrderPrice(): tinvest_common_pb.MoneyValue | undefined;
  setExecutedOrderPrice(value?: tinvest_common_pb.MoneyValue): OrderState;
  hasExecutedOrderPrice(): boolean;
  clearExecutedOrderPrice(): OrderState;

  getTotalOrderAmount(): tinvest_common_pb.MoneyValue | undefined;
  setTotalOrderAmount(value?: tinvest_common_pb.MoneyValue): OrderState;
  hasTotalOrderAmount(): boolean;
  clearTotalOrderAmount(): OrderState;

  getAveragePositionPrice(): tinvest_common_pb.MoneyValue | undefined;
  setAveragePositionPrice(value?: tinvest_common_pb.MoneyValue): OrderState;
  hasAveragePositionPrice(): boolean;
  clearAveragePositionPrice(): OrderState;

  getInitialCommission(): tinvest_common_pb.MoneyValue | undefined;
  setInitialCommission(value?: tinvest_common_pb.MoneyValue): OrderState;
  hasInitialCommission(): boolean;
  clearInitialCommission(): OrderState;

  getExecutedCommission(): tinvest_common_pb.MoneyValue | undefined;
  setExecutedCommission(value?: tinvest_common_pb.MoneyValue): OrderState;
  hasExecutedCommission(): boolean;
  clearExecutedCommission(): OrderState;

  getFigi(): string;
  setFigi(value: string): OrderState;

  getDirection(): OrderDirection;
  setDirection(value: OrderDirection): OrderState;

  getInitialSecurityPrice(): tinvest_common_pb.MoneyValue | undefined;
  setInitialSecurityPrice(value?: tinvest_common_pb.MoneyValue): OrderState;
  hasInitialSecurityPrice(): boolean;
  clearInitialSecurityPrice(): OrderState;

  getStagesList(): Array<OrderStage>;
  setStagesList(value: Array<OrderStage>): OrderState;
  clearStagesList(): OrderState;
  addStages(value?: OrderStage, index?: number): OrderStage;

  getServiceCommission(): tinvest_common_pb.MoneyValue | undefined;
  setServiceCommission(value?: tinvest_common_pb.MoneyValue): OrderState;
  hasServiceCommission(): boolean;
  clearServiceCommission(): OrderState;

  getCurrency(): string;
  setCurrency(value: string): OrderState;

  getOrderType(): OrderType;
  setOrderType(value: OrderType): OrderState;

  getOrderDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOrderDate(value?: google_protobuf_timestamp_pb.Timestamp): OrderState;
  hasOrderDate(): boolean;
  clearOrderDate(): OrderState;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): OrderState;

  getOrderRequestId(): string;
  setOrderRequestId(value: string): OrderState;

  getTicker(): string;
  setTicker(value: string): OrderState;

  getClassCode(): string;
  setClassCode(value: string): OrderState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderState.AsObject;
  static toObject(includeInstance: boolean, msg: OrderState): OrderState.AsObject;
  static serializeBinaryToWriter(message: OrderState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderState;
  static deserializeBinaryFromReader(message: OrderState, reader: jspb.BinaryReader): OrderState;
}

export namespace OrderState {
  export type AsObject = {
    orderId: string,
    executionReportStatus: OrderExecutionReportStatus,
    lotsRequested: number,
    lotsExecuted: number,
    initialOrderPrice?: tinvest_common_pb.MoneyValue.AsObject,
    executedOrderPrice?: tinvest_common_pb.MoneyValue.AsObject,
    totalOrderAmount?: tinvest_common_pb.MoneyValue.AsObject,
    averagePositionPrice?: tinvest_common_pb.MoneyValue.AsObject,
    initialCommission?: tinvest_common_pb.MoneyValue.AsObject,
    executedCommission?: tinvest_common_pb.MoneyValue.AsObject,
    figi: string,
    direction: OrderDirection,
    initialSecurityPrice?: tinvest_common_pb.MoneyValue.AsObject,
    stagesList: Array<OrderStage.AsObject>,
    serviceCommission?: tinvest_common_pb.MoneyValue.AsObject,
    currency: string,
    orderType: OrderType,
    orderDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    instrumentUid: string,
    orderRequestId: string,
    ticker: string,
    classCode: string,
  }
}

export class OrderStage extends jspb.Message {
  getPrice(): tinvest_common_pb.MoneyValue | undefined;
  setPrice(value?: tinvest_common_pb.MoneyValue): OrderStage;
  hasPrice(): boolean;
  clearPrice(): OrderStage;

  getQuantity(): number;
  setQuantity(value: number): OrderStage;

  getTradeId(): string;
  setTradeId(value: string): OrderStage;

  getExecutionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExecutionTime(value?: google_protobuf_timestamp_pb.Timestamp): OrderStage;
  hasExecutionTime(): boolean;
  clearExecutionTime(): OrderStage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderStage.AsObject;
  static toObject(includeInstance: boolean, msg: OrderStage): OrderStage.AsObject;
  static serializeBinaryToWriter(message: OrderStage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderStage;
  static deserializeBinaryFromReader(message: OrderStage, reader: jspb.BinaryReader): OrderStage;
}

export namespace OrderStage {
  export type AsObject = {
    price?: tinvest_common_pb.MoneyValue.AsObject,
    quantity: number,
    tradeId: string,
    executionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ReplaceOrderRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): ReplaceOrderRequest;

  getOrderIdType(): OrderIdType;
  setOrderIdType(value: OrderIdType): ReplaceOrderRequest;
  hasOrderIdType(): boolean;
  clearOrderIdType(): ReplaceOrderRequest;

  getOrderId(): string;
  setOrderId(value: string): ReplaceOrderRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): ReplaceOrderRequest;

  getQuantity(): number;
  setQuantity(value: number): ReplaceOrderRequest;

  getPrice(): tinvest_common_pb.Quotation | undefined;
  setPrice(value?: tinvest_common_pb.Quotation): ReplaceOrderRequest;
  hasPrice(): boolean;
  clearPrice(): ReplaceOrderRequest;

  getPriceType(): tinvest_common_pb.PriceType;
  setPriceType(value: tinvest_common_pb.PriceType): ReplaceOrderRequest;
  hasPriceType(): boolean;
  clearPriceType(): ReplaceOrderRequest;

  getConfirmMarginTrade(): boolean;
  setConfirmMarginTrade(value: boolean): ReplaceOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceOrderRequest): ReplaceOrderRequest.AsObject;
  static serializeBinaryToWriter(message: ReplaceOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceOrderRequest;
  static deserializeBinaryFromReader(message: ReplaceOrderRequest, reader: jspb.BinaryReader): ReplaceOrderRequest;
}

export namespace ReplaceOrderRequest {
  export type AsObject = {
    accountId: string,
    orderIdType?: OrderIdType,
    orderId: string,
    idempotencyKey: string,
    quantity: number,
    price?: tinvest_common_pb.Quotation.AsObject,
    priceType?: tinvest_common_pb.PriceType,
    confirmMarginTrade: boolean,
  }

  export enum OrderIdTypeCase { 
    _ORDER_ID_TYPE_NOT_SET = 0,
    ORDER_ID_TYPE = 5,
  }

  export enum PriceCase { 
    _PRICE_NOT_SET = 0,
    PRICE = 12,
  }

  export enum PriceTypeCase { 
    _PRICE_TYPE_NOT_SET = 0,
    PRICE_TYPE = 13,
  }
}

export class GetMaxLotsRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): GetMaxLotsRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): GetMaxLotsRequest;

  getPrice(): tinvest_common_pb.Quotation | undefined;
  setPrice(value?: tinvest_common_pb.Quotation): GetMaxLotsRequest;
  hasPrice(): boolean;
  clearPrice(): GetMaxLotsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMaxLotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMaxLotsRequest): GetMaxLotsRequest.AsObject;
  static serializeBinaryToWriter(message: GetMaxLotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMaxLotsRequest;
  static deserializeBinaryFromReader(message: GetMaxLotsRequest, reader: jspb.BinaryReader): GetMaxLotsRequest;
}

export namespace GetMaxLotsRequest {
  export type AsObject = {
    accountId: string,
    instrumentId: string,
    price?: tinvest_common_pb.Quotation.AsObject,
  }

  export enum PriceCase { 
    _PRICE_NOT_SET = 0,
    PRICE = 3,
  }
}

export class GetMaxLotsResponse extends jspb.Message {
  getCurrency(): string;
  setCurrency(value: string): GetMaxLotsResponse;

  getBuyLimits(): GetMaxLotsResponse.BuyLimitsView | undefined;
  setBuyLimits(value?: GetMaxLotsResponse.BuyLimitsView): GetMaxLotsResponse;
  hasBuyLimits(): boolean;
  clearBuyLimits(): GetMaxLotsResponse;

  getBuyMarginLimits(): GetMaxLotsResponse.BuyLimitsView | undefined;
  setBuyMarginLimits(value?: GetMaxLotsResponse.BuyLimitsView): GetMaxLotsResponse;
  hasBuyMarginLimits(): boolean;
  clearBuyMarginLimits(): GetMaxLotsResponse;

  getSellLimits(): GetMaxLotsResponse.SellLimitsView | undefined;
  setSellLimits(value?: GetMaxLotsResponse.SellLimitsView): GetMaxLotsResponse;
  hasSellLimits(): boolean;
  clearSellLimits(): GetMaxLotsResponse;

  getSellMarginLimits(): GetMaxLotsResponse.SellLimitsView | undefined;
  setSellMarginLimits(value?: GetMaxLotsResponse.SellLimitsView): GetMaxLotsResponse;
  hasSellMarginLimits(): boolean;
  clearSellMarginLimits(): GetMaxLotsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMaxLotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMaxLotsResponse): GetMaxLotsResponse.AsObject;
  static serializeBinaryToWriter(message: GetMaxLotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMaxLotsResponse;
  static deserializeBinaryFromReader(message: GetMaxLotsResponse, reader: jspb.BinaryReader): GetMaxLotsResponse;
}

export namespace GetMaxLotsResponse {
  export type AsObject = {
    currency: string,
    buyLimits?: GetMaxLotsResponse.BuyLimitsView.AsObject,
    buyMarginLimits?: GetMaxLotsResponse.BuyLimitsView.AsObject,
    sellLimits?: GetMaxLotsResponse.SellLimitsView.AsObject,
    sellMarginLimits?: GetMaxLotsResponse.SellLimitsView.AsObject,
  }

  export class BuyLimitsView extends jspb.Message {
    getBuyMoneyAmount(): tinvest_common_pb.Quotation | undefined;
    setBuyMoneyAmount(value?: tinvest_common_pb.Quotation): BuyLimitsView;
    hasBuyMoneyAmount(): boolean;
    clearBuyMoneyAmount(): BuyLimitsView;

    getBuyMaxLots(): number;
    setBuyMaxLots(value: number): BuyLimitsView;

    getBuyMaxMarketLots(): number;
    setBuyMaxMarketLots(value: number): BuyLimitsView;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuyLimitsView.AsObject;
    static toObject(includeInstance: boolean, msg: BuyLimitsView): BuyLimitsView.AsObject;
    static serializeBinaryToWriter(message: BuyLimitsView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuyLimitsView;
    static deserializeBinaryFromReader(message: BuyLimitsView, reader: jspb.BinaryReader): BuyLimitsView;
  }

  export namespace BuyLimitsView {
    export type AsObject = {
      buyMoneyAmount?: tinvest_common_pb.Quotation.AsObject,
      buyMaxLots: number,
      buyMaxMarketLots: number,
    }
  }


  export class SellLimitsView extends jspb.Message {
    getSellMaxLots(): number;
    setSellMaxLots(value: number): SellLimitsView;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SellLimitsView.AsObject;
    static toObject(includeInstance: boolean, msg: SellLimitsView): SellLimitsView.AsObject;
    static serializeBinaryToWriter(message: SellLimitsView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SellLimitsView;
    static deserializeBinaryFromReader(message: SellLimitsView, reader: jspb.BinaryReader): SellLimitsView;
  }

  export namespace SellLimitsView {
    export type AsObject = {
      sellMaxLots: number,
    }
  }

}

export class GetOrderPriceRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): GetOrderPriceRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): GetOrderPriceRequest;

  getPrice(): tinvest_common_pb.Quotation | undefined;
  setPrice(value?: tinvest_common_pb.Quotation): GetOrderPriceRequest;
  hasPrice(): boolean;
  clearPrice(): GetOrderPriceRequest;

  getDirection(): OrderDirection;
  setDirection(value: OrderDirection): GetOrderPriceRequest;

  getQuantity(): number;
  setQuantity(value: number): GetOrderPriceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderPriceRequest): GetOrderPriceRequest.AsObject;
  static serializeBinaryToWriter(message: GetOrderPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderPriceRequest;
  static deserializeBinaryFromReader(message: GetOrderPriceRequest, reader: jspb.BinaryReader): GetOrderPriceRequest;
}

export namespace GetOrderPriceRequest {
  export type AsObject = {
    accountId: string,
    instrumentId: string,
    price?: tinvest_common_pb.Quotation.AsObject,
    direction: OrderDirection,
    quantity: number,
  }
}

export class GetOrderPriceResponse extends jspb.Message {
  getTotalOrderAmount(): tinvest_common_pb.MoneyValue | undefined;
  setTotalOrderAmount(value?: tinvest_common_pb.MoneyValue): GetOrderPriceResponse;
  hasTotalOrderAmount(): boolean;
  clearTotalOrderAmount(): GetOrderPriceResponse;

  getInitialOrderAmount(): tinvest_common_pb.MoneyValue | undefined;
  setInitialOrderAmount(value?: tinvest_common_pb.MoneyValue): GetOrderPriceResponse;
  hasInitialOrderAmount(): boolean;
  clearInitialOrderAmount(): GetOrderPriceResponse;

  getLotsRequested(): number;
  setLotsRequested(value: number): GetOrderPriceResponse;

  getExecutedCommission(): tinvest_common_pb.MoneyValue | undefined;
  setExecutedCommission(value?: tinvest_common_pb.MoneyValue): GetOrderPriceResponse;
  hasExecutedCommission(): boolean;
  clearExecutedCommission(): GetOrderPriceResponse;

  getExecutedCommissionRub(): tinvest_common_pb.MoneyValue | undefined;
  setExecutedCommissionRub(value?: tinvest_common_pb.MoneyValue): GetOrderPriceResponse;
  hasExecutedCommissionRub(): boolean;
  clearExecutedCommissionRub(): GetOrderPriceResponse;

  getServiceCommission(): tinvest_common_pb.MoneyValue | undefined;
  setServiceCommission(value?: tinvest_common_pb.MoneyValue): GetOrderPriceResponse;
  hasServiceCommission(): boolean;
  clearServiceCommission(): GetOrderPriceResponse;

  getDealCommission(): tinvest_common_pb.MoneyValue | undefined;
  setDealCommission(value?: tinvest_common_pb.MoneyValue): GetOrderPriceResponse;
  hasDealCommission(): boolean;
  clearDealCommission(): GetOrderPriceResponse;

  getExtraBond(): GetOrderPriceResponse.ExtraBond | undefined;
  setExtraBond(value?: GetOrderPriceResponse.ExtraBond): GetOrderPriceResponse;
  hasExtraBond(): boolean;
  clearExtraBond(): GetOrderPriceResponse;

  getExtraFuture(): GetOrderPriceResponse.ExtraFuture | undefined;
  setExtraFuture(value?: GetOrderPriceResponse.ExtraFuture): GetOrderPriceResponse;
  hasExtraFuture(): boolean;
  clearExtraFuture(): GetOrderPriceResponse;

  getInstrumentExtraCase(): GetOrderPriceResponse.InstrumentExtraCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderPriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderPriceResponse): GetOrderPriceResponse.AsObject;
  static serializeBinaryToWriter(message: GetOrderPriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderPriceResponse;
  static deserializeBinaryFromReader(message: GetOrderPriceResponse, reader: jspb.BinaryReader): GetOrderPriceResponse;
}

export namespace GetOrderPriceResponse {
  export type AsObject = {
    totalOrderAmount?: tinvest_common_pb.MoneyValue.AsObject,
    initialOrderAmount?: tinvest_common_pb.MoneyValue.AsObject,
    lotsRequested: number,
    executedCommission?: tinvest_common_pb.MoneyValue.AsObject,
    executedCommissionRub?: tinvest_common_pb.MoneyValue.AsObject,
    serviceCommission?: tinvest_common_pb.MoneyValue.AsObject,
    dealCommission?: tinvest_common_pb.MoneyValue.AsObject,
    extraBond?: GetOrderPriceResponse.ExtraBond.AsObject,
    extraFuture?: GetOrderPriceResponse.ExtraFuture.AsObject,
  }

  export class ExtraBond extends jspb.Message {
    getAciValue(): tinvest_common_pb.MoneyValue | undefined;
    setAciValue(value?: tinvest_common_pb.MoneyValue): ExtraBond;
    hasAciValue(): boolean;
    clearAciValue(): ExtraBond;

    getNominalConversionRate(): tinvest_common_pb.Quotation | undefined;
    setNominalConversionRate(value?: tinvest_common_pb.Quotation): ExtraBond;
    hasNominalConversionRate(): boolean;
    clearNominalConversionRate(): ExtraBond;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtraBond.AsObject;
    static toObject(includeInstance: boolean, msg: ExtraBond): ExtraBond.AsObject;
    static serializeBinaryToWriter(message: ExtraBond, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtraBond;
    static deserializeBinaryFromReader(message: ExtraBond, reader: jspb.BinaryReader): ExtraBond;
  }

  export namespace ExtraBond {
    export type AsObject = {
      aciValue?: tinvest_common_pb.MoneyValue.AsObject,
      nominalConversionRate?: tinvest_common_pb.Quotation.AsObject,
    }
  }


  export class ExtraFuture extends jspb.Message {
    getInitialMargin(): tinvest_common_pb.MoneyValue | undefined;
    setInitialMargin(value?: tinvest_common_pb.MoneyValue): ExtraFuture;
    hasInitialMargin(): boolean;
    clearInitialMargin(): ExtraFuture;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtraFuture.AsObject;
    static toObject(includeInstance: boolean, msg: ExtraFuture): ExtraFuture.AsObject;
    static serializeBinaryToWriter(message: ExtraFuture, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtraFuture;
    static deserializeBinaryFromReader(message: ExtraFuture, reader: jspb.BinaryReader): ExtraFuture;
  }

  export namespace ExtraFuture {
    export type AsObject = {
      initialMargin?: tinvest_common_pb.MoneyValue.AsObject,
    }
  }


  export enum InstrumentExtraCase { 
    INSTRUMENT_EXTRA_NOT_SET = 0,
    EXTRA_BOND = 12,
    EXTRA_FUTURE = 13,
  }
}

export class OrderStateStreamRequest extends jspb.Message {
  getAccountsList(): Array<string>;
  setAccountsList(value: Array<string>): OrderStateStreamRequest;
  clearAccountsList(): OrderStateStreamRequest;
  addAccounts(value: string, index?: number): OrderStateStreamRequest;

  getPingDelayMillis(): number;
  setPingDelayMillis(value: number): OrderStateStreamRequest;
  hasPingDelayMillis(): boolean;
  clearPingDelayMillis(): OrderStateStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderStateStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderStateStreamRequest): OrderStateStreamRequest.AsObject;
  static serializeBinaryToWriter(message: OrderStateStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderStateStreamRequest;
  static deserializeBinaryFromReader(message: OrderStateStreamRequest, reader: jspb.BinaryReader): OrderStateStreamRequest;
}

export namespace OrderStateStreamRequest {
  export type AsObject = {
    accountsList: Array<string>,
    pingDelayMillis?: number,
  }

  export enum PingDelayMillisCase { 
    _PING_DELAY_MILLIS_NOT_SET = 0,
    PING_DELAY_MILLIS = 15,
  }
}

export class SubscriptionResponse extends jspb.Message {
  getTrackingId(): string;
  setTrackingId(value: string): SubscriptionResponse;

  getStatus(): tinvest_common_pb.ResultSubscriptionStatus;
  setStatus(value: tinvest_common_pb.ResultSubscriptionStatus): SubscriptionResponse;

  getStreamId(): string;
  setStreamId(value: string): SubscriptionResponse;

  getAccountsList(): Array<string>;
  setAccountsList(value: Array<string>): SubscriptionResponse;
  clearAccountsList(): SubscriptionResponse;
  addAccounts(value: string, index?: number): SubscriptionResponse;

  getError(): tinvest_common_pb.ErrorDetail | undefined;
  setError(value?: tinvest_common_pb.ErrorDetail): SubscriptionResponse;
  hasError(): boolean;
  clearError(): SubscriptionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionResponse): SubscriptionResponse.AsObject;
  static serializeBinaryToWriter(message: SubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionResponse;
  static deserializeBinaryFromReader(message: SubscriptionResponse, reader: jspb.BinaryReader): SubscriptionResponse;
}

export namespace SubscriptionResponse {
  export type AsObject = {
    trackingId: string,
    status: tinvest_common_pb.ResultSubscriptionStatus,
    streamId: string,
    accountsList: Array<string>,
    error?: tinvest_common_pb.ErrorDetail.AsObject,
  }

  export enum ErrorCase { 
    _ERROR_NOT_SET = 0,
    ERROR = 7,
  }
}

export class OrderStateStreamResponse extends jspb.Message {
  getOrderState(): OrderStateStreamResponse.OrderState | undefined;
  setOrderState(value?: OrderStateStreamResponse.OrderState): OrderStateStreamResponse;
  hasOrderState(): boolean;
  clearOrderState(): OrderStateStreamResponse;

  getPing(): tinvest_common_pb.Ping | undefined;
  setPing(value?: tinvest_common_pb.Ping): OrderStateStreamResponse;
  hasPing(): boolean;
  clearPing(): OrderStateStreamResponse;

  getSubscription(): SubscriptionResponse | undefined;
  setSubscription(value?: SubscriptionResponse): OrderStateStreamResponse;
  hasSubscription(): boolean;
  clearSubscription(): OrderStateStreamResponse;

  getStopOrderState(): OrderStateStreamResponse.StopOrderState | undefined;
  setStopOrderState(value?: OrderStateStreamResponse.StopOrderState): OrderStateStreamResponse;
  hasStopOrderState(): boolean;
  clearStopOrderState(): OrderStateStreamResponse;

  getPayloadCase(): OrderStateStreamResponse.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderStateStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderStateStreamResponse): OrderStateStreamResponse.AsObject;
  static serializeBinaryToWriter(message: OrderStateStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderStateStreamResponse;
  static deserializeBinaryFromReader(message: OrderStateStreamResponse, reader: jspb.BinaryReader): OrderStateStreamResponse;
}

export namespace OrderStateStreamResponse {
  export type AsObject = {
    orderState?: OrderStateStreamResponse.OrderState.AsObject,
    ping?: tinvest_common_pb.Ping.AsObject,
    subscription?: SubscriptionResponse.AsObject,
    stopOrderState?: OrderStateStreamResponse.StopOrderState.AsObject,
  }

  export class OrderState extends jspb.Message {
    getOrderId(): string;
    setOrderId(value: string): OrderState;

    getOrderRequestId(): string;
    setOrderRequestId(value: string): OrderState;
    hasOrderRequestId(): boolean;
    clearOrderRequestId(): OrderState;

    getClientCode(): string;
    setClientCode(value: string): OrderState;

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OrderState;
    hasCreatedAt(): boolean;
    clearCreatedAt(): OrderState;

    getExecutionReportStatus(): OrderExecutionReportStatus;
    setExecutionReportStatus(value: OrderExecutionReportStatus): OrderState;

    getStatusInfo(): OrderStateStreamResponse.StatusCauseInfo;
    setStatusInfo(value: OrderStateStreamResponse.StatusCauseInfo): OrderState;
    hasStatusInfo(): boolean;
    clearStatusInfo(): OrderState;

    getTicker(): string;
    setTicker(value: string): OrderState;

    getClassCode(): string;
    setClassCode(value: string): OrderState;

    getLotSize(): number;
    setLotSize(value: number): OrderState;

    getDirection(): OrderDirection;
    setDirection(value: OrderDirection): OrderState;

    getTimeInForce(): TimeInForceType;
    setTimeInForce(value: TimeInForceType): OrderState;

    getOrderType(): OrderType;
    setOrderType(value: OrderType): OrderState;

    getAccountId(): string;
    setAccountId(value: string): OrderState;

    getTradeOrderId(): string;
    setTradeOrderId(value: string): OrderState;

    getInitialOrderPrice(): tinvest_common_pb.MoneyValue | undefined;
    setInitialOrderPrice(value?: tinvest_common_pb.MoneyValue): OrderState;
    hasInitialOrderPrice(): boolean;
    clearInitialOrderPrice(): OrderState;

    getOrderPrice(): tinvest_common_pb.MoneyValue | undefined;
    setOrderPrice(value?: tinvest_common_pb.MoneyValue): OrderState;
    hasOrderPrice(): boolean;
    clearOrderPrice(): OrderState;

    getAmount(): tinvest_common_pb.MoneyValue | undefined;
    setAmount(value?: tinvest_common_pb.MoneyValue): OrderState;
    hasAmount(): boolean;
    clearAmount(): OrderState;

    getExecutedOrderPrice(): tinvest_common_pb.MoneyValue | undefined;
    setExecutedOrderPrice(value?: tinvest_common_pb.MoneyValue): OrderState;
    hasExecutedOrderPrice(): boolean;
    clearExecutedOrderPrice(): OrderState;

    getCurrency(): string;
    setCurrency(value: string): OrderState;

    getLotsRequested(): number;
    setLotsRequested(value: number): OrderState;

    getLotsExecuted(): number;
    setLotsExecuted(value: number): OrderState;

    getLotsLeft(): number;
    setLotsLeft(value: number): OrderState;

    getLotsCancelled(): number;
    setLotsCancelled(value: number): OrderState;

    getMarker(): OrderStateStreamResponse.MarkerType;
    setMarker(value: OrderStateStreamResponse.MarkerType): OrderState;
    hasMarker(): boolean;
    clearMarker(): OrderState;

    getTradesList(): Array<OrderTrade>;
    setTradesList(value: Array<OrderTrade>): OrderState;
    clearTradesList(): OrderState;
    addTrades(value?: OrderTrade, index?: number): OrderTrade;

    getCompletionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCompletionTime(value?: google_protobuf_timestamp_pb.Timestamp): OrderState;
    hasCompletionTime(): boolean;
    clearCompletionTime(): OrderState;

    getExchange(): string;
    setExchange(value: string): OrderState;

    getInstrumentUid(): string;
    setInstrumentUid(value: string): OrderState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderState.AsObject;
    static toObject(includeInstance: boolean, msg: OrderState): OrderState.AsObject;
    static serializeBinaryToWriter(message: OrderState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderState;
    static deserializeBinaryFromReader(message: OrderState, reader: jspb.BinaryReader): OrderState;
  }

  export namespace OrderState {
    export type AsObject = {
      orderId: string,
      orderRequestId?: string,
      clientCode: string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      executionReportStatus: OrderExecutionReportStatus,
      statusInfo?: OrderStateStreamResponse.StatusCauseInfo,
      ticker: string,
      classCode: string,
      lotSize: number,
      direction: OrderDirection,
      timeInForce: TimeInForceType,
      orderType: OrderType,
      accountId: string,
      tradeOrderId: string,
      initialOrderPrice?: tinvest_common_pb.MoneyValue.AsObject,
      orderPrice?: tinvest_common_pb.MoneyValue.AsObject,
      amount?: tinvest_common_pb.MoneyValue.AsObject,
      executedOrderPrice?: tinvest_common_pb.MoneyValue.AsObject,
      currency: string,
      lotsRequested: number,
      lotsExecuted: number,
      lotsLeft: number,
      lotsCancelled: number,
      marker?: OrderStateStreamResponse.MarkerType,
      tradesList: Array<OrderTrade.AsObject>,
      completionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      exchange: string,
      instrumentUid: string,
    }

    export enum OrderRequestIdCase { 
      _ORDER_REQUEST_ID_NOT_SET = 0,
      ORDER_REQUEST_ID = 2,
    }

    export enum StatusInfoCase { 
      _STATUS_INFO_NOT_SET = 0,
      STATUS_INFO = 6,
    }

    export enum AmountCase { 
      _AMOUNT_NOT_SET = 0,
      AMOUNT = 24,
    }

    export enum MarkerCase { 
      _MARKER_NOT_SET = 0,
      MARKER = 31,
    }
  }


  export class StopOrderState extends jspb.Message {
    getStopOrderId(): string;
    setStopOrderId(value: string): StopOrderState;

    getAccountId(): string;
    setAccountId(value: string): StopOrderState;

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): StopOrderState;
    hasCreatedAt(): boolean;
    clearCreatedAt(): StopOrderState;

    getDirection(): OrderDirection;
    setDirection(value: OrderDirection): StopOrderState;

    getPrice(): tinvest_common_pb.MoneyValue | undefined;
    setPrice(value?: tinvest_common_pb.MoneyValue): StopOrderState;
    hasPrice(): boolean;
    clearPrice(): StopOrderState;

    getStopPrice(): tinvest_common_pb.MoneyValue | undefined;
    setStopPrice(value?: tinvest_common_pb.MoneyValue): StopOrderState;
    hasStopPrice(): boolean;
    clearStopPrice(): StopOrderState;

    getOrderType(): OrderType;
    setOrderType(value: OrderType): StopOrderState;

    getInstrumentUid(): string;
    setInstrumentUid(value: string): StopOrderState;

    getTicker(): string;
    setTicker(value: string): StopOrderState;

    getClassCode(): string;
    setClassCode(value: string): StopOrderState;

    getStatus(): tinvest_stoporders_pb.StopOrderStatusOption;
    setStatus(value: tinvest_stoporders_pb.StopOrderStatusOption): StopOrderState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopOrderState.AsObject;
    static toObject(includeInstance: boolean, msg: StopOrderState): StopOrderState.AsObject;
    static serializeBinaryToWriter(message: StopOrderState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopOrderState;
    static deserializeBinaryFromReader(message: StopOrderState, reader: jspb.BinaryReader): StopOrderState;
  }

  export namespace StopOrderState {
    export type AsObject = {
      stopOrderId: string,
      accountId: string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      direction: OrderDirection,
      price?: tinvest_common_pb.MoneyValue.AsObject,
      stopPrice?: tinvest_common_pb.MoneyValue.AsObject,
      orderType: OrderType,
      instrumentUid: string,
      ticker: string,
      classCode: string,
      status: tinvest_stoporders_pb.StopOrderStatusOption,
    }
  }


  export enum MarkerType { 
    MARKER_UNKNOWN = 0,
    MARKER_BROKER = 1,
    MARKER_CHAT = 2,
    MARKER_PAPER = 3,
    MARKER_MARGIN = 4,
    MARKER_TKBNM = 5,
    MARKER_SHORT = 6,
    MARKER_SPECMM = 7,
    MARKER_PO = 8,
  }

  export enum StatusCauseInfo { 
    CAUSE_UNSPECIFIED = 0,
    CAUSE_CANCELLED_BY_CLIENT = 15,
    CAUSE_CANCELLED_BY_EXCHANGE = 1,
    CAUSE_CANCELLED_NOT_ENOUGH_POSITION = 2,
    CAUSE_CANCELLED_BY_CLIENT_BLOCK = 3,
    CAUSE_REJECTED_BY_BROKER = 4,
    CAUSE_REJECTED_BY_EXCHANGE = 5,
    CAUSE_CANCELLED_BY_BROKER = 6,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    ORDER_STATE = 1,
    PING = 2,
    SUBSCRIPTION = 3,
    STOP_ORDER_STATE = 4,
  }
}

export enum OrderDirection { 
  ORDER_DIRECTION_UNSPECIFIED = 0,
  ORDER_DIRECTION_BUY = 1,
  ORDER_DIRECTION_SELL = 2,
}
export enum OrderType { 
  ORDER_TYPE_UNSPECIFIED = 0,
  ORDER_TYPE_LIMIT = 1,
  ORDER_TYPE_MARKET = 2,
  ORDER_TYPE_BESTPRICE = 3,
}
export enum OrderExecutionReportStatus { 
  EXECUTION_REPORT_STATUS_UNSPECIFIED = 0,
  EXECUTION_REPORT_STATUS_FILL = 1,
  EXECUTION_REPORT_STATUS_REJECTED = 2,
  EXECUTION_REPORT_STATUS_CANCELLED = 3,
  EXECUTION_REPORT_STATUS_NEW = 4,
  EXECUTION_REPORT_STATUS_PARTIALLYFILL = 5,
}
export enum TimeInForceType { 
  TIME_IN_FORCE_UNSPECIFIED = 0,
  TIME_IN_FORCE_DAY = 1,
  TIME_IN_FORCE_FILL_AND_KILL = 2,
  TIME_IN_FORCE_FILL_OR_KILL = 3,
}
export enum OrderIdType { 
  ORDER_ID_TYPE_UNSPECIFIED = 0,
  ORDER_ID_TYPE_EXCHANGE = 1,
  ORDER_ID_TYPE_REQUEST = 2,
}
