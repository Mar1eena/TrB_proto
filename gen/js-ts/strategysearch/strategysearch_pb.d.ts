import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
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

  getTemplate(): strategysearch_search_pb.StrategyTemplate | undefined;
  setTemplate(value?: strategysearch_search_pb.StrategyTemplate): SubmitSearchRequest;
  hasTemplate(): boolean;
  clearTemplate(): SubmitSearchRequest;

  getMarketSpace(): strategysearch_search_pb.MarketSpace | undefined;
  setMarketSpace(value?: strategysearch_search_pb.MarketSpace): SubmitSearchRequest;
  hasMarketSpace(): boolean;
  clearMarketSpace(): SubmitSearchRequest;

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
    template?: strategysearch_search_pb.StrategyTemplate.AsObject,
    marketSpace?: strategysearch_search_pb.MarketSpace.AsObject,
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

export class ListSearchTrialsRequest extends jspb.Message {
  getSearchId(): string;
  setSearchId(value: string): ListSearchTrialsRequest;

  getLimit(): number;
  setLimit(value: number): ListSearchTrialsRequest;

  getOffset(): number;
  setOffset(value: number): ListSearchTrialsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSearchTrialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSearchTrialsRequest): ListSearchTrialsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSearchTrialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSearchTrialsRequest;
  static deserializeBinaryFromReader(message: ListSearchTrialsRequest, reader: jspb.BinaryReader): ListSearchTrialsRequest;
}

export namespace ListSearchTrialsRequest {
  export type AsObject = {
    searchId: string,
    limit: number,
    offset: number,
  }
}

export class ListSearchTrialsResponse extends jspb.Message {
  getItemsList(): Array<strategysearch_search_pb.Trial>;
  setItemsList(value: Array<strategysearch_search_pb.Trial>): ListSearchTrialsResponse;
  clearItemsList(): ListSearchTrialsResponse;
  addItems(value?: strategysearch_search_pb.Trial, index?: number): strategysearch_search_pb.Trial;

  getTotal(): number;
  setTotal(value: number): ListSearchTrialsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSearchTrialsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSearchTrialsResponse): ListSearchTrialsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSearchTrialsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSearchTrialsResponse;
  static deserializeBinaryFromReader(message: ListSearchTrialsResponse, reader: jspb.BinaryReader): ListSearchTrialsResponse;
}

export namespace ListSearchTrialsResponse {
  export type AsObject = {
    itemsList: Array<strategysearch_search_pb.Trial.AsObject>,
    total: number,
  }
}

export class GetParamImportancesRequest extends jspb.Message {
  getSearchId(): string;
  setSearchId(value: string): GetParamImportancesRequest;

  getMetric(): string;
  setMetric(value: string): GetParamImportancesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetParamImportancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetParamImportancesRequest): GetParamImportancesRequest.AsObject;
  static serializeBinaryToWriter(message: GetParamImportancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetParamImportancesRequest;
  static deserializeBinaryFromReader(message: GetParamImportancesRequest, reader: jspb.BinaryReader): GetParamImportancesRequest;
}

export namespace GetParamImportancesRequest {
  export type AsObject = {
    searchId: string,
    metric: string,
  }
}

export class GetParamImportancesResponse extends jspb.Message {
  getItemsList(): Array<strategysearch_search_pb.ParamImportance>;
  setItemsList(value: Array<strategysearch_search_pb.ParamImportance>): GetParamImportancesResponse;
  clearItemsList(): GetParamImportancesResponse;
  addItems(value?: strategysearch_search_pb.ParamImportance, index?: number): strategysearch_search_pb.ParamImportance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetParamImportancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetParamImportancesResponse): GetParamImportancesResponse.AsObject;
  static serializeBinaryToWriter(message: GetParamImportancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetParamImportancesResponse;
  static deserializeBinaryFromReader(message: GetParamImportancesResponse, reader: jspb.BinaryReader): GetParamImportancesResponse;
}

