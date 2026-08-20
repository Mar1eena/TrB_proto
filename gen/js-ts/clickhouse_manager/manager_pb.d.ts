import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Status extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): Status;

  getMessage(): string;
  setMessage(value: string): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class PingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
  }
}

export class PingResponse extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): PingResponse;

  getVersion(): string;
  setVersion(value: string): PingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
    ok: boolean,
    version: string,
  }
}

export class ServerInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerInfoRequest): ServerInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ServerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerInfoRequest;
  static deserializeBinaryFromReader(message: ServerInfoRequest, reader: jspb.BinaryReader): ServerInfoRequest;
}

export namespace ServerInfoRequest {
  export type AsObject = {
  }
}

export class ServerInfoResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): ServerInfoResponse;

  getDisplayName(): string;
  setDisplayName(value: string): ServerInfoResponse;

  getRevision(): number;
  setRevision(value: number): ServerInfoResponse;

  getTimezone(): string;
  setTimezone(value: string): ServerInfoResponse;

  getUptimeSeconds(): number;
  setUptimeSeconds(value: number): ServerInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerInfoResponse): ServerInfoResponse.AsObject;
  static serializeBinaryToWriter(message: ServerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerInfoResponse;
  static deserializeBinaryFromReader(message: ServerInfoResponse, reader: jspb.BinaryReader): ServerInfoResponse;
}

export namespace ServerInfoResponse {
  export type AsObject = {
    version: string,
    displayName: string,
    revision: number,
    timezone: string,
    uptimeSeconds: number,
  }
}

export class DatabaseSpec extends jspb.Message {
  getName(): string;
  setName(value: string): DatabaseSpec;

  getEngine(): string;
  setEngine(value: string): DatabaseSpec;

  getComment(): string;
  setComment(value: string): DatabaseSpec;

  getIfNotExists(): boolean;
  setIfNotExists(value: boolean): DatabaseSpec;

  getCluster(): string;
  setCluster(value: string): DatabaseSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatabaseSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DatabaseSpec): DatabaseSpec.AsObject;
  static serializeBinaryToWriter(message: DatabaseSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatabaseSpec;
  static deserializeBinaryFromReader(message: DatabaseSpec, reader: jspb.BinaryReader): DatabaseSpec;
}

export namespace DatabaseSpec {
  export type AsObject = {
    name: string,
    engine: string,
    comment: string,
    ifNotExists: boolean,
    cluster: string,
  }
}

export class DatabaseName extends jspb.Message {
  getName(): string;
  setName(value: string): DatabaseName;

  getIfExists(): boolean;
  setIfExists(value: boolean): DatabaseName;

  getSync(): boolean;
  setSync(value: boolean): DatabaseName;

  getCluster(): string;
  setCluster(value: string): DatabaseName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatabaseName.AsObject;
  static toObject(includeInstance: boolean, msg: DatabaseName): DatabaseName.AsObject;
  static serializeBinaryToWriter(message: DatabaseName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatabaseName;
  static deserializeBinaryFromReader(message: DatabaseName, reader: jspb.BinaryReader): DatabaseName;
}

export namespace DatabaseName {
  export type AsObject = {
    name: string,
    ifExists: boolean,
    sync: boolean,
    cluster: string,
  }
}

export class ListDatabasesRequest extends jspb.Message {
  getLike(): string;
  setLike(value: string): ListDatabasesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatabasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatabasesRequest): ListDatabasesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatabasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatabasesRequest;
  static deserializeBinaryFromReader(message: ListDatabasesRequest, reader: jspb.BinaryReader): ListDatabasesRequest;
}

export namespace ListDatabasesRequest {
  export type AsObject = {
    like: string,
  }
}

export class Database extends jspb.Message {
  getName(): string;
  setName(value: string): Database;

  getEngine(): string;
  setEngine(value: string): Database;

  getComment(): string;
  setComment(value: string): Database;

  getTablesCount(): number;
  setTablesCount(value: number): Database;

