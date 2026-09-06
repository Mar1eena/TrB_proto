import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as strategy_spec_pb from '../strategy/spec_pb'; // proto import: "strategy/spec.proto"
import * as strategy_backtest_pb from '../strategy/backtest_pb'; // proto import: "strategy/backtest.proto"


export class IntRange extends jspb.Message {
  getMin(): number;
  setMin(value: number): IntRange;

  getMax(): number;
  setMax(value: number): IntRange;

  getStep(): number;
  setStep(value: number): IntRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntRange.AsObject;
  static toObject(includeInstance: boolean, msg: IntRange): IntRange.AsObject;
  static serializeBinaryToWriter(message: IntRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntRange;
  static deserializeBinaryFromReader(message: IntRange, reader: jspb.BinaryReader): IntRange;
}

export namespace IntRange {
  export type AsObject = {
    min: number,
    max: number,
    step: number,
  }
}

export class FloatRange extends jspb.Message {
  getMin(): number;
  setMin(value: number): FloatRange;

  getMax(): number;
  setMax(value: number): FloatRange;

  getStep(): number;
  setStep(value: number): FloatRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FloatRange.AsObject;
  static toObject(includeInstance: boolean, msg: FloatRange): FloatRange.AsObject;
  static serializeBinaryToWriter(message: FloatRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloatRange;
  static deserializeBinaryFromReader(message: FloatRange, reader: jspb.BinaryReader): FloatRange;
}

export namespace FloatRange {
  export type AsObject = {
    min: number,
    max: number,
    step: number,
  }
}

export class Choice extends jspb.Message {
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): Choice;
  clearValuesList(): Choice;
  addValues(value: number, index?: number): Choice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Choice.AsObject;
  static toObject(includeInstance: boolean, msg: Choice): Choice.AsObject;
  static serializeBinaryToWriter(message: Choice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Choice;
  static deserializeBinaryFromReader(message: Choice, reader: jspb.BinaryReader): Choice;
}

export namespace Choice {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class ParamRange extends jspb.Message {
  getPath(): string;
  setPath(value: string): ParamRange;

  getInts(): IntRange | undefined;
  setInts(value?: IntRange): ParamRange;
  hasInts(): boolean;
  clearInts(): ParamRange;

  getFloats(): FloatRange | undefined;
  setFloats(value?: FloatRange): ParamRange;
  hasFloats(): boolean;
  clearFloats(): ParamRange;

  getChoice(): Choice | undefined;
  setChoice(value?: Choice): ParamRange;
  hasChoice(): boolean;
  clearChoice(): ParamRange;

  getRangeCase(): ParamRange.RangeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParamRange.AsObject;
  static toObject(includeInstance: boolean, msg: ParamRange): ParamRange.AsObject;
  static serializeBinaryToWriter(message: ParamRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParamRange;
  static deserializeBinaryFromReader(message: ParamRange, reader: jspb.BinaryReader): ParamRange;
}

export namespace ParamRange {
  export type AsObject = {
    path: string,
    ints?: IntRange.AsObject,
    floats?: FloatRange.AsObject,
    choice?: Choice.AsObject,
  }

  export enum RangeCase { 
    RANGE_NOT_SET = 0,
    INTS = 2,
    FLOATS = 3,
    CHOICE = 4,
  }
}

export class StructureSpace extends jspb.Message {
  getIndicatorPaletteList(): Array<string>;
  setIndicatorPaletteList(value: Array<string>): StructureSpace;
  clearIndicatorPaletteList(): StructureSpace;
  addIndicatorPalette(value: string, index?: number): StructureSpace;

  getMaxConditions(): number;
  setMaxConditions(value: number): StructureSpace;

  getMaxDepth(): number;
  setMaxDepth(value: number): StructureSpace;

  getAllowedOpsList(): Array<strategy_spec_pb.CompareOp>;
  setAllowedOpsList(value: Array<strategy_spec_pb.CompareOp>): StructureSpace;
  clearAllowedOpsList(): StructureSpace;
  addAllowedOps(value: strategy_spec_pb.CompareOp, index?: number): StructureSpace;

