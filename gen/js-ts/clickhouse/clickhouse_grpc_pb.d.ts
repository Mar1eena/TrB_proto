import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"


export class NameAndType extends jspb.Message {
  getName(): string;
  setName(value: string): NameAndType;

  getType(): string;
  setType(value: string): NameAndType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameAndType.AsObject;
  static toObject(includeInstance: boolean, msg: NameAndType): NameAndType.AsObject;
  static serializeBinaryToWriter(message: NameAndType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameAndType;
  static deserializeBinaryFromReader(message: NameAndType, reader: jspb.BinaryReader): NameAndType;
}

export namespace NameAndType {
  export type AsObject = {
    name: string,
    type: string,
  }
}

export class ExternalTable extends jspb.Message {
  getName(): string;
  setName(value: string): ExternalTable;

  getColumnsList(): Array<NameAndType>;
  setColumnsList(value: Array<NameAndType>): ExternalTable;
  clearColumnsList(): ExternalTable;
  addColumns(value?: NameAndType, index?: number): NameAndType;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): ExternalTable;

  getFormat(): string;
  setFormat(value: string): ExternalTable;

  getCompressionType(): string;
  setCompressionType(value: string): ExternalTable;

  getSettingsMap(): jspb.Map<string, string>;
  clearSettingsMap(): ExternalTable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTable.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTable): ExternalTable.AsObject;
  static serializeBinaryToWriter(message: ExternalTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTable;
  static deserializeBinaryFromReader(message: ExternalTable, reader: jspb.BinaryReader): ExternalTable;
}

export namespace ExternalTable {
  export type AsObject = {
    name: string,
    columnsList: Array<NameAndType.AsObject>,
    data: Uint8Array | string,
    format: string,
    compressionType: string,
    settingsMap: Array<[string, string]>,
  }
}

export class ObsoleteTransportCompression extends jspb.Message {
  getAlgorithm(): ObsoleteTransportCompression.CompressionAlgorithm;
  setAlgorithm(value: ObsoleteTransportCompression.CompressionAlgorithm): ObsoleteTransportCompression;

  getLevel(): ObsoleteTransportCompression.CompressionLevel;
  setLevel(value: ObsoleteTransportCompression.CompressionLevel): ObsoleteTransportCompression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObsoleteTransportCompression.AsObject;
  static toObject(includeInstance: boolean, msg: ObsoleteTransportCompression): ObsoleteTransportCompression.AsObject;
  static serializeBinaryToWriter(message: ObsoleteTransportCompression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObsoleteTransportCompression;
  static deserializeBinaryFromReader(message: ObsoleteTransportCompression, reader: jspb.BinaryReader): ObsoleteTransportCompression;
}

export namespace ObsoleteTransportCompression {
  export type AsObject = {
    algorithm: ObsoleteTransportCompression.CompressionAlgorithm,
    level: ObsoleteTransportCompression.CompressionLevel,
  }

  export enum CompressionAlgorithm { 
    NO_COMPRESSION = 0,
    DEFLATE = 1,
    GZIP = 2,
    STREAM_GZIP = 3,
  }

