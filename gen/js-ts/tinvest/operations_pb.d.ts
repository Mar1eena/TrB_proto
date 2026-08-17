import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as tinvest_common_pb from '../tinvest/common_pb'; // proto import: "tinvest/common.proto"
import * as google_api_field_behavior_pb from '../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"


export class OperationsRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): OperationsRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): OperationsRequest;
  hasFrom(): boolean;
  clearFrom(): OperationsRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): OperationsRequest;
  hasTo(): boolean;
  clearTo(): OperationsRequest;

  getState(): OperationState;
  setState(value: OperationState): OperationsRequest;
  hasState(): boolean;
  clearState(): OperationsRequest;

  getFigi(): string;
  setFigi(value: string): OperationsRequest;
  hasFigi(): boolean;
  clearFigi(): OperationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OperationsRequest): OperationsRequest.AsObject;
  static serializeBinaryToWriter(message: OperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationsRequest;
  static deserializeBinaryFromReader(message: OperationsRequest, reader: jspb.BinaryReader): OperationsRequest;
}

export namespace OperationsRequest {
  export type AsObject = {
    accountId: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state?: OperationState,
    figi?: string,
  }

  export enum FromCase { 
    _FROM_NOT_SET = 0,
    FROM = 2,
  }

  export enum ToCase { 
    _TO_NOT_SET = 0,
    TO = 3,
  }

  export enum StateCase { 
    _STATE_NOT_SET = 0,
    STATE = 4,
  }

  export enum FigiCase { 
    _FIGI_NOT_SET = 0,
    FIGI = 5,
  }
}

export class OperationsResponse extends jspb.Message {
  getOperationsList(): Array<Operation>;
  setOperationsList(value: Array<Operation>): OperationsResponse;
  clearOperationsList(): OperationsResponse;
  addOperations(value?: Operation, index?: number): Operation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OperationsResponse): OperationsResponse.AsObject;
  static serializeBinaryToWriter(message: OperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationsResponse;
  static deserializeBinaryFromReader(message: OperationsResponse, reader: jspb.BinaryReader): OperationsResponse;
}

export namespace OperationsResponse {
  export type AsObject = {
    operationsList: Array<Operation.AsObject>,
  }
}

export class Operation extends jspb.Message {
  getId(): string;
  setId(value: string): Operation;

  getParentOperationId(): string;
  setParentOperationId(value: string): Operation;

  getCurrency(): string;
  setCurrency(value: string): Operation;

  getPayment(): tinvest_common_pb.MoneyValue | undefined;
  setPayment(value?: tinvest_common_pb.MoneyValue): Operation;
  hasPayment(): boolean;
  clearPayment(): Operation;

  getPrice(): tinvest_common_pb.MoneyValue | undefined;
  setPrice(value?: tinvest_common_pb.MoneyValue): Operation;
  hasPrice(): boolean;
  clearPrice(): Operation;

  getState(): OperationState;
  setState(value: OperationState): Operation;

  getQuantity(): number;
  setQuantity(value: number): Operation;

  getQuantityRest(): number;
  setQuantityRest(value: number): Operation;

  getFigi(): string;
  setFigi(value: string): Operation;

  getInstrumentType(): string;
  setInstrumentType(value: string): Operation;

  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): Operation;
  hasDate(): boolean;
  clearDate(): Operation;

  getType(): string;
  setType(value: string): Operation;

  getOperationType(): OperationType;
  setOperationType(value: OperationType): Operation;

  getTradesList(): Array<OperationTrade>;
  setTradesList(value: Array<OperationTrade>): Operation;
  clearTradesList(): Operation;
  addTrades(value?: OperationTrade, index?: number): OperationTrade;

  getAssetUid(): string;
  setAssetUid(value: string): Operation;

  getPositionUid(): string;
  setPositionUid(value: string): Operation;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): Operation;

  getChildOperationsList(): Array<ChildOperationItem>;
  setChildOperationsList(value: Array<ChildOperationItem>): Operation;
  clearChildOperationsList(): Operation;
  addChildOperations(value?: ChildOperationItem, index?: number): ChildOperationItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    id: string,
    parentOperationId: string,
    currency: string,
    payment?: tinvest_common_pb.MoneyValue.AsObject,
    price?: tinvest_common_pb.MoneyValue.AsObject,
    state: OperationState,
    quantity: number,
    quantityRest: number,
    figi: string,
    instrumentType: string,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: string,
    operationType: OperationType,
    tradesList: Array<OperationTrade.AsObject>,
    assetUid: string,
    positionUid: string,
    instrumentUid: string,
    childOperationsList: Array<ChildOperationItem.AsObject>,
  }
}

export class OperationTrade extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): OperationTrade;

  getDateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationTrade;
  hasDateTime(): boolean;
  clearDateTime(): OperationTrade;

  getQuantity(): number;
  setQuantity(value: number): OperationTrade;

  getPrice(): tinvest_common_pb.MoneyValue | undefined;
  setPrice(value?: tinvest_common_pb.MoneyValue): OperationTrade;
  hasPrice(): boolean;
  clearPrice(): OperationTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationTrade.AsObject;
  static toObject(includeInstance: boolean, msg: OperationTrade): OperationTrade.AsObject;
  static serializeBinaryToWriter(message: OperationTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationTrade;
  static deserializeBinaryFromReader(message: OperationTrade, reader: jspb.BinaryReader): OperationTrade;
}

export namespace OperationTrade {
  export type AsObject = {
    tradeId: string,
    dateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    quantity: number,
    price?: tinvest_common_pb.MoneyValue.AsObject,
  }
}

export class PortfolioRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): PortfolioRequest;

  getCurrency(): PortfolioRequest.CurrencyRequest;
  setCurrency(value: PortfolioRequest.CurrencyRequest): PortfolioRequest;
  hasCurrency(): boolean;
  clearCurrency(): PortfolioRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortfolioRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PortfolioRequest): PortfolioRequest.AsObject;
  static serializeBinaryToWriter(message: PortfolioRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortfolioRequest;
  static deserializeBinaryFromReader(message: PortfolioRequest, reader: jspb.BinaryReader): PortfolioRequest;
}

export namespace PortfolioRequest {
  export type AsObject = {
    accountId: string,
    currency?: PortfolioRequest.CurrencyRequest,
  }

  export enum CurrencyRequest { 
    RUB = 0,
    USD = 1,
    EUR = 2,
  }

  export enum CurrencyCase { 
    _CURRENCY_NOT_SET = 0,
    CURRENCY = 2,
  }
}

export class PortfolioResponse extends jspb.Message {
  getTotalAmountShares(): tinvest_common_pb.MoneyValue | undefined;
  setTotalAmountShares(value?: tinvest_common_pb.MoneyValue): PortfolioResponse;
  hasTotalAmountShares(): boolean;
  clearTotalAmountShares(): PortfolioResponse;

  getTotalAmountBonds(): tinvest_common_pb.MoneyValue | undefined;
  setTotalAmountBonds(value?: tinvest_common_pb.MoneyValue): PortfolioResponse;
  hasTotalAmountBonds(): boolean;
  clearTotalAmountBonds(): PortfolioResponse;

  getTotalAmountEtf(): tinvest_common_pb.MoneyValue | undefined;
  setTotalAmountEtf(value?: tinvest_common_pb.MoneyValue): PortfolioResponse;
  hasTotalAmountEtf(): boolean;
  clearTotalAmountEtf(): PortfolioResponse;

  getTotalAmountCurrencies(): tinvest_common_pb.MoneyValue | undefined;
  setTotalAmountCurrencies(value?: tinvest_common_pb.MoneyValue): PortfolioResponse;
  hasTotalAmountCurrencies(): boolean;
  clearTotalAmountCurrencies(): PortfolioResponse;

  getTotalAmountFutures(): tinvest_common_pb.MoneyValue | undefined;
  setTotalAmountFutures(value?: tinvest_common_pb.MoneyValue): PortfolioResponse;
  hasTotalAmountFutures(): boolean;
  clearTotalAmountFutures(): PortfolioResponse;

  getExpectedYield(): tinvest_common_pb.Quotation | undefined;
  setExpectedYield(value?: tinvest_common_pb.Quotation): PortfolioResponse;
  hasExpectedYield(): boolean;
  clearExpectedYield(): PortfolioResponse;

  getPositionsList(): Array<PortfolioPosition>;
  setPositionsList(value: Array<PortfolioPosition>): PortfolioResponse;
  clearPositionsList(): PortfolioResponse;
  addPositions(value?: PortfolioPosition, index?: number): PortfolioPosition;

  getAccountId(): string;
  setAccountId(value: string): PortfolioResponse;

  getTotalAmountOptions(): tinvest_common_pb.MoneyValue | undefined;
  setTotalAmountOptions(value?: tinvest_common_pb.MoneyValue): PortfolioResponse;
  hasTotalAmountOptions(): boolean;
  clearTotalAmountOptions(): PortfolioResponse;

  getTotalAmountSp(): tinvest_common_pb.MoneyValue | undefined;
  setTotalAmountSp(value?: tinvest_common_pb.MoneyValue): PortfolioResponse;
  hasTotalAmountSp(): boolean;
  clearTotalAmountSp(): PortfolioResponse;

  getTotalAmountPortfolio(): tinvest_common_pb.MoneyValue | undefined;
  setTotalAmountPortfolio(value?: tinvest_common_pb.MoneyValue): PortfolioResponse;
  hasTotalAmountPortfolio(): boolean;
  clearTotalAmountPortfolio(): PortfolioResponse;

  getVirtualPositionsList(): Array<VirtualPortfolioPosition>;
  setVirtualPositionsList(value: Array<VirtualPortfolioPosition>): PortfolioResponse;
  clearVirtualPositionsList(): PortfolioResponse;
  addVirtualPositions(value?: VirtualPortfolioPosition, index?: number): VirtualPortfolioPosition;

  getDailyYield(): tinvest_common_pb.MoneyValue | undefined;
  setDailyYield(value?: tinvest_common_pb.MoneyValue): PortfolioResponse;
  hasDailyYield(): boolean;
  clearDailyYield(): PortfolioResponse;

  getDailyYieldRelative(): tinvest_common_pb.Quotation | undefined;
  setDailyYieldRelative(value?: tinvest_common_pb.Quotation): PortfolioResponse;
  hasDailyYieldRelative(): boolean;
  clearDailyYieldRelative(): PortfolioResponse;

  getTotalAmountDfa(): tinvest_common_pb.MoneyValue | undefined;
  setTotalAmountDfa(value?: tinvest_common_pb.MoneyValue): PortfolioResponse;
  hasTotalAmountDfa(): boolean;
  clearTotalAmountDfa(): PortfolioResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortfolioResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PortfolioResponse): PortfolioResponse.AsObject;
  static serializeBinaryToWriter(message: PortfolioResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortfolioResponse;
  static deserializeBinaryFromReader(message: PortfolioResponse, reader: jspb.BinaryReader): PortfolioResponse;
}

