import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as strategy_spec_pb from '../strategy/spec_pb'; // proto import: "strategy/spec.proto"


export class BacktestConfig extends jspb.Message {
  getUid(): string;
  setUid(value: string): BacktestConfig;

  getInterval(): number;
  setInterval(value: number): BacktestConfig;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): BacktestConfig;
  hasStart(): boolean;
  clearStart(): BacktestConfig;

  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): BacktestConfig;
  hasEnd(): boolean;
  clearEnd(): BacktestConfig;

  getInitialCash(): number;
  setInitialCash(value: number): BacktestConfig;

  getCommissionPct(): number;
  setCommissionPct(value: number): BacktestConfig;

  getSlippagePct(): number;
  setSlippagePct(value: number): BacktestConfig;

  getLongOnly(): boolean;
  setLongOnly(value: boolean): BacktestConfig;

  getBenchmarkUid(): string;
  setBenchmarkUid(value: string): BacktestConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BacktestConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BacktestConfig): BacktestConfig.AsObject;
  static serializeBinaryToWriter(message: BacktestConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BacktestConfig;
  static deserializeBinaryFromReader(message: BacktestConfig, reader: jspb.BinaryReader): BacktestConfig;
}

export namespace BacktestConfig {
  export type AsObject = {
    uid: string,
    interval: number,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    initialCash: number,
    commissionPct: number,
    slippagePct: number,
    longOnly: boolean,
    benchmarkUid: string,
  }
}

export class BacktestMetrics extends jspb.Message {
  getTotalReturn(): number;
  setTotalReturn(value: number): BacktestMetrics;

  getCagr(): number;
  setCagr(value: number): BacktestMetrics;

  getSharpe(): number;
  setSharpe(value: number): BacktestMetrics;

  getSortino(): number;
  setSortino(value: number): BacktestMetrics;

  getMaxDrawdown(): number;
  setMaxDrawdown(value: number): BacktestMetrics;

  getWinRate(): number;
  setWinRate(value: number): BacktestMetrics;

  getProfitFactor(): number;
  setProfitFactor(value: number): BacktestMetrics;

  getSqn(): number;
  setSqn(value: number): BacktestMetrics;

  getTradesCount(): number;
  setTradesCount(value: number): BacktestMetrics;

  getExposure(): number;
  setExposure(value: number): BacktestMetrics;

  getFinalEquity(): number;
  setFinalEquity(value: number): BacktestMetrics;

  getAvgTradePct(): number;
  setAvgTradePct(value: number): BacktestMetrics;

  getExpectancy(): number;
  setExpectancy(value: number): BacktestMetrics;

  getCalmar(): number;
  setCalmar(value: number): BacktestMetrics;

  getOmega(): number;
  setOmega(value: number): BacktestMetrics;

  getTailRatio(): number;
  setTailRatio(value: number): BacktestMetrics;

  getValueAtRisk(): number;
  setValueAtRisk(value: number): BacktestMetrics;

  getConditionalValueAtRisk(): number;
  setConditionalValueAtRisk(value: number): BacktestMetrics;

  getSkew(): number;
  setSkew(value: number): BacktestMetrics;

  getKurtosis(): number;
  setKurtosis(value: number): BacktestMetrics;

  getKellyCriterion(): number;
  setKellyCriterion(value: number): BacktestMetrics;

  getRiskOfRuin(): number;
  setRiskOfRuin(value: number): BacktestMetrics;

  getRecoveryFactor(): number;
  setRecoveryFactor(value: number): BacktestMetrics;

  getPayoffRatio(): number;
  setPayoffRatio(value: number): BacktestMetrics;

  getGainToPainRatio(): number;
  setGainToPainRatio(value: number): BacktestMetrics;

  getOutlierWinRatio(): number;
  setOutlierWinRatio(value: number): BacktestMetrics;

  getOutlierLossRatio(): number;
  setOutlierLossRatio(value: number): BacktestMetrics;

  getCommonSenseRatio(): number;
  setCommonSenseRatio(value: number): BacktestMetrics;

  getUlcerIndex(): number;
  setUlcerIndex(value: number): BacktestMetrics;

  getSerenityIndex(): number;
  setSerenityIndex(value: number): BacktestMetrics;

  getAlpha(): number;
  setAlpha(value: number): BacktestMetrics;

  getBeta(): number;
  setBeta(value: number): BacktestMetrics;

  getInformationRatio(): number;
  setInformationRatio(value: number): BacktestMetrics;

  getRSquared(): number;
  setRSquared(value: number): BacktestMetrics;

