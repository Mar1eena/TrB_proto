import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"


export class DealingRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): DealingRequest;

  getHeader(): string;
  setHeader(value: string): DealingRequest;

  getLogon(): string;
  setLogon(value: string): DealingRequest;

  getInstrument(): string;
  setInstrument(value: string): DealingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DealingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DealingRequest): DealingRequest.AsObject;
  static serializeBinaryToWriter(message: DealingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DealingRequest;
  static deserializeBinaryFromReader(message: DealingRequest, reader: jspb.BinaryReader): DealingRequest;
}

export namespace DealingRequest {
  export type AsObject = {
    address: string,
    header: string,
    logon: string,
    instrument: string,
  }
}

export class DealingResponse extends jspb.Message {
  getResponse(): string;
  setResponse(value: string): DealingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DealingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DealingResponse): DealingResponse.AsObject;
  static serializeBinaryToWriter(message: DealingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DealingResponse;
  static deserializeBinaryFromReader(message: DealingResponse, reader: jspb.BinaryReader): DealingResponse;
}

export namespace DealingResponse {
  export type AsObject = {
    response: string,
  }
}

