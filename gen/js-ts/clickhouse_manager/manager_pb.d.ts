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

