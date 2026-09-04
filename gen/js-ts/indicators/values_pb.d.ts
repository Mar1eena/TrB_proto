import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class RealPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): RealPoint;
  hasTime(): boolean;
  clearTime(): RealPoint;

  getValue(): number;
  setValue(value: number): RealPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RealPoint.AsObject;
  static toObject(includeInstance: boolean, msg: RealPoint): RealPoint.AsObject;
  static serializeBinaryToWriter(message: RealPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RealPoint;
  static deserializeBinaryFromReader(message: RealPoint, reader: jspb.BinaryReader): RealPoint;
}

export namespace RealPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    value: number,
  }
}

export class RealSeries extends jspb.Message {
  getPointsList(): Array<RealPoint>;
  setPointsList(value: Array<RealPoint>): RealSeries;
  clearPointsList(): RealSeries;
  addPoints(value?: RealPoint, index?: number): RealPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RealSeries.AsObject;
  static toObject(includeInstance: boolean, msg: RealSeries): RealSeries.AsObject;
  static serializeBinaryToWriter(message: RealSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RealSeries;
  static deserializeBinaryFromReader(message: RealSeries, reader: jspb.BinaryReader): RealSeries;
}

export namespace RealSeries {
  export type AsObject = {
    pointsList: Array<RealPoint.AsObject>,
  }
}

export class IntegerPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): IntegerPoint;
  hasTime(): boolean;
  clearTime(): IntegerPoint;

  getValue(): number;
  setValue(value: number): IntegerPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegerPoint.AsObject;
  static toObject(includeInstance: boolean, msg: IntegerPoint): IntegerPoint.AsObject;
  static serializeBinaryToWriter(message: IntegerPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegerPoint;
  static deserializeBinaryFromReader(message: IntegerPoint, reader: jspb.BinaryReader): IntegerPoint;
}

export namespace IntegerPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    value: number,
  }
}

export class IntegerSeries extends jspb.Message {
  getPointsList(): Array<IntegerPoint>;
  setPointsList(value: Array<IntegerPoint>): IntegerSeries;
  clearPointsList(): IntegerSeries;
  addPoints(value?: IntegerPoint, index?: number): IntegerPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegerSeries.AsObject;
  static toObject(includeInstance: boolean, msg: IntegerSeries): IntegerSeries.AsObject;
  static serializeBinaryToWriter(message: IntegerSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegerSeries;
  static deserializeBinaryFromReader(message: IntegerSeries, reader: jspb.BinaryReader): IntegerSeries;
}

export namespace IntegerSeries {
  export type AsObject = {
    pointsList: Array<IntegerPoint.AsObject>,
  }
}

export class AroonPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): AroonPoint;
  hasTime(): boolean;
  clearTime(): AroonPoint;

  getDown(): number;
  setDown(value: number): AroonPoint;

  getUp(): number;
  setUp(value: number): AroonPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AroonPoint.AsObject;
  static toObject(includeInstance: boolean, msg: AroonPoint): AroonPoint.AsObject;
  static serializeBinaryToWriter(message: AroonPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AroonPoint;
  static deserializeBinaryFromReader(message: AroonPoint, reader: jspb.BinaryReader): AroonPoint;
}

export namespace AroonPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    down: number,
    up: number,
  }
}

export class AroonSeries extends jspb.Message {
  getPointsList(): Array<AroonPoint>;
  setPointsList(value: Array<AroonPoint>): AroonSeries;
  clearPointsList(): AroonSeries;
  addPoints(value?: AroonPoint, index?: number): AroonPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AroonSeries.AsObject;
  static toObject(includeInstance: boolean, msg: AroonSeries): AroonSeries.AsObject;
  static serializeBinaryToWriter(message: AroonSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AroonSeries;
  static deserializeBinaryFromReader(message: AroonSeries, reader: jspb.BinaryReader): AroonSeries;
}

export namespace AroonSeries {
  export type AsObject = {
    pointsList: Array<AroonPoint.AsObject>,
  }
}

export class BandsPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): BandsPoint;
  hasTime(): boolean;
  clearTime(): BandsPoint;

  getUpper(): number;
  setUpper(value: number): BandsPoint;

  getMiddle(): number;
  setMiddle(value: number): BandsPoint;

  getLower(): number;
  setLower(value: number): BandsPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BandsPoint.AsObject;
  static toObject(includeInstance: boolean, msg: BandsPoint): BandsPoint.AsObject;
  static serializeBinaryToWriter(message: BandsPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BandsPoint;
  static deserializeBinaryFromReader(message: BandsPoint, reader: jspb.BinaryReader): BandsPoint;
}

export namespace BandsPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    upper: number,
    middle: number,
    lower: number,
  }
}

export class BandsSeries extends jspb.Message {
  getPointsList(): Array<BandsPoint>;
  setPointsList(value: Array<BandsPoint>): BandsSeries;
  clearPointsList(): BandsSeries;
  addPoints(value?: BandsPoint, index?: number): BandsPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BandsSeries.AsObject;
  static toObject(includeInstance: boolean, msg: BandsSeries): BandsSeries.AsObject;
  static serializeBinaryToWriter(message: BandsSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BandsSeries;
  static deserializeBinaryFromReader(message: BandsSeries, reader: jspb.BinaryReader): BandsSeries;
}

export namespace BandsSeries {
  export type AsObject = {
    pointsList: Array<BandsPoint.AsObject>,
  }
}

export class MacdPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): MacdPoint;
  hasTime(): boolean;
  clearTime(): MacdPoint;

  getMacd(): number;
  setMacd(value: number): MacdPoint;

  getSignal(): number;
  setSignal(value: number): MacdPoint;

  getHist(): number;
  setHist(value: number): MacdPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MacdPoint.AsObject;
  static toObject(includeInstance: boolean, msg: MacdPoint): MacdPoint.AsObject;
  static serializeBinaryToWriter(message: MacdPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MacdPoint;
  static deserializeBinaryFromReader(message: MacdPoint, reader: jspb.BinaryReader): MacdPoint;
}

export namespace MacdPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    macd: number,
    signal: number,
    hist: number,
  }
}

export class MacdSeries extends jspb.Message {
  getPointsList(): Array<MacdPoint>;
  setPointsList(value: Array<MacdPoint>): MacdSeries;
  clearPointsList(): MacdSeries;
  addPoints(value?: MacdPoint, index?: number): MacdPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MacdSeries.AsObject;
  static toObject(includeInstance: boolean, msg: MacdSeries): MacdSeries.AsObject;
  static serializeBinaryToWriter(message: MacdSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MacdSeries;
  static deserializeBinaryFromReader(message: MacdSeries, reader: jspb.BinaryReader): MacdSeries;
}

export namespace MacdSeries {
  export type AsObject = {
    pointsList: Array<MacdPoint.AsObject>,
  }
}

export class MamaPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): MamaPoint;
  hasTime(): boolean;
  clearTime(): MamaPoint;

  getMama(): number;
  setMama(value: number): MamaPoint;

  getFama(): number;
  setFama(value: number): MamaPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MamaPoint.AsObject;
  static toObject(includeInstance: boolean, msg: MamaPoint): MamaPoint.AsObject;
  static serializeBinaryToWriter(message: MamaPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MamaPoint;
  static deserializeBinaryFromReader(message: MamaPoint, reader: jspb.BinaryReader): MamaPoint;
}