  getExtraMap(): jspb.Map<string, number>;
  clearExtraMap(): BacktestMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BacktestMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: BacktestMetrics): BacktestMetrics.AsObject;
  static serializeBinaryToWriter(message: BacktestMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BacktestMetrics;
  static deserializeBinaryFromReader(message: BacktestMetrics, reader: jspb.BinaryReader): BacktestMetrics;
}

export namespace BacktestMetrics {
  export type AsObject = {
    totalReturn: number,
    cagr: number,
    sharpe: number,
    sortino: number,
    maxDrawdown: number,
    winRate: number,
    profitFactor: number,
    sqn: number,
    tradesCount: number,
    exposure: number,
    finalEquity: number,
    avgTradePct: number,
    expectancy: number,
    calmar: number,
    omega: number,
    tailRatio: number,
    valueAtRisk: number,
    conditionalValueAtRisk: number,
    skew: number,
    kurtosis: number,
    kellyCriterion: number,
    riskOfRuin: number,
    recoveryFactor: number,
    payoffRatio: number,
    gainToPainRatio: number,
    outlierWinRatio: number,
    outlierLossRatio: number,
    commonSenseRatio: number,
    ulcerIndex: number,
    serenityIndex: number,
    alpha: number,
    beta: number,
    informationRatio: number,
    rSquared: number,
    extraMap: Array<[string, number]>,
  }
}

export class EquityPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): EquityPoint;
  hasTime(): boolean;
  clearTime(): EquityPoint;

  getEquity(): number;
  setEquity(value: number): EquityPoint;

  getCash(): number;
  setCash(value: number): EquityPoint;

  getPositionValue(): number;
  setPositionValue(value: number): EquityPoint;

  getDrawdown(): number;
  setDrawdown(value: number): EquityPoint;

  getRet(): number;
  setRet(value: number): EquityPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EquityPoint.AsObject;
  static toObject(includeInstance: boolean, msg: EquityPoint): EquityPoint.AsObject;
  static serializeBinaryToWriter(message: EquityPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EquityPoint;
  static deserializeBinaryFromReader(message: EquityPoint, reader: jspb.BinaryReader): EquityPoint;
}

export namespace EquityPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    equity: number,
    cash: number,
    positionValue: number,
    drawdown: number,
    ret: number,
  }
}

export class TradeRecord extends jspb.Message {
  getTradeId(): number;
  setTradeId(value: number): TradeRecord;

  getIsLong(): boolean;
  setIsLong(value: boolean): TradeRecord;

  getEntryTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEntryTime(value?: google_protobuf_timestamp_pb.Timestamp): TradeRecord;
  hasEntryTime(): boolean;
  clearEntryTime(): TradeRecord;

  getEntryPrice(): number;
  setEntryPrice(value: number): TradeRecord;

  getExitTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExitTime(value?: google_protobuf_timestamp_pb.Timestamp): TradeRecord;
  hasExitTime(): boolean;
  clearExitTime(): TradeRecord;

  getExitPrice(): number;
  setExitPrice(value: number): TradeRecord;

  getSize(): number;
  setSize(value: number): TradeRecord;

  getPnl(): number;
  setPnl(value: number): TradeRecord;

  getPnlPct(): number;
  setPnlPct(value: number): TradeRecord;

  getBarsHeld(): number;
  setBarsHeld(value: number): TradeRecord;

  getMae(): number;
  setMae(value: number): TradeRecord;

  getMfe(): number;
  setMfe(value: number): TradeRecord;

  getEntryReason(): string;
  setEntryReason(value: string): TradeRecord;

  getExitReason(): string;
  setExitReason(value: string): TradeRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeRecord.AsObject;
  static toObject(includeInstance: boolean, msg: TradeRecord): TradeRecord.AsObject;
  static serializeBinaryToWriter(message: TradeRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeRecord;
  static deserializeBinaryFromReader(message: TradeRecord, reader: jspb.BinaryReader): TradeRecord;
}

export namespace TradeRecord {
  export type AsObject = {
    tradeId: number,
    isLong: boolean,
    entryTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    entryPrice: number,
    exitTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    exitPrice: number,
    size: number,
    pnl: number,
    pnlPct: number,
    barsHeld: number,
    mae: number,
    mfe: number,
    entryReason: string,
    exitReason: string,
  }
}

export class BacktestIndicatorPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): BacktestIndicatorPoint;
  hasTime(): boolean;
  clearTime(): BacktestIndicatorPoint;

  getValuesMap(): jspb.Map<string, number>;
  clearValuesMap(): BacktestIndicatorPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BacktestIndicatorPoint.AsObject;
  static toObject(includeInstance: boolean, msg: BacktestIndicatorPoint): BacktestIndicatorPoint.AsObject;
  static serializeBinaryToWriter(message: BacktestIndicatorPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BacktestIndicatorPoint;
  static deserializeBinaryFromReader(message: BacktestIndicatorPoint, reader: jspb.BinaryReader): BacktestIndicatorPoint;
}

