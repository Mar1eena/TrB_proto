import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as api_tinvest_instruments_pb from '../api/tinvest/instruments_pb'; // proto import: "api/tinvest/instruments.proto"


export class ListFilter extends jspb.Message {
  getQ(): string;
  setQ(value: string): ListFilter;

  getLimit(): number;
  setLimit(value: number): ListFilter;

  getOffset(): number;
  setOffset(value: number): ListFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ListFilter): ListFilter.AsObject;
  static serializeBinaryToWriter(message: ListFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFilter;
  static deserializeBinaryFromReader(message: ListFilter, reader: jspb.BinaryReader): ListFilter;
}

export namespace ListFilter {
  export type AsObject = {
    q: string,
    limit: number,
    offset: number,
  }
}

export class ListInstrumentsRequest extends jspb.Message {
  getFilter(): ListFilter | undefined;
  setFilter(value?: ListFilter): ListInstrumentsRequest;
  hasFilter(): boolean;
  clearFilter(): ListInstrumentsRequest;

  getLite(): boolean;
  setLite(value: boolean): ListInstrumentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstrumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstrumentsRequest): ListInstrumentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstrumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstrumentsRequest;
  static deserializeBinaryFromReader(message: ListInstrumentsRequest, reader: jspb.BinaryReader): ListInstrumentsRequest;
}

export namespace ListInstrumentsRequest {
  export type AsObject = {
    filter?: ListFilter.AsObject,
    lite: boolean,
  }
}

export class InstrumentListItem extends jspb.Message {
  getShare(): api_tinvest_instruments_pb.Share | undefined;
  setShare(value?: api_tinvest_instruments_pb.Share): InstrumentListItem;
  hasShare(): boolean;
  clearShare(): InstrumentListItem;

  getVersion(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVersion(value?: google_protobuf_timestamp_pb.Timestamp): InstrumentListItem;
  hasVersion(): boolean;
  clearVersion(): InstrumentListItem;

  getVersionCount(): number;
  setVersionCount(value: number): InstrumentListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentListItem.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentListItem): InstrumentListItem.AsObject;
  static serializeBinaryToWriter(message: InstrumentListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentListItem;
  static deserializeBinaryFromReader(message: InstrumentListItem, reader: jspb.BinaryReader): InstrumentListItem;
}

export namespace InstrumentListItem {
  export type AsObject = {
    share?: api_tinvest_instruments_pb.Share.AsObject,
    version?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    versionCount: number,
  }
}

export class ListInstrumentsResponse extends jspb.Message {
  getItemsList(): Array<InstrumentListItem>;
  setItemsList(value: Array<InstrumentListItem>): ListInstrumentsResponse;
  clearItemsList(): ListInstrumentsResponse;
  addItems(value?: InstrumentListItem, index?: number): InstrumentListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstrumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstrumentsResponse): ListInstrumentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstrumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstrumentsResponse;
  static deserializeBinaryFromReader(message: ListInstrumentsResponse, reader: jspb.BinaryReader): ListInstrumentsResponse;
}

export namespace ListInstrumentsResponse {
  export type AsObject = {
    itemsList: Array<InstrumentListItem.AsObject>,
  }
}

export class ListInstrumentVersionsRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): ListInstrumentVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstrumentVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstrumentVersionsRequest): ListInstrumentVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstrumentVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstrumentVersionsRequest;
  static deserializeBinaryFromReader(message: ListInstrumentVersionsRequest, reader: jspb.BinaryReader): ListInstrumentVersionsRequest;
}

export namespace ListInstrumentVersionsRequest {
  export type AsObject = {
    uid: string,
  }
}

export class InstrumentVersion extends jspb.Message {
  getShare(): api_tinvest_instruments_pb.Share | undefined;
  setShare(value?: api_tinvest_instruments_pb.Share): InstrumentVersion;
  hasShare(): boolean;
  clearShare(): InstrumentVersion;

  getVersion(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVersion(value?: google_protobuf_timestamp_pb.Timestamp): InstrumentVersion;
  hasVersion(): boolean;
  clearVersion(): InstrumentVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentVersion.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentVersion): InstrumentVersion.AsObject;
  static serializeBinaryToWriter(message: InstrumentVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentVersion;
  static deserializeBinaryFromReader(message: InstrumentVersion, reader: jspb.BinaryReader): InstrumentVersion;
}

export namespace InstrumentVersion {
  export type AsObject = {
    share?: api_tinvest_instruments_pb.Share.AsObject,
    version?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListInstrumentVersionsResponse extends jspb.Message {
  getItemsList(): Array<InstrumentVersion>;
  setItemsList(value: Array<InstrumentVersion>): ListInstrumentVersionsResponse;
  clearItemsList(): ListInstrumentVersionsResponse;
  addItems(value?: InstrumentVersion, index?: number): InstrumentVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstrumentVersionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstrumentVersionsResponse): ListInstrumentVersionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstrumentVersionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstrumentVersionsResponse;
  static deserializeBinaryFromReader(message: ListInstrumentVersionsResponse, reader: jspb.BinaryReader): ListInstrumentVersionsResponse;
}

export namespace ListInstrumentVersionsResponse {
  export type AsObject = {
    itemsList: Array<InstrumentVersion.AsObject>,
  }
}

export class UpsertInstrumentsResponse extends jspb.Message {
  getFetched(): number;
  setFetched(value: number): UpsertInstrumentsResponse;

  getInserted(): number;
  setInserted(value: number): UpsertInstrumentsResponse;

  getUpdated(): number;
  setUpdated(value: number): UpsertInstrumentsResponse;

  getUnchanged(): number;
  setUnchanged(value: number): UpsertInstrumentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertInstrumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertInstrumentsResponse): UpsertInstrumentsResponse.AsObject;
  static serializeBinaryToWriter(message: UpsertInstrumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertInstrumentsResponse;
  static deserializeBinaryFromReader(message: UpsertInstrumentsResponse, reader: jspb.BinaryReader): UpsertInstrumentsResponse;
}

export namespace UpsertInstrumentsResponse {
  export type AsObject = {
    fetched: number,
    inserted: number,
    updated: number,
    unchanged: number,
  }
}

export class SyncInstrumentsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncInstrumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncInstrumentsRequest): SyncInstrumentsRequest.AsObject;
  static serializeBinaryToWriter(message: SyncInstrumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncInstrumentsRequest;
  static deserializeBinaryFromReader(message: SyncInstrumentsRequest, reader: jspb.BinaryReader): SyncInstrumentsRequest;
}

export namespace SyncInstrumentsRequest {
  export type AsObject = {
  }
}

export class SyncInstrumentsResponse extends jspb.Message {
  getUpsert(): UpsertInstrumentsResponse | undefined;
  setUpsert(value?: UpsertInstrumentsResponse): SyncInstrumentsResponse;
  hasUpsert(): boolean;
  clearUpsert(): SyncInstrumentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncInstrumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncInstrumentsResponse): SyncInstrumentsResponse.AsObject;
  static serializeBinaryToWriter(message: SyncInstrumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncInstrumentsResponse;
  static deserializeBinaryFromReader(message: SyncInstrumentsResponse, reader: jspb.BinaryReader): SyncInstrumentsResponse;
}

export namespace SyncInstrumentsResponse {
  export type AsObject = {
    upsert?: UpsertInstrumentsResponse.AsObject,
  }
}

