import * as jspb from 'google-protobuf'



export class HtDcPeriodParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HtDcPeriodParams.AsObject;
  static toObject(includeInstance: boolean, msg: HtDcPeriodParams): HtDcPeriodParams.AsObject;
  static serializeBinaryToWriter(message: HtDcPeriodParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HtDcPeriodParams;
  static deserializeBinaryFromReader(message: HtDcPeriodParams, reader: jspb.BinaryReader): HtDcPeriodParams;
}

export namespace HtDcPeriodParams {
  export type AsObject = {
  }
}

export class HtDcPhaseParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HtDcPhaseParams.AsObject;
  static toObject(includeInstance: boolean, msg: HtDcPhaseParams): HtDcPhaseParams.AsObject;
  static serializeBinaryToWriter(message: HtDcPhaseParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HtDcPhaseParams;
  static deserializeBinaryFromReader(message: HtDcPhaseParams, reader: jspb.BinaryReader): HtDcPhaseParams;
}

export namespace HtDcPhaseParams {
  export type AsObject = {
  }
}

export class HtPhasorParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HtPhasorParams.AsObject;
  static toObject(includeInstance: boolean, msg: HtPhasorParams): HtPhasorParams.AsObject;
  static serializeBinaryToWriter(message: HtPhasorParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HtPhasorParams;
  static deserializeBinaryFromReader(message: HtPhasorParams, reader: jspb.BinaryReader): HtPhasorParams;
}

export namespace HtPhasorParams {
  export type AsObject = {
  }
}

export class HtSineParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HtSineParams.AsObject;
  static toObject(includeInstance: boolean, msg: HtSineParams): HtSineParams.AsObject;
  static serializeBinaryToWriter(message: HtSineParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HtSineParams;
  static deserializeBinaryFromReader(message: HtSineParams, reader: jspb.BinaryReader): HtSineParams;
}

export namespace HtSineParams {
  export type AsObject = {
  }
}

export class HtTrendModeParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HtTrendModeParams.AsObject;
  static toObject(includeInstance: boolean, msg: HtTrendModeParams): HtTrendModeParams.AsObject;
  static serializeBinaryToWriter(message: HtTrendModeParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HtTrendModeParams;
  static deserializeBinaryFromReader(message: HtTrendModeParams, reader: jspb.BinaryReader): HtTrendModeParams;
}

export namespace HtTrendModeParams {
  export type AsObject = {
  }
}

export class AddParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddParams.AsObject;
  static toObject(includeInstance: boolean, msg: AddParams): AddParams.AsObject;
  static serializeBinaryToWriter(message: AddParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddParams;
  static deserializeBinaryFromReader(message: AddParams, reader: jspb.BinaryReader): AddParams;
}

export namespace AddParams {
  export type AsObject = {
  }
}

export class DivParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DivParams.AsObject;
  static toObject(includeInstance: boolean, msg: DivParams): DivParams.AsObject;
  static serializeBinaryToWriter(message: DivParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DivParams;
  static deserializeBinaryFromReader(message: DivParams, reader: jspb.BinaryReader): DivParams;
}

export namespace DivParams {
  export type AsObject = {
  }
}

export class MaxParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MaxParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaxParams.AsObject;
  static toObject(includeInstance: boolean, msg: MaxParams): MaxParams.AsObject;
  static serializeBinaryToWriter(message: MaxParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaxParams;
  static deserializeBinaryFromReader(message: MaxParams, reader: jspb.BinaryReader): MaxParams;
}

export namespace MaxParams {
  export type AsObject = {
    period: number,
  }
}

export class MaxIndexParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MaxIndexParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaxIndexParams.AsObject;
  static toObject(includeInstance: boolean, msg: MaxIndexParams): MaxIndexParams.AsObject;
  static serializeBinaryToWriter(message: MaxIndexParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaxIndexParams;
  static deserializeBinaryFromReader(message: MaxIndexParams, reader: jspb.BinaryReader): MaxIndexParams;
}

export namespace MaxIndexParams {
  export type AsObject = {
    period: number,
  }
}

export class MinParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MinParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinParams.AsObject;
  static toObject(includeInstance: boolean, msg: MinParams): MinParams.AsObject;
  static serializeBinaryToWriter(message: MinParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinParams;
  static deserializeBinaryFromReader(message: MinParams, reader: jspb.BinaryReader): MinParams;
}

export namespace MinParams {
  export type AsObject = {
    period: number,
  }
}

export class MinIndexParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MinIndexParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinIndexParams.AsObject;
  static toObject(includeInstance: boolean, msg: MinIndexParams): MinIndexParams.AsObject;
  static serializeBinaryToWriter(message: MinIndexParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinIndexParams;
  static deserializeBinaryFromReader(message: MinIndexParams, reader: jspb.BinaryReader): MinIndexParams;
}

export namespace MinIndexParams {
  export type AsObject = {
    period: number,
  }
}

export class MinMaxParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MinMaxParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinMaxParams.AsObject;
  static toObject(includeInstance: boolean, msg: MinMaxParams): MinMaxParams.AsObject;
  static serializeBinaryToWriter(message: MinMaxParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinMaxParams;
  static deserializeBinaryFromReader(message: MinMaxParams, reader: jspb.BinaryReader): MinMaxParams;
}

export namespace MinMaxParams {
  export type AsObject = {
    period: number,
  }
}

export class MinMaxIndexParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MinMaxIndexParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinMaxIndexParams.AsObject;
  static toObject(includeInstance: boolean, msg: MinMaxIndexParams): MinMaxIndexParams.AsObject;
  static serializeBinaryToWriter(message: MinMaxIndexParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinMaxIndexParams;
  static deserializeBinaryFromReader(message: MinMaxIndexParams, reader: jspb.BinaryReader): MinMaxIndexParams;
}

export namespace MinMaxIndexParams {
  export type AsObject = {
    period: number,
  }
}

export class MultParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultParams.AsObject;
  static toObject(includeInstance: boolean, msg: MultParams): MultParams.AsObject;
  static serializeBinaryToWriter(message: MultParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultParams;
  static deserializeBinaryFromReader(message: MultParams, reader: jspb.BinaryReader): MultParams;
}

export namespace MultParams {
  export type AsObject = {
  }
}

export class SubParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubParams.AsObject;
  static toObject(includeInstance: boolean, msg: SubParams): SubParams.AsObject;
  static serializeBinaryToWriter(message: SubParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubParams;
  static deserializeBinaryFromReader(message: SubParams, reader: jspb.BinaryReader): SubParams;
}

export namespace SubParams {
  export type AsObject = {
  }
}

export class SumParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): SumParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SumParams.AsObject;
  static toObject(includeInstance: boolean, msg: SumParams): SumParams.AsObject;
  static serializeBinaryToWriter(message: SumParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SumParams;
  static deserializeBinaryFromReader(message: SumParams, reader: jspb.BinaryReader): SumParams;
}

export namespace SumParams {
  export type AsObject = {
    period: number,
  }
}

export class AcosParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcosParams.AsObject;
  static toObject(includeInstance: boolean, msg: AcosParams): AcosParams.AsObject;
  static serializeBinaryToWriter(message: AcosParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcosParams;
  static deserializeBinaryFromReader(message: AcosParams, reader: jspb.BinaryReader): AcosParams;
}

export namespace AcosParams {
  export type AsObject = {
  }
}

export class AsinParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsinParams.AsObject;
  static toObject(includeInstance: boolean, msg: AsinParams): AsinParams.AsObject;
  static serializeBinaryToWriter(message: AsinParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsinParams;
  static deserializeBinaryFromReader(message: AsinParams, reader: jspb.BinaryReader): AsinParams;
}

export namespace AsinParams {
  export type AsObject = {
  }
}

export class AtanParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AtanParams.AsObject;
  static toObject(includeInstance: boolean, msg: AtanParams): AtanParams.AsObject;
  static serializeBinaryToWriter(message: AtanParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AtanParams;
  static deserializeBinaryFromReader(message: AtanParams, reader: jspb.BinaryReader): AtanParams;
}

export namespace AtanParams {
  export type AsObject = {
  }
}

export class CeilParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CeilParams.AsObject;
  static toObject(includeInstance: boolean, msg: CeilParams): CeilParams.AsObject;
  static serializeBinaryToWriter(message: CeilParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CeilParams;
  static deserializeBinaryFromReader(message: CeilParams, reader: jspb.BinaryReader): CeilParams;
}

export namespace CeilParams {
  export type AsObject = {
  }
}

export class CosParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CosParams.AsObject;
  static toObject(includeInstance: boolean, msg: CosParams): CosParams.AsObject;
  static serializeBinaryToWriter(message: CosParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CosParams;
  static deserializeBinaryFromReader(message: CosParams, reader: jspb.BinaryReader): CosParams;
}

export namespace CosParams {
  export type AsObject = {
  }
}

export class CoshParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoshParams.AsObject;
  static toObject(includeInstance: boolean, msg: CoshParams): CoshParams.AsObject;
  static serializeBinaryToWriter(message: CoshParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoshParams;
  static deserializeBinaryFromReader(message: CoshParams, reader: jspb.BinaryReader): CoshParams;
}

export namespace CoshParams {
  export type AsObject = {
  }
}

export class ExpParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpParams.AsObject;
  static toObject(includeInstance: boolean, msg: ExpParams): ExpParams.AsObject;
  static serializeBinaryToWriter(message: ExpParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpParams;
  static deserializeBinaryFromReader(message: ExpParams, reader: jspb.BinaryReader): ExpParams;
}

export namespace ExpParams {
  export type AsObject = {
  }
}

export class FloorParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FloorParams.AsObject;
  static toObject(includeInstance: boolean, msg: FloorParams): FloorParams.AsObject;
  static serializeBinaryToWriter(message: FloorParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloorParams;
  static deserializeBinaryFromReader(message: FloorParams, reader: jspb.BinaryReader): FloorParams;
}

export namespace FloorParams {
  export type AsObject = {
  }
}

export class LnParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LnParams.AsObject;
  static toObject(includeInstance: boolean, msg: LnParams): LnParams.AsObject;
  static serializeBinaryToWriter(message: LnParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LnParams;
  static deserializeBinaryFromReader(message: LnParams, reader: jspb.BinaryReader): LnParams;
}

export namespace LnParams {
  export type AsObject = {
  }
}

export class Log10Params extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Log10Params.AsObject;
  static toObject(includeInstance: boolean, msg: Log10Params): Log10Params.AsObject;
  static serializeBinaryToWriter(message: Log10Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Log10Params;
  static deserializeBinaryFromReader(message: Log10Params, reader: jspb.BinaryReader): Log10Params;
}

export namespace Log10Params {
  export type AsObject = {
  }
}

export class SinParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SinParams.AsObject;
  static toObject(includeInstance: boolean, msg: SinParams): SinParams.AsObject;
  static serializeBinaryToWriter(message: SinParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SinParams;
  static deserializeBinaryFromReader(message: SinParams, reader: jspb.BinaryReader): SinParams;
}

export namespace SinParams {
  export type AsObject = {
  }
}

export class SinhParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SinhParams.AsObject;
  static toObject(includeInstance: boolean, msg: SinhParams): SinhParams.AsObject;
  static serializeBinaryToWriter(message: SinhParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SinhParams;
  static deserializeBinaryFromReader(message: SinhParams, reader: jspb.BinaryReader): SinhParams;
}

export namespace SinhParams {
  export type AsObject = {
  }
}

export class SqrtParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqrtParams.AsObject;
  static toObject(includeInstance: boolean, msg: SqrtParams): SqrtParams.AsObject;
  static serializeBinaryToWriter(message: SqrtParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqrtParams;
  static deserializeBinaryFromReader(message: SqrtParams, reader: jspb.BinaryReader): SqrtParams;
}

export namespace SqrtParams {
  export type AsObject = {
  }
}

export class TanParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TanParams.AsObject;
  static toObject(includeInstance: boolean, msg: TanParams): TanParams.AsObject;
  static serializeBinaryToWriter(message: TanParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TanParams;
  static deserializeBinaryFromReader(message: TanParams, reader: jspb.BinaryReader): TanParams;
}

export namespace TanParams {
  export type AsObject = {
  }
}

export class TanhParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TanhParams.AsObject;
  static toObject(includeInstance: boolean, msg: TanhParams): TanhParams.AsObject;
  static serializeBinaryToWriter(message: TanhParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TanhParams;
  static deserializeBinaryFromReader(message: TanhParams, reader: jspb.BinaryReader): TanhParams;
}

export namespace TanhParams {
  export type AsObject = {
  }
}

export class AdxParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): AdxParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdxParams.AsObject;
  static toObject(includeInstance: boolean, msg: AdxParams): AdxParams.AsObject;
  static serializeBinaryToWriter(message: AdxParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdxParams;
  static deserializeBinaryFromReader(message: AdxParams, reader: jspb.BinaryReader): AdxParams;
}

export namespace AdxParams {
  export type AsObject = {
    period: number,
  }
}

export class AdxrParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): AdxrParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdxrParams.AsObject;
  static toObject(includeInstance: boolean, msg: AdxrParams): AdxrParams.AsObject;
  static serializeBinaryToWriter(message: AdxrParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdxrParams;
  static deserializeBinaryFromReader(message: AdxrParams, reader: jspb.BinaryReader): AdxrParams;
}

export namespace AdxrParams {
  export type AsObject = {
    period: number,
  }
}

export class ApoParams extends jspb.Message {
  getFastPeriod(): number;
  setFastPeriod(value: number): ApoParams;

  getSlowPeriod(): number;
  setSlowPeriod(value: number): ApoParams;

  getMaType(): MAType;
  setMaType(value: MAType): ApoParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApoParams.AsObject;
  static toObject(includeInstance: boolean, msg: ApoParams): ApoParams.AsObject;
  static serializeBinaryToWriter(message: ApoParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApoParams;
  static deserializeBinaryFromReader(message: ApoParams, reader: jspb.BinaryReader): ApoParams;
}

export namespace ApoParams {
  export type AsObject = {
    fastPeriod: number,
    slowPeriod: number,
    maType: MAType,
  }
}

export class AroonParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): AroonParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AroonParams.AsObject;
  static toObject(includeInstance: boolean, msg: AroonParams): AroonParams.AsObject;
  static serializeBinaryToWriter(message: AroonParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AroonParams;
  static deserializeBinaryFromReader(message: AroonParams, reader: jspb.BinaryReader): AroonParams;
}

export namespace AroonParams {
  export type AsObject = {
    period: number,
  }
}

export class AroonOscParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): AroonOscParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AroonOscParams.AsObject;
  static toObject(includeInstance: boolean, msg: AroonOscParams): AroonOscParams.AsObject;
  static serializeBinaryToWriter(message: AroonOscParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AroonOscParams;
  static deserializeBinaryFromReader(message: AroonOscParams, reader: jspb.BinaryReader): AroonOscParams;
}

export namespace AroonOscParams {
  export type AsObject = {
    period: number,
  }
}

export class BopParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BopParams.AsObject;
  static toObject(includeInstance: boolean, msg: BopParams): BopParams.AsObject;
  static serializeBinaryToWriter(message: BopParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BopParams;
  static deserializeBinaryFromReader(message: BopParams, reader: jspb.BinaryReader): BopParams;
}

export namespace BopParams {
  export type AsObject = {
  }
}

export class CciParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): CciParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CciParams.AsObject;
  static toObject(includeInstance: boolean, msg: CciParams): CciParams.AsObject;
  static serializeBinaryToWriter(message: CciParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CciParams;
  static deserializeBinaryFromReader(message: CciParams, reader: jspb.BinaryReader): CciParams;
}