export namespace GetParamImportancesResponse {
  export type AsObject = {
    itemsList: Array<strategysearch_search_pb.ParamImportance.AsObject>,
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

export class SearchPreset extends jspb.Message {
  getId(): string;
  setId(value: string): SearchPreset;

  getName(): string;
  setName(value: string): SearchPreset;

  getBaseSpec(): strategysearch_spec_pb.StrategySearchSpec | undefined;
  setBaseSpec(value?: strategysearch_spec_pb.StrategySearchSpec): SearchPreset;
  hasBaseSpec(): boolean;
  clearBaseSpec(): SearchPreset;

  getSearchSpaceList(): Array<strategysearch_search_pb.ParamRange>;
  setSearchSpaceList(value: Array<strategysearch_search_pb.ParamRange>): SearchPreset;
  clearSearchSpaceList(): SearchPreset;
  addSearchSpace(value?: strategysearch_search_pb.ParamRange, index?: number): strategysearch_search_pb.ParamRange;

  getStudy(): strategysearch_search_pb.StudyConfig | undefined;
  setStudy(value?: strategysearch_search_pb.StudyConfig): SearchPreset;
  hasStudy(): boolean;
  clearStudy(): SearchPreset;

  getConfig(): strategysearch_backtest_pb.BacktestConfig | undefined;
  setConfig(value?: strategysearch_backtest_pb.BacktestConfig): SearchPreset;
  hasConfig(): boolean;
  clearConfig(): SearchPreset;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SearchPreset;
  hasCreatedAt(): boolean;
  clearCreatedAt(): SearchPreset;

  getTemplate(): strategysearch_search_pb.StrategyTemplate | undefined;
  setTemplate(value?: strategysearch_search_pb.StrategyTemplate): SearchPreset;
  hasTemplate(): boolean;
  clearTemplate(): SearchPreset;

  getMarketSpace(): strategysearch_search_pb.MarketSpace | undefined;
  setMarketSpace(value?: strategysearch_search_pb.MarketSpace): SearchPreset;
  hasMarketSpace(): boolean;
  clearMarketSpace(): SearchPreset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchPreset.AsObject;
  static toObject(includeInstance: boolean, msg: SearchPreset): SearchPreset.AsObject;
  static serializeBinaryToWriter(message: SearchPreset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchPreset;
  static deserializeBinaryFromReader(message: SearchPreset, reader: jspb.BinaryReader): SearchPreset;
}

export namespace SearchPreset {
  export type AsObject = {
    id: string,
    name: string,
    baseSpec?: strategysearch_spec_pb.StrategySearchSpec.AsObject,
    searchSpaceList: Array<strategysearch_search_pb.ParamRange.AsObject>,
    study?: strategysearch_search_pb.StudyConfig.AsObject,
    config?: strategysearch_backtest_pb.BacktestConfig.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    template?: strategysearch_search_pb.StrategyTemplate.AsObject,
    marketSpace?: strategysearch_search_pb.MarketSpace.AsObject,
  }
}

export class CreateSearchPresetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateSearchPresetRequest;

  getBaseSpec(): strategysearch_spec_pb.StrategySearchSpec | undefined;
  setBaseSpec(value?: strategysearch_spec_pb.StrategySearchSpec): CreateSearchPresetRequest;
  hasBaseSpec(): boolean;
  clearBaseSpec(): CreateSearchPresetRequest;

  getSearchSpaceList(): Array<strategysearch_search_pb.ParamRange>;
  setSearchSpaceList(value: Array<strategysearch_search_pb.ParamRange>): CreateSearchPresetRequest;
  clearSearchSpaceList(): CreateSearchPresetRequest;
  addSearchSpace(value?: strategysearch_search_pb.ParamRange, index?: number): strategysearch_search_pb.ParamRange;

  getStudy(): strategysearch_search_pb.StudyConfig | undefined;
  setStudy(value?: strategysearch_search_pb.StudyConfig): CreateSearchPresetRequest;
  hasStudy(): boolean;
  clearStudy(): CreateSearchPresetRequest;

  getConfig(): strategysearch_backtest_pb.BacktestConfig | undefined;
  setConfig(value?: strategysearch_backtest_pb.BacktestConfig): CreateSearchPresetRequest;
  hasConfig(): boolean;
  clearConfig(): CreateSearchPresetRequest;

  getTemplate(): strategysearch_search_pb.StrategyTemplate | undefined;
  setTemplate(value?: strategysearch_search_pb.StrategyTemplate): CreateSearchPresetRequest;
  hasTemplate(): boolean;
  clearTemplate(): CreateSearchPresetRequest;

  getMarketSpace(): strategysearch_search_pb.MarketSpace | undefined;
  setMarketSpace(value?: strategysearch_search_pb.MarketSpace): CreateSearchPresetRequest;
  hasMarketSpace(): boolean;
  clearMarketSpace(): CreateSearchPresetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSearchPresetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSearchPresetRequest): CreateSearchPresetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSearchPresetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSearchPresetRequest;
  static deserializeBinaryFromReader(message: CreateSearchPresetRequest, reader: jspb.BinaryReader): CreateSearchPresetRequest;
}

export namespace CreateSearchPresetRequest {
  export type AsObject = {
    name: string,
    baseSpec?: strategysearch_spec_pb.StrategySearchSpec.AsObject,
    searchSpaceList: Array<strategysearch_search_pb.ParamRange.AsObject>,
    study?: strategysearch_search_pb.StudyConfig.AsObject,
    config?: strategysearch_backtest_pb.BacktestConfig.AsObject,
    template?: strategysearch_search_pb.StrategyTemplate.AsObject,
    marketSpace?: strategysearch_search_pb.MarketSpace.AsObject,
  }
}

export class ListSearchPresetsRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListSearchPresetsRequest;