  getTotalBytes(): number;
  setTotalBytes(value: number): Database;

  getTotalRows(): number;
  setTotalRows(value: number): Database;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Database.AsObject;
  static toObject(includeInstance: boolean, msg: Database): Database.AsObject;
  static serializeBinaryToWriter(message: Database, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Database;
  static deserializeBinaryFromReader(message: Database, reader: jspb.BinaryReader): Database;
}

export namespace Database {
  export type AsObject = {
    name: string,
    engine: string,
    comment: string,
    tablesCount: number,
    totalBytes: number,
    totalRows: number,
  }
}

export class DatabaseList extends jspb.Message {
  getItemsList(): Array<Database>;
  setItemsList(value: Array<Database>): DatabaseList;
  clearItemsList(): DatabaseList;
  addItems(value?: Database, index?: number): Database;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatabaseList.AsObject;
  static toObject(includeInstance: boolean, msg: DatabaseList): DatabaseList.AsObject;
  static serializeBinaryToWriter(message: DatabaseList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatabaseList;
  static deserializeBinaryFromReader(message: DatabaseList, reader: jspb.BinaryReader): DatabaseList;
}

export namespace DatabaseList {
  export type AsObject = {
    itemsList: Array<Database.AsObject>,
  }
}

export class Column extends jspb.Message {
  getName(): string;
  setName(value: string): Column;

  getType(): string;
  setType(value: string): Column;

  getDefaultKind(): string;
  setDefaultKind(value: string): Column;

  getDefaultExpression(): string;
  setDefaultExpression(value: string): Column;

  getCodec(): string;
  setCodec(value: string): Column;

  getTtl(): string;
  setTtl(value: string): Column;

  getComment(): string;
  setComment(value: string): Column;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Column.AsObject;
  static toObject(includeInstance: boolean, msg: Column): Column.AsObject;
  static serializeBinaryToWriter(message: Column, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Column;
  static deserializeBinaryFromReader(message: Column, reader: jspb.BinaryReader): Column;
}

export namespace Column {
  export type AsObject = {
    name: string,
    type: string,
    defaultKind: string,
    defaultExpression: string,
    codec: string,
    ttl: string,
    comment: string,
  }
}

export class TableEngine extends jspb.Message {
  getName(): string;
  setName(value: string): TableEngine;

  getParamsList(): Array<string>;
  setParamsList(value: Array<string>): TableEngine;
  clearParamsList(): TableEngine;
  addParams(value: string, index?: number): TableEngine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableEngine.AsObject;
  static toObject(includeInstance: boolean, msg: TableEngine): TableEngine.AsObject;
  static serializeBinaryToWriter(message: TableEngine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableEngine;
  static deserializeBinaryFromReader(message: TableEngine, reader: jspb.BinaryReader): TableEngine;
}

export namespace TableEngine {
  export type AsObject = {
    name: string,
    paramsList: Array<string>,
  }
}

export class TableSpec extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): TableSpec;

  getName(): string;
  setName(value: string): TableSpec;

  getColumnsList(): Array<Column>;
  setColumnsList(value: Array<Column>): TableSpec;
  clearColumnsList(): TableSpec;
  addColumns(value?: Column, index?: number): Column;

  getEngine(): TableEngine | undefined;
  setEngine(value?: TableEngine): TableSpec;
  hasEngine(): boolean;
  clearEngine(): TableSpec;

  getOrderBy(): string;
  setOrderBy(value: string): TableSpec;

  getPartitionBy(): string;
  setPartitionBy(value: string): TableSpec;

  getPrimaryKey(): string;
  setPrimaryKey(value: string): TableSpec;

  getSampleBy(): string;
  setSampleBy(value: string): TableSpec;

  getTtl(): string;
  setTtl(value: string): TableSpec;

  getSettingsMap(): jspb.Map<string, string>;
  clearSettingsMap(): TableSpec;

