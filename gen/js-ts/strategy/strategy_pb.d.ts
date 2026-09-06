import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as strategy_spec_pb from '../strategy/spec_pb'; // proto import: "strategy/spec.proto"
import * as strategy_backtest_pb from '../strategy/backtest_pb'; // proto import: "strategy/backtest.proto"
import * as strategy_search_pb from '../strategy/search_pb'; // proto import: "strategy/search.proto"


export class Strategy extends jspb.Message {
  getId(): string;
  setId(value: string): Strategy;

  getName(): string;
  setName(value: string): Strategy;

  getDescription(): string;
  setDescription(value: string): Strategy;

  getSpec(): strategy_spec_pb.StrategySpec | undefined;
  setSpec(value?: strategy_spec_pb.StrategySpec): Strategy;
  hasSpec(): boolean;
  clearSpec(): Strategy;

  getSpecHash(): number;
  setSpecHash(value: number): Strategy;

  getSpecVersion(): number;
  setSpecVersion(value: number): Strategy;

  getArchived(): boolean;
  setArchived(value: boolean): Strategy;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Strategy;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Strategy;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Strategy;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Strategy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Strategy.AsObject;
  static toObject(includeInstance: boolean, msg: Strategy): Strategy.AsObject;
  static serializeBinaryToWriter(message: Strategy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Strategy;
  static deserializeBinaryFromReader(message: Strategy, reader: jspb.BinaryReader): Strategy;
}

export namespace Strategy {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    spec?: strategy_spec_pb.StrategySpec.AsObject,
    specHash: number,
    specVersion: number,
    archived: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateStrategyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateStrategyRequest;

  getDescription(): string;
  setDescription(value: string): CreateStrategyRequest;

  getSpec(): strategy_spec_pb.StrategySpec | undefined;
  setSpec(value?: strategy_spec_pb.StrategySpec): CreateStrategyRequest;
  hasSpec(): boolean;
  clearSpec(): CreateStrategyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStrategyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStrategyRequest): CreateStrategyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateStrategyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStrategyRequest;
  static deserializeBinaryFromReader(message: CreateStrategyRequest, reader: jspb.BinaryReader): CreateStrategyRequest;
}

export namespace CreateStrategyRequest {
  export type AsObject = {
    name: string,
    description: string,
    spec?: strategy_spec_pb.StrategySpec.AsObject,
  }
}

export class GetStrategyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetStrategyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStrategyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStrategyRequest): GetStrategyRequest.AsObject;
  static serializeBinaryToWriter(message: GetStrategyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStrategyRequest;
  static deserializeBinaryFromReader(message: GetStrategyRequest, reader: jspb.BinaryReader): GetStrategyRequest;
}

export namespace GetStrategyRequest {
  export type AsObject = {
    id: string,
  }
}

export class ListStrategiesRequest extends jspb.Message {
  getQ(): string;
  setQ(value: string): ListStrategiesRequest;

  getIncludeArchived(): boolean;
  setIncludeArchived(value: boolean): ListStrategiesRequest;

  getLimit(): number;
  setLimit(value: number): ListStrategiesRequest;

  getOffset(): number;
  setOffset(value: number): ListStrategiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStrategiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStrategiesRequest): ListStrategiesRequest.AsObject;
  static serializeBinaryToWriter(message: ListStrategiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStrategiesRequest;
  static deserializeBinaryFromReader(message: ListStrategiesRequest, reader: jspb.BinaryReader): ListStrategiesRequest;
}

export namespace ListStrategiesRequest {
  export type AsObject = {
    q: string,
    includeArchived: boolean,
    limit: number,
    offset: number,
  }
}

export class ListStrategiesResponse extends jspb.Message {
  getItemsList(): Array<Strategy>;
  setItemsList(value: Array<Strategy>): ListStrategiesResponse;
  clearItemsList(): ListStrategiesResponse;
  addItems(value?: Strategy, index?: number): Strategy;

