import * as jspb from 'google-protobuf'

import * as indicators_params_pb from '../indicators/params_pb'; // proto import: "indicators/params.proto"


export class IndicatorRef extends jspb.Message {
  getId(): string;
  setId(value: string): IndicatorRef;

  getSettings(): indicators_params_pb.IndicatorSettings | undefined;
  setSettings(value?: indicators_params_pb.IndicatorSettings): IndicatorRef;
  hasSettings(): boolean;
  clearSettings(): IndicatorRef;

  getOutputKey(): string;
  setOutputKey(value: string): IndicatorRef;

  getAppliedTo(): PriceField;
  setAppliedTo(value: PriceField): IndicatorRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndicatorRef.AsObject;
  static toObject(includeInstance: boolean, msg: IndicatorRef): IndicatorRef.AsObject;
  static serializeBinaryToWriter(message: IndicatorRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndicatorRef;
  static deserializeBinaryFromReader(message: IndicatorRef, reader: jspb.BinaryReader): IndicatorRef;
}

export namespace IndicatorRef {
  export type AsObject = {
    id: string,
    settings?: indicators_params_pb.IndicatorSettings.AsObject,
    outputKey: string,
    appliedTo: PriceField,
  }
}

export class ArithExpr extends jspb.Message {
  getLeft(): Operand | undefined;
  setLeft(value?: Operand): ArithExpr;
  hasLeft(): boolean;
  clearLeft(): ArithExpr;

  getOp(): ArithOp;
  setOp(value: ArithOp): ArithExpr;

  getRight(): Operand | undefined;
  setRight(value?: Operand): ArithExpr;
  hasRight(): boolean;
  clearRight(): ArithExpr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArithExpr.AsObject;
  static toObject(includeInstance: boolean, msg: ArithExpr): ArithExpr.AsObject;
  static serializeBinaryToWriter(message: ArithExpr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArithExpr;
  static deserializeBinaryFromReader(message: ArithExpr, reader: jspb.BinaryReader): ArithExpr;
}

export namespace ArithExpr {
  export type AsObject = {
    left?: Operand.AsObject,
    op: ArithOp,
    right?: Operand.AsObject,
  }
}

export class Operand extends jspb.Message {
  getShift(): number;
  setShift(value: number): Operand;

  getIndicatorId(): string;
  setIndicatorId(value: string): Operand;

  getPrice(): PriceField;
  setPrice(value: PriceField): Operand;

  getConstant(): number;
  setConstant(value: number): Operand;

  getArith(): ArithExpr | undefined;
  setArith(value?: ArithExpr): Operand;
  hasArith(): boolean;
  clearArith(): Operand;

  getOperandCase(): Operand.OperandCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operand.AsObject;
  static toObject(includeInstance: boolean, msg: Operand): Operand.AsObject;
  static serializeBinaryToWriter(message: Operand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operand;
  static deserializeBinaryFromReader(message: Operand, reader: jspb.BinaryReader): Operand;
}

export namespace Operand {
  export type AsObject = {
    shift: number,
    indicatorId: string,
    price: PriceField,
    constant: number,
    arith?: ArithExpr.AsObject,
  }

  export enum OperandCase { 
    OPERAND_NOT_SET = 0,
    INDICATOR_ID = 1,
    PRICE = 2,
    CONSTANT = 3,
    ARITH = 4,
  }
}

export class Comparison extends jspb.Message {
  getLeft(): Operand | undefined;
  setLeft(value?: Operand): Comparison;
  hasLeft(): boolean;
  clearLeft(): Comparison;

  getOp(): CompareOp;
  setOp(value: CompareOp): Comparison;

  getRight(): Operand | undefined;
  setRight(value?: Operand): Comparison;
  hasRight(): boolean;
  clearRight(): Comparison;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comparison.AsObject;
  static toObject(includeInstance: boolean, msg: Comparison): Comparison.AsObject;
  static serializeBinaryToWriter(message: Comparison, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comparison;
  static deserializeBinaryFromReader(message: Comparison, reader: jspb.BinaryReader): Comparison;
}

export namespace Comparison {
  export type AsObject = {
    left?: Operand.AsObject,
    op: CompareOp,
    right?: Operand.AsObject,
  }
}

export class BoolExpr extends jspb.Message {
  getCompare(): Comparison | undefined;
  setCompare(value?: Comparison): BoolExpr;
  hasCompare(): boolean;
  clearCompare(): BoolExpr;