export namespace BacktestIndicatorPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    valuesMap: Array<[string, number]>,
  }
}

export class BacktestIndicatorSeries extends jspb.Message {
  getIndicatorId(): string;
  setIndicatorId(value: string): BacktestIndicatorSeries;

  getIndicator(): string;
  setIndicator(value: string): BacktestIndicatorSeries;

  getOutputKey(): string;
  setOutputKey(value: string): BacktestIndicatorSeries;

  getOverlay(): boolean;
  setOverlay(value: boolean): BacktestIndicatorSeries;

  getPointsList(): Array<BacktestIndicatorPoint>;
  setPointsList(value: Array<BacktestIndicatorPoint>): BacktestIndicatorSeries;
  clearPointsList(): BacktestIndicatorSeries;
  addPoints(value?: BacktestIndicatorPoint, index?: number): BacktestIndicatorPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BacktestIndicatorSeries.AsObject;
  static toObject(includeInstance: boolean, msg: BacktestIndicatorSeries): BacktestIndicatorSeries.AsObject;
  static serializeBinaryToWriter(message: BacktestIndicatorSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BacktestIndicatorSeries;
  static deserializeBinaryFromReader(message: BacktestIndicatorSeries, reader: jspb.BinaryReader): BacktestIndicatorSeries;
}

export namespace BacktestIndicatorSeries {
  export type AsObject = {
    indicatorId: string,
    indicator: string,
    outputKey: string,
    overlay: boolean,
    pointsList: Array<BacktestIndicatorPoint.AsObject>,
  }
}

export class BacktestRun extends jspb.Message {
  getRunId(): string;
  setRunId(value: string): BacktestRun;

  getStrategyId(): string;
  setStrategyId(value: string): BacktestRun;

  getSpec(): strategy_spec_pb.StrategySpec | undefined;
  setSpec(value?: strategy_spec_pb.StrategySpec): BacktestRun;
  hasSpec(): boolean;
  clearSpec(): BacktestRun;

  getConfig(): BacktestConfig | undefined;
  setConfig(value?: BacktestConfig): BacktestRun;
  hasConfig(): boolean;
  clearConfig(): BacktestRun;

  getStatus(): RunStatus;
  setStatus(value: RunStatus): BacktestRun;

  getError(): string;
  setError(value: string): BacktestRun;

  getEngineVersion(): string;
  setEngineVersion(value: string): BacktestRun;

  getSearchRunId(): string;
  setSearchRunId(value: string): BacktestRun;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BacktestRun;
  hasCreatedAt(): boolean;
  clearCreatedAt(): BacktestRun;

  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): BacktestRun;
  hasStartedAt(): boolean;
  clearStartedAt(): BacktestRun;

  getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): BacktestRun;
  hasFinishedAt(): boolean;
  clearFinishedAt(): BacktestRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BacktestRun.AsObject;
  static toObject(includeInstance: boolean, msg: BacktestRun): BacktestRun.AsObject;
  static serializeBinaryToWriter(message: BacktestRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BacktestRun;
  static deserializeBinaryFromReader(message: BacktestRun, reader: jspb.BinaryReader): BacktestRun;
}

export namespace BacktestRun {
  export type AsObject = {
    runId: string,
    strategyId: string,
    spec?: strategy_spec_pb.StrategySpec.AsObject,
    config?: BacktestConfig.AsObject,
    status: RunStatus,
    error: string,
    engineVersion: string,
    searchRunId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class BacktestTask extends jspb.Message {
  getRunId(): string;
  setRunId(value: string): BacktestTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BacktestTask.AsObject;
  static toObject(includeInstance: boolean, msg: BacktestTask): BacktestTask.AsObject;
  static serializeBinaryToWriter(message: BacktestTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BacktestTask;
  static deserializeBinaryFromReader(message: BacktestTask, reader: jspb.BinaryReader): BacktestTask;
}

export namespace BacktestTask {
  export type AsObject = {
    runId: string,
  }
}

export enum RunStatus { 
  RUN_STATUS_UNSPECIFIED = 0,
  RUN_QUEUED = 1,
  RUN_RUNNING = 2,
  RUN_SUCCEEDED = 3,
  RUN_FAILED = 4,
  RUN_CANCELED = 5,
}