  getMutateStructure(): boolean;
  setMutateStructure(value: boolean): StructureSpace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureSpace.AsObject;
  static toObject(includeInstance: boolean, msg: StructureSpace): StructureSpace.AsObject;
  static serializeBinaryToWriter(message: StructureSpace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureSpace;
  static deserializeBinaryFromReader(message: StructureSpace, reader: jspb.BinaryReader): StructureSpace;
}

export namespace StructureSpace {
  export type AsObject = {
    indicatorPaletteList: Array<string>,
    maxConditions: number,
    maxDepth: number,
    allowedOpsList: Array<strategy_spec_pb.CompareOp>,
    mutateStructure: boolean,
  }
}

export class Objective extends jspb.Message {
  getMetric(): string;
  setMetric(value: string): Objective;

  getMaximize(): boolean;
  setMaximize(value: boolean): Objective;

  getMinTrades(): number;
  setMinTrades(value: number): Objective;

  getMaxDrawdownLimit(): number;
  setMaxDrawdownLimit(value: number): Objective;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Objective.AsObject;
  static toObject(includeInstance: boolean, msg: Objective): Objective.AsObject;
  static serializeBinaryToWriter(message: Objective, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Objective;
  static deserializeBinaryFromReader(message: Objective, reader: jspb.BinaryReader): Objective;
}

export namespace Objective {
  export type AsObject = {
    metric: string,
    maximize: boolean,
    minTrades: number,
    maxDrawdownLimit: number,
  }
}

export class SearchBudget extends jspb.Message {
  getMaxEvaluations(): number;
  setMaxEvaluations(value: number): SearchBudget;

  getMaxSeconds(): number;
  setMaxSeconds(value: number): SearchBudget;

  getConcurrency(): number;
  setConcurrency(value: number): SearchBudget;

  getPopulation(): number;
  setPopulation(value: number): SearchBudget;

  getGenerations(): number;
  setGenerations(value: number): SearchBudget;

  getSeed(): number;
  setSeed(value: number): SearchBudget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchBudget.AsObject;
  static toObject(includeInstance: boolean, msg: SearchBudget): SearchBudget.AsObject;
  static serializeBinaryToWriter(message: SearchBudget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchBudget;
  static deserializeBinaryFromReader(message: SearchBudget, reader: jspb.BinaryReader): SearchBudget;
}

export namespace SearchBudget {
  export type AsObject = {
    maxEvaluations: number,
    maxSeconds: number,
    concurrency: number,
    population: number,
    generations: number,
    seed: number,
  }
}

export class SearchCandidate extends jspb.Message {
  getId(): string;
  setId(value: string): SearchCandidate;

  getSpec(): strategy_spec_pb.StrategySpec | undefined;
  setSpec(value?: strategy_spec_pb.StrategySpec): SearchCandidate;
  hasSpec(): boolean;
  clearSpec(): SearchCandidate;

  getSpecHash(): number;
  setSpecHash(value: number): SearchCandidate;

  getScore(): number;
  setScore(value: number): SearchCandidate;

  getMetrics(): strategy_backtest_pb.BacktestMetrics | undefined;
  setMetrics(value?: strategy_backtest_pb.BacktestMetrics): SearchCandidate;
  hasMetrics(): boolean;
  clearMetrics(): SearchCandidate;

  getRank(): number;
  setRank(value: number): SearchCandidate;

  getGeneration(): number;
  setGeneration(value: number): SearchCandidate;

  getBacktestRunId(): string;
  setBacktestRunId(value: string): SearchCandidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCandidate.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCandidate): SearchCandidate.AsObject;
  static serializeBinaryToWriter(message: SearchCandidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCandidate;
  static deserializeBinaryFromReader(message: SearchCandidate, reader: jspb.BinaryReader): SearchCandidate;
}

export namespace SearchCandidate {
  export type AsObject = {
    id: string,
    spec?: strategy_spec_pb.StrategySpec.AsObject,
    specHash: number,
    score: number,
    metrics?: strategy_backtest_pb.BacktestMetrics.AsObject,
    rank: number,
    generation: number,
    backtestRunId: string,
  }
}

export class SearchProgress extends jspb.Message {
  getStatus(): strategy_backtest_pb.RunStatus;
  setStatus(value: strategy_backtest_pb.RunStatus): SearchProgress;