  getAll(): BoolList | undefined;
  setAll(value?: BoolList): BoolExpr;
  hasAll(): boolean;
  clearAll(): BoolExpr;

  getAny(): BoolList | undefined;
  setAny(value?: BoolList): BoolExpr;
  hasAny(): boolean;
  clearAny(): BoolExpr;

  getNegate(): BoolExpr | undefined;
  setNegate(value?: BoolExpr): BoolExpr;
  hasNegate(): boolean;
  clearNegate(): BoolExpr;

  getLiteral(): boolean;
  setLiteral(value: boolean): BoolExpr;

  getNodeCase(): BoolExpr.NodeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoolExpr.AsObject;
  static toObject(includeInstance: boolean, msg: BoolExpr): BoolExpr.AsObject;
  static serializeBinaryToWriter(message: BoolExpr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoolExpr;
  static deserializeBinaryFromReader(message: BoolExpr, reader: jspb.BinaryReader): BoolExpr;
}

export namespace BoolExpr {
  export type AsObject = {
    compare?: Comparison.AsObject,
    all?: BoolList.AsObject,
    any?: BoolList.AsObject,
    negate?: BoolExpr.AsObject,
    literal: boolean,
  }

  export enum NodeCase { 
    NODE_NOT_SET = 0,
    COMPARE = 1,
    ALL = 2,
    ANY = 3,
    NEGATE = 4,
    LITERAL = 5,
  }
}

export class BoolList extends jspb.Message {
  getOperandsList(): Array<BoolExpr>;
  setOperandsList(value: Array<BoolExpr>): BoolList;
  clearOperandsList(): BoolList;
  addOperands(value?: BoolExpr, index?: number): BoolExpr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoolList.AsObject;
  static toObject(includeInstance: boolean, msg: BoolList): BoolList.AsObject;
  static serializeBinaryToWriter(message: BoolList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoolList;
  static deserializeBinaryFromReader(message: BoolList, reader: jspb.BinaryReader): BoolList;
}

export namespace BoolList {
  export type AsObject = {
    operandsList: Array<BoolExpr.AsObject>,
  }
}

export class PositionSizing extends jspb.Message {
  getFixedCash(): number;
  setFixedCash(value: number): PositionSizing;

  getPercentEquity(): number;
  setPercentEquity(value: number): PositionSizing;

  getFixedUnits(): number;
  setFixedUnits(value: number): PositionSizing;

  getRiskPerTrade(): number;
  setRiskPerTrade(value: number): PositionSizing;

  getMaxOpenPositions(): number;
  setMaxOpenPositions(value: number): PositionSizing;

  getAllowPyramiding(): boolean;
  setAllowPyramiding(value: boolean): PositionSizing;

  getMethodCase(): PositionSizing.MethodCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionSizing.AsObject;
  static toObject(includeInstance: boolean, msg: PositionSizing): PositionSizing.AsObject;
  static serializeBinaryToWriter(message: PositionSizing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionSizing;
  static deserializeBinaryFromReader(message: PositionSizing, reader: jspb.BinaryReader): PositionSizing;
}

export namespace PositionSizing {
  export type AsObject = {
    fixedCash: number,
    percentEquity: number,
    fixedUnits: number,
    riskPerTrade: number,
    maxOpenPositions: number,
    allowPyramiding: boolean,
  }

  export enum MethodCase { 
    METHOD_NOT_SET = 0,
    FIXED_CASH = 1,
    PERCENT_EQUITY = 2,
    FIXED_UNITS = 3,
    RISK_PER_TRADE = 4,
  }
}

export class RiskControls extends jspb.Message {
  getStopLossPct(): number;
  setStopLossPct(value: number): RiskControls;

  getTakeProfitPct(): number;
  setTakeProfitPct(value: number): RiskControls;

  getTrailingStop(): boolean;
  setTrailingStop(value: boolean): RiskControls;

