import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as clickhouse_clickhouse_pb from '../clickhouse/clickhouse_pb'; // proto import: "clickhouse/clickhouse.proto"


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
  getUpsert(): clickhouse_clickhouse_pb.UpsertInstrumentsResponse | undefined;
  setUpsert(value?: clickhouse_clickhouse_pb.UpsertInstrumentsResponse): SyncInstrumentsResponse;
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
    upsert?: clickhouse_clickhouse_pb.UpsertInstrumentsResponse.AsObject,
  }
}