  getTotal(): number;
  setTotal(value: number): ListStrategiesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStrategiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStrategiesResponse): ListStrategiesResponse.AsObject;
  static serializeBinaryToWriter(message: ListStrategiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStrategiesResponse;
  static deserializeBinaryFromReader(message: ListStrategiesResponse, reader: jspb.BinaryReader): ListStrategiesResponse;
}

export namespace ListStrategiesResponse {
  export type AsObject = {
    itemsList: Array<Strategy.AsObject>,
    total: number,
  }
}

export class UpdateStrategyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateStrategyRequest;

  getName(): string;
  setName(value: string): UpdateStrategyRequest;

  getDescription(): string;
  setDescription(value: string): UpdateStrategyRequest;

  getSpec(): strategy_spec_pb.StrategySpec | undefined;
  setSpec(value?: strategy_spec_pb.StrategySpec): UpdateStrategyRequest;
  hasSpec(): boolean;
  clearSpec(): UpdateStrategyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStrategyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStrategyRequest): UpdateStrategyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateStrategyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStrategyRequest;
  static deserializeBinaryFromReader(message: UpdateStrategyRequest, reader: jspb.BinaryReader): UpdateStrategyRequest;
}

export namespace UpdateStrategyRequest {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    spec?: strategy_spec_pb.StrategySpec.AsObject,
  }
}

export class DeleteStrategyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteStrategyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStrategyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStrategyRequest): DeleteStrategyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteStrategyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStrategyRequest;
  static deserializeBinaryFromReader(message: DeleteStrategyRequest, reader: jspb.BinaryReader): DeleteStrategyRequest;
}

export namespace DeleteStrategyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteStrategyResponse extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteStrategyResponse;

  getArchived(): boolean;
  setArchived(value: boolean): DeleteStrategyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStrategyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStrategyResponse): DeleteStrategyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteStrategyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStrategyResponse;
  static deserializeBinaryFromReader(message: DeleteStrategyResponse, reader: jspb.BinaryReader): DeleteStrategyResponse;
}

export namespace DeleteStrategyResponse {
  export type AsObject = {
    id: string,
    archived: boolean,
  }
}

export class ValidationIssue extends jspb.Message {
  getPath(): string;
  setPath(value: string): ValidationIssue;

  getMessage(): string;
  setMessage(value: string): ValidationIssue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationIssue.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationIssue): ValidationIssue.AsObject;
  static serializeBinaryToWriter(message: ValidationIssue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationIssue;
  static deserializeBinaryFromReader(message: ValidationIssue, reader: jspb.BinaryReader): ValidationIssue;
}

export namespace ValidationIssue {
  export type AsObject = {
    path: string,
    message: string,
  }
}

export class ValidateStrategyRequest extends jspb.Message {
  getSpec(): strategy_spec_pb.StrategySpec | undefined;
  setSpec(value?: strategy_spec_pb.StrategySpec): ValidateStrategyRequest;
  hasSpec(): boolean;
  clearSpec(): ValidateStrategyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateStrategyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateStrategyRequest): ValidateStrategyRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateStrategyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateStrategyRequest;
  static deserializeBinaryFromReader(message: ValidateStrategyRequest, reader: jspb.BinaryReader): ValidateStrategyRequest;
}

export namespace ValidateStrategyRequest {
  export type AsObject = {
    spec?: strategy_spec_pb.StrategySpec.AsObject,
  }
}

export class ValidateStrategyResponse extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): ValidateStrategyResponse;

  getIssuesList(): Array<ValidationIssue>;
  setIssuesList(value: Array<ValidationIssue>): ValidateStrategyResponse;
  clearIssuesList(): ValidateStrategyResponse;
  addIssues(value?: ValidationIssue, index?: number): ValidationIssue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateStrategyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateStrategyResponse): ValidateStrategyResponse.AsObject;
  static serializeBinaryToWriter(message: ValidateStrategyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateStrategyResponse;
  static deserializeBinaryFromReader(message: ValidateStrategyResponse, reader: jspb.BinaryReader): ValidateStrategyResponse;
}

