import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as tinvest_common_pb from '../tinvest/common_pb'; // proto import: "tinvest/common.proto"
import * as google_api_field_behavior_pb from '../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"


export class TradingSchedulesRequest extends jspb.Message {
  getExchange(): string;
  setExchange(value: string): TradingSchedulesRequest;
  hasExchange(): boolean;
  clearExchange(): TradingSchedulesRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): TradingSchedulesRequest;
  hasFrom(): boolean;
  clearFrom(): TradingSchedulesRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): TradingSchedulesRequest;
  hasTo(): boolean;
  clearTo(): TradingSchedulesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingSchedulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradingSchedulesRequest): TradingSchedulesRequest.AsObject;
  static serializeBinaryToWriter(message: TradingSchedulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingSchedulesRequest;
  static deserializeBinaryFromReader(message: TradingSchedulesRequest, reader: jspb.BinaryReader): TradingSchedulesRequest;
}

export namespace TradingSchedulesRequest {
  export type AsObject = {
    exchange?: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ExchangeCase { 
    _EXCHANGE_NOT_SET = 0,
    EXCHANGE = 1,
  }

  export enum FromCase { 
    _FROM_NOT_SET = 0,
    FROM = 2,
  }

  export enum ToCase { 
    _TO_NOT_SET = 0,
    TO = 3,
  }
}

export class TradingSchedulesResponse extends jspb.Message {
  getExchangesList(): Array<TradingSchedule>;
  setExchangesList(value: Array<TradingSchedule>): TradingSchedulesResponse;
  clearExchangesList(): TradingSchedulesResponse;
  addExchanges(value?: TradingSchedule, index?: number): TradingSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingSchedulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TradingSchedulesResponse): TradingSchedulesResponse.AsObject;
  static serializeBinaryToWriter(message: TradingSchedulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingSchedulesResponse;
  static deserializeBinaryFromReader(message: TradingSchedulesResponse, reader: jspb.BinaryReader): TradingSchedulesResponse;
}

export namespace TradingSchedulesResponse {
  export type AsObject = {
    exchangesList: Array<TradingSchedule.AsObject>,
  }
}

export class TradingSchedule extends jspb.Message {
  getExchange(): string;
  setExchange(value: string): TradingSchedule;

  getDaysList(): Array<TradingDay>;
  setDaysList(value: Array<TradingDay>): TradingSchedule;
  clearDaysList(): TradingSchedule;
  addDays(value?: TradingDay, index?: number): TradingDay;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: TradingSchedule): TradingSchedule.AsObject;
  static serializeBinaryToWriter(message: TradingSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingSchedule;
  static deserializeBinaryFromReader(message: TradingSchedule, reader: jspb.BinaryReader): TradingSchedule;
}

export namespace TradingSchedule {
  export type AsObject = {
    exchange: string,
    daysList: Array<TradingDay.AsObject>,
  }
}

export class TradingDay extends jspb.Message {
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasDate(): boolean;
  clearDate(): TradingDay;

  getIsTradingDay(): boolean;
  setIsTradingDay(value: boolean): TradingDay;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasStartTime(): boolean;
  clearStartTime(): TradingDay;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasEndTime(): boolean;
  clearEndTime(): TradingDay;

  getOpeningAuctionStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOpeningAuctionStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasOpeningAuctionStartTime(): boolean;
  clearOpeningAuctionStartTime(): TradingDay;

  getClosingAuctionEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClosingAuctionEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasClosingAuctionEndTime(): boolean;
  clearClosingAuctionEndTime(): TradingDay;

  getEveningOpeningAuctionStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEveningOpeningAuctionStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasEveningOpeningAuctionStartTime(): boolean;
  clearEveningOpeningAuctionStartTime(): TradingDay;

  getEveningStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEveningStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasEveningStartTime(): boolean;
  clearEveningStartTime(): TradingDay;

  getEveningEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEveningEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasEveningEndTime(): boolean;
  clearEveningEndTime(): TradingDay;

  getClearingStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClearingStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasClearingStartTime(): boolean;
  clearClearingStartTime(): TradingDay;

  getClearingEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClearingEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasClearingEndTime(): boolean;
  clearClearingEndTime(): TradingDay;

  getPremarketStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPremarketStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasPremarketStartTime(): boolean;
  clearPremarketStartTime(): TradingDay;

  getPremarketEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPremarketEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasPremarketEndTime(): boolean;
  clearPremarketEndTime(): TradingDay;

  getClosingAuctionStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClosingAuctionStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasClosingAuctionStartTime(): boolean;
  clearClosingAuctionStartTime(): TradingDay;

  getOpeningAuctionEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOpeningAuctionEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
  hasOpeningAuctionEndTime(): boolean;
  clearOpeningAuctionEndTime(): TradingDay;

  getIntervalsList(): Array<TradingInterval>;
  setIntervalsList(value: Array<TradingInterval>): TradingDay;
  clearIntervalsList(): TradingDay;
  addIntervals(value?: TradingInterval, index?: number): TradingInterval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingDay.AsObject;
  static toObject(includeInstance: boolean, msg: TradingDay): TradingDay.AsObject;
  static serializeBinaryToWriter(message: TradingDay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingDay;
  static deserializeBinaryFromReader(message: TradingDay, reader: jspb.BinaryReader): TradingDay;
}

export namespace TradingDay {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isTradingDay: boolean,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    openingAuctionStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closingAuctionEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    eveningOpeningAuctionStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    eveningStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    eveningEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    clearingStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    clearingEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    premarketStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    premarketEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closingAuctionStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    openingAuctionEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    intervalsList: Array<TradingInterval.AsObject>,
  }
}

export class InstrumentRequest extends jspb.Message {
  getIdType(): InstrumentIdType;
  setIdType(value: InstrumentIdType): InstrumentRequest;

  getClassCode(): string;
  setClassCode(value: string): InstrumentRequest;
  hasClassCode(): boolean;
  clearClassCode(): InstrumentRequest;

  getId(): string;
  setId(value: string): InstrumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentRequest): InstrumentRequest.AsObject;
  static serializeBinaryToWriter(message: InstrumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentRequest;
  static deserializeBinaryFromReader(message: InstrumentRequest, reader: jspb.BinaryReader): InstrumentRequest;
}

export namespace InstrumentRequest {
  export type AsObject = {
    idType: InstrumentIdType,
    classCode?: string,
    id: string,
  }

  export enum ClassCodeCase { 
    _CLASS_CODE_NOT_SET = 0,
    CLASS_CODE = 2,
  }
}

export class InstrumentsRequest extends jspb.Message {
  getInstrumentStatus(): tinvest_common_pb.InstrumentStatus;
  setInstrumentStatus(value: tinvest_common_pb.InstrumentStatus): InstrumentsRequest;
  hasInstrumentStatus(): boolean;
  clearInstrumentStatus(): InstrumentsRequest;

  getInstrumentExchange(): InstrumentExchangeType;
  setInstrumentExchange(value: InstrumentExchangeType): InstrumentsRequest;
  hasInstrumentExchange(): boolean;
  clearInstrumentExchange(): InstrumentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentsRequest): InstrumentsRequest.AsObject;
  static serializeBinaryToWriter(message: InstrumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentsRequest;
  static deserializeBinaryFromReader(message: InstrumentsRequest, reader: jspb.BinaryReader): InstrumentsRequest;
}

export namespace InstrumentsRequest {
  export type AsObject = {
    instrumentStatus?: tinvest_common_pb.InstrumentStatus,
    instrumentExchange?: InstrumentExchangeType,
  }

  export enum InstrumentStatusCase { 
    _INSTRUMENT_STATUS_NOT_SET = 0,
    INSTRUMENT_STATUS = 1,
  }

  export enum InstrumentExchangeCase { 
    _INSTRUMENT_EXCHANGE_NOT_SET = 0,
    INSTRUMENT_EXCHANGE = 2,
  }
}

export class FilterOptionsRequest extends jspb.Message {
  getBasicAssetUid(): string;
  setBasicAssetUid(value: string): FilterOptionsRequest;
  hasBasicAssetUid(): boolean;
  clearBasicAssetUid(): FilterOptionsRequest;

  getBasicAssetPositionUid(): string;
  setBasicAssetPositionUid(value: string): FilterOptionsRequest;
  hasBasicAssetPositionUid(): boolean;
  clearBasicAssetPositionUid(): FilterOptionsRequest;

  getBasicInstrumentId(): string;
  setBasicInstrumentId(value: string): FilterOptionsRequest;
  hasBasicInstrumentId(): boolean;
  clearBasicInstrumentId(): FilterOptionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterOptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterOptionsRequest): FilterOptionsRequest.AsObject;
  static serializeBinaryToWriter(message: FilterOptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterOptionsRequest;
  static deserializeBinaryFromReader(message: FilterOptionsRequest, reader: jspb.BinaryReader): FilterOptionsRequest;
}

export namespace FilterOptionsRequest {
  export type AsObject = {
    basicAssetUid?: string,
    basicAssetPositionUid?: string,
    basicInstrumentId?: string,
  }

  export enum BasicAssetUidCase { 
    _BASIC_ASSET_UID_NOT_SET = 0,
    BASIC_ASSET_UID = 1,
  }

  export enum BasicAssetPositionUidCase { 
    _BASIC_ASSET_POSITION_UID_NOT_SET = 0,
    BASIC_ASSET_POSITION_UID = 2,
  }

  export enum BasicInstrumentIdCase { 
    _BASIC_INSTRUMENT_ID_NOT_SET = 0,
    BASIC_INSTRUMENT_ID = 3,
  }
}

export class NewsRequest extends jspb.Message {
  getCursor(): number;
  setCursor(value: number): NewsRequest;
  hasCursor(): boolean;
  clearCursor(): NewsRequest;

  getLimit(): number;
  setLimit(value: number): NewsRequest;
  hasLimit(): boolean;
  clearLimit(): NewsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewsRequest): NewsRequest.AsObject;
  static serializeBinaryToWriter(message: NewsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsRequest;
  static deserializeBinaryFromReader(message: NewsRequest, reader: jspb.BinaryReader): NewsRequest;
}

export namespace NewsRequest {
  export type AsObject = {
    cursor?: number,
    limit?: number,
  }

  export enum CursorCase { 
    _CURSOR_NOT_SET = 0,
    CURSOR = 1,
  }

  export enum LimitCase { 
    _LIMIT_NOT_SET = 0,
    LIMIT = 2,
  }
}

export class BondResponse extends jspb.Message {
  getInstrument(): Bond | undefined;
  setInstrument(value?: Bond): BondResponse;
  hasInstrument(): boolean;
  clearInstrument(): BondResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BondResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BondResponse): BondResponse.AsObject;
  static serializeBinaryToWriter(message: BondResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BondResponse;
  static deserializeBinaryFromReader(message: BondResponse, reader: jspb.BinaryReader): BondResponse;
}

export namespace BondResponse {
  export type AsObject = {
    instrument?: Bond.AsObject,
  }
}

export class BondsResponse extends jspb.Message {
  getInstrumentsList(): Array<Bond>;
  setInstrumentsList(value: Array<Bond>): BondsResponse;
  clearInstrumentsList(): BondsResponse;
  addInstruments(value?: Bond, index?: number): Bond;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BondsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BondsResponse): BondsResponse.AsObject;
  static serializeBinaryToWriter(message: BondsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BondsResponse;
  static deserializeBinaryFromReader(message: BondsResponse, reader: jspb.BinaryReader): BondsResponse;
}

export namespace BondsResponse {
  export type AsObject = {
    instrumentsList: Array<Bond.AsObject>,
  }
}

export class GetBondCouponsRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): GetBondCouponsRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetBondCouponsRequest;
  hasFrom(): boolean;
  clearFrom(): GetBondCouponsRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetBondCouponsRequest;
  hasTo(): boolean;
  clearTo(): GetBondCouponsRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): GetBondCouponsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBondCouponsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBondCouponsRequest): GetBondCouponsRequest.AsObject;
  static serializeBinaryToWriter(message: GetBondCouponsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBondCouponsRequest;
  static deserializeBinaryFromReader(message: GetBondCouponsRequest, reader: jspb.BinaryReader): GetBondCouponsRequest;
}

export namespace GetBondCouponsRequest {
  export type AsObject = {
    figi: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    instrumentId: string,
  }

  export enum FromCase { 
    _FROM_NOT_SET = 0,
    FROM = 2,
  }

  export enum ToCase { 
    _TO_NOT_SET = 0,
    TO = 3,
  }
}

export class GetBondCouponsResponse extends jspb.Message {
  getEventsList(): Array<Coupon>;
  setEventsList(value: Array<Coupon>): GetBondCouponsResponse;
  clearEventsList(): GetBondCouponsResponse;
  addEvents(value?: Coupon, index?: number): Coupon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBondCouponsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBondCouponsResponse): GetBondCouponsResponse.AsObject;
  static serializeBinaryToWriter(message: GetBondCouponsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBondCouponsResponse;
  static deserializeBinaryFromReader(message: GetBondCouponsResponse, reader: jspb.BinaryReader): GetBondCouponsResponse;
}

export namespace GetBondCouponsResponse {
  export type AsObject = {
    eventsList: Array<Coupon.AsObject>,
  }
}

export class GetBondEventsRequest extends jspb.Message {
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetBondEventsRequest;
  hasFrom(): boolean;
  clearFrom(): GetBondEventsRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetBondEventsRequest;
  hasTo(): boolean;
  clearTo(): GetBondEventsRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): GetBondEventsRequest;

  getType(): GetBondEventsRequest.EventType;
  setType(value: GetBondEventsRequest.EventType): GetBondEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBondEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBondEventsRequest): GetBondEventsRequest.AsObject;
  static serializeBinaryToWriter(message: GetBondEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBondEventsRequest;
  static deserializeBinaryFromReader(message: GetBondEventsRequest, reader: jspb.BinaryReader): GetBondEventsRequest;
}

export namespace GetBondEventsRequest {
  export type AsObject = {
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    instrumentId: string,
    type: GetBondEventsRequest.EventType,
  }

  export enum EventType { 
    EVENT_TYPE_UNSPECIFIED = 0,
    EVENT_TYPE_CPN = 1,
    EVENT_TYPE_CALL = 2,
    EVENT_TYPE_MTY = 3,
    EVENT_TYPE_CONV = 4,
  }

  export enum FromCase { 
    _FROM_NOT_SET = 0,
    FROM = 2,
  }

  export enum ToCase { 
    _TO_NOT_SET = 0,
    TO = 3,
  }
}

export class GetBondEventsResponse extends jspb.Message {
  getEventsList(): Array<GetBondEventsResponse.BondEvent>;
  setEventsList(value: Array<GetBondEventsResponse.BondEvent>): GetBondEventsResponse;
  clearEventsList(): GetBondEventsResponse;
  addEvents(value?: GetBondEventsResponse.BondEvent, index?: number): GetBondEventsResponse.BondEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBondEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBondEventsResponse): GetBondEventsResponse.AsObject;
  static serializeBinaryToWriter(message: GetBondEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBondEventsResponse;
  static deserializeBinaryFromReader(message: GetBondEventsResponse, reader: jspb.BinaryReader): GetBondEventsResponse;
}

export namespace GetBondEventsResponse {
  export type AsObject = {
    eventsList: Array<GetBondEventsResponse.BondEvent.AsObject>,
  }

  export class BondEvent extends jspb.Message {
    getInstrumentId(): string;
    setInstrumentId(value: string): BondEvent;

    getEventNumber(): number;
    setEventNumber(value: number): BondEvent;

    getEventDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEventDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;
    hasEventDate(): boolean;
    clearEventDate(): BondEvent;

    getEventType(): GetBondEventsRequest.EventType;
    setEventType(value: GetBondEventsRequest.EventType): BondEvent;

    getEventTotalVol(): tinvest_common_pb.Quotation | undefined;
    setEventTotalVol(value?: tinvest_common_pb.Quotation): BondEvent;
    hasEventTotalVol(): boolean;
    clearEventTotalVol(): BondEvent;

    getFixDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFixDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;
    hasFixDate(): boolean;
    clearFixDate(): BondEvent;

    getRateDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRateDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;
    hasRateDate(): boolean;
    clearRateDate(): BondEvent;

    getDefaultDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDefaultDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;
    hasDefaultDate(): boolean;
    clearDefaultDate(): BondEvent;

    getRealPayDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRealPayDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;
    hasRealPayDate(): boolean;
    clearRealPayDate(): BondEvent;

    getPayDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPayDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;
    hasPayDate(): boolean;
    clearPayDate(): BondEvent;

    getPayOneBond(): tinvest_common_pb.MoneyValue | undefined;
    setPayOneBond(value?: tinvest_common_pb.MoneyValue): BondEvent;
    hasPayOneBond(): boolean;
    clearPayOneBond(): BondEvent;

    getMoneyFlowVal(): tinvest_common_pb.MoneyValue | undefined;
    setMoneyFlowVal(value?: tinvest_common_pb.MoneyValue): BondEvent;
    hasMoneyFlowVal(): boolean;
    clearMoneyFlowVal(): BondEvent;

    getExecution(): string;
    setExecution(value: string): BondEvent;

    getOperationType(): string;
    setOperationType(value: string): BondEvent;

    getValue(): tinvest_common_pb.Quotation | undefined;
    setValue(value?: tinvest_common_pb.Quotation): BondEvent;
    hasValue(): boolean;
    clearValue(): BondEvent;

    getNote(): string;
    setNote(value: string): BondEvent;

    getConvertToFinToolId(): string;
    setConvertToFinToolId(value: string): BondEvent;

    getCouponStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCouponStartDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;
    hasCouponStartDate(): boolean;
    clearCouponStartDate(): BondEvent;

    getCouponEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCouponEndDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;
    hasCouponEndDate(): boolean;
    clearCouponEndDate(): BondEvent;

    getCouponPeriod(): number;
    setCouponPeriod(value: number): BondEvent;

    getCouponInterestRate(): tinvest_common_pb.Quotation | undefined;
    setCouponInterestRate(value?: tinvest_common_pb.Quotation): BondEvent;
    hasCouponInterestRate(): boolean;
    clearCouponInterestRate(): BondEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BondEvent.AsObject;
    static toObject(includeInstance: boolean, msg: BondEvent): BondEvent.AsObject;
    static serializeBinaryToWriter(message: BondEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BondEvent;
    static deserializeBinaryFromReader(message: BondEvent, reader: jspb.BinaryReader): BondEvent;
  }

  export namespace BondEvent {
    export type AsObject = {
      instrumentId: string,
      eventNumber: number,
      eventDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      eventType: GetBondEventsRequest.EventType,
      eventTotalVol?: tinvest_common_pb.Quotation.AsObject,
      fixDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      rateDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      defaultDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      realPayDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      payDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      payOneBond?: tinvest_common_pb.MoneyValue.AsObject,
      moneyFlowVal?: tinvest_common_pb.MoneyValue.AsObject,
      execution: string,
      operationType: string,
      value?: tinvest_common_pb.Quotation.AsObject,
      note: string,
      convertToFinToolId: string,
      couponStartDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      couponEndDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      couponPeriod: number,
      couponInterestRate?: tinvest_common_pb.Quotation.AsObject,
    }
  }

}

export class Coupon extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): Coupon;

  getCouponDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCouponDate(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;
  hasCouponDate(): boolean;
  clearCouponDate(): Coupon;

  getCouponNumber(): number;
  setCouponNumber(value: number): Coupon;

  getFixDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFixDate(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;
  hasFixDate(): boolean;
  clearFixDate(): Coupon;

  getPayOneBond(): tinvest_common_pb.MoneyValue | undefined;
  setPayOneBond(value?: tinvest_common_pb.MoneyValue): Coupon;
  hasPayOneBond(): boolean;
  clearPayOneBond(): Coupon;

  getCouponType(): CouponType;
  setCouponType(value: CouponType): Coupon;

  getCouponStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCouponStartDate(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;
  hasCouponStartDate(): boolean;
  clearCouponStartDate(): Coupon;

  getCouponEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCouponEndDate(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;
  hasCouponEndDate(): boolean;
  clearCouponEndDate(): Coupon;

  getCouponPeriod(): number;
  setCouponPeriod(value: number): Coupon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Coupon.AsObject;
  static toObject(includeInstance: boolean, msg: Coupon): Coupon.AsObject;
  static serializeBinaryToWriter(message: Coupon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Coupon;
  static deserializeBinaryFromReader(message: Coupon, reader: jspb.BinaryReader): Coupon;
}

export namespace Coupon {
  export type AsObject = {
    figi: string,
    couponDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    couponNumber: number,
    fixDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    payOneBond?: tinvest_common_pb.MoneyValue.AsObject,
    couponType: CouponType,
    couponStartDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    couponEndDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    couponPeriod: number,
  }
}

export class CurrencyResponse extends jspb.Message {
  getInstrument(): Currency | undefined;
  setInstrument(value?: Currency): CurrencyResponse;
  hasInstrument(): boolean;
  clearInstrument(): CurrencyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencyResponse): CurrencyResponse.AsObject;
  static serializeBinaryToWriter(message: CurrencyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencyResponse;
  static deserializeBinaryFromReader(message: CurrencyResponse, reader: jspb.BinaryReader): CurrencyResponse;
}

export namespace CurrencyResponse {
  export type AsObject = {
    instrument?: Currency.AsObject,
  }
}

export class CurrenciesResponse extends jspb.Message {
  getInstrumentsList(): Array<Currency>;
  setInstrumentsList(value: Array<Currency>): CurrenciesResponse;
  clearInstrumentsList(): CurrenciesResponse;
  addInstruments(value?: Currency, index?: number): Currency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrenciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CurrenciesResponse): CurrenciesResponse.AsObject;
  static serializeBinaryToWriter(message: CurrenciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrenciesResponse;
  static deserializeBinaryFromReader(message: CurrenciesResponse, reader: jspb.BinaryReader): CurrenciesResponse;
}

export namespace CurrenciesResponse {
  export type AsObject = {
    instrumentsList: Array<Currency.AsObject>,
  }
}

export class EtfResponse extends jspb.Message {
  getInstrument(): Etf | undefined;
  setInstrument(value?: Etf): EtfResponse;
  hasInstrument(): boolean;
  clearInstrument(): EtfResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EtfResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EtfResponse): EtfResponse.AsObject;
  static serializeBinaryToWriter(message: EtfResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EtfResponse;
  static deserializeBinaryFromReader(message: EtfResponse, reader: jspb.BinaryReader): EtfResponse;
}

export namespace EtfResponse {
  export type AsObject = {
    instrument?: Etf.AsObject,
  }
}

export class EtfsResponse extends jspb.Message {
  getInstrumentsList(): Array<Etf>;
  setInstrumentsList(value: Array<Etf>): EtfsResponse;
  clearInstrumentsList(): EtfsResponse;
  addInstruments(value?: Etf, index?: number): Etf;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EtfsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EtfsResponse): EtfsResponse.AsObject;
  static serializeBinaryToWriter(message: EtfsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EtfsResponse;
  static deserializeBinaryFromReader(message: EtfsResponse, reader: jspb.BinaryReader): EtfsResponse;
}

export namespace EtfsResponse {
  export type AsObject = {
    instrumentsList: Array<Etf.AsObject>,
  }
}

export class FutureResponse extends jspb.Message {
  getInstrument(): Future | undefined;
  setInstrument(value?: Future): FutureResponse;
  hasInstrument(): boolean;
  clearInstrument(): FutureResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FutureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FutureResponse): FutureResponse.AsObject;
  static serializeBinaryToWriter(message: FutureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FutureResponse;
  static deserializeBinaryFromReader(message: FutureResponse, reader: jspb.BinaryReader): FutureResponse;
}

export namespace FutureResponse {
  export type AsObject = {
    instrument?: Future.AsObject,
  }
}

export class FuturesResponse extends jspb.Message {
  getInstrumentsList(): Array<Future>;
  setInstrumentsList(value: Array<Future>): FuturesResponse;
  clearInstrumentsList(): FuturesResponse;
  addInstruments(value?: Future, index?: number): Future;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FuturesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FuturesResponse): FuturesResponse.AsObject;
  static serializeBinaryToWriter(message: FuturesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FuturesResponse;
  static deserializeBinaryFromReader(message: FuturesResponse, reader: jspb.BinaryReader): FuturesResponse;
}

export namespace FuturesResponse {
  export type AsObject = {
    instrumentsList: Array<Future.AsObject>,
  }
}

export class OptionResponse extends jspb.Message {
  getInstrument(): Option | undefined;
  setInstrument(value?: Option): OptionResponse;
  hasInstrument(): boolean;
  clearInstrument(): OptionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OptionResponse): OptionResponse.AsObject;
  static serializeBinaryToWriter(message: OptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptionResponse;
  static deserializeBinaryFromReader(message: OptionResponse, reader: jspb.BinaryReader): OptionResponse;
}

export namespace OptionResponse {
  export type AsObject = {
    instrument?: Option.AsObject,
  }
}

export class OptionsResponse extends jspb.Message {
  getInstrumentsList(): Array<Option>;
  setInstrumentsList(value: Array<Option>): OptionsResponse;
  clearInstrumentsList(): OptionsResponse;
  addInstruments(value?: Option, index?: number): Option;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OptionsResponse): OptionsResponse.AsObject;
  static serializeBinaryToWriter(message: OptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptionsResponse;
  static deserializeBinaryFromReader(message: OptionsResponse, reader: jspb.BinaryReader): OptionsResponse;
}

export namespace OptionsResponse {
  export type AsObject = {
    instrumentsList: Array<Option.AsObject>,
  }
}

export class Option extends jspb.Message {
  getUid(): string;
  setUid(value: string): Option;

  getPositionUid(): string;
  setPositionUid(value: string): Option;

  getTicker(): string;
  setTicker(value: string): Option;

  getClassCode(): string;
  setClassCode(value: string): Option;

  getBasicAssetPositionUid(): string;
  setBasicAssetPositionUid(value: string): Option;

  getTradingStatus(): tinvest_common_pb.SecurityTradingStatus;
  setTradingStatus(value: tinvest_common_pb.SecurityTradingStatus): Option;

  getRealExchange(): tinvest_common_pb.RealExchange;
  setRealExchange(value: tinvest_common_pb.RealExchange): Option;

  getDirection(): OptionDirection;
  setDirection(value: OptionDirection): Option;

  getPaymentType(): OptionPaymentType;
  setPaymentType(value: OptionPaymentType): Option;

  getStyle(): OptionStyle;
  setStyle(value: OptionStyle): Option;

  getSettlementType(): OptionSettlementType;
  setSettlementType(value: OptionSettlementType): Option;

  getName(): string;
  setName(value: string): Option;

  getCurrency(): string;
  setCurrency(value: string): Option;

  getSettlementCurrency(): string;
  setSettlementCurrency(value: string): Option;

  getAssetType(): string;
  setAssetType(value: string): Option;

  getBasicAsset(): string;
  setBasicAsset(value: string): Option;

  getExchange(): string;
  setExchange(value: string): Option;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): Option;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): Option;

  getSector(): string;
  setSector(value: string): Option;

  getBrand(): tinvest_common_pb.BrandData | undefined;
  setBrand(value?: tinvest_common_pb.BrandData): Option;
  hasBrand(): boolean;
  clearBrand(): Option;

  getLot(): number;
  setLot(value: number): Option;

  getBasicAssetSize(): tinvest_common_pb.Quotation | undefined;
  setBasicAssetSize(value?: tinvest_common_pb.Quotation): Option;
  hasBasicAssetSize(): boolean;
  clearBasicAssetSize(): Option;

  getKlong(): tinvest_common_pb.Quotation | undefined;
  setKlong(value?: tinvest_common_pb.Quotation): Option;
  hasKlong(): boolean;
  clearKlong(): Option;

  getKshort(): tinvest_common_pb.Quotation | undefined;
  setKshort(value?: tinvest_common_pb.Quotation): Option;
  hasKshort(): boolean;
  clearKshort(): Option;

  getDlong(): tinvest_common_pb.Quotation | undefined;
  setDlong(value?: tinvest_common_pb.Quotation): Option;
  hasDlong(): boolean;
  clearDlong(): Option;

  getDshort(): tinvest_common_pb.Quotation | undefined;
  setDshort(value?: tinvest_common_pb.Quotation): Option;
  hasDshort(): boolean;
  clearDshort(): Option;

  getDlongMin(): tinvest_common_pb.Quotation | undefined;
  setDlongMin(value?: tinvest_common_pb.Quotation): Option;
  hasDlongMin(): boolean;
  clearDlongMin(): Option;

  getDshortMin(): tinvest_common_pb.Quotation | undefined;
  setDshortMin(value?: tinvest_common_pb.Quotation): Option;
  hasDshortMin(): boolean;
  clearDshortMin(): Option;

  getMinPriceIncrement(): tinvest_common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: tinvest_common_pb.Quotation): Option;
  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): Option;

  getStrikePrice(): tinvest_common_pb.MoneyValue | undefined;
  setStrikePrice(value?: tinvest_common_pb.MoneyValue): Option;
  hasStrikePrice(): boolean;
  clearStrikePrice(): Option;

  getDlongClient(): tinvest_common_pb.Quotation | undefined;
  setDlongClient(value?: tinvest_common_pb.Quotation): Option;
  hasDlongClient(): boolean;
  clearDlongClient(): Option;

  getDshortClient(): tinvest_common_pb.Quotation | undefined;
  setDshortClient(value?: tinvest_common_pb.Quotation): Option;
  hasDshortClient(): boolean;
  clearDshortClient(): Option;

  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): Option;
  hasExpirationDate(): boolean;
  clearExpirationDate(): Option;

  getFirstTradeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstTradeDate(value?: google_protobuf_timestamp_pb.Timestamp): Option;
  hasFirstTradeDate(): boolean;
  clearFirstTradeDate(): Option;

  getLastTradeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastTradeDate(value?: google_protobuf_timestamp_pb.Timestamp): Option;
  hasLastTradeDate(): boolean;
  clearLastTradeDate(): Option;

  getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Option;
  hasFirst1minCandleDate(): boolean;
  clearFirst1minCandleDate(): Option;

  getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Option;
  hasFirst1dayCandleDate(): boolean;
  clearFirst1dayCandleDate(): Option;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): Option;

  getForIisFlag(): boolean;
  setForIisFlag(value: boolean): Option;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): Option;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): Option;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): Option;

  getForQualInvestorFlag(): boolean;
  setForQualInvestorFlag(value: boolean): Option;

  getWeekendFlag(): boolean;
  setWeekendFlag(value: boolean): Option;

  getBlockedTcaFlag(): boolean;
  setBlockedTcaFlag(value: boolean): Option;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): Option;

  getRequiredTestsList(): Array<string>;
  setRequiredTestsList(value: Array<string>): Option;
  clearRequiredTestsList(): Option;
  addRequiredTests(value: string, index?: number): Option;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Option.AsObject;
  static toObject(includeInstance: boolean, msg: Option): Option.AsObject;
  static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Option;
  static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
}