export namespace PortfolioResponse {
  export type AsObject = {
    totalAmountShares?: tinvest_common_pb.MoneyValue.AsObject,
    totalAmountBonds?: tinvest_common_pb.MoneyValue.AsObject,
    totalAmountEtf?: tinvest_common_pb.MoneyValue.AsObject,
    totalAmountCurrencies?: tinvest_common_pb.MoneyValue.AsObject,
    totalAmountFutures?: tinvest_common_pb.MoneyValue.AsObject,
    expectedYield?: tinvest_common_pb.Quotation.AsObject,
    positionsList: Array<PortfolioPosition.AsObject>,
    accountId: string,
    totalAmountOptions?: tinvest_common_pb.MoneyValue.AsObject,
    totalAmountSp?: tinvest_common_pb.MoneyValue.AsObject,
    totalAmountPortfolio?: tinvest_common_pb.MoneyValue.AsObject,
    virtualPositionsList: Array<VirtualPortfolioPosition.AsObject>,
    dailyYield?: tinvest_common_pb.MoneyValue.AsObject,
    dailyYieldRelative?: tinvest_common_pb.Quotation.AsObject,
    totalAmountDfa?: tinvest_common_pb.MoneyValue.AsObject,
  }
}

export class PositionsRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): PositionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsRequest): PositionsRequest.AsObject;
  static serializeBinaryToWriter(message: PositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsRequest;
  static deserializeBinaryFromReader(message: PositionsRequest, reader: jspb.BinaryReader): PositionsRequest;
}

export namespace PositionsRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class PositionsResponse extends jspb.Message {
  getMoneyList(): Array<tinvest_common_pb.MoneyValue>;
  setMoneyList(value: Array<tinvest_common_pb.MoneyValue>): PositionsResponse;
  clearMoneyList(): PositionsResponse;
  addMoney(value?: tinvest_common_pb.MoneyValue, index?: number): tinvest_common_pb.MoneyValue;

  getBlockedList(): Array<tinvest_common_pb.MoneyValue>;
  setBlockedList(value: Array<tinvest_common_pb.MoneyValue>): PositionsResponse;
  clearBlockedList(): PositionsResponse;
  addBlocked(value?: tinvest_common_pb.MoneyValue, index?: number): tinvest_common_pb.MoneyValue;

  getSecuritiesList(): Array<PositionsSecurities>;
  setSecuritiesList(value: Array<PositionsSecurities>): PositionsResponse;
  clearSecuritiesList(): PositionsResponse;
  addSecurities(value?: PositionsSecurities, index?: number): PositionsSecurities;

  getLimitsLoadingInProgress(): boolean;
  setLimitsLoadingInProgress(value: boolean): PositionsResponse;

  getFuturesList(): Array<PositionsFutures>;
  setFuturesList(value: Array<PositionsFutures>): PositionsResponse;
  clearFuturesList(): PositionsResponse;
  addFutures(value?: PositionsFutures, index?: number): PositionsFutures;

  getOptionsList(): Array<PositionsOptions>;
  setOptionsList(value: Array<PositionsOptions>): PositionsResponse;
  clearOptionsList(): PositionsResponse;
  addOptions(value?: PositionsOptions, index?: number): PositionsOptions;

  getAccountId(): string;
  setAccountId(value: string): PositionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsResponse): PositionsResponse.AsObject;
  static serializeBinaryToWriter(message: PositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsResponse;
  static deserializeBinaryFromReader(message: PositionsResponse, reader: jspb.BinaryReader): PositionsResponse;
}

export namespace PositionsResponse {
  export type AsObject = {
    moneyList: Array<tinvest_common_pb.MoneyValue.AsObject>,
    blockedList: Array<tinvest_common_pb.MoneyValue.AsObject>,
    securitiesList: Array<PositionsSecurities.AsObject>,
    limitsLoadingInProgress: boolean,
    futuresList: Array<PositionsFutures.AsObject>,
    optionsList: Array<PositionsOptions.AsObject>,
    accountId: string,
  }
}

export class WithdrawLimitsRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): WithdrawLimitsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawLimitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawLimitsRequest): WithdrawLimitsRequest.AsObject;
  static serializeBinaryToWriter(message: WithdrawLimitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawLimitsRequest;
  static deserializeBinaryFromReader(message: WithdrawLimitsRequest, reader: jspb.BinaryReader): WithdrawLimitsRequest;
}

export namespace WithdrawLimitsRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class WithdrawLimitsResponse extends jspb.Message {
  getMoneyList(): Array<tinvest_common_pb.MoneyValue>;
  setMoneyList(value: Array<tinvest_common_pb.MoneyValue>): WithdrawLimitsResponse;
  clearMoneyList(): WithdrawLimitsResponse;
  addMoney(value?: tinvest_common_pb.MoneyValue, index?: number): tinvest_common_pb.MoneyValue;

  getBlockedList(): Array<tinvest_common_pb.MoneyValue>;
  setBlockedList(value: Array<tinvest_common_pb.MoneyValue>): WithdrawLimitsResponse;
  clearBlockedList(): WithdrawLimitsResponse;
  addBlocked(value?: tinvest_common_pb.MoneyValue, index?: number): tinvest_common_pb.MoneyValue;

  getBlockedGuaranteeList(): Array<tinvest_common_pb.MoneyValue>;
  setBlockedGuaranteeList(value: Array<tinvest_common_pb.MoneyValue>): WithdrawLimitsResponse;
  clearBlockedGuaranteeList(): WithdrawLimitsResponse;
  addBlockedGuarantee(value?: tinvest_common_pb.MoneyValue, index?: number): tinvest_common_pb.MoneyValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawLimitsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawLimitsResponse): WithdrawLimitsResponse.AsObject;
  static serializeBinaryToWriter(message: WithdrawLimitsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawLimitsResponse;
  static deserializeBinaryFromReader(message: WithdrawLimitsResponse, reader: jspb.BinaryReader): WithdrawLimitsResponse;
}

export namespace WithdrawLimitsResponse {
  export type AsObject = {
    moneyList: Array<tinvest_common_pb.MoneyValue.AsObject>,
    blockedList: Array<tinvest_common_pb.MoneyValue.AsObject>,
    blockedGuaranteeList: Array<tinvest_common_pb.MoneyValue.AsObject>,
  }
}

export class PortfolioPosition extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): PortfolioPosition;

  getInstrumentType(): string;
  setInstrumentType(value: string): PortfolioPosition;

  getQuantity(): tinvest_common_pb.Quotation | undefined;
  setQuantity(value?: tinvest_common_pb.Quotation): PortfolioPosition;
  hasQuantity(): boolean;
  clearQuantity(): PortfolioPosition;

  getAveragePositionPrice(): tinvest_common_pb.MoneyValue | undefined;
  setAveragePositionPrice(value?: tinvest_common_pb.MoneyValue): PortfolioPosition;
  hasAveragePositionPrice(): boolean;
  clearAveragePositionPrice(): PortfolioPosition;

  getExpectedYield(): tinvest_common_pb.Quotation | undefined;
  setExpectedYield(value?: tinvest_common_pb.Quotation): PortfolioPosition;
  hasExpectedYield(): boolean;
  clearExpectedYield(): PortfolioPosition;

  getCurrentNkd(): tinvest_common_pb.MoneyValue | undefined;
  setCurrentNkd(value?: tinvest_common_pb.MoneyValue): PortfolioPosition;
  hasCurrentNkd(): boolean;
  clearCurrentNkd(): PortfolioPosition;

  getAveragePositionPricePt(): tinvest_common_pb.Quotation | undefined;
  setAveragePositionPricePt(value?: tinvest_common_pb.Quotation): PortfolioPosition;
  hasAveragePositionPricePt(): boolean;
  clearAveragePositionPricePt(): PortfolioPosition;

  getCurrentPrice(): tinvest_common_pb.MoneyValue | undefined;
  setCurrentPrice(value?: tinvest_common_pb.MoneyValue): PortfolioPosition;
  hasCurrentPrice(): boolean;
  clearCurrentPrice(): PortfolioPosition;

  getAveragePositionPriceFifo(): tinvest_common_pb.MoneyValue | undefined;
  setAveragePositionPriceFifo(value?: tinvest_common_pb.MoneyValue): PortfolioPosition;
  hasAveragePositionPriceFifo(): boolean;
  clearAveragePositionPriceFifo(): PortfolioPosition;

  getQuantityLots(): tinvest_common_pb.Quotation | undefined;
  setQuantityLots(value?: tinvest_common_pb.Quotation): PortfolioPosition;
  hasQuantityLots(): boolean;
  clearQuantityLots(): PortfolioPosition;

  getBlocked(): boolean;
  setBlocked(value: boolean): PortfolioPosition;

  getBlockedLots(): tinvest_common_pb.Quotation | undefined;
  setBlockedLots(value?: tinvest_common_pb.Quotation): PortfolioPosition;
  hasBlockedLots(): boolean;
  clearBlockedLots(): PortfolioPosition;

  getPositionUid(): string;
  setPositionUid(value: string): PortfolioPosition;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): PortfolioPosition;

  getVarMargin(): tinvest_common_pb.MoneyValue | undefined;
  setVarMargin(value?: tinvest_common_pb.MoneyValue): PortfolioPosition;
  hasVarMargin(): boolean;
  clearVarMargin(): PortfolioPosition;

  getExpectedYieldFifo(): tinvest_common_pb.Quotation | undefined;
  setExpectedYieldFifo(value?: tinvest_common_pb.Quotation): PortfolioPosition;
  hasExpectedYieldFifo(): boolean;
  clearExpectedYieldFifo(): PortfolioPosition;

  getDailyYield(): tinvest_common_pb.MoneyValue | undefined;
  setDailyYield(value?: tinvest_common_pb.MoneyValue): PortfolioPosition;
  hasDailyYield(): boolean;
  clearDailyYield(): PortfolioPosition;

  getTicker(): string;
  setTicker(value: string): PortfolioPosition;

  getClassCode(): string;
  setClassCode(value: string): PortfolioPosition;

  getVarMarginSettled(): tinvest_common_pb.MoneyValue | undefined;
  setVarMarginSettled(value?: tinvest_common_pb.MoneyValue): PortfolioPosition;
  hasVarMarginSettled(): boolean;
  clearVarMarginSettled(): PortfolioPosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortfolioPosition.AsObject;
  static toObject(includeInstance: boolean, msg: PortfolioPosition): PortfolioPosition.AsObject;
  static serializeBinaryToWriter(message: PortfolioPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortfolioPosition;
  static deserializeBinaryFromReader(message: PortfolioPosition, reader: jspb.BinaryReader): PortfolioPosition;
}

