import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_api_field_behavior_pb from '../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as tinvest_common_pb from '../tinvest/common_pb'; // proto import: "tinvest/common.proto"


export class PostStopOrderRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): PostStopOrderRequest;
  hasFigi(): boolean;
  clearFigi(): PostStopOrderRequest;

  getQuantity(): number;
  setQuantity(value: number): PostStopOrderRequest;

  getPrice(): tinvest_common_pb.Quotation | undefined;
  setPrice(value?: tinvest_common_pb.Quotation): PostStopOrderRequest;
  hasPrice(): boolean;
  clearPrice(): PostStopOrderRequest;

  getStopPrice(): tinvest_common_pb.Quotation | undefined;
  setStopPrice(value?: tinvest_common_pb.Quotation): PostStopOrderRequest;
  hasStopPrice(): boolean;
  clearStopPrice(): PostStopOrderRequest;

  getDirection(): StopOrderDirection;
  setDirection(value: StopOrderDirection): PostStopOrderRequest;

  getAccountId(): string;
  setAccountId(value: string): PostStopOrderRequest;

  getExpirationType(): StopOrderExpirationType;
  setExpirationType(value: StopOrderExpirationType): PostStopOrderRequest;

  getStopOrderType(): StopOrderType;
  setStopOrderType(value: StopOrderType): PostStopOrderRequest;

  getExpireDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireDate(value?: google_protobuf_timestamp_pb.Timestamp): PostStopOrderRequest;
  hasExpireDate(): boolean;
  clearExpireDate(): PostStopOrderRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): PostStopOrderRequest;

  getExchangeOrderType(): ExchangeOrderType;
  setExchangeOrderType(value: ExchangeOrderType): PostStopOrderRequest;

  getTakeProfitType(): TakeProfitType;
  setTakeProfitType(value: TakeProfitType): PostStopOrderRequest;

  getTrailingData(): PostStopOrderRequest.TrailingData | undefined;
  setTrailingData(value?: PostStopOrderRequest.TrailingData): PostStopOrderRequest;
  hasTrailingData(): boolean;
  clearTrailingData(): PostStopOrderRequest;

  getPriceType(): tinvest_common_pb.PriceType;
  setPriceType(value: tinvest_common_pb.PriceType): PostStopOrderRequest;

  getOrderId(): string;
  setOrderId(value: string): PostStopOrderRequest;

  getConfirmMarginTrade(): boolean;
  setConfirmMarginTrade(value: boolean): PostStopOrderRequest;

  getInstantExecution(): boolean;
  setInstantExecution(value: boolean): PostStopOrderRequest;
  hasInstantExecution(): boolean;
  clearInstantExecution(): PostStopOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostStopOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostStopOrderRequest): PostStopOrderRequest.AsObject;
  static serializeBinaryToWriter(message: PostStopOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostStopOrderRequest;
  static deserializeBinaryFromReader(message: PostStopOrderRequest, reader: jspb.BinaryReader): PostStopOrderRequest;
}

export namespace PostStopOrderRequest {
  export type AsObject = {
    figi?: string,
    quantity: number,
    price?: tinvest_common_pb.Quotation.AsObject,
    stopPrice?: tinvest_common_pb.Quotation.AsObject,
    direction: StopOrderDirection,
    accountId: string,
    expirationType: StopOrderExpirationType,
    stopOrderType: StopOrderType,
    expireDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    instrumentId: string,
    exchangeOrderType: ExchangeOrderType,
    takeProfitType: TakeProfitType,
    trailingData?: PostStopOrderRequest.TrailingData.AsObject,
    priceType: tinvest_common_pb.PriceType,
    orderId: string,
    confirmMarginTrade: boolean,
    instantExecution?: boolean,
  }

  export class TrailingData extends jspb.Message {
    getIndent(): tinvest_common_pb.Quotation | undefined;
    setIndent(value?: tinvest_common_pb.Quotation): TrailingData;
    hasIndent(): boolean;
    clearIndent(): TrailingData;

    getIndentType(): TrailingValueType;
    setIndentType(value: TrailingValueType): TrailingData;

    getSpread(): tinvest_common_pb.Quotation | undefined;
    setSpread(value?: tinvest_common_pb.Quotation): TrailingData;
    hasSpread(): boolean;
    clearSpread(): TrailingData;