export namespace Option {
  export type AsObject = {
    uid: string,
    positionUid: string,
    ticker: string,
    classCode: string,
    basicAssetPositionUid: string,
    tradingStatus: tinvest_common_pb.SecurityTradingStatus,
    realExchange: tinvest_common_pb.RealExchange,
    direction: OptionDirection,
    paymentType: OptionPaymentType,
    style: OptionStyle,
    settlementType: OptionSettlementType,
    name: string,
    currency: string,
    settlementCurrency: string,
    assetType: string,
    basicAsset: string,
    exchange: string,
    countryOfRisk: string,
    countryOfRiskName: string,
    sector: string,
    brand?: tinvest_common_pb.BrandData.AsObject,
    lot: number,
    basicAssetSize?: tinvest_common_pb.Quotation.AsObject,
    klong?: tinvest_common_pb.Quotation.AsObject,
    kshort?: tinvest_common_pb.Quotation.AsObject,
    dlong?: tinvest_common_pb.Quotation.AsObject,
    dshort?: tinvest_common_pb.Quotation.AsObject,
    dlongMin?: tinvest_common_pb.Quotation.AsObject,
    dshortMin?: tinvest_common_pb.Quotation.AsObject,
    minPriceIncrement?: tinvest_common_pb.Quotation.AsObject,
    strikePrice?: tinvest_common_pb.MoneyValue.AsObject,
    dlongClient?: tinvest_common_pb.Quotation.AsObject,
    dshortClient?: tinvest_common_pb.Quotation.AsObject,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    firstTradeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastTradeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    shortEnabledFlag: boolean,
    forIisFlag: boolean,
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    forQualInvestorFlag: boolean,
    weekendFlag: boolean,
    blockedTcaFlag: boolean,
    apiTradeAvailableFlag: boolean,
    requiredTestsList: Array<string>,
  }
}

export class ShareResponse extends jspb.Message {
  getInstrument(): Share | undefined;
  setInstrument(value?: Share): ShareResponse;
  hasInstrument(): boolean;
  clearInstrument(): ShareResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShareResponse): ShareResponse.AsObject;
  static serializeBinaryToWriter(message: ShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareResponse;
  static deserializeBinaryFromReader(message: ShareResponse, reader: jspb.BinaryReader): ShareResponse;
}

export namespace ShareResponse {
  export type AsObject = {
    instrument?: Share.AsObject,
  }
}

export class SharesResponse extends jspb.Message {
  getInstrumentsList(): Array<Share>;
  setInstrumentsList(value: Array<Share>): SharesResponse;
  clearInstrumentsList(): SharesResponse;
  addInstruments(value?: Share, index?: number): Share;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SharesResponse): SharesResponse.AsObject;
  static serializeBinaryToWriter(message: SharesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharesResponse;
  static deserializeBinaryFromReader(message: SharesResponse, reader: jspb.BinaryReader): SharesResponse;
}

export namespace SharesResponse {
  export type AsObject = {
    instrumentsList: Array<Share.AsObject>,
  }
}

export class StructuredNoteResponse extends jspb.Message {
  getInstrument(): StructuredNote | undefined;
  setInstrument(value?: StructuredNote): StructuredNoteResponse;
  hasInstrument(): boolean;
  clearInstrument(): StructuredNoteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructuredNoteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StructuredNoteResponse): StructuredNoteResponse.AsObject;
  static serializeBinaryToWriter(message: StructuredNoteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructuredNoteResponse;
  static deserializeBinaryFromReader(message: StructuredNoteResponse, reader: jspb.BinaryReader): StructuredNoteResponse;
}

export namespace StructuredNoteResponse {
  export type AsObject = {
    instrument?: StructuredNote.AsObject,
  }
}

export class StructuredNotesResponse extends jspb.Message {
  getInstrumentsList(): Array<StructuredNote>;
  setInstrumentsList(value: Array<StructuredNote>): StructuredNotesResponse;
  clearInstrumentsList(): StructuredNotesResponse;
  addInstruments(value?: StructuredNote, index?: number): StructuredNote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructuredNotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StructuredNotesResponse): StructuredNotesResponse.AsObject;
  static serializeBinaryToWriter(message: StructuredNotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructuredNotesResponse;
  static deserializeBinaryFromReader(message: StructuredNotesResponse, reader: jspb.BinaryReader): StructuredNotesResponse;
}

export namespace StructuredNotesResponse {
  export type AsObject = {
    instrumentsList: Array<StructuredNote.AsObject>,
  }
}

export class NewsResponse extends jspb.Message {
  getHasNext(): boolean;
  setHasNext(value: boolean): NewsResponse;

  getNextCursor(): number;
  setNextCursor(value: number): NewsResponse;
  hasNextCursor(): boolean;
  clearNextCursor(): NewsResponse;

  getItemsList(): Array<NewsItem>;
  setItemsList(value: Array<NewsItem>): NewsResponse;
  clearItemsList(): NewsResponse;
  addItems(value?: NewsItem, index?: number): NewsItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewsResponse): NewsResponse.AsObject;
  static serializeBinaryToWriter(message: NewsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsResponse;
  static deserializeBinaryFromReader(message: NewsResponse, reader: jspb.BinaryReader): NewsResponse;
}

export namespace NewsResponse {
  export type AsObject = {
    hasNext: boolean,
    nextCursor?: number,
    itemsList: Array<NewsItem.AsObject>,
  }

  export enum NextCursorCase { 
    _NEXT_CURSOR_NOT_SET = 0,
    NEXT_CURSOR = 2,
  }
}

export class NewsItem extends jspb.Message {
  getId(): number;
  setId(value: number): NewsItem;

  getSource(): string;
  setSource(value: string): NewsItem;

  getTitle(): string;
  setTitle(value: string): NewsItem;

  getContent(): string;
  setContent(value: string): NewsItem;

  getSummary(): string;
  setSummary(value: string): NewsItem;
  hasSummary(): boolean;
  clearSummary(): NewsItem;

  getTablesList(): Array<Table>;
  setTablesList(value: Array<Table>): NewsItem;
  clearTablesList(): NewsItem;
  addTables(value?: Table, index?: number): Table;

  getInstrumentIdList(): Array<NewsInstrument>;
  setInstrumentIdList(value: Array<NewsInstrument>): NewsItem;
  clearInstrumentIdList(): NewsItem;
  addInstrumentId(value?: NewsInstrument, index?: number): NewsInstrument;

  getPriority(): boolean;
  setPriority(value: boolean): NewsItem;

  getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTs(value?: google_protobuf_timestamp_pb.Timestamp): NewsItem;
  hasTs(): boolean;
  clearTs(): NewsItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsItem.AsObject;
  static toObject(includeInstance: boolean, msg: NewsItem): NewsItem.AsObject;
  static serializeBinaryToWriter(message: NewsItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsItem;
  static deserializeBinaryFromReader(message: NewsItem, reader: jspb.BinaryReader): NewsItem;
}

export namespace NewsItem {
  export type AsObject = {
    id: number,
    source: string,
    title: string,
    content: string,
    summary?: string,
    tablesList: Array<Table.AsObject>,
    instrumentIdList: Array<NewsInstrument.AsObject>,
    priority: boolean,
    ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum SummaryCase { 
    _SUMMARY_NOT_SET = 0,
    SUMMARY = 5,
  }
}

export class Table extends jspb.Message {
  getTable(): string;
  setTable(value: string): Table;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Table.AsObject;
  static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
  static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Table;
  static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
}

export namespace Table {
  export type AsObject = {
    table: string,
  }
}

export class NewsInstrument extends jspb.Message {
  getInstrument(): NewsInstrumentInfo | undefined;
  setInstrument(value?: NewsInstrumentInfo): NewsInstrument;
  hasInstrument(): boolean;
  clearInstrument(): NewsInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: NewsInstrument): NewsInstrument.AsObject;
  static serializeBinaryToWriter(message: NewsInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsInstrument;
  static deserializeBinaryFromReader(message: NewsInstrument, reader: jspb.BinaryReader): NewsInstrument;
}

export namespace NewsInstrument {
  export type AsObject = {
    instrument?: NewsInstrumentInfo.AsObject,
  }
}

export class NewsInstrumentInfo extends jspb.Message {
  getInstrumentUid(): string;
  setInstrumentUid(value: string): NewsInstrumentInfo;

  getTicker(): string;
  setTicker(value: string): NewsInstrumentInfo;

  getClassCode(): string;
  setClassCode(value: string): NewsInstrumentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsInstrumentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NewsInstrumentInfo): NewsInstrumentInfo.AsObject;
  static serializeBinaryToWriter(message: NewsInstrumentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsInstrumentInfo;
  static deserializeBinaryFromReader(message: NewsInstrumentInfo, reader: jspb.BinaryReader): NewsInstrumentInfo;
}

export namespace NewsInstrumentInfo {
  export type AsObject = {
    instrumentUid: string,
    ticker: string,
    classCode: string,
  }
}

export class Bond extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): Bond;

  getTicker(): string;
  setTicker(value: string): Bond;

  getClassCode(): string;
  setClassCode(value: string): Bond;

  getIsin(): string;
  setIsin(value: string): Bond;

  getLot(): number;
  setLot(value: number): Bond;

  getCurrency(): string;
  setCurrency(value: string): Bond;

  getKlong(): tinvest_common_pb.Quotation | undefined;
  setKlong(value?: tinvest_common_pb.Quotation): Bond;
  hasKlong(): boolean;
  clearKlong(): Bond;

  getKshort(): tinvest_common_pb.Quotation | undefined;
  setKshort(value?: tinvest_common_pb.Quotation): Bond;
  hasKshort(): boolean;
  clearKshort(): Bond;

  getDlong(): tinvest_common_pb.Quotation | undefined;
  setDlong(value?: tinvest_common_pb.Quotation): Bond;
  hasDlong(): boolean;
  clearDlong(): Bond;

  getDshort(): tinvest_common_pb.Quotation | undefined;
  setDshort(value?: tinvest_common_pb.Quotation): Bond;
  hasDshort(): boolean;
  clearDshort(): Bond;

  getDlongMin(): tinvest_common_pb.Quotation | undefined;
  setDlongMin(value?: tinvest_common_pb.Quotation): Bond;
  hasDlongMin(): boolean;
  clearDlongMin(): Bond;

  getDshortMin(): tinvest_common_pb.Quotation | undefined;
  setDshortMin(value?: tinvest_common_pb.Quotation): Bond;
  hasDshortMin(): boolean;
  clearDshortMin(): Bond;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): Bond;

  getName(): string;
  setName(value: string): Bond;

  getExchange(): string;
  setExchange(value: string): Bond;

  getCouponQuantityPerYear(): number;
  setCouponQuantityPerYear(value: number): Bond;

  getMaturityDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMaturityDate(value?: google_protobuf_timestamp_pb.Timestamp): Bond;
  hasMaturityDate(): boolean;
  clearMaturityDate(): Bond;

  getNominal(): tinvest_common_pb.MoneyValue | undefined;
  setNominal(value?: tinvest_common_pb.MoneyValue): Bond;
  hasNominal(): boolean;
  clearNominal(): Bond;

  getInitialNominal(): tinvest_common_pb.MoneyValue | undefined;
  setInitialNominal(value?: tinvest_common_pb.MoneyValue): Bond;
  hasInitialNominal(): boolean;
  clearInitialNominal(): Bond;

  getStateRegDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateRegDate(value?: google_protobuf_timestamp_pb.Timestamp): Bond;
  hasStateRegDate(): boolean;
  clearStateRegDate(): Bond;

  getPlacementDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPlacementDate(value?: google_protobuf_timestamp_pb.Timestamp): Bond;
  hasPlacementDate(): boolean;
  clearPlacementDate(): Bond;

  getPlacementPrice(): tinvest_common_pb.MoneyValue | undefined;
  setPlacementPrice(value?: tinvest_common_pb.MoneyValue): Bond;
  hasPlacementPrice(): boolean;
  clearPlacementPrice(): Bond;

  getAciValue(): tinvest_common_pb.MoneyValue | undefined;
  setAciValue(value?: tinvest_common_pb.MoneyValue): Bond;
  hasAciValue(): boolean;
  clearAciValue(): Bond;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): Bond;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): Bond;

  getSector(): string;
  setSector(value: string): Bond;

  getIssueKind(): string;
  setIssueKind(value: string): Bond;

  getIssueSize(): number;
  setIssueSize(value: number): Bond;

  getIssueSizePlan(): number;
  setIssueSizePlan(value: number): Bond;

  getTradingStatus(): tinvest_common_pb.SecurityTradingStatus;
  setTradingStatus(value: tinvest_common_pb.SecurityTradingStatus): Bond;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): Bond;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): Bond;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): Bond;

  getFloatingCouponFlag(): boolean;
  setFloatingCouponFlag(value: boolean): Bond;

  getPerpetualFlag(): boolean;
  setPerpetualFlag(value: boolean): Bond;

  getAmortizationFlag(): boolean;
  setAmortizationFlag(value: boolean): Bond;

  getMinPriceIncrement(): tinvest_common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: tinvest_common_pb.Quotation): Bond;
  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): Bond;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): Bond;

  getUid(): string;
  setUid(value: string): Bond;

  getRealExchange(): tinvest_common_pb.RealExchange;
  setRealExchange(value: tinvest_common_pb.RealExchange): Bond;

  getPositionUid(): string;
  setPositionUid(value: string): Bond;

  getAssetUid(): string;
  setAssetUid(value: string): Bond;

  getRequiredTestsList(): Array<string>;
  setRequiredTestsList(value: Array<string>): Bond;
  clearRequiredTestsList(): Bond;
  addRequiredTests(value: string, index?: number): Bond;

  getForIisFlag(): boolean;
  setForIisFlag(value: boolean): Bond;

  getForQualInvestorFlag(): boolean;
  setForQualInvestorFlag(value: boolean): Bond;

  getWeekendFlag(): boolean;
  setWeekendFlag(value: boolean): Bond;

  getBlockedTcaFlag(): boolean;
  setBlockedTcaFlag(value: boolean): Bond;

  getSubordinatedFlag(): boolean;
  setSubordinatedFlag(value: boolean): Bond;

  getLiquidityFlag(): boolean;
  setLiquidityFlag(value: boolean): Bond;

  getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Bond;
  hasFirst1minCandleDate(): boolean;
  clearFirst1minCandleDate(): Bond;

  getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Bond;
  hasFirst1dayCandleDate(): boolean;
  clearFirst1dayCandleDate(): Bond;

  getRiskLevel(): RiskLevel;
  setRiskLevel(value: RiskLevel): Bond;

  getBrand(): tinvest_common_pb.BrandData | undefined;
  setBrand(value?: tinvest_common_pb.BrandData): Bond;
  hasBrand(): boolean;
  clearBrand(): Bond;

  getBondType(): BondType;
  setBondType(value: BondType): Bond;

  getCallDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCallDate(value?: google_protobuf_timestamp_pb.Timestamp): Bond;
  hasCallDate(): boolean;
  clearCallDate(): Bond;

  getDlongClient(): tinvest_common_pb.Quotation | undefined;
  setDlongClient(value?: tinvest_common_pb.Quotation): Bond;
  hasDlongClient(): boolean;
  clearDlongClient(): Bond;

  getDshortClient(): tinvest_common_pb.Quotation | undefined;
  setDshortClient(value?: tinvest_common_pb.Quotation): Bond;
  hasDshortClient(): boolean;
  clearDshortClient(): Bond;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bond.AsObject;
  static toObject(includeInstance: boolean, msg: Bond): Bond.AsObject;
  static serializeBinaryToWriter(message: Bond, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bond;
  static deserializeBinaryFromReader(message: Bond, reader: jspb.BinaryReader): Bond;
}

export namespace Bond {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    isin: string,
    lot: number,
    currency: string,
    klong?: tinvest_common_pb.Quotation.AsObject,
    kshort?: tinvest_common_pb.Quotation.AsObject,
    dlong?: tinvest_common_pb.Quotation.AsObject,
    dshort?: tinvest_common_pb.Quotation.AsObject,
    dlongMin?: tinvest_common_pb.Quotation.AsObject,
    dshortMin?: tinvest_common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    name: string,
    exchange: string,
    couponQuantityPerYear: number,
    maturityDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nominal?: tinvest_common_pb.MoneyValue.AsObject,
    initialNominal?: tinvest_common_pb.MoneyValue.AsObject,
    stateRegDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    placementDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    placementPrice?: tinvest_common_pb.MoneyValue.AsObject,
    aciValue?: tinvest_common_pb.MoneyValue.AsObject,
    countryOfRisk: string,
    countryOfRiskName: string,
    sector: string,
    issueKind: string,
    issueSize: number,
    issueSizePlan: number,
    tradingStatus: tinvest_common_pb.SecurityTradingStatus,
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    floatingCouponFlag: boolean,
    perpetualFlag: boolean,
    amortizationFlag: boolean,
    minPriceIncrement?: tinvest_common_pb.Quotation.AsObject,
    apiTradeAvailableFlag: boolean,
    uid: string,
    realExchange: tinvest_common_pb.RealExchange,
    positionUid: string,
    assetUid: string,
    requiredTestsList: Array<string>,
    forIisFlag: boolean,
    forQualInvestorFlag: boolean,
    weekendFlag: boolean,
    blockedTcaFlag: boolean,
    subordinatedFlag: boolean,
    liquidityFlag: boolean,
    first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    riskLevel: RiskLevel,
    brand?: tinvest_common_pb.BrandData.AsObject,
    bondType: BondType,
    callDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dlongClient?: tinvest_common_pb.Quotation.AsObject,
    dshortClient?: tinvest_common_pb.Quotation.AsObject,
  }
}

export class Currency extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): Currency;

  getTicker(): string;
  setTicker(value: string): Currency;

  getClassCode(): string;
  setClassCode(value: string): Currency;

  getIsin(): string;
  setIsin(value: string): Currency;

  getLot(): number;
  setLot(value: number): Currency;

  getCurrency(): string;
  setCurrency(value: string): Currency;

  getKlong(): tinvest_common_pb.Quotation | undefined;
  setKlong(value?: tinvest_common_pb.Quotation): Currency;
  hasKlong(): boolean;
  clearKlong(): Currency;

  getKshort(): tinvest_common_pb.Quotation | undefined;
  setKshort(value?: tinvest_common_pb.Quotation): Currency;
  hasKshort(): boolean;
  clearKshort(): Currency;

  getDlong(): tinvest_common_pb.Quotation | undefined;
  setDlong(value?: tinvest_common_pb.Quotation): Currency;
  hasDlong(): boolean;
  clearDlong(): Currency;

  getDshort(): tinvest_common_pb.Quotation | undefined;
  setDshort(value?: tinvest_common_pb.Quotation): Currency;
  hasDshort(): boolean;
  clearDshort(): Currency;

  getDlongMin(): tinvest_common_pb.Quotation | undefined;
  setDlongMin(value?: tinvest_common_pb.Quotation): Currency;
  hasDlongMin(): boolean;
  clearDlongMin(): Currency;

  getDshortMin(): tinvest_common_pb.Quotation | undefined;
  setDshortMin(value?: tinvest_common_pb.Quotation): Currency;
  hasDshortMin(): boolean;
  clearDshortMin(): Currency;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): Currency;

  getName(): string;
  setName(value: string): Currency;

  getExchange(): string;
  setExchange(value: string): Currency;

  getNominal(): tinvest_common_pb.MoneyValue | undefined;
  setNominal(value?: tinvest_common_pb.MoneyValue): Currency;
  hasNominal(): boolean;
  clearNominal(): Currency;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): Currency;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): Currency;

  getTradingStatus(): tinvest_common_pb.SecurityTradingStatus;
  setTradingStatus(value: tinvest_common_pb.SecurityTradingStatus): Currency;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): Currency;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): Currency;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): Currency;

  getIsoCurrencyName(): string;
  setIsoCurrencyName(value: string): Currency;

  getMinPriceIncrement(): tinvest_common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: tinvest_common_pb.Quotation): Currency;
  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): Currency;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): Currency;

  getUid(): string;
  setUid(value: string): Currency;

  getRealExchange(): tinvest_common_pb.RealExchange;
  setRealExchange(value: tinvest_common_pb.RealExchange): Currency;

  getPositionUid(): string;
  setPositionUid(value: string): Currency;

  getRequiredTestsList(): Array<string>;
  setRequiredTestsList(value: Array<string>): Currency;
  clearRequiredTestsList(): Currency;
  addRequiredTests(value: string, index?: number): Currency;

  getAssetUid(): string;
  setAssetUid(value: string): Currency;

  getForIisFlag(): boolean;
  setForIisFlag(value: boolean): Currency;

  getForQualInvestorFlag(): boolean;
  setForQualInvestorFlag(value: boolean): Currency;

  getWeekendFlag(): boolean;
  setWeekendFlag(value: boolean): Currency;

  getBlockedTcaFlag(): boolean;
  setBlockedTcaFlag(value: boolean): Currency;

  getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Currency;
  hasFirst1minCandleDate(): boolean;
  clearFirst1minCandleDate(): Currency;

  getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Currency;
  hasFirst1dayCandleDate(): boolean;
  clearFirst1dayCandleDate(): Currency;

  getBrand(): tinvest_common_pb.BrandData | undefined;
  setBrand(value?: tinvest_common_pb.BrandData): Currency;
  hasBrand(): boolean;
  clearBrand(): Currency;

  getDlongClient(): tinvest_common_pb.Quotation | undefined;
  setDlongClient(value?: tinvest_common_pb.Quotation): Currency;
  hasDlongClient(): boolean;
  clearDlongClient(): Currency;

  getDshortClient(): tinvest_common_pb.Quotation | undefined;
  setDshortClient(value?: tinvest_common_pb.Quotation): Currency;
  hasDshortClient(): boolean;
  clearDshortClient(): Currency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Currency.AsObject;
  static toObject(includeInstance: boolean, msg: Currency): Currency.AsObject;
  static serializeBinaryToWriter(message: Currency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Currency;
  static deserializeBinaryFromReader(message: Currency, reader: jspb.BinaryReader): Currency;
}