export namespace CciParams {
  export type AsObject = {
    period: number,
  }
}

export class CmoParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): CmoParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CmoParams.AsObject;
  static toObject(includeInstance: boolean, msg: CmoParams): CmoParams.AsObject;
  static serializeBinaryToWriter(message: CmoParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CmoParams;
  static deserializeBinaryFromReader(message: CmoParams, reader: jspb.BinaryReader): CmoParams;
}

export namespace CmoParams {
  export type AsObject = {
    period: number,
  }
}

export class DxParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): DxParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DxParams.AsObject;
  static toObject(includeInstance: boolean, msg: DxParams): DxParams.AsObject;
  static serializeBinaryToWriter(message: DxParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DxParams;
  static deserializeBinaryFromReader(message: DxParams, reader: jspb.BinaryReader): DxParams;
}

export namespace DxParams {
  export type AsObject = {
    period: number,
  }
}

export class MacdParams extends jspb.Message {
  getFastPeriod(): number;
  setFastPeriod(value: number): MacdParams;

  getSlowPeriod(): number;
  setSlowPeriod(value: number): MacdParams;

  getSignalPeriod(): number;
  setSignalPeriod(value: number): MacdParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MacdParams.AsObject;
  static toObject(includeInstance: boolean, msg: MacdParams): MacdParams.AsObject;
  static serializeBinaryToWriter(message: MacdParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MacdParams;
  static deserializeBinaryFromReader(message: MacdParams, reader: jspb.BinaryReader): MacdParams;
}

export namespace MacdParams {
  export type AsObject = {
    fastPeriod: number,
    slowPeriod: number,
    signalPeriod: number,
  }
}

export class MacdExtParams extends jspb.Message {
  getFastPeriod(): number;
  setFastPeriod(value: number): MacdExtParams;

  getFastMaType(): MAType;
  setFastMaType(value: MAType): MacdExtParams;

  getSlowPeriod(): number;
  setSlowPeriod(value: number): MacdExtParams;

  getSlowMaType(): MAType;
  setSlowMaType(value: MAType): MacdExtParams;

  getSignalPeriod(): number;
  setSignalPeriod(value: number): MacdExtParams;

  getSignalMaType(): MAType;
  setSignalMaType(value: MAType): MacdExtParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MacdExtParams.AsObject;
  static toObject(includeInstance: boolean, msg: MacdExtParams): MacdExtParams.AsObject;
  static serializeBinaryToWriter(message: MacdExtParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MacdExtParams;
  static deserializeBinaryFromReader(message: MacdExtParams, reader: jspb.BinaryReader): MacdExtParams;
}

export namespace MacdExtParams {
  export type AsObject = {
    fastPeriod: number,
    fastMaType: MAType,
    slowPeriod: number,
    slowMaType: MAType,
    signalPeriod: number,
    signalMaType: MAType,
  }
}

export class MacdFixParams extends jspb.Message {
  getSignalPeriod(): number;
  setSignalPeriod(value: number): MacdFixParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MacdFixParams.AsObject;
  static toObject(includeInstance: boolean, msg: MacdFixParams): MacdFixParams.AsObject;
  static serializeBinaryToWriter(message: MacdFixParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MacdFixParams;
  static deserializeBinaryFromReader(message: MacdFixParams, reader: jspb.BinaryReader): MacdFixParams;
}

export namespace MacdFixParams {
  export type AsObject = {
    signalPeriod: number,
  }
}

export class MfiParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MfiParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MfiParams.AsObject;
  static toObject(includeInstance: boolean, msg: MfiParams): MfiParams.AsObject;
  static serializeBinaryToWriter(message: MfiParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MfiParams;
  static deserializeBinaryFromReader(message: MfiParams, reader: jspb.BinaryReader): MfiParams;
}

export namespace MfiParams {
  export type AsObject = {
    period: number,
  }
}

export class MinusDiParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MinusDiParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinusDiParams.AsObject;
  static toObject(includeInstance: boolean, msg: MinusDiParams): MinusDiParams.AsObject;
  static serializeBinaryToWriter(message: MinusDiParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinusDiParams;
  static deserializeBinaryFromReader(message: MinusDiParams, reader: jspb.BinaryReader): MinusDiParams;
}

export namespace MinusDiParams {
  export type AsObject = {
    period: number,
  }
}

export class MinusDmParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MinusDmParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinusDmParams.AsObject;
  static toObject(includeInstance: boolean, msg: MinusDmParams): MinusDmParams.AsObject;
  static serializeBinaryToWriter(message: MinusDmParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinusDmParams;
  static deserializeBinaryFromReader(message: MinusDmParams, reader: jspb.BinaryReader): MinusDmParams;
}

export namespace MinusDmParams {
  export type AsObject = {
    period: number,
  }
}

export class MomParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MomParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MomParams.AsObject;
  static toObject(includeInstance: boolean, msg: MomParams): MomParams.AsObject;
  static serializeBinaryToWriter(message: MomParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MomParams;
  static deserializeBinaryFromReader(message: MomParams, reader: jspb.BinaryReader): MomParams;
}

export namespace MomParams {
  export type AsObject = {
    period: number,
  }
}

export class PlusDiParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): PlusDiParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlusDiParams.AsObject;
  static toObject(includeInstance: boolean, msg: PlusDiParams): PlusDiParams.AsObject;
  static serializeBinaryToWriter(message: PlusDiParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlusDiParams;
  static deserializeBinaryFromReader(message: PlusDiParams, reader: jspb.BinaryReader): PlusDiParams;
}

export namespace PlusDiParams {
  export type AsObject = {
    period: number,
  }
}

export class PlusDmParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): PlusDmParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlusDmParams.AsObject;
  static toObject(includeInstance: boolean, msg: PlusDmParams): PlusDmParams.AsObject;
  static serializeBinaryToWriter(message: PlusDmParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlusDmParams;
  static deserializeBinaryFromReader(message: PlusDmParams, reader: jspb.BinaryReader): PlusDmParams;
}

export namespace PlusDmParams {
  export type AsObject = {
    period: number,
  }
}

export class PpoParams extends jspb.Message {
  getFastPeriod(): number;
  setFastPeriod(value: number): PpoParams;

  getSlowPeriod(): number;
  setSlowPeriod(value: number): PpoParams;

  getMaType(): MAType;
  setMaType(value: MAType): PpoParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PpoParams.AsObject;
  static toObject(includeInstance: boolean, msg: PpoParams): PpoParams.AsObject;
  static serializeBinaryToWriter(message: PpoParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PpoParams;
  static deserializeBinaryFromReader(message: PpoParams, reader: jspb.BinaryReader): PpoParams;
}

export namespace PpoParams {
  export type AsObject = {
    fastPeriod: number,
    slowPeriod: number,
    maType: MAType,
  }
}

export class RocParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): RocParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RocParams.AsObject;
  static toObject(includeInstance: boolean, msg: RocParams): RocParams.AsObject;
  static serializeBinaryToWriter(message: RocParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RocParams;
  static deserializeBinaryFromReader(message: RocParams, reader: jspb.BinaryReader): RocParams;
}

export namespace RocParams {
  export type AsObject = {
    period: number,
  }
}

export class RocpParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): RocpParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RocpParams.AsObject;
  static toObject(includeInstance: boolean, msg: RocpParams): RocpParams.AsObject;
  static serializeBinaryToWriter(message: RocpParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RocpParams;
  static deserializeBinaryFromReader(message: RocpParams, reader: jspb.BinaryReader): RocpParams;
}

export namespace RocpParams {
  export type AsObject = {
    period: number,
  }
}

export class RocrParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): RocrParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RocrParams.AsObject;
  static toObject(includeInstance: boolean, msg: RocrParams): RocrParams.AsObject;
  static serializeBinaryToWriter(message: RocrParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RocrParams;
  static deserializeBinaryFromReader(message: RocrParams, reader: jspb.BinaryReader): RocrParams;
}

export namespace RocrParams {
  export type AsObject = {
    period: number,
  }
}

export class Rocr100Params extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): Rocr100Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rocr100Params.AsObject;
  static toObject(includeInstance: boolean, msg: Rocr100Params): Rocr100Params.AsObject;
  static serializeBinaryToWriter(message: Rocr100Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rocr100Params;
  static deserializeBinaryFromReader(message: Rocr100Params, reader: jspb.BinaryReader): Rocr100Params;
}

export namespace Rocr100Params {
  export type AsObject = {
    period: number,
  }
}

export class RsiParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): RsiParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RsiParams.AsObject;
  static toObject(includeInstance: boolean, msg: RsiParams): RsiParams.AsObject;
  static serializeBinaryToWriter(message: RsiParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RsiParams;
  static deserializeBinaryFromReader(message: RsiParams, reader: jspb.BinaryReader): RsiParams;
}

export namespace RsiParams {
  export type AsObject = {
    period: number,
  }
}

export class StochParams extends jspb.Message {
  getFastKPeriod(): number;
  setFastKPeriod(value: number): StochParams;

  getSlowKPeriod(): number;
  setSlowKPeriod(value: number): StochParams;

  getSlowKMaType(): MAType;
  setSlowKMaType(value: MAType): StochParams;

  getSlowDPeriod(): number;
  setSlowDPeriod(value: number): StochParams;

  getSlowDMaType(): MAType;
  setSlowDMaType(value: MAType): StochParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StochParams.AsObject;
  static toObject(includeInstance: boolean, msg: StochParams): StochParams.AsObject;
  static serializeBinaryToWriter(message: StochParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StochParams;
  static deserializeBinaryFromReader(message: StochParams, reader: jspb.BinaryReader): StochParams;
}

export namespace StochParams {
  export type AsObject = {
    fastKPeriod: number,
    slowKPeriod: number,
    slowKMaType: MAType,
    slowDPeriod: number,
    slowDMaType: MAType,
  }
}

export class StochFParams extends jspb.Message {
  getFastKPeriod(): number;
  setFastKPeriod(value: number): StochFParams;

  getFastDPeriod(): number;
  setFastDPeriod(value: number): StochFParams;

  getFastDMaType(): MAType;
  setFastDMaType(value: MAType): StochFParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StochFParams.AsObject;
  static toObject(includeInstance: boolean, msg: StochFParams): StochFParams.AsObject;
  static serializeBinaryToWriter(message: StochFParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StochFParams;
  static deserializeBinaryFromReader(message: StochFParams, reader: jspb.BinaryReader): StochFParams;
}

export namespace StochFParams {
  export type AsObject = {
    fastKPeriod: number,
    fastDPeriod: number,
    fastDMaType: MAType,
  }
}

export class StochRsiParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): StochRsiParams;

  getFastKPeriod(): number;
  setFastKPeriod(value: number): StochRsiParams;

  getFastDPeriod(): number;
  setFastDPeriod(value: number): StochRsiParams;

  getFastDMaType(): MAType;
  setFastDMaType(value: MAType): StochRsiParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StochRsiParams.AsObject;
  static toObject(includeInstance: boolean, msg: StochRsiParams): StochRsiParams.AsObject;
  static serializeBinaryToWriter(message: StochRsiParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StochRsiParams;
  static deserializeBinaryFromReader(message: StochRsiParams, reader: jspb.BinaryReader): StochRsiParams;
}

export namespace StochRsiParams {
  export type AsObject = {
    period: number,
    fastKPeriod: number,
    fastDPeriod: number,
    fastDMaType: MAType,
  }
}

export class TrixParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): TrixParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrixParams.AsObject;
  static toObject(includeInstance: boolean, msg: TrixParams): TrixParams.AsObject;
  static serializeBinaryToWriter(message: TrixParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrixParams;
  static deserializeBinaryFromReader(message: TrixParams, reader: jspb.BinaryReader): TrixParams;
}

export namespace TrixParams {
  export type AsObject = {
    period: number,
  }
}

export class UltOscParams extends jspb.Message {
  getPeriod1(): number;
  setPeriod1(value: number): UltOscParams;

  getPeriod2(): number;
  setPeriod2(value: number): UltOscParams;

  getPeriod3(): number;
  setPeriod3(value: number): UltOscParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UltOscParams.AsObject;
  static toObject(includeInstance: boolean, msg: UltOscParams): UltOscParams.AsObject;
  static serializeBinaryToWriter(message: UltOscParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UltOscParams;
  static deserializeBinaryFromReader(message: UltOscParams, reader: jspb.BinaryReader): UltOscParams;
}

export namespace UltOscParams {
  export type AsObject = {
    period1: number,
    period2: number,
    period3: number,
  }
}

export class WillRParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): WillRParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WillRParams.AsObject;
  static toObject(includeInstance: boolean, msg: WillRParams): WillRParams.AsObject;
  static serializeBinaryToWriter(message: WillRParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WillRParams;
  static deserializeBinaryFromReader(message: WillRParams, reader: jspb.BinaryReader): WillRParams;
}

export namespace WillRParams {
  export type AsObject = {
    period: number,
  }
}

export class BbandsParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): BbandsParams;

  getNbDevUp(): number;
  setNbDevUp(value: number): BbandsParams;

  getNbDevDn(): number;
  setNbDevDn(value: number): BbandsParams;

  getMaType(): MAType;
  setMaType(value: MAType): BbandsParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BbandsParams.AsObject;
  static toObject(includeInstance: boolean, msg: BbandsParams): BbandsParams.AsObject;
  static serializeBinaryToWriter(message: BbandsParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BbandsParams;
  static deserializeBinaryFromReader(message: BbandsParams, reader: jspb.BinaryReader): BbandsParams;
}

export namespace BbandsParams {
  export type AsObject = {
    period: number,
    nbDevUp: number,
    nbDevDn: number,
    maType: MAType,
  }
}

export class DemaParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): DemaParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DemaParams.AsObject;
  static toObject(includeInstance: boolean, msg: DemaParams): DemaParams.AsObject;
  static serializeBinaryToWriter(message: DemaParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DemaParams;
  static deserializeBinaryFromReader(message: DemaParams, reader: jspb.BinaryReader): DemaParams;
}

export namespace DemaParams {
  export type AsObject = {
    period: number,
  }
}

export class EmaParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): EmaParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmaParams.AsObject;
  static toObject(includeInstance: boolean, msg: EmaParams): EmaParams.AsObject;
  static serializeBinaryToWriter(message: EmaParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmaParams;
  static deserializeBinaryFromReader(message: EmaParams, reader: jspb.BinaryReader): EmaParams;
}

export namespace EmaParams {
  export type AsObject = {
    period: number,
  }
}

export class HtTrendlineParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HtTrendlineParams.AsObject;
  static toObject(includeInstance: boolean, msg: HtTrendlineParams): HtTrendlineParams.AsObject;
  static serializeBinaryToWriter(message: HtTrendlineParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HtTrendlineParams;
  static deserializeBinaryFromReader(message: HtTrendlineParams, reader: jspb.BinaryReader): HtTrendlineParams;
}

export namespace HtTrendlineParams {
  export type AsObject = {
  }
}

export class KamaParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): KamaParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KamaParams.AsObject;
  static toObject(includeInstance: boolean, msg: KamaParams): KamaParams.AsObject;
  static serializeBinaryToWriter(message: KamaParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KamaParams;
  static deserializeBinaryFromReader(message: KamaParams, reader: jspb.BinaryReader): KamaParams;
}

export namespace KamaParams {
  export type AsObject = {
    period: number,
  }
}