  getComment(): string;
  setComment(value: string): TableSpec;

  getIfNotExists(): boolean;
  setIfNotExists(value: boolean): TableSpec;

  getCluster(): string;
  setCluster(value: string): TableSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TableSpec): TableSpec.AsObject;
  static serializeBinaryToWriter(message: TableSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableSpec;
  static deserializeBinaryFromReader(message: TableSpec, reader: jspb.BinaryReader): TableSpec;
}

export namespace TableSpec {
  export type AsObject = {
    database: string,
    name: string,
    columnsList: Array<Column.AsObject>,
    engine?: TableEngine.AsObject,
    orderBy: string,
    partitionBy: string,
    primaryKey: string,
    sampleBy: string,
    ttl: string,
    settingsMap: Array<[string, string]>,
    comment: string,
    ifNotExists: boolean,
    cluster: string,
  }
}

export class TableName extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): TableName;

  getName(): string;
  setName(value: string): TableName;

  getIfExists(): boolean;
  setIfExists(value: boolean): TableName;

  getSync(): boolean;
  setSync(value: boolean): TableName;

  getCluster(): string;
  setCluster(value: string): TableName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableName.AsObject;
  static toObject(includeInstance: boolean, msg: TableName): TableName.AsObject;
  static serializeBinaryToWriter(message: TableName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableName;
  static deserializeBinaryFromReader(message: TableName, reader: jspb.BinaryReader): TableName;
}

export namespace TableName {
  export type AsObject = {
    database: string,
    name: string,
    ifExists: boolean,
    sync: boolean,
    cluster: string,
  }
}

export class ListTablesRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ListTablesRequest;

  getLike(): string;
  setLike(value: string): ListTablesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTablesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTablesRequest): ListTablesRequest.AsObject;
  static serializeBinaryToWriter(message: ListTablesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTablesRequest;
  static deserializeBinaryFromReader(message: ListTablesRequest, reader: jspb.BinaryReader): ListTablesRequest;
}

export namespace ListTablesRequest {
  export type AsObject = {
    database: string,
    like: string,
  }
}

export class Table extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): Table;

  getName(): string;
  setName(value: string): Table;

  getEngine(): string;
  setEngine(value: string): Table;

  getTotalRows(): number;
  setTotalRows(value: number): Table;

  getTotalBytes(): number;
  setTotalBytes(value: number): Table;

  getPartitionKey(): string;
  setPartitionKey(value: string): Table;

  getSortingKey(): string;
  setSortingKey(value: string): Table;

  getPrimaryKey(): string;
  setPrimaryKey(value: string): Table;

  getComment(): string;
  setComment(value: string): Table;

  getCreateTableQuery(): string;
  setCreateTableQuery(value: string): Table;

  getMetadataModificationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMetadataModificationTime(value?: google_protobuf_timestamp_pb.Timestamp): Table;
  hasMetadataModificationTime(): boolean;
  clearMetadataModificationTime(): Table;

  getColumnsList(): Array<Column>;
  setColumnsList(value: Array<Column>): Table;
  clearColumnsList(): Table;
  addColumns(value?: Column, index?: number): Column;

  getPartsCount(): number;
  setPartsCount(value: number): Table;

  getDataUncompressedBytes(): number;
  setDataUncompressedBytes(value: number): Table;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Table.AsObject;
  static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
  static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Table;
  static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
}

export namespace Table {
  export type AsObject = {
    database: string,
    name: string,
    engine: string,
    totalRows: number,
    totalBytes: number,
    partitionKey: string,
    sortingKey: string,
    primaryKey: string,
    comment: string,
    createTableQuery: string,
    metadataModificationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    columnsList: Array<Column.AsObject>,
    partsCount: number,
    dataUncompressedBytes: number,
  }
}