export namespace ValidateStrategyResponse {
  export type AsObject = {
    ok: boolean,
    issuesList: Array<ValidationIssue.AsObject>,
  }
}

export class SubmitBacktestRequest extends jspb.Message {
  getStrategyId(): string;
  setStrategyId(value: string): SubmitBacktestRequest;

  getSpec(): strategy_spec_pb.StrategySpec | undefined;
  setSpec(value?: strategy_spec_pb.StrategySpec): SubmitBacktestRequest;
  hasSpec(): boolean;
  clearSpec(): SubmitBacktestRequest;

  getConfig(): strategy_backtest_pb.BacktestConfig | undefined;
  setConfig(value?: strategy_backtest_pb.BacktestConfig): SubmitBacktestRequest;
  hasConfig(): boolean;
  clearConfig(): SubmitBacktestRequest;

  getForce(): boolean;
  setForce(value: boolean): SubmitBacktestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitBacktestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitBacktestRequest): SubmitBacktestRequest.AsObject;
  static serializeBinaryToWriter(message: SubmitBacktestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitBacktestRequest;
  static deserializeBinaryFromReader(message: SubmitBacktestRequest, reader: jspb.BinaryReader): SubmitBacktestRequest;
}

export namespace SubmitBacktestRequest {
  export type AsObject = {
    strategyId: string,
    spec?: strategy_spec_pb.StrategySpec.AsObject,
    config?: strategy_backtest_pb.BacktestConfig.AsObject,
    force: boolean,
  }
}

export class SubmitBacktestResponse extends jspb.Message {
  getRunId(): string;
  setRunId(value: string): SubmitBacktestResponse;

  getStatus(): strategy_backtest_pb.RunStatus;
  setStatus(value: strategy_backtest_pb.RunStatus): SubmitBacktestResponse;

  getReused(): boolean;
  setReused(value: boolean): SubmitBacktestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitBacktestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitBacktestResponse): SubmitBacktestResponse.AsObject;
  static serializeBinaryToWriter(message: SubmitBacktestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitBacktestResponse;
  static deserializeBinaryFromReader(message: SubmitBacktestResponse, reader: jspb.BinaryReader): SubmitBacktestResponse;
}

export namespace SubmitBacktestResponse {
  export type AsObject = {
    runId: string,
    status: strategy_backtest_pb.RunStatus,
    reused: boolean,
  }
}

export class GetBacktestStatusRequest extends jspb.Message {
  getRunId(): string;
  setRunId(value: string): GetBacktestStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBacktestStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBacktestStatusRequest): GetBacktestStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetBacktestStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBacktestStatusRequest;
  static deserializeBinaryFromReader(message: GetBacktestStatusRequest, reader: jspb.BinaryReader): GetBacktestStatusRequest;
}

export namespace GetBacktestStatusRequest {
  export type AsObject = {
    runId: string,
  }
}

export class GetBacktestResultRequest extends jspb.Message {
  getRunId(): string;
  setRunId(value: string): GetBacktestResultRequest;

  getIncludeEquity(): boolean;
  setIncludeEquity(value: boolean): GetBacktestResultRequest;

  getIncludeTrades(): boolean;
  setIncludeTrades(value: boolean): GetBacktestResultRequest;

  getEquityMaxPoints(): number;
  setEquityMaxPoints(value: number): GetBacktestResultRequest;

  getIncludeIndicators(): boolean;
  setIncludeIndicators(value: boolean): GetBacktestResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBacktestResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBacktestResultRequest): GetBacktestResultRequest.AsObject;
  static serializeBinaryToWriter(message: GetBacktestResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBacktestResultRequest;
  static deserializeBinaryFromReader(message: GetBacktestResultRequest, reader: jspb.BinaryReader): GetBacktestResultRequest;
}