export namespace MamaPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mama: number,
    fama: number,
  }
}

export class MamaSeries extends jspb.Message {
  getPointsList(): Array<MamaPoint>;
  setPointsList(value: Array<MamaPoint>): MamaSeries;
  clearPointsList(): MamaSeries;
  addPoints(value?: MamaPoint, index?: number): MamaPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MamaSeries.AsObject;
  static toObject(includeInstance: boolean, msg: MamaSeries): MamaSeries.AsObject;
  static serializeBinaryToWriter(message: MamaSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MamaSeries;
  static deserializeBinaryFromReader(message: MamaSeries, reader: jspb.BinaryReader): MamaSeries;
}

export namespace MamaSeries {
  export type AsObject = {
    pointsList: Array<MamaPoint.AsObject>,
  }
}

export class HtPhasorPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): HtPhasorPoint;
  hasTime(): boolean;
  clearTime(): HtPhasorPoint;

  getInPhase(): number;
  setInPhase(value: number): HtPhasorPoint;

  getQuadrature(): number;
  setQuadrature(value: number): HtPhasorPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HtPhasorPoint.AsObject;
  static toObject(includeInstance: boolean, msg: HtPhasorPoint): HtPhasorPoint.AsObject;
  static serializeBinaryToWriter(message: HtPhasorPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HtPhasorPoint;
  static deserializeBinaryFromReader(message: HtPhasorPoint, reader: jspb.BinaryReader): HtPhasorPoint;
}

export namespace HtPhasorPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    inPhase: number,
    quadrature: number,
  }
}

export class HtPhasorSeries extends jspb.Message {
  getPointsList(): Array<HtPhasorPoint>;
  setPointsList(value: Array<HtPhasorPoint>): HtPhasorSeries;
  clearPointsList(): HtPhasorSeries;
  addPoints(value?: HtPhasorPoint, index?: number): HtPhasorPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HtPhasorSeries.AsObject;
  static toObject(includeInstance: boolean, msg: HtPhasorSeries): HtPhasorSeries.AsObject;
  static serializeBinaryToWriter(message: HtPhasorSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HtPhasorSeries;
  static deserializeBinaryFromReader(message: HtPhasorSeries, reader: jspb.BinaryReader): HtPhasorSeries;
}

export namespace HtPhasorSeries {
  export type AsObject = {
    pointsList: Array<HtPhasorPoint.AsObject>,
  }
}

export class HtSinePoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): HtSinePoint;
  hasTime(): boolean;
  clearTime(): HtSinePoint;

  getSine(): number;
  setSine(value: number): HtSinePoint;

  getLeadSine(): number;
  setLeadSine(value: number): HtSinePoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HtSinePoint.AsObject;
  static toObject(includeInstance: boolean, msg: HtSinePoint): HtSinePoint.AsObject;
  static serializeBinaryToWriter(message: HtSinePoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HtSinePoint;
  static deserializeBinaryFromReader(message: HtSinePoint, reader: jspb.BinaryReader): HtSinePoint;
}

export namespace HtSinePoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sine: number,
    leadSine: number,
  }
}

export class HtSineSeries extends jspb.Message {
  getPointsList(): Array<HtSinePoint>;
  setPointsList(value: Array<HtSinePoint>): HtSineSeries;
  clearPointsList(): HtSineSeries;
  addPoints(value?: HtSinePoint, index?: number): HtSinePoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HtSineSeries.AsObject;
  static toObject(includeInstance: boolean, msg: HtSineSeries): HtSineSeries.AsObject;
  static serializeBinaryToWriter(message: HtSineSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HtSineSeries;
  static deserializeBinaryFromReader(message: HtSineSeries, reader: jspb.BinaryReader): HtSineSeries;
}

export namespace HtSineSeries {
  export type AsObject = {
    pointsList: Array<HtSinePoint.AsObject>,
  }
}

export class StochPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): StochPoint;
  hasTime(): boolean;
  clearTime(): StochPoint;

  getSlowK(): number;
  setSlowK(value: number): StochPoint;

  getSlowD(): number;
  setSlowD(value: number): StochPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StochPoint.AsObject;
  static toObject(includeInstance: boolean, msg: StochPoint): StochPoint.AsObject;
  static serializeBinaryToWriter(message: StochPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StochPoint;
  static deserializeBinaryFromReader(message: StochPoint, reader: jspb.BinaryReader): StochPoint;
}

export namespace StochPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    slowK: number,
    slowD: number,
  }
}

export class StochSeries extends jspb.Message {
  getPointsList(): Array<StochPoint>;
  setPointsList(value: Array<StochPoint>): StochSeries;
  clearPointsList(): StochSeries;
  addPoints(value?: StochPoint, index?: number): StochPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StochSeries.AsObject;
  static toObject(includeInstance: boolean, msg: StochSeries): StochSeries.AsObject;
  static serializeBinaryToWriter(message: StochSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StochSeries;
  static deserializeBinaryFromReader(message: StochSeries, reader: jspb.BinaryReader): StochSeries;
}

export namespace StochSeries {
  export type AsObject = {
    pointsList: Array<StochPoint.AsObject>,
  }
}

export class StochFPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): StochFPoint;
  hasTime(): boolean;
  clearTime(): StochFPoint;

  getFastK(): number;
  setFastK(value: number): StochFPoint;

  getFastD(): number;
  setFastD(value: number): StochFPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StochFPoint.AsObject;
  static toObject(includeInstance: boolean, msg: StochFPoint): StochFPoint.AsObject;
  static serializeBinaryToWriter(message: StochFPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StochFPoint;
  static deserializeBinaryFromReader(message: StochFPoint, reader: jspb.BinaryReader): StochFPoint;
}

export namespace StochFPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fastK: number,
    fastD: number,
  }
}

export class StochFSeries extends jspb.Message {
  getPointsList(): Array<StochFPoint>;
  setPointsList(value: Array<StochFPoint>): StochFSeries;
  clearPointsList(): StochFSeries;
  addPoints(value?: StochFPoint, index?: number): StochFPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StochFSeries.AsObject;
  static toObject(includeInstance: boolean, msg: StochFSeries): StochFSeries.AsObject;
  static serializeBinaryToWriter(message: StochFSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StochFSeries;
  static deserializeBinaryFromReader(message: StochFSeries, reader: jspb.BinaryReader): StochFSeries;
}

export namespace StochFSeries {
  export type AsObject = {
    pointsList: Array<StochFPoint.AsObject>,
  }
}

export class MinMaxPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): MinMaxPoint;
  hasTime(): boolean;
  clearTime(): MinMaxPoint;

  getMin(): number;
  setMin(value: number): MinMaxPoint;

  getMax(): number;
  setMax(value: number): MinMaxPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinMaxPoint.AsObject;
  static toObject(includeInstance: boolean, msg: MinMaxPoint): MinMaxPoint.AsObject;
  static serializeBinaryToWriter(message: MinMaxPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinMaxPoint;
  static deserializeBinaryFromReader(message: MinMaxPoint, reader: jspb.BinaryReader): MinMaxPoint;
}