export namespace Currency {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    isin: string,
    lot: number,
    currency: string,
    klong?: tinvest_common_pb.Quotation.AsObject,
    kshort?: tinvest_common_pb.Quotation.AsObject,
    dlong?: tinvest_common_pb.Quotation.AsObject,
    dshort?: tinvest_common_pb.Quotation.AsObject,
    dlongMin?: tinvest_common_pb.Quotation.AsObject,
    dshortMin?: tinvest_common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    name: string,
    exchange: string,
    nominal?: tinvest_common_pb.MoneyValue.AsObject,
    countryOfRisk: string,
    countryOfRiskName: string,
    tradingStatus: tinvest_common_pb.SecurityTradingStatus,
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    isoCurrencyName: string,
    minPriceIncrement?: tinvest_common_pb.Quotation.AsObject,
    apiTradeAvailableFlag: boolean,
    uid: string,
    realExchange: tinvest_common_pb.RealExchange,
    positionUid: string,
    requiredTestsList: Array<string>,
    assetUid: string,
    forIisFlag: boolean,
    forQualInvestorFlag: boolean,
    weekendFlag: boolean,
    blockedTcaFlag: boolean,
    first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    brand?: tinvest_common_pb.BrandData.AsObject,
    dlongClient?: tinvest_common_pb.Quotation.AsObject,
    dshortClient?: tinvest_common_pb.Quotation.AsObject,
  }
}

export class Etf extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): Etf;

  getTicker(): string;
  setTicker(value: string): Etf;

  getClassCode(): string;
  setClassCode(value: string): Etf;

  getIsin(): string;
  setIsin(value: string): Etf;

  getLot(): number;
  setLot(value: number): Etf;

  getCurrency(): string;
  setCurrency(value: string): Etf;

  getKlong(): tinvest_common_pb.Quotation | undefined;
  setKlong(value?: tinvest_common_pb.Quotation): Etf;
  hasKlong(): boolean;
  clearKlong(): Etf;

  getKshort(): tinvest_common_pb.Quotation | undefined;
  setKshort(value?: tinvest_common_pb.Quotation): Etf;
  hasKshort(): boolean;
  clearKshort(): Etf;

  getDlong(): tinvest_common_pb.Quotation | undefined;
  setDlong(value?: tinvest_common_pb.Quotation): Etf;
  hasDlong(): boolean;
  clearDlong(): Etf;

  getDshort(): tinvest_common_pb.Quotation | undefined;
  setDshort(value?: tinvest_common_pb.Quotation): Etf;
  hasDshort(): boolean;
  clearDshort(): Etf;

  getDlongMin(): tinvest_common_pb.Quotation | undefined;
  setDlongMin(value?: tinvest_common_pb.Quotation): Etf;
  hasDlongMin(): boolean;
  clearDlongMin(): Etf;

  getDshortMin(): tinvest_common_pb.Quotation | undefined;
  setDshortMin(value?: tinvest_common_pb.Quotation): Etf;
  hasDshortMin(): boolean;
  clearDshortMin(): Etf;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): Etf;

  getName(): string;
  setName(value: string): Etf;

  getExchange(): string;
  setExchange(value: string): Etf;

  getFixedCommission(): tinvest_common_pb.Quotation | undefined;
  setFixedCommission(value?: tinvest_common_pb.Quotation): Etf;
  hasFixedCommission(): boolean;
  clearFixedCommission(): Etf;

  getFocusType(): string;
  setFocusType(value: string): Etf;

  getReleasedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReleasedDate(value?: google_protobuf_timestamp_pb.Timestamp): Etf;
  hasReleasedDate(): boolean;
  clearReleasedDate(): Etf;

  getNumShares(): tinvest_common_pb.Quotation | undefined;
  setNumShares(value?: tinvest_common_pb.Quotation): Etf;
  hasNumShares(): boolean;
  clearNumShares(): Etf;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): Etf;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): Etf;

  getSector(): string;
  setSector(value: string): Etf;

  getRebalancingFreq(): string;
  setRebalancingFreq(value: string): Etf;

  getTradingStatus(): tinvest_common_pb.SecurityTradingStatus;
  setTradingStatus(value: tinvest_common_pb.SecurityTradingStatus): Etf;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): Etf;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): Etf;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): Etf;

  getMinPriceIncrement(): tinvest_common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: tinvest_common_pb.Quotation): Etf;
  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): Etf;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): Etf;

  getUid(): string;
  setUid(value: string): Etf;

  getRealExchange(): tinvest_common_pb.RealExchange;
  setRealExchange(value: tinvest_common_pb.RealExchange): Etf;

  getPositionUid(): string;
  setPositionUid(value: string): Etf;

  getAssetUid(): string;
  setAssetUid(value: string): Etf;

  getInstrumentExchange(): InstrumentExchangeType;
  setInstrumentExchange(value: InstrumentExchangeType): Etf;

  getRequiredTestsList(): Array<string>;
  setRequiredTestsList(value: Array<string>): Etf;
  clearRequiredTestsList(): Etf;
  addRequiredTests(value: string, index?: number): Etf;

  getForIisFlag(): boolean;
  setForIisFlag(value: boolean): Etf;

  getForQualInvestorFlag(): boolean;
  setForQualInvestorFlag(value: boolean): Etf;

  getWeekendFlag(): boolean;
  setWeekendFlag(value: boolean): Etf;

  getBlockedTcaFlag(): boolean;
  setBlockedTcaFlag(value: boolean): Etf;

  getLiquidityFlag(): boolean;
  setLiquidityFlag(value: boolean): Etf;

  getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Etf;
  hasFirst1minCandleDate(): boolean;
  clearFirst1minCandleDate(): Etf;

  getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Etf;
  hasFirst1dayCandleDate(): boolean;
  clearFirst1dayCandleDate(): Etf;

  getBrand(): tinvest_common_pb.BrandData | undefined;
  setBrand(value?: tinvest_common_pb.BrandData): Etf;
  hasBrand(): boolean;
  clearBrand(): Etf;

  getDlongClient(): tinvest_common_pb.Quotation | undefined;
  setDlongClient(value?: tinvest_common_pb.Quotation): Etf;
  hasDlongClient(): boolean;
  clearDlongClient(): Etf;

  getDshortClient(): tinvest_common_pb.Quotation | undefined;
  setDshortClient(value?: tinvest_common_pb.Quotation): Etf;
  hasDshortClient(): boolean;
  clearDshortClient(): Etf;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Etf.AsObject;
  static toObject(includeInstance: boolean, msg: Etf): Etf.AsObject;
  static serializeBinaryToWriter(message: Etf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Etf;
  static deserializeBinaryFromReader(message: Etf, reader: jspb.BinaryReader): Etf;
}

export namespace Etf {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    isin: string,
    lot: number,
    currency: string,
    klong?: tinvest_common_pb.Quotation.AsObject,
    kshort?: tinvest_common_pb.Quotation.AsObject,
    dlong?: tinvest_common_pb.Quotation.AsObject,
    dshort?: tinvest_common_pb.Quotation.AsObject,
    dlongMin?: tinvest_common_pb.Quotation.AsObject,
    dshortMin?: tinvest_common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    name: string,
    exchange: string,
    fixedCommission?: tinvest_common_pb.Quotation.AsObject,
    focusType: string,
    releasedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    numShares?: tinvest_common_pb.Quotation.AsObject,
    countryOfRisk: string,
    countryOfRiskName: string,
    sector: string,
    rebalancingFreq: string,
    tradingStatus: tinvest_common_pb.SecurityTradingStatus,
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    minPriceIncrement?: tinvest_common_pb.Quotation.AsObject,
    apiTradeAvailableFlag: boolean,
    uid: string,
    realExchange: tinvest_common_pb.RealExchange,
    positionUid: string,
    assetUid: string,
    instrumentExchange: InstrumentExchangeType,
    requiredTestsList: Array<string>,
    forIisFlag: boolean,
    forQualInvestorFlag: boolean,
    weekendFlag: boolean,
    blockedTcaFlag: boolean,
    liquidityFlag: boolean,
    first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    brand?: tinvest_common_pb.BrandData.AsObject,
    dlongClient?: tinvest_common_pb.Quotation.AsObject,
    dshortClient?: tinvest_common_pb.Quotation.AsObject,
  }
}

export class Future extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): Future;

  getTicker(): string;
  setTicker(value: string): Future;

  getClassCode(): string;
  setClassCode(value: string): Future;

  getLot(): number;
  setLot(value: number): Future;

  getCurrency(): string;
  setCurrency(value: string): Future;

  getKlong(): tinvest_common_pb.Quotation | undefined;
  setKlong(value?: tinvest_common_pb.Quotation): Future;
  hasKlong(): boolean;
  clearKlong(): Future;

  getKshort(): tinvest_common_pb.Quotation | undefined;
  setKshort(value?: tinvest_common_pb.Quotation): Future;
  hasKshort(): boolean;
  clearKshort(): Future;

  getDlong(): tinvest_common_pb.Quotation | undefined;
  setDlong(value?: tinvest_common_pb.Quotation): Future;
  hasDlong(): boolean;
  clearDlong(): Future;

  getDshort(): tinvest_common_pb.Quotation | undefined;
  setDshort(value?: tinvest_common_pb.Quotation): Future;
  hasDshort(): boolean;
  clearDshort(): Future;

  getDlongMin(): tinvest_common_pb.Quotation | undefined;
  setDlongMin(value?: tinvest_common_pb.Quotation): Future;
  hasDlongMin(): boolean;
  clearDlongMin(): Future;

  getDshortMin(): tinvest_common_pb.Quotation | undefined;
  setDshortMin(value?: tinvest_common_pb.Quotation): Future;
  hasDshortMin(): boolean;
  clearDshortMin(): Future;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): Future;

  getName(): string;
  setName(value: string): Future;

  getExchange(): string;
  setExchange(value: string): Future;

  getFirstTradeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstTradeDate(value?: google_protobuf_timestamp_pb.Timestamp): Future;
  hasFirstTradeDate(): boolean;
  clearFirstTradeDate(): Future;

  getLastTradeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastTradeDate(value?: google_protobuf_timestamp_pb.Timestamp): Future;
  hasLastTradeDate(): boolean;
  clearLastTradeDate(): Future;

  getFuturesType(): string;
  setFuturesType(value: string): Future;

  getAssetType(): string;
  setAssetType(value: string): Future;

  getBasicAsset(): string;
  setBasicAsset(value: string): Future;

  getBasicAssetSize(): tinvest_common_pb.Quotation | undefined;
  setBasicAssetSize(value?: tinvest_common_pb.Quotation): Future;
  hasBasicAssetSize(): boolean;
  clearBasicAssetSize(): Future;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): Future;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): Future;

  getSector(): string;
  setSector(value: string): Future;

  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): Future;
  hasExpirationDate(): boolean;
  clearExpirationDate(): Future;

  getTradingStatus(): tinvest_common_pb.SecurityTradingStatus;
  setTradingStatus(value: tinvest_common_pb.SecurityTradingStatus): Future;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): Future;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): Future;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): Future;

  getMinPriceIncrement(): tinvest_common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: tinvest_common_pb.Quotation): Future;
  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): Future;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): Future;

  getUid(): string;
  setUid(value: string): Future;

  getRealExchange(): tinvest_common_pb.RealExchange;
  setRealExchange(value: tinvest_common_pb.RealExchange): Future;

  getPositionUid(): string;
  setPositionUid(value: string): Future;

  getBasicAssetPositionUid(): string;
  setBasicAssetPositionUid(value: string): Future;

  getRequiredTestsList(): Array<string>;
  setRequiredTestsList(value: Array<string>): Future;
  clearRequiredTestsList(): Future;
  addRequiredTests(value: string, index?: number): Future;

  getForIisFlag(): boolean;
  setForIisFlag(value: boolean): Future;

  getForQualInvestorFlag(): boolean;
  setForQualInvestorFlag(value: boolean): Future;

  getWeekendFlag(): boolean;
  setWeekendFlag(value: boolean): Future;

  getBlockedTcaFlag(): boolean;
  setBlockedTcaFlag(value: boolean): Future;

  getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Future;
  hasFirst1minCandleDate(): boolean;
  clearFirst1minCandleDate(): Future;

  getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Future;
  hasFirst1dayCandleDate(): boolean;
  clearFirst1dayCandleDate(): Future;

  getInitialMarginOnBuy(): tinvest_common_pb.MoneyValue | undefined;
  setInitialMarginOnBuy(value?: tinvest_common_pb.MoneyValue): Future;
  hasInitialMarginOnBuy(): boolean;
  clearInitialMarginOnBuy(): Future;

  getInitialMarginOnSell(): tinvest_common_pb.MoneyValue | undefined;
  setInitialMarginOnSell(value?: tinvest_common_pb.MoneyValue): Future;
  hasInitialMarginOnSell(): boolean;
  clearInitialMarginOnSell(): Future;

  getMinPriceIncrementAmount(): tinvest_common_pb.Quotation | undefined;
  setMinPriceIncrementAmount(value?: tinvest_common_pb.Quotation): Future;
  hasMinPriceIncrementAmount(): boolean;
  clearMinPriceIncrementAmount(): Future;

  getBrand(): tinvest_common_pb.BrandData | undefined;
  setBrand(value?: tinvest_common_pb.BrandData): Future;
  hasBrand(): boolean;
  clearBrand(): Future;

  getDlongClient(): tinvest_common_pb.Quotation | undefined;
  setDlongClient(value?: tinvest_common_pb.Quotation): Future;
  hasDlongClient(): boolean;
  clearDlongClient(): Future;

  getDshortClient(): tinvest_common_pb.Quotation | undefined;
  setDshortClient(value?: tinvest_common_pb.Quotation): Future;
  hasDshortClient(): boolean;
  clearDshortClient(): Future;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Future.AsObject;
  static toObject(includeInstance: boolean, msg: Future): Future.AsObject;
  static serializeBinaryToWriter(message: Future, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Future;
  static deserializeBinaryFromReader(message: Future, reader: jspb.BinaryReader): Future;
}

export namespace Future {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    lot: number,
    currency: string,
    klong?: tinvest_common_pb.Quotation.AsObject,
    kshort?: tinvest_common_pb.Quotation.AsObject,
    dlong?: tinvest_common_pb.Quotation.AsObject,
    dshort?: tinvest_common_pb.Quotation.AsObject,
    dlongMin?: tinvest_common_pb.Quotation.AsObject,
    dshortMin?: tinvest_common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    name: string,
    exchange: string,
    firstTradeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastTradeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    futuresType: string,
    assetType: string,
    basicAsset: string,
    basicAssetSize?: tinvest_common_pb.Quotation.AsObject,
    countryOfRisk: string,
    countryOfRiskName: string,
    sector: string,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tradingStatus: tinvest_common_pb.SecurityTradingStatus,
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    minPriceIncrement?: tinvest_common_pb.Quotation.AsObject,
    apiTradeAvailableFlag: boolean,
    uid: string,
    realExchange: tinvest_common_pb.RealExchange,
    positionUid: string,
    basicAssetPositionUid: string,
    requiredTestsList: Array<string>,
    forIisFlag: boolean,
    forQualInvestorFlag: boolean,
    weekendFlag: boolean,
    blockedTcaFlag: boolean,
    first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    initialMarginOnBuy?: tinvest_common_pb.MoneyValue.AsObject,
    initialMarginOnSell?: tinvest_common_pb.MoneyValue.AsObject,
    minPriceIncrementAmount?: tinvest_common_pb.Quotation.AsObject,
    brand?: tinvest_common_pb.BrandData.AsObject,
    dlongClient?: tinvest_common_pb.Quotation.AsObject,
    dshortClient?: tinvest_common_pb.Quotation.AsObject,
  }
}

export class Share extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): Share;

  getTicker(): string;
  setTicker(value: string): Share;

  getClassCode(): string;
  setClassCode(value: string): Share;

  getIsin(): string;
  setIsin(value: string): Share;

  getLot(): number;
  setLot(value: number): Share;

  getCurrency(): string;
  setCurrency(value: string): Share;

  getKlong(): tinvest_common_pb.Quotation | undefined;
  setKlong(value?: tinvest_common_pb.Quotation): Share;
  hasKlong(): boolean;
  clearKlong(): Share;

  getKshort(): tinvest_common_pb.Quotation | undefined;
  setKshort(value?: tinvest_common_pb.Quotation): Share;
  hasKshort(): boolean;
  clearKshort(): Share;

  getDlong(): tinvest_common_pb.Quotation | undefined;
  setDlong(value?: tinvest_common_pb.Quotation): Share;
  hasDlong(): boolean;
  clearDlong(): Share;

  getDshort(): tinvest_common_pb.Quotation | undefined;
  setDshort(value?: tinvest_common_pb.Quotation): Share;
  hasDshort(): boolean;
  clearDshort(): Share;

  getDlongMin(): tinvest_common_pb.Quotation | undefined;
  setDlongMin(value?: tinvest_common_pb.Quotation): Share;
  hasDlongMin(): boolean;
  clearDlongMin(): Share;

  getDshortMin(): tinvest_common_pb.Quotation | undefined;
  setDshortMin(value?: tinvest_common_pb.Quotation): Share;
  hasDshortMin(): boolean;
  clearDshortMin(): Share;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): Share;

  getName(): string;
  setName(value: string): Share;

  getExchange(): string;
  setExchange(value: string): Share;

  getIpoDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setIpoDate(value?: google_protobuf_timestamp_pb.Timestamp): Share;
  hasIpoDate(): boolean;
  clearIpoDate(): Share;

  getIssueSize(): number;
  setIssueSize(value: number): Share;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): Share;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): Share;

  getSector(): string;
  setSector(value: string): Share;

  getIssueSizePlan(): number;
  setIssueSizePlan(value: number): Share;

  getNominal(): tinvest_common_pb.MoneyValue | undefined;
  setNominal(value?: tinvest_common_pb.MoneyValue): Share;
  hasNominal(): boolean;
  clearNominal(): Share;

  getTradingStatus(): tinvest_common_pb.SecurityTradingStatus;
  setTradingStatus(value: tinvest_common_pb.SecurityTradingStatus): Share;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): Share;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): Share;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): Share;

  getDivYieldFlag(): boolean;
  setDivYieldFlag(value: boolean): Share;

  getShareType(): ShareType;
  setShareType(value: ShareType): Share;

  getMinPriceIncrement(): tinvest_common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: tinvest_common_pb.Quotation): Share;
  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): Share;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): Share;

  getUid(): string;
  setUid(value: string): Share;

  getRealExchange(): tinvest_common_pb.RealExchange;
  setRealExchange(value: tinvest_common_pb.RealExchange): Share;

  getPositionUid(): string;
  setPositionUid(value: string): Share;

  getAssetUid(): string;
  setAssetUid(value: string): Share;

  getInstrumentExchange(): InstrumentExchangeType;
  setInstrumentExchange(value: InstrumentExchangeType): Share;

  getRequiredTestsList(): Array<string>;
  setRequiredTestsList(value: Array<string>): Share;
  clearRequiredTestsList(): Share;
  addRequiredTests(value: string, index?: number): Share;

  getForIisFlag(): boolean;
  setForIisFlag(value: boolean): Share;

  getForQualInvestorFlag(): boolean;
  setForQualInvestorFlag(value: boolean): Share;

  getWeekendFlag(): boolean;
  setWeekendFlag(value: boolean): Share;

  getBlockedTcaFlag(): boolean;
  setBlockedTcaFlag(value: boolean): Share;

  getLiquidityFlag(): boolean;
  setLiquidityFlag(value: boolean): Share;

  getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Share;
  hasFirst1minCandleDate(): boolean;
  clearFirst1minCandleDate(): Share;

  getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Share;
  hasFirst1dayCandleDate(): boolean;
  clearFirst1dayCandleDate(): Share;

  getBrand(): tinvest_common_pb.BrandData | undefined;
  setBrand(value?: tinvest_common_pb.BrandData): Share;
  hasBrand(): boolean;
  clearBrand(): Share;

  getDlongClient(): tinvest_common_pb.Quotation | undefined;
  setDlongClient(value?: tinvest_common_pb.Quotation): Share;
  hasDlongClient(): boolean;
  clearDlongClient(): Share;

  getDshortClient(): tinvest_common_pb.Quotation | undefined;
  setDshortClient(value?: tinvest_common_pb.Quotation): Share;
  hasDshortClient(): boolean;
  clearDshortClient(): Share;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Share.AsObject;
  static toObject(includeInstance: boolean, msg: Share): Share.AsObject;
  static serializeBinaryToWriter(message: Share, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Share;
  static deserializeBinaryFromReader(message: Share, reader: jspb.BinaryReader): Share;
}

export namespace Share {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    isin: string,
    lot: number,
    currency: string,
    klong?: tinvest_common_pb.Quotation.AsObject,
    kshort?: tinvest_common_pb.Quotation.AsObject,
    dlong?: tinvest_common_pb.Quotation.AsObject,
    dshort?: tinvest_common_pb.Quotation.AsObject,
    dlongMin?: tinvest_common_pb.Quotation.AsObject,
    dshortMin?: tinvest_common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    name: string,
    exchange: string,
    ipoDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    issueSize: number,
    countryOfRisk: string,
    countryOfRiskName: string,
    sector: string,
    issueSizePlan: number,
    nominal?: tinvest_common_pb.MoneyValue.AsObject,
    tradingStatus: tinvest_common_pb.SecurityTradingStatus,
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    divYieldFlag: boolean,
    shareType: ShareType,
    minPriceIncrement?: tinvest_common_pb.Quotation.AsObject,
    apiTradeAvailableFlag: boolean,
    uid: string,
    realExchange: tinvest_common_pb.RealExchange,
    positionUid: string,
    assetUid: string,
    instrumentExchange: InstrumentExchangeType,
    requiredTestsList: Array<string>,
    forIisFlag: boolean,
    forQualInvestorFlag: boolean,
    weekendFlag: boolean,
    blockedTcaFlag: boolean,
    liquidityFlag: boolean,
    first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    brand?: tinvest_common_pb.BrandData.AsObject,
    dlongClient?: tinvest_common_pb.Quotation.AsObject,
    dshortClient?: tinvest_common_pb.Quotation.AsObject,
  }
}

export class StructuredNote extends jspb.Message {
  getUid(): string;
  setUid(value: string): StructuredNote;

  getFigi(): string;
  setFigi(value: string): StructuredNote;

  getTicker(): string;
  setTicker(value: string): StructuredNote;

  getClassCode(): string;
  setClassCode(value: string): StructuredNote;

  getIsin(): string;
  setIsin(value: string): StructuredNote;

  getName(): string;
  setName(value: string): StructuredNote;

  getAssetUid(): string;
  setAssetUid(value: string): StructuredNote;

  getPositionUid(): string;
  setPositionUid(value: string): StructuredNote;

