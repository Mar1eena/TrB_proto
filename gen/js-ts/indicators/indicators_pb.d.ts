import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Candle extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): Candle;
  hasTime(): boolean;
  clearTime(): Candle;

  getOpen(): number;
  setOpen(value: number): Candle;

  getHigh(): number;
  setHigh(value: number): Candle;

  getLow(): number;
  setLow(value: number): Candle;

  getClose(): number;
  setClose(value: number): Candle;

  getVolume(): number;
  setVolume(value: number): Candle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Candle.AsObject;
  static toObject(includeInstance: boolean, msg: Candle): Candle.AsObject;
  static serializeBinaryToWriter(message: Candle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Candle;
  static deserializeBinaryFromReader(message: Candle, reader: jspb.BinaryReader): Candle;
}

export namespace Candle {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
  }
}

export class ComputeRequest extends jspb.Message {
  getType(): IndicatorType;
  setType(value: IndicatorType): ComputeRequest;

  getCandlesList(): Array<Candle>;
  setCandlesList(value: Array<Candle>): ComputeRequest;
  clearCandlesList(): ComputeRequest;
  addCandles(value?: Candle, index?: number): Candle;

  getParamsMap(): jspb.Map<string, number>;
  clearParamsMap(): ComputeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComputeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ComputeRequest): ComputeRequest.AsObject;
  static serializeBinaryToWriter(message: ComputeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComputeRequest;
  static deserializeBinaryFromReader(message: ComputeRequest, reader: jspb.BinaryReader): ComputeRequest;
}

export namespace ComputeRequest {
  export type AsObject = {
    type: IndicatorType,
    candlesList: Array<Candle.AsObject>,
    paramsMap: Array<[string, number]>,
  }
}

export class ComputeForInstrumentRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): ComputeForInstrumentRequest;

  getInterval(): number;
  setInterval(value: number): ComputeForInstrumentRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): ComputeForInstrumentRequest;
  hasFrom(): boolean;
  clearFrom(): ComputeForInstrumentRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): ComputeForInstrumentRequest;
  hasTo(): boolean;
  clearTo(): ComputeForInstrumentRequest;

  getType(): IndicatorType;
  setType(value: IndicatorType): ComputeForInstrumentRequest;

  getParamsMap(): jspb.Map<string, number>;
  clearParamsMap(): ComputeForInstrumentRequest;

  getPersist(): boolean;
  setPersist(value: boolean): ComputeForInstrumentRequest;

  getMaxResponsePoints(): number;
  setMaxResponsePoints(value: number): ComputeForInstrumentRequest;
  hasMaxResponsePoints(): boolean;
  clearMaxResponsePoints(): ComputeForInstrumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComputeForInstrumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ComputeForInstrumentRequest): ComputeForInstrumentRequest.AsObject;
  static serializeBinaryToWriter(message: ComputeForInstrumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComputeForInstrumentRequest;
  static deserializeBinaryFromReader(message: ComputeForInstrumentRequest, reader: jspb.BinaryReader): ComputeForInstrumentRequest;
}

export namespace ComputeForInstrumentRequest {
  export type AsObject = {
    uid: string,
    interval: number,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: IndicatorType,
    paramsMap: Array<[string, number]>,
    persist: boolean,
    maxResponsePoints?: number,
  }

  export enum MaxResponsePointsCase { 
    _MAX_RESPONSE_POINTS_NOT_SET = 0,
    MAX_RESPONSE_POINTS = 8,
  }
}

export class ListIndicatorValuesRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): ListIndicatorValuesRequest;

  getInterval(): number;
  setInterval(value: number): ListIndicatorValuesRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): ListIndicatorValuesRequest;
  hasFrom(): boolean;
  clearFrom(): ListIndicatorValuesRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): ListIndicatorValuesRequest;
  hasTo(): boolean;
  clearTo(): ListIndicatorValuesRequest;

  getType(): IndicatorType;
  setType(value: IndicatorType): ListIndicatorValuesRequest;

  getParamsMap(): jspb.Map<string, number>;
  clearParamsMap(): ListIndicatorValuesRequest;

  getLimit(): number;
  setLimit(value: number): ListIndicatorValuesRequest;

  getAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAfter(value?: google_protobuf_timestamp_pb.Timestamp): ListIndicatorValuesRequest;
  hasAfter(): boolean;
  clearAfter(): ListIndicatorValuesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndicatorValuesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndicatorValuesRequest): ListIndicatorValuesRequest.AsObject;
  static serializeBinaryToWriter(message: ListIndicatorValuesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIndicatorValuesRequest;
  static deserializeBinaryFromReader(message: ListIndicatorValuesRequest, reader: jspb.BinaryReader): ListIndicatorValuesRequest;
}

export namespace ListIndicatorValuesRequest {
  export type AsObject = {
    uid: string,
    interval: number,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: IndicatorType,
    paramsMap: Array<[string, number]>,
    limit: number,
    after?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class IndicatorPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): IndicatorPoint;
  hasTime(): boolean;
  clearTime(): IndicatorPoint;