export namespace PortfolioPosition {
  export type AsObject = {
    figi: string,
    instrumentType: string,
    quantity?: tinvest_common_pb.Quotation.AsObject,
    averagePositionPrice?: tinvest_common_pb.MoneyValue.AsObject,
    expectedYield?: tinvest_common_pb.Quotation.AsObject,
    currentNkd?: tinvest_common_pb.MoneyValue.AsObject,
    averagePositionPricePt?: tinvest_common_pb.Quotation.AsObject,
    currentPrice?: tinvest_common_pb.MoneyValue.AsObject,
    averagePositionPriceFifo?: tinvest_common_pb.MoneyValue.AsObject,
    quantityLots?: tinvest_common_pb.Quotation.AsObject,
    blocked: boolean,
    blockedLots?: tinvest_common_pb.Quotation.AsObject,
    positionUid: string,
    instrumentUid: string,
    varMargin?: tinvest_common_pb.MoneyValue.AsObject,
    expectedYieldFifo?: tinvest_common_pb.Quotation.AsObject,
    dailyYield?: tinvest_common_pb.MoneyValue.AsObject,
    ticker: string,
    classCode: string,
    varMarginSettled?: tinvest_common_pb.MoneyValue.AsObject,
  }

  export enum VarMarginSettledCase { 
    _VAR_MARGIN_SETTLED_NOT_SET = 0,
    VAR_MARGIN_SETTLED = 34,
  }
}

export class VirtualPortfolioPosition extends jspb.Message {
  getPositionUid(): string;
  setPositionUid(value: string): VirtualPortfolioPosition;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): VirtualPortfolioPosition;

  getFigi(): string;
  setFigi(value: string): VirtualPortfolioPosition;

  getInstrumentType(): string;
  setInstrumentType(value: string): VirtualPortfolioPosition;

  getQuantity(): tinvest_common_pb.Quotation | undefined;
  setQuantity(value?: tinvest_common_pb.Quotation): VirtualPortfolioPosition;
  hasQuantity(): boolean;
  clearQuantity(): VirtualPortfolioPosition;

  getAveragePositionPrice(): tinvest_common_pb.MoneyValue | undefined;
  setAveragePositionPrice(value?: tinvest_common_pb.MoneyValue): VirtualPortfolioPosition;
  hasAveragePositionPrice(): boolean;
  clearAveragePositionPrice(): VirtualPortfolioPosition;

  getExpectedYield(): tinvest_common_pb.Quotation | undefined;
  setExpectedYield(value?: tinvest_common_pb.Quotation): VirtualPortfolioPosition;
  hasExpectedYield(): boolean;
  clearExpectedYield(): VirtualPortfolioPosition;

  getExpectedYieldFifo(): tinvest_common_pb.Quotation | undefined;
  setExpectedYieldFifo(value?: tinvest_common_pb.Quotation): VirtualPortfolioPosition;
  hasExpectedYieldFifo(): boolean;
  clearExpectedYieldFifo(): VirtualPortfolioPosition;

  getExpireDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireDate(value?: google_protobuf_timestamp_pb.Timestamp): VirtualPortfolioPosition;
  hasExpireDate(): boolean;
  clearExpireDate(): VirtualPortfolioPosition;

  getCurrentPrice(): tinvest_common_pb.MoneyValue | undefined;
  setCurrentPrice(value?: tinvest_common_pb.MoneyValue): VirtualPortfolioPosition;
  hasCurrentPrice(): boolean;
  clearCurrentPrice(): VirtualPortfolioPosition;

  getAveragePositionPriceFifo(): tinvest_common_pb.MoneyValue | undefined;
  setAveragePositionPriceFifo(value?: tinvest_common_pb.MoneyValue): VirtualPortfolioPosition;
  hasAveragePositionPriceFifo(): boolean;
  clearAveragePositionPriceFifo(): VirtualPortfolioPosition;

  getDailyYield(): tinvest_common_pb.MoneyValue | undefined;
  setDailyYield(value?: tinvest_common_pb.MoneyValue): VirtualPortfolioPosition;
  hasDailyYield(): boolean;
  clearDailyYield(): VirtualPortfolioPosition;

  getTicker(): string;
  setTicker(value: string): VirtualPortfolioPosition;

  getClassCode(): string;
  setClassCode(value: string): VirtualPortfolioPosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualPortfolioPosition.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualPortfolioPosition): VirtualPortfolioPosition.AsObject;
  static serializeBinaryToWriter(message: VirtualPortfolioPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualPortfolioPosition;
  static deserializeBinaryFromReader(message: VirtualPortfolioPosition, reader: jspb.BinaryReader): VirtualPortfolioPosition;
}

export namespace VirtualPortfolioPosition {
  export type AsObject = {
    positionUid: string,
    instrumentUid: string,
    figi: string,
    instrumentType: string,
    quantity?: tinvest_common_pb.Quotation.AsObject,
    averagePositionPrice?: tinvest_common_pb.MoneyValue.AsObject,
    expectedYield?: tinvest_common_pb.Quotation.AsObject,
    expectedYieldFifo?: tinvest_common_pb.Quotation.AsObject,
    expireDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    currentPrice?: tinvest_common_pb.MoneyValue.AsObject,
    averagePositionPriceFifo?: tinvest_common_pb.MoneyValue.AsObject,
    dailyYield?: tinvest_common_pb.MoneyValue.AsObject,
    ticker: string,
    classCode: string,
  }
}

export class PositionsSecurities extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): PositionsSecurities;

  getBlocked(): number;
  setBlocked(value: number): PositionsSecurities;

  getBalance(): number;
  setBalance(value: number): PositionsSecurities;

  getPositionUid(): string;
  setPositionUid(value: string): PositionsSecurities;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): PositionsSecurities;

  getTicker(): string;
  setTicker(value: string): PositionsSecurities;

  getClassCode(): string;
  setClassCode(value: string): PositionsSecurities;

  getExchangeBlocked(): boolean;
  setExchangeBlocked(value: boolean): PositionsSecurities;

  getInstrumentType(): string;
  setInstrumentType(value: string): PositionsSecurities;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsSecurities.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsSecurities): PositionsSecurities.AsObject;
  static serializeBinaryToWriter(message: PositionsSecurities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsSecurities;
  static deserializeBinaryFromReader(message: PositionsSecurities, reader: jspb.BinaryReader): PositionsSecurities;
}

export namespace PositionsSecurities {
  export type AsObject = {
    figi: string,
    blocked: number,
    balance: number,
    positionUid: string,
    instrumentUid: string,
    ticker: string,
    classCode: string,
    exchangeBlocked: boolean,
    instrumentType: string,
  }
}

export class PositionsFutures extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): PositionsFutures;

  getBlocked(): number;
  setBlocked(value: number): PositionsFutures;

  getBalance(): number;
  setBalance(value: number): PositionsFutures;

  getPositionUid(): string;
  setPositionUid(value: string): PositionsFutures;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): PositionsFutures;

  getTicker(): string;
  setTicker(value: string): PositionsFutures;

  getClassCode(): string;
  setClassCode(value: string): PositionsFutures;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsFutures.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsFutures): PositionsFutures.AsObject;
  static serializeBinaryToWriter(message: PositionsFutures, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsFutures;
  static deserializeBinaryFromReader(message: PositionsFutures, reader: jspb.BinaryReader): PositionsFutures;
}

export namespace PositionsFutures {
  export type AsObject = {
    figi: string,
    blocked: number,
    balance: number,
    positionUid: string,
    instrumentUid: string,
    ticker: string,
    classCode: string,
  }
}

export class PositionsOptions extends jspb.Message {
  getPositionUid(): string;
  setPositionUid(value: string): PositionsOptions;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): PositionsOptions;

  getTicker(): string;
  setTicker(value: string): PositionsOptions;

  getClassCode(): string;
  setClassCode(value: string): PositionsOptions;

  getBlocked(): number;
  setBlocked(value: number): PositionsOptions;

  getBalance(): number;
  setBalance(value: number): PositionsOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsOptions): PositionsOptions.AsObject;
  static serializeBinaryToWriter(message: PositionsOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsOptions;
  static deserializeBinaryFromReader(message: PositionsOptions, reader: jspb.BinaryReader): PositionsOptions;
}

export namespace PositionsOptions {
  export type AsObject = {
    positionUid: string,
    instrumentUid: string,
    ticker: string,
    classCode: string,
    blocked: number,
    balance: number,
  }
}

export class BrokerReportRequest extends jspb.Message {
  getGenerateBrokerReportRequest(): GenerateBrokerReportRequest | undefined;
  setGenerateBrokerReportRequest(value?: GenerateBrokerReportRequest): BrokerReportRequest;
  hasGenerateBrokerReportRequest(): boolean;
  clearGenerateBrokerReportRequest(): BrokerReportRequest;

  getGetBrokerReportRequest(): GetBrokerReportRequest | undefined;
  setGetBrokerReportRequest(value?: GetBrokerReportRequest): BrokerReportRequest;
  hasGetBrokerReportRequest(): boolean;
  clearGetBrokerReportRequest(): BrokerReportRequest;

  getPayloadCase(): BrokerReportRequest.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrokerReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BrokerReportRequest): BrokerReportRequest.AsObject;
  static serializeBinaryToWriter(message: BrokerReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrokerReportRequest;
  static deserializeBinaryFromReader(message: BrokerReportRequest, reader: jspb.BinaryReader): BrokerReportRequest;
}

export namespace BrokerReportRequest {
  export type AsObject = {
    generateBrokerReportRequest?: GenerateBrokerReportRequest.AsObject,
    getBrokerReportRequest?: GetBrokerReportRequest.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    GENERATE_BROKER_REPORT_REQUEST = 1,
    GET_BROKER_REPORT_REQUEST = 2,
  }
}

export class BrokerReportResponse extends jspb.Message {
  getGenerateBrokerReportResponse(): GenerateBrokerReportResponse | undefined;
  setGenerateBrokerReportResponse(value?: GenerateBrokerReportResponse): BrokerReportResponse;
  hasGenerateBrokerReportResponse(): boolean;
  clearGenerateBrokerReportResponse(): BrokerReportResponse;

  getGetBrokerReportResponse(): GetBrokerReportResponse | undefined;
  setGetBrokerReportResponse(value?: GetBrokerReportResponse): BrokerReportResponse;
  hasGetBrokerReportResponse(): boolean;
  clearGetBrokerReportResponse(): BrokerReportResponse;

  getPayloadCase(): BrokerReportResponse.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrokerReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BrokerReportResponse): BrokerReportResponse.AsObject;
  static serializeBinaryToWriter(message: BrokerReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrokerReportResponse;
  static deserializeBinaryFromReader(message: BrokerReportResponse, reader: jspb.BinaryReader): BrokerReportResponse;
}

export namespace BrokerReportResponse {
  export type AsObject = {
    generateBrokerReportResponse?: GenerateBrokerReportResponse.AsObject,
    getBrokerReportResponse?: GetBrokerReportResponse.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    GENERATE_BROKER_REPORT_RESPONSE = 1,
    GET_BROKER_REPORT_RESPONSE = 2,
  }
}