  getMinPriceIncrement(): tinvest_common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: tinvest_common_pb.Quotation): StructuredNote;
  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): StructuredNote;

  getLot(): number;
  setLot(value: number): StructuredNote;

  getNominal(): tinvest_common_pb.MoneyValue | undefined;
  setNominal(value?: tinvest_common_pb.MoneyValue): StructuredNote;
  hasNominal(): boolean;
  clearNominal(): StructuredNote;

  getCurrency(): string;
  setCurrency(value: string): StructuredNote;

  getMaturityDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMaturityDate(value?: google_protobuf_timestamp_pb.Timestamp): StructuredNote;
  hasMaturityDate(): boolean;
  clearMaturityDate(): StructuredNote;

  getPlacementDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPlacementDate(value?: google_protobuf_timestamp_pb.Timestamp): StructuredNote;
  hasPlacementDate(): boolean;
  clearPlacementDate(): StructuredNote;

  getIssueKind(): string;
  setIssueKind(value: string): StructuredNote;

  getIssueSize(): number;
  setIssueSize(value: number): StructuredNote;

  getIssueSizePlan(): number;
  setIssueSizePlan(value: number): StructuredNote;

  getDlongClient(): tinvest_common_pb.Quotation | undefined;
  setDlongClient(value?: tinvest_common_pb.Quotation): StructuredNote;
  hasDlongClient(): boolean;
  clearDlongClient(): StructuredNote;

  getDshortClient(): tinvest_common_pb.Quotation | undefined;
  setDshortClient(value?: tinvest_common_pb.Quotation): StructuredNote;
  hasDshortClient(): boolean;
  clearDshortClient(): StructuredNote;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): StructuredNote;

  getExchange(): string;
  setExchange(value: string): StructuredNote;

  getTradingStatus(): tinvest_common_pb.SecurityTradingStatus;
  setTradingStatus(value: tinvest_common_pb.SecurityTradingStatus): StructuredNote;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): StructuredNote;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): StructuredNote;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): StructuredNote;

  getLimitOrderAvailableFlag(): boolean;
  setLimitOrderAvailableFlag(value: boolean): StructuredNote;

  getMarketOrderAvailableFlag(): boolean;
  setMarketOrderAvailableFlag(value: boolean): StructuredNote;

  getBestpriceOrderAvailableFlag(): boolean;
  setBestpriceOrderAvailableFlag(value: boolean): StructuredNote;

  getWeekendFlag(): boolean;
  setWeekendFlag(value: boolean): StructuredNote;

  getLiquidityFlag(): boolean;
  setLiquidityFlag(value: boolean): StructuredNote;

  getForIisFlag(): boolean;
  setForIisFlag(value: boolean): StructuredNote;

  getForQualInvestorFlag(): boolean;
  setForQualInvestorFlag(value: boolean): StructuredNote;

  getPawnshopListFlag(): boolean;
  setPawnshopListFlag(value: boolean): StructuredNote;

  getRealExchange(): tinvest_common_pb.RealExchange;
  setRealExchange(value: tinvest_common_pb.RealExchange): StructuredNote;

  getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): StructuredNote;
  hasFirst1minCandleDate(): boolean;
  clearFirst1minCandleDate(): StructuredNote;

  getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): StructuredNote;
  hasFirst1dayCandleDate(): boolean;
  clearFirst1dayCandleDate(): StructuredNote;

  getBorrowName(): string;
  setBorrowName(value: string): StructuredNote;

  getType(): string;
  setType(value: string): StructuredNote;

  getLogicPortfolio(): StructuredNote.LogicPortfolio;
  setLogicPortfolio(value: StructuredNote.LogicPortfolio): StructuredNote;

  getAssetType(): AssetType;
  setAssetType(value: AssetType): StructuredNote;

  getBasicAssetsList(): Array<StructuredNote.BasicAsset>;
  setBasicAssetsList(value: Array<StructuredNote.BasicAsset>): StructuredNote;
  clearBasicAssetsList(): StructuredNote;
  addBasicAssets(value?: StructuredNote.BasicAsset, index?: number): StructuredNote.BasicAsset;

  getSafetyBarrier(): tinvest_common_pb.Quotation | undefined;
  setSafetyBarrier(value?: tinvest_common_pb.Quotation): StructuredNote;
  hasSafetyBarrier(): boolean;
  clearSafetyBarrier(): StructuredNote;

  getCouponPeriodBase(): string;
  setCouponPeriodBase(value: string): StructuredNote;

  getObservationPrinciple(): StructuredNote.ObservationPrinciple;
  setObservationPrinciple(value: StructuredNote.ObservationPrinciple): StructuredNote;

  getObservationFrequency(): string;
  setObservationFrequency(value: string): StructuredNote;

  getInitialPriceFixingDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInitialPriceFixingDate(value?: google_protobuf_timestamp_pb.Timestamp): StructuredNote;
  hasInitialPriceFixingDate(): boolean;
  clearInitialPriceFixingDate(): StructuredNote;

  getYieldList(): Array<StructuredNote.Yield>;
  setYieldList(value: Array<StructuredNote.Yield>): StructuredNote;
  clearYieldList(): StructuredNote;
  addYield(value?: StructuredNote.Yield, index?: number): StructuredNote.Yield;

  getCouponSavingFlag(): boolean;
  setCouponSavingFlag(value: boolean): StructuredNote;

  getSector(): string;
  setSector(value: string): StructuredNote;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): StructuredNote;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): StructuredNote;

  getLogoName(): string;
  setLogoName(value: string): StructuredNote;

  getRequiredTestsList(): Array<string>;
  setRequiredTestsList(value: Array<string>): StructuredNote;
  clearRequiredTestsList(): StructuredNote;
  addRequiredTests(value: string, index?: number): StructuredNote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructuredNote.AsObject;
  static toObject(includeInstance: boolean, msg: StructuredNote): StructuredNote.AsObject;
  static serializeBinaryToWriter(message: StructuredNote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructuredNote;
  static deserializeBinaryFromReader(message: StructuredNote, reader: jspb.BinaryReader): StructuredNote;
}

export namespace StructuredNote {
  export type AsObject = {
    uid: string,
    figi: string,
    ticker: string,
    classCode: string,
    isin: string,
    name: string,
    assetUid: string,
    positionUid: string,
    minPriceIncrement?: tinvest_common_pb.Quotation.AsObject,
    lot: number,
    nominal?: tinvest_common_pb.MoneyValue.AsObject,
    currency: string,
    maturityDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    placementDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    issueKind: string,
    issueSize: number,
    issueSizePlan: number,
    dlongClient?: tinvest_common_pb.Quotation.AsObject,
    dshortClient?: tinvest_common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    exchange: string,
    tradingStatus: tinvest_common_pb.SecurityTradingStatus,
    apiTradeAvailableFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    limitOrderAvailableFlag: boolean,
    marketOrderAvailableFlag: boolean,
    bestpriceOrderAvailableFlag: boolean,
    weekendFlag: boolean,
    liquidityFlag: boolean,
    forIisFlag: boolean,
    forQualInvestorFlag: boolean,
    pawnshopListFlag: boolean,
    realExchange: tinvest_common_pb.RealExchange,
    first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    borrowName: string,
    type: string,
    logicPortfolio: StructuredNote.LogicPortfolio,
    assetType: AssetType,
    basicAssetsList: Array<StructuredNote.BasicAsset.AsObject>,
    safetyBarrier?: tinvest_common_pb.Quotation.AsObject,
    couponPeriodBase: string,
    observationPrinciple: StructuredNote.ObservationPrinciple,
    observationFrequency: string,
    initialPriceFixingDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    yieldList: Array<StructuredNote.Yield.AsObject>,
    couponSavingFlag: boolean,
    sector: string,
    countryOfRisk: string,
    countryOfRiskName: string,
    logoName: string,
    requiredTestsList: Array<string>,
  }

  export class BasicAsset extends jspb.Message {
    getUid(): string;
    setUid(value: string): BasicAsset;

    getType(): AssetType;
    setType(value: AssetType): BasicAsset;

    getInitialPrice(): tinvest_common_pb.Quotation | undefined;
    setInitialPrice(value?: tinvest_common_pb.Quotation): BasicAsset;
    hasInitialPrice(): boolean;
    clearInitialPrice(): BasicAsset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BasicAsset.AsObject;
    static toObject(includeInstance: boolean, msg: BasicAsset): BasicAsset.AsObject;
    static serializeBinaryToWriter(message: BasicAsset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BasicAsset;
    static deserializeBinaryFromReader(message: BasicAsset, reader: jspb.BinaryReader): BasicAsset;
  }

  export namespace BasicAsset {
    export type AsObject = {
      uid: string,
      type: AssetType,
      initialPrice?: tinvest_common_pb.Quotation.AsObject,
    }
  }


  export class Yield extends jspb.Message {
    getType(): StructuredNote.YieldType;
    setType(value: StructuredNote.YieldType): Yield;

    getValue(): tinvest_common_pb.Quotation | undefined;
    setValue(value?: tinvest_common_pb.Quotation): Yield;
    hasValue(): boolean;
    clearValue(): Yield;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Yield.AsObject;
    static toObject(includeInstance: boolean, msg: Yield): Yield.AsObject;
    static serializeBinaryToWriter(message: Yield, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Yield;
    static deserializeBinaryFromReader(message: Yield, reader: jspb.BinaryReader): Yield;
  }

  export namespace Yield {
    export type AsObject = {
      type: StructuredNote.YieldType,
      value?: tinvest_common_pb.Quotation.AsObject,
    }
  }


  export enum LogicPortfolio { 
    LOGIC_PORTFOLIO_UNSPECIFIED = 0,
    LOGIC_PORTFOLIO_VOLATILITY = 1,
    LOGIC_PORTFOLIO_CORRELATION = 2,
  }

  export enum ObservationPrinciple { 
    OBSERVATION_PRINCIPLE_UNSPECIFIED = 0,
    OBSERVATION_PRINCIPLE_WORST_BASIC_ASSET = 1,
    OBSERVATION_PRINCIPLE_BEST_BASIC_ASSET = 2,
    OBSERVATION_PRINCIPLE_AVERAGE_OF_BASIC_ASSETS = 3,
    OBSERVATION_PRINCIPLE_SINGLE_BASIC_ASSET_PERFORMANCE = 4,
  }

  export enum YieldType { 
    YIELD_TYPE_UNSPECIFIED = 0,
    YIELD_TYPE_GUARANTED_COUPON = 1,
    YIELD_TYPE_CONDITIONAL_COUPON = 2,
    YIELD_TYPE_PARTICIPATION = 3,
  }
}

export class GetAccruedInterestsRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): GetAccruedInterestsRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetAccruedInterestsRequest;
  hasFrom(): boolean;
  clearFrom(): GetAccruedInterestsRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetAccruedInterestsRequest;
  hasTo(): boolean;
  clearTo(): GetAccruedInterestsRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): GetAccruedInterestsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccruedInterestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccruedInterestsRequest): GetAccruedInterestsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccruedInterestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccruedInterestsRequest;
  static deserializeBinaryFromReader(message: GetAccruedInterestsRequest, reader: jspb.BinaryReader): GetAccruedInterestsRequest;
}

export namespace GetAccruedInterestsRequest {
  export type AsObject = {
    figi: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    instrumentId: string,
  }
}

export class GetAccruedInterestsResponse extends jspb.Message {
  getAccruedInterestsList(): Array<AccruedInterest>;
  setAccruedInterestsList(value: Array<AccruedInterest>): GetAccruedInterestsResponse;
  clearAccruedInterestsList(): GetAccruedInterestsResponse;
  addAccruedInterests(value?: AccruedInterest, index?: number): AccruedInterest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccruedInterestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccruedInterestsResponse): GetAccruedInterestsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAccruedInterestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccruedInterestsResponse;
  static deserializeBinaryFromReader(message: GetAccruedInterestsResponse, reader: jspb.BinaryReader): GetAccruedInterestsResponse;
}

export namespace GetAccruedInterestsResponse {
  export type AsObject = {
    accruedInterestsList: Array<AccruedInterest.AsObject>,
  }
}

export class AccruedInterest extends jspb.Message {
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): AccruedInterest;
  hasDate(): boolean;
  clearDate(): AccruedInterest;

  getValue(): tinvest_common_pb.Quotation | undefined;
  setValue(value?: tinvest_common_pb.Quotation): AccruedInterest;
  hasValue(): boolean;
  clearValue(): AccruedInterest;

  getValuePercent(): tinvest_common_pb.Quotation | undefined;
  setValuePercent(value?: tinvest_common_pb.Quotation): AccruedInterest;
  hasValuePercent(): boolean;
  clearValuePercent(): AccruedInterest;

  getNominal(): tinvest_common_pb.Quotation | undefined;
  setNominal(value?: tinvest_common_pb.Quotation): AccruedInterest;
  hasNominal(): boolean;
  clearNominal(): AccruedInterest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccruedInterest.AsObject;
  static toObject(includeInstance: boolean, msg: AccruedInterest): AccruedInterest.AsObject;
  static serializeBinaryToWriter(message: AccruedInterest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccruedInterest;
  static deserializeBinaryFromReader(message: AccruedInterest, reader: jspb.BinaryReader): AccruedInterest;
}

export namespace AccruedInterest {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    value?: tinvest_common_pb.Quotation.AsObject,
    valuePercent?: tinvest_common_pb.Quotation.AsObject,
    nominal?: tinvest_common_pb.Quotation.AsObject,
  }
}

export class GetFuturesMarginRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): GetFuturesMarginRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): GetFuturesMarginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFuturesMarginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFuturesMarginRequest): GetFuturesMarginRequest.AsObject;
  static serializeBinaryToWriter(message: GetFuturesMarginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFuturesMarginRequest;
  static deserializeBinaryFromReader(message: GetFuturesMarginRequest, reader: jspb.BinaryReader): GetFuturesMarginRequest;
}

export namespace GetFuturesMarginRequest {
  export type AsObject = {
    figi: string,
    instrumentId: string,
  }
}

export class GetFuturesMarginResponse extends jspb.Message {
  getInitialMarginOnBuy(): tinvest_common_pb.MoneyValue | undefined;
  setInitialMarginOnBuy(value?: tinvest_common_pb.MoneyValue): GetFuturesMarginResponse;
  hasInitialMarginOnBuy(): boolean;
  clearInitialMarginOnBuy(): GetFuturesMarginResponse;

  getInitialMarginOnSell(): tinvest_common_pb.MoneyValue | undefined;
  setInitialMarginOnSell(value?: tinvest_common_pb.MoneyValue): GetFuturesMarginResponse;
  hasInitialMarginOnSell(): boolean;
  clearInitialMarginOnSell(): GetFuturesMarginResponse;

  getMinPriceIncrement(): tinvest_common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: tinvest_common_pb.Quotation): GetFuturesMarginResponse;
  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): GetFuturesMarginResponse;

  getMinPriceIncrementAmount(): tinvest_common_pb.Quotation | undefined;
  setMinPriceIncrementAmount(value?: tinvest_common_pb.Quotation): GetFuturesMarginResponse;
  hasMinPriceIncrementAmount(): boolean;
  clearMinPriceIncrementAmount(): GetFuturesMarginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFuturesMarginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFuturesMarginResponse): GetFuturesMarginResponse.AsObject;
  static serializeBinaryToWriter(message: GetFuturesMarginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFuturesMarginResponse;
  static deserializeBinaryFromReader(message: GetFuturesMarginResponse, reader: jspb.BinaryReader): GetFuturesMarginResponse;
}

export namespace GetFuturesMarginResponse {
  export type AsObject = {
    initialMarginOnBuy?: tinvest_common_pb.MoneyValue.AsObject,
    initialMarginOnSell?: tinvest_common_pb.MoneyValue.AsObject,
    minPriceIncrement?: tinvest_common_pb.Quotation.AsObject,
    minPriceIncrementAmount?: tinvest_common_pb.Quotation.AsObject,
  }
}

export class InstrumentResponse extends jspb.Message {
  getInstrument(): Instrument | undefined;
  setInstrument(value?: Instrument): InstrumentResponse;
  hasInstrument(): boolean;
  clearInstrument(): InstrumentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentResponse): InstrumentResponse.AsObject;
  static serializeBinaryToWriter(message: InstrumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentResponse;
  static deserializeBinaryFromReader(message: InstrumentResponse, reader: jspb.BinaryReader): InstrumentResponse;
}

export namespace InstrumentResponse {
  export type AsObject = {
    instrument?: Instrument.AsObject,
  }
}

export class Instrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): Instrument;

  getTicker(): string;
  setTicker(value: string): Instrument;

  getClassCode(): string;
  setClassCode(value: string): Instrument;

  getIsin(): string;
  setIsin(value: string): Instrument;

  getLot(): number;
  setLot(value: number): Instrument;

  getCurrency(): string;
  setCurrency(value: string): Instrument;

  getKlong(): tinvest_common_pb.Quotation | undefined;
  setKlong(value?: tinvest_common_pb.Quotation): Instrument;
  hasKlong(): boolean;
  clearKlong(): Instrument;

  getKshort(): tinvest_common_pb.Quotation | undefined;
  setKshort(value?: tinvest_common_pb.Quotation): Instrument;
  hasKshort(): boolean;
  clearKshort(): Instrument;

  getDlong(): tinvest_common_pb.Quotation | undefined;
  setDlong(value?: tinvest_common_pb.Quotation): Instrument;
  hasDlong(): boolean;
  clearDlong(): Instrument;

  getDshort(): tinvest_common_pb.Quotation | undefined;
  setDshort(value?: tinvest_common_pb.Quotation): Instrument;
  hasDshort(): boolean;
  clearDshort(): Instrument;

  getDlongMin(): tinvest_common_pb.Quotation | undefined;
  setDlongMin(value?: tinvest_common_pb.Quotation): Instrument;
  hasDlongMin(): boolean;
  clearDlongMin(): Instrument;

  getDshortMin(): tinvest_common_pb.Quotation | undefined;
  setDshortMin(value?: tinvest_common_pb.Quotation): Instrument;
  hasDshortMin(): boolean;
  clearDshortMin(): Instrument;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): Instrument;

  getName(): string;
  setName(value: string): Instrument;

  getExchange(): string;
  setExchange(value: string): Instrument;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): Instrument;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): Instrument;

  getInstrumentType(): string;
  setInstrumentType(value: string): Instrument;

  getTradingStatus(): tinvest_common_pb.SecurityTradingStatus;
  setTradingStatus(value: tinvest_common_pb.SecurityTradingStatus): Instrument;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): Instrument;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): Instrument;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): Instrument;

  getMinPriceIncrement(): tinvest_common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: tinvest_common_pb.Quotation): Instrument;
  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): Instrument;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): Instrument;

  getUid(): string;
  setUid(value: string): Instrument;

  getRealExchange(): tinvest_common_pb.RealExchange;
  setRealExchange(value: tinvest_common_pb.RealExchange): Instrument;

  getPositionUid(): string;
  setPositionUid(value: string): Instrument;

  getAssetUid(): string;
  setAssetUid(value: string): Instrument;

  getRequiredTestsList(): Array<string>;
  setRequiredTestsList(value: Array<string>): Instrument;
  clearRequiredTestsList(): Instrument;
  addRequiredTests(value: string, index?: number): Instrument;

  getForIisFlag(): boolean;
  setForIisFlag(value: boolean): Instrument;

  getForQualInvestorFlag(): boolean;
  setForQualInvestorFlag(value: boolean): Instrument;

  getWeekendFlag(): boolean;
  setWeekendFlag(value: boolean): Instrument;

  getBlockedTcaFlag(): boolean;
  setBlockedTcaFlag(value: boolean): Instrument;

  getInstrumentKind(): tinvest_common_pb.InstrumentType;
  setInstrumentKind(value: tinvest_common_pb.InstrumentType): Instrument;

  getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Instrument;
  hasFirst1minCandleDate(): boolean;
  clearFirst1minCandleDate(): Instrument;

  getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Instrument;
  hasFirst1dayCandleDate(): boolean;
  clearFirst1dayCandleDate(): Instrument;

  getBrand(): tinvest_common_pb.BrandData | undefined;
  setBrand(value?: tinvest_common_pb.BrandData): Instrument;
  hasBrand(): boolean;
  clearBrand(): Instrument;

  getDlongClient(): tinvest_common_pb.Quotation | undefined;
  setDlongClient(value?: tinvest_common_pb.Quotation): Instrument;
  hasDlongClient(): boolean;
  clearDlongClient(): Instrument;

  getDshortClient(): tinvest_common_pb.Quotation | undefined;
  setDshortClient(value?: tinvest_common_pb.Quotation): Instrument;
  hasDshortClient(): boolean;
  clearDshortClient(): Instrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instrument.AsObject;
  static toObject(includeInstance: boolean, msg: Instrument): Instrument.AsObject;
  static serializeBinaryToWriter(message: Instrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instrument;
  static deserializeBinaryFromReader(message: Instrument, reader: jspb.BinaryReader): Instrument;
}

export namespace Instrument {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    isin: string,
    lot: number,
    currency: string,
    klong?: tinvest_common_pb.Quotation.AsObject,
    kshort?: tinvest_common_pb.Quotation.AsObject,
    dlong?: tinvest_common_pb.Quotation.AsObject,
    dshort?: tinvest_common_pb.Quotation.AsObject,
    dlongMin?: tinvest_common_pb.Quotation.AsObject,
    dshortMin?: tinvest_common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    name: string,
    exchange: string,
    countryOfRisk: string,
    countryOfRiskName: string,
    instrumentType: string,
    tradingStatus: tinvest_common_pb.SecurityTradingStatus,
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    minPriceIncrement?: tinvest_common_pb.Quotation.AsObject,
    apiTradeAvailableFlag: boolean,
    uid: string,
    realExchange: tinvest_common_pb.RealExchange,
    positionUid: string,
    assetUid: string,
    requiredTestsList: Array<string>,
    forIisFlag: boolean,
    forQualInvestorFlag: boolean,
    weekendFlag: boolean,
    blockedTcaFlag: boolean,
    instrumentKind: tinvest_common_pb.InstrumentType,
    first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    brand?: tinvest_common_pb.BrandData.AsObject,
    dlongClient?: tinvest_common_pb.Quotation.AsObject,
    dshortClient?: tinvest_common_pb.Quotation.AsObject,
  }
}

export class GetDividendsRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): GetDividendsRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetDividendsRequest;
  hasFrom(): boolean;
  clearFrom(): GetDividendsRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetDividendsRequest;
  hasTo(): boolean;
  clearTo(): GetDividendsRequest;

  getInstrumentId(): string;
  setInstrumentId(value: string): GetDividendsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDividendsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDividendsRequest): GetDividendsRequest.AsObject;
  static serializeBinaryToWriter(message: GetDividendsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDividendsRequest;
  static deserializeBinaryFromReader(message: GetDividendsRequest, reader: jspb.BinaryReader): GetDividendsRequest;
}

export namespace GetDividendsRequest {
  export type AsObject = {
    figi: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    instrumentId: string,
  }

  export enum FromCase { 
    _FROM_NOT_SET = 0,
    FROM = 2,
  }

  export enum ToCase { 
    _TO_NOT_SET = 0,
    TO = 3,
  }
}

export class GetDividendsResponse extends jspb.Message {
  getDividendsList(): Array<Dividend>;
  setDividendsList(value: Array<Dividend>): GetDividendsResponse;
  clearDividendsList(): GetDividendsResponse;
  addDividends(value?: Dividend, index?: number): Dividend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDividendsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDividendsResponse): GetDividendsResponse.AsObject;
  static serializeBinaryToWriter(message: GetDividendsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDividendsResponse;
  static deserializeBinaryFromReader(message: GetDividendsResponse, reader: jspb.BinaryReader): GetDividendsResponse;
}

export namespace GetDividendsResponse {
  export type AsObject = {
    dividendsList: Array<Dividend.AsObject>,
  }
}

export class Dividend extends jspb.Message {
  getDividendNet(): tinvest_common_pb.MoneyValue | undefined;
  setDividendNet(value?: tinvest_common_pb.MoneyValue): Dividend;
  hasDividendNet(): boolean;
  clearDividendNet(): Dividend;

  getPaymentDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPaymentDate(value?: google_protobuf_timestamp_pb.Timestamp): Dividend;
  hasPaymentDate(): boolean;
  clearPaymentDate(): Dividend;

  getDeclaredDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeclaredDate(value?: google_protobuf_timestamp_pb.Timestamp): Dividend;
  hasDeclaredDate(): boolean;
  clearDeclaredDate(): Dividend;

  getLastBuyDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastBuyDate(value?: google_protobuf_timestamp_pb.Timestamp): Dividend;
  hasLastBuyDate(): boolean;
  clearLastBuyDate(): Dividend;

  getDividendType(): string;
  setDividendType(value: string): Dividend;

  getRecordDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecordDate(value?: google_protobuf_timestamp_pb.Timestamp): Dividend;
  hasRecordDate(): boolean;
  clearRecordDate(): Dividend;

  getRegularity(): string;
  setRegularity(value: string): Dividend;

  getClosePrice(): tinvest_common_pb.MoneyValue | undefined;
  setClosePrice(value?: tinvest_common_pb.MoneyValue): Dividend;
  hasClosePrice(): boolean;
  clearClosePrice(): Dividend;

