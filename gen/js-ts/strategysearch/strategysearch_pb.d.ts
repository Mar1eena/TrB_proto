import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as strategysearch_spec_pb from '../strategysearch/spec_pb'; // proto import: "strategysearch/spec.proto"
import * as strategysearch_backtest_pb from '../strategysearch/backtest_pb'; // proto import: "strategysearch/backtest.proto"
import * as strategysearch_search_pb from '../strategysearch/search_pb'; // proto import: "strategysearch/search.proto"


export class SubmitSearchRequest extends jspb.Message {
  getName(): string;
  setName(value: string): SubmitSearchRequest;

  getBaseSpec(): strategysearch_spec_pb.StrategySearchSpec | undefined;
  setBaseSpec(value?: strategysearch_spec_pb.StrategySearchSpec): SubmitSearchRequest;
  hasBaseSpec(): boolean;
  clearBaseSpec(): SubmitSearchRequest;

  getSearchSpaceList(): Array<strategysearch_search_pb.ParamRange>;
  setSearchSpaceList(value: Array<strategysearch_search_pb.ParamRange>): SubmitSearchRequest;
  clearSearchSpaceList(): SubmitSearchRequest;
  addSearchSpace(value?: strategysearch_search_pb.ParamRange, index?: number): strategysearch_search_pb.ParamRange;

  getStudy(): strategysearch_search_pb.StudyConfig | undefined;
  setStudy(value?: strategysearch_search_pb.StudyConfig): SubmitSearchRequest;
  hasStudy(): boolean;
  clearStudy(): SubmitSearchRequest;

  getConfig(): strategysearch_backtest_pb.BacktestConfig | undefined;
  setConfig(value?: strategysearch_backtest_pb.BacktestConfig): SubmitSearchRequest;
  hasConfig(): boolean;
  clearConfig(): SubmitSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitSearchRequest): SubmitSearchRequest.AsObject;
  static serializeBinaryToWriter(message: SubmitSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitSearchRequest;
  static deserializeBinaryFromReader(message: SubmitSearchRequest, reader: jspb.BinaryReader): SubmitSearchRequest;
}

export namespace SubmitSearchRequest {
  export type AsObject = {
    name: string,
    baseSpec?: strategysearch_spec_pb.StrategySearchSpec.AsObject,
    searchSpaceList: Array<strategysearch_search_pb.ParamRange.AsObject>,
    study?: strategysearch_search_pb.StudyConfig.AsObject,
    config?: strategysearch_backtest_pb.BacktestConfig.AsObject,
  }
}

export class SubmitSearchResponse extends jspb.Message {
  getSearchId(): string;
  setSearchId(value: string): SubmitSearchResponse;

  getStatus(): strategysearch_backtest_pb.RunStatus;
  setStatus(value: strategysearch_backtest_pb.RunStatus): SubmitSearchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitSearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitSearchResponse): SubmitSearchResponse.AsObject;
  static serializeBinaryToWriter(message: SubmitSearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitSearchResponse;
  static deserializeBinaryFromReader(message: SubmitSearchResponse, reader: jspb.BinaryReader): SubmitSearchResponse;
}

export namespace SubmitSearchResponse {
  export type AsObject = {
    searchId: string,
    status: strategysearch_backtest_pb.RunStatus,
  }
}

export class GetSearchProgressRequest extends jspb.Message {
  getSearchId(): string;
  setSearchId(value: string): GetSearchProgressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSearchProgressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSearchProgressRequest): GetSearchProgressRequest.AsObject;
  static serializeBinaryToWriter(message: GetSearchProgressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSearchProgressRequest;
  static deserializeBinaryFromReader(message: GetSearchProgressRequest, reader: jspb.BinaryReader): GetSearchProgressRequest;
}

export namespace GetSearchProgressRequest {
  export type AsObject = {
    searchId: string,
  }
}

export class GetBestTrialsRequest extends jspb.Message {
  getSearchId(): string;
  setSearchId(value: string): GetBestTrialsRequest;

  getTopK(): number;
  setTopK(value: number): GetBestTrialsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBestTrialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBestTrialsRequest): GetBestTrialsRequest.AsObject;
  static serializeBinaryToWriter(message: GetBestTrialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBestTrialsRequest;
  static deserializeBinaryFromReader(message: GetBestTrialsRequest, reader: jspb.BinaryReader): GetBestTrialsRequest;
}

export namespace GetBestTrialsRequest {
  export type AsObject = {
    searchId: string,
    topK: number,
  }
}

export class GetBestTrialsResponse extends jspb.Message {
  getItemsList(): Array<strategysearch_search_pb.Trial>;
  setItemsList(value: Array<strategysearch_search_pb.Trial>): GetBestTrialsResponse;
  clearItemsList(): GetBestTrialsResponse;
  addItems(value?: strategysearch_search_pb.Trial, index?: number): strategysearch_search_pb.Trial;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBestTrialsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBestTrialsResponse): GetBestTrialsResponse.AsObject;
  static serializeBinaryToWriter(message: GetBestTrialsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBestTrialsResponse;
  static deserializeBinaryFromReader(message: GetBestTrialsResponse, reader: jspb.BinaryReader): GetBestTrialsResponse;
}

export namespace GetBestTrialsResponse {
  export type AsObject = {
    itemsList: Array<strategysearch_search_pb.Trial.AsObject>,
  }
}

export class ListSearchesRequest extends jspb.Message {
  getStatus(): strategysearch_backtest_pb.RunStatus;
  setStatus(value: strategysearch_backtest_pb.RunStatus): ListSearchesRequest;

  getLimit(): number;
  setLimit(value: number): ListSearchesRequest;

  getOffset(): number;
  setOffset(value: number): ListSearchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSearchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSearchesRequest): ListSearchesRequest.AsObject;
  static serializeBinaryToWriter(message: ListSearchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSearchesRequest;
  static deserializeBinaryFromReader(message: ListSearchesRequest, reader: jspb.BinaryReader): ListSearchesRequest;
}

export namespace ListSearchesRequest {
  export type AsObject = {
    status: strategysearch_backtest_pb.RunStatus,
    limit: number,
    offset: number,
  }
}

export class ListSearchesResponse extends jspb.Message {
  getItemsList(): Array<strategysearch_search_pb.SearchRun>;
  setItemsList(value: Array<strategysearch_search_pb.SearchRun>): ListSearchesResponse;
  clearItemsList(): ListSearchesResponse;
  addItems(value?: strategysearch_search_pb.SearchRun, index?: number): strategysearch_search_pb.SearchRun;

  getTotal(): number;
  setTotal(value: number): ListSearchesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSearchesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSearchesResponse): ListSearchesResponse.AsObject;
  static serializeBinaryToWriter(message: ListSearchesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSearchesResponse;
  static deserializeBinaryFromReader(message: ListSearchesResponse, reader: jspb.BinaryReader): ListSearchesResponse;
}

export namespace ListSearchesResponse {
  export type AsObject = {
    itemsList: Array<strategysearch_search_pb.SearchRun.AsObject>,
    total: number,
  }
}

export class CancelSearchRequest extends jspb.Message {
  getSearchId(): string;
  setSearchId(value: string): CancelSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelSearchRequest): CancelSearchRequest.AsObject;
  static serializeBinaryToWriter(message: CancelSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelSearchRequest;
  static deserializeBinaryFromReader(message: CancelSearchRequest, reader: jspb.BinaryReader): CancelSearchRequest;
}

export namespace CancelSearchRequest {
  export type AsObject = {
    searchId: string,
  }
}