export class MaParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MaParams;

  getMaType(): MAType;
  setMaType(value: MAType): MaParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaParams.AsObject;
  static toObject(includeInstance: boolean, msg: MaParams): MaParams.AsObject;
  static serializeBinaryToWriter(message: MaParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaParams;
  static deserializeBinaryFromReader(message: MaParams, reader: jspb.BinaryReader): MaParams;
}

export namespace MaParams {
  export type AsObject = {
    period: number,
    maType: MAType,
  }
}

export class MamaParams extends jspb.Message {
  getFastLimit(): number;
  setFastLimit(value: number): MamaParams;

  getSlowLimit(): number;
  setSlowLimit(value: number): MamaParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MamaParams.AsObject;
  static toObject(includeInstance: boolean, msg: MamaParams): MamaParams.AsObject;
  static serializeBinaryToWriter(message: MamaParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MamaParams;
  static deserializeBinaryFromReader(message: MamaParams, reader: jspb.BinaryReader): MamaParams;
}

export namespace MamaParams {
  export type AsObject = {
    fastLimit: number,
    slowLimit: number,
  }
}

export class MavpParams extends jspb.Message {
  getMinPeriod(): number;
  setMinPeriod(value: number): MavpParams;

  getMaxPeriod(): number;
  setMaxPeriod(value: number): MavpParams;

  getMaType(): MAType;
  setMaType(value: MAType): MavpParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MavpParams.AsObject;
  static toObject(includeInstance: boolean, msg: MavpParams): MavpParams.AsObject;
  static serializeBinaryToWriter(message: MavpParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MavpParams;
  static deserializeBinaryFromReader(message: MavpParams, reader: jspb.BinaryReader): MavpParams;
}

export namespace MavpParams {
  export type AsObject = {
    minPeriod: number,
    maxPeriod: number,
    maType: MAType,
  }
}

export class MidPointParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MidPointParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MidPointParams.AsObject;
  static toObject(includeInstance: boolean, msg: MidPointParams): MidPointParams.AsObject;
  static serializeBinaryToWriter(message: MidPointParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MidPointParams;
  static deserializeBinaryFromReader(message: MidPointParams, reader: jspb.BinaryReader): MidPointParams;
}

export namespace MidPointParams {
  export type AsObject = {
    period: number,
  }
}

export class MidPriceParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): MidPriceParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MidPriceParams.AsObject;
  static toObject(includeInstance: boolean, msg: MidPriceParams): MidPriceParams.AsObject;
  static serializeBinaryToWriter(message: MidPriceParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MidPriceParams;
  static deserializeBinaryFromReader(message: MidPriceParams, reader: jspb.BinaryReader): MidPriceParams;
}

export namespace MidPriceParams {
  export type AsObject = {
    period: number,
  }
}

export class SarParams extends jspb.Message {
  getAcceleration(): number;
  setAcceleration(value: number): SarParams;

  getMaximum(): number;
  setMaximum(value: number): SarParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SarParams.AsObject;
  static toObject(includeInstance: boolean, msg: SarParams): SarParams.AsObject;
  static serializeBinaryToWriter(message: SarParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SarParams;
  static deserializeBinaryFromReader(message: SarParams, reader: jspb.BinaryReader): SarParams;
}

export namespace SarParams {
  export type AsObject = {
    acceleration: number,
    maximum: number,
  }
}

export class SarExtParams extends jspb.Message {
  getStartValue(): number;
  setStartValue(value: number): SarExtParams;

  getOffsetOnReverse(): number;
  setOffsetOnReverse(value: number): SarExtParams;

  getAccelerationInitLong(): number;
  setAccelerationInitLong(value: number): SarExtParams;

  getAccelerationLong(): number;
  setAccelerationLong(value: number): SarExtParams;

  getAccelerationMaxLong(): number;
  setAccelerationMaxLong(value: number): SarExtParams;

  getAccelerationInitShort(): number;
  setAccelerationInitShort(value: number): SarExtParams;

  getAccelerationShort(): number;
  setAccelerationShort(value: number): SarExtParams;

  getAccelerationMaxShort(): number;
  setAccelerationMaxShort(value: number): SarExtParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SarExtParams.AsObject;
  static toObject(includeInstance: boolean, msg: SarExtParams): SarExtParams.AsObject;
  static serializeBinaryToWriter(message: SarExtParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SarExtParams;
  static deserializeBinaryFromReader(message: SarExtParams, reader: jspb.BinaryReader): SarExtParams;
}

export namespace SarExtParams {
  export type AsObject = {
    startValue: number,
    offsetOnReverse: number,
    accelerationInitLong: number,
    accelerationLong: number,
    accelerationMaxLong: number,
    accelerationInitShort: number,
    accelerationShort: number,
    accelerationMaxShort: number,
  }
}

export class SmaParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): SmaParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmaParams.AsObject;
  static toObject(includeInstance: boolean, msg: SmaParams): SmaParams.AsObject;
  static serializeBinaryToWriter(message: SmaParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmaParams;
  static deserializeBinaryFromReader(message: SmaParams, reader: jspb.BinaryReader): SmaParams;
}

export namespace SmaParams {
  export type AsObject = {
    period: number,
  }
}

export class T3Params extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): T3Params;

  getVFactor(): number;
  setVFactor(value: number): T3Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T3Params.AsObject;
  static toObject(includeInstance: boolean, msg: T3Params): T3Params.AsObject;
  static serializeBinaryToWriter(message: T3Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T3Params;
  static deserializeBinaryFromReader(message: T3Params, reader: jspb.BinaryReader): T3Params;
}

export namespace T3Params {
  export type AsObject = {
    period: number,
    vFactor: number,
  }
}

export class TemaParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): TemaParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemaParams.AsObject;
  static toObject(includeInstance: boolean, msg: TemaParams): TemaParams.AsObject;
  static serializeBinaryToWriter(message: TemaParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemaParams;
  static deserializeBinaryFromReader(message: TemaParams, reader: jspb.BinaryReader): TemaParams;
}

export namespace TemaParams {
  export type AsObject = {
    period: number,
  }
}

export class TrimaParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): TrimaParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrimaParams.AsObject;
  static toObject(includeInstance: boolean, msg: TrimaParams): TrimaParams.AsObject;
  static serializeBinaryToWriter(message: TrimaParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrimaParams;
  static deserializeBinaryFromReader(message: TrimaParams, reader: jspb.BinaryReader): TrimaParams;
}

export namespace TrimaParams {
  export type AsObject = {
    period: number,
  }
}

export class WmaParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): WmaParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WmaParams.AsObject;
  static toObject(includeInstance: boolean, msg: WmaParams): WmaParams.AsObject;
  static serializeBinaryToWriter(message: WmaParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WmaParams;
  static deserializeBinaryFromReader(message: WmaParams, reader: jspb.BinaryReader): WmaParams;
}

export namespace WmaParams {
  export type AsObject = {
    period: number,
  }
}

export class Cdl2CrowsParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cdl2CrowsParams.AsObject;
  static toObject(includeInstance: boolean, msg: Cdl2CrowsParams): Cdl2CrowsParams.AsObject;
  static serializeBinaryToWriter(message: Cdl2CrowsParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cdl2CrowsParams;
  static deserializeBinaryFromReader(message: Cdl2CrowsParams, reader: jspb.BinaryReader): Cdl2CrowsParams;
}

export namespace Cdl2CrowsParams {
  export type AsObject = {
  }
}

export class Cdl3BlackCrowsParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cdl3BlackCrowsParams.AsObject;
  static toObject(includeInstance: boolean, msg: Cdl3BlackCrowsParams): Cdl3BlackCrowsParams.AsObject;
  static serializeBinaryToWriter(message: Cdl3BlackCrowsParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cdl3BlackCrowsParams;
  static deserializeBinaryFromReader(message: Cdl3BlackCrowsParams, reader: jspb.BinaryReader): Cdl3BlackCrowsParams;
}

export namespace Cdl3BlackCrowsParams {
  export type AsObject = {
  }
}

export class Cdl3InsideParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cdl3InsideParams.AsObject;
  static toObject(includeInstance: boolean, msg: Cdl3InsideParams): Cdl3InsideParams.AsObject;
  static serializeBinaryToWriter(message: Cdl3InsideParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cdl3InsideParams;
  static deserializeBinaryFromReader(message: Cdl3InsideParams, reader: jspb.BinaryReader): Cdl3InsideParams;
}

export namespace Cdl3InsideParams {
  export type AsObject = {
  }
}

export class Cdl3LineStrikeParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cdl3LineStrikeParams.AsObject;
  static toObject(includeInstance: boolean, msg: Cdl3LineStrikeParams): Cdl3LineStrikeParams.AsObject;
  static serializeBinaryToWriter(message: Cdl3LineStrikeParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cdl3LineStrikeParams;
  static deserializeBinaryFromReader(message: Cdl3LineStrikeParams, reader: jspb.BinaryReader): Cdl3LineStrikeParams;
}

export namespace Cdl3LineStrikeParams {
  export type AsObject = {
  }
}

export class Cdl3OutsideParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cdl3OutsideParams.AsObject;
  static toObject(includeInstance: boolean, msg: Cdl3OutsideParams): Cdl3OutsideParams.AsObject;
  static serializeBinaryToWriter(message: Cdl3OutsideParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cdl3OutsideParams;
  static deserializeBinaryFromReader(message: Cdl3OutsideParams, reader: jspb.BinaryReader): Cdl3OutsideParams;
}

export namespace Cdl3OutsideParams {
  export type AsObject = {
  }
}

export class Cdl3StarsInSouthParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cdl3StarsInSouthParams.AsObject;
  static toObject(includeInstance: boolean, msg: Cdl3StarsInSouthParams): Cdl3StarsInSouthParams.AsObject;
  static serializeBinaryToWriter(message: Cdl3StarsInSouthParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cdl3StarsInSouthParams;
  static deserializeBinaryFromReader(message: Cdl3StarsInSouthParams, reader: jspb.BinaryReader): Cdl3StarsInSouthParams;
}

export namespace Cdl3StarsInSouthParams {
  export type AsObject = {
  }
}

export class Cdl3WhiteSoldiersParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cdl3WhiteSoldiersParams.AsObject;
  static toObject(includeInstance: boolean, msg: Cdl3WhiteSoldiersParams): Cdl3WhiteSoldiersParams.AsObject;
  static serializeBinaryToWriter(message: Cdl3WhiteSoldiersParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cdl3WhiteSoldiersParams;
  static deserializeBinaryFromReader(message: Cdl3WhiteSoldiersParams, reader: jspb.BinaryReader): Cdl3WhiteSoldiersParams;
}

export namespace Cdl3WhiteSoldiersParams {
  export type AsObject = {
  }
}

export class CdlAbandonedBabyParams extends jspb.Message {
  getPenetration(): number;
  setPenetration(value: number): CdlAbandonedBabyParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlAbandonedBabyParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlAbandonedBabyParams): CdlAbandonedBabyParams.AsObject;
  static serializeBinaryToWriter(message: CdlAbandonedBabyParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlAbandonedBabyParams;
  static deserializeBinaryFromReader(message: CdlAbandonedBabyParams, reader: jspb.BinaryReader): CdlAbandonedBabyParams;
}

export namespace CdlAbandonedBabyParams {
  export type AsObject = {
    penetration: number,
  }
}

export class CdlAdvanceBlockParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlAdvanceBlockParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlAdvanceBlockParams): CdlAdvanceBlockParams.AsObject;
  static serializeBinaryToWriter(message: CdlAdvanceBlockParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlAdvanceBlockParams;
  static deserializeBinaryFromReader(message: CdlAdvanceBlockParams, reader: jspb.BinaryReader): CdlAdvanceBlockParams;
}

export namespace CdlAdvanceBlockParams {
  export type AsObject = {
  }
}

export class CdlBeltHoldParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlBeltHoldParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlBeltHoldParams): CdlBeltHoldParams.AsObject;
  static serializeBinaryToWriter(message: CdlBeltHoldParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlBeltHoldParams;
  static deserializeBinaryFromReader(message: CdlBeltHoldParams, reader: jspb.BinaryReader): CdlBeltHoldParams;
}

export namespace CdlBeltHoldParams {
  export type AsObject = {
  }
}

export class CdlBreakawayParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlBreakawayParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlBreakawayParams): CdlBreakawayParams.AsObject;
  static serializeBinaryToWriter(message: CdlBreakawayParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlBreakawayParams;
  static deserializeBinaryFromReader(message: CdlBreakawayParams, reader: jspb.BinaryReader): CdlBreakawayParams;
}

export namespace CdlBreakawayParams {
  export type AsObject = {
  }
}

export class CdlClosingMarubozuParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlClosingMarubozuParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlClosingMarubozuParams): CdlClosingMarubozuParams.AsObject;
  static serializeBinaryToWriter(message: CdlClosingMarubozuParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlClosingMarubozuParams;
  static deserializeBinaryFromReader(message: CdlClosingMarubozuParams, reader: jspb.BinaryReader): CdlClosingMarubozuParams;
}

export namespace CdlClosingMarubozuParams {
  export type AsObject = {
  }
}

export class CdlConcealBabysWallParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlConcealBabysWallParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlConcealBabysWallParams): CdlConcealBabysWallParams.AsObject;
  static serializeBinaryToWriter(message: CdlConcealBabysWallParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlConcealBabysWallParams;
  static deserializeBinaryFromReader(message: CdlConcealBabysWallParams, reader: jspb.BinaryReader): CdlConcealBabysWallParams;
}

export namespace CdlConcealBabysWallParams {
  export type AsObject = {
  }
}

export class CdlCounterAttackParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlCounterAttackParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlCounterAttackParams): CdlCounterAttackParams.AsObject;
  static serializeBinaryToWriter(message: CdlCounterAttackParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlCounterAttackParams;
  static deserializeBinaryFromReader(message: CdlCounterAttackParams, reader: jspb.BinaryReader): CdlCounterAttackParams;
}

export namespace CdlCounterAttackParams {
  export type AsObject = {
  }
}

export class CdlDarkCloudCoverParams extends jspb.Message {
  getPenetration(): number;
  setPenetration(value: number): CdlDarkCloudCoverParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlDarkCloudCoverParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlDarkCloudCoverParams): CdlDarkCloudCoverParams.AsObject;
  static serializeBinaryToWriter(message: CdlDarkCloudCoverParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlDarkCloudCoverParams;
  static deserializeBinaryFromReader(message: CdlDarkCloudCoverParams, reader: jspb.BinaryReader): CdlDarkCloudCoverParams;
}

export namespace CdlDarkCloudCoverParams {
  export type AsObject = {
    penetration: number,
  }
}

export class CdlDojiParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlDojiParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlDojiParams): CdlDojiParams.AsObject;
  static serializeBinaryToWriter(message: CdlDojiParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlDojiParams;
  static deserializeBinaryFromReader(message: CdlDojiParams, reader: jspb.BinaryReader): CdlDojiParams;
}

export namespace CdlDojiParams {
  export type AsObject = {
  }
}

export class CdlDojiStarParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlDojiStarParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlDojiStarParams): CdlDojiStarParams.AsObject;
  static serializeBinaryToWriter(message: CdlDojiStarParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlDojiStarParams;
  static deserializeBinaryFromReader(message: CdlDojiStarParams, reader: jspb.BinaryReader): CdlDojiStarParams;
}

export namespace CdlDojiStarParams {
  export type AsObject = {
  }
}