  getYieldValue(): tinvest_common_pb.Quotation | undefined;
  setYieldValue(value?: tinvest_common_pb.Quotation): Dividend;
  hasYieldValue(): boolean;
  clearYieldValue(): Dividend;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Dividend;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Dividend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dividend.AsObject;
  static toObject(includeInstance: boolean, msg: Dividend): Dividend.AsObject;
  static serializeBinaryToWriter(message: Dividend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dividend;
  static deserializeBinaryFromReader(message: Dividend, reader: jspb.BinaryReader): Dividend;
}

export namespace Dividend {
  export type AsObject = {
    dividendNet?: tinvest_common_pb.MoneyValue.AsObject,
    paymentDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    declaredDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastBuyDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dividendType: string,
    recordDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    regularity: string,
    closePrice?: tinvest_common_pb.MoneyValue.AsObject,
    yieldValue?: tinvest_common_pb.Quotation.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AssetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): AssetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssetRequest): AssetRequest.AsObject;
  static serializeBinaryToWriter(message: AssetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetRequest;
  static deserializeBinaryFromReader(message: AssetRequest, reader: jspb.BinaryReader): AssetRequest;
}

export namespace AssetRequest {
  export type AsObject = {
    id: string,
  }
}

export class AssetResponse extends jspb.Message {
  getAsset(): AssetFull | undefined;
  setAsset(value?: AssetFull): AssetResponse;
  hasAsset(): boolean;
  clearAsset(): AssetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssetResponse): AssetResponse.AsObject;
  static serializeBinaryToWriter(message: AssetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetResponse;
  static deserializeBinaryFromReader(message: AssetResponse, reader: jspb.BinaryReader): AssetResponse;
}

export namespace AssetResponse {
  export type AsObject = {
    asset?: AssetFull.AsObject,
  }
}

export class AssetsRequest extends jspb.Message {
  getInstrumentType(): tinvest_common_pb.InstrumentType;
  setInstrumentType(value: tinvest_common_pb.InstrumentType): AssetsRequest;
  hasInstrumentType(): boolean;
  clearInstrumentType(): AssetsRequest;

  getInstrumentStatus(): tinvest_common_pb.InstrumentStatus;
  setInstrumentStatus(value: tinvest_common_pb.InstrumentStatus): AssetsRequest;
  hasInstrumentStatus(): boolean;
  clearInstrumentStatus(): AssetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssetsRequest): AssetsRequest.AsObject;
  static serializeBinaryToWriter(message: AssetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetsRequest;
  static deserializeBinaryFromReader(message: AssetsRequest, reader: jspb.BinaryReader): AssetsRequest;
}

export namespace AssetsRequest {
  export type AsObject = {
    instrumentType?: tinvest_common_pb.InstrumentType,
    instrumentStatus?: tinvest_common_pb.InstrumentStatus,
  }

  export enum InstrumentTypeCase { 
    _INSTRUMENT_TYPE_NOT_SET = 0,
    INSTRUMENT_TYPE = 1,
  }

  export enum InstrumentStatusCase { 
    _INSTRUMENT_STATUS_NOT_SET = 0,
    INSTRUMENT_STATUS = 2,
  }
}

export class AssetsResponse extends jspb.Message {
  getAssetsList(): Array<Asset>;
  setAssetsList(value: Array<Asset>): AssetsResponse;
  clearAssetsList(): AssetsResponse;
  addAssets(value?: Asset, index?: number): Asset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssetsResponse): AssetsResponse.AsObject;
  static serializeBinaryToWriter(message: AssetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetsResponse;
  static deserializeBinaryFromReader(message: AssetsResponse, reader: jspb.BinaryReader): AssetsResponse;
}

export namespace AssetsResponse {
  export type AsObject = {
    assetsList: Array<Asset.AsObject>,
  }
}

export class AssetFull extends jspb.Message {
  getUid(): string;
  setUid(value: string): AssetFull;

  getType(): AssetType;
  setType(value: AssetType): AssetFull;

  getName(): string;
  setName(value: string): AssetFull;

  getNameBrief(): string;
  setNameBrief(value: string): AssetFull;

  getDescription(): string;
  setDescription(value: string): AssetFull;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): AssetFull;
  hasDeletedAt(): boolean;
  clearDeletedAt(): AssetFull;

  getRequiredTestsList(): Array<string>;
  setRequiredTestsList(value: Array<string>): AssetFull;
  clearRequiredTestsList(): AssetFull;
  addRequiredTests(value: string, index?: number): AssetFull;

  getCurrency(): AssetCurrency | undefined;
  setCurrency(value?: AssetCurrency): AssetFull;
  hasCurrency(): boolean;
  clearCurrency(): AssetFull;

  getSecurity(): AssetSecurity | undefined;
  setSecurity(value?: AssetSecurity): AssetFull;
  hasSecurity(): boolean;
  clearSecurity(): AssetFull;

  getGosRegCode(): string;
  setGosRegCode(value: string): AssetFull;

  getCfi(): string;
  setCfi(value: string): AssetFull;

  getCodeNsd(): string;
  setCodeNsd(value: string): AssetFull;

  getStatus(): string;
  setStatus(value: string): AssetFull;

  getBrand(): Brand | undefined;
  setBrand(value?: Brand): AssetFull;
  hasBrand(): boolean;
  clearBrand(): AssetFull;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AssetFull;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): AssetFull;

  getBrCode(): string;
  setBrCode(value: string): AssetFull;

  getBrCodeName(): string;
  setBrCodeName(value: string): AssetFull;

  getInstrumentsList(): Array<AssetInstrument>;
  setInstrumentsList(value: Array<AssetInstrument>): AssetFull;
  clearInstrumentsList(): AssetFull;
  addInstruments(value?: AssetInstrument, index?: number): AssetInstrument;

  getExtCase(): AssetFull.ExtCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetFull.AsObject;
  static toObject(includeInstance: boolean, msg: AssetFull): AssetFull.AsObject;
  static serializeBinaryToWriter(message: AssetFull, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetFull;
  static deserializeBinaryFromReader(message: AssetFull, reader: jspb.BinaryReader): AssetFull;
}

export namespace AssetFull {
  export type AsObject = {
    uid: string,
    type: AssetType,
    name: string,
    nameBrief: string,
    description: string,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    requiredTestsList: Array<string>,
    currency?: AssetCurrency.AsObject,
    security?: AssetSecurity.AsObject,
    gosRegCode: string,
    cfi: string,
    codeNsd: string,
    status: string,
    brand?: Brand.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    brCode: string,
    brCodeName: string,
    instrumentsList: Array<AssetInstrument.AsObject>,
  }

  export enum ExtCase { 
    EXT_NOT_SET = 0,
    CURRENCY = 8,
    SECURITY = 9,
  }
}

export class Asset extends jspb.Message {
  getUid(): string;
  setUid(value: string): Asset;

  getType(): AssetType;
  setType(value: AssetType): Asset;

  getName(): string;
  setName(value: string): Asset;

  getInstrumentsList(): Array<AssetInstrument>;
  setInstrumentsList(value: Array<AssetInstrument>): Asset;
  clearInstrumentsList(): Asset;
  addInstruments(value?: AssetInstrument, index?: number): AssetInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Asset.AsObject;
  static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
  static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Asset;
  static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
  export type AsObject = {
    uid: string,
    type: AssetType,
    name: string,
    instrumentsList: Array<AssetInstrument.AsObject>,
  }
}

export class AssetCurrency extends jspb.Message {
  getBaseCurrency(): string;
  setBaseCurrency(value: string): AssetCurrency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetCurrency.AsObject;
  static toObject(includeInstance: boolean, msg: AssetCurrency): AssetCurrency.AsObject;
  static serializeBinaryToWriter(message: AssetCurrency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetCurrency;
  static deserializeBinaryFromReader(message: AssetCurrency, reader: jspb.BinaryReader): AssetCurrency;
}

export namespace AssetCurrency {
  export type AsObject = {
    baseCurrency: string,
  }
}

export class AssetSecurity extends jspb.Message {
  getIsin(): string;
  setIsin(value: string): AssetSecurity;

  getType(): string;
  setType(value: string): AssetSecurity;

  getInstrumentKind(): tinvest_common_pb.InstrumentType;
  setInstrumentKind(value: tinvest_common_pb.InstrumentType): AssetSecurity;

  getShare(): AssetShare | undefined;
  setShare(value?: AssetShare): AssetSecurity;
  hasShare(): boolean;
  clearShare(): AssetSecurity;

  getBond(): AssetBond | undefined;
  setBond(value?: AssetBond): AssetSecurity;
  hasBond(): boolean;
  clearBond(): AssetSecurity;

  getSp(): AssetStructuredProduct | undefined;
  setSp(value?: AssetStructuredProduct): AssetSecurity;
  hasSp(): boolean;
  clearSp(): AssetSecurity;

  getEtf(): AssetEtf | undefined;
  setEtf(value?: AssetEtf): AssetSecurity;
  hasEtf(): boolean;
  clearEtf(): AssetSecurity;

  getClearingCertificate(): AssetClearingCertificate | undefined;
  setClearingCertificate(value?: AssetClearingCertificate): AssetSecurity;
  hasClearingCertificate(): boolean;
  clearClearingCertificate(): AssetSecurity;

  getExtCase(): AssetSecurity.ExtCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetSecurity.AsObject;
  static toObject(includeInstance: boolean, msg: AssetSecurity): AssetSecurity.AsObject;
  static serializeBinaryToWriter(message: AssetSecurity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetSecurity;
  static deserializeBinaryFromReader(message: AssetSecurity, reader: jspb.BinaryReader): AssetSecurity;
}

export namespace AssetSecurity {
  export type AsObject = {
    isin: string,
    type: string,
    instrumentKind: tinvest_common_pb.InstrumentType,
    share?: AssetShare.AsObject,
    bond?: AssetBond.AsObject,
    sp?: AssetStructuredProduct.AsObject,
    etf?: AssetEtf.AsObject,
    clearingCertificate?: AssetClearingCertificate.AsObject,
  }

  export enum ExtCase { 
    EXT_NOT_SET = 0,
    SHARE = 3,
    BOND = 4,
    SP = 5,
    ETF = 6,
    CLEARING_CERTIFICATE = 7,
  }
}

export class AssetShare extends jspb.Message {
  getType(): ShareType;
  setType(value: ShareType): AssetShare;

  getIssueSize(): tinvest_common_pb.Quotation | undefined;
  setIssueSize(value?: tinvest_common_pb.Quotation): AssetShare;
  hasIssueSize(): boolean;
  clearIssueSize(): AssetShare;

  getNominal(): tinvest_common_pb.Quotation | undefined;
  setNominal(value?: tinvest_common_pb.Quotation): AssetShare;
  hasNominal(): boolean;
  clearNominal(): AssetShare;

  getNominalCurrency(): string;
  setNominalCurrency(value: string): AssetShare;

  getPrimaryIndex(): string;
  setPrimaryIndex(value: string): AssetShare;

  getDividendRate(): tinvest_common_pb.Quotation | undefined;
  setDividendRate(value?: tinvest_common_pb.Quotation): AssetShare;
  hasDividendRate(): boolean;
  clearDividendRate(): AssetShare;

  getPreferredShareType(): string;
  setPreferredShareType(value: string): AssetShare;

  getIpoDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setIpoDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetShare;
  hasIpoDate(): boolean;
  clearIpoDate(): AssetShare;

  getRegistryDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRegistryDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetShare;
  hasRegistryDate(): boolean;
  clearRegistryDate(): AssetShare;

  getDivYieldFlag(): boolean;
  setDivYieldFlag(value: boolean): AssetShare;

  getIssueKind(): string;
  setIssueKind(value: string): AssetShare;

  getPlacementDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPlacementDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetShare;
  hasPlacementDate(): boolean;
  clearPlacementDate(): AssetShare;

  getRepresIsin(): string;
  setRepresIsin(value: string): AssetShare;

  getIssueSizePlan(): tinvest_common_pb.Quotation | undefined;
  setIssueSizePlan(value?: tinvest_common_pb.Quotation): AssetShare;
  hasIssueSizePlan(): boolean;
  clearIssueSizePlan(): AssetShare;

  getTotalFloat(): tinvest_common_pb.Quotation | undefined;
  setTotalFloat(value?: tinvest_common_pb.Quotation): AssetShare;
  hasTotalFloat(): boolean;
  clearTotalFloat(): AssetShare;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetShare.AsObject;
  static toObject(includeInstance: boolean, msg: AssetShare): AssetShare.AsObject;
  static serializeBinaryToWriter(message: AssetShare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetShare;
  static deserializeBinaryFromReader(message: AssetShare, reader: jspb.BinaryReader): AssetShare;
}

export namespace AssetShare {
  export type AsObject = {
    type: ShareType,
    issueSize?: tinvest_common_pb.Quotation.AsObject,
    nominal?: tinvest_common_pb.Quotation.AsObject,
    nominalCurrency: string,
    primaryIndex: string,
    dividendRate?: tinvest_common_pb.Quotation.AsObject,
    preferredShareType: string,
    ipoDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    registryDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    divYieldFlag: boolean,
    issueKind: string,
    placementDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    represIsin: string,
    issueSizePlan?: tinvest_common_pb.Quotation.AsObject,
    totalFloat?: tinvest_common_pb.Quotation.AsObject,
  }
}

export class AssetBond extends jspb.Message {
  getCurrentNominal(): tinvest_common_pb.Quotation | undefined;
  setCurrentNominal(value?: tinvest_common_pb.Quotation): AssetBond;
  hasCurrentNominal(): boolean;
  clearCurrentNominal(): AssetBond;

  getBorrowName(): string;
  setBorrowName(value: string): AssetBond;

  getIssueSize(): tinvest_common_pb.Quotation | undefined;
  setIssueSize(value?: tinvest_common_pb.Quotation): AssetBond;
  hasIssueSize(): boolean;
  clearIssueSize(): AssetBond;

  getNominal(): tinvest_common_pb.Quotation | undefined;
  setNominal(value?: tinvest_common_pb.Quotation): AssetBond;
  hasNominal(): boolean;
  clearNominal(): AssetBond;

  getNominalCurrency(): string;
  setNominalCurrency(value: string): AssetBond;

  getIssueKind(): string;
  setIssueKind(value: string): AssetBond;

  getInterestKind(): string;
  setInterestKind(value: string): AssetBond;

  getCouponQuantityPerYear(): number;
  setCouponQuantityPerYear(value: number): AssetBond;

  getIndexedNominalFlag(): boolean;
  setIndexedNominalFlag(value: boolean): AssetBond;

  getSubordinatedFlag(): boolean;
  setSubordinatedFlag(value: boolean): AssetBond;

  getCollateralFlag(): boolean;
  setCollateralFlag(value: boolean): AssetBond;

  getTaxFreeFlag(): boolean;
  setTaxFreeFlag(value: boolean): AssetBond;

  getAmortizationFlag(): boolean;
  setAmortizationFlag(value: boolean): AssetBond;

  getFloatingCouponFlag(): boolean;
  setFloatingCouponFlag(value: boolean): AssetBond;

  getPerpetualFlag(): boolean;
  setPerpetualFlag(value: boolean): AssetBond;

  getMaturityDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMaturityDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetBond;
  hasMaturityDate(): boolean;
  clearMaturityDate(): AssetBond;

  getReturnCondition(): string;
  setReturnCondition(value: string): AssetBond;

  getStateRegDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateRegDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetBond;
  hasStateRegDate(): boolean;
  clearStateRegDate(): AssetBond;

  getPlacementDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPlacementDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetBond;
  hasPlacementDate(): boolean;
  clearPlacementDate(): AssetBond;

  getPlacementPrice(): tinvest_common_pb.Quotation | undefined;
  setPlacementPrice(value?: tinvest_common_pb.Quotation): AssetBond;
  hasPlacementPrice(): boolean;
  clearPlacementPrice(): AssetBond;

  getIssueSizePlan(): tinvest_common_pb.Quotation | undefined;
  setIssueSizePlan(value?: tinvest_common_pb.Quotation): AssetBond;
  hasIssueSizePlan(): boolean;
  clearIssueSizePlan(): AssetBond;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetBond.AsObject;
  static toObject(includeInstance: boolean, msg: AssetBond): AssetBond.AsObject;
  static serializeBinaryToWriter(message: AssetBond, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetBond;
  static deserializeBinaryFromReader(message: AssetBond, reader: jspb.BinaryReader): AssetBond;
}

export namespace AssetBond {
  export type AsObject = {
    currentNominal?: tinvest_common_pb.Quotation.AsObject,
    borrowName: string,
    issueSize?: tinvest_common_pb.Quotation.AsObject,
    nominal?: tinvest_common_pb.Quotation.AsObject,
    nominalCurrency: string,
    issueKind: string,
    interestKind: string,
    couponQuantityPerYear: number,
    indexedNominalFlag: boolean,
    subordinatedFlag: boolean,
    collateralFlag: boolean,
    taxFreeFlag: boolean,
    amortizationFlag: boolean,
    floatingCouponFlag: boolean,
    perpetualFlag: boolean,
    maturityDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    returnCondition: string,
    stateRegDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    placementDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    placementPrice?: tinvest_common_pb.Quotation.AsObject,
    issueSizePlan?: tinvest_common_pb.Quotation.AsObject,
  }
}

export class AssetStructuredProduct extends jspb.Message {
  getBorrowName(): string;
  setBorrowName(value: string): AssetStructuredProduct;

  getNominal(): tinvest_common_pb.Quotation | undefined;
  setNominal(value?: tinvest_common_pb.Quotation): AssetStructuredProduct;
  hasNominal(): boolean;
  clearNominal(): AssetStructuredProduct;

  getNominalCurrency(): string;
  setNominalCurrency(value: string): AssetStructuredProduct;

  getType(): StructuredProductType;
  setType(value: StructuredProductType): AssetStructuredProduct;

  getLogicPortfolio(): string;
  setLogicPortfolio(value: string): AssetStructuredProduct;

  getAssetType(): AssetType;
  setAssetType(value: AssetType): AssetStructuredProduct;

  getBasicAsset(): string;
  setBasicAsset(value: string): AssetStructuredProduct;

  getSafetyBarrier(): tinvest_common_pb.Quotation | undefined;
  setSafetyBarrier(value?: tinvest_common_pb.Quotation): AssetStructuredProduct;
  hasSafetyBarrier(): boolean;
  clearSafetyBarrier(): AssetStructuredProduct;

  getMaturityDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMaturityDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetStructuredProduct;
  hasMaturityDate(): boolean;
  clearMaturityDate(): AssetStructuredProduct;

  getIssueSizePlan(): tinvest_common_pb.Quotation | undefined;
  setIssueSizePlan(value?: tinvest_common_pb.Quotation): AssetStructuredProduct;
  hasIssueSizePlan(): boolean;
  clearIssueSizePlan(): AssetStructuredProduct;

  getIssueSize(): tinvest_common_pb.Quotation | undefined;
  setIssueSize(value?: tinvest_common_pb.Quotation): AssetStructuredProduct;
  hasIssueSize(): boolean;
  clearIssueSize(): AssetStructuredProduct;

  getPlacementDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPlacementDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetStructuredProduct;
  hasPlacementDate(): boolean;
  clearPlacementDate(): AssetStructuredProduct;

  getIssueKind(): string;
  setIssueKind(value: string): AssetStructuredProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetStructuredProduct.AsObject;
  static toObject(includeInstance: boolean, msg: AssetStructuredProduct): AssetStructuredProduct.AsObject;
  static serializeBinaryToWriter(message: AssetStructuredProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetStructuredProduct;
  static deserializeBinaryFromReader(message: AssetStructuredProduct, reader: jspb.BinaryReader): AssetStructuredProduct;
}

export namespace AssetStructuredProduct {
  export type AsObject = {
    borrowName: string,
    nominal?: tinvest_common_pb.Quotation.AsObject,
    nominalCurrency: string,
    type: StructuredProductType,
    logicPortfolio: string,
    assetType: AssetType,
    basicAsset: string,
    safetyBarrier?: tinvest_common_pb.Quotation.AsObject,
    maturityDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    issueSizePlan?: tinvest_common_pb.Quotation.AsObject,
    issueSize?: tinvest_common_pb.Quotation.AsObject,
    placementDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    issueKind: string,
  }
}

export class AssetEtf extends jspb.Message {
  getTotalExpense(): tinvest_common_pb.Quotation | undefined;
  setTotalExpense(value?: tinvest_common_pb.Quotation): AssetEtf;
  hasTotalExpense(): boolean;
  clearTotalExpense(): AssetEtf;

  getHurdleRate(): tinvest_common_pb.Quotation | undefined;
  setHurdleRate(value?: tinvest_common_pb.Quotation): AssetEtf;
  hasHurdleRate(): boolean;
  clearHurdleRate(): AssetEtf;

  getPerformanceFee(): tinvest_common_pb.Quotation | undefined;
  setPerformanceFee(value?: tinvest_common_pb.Quotation): AssetEtf;
  hasPerformanceFee(): boolean;
  clearPerformanceFee(): AssetEtf;

  getFixedCommission(): tinvest_common_pb.Quotation | undefined;
  setFixedCommission(value?: tinvest_common_pb.Quotation): AssetEtf;
  hasFixedCommission(): boolean;
  clearFixedCommission(): AssetEtf;

  getPaymentType(): string;
  setPaymentType(value: string): AssetEtf;

  getWatermarkFlag(): boolean;
  setWatermarkFlag(value: boolean): AssetEtf;

  getBuyPremium(): tinvest_common_pb.Quotation | undefined;
  setBuyPremium(value?: tinvest_common_pb.Quotation): AssetEtf;
  hasBuyPremium(): boolean;
  clearBuyPremium(): AssetEtf;

  getSellDiscount(): tinvest_common_pb.Quotation | undefined;
  setSellDiscount(value?: tinvest_common_pb.Quotation): AssetEtf;
  hasSellDiscount(): boolean;
  clearSellDiscount(): AssetEtf;

  getRebalancingFlag(): boolean;
  setRebalancingFlag(value: boolean): AssetEtf;

  getRebalancingFreq(): string;
  setRebalancingFreq(value: string): AssetEtf;

  getManagementType(): string;
  setManagementType(value: string): AssetEtf;

  getPrimaryIndex(): string;
  setPrimaryIndex(value: string): AssetEtf;

  getFocusType(): string;
  setFocusType(value: string): AssetEtf;

  getLeveragedFlag(): boolean;
  setLeveragedFlag(value: boolean): AssetEtf;

  getNumShare(): tinvest_common_pb.Quotation | undefined;
  setNumShare(value?: tinvest_common_pb.Quotation): AssetEtf;
  hasNumShare(): boolean;
  clearNumShare(): AssetEtf;

  getUcitsFlag(): boolean;
  setUcitsFlag(value: boolean): AssetEtf;

  getReleasedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReleasedDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetEtf;
  hasReleasedDate(): boolean;
  clearReleasedDate(): AssetEtf;

  getDescription(): string;
  setDescription(value: string): AssetEtf;

  getPrimaryIndexDescription(): string;
  setPrimaryIndexDescription(value: string): AssetEtf;

  getPrimaryIndexCompany(): string;
  setPrimaryIndexCompany(value: string): AssetEtf;

  getIndexRecoveryPeriod(): tinvest_common_pb.Quotation | undefined;
  setIndexRecoveryPeriod(value?: tinvest_common_pb.Quotation): AssetEtf;
  hasIndexRecoveryPeriod(): boolean;
  clearIndexRecoveryPeriod(): AssetEtf;

  getInavCode(): string;
  setInavCode(value: string): AssetEtf;

  getDivYieldFlag(): boolean;
  setDivYieldFlag(value: boolean): AssetEtf;

  getExpenseCommission(): tinvest_common_pb.Quotation | undefined;
  setExpenseCommission(value?: tinvest_common_pb.Quotation): AssetEtf;
  hasExpenseCommission(): boolean;
  clearExpenseCommission(): AssetEtf;

  getPrimaryIndexTrackingError(): tinvest_common_pb.Quotation | undefined;
  setPrimaryIndexTrackingError(value?: tinvest_common_pb.Quotation): AssetEtf;
  hasPrimaryIndexTrackingError(): boolean;
  clearPrimaryIndexTrackingError(): AssetEtf;

  getRebalancingPlan(): string;
  setRebalancingPlan(value: string): AssetEtf;

  getTaxRate(): string;
  setTaxRate(value: string): AssetEtf;

  getRebalancingDatesList(): Array<google_protobuf_timestamp_pb.Timestamp>;
  setRebalancingDatesList(value: Array<google_protobuf_timestamp_pb.Timestamp>): AssetEtf;
  clearRebalancingDatesList(): AssetEtf;
  addRebalancingDates(value?: google_protobuf_timestamp_pb.Timestamp, index?: number): google_protobuf_timestamp_pb.Timestamp;

  getIssueKind(): string;
  setIssueKind(value: string): AssetEtf;

  getNominal(): tinvest_common_pb.Quotation | undefined;
  setNominal(value?: tinvest_common_pb.Quotation): AssetEtf;
  hasNominal(): boolean;
  clearNominal(): AssetEtf;

  getNominalCurrency(): string;
  setNominalCurrency(value: string): AssetEtf;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetEtf.AsObject;
  static toObject(includeInstance: boolean, msg: AssetEtf): AssetEtf.AsObject;
  static serializeBinaryToWriter(message: AssetEtf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetEtf;
  static deserializeBinaryFromReader(message: AssetEtf, reader: jspb.BinaryReader): AssetEtf;
}

export namespace AssetEtf {
  export type AsObject = {
    totalExpense?: tinvest_common_pb.Quotation.AsObject,
    hurdleRate?: tinvest_common_pb.Quotation.AsObject,
    performanceFee?: tinvest_common_pb.Quotation.AsObject,
    fixedCommission?: tinvest_common_pb.Quotation.AsObject,
    paymentType: string,
    watermarkFlag: boolean,
    buyPremium?: tinvest_common_pb.Quotation.AsObject,
    sellDiscount?: tinvest_common_pb.Quotation.AsObject,
    rebalancingFlag: boolean,
    rebalancingFreq: string,
    managementType: string,
    primaryIndex: string,
    focusType: string,
    leveragedFlag: boolean,
    numShare?: tinvest_common_pb.Quotation.AsObject,
    ucitsFlag: boolean,
    releasedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description: string,
    primaryIndexDescription: string,
    primaryIndexCompany: string,
    indexRecoveryPeriod?: tinvest_common_pb.Quotation.AsObject,
    inavCode: string,
    divYieldFlag: boolean,
    expenseCommission?: tinvest_common_pb.Quotation.AsObject,
    primaryIndexTrackingError?: tinvest_common_pb.Quotation.AsObject,
    rebalancingPlan: string,
    taxRate: string,
    rebalancingDatesList: Array<google_protobuf_timestamp_pb.Timestamp.AsObject>,
    issueKind: string,
    nominal?: tinvest_common_pb.Quotation.AsObject,
    nominalCurrency: string,
  }
}

export class AssetClearingCertificate extends jspb.Message {
  getNominal(): tinvest_common_pb.Quotation | undefined;
  setNominal(value?: tinvest_common_pb.Quotation): AssetClearingCertificate;
  hasNominal(): boolean;
  clearNominal(): AssetClearingCertificate;