export namespace GetBacktestResultRequest {
  export type AsObject = {
    runId: string,
    includeEquity: boolean,
    includeTrades: boolean,
    equityMaxPoints: number,
    includeIndicators: boolean,
  }
}

export class GetBacktestResultResponse extends jspb.Message {
  getRun(): strategy_backtest_pb.BacktestRun | undefined;
  setRun(value?: strategy_backtest_pb.BacktestRun): GetBacktestResultResponse;
  hasRun(): boolean;
  clearRun(): GetBacktestResultResponse;

  getMetrics(): strategy_backtest_pb.BacktestMetrics | undefined;
  setMetrics(value?: strategy_backtest_pb.BacktestMetrics): GetBacktestResultResponse;
  hasMetrics(): boolean;
  clearMetrics(): GetBacktestResultResponse;

  getEquityList(): Array<strategy_backtest_pb.EquityPoint>;
  setEquityList(value: Array<strategy_backtest_pb.EquityPoint>): GetBacktestResultResponse;
  clearEquityList(): GetBacktestResultResponse;
  addEquity(value?: strategy_backtest_pb.EquityPoint, index?: number): strategy_backtest_pb.EquityPoint;

  getTradesList(): Array<strategy_backtest_pb.TradeRecord>;
  setTradesList(value: Array<strategy_backtest_pb.TradeRecord>): GetBacktestResultResponse;
  clearTradesList(): GetBacktestResultResponse;
  addTrades(value?: strategy_backtest_pb.TradeRecord, index?: number): strategy_backtest_pb.TradeRecord;

  getIndicatorsList(): Array<strategy_backtest_pb.BacktestIndicatorSeries>;
  setIndicatorsList(value: Array<strategy_backtest_pb.BacktestIndicatorSeries>): GetBacktestResultResponse;
  clearIndicatorsList(): GetBacktestResultResponse;
  addIndicators(value?: strategy_backtest_pb.BacktestIndicatorSeries, index?: number): strategy_backtest_pb.BacktestIndicatorSeries;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBacktestResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBacktestResultResponse): GetBacktestResultResponse.AsObject;
  static serializeBinaryToWriter(message: GetBacktestResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBacktestResultResponse;
  static deserializeBinaryFromReader(message: GetBacktestResultResponse, reader: jspb.BinaryReader): GetBacktestResultResponse;
}

export namespace GetBacktestResultResponse {
  export type AsObject = {
    run?: strategy_backtest_pb.BacktestRun.AsObject,
    metrics?: strategy_backtest_pb.BacktestMetrics.AsObject,
    equityList: Array<strategy_backtest_pb.EquityPoint.AsObject>,
    tradesList: Array<strategy_backtest_pb.TradeRecord.AsObject>,
    indicatorsList: Array<strategy_backtest_pb.BacktestIndicatorSeries.AsObject>,
  }
}

export class ListBacktestRunsRequest extends jspb.Message {
  getStrategyId(): string;
  setStrategyId(value: string): ListBacktestRunsRequest;

  getUid(): string;
  setUid(value: string): ListBacktestRunsRequest;

  getStatus(): strategy_backtest_pb.RunStatus;
  setStatus(value: strategy_backtest_pb.RunStatus): ListBacktestRunsRequest;

  getSearchRunId(): string;
  setSearchRunId(value: string): ListBacktestRunsRequest;

  getSortBy(): string;
  setSortBy(value: string): ListBacktestRunsRequest;

  getSortDesc(): boolean;
  setSortDesc(value: boolean): ListBacktestRunsRequest;

  getLimit(): number;
  setLimit(value: number): ListBacktestRunsRequest;

  getOffset(): number;
  setOffset(value: number): ListBacktestRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBacktestRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBacktestRunsRequest): ListBacktestRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBacktestRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBacktestRunsRequest;
  static deserializeBinaryFromReader(message: ListBacktestRunsRequest, reader: jspb.BinaryReader): ListBacktestRunsRequest;
}