export class GenerateBrokerReportRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): GenerateBrokerReportRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GenerateBrokerReportRequest;
  hasFrom(): boolean;
  clearFrom(): GenerateBrokerReportRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GenerateBrokerReportRequest;
  hasTo(): boolean;
  clearTo(): GenerateBrokerReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateBrokerReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateBrokerReportRequest): GenerateBrokerReportRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateBrokerReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateBrokerReportRequest;
  static deserializeBinaryFromReader(message: GenerateBrokerReportRequest, reader: jspb.BinaryReader): GenerateBrokerReportRequest;
}

export namespace GenerateBrokerReportRequest {
  export type AsObject = {
    accountId: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GenerateBrokerReportResponse extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): GenerateBrokerReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateBrokerReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateBrokerReportResponse): GenerateBrokerReportResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateBrokerReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateBrokerReportResponse;
  static deserializeBinaryFromReader(message: GenerateBrokerReportResponse, reader: jspb.BinaryReader): GenerateBrokerReportResponse;
}

export namespace GenerateBrokerReportResponse {
  export type AsObject = {
    taskId: string,
  }
}

export class GetBrokerReportRequest extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): GetBrokerReportRequest;

  getPage(): number;
  setPage(value: number): GetBrokerReportRequest;
  hasPage(): boolean;
  clearPage(): GetBrokerReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrokerReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrokerReportRequest): GetBrokerReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetBrokerReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrokerReportRequest;
  static deserializeBinaryFromReader(message: GetBrokerReportRequest, reader: jspb.BinaryReader): GetBrokerReportRequest;
}

export namespace GetBrokerReportRequest {
  export type AsObject = {
    taskId: string,
    page?: number,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 2,
  }
}

export class GetBrokerReportResponse extends jspb.Message {
  getBrokerReportList(): Array<BrokerReport>;
  setBrokerReportList(value: Array<BrokerReport>): GetBrokerReportResponse;
  clearBrokerReportList(): GetBrokerReportResponse;
  addBrokerReport(value?: BrokerReport, index?: number): BrokerReport;

  getItemscount(): number;
  setItemscount(value: number): GetBrokerReportResponse;

  getPagescount(): number;
  setPagescount(value: number): GetBrokerReportResponse;

  getPage(): number;
  setPage(value: number): GetBrokerReportResponse;

  getTaskId(): string;
  setTaskId(value: string): GetBrokerReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrokerReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrokerReportResponse): GetBrokerReportResponse.AsObject;
  static serializeBinaryToWriter(message: GetBrokerReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrokerReportResponse;
  static deserializeBinaryFromReader(message: GetBrokerReportResponse, reader: jspb.BinaryReader): GetBrokerReportResponse;
}

export namespace GetBrokerReportResponse {
  export type AsObject = {
    brokerReportList: Array<BrokerReport.AsObject>,
    itemscount: number,
    pagescount: number,
    page: number,
    taskId: string,
  }
}

export class BrokerReport extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): BrokerReport;

  getOrderId(): string;
  setOrderId(value: string): BrokerReport;

  getFigi(): string;
  setFigi(value: string): BrokerReport;

  getExecuteSign(): string;
  setExecuteSign(value: string): BrokerReport;

  getTradeDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTradeDatetime(value?: google_protobuf_timestamp_pb.Timestamp): BrokerReport;
  hasTradeDatetime(): boolean;
  clearTradeDatetime(): BrokerReport;

  getExchange(): string;
  setExchange(value: string): BrokerReport;

  getClassCode(): string;
  setClassCode(value: string): BrokerReport;

  getDirection(): string;
  setDirection(value: string): BrokerReport;

  getName(): string;
  setName(value: string): BrokerReport;

  getTicker(): string;
  setTicker(value: string): BrokerReport;

  getPrice(): tinvest_common_pb.MoneyValue | undefined;
  setPrice(value?: tinvest_common_pb.MoneyValue): BrokerReport;
  hasPrice(): boolean;
  clearPrice(): BrokerReport;

  getQuantity(): number;
  setQuantity(value: number): BrokerReport;

  getOrderAmount(): tinvest_common_pb.MoneyValue | undefined;
  setOrderAmount(value?: tinvest_common_pb.MoneyValue): BrokerReport;
  hasOrderAmount(): boolean;
  clearOrderAmount(): BrokerReport;

  getAciValue(): tinvest_common_pb.Quotation | undefined;
  setAciValue(value?: tinvest_common_pb.Quotation): BrokerReport;
  hasAciValue(): boolean;
  clearAciValue(): BrokerReport;

  getTotalOrderAmount(): tinvest_common_pb.MoneyValue | undefined;
  setTotalOrderAmount(value?: tinvest_common_pb.MoneyValue): BrokerReport;
  hasTotalOrderAmount(): boolean;
  clearTotalOrderAmount(): BrokerReport;

  getBrokerCommission(): tinvest_common_pb.MoneyValue | undefined;
  setBrokerCommission(value?: tinvest_common_pb.MoneyValue): BrokerReport;
  hasBrokerCommission(): boolean;
  clearBrokerCommission(): BrokerReport;

  getExchangeCommission(): tinvest_common_pb.MoneyValue | undefined;
  setExchangeCommission(value?: tinvest_common_pb.MoneyValue): BrokerReport;
  hasExchangeCommission(): boolean;
  clearExchangeCommission(): BrokerReport;

  getExchangeClearingCommission(): tinvest_common_pb.MoneyValue | undefined;
  setExchangeClearingCommission(value?: tinvest_common_pb.MoneyValue): BrokerReport;
  hasExchangeClearingCommission(): boolean;
  clearExchangeClearingCommission(): BrokerReport;

  getRepoRate(): tinvest_common_pb.Quotation | undefined;
  setRepoRate(value?: tinvest_common_pb.Quotation): BrokerReport;
  hasRepoRate(): boolean;
  clearRepoRate(): BrokerReport;

  getParty(): string;
  setParty(value: string): BrokerReport;

  getClearValueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClearValueDate(value?: google_protobuf_timestamp_pb.Timestamp): BrokerReport;
  hasClearValueDate(): boolean;
  clearClearValueDate(): BrokerReport;

  getSecValueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSecValueDate(value?: google_protobuf_timestamp_pb.Timestamp): BrokerReport;
  hasSecValueDate(): boolean;
  clearSecValueDate(): BrokerReport;

  getBrokerStatus(): string;
  setBrokerStatus(value: string): BrokerReport;

  getSeparateAgreementType(): string;
  setSeparateAgreementType(value: string): BrokerReport;

  getSeparateAgreementNumber(): string;
  setSeparateAgreementNumber(value: string): BrokerReport;

  getSeparateAgreementDate(): string;
  setSeparateAgreementDate(value: string): BrokerReport;

  getDeliveryType(): string;
  setDeliveryType(value: string): BrokerReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrokerReport.AsObject;
  static toObject(includeInstance: boolean, msg: BrokerReport): BrokerReport.AsObject;
  static serializeBinaryToWriter(message: BrokerReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrokerReport;
  static deserializeBinaryFromReader(message: BrokerReport, reader: jspb.BinaryReader): BrokerReport;
}

export namespace BrokerReport {
  export type AsObject = {
    tradeId: string,
    orderId: string,
    figi: string,
    executeSign: string,
    tradeDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    exchange: string,
    classCode: string,
    direction: string,
    name: string,
    ticker: string,
    price?: tinvest_common_pb.MoneyValue.AsObject,
    quantity: number,
    orderAmount?: tinvest_common_pb.MoneyValue.AsObject,
    aciValue?: tinvest_common_pb.Quotation.AsObject,
    totalOrderAmount?: tinvest_common_pb.MoneyValue.AsObject,
    brokerCommission?: tinvest_common_pb.MoneyValue.AsObject,
    exchangeCommission?: tinvest_common_pb.MoneyValue.AsObject,
    exchangeClearingCommission?: tinvest_common_pb.MoneyValue.AsObject,
    repoRate?: tinvest_common_pb.Quotation.AsObject,
    party: string,
    clearValueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    secValueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    brokerStatus: string,
    separateAgreementType: string,
    separateAgreementNumber: string,
    separateAgreementDate: string,
    deliveryType: string,
  }
}

export class GetDividendsForeignIssuerRequest extends jspb.Message {
  getGenerateDivForeignIssuerReport(): GenerateDividendsForeignIssuerReportRequest | undefined;
  setGenerateDivForeignIssuerReport(value?: GenerateDividendsForeignIssuerReportRequest): GetDividendsForeignIssuerRequest;
  hasGenerateDivForeignIssuerReport(): boolean;
  clearGenerateDivForeignIssuerReport(): GetDividendsForeignIssuerRequest;

  getGetDivForeignIssuerReport(): GetDividendsForeignIssuerReportRequest | undefined;
  setGetDivForeignIssuerReport(value?: GetDividendsForeignIssuerReportRequest): GetDividendsForeignIssuerRequest;
  hasGetDivForeignIssuerReport(): boolean;
  clearGetDivForeignIssuerReport(): GetDividendsForeignIssuerRequest;

  getPayloadCase(): GetDividendsForeignIssuerRequest.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDividendsForeignIssuerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDividendsForeignIssuerRequest): GetDividendsForeignIssuerRequest.AsObject;
  static serializeBinaryToWriter(message: GetDividendsForeignIssuerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDividendsForeignIssuerRequest;
  static deserializeBinaryFromReader(message: GetDividendsForeignIssuerRequest, reader: jspb.BinaryReader): GetDividendsForeignIssuerRequest;
}

export namespace GetDividendsForeignIssuerRequest {
  export type AsObject = {
    generateDivForeignIssuerReport?: GenerateDividendsForeignIssuerReportRequest.AsObject,
    getDivForeignIssuerReport?: GetDividendsForeignIssuerReportRequest.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    GENERATE_DIV_FOREIGN_ISSUER_REPORT = 1,
    GET_DIV_FOREIGN_ISSUER_REPORT = 2,
  }
}

export class GetDividendsForeignIssuerResponse extends jspb.Message {
  getGenerateDivForeignIssuerReportResponse(): GenerateDividendsForeignIssuerReportResponse | undefined;
  setGenerateDivForeignIssuerReportResponse(value?: GenerateDividendsForeignIssuerReportResponse): GetDividendsForeignIssuerResponse;
  hasGenerateDivForeignIssuerReportResponse(): boolean;
  clearGenerateDivForeignIssuerReportResponse(): GetDividendsForeignIssuerResponse;

  getDivForeignIssuerReport(): GetDividendsForeignIssuerReportResponse | undefined;
  setDivForeignIssuerReport(value?: GetDividendsForeignIssuerReportResponse): GetDividendsForeignIssuerResponse;
  hasDivForeignIssuerReport(): boolean;
  clearDivForeignIssuerReport(): GetDividendsForeignIssuerResponse;

  getPayloadCase(): GetDividendsForeignIssuerResponse.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDividendsForeignIssuerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDividendsForeignIssuerResponse): GetDividendsForeignIssuerResponse.AsObject;
  static serializeBinaryToWriter(message: GetDividendsForeignIssuerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDividendsForeignIssuerResponse;
  static deserializeBinaryFromReader(message: GetDividendsForeignIssuerResponse, reader: jspb.BinaryReader): GetDividendsForeignIssuerResponse;
}