export class CdlDragonflyDojiParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlDragonflyDojiParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlDragonflyDojiParams): CdlDragonflyDojiParams.AsObject;
  static serializeBinaryToWriter(message: CdlDragonflyDojiParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlDragonflyDojiParams;
  static deserializeBinaryFromReader(message: CdlDragonflyDojiParams, reader: jspb.BinaryReader): CdlDragonflyDojiParams;
}

export namespace CdlDragonflyDojiParams {
  export type AsObject = {
  }
}

export class CdlEngulfingParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlEngulfingParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlEngulfingParams): CdlEngulfingParams.AsObject;
  static serializeBinaryToWriter(message: CdlEngulfingParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlEngulfingParams;
  static deserializeBinaryFromReader(message: CdlEngulfingParams, reader: jspb.BinaryReader): CdlEngulfingParams;
}

export namespace CdlEngulfingParams {
  export type AsObject = {
  }
}

export class CdlEveningDojiStarParams extends jspb.Message {
  getPenetration(): number;
  setPenetration(value: number): CdlEveningDojiStarParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlEveningDojiStarParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlEveningDojiStarParams): CdlEveningDojiStarParams.AsObject;
  static serializeBinaryToWriter(message: CdlEveningDojiStarParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlEveningDojiStarParams;
  static deserializeBinaryFromReader(message: CdlEveningDojiStarParams, reader: jspb.BinaryReader): CdlEveningDojiStarParams;
}

export namespace CdlEveningDojiStarParams {
  export type AsObject = {
    penetration: number,
  }
}

export class CdlEveningStarParams extends jspb.Message {
  getPenetration(): number;
  setPenetration(value: number): CdlEveningStarParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlEveningStarParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlEveningStarParams): CdlEveningStarParams.AsObject;
  static serializeBinaryToWriter(message: CdlEveningStarParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlEveningStarParams;
  static deserializeBinaryFromReader(message: CdlEveningStarParams, reader: jspb.BinaryReader): CdlEveningStarParams;
}

export namespace CdlEveningStarParams {
  export type AsObject = {
    penetration: number,
  }
}

export class CdlGapSideSideWhiteParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlGapSideSideWhiteParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlGapSideSideWhiteParams): CdlGapSideSideWhiteParams.AsObject;
  static serializeBinaryToWriter(message: CdlGapSideSideWhiteParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlGapSideSideWhiteParams;
  static deserializeBinaryFromReader(message: CdlGapSideSideWhiteParams, reader: jspb.BinaryReader): CdlGapSideSideWhiteParams;
}

export namespace CdlGapSideSideWhiteParams {
  export type AsObject = {
  }
}

export class CdlGravestoneDojiParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlGravestoneDojiParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlGravestoneDojiParams): CdlGravestoneDojiParams.AsObject;
  static serializeBinaryToWriter(message: CdlGravestoneDojiParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlGravestoneDojiParams;
  static deserializeBinaryFromReader(message: CdlGravestoneDojiParams, reader: jspb.BinaryReader): CdlGravestoneDojiParams;
}

export namespace CdlGravestoneDojiParams {
  export type AsObject = {
  }
}

export class CdlHammerParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlHammerParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlHammerParams): CdlHammerParams.AsObject;
  static serializeBinaryToWriter(message: CdlHammerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlHammerParams;
  static deserializeBinaryFromReader(message: CdlHammerParams, reader: jspb.BinaryReader): CdlHammerParams;
}

export namespace CdlHammerParams {
  export type AsObject = {
  }
}

export class CdlHangingManParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlHangingManParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlHangingManParams): CdlHangingManParams.AsObject;
  static serializeBinaryToWriter(message: CdlHangingManParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlHangingManParams;
  static deserializeBinaryFromReader(message: CdlHangingManParams, reader: jspb.BinaryReader): CdlHangingManParams;
}

export namespace CdlHangingManParams {
  export type AsObject = {
  }
}

export class CdlHaramiParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlHaramiParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlHaramiParams): CdlHaramiParams.AsObject;
  static serializeBinaryToWriter(message: CdlHaramiParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlHaramiParams;
  static deserializeBinaryFromReader(message: CdlHaramiParams, reader: jspb.BinaryReader): CdlHaramiParams;
}

export namespace CdlHaramiParams {
  export type AsObject = {
  }
}

export class CdlHaramiCrossParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlHaramiCrossParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlHaramiCrossParams): CdlHaramiCrossParams.AsObject;
  static serializeBinaryToWriter(message: CdlHaramiCrossParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlHaramiCrossParams;
  static deserializeBinaryFromReader(message: CdlHaramiCrossParams, reader: jspb.BinaryReader): CdlHaramiCrossParams;
}

export namespace CdlHaramiCrossParams {
  export type AsObject = {
  }
}

export class CdlHighWaveParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlHighWaveParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlHighWaveParams): CdlHighWaveParams.AsObject;
  static serializeBinaryToWriter(message: CdlHighWaveParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlHighWaveParams;
  static deserializeBinaryFromReader(message: CdlHighWaveParams, reader: jspb.BinaryReader): CdlHighWaveParams;
}

export namespace CdlHighWaveParams {
  export type AsObject = {
  }
}

export class CdlHikkakeParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlHikkakeParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlHikkakeParams): CdlHikkakeParams.AsObject;
  static serializeBinaryToWriter(message: CdlHikkakeParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlHikkakeParams;
  static deserializeBinaryFromReader(message: CdlHikkakeParams, reader: jspb.BinaryReader): CdlHikkakeParams;
}

export namespace CdlHikkakeParams {
  export type AsObject = {
  }
}

export class CdlHikkakeModParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlHikkakeModParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlHikkakeModParams): CdlHikkakeModParams.AsObject;
  static serializeBinaryToWriter(message: CdlHikkakeModParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlHikkakeModParams;
  static deserializeBinaryFromReader(message: CdlHikkakeModParams, reader: jspb.BinaryReader): CdlHikkakeModParams;
}

export namespace CdlHikkakeModParams {
  export type AsObject = {
  }
}

export class CdlHomingPigeonParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlHomingPigeonParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlHomingPigeonParams): CdlHomingPigeonParams.AsObject;
  static serializeBinaryToWriter(message: CdlHomingPigeonParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlHomingPigeonParams;
  static deserializeBinaryFromReader(message: CdlHomingPigeonParams, reader: jspb.BinaryReader): CdlHomingPigeonParams;
}

export namespace CdlHomingPigeonParams {
  export type AsObject = {
  }
}

export class CdlIdentical3CrowsParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlIdentical3CrowsParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlIdentical3CrowsParams): CdlIdentical3CrowsParams.AsObject;
  static serializeBinaryToWriter(message: CdlIdentical3CrowsParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlIdentical3CrowsParams;
  static deserializeBinaryFromReader(message: CdlIdentical3CrowsParams, reader: jspb.BinaryReader): CdlIdentical3CrowsParams;
}

export namespace CdlIdentical3CrowsParams {
  export type AsObject = {
  }
}

export class CdlInNeckParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlInNeckParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlInNeckParams): CdlInNeckParams.AsObject;
  static serializeBinaryToWriter(message: CdlInNeckParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlInNeckParams;
  static deserializeBinaryFromReader(message: CdlInNeckParams, reader: jspb.BinaryReader): CdlInNeckParams;
}

export namespace CdlInNeckParams {
  export type AsObject = {
  }
}

export class CdlInvertedHammerParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlInvertedHammerParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlInvertedHammerParams): CdlInvertedHammerParams.AsObject;
  static serializeBinaryToWriter(message: CdlInvertedHammerParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlInvertedHammerParams;
  static deserializeBinaryFromReader(message: CdlInvertedHammerParams, reader: jspb.BinaryReader): CdlInvertedHammerParams;
}

export namespace CdlInvertedHammerParams {
  export type AsObject = {
  }
}

export class CdlKickingParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlKickingParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlKickingParams): CdlKickingParams.AsObject;
  static serializeBinaryToWriter(message: CdlKickingParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlKickingParams;
  static deserializeBinaryFromReader(message: CdlKickingParams, reader: jspb.BinaryReader): CdlKickingParams;
}

export namespace CdlKickingParams {
  export type AsObject = {
  }
}

export class CdlKickingByLengthParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlKickingByLengthParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlKickingByLengthParams): CdlKickingByLengthParams.AsObject;
  static serializeBinaryToWriter(message: CdlKickingByLengthParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlKickingByLengthParams;
  static deserializeBinaryFromReader(message: CdlKickingByLengthParams, reader: jspb.BinaryReader): CdlKickingByLengthParams;
}

export namespace CdlKickingByLengthParams {
  export type AsObject = {
  }
}

export class CdlLadderBottomParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlLadderBottomParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlLadderBottomParams): CdlLadderBottomParams.AsObject;
  static serializeBinaryToWriter(message: CdlLadderBottomParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlLadderBottomParams;
  static deserializeBinaryFromReader(message: CdlLadderBottomParams, reader: jspb.BinaryReader): CdlLadderBottomParams;
}

export namespace CdlLadderBottomParams {
  export type AsObject = {
  }
}

export class CdlLongLeggedDojiParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlLongLeggedDojiParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlLongLeggedDojiParams): CdlLongLeggedDojiParams.AsObject;
  static serializeBinaryToWriter(message: CdlLongLeggedDojiParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlLongLeggedDojiParams;
  static deserializeBinaryFromReader(message: CdlLongLeggedDojiParams, reader: jspb.BinaryReader): CdlLongLeggedDojiParams;
}

export namespace CdlLongLeggedDojiParams {
  export type AsObject = {
  }
}

export class CdlLongLineParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlLongLineParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlLongLineParams): CdlLongLineParams.AsObject;
  static serializeBinaryToWriter(message: CdlLongLineParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlLongLineParams;
  static deserializeBinaryFromReader(message: CdlLongLineParams, reader: jspb.BinaryReader): CdlLongLineParams;
}

export namespace CdlLongLineParams {
  export type AsObject = {
  }
}

export class CdlMarubozuParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlMarubozuParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlMarubozuParams): CdlMarubozuParams.AsObject;
  static serializeBinaryToWriter(message: CdlMarubozuParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlMarubozuParams;
  static deserializeBinaryFromReader(message: CdlMarubozuParams, reader: jspb.BinaryReader): CdlMarubozuParams;
}

export namespace CdlMarubozuParams {
  export type AsObject = {
  }
}

export class CdlMatchingLowParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlMatchingLowParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlMatchingLowParams): CdlMatchingLowParams.AsObject;
  static serializeBinaryToWriter(message: CdlMatchingLowParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlMatchingLowParams;
  static deserializeBinaryFromReader(message: CdlMatchingLowParams, reader: jspb.BinaryReader): CdlMatchingLowParams;
}

export namespace CdlMatchingLowParams {
  export type AsObject = {
  }
}

export class CdlMatHoldParams extends jspb.Message {
  getPenetration(): number;
  setPenetration(value: number): CdlMatHoldParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlMatHoldParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlMatHoldParams): CdlMatHoldParams.AsObject;
  static serializeBinaryToWriter(message: CdlMatHoldParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlMatHoldParams;
  static deserializeBinaryFromReader(message: CdlMatHoldParams, reader: jspb.BinaryReader): CdlMatHoldParams;
}

export namespace CdlMatHoldParams {
  export type AsObject = {
    penetration: number,
  }
}

export class CdlMorningDojiStarParams extends jspb.Message {
  getPenetration(): number;
  setPenetration(value: number): CdlMorningDojiStarParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlMorningDojiStarParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlMorningDojiStarParams): CdlMorningDojiStarParams.AsObject;
  static serializeBinaryToWriter(message: CdlMorningDojiStarParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlMorningDojiStarParams;
  static deserializeBinaryFromReader(message: CdlMorningDojiStarParams, reader: jspb.BinaryReader): CdlMorningDojiStarParams;
}

export namespace CdlMorningDojiStarParams {
  export type AsObject = {
    penetration: number,
  }
}

export class CdlMorningStarParams extends jspb.Message {
  getPenetration(): number;
  setPenetration(value: number): CdlMorningStarParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlMorningStarParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlMorningStarParams): CdlMorningStarParams.AsObject;
  static serializeBinaryToWriter(message: CdlMorningStarParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlMorningStarParams;
  static deserializeBinaryFromReader(message: CdlMorningStarParams, reader: jspb.BinaryReader): CdlMorningStarParams;
}

export namespace CdlMorningStarParams {
  export type AsObject = {
    penetration: number,
  }
}

export class CdlOnNeckParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlOnNeckParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlOnNeckParams): CdlOnNeckParams.AsObject;
  static serializeBinaryToWriter(message: CdlOnNeckParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlOnNeckParams;
  static deserializeBinaryFromReader(message: CdlOnNeckParams, reader: jspb.BinaryReader): CdlOnNeckParams;
}

export namespace CdlOnNeckParams {
  export type AsObject = {
  }
}

export class CdlPiercingParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlPiercingParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlPiercingParams): CdlPiercingParams.AsObject;
  static serializeBinaryToWriter(message: CdlPiercingParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlPiercingParams;
  static deserializeBinaryFromReader(message: CdlPiercingParams, reader: jspb.BinaryReader): CdlPiercingParams;
}

export namespace CdlPiercingParams {
  export type AsObject = {
  }
}

export class CdlRickshawManParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlRickshawManParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlRickshawManParams): CdlRickshawManParams.AsObject;
  static serializeBinaryToWriter(message: CdlRickshawManParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlRickshawManParams;
  static deserializeBinaryFromReader(message: CdlRickshawManParams, reader: jspb.BinaryReader): CdlRickshawManParams;
}

export namespace CdlRickshawManParams {
  export type AsObject = {
  }
}

export class CdlRiseFall3MethodsParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlRiseFall3MethodsParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlRiseFall3MethodsParams): CdlRiseFall3MethodsParams.AsObject;
  static serializeBinaryToWriter(message: CdlRiseFall3MethodsParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlRiseFall3MethodsParams;
  static deserializeBinaryFromReader(message: CdlRiseFall3MethodsParams, reader: jspb.BinaryReader): CdlRiseFall3MethodsParams;
}

export namespace CdlRiseFall3MethodsParams {
  export type AsObject = {
  }
}

export class CdlSeparatingLinesParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlSeparatingLinesParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlSeparatingLinesParams): CdlSeparatingLinesParams.AsObject;
  static serializeBinaryToWriter(message: CdlSeparatingLinesParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlSeparatingLinesParams;
  static deserializeBinaryFromReader(message: CdlSeparatingLinesParams, reader: jspb.BinaryReader): CdlSeparatingLinesParams;
}

export namespace CdlSeparatingLinesParams {
  export type AsObject = {
  }
}

export class CdlShootingStarParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlShootingStarParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlShootingStarParams): CdlShootingStarParams.AsObject;
  static serializeBinaryToWriter(message: CdlShootingStarParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlShootingStarParams;
  static deserializeBinaryFromReader(message: CdlShootingStarParams, reader: jspb.BinaryReader): CdlShootingStarParams;
}

export namespace CdlShootingStarParams {
  export type AsObject = {
  }
}

export class CdlShortLineParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlShortLineParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlShortLineParams): CdlShortLineParams.AsObject;
  static serializeBinaryToWriter(message: CdlShortLineParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlShortLineParams;
  static deserializeBinaryFromReader(message: CdlShortLineParams, reader: jspb.BinaryReader): CdlShortLineParams;
}

export namespace CdlShortLineParams {
  export type AsObject = {
  }
}