export namespace ListBacktestRunsRequest {
  export type AsObject = {
    strategyId: string,
    uid: string,
    status: strategy_backtest_pb.RunStatus,
    searchRunId: string,
    sortBy: string,
    sortDesc: boolean,
    limit: number,
    offset: number,
  }
}

export class BacktestRunListItem extends jspb.Message {
  getRun(): strategy_backtest_pb.BacktestRun | undefined;
  setRun(value?: strategy_backtest_pb.BacktestRun): BacktestRunListItem;
  hasRun(): boolean;
  clearRun(): BacktestRunListItem;

  getMetrics(): strategy_backtest_pb.BacktestMetrics | undefined;
  setMetrics(value?: strategy_backtest_pb.BacktestMetrics): BacktestRunListItem;
  hasMetrics(): boolean;
  clearMetrics(): BacktestRunListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BacktestRunListItem.AsObject;
  static toObject(includeInstance: boolean, msg: BacktestRunListItem): BacktestRunListItem.AsObject;
  static serializeBinaryToWriter(message: BacktestRunListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BacktestRunListItem;
  static deserializeBinaryFromReader(message: BacktestRunListItem, reader: jspb.BinaryReader): BacktestRunListItem;
}

export namespace BacktestRunListItem {
  export type AsObject = {
    run?: strategy_backtest_pb.BacktestRun.AsObject,
    metrics?: strategy_backtest_pb.BacktestMetrics.AsObject,
  }
}

export class ListBacktestRunsResponse extends jspb.Message {
  getItemsList(): Array<BacktestRunListItem>;
  setItemsList(value: Array<BacktestRunListItem>): ListBacktestRunsResponse;
  clearItemsList(): ListBacktestRunsResponse;
  addItems(value?: BacktestRunListItem, index?: number): BacktestRunListItem;

  getTotal(): number;
  setTotal(value: number): ListBacktestRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBacktestRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBacktestRunsResponse): ListBacktestRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBacktestRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBacktestRunsResponse;
  static deserializeBinaryFromReader(message: ListBacktestRunsResponse, reader: jspb.BinaryReader): ListBacktestRunsResponse;
}

export namespace ListBacktestRunsResponse {
  export type AsObject = {
    itemsList: Array<BacktestRunListItem.AsObject>,
    total: number,
  }
}

export class CancelBacktestRequest extends jspb.Message {
  getRunId(): string;
  setRunId(value: string): CancelBacktestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelBacktestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelBacktestRequest): CancelBacktestRequest.AsObject;
  static serializeBinaryToWriter(message: CancelBacktestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelBacktestRequest;
  static deserializeBinaryFromReader(message: CancelBacktestRequest, reader: jspb.BinaryReader): CancelBacktestRequest;
}

export namespace CancelBacktestRequest {
  export type AsObject = {
    runId: string,
  }
}

export class SubmitSearchRequest extends jspb.Message {
  getBaseStrategyId(): string;
  setBaseStrategyId(value: string): SubmitSearchRequest;

  getBaseSpec(): strategy_spec_pb.StrategySpec | undefined;
  setBaseSpec(value?: strategy_spec_pb.StrategySpec): SubmitSearchRequest;
  hasBaseSpec(): boolean;
  clearBaseSpec(): SubmitSearchRequest;

  getName(): string;
  setName(value: string): SubmitSearchRequest;

  getMethod(): strategy_search_pb.SearchMethod;
  setMethod(value: strategy_search_pb.SearchMethod): SubmitSearchRequest;

  getSearchSpaceList(): Array<strategy_search_pb.ParamRange>;
  setSearchSpaceList(value: Array<strategy_search_pb.ParamRange>): SubmitSearchRequest;
  clearSearchSpaceList(): SubmitSearchRequest;
  addSearchSpace(value?: strategy_search_pb.ParamRange, index?: number): strategy_search_pb.ParamRange;

  getStructure(): strategy_search_pb.StructureSpace | undefined;
  setStructure(value?: strategy_search_pb.StructureSpace): SubmitSearchRequest;
  hasStructure(): boolean;
  clearStructure(): SubmitSearchRequest;

