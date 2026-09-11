import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


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

export enum RunStatus { 
  RUN_STATUS_UNSPECIFIED = 0,
  RUN_QUEUED = 1,
  RUN_RUNNING = 2,
  RUN_SUCCEEDED = 3,
  RUN_FAILED = 4,
  RUN_CANCELED = 5,
}