export class CdlSpinningTopParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlSpinningTopParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlSpinningTopParams): CdlSpinningTopParams.AsObject;
  static serializeBinaryToWriter(message: CdlSpinningTopParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlSpinningTopParams;
  static deserializeBinaryFromReader(message: CdlSpinningTopParams, reader: jspb.BinaryReader): CdlSpinningTopParams;
}

export namespace CdlSpinningTopParams {
  export type AsObject = {
  }
}

export class CdlStalledPatternParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlStalledPatternParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlStalledPatternParams): CdlStalledPatternParams.AsObject;
  static serializeBinaryToWriter(message: CdlStalledPatternParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlStalledPatternParams;
  static deserializeBinaryFromReader(message: CdlStalledPatternParams, reader: jspb.BinaryReader): CdlStalledPatternParams;
}

export namespace CdlStalledPatternParams {
  export type AsObject = {
  }
}

export class CdlStickSandwichParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlStickSandwichParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlStickSandwichParams): CdlStickSandwichParams.AsObject;
  static serializeBinaryToWriter(message: CdlStickSandwichParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlStickSandwichParams;
  static deserializeBinaryFromReader(message: CdlStickSandwichParams, reader: jspb.BinaryReader): CdlStickSandwichParams;
}

export namespace CdlStickSandwichParams {
  export type AsObject = {
  }
}

export class CdlTakuriParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlTakuriParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlTakuriParams): CdlTakuriParams.AsObject;
  static serializeBinaryToWriter(message: CdlTakuriParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlTakuriParams;
  static deserializeBinaryFromReader(message: CdlTakuriParams, reader: jspb.BinaryReader): CdlTakuriParams;
}

export namespace CdlTakuriParams {
  export type AsObject = {
  }
}

export class CdlTasukiGapParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlTasukiGapParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlTasukiGapParams): CdlTasukiGapParams.AsObject;
  static serializeBinaryToWriter(message: CdlTasukiGapParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlTasukiGapParams;
  static deserializeBinaryFromReader(message: CdlTasukiGapParams, reader: jspb.BinaryReader): CdlTasukiGapParams;
}

export namespace CdlTasukiGapParams {
  export type AsObject = {
  }
}

export class CdlThrustingParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlThrustingParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlThrustingParams): CdlThrustingParams.AsObject;
  static serializeBinaryToWriter(message: CdlThrustingParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlThrustingParams;
  static deserializeBinaryFromReader(message: CdlThrustingParams, reader: jspb.BinaryReader): CdlThrustingParams;
}

export namespace CdlThrustingParams {
  export type AsObject = {
  }
}

export class CdlTristarParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlTristarParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlTristarParams): CdlTristarParams.AsObject;
  static serializeBinaryToWriter(message: CdlTristarParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlTristarParams;
  static deserializeBinaryFromReader(message: CdlTristarParams, reader: jspb.BinaryReader): CdlTristarParams;
}

export namespace CdlTristarParams {
  export type AsObject = {
  }
}

export class CdlUnique3RiverParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlUnique3RiverParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlUnique3RiverParams): CdlUnique3RiverParams.AsObject;
  static serializeBinaryToWriter(message: CdlUnique3RiverParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlUnique3RiverParams;
  static deserializeBinaryFromReader(message: CdlUnique3RiverParams, reader: jspb.BinaryReader): CdlUnique3RiverParams;
}

export namespace CdlUnique3RiverParams {
  export type AsObject = {
  }
}

export class CdlUpsideGap2CrowsParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlUpsideGap2CrowsParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlUpsideGap2CrowsParams): CdlUpsideGap2CrowsParams.AsObject;
  static serializeBinaryToWriter(message: CdlUpsideGap2CrowsParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlUpsideGap2CrowsParams;
  static deserializeBinaryFromReader(message: CdlUpsideGap2CrowsParams, reader: jspb.BinaryReader): CdlUpsideGap2CrowsParams;
}

export namespace CdlUpsideGap2CrowsParams {
  export type AsObject = {
  }
}

export class CdlXsideGap3MethodsParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CdlXsideGap3MethodsParams.AsObject;
  static toObject(includeInstance: boolean, msg: CdlXsideGap3MethodsParams): CdlXsideGap3MethodsParams.AsObject;
  static serializeBinaryToWriter(message: CdlXsideGap3MethodsParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CdlXsideGap3MethodsParams;
  static deserializeBinaryFromReader(message: CdlXsideGap3MethodsParams, reader: jspb.BinaryReader): CdlXsideGap3MethodsParams;
}

export namespace CdlXsideGap3MethodsParams {
  export type AsObject = {
  }
}

export class AvgPriceParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvgPriceParams.AsObject;
  static toObject(includeInstance: boolean, msg: AvgPriceParams): AvgPriceParams.AsObject;
  static serializeBinaryToWriter(message: AvgPriceParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvgPriceParams;
  static deserializeBinaryFromReader(message: AvgPriceParams, reader: jspb.BinaryReader): AvgPriceParams;
}

export namespace AvgPriceParams {
  export type AsObject = {
  }
}

export class MedPriceParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedPriceParams.AsObject;
  static toObject(includeInstance: boolean, msg: MedPriceParams): MedPriceParams.AsObject;
  static serializeBinaryToWriter(message: MedPriceParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedPriceParams;
  static deserializeBinaryFromReader(message: MedPriceParams, reader: jspb.BinaryReader): MedPriceParams;
}

export namespace MedPriceParams {
  export type AsObject = {
  }
}

export class TypPriceParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypPriceParams.AsObject;
  static toObject(includeInstance: boolean, msg: TypPriceParams): TypPriceParams.AsObject;
  static serializeBinaryToWriter(message: TypPriceParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypPriceParams;
  static deserializeBinaryFromReader(message: TypPriceParams, reader: jspb.BinaryReader): TypPriceParams;
}

export namespace TypPriceParams {
  export type AsObject = {
  }
}

export class WclPriceParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WclPriceParams.AsObject;
  static toObject(includeInstance: boolean, msg: WclPriceParams): WclPriceParams.AsObject;
  static serializeBinaryToWriter(message: WclPriceParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WclPriceParams;
  static deserializeBinaryFromReader(message: WclPriceParams, reader: jspb.BinaryReader): WclPriceParams;
}

export namespace WclPriceParams {
  export type AsObject = {
  }
}

export class BetaParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): BetaParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BetaParams.AsObject;
  static toObject(includeInstance: boolean, msg: BetaParams): BetaParams.AsObject;
  static serializeBinaryToWriter(message: BetaParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BetaParams;
  static deserializeBinaryFromReader(message: BetaParams, reader: jspb.BinaryReader): BetaParams;
}

export namespace BetaParams {
  export type AsObject = {
    period: number,
  }
}

export class CorrelParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): CorrelParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CorrelParams.AsObject;
  static toObject(includeInstance: boolean, msg: CorrelParams): CorrelParams.AsObject;
  static serializeBinaryToWriter(message: CorrelParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CorrelParams;
  static deserializeBinaryFromReader(message: CorrelParams, reader: jspb.BinaryReader): CorrelParams;
}

export namespace CorrelParams {
  export type AsObject = {
    period: number,
  }
}

export class LinearRegParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): LinearRegParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinearRegParams.AsObject;
  static toObject(includeInstance: boolean, msg: LinearRegParams): LinearRegParams.AsObject;
  static serializeBinaryToWriter(message: LinearRegParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinearRegParams;
  static deserializeBinaryFromReader(message: LinearRegParams, reader: jspb.BinaryReader): LinearRegParams;
}

export namespace LinearRegParams {
  export type AsObject = {
    period: number,
  }
}

export class LinearRegAngleParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): LinearRegAngleParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinearRegAngleParams.AsObject;
  static toObject(includeInstance: boolean, msg: LinearRegAngleParams): LinearRegAngleParams.AsObject;
  static serializeBinaryToWriter(message: LinearRegAngleParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinearRegAngleParams;
  static deserializeBinaryFromReader(message: LinearRegAngleParams, reader: jspb.BinaryReader): LinearRegAngleParams;
}

export namespace LinearRegAngleParams {
  export type AsObject = {
    period: number,
  }
}

export class LinearRegInterceptParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): LinearRegInterceptParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinearRegInterceptParams.AsObject;
  static toObject(includeInstance: boolean, msg: LinearRegInterceptParams): LinearRegInterceptParams.AsObject;
  static serializeBinaryToWriter(message: LinearRegInterceptParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinearRegInterceptParams;
  static deserializeBinaryFromReader(message: LinearRegInterceptParams, reader: jspb.BinaryReader): LinearRegInterceptParams;
}

export namespace LinearRegInterceptParams {
  export type AsObject = {
    period: number,
  }
}

export class LinearRegSlopeParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): LinearRegSlopeParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinearRegSlopeParams.AsObject;
  static toObject(includeInstance: boolean, msg: LinearRegSlopeParams): LinearRegSlopeParams.AsObject;
  static serializeBinaryToWriter(message: LinearRegSlopeParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinearRegSlopeParams;
  static deserializeBinaryFromReader(message: LinearRegSlopeParams, reader: jspb.BinaryReader): LinearRegSlopeParams;
}

export namespace LinearRegSlopeParams {
  export type AsObject = {
    period: number,
  }
}

export class StdDevParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): StdDevParams;

  getNbDev(): number;
  setNbDev(value: number): StdDevParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StdDevParams.AsObject;
  static toObject(includeInstance: boolean, msg: StdDevParams): StdDevParams.AsObject;
  static serializeBinaryToWriter(message: StdDevParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StdDevParams;
  static deserializeBinaryFromReader(message: StdDevParams, reader: jspb.BinaryReader): StdDevParams;
}

export namespace StdDevParams {
  export type AsObject = {
    period: number,
    nbDev: number,
  }
}

export class TsfParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): TsfParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TsfParams.AsObject;
  static toObject(includeInstance: boolean, msg: TsfParams): TsfParams.AsObject;
  static serializeBinaryToWriter(message: TsfParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TsfParams;
  static deserializeBinaryFromReader(message: TsfParams, reader: jspb.BinaryReader): TsfParams;
}

export namespace TsfParams {
  export type AsObject = {
    period: number,
  }
}

export class VarParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): VarParams;

  getNbDev(): number;
  setNbDev(value: number): VarParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VarParams.AsObject;
  static toObject(includeInstance: boolean, msg: VarParams): VarParams.AsObject;
  static serializeBinaryToWriter(message: VarParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VarParams;
  static deserializeBinaryFromReader(message: VarParams, reader: jspb.BinaryReader): VarParams;
}

export namespace VarParams {
  export type AsObject = {
    period: number,
    nbDev: number,
  }
}

export class AtrParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): AtrParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AtrParams.AsObject;
  static toObject(includeInstance: boolean, msg: AtrParams): AtrParams.AsObject;
  static serializeBinaryToWriter(message: AtrParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AtrParams;
  static deserializeBinaryFromReader(message: AtrParams, reader: jspb.BinaryReader): AtrParams;
}

export namespace AtrParams {
  export type AsObject = {
    period: number,
  }
}

export class NatrParams extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): NatrParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NatrParams.AsObject;
  static toObject(includeInstance: boolean, msg: NatrParams): NatrParams.AsObject;
  static serializeBinaryToWriter(message: NatrParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NatrParams;
  static deserializeBinaryFromReader(message: NatrParams, reader: jspb.BinaryReader): NatrParams;
}

export namespace NatrParams {
  export type AsObject = {
    period: number,
  }
}

export class TrangeParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrangeParams.AsObject;
  static toObject(includeInstance: boolean, msg: TrangeParams): TrangeParams.AsObject;
  static serializeBinaryToWriter(message: TrangeParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrangeParams;
  static deserializeBinaryFromReader(message: TrangeParams, reader: jspb.BinaryReader): TrangeParams;
}

export namespace TrangeParams {
  export type AsObject = {
  }
}

export class AdParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdParams.AsObject;
  static toObject(includeInstance: boolean, msg: AdParams): AdParams.AsObject;
  static serializeBinaryToWriter(message: AdParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdParams;
  static deserializeBinaryFromReader(message: AdParams, reader: jspb.BinaryReader): AdParams;
}

export namespace AdParams {
  export type AsObject = {
  }
}

export class AdOscParams extends jspb.Message {
  getFastPeriod(): number;
  setFastPeriod(value: number): AdOscParams;

  getSlowPeriod(): number;
  setSlowPeriod(value: number): AdOscParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdOscParams.AsObject;
  static toObject(includeInstance: boolean, msg: AdOscParams): AdOscParams.AsObject;
  static serializeBinaryToWriter(message: AdOscParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdOscParams;
  static deserializeBinaryFromReader(message: AdOscParams, reader: jspb.BinaryReader): AdOscParams;
}

export namespace AdOscParams {
  export type AsObject = {
    fastPeriod: number,
    slowPeriod: number,
  }
}

export class ObvParams extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObvParams.AsObject;
  static toObject(includeInstance: boolean, msg: ObvParams): ObvParams.AsObject;
  static serializeBinaryToWriter(message: ObvParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObvParams;
  static deserializeBinaryFromReader(message: ObvParams, reader: jspb.BinaryReader): ObvParams;
}

export namespace ObvParams {
  export type AsObject = {
  }
}

export class IndicatorSettings extends jspb.Message {
  getRsi(): RsiParams | undefined;
  setRsi(value?: RsiParams): IndicatorSettings;
  hasRsi(): boolean;
  clearRsi(): IndicatorSettings;

  getHtDcperiod(): HtDcPeriodParams | undefined;
  setHtDcperiod(value?: HtDcPeriodParams): IndicatorSettings;
  hasHtDcperiod(): boolean;
  clearHtDcperiod(): IndicatorSettings;

  getHtDcphase(): HtDcPhaseParams | undefined;
  setHtDcphase(value?: HtDcPhaseParams): IndicatorSettings;
  hasHtDcphase(): boolean;
  clearHtDcphase(): IndicatorSettings;

  getHtPhasor(): HtPhasorParams | undefined;
  setHtPhasor(value?: HtPhasorParams): IndicatorSettings;
  hasHtPhasor(): boolean;
  clearHtPhasor(): IndicatorSettings;

  getHtSine(): HtSineParams | undefined;
  setHtSine(value?: HtSineParams): IndicatorSettings;
  hasHtSine(): boolean;
  clearHtSine(): IndicatorSettings;

  getHtTrendmode(): HtTrendModeParams | undefined;
  setHtTrendmode(value?: HtTrendModeParams): IndicatorSettings;
  hasHtTrendmode(): boolean;
  clearHtTrendmode(): IndicatorSettings;

  getAdd(): AddParams | undefined;
  setAdd(value?: AddParams): IndicatorSettings;
  hasAdd(): boolean;
  clearAdd(): IndicatorSettings;

  getDiv(): DivParams | undefined;
  setDiv(value?: DivParams): IndicatorSettings;
  hasDiv(): boolean;
  clearDiv(): IndicatorSettings;

  getMax(): MaxParams | undefined;
  setMax(value?: MaxParams): IndicatorSettings;
  hasMax(): boolean;
  clearMax(): IndicatorSettings;

  getMaxindex(): MaxIndexParams | undefined;
  setMaxindex(value?: MaxIndexParams): IndicatorSettings;
  hasMaxindex(): boolean;
  clearMaxindex(): IndicatorSettings;

  getMin(): MinParams | undefined;
  setMin(value?: MinParams): IndicatorSettings;
  hasMin(): boolean;
  clearMin(): IndicatorSettings;

  getMinindex(): MinIndexParams | undefined;
  setMinindex(value?: MinIndexParams): IndicatorSettings;
  hasMinindex(): boolean;
  clearMinindex(): IndicatorSettings;