  getObjective(): strategy_search_pb.Objective | undefined;
  setObjective(value?: strategy_search_pb.Objective): SubmitSearchRequest;
  hasObjective(): boolean;
  clearObjective(): SubmitSearchRequest;

  getBudget(): strategy_search_pb.SearchBudget | undefined;
  setBudget(value?: strategy_search_pb.SearchBudget): SubmitSearchRequest;
  hasBudget(): boolean;
  clearBudget(): SubmitSearchRequest;

  getConfig(): strategy_backtest_pb.BacktestConfig | undefined;
  setConfig(value?: strategy_backtest_pb.BacktestConfig): SubmitSearchRequest;
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
    baseStrategyId: string,
    baseSpec?: strategy_spec_pb.StrategySpec.AsObject,
    name: string,
    method: strategy_search_pb.SearchMethod,
    searchSpaceList: Array<strategy_search_pb.ParamRange.AsObject>,
    structure?: strategy_search_pb.StructureSpace.AsObject,
    objective?: strategy_search_pb.Objective.AsObject,
    budget?: strategy_search_pb.SearchBudget.AsObject,
    config?: strategy_backtest_pb.BacktestConfig.AsObject,
  }
}

export class SubmitSearchResponse extends jspb.Message {
  getSearchId(): string;
  setSearchId(value: string): SubmitSearchResponse;

  getStatus(): strategy_backtest_pb.RunStatus;
  setStatus(value: strategy_backtest_pb.RunStatus): SubmitSearchResponse;

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
    status: strategy_backtest_pb.RunStatus,
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

export class GetBestStrategiesRequest extends jspb.Message {
  getSearchId(): string;
  setSearchId(value: string): GetBestStrategiesRequest;

  getTopK(): number;
  setTopK(value: number): GetBestStrategiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBestStrategiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBestStrategiesRequest): GetBestStrategiesRequest.AsObject;
  static serializeBinaryToWriter(message: GetBestStrategiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBestStrategiesRequest;
  static deserializeBinaryFromReader(message: GetBestStrategiesRequest, reader: jspb.BinaryReader): GetBestStrategiesRequest;
}

export namespace GetBestStrategiesRequest {
  export type AsObject = {
    searchId: string,
    topK: number,
  }
}

export class GetBestStrategiesResponse extends jspb.Message {
  getItemsList(): Array<strategy_search_pb.SearchCandidate>;
  setItemsList(value: Array<strategy_search_pb.SearchCandidate>): GetBestStrategiesResponse;
  clearItemsList(): GetBestStrategiesResponse;
  addItems(value?: strategy_search_pb.SearchCandidate, index?: number): strategy_search_pb.SearchCandidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBestStrategiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBestStrategiesResponse): GetBestStrategiesResponse.AsObject;
  static serializeBinaryToWriter(message: GetBestStrategiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBestStrategiesResponse;
  static deserializeBinaryFromReader(message: GetBestStrategiesResponse, reader: jspb.BinaryReader): GetBestStrategiesResponse;
}

export namespace GetBestStrategiesResponse {
  export type AsObject = {
    itemsList: Array<strategy_search_pb.SearchCandidate.AsObject>,
  }
}

export class ListSearchesRequest extends jspb.Message {
  getStatus(): strategy_backtest_pb.RunStatus;
  setStatus(value: strategy_backtest_pb.RunStatus): ListSearchesRequest;

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
    status: strategy_backtest_pb.RunStatus,
    limit: number,
    offset: number,
  }
}

export class ListSearchesResponse extends jspb.Message {
  getItemsList(): Array<strategy_search_pb.SearchRun>;
  setItemsList(value: Array<strategy_search_pb.SearchRun>): ListSearchesResponse;
  clearItemsList(): ListSearchesResponse;
  addItems(value?: strategy_search_pb.SearchRun, index?: number): strategy_search_pb.SearchRun;

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
    itemsList: Array<strategy_search_pb.SearchRun.AsObject>,
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