  getNominalCurrency(): string;
  setNominalCurrency(value: string): AssetClearingCertificate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetClearingCertificate.AsObject;
  static toObject(includeInstance: boolean, msg: AssetClearingCertificate): AssetClearingCertificate.AsObject;
  static serializeBinaryToWriter(message: AssetClearingCertificate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetClearingCertificate;
  static deserializeBinaryFromReader(message: AssetClearingCertificate, reader: jspb.BinaryReader): AssetClearingCertificate;
}

export namespace AssetClearingCertificate {
  export type AsObject = {
    nominal?: tinvest_common_pb.Quotation.AsObject,
    nominalCurrency: string,
  }
}

export class Brand extends jspb.Message {
  getUid(): string;
  setUid(value: string): Brand;

  getName(): string;
  setName(value: string): Brand;

  getDescription(): string;
  setDescription(value: string): Brand;

  getInfo(): string;
  setInfo(value: string): Brand;

  getCompany(): string;
  setCompany(value: string): Brand;

  getSector(): string;
  setSector(value: string): Brand;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): Brand;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): Brand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Brand.AsObject;
  static toObject(includeInstance: boolean, msg: Brand): Brand.AsObject;
  static serializeBinaryToWriter(message: Brand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Brand;
  static deserializeBinaryFromReader(message: Brand, reader: jspb.BinaryReader): Brand;
}

export namespace Brand {
  export type AsObject = {
    uid: string,
    name: string,
    description: string,
    info: string,
    company: string,
    sector: string,
    countryOfRisk: string,
    countryOfRiskName: string,
  }
}

export class AssetInstrument extends jspb.Message {
  getUid(): string;
  setUid(value: string): AssetInstrument;

  getFigi(): string;
  setFigi(value: string): AssetInstrument;

  getInstrumentType(): string;
  setInstrumentType(value: string): AssetInstrument;

  getTicker(): string;
  setTicker(value: string): AssetInstrument;

  getClassCode(): string;
  setClassCode(value: string): AssetInstrument;

  getLinksList(): Array<InstrumentLink>;
  setLinksList(value: Array<InstrumentLink>): AssetInstrument;
  clearLinksList(): AssetInstrument;
  addLinks(value?: InstrumentLink, index?: number): InstrumentLink;

  getInstrumentKind(): tinvest_common_pb.InstrumentType;
  setInstrumentKind(value: tinvest_common_pb.InstrumentType): AssetInstrument;

  getPositionUid(): string;
  setPositionUid(value: string): AssetInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: AssetInstrument): AssetInstrument.AsObject;
  static serializeBinaryToWriter(message: AssetInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetInstrument;
  static deserializeBinaryFromReader(message: AssetInstrument, reader: jspb.BinaryReader): AssetInstrument;
}

export namespace AssetInstrument {
  export type AsObject = {
    uid: string,
    figi: string,
    instrumentType: string,
    ticker: string,
    classCode: string,
    linksList: Array<InstrumentLink.AsObject>,
    instrumentKind: tinvest_common_pb.InstrumentType,
    positionUid: string,
  }
}

export class InstrumentLink extends jspb.Message {
  getType(): string;
  setType(value: string): InstrumentLink;

  getInstrumentUid(): string;
  setInstrumentUid(value: string): InstrumentLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentLink.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentLink): InstrumentLink.AsObject;
  static serializeBinaryToWriter(message: InstrumentLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentLink;
  static deserializeBinaryFromReader(message: InstrumentLink, reader: jspb.BinaryReader): InstrumentLink;
}

export namespace InstrumentLink {
  export type AsObject = {
    type: string,
    instrumentUid: string,
  }
}

export class GetFavoritesRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): GetFavoritesRequest;
  hasGroupId(): boolean;
  clearGroupId(): GetFavoritesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFavoritesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFavoritesRequest): GetFavoritesRequest.AsObject;
  static serializeBinaryToWriter(message: GetFavoritesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFavoritesRequest;
  static deserializeBinaryFromReader(message: GetFavoritesRequest, reader: jspb.BinaryReader): GetFavoritesRequest;
}

export namespace GetFavoritesRequest {
  export type AsObject = {
    groupId?: string,
  }

  export enum GroupIdCase { 
    _GROUP_ID_NOT_SET = 0,
    GROUP_ID = 1,
  }
}

export class GetFavoritesResponse extends jspb.Message {
  getFavoriteInstrumentsList(): Array<FavoriteInstrument>;
  setFavoriteInstrumentsList(value: Array<FavoriteInstrument>): GetFavoritesResponse;
  clearFavoriteInstrumentsList(): GetFavoritesResponse;
  addFavoriteInstruments(value?: FavoriteInstrument, index?: number): FavoriteInstrument;

  getGroupId(): string;
  setGroupId(value: string): GetFavoritesResponse;
  hasGroupId(): boolean;
  clearGroupId(): GetFavoritesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFavoritesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFavoritesResponse): GetFavoritesResponse.AsObject;
  static serializeBinaryToWriter(message: GetFavoritesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFavoritesResponse;
  static deserializeBinaryFromReader(message: GetFavoritesResponse, reader: jspb.BinaryReader): GetFavoritesResponse;
}

export namespace GetFavoritesResponse {
  export type AsObject = {
    favoriteInstrumentsList: Array<FavoriteInstrument.AsObject>,
    groupId?: string,
  }

  export enum GroupIdCase { 
    _GROUP_ID_NOT_SET = 0,
    GROUP_ID = 2,
  }
}

export class FavoriteInstrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): FavoriteInstrument;

  getTicker(): string;
  setTicker(value: string): FavoriteInstrument;

  getClassCode(): string;
  setClassCode(value: string): FavoriteInstrument;

  getIsin(): string;
  setIsin(value: string): FavoriteInstrument;

  getInstrumentType(): string;
  setInstrumentType(value: string): FavoriteInstrument;

  getName(): string;
  setName(value: string): FavoriteInstrument;

  getUid(): string;
  setUid(value: string): FavoriteInstrument;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): FavoriteInstrument;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): FavoriteInstrument;

  getInstrumentKind(): tinvest_common_pb.InstrumentType;
  setInstrumentKind(value: tinvest_common_pb.InstrumentType): FavoriteInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FavoriteInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: FavoriteInstrument): FavoriteInstrument.AsObject;
  static serializeBinaryToWriter(message: FavoriteInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FavoriteInstrument;
  static deserializeBinaryFromReader(message: FavoriteInstrument, reader: jspb.BinaryReader): FavoriteInstrument;
}

export namespace FavoriteInstrument {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    isin: string,
    instrumentType: string,
    name: string,
    uid: string,
    otcFlag: boolean,
    apiTradeAvailableFlag: boolean,
    instrumentKind: tinvest_common_pb.InstrumentType,
  }
}

export class EditFavoritesRequest extends jspb.Message {
  getInstrumentsList(): Array<EditFavoritesRequestInstrument>;
  setInstrumentsList(value: Array<EditFavoritesRequestInstrument>): EditFavoritesRequest;
  clearInstrumentsList(): EditFavoritesRequest;
  addInstruments(value?: EditFavoritesRequestInstrument, index?: number): EditFavoritesRequestInstrument;

  getActionType(): EditFavoritesActionType;
  setActionType(value: EditFavoritesActionType): EditFavoritesRequest;

  getGroupId(): string;
  setGroupId(value: string): EditFavoritesRequest;
  hasGroupId(): boolean;
  clearGroupId(): EditFavoritesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditFavoritesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditFavoritesRequest): EditFavoritesRequest.AsObject;
  static serializeBinaryToWriter(message: EditFavoritesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditFavoritesRequest;
  static deserializeBinaryFromReader(message: EditFavoritesRequest, reader: jspb.BinaryReader): EditFavoritesRequest;
}

export namespace EditFavoritesRequest {
  export type AsObject = {
    instrumentsList: Array<EditFavoritesRequestInstrument.AsObject>,
    actionType: EditFavoritesActionType,
    groupId?: string,
  }

  export enum GroupIdCase { 
    _GROUP_ID_NOT_SET = 0,
    GROUP_ID = 7,
  }
}

export class EditFavoritesRequestInstrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): EditFavoritesRequestInstrument;
  hasFigi(): boolean;
  clearFigi(): EditFavoritesRequestInstrument;

  getInstrumentId(): string;
  setInstrumentId(value: string): EditFavoritesRequestInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditFavoritesRequestInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: EditFavoritesRequestInstrument): EditFavoritesRequestInstrument.AsObject;
  static serializeBinaryToWriter(message: EditFavoritesRequestInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditFavoritesRequestInstrument;
  static deserializeBinaryFromReader(message: EditFavoritesRequestInstrument, reader: jspb.BinaryReader): EditFavoritesRequestInstrument;
}

export namespace EditFavoritesRequestInstrument {
  export type AsObject = {
    figi?: string,
    instrumentId: string,
  }

  export enum FigiCase { 
    _FIGI_NOT_SET = 0,
    FIGI = 1,
  }
}

export class EditFavoritesResponse extends jspb.Message {
  getFavoriteInstrumentsList(): Array<FavoriteInstrument>;
  setFavoriteInstrumentsList(value: Array<FavoriteInstrument>): EditFavoritesResponse;
  clearFavoriteInstrumentsList(): EditFavoritesResponse;
  addFavoriteInstruments(value?: FavoriteInstrument, index?: number): FavoriteInstrument;

  getGroupId(): string;
  setGroupId(value: string): EditFavoritesResponse;
  hasGroupId(): boolean;
  clearGroupId(): EditFavoritesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditFavoritesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditFavoritesResponse): EditFavoritesResponse.AsObject;
  static serializeBinaryToWriter(message: EditFavoritesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditFavoritesResponse;
  static deserializeBinaryFromReader(message: EditFavoritesResponse, reader: jspb.BinaryReader): EditFavoritesResponse;
}

export namespace EditFavoritesResponse {
  export type AsObject = {
    favoriteInstrumentsList: Array<FavoriteInstrument.AsObject>,
    groupId?: string,
  }

  export enum GroupIdCase { 
    _GROUP_ID_NOT_SET = 0,
    GROUP_ID = 2,
  }
}

export class CreateFavoriteGroupRequest extends jspb.Message {
  getGroupName(): string;
  setGroupName(value: string): CreateFavoriteGroupRequest;

  getGroupColor(): string;
  setGroupColor(value: string): CreateFavoriteGroupRequest;

  getNote(): string;
  setNote(value: string): CreateFavoriteGroupRequest;
  hasNote(): boolean;
  clearNote(): CreateFavoriteGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFavoriteGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFavoriteGroupRequest): CreateFavoriteGroupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFavoriteGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFavoriteGroupRequest;
  static deserializeBinaryFromReader(message: CreateFavoriteGroupRequest, reader: jspb.BinaryReader): CreateFavoriteGroupRequest;
}

export namespace CreateFavoriteGroupRequest {
  export type AsObject = {
    groupName: string,
    groupColor: string,
    note?: string,
  }

  export enum NoteCase { 
    _NOTE_NOT_SET = 0,
    NOTE = 3,
  }
}

export class CreateFavoriteGroupResponse extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): CreateFavoriteGroupResponse;

  getGroupName(): string;
  setGroupName(value: string): CreateFavoriteGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFavoriteGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFavoriteGroupResponse): CreateFavoriteGroupResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFavoriteGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFavoriteGroupResponse;
  static deserializeBinaryFromReader(message: CreateFavoriteGroupResponse, reader: jspb.BinaryReader): CreateFavoriteGroupResponse;
}

export namespace CreateFavoriteGroupResponse {
  export type AsObject = {
    groupId: string,
    groupName: string,
  }
}

export class DeleteFavoriteGroupRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): DeleteFavoriteGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFavoriteGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFavoriteGroupRequest): DeleteFavoriteGroupRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFavoriteGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFavoriteGroupRequest;
  static deserializeBinaryFromReader(message: DeleteFavoriteGroupRequest, reader: jspb.BinaryReader): DeleteFavoriteGroupRequest;
}

export namespace DeleteFavoriteGroupRequest {
  export type AsObject = {
    groupId: string,
  }
}

export class DeleteFavoriteGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFavoriteGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFavoriteGroupResponse): DeleteFavoriteGroupResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFavoriteGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFavoriteGroupResponse;
  static deserializeBinaryFromReader(message: DeleteFavoriteGroupResponse, reader: jspb.BinaryReader): DeleteFavoriteGroupResponse;
}

export namespace DeleteFavoriteGroupResponse {
  export type AsObject = {
  }
}

export class GetFavoriteGroupsRequest extends jspb.Message {
  getInstrumentIdList(): Array<string>;
  setInstrumentIdList(value: Array<string>): GetFavoriteGroupsRequest;
  clearInstrumentIdList(): GetFavoriteGroupsRequest;
  addInstrumentId(value: string, index?: number): GetFavoriteGroupsRequest;

  getExcludedGroupIdList(): Array<string>;
  setExcludedGroupIdList(value: Array<string>): GetFavoriteGroupsRequest;
  clearExcludedGroupIdList(): GetFavoriteGroupsRequest;
  addExcludedGroupId(value: string, index?: number): GetFavoriteGroupsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFavoriteGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFavoriteGroupsRequest): GetFavoriteGroupsRequest.AsObject;
  static serializeBinaryToWriter(message: GetFavoriteGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFavoriteGroupsRequest;
  static deserializeBinaryFromReader(message: GetFavoriteGroupsRequest, reader: jspb.BinaryReader): GetFavoriteGroupsRequest;
}

export namespace GetFavoriteGroupsRequest {
  export type AsObject = {
    instrumentIdList: Array<string>,
    excludedGroupIdList: Array<string>,
  }
}

export class GetFavoriteGroupsResponse extends jspb.Message {
  getGroupsList(): Array<GetFavoriteGroupsResponse.FavoriteGroup>;
  setGroupsList(value: Array<GetFavoriteGroupsResponse.FavoriteGroup>): GetFavoriteGroupsResponse;
  clearGroupsList(): GetFavoriteGroupsResponse;
  addGroups(value?: GetFavoriteGroupsResponse.FavoriteGroup, index?: number): GetFavoriteGroupsResponse.FavoriteGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFavoriteGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFavoriteGroupsResponse): GetFavoriteGroupsResponse.AsObject;
  static serializeBinaryToWriter(message: GetFavoriteGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFavoriteGroupsResponse;
  static deserializeBinaryFromReader(message: GetFavoriteGroupsResponse, reader: jspb.BinaryReader): GetFavoriteGroupsResponse;
}

export namespace GetFavoriteGroupsResponse {
  export type AsObject = {
    groupsList: Array<GetFavoriteGroupsResponse.FavoriteGroup.AsObject>,
  }

  export class FavoriteGroup extends jspb.Message {
    getGroupId(): string;
    setGroupId(value: string): FavoriteGroup;

    getGroupName(): string;
    setGroupName(value: string): FavoriteGroup;

    getColor(): string;
    setColor(value: string): FavoriteGroup;

    getSize(): number;
    setSize(value: number): FavoriteGroup;

    getContainsInstrument(): boolean;
    setContainsInstrument(value: boolean): FavoriteGroup;
    hasContainsInstrument(): boolean;
    clearContainsInstrument(): FavoriteGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FavoriteGroup.AsObject;
    static toObject(includeInstance: boolean, msg: FavoriteGroup): FavoriteGroup.AsObject;
    static serializeBinaryToWriter(message: FavoriteGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FavoriteGroup;
    static deserializeBinaryFromReader(message: FavoriteGroup, reader: jspb.BinaryReader): FavoriteGroup;
  }

  export namespace FavoriteGroup {
    export type AsObject = {
      groupId: string,
      groupName: string,
      color: string,
      size: number,
      containsInstrument?: boolean,
    }

    export enum ContainsInstrumentCase { 
      _CONTAINS_INSTRUMENT_NOT_SET = 0,
      CONTAINS_INSTRUMENT = 5,
    }
  }

}

export class GetCountriesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesRequest): GetCountriesRequest.AsObject;
  static serializeBinaryToWriter(message: GetCountriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesRequest;
  static deserializeBinaryFromReader(message: GetCountriesRequest, reader: jspb.BinaryReader): GetCountriesRequest;
}

export namespace GetCountriesRequest {
  export type AsObject = {
  }
}

export class GetCountriesResponse extends jspb.Message {
  getCountriesList(): Array<CountryResponse>;
  setCountriesList(value: Array<CountryResponse>): GetCountriesResponse;
  clearCountriesList(): GetCountriesResponse;
  addCountries(value?: CountryResponse, index?: number): CountryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesResponse): GetCountriesResponse.AsObject;
  static serializeBinaryToWriter(message: GetCountriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesResponse;
  static deserializeBinaryFromReader(message: GetCountriesResponse, reader: jspb.BinaryReader): GetCountriesResponse;
}

export namespace GetCountriesResponse {
  export type AsObject = {
    countriesList: Array<CountryResponse.AsObject>,
  }
}

export class IndicativesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndicativesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IndicativesRequest): IndicativesRequest.AsObject;
  static serializeBinaryToWriter(message: IndicativesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndicativesRequest;
  static deserializeBinaryFromReader(message: IndicativesRequest, reader: jspb.BinaryReader): IndicativesRequest;
}

export namespace IndicativesRequest {
  export type AsObject = {
  }
}

export class IndicativesResponse extends jspb.Message {
  getInstrumentsList(): Array<IndicativeResponse>;
  setInstrumentsList(value: Array<IndicativeResponse>): IndicativesResponse;
  clearInstrumentsList(): IndicativesResponse;
  addInstruments(value?: IndicativeResponse, index?: number): IndicativeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndicativesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndicativesResponse): IndicativesResponse.AsObject;
  static serializeBinaryToWriter(message: IndicativesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndicativesResponse;
  static deserializeBinaryFromReader(message: IndicativesResponse, reader: jspb.BinaryReader): IndicativesResponse;
}

export namespace IndicativesResponse {
  export type AsObject = {
    instrumentsList: Array<IndicativeResponse.AsObject>,
  }
}

export class IndicativeResponse extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): IndicativeResponse;

  getTicker(): string;
  setTicker(value: string): IndicativeResponse;

  getClassCode(): string;
  setClassCode(value: string): IndicativeResponse;

  getCurrency(): string;
  setCurrency(value: string): IndicativeResponse;

  getInstrumentKind(): tinvest_common_pb.InstrumentType;
  setInstrumentKind(value: tinvest_common_pb.InstrumentType): IndicativeResponse;

  getName(): string;
  setName(value: string): IndicativeResponse;

  getExchange(): string;
  setExchange(value: string): IndicativeResponse;

  getUid(): string;
  setUid(value: string): IndicativeResponse;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): IndicativeResponse;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): IndicativeResponse;

  getIndexCompositionList(): Array<IndexInstrument>;
  setIndexCompositionList(value: Array<IndexInstrument>): IndicativeResponse;
  clearIndexCompositionList(): IndicativeResponse;
  addIndexComposition(value?: IndexInstrument, index?: number): IndexInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndicativeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndicativeResponse): IndicativeResponse.AsObject;
  static serializeBinaryToWriter(message: IndicativeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndicativeResponse;
  static deserializeBinaryFromReader(message: IndicativeResponse, reader: jspb.BinaryReader): IndicativeResponse;
}

export namespace IndicativeResponse {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    currency: string,
    instrumentKind: tinvest_common_pb.InstrumentType,
    name: string,
    exchange: string,
    uid: string,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    indexCompositionList: Array<IndexInstrument.AsObject>,
  }
}

export class IndexInstrument extends jspb.Message {
  getUid(): string;
  setUid(value: string): IndexInstrument;

  getWeight(): tinvest_common_pb.Quotation | undefined;
  setWeight(value?: tinvest_common_pb.Quotation): IndexInstrument;
  hasWeight(): boolean;
  clearWeight(): IndexInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: IndexInstrument): IndexInstrument.AsObject;
  static serializeBinaryToWriter(message: IndexInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexInstrument;
  static deserializeBinaryFromReader(message: IndexInstrument, reader: jspb.BinaryReader): IndexInstrument;
}

export namespace IndexInstrument {
  export type AsObject = {
    uid: string,
    weight?: tinvest_common_pb.Quotation.AsObject,
  }
}

export class CountryResponse extends jspb.Message {
  getAlfaTwo(): string;
  setAlfaTwo(value: string): CountryResponse;

  getAlfaThree(): string;
  setAlfaThree(value: string): CountryResponse;

  getName(): string;
  setName(value: string): CountryResponse;

  getNameBrief(): string;
  setNameBrief(value: string): CountryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountryResponse): CountryResponse.AsObject;
  static serializeBinaryToWriter(message: CountryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryResponse;
  static deserializeBinaryFromReader(message: CountryResponse, reader: jspb.BinaryReader): CountryResponse;
}

export namespace CountryResponse {
  export type AsObject = {
    alfaTwo: string,
    alfaThree: string,
    name: string,
    nameBrief: string,
  }
}

export class FindInstrumentRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): FindInstrumentRequest;

  getInstrumentKind(): tinvest_common_pb.InstrumentType;
  setInstrumentKind(value: tinvest_common_pb.InstrumentType): FindInstrumentRequest;
  hasInstrumentKind(): boolean;
  clearInstrumentKind(): FindInstrumentRequest;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): FindInstrumentRequest;
  hasApiTradeAvailableFlag(): boolean;
  clearApiTradeAvailableFlag(): FindInstrumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindInstrumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindInstrumentRequest): FindInstrumentRequest.AsObject;
  static serializeBinaryToWriter(message: FindInstrumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindInstrumentRequest;
  static deserializeBinaryFromReader(message: FindInstrumentRequest, reader: jspb.BinaryReader): FindInstrumentRequest;
}

export namespace FindInstrumentRequest {
  export type AsObject = {
    query: string,
    instrumentKind?: tinvest_common_pb.InstrumentType,
    apiTradeAvailableFlag?: boolean,
  }

  export enum InstrumentKindCase { 
    _INSTRUMENT_KIND_NOT_SET = 0,
    INSTRUMENT_KIND = 2,
  }

  export enum ApiTradeAvailableFlagCase { 
    _API_TRADE_AVAILABLE_FLAG_NOT_SET = 0,
    API_TRADE_AVAILABLE_FLAG = 3,
  }
}

export class FindInstrumentResponse extends jspb.Message {
  getInstrumentsList(): Array<InstrumentShort>;
  setInstrumentsList(value: Array<InstrumentShort>): FindInstrumentResponse;
  clearInstrumentsList(): FindInstrumentResponse;
  addInstruments(value?: InstrumentShort, index?: number): InstrumentShort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindInstrumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindInstrumentResponse): FindInstrumentResponse.AsObject;
  static serializeBinaryToWriter(message: FindInstrumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindInstrumentResponse;
  static deserializeBinaryFromReader(message: FindInstrumentResponse, reader: jspb.BinaryReader): FindInstrumentResponse;
}

export namespace FindInstrumentResponse {
  export type AsObject = {
    instrumentsList: Array<InstrumentShort.AsObject>,
  }
}

export class InstrumentShort extends jspb.Message {
  getIsin(): string;
  setIsin(value: string): InstrumentShort;

  getFigi(): string;
  setFigi(value: string): InstrumentShort;

  getTicker(): string;
  setTicker(value: string): InstrumentShort;

  getClassCode(): string;
  setClassCode(value: string): InstrumentShort;

  getInstrumentType(): string;
  setInstrumentType(value: string): InstrumentShort;

  getName(): string;
  setName(value: string): InstrumentShort;

  getUid(): string;
  setUid(value: string): InstrumentShort;

  getPositionUid(): string;
  setPositionUid(value: string): InstrumentShort;

  getInstrumentKind(): tinvest_common_pb.InstrumentType;
  setInstrumentKind(value: tinvest_common_pb.InstrumentType): InstrumentShort;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): InstrumentShort;

  getForIisFlag(): boolean;
  setForIisFlag(value: boolean): InstrumentShort;

  getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): InstrumentShort;
  hasFirst1minCandleDate(): boolean;
  clearFirst1minCandleDate(): InstrumentShort;

  getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): InstrumentShort;
  hasFirst1dayCandleDate(): boolean;
  clearFirst1dayCandleDate(): InstrumentShort;

  getForQualInvestorFlag(): boolean;
  setForQualInvestorFlag(value: boolean): InstrumentShort;

  getWeekendFlag(): boolean;
  setWeekendFlag(value: boolean): InstrumentShort;

  getBlockedTcaFlag(): boolean;
  setBlockedTcaFlag(value: boolean): InstrumentShort;

  getLot(): number;
  setLot(value: number): InstrumentShort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentShort.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentShort): InstrumentShort.AsObject;
  static serializeBinaryToWriter(message: InstrumentShort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentShort;
  static deserializeBinaryFromReader(message: InstrumentShort, reader: jspb.BinaryReader): InstrumentShort;
}