export namespace MinMaxPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    min: number,
    max: number,
  }
}

export class MinMaxSeries extends jspb.Message {
  getPointsList(): Array<MinMaxPoint>;
  setPointsList(value: Array<MinMaxPoint>): MinMaxSeries;
  clearPointsList(): MinMaxSeries;
  addPoints(value?: MinMaxPoint, index?: number): MinMaxPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinMaxSeries.AsObject;
  static toObject(includeInstance: boolean, msg: MinMaxSeries): MinMaxSeries.AsObject;
  static serializeBinaryToWriter(message: MinMaxSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinMaxSeries;
  static deserializeBinaryFromReader(message: MinMaxSeries, reader: jspb.BinaryReader): MinMaxSeries;
}

export namespace MinMaxSeries {
  export type AsObject = {
    pointsList: Array<MinMaxPoint.AsObject>,
  }
}

export class MinMaxIndexPoint extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): MinMaxIndexPoint;
  hasTime(): boolean;
  clearTime(): MinMaxIndexPoint;

  getMinIndex(): number;
  setMinIndex(value: number): MinMaxIndexPoint;

  getMaxIndex(): number;
  setMaxIndex(value: number): MinMaxIndexPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinMaxIndexPoint.AsObject;
  static toObject(includeInstance: boolean, msg: MinMaxIndexPoint): MinMaxIndexPoint.AsObject;
  static serializeBinaryToWriter(message: MinMaxIndexPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinMaxIndexPoint;
  static deserializeBinaryFromReader(message: MinMaxIndexPoint, reader: jspb.BinaryReader): MinMaxIndexPoint;
}

export namespace MinMaxIndexPoint {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    minIndex: number,
    maxIndex: number,
  }
}

export class MinMaxIndexSeries extends jspb.Message {
  getPointsList(): Array<MinMaxIndexPoint>;
  setPointsList(value: Array<MinMaxIndexPoint>): MinMaxIndexSeries;
  clearPointsList(): MinMaxIndexSeries;
  addPoints(value?: MinMaxIndexPoint, index?: number): MinMaxIndexPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinMaxIndexSeries.AsObject;
  static toObject(includeInstance: boolean, msg: MinMaxIndexSeries): MinMaxIndexSeries.AsObject;
  static serializeBinaryToWriter(message: MinMaxIndexSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinMaxIndexSeries;
  static deserializeBinaryFromReader(message: MinMaxIndexSeries, reader: jspb.BinaryReader): MinMaxIndexSeries;
}

export namespace MinMaxIndexSeries {
  export type AsObject = {
    pointsList: Array<MinMaxIndexPoint.AsObject>,
  }
}

export class IndicatorValuesResponse extends jspb.Message {
  getRsi(): RealSeries | undefined;
  setRsi(value?: RealSeries): IndicatorValuesResponse;
  hasRsi(): boolean;
  clearRsi(): IndicatorValuesResponse;

  getHtDcperiod(): RealSeries | undefined;
  setHtDcperiod(value?: RealSeries): IndicatorValuesResponse;
  hasHtDcperiod(): boolean;
  clearHtDcperiod(): IndicatorValuesResponse;

  getHtDcphase(): RealSeries | undefined;
  setHtDcphase(value?: RealSeries): IndicatorValuesResponse;
  hasHtDcphase(): boolean;
  clearHtDcphase(): IndicatorValuesResponse;

  getHtPhasor(): HtPhasorSeries | undefined;
  setHtPhasor(value?: HtPhasorSeries): IndicatorValuesResponse;
  hasHtPhasor(): boolean;
  clearHtPhasor(): IndicatorValuesResponse;

  getHtSine(): HtSineSeries | undefined;
  setHtSine(value?: HtSineSeries): IndicatorValuesResponse;
  hasHtSine(): boolean;
  clearHtSine(): IndicatorValuesResponse;

  getHtTrendmode(): IntegerSeries | undefined;
  setHtTrendmode(value?: IntegerSeries): IndicatorValuesResponse;
  hasHtTrendmode(): boolean;
  clearHtTrendmode(): IndicatorValuesResponse;

  getAdd(): RealSeries | undefined;
  setAdd(value?: RealSeries): IndicatorValuesResponse;
  hasAdd(): boolean;
  clearAdd(): IndicatorValuesResponse;

  getDiv(): RealSeries | undefined;
  setDiv(value?: RealSeries): IndicatorValuesResponse;
  hasDiv(): boolean;
  clearDiv(): IndicatorValuesResponse;

  getMax(): RealSeries | undefined;
  setMax(value?: RealSeries): IndicatorValuesResponse;
  hasMax(): boolean;
  clearMax(): IndicatorValuesResponse;

  getMaxindex(): IntegerSeries | undefined;
  setMaxindex(value?: IntegerSeries): IndicatorValuesResponse;
  hasMaxindex(): boolean;
  clearMaxindex(): IndicatorValuesResponse;

  getMin(): RealSeries | undefined;
  setMin(value?: RealSeries): IndicatorValuesResponse;
  hasMin(): boolean;
  clearMin(): IndicatorValuesResponse;

  getMinindex(): IntegerSeries | undefined;
  setMinindex(value?: IntegerSeries): IndicatorValuesResponse;
  hasMinindex(): boolean;
  clearMinindex(): IndicatorValuesResponse;

  getMinmax(): MinMaxSeries | undefined;
  setMinmax(value?: MinMaxSeries): IndicatorValuesResponse;
  hasMinmax(): boolean;
  clearMinmax(): IndicatorValuesResponse;

  getMinmaxindex(): MinMaxIndexSeries | undefined;
  setMinmaxindex(value?: MinMaxIndexSeries): IndicatorValuesResponse;
  hasMinmaxindex(): boolean;
  clearMinmaxindex(): IndicatorValuesResponse;

  getMult(): RealSeries | undefined;
  setMult(value?: RealSeries): IndicatorValuesResponse;
  hasMult(): boolean;
  clearMult(): IndicatorValuesResponse;

  getSub(): RealSeries | undefined;
  setSub(value?: RealSeries): IndicatorValuesResponse;
  hasSub(): boolean;
  clearSub(): IndicatorValuesResponse;

  getSum(): RealSeries | undefined;
  setSum(value?: RealSeries): IndicatorValuesResponse;
  hasSum(): boolean;
  clearSum(): IndicatorValuesResponse;

  getAcos(): RealSeries | undefined;
  setAcos(value?: RealSeries): IndicatorValuesResponse;
  hasAcos(): boolean;
  clearAcos(): IndicatorValuesResponse;

  getAsin(): RealSeries | undefined;
  setAsin(value?: RealSeries): IndicatorValuesResponse;
  hasAsin(): boolean;
  clearAsin(): IndicatorValuesResponse;

  getAtan(): RealSeries | undefined;
  setAtan(value?: RealSeries): IndicatorValuesResponse;
  hasAtan(): boolean;
  clearAtan(): IndicatorValuesResponse;

  getCeil(): RealSeries | undefined;
  setCeil(value?: RealSeries): IndicatorValuesResponse;
  hasCeil(): boolean;
  clearCeil(): IndicatorValuesResponse;