export namespace GetDividendsForeignIssuerResponse {
  export type AsObject = {
    generateDivForeignIssuerReportResponse?: GenerateDividendsForeignIssuerReportResponse.AsObject,
    divForeignIssuerReport?: GetDividendsForeignIssuerReportResponse.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    GENERATE_DIV_FOREIGN_ISSUER_REPORT_RESPONSE = 1,
    DIV_FOREIGN_ISSUER_REPORT = 2,
  }
}

export class GenerateDividendsForeignIssuerReportRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): GenerateDividendsForeignIssuerReportRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GenerateDividendsForeignIssuerReportRequest;
  hasFrom(): boolean;
  clearFrom(): GenerateDividendsForeignIssuerReportRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GenerateDividendsForeignIssuerReportRequest;
  hasTo(): boolean;
  clearTo(): GenerateDividendsForeignIssuerReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDividendsForeignIssuerReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDividendsForeignIssuerReportRequest): GenerateDividendsForeignIssuerReportRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateDividendsForeignIssuerReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDividendsForeignIssuerReportRequest;
  static deserializeBinaryFromReader(message: GenerateDividendsForeignIssuerReportRequest, reader: jspb.BinaryReader): GenerateDividendsForeignIssuerReportRequest;
}

export namespace GenerateDividendsForeignIssuerReportRequest {
  export type AsObject = {
    accountId: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetDividendsForeignIssuerReportRequest extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): GetDividendsForeignIssuerReportRequest;

  getPage(): number;
  setPage(value: number): GetDividendsForeignIssuerReportRequest;
  hasPage(): boolean;
  clearPage(): GetDividendsForeignIssuerReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDividendsForeignIssuerReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDividendsForeignIssuerReportRequest): GetDividendsForeignIssuerReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetDividendsForeignIssuerReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDividendsForeignIssuerReportRequest;
  static deserializeBinaryFromReader(message: GetDividendsForeignIssuerReportRequest, reader: jspb.BinaryReader): GetDividendsForeignIssuerReportRequest;
}

export namespace GetDividendsForeignIssuerReportRequest {
  export type AsObject = {
    taskId: string,
    page?: number,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 2,
  }
}

export class GenerateDividendsForeignIssuerReportResponse extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): GenerateDividendsForeignIssuerReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDividendsForeignIssuerReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDividendsForeignIssuerReportResponse): GenerateDividendsForeignIssuerReportResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateDividendsForeignIssuerReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDividendsForeignIssuerReportResponse;
  static deserializeBinaryFromReader(message: GenerateDividendsForeignIssuerReportResponse, reader: jspb.BinaryReader): GenerateDividendsForeignIssuerReportResponse;
}

export namespace GenerateDividendsForeignIssuerReportResponse {
  export type AsObject = {
    taskId: string,
  }
}

export class GetDividendsForeignIssuerReportResponse extends jspb.Message {
  getDividendsForeignIssuerReportList(): Array<DividendsForeignIssuerReport>;
  setDividendsForeignIssuerReportList(value: Array<DividendsForeignIssuerReport>): GetDividendsForeignIssuerReportResponse;
  clearDividendsForeignIssuerReportList(): GetDividendsForeignIssuerReportResponse;
  addDividendsForeignIssuerReport(value?: DividendsForeignIssuerReport, index?: number): DividendsForeignIssuerReport;

  getItemscount(): number;
  setItemscount(value: number): GetDividendsForeignIssuerReportResponse;

  getPagescount(): number;
  setPagescount(value: number): GetDividendsForeignIssuerReportResponse;

  getPage(): number;
  setPage(value: number): GetDividendsForeignIssuerReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDividendsForeignIssuerReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDividendsForeignIssuerReportResponse): GetDividendsForeignIssuerReportResponse.AsObject;
  static serializeBinaryToWriter(message: GetDividendsForeignIssuerReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDividendsForeignIssuerReportResponse;
  static deserializeBinaryFromReader(message: GetDividendsForeignIssuerReportResponse, reader: jspb.BinaryReader): GetDividendsForeignIssuerReportResponse;
}

export namespace GetDividendsForeignIssuerReportResponse {
  export type AsObject = {
    dividendsForeignIssuerReportList: Array<DividendsForeignIssuerReport.AsObject>,
    itemscount: number,
    pagescount: number,
    page: number,
  }
}

export class DividendsForeignIssuerReport extends jspb.Message {
  getRecordDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecordDate(value?: google_protobuf_timestamp_pb.Timestamp): DividendsForeignIssuerReport;
  hasRecordDate(): boolean;
  clearRecordDate(): DividendsForeignIssuerReport;

  getPaymentDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPaymentDate(value?: google_protobuf_timestamp_pb.Timestamp): DividendsForeignIssuerReport;
  hasPaymentDate(): boolean;
  clearPaymentDate(): DividendsForeignIssuerReport;

  getSecurityName(): string;
  setSecurityName(value: string): DividendsForeignIssuerReport;

  getIsin(): string;
  setIsin(value: string): DividendsForeignIssuerReport;

  getIssuerCountry(): string;
  setIssuerCountry(value: string): DividendsForeignIssuerReport;

  getQuantity(): number;
  setQuantity(value: number): DividendsForeignIssuerReport;

  getDividend(): tinvest_common_pb.Quotation | undefined;
  setDividend(value?: tinvest_common_pb.Quotation): DividendsForeignIssuerReport;
  hasDividend(): boolean;
  clearDividend(): DividendsForeignIssuerReport;

  getExternalCommission(): tinvest_common_pb.Quotation | undefined;
  setExternalCommission(value?: tinvest_common_pb.Quotation): DividendsForeignIssuerReport;
  hasExternalCommission(): boolean;
  clearExternalCommission(): DividendsForeignIssuerReport;

  getDividendGross(): tinvest_common_pb.Quotation | undefined;
  setDividendGross(value?: tinvest_common_pb.Quotation): DividendsForeignIssuerReport;
  hasDividendGross(): boolean;
  clearDividendGross(): DividendsForeignIssuerReport;

  getTax(): tinvest_common_pb.Quotation | undefined;
  setTax(value?: tinvest_common_pb.Quotation): DividendsForeignIssuerReport;
  hasTax(): boolean;
  clearTax(): DividendsForeignIssuerReport;

  getDividendAmount(): tinvest_common_pb.Quotation | undefined;
  setDividendAmount(value?: tinvest_common_pb.Quotation): DividendsForeignIssuerReport;
  hasDividendAmount(): boolean;
  clearDividendAmount(): DividendsForeignIssuerReport;

  getCurrency(): string;
  setCurrency(value: string): DividendsForeignIssuerReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DividendsForeignIssuerReport.AsObject;
  static toObject(includeInstance: boolean, msg: DividendsForeignIssuerReport): DividendsForeignIssuerReport.AsObject;
  static serializeBinaryToWriter(message: DividendsForeignIssuerReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DividendsForeignIssuerReport;
  static deserializeBinaryFromReader(message: DividendsForeignIssuerReport, reader: jspb.BinaryReader): DividendsForeignIssuerReport;
}

export namespace DividendsForeignIssuerReport {
  export type AsObject = {
    recordDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    paymentDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    securityName: string,
    isin: string,
    issuerCountry: string,
    quantity: number,
    dividend?: tinvest_common_pb.Quotation.AsObject,
    externalCommission?: tinvest_common_pb.Quotation.AsObject,
    dividendGross?: tinvest_common_pb.Quotation.AsObject,
    tax?: tinvest_common_pb.Quotation.AsObject,
    dividendAmount?: tinvest_common_pb.Quotation.AsObject,
    currency: string,
  }
}

export class PortfolioStreamRequest extends jspb.Message {
  getAccountsList(): Array<string>;
  setAccountsList(value: Array<string>): PortfolioStreamRequest;
  clearAccountsList(): PortfolioStreamRequest;
  addAccounts(value: string, index?: number): PortfolioStreamRequest;

  getPingSettings(): tinvest_common_pb.PingDelaySettings | undefined;
  setPingSettings(value?: tinvest_common_pb.PingDelaySettings): PortfolioStreamRequest;
  hasPingSettings(): boolean;
  clearPingSettings(): PortfolioStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortfolioStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PortfolioStreamRequest): PortfolioStreamRequest.AsObject;
  static serializeBinaryToWriter(message: PortfolioStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortfolioStreamRequest;
  static deserializeBinaryFromReader(message: PortfolioStreamRequest, reader: jspb.BinaryReader): PortfolioStreamRequest;
}

export namespace PortfolioStreamRequest {
  export type AsObject = {
    accountsList: Array<string>,
    pingSettings?: tinvest_common_pb.PingDelaySettings.AsObject,
  }
}

export class PortfolioStreamResponse extends jspb.Message {
  getSubscriptions(): PortfolioSubscriptionResult | undefined;
  setSubscriptions(value?: PortfolioSubscriptionResult): PortfolioStreamResponse;
  hasSubscriptions(): boolean;
  clearSubscriptions(): PortfolioStreamResponse;

  getPortfolio(): PortfolioResponse | undefined;
  setPortfolio(value?: PortfolioResponse): PortfolioStreamResponse;
  hasPortfolio(): boolean;
  clearPortfolio(): PortfolioStreamResponse;

  getPing(): tinvest_common_pb.Ping | undefined;
  setPing(value?: tinvest_common_pb.Ping): PortfolioStreamResponse;
  hasPing(): boolean;
  clearPing(): PortfolioStreamResponse;

  getPayloadCase(): PortfolioStreamResponse.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortfolioStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PortfolioStreamResponse): PortfolioStreamResponse.AsObject;
  static serializeBinaryToWriter(message: PortfolioStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortfolioStreamResponse;
  static deserializeBinaryFromReader(message: PortfolioStreamResponse, reader: jspb.BinaryReader): PortfolioStreamResponse;
}

export namespace PortfolioStreamResponse {
  export type AsObject = {
    subscriptions?: PortfolioSubscriptionResult.AsObject,
    portfolio?: PortfolioResponse.AsObject,
    ping?: tinvest_common_pb.Ping.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    SUBSCRIPTIONS = 1,
    PORTFOLIO = 2,
    PING = 3,
  }
}

export class PortfolioSubscriptionResult extends jspb.Message {
  getAccountsList(): Array<AccountSubscriptionStatus>;
  setAccountsList(value: Array<AccountSubscriptionStatus>): PortfolioSubscriptionResult;
  clearAccountsList(): PortfolioSubscriptionResult;
  addAccounts(value?: AccountSubscriptionStatus, index?: number): AccountSubscriptionStatus;

  getTrackingId(): string;
  setTrackingId(value: string): PortfolioSubscriptionResult;

