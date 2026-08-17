import * as jspb from 'google-protobuf'

import * as tinvest_common_pb from '../tinvest/common_pb'; // proto import: "tinvest/common.proto"
import * as tinvest_orders_pb from '../tinvest/orders_pb'; // proto import: "tinvest/orders.proto"
import * as tinvest_operations_pb from '../tinvest/operations_pb'; // proto import: "tinvest/operations.proto"
import * as tinvest_stoporders_pb from '../tinvest/stoporders_pb'; // proto import: "tinvest/stoporders.proto"
import * as tinvest_users_pb from '../tinvest/users_pb'; // proto import: "tinvest/users.proto"
import * as google_api_field_behavior_pb from '../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"


export class OpenSandboxAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): OpenSandboxAccountRequest;
  hasName(): boolean;
  clearName(): OpenSandboxAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenSandboxAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenSandboxAccountRequest): OpenSandboxAccountRequest.AsObject;
  static serializeBinaryToWriter(message: OpenSandboxAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenSandboxAccountRequest;
  static deserializeBinaryFromReader(message: OpenSandboxAccountRequest, reader: jspb.BinaryReader): OpenSandboxAccountRequest;
}

export namespace OpenSandboxAccountRequest {
  export type AsObject = {
    name?: string,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 1,
  }
}

export class OpenSandboxAccountResponse extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): OpenSandboxAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenSandboxAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenSandboxAccountResponse): OpenSandboxAccountResponse.AsObject;
  static serializeBinaryToWriter(message: OpenSandboxAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenSandboxAccountResponse;
  static deserializeBinaryFromReader(message: OpenSandboxAccountResponse, reader: jspb.BinaryReader): OpenSandboxAccountResponse;
}

export namespace OpenSandboxAccountResponse {
  export type AsObject = {
    accountId: string,
  }
}

export class CloseSandboxAccountRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): CloseSandboxAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseSandboxAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseSandboxAccountRequest): CloseSandboxAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CloseSandboxAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseSandboxAccountRequest;
  static deserializeBinaryFromReader(message: CloseSandboxAccountRequest, reader: jspb.BinaryReader): CloseSandboxAccountRequest;
}

export namespace CloseSandboxAccountRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class CloseSandboxAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseSandboxAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CloseSandboxAccountResponse): CloseSandboxAccountResponse.AsObject;
  static serializeBinaryToWriter(message: CloseSandboxAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseSandboxAccountResponse;
  static deserializeBinaryFromReader(message: CloseSandboxAccountResponse, reader: jspb.BinaryReader): CloseSandboxAccountResponse;
}

export namespace CloseSandboxAccountResponse {
  export type AsObject = {
  }
}

export class SandboxPayInRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): SandboxPayInRequest;

  getAmount(): tinvest_common_pb.MoneyValue | undefined;
  setAmount(value?: tinvest_common_pb.MoneyValue): SandboxPayInRequest;
  hasAmount(): boolean;
  clearAmount(): SandboxPayInRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SandboxPayInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SandboxPayInRequest): SandboxPayInRequest.AsObject;
  static serializeBinaryToWriter(message: SandboxPayInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SandboxPayInRequest;
  static deserializeBinaryFromReader(message: SandboxPayInRequest, reader: jspb.BinaryReader): SandboxPayInRequest;
}

export namespace SandboxPayInRequest {
  export type AsObject = {
    accountId: string,
    amount?: tinvest_common_pb.MoneyValue.AsObject,
  }
}

export class SandboxPayInResponse extends jspb.Message {
  getBalance(): tinvest_common_pb.MoneyValue | undefined;
  setBalance(value?: tinvest_common_pb.MoneyValue): SandboxPayInResponse;
  hasBalance(): boolean;
  clearBalance(): SandboxPayInResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SandboxPayInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SandboxPayInResponse): SandboxPayInResponse.AsObject;
  static serializeBinaryToWriter(message: SandboxPayInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SandboxPayInResponse;
  static deserializeBinaryFromReader(message: SandboxPayInResponse, reader: jspb.BinaryReader): SandboxPayInResponse;
}

export namespace SandboxPayInResponse {
  export type AsObject = {
    balance?: tinvest_common_pb.MoneyValue.AsObject,
  }
}