    getSpreadType(): TrailingValueType;
    setSpreadType(value: TrailingValueType): TrailingData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrailingData.AsObject;
    static toObject(includeInstance: boolean, msg: TrailingData): TrailingData.AsObject;
    static serializeBinaryToWriter(message: TrailingData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrailingData;
    static deserializeBinaryFromReader(message: TrailingData, reader: jspb.BinaryReader): TrailingData;
  }

  export namespace TrailingData {
    export type AsObject = {
      indent?: tinvest_common_pb.Quotation.AsObject,
      indentType: TrailingValueType,
      spread?: tinvest_common_pb.Quotation.AsObject,
      spreadType: TrailingValueType,
    }
  }


  export enum FigiCase { 
    _FIGI_NOT_SET = 0,
    FIGI = 1,
  }

  export enum PriceCase { 
    _PRICE_NOT_SET = 0,
    PRICE = 3,
  }

  export enum StopPriceCase { 
    _STOP_PRICE_NOT_SET = 0,
    STOP_PRICE = 4,
  }

  export enum ExpireDateCase { 
    _EXPIRE_DATE_NOT_SET = 0,
    EXPIRE_DATE = 9,
  }

  export enum InstantExecutionCase { 
    _INSTANT_EXECUTION_NOT_SET = 0,
    INSTANT_EXECUTION = 17,
  }
}

export class PostStopOrderResponse extends jspb.Message {
  getStopOrderId(): string;
  setStopOrderId(value: string): PostStopOrderResponse;

  getOrderRequestId(): string;
  setOrderRequestId(value: string): PostStopOrderResponse;

  getResponseMetadata(): tinvest_common_pb.ResponseMetadata | undefined;
  setResponseMetadata(value?: tinvest_common_pb.ResponseMetadata): PostStopOrderResponse;
  hasResponseMetadata(): boolean;
  clearResponseMetadata(): PostStopOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostStopOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostStopOrderResponse): PostStopOrderResponse.AsObject;
  static serializeBinaryToWriter(message: PostStopOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostStopOrderResponse;
  static deserializeBinaryFromReader(message: PostStopOrderResponse, reader: jspb.BinaryReader): PostStopOrderResponse;
}

export namespace PostStopOrderResponse {
  export type AsObject = {
    stopOrderId: string,
    orderRequestId: string,
    responseMetadata?: tinvest_common_pb.ResponseMetadata.AsObject,
  }
}

export class GetStopOrdersRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): GetStopOrdersRequest;

  getStatus(): StopOrderStatusOption;
  setStatus(value: StopOrderStatusOption): GetStopOrdersRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetStopOrdersRequest;
  hasFrom(): boolean;
  clearFrom(): GetStopOrdersRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetStopOrdersRequest;
  hasTo(): boolean;
  clearTo(): GetStopOrdersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStopOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStopOrdersRequest): GetStopOrdersRequest.AsObject;
  static serializeBinaryToWriter(message: GetStopOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStopOrdersRequest;
  static deserializeBinaryFromReader(message: GetStopOrdersRequest, reader: jspb.BinaryReader): GetStopOrdersRequest;
}

export namespace GetStopOrdersRequest {
  export type AsObject = {
    accountId: string,
    status: StopOrderStatusOption,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetStopOrdersResponse extends jspb.Message {
  getStopOrdersList(): Array<StopOrder>;
  setStopOrdersList(value: Array<StopOrder>): GetStopOrdersResponse;
  clearStopOrdersList(): GetStopOrdersResponse;
  addStopOrders(value?: StopOrder, index?: number): StopOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStopOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStopOrdersResponse): GetStopOrdersResponse.AsObject;
  static serializeBinaryToWriter(message: GetStopOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStopOrdersResponse;
  static deserializeBinaryFromReader(message: GetStopOrdersResponse, reader: jspb.BinaryReader): GetStopOrdersResponse;
}

export namespace GetStopOrdersResponse {
  export type AsObject = {
    stopOrdersList: Array<StopOrder.AsObject>,
  }
}

export class CancelStopOrderRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): CancelStopOrderRequest;

  getStopOrderId(): string;
  setStopOrderId(value: string): CancelStopOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelStopOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelStopOrderRequest): CancelStopOrderRequest.AsObject;
  static serializeBinaryToWriter(message: CancelStopOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelStopOrderRequest;
  static deserializeBinaryFromReader(message: CancelStopOrderRequest, reader: jspb.BinaryReader): CancelStopOrderRequest;
}

