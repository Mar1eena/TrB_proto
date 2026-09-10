import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class ListFilter extends jspb.Message {
  getQ(): string;
  setQ(value: string): ListFilter;

  getLimit(): number;
  setLimit(value: number): ListFilter;

  getOffset(): number;
  setOffset(value: number): ListFilter;

  getSortBy(): string;
  setSortBy(value: string): ListFilter;

  getSortDesc(): boolean;
  setSortDesc(value: boolean): ListFilter;

  getFieldFiltersList(): Array<FieldFilter>;
  setFieldFiltersList(value: Array<FieldFilter>): ListFilter;
  clearFieldFiltersList(): ListFilter;
  addFieldFilters(value?: FieldFilter, index?: number): FieldFilter;

  getIntervalFilter(): number;
  setIntervalFilter(value: number): ListFilter;

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
    sortBy: string,
    sortDesc: boolean,
    fieldFiltersList: Array<FieldFilter.AsObject>,
    intervalFilter: number,
  }
}

export class FieldFilter extends jspb.Message {
  getField(): string;
  setField(value: string): FieldFilter;

  getValue(): string;
  setValue(value: string): FieldFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldFilter.AsObject;
  static toObject(includeInstance: boolean, msg: FieldFilter): FieldFilter.AsObject;
  static serializeBinaryToWriter(message: FieldFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldFilter;
  static deserializeBinaryFromReader(message: FieldFilter, reader: jspb.BinaryReader): FieldFilter;
}

export namespace FieldFilter {
  export type AsObject = {
    field: string,
    value: string,
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

  getTotal(): number;
  setTotal(value: number): ListLastDownloadsResponse;

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
    total: number,
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

export class ListCandlesRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): ListCandlesRequest;

  getInterval(): number;
  setInterval(value: number): ListCandlesRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): ListCandlesRequest;
  hasFrom(): boolean;
  clearFrom(): ListCandlesRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): ListCandlesRequest;
  hasTo(): boolean;
  clearTo(): ListCandlesRequest;

  getLimit(): number;
  setLimit(value: number): ListCandlesRequest;

  getNewestFirst(): boolean;
  setNewestFirst(value: boolean): ListCandlesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCandlesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCandlesRequest): ListCandlesRequest.AsObject;
  static serializeBinaryToWriter(message: ListCandlesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCandlesRequest;
  static deserializeBinaryFromReader(message: ListCandlesRequest, reader: jspb.BinaryReader): ListCandlesRequest;
}

export namespace ListCandlesRequest {
  export type AsObject = {
    uid: string,
    interval: number,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    limit: number,
    newestFirst: boolean,
  }
}

export class HistoricCandleRow extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): HistoricCandleRow;
  hasTime(): boolean;
  clearTime(): HistoricCandleRow;

  getOpen(): number;
  setOpen(value: number): HistoricCandleRow;

  getHigh(): number;
  setHigh(value: number): HistoricCandleRow;

  getLow(): number;
  setLow(value: number): HistoricCandleRow;

  getClose(): number;
  setClose(value: number): HistoricCandleRow;

  getVolume(): number;
  setVolume(value: number): HistoricCandleRow;

  getVolumeBuy(): number;
  setVolumeBuy(value: number): HistoricCandleRow;

  getVolumeSell(): number;
  setVolumeSell(value: number): HistoricCandleRow;

  getCandleSource(): number;
  setCandleSource(value: number): HistoricCandleRow;

  getIsComplete(): boolean;
  setIsComplete(value: boolean): HistoricCandleRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoricCandleRow.AsObject;
  static toObject(includeInstance: boolean, msg: HistoricCandleRow): HistoricCandleRow.AsObject;
  static serializeBinaryToWriter(message: HistoricCandleRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoricCandleRow;
  static deserializeBinaryFromReader(message: HistoricCandleRow, reader: jspb.BinaryReader): HistoricCandleRow;
}

export namespace HistoricCandleRow {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
    volumeBuy: number,
    volumeSell: number,
    candleSource: number,
    isComplete: boolean,
  }
}

export class ListCandlesResponse extends jspb.Message {
  getItemsList(): Array<HistoricCandleRow>;
  setItemsList(value: Array<HistoricCandleRow>): ListCandlesResponse;
  clearItemsList(): ListCandlesResponse;
  addItems(value?: HistoricCandleRow, index?: number): HistoricCandleRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCandlesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCandlesResponse): ListCandlesResponse.AsObject;
  static serializeBinaryToWriter(message: ListCandlesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCandlesResponse;
  static deserializeBinaryFromReader(message: ListCandlesResponse, reader: jspb.BinaryReader): ListCandlesResponse;
}

export namespace ListCandlesResponse {
  export type AsObject = {
    itemsList: Array<HistoricCandleRow.AsObject>,
  }
}