  getMinmax(): MinMaxParams | undefined;
  setMinmax(value?: MinMaxParams): IndicatorSettings;
  hasMinmax(): boolean;
  clearMinmax(): IndicatorSettings;

  getMinmaxindex(): MinMaxIndexParams | undefined;
  setMinmaxindex(value?: MinMaxIndexParams): IndicatorSettings;
  hasMinmaxindex(): boolean;
  clearMinmaxindex(): IndicatorSettings;

  getMult(): MultParams | undefined;
  setMult(value?: MultParams): IndicatorSettings;
  hasMult(): boolean;
  clearMult(): IndicatorSettings;

  getSub(): SubParams | undefined;
  setSub(value?: SubParams): IndicatorSettings;
  hasSub(): boolean;
  clearSub(): IndicatorSettings;

  getSum(): SumParams | undefined;
  setSum(value?: SumParams): IndicatorSettings;
  hasSum(): boolean;
  clearSum(): IndicatorSettings;

  getAcos(): AcosParams | undefined;
  setAcos(value?: AcosParams): IndicatorSettings;
  hasAcos(): boolean;
  clearAcos(): IndicatorSettings;

  getAsin(): AsinParams | undefined;
  setAsin(value?: AsinParams): IndicatorSettings;
  hasAsin(): boolean;
  clearAsin(): IndicatorSettings;

  getAtan(): AtanParams | undefined;
  setAtan(value?: AtanParams): IndicatorSettings;
  hasAtan(): boolean;
  clearAtan(): IndicatorSettings;

  getCeil(): CeilParams | undefined;
  setCeil(value?: CeilParams): IndicatorSettings;
  hasCeil(): boolean;
  clearCeil(): IndicatorSettings;

  getCos(): CosParams | undefined;
  setCos(value?: CosParams): IndicatorSettings;
  hasCos(): boolean;
  clearCos(): IndicatorSettings;

  getCosh(): CoshParams | undefined;
  setCosh(value?: CoshParams): IndicatorSettings;
  hasCosh(): boolean;
  clearCosh(): IndicatorSettings;

  getExp(): ExpParams | undefined;
  setExp(value?: ExpParams): IndicatorSettings;
  hasExp(): boolean;
  clearExp(): IndicatorSettings;

  getFloor(): FloorParams | undefined;
  setFloor(value?: FloorParams): IndicatorSettings;
  hasFloor(): boolean;
  clearFloor(): IndicatorSettings;

  getLn(): LnParams | undefined;
  setLn(value?: LnParams): IndicatorSettings;
  hasLn(): boolean;
  clearLn(): IndicatorSettings;

  getLog10(): Log10Params | undefined;
  setLog10(value?: Log10Params): IndicatorSettings;
  hasLog10(): boolean;
  clearLog10(): IndicatorSettings;

  getSin(): SinParams | undefined;
  setSin(value?: SinParams): IndicatorSettings;
  hasSin(): boolean;
  clearSin(): IndicatorSettings;

  getSinh(): SinhParams | undefined;
  setSinh(value?: SinhParams): IndicatorSettings;
  hasSinh(): boolean;
  clearSinh(): IndicatorSettings;

  getSqrt(): SqrtParams | undefined;
  setSqrt(value?: SqrtParams): IndicatorSettings;
  hasSqrt(): boolean;
  clearSqrt(): IndicatorSettings;

  getTan(): TanParams | undefined;
  setTan(value?: TanParams): IndicatorSettings;
  hasTan(): boolean;
  clearTan(): IndicatorSettings;

  getTanh(): TanhParams | undefined;
  setTanh(value?: TanhParams): IndicatorSettings;
  hasTanh(): boolean;
  clearTanh(): IndicatorSettings;

  getAdx(): AdxParams | undefined;
  setAdx(value?: AdxParams): IndicatorSettings;
  hasAdx(): boolean;
  clearAdx(): IndicatorSettings;

  getAdxr(): AdxrParams | undefined;
  setAdxr(value?: AdxrParams): IndicatorSettings;
  hasAdxr(): boolean;
  clearAdxr(): IndicatorSettings;

  getApo(): ApoParams | undefined;
  setApo(value?: ApoParams): IndicatorSettings;
  hasApo(): boolean;
  clearApo(): IndicatorSettings;

  getAroon(): AroonParams | undefined;
  setAroon(value?: AroonParams): IndicatorSettings;
  hasAroon(): boolean;
  clearAroon(): IndicatorSettings;

  getAroonosc(): AroonOscParams | undefined;
  setAroonosc(value?: AroonOscParams): IndicatorSettings;
  hasAroonosc(): boolean;
  clearAroonosc(): IndicatorSettings;

  getBop(): BopParams | undefined;
  setBop(value?: BopParams): IndicatorSettings;
  hasBop(): boolean;
  clearBop(): IndicatorSettings;

  getCci(): CciParams | undefined;
  setCci(value?: CciParams): IndicatorSettings;
  hasCci(): boolean;
  clearCci(): IndicatorSettings;

  getCmo(): CmoParams | undefined;
  setCmo(value?: CmoParams): IndicatorSettings;
  hasCmo(): boolean;
  clearCmo(): IndicatorSettings;

  getDx(): DxParams | undefined;
  setDx(value?: DxParams): IndicatorSettings;
  hasDx(): boolean;
  clearDx(): IndicatorSettings;

  getMacd(): MacdParams | undefined;
  setMacd(value?: MacdParams): IndicatorSettings;
  hasMacd(): boolean;
  clearMacd(): IndicatorSettings;

  getMacdext(): MacdExtParams | undefined;
  setMacdext(value?: MacdExtParams): IndicatorSettings;
  hasMacdext(): boolean;
  clearMacdext(): IndicatorSettings;

  getMacdfix(): MacdFixParams | undefined;
  setMacdfix(value?: MacdFixParams): IndicatorSettings;
  hasMacdfix(): boolean;
  clearMacdfix(): IndicatorSettings;

  getMfi(): MfiParams | undefined;
  setMfi(value?: MfiParams): IndicatorSettings;
  hasMfi(): boolean;
  clearMfi(): IndicatorSettings;

  getMinusDi(): MinusDiParams | undefined;
  setMinusDi(value?: MinusDiParams): IndicatorSettings;
  hasMinusDi(): boolean;
  clearMinusDi(): IndicatorSettings;

  getMinusDm(): MinusDmParams | undefined;
  setMinusDm(value?: MinusDmParams): IndicatorSettings;
  hasMinusDm(): boolean;
  clearMinusDm(): IndicatorSettings;

  getMom(): MomParams | undefined;
  setMom(value?: MomParams): IndicatorSettings;
  hasMom(): boolean;
  clearMom(): IndicatorSettings;

  getPlusDi(): PlusDiParams | undefined;
  setPlusDi(value?: PlusDiParams): IndicatorSettings;
  hasPlusDi(): boolean;
  clearPlusDi(): IndicatorSettings;

  getPlusDm(): PlusDmParams | undefined;
  setPlusDm(value?: PlusDmParams): IndicatorSettings;
  hasPlusDm(): boolean;
  clearPlusDm(): IndicatorSettings;

  getPpo(): PpoParams | undefined;
  setPpo(value?: PpoParams): IndicatorSettings;
  hasPpo(): boolean;
  clearPpo(): IndicatorSettings;

  getRoc(): RocParams | undefined;
  setRoc(value?: RocParams): IndicatorSettings;
  hasRoc(): boolean;
  clearRoc(): IndicatorSettings;

  getRocp(): RocpParams | undefined;
  setRocp(value?: RocpParams): IndicatorSettings;
  hasRocp(): boolean;
  clearRocp(): IndicatorSettings;

  getRocr(): RocrParams | undefined;
  setRocr(value?: RocrParams): IndicatorSettings;
  hasRocr(): boolean;
  clearRocr(): IndicatorSettings;

  getRocr100(): Rocr100Params | undefined;
  setRocr100(value?: Rocr100Params): IndicatorSettings;
  hasRocr100(): boolean;
  clearRocr100(): IndicatorSettings;

  getStoch(): StochParams | undefined;
  setStoch(value?: StochParams): IndicatorSettings;
  hasStoch(): boolean;
  clearStoch(): IndicatorSettings;

  getStochf(): StochFParams | undefined;
  setStochf(value?: StochFParams): IndicatorSettings;
  hasStochf(): boolean;
  clearStochf(): IndicatorSettings;

  getStochrsi(): StochRsiParams | undefined;
  setStochrsi(value?: StochRsiParams): IndicatorSettings;
  hasStochrsi(): boolean;
  clearStochrsi(): IndicatorSettings;

  getTrix(): TrixParams | undefined;
  setTrix(value?: TrixParams): IndicatorSettings;
  hasTrix(): boolean;
  clearTrix(): IndicatorSettings;

  getUltosc(): UltOscParams | undefined;
  setUltosc(value?: UltOscParams): IndicatorSettings;
  hasUltosc(): boolean;
  clearUltosc(): IndicatorSettings;

  getWillr(): WillRParams | undefined;
  setWillr(value?: WillRParams): IndicatorSettings;
  hasWillr(): boolean;
  clearWillr(): IndicatorSettings;

  getBbands(): BbandsParams | undefined;
  setBbands(value?: BbandsParams): IndicatorSettings;
  hasBbands(): boolean;
  clearBbands(): IndicatorSettings;

  getDema(): DemaParams | undefined;
  setDema(value?: DemaParams): IndicatorSettings;
  hasDema(): boolean;
  clearDema(): IndicatorSettings;

  getEma(): EmaParams | undefined;
  setEma(value?: EmaParams): IndicatorSettings;
  hasEma(): boolean;
  clearEma(): IndicatorSettings;

  getHtTrendline(): HtTrendlineParams | undefined;
  setHtTrendline(value?: HtTrendlineParams): IndicatorSettings;
  hasHtTrendline(): boolean;
  clearHtTrendline(): IndicatorSettings;

  getKama(): KamaParams | undefined;
  setKama(value?: KamaParams): IndicatorSettings;
  hasKama(): boolean;
  clearKama(): IndicatorSettings;

  getMa(): MaParams | undefined;
  setMa(value?: MaParams): IndicatorSettings;
  hasMa(): boolean;
  clearMa(): IndicatorSettings;

  getMama(): MamaParams | undefined;
  setMama(value?: MamaParams): IndicatorSettings;
  hasMama(): boolean;
  clearMama(): IndicatorSettings;

  getMavp(): MavpParams | undefined;
  setMavp(value?: MavpParams): IndicatorSettings;
  hasMavp(): boolean;
  clearMavp(): IndicatorSettings;

  getMidpoint(): MidPointParams | undefined;
  setMidpoint(value?: MidPointParams): IndicatorSettings;
  hasMidpoint(): boolean;
  clearMidpoint(): IndicatorSettings;

  getMidprice(): MidPriceParams | undefined;
  setMidprice(value?: MidPriceParams): IndicatorSettings;
  hasMidprice(): boolean;
  clearMidprice(): IndicatorSettings;

  getSar(): SarParams | undefined;
  setSar(value?: SarParams): IndicatorSettings;
  hasSar(): boolean;
  clearSar(): IndicatorSettings;

  getSarext(): SarExtParams | undefined;
  setSarext(value?: SarExtParams): IndicatorSettings;
  hasSarext(): boolean;
  clearSarext(): IndicatorSettings;

  getSma(): SmaParams | undefined;
  setSma(value?: SmaParams): IndicatorSettings;
  hasSma(): boolean;
  clearSma(): IndicatorSettings;

  getT3(): T3Params | undefined;
  setT3(value?: T3Params): IndicatorSettings;
  hasT3(): boolean;
  clearT3(): IndicatorSettings;

  getTema(): TemaParams | undefined;
  setTema(value?: TemaParams): IndicatorSettings;
  hasTema(): boolean;
  clearTema(): IndicatorSettings;

  getTrima(): TrimaParams | undefined;
  setTrima(value?: TrimaParams): IndicatorSettings;
  hasTrima(): boolean;
  clearTrima(): IndicatorSettings;

  getWma(): WmaParams | undefined;
  setWma(value?: WmaParams): IndicatorSettings;
  hasWma(): boolean;
  clearWma(): IndicatorSettings;

  getCdl2crows(): Cdl2CrowsParams | undefined;
  setCdl2crows(value?: Cdl2CrowsParams): IndicatorSettings;
  hasCdl2crows(): boolean;
  clearCdl2crows(): IndicatorSettings;

  getCdl3blackcrows(): Cdl3BlackCrowsParams | undefined;
  setCdl3blackcrows(value?: Cdl3BlackCrowsParams): IndicatorSettings;
  hasCdl3blackcrows(): boolean;
  clearCdl3blackcrows(): IndicatorSettings;

  getCdl3inside(): Cdl3InsideParams | undefined;
  setCdl3inside(value?: Cdl3InsideParams): IndicatorSettings;
  hasCdl3inside(): boolean;
  clearCdl3inside(): IndicatorSettings;

  getCdl3linestrike(): Cdl3LineStrikeParams | undefined;
  setCdl3linestrike(value?: Cdl3LineStrikeParams): IndicatorSettings;
  hasCdl3linestrike(): boolean;
  clearCdl3linestrike(): IndicatorSettings;

  getCdl3outside(): Cdl3OutsideParams | undefined;
  setCdl3outside(value?: Cdl3OutsideParams): IndicatorSettings;
  hasCdl3outside(): boolean;
  clearCdl3outside(): IndicatorSettings;

  getCdl3starsinsouth(): Cdl3StarsInSouthParams | undefined;
  setCdl3starsinsouth(value?: Cdl3StarsInSouthParams): IndicatorSettings;
  hasCdl3starsinsouth(): boolean;
  clearCdl3starsinsouth(): IndicatorSettings;

  getCdl3whitesoldiers(): Cdl3WhiteSoldiersParams | undefined;
  setCdl3whitesoldiers(value?: Cdl3WhiteSoldiersParams): IndicatorSettings;
  hasCdl3whitesoldiers(): boolean;
  clearCdl3whitesoldiers(): IndicatorSettings;

  getCdlabandonedbaby(): CdlAbandonedBabyParams | undefined;
  setCdlabandonedbaby(value?: CdlAbandonedBabyParams): IndicatorSettings;
  hasCdlabandonedbaby(): boolean;
  clearCdlabandonedbaby(): IndicatorSettings;

  getCdladvanceblock(): CdlAdvanceBlockParams | undefined;
  setCdladvanceblock(value?: CdlAdvanceBlockParams): IndicatorSettings;
  hasCdladvanceblock(): boolean;
  clearCdladvanceblock(): IndicatorSettings;

  getCdlbelthold(): CdlBeltHoldParams | undefined;
  setCdlbelthold(value?: CdlBeltHoldParams): IndicatorSettings;
  hasCdlbelthold(): boolean;
  clearCdlbelthold(): IndicatorSettings;

  getCdlbreakaway(): CdlBreakawayParams | undefined;
  setCdlbreakaway(value?: CdlBreakawayParams): IndicatorSettings;
  hasCdlbreakaway(): boolean;
  clearCdlbreakaway(): IndicatorSettings;

  getCdlclosingmarubozu(): CdlClosingMarubozuParams | undefined;
  setCdlclosingmarubozu(value?: CdlClosingMarubozuParams): IndicatorSettings;
  hasCdlclosingmarubozu(): boolean;
  clearCdlclosingmarubozu(): IndicatorSettings;

  getCdlconcealbabyswall(): CdlConcealBabysWallParams | undefined;
  setCdlconcealbabyswall(value?: CdlConcealBabysWallParams): IndicatorSettings;
  hasCdlconcealbabyswall(): boolean;
  clearCdlconcealbabyswall(): IndicatorSettings;