  getOffset(): number;
  setOffset(value: number): ListSearchPresetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSearchPresetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSearchPresetsRequest): ListSearchPresetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSearchPresetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSearchPresetsRequest;
  static deserializeBinaryFromReader(message: ListSearchPresetsRequest, reader: jspb.BinaryReader): ListSearchPresetsRequest;
}

export namespace ListSearchPresetsRequest {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class ListSearchPresetsResponse extends jspb.Message {
  getItemsList(): Array<SearchPreset>;
  setItemsList(value: Array<SearchPreset>): ListSearchPresetsResponse;
  clearItemsList(): ListSearchPresetsResponse;
  addItems(value?: SearchPreset, index?: number): SearchPreset;

  getTotal(): number;
  setTotal(value: number): ListSearchPresetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSearchPresetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSearchPresetsResponse): ListSearchPresetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSearchPresetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSearchPresetsResponse;
  static deserializeBinaryFromReader(message: ListSearchPresetsResponse, reader: jspb.BinaryReader): ListSearchPresetsResponse;
}

export namespace ListSearchPresetsResponse {
  export type AsObject = {
    itemsList: Array<SearchPreset.AsObject>,
    total: number,
  }
}

export class DeleteSearchPresetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteSearchPresetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSearchPresetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSearchPresetRequest): DeleteSearchPresetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSearchPresetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSearchPresetRequest;
  static deserializeBinaryFromReader(message: DeleteSearchPresetRequest, reader: jspb.BinaryReader): DeleteSearchPresetRequest;
}

export namespace DeleteSearchPresetRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteSearchPresetResponse extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteSearchPresetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSearchPresetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSearchPresetResponse): DeleteSearchPresetResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteSearchPresetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSearchPresetResponse;
  static deserializeBinaryFromReader(message: DeleteSearchPresetResponse, reader: jspb.BinaryReader): DeleteSearchPresetResponse;
}

export namespace DeleteSearchPresetResponse {
  export type AsObject = {
    id: string,
  }
}