  getCos(): RealSeries | undefined;
  setCos(value?: RealSeries): IndicatorValuesResponse;
  hasCos(): boolean;
  clearCos(): IndicatorValuesResponse;

  getCosh(): RealSeries | undefined;
  setCosh(value?: RealSeries): IndicatorValuesResponse;
  hasCosh(): boolean;
  clearCosh(): IndicatorValuesResponse;

  getExp(): RealSeries | undefined;
  setExp(value?: RealSeries): IndicatorValuesResponse;
  hasExp(): boolean;
  clearExp(): IndicatorValuesResponse;

  getFloor(): RealSeries | undefined;
  setFloor(value?: RealSeries): IndicatorValuesResponse;
  hasFloor(): boolean;
  clearFloor(): IndicatorValuesResponse;

  getLn(): RealSeries | undefined;
  setLn(value?: RealSeries): IndicatorValuesResponse;
  hasLn(): boolean;
  clearLn(): IndicatorValuesResponse;

  getLog10(): RealSeries | undefined;
  setLog10(value?: RealSeries): IndicatorValuesResponse;
  hasLog10(): boolean;
  clearLog10(): IndicatorValuesResponse;

  getSin(): RealSeries | undefined;
  setSin(value?: RealSeries): IndicatorValuesResponse;
  hasSin(): boolean;
  clearSin(): IndicatorValuesResponse;

  getSinh(): RealSeries | undefined;
  setSinh(value?: RealSeries): IndicatorValuesResponse;
  hasSinh(): boolean;
  clearSinh(): IndicatorValuesResponse;

  getSqrt(): RealSeries | undefined;
  setSqrt(value?: RealSeries): IndicatorValuesResponse;
  hasSqrt(): boolean;
  clearSqrt(): IndicatorValuesResponse;

  getTan(): RealSeries | undefined;
  setTan(value?: RealSeries): IndicatorValuesResponse;
  hasTan(): boolean;
  clearTan(): IndicatorValuesResponse;

  getTanh(): RealSeries | undefined;
  setTanh(value?: RealSeries): IndicatorValuesResponse;
  hasTanh(): boolean;
  clearTanh(): IndicatorValuesResponse;

  getAdx(): RealSeries | undefined;
  setAdx(value?: RealSeries): IndicatorValuesResponse;
  hasAdx(): boolean;
  clearAdx(): IndicatorValuesResponse;

  getAdxr(): RealSeries | undefined;
  setAdxr(value?: RealSeries): IndicatorValuesResponse;
  hasAdxr(): boolean;
  clearAdxr(): IndicatorValuesResponse;

  getApo(): RealSeries | undefined;
  setApo(value?: RealSeries): IndicatorValuesResponse;
  hasApo(): boolean;
  clearApo(): IndicatorValuesResponse;

  getAroon(): AroonSeries | undefined;
  setAroon(value?: AroonSeries): IndicatorValuesResponse;
  hasAroon(): boolean;
  clearAroon(): IndicatorValuesResponse;

  getAroonosc(): RealSeries | undefined;
  setAroonosc(value?: RealSeries): IndicatorValuesResponse;
  hasAroonosc(): boolean;
  clearAroonosc(): IndicatorValuesResponse;

  getBop(): RealSeries | undefined;
  setBop(value?: RealSeries): IndicatorValuesResponse;
  hasBop(): boolean;
  clearBop(): IndicatorValuesResponse;

  getCci(): RealSeries | undefined;
  setCci(value?: RealSeries): IndicatorValuesResponse;
  hasCci(): boolean;
  clearCci(): IndicatorValuesResponse;

  getCmo(): RealSeries | undefined;
  setCmo(value?: RealSeries): IndicatorValuesResponse;
  hasCmo(): boolean;
  clearCmo(): IndicatorValuesResponse;

  getDx(): RealSeries | undefined;
  setDx(value?: RealSeries): IndicatorValuesResponse;
  hasDx(): boolean;
  clearDx(): IndicatorValuesResponse;

  getMacd(): MacdSeries | undefined;
  setMacd(value?: MacdSeries): IndicatorValuesResponse;
  hasMacd(): boolean;
  clearMacd(): IndicatorValuesResponse;

  getMacdext(): MacdSeries | undefined;
  setMacdext(value?: MacdSeries): IndicatorValuesResponse;
  hasMacdext(): boolean;
  clearMacdext(): IndicatorValuesResponse;

  getMacdfix(): MacdSeries | undefined;
  setMacdfix(value?: MacdSeries): IndicatorValuesResponse;
  hasMacdfix(): boolean;
  clearMacdfix(): IndicatorValuesResponse;

  getMfi(): RealSeries | undefined;
  setMfi(value?: RealSeries): IndicatorValuesResponse;
  hasMfi(): boolean;
  clearMfi(): IndicatorValuesResponse;

  getMinusDi(): RealSeries | undefined;
  setMinusDi(value?: RealSeries): IndicatorValuesResponse;
  hasMinusDi(): boolean;
  clearMinusDi(): IndicatorValuesResponse;

  getMinusDm(): RealSeries | undefined;
  setMinusDm(value?: RealSeries): IndicatorValuesResponse;
  hasMinusDm(): boolean;
  clearMinusDm(): IndicatorValuesResponse;

  getMom(): RealSeries | undefined;
  setMom(value?: RealSeries): IndicatorValuesResponse;
  hasMom(): boolean;
  clearMom(): IndicatorValuesResponse;

  getPlusDi(): RealSeries | undefined;
  setPlusDi(value?: RealSeries): IndicatorValuesResponse;
  hasPlusDi(): boolean;
  clearPlusDi(): IndicatorValuesResponse;

  getPlusDm(): RealSeries | undefined;
  setPlusDm(value?: RealSeries): IndicatorValuesResponse;
  hasPlusDm(): boolean;
  clearPlusDm(): IndicatorValuesResponse;

  getPpo(): RealSeries | undefined;
  setPpo(value?: RealSeries): IndicatorValuesResponse;
  hasPpo(): boolean;
  clearPpo(): IndicatorValuesResponse;

  getRoc(): RealSeries | undefined;
  setRoc(value?: RealSeries): IndicatorValuesResponse;
  hasRoc(): boolean;
  clearRoc(): IndicatorValuesResponse;

  getRocp(): RealSeries | undefined;
  setRocp(value?: RealSeries): IndicatorValuesResponse;
  hasRocp(): boolean;
  clearRocp(): IndicatorValuesResponse;

  getRocr(): RealSeries | undefined;
  setRocr(value?: RealSeries): IndicatorValuesResponse;
  hasRocr(): boolean;
  clearRocr(): IndicatorValuesResponse;

  getRocr100(): RealSeries | undefined;
  setRocr100(value?: RealSeries): IndicatorValuesResponse;
  hasRocr100(): boolean;
  clearRocr100(): IndicatorValuesResponse;

  getStoch(): StochSeries | undefined;
  setStoch(value?: StochSeries): IndicatorValuesResponse;
  hasStoch(): boolean;
  clearStoch(): IndicatorValuesResponse;

