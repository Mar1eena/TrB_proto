import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class ListFilter extends jspb.Message {
  getQ(): string;
  setQ(value: string): ListFilter;

  getLimit(): number;
  setLimit(value: number): ListFilter;

  getOffset(): number;
  setOffset(value: number): ListFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ListFilter): ListFilter.AsObject;
  static serializeBinaryToWriter(message: ListFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFilter;
  static deserializeBinaryFromReader(message: ListFilter, reader: jspb.BinaryReader): ListFilter;
}

export namespace ListFilter {
  export type AsObject = {
    q: string,
    limit: number,
    offset: number,
  }
}

export class ListInstrumentsRequest extends jspb.Message {
  getFilter(): ListFilter | undefined;
  setFilter(value?: ListFilter): ListInstrumentsRequest;
  hasFilter(): boolean;
  clearFilter(): ListInstrumentsRequest;

  getLite(): boolean;
  setLite(value: boolean): ListInstrumentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstrumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstrumentsRequest): ListInstrumentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstrumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstrumentsRequest;
  static deserializeBinaryFromReader(message: ListInstrumentsRequest, reader: jspb.BinaryReader): ListInstrumentsRequest;
}

export namespace ListInstrumentsRequest {
  export type AsObject = {
    filter?: ListFilter.AsObject,
    lite: boolean,
  }
}

export class ListInstrumentsResponse extends jspb.Message {
  getItemsList(): Array<Instrument>;
  setItemsList(value: Array<Instrument>): ListInstrumentsResponse;
  clearItemsList(): ListInstrumentsResponse;
  addItems(value?: Instrument, index?: number): Instrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstrumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstrumentsResponse): ListInstrumentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstrumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstrumentsResponse;
  static deserializeBinaryFromReader(message: ListInstrumentsResponse, reader: jspb.BinaryReader): ListInstrumentsResponse;
}

export namespace ListInstrumentsResponse {
  export type AsObject = {
    itemsList: Array<Instrument.AsObject>,
  }
}

export class Instrument extends jspb.Message {
  getUid(): string;
  setUid(value: string): Instrument;

  getFigi(): string;
  setFigi(value: string): Instrument;

  getTicker(): string;
  setTicker(value: string): Instrument;

  getName(): string;
  setName(value: string): Instrument;

  getClassCode(): string;
  setClassCode(value: string): Instrument;

  getIsin(): string;
  setIsin(value: string): Instrument;

  getLot(): number;
  setLot(value: number): Instrument;

  getCurrency(): string;
  setCurrency(value: string): Instrument;

  getExchange(): string;
  setExchange(value: string): Instrument;

  getSector(): string;
  setSector(value: string): Instrument;

  getTradingStatus(): number;
  setTradingStatus(value: number): Instrument;

  getLiquidityFlag(): boolean;
  setLiquidityFlag(value: boolean): Instrument;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): Instrument;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): Instrument;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): Instrument;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): Instrument;

  getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Instrument;
  hasFirst1minCandleDate(): boolean;
  clearFirst1minCandleDate(): Instrument;

  getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Instrument;
  hasFirst1dayCandleDate(): boolean;
  clearFirst1dayCandleDate(): Instrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instrument.AsObject;
  static toObject(includeInstance: boolean, msg: Instrument): Instrument.AsObject;
  static serializeBinaryToWriter(message: Instrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instrument;
  static deserializeBinaryFromReader(message: Instrument, reader: jspb.BinaryReader): Instrument;
}

export namespace Instrument {
  export type AsObject = {
    uid: string,
    figi: string,
    ticker: string,
    name: string,
    classCode: string,
    isin: string,
    lot: number,
    currency: string,
    exchange: string,
    sector: string,
    tradingStatus: number,
    liquidityFlag: boolean,
    shortEnabledFlag: boolean,
    apiTradeAvailableFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListSchedulerTargetsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSchedulerTargetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSchedulerTargetsRequest): ListSchedulerTargetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSchedulerTargetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSchedulerTargetsRequest;
  static deserializeBinaryFromReader(message: ListSchedulerTargetsRequest, reader: jspb.BinaryReader): ListSchedulerTargetsRequest;
}

export namespace ListSchedulerTargetsRequest {
  export type AsObject = {
  }
}

export class ListSchedulerTargetsResponse extends jspb.Message {
  getItemsList(): Array<SchedulerTarget>;
  setItemsList(value: Array<SchedulerTarget>): ListSchedulerTargetsResponse;
  clearItemsList(): ListSchedulerTargetsResponse;
  addItems(value?: SchedulerTarget, index?: number): SchedulerTarget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSchedulerTargetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSchedulerTargetsResponse): ListSchedulerTargetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSchedulerTargetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSchedulerTargetsResponse;
  static deserializeBinaryFromReader(message: ListSchedulerTargetsResponse, reader: jspb.BinaryReader): ListSchedulerTargetsResponse;
}

export namespace ListSchedulerTargetsResponse {
  export type AsObject = {
    itemsList: Array<SchedulerTarget.AsObject>,
  }
}

export class SchedulerTarget extends jspb.Message {
  getUid(): string;
  setUid(value: string): SchedulerTarget;

  getInterval(): number;
  setInterval(value: number): SchedulerTarget;

  getEnabled(): boolean;
  setEnabled(value: boolean): SchedulerTarget;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SchedulerTarget;
  hasCreatedAt(): boolean;
  clearCreatedAt(): SchedulerTarget;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SchedulerTarget;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): SchedulerTarget;

  getTicker(): string;
  setTicker(value: string): SchedulerTarget;

  getName(): string;
  setName(value: string): SchedulerTarget;

  getFigi(): string;
  setFigi(value: string): SchedulerTarget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulerTarget.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulerTarget): SchedulerTarget.AsObject;
  static serializeBinaryToWriter(message: SchedulerTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulerTarget;
  static deserializeBinaryFromReader(message: SchedulerTarget, reader: jspb.BinaryReader): SchedulerTarget;
}