export namespace InstrumentShort {
  export type AsObject = {
    isin: string,
    figi: string,
    ticker: string,
    classCode: string,
    instrumentType: string,
    name: string,
    uid: string,
    positionUid: string,
    instrumentKind: tinvest_common_pb.InstrumentType,
    apiTradeAvailableFlag: boolean,
    forIisFlag: boolean,
    first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    forQualInvestorFlag: boolean,
    weekendFlag: boolean,
    blockedTcaFlag: boolean,
    lot: number,
  }
}

export class GetBrandsRequest extends jspb.Message {
  getPaging(): tinvest_common_pb.Page | undefined;
  setPaging(value?: tinvest_common_pb.Page): GetBrandsRequest;
  hasPaging(): boolean;
  clearPaging(): GetBrandsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrandsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrandsRequest): GetBrandsRequest.AsObject;
  static serializeBinaryToWriter(message: GetBrandsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrandsRequest;
  static deserializeBinaryFromReader(message: GetBrandsRequest, reader: jspb.BinaryReader): GetBrandsRequest;
}

export namespace GetBrandsRequest {
  export type AsObject = {
    paging?: tinvest_common_pb.Page.AsObject,
  }
}

export class GetBrandRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetBrandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrandRequest): GetBrandRequest.AsObject;
  static serializeBinaryToWriter(message: GetBrandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrandRequest;
  static deserializeBinaryFromReader(message: GetBrandRequest, reader: jspb.BinaryReader): GetBrandRequest;
}

export namespace GetBrandRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetBrandsResponse extends jspb.Message {
  getBrandsList(): Array<Brand>;
  setBrandsList(value: Array<Brand>): GetBrandsResponse;
  clearBrandsList(): GetBrandsResponse;
  addBrands(value?: Brand, index?: number): Brand;

  getPaging(): tinvest_common_pb.PageResponse | undefined;
  setPaging(value?: tinvest_common_pb.PageResponse): GetBrandsResponse;
  hasPaging(): boolean;
  clearPaging(): GetBrandsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrandsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrandsResponse): GetBrandsResponse.AsObject;
  static serializeBinaryToWriter(message: GetBrandsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrandsResponse;
  static deserializeBinaryFromReader(message: GetBrandsResponse, reader: jspb.BinaryReader): GetBrandsResponse;
}

export namespace GetBrandsResponse {
  export type AsObject = {
    brandsList: Array<Brand.AsObject>,
    paging?: tinvest_common_pb.PageResponse.AsObject,
  }
}

export class GetAssetFundamentalsRequest extends jspb.Message {
  getAssetsList(): Array<string>;
  setAssetsList(value: Array<string>): GetAssetFundamentalsRequest;
  clearAssetsList(): GetAssetFundamentalsRequest;
  addAssets(value: string, index?: number): GetAssetFundamentalsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssetFundamentalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssetFundamentalsRequest): GetAssetFundamentalsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAssetFundamentalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssetFundamentalsRequest;
  static deserializeBinaryFromReader(message: GetAssetFundamentalsRequest, reader: jspb.BinaryReader): GetAssetFundamentalsRequest;
}

export namespace GetAssetFundamentalsRequest {
  export type AsObject = {
    assetsList: Array<string>,
  }
}

export class GetAssetFundamentalsResponse extends jspb.Message {
  getFundamentalsList(): Array<GetAssetFundamentalsResponse.StatisticResponse>;
  setFundamentalsList(value: Array<GetAssetFundamentalsResponse.StatisticResponse>): GetAssetFundamentalsResponse;
  clearFundamentalsList(): GetAssetFundamentalsResponse;
  addFundamentals(value?: GetAssetFundamentalsResponse.StatisticResponse, index?: number): GetAssetFundamentalsResponse.StatisticResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssetFundamentalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssetFundamentalsResponse): GetAssetFundamentalsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAssetFundamentalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssetFundamentalsResponse;
  static deserializeBinaryFromReader(message: GetAssetFundamentalsResponse, reader: jspb.BinaryReader): GetAssetFundamentalsResponse;
}

export namespace GetAssetFundamentalsResponse {
  export type AsObject = {
    fundamentalsList: Array<GetAssetFundamentalsResponse.StatisticResponse.AsObject>,
  }

  export class StatisticResponse extends jspb.Message {
    getAssetUid(): string;
    setAssetUid(value: string): StatisticResponse;

    getCurrency(): string;
    setCurrency(value: string): StatisticResponse;

    getMarketCapitalization(): number;
    setMarketCapitalization(value: number): StatisticResponse;

    getHighPriceLast52Weeks(): number;
    setHighPriceLast52Weeks(value: number): StatisticResponse;

    getLowPriceLast52Weeks(): number;
    setLowPriceLast52Weeks(value: number): StatisticResponse;

    getAverageDailyVolumeLast10Days(): number;
    setAverageDailyVolumeLast10Days(value: number): StatisticResponse;

    getAverageDailyVolumeLast4Weeks(): number;
    setAverageDailyVolumeLast4Weeks(value: number): StatisticResponse;

    getBeta(): number;
    setBeta(value: number): StatisticResponse;

    getFreeFloat(): number;
    setFreeFloat(value: number): StatisticResponse;

    getForwardAnnualDividendYield(): number;
    setForwardAnnualDividendYield(value: number): StatisticResponse;

    getSharesOutstanding(): number;
    setSharesOutstanding(value: number): StatisticResponse;

    getRevenueTtm(): number;
    setRevenueTtm(value: number): StatisticResponse;

    getEbitdaTtm(): number;
    setEbitdaTtm(value: number): StatisticResponse;

    getNetIncomeTtm(): number;
    setNetIncomeTtm(value: number): StatisticResponse;

    getEpsTtm(): number;
    setEpsTtm(value: number): StatisticResponse;

    getDilutedEpsTtm(): number;
    setDilutedEpsTtm(value: number): StatisticResponse;

    getFreeCashFlowTtm(): number;
    setFreeCashFlowTtm(value: number): StatisticResponse;

    getFiveYearAnnualRevenueGrowthRate(): number;
    setFiveYearAnnualRevenueGrowthRate(value: number): StatisticResponse;

    getThreeYearAnnualRevenueGrowthRate(): number;
    setThreeYearAnnualRevenueGrowthRate(value: number): StatisticResponse;

    getPeRatioTtm(): number;
    setPeRatioTtm(value: number): StatisticResponse;

    getPriceToSalesTtm(): number;
    setPriceToSalesTtm(value: number): StatisticResponse;

    getPriceToBookTtm(): number;
    setPriceToBookTtm(value: number): StatisticResponse;

    getPriceToFreeCashFlowTtm(): number;
    setPriceToFreeCashFlowTtm(value: number): StatisticResponse;

    getTotalEnterpriseValueMrq(): number;
    setTotalEnterpriseValueMrq(value: number): StatisticResponse;

    getEvToEbitdaMrq(): number;
    setEvToEbitdaMrq(value: number): StatisticResponse;

    getNetMarginMrq(): number;
    setNetMarginMrq(value: number): StatisticResponse;

    getNetInterestMarginMrq(): number;
    setNetInterestMarginMrq(value: number): StatisticResponse;

    getRoe(): number;
    setRoe(value: number): StatisticResponse;

    getRoa(): number;
    setRoa(value: number): StatisticResponse;

    getRoic(): number;
    setRoic(value: number): StatisticResponse;

    getTotalDebtMrq(): number;
    setTotalDebtMrq(value: number): StatisticResponse;

    getTotalDebtToEquityMrq(): number;
    setTotalDebtToEquityMrq(value: number): StatisticResponse;

    getTotalDebtToEbitdaMrq(): number;
    setTotalDebtToEbitdaMrq(value: number): StatisticResponse;

    getFreeCashFlowToPrice(): number;
    setFreeCashFlowToPrice(value: number): StatisticResponse;

    getNetDebtToEbitda(): number;
    setNetDebtToEbitda(value: number): StatisticResponse;

    getCurrentRatioMrq(): number;
    setCurrentRatioMrq(value: number): StatisticResponse;

    getFixedChargeCoverageRatioFy(): number;
    setFixedChargeCoverageRatioFy(value: number): StatisticResponse;

    getDividendYieldDailyTtm(): number;
    setDividendYieldDailyTtm(value: number): StatisticResponse;

    getDividendRateTtm(): number;
    setDividendRateTtm(value: number): StatisticResponse;

    getDividendsPerShare(): number;
    setDividendsPerShare(value: number): StatisticResponse;

    getFiveYearsAverageDividendYield(): number;
    setFiveYearsAverageDividendYield(value: number): StatisticResponse;

    getFiveYearAnnualDividendGrowthRate(): number;
    setFiveYearAnnualDividendGrowthRate(value: number): StatisticResponse;

    getDividendPayoutRatioFy(): number;
    setDividendPayoutRatioFy(value: number): StatisticResponse;

    getBuyBackTtm(): number;
    setBuyBackTtm(value: number): StatisticResponse;

    getOneYearAnnualRevenueGrowthRate(): number;
    setOneYearAnnualRevenueGrowthRate(value: number): StatisticResponse;

    getDomicileIndicatorCode(): string;
    setDomicileIndicatorCode(value: string): StatisticResponse;

    getAdrToCommonShareRatio(): number;
    setAdrToCommonShareRatio(value: number): StatisticResponse;

    getNumberOfEmployees(): number;
    setNumberOfEmployees(value: number): StatisticResponse;

    getExDividendDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExDividendDate(value?: google_protobuf_timestamp_pb.Timestamp): StatisticResponse;
    hasExDividendDate(): boolean;
    clearExDividendDate(): StatisticResponse;

    getFiscalPeriodStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFiscalPeriodStartDate(value?: google_protobuf_timestamp_pb.Timestamp): StatisticResponse;
    hasFiscalPeriodStartDate(): boolean;
    clearFiscalPeriodStartDate(): StatisticResponse;

    getFiscalPeriodEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFiscalPeriodEndDate(value?: google_protobuf_timestamp_pb.Timestamp): StatisticResponse;
    hasFiscalPeriodEndDate(): boolean;
    clearFiscalPeriodEndDate(): StatisticResponse;

    getRevenueChangeFiveYears(): number;
    setRevenueChangeFiveYears(value: number): StatisticResponse;

    getEpsChangeFiveYears(): number;
    setEpsChangeFiveYears(value: number): StatisticResponse;

    getEbitdaChangeFiveYears(): number;
    setEbitdaChangeFiveYears(value: number): StatisticResponse;

    getTotalDebtChangeFiveYears(): number;
    setTotalDebtChangeFiveYears(value: number): StatisticResponse;

    getEvToSales(): number;
    setEvToSales(value: number): StatisticResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatisticResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StatisticResponse): StatisticResponse.AsObject;
    static serializeBinaryToWriter(message: StatisticResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatisticResponse;
    static deserializeBinaryFromReader(message: StatisticResponse, reader: jspb.BinaryReader): StatisticResponse;
  }

  export namespace StatisticResponse {
    export type AsObject = {
      assetUid: string,
      currency: string,
      marketCapitalization: number,
      highPriceLast52Weeks: number,
      lowPriceLast52Weeks: number,
      averageDailyVolumeLast10Days: number,
      averageDailyVolumeLast4Weeks: number,
      beta: number,
      freeFloat: number,
      forwardAnnualDividendYield: number,
      sharesOutstanding: number,
      revenueTtm: number,
      ebitdaTtm: number,
      netIncomeTtm: number,
      epsTtm: number,
      dilutedEpsTtm: number,
      freeCashFlowTtm: number,
      fiveYearAnnualRevenueGrowthRate: number,
      threeYearAnnualRevenueGrowthRate: number,
      peRatioTtm: number,
      priceToSalesTtm: number,
      priceToBookTtm: number,
      priceToFreeCashFlowTtm: number,
      totalEnterpriseValueMrq: number,
      evToEbitdaMrq: number,
      netMarginMrq: number,
      netInterestMarginMrq: number,
      roe: number,
      roa: number,
      roic: number,
      totalDebtMrq: number,
      totalDebtToEquityMrq: number,
      totalDebtToEbitdaMrq: number,
      freeCashFlowToPrice: number,
      netDebtToEbitda: number,
      currentRatioMrq: number,
      fixedChargeCoverageRatioFy: number,
      dividendYieldDailyTtm: number,
      dividendRateTtm: number,
      dividendsPerShare: number,
      fiveYearsAverageDividendYield: number,
      fiveYearAnnualDividendGrowthRate: number,
      dividendPayoutRatioFy: number,
      buyBackTtm: number,
      oneYearAnnualRevenueGrowthRate: number,
      domicileIndicatorCode: string,
      adrToCommonShareRatio: number,
      numberOfEmployees: number,
      exDividendDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      fiscalPeriodStartDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      fiscalPeriodEndDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      revenueChangeFiveYears: number,
      epsChangeFiveYears: number,
      ebitdaChangeFiveYears: number,
      totalDebtChangeFiveYears: number,
      evToSales: number,
    }
  }

}

export class GetAssetReportsRequest extends jspb.Message {
  getInstrumentId(): string;
  setInstrumentId(value: string): GetAssetReportsRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetAssetReportsRequest;
  hasFrom(): boolean;
  clearFrom(): GetAssetReportsRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetAssetReportsRequest;
  hasTo(): boolean;
  clearTo(): GetAssetReportsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssetReportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssetReportsRequest): GetAssetReportsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAssetReportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssetReportsRequest;
  static deserializeBinaryFromReader(message: GetAssetReportsRequest, reader: jspb.BinaryReader): GetAssetReportsRequest;
}

export namespace GetAssetReportsRequest {
  export type AsObject = {
    instrumentId: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum FromCase { 
    _FROM_NOT_SET = 0,
    FROM = 2,
  }

  export enum ToCase { 
    _TO_NOT_SET = 0,
    TO = 3,
  }
}

export class GetAssetReportsResponse extends jspb.Message {
  getEventsList(): Array<GetAssetReportsResponse.GetAssetReportsEvent>;
  setEventsList(value: Array<GetAssetReportsResponse.GetAssetReportsEvent>): GetAssetReportsResponse;
  clearEventsList(): GetAssetReportsResponse;
  addEvents(value?: GetAssetReportsResponse.GetAssetReportsEvent, index?: number): GetAssetReportsResponse.GetAssetReportsEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssetReportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssetReportsResponse): GetAssetReportsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAssetReportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssetReportsResponse;
  static deserializeBinaryFromReader(message: GetAssetReportsResponse, reader: jspb.BinaryReader): GetAssetReportsResponse;
}

export namespace GetAssetReportsResponse {
  export type AsObject = {
    eventsList: Array<GetAssetReportsResponse.GetAssetReportsEvent.AsObject>,
  }

  export class GetAssetReportsEvent extends jspb.Message {
    getInstrumentId(): string;
    setInstrumentId(value: string): GetAssetReportsEvent;

    getReportDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReportDate(value?: google_protobuf_timestamp_pb.Timestamp): GetAssetReportsEvent;
    hasReportDate(): boolean;
    clearReportDate(): GetAssetReportsEvent;

    getPeriodYear(): number;
    setPeriodYear(value: number): GetAssetReportsEvent;

    getPeriodNum(): number;
    setPeriodNum(value: number): GetAssetReportsEvent;

    getPeriodType(): GetAssetReportsResponse.AssetReportPeriodType;
    setPeriodType(value: GetAssetReportsResponse.AssetReportPeriodType): GetAssetReportsEvent;

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetAssetReportsEvent;
    hasCreatedAt(): boolean;
    clearCreatedAt(): GetAssetReportsEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAssetReportsEvent.AsObject;
    static toObject(includeInstance: boolean, msg: GetAssetReportsEvent): GetAssetReportsEvent.AsObject;
    static serializeBinaryToWriter(message: GetAssetReportsEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAssetReportsEvent;
    static deserializeBinaryFromReader(message: GetAssetReportsEvent, reader: jspb.BinaryReader): GetAssetReportsEvent;
  }

  export namespace GetAssetReportsEvent {
    export type AsObject = {
      instrumentId: string,
      reportDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      periodYear: number,
      periodNum: number,
      periodType: GetAssetReportsResponse.AssetReportPeriodType,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }


  export enum AssetReportPeriodType { 
    PERIOD_TYPE_UNSPECIFIED = 0,
    PERIOD_TYPE_QUARTER = 1,
    PERIOD_TYPE_SEMIANNUAL = 2,
    PERIOD_TYPE_ANNUAL = 3,
  }
}

export class GetConsensusForecastsRequest extends jspb.Message {
  getPaging(): tinvest_common_pb.Page | undefined;
  setPaging(value?: tinvest_common_pb.Page): GetConsensusForecastsRequest;
  hasPaging(): boolean;
  clearPaging(): GetConsensusForecastsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsensusForecastsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsensusForecastsRequest): GetConsensusForecastsRequest.AsObject;
  static serializeBinaryToWriter(message: GetConsensusForecastsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsensusForecastsRequest;
  static deserializeBinaryFromReader(message: GetConsensusForecastsRequest, reader: jspb.BinaryReader): GetConsensusForecastsRequest;
}

export namespace GetConsensusForecastsRequest {
  export type AsObject = {
    paging?: tinvest_common_pb.Page.AsObject,
  }

  export enum PagingCase { 
    _PAGING_NOT_SET = 0,
    PAGING = 1,
  }
}

export class GetConsensusForecastsResponse extends jspb.Message {
  getItemsList(): Array<GetConsensusForecastsResponse.ConsensusForecastsItem>;
  setItemsList(value: Array<GetConsensusForecastsResponse.ConsensusForecastsItem>): GetConsensusForecastsResponse;
  clearItemsList(): GetConsensusForecastsResponse;
  addItems(value?: GetConsensusForecastsResponse.ConsensusForecastsItem, index?: number): GetConsensusForecastsResponse.ConsensusForecastsItem;

  getPage(): tinvest_common_pb.PageResponse | undefined;
  setPage(value?: tinvest_common_pb.PageResponse): GetConsensusForecastsResponse;
  hasPage(): boolean;
  clearPage(): GetConsensusForecastsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsensusForecastsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsensusForecastsResponse): GetConsensusForecastsResponse.AsObject;
  static serializeBinaryToWriter(message: GetConsensusForecastsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsensusForecastsResponse;
  static deserializeBinaryFromReader(message: GetConsensusForecastsResponse, reader: jspb.BinaryReader): GetConsensusForecastsResponse;
}

export namespace GetConsensusForecastsResponse {
  export type AsObject = {
    itemsList: Array<GetConsensusForecastsResponse.ConsensusForecastsItem.AsObject>,
    page?: tinvest_common_pb.PageResponse.AsObject,
  }

  export class ConsensusForecastsItem extends jspb.Message {
    getUid(): string;
    setUid(value: string): ConsensusForecastsItem;

    getAssetUid(): string;
    setAssetUid(value: string): ConsensusForecastsItem;

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ConsensusForecastsItem;
    hasCreatedAt(): boolean;
    clearCreatedAt(): ConsensusForecastsItem;

    getBestTargetPrice(): tinvest_common_pb.Quotation | undefined;
    setBestTargetPrice(value?: tinvest_common_pb.Quotation): ConsensusForecastsItem;
    hasBestTargetPrice(): boolean;
    clearBestTargetPrice(): ConsensusForecastsItem;

    getBestTargetLow(): tinvest_common_pb.Quotation | undefined;
    setBestTargetLow(value?: tinvest_common_pb.Quotation): ConsensusForecastsItem;
    hasBestTargetLow(): boolean;
    clearBestTargetLow(): ConsensusForecastsItem;

    getBestTargetHigh(): tinvest_common_pb.Quotation | undefined;
    setBestTargetHigh(value?: tinvest_common_pb.Quotation): ConsensusForecastsItem;
    hasBestTargetHigh(): boolean;
    clearBestTargetHigh(): ConsensusForecastsItem;

    getTotalBuyRecommend(): number;
    setTotalBuyRecommend(value: number): ConsensusForecastsItem;

    getTotalHoldRecommend(): number;
    setTotalHoldRecommend(value: number): ConsensusForecastsItem;

    getTotalSellRecommend(): number;
    setTotalSellRecommend(value: number): ConsensusForecastsItem;

    getCurrency(): string;
    setCurrency(value: string): ConsensusForecastsItem;

    getConsensus(): Recommendation;
    setConsensus(value: Recommendation): ConsensusForecastsItem;

    getPrognosisDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPrognosisDate(value?: google_protobuf_timestamp_pb.Timestamp): ConsensusForecastsItem;
    hasPrognosisDate(): boolean;
    clearPrognosisDate(): ConsensusForecastsItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsensusForecastsItem.AsObject;
    static toObject(includeInstance: boolean, msg: ConsensusForecastsItem): ConsensusForecastsItem.AsObject;
    static serializeBinaryToWriter(message: ConsensusForecastsItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsensusForecastsItem;
    static deserializeBinaryFromReader(message: ConsensusForecastsItem, reader: jspb.BinaryReader): ConsensusForecastsItem;
  }