export namespace CancelStopOrderRequest {
  export type AsObject = {
    accountId: string,
    stopOrderId: string,
  }
}

export class CancelStopOrderResponse extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): CancelStopOrderResponse;
  hasTime(): boolean;
  clearTime(): CancelStopOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelStopOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelStopOrderResponse): CancelStopOrderResponse.AsObject;
  static serializeBinaryToWriter(message: CancelStopOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelStopOrderResponse;
  static deserializeBinaryFromReader(message: CancelStopOrderResponse, reader: jspb.BinaryReader): CancelStopOrderResponse;
}

export namespace CancelStopOrderResponse {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StopOrder extends jspb.Message {
  getStopOrderId(): string;
  setStopOrderId(value: string): StopOrder;

  getLotsRequested(): number;
  setLotsRequested(value: number): StopOrder;

  getFigi(): string;
  setFigi(value: string): StopOrder;

  getDirection(): StopOrderDirection;
  setDirection(value: StopOrderDirection): StopOrder;

  getCurrency(): string;
  setCurrency(value: string): StopOrder;

  getOrderType(): StopOrderType;
  setOrderType(value: StopOrderType): StopOrder;

  getCreateDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateDate(value?: google_protobuf_timestamp_pb.Timestamp): StopOrder;
  hasCreateDate(): boolean;
  clearCreateDate(): StopOrder;

  getActivationDateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setActivationDateTime(value?: google_protobuf_timestamp_pb.Timestamp): StopOrder;
  hasActivationDateTime(): boolean;
  clearActivationDateTime(): StopOrder;

  getExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): StopOrder;
  hasExpirationTime(): boolean;
  clearExpirationTime(): StopOrder;

  getPrice(): tinvest_common_pb.MoneyValue | undefined;
  setPrice(value?: tinvest_common_pb.MoneyValue): StopOrder;
  hasPrice(): boolean;
  clearPrice(): StopOrder;

  getStopPrice(): tinvest_common_pb.MoneyValue | undefined;
  setStopPrice(value?: tinvest_common_pb.MoneyValue): StopOrder;
  hasStopPrice(): boolean;
  clearStopPrice(): StopOrder;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): StopOrder;

  getTakeProfitType(): TakeProfitType;
  setTakeProfitType(value: TakeProfitType): StopOrder;

  getTrailingData(): StopOrder.TrailingData | undefined;
  setTrailingData(value?: StopOrder.TrailingData): StopOrder;
  hasTrailingData(): boolean;
  clearTrailingData(): StopOrder;

  getStatus(): StopOrderStatusOption;
  setStatus(value: StopOrderStatusOption): StopOrder;

  getExchangeOrderType(): ExchangeOrderType;
  setExchangeOrderType(value: ExchangeOrderType): StopOrder;

  getExchangeOrderId(): string;
  setExchangeOrderId(value: string): StopOrder;
  hasExchangeOrderId(): boolean;
  clearExchangeOrderId(): StopOrder;

  getTicker(): string;
  setTicker(value: string): StopOrder;

  getClassCode(): string;
  setClassCode(value: string): StopOrder;

  getInstantExecution(): boolean;
  setInstantExecution(value: boolean): StopOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopOrder.AsObject;
  static toObject(includeInstance: boolean, msg: StopOrder): StopOrder.AsObject;
  static serializeBinaryToWriter(message: StopOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopOrder;
  static deserializeBinaryFromReader(message: StopOrder, reader: jspb.BinaryReader): StopOrder;
}

export namespace StopOrder {
  export type AsObject = {
    stopOrderId: string,
    lotsRequested: number,
    figi: string,
    direction: StopOrderDirection,
    currency: string,
    orderType: StopOrderType,
    createDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    activationDateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    price?: tinvest_common_pb.MoneyValue.AsObject,
    stopPrice?: tinvest_common_pb.MoneyValue.AsObject,
    instrumentUid: string,
    takeProfitType: TakeProfitType,
    trailingData?: StopOrder.TrailingData.AsObject,
    status: StopOrderStatusOption,
    exchangeOrderType: ExchangeOrderType,
    exchangeOrderId?: string,
    ticker: string,
    classCode: string,
    instantExecution: boolean,
  }

