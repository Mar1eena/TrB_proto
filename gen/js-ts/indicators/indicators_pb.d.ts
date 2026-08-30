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

export class SchedulerTarget extends jspb.Message {
  getUid(): string;
  setUid(value: string): SchedulerTarget;

  getInterval(): number;
  setInterval(value: number): SchedulerTarget;

  getIndicator(): string;
  setIndicator(value: string): SchedulerTarget;

  getParamsMap(): jspb.Map<string, number>;
  clearParamsMap(): SchedulerTarget;

  getEnabled(): boolean;
  setEnabled(value: boolean): SchedulerTarget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulerTarget.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulerTarget): SchedulerTarget.AsObject;
  static serializeBinaryToWriter(message: SchedulerTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulerTarget;
  static deserializeBinaryFromReader(message: SchedulerTarget, reader: jspb.BinaryReader): SchedulerTarget;
}

export namespace SchedulerTarget {
  export type AsObject = {
    uid: string,
    interval: number,
    indicator: string,
    paramsMap: Array<[string, number]>,
    enabled: boolean,
  }
}

export class ListSchedulerTargetsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSchedulerTargetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSchedulerTargetsRequest): ListSchedulerTargetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSchedulerTargetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSchedulerTargetsRequest;
  static deserializeBinaryFromReader(message: ListSchedulerTargetsRequest, reader: jspb.BinaryReader): ListSchedulerTargetsRequest;
}

export namespace ListSchedulerTargetsRequest {
  export type AsObject = {
  }
}

export class ListSchedulerTargetsResponse extends jspb.Message {
  getItemsList(): Array<SchedulerTarget>;
  setItemsList(value: Array<SchedulerTarget>): ListSchedulerTargetsResponse;
  clearItemsList(): ListSchedulerTargetsResponse;
  addItems(value?: SchedulerTarget, index?: number): SchedulerTarget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSchedulerTargetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSchedulerTargetsResponse): ListSchedulerTargetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSchedulerTargetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSchedulerTargetsResponse;
  static deserializeBinaryFromReader(message: ListSchedulerTargetsResponse, reader: jspb.BinaryReader): ListSchedulerTargetsResponse;
}

export namespace ListSchedulerTargetsResponse {
  export type AsObject = {
    itemsList: Array<SchedulerTarget.AsObject>,
  }
}

export class SyncSchedulerTargetsRequest extends jspb.Message {
  getItemsList(): Array<SchedulerTarget>;
  setItemsList(value: Array<SchedulerTarget>): SyncSchedulerTargetsRequest;
  clearItemsList(): SyncSchedulerTargetsRequest;
  addItems(value?: SchedulerTarget, index?: number): SchedulerTarget;

  getAllowEmpty(): boolean;
  setAllowEmpty(value: boolean): SyncSchedulerTargetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncSchedulerTargetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncSchedulerTargetsRequest): SyncSchedulerTargetsRequest.AsObject;
  static serializeBinaryToWriter(message: SyncSchedulerTargetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncSchedulerTargetsRequest;
  static deserializeBinaryFromReader(message: SyncSchedulerTargetsRequest, reader: jspb.BinaryReader): SyncSchedulerTargetsRequest;
}

export namespace SyncSchedulerTargetsRequest {
  export type AsObject = {
    itemsList: Array<SchedulerTarget.AsObject>,
    allowEmpty: boolean,
  }
}

export class SyncSchedulerTargetsResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): SyncSchedulerTargetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncSchedulerTargetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncSchedulerTargetsResponse): SyncSchedulerTargetsResponse.AsObject;
  static serializeBinaryToWriter(message: SyncSchedulerTargetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncSchedulerTargetsResponse;
  static deserializeBinaryFromReader(message: SyncSchedulerTargetsResponse, reader: jspb.BinaryReader): SyncSchedulerTargetsResponse;
}

export namespace SyncSchedulerTargetsResponse {
  export type AsObject = {
    count: number,
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
