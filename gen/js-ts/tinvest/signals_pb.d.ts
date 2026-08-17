import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_api_field_behavior_pb from '../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as tinvest_common_pb from '../tinvest/common_pb'; // proto import: "tinvest/common.proto"


export class GetStrategiesRequest extends jspb.Message {
  getStrategyId(): string;
  setStrategyId(value: string): GetStrategiesRequest;
  hasStrategyId(): boolean;
  clearStrategyId(): GetStrategiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStrategiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStrategiesRequest): GetStrategiesRequest.AsObject;
  static serializeBinaryToWriter(message: GetStrategiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStrategiesRequest;
  static deserializeBinaryFromReader(message: GetStrategiesRequest, reader: jspb.BinaryReader): GetStrategiesRequest;
}

export namespace GetStrategiesRequest {
  export type AsObject = {
    strategyId?: string,
  }

  export enum StrategyIdCase { 
    _STRATEGY_ID_NOT_SET = 0,
    STRATEGY_ID = 1,
  }
}

export class GetStrategiesResponse extends jspb.Message {
  getStrategiesList(): Array<Strategy>;
  setStrategiesList(value: Array<Strategy>): GetStrategiesResponse;
  clearStrategiesList(): GetStrategiesResponse;
  addStrategies(value?: Strategy, index?: number): Strategy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStrategiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStrategiesResponse): GetStrategiesResponse.AsObject;
  static serializeBinaryToWriter(message: GetStrategiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStrategiesResponse;
  static deserializeBinaryFromReader(message: GetStrategiesResponse, reader: jspb.BinaryReader): GetStrategiesResponse;
}

export namespace GetStrategiesResponse {
  export type AsObject = {
    strategiesList: Array<Strategy.AsObject>,
  }
}

export class Strategy extends jspb.Message {
  getStrategyId(): string;
  setStrategyId(value: string): Strategy;

  getStrategyName(): string;
  setStrategyName(value: string): Strategy;

  getStrategyDescription(): string;
  setStrategyDescription(value: string): Strategy;
  hasStrategyDescription(): boolean;
  clearStrategyDescription(): Strategy;

  getStrategyUrl(): string;
  setStrategyUrl(value: string): Strategy;
  hasStrategyUrl(): boolean;
  clearStrategyUrl(): Strategy;

  getStrategyType(): StrategyType;
  setStrategyType(value: StrategyType): Strategy;

  getActiveSignals(): number;
  setActiveSignals(value: number): Strategy;

  getTotalSignals(): number;
  setTotalSignals(value: number): Strategy;

  getTimeInPosition(): number;
  setTimeInPosition(value: number): Strategy;

  getAverageSignalYield(): tinvest_common_pb.Quotation | undefined;
  setAverageSignalYield(value?: tinvest_common_pb.Quotation): Strategy;
  hasAverageSignalYield(): boolean;
  clearAverageSignalYield(): Strategy;

  getAverageSignalYieldYear(): tinvest_common_pb.Quotation | undefined;
  setAverageSignalYieldYear(value?: tinvest_common_pb.Quotation): Strategy;
  hasAverageSignalYieldYear(): boolean;
  clearAverageSignalYieldYear(): Strategy;

  getYield(): tinvest_common_pb.Quotation | undefined;
  setYield(value?: tinvest_common_pb.Quotation): Strategy;
  hasYield(): boolean;
  clearYield(): Strategy;

  getYieldYear(): tinvest_common_pb.Quotation | undefined;
  setYieldYear(value?: tinvest_common_pb.Quotation): Strategy;
  hasYieldYear(): boolean;
  clearYieldYear(): Strategy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Strategy.AsObject;
  static toObject(includeInstance: boolean, msg: Strategy): Strategy.AsObject;
  static serializeBinaryToWriter(message: Strategy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Strategy;
  static deserializeBinaryFromReader(message: Strategy, reader: jspb.BinaryReader): Strategy;
}

export namespace Strategy {
  export type AsObject = {
    strategyId: string,
    strategyName: string,
    strategyDescription?: string,
    strategyUrl?: string,
    strategyType: StrategyType,
    activeSignals: number,
    totalSignals: number,
    timeInPosition: number,
    averageSignalYield?: tinvest_common_pb.Quotation.AsObject,
    averageSignalYieldYear?: tinvest_common_pb.Quotation.AsObject,
    yield?: tinvest_common_pb.Quotation.AsObject,
    yieldYear?: tinvest_common_pb.Quotation.AsObject,
  }