  getEvaluated(): number;
  setEvaluated(value: number): SearchProgress;

  getTotal(): number;
  setTotal(value: number): SearchProgress;

  getBestScore(): number;
  setBestScore(value: number): SearchProgress;

  getBestCandidateId(): string;
  setBestCandidateId(value: string): SearchProgress;

  getCurrentGeneration(): number;
  setCurrentGeneration(value: number): SearchProgress;

  getError(): string;
  setError(value: string): SearchProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchProgress.AsObject;
  static toObject(includeInstance: boolean, msg: SearchProgress): SearchProgress.AsObject;
  static serializeBinaryToWriter(message: SearchProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchProgress;
  static deserializeBinaryFromReader(message: SearchProgress, reader: jspb.BinaryReader): SearchProgress;
}

export namespace SearchProgress {
  export type AsObject = {
    status: strategy_backtest_pb.RunStatus,
    evaluated: number,
    total: number,
    bestScore: number,
    bestCandidateId: string,
    currentGeneration: number,
    error: string,
  }
}

export class SearchRun extends jspb.Message {
  getSearchId(): string;
  setSearchId(value: string): SearchRun;

  getBaseStrategyId(): string;
  setBaseStrategyId(value: string): SearchRun;

  getName(): string;
  setName(value: string): SearchRun;

  getMethod(): SearchMethod;
  setMethod(value: SearchMethod): SearchRun;

  getSearchSpaceList(): Array<ParamRange>;
  setSearchSpaceList(value: Array<ParamRange>): SearchRun;
  clearSearchSpaceList(): SearchRun;
  addSearchSpace(value?: ParamRange, index?: number): ParamRange;

  getStructure(): StructureSpace | undefined;
  setStructure(value?: StructureSpace): SearchRun;
  hasStructure(): boolean;
  clearStructure(): SearchRun;

  getObjective(): Objective | undefined;
  setObjective(value?: Objective): SearchRun;
  hasObjective(): boolean;
  clearObjective(): SearchRun;

  getBudget(): SearchBudget | undefined;
  setBudget(value?: SearchBudget): SearchRun;
  hasBudget(): boolean;
  clearBudget(): SearchRun;

  getConfig(): strategy_backtest_pb.BacktestConfig | undefined;
  setConfig(value?: strategy_backtest_pb.BacktestConfig): SearchRun;
  hasConfig(): boolean;
  clearConfig(): SearchRun;

  getProgress(): SearchProgress | undefined;
  setProgress(value?: SearchProgress): SearchRun;
  hasProgress(): boolean;
  clearProgress(): SearchRun;

  getEngineVersion(): string;
  setEngineVersion(value: string): SearchRun;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SearchRun;
  hasCreatedAt(): boolean;
  clearCreatedAt(): SearchRun;

  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): SearchRun;
  hasStartedAt(): boolean;
  clearStartedAt(): SearchRun;

  getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): SearchRun;
  hasFinishedAt(): boolean;
  clearFinishedAt(): SearchRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRun.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRun): SearchRun.AsObject;
  static serializeBinaryToWriter(message: SearchRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRun;
  static deserializeBinaryFromReader(message: SearchRun, reader: jspb.BinaryReader): SearchRun;
}

export namespace SearchRun {
  export type AsObject = {
    searchId: string,
    baseStrategyId: string,
    name: string,
    method: SearchMethod,
    searchSpaceList: Array<ParamRange.AsObject>,
    structure?: StructureSpace.AsObject,
    objective?: Objective.AsObject,
    budget?: SearchBudget.AsObject,
    config?: strategy_backtest_pb.BacktestConfig.AsObject,
    progress?: SearchProgress.AsObject,
    engineVersion: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SearchTask extends jspb.Message {
  getSearchId(): string;
  setSearchId(value: string): SearchTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTask.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTask): SearchTask.AsObject;
  static serializeBinaryToWriter(message: SearchTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTask;
  static deserializeBinaryFromReader(message: SearchTask, reader: jspb.BinaryReader): SearchTask;
}

export namespace SearchTask {
  export type AsObject = {
    searchId: string,
  }
}

export enum SearchMethod { 
  SEARCH_METHOD_UNSPECIFIED = 0,
  SEARCH_METHOD_GENETIC = 1,
}