  export enum CompressionLevel { 
    COMPRESSION_NONE = 0,
    COMPRESSION_LOW = 1,
    COMPRESSION_MEDIUM = 2,
    COMPRESSION_HIGH = 3,
  }
}

export class QueryInfo extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): QueryInfo;

  getQueryId(): string;
  setQueryId(value: string): QueryInfo;

  getSettingsMap(): jspb.Map<string, string>;
  clearSettingsMap(): QueryInfo;

  getDatabase(): string;
  setDatabase(value: string): QueryInfo;

  getInputData(): Uint8Array | string;
  getInputData_asU8(): Uint8Array;
  getInputData_asB64(): string;
  setInputData(value: Uint8Array | string): QueryInfo;

  getInputDataDelimiter(): Uint8Array | string;
  getInputDataDelimiter_asU8(): Uint8Array;
  getInputDataDelimiter_asB64(): string;
  setInputDataDelimiter(value: Uint8Array | string): QueryInfo;

  getOutputFormat(): string;
  setOutputFormat(value: string): QueryInfo;

  getSendOutputColumns(): boolean;
  setSendOutputColumns(value: boolean): QueryInfo;

  getExternalTablesList(): Array<ExternalTable>;
  setExternalTablesList(value: Array<ExternalTable>): QueryInfo;
  clearExternalTablesList(): QueryInfo;
  addExternalTables(value?: ExternalTable, index?: number): ExternalTable;

  getUserName(): string;
  setUserName(value: string): QueryInfo;

  getPassword(): string;
  setPassword(value: string): QueryInfo;

  getQuota(): string;
  setQuota(value: string): QueryInfo;

  getJwt(): string;
  setJwt(value: string): QueryInfo;

  getSessionId(): string;
  setSessionId(value: string): QueryInfo;

  getSessionCheck(): boolean;
  setSessionCheck(value: boolean): QueryInfo;

  getSessionTimeout(): number;
  setSessionTimeout(value: number): QueryInfo;

  getCancel(): boolean;
  setCancel(value: boolean): QueryInfo;

  getNextQueryInfo(): boolean;
  setNextQueryInfo(value: boolean): QueryInfo;

  getInputCompressionType(): string;
  setInputCompressionType(value: string): QueryInfo;

  getOutputCompressionType(): string;
  setOutputCompressionType(value: string): QueryInfo;

  getOutputCompressionLevel(): number;
  setOutputCompressionLevel(value: number): QueryInfo;

  getTransportCompressionType(): string;
  setTransportCompressionType(value: string): QueryInfo;

  getTransportCompressionLevel(): number;
  setTransportCompressionLevel(value: number): QueryInfo;

  getObsoleteResultCompression(): ObsoleteTransportCompression | undefined;
  setObsoleteResultCompression(value?: ObsoleteTransportCompression): QueryInfo;
  hasObsoleteResultCompression(): boolean;
  clearObsoleteResultCompression(): QueryInfo;

  getObsoleteCompressionType(): string;
  setObsoleteCompressionType(value: string): QueryInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInfo.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInfo): QueryInfo.AsObject;
  static serializeBinaryToWriter(message: QueryInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInfo;
  static deserializeBinaryFromReader(message: QueryInfo, reader: jspb.BinaryReader): QueryInfo;
}

export namespace QueryInfo {
  export type AsObject = {
    query: string,
    queryId: string,
    settingsMap: Array<[string, string]>,
    database: string,
    inputData: Uint8Array | string,
    inputDataDelimiter: Uint8Array | string,
    outputFormat: string,
    sendOutputColumns: boolean,
    externalTablesList: Array<ExternalTable.AsObject>,
    userName: string,
    password: string,
    quota: string,
    jwt: string,
    sessionId: string,
    sessionCheck: boolean,
    sessionTimeout: number,
    cancel: boolean,
    nextQueryInfo: boolean,
    inputCompressionType: string,
    outputCompressionType: string,
    outputCompressionLevel: number,
    transportCompressionType: string,
    transportCompressionLevel: number,
    obsoleteResultCompression?: ObsoleteTransportCompression.AsObject,
    obsoleteCompressionType: string,
  }
}

export class LogEntry extends jspb.Message {
  getTime(): number;
  setTime(value: number): LogEntry;

  getTimeMicroseconds(): number;
  setTimeMicroseconds(value: number): LogEntry;

  getThreadId(): number;
  setThreadId(value: number): LogEntry;

  getQueryId(): string;
  setQueryId(value: string): LogEntry;

  getLevel(): LogsLevel;
  setLevel(value: LogsLevel): LogEntry;

  getSource(): string;
  setSource(value: string): LogEntry;

  getText(): string;
  setText(value: string): LogEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: LogEntry): LogEntry.AsObject;
  static serializeBinaryToWriter(message: LogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEntry;
  static deserializeBinaryFromReader(message: LogEntry, reader: jspb.BinaryReader): LogEntry;
}

export namespace LogEntry {
  export type AsObject = {
    time: number,
    timeMicroseconds: number,
    threadId: number,
    queryId: string,
    level: LogsLevel,
    source: string,
    text: string,
  }
}

export class Progress extends jspb.Message {
  getReadRows(): number;
  setReadRows(value: number): Progress;

  getReadBytes(): number;
  setReadBytes(value: number): Progress;

  getTotalRowsToRead(): number;
  setTotalRowsToRead(value: number): Progress;

  getWrittenRows(): number;
  setWrittenRows(value: number): Progress;

  getWrittenBytes(): number;
  setWrittenBytes(value: number): Progress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Progress.AsObject;
  static toObject(includeInstance: boolean, msg: Progress): Progress.AsObject;
  static serializeBinaryToWriter(message: Progress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Progress;
  static deserializeBinaryFromReader(message: Progress, reader: jspb.BinaryReader): Progress;
}

export namespace Progress {
  export type AsObject = {
    readRows: number,
    readBytes: number,
    totalRowsToRead: number,
    writtenRows: number,
    writtenBytes: number,
  }
}

export class Stats extends jspb.Message {
  getRows(): number;
  setRows(value: number): Stats;