  getStreamId(): string;
  setStreamId(value: string): PortfolioSubscriptionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortfolioSubscriptionResult.AsObject;
  static toObject(includeInstance: boolean, msg: PortfolioSubscriptionResult): PortfolioSubscriptionResult.AsObject;
  static serializeBinaryToWriter(message: PortfolioSubscriptionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortfolioSubscriptionResult;
  static deserializeBinaryFromReader(message: PortfolioSubscriptionResult, reader: jspb.BinaryReader): PortfolioSubscriptionResult;
}

export namespace PortfolioSubscriptionResult {
  export type AsObject = {
    accountsList: Array<AccountSubscriptionStatus.AsObject>,
    trackingId: string,
    streamId: string,
  }
}

export class AccountSubscriptionStatus extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): AccountSubscriptionStatus;

  getSubscriptionStatus(): PortfolioSubscriptionStatus;
  setSubscriptionStatus(value: PortfolioSubscriptionStatus): AccountSubscriptionStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountSubscriptionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AccountSubscriptionStatus): AccountSubscriptionStatus.AsObject;
  static serializeBinaryToWriter(message: AccountSubscriptionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountSubscriptionStatus;
  static deserializeBinaryFromReader(message: AccountSubscriptionStatus, reader: jspb.BinaryReader): AccountSubscriptionStatus;
}

export namespace AccountSubscriptionStatus {
  export type AsObject = {
    accountId: string,
    subscriptionStatus: PortfolioSubscriptionStatus,
  }
}

export class GetOperationsByCursorRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): GetOperationsByCursorRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): GetOperationsByCursorRequest;
  hasInstrumentId(): boolean;
  clearInstrumentId(): GetOperationsByCursorRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetOperationsByCursorRequest;
  hasFrom(): boolean;
  clearFrom(): GetOperationsByCursorRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetOperationsByCursorRequest;
  hasTo(): boolean;
  clearTo(): GetOperationsByCursorRequest;

  getCursor(): string;
  setCursor(value: string): GetOperationsByCursorRequest;
  hasCursor(): boolean;
  clearCursor(): GetOperationsByCursorRequest;

  getLimit(): number;
  setLimit(value: number): GetOperationsByCursorRequest;
  hasLimit(): boolean;
  clearLimit(): GetOperationsByCursorRequest;

  getOperationTypesList(): Array<OperationType>;
  setOperationTypesList(value: Array<OperationType>): GetOperationsByCursorRequest;
  clearOperationTypesList(): GetOperationsByCursorRequest;
  addOperationTypes(value: OperationType, index?: number): GetOperationsByCursorRequest;

  getState(): OperationState;
  setState(value: OperationState): GetOperationsByCursorRequest;
  hasState(): boolean;
  clearState(): GetOperationsByCursorRequest;

  getWithoutCommissions(): boolean;
  setWithoutCommissions(value: boolean): GetOperationsByCursorRequest;
  hasWithoutCommissions(): boolean;
  clearWithoutCommissions(): GetOperationsByCursorRequest;

  getWithoutTrades(): boolean;
  setWithoutTrades(value: boolean): GetOperationsByCursorRequest;
  hasWithoutTrades(): boolean;
  clearWithoutTrades(): GetOperationsByCursorRequest;

  getWithoutOvernights(): boolean;
  setWithoutOvernights(value: boolean): GetOperationsByCursorRequest;
  hasWithoutOvernights(): boolean;
  clearWithoutOvernights(): GetOperationsByCursorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOperationsByCursorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOperationsByCursorRequest): GetOperationsByCursorRequest.AsObject;
  static serializeBinaryToWriter(message: GetOperationsByCursorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOperationsByCursorRequest;
  static deserializeBinaryFromReader(message: GetOperationsByCursorRequest, reader: jspb.BinaryReader): GetOperationsByCursorRequest;
}

export namespace GetOperationsByCursorRequest {
  export type AsObject = {
    accountId: string,
    instrumentId?: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cursor?: string,
    limit?: number,
    operationTypesList: Array<OperationType>,
    state?: OperationState,
    withoutCommissions?: boolean,
    withoutTrades?: boolean,
    withoutOvernights?: boolean,
  }

  export enum InstrumentIdCase { 
    _INSTRUMENT_ID_NOT_SET = 0,
    INSTRUMENT_ID = 2,
  }

  export enum FromCase { 
    _FROM_NOT_SET = 0,
    FROM = 6,
  }

  export enum ToCase { 
    _TO_NOT_SET = 0,
    TO = 7,
  }

  export enum CursorCase { 
    _CURSOR_NOT_SET = 0,
    CURSOR = 11,
  }

  export enum LimitCase { 
    _LIMIT_NOT_SET = 0,
    LIMIT = 12,
  }

  export enum StateCase { 
    _STATE_NOT_SET = 0,
    STATE = 14,
  }

  export enum WithoutCommissionsCase { 
    _WITHOUT_COMMISSIONS_NOT_SET = 0,
    WITHOUT_COMMISSIONS = 15,
  }

  export enum WithoutTradesCase { 
    _WITHOUT_TRADES_NOT_SET = 0,
    WITHOUT_TRADES = 16,
  }

  export enum WithoutOvernightsCase { 
    _WITHOUT_OVERNIGHTS_NOT_SET = 0,
    WITHOUT_OVERNIGHTS = 17,
  }
}

export class GetOperationsByCursorResponse extends jspb.Message {
  getHasNext(): boolean;
  setHasNext(value: boolean): GetOperationsByCursorResponse;

  getNextCursor(): string;
  setNextCursor(value: string): GetOperationsByCursorResponse;

  getItemsList(): Array<OperationItem>;
  setItemsList(value: Array<OperationItem>): GetOperationsByCursorResponse;
  clearItemsList(): GetOperationsByCursorResponse;
  addItems(value?: OperationItem, index?: number): OperationItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOperationsByCursorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOperationsByCursorResponse): GetOperationsByCursorResponse.AsObject;
  static serializeBinaryToWriter(message: GetOperationsByCursorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOperationsByCursorResponse;
  static deserializeBinaryFromReader(message: GetOperationsByCursorResponse, reader: jspb.BinaryReader): GetOperationsByCursorResponse;
}

export namespace GetOperationsByCursorResponse {
  export type AsObject = {
    hasNext: boolean,
    nextCursor: string,
    itemsList: Array<OperationItem.AsObject>,
  }
}

export class OperationItem extends jspb.Message {
  getCursor(): string;
  setCursor(value: string): OperationItem;

  getBrokerAccountId(): string;
  setBrokerAccountId(value: string): OperationItem;

  getId(): string;
  setId(value: string): OperationItem;

  getParentOperationId(): string;
  setParentOperationId(value: string): OperationItem;

  getName(): string;
  setName(value: string): OperationItem;

  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): OperationItem;
  hasDate(): boolean;
  clearDate(): OperationItem;

  getType(): OperationType;
  setType(value: OperationType): OperationItem;

  getDescription(): string;
  setDescription(value: string): OperationItem;

  getState(): OperationState;
  setState(value: OperationState): OperationItem;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): OperationItem;

  getFigi(): string;
  setFigi(value: string): OperationItem;

  getInstrumentType(): string;
  setInstrumentType(value: string): OperationItem;

  getInstrumentKind(): tinvest_common_pb.InstrumentType;
  setInstrumentKind(value: tinvest_common_pb.InstrumentType): OperationItem;

  getPositionUid(): string;
  setPositionUid(value: string): OperationItem;

  getTicker(): string;
  setTicker(value: string): OperationItem;

  getClassCode(): string;
  setClassCode(value: string): OperationItem;

  getPayment(): tinvest_common_pb.MoneyValue | undefined;
  setPayment(value?: tinvest_common_pb.MoneyValue): OperationItem;
  hasPayment(): boolean;
  clearPayment(): OperationItem;

  getPrice(): tinvest_common_pb.MoneyValue | undefined;
  setPrice(value?: tinvest_common_pb.MoneyValue): OperationItem;
  hasPrice(): boolean;
  clearPrice(): OperationItem;

  getCommission(): tinvest_common_pb.MoneyValue | undefined;
  setCommission(value?: tinvest_common_pb.MoneyValue): OperationItem;
  hasCommission(): boolean;
  clearCommission(): OperationItem;

  getYield(): tinvest_common_pb.MoneyValue | undefined;
  setYield(value?: tinvest_common_pb.MoneyValue): OperationItem;
  hasYield(): boolean;
  clearYield(): OperationItem;

  getYieldRelative(): tinvest_common_pb.Quotation | undefined;
  setYieldRelative(value?: tinvest_common_pb.Quotation): OperationItem;
  hasYieldRelative(): boolean;
  clearYieldRelative(): OperationItem;

  getAccruedInt(): tinvest_common_pb.MoneyValue | undefined;
  setAccruedInt(value?: tinvest_common_pb.MoneyValue): OperationItem;
  hasAccruedInt(): boolean;
  clearAccruedInt(): OperationItem;

  getQuantity(): number;
  setQuantity(value: number): OperationItem;

  getQuantityRest(): number;
  setQuantityRest(value: number): OperationItem;

  getQuantityDone(): number;
  setQuantityDone(value: number): OperationItem;

  getCancelDateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCancelDateTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationItem;
  hasCancelDateTime(): boolean;
  clearCancelDateTime(): OperationItem;

  getCancelReason(): string;
  setCancelReason(value: string): OperationItem;

  getTradesInfo(): OperationItemTrades | undefined;
  setTradesInfo(value?: OperationItemTrades): OperationItem;
  hasTradesInfo(): boolean;
  clearTradesInfo(): OperationItem;

  getAssetUid(): string;
  setAssetUid(value: string): OperationItem;

  getChildOperationsList(): Array<ChildOperationItem>;
  setChildOperationsList(value: Array<ChildOperationItem>): OperationItem;
  clearChildOperationsList(): OperationItem;
  addChildOperations(value?: ChildOperationItem, index?: number): ChildOperationItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationItem.AsObject;
  static toObject(includeInstance: boolean, msg: OperationItem): OperationItem.AsObject;
  static serializeBinaryToWriter(message: OperationItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationItem;
  static deserializeBinaryFromReader(message: OperationItem, reader: jspb.BinaryReader): OperationItem;
}

export namespace OperationItem {
  export type AsObject = {
    cursor: string,
    brokerAccountId: string,
    id: string,
    parentOperationId: string,
    name: string,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: OperationType,
    description: string,
    state: OperationState,
    instrumentUid: string,
    figi: string,
    instrumentType: string,
    instrumentKind: tinvest_common_pb.InstrumentType,
    positionUid: string,
    ticker: string,
    classCode: string,
    payment?: tinvest_common_pb.MoneyValue.AsObject,
    price?: tinvest_common_pb.MoneyValue.AsObject,
    commission?: tinvest_common_pb.MoneyValue.AsObject,
    yield?: tinvest_common_pb.MoneyValue.AsObject,
    yieldRelative?: tinvest_common_pb.Quotation.AsObject,
    accruedInt?: tinvest_common_pb.MoneyValue.AsObject,
    quantity: number,
    quantityRest: number,
    quantityDone: number,
    cancelDateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelReason: string,
    tradesInfo?: OperationItemTrades.AsObject,
    assetUid: string,
    childOperationsList: Array<ChildOperationItem.AsObject>,
  }
}