  export class TrailingData extends jspb.Message {
    getIndent(): tinvest_common_pb.Quotation | undefined;
    setIndent(value?: tinvest_common_pb.Quotation): TrailingData;
    hasIndent(): boolean;
    clearIndent(): TrailingData;

    getIndentType(): TrailingValueType;
    setIndentType(value: TrailingValueType): TrailingData;

    getSpread(): tinvest_common_pb.Quotation | undefined;
    setSpread(value?: tinvest_common_pb.Quotation): TrailingData;
    hasSpread(): boolean;
    clearSpread(): TrailingData;

    getSpreadType(): TrailingValueType;
    setSpreadType(value: TrailingValueType): TrailingData;

    getStatus(): TrailingStopStatus;
    setStatus(value: TrailingStopStatus): TrailingData;

    getPrice(): tinvest_common_pb.Quotation | undefined;
    setPrice(value?: tinvest_common_pb.Quotation): TrailingData;
    hasPrice(): boolean;
    clearPrice(): TrailingData;

    getExtr(): tinvest_common_pb.Quotation | undefined;
    setExtr(value?: tinvest_common_pb.Quotation): TrailingData;
    hasExtr(): boolean;
    clearExtr(): TrailingData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrailingData.AsObject;
    static toObject(includeInstance: boolean, msg: TrailingData): TrailingData.AsObject;
    static serializeBinaryToWriter(message: TrailingData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrailingData;
    static deserializeBinaryFromReader(message: TrailingData, reader: jspb.BinaryReader): TrailingData;
  }

  export namespace TrailingData {
    export type AsObject = {
      indent?: tinvest_common_pb.Quotation.AsObject,
      indentType: TrailingValueType,
      spread?: tinvest_common_pb.Quotation.AsObject,
      spreadType: TrailingValueType,
      status: TrailingStopStatus,
      price?: tinvest_common_pb.Quotation.AsObject,
      extr?: tinvest_common_pb.Quotation.AsObject,
    }
  }


  export enum ExchangeOrderIdCase { 
    _EXCHANGE_ORDER_ID_NOT_SET = 0,
    EXCHANGE_ORDER_ID = 17,
  }
}

export enum StopOrderDirection { 
  STOP_ORDER_DIRECTION_UNSPECIFIED = 0,
  STOP_ORDER_DIRECTION_BUY = 1,
  STOP_ORDER_DIRECTION_SELL = 2,
}
export enum StopOrderExpirationType { 
  STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED = 0,
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL = 1,
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE = 2,
}
export enum StopOrderType { 
  STOP_ORDER_TYPE_UNSPECIFIED = 0,
  STOP_ORDER_TYPE_TAKE_PROFIT = 1,
  STOP_ORDER_TYPE_STOP_LOSS = 2,
  STOP_ORDER_TYPE_STOP_LIMIT = 3,
}
export enum StopOrderStatusOption { 
  STOP_ORDER_STATUS_UNSPECIFIED = 0,
  STOP_ORDER_STATUS_ALL = 1,
  STOP_ORDER_STATUS_ACTIVE = 2,
  STOP_ORDER_STATUS_EXECUTED = 3,
  STOP_ORDER_STATUS_CANCELED = 4,
  STOP_ORDER_STATUS_EXPIRED = 5,
}
export enum ExchangeOrderType { 
  EXCHANGE_ORDER_TYPE_UNSPECIFIED = 0,
  EXCHANGE_ORDER_TYPE_MARKET = 1,
  EXCHANGE_ORDER_TYPE_LIMIT = 2,
}
export enum TakeProfitType { 
  TAKE_PROFIT_TYPE_UNSPECIFIED = 0,
  TAKE_PROFIT_TYPE_REGULAR = 1,
  TAKE_PROFIT_TYPE_TRAILING = 2,
}
export enum TrailingValueType { 
  TRAILING_VALUE_UNSPECIFIED = 0,
  TRAILING_VALUE_ABSOLUTE = 1,
  TRAILING_VALUE_RELATIVE = 2,
}
export enum TrailingStopStatus { 
  TRAILING_STOP_UNSPECIFIED = 0,
  TRAILING_STOP_ACTIVE = 1,
  TRAILING_STOP_ACTIVATED = 2,
}
