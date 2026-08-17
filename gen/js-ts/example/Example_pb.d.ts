import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"


export class MessageRequest extends jspb.Message {
  getText(): string;
  setText(value: string): MessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MessageRequest): MessageRequest.AsObject;
  static serializeBinaryToWriter(message: MessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageRequest;
  static deserializeBinaryFromReader(message: MessageRequest, reader: jspb.BinaryReader): MessageRequest;
}

export namespace MessageRequest {
  export type AsObject = {
    text: string,
  }
}

export class MessageResponse extends jspb.Message {
  getText(): string;
  setText(value: string): MessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MessageResponse): MessageResponse.AsObject;
  static serializeBinaryToWriter(message: MessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageResponse;
  static deserializeBinaryFromReader(message: MessageResponse, reader: jspb.BinaryReader): MessageResponse;
}

export namespace MessageResponse {
  export type AsObject = {
    text: string,
  }
}

export class MessageStreamRequest extends jspb.Message {
  getText(): string;
  setText(value: string): MessageStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MessageStreamRequest): MessageStreamRequest.AsObject;
  static serializeBinaryToWriter(message: MessageStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageStreamRequest;
  static deserializeBinaryFromReader(message: MessageStreamRequest, reader: jspb.BinaryReader): MessageStreamRequest;
}

export namespace MessageStreamRequest {
  export type AsObject = {
    text: string,
  }
}

export class MessageStreamResponse extends jspb.Message {
  getText(): string;
  setText(value: string): MessageStreamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MessageStreamResponse): MessageStreamResponse.AsObject;
  static serializeBinaryToWriter(message: MessageStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageStreamResponse;
  static deserializeBinaryFromReader(message: MessageStreamResponse, reader: jspb.BinaryReader): MessageStreamResponse;
}

export namespace MessageStreamResponse {
  export type AsObject = {
    text: string,
  }
}