export class TableList extends jspb.Message {
  getItemsList(): Array<Table>;
  setItemsList(value: Array<Table>): TableList;
  clearItemsList(): TableList;
  addItems(value?: Table, index?: number): Table;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableList.AsObject;
  static toObject(includeInstance: boolean, msg: TableList): TableList.AsObject;
  static serializeBinaryToWriter(message: TableList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableList;
  static deserializeBinaryFromReader(message: TableList, reader: jspb.BinaryReader): TableList;
}

export namespace TableList {
  export type AsObject = {
    itemsList: Array<Table.AsObject>,
  }
}

export class RenameTableRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): RenameTableRequest;

  getName(): string;
  setName(value: string): RenameTableRequest;

  getNewDatabase(): string;
  setNewDatabase(value: string): RenameTableRequest;

  getNewName(): string;
  setNewName(value: string): RenameTableRequest;

  getCluster(): string;
  setCluster(value: string): RenameTableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameTableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenameTableRequest): RenameTableRequest.AsObject;
  static serializeBinaryToWriter(message: RenameTableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameTableRequest;
  static deserializeBinaryFromReader(message: RenameTableRequest, reader: jspb.BinaryReader): RenameTableRequest;
}

export namespace RenameTableRequest {
  export type AsObject = {
    database: string,
    name: string,
    newDatabase: string,
    newName: string,
    cluster: string,
  }
}

export class OptimizeTableRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): OptimizeTableRequest;

  getName(): string;
  setName(value: string): OptimizeTableRequest;

  getPartition(): string;
  setPartition(value: string): OptimizeTableRequest;

  getFinal(): boolean;
  setFinal(value: boolean): OptimizeTableRequest;

  getDeduplicate(): boolean;
  setDeduplicate(value: boolean): OptimizeTableRequest;

  getCluster(): string;
  setCluster(value: string): OptimizeTableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptimizeTableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OptimizeTableRequest): OptimizeTableRequest.AsObject;
  static serializeBinaryToWriter(message: OptimizeTableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptimizeTableRequest;
  static deserializeBinaryFromReader(message: OptimizeTableRequest, reader: jspb.BinaryReader): OptimizeTableRequest;
}

export namespace OptimizeTableRequest {
  export type AsObject = {
    database: string,
    name: string,
    partition: string,
    pb_final: boolean,
    deduplicate: boolean,
    cluster: string,
  }
}

export class AddColumnRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): AddColumnRequest;

  getTable(): string;
  setTable(value: string): AddColumnRequest;

  getColumn(): Column | undefined;
  setColumn(value?: Column): AddColumnRequest;
  hasColumn(): boolean;
  clearColumn(): AddColumnRequest;

  getAfter(): string;
  setAfter(value: string): AddColumnRequest;

  getIfNotExists(): boolean;
  setIfNotExists(value: boolean): AddColumnRequest;

  getCluster(): string;
  setCluster(value: string): AddColumnRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddColumnRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddColumnRequest): AddColumnRequest.AsObject;
  static serializeBinaryToWriter(message: AddColumnRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddColumnRequest;
  static deserializeBinaryFromReader(message: AddColumnRequest, reader: jspb.BinaryReader): AddColumnRequest;
}

export namespace AddColumnRequest {
  export type AsObject = {
    database: string,
    table: string,
    column?: Column.AsObject,
    after: string,
    ifNotExists: boolean,
    cluster: string,
  }
}

export class DropColumnRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): DropColumnRequest;

  getTable(): string;
  setTable(value: string): DropColumnRequest;

  getName(): string;
  setName(value: string): DropColumnRequest;

  getIfExists(): boolean;
  setIfExists(value: boolean): DropColumnRequest;

  getCluster(): string;
  setCluster(value: string): DropColumnRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropColumnRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropColumnRequest): DropColumnRequest.AsObject;
  static serializeBinaryToWriter(message: DropColumnRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropColumnRequest;
  static deserializeBinaryFromReader(message: DropColumnRequest, reader: jspb.BinaryReader): DropColumnRequest;
}