  getStochf(): StochFSeries | undefined;
  setStochf(value?: StochFSeries): IndicatorValuesResponse;
  hasStochf(): boolean;
  clearStochf(): IndicatorValuesResponse;

  getStochrsi(): StochFSeries | undefined;
  setStochrsi(value?: StochFSeries): IndicatorValuesResponse;
  hasStochrsi(): boolean;
  clearStochrsi(): IndicatorValuesResponse;

  getTrix(): RealSeries | undefined;
  setTrix(value?: RealSeries): IndicatorValuesResponse;
  hasTrix(): boolean;
  clearTrix(): IndicatorValuesResponse;

  getUltosc(): RealSeries | undefined;
  setUltosc(value?: RealSeries): IndicatorValuesResponse;
  hasUltosc(): boolean;
  clearUltosc(): IndicatorValuesResponse;

  getWillr(): RealSeries | undefined;
  setWillr(value?: RealSeries): IndicatorValuesResponse;
  hasWillr(): boolean;
  clearWillr(): IndicatorValuesResponse;

  getBbands(): BandsSeries | undefined;
  setBbands(value?: BandsSeries): IndicatorValuesResponse;
  hasBbands(): boolean;
  clearBbands(): IndicatorValuesResponse;

  getDema(): RealSeries | undefined;
  setDema(value?: RealSeries): IndicatorValuesResponse;
  hasDema(): boolean;
  clearDema(): IndicatorValuesResponse;

  getEma(): RealSeries | undefined;
  setEma(value?: RealSeries): IndicatorValuesResponse;
  hasEma(): boolean;
  clearEma(): IndicatorValuesResponse;

  getHtTrendline(): RealSeries | undefined;
  setHtTrendline(value?: RealSeries): IndicatorValuesResponse;
  hasHtTrendline(): boolean;
  clearHtTrendline(): IndicatorValuesResponse;

  getKama(): RealSeries | undefined;
  setKama(value?: RealSeries): IndicatorValuesResponse;
  hasKama(): boolean;
  clearKama(): IndicatorValuesResponse;

  getMa(): RealSeries | undefined;
  setMa(value?: RealSeries): IndicatorValuesResponse;
  hasMa(): boolean;
  clearMa(): IndicatorValuesResponse;

  getMama(): MamaSeries | undefined;
  setMama(value?: MamaSeries): IndicatorValuesResponse;
  hasMama(): boolean;
  clearMama(): IndicatorValuesResponse;

  getMavp(): RealSeries | undefined;
  setMavp(value?: RealSeries): IndicatorValuesResponse;
  hasMavp(): boolean;
  clearMavp(): IndicatorValuesResponse;

  getMidpoint(): RealSeries | undefined;
  setMidpoint(value?: RealSeries): IndicatorValuesResponse;
  hasMidpoint(): boolean;
  clearMidpoint(): IndicatorValuesResponse;

  getMidprice(): RealSeries | undefined;
  setMidprice(value?: RealSeries): IndicatorValuesResponse;
  hasMidprice(): boolean;
  clearMidprice(): IndicatorValuesResponse;

  getSar(): RealSeries | undefined;
  setSar(value?: RealSeries): IndicatorValuesResponse;
  hasSar(): boolean;
  clearSar(): IndicatorValuesResponse;

  getSarext(): RealSeries | undefined;
  setSarext(value?: RealSeries): IndicatorValuesResponse;
  hasSarext(): boolean;
  clearSarext(): IndicatorValuesResponse;

  getSma(): RealSeries | undefined;
  setSma(value?: RealSeries): IndicatorValuesResponse;
  hasSma(): boolean;
  clearSma(): IndicatorValuesResponse;

  getT3(): RealSeries | undefined;
  setT3(value?: RealSeries): IndicatorValuesResponse;
  hasT3(): boolean;
  clearT3(): IndicatorValuesResponse;

  getTema(): RealSeries | undefined;
  setTema(value?: RealSeries): IndicatorValuesResponse;
  hasTema(): boolean;
  clearTema(): IndicatorValuesResponse;

  getTrima(): RealSeries | undefined;
  setTrima(value?: RealSeries): IndicatorValuesResponse;
  hasTrima(): boolean;
  clearTrima(): IndicatorValuesResponse;

  getWma(): RealSeries | undefined;
  setWma(value?: RealSeries): IndicatorValuesResponse;
  hasWma(): boolean;
  clearWma(): IndicatorValuesResponse;

