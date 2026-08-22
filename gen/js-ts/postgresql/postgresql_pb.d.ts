import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


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

export class SchedulerTarget extends jspb.Message {
  getUid(): string;
  setUid(value: string): SchedulerTarget;

  getInterval(): number;
  setInterval(value: number): SchedulerTarget;

  getEnabled(): boolean;
  setEnabled(value: boolean): SchedulerTarget;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SchedulerTarget;
  hasCreatedAt(): boolean;
  clearCreatedAt(): SchedulerTarget;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SchedulerTarget;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): SchedulerTarget;

  getTicker(): string;
  setTicker(value: string): SchedulerTarget;

  getName(): string;
  setName(value: string): SchedulerTarget;

  getFigi(): string;
  setFigi(value: string): SchedulerTarget;

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
    enabled: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ticker: string,
    name: string,
    figi: string,
  }
}

export class SyncSchedulerTargetsRequest extends jspb.Message {
  getInstrumentsList(): Array<SchedulerTargetInstrument>;
  setInstrumentsList(value: Array<SchedulerTargetInstrument>): SyncSchedulerTargetsRequest;
  clearInstrumentsList(): SyncSchedulerTargetsRequest;
  addInstruments(value?: SchedulerTargetInstrument, index?: number): SchedulerTargetInstrument;

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
    instrumentsList: Array<SchedulerTargetInstrument.AsObject>,
    allowEmpty: boolean,
  }
}

export class SchedulerTargetInstrument extends jspb.Message {
  getUid(): string;
  setUid(value: string): SchedulerTargetInstrument;

  getIntervalsList(): Array<number>;
  setIntervalsList(value: Array<number>): SchedulerTargetInstrument;
  clearIntervalsList(): SchedulerTargetInstrument;
  addIntervals(value: number, index?: number): SchedulerTargetInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulerTargetInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulerTargetInstrument): SchedulerTargetInstrument.AsObject;
  static serializeBinaryToWriter(message: SchedulerTargetInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulerTargetInstrument;
  static deserializeBinaryFromReader(message: SchedulerTargetInstrument, reader: jspb.BinaryReader): SchedulerTargetInstrument;
}

export namespace SchedulerTargetInstrument {
  export type AsObject = {
    uid: string,
    intervalsList: Array<number>,
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