  export enum StrategyDescriptionCase { 
    _STRATEGY_DESCRIPTION_NOT_SET = 0,
    STRATEGY_DESCRIPTION = 3,
  }

  export enum StrategyUrlCase { 
    _STRATEGY_URL_NOT_SET = 0,
    STRATEGY_URL = 4,
  }
}

export class GetSignalsRequest extends jspb.Message {
  getSignalId(): string;
  setSignalId(value: string): GetSignalsRequest;
  hasSignalId(): boolean;
  clearSignalId(): GetSignalsRequest;

  getStrategyId(): string;
  setStrategyId(value: string): GetSignalsRequest;
  hasStrategyId(): boolean;
  clearStrategyId(): GetSignalsRequest;

  getStrategyType(): StrategyType;
  setStrategyType(value: StrategyType): GetSignalsRequest;
  hasStrategyType(): boolean;
  clearStrategyType(): GetSignalsRequest;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): GetSignalsRequest;
  hasInstrumentUid(): boolean;
  clearInstrumentUid(): GetSignalsRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetSignalsRequest;
  hasFrom(): boolean;
  clearFrom(): GetSignalsRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetSignalsRequest;
  hasTo(): boolean;
  clearTo(): GetSignalsRequest;

  getDirection(): SignalDirection;
  setDirection(value: SignalDirection): GetSignalsRequest;
  hasDirection(): boolean;
  clearDirection(): GetSignalsRequest;

  getActive(): SignalState;
  setActive(value: SignalState): GetSignalsRequest;
  hasActive(): boolean;
  clearActive(): GetSignalsRequest;

  getPaging(): tinvest_common_pb.Page | undefined;
  setPaging(value?: tinvest_common_pb.Page): GetSignalsRequest;
  hasPaging(): boolean;
  clearPaging(): GetSignalsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSignalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSignalsRequest): GetSignalsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSignalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSignalsRequest;
  static deserializeBinaryFromReader(message: GetSignalsRequest, reader: jspb.BinaryReader): GetSignalsRequest;
}

export namespace GetSignalsRequest {
  export type AsObject = {
    signalId?: string,
    strategyId?: string,
    strategyType?: StrategyType,
    instrumentUid?: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    direction?: SignalDirection,
    active?: SignalState,
    paging?: tinvest_common_pb.Page.AsObject,
  }

  export enum SignalIdCase { 
    _SIGNAL_ID_NOT_SET = 0,
    SIGNAL_ID = 1,
  }

  export enum StrategyIdCase { 
    _STRATEGY_ID_NOT_SET = 0,
    STRATEGY_ID = 2,
  }

  export enum StrategyTypeCase { 
    _STRATEGY_TYPE_NOT_SET = 0,
    STRATEGY_TYPE = 3,
  }

  export enum InstrumentUidCase { 
    _INSTRUMENT_UID_NOT_SET = 0,
    INSTRUMENT_UID = 4,
  }

  export enum FromCase { 
    _FROM_NOT_SET = 0,
    FROM = 5,
  }

  export enum ToCase { 
    _TO_NOT_SET = 0,
    TO = 6,
  }

  export enum DirectionCase { 
    _DIRECTION_NOT_SET = 0,
    DIRECTION = 7,
  }

  export enum ActiveCase { 
    _ACTIVE_NOT_SET = 0,
    ACTIVE = 8,
  }

  export enum PagingCase { 
    _PAGING_NOT_SET = 0,
    PAGING = 9,
  }
}

export class GetSignalsResponse extends jspb.Message {
  getSignalsList(): Array<Signal>;
  setSignalsList(value: Array<Signal>): GetSignalsResponse;
  clearSignalsList(): GetSignalsResponse;
  addSignals(value?: Signal, index?: number): Signal;

  getPaging(): tinvest_common_pb.PageResponse | undefined;
  setPaging(value?: tinvest_common_pb.PageResponse): GetSignalsResponse;
  hasPaging(): boolean;
  clearPaging(): GetSignalsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSignalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSignalsResponse): GetSignalsResponse.AsObject;
  static serializeBinaryToWriter(message: GetSignalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSignalsResponse;
  static deserializeBinaryFromReader(message: GetSignalsResponse, reader: jspb.BinaryReader): GetSignalsResponse;
}