  export namespace ConsensusForecastsItem {
    export type AsObject = {
      uid: string,
      assetUid: string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      bestTargetPrice?: tinvest_common_pb.Quotation.AsObject,
      bestTargetLow?: tinvest_common_pb.Quotation.AsObject,
      bestTargetHigh?: tinvest_common_pb.Quotation.AsObject,
      totalBuyRecommend: number,
      totalHoldRecommend: number,
      totalSellRecommend: number,
      currency: string,
      consensus: Recommendation,
      prognosisDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class GetForecastRequest extends jspb.Message {
  getInstrumentId(): string;
  setInstrumentId(value: string): GetForecastRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetForecastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetForecastRequest): GetForecastRequest.AsObject;
  static serializeBinaryToWriter(message: GetForecastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetForecastRequest;
  static deserializeBinaryFromReader(message: GetForecastRequest, reader: jspb.BinaryReader): GetForecastRequest;
}

export namespace GetForecastRequest {
  export type AsObject = {
    instrumentId: string,
  }
}

export class GetForecastResponse extends jspb.Message {
  getTargetsList(): Array<GetForecastResponse.TargetItem>;
  setTargetsList(value: Array<GetForecastResponse.TargetItem>): GetForecastResponse;
  clearTargetsList(): GetForecastResponse;
  addTargets(value?: GetForecastResponse.TargetItem, index?: number): GetForecastResponse.TargetItem;

  getConsensus(): GetForecastResponse.ConsensusItem | undefined;
  setConsensus(value?: GetForecastResponse.ConsensusItem): GetForecastResponse;
  hasConsensus(): boolean;
  clearConsensus(): GetForecastResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetForecastResponse): GetForecastResponse.AsObject;
  static serializeBinaryToWriter(message: GetForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetForecastResponse;
  static deserializeBinaryFromReader(message: GetForecastResponse, reader: jspb.BinaryReader): GetForecastResponse;
}

export namespace GetForecastResponse {
  export type AsObject = {
    targetsList: Array<GetForecastResponse.TargetItem.AsObject>,
    consensus?: GetForecastResponse.ConsensusItem.AsObject,
  }

  export class TargetItem extends jspb.Message {
    getUid(): string;
    setUid(value: string): TargetItem;

    getTicker(): string;
    setTicker(value: string): TargetItem;

    getCompany(): string;
    setCompany(value: string): TargetItem;

    getRecommendation(): Recommendation;
    setRecommendation(value: Recommendation): TargetItem;

    getRecommendationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRecommendationDate(value?: google_protobuf_timestamp_pb.Timestamp): TargetItem;
    hasRecommendationDate(): boolean;
    clearRecommendationDate(): TargetItem;

    getCurrency(): string;
    setCurrency(value: string): TargetItem;

    getCurrentPrice(): tinvest_common_pb.Quotation | undefined;
    setCurrentPrice(value?: tinvest_common_pb.Quotation): TargetItem;
    hasCurrentPrice(): boolean;
    clearCurrentPrice(): TargetItem;

    getTargetPrice(): tinvest_common_pb.Quotation | undefined;
    setTargetPrice(value?: tinvest_common_pb.Quotation): TargetItem;
    hasTargetPrice(): boolean;
    clearTargetPrice(): TargetItem;

    getPriceChange(): tinvest_common_pb.Quotation | undefined;
    setPriceChange(value?: tinvest_common_pb.Quotation): TargetItem;
    hasPriceChange(): boolean;
    clearPriceChange(): TargetItem;

    getPriceChangeRel(): tinvest_common_pb.Quotation | undefined;
    setPriceChangeRel(value?: tinvest_common_pb.Quotation): TargetItem;
    hasPriceChangeRel(): boolean;
    clearPriceChangeRel(): TargetItem;

    getShowName(): string;
    setShowName(value: string): TargetItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetItem.AsObject;
    static toObject(includeInstance: boolean, msg: TargetItem): TargetItem.AsObject;
    static serializeBinaryToWriter(message: TargetItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetItem;
    static deserializeBinaryFromReader(message: TargetItem, reader: jspb.BinaryReader): TargetItem;
  }

  export namespace TargetItem {
    export type AsObject = {
      uid: string,
      ticker: string,
      company: string,
      recommendation: Recommendation,
      recommendationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      currency: string,
      currentPrice?: tinvest_common_pb.Quotation.AsObject,
      targetPrice?: tinvest_common_pb.Quotation.AsObject,
      priceChange?: tinvest_common_pb.Quotation.AsObject,
      priceChangeRel?: tinvest_common_pb.Quotation.AsObject,
      showName: string,
    }
  }


  export class ConsensusItem extends jspb.Message {
    getUid(): string;
    setUid(value: string): ConsensusItem;

    getTicker(): string;
    setTicker(value: string): ConsensusItem;

    getRecommendation(): Recommendation;
    setRecommendation(value: Recommendation): ConsensusItem;

    getCurrency(): string;
    setCurrency(value: string): ConsensusItem;

    getCurrentPrice(): tinvest_common_pb.Quotation | undefined;
    setCurrentPrice(value?: tinvest_common_pb.Quotation): ConsensusItem;
    hasCurrentPrice(): boolean;
    clearCurrentPrice(): ConsensusItem;

    getConsensus(): tinvest_common_pb.Quotation | undefined;
    setConsensus(value?: tinvest_common_pb.Quotation): ConsensusItem;
    hasConsensus(): boolean;
    clearConsensus(): ConsensusItem;

    getMinTarget(): tinvest_common_pb.Quotation | undefined;
    setMinTarget(value?: tinvest_common_pb.Quotation): ConsensusItem;
    hasMinTarget(): boolean;
    clearMinTarget(): ConsensusItem;

    getMaxTarget(): tinvest_common_pb.Quotation | undefined;
    setMaxTarget(value?: tinvest_common_pb.Quotation): ConsensusItem;
    hasMaxTarget(): boolean;
    clearMaxTarget(): ConsensusItem;

    getPriceChange(): tinvest_common_pb.Quotation | undefined;
    setPriceChange(value?: tinvest_common_pb.Quotation): ConsensusItem;
    hasPriceChange(): boolean;
    clearPriceChange(): ConsensusItem;

    getPriceChangeRel(): tinvest_common_pb.Quotation | undefined;
    setPriceChangeRel(value?: tinvest_common_pb.Quotation): ConsensusItem;
    hasPriceChangeRel(): boolean;
    clearPriceChangeRel(): ConsensusItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsensusItem.AsObject;
    static toObject(includeInstance: boolean, msg: ConsensusItem): ConsensusItem.AsObject;
    static serializeBinaryToWriter(message: ConsensusItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsensusItem;
    static deserializeBinaryFromReader(message: ConsensusItem, reader: jspb.BinaryReader): ConsensusItem;
  }

  export namespace ConsensusItem {
    export type AsObject = {
      uid: string,
      ticker: string,
      recommendation: Recommendation,
      currency: string,
      currentPrice?: tinvest_common_pb.Quotation.AsObject,
      consensus?: tinvest_common_pb.Quotation.AsObject,
      minTarget?: tinvest_common_pb.Quotation.AsObject,
      maxTarget?: tinvest_common_pb.Quotation.AsObject,
      priceChange?: tinvest_common_pb.Quotation.AsObject,
      priceChangeRel?: tinvest_common_pb.Quotation.AsObject,
    }
  }

}

export class RiskRatesRequest extends jspb.Message {
  getInstrumentIdList(): Array<string>;
  setInstrumentIdList(value: Array<string>): RiskRatesRequest;
  clearInstrumentIdList(): RiskRatesRequest;
  addInstrumentId(value: string, index?: number): RiskRatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiskRatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RiskRatesRequest): RiskRatesRequest.AsObject;
  static serializeBinaryToWriter(message: RiskRatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiskRatesRequest;
  static deserializeBinaryFromReader(message: RiskRatesRequest, reader: jspb.BinaryReader): RiskRatesRequest;
}

export namespace RiskRatesRequest {
  export type AsObject = {
    instrumentIdList: Array<string>,
  }
}

export class RiskRatesResponse extends jspb.Message {
  getInstrumentRiskRatesList(): Array<RiskRatesResponse.RiskRateResult>;
  setInstrumentRiskRatesList(value: Array<RiskRatesResponse.RiskRateResult>): RiskRatesResponse;
  clearInstrumentRiskRatesList(): RiskRatesResponse;
  addInstrumentRiskRates(value?: RiskRatesResponse.RiskRateResult, index?: number): RiskRatesResponse.RiskRateResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiskRatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RiskRatesResponse): RiskRatesResponse.AsObject;
  static serializeBinaryToWriter(message: RiskRatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiskRatesResponse;
  static deserializeBinaryFromReader(message: RiskRatesResponse, reader: jspb.BinaryReader): RiskRatesResponse;
}

export namespace RiskRatesResponse {
  export type AsObject = {
    instrumentRiskRatesList: Array<RiskRatesResponse.RiskRateResult.AsObject>,
  }

  export class RiskRateResult extends jspb.Message {
    getInstrumentUid(): string;
    setInstrumentUid(value: string): RiskRateResult;

    getShortRiskRate(): RiskRatesResponse.RiskRate | undefined;
    setShortRiskRate(value?: RiskRatesResponse.RiskRate): RiskRateResult;
    hasShortRiskRate(): boolean;
    clearShortRiskRate(): RiskRateResult;

    getLongRiskRate(): RiskRatesResponse.RiskRate | undefined;
    setLongRiskRate(value?: RiskRatesResponse.RiskRate): RiskRateResult;
    hasLongRiskRate(): boolean;
    clearLongRiskRate(): RiskRateResult;

    getShortRiskRatesList(): Array<RiskRatesResponse.RiskRate>;
    setShortRiskRatesList(value: Array<RiskRatesResponse.RiskRate>): RiskRateResult;
    clearShortRiskRatesList(): RiskRateResult;
    addShortRiskRates(value?: RiskRatesResponse.RiskRate, index?: number): RiskRatesResponse.RiskRate;

    getLongRiskRatesList(): Array<RiskRatesResponse.RiskRate>;
    setLongRiskRatesList(value: Array<RiskRatesResponse.RiskRate>): RiskRateResult;
    clearLongRiskRatesList(): RiskRateResult;
    addLongRiskRates(value?: RiskRatesResponse.RiskRate, index?: number): RiskRatesResponse.RiskRate;

    getError(): string;
    setError(value: string): RiskRateResult;
    hasError(): boolean;
    clearError(): RiskRateResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RiskRateResult.AsObject;
    static toObject(includeInstance: boolean, msg: RiskRateResult): RiskRateResult.AsObject;
    static serializeBinaryToWriter(message: RiskRateResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RiskRateResult;
    static deserializeBinaryFromReader(message: RiskRateResult, reader: jspb.BinaryReader): RiskRateResult;
  }

  export namespace RiskRateResult {
    export type AsObject = {
      instrumentUid: string,
      shortRiskRate?: RiskRatesResponse.RiskRate.AsObject,
      longRiskRate?: RiskRatesResponse.RiskRate.AsObject,
      shortRiskRatesList: Array<RiskRatesResponse.RiskRate.AsObject>,
      longRiskRatesList: Array<RiskRatesResponse.RiskRate.AsObject>,
      error?: string,
    }

    export enum ShortRiskRateCase { 
      _SHORT_RISK_RATE_NOT_SET = 0,
      SHORT_RISK_RATE = 2,
    }

    export enum LongRiskRateCase { 
      _LONG_RISK_RATE_NOT_SET = 0,
      LONG_RISK_RATE = 3,
    }

    export enum ErrorCase { 
      _ERROR_NOT_SET = 0,
      ERROR = 9,
    }
  }


  export class RiskRate extends jspb.Message {
    getRiskLevelCode(): string;
    setRiskLevelCode(value: string): RiskRate;

    getValue(): tinvest_common_pb.Quotation | undefined;
    setValue(value?: tinvest_common_pb.Quotation): RiskRate;
    hasValue(): boolean;
    clearValue(): RiskRate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RiskRate.AsObject;
    static toObject(includeInstance: boolean, msg: RiskRate): RiskRate.AsObject;
    static serializeBinaryToWriter(message: RiskRate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RiskRate;
    static deserializeBinaryFromReader(message: RiskRate, reader: jspb.BinaryReader): RiskRate;
  }

  export namespace RiskRate {
    export type AsObject = {
      riskLevelCode: string,
      value?: tinvest_common_pb.Quotation.AsObject,
    }
  }

}

export class TradingInterval extends jspb.Message {
  getType(): string;
  setType(value: string): TradingInterval;

  getInterval(): TradingInterval.TimeInterval | undefined;
  setInterval(value?: TradingInterval.TimeInterval): TradingInterval;
  hasInterval(): boolean;
  clearInterval(): TradingInterval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingInterval.AsObject;
  static toObject(includeInstance: boolean, msg: TradingInterval): TradingInterval.AsObject;
  static serializeBinaryToWriter(message: TradingInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingInterval;
  static deserializeBinaryFromReader(message: TradingInterval, reader: jspb.BinaryReader): TradingInterval;
}

export namespace TradingInterval {
  export type AsObject = {
    type: string,
    interval?: TradingInterval.TimeInterval.AsObject,
  }

  export class TimeInterval extends jspb.Message {
    getStartTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTs(value?: google_protobuf_timestamp_pb.Timestamp): TimeInterval;
    hasStartTs(): boolean;
    clearStartTs(): TimeInterval;

    getEndTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTs(value?: google_protobuf_timestamp_pb.Timestamp): TimeInterval;
    hasEndTs(): boolean;
    clearEndTs(): TimeInterval;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeInterval.AsObject;
    static toObject(includeInstance: boolean, msg: TimeInterval): TimeInterval.AsObject;
    static serializeBinaryToWriter(message: TimeInterval, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeInterval;
    static deserializeBinaryFromReader(message: TimeInterval, reader: jspb.BinaryReader): TimeInterval;
  }

  export namespace TimeInterval {
    export type AsObject = {
      startTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      endTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class GetInsiderDealsRequest extends jspb.Message {
  getInstrumentId(): string;
  setInstrumentId(value: string): GetInsiderDealsRequest;

  getLimit(): number;
  setLimit(value: number): GetInsiderDealsRequest;

  getNextCursor(): string;
  setNextCursor(value: string): GetInsiderDealsRequest;
  hasNextCursor(): boolean;
  clearNextCursor(): GetInsiderDealsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInsiderDealsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInsiderDealsRequest): GetInsiderDealsRequest.AsObject;
  static serializeBinaryToWriter(message: GetInsiderDealsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInsiderDealsRequest;
  static deserializeBinaryFromReader(message: GetInsiderDealsRequest, reader: jspb.BinaryReader): GetInsiderDealsRequest;
}

export namespace GetInsiderDealsRequest {
  export type AsObject = {
    instrumentId: string,
    limit: number,
    nextCursor?: string,
  }

  export enum NextCursorCase { 
    _NEXT_CURSOR_NOT_SET = 0,
    NEXT_CURSOR = 3,
  }
}

export class GetInsiderDealsResponse extends jspb.Message {
  getInsiderDealsList(): Array<GetInsiderDealsResponse.InsiderDeal>;
  setInsiderDealsList(value: Array<GetInsiderDealsResponse.InsiderDeal>): GetInsiderDealsResponse;
  clearInsiderDealsList(): GetInsiderDealsResponse;
  addInsiderDeals(value?: GetInsiderDealsResponse.InsiderDeal, index?: number): GetInsiderDealsResponse.InsiderDeal;

  getNextCursor(): string;
  setNextCursor(value: string): GetInsiderDealsResponse;
  hasNextCursor(): boolean;
  clearNextCursor(): GetInsiderDealsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInsiderDealsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInsiderDealsResponse): GetInsiderDealsResponse.AsObject;
  static serializeBinaryToWriter(message: GetInsiderDealsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInsiderDealsResponse;
  static deserializeBinaryFromReader(message: GetInsiderDealsResponse, reader: jspb.BinaryReader): GetInsiderDealsResponse;
}

export namespace GetInsiderDealsResponse {
  export type AsObject = {
    insiderDealsList: Array<GetInsiderDealsResponse.InsiderDeal.AsObject>,
    nextCursor?: string,
  }

  export class InsiderDeal extends jspb.Message {
    getTradeId(): number;
    setTradeId(value: number): InsiderDeal;

    getDirection(): GetInsiderDealsResponse.TradeDirection;
    setDirection(value: GetInsiderDealsResponse.TradeDirection): InsiderDeal;

    getCurrency(): string;
    setCurrency(value: string): InsiderDeal;

    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): InsiderDeal;
    hasDate(): boolean;
    clearDate(): InsiderDeal;

    getQuantity(): number;
    setQuantity(value: number): InsiderDeal;

    getPrice(): tinvest_common_pb.Quotation | undefined;
    setPrice(value?: tinvest_common_pb.Quotation): InsiderDeal;
    hasPrice(): boolean;
    clearPrice(): InsiderDeal;

    getInstrumentUid(): string;
    setInstrumentUid(value: string): InsiderDeal;

    getTicker(): string;
    setTicker(value: string): InsiderDeal;

    getInvestorName(): string;
    setInvestorName(value: string): InsiderDeal;

    getInvestorPosition(): string;
    setInvestorPosition(value: string): InsiderDeal;

    getPercentage(): number;
    setPercentage(value: number): InsiderDeal;

    getIsOptionExecution(): boolean;
    setIsOptionExecution(value: boolean): InsiderDeal;

    getDisclosureDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDisclosureDate(value?: google_protobuf_timestamp_pb.Timestamp): InsiderDeal;
    hasDisclosureDate(): boolean;
    clearDisclosureDate(): InsiderDeal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InsiderDeal.AsObject;
    static toObject(includeInstance: boolean, msg: InsiderDeal): InsiderDeal.AsObject;
    static serializeBinaryToWriter(message: InsiderDeal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InsiderDeal;
    static deserializeBinaryFromReader(message: InsiderDeal, reader: jspb.BinaryReader): InsiderDeal;
  }

  export namespace InsiderDeal {
    export type AsObject = {
      tradeId: number,
      direction: GetInsiderDealsResponse.TradeDirection,
      currency: string,
      date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      quantity: number,
      price?: tinvest_common_pb.Quotation.AsObject,
      instrumentUid: string,
      ticker: string,
      investorName: string,
      investorPosition: string,
      percentage: number,
      isOptionExecution: boolean,
      disclosureDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }


  export enum TradeDirection { 
    TRADE_DIRECTION_UNSPECIFIED = 0,
    TRADE_DIRECTION_BUY = 1,
    TRADE_DIRECTION_SELL = 2,
    TRADE_DIRECTION_INCREASE = 3,
    TRADE_DIRECTION_DECREASE = 4,
  }

  export enum NextCursorCase { 
    _NEXT_CURSOR_NOT_SET = 0,
    NEXT_CURSOR = 2,
  }
}

export class DfasRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DfasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DfasRequest): DfasRequest.AsObject;
  static serializeBinaryToWriter(message: DfasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DfasRequest;
  static deserializeBinaryFromReader(message: DfasRequest, reader: jspb.BinaryReader): DfasRequest;
}

export namespace DfasRequest {
  export type AsObject = {
  }
}

export class DfaResponse extends jspb.Message {
  getUid(): string;
  setUid(value: string): DfaResponse;

  getTicker(): string;
  setTicker(value: string): DfaResponse;

  getName(): string;
  setName(value: string): DfaResponse;

  getPositionUid(): string;
  setPositionUid(value: string): DfaResponse;

  getMinPriceIncrement(): tinvest_common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: tinvest_common_pb.Quotation): DfaResponse;
  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): DfaResponse;

  getLot(): number;
  setLot(value: number): DfaResponse;

  getNominal(): tinvest_common_pb.MoneyValue | undefined;
  setNominal(value?: tinvest_common_pb.MoneyValue): DfaResponse;
  hasNominal(): boolean;
  clearNominal(): DfaResponse;

  getCurrency(): string;
  setCurrency(value: string): DfaResponse;

  getMaturityDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMaturityDate(value?: google_protobuf_timestamp_pb.Timestamp): DfaResponse;
  hasMaturityDate(): boolean;
  clearMaturityDate(): DfaResponse;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): DfaResponse;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): DfaResponse;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): DfaResponse;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): DfaResponse;

  getLimitOrderAvailableFlag(): boolean;
  setLimitOrderAvailableFlag(value: boolean): DfaResponse;

  getMarketOrderAvailableFlag(): boolean;
  setMarketOrderAvailableFlag(value: boolean): DfaResponse;

  getBestpriceOrderAvailableFlag(): boolean;
  setBestpriceOrderAvailableFlag(value: boolean): DfaResponse;

  getForIisFlag(): boolean;
  setForIisFlag(value: boolean): DfaResponse;

  getForQualInvestorFlag(): boolean;
  setForQualInvestorFlag(value: boolean): DfaResponse;

  getType(): string;
  setType(value: string): DfaResponse;

  getBasicAssetsList(): Array<DfaResponse.BasicAsset>;
  setBasicAssetsList(value: Array<DfaResponse.BasicAsset>): DfaResponse;
  clearBasicAssetsList(): DfaResponse;
  addBasicAssets(value?: DfaResponse.BasicAsset, index?: number): DfaResponse.BasicAsset;

  getForecastYield(): DfaResponse.ForecastYield | undefined;
  setForecastYield(value?: DfaResponse.ForecastYield): DfaResponse;
  hasForecastYield(): boolean;
  clearForecastYield(): DfaResponse;

  getYieldToMaturity(): tinvest_common_pb.Quotation | undefined;
  setYieldToMaturity(value?: tinvest_common_pb.Quotation): DfaResponse;
  hasYieldToMaturity(): boolean;
  clearYieldToMaturity(): DfaResponse;

  getCouponValue(): tinvest_common_pb.Quotation | undefined;
  setCouponValue(value?: tinvest_common_pb.Quotation): DfaResponse;
  hasCouponValue(): boolean;
  clearCouponValue(): DfaResponse;

  getCouponPaymentFrequency(): number;
  setCouponPaymentFrequency(value: number): DfaResponse;

  getCouponPaymentDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCouponPaymentDate(value?: google_protobuf_timestamp_pb.Timestamp): DfaResponse;
  hasCouponPaymentDate(): boolean;
  clearCouponPaymentDate(): DfaResponse;

  getAciValue(): tinvest_common_pb.Quotation | undefined;
  setAciValue(value?: tinvest_common_pb.Quotation): DfaResponse;
  hasAciValue(): boolean;
  clearAciValue(): DfaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DfaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DfaResponse): DfaResponse.AsObject;
  static serializeBinaryToWriter(message: DfaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DfaResponse;
  static deserializeBinaryFromReader(message: DfaResponse, reader: jspb.BinaryReader): DfaResponse;
}

export namespace DfaResponse {
  export type AsObject = {
    uid: string,
    ticker: string,
    name: string,
    positionUid: string,
    minPriceIncrement?: tinvest_common_pb.Quotation.AsObject,
    lot: number,
    nominal?: tinvest_common_pb.MoneyValue.AsObject,
    currency: string,
    maturityDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    shortEnabledFlag: boolean,
    apiTradeAvailableFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    limitOrderAvailableFlag: boolean,
    marketOrderAvailableFlag: boolean,
    bestpriceOrderAvailableFlag: boolean,
    forIisFlag: boolean,
    forQualInvestorFlag: boolean,
    type: string,
    basicAssetsList: Array<DfaResponse.BasicAsset.AsObject>,
    forecastYield?: DfaResponse.ForecastYield.AsObject,
    yieldToMaturity?: tinvest_common_pb.Quotation.AsObject,
    couponValue?: tinvest_common_pb.Quotation.AsObject,
    couponPaymentFrequency: number,
    couponPaymentDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    aciValue?: tinvest_common_pb.Quotation.AsObject,
  }

  export class BasicAsset extends jspb.Message {
    getUid(): string;
    setUid(value: string): BasicAsset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BasicAsset.AsObject;
    static toObject(includeInstance: boolean, msg: BasicAsset): BasicAsset.AsObject;
    static serializeBinaryToWriter(message: BasicAsset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BasicAsset;
    static deserializeBinaryFromReader(message: BasicAsset, reader: jspb.BinaryReader): BasicAsset;
  }

  export namespace BasicAsset {
    export type AsObject = {
      uid: string,
    }
  }


  export class ForecastYield extends jspb.Message {
    getMinValue(): tinvest_common_pb.Quotation | undefined;
    setMinValue(value?: tinvest_common_pb.Quotation): ForecastYield;
    hasMinValue(): boolean;
    clearMinValue(): ForecastYield;

    getMaxValue(): tinvest_common_pb.Quotation | undefined;
    setMaxValue(value?: tinvest_common_pb.Quotation): ForecastYield;
    hasMaxValue(): boolean;
    clearMaxValue(): ForecastYield;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ForecastYield.AsObject;
    static toObject(includeInstance: boolean, msg: ForecastYield): ForecastYield.AsObject;
    static serializeBinaryToWriter(message: ForecastYield, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ForecastYield;
    static deserializeBinaryFromReader(message: ForecastYield, reader: jspb.BinaryReader): ForecastYield;
  }

  export namespace ForecastYield {
    export type AsObject = {
      minValue?: tinvest_common_pb.Quotation.AsObject,
      maxValue?: tinvest_common_pb.Quotation.AsObject,
    }
  }

}

export class DfasResponse extends jspb.Message {
  getInstrumentsList(): Array<DfaResponse>;
  setInstrumentsList(value: Array<DfaResponse>): DfasResponse;
  clearInstrumentsList(): DfasResponse;
  addInstruments(value?: DfaResponse, index?: number): DfaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DfasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DfasResponse): DfasResponse.AsObject;
  static serializeBinaryToWriter(message: DfasResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DfasResponse;
  static deserializeBinaryFromReader(message: DfasResponse, reader: jspb.BinaryReader): DfasResponse;
}

export namespace DfasResponse {
  export type AsObject = {
    instrumentsList: Array<DfaResponse.AsObject>,
  }
}

export enum CouponType { 
  COUPON_TYPE_UNSPECIFIED = 0,
  COUPON_TYPE_CONSTANT = 1,
  COUPON_TYPE_FLOATING = 2,
  COUPON_TYPE_DISCOUNT = 3,
  COUPON_TYPE_MORTGAGE = 4,
  COUPON_TYPE_FIX = 5,
  COUPON_TYPE_VARIABLE = 6,
  COUPON_TYPE_OTHER = 7,
}
export enum OptionDirection { 
  OPTION_DIRECTION_UNSPECIFIED = 0,
  OPTION_DIRECTION_PUT = 1,
  OPTION_DIRECTION_CALL = 2,
}
export enum OptionPaymentType { 
  OPTION_PAYMENT_TYPE_UNSPECIFIED = 0,
  OPTION_PAYMENT_TYPE_PREMIUM = 1,
  OPTION_PAYMENT_TYPE_MARGINAL = 2,
}
export enum OptionStyle { 
  OPTION_STYLE_UNSPECIFIED = 0,
  OPTION_STYLE_AMERICAN = 1,
  OPTION_STYLE_EUROPEAN = 2,
}
export enum OptionSettlementType { 
  OPTION_EXECUTION_TYPE_UNSPECIFIED = 0,
  OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY = 1,
  OPTION_EXECUTION_TYPE_CASH_SETTLEMENT = 2,
}
export enum InstrumentIdType { 
  INSTRUMENT_ID_UNSPECIFIED = 0,
  INSTRUMENT_ID_TYPE_FIGI = 1,
  INSTRUMENT_ID_TYPE_TICKER = 2,
  INSTRUMENT_ID_TYPE_UID = 3,
  INSTRUMENT_ID_TYPE_POSITION_UID = 4,
  INSTRUMENT_ID_TYPE_ID = 5,
}
export enum ShareType { 
  SHARE_TYPE_UNSPECIFIED = 0,
  SHARE_TYPE_COMMON = 1,
  SHARE_TYPE_PREFERRED = 2,
  SHARE_TYPE_ADR = 3,
  SHARE_TYPE_GDR = 4,
  SHARE_TYPE_MLP = 5,
  SHARE_TYPE_NY_REG_SHRS = 6,
  SHARE_TYPE_CLOSED_END_FUND = 7,
  SHARE_TYPE_REIT = 8,
}
export enum AssetType { 
  ASSET_TYPE_UNSPECIFIED = 0,
  ASSET_TYPE_CURRENCY = 1,
  ASSET_TYPE_COMMODITY = 2,
  ASSET_TYPE_INDEX = 3,
  ASSET_TYPE_SECURITY = 4,
}
export enum StructuredProductType { 
  SP_TYPE_UNSPECIFIED = 0,
  SP_TYPE_DELIVERABLE = 1,
  SP_TYPE_NON_DELIVERABLE = 2,
}
export enum EditFavoritesActionType { 
  EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED = 0,
  EDIT_FAVORITES_ACTION_TYPE_ADD = 1,
  EDIT_FAVORITES_ACTION_TYPE_DEL = 2,
}
export enum Recommendation { 
  RECOMMENDATION_UNSPECIFIED = 0,
  RECOMMENDATION_BUY = 1,
  RECOMMENDATION_HOLD = 2,
  RECOMMENDATION_SELL = 3,
}
export enum RiskLevel { 
  RISK_LEVEL_UNSPECIFIED = 0,
  RISK_LEVEL_LOW = 1,
  RISK_LEVEL_MODERATE = 2,
  RISK_LEVEL_HIGH = 3,
}
export enum BondType { 
  BOND_TYPE_UNSPECIFIED = 0,
  BOND_TYPE_REPLACED = 1,
}
export enum InstrumentExchangeType { 
  INSTRUMENT_EXCHANGE_UNSPECIFIED = 0,
  INSTRUMENT_EXCHANGE_DEALER = 1,
}