  getCdl2crows(): IntegerSeries | undefined;
  setCdl2crows(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdl2crows(): boolean;
  clearCdl2crows(): IndicatorValuesResponse;

  getCdl3blackcrows(): IntegerSeries | undefined;
  setCdl3blackcrows(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdl3blackcrows(): boolean;
  clearCdl3blackcrows(): IndicatorValuesResponse;

  getCdl3inside(): IntegerSeries | undefined;
  setCdl3inside(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdl3inside(): boolean;
  clearCdl3inside(): IndicatorValuesResponse;

  getCdl3linestrike(): IntegerSeries | undefined;
  setCdl3linestrike(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdl3linestrike(): boolean;
  clearCdl3linestrike(): IndicatorValuesResponse;

  getCdl3outside(): IntegerSeries | undefined;
  setCdl3outside(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdl3outside(): boolean;
  clearCdl3outside(): IndicatorValuesResponse;

  getCdl3starsinsouth(): IntegerSeries | undefined;
  setCdl3starsinsouth(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdl3starsinsouth(): boolean;
  clearCdl3starsinsouth(): IndicatorValuesResponse;

  getCdl3whitesoldiers(): IntegerSeries | undefined;
  setCdl3whitesoldiers(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdl3whitesoldiers(): boolean;
  clearCdl3whitesoldiers(): IndicatorValuesResponse;

  getCdlabandonedbaby(): IntegerSeries | undefined;
  setCdlabandonedbaby(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlabandonedbaby(): boolean;
  clearCdlabandonedbaby(): IndicatorValuesResponse;

  getCdladvanceblock(): IntegerSeries | undefined;
  setCdladvanceblock(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdladvanceblock(): boolean;
  clearCdladvanceblock(): IndicatorValuesResponse;

  getCdlbelthold(): IntegerSeries | undefined;
  setCdlbelthold(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlbelthold(): boolean;
  clearCdlbelthold(): IndicatorValuesResponse;

  getCdlbreakaway(): IntegerSeries | undefined;
  setCdlbreakaway(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlbreakaway(): boolean;
  clearCdlbreakaway(): IndicatorValuesResponse;

  getCdlclosingmarubozu(): IntegerSeries | undefined;
  setCdlclosingmarubozu(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlclosingmarubozu(): boolean;
  clearCdlclosingmarubozu(): IndicatorValuesResponse;

  getCdlconcealbabyswall(): IntegerSeries | undefined;
  setCdlconcealbabyswall(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlconcealbabyswall(): boolean;
  clearCdlconcealbabyswall(): IndicatorValuesResponse;

  getCdlcounterattack(): IntegerSeries | undefined;
  setCdlcounterattack(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlcounterattack(): boolean;
  clearCdlcounterattack(): IndicatorValuesResponse;

  getCdldarkcloudcover(): IntegerSeries | undefined;
  setCdldarkcloudcover(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdldarkcloudcover(): boolean;
  clearCdldarkcloudcover(): IndicatorValuesResponse;

  getCdldoji(): IntegerSeries | undefined;
  setCdldoji(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdldoji(): boolean;
  clearCdldoji(): IndicatorValuesResponse;

  getCdldojistar(): IntegerSeries | undefined;
  setCdldojistar(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdldojistar(): boolean;
  clearCdldojistar(): IndicatorValuesResponse;

  getCdldragonflydoji(): IntegerSeries | undefined;
  setCdldragonflydoji(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdldragonflydoji(): boolean;
  clearCdldragonflydoji(): IndicatorValuesResponse;

  getCdlengulfing(): IntegerSeries | undefined;
  setCdlengulfing(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlengulfing(): boolean;
  clearCdlengulfing(): IndicatorValuesResponse;

  getCdleveningdojistar(): IntegerSeries | undefined;
  setCdleveningdojistar(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdleveningdojistar(): boolean;
  clearCdleveningdojistar(): IndicatorValuesResponse;

  getCdleveningstar(): IntegerSeries | undefined;
  setCdleveningstar(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdleveningstar(): boolean;
  clearCdleveningstar(): IndicatorValuesResponse;

  getCdlgapsidesidewhite(): IntegerSeries | undefined;
  setCdlgapsidesidewhite(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlgapsidesidewhite(): boolean;
  clearCdlgapsidesidewhite(): IndicatorValuesResponse;

  getCdlgravestonedoji(): IntegerSeries | undefined;
  setCdlgravestonedoji(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlgravestonedoji(): boolean;
  clearCdlgravestonedoji(): IndicatorValuesResponse;

  getCdlhammer(): IntegerSeries | undefined;
  setCdlhammer(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlhammer(): boolean;
  clearCdlhammer(): IndicatorValuesResponse;

  getCdlhangingman(): IntegerSeries | undefined;
  setCdlhangingman(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlhangingman(): boolean;
  clearCdlhangingman(): IndicatorValuesResponse;

  getCdlharami(): IntegerSeries | undefined;
  setCdlharami(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlharami(): boolean;
  clearCdlharami(): IndicatorValuesResponse;

  getCdlharamicross(): IntegerSeries | undefined;
  setCdlharamicross(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlharamicross(): boolean;
  clearCdlharamicross(): IndicatorValuesResponse;

  getCdlhighwave(): IntegerSeries | undefined;
  setCdlhighwave(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlhighwave(): boolean;
  clearCdlhighwave(): IndicatorValuesResponse;

  getCdlhikkake(): IntegerSeries | undefined;
  setCdlhikkake(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlhikkake(): boolean;
  clearCdlhikkake(): IndicatorValuesResponse;

  getCdlhikkakemod(): IntegerSeries | undefined;
  setCdlhikkakemod(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlhikkakemod(): boolean;
  clearCdlhikkakemod(): IndicatorValuesResponse;

  getCdlhomingpigeon(): IntegerSeries | undefined;
  setCdlhomingpigeon(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlhomingpigeon(): boolean;
  clearCdlhomingpigeon(): IndicatorValuesResponse;

  getCdlidentical3crows(): IntegerSeries | undefined;
  setCdlidentical3crows(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlidentical3crows(): boolean;
  clearCdlidentical3crows(): IndicatorValuesResponse;

  getCdlinneck(): IntegerSeries | undefined;
  setCdlinneck(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlinneck(): boolean;
  clearCdlinneck(): IndicatorValuesResponse;

  getCdlinvertedhammer(): IntegerSeries | undefined;
  setCdlinvertedhammer(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlinvertedhammer(): boolean;
  clearCdlinvertedhammer(): IndicatorValuesResponse;

  getCdlkicking(): IntegerSeries | undefined;
  setCdlkicking(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlkicking(): boolean;
  clearCdlkicking(): IndicatorValuesResponse;

  getCdlkickingbylength(): IntegerSeries | undefined;
  setCdlkickingbylength(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlkickingbylength(): boolean;
  clearCdlkickingbylength(): IndicatorValuesResponse;

  getCdlladderbottom(): IntegerSeries | undefined;
  setCdlladderbottom(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlladderbottom(): boolean;
  clearCdlladderbottom(): IndicatorValuesResponse;

  getCdllongleggeddoji(): IntegerSeries | undefined;
  setCdllongleggeddoji(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdllongleggeddoji(): boolean;
  clearCdllongleggeddoji(): IndicatorValuesResponse;

  getCdllongline(): IntegerSeries | undefined;
  setCdllongline(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdllongline(): boolean;
  clearCdllongline(): IndicatorValuesResponse;

  getCdlmarubozu(): IntegerSeries | undefined;
  setCdlmarubozu(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlmarubozu(): boolean;
  clearCdlmarubozu(): IndicatorValuesResponse;

  getCdlmatchinglow(): IntegerSeries | undefined;
  setCdlmatchinglow(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlmatchinglow(): boolean;
  clearCdlmatchinglow(): IndicatorValuesResponse;

  getCdlmathold(): IntegerSeries | undefined;
  setCdlmathold(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlmathold(): boolean;
  clearCdlmathold(): IndicatorValuesResponse;

  getCdlmorningdojistar(): IntegerSeries | undefined;
  setCdlmorningdojistar(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlmorningdojistar(): boolean;
  clearCdlmorningdojistar(): IndicatorValuesResponse;

  getCdlmorningstar(): IntegerSeries | undefined;
  setCdlmorningstar(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlmorningstar(): boolean;
  clearCdlmorningstar(): IndicatorValuesResponse;

  getCdlonneck(): IntegerSeries | undefined;
  setCdlonneck(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlonneck(): boolean;
  clearCdlonneck(): IndicatorValuesResponse;

  getCdlpiercing(): IntegerSeries | undefined;
  setCdlpiercing(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlpiercing(): boolean;
  clearCdlpiercing(): IndicatorValuesResponse;

  getCdlrickshawman(): IntegerSeries | undefined;
  setCdlrickshawman(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlrickshawman(): boolean;
  clearCdlrickshawman(): IndicatorValuesResponse;

  getCdlrisefall3methods(): IntegerSeries | undefined;
  setCdlrisefall3methods(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlrisefall3methods(): boolean;
  clearCdlrisefall3methods(): IndicatorValuesResponse;

  getCdlseparatinglines(): IntegerSeries | undefined;
  setCdlseparatinglines(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlseparatinglines(): boolean;
  clearCdlseparatinglines(): IndicatorValuesResponse;

  getCdlshootingstar(): IntegerSeries | undefined;
  setCdlshootingstar(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlshootingstar(): boolean;
  clearCdlshootingstar(): IndicatorValuesResponse;

  getCdlshortline(): IntegerSeries | undefined;
  setCdlshortline(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlshortline(): boolean;
  clearCdlshortline(): IndicatorValuesResponse;

  getCdlspinningtop(): IntegerSeries | undefined;
  setCdlspinningtop(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlspinningtop(): boolean;
  clearCdlspinningtop(): IndicatorValuesResponse;

  getCdlstalledpattern(): IntegerSeries | undefined;
  setCdlstalledpattern(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlstalledpattern(): boolean;
  clearCdlstalledpattern(): IndicatorValuesResponse;

  getCdlsticksandwich(): IntegerSeries | undefined;
  setCdlsticksandwich(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlsticksandwich(): boolean;
  clearCdlsticksandwich(): IndicatorValuesResponse;

  getCdltakuri(): IntegerSeries | undefined;
  setCdltakuri(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdltakuri(): boolean;
  clearCdltakuri(): IndicatorValuesResponse;

  getCdltasukigap(): IntegerSeries | undefined;
  setCdltasukigap(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdltasukigap(): boolean;
  clearCdltasukigap(): IndicatorValuesResponse;

  getCdlthrusting(): IntegerSeries | undefined;
  setCdlthrusting(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlthrusting(): boolean;
  clearCdlthrusting(): IndicatorValuesResponse;

  getCdltristar(): IntegerSeries | undefined;
  setCdltristar(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdltristar(): boolean;
  clearCdltristar(): IndicatorValuesResponse;

  getCdlunique3river(): IntegerSeries | undefined;
  setCdlunique3river(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlunique3river(): boolean;
  clearCdlunique3river(): IndicatorValuesResponse;

  getCdlupsidegap2crows(): IntegerSeries | undefined;
  setCdlupsidegap2crows(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlupsidegap2crows(): boolean;
  clearCdlupsidegap2crows(): IndicatorValuesResponse;

  getCdlxsidegap3methods(): IntegerSeries | undefined;
  setCdlxsidegap3methods(value?: IntegerSeries): IndicatorValuesResponse;
  hasCdlxsidegap3methods(): boolean;
  clearCdlxsidegap3methods(): IndicatorValuesResponse;

  getAvgprice(): RealSeries | undefined;
  setAvgprice(value?: RealSeries): IndicatorValuesResponse;
  hasAvgprice(): boolean;
  clearAvgprice(): IndicatorValuesResponse;

  getMedprice(): RealSeries | undefined;
  setMedprice(value?: RealSeries): IndicatorValuesResponse;
  hasMedprice(): boolean;
  clearMedprice(): IndicatorValuesResponse;

  getTypprice(): RealSeries | undefined;
  setTypprice(value?: RealSeries): IndicatorValuesResponse;
  hasTypprice(): boolean;
  clearTypprice(): IndicatorValuesResponse;

  getWclprice(): RealSeries | undefined;
  setWclprice(value?: RealSeries): IndicatorValuesResponse;
  hasWclprice(): boolean;
  clearWclprice(): IndicatorValuesResponse;

  getBeta(): RealSeries | undefined;
  setBeta(value?: RealSeries): IndicatorValuesResponse;
  hasBeta(): boolean;
  clearBeta(): IndicatorValuesResponse;

  getCorrel(): RealSeries | undefined;
  setCorrel(value?: RealSeries): IndicatorValuesResponse;
  hasCorrel(): boolean;
  clearCorrel(): IndicatorValuesResponse;

  getLinearreg(): RealSeries | undefined;
  setLinearreg(value?: RealSeries): IndicatorValuesResponse;
  hasLinearreg(): boolean;
  clearLinearreg(): IndicatorValuesResponse;

  getLinearregAngle(): RealSeries | undefined;
  setLinearregAngle(value?: RealSeries): IndicatorValuesResponse;
  hasLinearregAngle(): boolean;
  clearLinearregAngle(): IndicatorValuesResponse;

  getLinearregIntercept(): RealSeries | undefined;
  setLinearregIntercept(value?: RealSeries): IndicatorValuesResponse;
  hasLinearregIntercept(): boolean;
  clearLinearregIntercept(): IndicatorValuesResponse;

  getLinearregSlope(): RealSeries | undefined;
  setLinearregSlope(value?: RealSeries): IndicatorValuesResponse;
  hasLinearregSlope(): boolean;
  clearLinearregSlope(): IndicatorValuesResponse;

  getStddev(): RealSeries | undefined;
  setStddev(value?: RealSeries): IndicatorValuesResponse;
  hasStddev(): boolean;
  clearStddev(): IndicatorValuesResponse;

  getTsf(): RealSeries | undefined;
  setTsf(value?: RealSeries): IndicatorValuesResponse;
  hasTsf(): boolean;
  clearTsf(): IndicatorValuesResponse;

  getVar(): RealSeries | undefined;
  setVar(value?: RealSeries): IndicatorValuesResponse;
  hasVar(): boolean;
  clearVar(): IndicatorValuesResponse;

  getAtr(): RealSeries | undefined;
  setAtr(value?: RealSeries): IndicatorValuesResponse;
  hasAtr(): boolean;
  clearAtr(): IndicatorValuesResponse;

  getNatr(): RealSeries | undefined;
  setNatr(value?: RealSeries): IndicatorValuesResponse;
  hasNatr(): boolean;
  clearNatr(): IndicatorValuesResponse;

  getTrange(): RealSeries | undefined;
  setTrange(value?: RealSeries): IndicatorValuesResponse;
  hasTrange(): boolean;
  clearTrange(): IndicatorValuesResponse;

  getAd(): RealSeries | undefined;
  setAd(value?: RealSeries): IndicatorValuesResponse;
  hasAd(): boolean;
  clearAd(): IndicatorValuesResponse;

  getAdosc(): RealSeries | undefined;
  setAdosc(value?: RealSeries): IndicatorValuesResponse;
  hasAdosc(): boolean;
  clearAdosc(): IndicatorValuesResponse;

  getObv(): RealSeries | undefined;
  setObv(value?: RealSeries): IndicatorValuesResponse;
  hasObv(): boolean;
  clearObv(): IndicatorValuesResponse;

  getValuesCase(): IndicatorValuesResponse.ValuesCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndicatorValuesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndicatorValuesResponse): IndicatorValuesResponse.AsObject;
  static serializeBinaryToWriter(message: IndicatorValuesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndicatorValuesResponse;
  static deserializeBinaryFromReader(message: IndicatorValuesResponse, reader: jspb.BinaryReader): IndicatorValuesResponse;
}

export namespace IndicatorValuesResponse {
  export type AsObject = {
    rsi?: RealSeries.AsObject,
    htDcperiod?: RealSeries.AsObject,
    htDcphase?: RealSeries.AsObject,
    htPhasor?: HtPhasorSeries.AsObject,
    htSine?: HtSineSeries.AsObject,
    htTrendmode?: IntegerSeries.AsObject,
    add?: RealSeries.AsObject,
    div?: RealSeries.AsObject,
    max?: RealSeries.AsObject,
    maxindex?: IntegerSeries.AsObject,
    min?: RealSeries.AsObject,
    minindex?: IntegerSeries.AsObject,
    minmax?: MinMaxSeries.AsObject,
    minmaxindex?: MinMaxIndexSeries.AsObject,
    mult?: RealSeries.AsObject,
    sub?: RealSeries.AsObject,
    sum?: RealSeries.AsObject,
    acos?: RealSeries.AsObject,
    asin?: RealSeries.AsObject,
    atan?: RealSeries.AsObject,
    ceil?: RealSeries.AsObject,
    cos?: RealSeries.AsObject,
    cosh?: RealSeries.AsObject,
    exp?: RealSeries.AsObject,
    floor?: RealSeries.AsObject,
    ln?: RealSeries.AsObject,
    log10?: RealSeries.AsObject,
    sin?: RealSeries.AsObject,
    sinh?: RealSeries.AsObject,
    sqrt?: RealSeries.AsObject,
    tan?: RealSeries.AsObject,
    tanh?: RealSeries.AsObject,
    adx?: RealSeries.AsObject,
    adxr?: RealSeries.AsObject,
    apo?: RealSeries.AsObject,
    aroon?: AroonSeries.AsObject,
    aroonosc?: RealSeries.AsObject,
    bop?: RealSeries.AsObject,
    cci?: RealSeries.AsObject,
    cmo?: RealSeries.AsObject,
    dx?: RealSeries.AsObject,
    macd?: MacdSeries.AsObject,
    macdext?: MacdSeries.AsObject,
    macdfix?: MacdSeries.AsObject,
    mfi?: RealSeries.AsObject,
    minusDi?: RealSeries.AsObject,
    minusDm?: RealSeries.AsObject,
    mom?: RealSeries.AsObject,
    plusDi?: RealSeries.AsObject,
    plusDm?: RealSeries.AsObject,
    ppo?: RealSeries.AsObject,
    roc?: RealSeries.AsObject,
    rocp?: RealSeries.AsObject,
    rocr?: RealSeries.AsObject,
    rocr100?: RealSeries.AsObject,
    stoch?: StochSeries.AsObject,
    stochf?: StochFSeries.AsObject,
    stochrsi?: StochFSeries.AsObject,
    trix?: RealSeries.AsObject,
    ultosc?: RealSeries.AsObject,
    willr?: RealSeries.AsObject,
    bbands?: BandsSeries.AsObject,
    dema?: RealSeries.AsObject,
    ema?: RealSeries.AsObject,
    htTrendline?: RealSeries.AsObject,
    kama?: RealSeries.AsObject,
    ma?: RealSeries.AsObject,
    mama?: MamaSeries.AsObject,
    mavp?: RealSeries.AsObject,
    midpoint?: RealSeries.AsObject,
    midprice?: RealSeries.AsObject,
    sar?: RealSeries.AsObject,
    sarext?: RealSeries.AsObject,
    sma?: RealSeries.AsObject,
    t3?: RealSeries.AsObject,
    tema?: RealSeries.AsObject,
    trima?: RealSeries.AsObject,
    wma?: RealSeries.AsObject,
    cdl2crows?: IntegerSeries.AsObject,
    cdl3blackcrows?: IntegerSeries.AsObject,
    cdl3inside?: IntegerSeries.AsObject,
    cdl3linestrike?: IntegerSeries.AsObject,
    cdl3outside?: IntegerSeries.AsObject,
    cdl3starsinsouth?: IntegerSeries.AsObject,
    cdl3whitesoldiers?: IntegerSeries.AsObject,
    cdlabandonedbaby?: IntegerSeries.AsObject,
    cdladvanceblock?: IntegerSeries.AsObject,
    cdlbelthold?: IntegerSeries.AsObject,
    cdlbreakaway?: IntegerSeries.AsObject,
    cdlclosingmarubozu?: IntegerSeries.AsObject,
    cdlconcealbabyswall?: IntegerSeries.AsObject,
    cdlcounterattack?: IntegerSeries.AsObject,
    cdldarkcloudcover?: IntegerSeries.AsObject,
    cdldoji?: IntegerSeries.AsObject,
    cdldojistar?: IntegerSeries.AsObject,
    cdldragonflydoji?: IntegerSeries.AsObject,
    cdlengulfing?: IntegerSeries.AsObject,
    cdleveningdojistar?: IntegerSeries.AsObject,
    cdleveningstar?: IntegerSeries.AsObject,
    cdlgapsidesidewhite?: IntegerSeries.AsObject,
    cdlgravestonedoji?: IntegerSeries.AsObject,
    cdlhammer?: IntegerSeries.AsObject,
    cdlhangingman?: IntegerSeries.AsObject,
    cdlharami?: IntegerSeries.AsObject,
    cdlharamicross?: IntegerSeries.AsObject,
    cdlhighwave?: IntegerSeries.AsObject,
    cdlhikkake?: IntegerSeries.AsObject,
    cdlhikkakemod?: IntegerSeries.AsObject,
    cdlhomingpigeon?: IntegerSeries.AsObject,
    cdlidentical3crows?: IntegerSeries.AsObject,
    cdlinneck?: IntegerSeries.AsObject,
    cdlinvertedhammer?: IntegerSeries.AsObject,
    cdlkicking?: IntegerSeries.AsObject,
    cdlkickingbylength?: IntegerSeries.AsObject,
    cdlladderbottom?: IntegerSeries.AsObject,
    cdllongleggeddoji?: IntegerSeries.AsObject,
    cdllongline?: IntegerSeries.AsObject,
    cdlmarubozu?: IntegerSeries.AsObject,
    cdlmatchinglow?: IntegerSeries.AsObject,
    cdlmathold?: IntegerSeries.AsObject,
    cdlmorningdojistar?: IntegerSeries.AsObject,
    cdlmorningstar?: IntegerSeries.AsObject,
    cdlonneck?: IntegerSeries.AsObject,
    cdlpiercing?: IntegerSeries.AsObject,
    cdlrickshawman?: IntegerSeries.AsObject,
    cdlrisefall3methods?: IntegerSeries.AsObject,
    cdlseparatinglines?: IntegerSeries.AsObject,
    cdlshootingstar?: IntegerSeries.AsObject,
    cdlshortline?: IntegerSeries.AsObject,
    cdlspinningtop?: IntegerSeries.AsObject,
    cdlstalledpattern?: IntegerSeries.AsObject,
    cdlsticksandwich?: IntegerSeries.AsObject,
    cdltakuri?: IntegerSeries.AsObject,
    cdltasukigap?: IntegerSeries.AsObject,
    cdlthrusting?: IntegerSeries.AsObject,
    cdltristar?: IntegerSeries.AsObject,
    cdlunique3river?: IntegerSeries.AsObject,
    cdlupsidegap2crows?: IntegerSeries.AsObject,
    cdlxsidegap3methods?: IntegerSeries.AsObject,
    avgprice?: RealSeries.AsObject,
    medprice?: RealSeries.AsObject,
    typprice?: RealSeries.AsObject,
    wclprice?: RealSeries.AsObject,
    beta?: RealSeries.AsObject,
    correl?: RealSeries.AsObject,
    linearreg?: RealSeries.AsObject,
    linearregAngle?: RealSeries.AsObject,
    linearregIntercept?: RealSeries.AsObject,
    linearregSlope?: RealSeries.AsObject,
    stddev?: RealSeries.AsObject,
    tsf?: RealSeries.AsObject,
    pb_var?: RealSeries.AsObject,
    atr?: RealSeries.AsObject,
    natr?: RealSeries.AsObject,
    trange?: RealSeries.AsObject,
    ad?: RealSeries.AsObject,
    adosc?: RealSeries.AsObject,
    obv?: RealSeries.AsObject,
  }

  export enum ValuesCase { 
    VALUES_NOT_SET = 0,
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

