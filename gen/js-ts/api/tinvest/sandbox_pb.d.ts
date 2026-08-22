import * as jspb from 'google-protobuf'

import * as api_tinvest_common_pb from '../../api/tinvest/common_pb'; // proto import: "api/tinvest/common.proto"
import * as api_tinvest_orders_pb from '../../api/tinvest/orders_pb'; // proto import: "api/tinvest/orders.proto"
import * as api_tinvest_operations_pb from '../../api/tinvest/operations_pb'; // proto import: "api/tinvest/operations.proto"
import * as api_tinvest_stoporders_pb from '../../api/tinvest/stoporders_pb'; // proto import: "api/tinvest/stoporders.proto"
import * as api_tinvest_users_pb from '../../api/tinvest/users_pb'; // proto import: "api/tinvest/users.proto"
import * as google_api_field_behavior_pb from '../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"


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

  getAmount(): api_tinvest_common_pb.MoneyValue | undefined;
  setAmount(value?: api_tinvest_common_pb.MoneyValue): SandboxPayInRequest;
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
    amount?: api_tinvest_common_pb.MoneyValue.AsObject,
  }
}

export class SandboxPayInResponse extends jspb.Message {
  getBalance(): api_tinvest_common_pb.MoneyValue | undefined;
  setBalance(value?: api_tinvest_common_pb.MoneyValue): SandboxPayInResponse;
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
    balance?: api_tinvest_common_pb.MoneyValue.AsObject,
  }
}

