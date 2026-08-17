import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"


export class IndicatorUpdateRequest extends jspb.Message {
  getIndicatorsListList(): Array<indicators>;
  setIndicatorsListList(value: Array<indicators>): IndicatorUpdateRequest;
  clearIndicatorsListList(): IndicatorUpdateRequest;
  addIndicatorsList(value: indicators, index?: number): IndicatorUpdateRequest;

  getIsUpdate(): boolean;
  setIsUpdate(value: boolean): IndicatorUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndicatorUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IndicatorUpdateRequest): IndicatorUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: IndicatorUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndicatorUpdateRequest;
  static deserializeBinaryFromReader(message: IndicatorUpdateRequest, reader: jspb.BinaryReader): IndicatorUpdateRequest;
}

export namespace IndicatorUpdateRequest {
  export type AsObject = {
    indicatorsListList: Array<indicators>,
    isUpdate: boolean,
  }
}

export class IndicatorUpdateResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): IndicatorUpdateResponse;

  getMessage(): string;
  setMessage(value: string): IndicatorUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndicatorUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndicatorUpdateResponse): IndicatorUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: IndicatorUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndicatorUpdateResponse;
  static deserializeBinaryFromReader(message: IndicatorUpdateResponse, reader: jspb.BinaryReader): IndicatorUpdateResponse;
}

export namespace IndicatorUpdateResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export enum indicators { 
  AD = 0,
  ADOSC = 1,
  ADX = 2,
  ADXR = 3,
  APO = 4,
  AROON = 5,
  AROONOSC = 6,
  ATR = 7,
  AVGPRICE = 8,
  BBANDS = 9,
  BETA = 10,
  BOP = 11,
  CCI = 12,
  CDL2CROWS = 13,
  CDL3BLACKCROWS = 14,
  CDL3INSIDE = 15,
  CDL3LINESTRIKE = 16,
  CDL3STARSINSOUTH = 17,
  CDL3WHITESOLDIERS = 18,
  CDLABANDONEDBABY = 19,
  CDLADVANCEBLOCK = 20,
  CDLBELTHOLD = 21,
  CDLBREAKAWAY = 22,
  CDLCLOSINGMARUBOZU = 23,
  CDLCONCEALBABYSWALL = 24,
  CDLCOUNTERATTACK = 25,
  CDLDARKCLOUDCOVER = 26,
  CDLDOJI = 27,
  CDLDOJISTAR = 28,
  CDLDRAGONFLYDOJI = 29,
  CDLENGULFING = 30,
  CDLEVENINGDOJISTAR = 31,
  CDLEVENINGSTAR = 32,
  CDLGAPSIDESIDEWHITE = 33,
  CDLGRAVESTONEDOJI = 34,
  CDLHAMMER = 35,
  CDLHANGINGMAN = 36,
  CDLHARAMI = 37,
  CDLHARAMICROSS = 38,
  CDLHIGHWAVE = 39,
  CDLHIKKAKE = 40,
  CDLHIKKAKEMOD = 41,
  CDLHOMINGPIGEON = 42,
  CDLIDENTICAL3CROWS = 43,
  CDLINNECK = 44,
  CDLINVERTEDHAMMER = 45,
  CDLKICKING = 46,
  CDLKICKINGBYLENGTH = 47,
  CDLLADDERBOTTOM = 48,
  CDLLONGLEGGEDDOJI = 49,
  CDLLONGLINE = 50,
  CDLMARUBOZU = 51,
  CDLMATCHINGLOW = 52,
  CDLMATHOLD = 53,
  CDLMORNINGDOJISTAR = 54,
  CDLMORNINGSTAR = 55,
  CDLONNECK = 56,
  CDLPIERCING = 57,
  CDLRICKSHAWMAN = 58,
  CDLRISEFALL3METHODS = 59,
  CDLSEPARATINGLINES = 60,
  CDLSHOOTINGSTAR = 61,
  CDLSHORTLINE = 62,
  CDLSPINNINGTOP = 63,
  CDLSTALLEDPATTERN = 64,
  CDLSTICKSANDWICH = 65,
  CDLTAKURI = 66,
  CDLTASUKIGAP = 67,
  CDLTHRUSTING = 68,
  CDLTRISTAR = 69,
  CDLUNIQUE3RIVER = 70,
  CDLUPSIDEGAP2CROWS = 71,
  CDLXSIDEGAP3METHODS = 72,
  CMO = 73,
  CORREL = 74,
  DEMA = 75,
  DX = 76,
  EMA = 77,
  HT_DCPERIOD = 78,
  HT_DCPHASE = 79,
  HT_PHASOR = 80,
  HT_SINE = 81,
  HT_TRENDLINE = 82,
  HT_TRENDMODE = 83,
  KAMA = 84,
  LINEARREG = 85,
  LINEARREG_ANGLE = 86,
  LINEARREG_INTERCEPT = 87,
  LINEARREG_SLOPE = 88,
  MA = 89,
  MACD = 90,
  MACDEXT = 91,
  MAMA = 92,
  MAX = 93,
  MAXINDEX = 94,
  MEDPRICE = 95,
  MFI = 96,
  MIDPOINT = 97,
  MIDPRICE = 98,
  MIN = 99,
  MININDEX = 100,
  MINMAX = 101,
  MINMAXINDEX = 102,
  MINUS_DI = 103,
  MINUS_DM = 104,
  MOM = 105,
  NATR = 106,
  OBV = 107,
  PLUS_DI = 108,
  PLUS_DM = 109,
  PPO = 110,
  ROC = 111,
  ROCP = 112,
  ROCR = 113,
  ROCR100 = 114,
  RSI = 115,
  SAR = 116,
  SAREXT = 117,
  SMA = 118,
  STDDEV = 119,
  STOCH = 120,
  STOCHF = 121,
  STOCHRSI = 122,
  SUM = 123,
  T3 = 124,
  TEMA = 125,
  TRANGE = 126,
  TRIMA = 127,
  TRIX = 128,
  TSF = 129,
  TYPPRICE = 130,
  ULTOSC = 131,
  VAR = 132,
  WCLPRICE = 133,
  WILLR = 134,
  WMA = 135,
}
