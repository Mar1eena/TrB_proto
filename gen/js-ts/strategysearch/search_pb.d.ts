import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as strategysearch_spec_pb from '../strategysearch/spec_pb'; // proto import: "strategysearch/spec.proto"
import * as strategysearch_backtest_pb from '../strategysearch/backtest_pb'; // proto import: "strategysearch/backtest.proto"


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

export class LogFloatRange extends jspb.Message {
  getMin(): number;
  setMin(value: number): LogFloatRange;

  getMax(): number;
  setMax(value: number): LogFloatRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogFloatRange.AsObject;
  static toObject(includeInstance: boolean, msg: LogFloatRange): LogFloatRange.AsObject;
  static serializeBinaryToWriter(message: LogFloatRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogFloatRange;
  static deserializeBinaryFromReader(message: LogFloatRange, reader: jspb.BinaryReader): LogFloatRange;
}

export namespace LogFloatRange {
  export type AsObject = {
    min: number,
    max: number,
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

export class CategoricalChoice extends jspb.Message {
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): CategoricalChoice;
  clearValuesList(): CategoricalChoice;
  addValues(value: string, index?: number): CategoricalChoice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoricalChoice.AsObject;
  static toObject(includeInstance: boolean, msg: CategoricalChoice): CategoricalChoice.AsObject;
  static serializeBinaryToWriter(message: CategoricalChoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoricalChoice;
  static deserializeBinaryFromReader(message: CategoricalChoice, reader: jspb.BinaryReader): CategoricalChoice;
}

export namespace CategoricalChoice {
  export type AsObject = {
    valuesList: Array<string>,
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

  getLogFloats(): LogFloatRange | undefined;
  setLogFloats(value?: LogFloatRange): ParamRange;
  hasLogFloats(): boolean;
  clearLogFloats(): ParamRange;

  getChoice(): Choice | undefined;
  setChoice(value?: Choice): ParamRange;
  hasChoice(): boolean;
  clearChoice(): ParamRange;

  getCategorical(): CategoricalChoice | undefined;
  setCategorical(value?: CategoricalChoice): ParamRange;
  hasCategorical(): boolean;
  clearCategorical(): ParamRange;

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
    logFloats?: LogFloatRange.AsObject,
    choice?: Choice.AsObject,
    categorical?: CategoricalChoice.AsObject,
  }

  export enum RangeCase { 
    RANGE_NOT_SET = 0,
    INTS = 2,
    FLOATS = 3,
    LOG_FLOATS = 4,
    CHOICE = 5,
    CATEGORICAL = 6,
  }
}

export class SeedTrial extends jspb.Message {
  getParamsMap(): jspb.Map<string, number>;
  clearParamsMap(): SeedTrial;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeedTrial.AsObject;
  static toObject(includeInstance: boolean, msg: SeedTrial): SeedTrial.AsObject;
  static serializeBinaryToWriter(message: SeedTrial, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeedTrial;
  static deserializeBinaryFromReader(message: SeedTrial, reader: jspb.BinaryReader): SeedTrial;
}

export namespace SeedTrial {
  export type AsObject = {
    paramsMap: Array<[string, number]>,
  }
}

export class TpeSamplerParams extends jspb.Message {
  getNStartupTrials(): number;
  setNStartupTrials(value: number): TpeSamplerParams;

  getNEiCandidates(): number;
  setNEiCandidates(value: number): TpeSamplerParams;

  getMultivariate(): boolean;
  setMultivariate(value: boolean): TpeSamplerParams;

  getGroup(): boolean;
  setGroup(value: boolean): TpeSamplerParams;

  getConstantLiar(): boolean;
  setConstantLiar(value: boolean): TpeSamplerParams;

  getPriorWeight(): number;
  setPriorWeight(value: number): TpeSamplerParams;

  getSeed(): number;
  setSeed(value: number): TpeSamplerParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TpeSamplerParams.AsObject;
  static toObject(includeInstance: boolean, msg: TpeSamplerParams): TpeSamplerParams.AsObject;
  static serializeBinaryToWriter(message: TpeSamplerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TpeSamplerParams;
  static deserializeBinaryFromReader(message: TpeSamplerParams, reader: jspb.BinaryReader): TpeSamplerParams;
}

export namespace TpeSamplerParams {
  export type AsObject = {
    nStartupTrials: number,
    nEiCandidates: number,
    multivariate: boolean,
    group: boolean,
    constantLiar: boolean,
    priorWeight: number,
    seed: number,
  }
}

export class CmaEsSamplerParams extends jspb.Message {
  getNStartupTrials(): number;
  setNStartupTrials(value: number): CmaEsSamplerParams;

  getSigma0(): number;
  setSigma0(value: number): CmaEsSamplerParams;

  getWarnIndependentSampling(): boolean;
  setWarnIndependentSampling(value: boolean): CmaEsSamplerParams;

  getRestartStrategyIpop(): boolean;
  setRestartStrategyIpop(value: boolean): CmaEsSamplerParams;

  getUseSeparableCma(): boolean;
  setUseSeparableCma(value: boolean): CmaEsSamplerParams;

  getSeed(): number;
  setSeed(value: number): CmaEsSamplerParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CmaEsSamplerParams.AsObject;
  static toObject(includeInstance: boolean, msg: CmaEsSamplerParams): CmaEsSamplerParams.AsObject;
  static serializeBinaryToWriter(message: CmaEsSamplerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CmaEsSamplerParams;
  static deserializeBinaryFromReader(message: CmaEsSamplerParams, reader: jspb.BinaryReader): CmaEsSamplerParams;
}

export namespace CmaEsSamplerParams {
  export type AsObject = {
    nStartupTrials: number,
    sigma0: number,
    warnIndependentSampling: boolean,
    restartStrategyIpop: boolean,
    useSeparableCma: boolean,
    seed: number,
  }
}

export class RandomSamplerParams extends jspb.Message {
  getSeed(): number;
  setSeed(value: number): RandomSamplerParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RandomSamplerParams.AsObject;
  static toObject(includeInstance: boolean, msg: RandomSamplerParams): RandomSamplerParams.AsObject;
  static serializeBinaryToWriter(message: RandomSamplerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RandomSamplerParams;
  static deserializeBinaryFromReader(message: RandomSamplerParams, reader: jspb.BinaryReader): RandomSamplerParams;
}

export namespace RandomSamplerParams {
  export type AsObject = {
    seed: number,
  }
}

export class GridSamplerParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GridSamplerParams.AsObject;
  static toObject(includeInstance: boolean, msg: GridSamplerParams): GridSamplerParams.AsObject;
  static serializeBinaryToWriter(message: GridSamplerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GridSamplerParams;
  static deserializeBinaryFromReader(message: GridSamplerParams, reader: jspb.BinaryReader): GridSamplerParams;
}

export namespace GridSamplerParams {
  export type AsObject = {
  }
}

export class NsgaIiSamplerParams extends jspb.Message {
  getPopulationSize(): number;
  setPopulationSize(value: number): NsgaIiSamplerParams;

  getMutationProb(): number;
  setMutationProb(value: number): NsgaIiSamplerParams;

  getCrossoverProb(): number;
  setCrossoverProb(value: number): NsgaIiSamplerParams;

  getSeed(): number;
  setSeed(value: number): NsgaIiSamplerParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NsgaIiSamplerParams.AsObject;
  static toObject(includeInstance: boolean, msg: NsgaIiSamplerParams): NsgaIiSamplerParams.AsObject;
  static serializeBinaryToWriter(message: NsgaIiSamplerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NsgaIiSamplerParams;
  static deserializeBinaryFromReader(message: NsgaIiSamplerParams, reader: jspb.BinaryReader): NsgaIiSamplerParams;
}

export namespace NsgaIiSamplerParams {
  export type AsObject = {
    populationSize: number,
    mutationProb: number,
    crossoverProb: number,
    seed: number,
  }
}

export class QmcSamplerParams extends jspb.Message {
  getScramble(): boolean;
  setScramble(value: boolean): QmcSamplerParams;

  getSeed(): number;
  setSeed(value: number): QmcSamplerParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QmcSamplerParams.AsObject;
  static toObject(includeInstance: boolean, msg: QmcSamplerParams): QmcSamplerParams.AsObject;
  static serializeBinaryToWriter(message: QmcSamplerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QmcSamplerParams;
  static deserializeBinaryFromReader(message: QmcSamplerParams, reader: jspb.BinaryReader): QmcSamplerParams;
}

export namespace QmcSamplerParams {
  export type AsObject = {
    scramble: boolean,
    seed: number,
  }
}

export class GpSamplerParams extends jspb.Message {
  getNStartupTrials(): number;
  setNStartupTrials(value: number): GpSamplerParams;

  getSeed(): number;
  setSeed(value: number): GpSamplerParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GpSamplerParams.AsObject;
  static toObject(includeInstance: boolean, msg: GpSamplerParams): GpSamplerParams.AsObject;
  static serializeBinaryToWriter(message: GpSamplerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GpSamplerParams;
  static deserializeBinaryFromReader(message: GpSamplerParams, reader: jspb.BinaryReader): GpSamplerParams;
}

export namespace GpSamplerParams {
  export type AsObject = {
    nStartupTrials: number,
    seed: number,
  }
}

export class SamplerConfig extends jspb.Message {
  getTpe(): TpeSamplerParams | undefined;
  setTpe(value?: TpeSamplerParams): SamplerConfig;
  hasTpe(): boolean;
  clearTpe(): SamplerConfig;

  getCmaes(): CmaEsSamplerParams | undefined;
  setCmaes(value?: CmaEsSamplerParams): SamplerConfig;
  hasCmaes(): boolean;
  clearCmaes(): SamplerConfig;

  getRandom(): RandomSamplerParams | undefined;
  setRandom(value?: RandomSamplerParams): SamplerConfig;
  hasRandom(): boolean;
  clearRandom(): SamplerConfig;

  getGrid(): GridSamplerParams | undefined;
  setGrid(value?: GridSamplerParams): SamplerConfig;
  hasGrid(): boolean;
  clearGrid(): SamplerConfig;

  getNsga2(): NsgaIiSamplerParams | undefined;
  setNsga2(value?: NsgaIiSamplerParams): SamplerConfig;
  hasNsga2(): boolean;
  clearNsga2(): SamplerConfig;

  getQmc(): QmcSamplerParams | undefined;
  setQmc(value?: QmcSamplerParams): SamplerConfig;
  hasQmc(): boolean;
  clearQmc(): SamplerConfig;

  getGp(): GpSamplerParams | undefined;
  setGp(value?: GpSamplerParams): SamplerConfig;
  hasGp(): boolean;
  clearGp(): SamplerConfig;

  getSamplerCase(): SamplerConfig.SamplerCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SamplerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SamplerConfig): SamplerConfig.AsObject;
  static serializeBinaryToWriter(message: SamplerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SamplerConfig;
  static deserializeBinaryFromReader(message: SamplerConfig, reader: jspb.BinaryReader): SamplerConfig;
}

export namespace SamplerConfig {
  export type AsObject = {
    tpe?: TpeSamplerParams.AsObject,
    cmaes?: CmaEsSamplerParams.AsObject,
    random?: RandomSamplerParams.AsObject,
    grid?: GridSamplerParams.AsObject,
    nsga2?: NsgaIiSamplerParams.AsObject,
    qmc?: QmcSamplerParams.AsObject,
    gp?: GpSamplerParams.AsObject,
  }

  export enum SamplerCase { 
    SAMPLER_NOT_SET = 0,
    TPE = 1,
    CMAES = 2,
    RANDOM = 3,
    GRID = 4,
    NSGA2 = 5,
    QMC = 6,
    GP = 7,
  }
}

export class NopPrunerParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NopPrunerParams.AsObject;
  static toObject(includeInstance: boolean, msg: NopPrunerParams): NopPrunerParams.AsObject;
  static serializeBinaryToWriter(message: NopPrunerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NopPrunerParams;
  static deserializeBinaryFromReader(message: NopPrunerParams, reader: jspb.BinaryReader): NopPrunerParams;
}

export namespace NopPrunerParams {
  export type AsObject = {
  }
}

export class MedianPrunerParams extends jspb.Message {
  getNStartupTrials(): number;
  setNStartupTrials(value: number): MedianPrunerParams;

  getNWarmupSteps(): number;
  setNWarmupSteps(value: number): MedianPrunerParams;

  getIntervalSteps(): number;
  setIntervalSteps(value: number): MedianPrunerParams;

  getNMinTrials(): number;
  setNMinTrials(value: number): MedianPrunerParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedianPrunerParams.AsObject;
  static toObject(includeInstance: boolean, msg: MedianPrunerParams): MedianPrunerParams.AsObject;
  static serializeBinaryToWriter(message: MedianPrunerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedianPrunerParams;
  static deserializeBinaryFromReader(message: MedianPrunerParams, reader: jspb.BinaryReader): MedianPrunerParams;
}

export namespace MedianPrunerParams {
  export type AsObject = {
    nStartupTrials: number,
    nWarmupSteps: number,
    intervalSteps: number,
    nMinTrials: number,
  }
}

export class PercentilePrunerParams extends jspb.Message {
  getPercentile(): number;
  setPercentile(value: number): PercentilePrunerParams;

  getNStartupTrials(): number;
  setNStartupTrials(value: number): PercentilePrunerParams;

  getNWarmupSteps(): number;
  setNWarmupSteps(value: number): PercentilePrunerParams;

  getIntervalSteps(): number;
  setIntervalSteps(value: number): PercentilePrunerParams;

  getNMinTrials(): number;
  setNMinTrials(value: number): PercentilePrunerParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PercentilePrunerParams.AsObject;
  static toObject(includeInstance: boolean, msg: PercentilePrunerParams): PercentilePrunerParams.AsObject;
  static serializeBinaryToWriter(message: PercentilePrunerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PercentilePrunerParams;
  static deserializeBinaryFromReader(message: PercentilePrunerParams, reader: jspb.BinaryReader): PercentilePrunerParams;
}

export namespace PercentilePrunerParams {
  export type AsObject = {
    percentile: number,
    nStartupTrials: number,
    nWarmupSteps: number,
    intervalSteps: number,
    nMinTrials: number,
  }
}

export class SuccessiveHalvingPrunerParams extends jspb.Message {
  getMinResource(): number;
  setMinResource(value: number): SuccessiveHalvingPrunerParams;

  getReductionFactor(): number;
  setReductionFactor(value: number): SuccessiveHalvingPrunerParams;

  getMinEarlyStoppingRate(): number;
  setMinEarlyStoppingRate(value: number): SuccessiveHalvingPrunerParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessiveHalvingPrunerParams.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessiveHalvingPrunerParams): SuccessiveHalvingPrunerParams.AsObject;
  static serializeBinaryToWriter(message: SuccessiveHalvingPrunerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessiveHalvingPrunerParams;
  static deserializeBinaryFromReader(message: SuccessiveHalvingPrunerParams, reader: jspb.BinaryReader): SuccessiveHalvingPrunerParams;
}

export namespace SuccessiveHalvingPrunerParams {
  export type AsObject = {
    minResource: number,
    reductionFactor: number,
    minEarlyStoppingRate: number,
  }
}

export class HyperbandPrunerParams extends jspb.Message {
  getMinResource(): number;
  setMinResource(value: number): HyperbandPrunerParams;

  getMaxResource(): number;
  setMaxResource(value: number): HyperbandPrunerParams;

  getReductionFactor(): number;
  setReductionFactor(value: number): HyperbandPrunerParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HyperbandPrunerParams.AsObject;
  static toObject(includeInstance: boolean, msg: HyperbandPrunerParams): HyperbandPrunerParams.AsObject;
  static serializeBinaryToWriter(message: HyperbandPrunerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HyperbandPrunerParams;
  static deserializeBinaryFromReader(message: HyperbandPrunerParams, reader: jspb.BinaryReader): HyperbandPrunerParams;
}

export namespace HyperbandPrunerParams {
  export type AsObject = {
    minResource: number,
    maxResource: number,
    reductionFactor: number,
  }
}

export class PatientPrunerParams extends jspb.Message {
  getPatience(): number;
  setPatience(value: number): PatientPrunerParams;

  getMinDelta(): number;
  setMinDelta(value: number): PatientPrunerParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientPrunerParams.AsObject;
  static toObject(includeInstance: boolean, msg: PatientPrunerParams): PatientPrunerParams.AsObject;
  static serializeBinaryToWriter(message: PatientPrunerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientPrunerParams;
  static deserializeBinaryFromReader(message: PatientPrunerParams, reader: jspb.BinaryReader): PatientPrunerParams;
}

export namespace PatientPrunerParams {
  export type AsObject = {
    patience: number,
    minDelta: number,
  }
}

export class ThresholdPrunerParams extends jspb.Message {
  getLower(): number;
  setLower(value: number): ThresholdPrunerParams;

  getUpper(): number;
  setUpper(value: number): ThresholdPrunerParams;

  getNWarmupSteps(): number;
  setNWarmupSteps(value: number): ThresholdPrunerParams;

  getIntervalSteps(): number;
  setIntervalSteps(value: number): ThresholdPrunerParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThresholdPrunerParams.AsObject;
  static toObject(includeInstance: boolean, msg: ThresholdPrunerParams): ThresholdPrunerParams.AsObject;
  static serializeBinaryToWriter(message: ThresholdPrunerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThresholdPrunerParams;
  static deserializeBinaryFromReader(message: ThresholdPrunerParams, reader: jspb.BinaryReader): ThresholdPrunerParams;
}

export namespace ThresholdPrunerParams {
  export type AsObject = {
    lower: number,
    upper: number,
    nWarmupSteps: number,
    intervalSteps: number,
  }
}

export class PrunerConfig extends jspb.Message {
  getNone(): NopPrunerParams | undefined;
  setNone(value?: NopPrunerParams): PrunerConfig;
  hasNone(): boolean;
  clearNone(): PrunerConfig;

  getMedian(): MedianPrunerParams | undefined;
  setMedian(value?: MedianPrunerParams): PrunerConfig;
  hasMedian(): boolean;
  clearMedian(): PrunerConfig;

  getPercentile(): PercentilePrunerParams | undefined;
  setPercentile(value?: PercentilePrunerParams): PrunerConfig;
  hasPercentile(): boolean;
  clearPercentile(): PrunerConfig;

  getSuccessiveHalving(): SuccessiveHalvingPrunerParams | undefined;
  setSuccessiveHalving(value?: SuccessiveHalvingPrunerParams): PrunerConfig;
  hasSuccessiveHalving(): boolean;
  clearSuccessiveHalving(): PrunerConfig;

  getHyperband(): HyperbandPrunerParams | undefined;
  setHyperband(value?: HyperbandPrunerParams): PrunerConfig;
  hasHyperband(): boolean;
  clearHyperband(): PrunerConfig;

  getPatient(): PatientPrunerParams | undefined;
  setPatient(value?: PatientPrunerParams): PrunerConfig;
  hasPatient(): boolean;
  clearPatient(): PrunerConfig;

  getThreshold(): ThresholdPrunerParams | undefined;
  setThreshold(value?: ThresholdPrunerParams): PrunerConfig;
  hasThreshold(): boolean;
  clearThreshold(): PrunerConfig;

  getPrunerCase(): PrunerConfig.PrunerCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrunerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PrunerConfig): PrunerConfig.AsObject;
  static serializeBinaryToWriter(message: PrunerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrunerConfig;
  static deserializeBinaryFromReader(message: PrunerConfig, reader: jspb.BinaryReader): PrunerConfig;
}

export namespace PrunerConfig {
  export type AsObject = {
    none?: NopPrunerParams.AsObject,
    median?: MedianPrunerParams.AsObject,
    percentile?: PercentilePrunerParams.AsObject,
    successiveHalving?: SuccessiveHalvingPrunerParams.AsObject,
    hyperband?: HyperbandPrunerParams.AsObject,
    patient?: PatientPrunerParams.AsObject,
    threshold?: ThresholdPrunerParams.AsObject,
  }

  export enum PrunerCase { 
    PRUNER_NOT_SET = 0,
    NONE = 1,
    MEDIAN = 2,
    PERCENTILE = 3,
    SUCCESSIVE_HALVING = 4,
    HYPERBAND = 5,
    PATIENT = 6,
    THRESHOLD = 7,
  }
}

export class ObjectiveMetric extends jspb.Message {
  getMetric(): string;
  setMetric(value: string): ObjectiveMetric;

  getMaximize(): boolean;
  setMaximize(value: boolean): ObjectiveMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectiveMetric.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectiveMetric): ObjectiveMetric.AsObject;
  static serializeBinaryToWriter(message: ObjectiveMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectiveMetric;
  static deserializeBinaryFromReader(message: ObjectiveMetric, reader: jspb.BinaryReader): ObjectiveMetric;
}

export namespace ObjectiveMetric {
  export type AsObject = {
    metric: string,
    maximize: boolean,
  }
}

export class Objective extends jspb.Message {
  getMetricsList(): Array<ObjectiveMetric>;
  setMetricsList(value: Array<ObjectiveMetric>): Objective;
  clearMetricsList(): Objective;
  addMetrics(value?: ObjectiveMetric, index?: number): ObjectiveMetric;

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
    metricsList: Array<ObjectiveMetric.AsObject>,
    minTrades: number,
    maxDrawdownLimit: number,
  }
}

export class Budget extends jspb.Message {
  getNTrials(): number;
  setNTrials(value: number): Budget;

  getTimeoutSeconds(): number;
  setTimeoutSeconds(value: number): Budget;

  getNJobs(): number;
  setNJobs(value: number): Budget;

  getSeed(): number;
  setSeed(value: number): Budget;

  getDisableCache(): boolean;
  setDisableCache(value: boolean): Budget;

  getPruningReportIntervalBars(): number;
  setPruningReportIntervalBars(value: number): Budget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Budget.AsObject;
  static toObject(includeInstance: boolean, msg: Budget): Budget.AsObject;
  static serializeBinaryToWriter(message: Budget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Budget;
  static deserializeBinaryFromReader(message: Budget, reader: jspb.BinaryReader): Budget;
}

export namespace Budget {
  export type AsObject = {
    nTrials: number,
    timeoutSeconds: number,
    nJobs: number,
    seed: number,
    disableCache: boolean,
    pruningReportIntervalBars: number,
  }
}

export class ClickHouseTrialSink extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): ClickHouseTrialSink;

  getDatabase(): string;
  setDatabase(value: string): ClickHouseTrialSink;

  getTrialsTable(): string;
  setTrialsTable(value: string): ClickHouseTrialSink;

  getStudiesTable(): string;
  setStudiesTable(value: string): ClickHouseTrialSink;

  getFlushBatchSize(): number;
  setFlushBatchSize(value: number): ClickHouseTrialSink;

  getFlushIntervalMs(): number;
  setFlushIntervalMs(value: number): ClickHouseTrialSink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickHouseTrialSink.AsObject;
  static toObject(includeInstance: boolean, msg: ClickHouseTrialSink): ClickHouseTrialSink.AsObject;
  static serializeBinaryToWriter(message: ClickHouseTrialSink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickHouseTrialSink;
  static deserializeBinaryFromReader(message: ClickHouseTrialSink, reader: jspb.BinaryReader): ClickHouseTrialSink;
}

export namespace ClickHouseTrialSink {
  export type AsObject = {
    enabled: boolean,
    database: string,
    trialsTable: string,
    studiesTable: string,
    flushBatchSize: number,
    flushIntervalMs: number,
  }
}

export class Storage extends jspb.Message {
  getStorageUrl(): string;
  setStorageUrl(value: string): Storage;

  getClickhouse(): ClickHouseTrialSink | undefined;
  setClickhouse(value?: ClickHouseTrialSink): Storage;
  hasClickhouse(): boolean;
  clearClickhouse(): Storage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Storage.AsObject;
  static toObject(includeInstance: boolean, msg: Storage): Storage.AsObject;
  static serializeBinaryToWriter(message: Storage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Storage;
  static deserializeBinaryFromReader(message: Storage, reader: jspb.BinaryReader): Storage;
}

export namespace Storage {
  export type AsObject = {
    storageUrl: string,
    clickhouse?: ClickHouseTrialSink.AsObject,
  }
}

export class StudyConfig extends jspb.Message {
  getStudyName(): string;
  setStudyName(value: string): StudyConfig;

  getSampler(): SamplerConfig | undefined;
  setSampler(value?: SamplerConfig): StudyConfig;
  hasSampler(): boolean;
  clearSampler(): StudyConfig;

  getPruner(): PrunerConfig | undefined;
  setPruner(value?: PrunerConfig): StudyConfig;
  hasPruner(): boolean;
  clearPruner(): StudyConfig;

  getObjective(): Objective | undefined;
  setObjective(value?: Objective): StudyConfig;
  hasObjective(): boolean;
  clearObjective(): StudyConfig;

  getBudget(): Budget | undefined;
  setBudget(value?: Budget): StudyConfig;
  hasBudget(): boolean;
  clearBudget(): StudyConfig;

  getStorage(): Storage | undefined;
  setStorage(value?: Storage): StudyConfig;
  hasStorage(): boolean;
  clearStorage(): StudyConfig;

  getLoadIfExists(): boolean;
  setLoadIfExists(value: boolean): StudyConfig;

  getSeedTrialsList(): Array<SeedTrial>;
  setSeedTrialsList(value: Array<SeedTrial>): StudyConfig;
  clearSeedTrialsList(): StudyConfig;
  addSeedTrials(value?: SeedTrial, index?: number): SeedTrial;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StudyConfig): StudyConfig.AsObject;
  static serializeBinaryToWriter(message: StudyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyConfig;
  static deserializeBinaryFromReader(message: StudyConfig, reader: jspb.BinaryReader): StudyConfig;
}

export namespace StudyConfig {
  export type AsObject = {
    studyName: string,
    sampler?: SamplerConfig.AsObject,
    pruner?: PrunerConfig.AsObject,
    objective?: Objective.AsObject,
    budget?: Budget.AsObject,
    storage?: Storage.AsObject,
    loadIfExists: boolean,
    seedTrialsList: Array<SeedTrial.AsObject>,
  }
}

export class TrialTask extends jspb.Message {
  getTrialId(): string;
  setTrialId(value: string): TrialTask;

  getSearchId(): string;
  setSearchId(value: string): TrialTask;

  getTrialNumber(): number;
  setTrialNumber(value: number): TrialTask;

  getSpec(): strategysearch_spec_pb.StrategySearchSpec | undefined;
  setSpec(value?: strategysearch_spec_pb.StrategySearchSpec): TrialTask;
  hasSpec(): boolean;
  clearSpec(): TrialTask;

  getConfig(): strategysearch_backtest_pb.BacktestConfig | undefined;
  setConfig(value?: strategysearch_backtest_pb.BacktestConfig): TrialTask;
  hasConfig(): boolean;
  clearConfig(): TrialTask;

  getPruningReportIntervalBars(): number;
  setPruningReportIntervalBars(value: number): TrialTask;

  getReplySubject(): string;
  setReplySubject(value: string): TrialTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrialTask.AsObject;
  static toObject(includeInstance: boolean, msg: TrialTask): TrialTask.AsObject;
  static serializeBinaryToWriter(message: TrialTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrialTask;
  static deserializeBinaryFromReader(message: TrialTask, reader: jspb.BinaryReader): TrialTask;
}

export namespace TrialTask {
  export type AsObject = {
    trialId: string,
    searchId: string,
    trialNumber: number,
    spec?: strategysearch_spec_pb.StrategySearchSpec.AsObject,
    config?: strategysearch_backtest_pb.BacktestConfig.AsObject,
    pruningReportIntervalBars: number,
    replySubject: string,
  }
}

export class TrialIntermediateValue extends jspb.Message {
  getStep(): number;
  setStep(value: number): TrialIntermediateValue;

  getValue(): number;
  setValue(value: number): TrialIntermediateValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrialIntermediateValue.AsObject;
  static toObject(includeInstance: boolean, msg: TrialIntermediateValue): TrialIntermediateValue.AsObject;
  static serializeBinaryToWriter(message: TrialIntermediateValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrialIntermediateValue;
  static deserializeBinaryFromReader(message: TrialIntermediateValue, reader: jspb.BinaryReader): TrialIntermediateValue;
}

export namespace TrialIntermediateValue {
  export type AsObject = {
    step: number,
    value: number,
  }
}

export class TrialResult extends jspb.Message {
  getTrialId(): string;
  setTrialId(value: string): TrialResult;

  getValuesMap(): jspb.Map<string, number>;
  clearValuesMap(): TrialResult;

  getState(): TrialState;
  setState(value: TrialState): TrialResult;

  getIntermediateValuesList(): Array<TrialIntermediateValue>;
  setIntermediateValuesList(value: Array<TrialIntermediateValue>): TrialResult;
  clearIntermediateValuesList(): TrialResult;
  addIntermediateValues(value?: TrialIntermediateValue, index?: number): TrialIntermediateValue;

  getError(): string;
  setError(value: string): TrialResult;

  getEngineVersion(): string;
  setEngineVersion(value: string): TrialResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrialResult.AsObject;
  static toObject(includeInstance: boolean, msg: TrialResult): TrialResult.AsObject;
  static serializeBinaryToWriter(message: TrialResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrialResult;
  static deserializeBinaryFromReader(message: TrialResult, reader: jspb.BinaryReader): TrialResult;
}

export namespace TrialResult {
  export type AsObject = {
    trialId: string,
    valuesMap: Array<[string, number]>,
    state: TrialState,
    intermediateValuesList: Array<TrialIntermediateValue.AsObject>,
    error: string,
    engineVersion: string,
  }
}

export class Trial extends jspb.Message {
  getTrialId(): string;
  setTrialId(value: string): Trial;

  getNumber(): number;
  setNumber(value: number): Trial;

  getSpec(): strategysearch_spec_pb.StrategySearchSpec | undefined;
  setSpec(value?: strategysearch_spec_pb.StrategySearchSpec): Trial;
  hasSpec(): boolean;
  clearSpec(): Trial;

  getSpecHash(): number;
  setSpecHash(value: number): Trial;

  getParamsMap(): jspb.Map<string, number>;
  clearParamsMap(): Trial;

  getValuesMap(): jspb.Map<string, number>;
  clearValuesMap(): Trial;

  getState(): TrialState;
  setState(value: TrialState): Trial;

  getMetrics(): strategysearch_backtest_pb.BacktestMetrics | undefined;
  setMetrics(value?: strategysearch_backtest_pb.BacktestMetrics): Trial;
  hasMetrics(): boolean;
  clearMetrics(): Trial;

  getIsParetoOptimal(): boolean;
  setIsParetoOptimal(value: boolean): Trial;

  getBacktestRunId(): string;
  setBacktestRunId(value: string): Trial;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Trial;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Trial;

  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Trial;
  hasCompletedAt(): boolean;
  clearCompletedAt(): Trial;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trial.AsObject;
  static toObject(includeInstance: boolean, msg: Trial): Trial.AsObject;
  static serializeBinaryToWriter(message: Trial, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trial;
  static deserializeBinaryFromReader(message: Trial, reader: jspb.BinaryReader): Trial;
}

export namespace Trial {
  export type AsObject = {
    trialId: string,
    number: number,
    spec?: strategysearch_spec_pb.StrategySearchSpec.AsObject,
    specHash: number,
    paramsMap: Array<[string, number]>,
    valuesMap: Array<[string, number]>,
    state: TrialState,
    metrics?: strategysearch_backtest_pb.BacktestMetrics.AsObject,
    isParetoOptimal: boolean,
    backtestRunId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ParamImportance extends jspb.Message {
  getPath(): string;
  setPath(value: string): ParamImportance;

  getImportance(): number;
  setImportance(value: number): ParamImportance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParamImportance.AsObject;
  static toObject(includeInstance: boolean, msg: ParamImportance): ParamImportance.AsObject;
  static serializeBinaryToWriter(message: ParamImportance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParamImportance;
  static deserializeBinaryFromReader(message: ParamImportance, reader: jspb.BinaryReader): ParamImportance;
}

export namespace ParamImportance {
  export type AsObject = {
    path: string,
    importance: number,
  }
}

export class SearchProgress extends jspb.Message {
  getStatus(): strategysearch_backtest_pb.RunStatus;
  setStatus(value: strategysearch_backtest_pb.RunStatus): SearchProgress;

  getCompletedTrials(): number;
  setCompletedTrials(value: number): SearchProgress;

  getPrunedTrials(): number;
  setPrunedTrials(value: number): SearchProgress;

  getFailedTrials(): number;
  setFailedTrials(value: number): SearchProgress;

  getTotalTrials(): number;
  setTotalTrials(value: number): SearchProgress;

  getIsMultiObjective(): boolean;
  setIsMultiObjective(value: boolean): SearchProgress;

  getBestValuesMap(): jspb.Map<string, number>;
  clearBestValuesMap(): SearchProgress;

  getBestTrialId(): string;
  setBestTrialId(value: string): SearchProgress;

  getParetoFrontTrialIdsList(): Array<string>;
  setParetoFrontTrialIdsList(value: Array<string>): SearchProgress;
  clearParetoFrontTrialIdsList(): SearchProgress;
  addParetoFrontTrialIds(value: string, index?: number): SearchProgress;

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
    status: strategysearch_backtest_pb.RunStatus,
    completedTrials: number,
    prunedTrials: number,
    failedTrials: number,
    totalTrials: number,
    isMultiObjective: boolean,
    bestValuesMap: Array<[string, number]>,
    bestTrialId: string,
    paretoFrontTrialIdsList: Array<string>,
    error: string,
  }
}

export class SearchRun extends jspb.Message {
  getSearchId(): string;
  setSearchId(value: string): SearchRun;

  getName(): string;
  setName(value: string): SearchRun;

  getBaseSpec(): strategysearch_spec_pb.StrategySearchSpec | undefined;
  setBaseSpec(value?: strategysearch_spec_pb.StrategySearchSpec): SearchRun;
  hasBaseSpec(): boolean;
  clearBaseSpec(): SearchRun;

  getSearchSpaceList(): Array<ParamRange>;
  setSearchSpaceList(value: Array<ParamRange>): SearchRun;
  clearSearchSpaceList(): SearchRun;
  addSearchSpace(value?: ParamRange, index?: number): ParamRange;

  getStudy(): StudyConfig | undefined;
  setStudy(value?: StudyConfig): SearchRun;
  hasStudy(): boolean;
  clearStudy(): SearchRun;

  getConfig(): strategysearch_backtest_pb.BacktestConfig | undefined;
  setConfig(value?: strategysearch_backtest_pb.BacktestConfig): SearchRun;
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
    name: string,
    baseSpec?: strategysearch_spec_pb.StrategySearchSpec.AsObject,
    searchSpaceList: Array<ParamRange.AsObject>,
    study?: StudyConfig.AsObject,
    config?: strategysearch_backtest_pb.BacktestConfig.AsObject,
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

export enum TrialState { 
  TRIAL_STATE_UNSPECIFIED = 0,
  TRIAL_STATE_RUNNING = 1,
  TRIAL_STATE_WAITING = 2,
  TRIAL_STATE_COMPLETE = 3,
  TRIAL_STATE_PRUNED = 4,
  TRIAL_STATE_FAIL = 5,
}
