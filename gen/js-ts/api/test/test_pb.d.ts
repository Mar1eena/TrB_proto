import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as api_db_api_db_api_pb from '../../api/db_api/db_api_pb'; // proto import: "api/db_api/db_api.proto"


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
  getUpsert(): api_db_api_db_api_pb.UpsertInstrumentsResponse | undefined;
  setUpsert(value?: api_db_api_db_api_pb.UpsertInstrumentsResponse): SyncInstrumentsResponse;
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
    upsert?: api_db_api_db_api_pb.UpsertInstrumentsResponse.AsObject,
  }
}