  getCdlcounterattack(): CdlCounterAttackParams | undefined;
  setCdlcounterattack(value?: CdlCounterAttackParams): IndicatorSettings;
  hasCdlcounterattack(): boolean;
  clearCdlcounterattack(): IndicatorSettings;

  getCdldarkcloudcover(): CdlDarkCloudCoverParams | undefined;
  setCdldarkcloudcover(value?: CdlDarkCloudCoverParams): IndicatorSettings;
  hasCdldarkcloudcover(): boolean;
  clearCdldarkcloudcover(): IndicatorSettings;

  getCdldoji(): CdlDojiParams | undefined;
  setCdldoji(value?: CdlDojiParams): IndicatorSettings;
  hasCdldoji(): boolean;
  clearCdldoji(): IndicatorSettings;

  getCdldojistar(): CdlDojiStarParams | undefined;
  setCdldojistar(value?: CdlDojiStarParams): IndicatorSettings;
  hasCdldojistar(): boolean;
  clearCdldojistar(): IndicatorSettings;

  getCdldragonflydoji(): CdlDragonflyDojiParams | undefined;
  setCdldragonflydoji(value?: CdlDragonflyDojiParams): IndicatorSettings;
  hasCdldragonflydoji(): boolean;
  clearCdldragonflydoji(): IndicatorSettings;

  getCdlengulfing(): CdlEngulfingParams | undefined;
  setCdlengulfing(value?: CdlEngulfingParams): IndicatorSettings;
  hasCdlengulfing(): boolean;
  clearCdlengulfing(): IndicatorSettings;

  getCdleveningdojistar(): CdlEveningDojiStarParams | undefined;
  setCdleveningdojistar(value?: CdlEveningDojiStarParams): IndicatorSettings;
  hasCdleveningdojistar(): boolean;
  clearCdleveningdojistar(): IndicatorSettings;

  getCdleveningstar(): CdlEveningStarParams | undefined;
  setCdleveningstar(value?: CdlEveningStarParams): IndicatorSettings;
  hasCdleveningstar(): boolean;
  clearCdleveningstar(): IndicatorSettings;

  getCdlgapsidesidewhite(): CdlGapSideSideWhiteParams | undefined;
  setCdlgapsidesidewhite(value?: CdlGapSideSideWhiteParams): IndicatorSettings;
  hasCdlgapsidesidewhite(): boolean;
  clearCdlgapsidesidewhite(): IndicatorSettings;

  getCdlgravestonedoji(): CdlGravestoneDojiParams | undefined;
  setCdlgravestonedoji(value?: CdlGravestoneDojiParams): IndicatorSettings;
  hasCdlgravestonedoji(): boolean;
  clearCdlgravestonedoji(): IndicatorSettings;

  getCdlhammer(): CdlHammerParams | undefined;
  setCdlhammer(value?: CdlHammerParams): IndicatorSettings;
  hasCdlhammer(): boolean;
  clearCdlhammer(): IndicatorSettings;

  getCdlhangingman(): CdlHangingManParams | undefined;
  setCdlhangingman(value?: CdlHangingManParams): IndicatorSettings;
  hasCdlhangingman(): boolean;
  clearCdlhangingman(): IndicatorSettings;

  getCdlharami(): CdlHaramiParams | undefined;
  setCdlharami(value?: CdlHaramiParams): IndicatorSettings;
  hasCdlharami(): boolean;
  clearCdlharami(): IndicatorSettings;

  getCdlharamicross(): CdlHaramiCrossParams | undefined;
  setCdlharamicross(value?: CdlHaramiCrossParams): IndicatorSettings;
  hasCdlharamicross(): boolean;
  clearCdlharamicross(): IndicatorSettings;

  getCdlhighwave(): CdlHighWaveParams | undefined;
  setCdlhighwave(value?: CdlHighWaveParams): IndicatorSettings;
  hasCdlhighwave(): boolean;
  clearCdlhighwave(): IndicatorSettings;

  getCdlhikkake(): CdlHikkakeParams | undefined;
  setCdlhikkake(value?: CdlHikkakeParams): IndicatorSettings;
  hasCdlhikkake(): boolean;
  clearCdlhikkake(): IndicatorSettings;

  getCdlhikkakemod(): CdlHikkakeModParams | undefined;
  setCdlhikkakemod(value?: CdlHikkakeModParams): IndicatorSettings;
  hasCdlhikkakemod(): boolean;
  clearCdlhikkakemod(): IndicatorSettings;

  getCdlhomingpigeon(): CdlHomingPigeonParams | undefined;
  setCdlhomingpigeon(value?: CdlHomingPigeonParams): IndicatorSettings;
  hasCdlhomingpigeon(): boolean;
  clearCdlhomingpigeon(): IndicatorSettings;

  getCdlidentical3crows(): CdlIdentical3CrowsParams | undefined;
  setCdlidentical3crows(value?: CdlIdentical3CrowsParams): IndicatorSettings;
  hasCdlidentical3crows(): boolean;
  clearCdlidentical3crows(): IndicatorSettings;

  getCdlinneck(): CdlInNeckParams | undefined;
  setCdlinneck(value?: CdlInNeckParams): IndicatorSettings;
  hasCdlinneck(): boolean;
  clearCdlinneck(): IndicatorSettings;

  getCdlinvertedhammer(): CdlInvertedHammerParams | undefined;
  setCdlinvertedhammer(value?: CdlInvertedHammerParams): IndicatorSettings;
  hasCdlinvertedhammer(): boolean;
  clearCdlinvertedhammer(): IndicatorSettings;

  getCdlkicking(): CdlKickingParams | undefined;
  setCdlkicking(value?: CdlKickingParams): IndicatorSettings;
  hasCdlkicking(): boolean;
  clearCdlkicking(): IndicatorSettings;

  getCdlkickingbylength(): CdlKickingByLengthParams | undefined;
  setCdlkickingbylength(value?: CdlKickingByLengthParams): IndicatorSettings;
  hasCdlkickingbylength(): boolean;
  clearCdlkickingbylength(): IndicatorSettings;

  getCdlladderbottom(): CdlLadderBottomParams | undefined;
  setCdlladderbottom(value?: CdlLadderBottomParams): IndicatorSettings;
  hasCdlladderbottom(): boolean;
  clearCdlladderbottom(): IndicatorSettings;

  getCdllongleggeddoji(): CdlLongLeggedDojiParams | undefined;
  setCdllongleggeddoji(value?: CdlLongLeggedDojiParams): IndicatorSettings;
  hasCdllongleggeddoji(): boolean;
  clearCdllongleggeddoji(): IndicatorSettings;

  getCdllongline(): CdlLongLineParams | undefined;
  setCdllongline(value?: CdlLongLineParams): IndicatorSettings;
  hasCdllongline(): boolean;
  clearCdllongline(): IndicatorSettings;

  getCdlmarubozu(): CdlMarubozuParams | undefined;
  setCdlmarubozu(value?: CdlMarubozuParams): IndicatorSettings;
  hasCdlmarubozu(): boolean;
  clearCdlmarubozu(): IndicatorSettings;

  getCdlmatchinglow(): CdlMatchingLowParams | undefined;
  setCdlmatchinglow(value?: CdlMatchingLowParams): IndicatorSettings;
  hasCdlmatchinglow(): boolean;
  clearCdlmatchinglow(): IndicatorSettings;

  getCdlmathold(): CdlMatHoldParams | undefined;
  setCdlmathold(value?: CdlMatHoldParams): IndicatorSettings;
  hasCdlmathold(): boolean;
  clearCdlmathold(): IndicatorSettings;

  getCdlmorningdojistar(): CdlMorningDojiStarParams | undefined;
  setCdlmorningdojistar(value?: CdlMorningDojiStarParams): IndicatorSettings;
  hasCdlmorningdojistar(): boolean;
  clearCdlmorningdojistar(): IndicatorSettings;

  getCdlmorningstar(): CdlMorningStarParams | undefined;
  setCdlmorningstar(value?: CdlMorningStarParams): IndicatorSettings;
  hasCdlmorningstar(): boolean;
  clearCdlmorningstar(): IndicatorSettings;

  getCdlonneck(): CdlOnNeckParams | undefined;
  setCdlonneck(value?: CdlOnNeckParams): IndicatorSettings;
  hasCdlonneck(): boolean;
  clearCdlonneck(): IndicatorSettings;

  getCdlpiercing(): CdlPiercingParams | undefined;
  setCdlpiercing(value?: CdlPiercingParams): IndicatorSettings;
  hasCdlpiercing(): boolean;
  clearCdlpiercing(): IndicatorSettings;

  getCdlrickshawman(): CdlRickshawManParams | undefined;
  setCdlrickshawman(value?: CdlRickshawManParams): IndicatorSettings;
  hasCdlrickshawman(): boolean;
  clearCdlrickshawman(): IndicatorSettings;

  getCdlrisefall3methods(): CdlRiseFall3MethodsParams | undefined;
  setCdlrisefall3methods(value?: CdlRiseFall3MethodsParams): IndicatorSettings;
  hasCdlrisefall3methods(): boolean;
  clearCdlrisefall3methods(): IndicatorSettings;

  getCdlseparatinglines(): CdlSeparatingLinesParams | undefined;
  setCdlseparatinglines(value?: CdlSeparatingLinesParams): IndicatorSettings;
  hasCdlseparatinglines(): boolean;
  clearCdlseparatinglines(): IndicatorSettings;

  getCdlshootingstar(): CdlShootingStarParams | undefined;
  setCdlshootingstar(value?: CdlShootingStarParams): IndicatorSettings;
  hasCdlshootingstar(): boolean;
  clearCdlshootingstar(): IndicatorSettings;

  getCdlshortline(): CdlShortLineParams | undefined;
  setCdlshortline(value?: CdlShortLineParams): IndicatorSettings;
  hasCdlshortline(): boolean;
  clearCdlshortline(): IndicatorSettings;

  getCdlspinningtop(): CdlSpinningTopParams | undefined;
  setCdlspinningtop(value?: CdlSpinningTopParams): IndicatorSettings;
  hasCdlspinningtop(): boolean;
  clearCdlspinningtop(): IndicatorSettings;

  getCdlstalledpattern(): CdlStalledPatternParams | undefined;
  setCdlstalledpattern(value?: CdlStalledPatternParams): IndicatorSettings;
  hasCdlstalledpattern(): boolean;
  clearCdlstalledpattern(): IndicatorSettings;

  getCdlsticksandwich(): CdlStickSandwichParams | undefined;
  setCdlsticksandwich(value?: CdlStickSandwichParams): IndicatorSettings;
  hasCdlsticksandwich(): boolean;
  clearCdlsticksandwich(): IndicatorSettings;

  getCdltakuri(): CdlTakuriParams | undefined;
  setCdltakuri(value?: CdlTakuriParams): IndicatorSettings;
  hasCdltakuri(): boolean;
  clearCdltakuri(): IndicatorSettings;

  getCdltasukigap(): CdlTasukiGapParams | undefined;
  setCdltasukigap(value?: CdlTasukiGapParams): IndicatorSettings;
  hasCdltasukigap(): boolean;
  clearCdltasukigap(): IndicatorSettings;

  getCdlthrusting(): CdlThrustingParams | undefined;
  setCdlthrusting(value?: CdlThrustingParams): IndicatorSettings;
  hasCdlthrusting(): boolean;
  clearCdlthrusting(): IndicatorSettings;

  getCdltristar(): CdlTristarParams | undefined;
  setCdltristar(value?: CdlTristarParams): IndicatorSettings;
  hasCdltristar(): boolean;
  clearCdltristar(): IndicatorSettings;

  getCdlunique3river(): CdlUnique3RiverParams | undefined;
  setCdlunique3river(value?: CdlUnique3RiverParams): IndicatorSettings;
  hasCdlunique3river(): boolean;
  clearCdlunique3river(): IndicatorSettings;

  getCdlupsidegap2crows(): CdlUpsideGap2CrowsParams | undefined;
  setCdlupsidegap2crows(value?: CdlUpsideGap2CrowsParams): IndicatorSettings;
  hasCdlupsidegap2crows(): boolean;
  clearCdlupsidegap2crows(): IndicatorSettings;

  getCdlxsidegap3methods(): CdlXsideGap3MethodsParams | undefined;
  setCdlxsidegap3methods(value?: CdlXsideGap3MethodsParams): IndicatorSettings;
  hasCdlxsidegap3methods(): boolean;
  clearCdlxsidegap3methods(): IndicatorSettings;

  getAvgprice(): AvgPriceParams | undefined;
  setAvgprice(value?: AvgPriceParams): IndicatorSettings;
  hasAvgprice(): boolean;
  clearAvgprice(): IndicatorSettings;

  getMedprice(): MedPriceParams | undefined;
  setMedprice(value?: MedPriceParams): IndicatorSettings;
  hasMedprice(): boolean;
  clearMedprice(): IndicatorSettings;

  getTypprice(): TypPriceParams | undefined;
  setTypprice(value?: TypPriceParams): IndicatorSettings;
  hasTypprice(): boolean;
  clearTypprice(): IndicatorSettings;

  getWclprice(): WclPriceParams | undefined;
  setWclprice(value?: WclPriceParams): IndicatorSettings;
  hasWclprice(): boolean;
  clearWclprice(): IndicatorSettings;

  getBeta(): BetaParams | undefined;
  setBeta(value?: BetaParams): IndicatorSettings;
  hasBeta(): boolean;
  clearBeta(): IndicatorSettings;

  getCorrel(): CorrelParams | undefined;
  setCorrel(value?: CorrelParams): IndicatorSettings;
  hasCorrel(): boolean;
  clearCorrel(): IndicatorSettings;

  getLinearreg(): LinearRegParams | undefined;
  setLinearreg(value?: LinearRegParams): IndicatorSettings;
  hasLinearreg(): boolean;
  clearLinearreg(): IndicatorSettings;

  getLinearregAngle(): LinearRegAngleParams | undefined;
  setLinearregAngle(value?: LinearRegAngleParams): IndicatorSettings;
  hasLinearregAngle(): boolean;
  clearLinearregAngle(): IndicatorSettings;

  getLinearregIntercept(): LinearRegInterceptParams | undefined;
  setLinearregIntercept(value?: LinearRegInterceptParams): IndicatorSettings;
  hasLinearregIntercept(): boolean;
  clearLinearregIntercept(): IndicatorSettings;

  getLinearregSlope(): LinearRegSlopeParams | undefined;
  setLinearregSlope(value?: LinearRegSlopeParams): IndicatorSettings;
  hasLinearregSlope(): boolean;
  clearLinearregSlope(): IndicatorSettings;

  getStddev(): StdDevParams | undefined;
  setStddev(value?: StdDevParams): IndicatorSettings;
  hasStddev(): boolean;
  clearStddev(): IndicatorSettings;

  getTsf(): TsfParams | undefined;
  setTsf(value?: TsfParams): IndicatorSettings;
  hasTsf(): boolean;
  clearTsf(): IndicatorSettings;

  getVar(): VarParams | undefined;
  setVar(value?: VarParams): IndicatorSettings;
  hasVar(): boolean;
  clearVar(): IndicatorSettings;

  getAtr(): AtrParams | undefined;
  setAtr(value?: AtrParams): IndicatorSettings;
  hasAtr(): boolean;
  clearAtr(): IndicatorSettings;

  getNatr(): NatrParams | undefined;
  setNatr(value?: NatrParams): IndicatorSettings;
  hasNatr(): boolean;
  clearNatr(): IndicatorSettings;

  getTrange(): TrangeParams | undefined;
  setTrange(value?: TrangeParams): IndicatorSettings;
  hasTrange(): boolean;
  clearTrange(): IndicatorSettings;