export namespace GetSignalsResponse {
  export type AsObject = {
    signalsList: Array<Signal.AsObject>,
    paging?: tinvest_common_pb.PageResponse.AsObject,
  }
}

export class Signal extends jspb.Message {
  getSignalId(): string;
  setSignalId(value: string): Signal;

  getStrategyId(): string;
  setStrategyId(value: string): Signal;

  getStrategyName(): string;
  setStrategyName(value: string): Signal;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): Signal;

  getCreateDt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateDt(value?: google_protobuf_timestamp_pb.Timestamp): Signal;
  hasCreateDt(): boolean;
  clearCreateDt(): Signal;

  getDirection(): SignalDirection;
  setDirection(value: SignalDirection): Signal;

  getInitialPrice(): tinvest_common_pb.Quotation | undefined;
  setInitialPrice(value?: tinvest_common_pb.Quotation): Signal;
  hasInitialPrice(): boolean;
  clearInitialPrice(): Signal;

  getInfo(): string;
  setInfo(value: string): Signal;
  hasInfo(): boolean;
  clearInfo(): Signal;

  getName(): string;
  setName(value: string): Signal;

  getTargetPrice(): tinvest_common_pb.Quotation | undefined;
  setTargetPrice(value?: tinvest_common_pb.Quotation): Signal;
  hasTargetPrice(): boolean;
  clearTargetPrice(): Signal;

  getEndDt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDt(value?: google_protobuf_timestamp_pb.Timestamp): Signal;
  hasEndDt(): boolean;
  clearEndDt(): Signal;

  getProbability(): number;
  setProbability(value: number): Signal;
  hasProbability(): boolean;
  clearProbability(): Signal;

  getStoploss(): tinvest_common_pb.Quotation | undefined;
  setStoploss(value?: tinvest_common_pb.Quotation): Signal;
  hasStoploss(): boolean;
  clearStoploss(): Signal;

  getClosePrice(): tinvest_common_pb.Quotation | undefined;
  setClosePrice(value?: tinvest_common_pb.Quotation): Signal;
  hasClosePrice(): boolean;
  clearClosePrice(): Signal;

  getCloseDt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCloseDt(value?: google_protobuf_timestamp_pb.Timestamp): Signal;
  hasCloseDt(): boolean;
  clearCloseDt(): Signal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signal.AsObject;
  static toObject(includeInstance: boolean, msg: Signal): Signal.AsObject;
  static serializeBinaryToWriter(message: Signal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signal;
  static deserializeBinaryFromReader(message: Signal, reader: jspb.BinaryReader): Signal;
}

export namespace Signal {
  export type AsObject = {
    signalId: string,
    strategyId: string,
    strategyName: string,
    instrumentUid: string,
    createDt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    direction: SignalDirection,
    initialPrice?: tinvest_common_pb.Quotation.AsObject,
    info?: string,
    name: string,
    targetPrice?: tinvest_common_pb.Quotation.AsObject,
    endDt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    probability?: number,
    stoploss?: tinvest_common_pb.Quotation.AsObject,
    closePrice?: tinvest_common_pb.Quotation.AsObject,
    closeDt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum InfoCase { 
    _INFO_NOT_SET = 0,
    INFO = 8,
  }

  export enum ProbabilityCase { 
    _PROBABILITY_NOT_SET = 0,
    PROBABILITY = 12,
  }

  export enum StoplossCase { 
    _STOPLOSS_NOT_SET = 0,
    STOPLOSS = 13,
  }

  export enum ClosePriceCase { 
    _CLOSE_PRICE_NOT_SET = 0,
    CLOSE_PRICE = 14,
  }

  export enum CloseDtCase { 
    _CLOSE_DT_NOT_SET = 0,
    CLOSE_DT = 15,
  }
}

export enum StrategyType { 
  STRATEGY_TYPE_UNSPECIFIED = 0,
  STRATEGY_TYPE_TECHNICAL = 1,
  STRATEGY_TYPE_FUNDAMENTAL = 2,
}
export enum SignalDirection { 
  SIGNAL_DIRECTION_UNSPECIFIED = 0,
  SIGNAL_DIRECTION_BUY = 1,
  SIGNAL_DIRECTION_SELL = 2,
}
export enum SignalState { 
  SIGNAL_STATE_UNSPECIFIED = 0,
  SIGNAL_STATE_ACTIVE = 1,
  SIGNAL_STATE_CLOSED = 2,
  SIGNAL_STATE_ALL = 3,
}