export namespace DropColumnRequest {
  export type AsObject = {
    database: string,
    table: string,
    name: string,
    ifExists: boolean,
    cluster: string,
  }
}

export class RenameColumnRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): RenameColumnRequest;

  getTable(): string;
  setTable(value: string): RenameColumnRequest;

  getName(): string;
  setName(value: string): RenameColumnRequest;

  getNewName(): string;
  setNewName(value: string): RenameColumnRequest;

  getCluster(): string;
  setCluster(value: string): RenameColumnRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameColumnRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenameColumnRequest): RenameColumnRequest.AsObject;
  static serializeBinaryToWriter(message: RenameColumnRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameColumnRequest;
  static deserializeBinaryFromReader(message: RenameColumnRequest, reader: jspb.BinaryReader): RenameColumnRequest;
}

export namespace RenameColumnRequest {
  export type AsObject = {
    database: string,
    table: string,
    name: string,
    newName: string,
    cluster: string,
  }
}

export class ModifyColumnRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ModifyColumnRequest;

  getTable(): string;
  setTable(value: string): ModifyColumnRequest;

  getColumn(): Column | undefined;
  setColumn(value?: Column): ModifyColumnRequest;
  hasColumn(): boolean;
  clearColumn(): ModifyColumnRequest;

  getCluster(): string;
  setCluster(value: string): ModifyColumnRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyColumnRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyColumnRequest): ModifyColumnRequest.AsObject;
  static serializeBinaryToWriter(message: ModifyColumnRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyColumnRequest;
  static deserializeBinaryFromReader(message: ModifyColumnRequest, reader: jspb.BinaryReader): ModifyColumnRequest;
}

export namespace ModifyColumnRequest {
  export type AsObject = {
    database: string,
    table: string,
    column?: Column.AsObject,
    cluster: string,
  }
}

export class QueryRow extends jspb.Message {
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): QueryRow;
  clearValuesList(): QueryRow;
  addValues(value: string, index?: number): QueryRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRow.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRow): QueryRow.AsObject;
  static serializeBinaryToWriter(message: QueryRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRow;
  static deserializeBinaryFromReader(message: QueryRow, reader: jspb.BinaryReader): QueryRow;
}

export namespace QueryRow {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class ExecuteQueryRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): ExecuteQueryRequest;

  getMaxRows(): number;
  setMaxRows(value: number): ExecuteQueryRequest;

  getDatabase(): string;
  setDatabase(value: string): ExecuteQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteQueryRequest): ExecuteQueryRequest.AsObject;
  static serializeBinaryToWriter(message: ExecuteQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteQueryRequest;
  static deserializeBinaryFromReader(message: ExecuteQueryRequest, reader: jspb.BinaryReader): ExecuteQueryRequest;
}

export namespace ExecuteQueryRequest {
  export type AsObject = {
    query: string,
    maxRows: number,
    database: string,
  }
}

export class ExecuteQueryResponse extends jspb.Message {
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): ExecuteQueryResponse;
  clearColumnsList(): ExecuteQueryResponse;
  addColumns(value: string, index?: number): ExecuteQueryResponse;

  getTypesList(): Array<string>;
  setTypesList(value: Array<string>): ExecuteQueryResponse;
  clearTypesList(): ExecuteQueryResponse;
  addTypes(value: string, index?: number): ExecuteQueryResponse;

  getRowsList(): Array<QueryRow>;
  setRowsList(value: Array<QueryRow>): ExecuteQueryResponse;
  clearRowsList(): ExecuteQueryResponse;
  addRows(value?: QueryRow, index?: number): QueryRow;

  getTotalRows(): number;
  setTotalRows(value: number): ExecuteQueryResponse;

  getElapsedSeconds(): number;
  setElapsedSeconds(value: number): ExecuteQueryResponse;

  getBytesRead(): number;
  setBytesRead(value: number): ExecuteQueryResponse;

  getRowsRead(): number;
  setRowsRead(value: number): ExecuteQueryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteQueryResponse): ExecuteQueryResponse.AsObject;
  static serializeBinaryToWriter(message: ExecuteQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteQueryResponse;
  static deserializeBinaryFromReader(message: ExecuteQueryResponse, reader: jspb.BinaryReader): ExecuteQueryResponse;
}

