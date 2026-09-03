import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as indicators_params_pb from '../indicators/params_pb'; // proto import: "indicators/params.proto"


export class Settings extends jspb.Message {
  getInterval(): number;
  setInterval(value: number): Settings;

  getUid(): string;
  setUid(value: string): Settings;

  getSettings(): indicators_params_pb.IndicatorSettings | undefined;
  setSettings(value?: indicators_params_pb.IndicatorSettings): Settings;
  hasSettings(): boolean;
  clearSettings(): Settings;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): Settings;
  hasStart(): boolean;
  clearStart(): Settings;

  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): Settings;
  hasEnd(): boolean;
  clearEnd(): Settings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Settings.AsObject;
  static toObject(includeInstance: boolean, msg: Settings): Settings.AsObject;
  static serializeBinaryToWriter(message: Settings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Settings;
  static deserializeBinaryFromReader(message: Settings, reader: jspb.BinaryReader): Settings;
}

export namespace Settings {
  export type AsObject = {
    interval: number,
    uid: string,
    settings?: indicators_params_pb.IndicatorSettings.AsObject,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SettingsHash extends jspb.Message {
  getHash(): number;
  setHash(value: number): SettingsHash;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettingsHash.AsObject;
  static toObject(includeInstance: boolean, msg: SettingsHash): SettingsHash.AsObject;
  static serializeBinaryToWriter(message: SettingsHash, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettingsHash;
  static deserializeBinaryFromReader(message: SettingsHash, reader: jspb.BinaryReader): SettingsHash;
}

export namespace SettingsHash {
  export type AsObject = {
    hash: number,
  }
}

export class DeleteSettingsResponse extends jspb.Message {
  getHash(): number;
  setHash(value: number): DeleteSettingsResponse;

  getDelete(): boolean;
  setDelete(value: boolean): DeleteSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSettingsResponse): DeleteSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSettingsResponse;
  static deserializeBinaryFromReader(message: DeleteSettingsResponse, reader: jspb.BinaryReader): DeleteSettingsResponse;
}

export namespace DeleteSettingsResponse {
  export type AsObject = {
    hash: number,
    pb_delete: boolean,
  }
}

export class UpdateSettingsResponse extends jspb.Message {
  getHash(): number;
  setHash(value: number): UpdateSettingsResponse;

  getUpdate(): boolean;
  setUpdate(value: boolean): UpdateSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSettingsResponse): UpdateSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSettingsResponse;
  static deserializeBinaryFromReader(message: UpdateSettingsResponse, reader: jspb.BinaryReader): UpdateSettingsResponse;
}

export namespace UpdateSettingsResponse {
  export type AsObject = {
    hash: number,
    update: boolean,
  }
}