export namespace SchedulerTarget {
  export type AsObject = {
    uid: string,
    interval: number,
    enabled: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ticker: string,
    name: string,
    figi: string,
  }
}

export class SyncSchedulerTargetsRequest extends jspb.Message {
  getInstrumentsList(): Array<SchedulerTargetInstrument>;
  setInstrumentsList(value: Array<SchedulerTargetInstrument>): SyncSchedulerTargetsRequest;
  clearInstrumentsList(): SyncSchedulerTargetsRequest;
  addInstruments(value?: SchedulerTargetInstrument, index?: number): SchedulerTargetInstrument;

  getAllowEmpty(): boolean;
  setAllowEmpty(value: boolean): SyncSchedulerTargetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncSchedulerTargetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncSchedulerTargetsRequest): SyncSchedulerTargetsRequest.AsObject;
  static serializeBinaryToWriter(message: SyncSchedulerTargetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncSchedulerTargetsRequest;
  static deserializeBinaryFromReader(message: SyncSchedulerTargetsRequest, reader: jspb.BinaryReader): SyncSchedulerTargetsRequest;
}

export namespace SyncSchedulerTargetsRequest {
  export type AsObject = {
    instrumentsList: Array<SchedulerTargetInstrument.AsObject>,
    allowEmpty: boolean,
  }
}

export class SchedulerTargetInstrument extends jspb.Message {
  getUid(): string;
  setUid(value: string): SchedulerTargetInstrument;

  getIntervalsList(): Array<number>;
  setIntervalsList(value: Array<number>): SchedulerTargetInstrument;
  clearIntervalsList(): SchedulerTargetInstrument;
  addIntervals(value: number, index?: number): SchedulerTargetInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulerTargetInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulerTargetInstrument): SchedulerTargetInstrument.AsObject;
  static serializeBinaryToWriter(message: SchedulerTargetInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulerTargetInstrument;
  static deserializeBinaryFromReader(message: SchedulerTargetInstrument, reader: jspb.BinaryReader): SchedulerTargetInstrument;
}

export namespace SchedulerTargetInstrument {
  export type AsObject = {
    uid: string,
    intervalsList: Array<number>,
  }
}

export class SyncSchedulerTargetsResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): SyncSchedulerTargetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncSchedulerTargetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncSchedulerTargetsResponse): SyncSchedulerTargetsResponse.AsObject;
  static serializeBinaryToWriter(message: SyncSchedulerTargetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncSchedulerTargetsResponse;
  static deserializeBinaryFromReader(message: SyncSchedulerTargetsResponse, reader: jspb.BinaryReader): SyncSchedulerTargetsResponse;
}

export namespace SyncSchedulerTargetsResponse {
  export type AsObject = {
    count: number,
  }
}

export class ListLastDownloadsRequest extends jspb.Message {
  getFilter(): ListFilter | undefined;
  setFilter(value?: ListFilter): ListLastDownloadsRequest;
  hasFilter(): boolean;
  clearFilter(): ListLastDownloadsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLastDownloadsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLastDownloadsRequest): ListLastDownloadsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLastDownloadsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLastDownloadsRequest;
  static deserializeBinaryFromReader(message: ListLastDownloadsRequest, reader: jspb.BinaryReader): ListLastDownloadsRequest;
}

export namespace ListLastDownloadsRequest {
  export type AsObject = {
    filter?: ListFilter.AsObject,
  }
}

export class ListLastDownloadsResponse extends jspb.Message {
  getItemsList(): Array<LastDownload>;
  setItemsList(value: Array<LastDownload>): ListLastDownloadsResponse;
  clearItemsList(): ListLastDownloadsResponse;
  addItems(value?: LastDownload, index?: number): LastDownload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLastDownloadsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLastDownloadsResponse): ListLastDownloadsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLastDownloadsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLastDownloadsResponse;
  static deserializeBinaryFromReader(message: ListLastDownloadsResponse, reader: jspb.BinaryReader): ListLastDownloadsResponse;
}

export namespace ListLastDownloadsResponse {
  export type AsObject = {
    itemsList: Array<LastDownload.AsObject>,
  }
}

export class LastDownload extends jspb.Message {
  getUid(): string;
  setUid(value: string): LastDownload;

  getFigi(): string;
  setFigi(value: string): LastDownload;

  getTicker(): string;
  setTicker(value: string): LastDownload;

  getName(): string;
  setName(value: string): LastDownload;

  getInterval(): number;
  setInterval(value: number): LastDownload;

  getLastStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastStart(value?: google_protobuf_timestamp_pb.Timestamp): LastDownload;
  hasLastStart(): boolean;
  clearLastStart(): LastDownload;

  getLastEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEnd(value?: google_protobuf_timestamp_pb.Timestamp): LastDownload;
  hasLastEnd(): boolean;
  clearLastEnd(): LastDownload;

  getHasDownload(): boolean;
  setHasDownload(value: boolean): LastDownload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastDownload.AsObject;
  static toObject(includeInstance: boolean, msg: LastDownload): LastDownload.AsObject;
  static serializeBinaryToWriter(message: LastDownload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastDownload;
  static deserializeBinaryFromReader(message: LastDownload, reader: jspb.BinaryReader): LastDownload;
}

export namespace LastDownload {
  export type AsObject = {
    uid: string,
    figi: string,
    ticker: string,
    name: string,
    interval: number,
    lastStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hasDownload: boolean,
  }
}