export namespace ExecuteQueryResponse {
  export type AsObject = {
    columnsList: Array<string>,
    typesList: Array<string>,
    rowsList: Array<QueryRow.AsObject>,
    totalRows: number,
    elapsedSeconds: number,
    bytesRead: number,
    rowsRead: number,
  }
}

export class PreviewTableDataRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): PreviewTableDataRequest;

  getTable(): string;
  setTable(value: string): PreviewTableDataRequest;

  getLimit(): number;
  setLimit(value: number): PreviewTableDataRequest;

  getOffset(): number;
  setOffset(value: number): PreviewTableDataRequest;

  getOrderBy(): string;
  setOrderBy(value: string): PreviewTableDataRequest;

  getWhere(): string;
  setWhere(value: string): PreviewTableDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviewTableDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PreviewTableDataRequest): PreviewTableDataRequest.AsObject;
  static serializeBinaryToWriter(message: PreviewTableDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviewTableDataRequest;
  static deserializeBinaryFromReader(message: PreviewTableDataRequest, reader: jspb.BinaryReader): PreviewTableDataRequest;
}

export namespace PreviewTableDataRequest {
  export type AsObject = {
    database: string,
    table: string,
    limit: number,
    offset: number,
    orderBy: string,
    where: string,
  }
}

export class TablePart extends jspb.Message {
  getPartition(): string;
  setPartition(value: string): TablePart;

  getName(): string;
  setName(value: string): TablePart;

  getActive(): boolean;
  setActive(value: boolean): TablePart;

  getRows(): number;
  setRows(value: number): TablePart;

  getBytesOnDisk(): number;
  setBytesOnDisk(value: number): TablePart;

  getDataUncompressedBytes(): number;
  setDataUncompressedBytes(value: number): TablePart;

  getModificationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModificationTime(value?: google_protobuf_timestamp_pb.Timestamp): TablePart;
  hasModificationTime(): boolean;
  clearModificationTime(): TablePart;

  getDiskName(): string;
  setDiskName(value: string): TablePart;

  getMinDate(): string;
  setMinDate(value: string): TablePart;

  getMaxDate(): string;
  setMaxDate(value: string): TablePart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TablePart.AsObject;
  static toObject(includeInstance: boolean, msg: TablePart): TablePart.AsObject;
  static serializeBinaryToWriter(message: TablePart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TablePart;
  static deserializeBinaryFromReader(message: TablePart, reader: jspb.BinaryReader): TablePart;
}

export namespace TablePart {
  export type AsObject = {
    partition: string,
    name: string,
    active: boolean,
    rows: number,
    bytesOnDisk: number,
    dataUncompressedBytes: number,
    modificationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    diskName: string,
    minDate: string,
    maxDate: string,
  }
}

export class ListPartsRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ListPartsRequest;

  getTable(): string;
  setTable(value: string): ListPartsRequest;

  getActiveOnly(): boolean;
  setActiveOnly(value: boolean): ListPartsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartsRequest): ListPartsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPartsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartsRequest;
  static deserializeBinaryFromReader(message: ListPartsRequest, reader: jspb.BinaryReader): ListPartsRequest;
}

export namespace ListPartsRequest {
  export type AsObject = {
    database: string,
    table: string,
    activeOnly: boolean,
  }
}