export class OperationItemTrades extends jspb.Message {
  getTradesList(): Array<OperationItemTrade>;
  setTradesList(value: Array<OperationItemTrade>): OperationItemTrades;
  clearTradesList(): OperationItemTrades;
  addTrades(value?: OperationItemTrade, index?: number): OperationItemTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationItemTrades.AsObject;
  static toObject(includeInstance: boolean, msg: OperationItemTrades): OperationItemTrades.AsObject;
  static serializeBinaryToWriter(message: OperationItemTrades, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationItemTrades;
  static deserializeBinaryFromReader(message: OperationItemTrades, reader: jspb.BinaryReader): OperationItemTrades;
}

export namespace OperationItemTrades {
  export type AsObject = {
    tradesList: Array<OperationItemTrade.AsObject>,
  }
}

export class OperationItemTrade extends jspb.Message {
  getNum(): string;
  setNum(value: string): OperationItemTrade;

  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): OperationItemTrade;
  hasDate(): boolean;
  clearDate(): OperationItemTrade;

  getQuantity(): number;
  setQuantity(value: number): OperationItemTrade;

  getPrice(): tinvest_common_pb.MoneyValue | undefined;
  setPrice(value?: tinvest_common_pb.MoneyValue): OperationItemTrade;
  hasPrice(): boolean;
  clearPrice(): OperationItemTrade;

  getYield(): tinvest_common_pb.MoneyValue | undefined;
  setYield(value?: tinvest_common_pb.MoneyValue): OperationItemTrade;
  hasYield(): boolean;
  clearYield(): OperationItemTrade;

  getYieldRelative(): tinvest_common_pb.Quotation | undefined;
  setYieldRelative(value?: tinvest_common_pb.Quotation): OperationItemTrade;
  hasYieldRelative(): boolean;
  clearYieldRelative(): OperationItemTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationItemTrade.AsObject;
  static toObject(includeInstance: boolean, msg: OperationItemTrade): OperationItemTrade.AsObject;
  static serializeBinaryToWriter(message: OperationItemTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationItemTrade;
  static deserializeBinaryFromReader(message: OperationItemTrade, reader: jspb.BinaryReader): OperationItemTrade;
}

export namespace OperationItemTrade {
  export type AsObject = {
    num: string,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    quantity: number,
    price?: tinvest_common_pb.MoneyValue.AsObject,
    yield?: tinvest_common_pb.MoneyValue.AsObject,
    yieldRelative?: tinvest_common_pb.Quotation.AsObject,
  }
}

export class PositionsStreamRequest extends jspb.Message {
  getAccountsList(): Array<string>;
  setAccountsList(value: Array<string>): PositionsStreamRequest;
  clearAccountsList(): PositionsStreamRequest;
  addAccounts(value: string, index?: number): PositionsStreamRequest;

  getWithInitialPositions(): boolean;
  setWithInitialPositions(value: boolean): PositionsStreamRequest;

  getPingSettings(): tinvest_common_pb.PingDelaySettings | undefined;
  setPingSettings(value?: tinvest_common_pb.PingDelaySettings): PositionsStreamRequest;
  hasPingSettings(): boolean;
  clearPingSettings(): PositionsStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsStreamRequest): PositionsStreamRequest.AsObject;
  static serializeBinaryToWriter(message: PositionsStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsStreamRequest;
  static deserializeBinaryFromReader(message: PositionsStreamRequest, reader: jspb.BinaryReader): PositionsStreamRequest;
}

export namespace PositionsStreamRequest {
  export type AsObject = {
    accountsList: Array<string>,
    withInitialPositions: boolean,
    pingSettings?: tinvest_common_pb.PingDelaySettings.AsObject,
  }
}

export class PositionsStreamResponse extends jspb.Message {
  getSubscriptions(): PositionsSubscriptionResult | undefined;
  setSubscriptions(value?: PositionsSubscriptionResult): PositionsStreamResponse;
  hasSubscriptions(): boolean;
  clearSubscriptions(): PositionsStreamResponse;

  getPosition(): PositionData | undefined;
  setPosition(value?: PositionData): PositionsStreamResponse;
  hasPosition(): boolean;
  clearPosition(): PositionsStreamResponse;

  getPing(): tinvest_common_pb.Ping | undefined;
  setPing(value?: tinvest_common_pb.Ping): PositionsStreamResponse;
  hasPing(): boolean;
  clearPing(): PositionsStreamResponse;

  getInitialPositions(): PositionsResponse | undefined;
  setInitialPositions(value?: PositionsResponse): PositionsStreamResponse;
  hasInitialPositions(): boolean;
  clearInitialPositions(): PositionsStreamResponse;

  getPayloadCase(): PositionsStreamResponse.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsStreamResponse): PositionsStreamResponse.AsObject;
  static serializeBinaryToWriter(message: PositionsStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsStreamResponse;
  static deserializeBinaryFromReader(message: PositionsStreamResponse, reader: jspb.BinaryReader): PositionsStreamResponse;
}

export namespace PositionsStreamResponse {
  export type AsObject = {
    subscriptions?: PositionsSubscriptionResult.AsObject,
    position?: PositionData.AsObject,
    ping?: tinvest_common_pb.Ping.AsObject,
    initialPositions?: PositionsResponse.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    SUBSCRIPTIONS = 1,
    POSITION = 2,
    PING = 3,
    INITIAL_POSITIONS = 5,
  }
}

export class PositionsSubscriptionResult extends jspb.Message {
  getAccountsList(): Array<PositionsSubscriptionStatus>;
  setAccountsList(value: Array<PositionsSubscriptionStatus>): PositionsSubscriptionResult;
  clearAccountsList(): PositionsSubscriptionResult;
  addAccounts(value?: PositionsSubscriptionStatus, index?: number): PositionsSubscriptionStatus;

  getTrackingId(): string;
  setTrackingId(value: string): PositionsSubscriptionResult;

  getStreamId(): string;
  setStreamId(value: string): PositionsSubscriptionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsSubscriptionResult.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsSubscriptionResult): PositionsSubscriptionResult.AsObject;
  static serializeBinaryToWriter(message: PositionsSubscriptionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsSubscriptionResult;
  static deserializeBinaryFromReader(message: PositionsSubscriptionResult, reader: jspb.BinaryReader): PositionsSubscriptionResult;
}

export namespace PositionsSubscriptionResult {
  export type AsObject = {
    accountsList: Array<PositionsSubscriptionStatus.AsObject>,
    trackingId: string,
    streamId: string,
  }
}

export class PositionsSubscriptionStatus extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): PositionsSubscriptionStatus;

  getSubscriptionStatus(): PositionsAccountSubscriptionStatus;
  setSubscriptionStatus(value: PositionsAccountSubscriptionStatus): PositionsSubscriptionStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsSubscriptionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsSubscriptionStatus): PositionsSubscriptionStatus.AsObject;
  static serializeBinaryToWriter(message: PositionsSubscriptionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsSubscriptionStatus;
  static deserializeBinaryFromReader(message: PositionsSubscriptionStatus, reader: jspb.BinaryReader): PositionsSubscriptionStatus;
}

export namespace PositionsSubscriptionStatus {
  export type AsObject = {
    accountId: string,
    subscriptionStatus: PositionsAccountSubscriptionStatus,
  }
}

export class PositionData extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): PositionData;

  getMoneyList(): Array<PositionsMoney>;
  setMoneyList(value: Array<PositionsMoney>): PositionData;
  clearMoneyList(): PositionData;
  addMoney(value?: PositionsMoney, index?: number): PositionsMoney;

  getSecuritiesList(): Array<PositionsSecurities>;
  setSecuritiesList(value: Array<PositionsSecurities>): PositionData;
  clearSecuritiesList(): PositionData;
  addSecurities(value?: PositionsSecurities, index?: number): PositionsSecurities;

  getFuturesList(): Array<PositionsFutures>;
  setFuturesList(value: Array<PositionsFutures>): PositionData;
  clearFuturesList(): PositionData;
  addFutures(value?: PositionsFutures, index?: number): PositionsFutures;

  getOptionsList(): Array<PositionsOptions>;
  setOptionsList(value: Array<PositionsOptions>): PositionData;
  clearOptionsList(): PositionData;
  addOptions(value?: PositionsOptions, index?: number): PositionsOptions;

  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): PositionData;
  hasDate(): boolean;
  clearDate(): PositionData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionData.AsObject;
  static toObject(includeInstance: boolean, msg: PositionData): PositionData.AsObject;
  static serializeBinaryToWriter(message: PositionData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionData;
  static deserializeBinaryFromReader(message: PositionData, reader: jspb.BinaryReader): PositionData;
}