  getBlocks(): number;
  setBlocks(value: number): Stats;

  getAllocatedBytes(): number;
  setAllocatedBytes(value: number): Stats;

  getAppliedLimit(): boolean;
  setAppliedLimit(value: boolean): Stats;

  getRowsBeforeLimit(): number;
  setRowsBeforeLimit(value: number): Stats;

  getAppliedAggregation(): boolean;
  setAppliedAggregation(value: boolean): Stats;

  getRowsBeforeAggregation(): number;
  setRowsBeforeAggregation(value: number): Stats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stats.AsObject;
  static toObject(includeInstance: boolean, msg: Stats): Stats.AsObject;
  static serializeBinaryToWriter(message: Stats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stats;
  static deserializeBinaryFromReader(message: Stats, reader: jspb.BinaryReader): Stats;
}

export namespace Stats {
  export type AsObject = {
    rows: number,
    blocks: number,
    allocatedBytes: number,
    appliedLimit: boolean,
    rowsBeforeLimit: number,
    appliedAggregation: boolean,
    rowsBeforeAggregation: number,
  }
}

export class Exception extends jspb.Message {
  getCode(): number;
  setCode(value: number): Exception;

  getName(): string;
  setName(value: string): Exception;

  getDisplayText(): string;
  setDisplayText(value: string): Exception;

  getStackTrace(): string;
  setStackTrace(value: string): Exception;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exception.AsObject;
  static toObject(includeInstance: boolean, msg: Exception): Exception.AsObject;
  static serializeBinaryToWriter(message: Exception, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exception;
  static deserializeBinaryFromReader(message: Exception, reader: jspb.BinaryReader): Exception;
}

export namespace Exception {
  export type AsObject = {
    code: number,
    name: string,
    displayText: string,
    stackTrace: string,
  }
}

export class Result extends jspb.Message {
  getQueryId(): string;
  setQueryId(value: string): Result;

  getTimeZone(): string;
  setTimeZone(value: string): Result;

  getOutputFormat(): string;
  setOutputFormat(value: string): Result;

  getOutputColumnsList(): Array<NameAndType>;
  setOutputColumnsList(value: Array<NameAndType>): Result;
  clearOutputColumnsList(): Result;
  addOutputColumns(value?: NameAndType, index?: number): NameAndType;

  getOutput(): Uint8Array | string;
  getOutput_asU8(): Uint8Array;
  getOutput_asB64(): string;
  setOutput(value: Uint8Array | string): Result;

  getTotals(): Uint8Array | string;
  getTotals_asU8(): Uint8Array;
  getTotals_asB64(): string;
  setTotals(value: Uint8Array | string): Result;

  getExtremes(): Uint8Array | string;
  getExtremes_asU8(): Uint8Array;
  getExtremes_asB64(): string;
  setExtremes(value: Uint8Array | string): Result;

  getLogsList(): Array<LogEntry>;
  setLogsList(value: Array<LogEntry>): Result;
  clearLogsList(): Result;
  addLogs(value?: LogEntry, index?: number): LogEntry;

  getProgress(): Progress | undefined;
  setProgress(value?: Progress): Result;
  hasProgress(): boolean;
  clearProgress(): Result;

  getStats(): Stats | undefined;
  setStats(value?: Stats): Result;
  hasStats(): boolean;
  clearStats(): Result;

  getException(): Exception | undefined;
  setException(value?: Exception): Result;
  hasException(): boolean;
  clearException(): Result;

  getCancelled(): boolean;
  setCancelled(value: boolean): Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    queryId: string,
    timeZone: string,
    outputFormat: string,
    outputColumnsList: Array<NameAndType.AsObject>,
    output: Uint8Array | string,
    totals: Uint8Array | string,
    extremes: Uint8Array | string,
    logsList: Array<LogEntry.AsObject>,
    progress?: Progress.AsObject,
    stats?: Stats.AsObject,
    exception?: Exception.AsObject,
    cancelled: boolean,
  }
}

export enum LogsLevel { 
  LOG_NONE = 0,
  LOG_FATAL = 1,
  LOG_CRITICAL = 2,
  LOG_ERROR = 3,
  LOG_WARNING = 4,
  LOG_NOTICE = 5,
  LOG_INFORMATION = 6,
  LOG_DEBUG = 7,
  LOG_TRACE = 8,
}