  getTrailingPct(): number;
  setTrailingPct(value: number): RiskControls;

  getTimeStopBars(): number;
  setTimeStopBars(value: number): RiskControls;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiskControls.AsObject;
  static toObject(includeInstance: boolean, msg: RiskControls): RiskControls.AsObject;
  static serializeBinaryToWriter(message: RiskControls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiskControls;
  static deserializeBinaryFromReader(message: RiskControls, reader: jspb.BinaryReader): RiskControls;
}

export namespace RiskControls {
  export type AsObject = {
    stopLossPct: number,
    takeProfitPct: number,
    trailingStop: boolean,
    trailingPct: number,
    timeStopBars: number,
  }
}

export class StrategySearchSpec extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): StrategySearchSpec;

  getIndicatorsList(): Array<IndicatorRef>;
  setIndicatorsList(value: Array<IndicatorRef>): StrategySearchSpec;
  clearIndicatorsList(): StrategySearchSpec;
  addIndicators(value?: IndicatorRef, index?: number): IndicatorRef;

  getEntryLong(): BoolExpr | undefined;
  setEntryLong(value?: BoolExpr): StrategySearchSpec;
  hasEntryLong(): boolean;
  clearEntryLong(): StrategySearchSpec;

  getExitLong(): BoolExpr | undefined;
  setExitLong(value?: BoolExpr): StrategySearchSpec;
  hasExitLong(): boolean;
  clearExitLong(): StrategySearchSpec;

  getEntryShort(): BoolExpr | undefined;
  setEntryShort(value?: BoolExpr): StrategySearchSpec;
  hasEntryShort(): boolean;
  clearEntryShort(): StrategySearchSpec;

  getExitShort(): BoolExpr | undefined;
  setExitShort(value?: BoolExpr): StrategySearchSpec;
  hasExitShort(): boolean;
  clearExitShort(): StrategySearchSpec;

  getSizing(): PositionSizing | undefined;
  setSizing(value?: PositionSizing): StrategySearchSpec;
  hasSizing(): boolean;
  clearSizing(): StrategySearchSpec;

  getRisk(): RiskControls | undefined;
  setRisk(value?: RiskControls): StrategySearchSpec;
  hasRisk(): boolean;
  clearRisk(): StrategySearchSpec;

  getWarmupBars(): number;
  setWarmupBars(value: number): StrategySearchSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StrategySearchSpec.AsObject;
  static toObject(includeInstance: boolean, msg: StrategySearchSpec): StrategySearchSpec.AsObject;
  static serializeBinaryToWriter(message: StrategySearchSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StrategySearchSpec;
  static deserializeBinaryFromReader(message: StrategySearchSpec, reader: jspb.BinaryReader): StrategySearchSpec;
}

export namespace StrategySearchSpec {
  export type AsObject = {
    version: number,
    indicatorsList: Array<IndicatorRef.AsObject>,
    entryLong?: BoolExpr.AsObject,
    exitLong?: BoolExpr.AsObject,
    entryShort?: BoolExpr.AsObject,
    exitShort?: BoolExpr.AsObject,
    sizing?: PositionSizing.AsObject,
    risk?: RiskControls.AsObject,
    warmupBars: number,
  }
}

export enum PriceField { 
  PRICE_CLOSE = 0,
  PRICE_OPEN = 1,
  PRICE_HIGH = 2,
  PRICE_LOW = 3,
  PRICE_VOLUME = 4,
  PRICE_HL2 = 5,
  PRICE_HLC3 = 6,
  PRICE_OHLC4 = 7,
}
export enum ArithOp { 
  ARITH_OP_ADD = 0,
  ARITH_OP_SUB = 1,
  ARITH_OP_MUL = 2,
  ARITH_OP_DIV = 3,
}
export enum CompareOp { 
  COMPARE_OP_GT = 0,
  COMPARE_OP_GE = 1,
  COMPARE_OP_LT = 2,
  COMPARE_OP_LE = 3,
  COMPARE_OP_EQ = 4,
  COMPARE_OP_NE = 5,
  COMPARE_OP_CROSSES_ABOVE = 6,
  COMPARE_OP_CROSSES_BELOW = 7,
}