export class PartsList extends jspb.Message {
  getItemsList(): Array<TablePart>;
  setItemsList(value: Array<TablePart>): PartsList;
  clearItemsList(): PartsList;
  addItems(value?: TablePart, index?: number): TablePart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartsList.AsObject;
  static toObject(includeInstance: boolean, msg: PartsList): PartsList.AsObject;
  static serializeBinaryToWriter(message: PartsList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartsList;
  static deserializeBinaryFromReader(message: PartsList, reader: jspb.BinaryReader): PartsList;
}

export namespace PartsList {
  export type AsObject = {
    itemsList: Array<TablePart.AsObject>,
  }
}

export class DropPartitionRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): DropPartitionRequest;

  getTable(): string;
  setTable(value: string): DropPartitionRequest;

  getPartition(): string;
  setPartition(value: string): DropPartitionRequest;

  getDetach(): boolean;
  setDetach(value: boolean): DropPartitionRequest;

  getCluster(): string;
  setCluster(value: string): DropPartitionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropPartitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropPartitionRequest): DropPartitionRequest.AsObject;
  static serializeBinaryToWriter(message: DropPartitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropPartitionRequest;
  static deserializeBinaryFromReader(message: DropPartitionRequest, reader: jspb.BinaryReader): DropPartitionRequest;
}

export namespace DropPartitionRequest {
  export type AsObject = {
    database: string,
    table: string,
    partition: string,
    detach: boolean,
    cluster: string,
  }
}

export class ProcessInfo extends jspb.Message {
  getQueryId(): string;
  setQueryId(value: string): ProcessInfo;

  getUser(): string;
  setUser(value: string): ProcessInfo;

  getElapsedSeconds(): number;
  setElapsedSeconds(value: number): ProcessInfo;

  getRowsRead(): number;
  setRowsRead(value: number): ProcessInfo;

  getBytesRead(): number;
  setBytesRead(value: number): ProcessInfo;

  getMemoryUsage(): number;
  setMemoryUsage(value: number): ProcessInfo;

  getQuery(): string;
  setQuery(value: string): ProcessInfo;

  getClientName(): string;
  setClientName(value: string): ProcessInfo;

  getOsUser(): string;
  setOsUser(value: string): ProcessInfo;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): ProcessInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessInfo): ProcessInfo.AsObject;
  static serializeBinaryToWriter(message: ProcessInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessInfo;
  static deserializeBinaryFromReader(message: ProcessInfo, reader: jspb.BinaryReader): ProcessInfo;
}

export namespace ProcessInfo {
  export type AsObject = {
    queryId: string,
    user: string,
    elapsedSeconds: number,
    rowsRead: number,
    bytesRead: number,
    memoryUsage: number,
    query: string,
    clientName: string,
    osUser: string,
    isCancelled: boolean,
  }
}

export class ListProcessesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProcessesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProcessesRequest): ListProcessesRequest.AsObject;
  static serializeBinaryToWriter(message: ListProcessesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProcessesRequest;
  static deserializeBinaryFromReader(message: ListProcessesRequest, reader: jspb.BinaryReader): ListProcessesRequest;
}

export namespace ListProcessesRequest {
  export type AsObject = {
  }
}

export class ProcessList extends jspb.Message {
  getItemsList(): Array<ProcessInfo>;
  setItemsList(value: Array<ProcessInfo>): ProcessList;
  clearItemsList(): ProcessList;
  addItems(value?: ProcessInfo, index?: number): ProcessInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessList.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessList): ProcessList.AsObject;
  static serializeBinaryToWriter(message: ProcessList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessList;
  static deserializeBinaryFromReader(message: ProcessList, reader: jspb.BinaryReader): ProcessList;
}

export namespace ProcessList {
  export type AsObject = {
    itemsList: Array<ProcessInfo.AsObject>,
  }
}

export class KillProcessRequest extends jspb.Message {
  getQueryId(): string;
  setQueryId(value: string): KillProcessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KillProcessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KillProcessRequest): KillProcessRequest.AsObject;
  static serializeBinaryToWriter(message: KillProcessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KillProcessRequest;
  static deserializeBinaryFromReader(message: KillProcessRequest, reader: jspb.BinaryReader): KillProcessRequest;
}

export namespace KillProcessRequest {
  export type AsObject = {
    queryId: string,
  }
}