export namespace PositionData {
  export type AsObject = {
    accountId: string,
    moneyList: Array<PositionsMoney.AsObject>,
    securitiesList: Array<PositionsSecurities.AsObject>,
    futuresList: Array<PositionsFutures.AsObject>,
    optionsList: Array<PositionsOptions.AsObject>,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PositionsMoney extends jspb.Message {
  getAvailableValue(): tinvest_common_pb.MoneyValue | undefined;
  setAvailableValue(value?: tinvest_common_pb.MoneyValue): PositionsMoney;
  hasAvailableValue(): boolean;
  clearAvailableValue(): PositionsMoney;

  getBlockedValue(): tinvest_common_pb.MoneyValue | undefined;
  setBlockedValue(value?: tinvest_common_pb.MoneyValue): PositionsMoney;
  hasBlockedValue(): boolean;
  clearBlockedValue(): PositionsMoney;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsMoney.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsMoney): PositionsMoney.AsObject;
  static serializeBinaryToWriter(message: PositionsMoney, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsMoney;
  static deserializeBinaryFromReader(message: PositionsMoney, reader: jspb.BinaryReader): PositionsMoney;
}

export namespace PositionsMoney {
  export type AsObject = {
    availableValue?: tinvest_common_pb.MoneyValue.AsObject,
    blockedValue?: tinvest_common_pb.MoneyValue.AsObject,
  }
}

export class ChildOperationItem extends jspb.Message {
  getInstrumentUid(): string;
  setInstrumentUid(value: string): ChildOperationItem;

  getPayment(): tinvest_common_pb.MoneyValue | undefined;
  setPayment(value?: tinvest_common_pb.MoneyValue): ChildOperationItem;
  hasPayment(): boolean;
  clearPayment(): ChildOperationItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChildOperationItem.AsObject;
  static toObject(includeInstance: boolean, msg: ChildOperationItem): ChildOperationItem.AsObject;
  static serializeBinaryToWriter(message: ChildOperationItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChildOperationItem;
  static deserializeBinaryFromReader(message: ChildOperationItem, reader: jspb.BinaryReader): ChildOperationItem;
}

export namespace ChildOperationItem {
  export type AsObject = {
    instrumentUid: string,
    payment?: tinvest_common_pb.MoneyValue.AsObject,
  }
}

export class OperationsStreamRequest extends jspb.Message {
  getAccountsList(): Array<string>;
  setAccountsList(value: Array<string>): OperationsStreamRequest;
  clearAccountsList(): OperationsStreamRequest;
  addAccounts(value: string, index?: number): OperationsStreamRequest;

  getPingSettings(): tinvest_common_pb.PingDelaySettings | undefined;
  setPingSettings(value?: tinvest_common_pb.PingDelaySettings): OperationsStreamRequest;
  hasPingSettings(): boolean;
  clearPingSettings(): OperationsStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationsStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OperationsStreamRequest): OperationsStreamRequest.AsObject;
  static serializeBinaryToWriter(message: OperationsStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationsStreamRequest;
  static deserializeBinaryFromReader(message: OperationsStreamRequest, reader: jspb.BinaryReader): OperationsStreamRequest;
}

export namespace OperationsStreamRequest {
  export type AsObject = {
    accountsList: Array<string>,
    pingSettings?: tinvest_common_pb.PingDelaySettings.AsObject,
  }
}

export class OperationsStreamResponse extends jspb.Message {
  getSubscriptions(): OperationsSubscriptionResult | undefined;
  setSubscriptions(value?: OperationsSubscriptionResult): OperationsStreamResponse;
  hasSubscriptions(): boolean;
  clearSubscriptions(): OperationsStreamResponse;

  getOperation(): OperationData | undefined;
  setOperation(value?: OperationData): OperationsStreamResponse;
  hasOperation(): boolean;
  clearOperation(): OperationsStreamResponse;

  getPing(): tinvest_common_pb.Ping | undefined;
  setPing(value?: tinvest_common_pb.Ping): OperationsStreamResponse;
  hasPing(): boolean;
  clearPing(): OperationsStreamResponse;

  getPayloadCase(): OperationsStreamResponse.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationsStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OperationsStreamResponse): OperationsStreamResponse.AsObject;
  static serializeBinaryToWriter(message: OperationsStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationsStreamResponse;
  static deserializeBinaryFromReader(message: OperationsStreamResponse, reader: jspb.BinaryReader): OperationsStreamResponse;
}

export namespace OperationsStreamResponse {
  export type AsObject = {
    subscriptions?: OperationsSubscriptionResult.AsObject,
    operation?: OperationData.AsObject,
    ping?: tinvest_common_pb.Ping.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    SUBSCRIPTIONS = 1,
    OPERATION = 2,
    PING = 3,
  }
}

export class OperationsSubscriptionResult extends jspb.Message {
  getAccountsList(): Array<string>;
  setAccountsList(value: Array<string>): OperationsSubscriptionResult;
  clearAccountsList(): OperationsSubscriptionResult;
  addAccounts(value: string, index?: number): OperationsSubscriptionResult;

  getSubscriptionStatus(): OperationsAccountSubscriptionStatus;
  setSubscriptionStatus(value: OperationsAccountSubscriptionStatus): OperationsSubscriptionResult;

  getTrackingId(): string;
  setTrackingId(value: string): OperationsSubscriptionResult;

  getStreamId(): string;
  setStreamId(value: string): OperationsSubscriptionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationsSubscriptionResult.AsObject;
  static toObject(includeInstance: boolean, msg: OperationsSubscriptionResult): OperationsSubscriptionResult.AsObject;
  static serializeBinaryToWriter(message: OperationsSubscriptionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationsSubscriptionResult;
  static deserializeBinaryFromReader(message: OperationsSubscriptionResult, reader: jspb.BinaryReader): OperationsSubscriptionResult;
}

export namespace OperationsSubscriptionResult {
  export type AsObject = {
    accountsList: Array<string>,
    subscriptionStatus: OperationsAccountSubscriptionStatus,
    trackingId: string,
    streamId: string,
  }
}

export class OperationData extends jspb.Message {
  getBrokerAccountId(): string;
  setBrokerAccountId(value: string): OperationData;

  getId(): string;
  setId(value: string): OperationData;

  getParentOperationId(): string;
  setParentOperationId(value: string): OperationData;

  getName(): string;
  setName(value: string): OperationData;

  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): OperationData;
  hasDate(): boolean;
  clearDate(): OperationData;

  getType(): OperationType;
  setType(value: OperationType): OperationData;

  getState(): OperationState;
  setState(value: OperationState): OperationData;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): OperationData;

  getFigi(): string;
  setFigi(value: string): OperationData;

  getInstrumentType(): string;
  setInstrumentType(value: string): OperationData;

  getInstrumentKind(): tinvest_common_pb.InstrumentType;
  setInstrumentKind(value: tinvest_common_pb.InstrumentType): OperationData;

  getPositionUid(): string;
  setPositionUid(value: string): OperationData;

  getTicker(): string;
  setTicker(value: string): OperationData;

  getClassCode(): string;
  setClassCode(value: string): OperationData;

  getPayment(): tinvest_common_pb.MoneyValue | undefined;
  setPayment(value?: tinvest_common_pb.MoneyValue): OperationData;
  hasPayment(): boolean;
  clearPayment(): OperationData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationData.AsObject;
  static toObject(includeInstance: boolean, msg: OperationData): OperationData.AsObject;
  static serializeBinaryToWriter(message: OperationData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationData;
  static deserializeBinaryFromReader(message: OperationData, reader: jspb.BinaryReader): OperationData;
}

export namespace OperationData {
  export type AsObject = {
    brokerAccountId: string,
    id: string,
    parentOperationId: string,
    name: string,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: OperationType,
    state: OperationState,
    instrumentUid: string,
    figi: string,
    instrumentType: string,
    instrumentKind: tinvest_common_pb.InstrumentType,
    positionUid: string,
    ticker: string,
    classCode: string,
    payment?: tinvest_common_pb.MoneyValue.AsObject,
  }
}

export enum OperationState { 
  OPERATION_STATE_UNSPECIFIED = 0,
  OPERATION_STATE_EXECUTED = 1,
  OPERATION_STATE_CANCELED = 2,
  OPERATION_STATE_PROGRESS = 3,
}
export enum OperationType { 
  OPERATION_TYPE_UNSPECIFIED = 0,
  OPERATION_TYPE_INPUT = 1,
  OPERATION_TYPE_BOND_TAX = 2,
  OPERATION_TYPE_OUTPUT_SECURITIES = 3,
  OPERATION_TYPE_OVERNIGHT = 4,
  OPERATION_TYPE_TAX = 5,
  OPERATION_TYPE_BOND_REPAYMENT_FULL = 6,
  OPERATION_TYPE_SELL_CARD = 7,
  OPERATION_TYPE_DIVIDEND_TAX = 8,
  OPERATION_TYPE_OUTPUT = 9,
  OPERATION_TYPE_BOND_REPAYMENT = 10,
  OPERATION_TYPE_TAX_CORRECTION = 11,
  OPERATION_TYPE_SERVICE_FEE = 12,
  OPERATION_TYPE_BENEFIT_TAX = 13,
  OPERATION_TYPE_MARGIN_FEE = 14,
  OPERATION_TYPE_BUY = 15,
  OPERATION_TYPE_BUY_CARD = 16,
  OPERATION_TYPE_INPUT_SECURITIES = 17,
  OPERATION_TYPE_SELL_MARGIN = 18,
  OPERATION_TYPE_BROKER_FEE = 19,
  OPERATION_TYPE_BUY_MARGIN = 20,
  OPERATION_TYPE_DIVIDEND = 21,
  OPERATION_TYPE_SELL = 22,
  OPERATION_TYPE_COUPON = 23,
  OPERATION_TYPE_SUCCESS_FEE = 24,
  OPERATION_TYPE_DIVIDEND_TRANSFER = 25,
  OPERATION_TYPE_ACCRUING_VARMARGIN = 26,
  OPERATION_TYPE_WRITING_OFF_VARMARGIN = 27,
  OPERATION_TYPE_DELIVERY_BUY = 28,
  OPERATION_TYPE_DELIVERY_SELL = 29,
  OPERATION_TYPE_TRACK_MFEE = 30,
  OPERATION_TYPE_TRACK_PFEE = 31,
  OPERATION_TYPE_TAX_PROGRESSIVE = 32,
  OPERATION_TYPE_BOND_TAX_PROGRESSIVE = 33,
  OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE = 34,
  OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE = 35,
  OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE = 36,
  OPERATION_TYPE_TAX_REPO_PROGRESSIVE = 37,
  OPERATION_TYPE_TAX_REPO = 38,
  OPERATION_TYPE_TAX_REPO_HOLD = 39,
  OPERATION_TYPE_TAX_REPO_REFUND = 40,
  OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE = 41,
  OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE = 42,
  OPERATION_TYPE_DIV_EXT = 43,
  OPERATION_TYPE_TAX_CORRECTION_COUPON = 44,
  OPERATION_TYPE_CASH_FEE = 45,
  OPERATION_TYPE_OUT_FEE = 46,
  OPERATION_TYPE_OUT_STAMP_DUTY = 47,
  OPERATION_TYPE_OUTPUT_SWIFT = 50,
  OPERATION_TYPE_INPUT_SWIFT = 51,
  OPERATION_TYPE_OUTPUT_ACQUIRING = 53,
  OPERATION_TYPE_INPUT_ACQUIRING = 54,
  OPERATION_TYPE_OUTPUT_PENALTY = 55,
  OPERATION_TYPE_ADVICE_FEE = 56,
  OPERATION_TYPE_TRANS_IIS_BS = 57,
  OPERATION_TYPE_TRANS_BS_BS = 58,
  OPERATION_TYPE_OUT_MULTI = 59,
  OPERATION_TYPE_INP_MULTI = 60,
  OPERATION_TYPE_OVER_PLACEMENT = 61,
  OPERATION_TYPE_OVER_COM = 62,
  OPERATION_TYPE_OVER_INCOME = 63,
  OPERATION_TYPE_OPTION_EXPIRATION = 64,
  OPERATION_TYPE_FUTURE_EXPIRATION = 65,
  OPERATION_TYPE_OTHER_FEE = 66,
  OPERATION_TYPE_OTHER = 67,
  OPERATION_TYPE_DFA_REDEMPTION = 68,
  OPERATION_TYPE_PRIMARY_ORDER = 69,
  OPERATION_TYPE_FUNDING = 70,
}
export enum PortfolioSubscriptionStatus { 
  PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
  PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS = 1,
  PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND = 2,
  PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR = 3,
}
export enum PositionsAccountSubscriptionStatus { 
  POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
  POSITIONS_SUBSCRIPTION_STATUS_SUCCESS = 1,
  POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND = 2,
  POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR = 3,
}
export enum OperationsAccountSubscriptionStatus { 
  OPERATIONS_SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
  OPERATIONS_SUBSCRIPTION_STATUS_SUCCESS = 1,
  OPERATIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND = 2,
  OPERATIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR = 3,
}