  getValuesMap(): jspb.Map<string, number>;
  clearValuesMap(): IndicatorPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndicatorPoint.AsObject;
  static toObject(includeInstance: boolean, msg: IndicatorPoint): IndicatorPoint.AsObject;
  static serializeBinaryToWriter(message: IndicatorPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndicatorPoint;
  static deserializeBinaryFromReader(message: IndicatorPoint, reader: jspb.BinaryReader): IndicatorPoint;
}

export namespace IndicatorPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    valuesMap: Array<[string, number]>,
  }
}

export class ComputeResponse extends jspb.Message {
  getType(): IndicatorType;
  setType(value: IndicatorType): ComputeResponse;

  getParamsMap(): jspb.Map<string, number>;
  clearParamsMap(): ComputeResponse;

  getPointsList(): Array<IndicatorPoint>;
  setPointsList(value: Array<IndicatorPoint>): ComputeResponse;
  clearPointsList(): ComputeResponse;
  addPoints(value?: IndicatorPoint, index?: number): IndicatorPoint;

  getTotalPoints(): number;
  setTotalPoints(value: number): ComputeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComputeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ComputeResponse): ComputeResponse.AsObject;
  static serializeBinaryToWriter(message: ComputeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComputeResponse;
  static deserializeBinaryFromReader(message: ComputeResponse, reader: jspb.BinaryReader): ComputeResponse;
}

export namespace ComputeResponse {
  export type AsObject = {
    type: IndicatorType,
    paramsMap: Array<[string, number]>,
    pointsList: Array<IndicatorPoint.AsObject>,
    totalPoints: number,
  }
}

export class ListIndicatorValuesResponse extends jspb.Message {
  getType(): IndicatorType;
  setType(value: IndicatorType): ListIndicatorValuesResponse;

  getParamsMap(): jspb.Map<string, number>;
  clearParamsMap(): ListIndicatorValuesResponse;

  getPointsList(): Array<IndicatorPoint>;
  setPointsList(value: Array<IndicatorPoint>): ListIndicatorValuesResponse;
  clearPointsList(): ListIndicatorValuesResponse;
  addPoints(value?: IndicatorPoint, index?: number): IndicatorPoint;

  getHasMore(): boolean;
  setHasMore(value: boolean): ListIndicatorValuesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndicatorValuesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndicatorValuesResponse): ListIndicatorValuesResponse.AsObject;
  static serializeBinaryToWriter(message: ListIndicatorValuesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIndicatorValuesResponse;
  static deserializeBinaryFromReader(message: ListIndicatorValuesResponse, reader: jspb.BinaryReader): ListIndicatorValuesResponse;
}

export namespace ListIndicatorValuesResponse {
  export type AsObject = {
    type: IndicatorType,
    paramsMap: Array<[string, number]>,
    pointsList: Array<IndicatorPoint.AsObject>,
    hasMore: boolean,
  }
}

export class IndicatorInfo extends jspb.Message {
  getType(): IndicatorType;
  setType(value: IndicatorType): IndicatorInfo;

  getName(): string;
  setName(value: string): IndicatorInfo;

  getMinBars(): number;
  setMinBars(value: number): IndicatorInfo;

  getDefaultParamsMap(): jspb.Map<string, number>;
  clearDefaultParamsMap(): IndicatorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndicatorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IndicatorInfo): IndicatorInfo.AsObject;
  static serializeBinaryToWriter(message: IndicatorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndicatorInfo;
  static deserializeBinaryFromReader(message: IndicatorInfo, reader: jspb.BinaryReader): IndicatorInfo;
}

export namespace IndicatorInfo {
  export type AsObject = {
    type: IndicatorType,
    name: string,
    minBars: number,
    defaultParamsMap: Array<[string, number]>,
  }
}

export class ListSupportedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSupportedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSupportedRequest): ListSupportedRequest.AsObject;
  static serializeBinaryToWriter(message: ListSupportedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSupportedRequest;
  static deserializeBinaryFromReader(message: ListSupportedRequest, reader: jspb.BinaryReader): ListSupportedRequest;
}

export namespace ListSupportedRequest {
  export type AsObject = {
  }
}

export class ListSupportedResponse extends jspb.Message {
  getIndicatorsList(): Array<IndicatorInfo>;
  setIndicatorsList(value: Array<IndicatorInfo>): ListSupportedResponse;
  clearIndicatorsList(): ListSupportedResponse;
  addIndicators(value?: IndicatorInfo, index?: number): IndicatorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSupportedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSupportedResponse): ListSupportedResponse.AsObject;
  static serializeBinaryToWriter(message: ListSupportedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSupportedResponse;
  static deserializeBinaryFromReader(message: ListSupportedResponse, reader: jspb.BinaryReader): ListSupportedResponse;
}

export namespace ListSupportedResponse {
  export type AsObject = {
    indicatorsList: Array<IndicatorInfo.AsObject>,
  }
}

export enum IndicatorType { 
  INDICATOR_TYPE_UNSPECIFIED = 0,
  INDICATOR_TYPE_RSI = 1,
  INDICATOR_TYPE_SMA = 2,
  INDICATOR_TYPE_EMA = 3,
  INDICATOR_TYPE_MACD = 4,
  INDICATOR_TYPE_BB = 5,
}