export class DiskInfo extends jspb.Message {
  getName(): string;
  setName(value: string): DiskInfo;

  getPath(): string;
  setPath(value: string): DiskInfo;

  getFreeSpace(): number;
  setFreeSpace(value: number): DiskInfo;

  getTotalSpace(): number;
  setTotalSpace(value: number): DiskInfo;

  getUnreservedSpace(): number;
  setUnreservedSpace(value: number): DiskInfo;

  getType(): string;
  setType(value: string): DiskInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiskInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DiskInfo): DiskInfo.AsObject;
  static serializeBinaryToWriter(message: DiskInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiskInfo;
  static deserializeBinaryFromReader(message: DiskInfo, reader: jspb.BinaryReader): DiskInfo;
}

export namespace DiskInfo {
  export type AsObject = {
    name: string,
    path: string,
    freeSpace: number,
    totalSpace: number,
    unreservedSpace: number,
    type: string,
  }
}

export class ListDisksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDisksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDisksRequest): ListDisksRequest.AsObject;
  static serializeBinaryToWriter(message: ListDisksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDisksRequest;
  static deserializeBinaryFromReader(message: ListDisksRequest, reader: jspb.BinaryReader): ListDisksRequest;
}

export namespace ListDisksRequest {
  export type AsObject = {
  }
}

export class DiskList extends jspb.Message {
  getItemsList(): Array<DiskInfo>;
  setItemsList(value: Array<DiskInfo>): DiskList;
  clearItemsList(): DiskList;
  addItems(value?: DiskInfo, index?: number): DiskInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiskList.AsObject;
  static toObject(includeInstance: boolean, msg: DiskList): DiskList.AsObject;
  static serializeBinaryToWriter(message: DiskList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiskList;
  static deserializeBinaryFromReader(message: DiskList, reader: jspb.BinaryReader): DiskList;
}

export namespace DiskList {
  export type AsObject = {
    itemsList: Array<DiskInfo.AsObject>,
  }
}

export class MetricItem extends jspb.Message {
  getName(): string;
  setName(value: string): MetricItem;

  getValue(): number;
  setValue(value: number): MetricItem;

  getDescription(): string;
  setDescription(value: string): MetricItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetricItem.AsObject;
  static toObject(includeInstance: boolean, msg: MetricItem): MetricItem.AsObject;
  static serializeBinaryToWriter(message: MetricItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetricItem;
  static deserializeBinaryFromReader(message: MetricItem, reader: jspb.BinaryReader): MetricItem;
}

export namespace MetricItem {
  export type AsObject = {
    name: string,
    value: number,
    description: string,
  }
}

export class GetMetricsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetricsRequest): GetMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: GetMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetricsRequest;
  static deserializeBinaryFromReader(message: GetMetricsRequest, reader: jspb.BinaryReader): GetMetricsRequest;
}

export namespace GetMetricsRequest {
  export type AsObject = {
  }
}

export class MetricsResponse extends jspb.Message {
  getMetricsList(): Array<MetricItem>;
  setMetricsList(value: Array<MetricItem>): MetricsResponse;
  clearMetricsList(): MetricsResponse;
  addMetrics(value?: MetricItem, index?: number): MetricItem;

  getAsyncMetricsList(): Array<MetricItem>;
  setAsyncMetricsList(value: Array<MetricItem>): MetricsResponse;
  clearAsyncMetricsList(): MetricsResponse;
  addAsyncMetrics(value?: MetricItem, index?: number): MetricItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MetricsResponse): MetricsResponse.AsObject;
  static serializeBinaryToWriter(message: MetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetricsResponse;
  static deserializeBinaryFromReader(message: MetricsResponse, reader: jspb.BinaryReader): MetricsResponse;
}

export namespace MetricsResponse {
  export type AsObject = {
    metricsList: Array<MetricItem.AsObject>,
    asyncMetricsList: Array<MetricItem.AsObject>,
  }
}