  getAd(): AdParams | undefined;
  setAd(value?: AdParams): IndicatorSettings;
  hasAd(): boolean;
  clearAd(): IndicatorSettings;

  getAdosc(): AdOscParams | undefined;
  setAdosc(value?: AdOscParams): IndicatorSettings;
  hasAdosc(): boolean;
  clearAdosc(): IndicatorSettings;

  getObv(): ObvParams | undefined;
  setObv(value?: ObvParams): IndicatorSettings;
  hasObv(): boolean;
  clearObv(): IndicatorSettings;

  getIndicatorTypeCase(): IndicatorSettings.IndicatorTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndicatorSettings.AsObject;
  static toObject(includeInstance: boolean, msg: IndicatorSettings): IndicatorSettings.AsObject;
  static serializeBinaryToWriter(message: IndicatorSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndicatorSettings;
  static deserializeBinaryFromReader(message: IndicatorSettings, reader: jspb.BinaryReader): IndicatorSettings;
}

export namespace IndicatorSettings {
  export type AsObject = {
    rsi?: RsiParams.AsObject,
    htDcperiod?: HtDcPeriodParams.AsObject,
    htDcphase?: HtDcPhaseParams.AsObject,
    htPhasor?: HtPhasorParams.AsObject,
    htSine?: HtSineParams.AsObject,
    htTrendmode?: HtTrendModeParams.AsObject,
    add?: AddParams.AsObject,
    div?: DivParams.AsObject,
    max?: MaxParams.AsObject,
    maxindex?: MaxIndexParams.AsObject,
    min?: MinParams.AsObject,
    minindex?: MinIndexParams.AsObject,
    minmax?: MinMaxParams.AsObject,
    minmaxindex?: MinMaxIndexParams.AsObject,
    mult?: MultParams.AsObject,
    sub?: SubParams.AsObject,
    sum?: SumParams.AsObject,
    acos?: AcosParams.AsObject,
    asin?: AsinParams.AsObject,
    atan?: AtanParams.AsObject,
    ceil?: CeilParams.AsObject,
    cos?: CosParams.AsObject,
    cosh?: CoshParams.AsObject,
    exp?: ExpParams.AsObject,
    floor?: FloorParams.AsObject,
    ln?: LnParams.AsObject,
    log10?: Log10Params.AsObject,
    sin?: SinParams.AsObject,
    sinh?: SinhParams.AsObject,
    sqrt?: SqrtParams.AsObject,
    tan?: TanParams.AsObject,
    tanh?: TanhParams.AsObject,
    adx?: AdxParams.AsObject,
    adxr?: AdxrParams.AsObject,
    apo?: ApoParams.AsObject,
    aroon?: AroonParams.AsObject,
    aroonosc?: AroonOscParams.AsObject,
    bop?: BopParams.AsObject,
    cci?: CciParams.AsObject,
    cmo?: CmoParams.AsObject,
    dx?: DxParams.AsObject,
    macd?: MacdParams.AsObject,
    macdext?: MacdExtParams.AsObject,
    macdfix?: MacdFixParams.AsObject,
    mfi?: MfiParams.AsObject,
    minusDi?: MinusDiParams.AsObject,
    minusDm?: MinusDmParams.AsObject,
    mom?: MomParams.AsObject,
    plusDi?: PlusDiParams.AsObject,
    plusDm?: PlusDmParams.AsObject,
    ppo?: PpoParams.AsObject,
    roc?: RocParams.AsObject,
    rocp?: RocpParams.AsObject,
    rocr?: RocrParams.AsObject,
    rocr100?: Rocr100Params.AsObject,
    stoch?: StochParams.AsObject,
    stochf?: StochFParams.AsObject,
    stochrsi?: StochRsiParams.AsObject,
    trix?: TrixParams.AsObject,
    ultosc?: UltOscParams.AsObject,
    willr?: WillRParams.AsObject,
    bbands?: BbandsParams.AsObject,
    dema?: DemaParams.AsObject,
    ema?: EmaParams.AsObject,
    htTrendline?: HtTrendlineParams.AsObject,
    kama?: KamaParams.AsObject,
    ma?: MaParams.AsObject,
    mama?: MamaParams.AsObject,
    mavp?: MavpParams.AsObject,
    midpoint?: MidPointParams.AsObject,
    midprice?: MidPriceParams.AsObject,
    sar?: SarParams.AsObject,
    sarext?: SarExtParams.AsObject,
    sma?: SmaParams.AsObject,
    t3?: T3Params.AsObject,
    tema?: TemaParams.AsObject,
    trima?: TrimaParams.AsObject,
    wma?: WmaParams.AsObject,
    cdl2crows?: Cdl2CrowsParams.AsObject,
    cdl3blackcrows?: Cdl3BlackCrowsParams.AsObject,
    cdl3inside?: Cdl3InsideParams.AsObject,
    cdl3linestrike?: Cdl3LineStrikeParams.AsObject,
    cdl3outside?: Cdl3OutsideParams.AsObject,
    cdl3starsinsouth?: Cdl3StarsInSouthParams.AsObject,
    cdl3whitesoldiers?: Cdl3WhiteSoldiersParams.AsObject,
    cdlabandonedbaby?: CdlAbandonedBabyParams.AsObject,
    cdladvanceblock?: CdlAdvanceBlockParams.AsObject,
    cdlbelthold?: CdlBeltHoldParams.AsObject,
    cdlbreakaway?: CdlBreakawayParams.AsObject,
    cdlclosingmarubozu?: CdlClosingMarubozuParams.AsObject,
    cdlconcealbabyswall?: CdlConcealBabysWallParams.AsObject,
    cdlcounterattack?: CdlCounterAttackParams.AsObject,
    cdldarkcloudcover?: CdlDarkCloudCoverParams.AsObject,
    cdldoji?: CdlDojiParams.AsObject,
    cdldojistar?: CdlDojiStarParams.AsObject,
    cdldragonflydoji?: CdlDragonflyDojiParams.AsObject,
    cdlengulfing?: CdlEngulfingParams.AsObject,
    cdleveningdojistar?: CdlEveningDojiStarParams.AsObject,
    cdleveningstar?: CdlEveningStarParams.AsObject,
    cdlgapsidesidewhite?: CdlGapSideSideWhiteParams.AsObject,
    cdlgravestonedoji?: CdlGravestoneDojiParams.AsObject,
    cdlhammer?: CdlHammerParams.AsObject,
    cdlhangingman?: CdlHangingManParams.AsObject,
    cdlharami?: CdlHaramiParams.AsObject,
    cdlharamicross?: CdlHaramiCrossParams.AsObject,
    cdlhighwave?: CdlHighWaveParams.AsObject,
    cdlhikkake?: CdlHikkakeParams.AsObject,
    cdlhikkakemod?: CdlHikkakeModParams.AsObject,
    cdlhomingpigeon?: CdlHomingPigeonParams.AsObject,
    cdlidentical3crows?: CdlIdentical3CrowsParams.AsObject,
    cdlinneck?: CdlInNeckParams.AsObject,
    cdlinvertedhammer?: CdlInvertedHammerParams.AsObject,
    cdlkicking?: CdlKickingParams.AsObject,
    cdlkickingbylength?: CdlKickingByLengthParams.AsObject,
    cdlladderbottom?: CdlLadderBottomParams.AsObject,
    cdllongleggeddoji?: CdlLongLeggedDojiParams.AsObject,
    cdllongline?: CdlLongLineParams.AsObject,
    cdlmarubozu?: CdlMarubozuParams.AsObject,
    cdlmatchinglow?: CdlMatchingLowParams.AsObject,
    cdlmathold?: CdlMatHoldParams.AsObject,
    cdlmorningdojistar?: CdlMorningDojiStarParams.AsObject,
    cdlmorningstar?: CdlMorningStarParams.AsObject,
    cdlonneck?: CdlOnNeckParams.AsObject,
    cdlpiercing?: CdlPiercingParams.AsObject,
    cdlrickshawman?: CdlRickshawManParams.AsObject,
    cdlrisefall3methods?: CdlRiseFall3MethodsParams.AsObject,
    cdlseparatinglines?: CdlSeparatingLinesParams.AsObject,
    cdlshootingstar?: CdlShootingStarParams.AsObject,
    cdlshortline?: CdlShortLineParams.AsObject,
    cdlspinningtop?: CdlSpinningTopParams.AsObject,
    cdlstalledpattern?: CdlStalledPatternParams.AsObject,
    cdlsticksandwich?: CdlStickSandwichParams.AsObject,
    cdltakuri?: CdlTakuriParams.AsObject,
    cdltasukigap?: CdlTasukiGapParams.AsObject,
    cdlthrusting?: CdlThrustingParams.AsObject,
    cdltristar?: CdlTristarParams.AsObject,
    cdlunique3river?: CdlUnique3RiverParams.AsObject,
    cdlupsidegap2crows?: CdlUpsideGap2CrowsParams.AsObject,
    cdlxsidegap3methods?: CdlXsideGap3MethodsParams.AsObject,
    avgprice?: AvgPriceParams.AsObject,
    medprice?: MedPriceParams.AsObject,
    typprice?: TypPriceParams.AsObject,
    wclprice?: WclPriceParams.AsObject,
    beta?: BetaParams.AsObject,
    correl?: CorrelParams.AsObject,
    linearreg?: LinearRegParams.AsObject,
    linearregAngle?: LinearRegAngleParams.AsObject,
    linearregIntercept?: LinearRegInterceptParams.AsObject,
    linearregSlope?: LinearRegSlopeParams.AsObject,
    stddev?: StdDevParams.AsObject,
    tsf?: TsfParams.AsObject,
    pb_var?: VarParams.AsObject,
    atr?: AtrParams.AsObject,
    natr?: NatrParams.AsObject,
    trange?: TrangeParams.AsObject,
    ad?: AdParams.AsObject,
    adosc?: AdOscParams.AsObject,
    obv?: ObvParams.AsObject,
  }

  export enum IndicatorTypeCase { 
    INDICATOR_TYPE_NOT_SET = 0,
    RSI = 1,
    HT_DCPERIOD = 10,
    HT_DCPHASE = 11,
    HT_PHASOR = 12,
    HT_SINE = 13,
    HT_TRENDMODE = 14,
    ADD = 20,
    DIV = 21,
    MAX = 22,
    MAXINDEX = 23,
    MIN = 24,
    MININDEX = 25,
    MINMAX = 26,
    MINMAXINDEX = 27,
    MULT = 28,
    SUB = 29,
    SUM = 30,
    ACOS = 40,
    ASIN = 41,
    ATAN = 42,
    CEIL = 43,
    COS = 44,
    COSH = 45,
    EXP = 46,
    FLOOR = 47,
    LN = 48,
    LOG10 = 49,
    SIN = 50,
    SINH = 51,
    SQRT = 52,
    TAN = 53,
    TANH = 54,
    ADX = 61,
    ADXR = 62,
    APO = 64,
    AROON = 65,
    AROONOSC = 66,
    BOP = 67,
    CCI = 68,
    CMO = 69,
    DX = 71,
    MACD = 73,
    MACDEXT = 74,
    MACDFIX = 75,
    MFI = 76,
    MINUS_DI = 77,
    MINUS_DM = 78,
    MOM = 79,
    PLUS_DI = 80,
    PLUS_DM = 81,
    PPO = 82,
    ROC = 84,
    ROCP = 85,
    ROCR = 86,
    ROCR100 = 87,
    STOCH = 89,
    STOCHF = 90,
    STOCHRSI = 91,
    TRIX = 92,
    ULTOSC = 93,
    WILLR = 95,
    BBANDS = 101,
    DEMA = 102,
    EMA = 103,
    HT_TRENDLINE = 105,
    KAMA = 106,
    MA = 108,
    MAMA = 109,
    MAVP = 110,
    MIDPOINT = 111,
    MIDPRICE = 112,
    SAR = 113,
    SAREXT = 114,
    SMA = 115,
    T3 = 117,
    TEMA = 118,
    TRIMA = 119,
    WMA = 121,
    CDL2CROWS = 130,
    CDL3BLACKCROWS = 131,
    CDL3INSIDE = 132,
    CDL3LINESTRIKE = 133,
    CDL3OUTSIDE = 134,
    CDL3STARSINSOUTH = 135,
    CDL3WHITESOLDIERS = 136,
    CDLABANDONEDBABY = 137,
    CDLADVANCEBLOCK = 138,
    CDLBELTHOLD = 139,
    CDLBREAKAWAY = 140,
    CDLCLOSINGMARUBOZU = 141,
    CDLCONCEALBABYSWALL = 142,
    CDLCOUNTERATTACK = 143,
    CDLDARKCLOUDCOVER = 144,
    CDLDOJI = 145,
    CDLDOJISTAR = 146,
    CDLDRAGONFLYDOJI = 147,
    CDLENGULFING = 148,
    CDLEVENINGDOJISTAR = 149,
    CDLEVENINGSTAR = 150,
    CDLGAPSIDESIDEWHITE = 151,
    CDLGRAVESTONEDOJI = 152,
    CDLHAMMER = 153,
    CDLHANGINGMAN = 154,
    CDLHARAMI = 155,
    CDLHARAMICROSS = 156,
    CDLHIGHWAVE = 157,
    CDLHIKKAKE = 158,
    CDLHIKKAKEMOD = 159,
    CDLHOMINGPIGEON = 160,
    CDLIDENTICAL3CROWS = 161,
    CDLINNECK = 162,
    CDLINVERTEDHAMMER = 163,
    CDLKICKING = 164,
    CDLKICKINGBYLENGTH = 165,
    CDLLADDERBOTTOM = 166,
    CDLLONGLEGGEDDOJI = 167,
    CDLLONGLINE = 168,
    CDLMARUBOZU = 169,
    CDLMATCHINGLOW = 170,
    CDLMATHOLD = 171,
    CDLMORNINGDOJISTAR = 172,
    CDLMORNINGSTAR = 173,
    CDLONNECK = 174,
    CDLPIERCING = 175,
    CDLRICKSHAWMAN = 176,
    CDLRISEFALL3METHODS = 177,
    CDLSEPARATINGLINES = 178,
    CDLSHOOTINGSTAR = 179,
    CDLSHORTLINE = 180,
    CDLSPINNINGTOP = 181,
    CDLSTALLEDPATTERN = 182,
    CDLSTICKSANDWICH = 183,
    CDLTAKURI = 184,
    CDLTASUKIGAP = 185,
    CDLTHRUSTING = 186,
    CDLTRISTAR = 187,
    CDLUNIQUE3RIVER = 188,
    CDLUPSIDEGAP2CROWS = 189,
    CDLXSIDEGAP3METHODS = 190,
    AVGPRICE = 201,
    MEDPRICE = 202,
    TYPPRICE = 203,
    WCLPRICE = 204,
    BETA = 210,
    CORREL = 211,
    LINEARREG = 212,
    LINEARREG_ANGLE = 213,
    LINEARREG_INTERCEPT = 214,
    LINEARREG_SLOPE = 215,
    STDDEV = 216,
    TSF = 217,
    VAR = 218,
    ATR = 220,
    NATR = 221,
    TRANGE = 222,
    AD = 230,
    ADOSC = 231,
    OBV = 236,
  }
}

export enum MAType { 
  MA_TYPE_SMA = 0,
  MA_TYPE_EMA = 1,
  MA_TYPE_WMA = 2,
  MA_TYPE_DEMA = 3,
  MA_TYPE_TEMA = 4,
  MA_TYPE_TRIMA = 5,
  MA_TYPE_KAMA = 6,
  MA_TYPE_MAMA = 7,
  MA_TYPE_T3 = 8,
}
