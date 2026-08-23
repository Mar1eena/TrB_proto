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

  getVersionNum(): number;
  setVersionNum(value: number): ServerInfoResponse;

  getServerEncoding(): string;
  setServerEncoding(value: string): ServerInfoResponse;

  getTimezone(): string;
  setTimezone(value: string): ServerInfoResponse;

  getMaxConnections(): number;
  setMaxConnections(value: number): ServerInfoResponse;

  getUptimeSeconds(): number;
  setUptimeSeconds(value: number): ServerInfoResponse;

  getCurrentDatabase(): string;
  setCurrentDatabase(value: string): ServerInfoResponse;

  getCurrentUser(): string;
  setCurrentUser(value: string): ServerInfoResponse;

  getDataDirectory(): string;
  setDataDirectory(value: string): ServerInfoResponse;

  getClusterName(): string;
  setClusterName(value: string): ServerInfoResponse;

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
    versionNum: number,
    serverEncoding: string,
    timezone: string,
    maxConnections: number,
    uptimeSeconds: number,
    currentDatabase: string,
    currentUser: string,
    dataDirectory: string,
    clusterName: string,
  }
}

export class DatabaseSpec extends jspb.Message {
  getName(): string;
  setName(value: string): DatabaseSpec;

  getOwner(): string;
  setOwner(value: string): DatabaseSpec;

  getEncoding(): string;
  setEncoding(value: string): DatabaseSpec;

  getCollation(): string;
  setCollation(value: string): DatabaseSpec;

  getCtype(): string;
  setCtype(value: string): DatabaseSpec;

  getTemplate(): string;
  setTemplate(value: string): DatabaseSpec;

  getTablespace(): string;
  setTablespace(value: string): DatabaseSpec;

  getConnectionLimit(): number;
  setConnectionLimit(value: number): DatabaseSpec;

  getIfNotExists(): boolean;
  setIfNotExists(value: boolean): DatabaseSpec;

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
    owner: string,
    encoding: string,
    collation: string,
    ctype: string,
    template: string,
    tablespace: string,
    connectionLimit: number,
    ifNotExists: boolean,
  }
}

export class DatabaseName extends jspb.Message {
  getName(): string;
  setName(value: string): DatabaseName;

  getIfExists(): boolean;
  setIfExists(value: boolean): DatabaseName;

  getForce(): boolean;
  setForce(value: boolean): DatabaseName;

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
    force: boolean,
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

  getOwner(): string;
  setOwner(value: string): Database;

  getEncoding(): string;
  setEncoding(value: string): Database;

  getCollation(): string;
  setCollation(value: string): Database;

  getCtype(): string;
  setCtype(value: string): Database;

  getSizeBytes(): number;
  setSizeBytes(value: number): Database;

  getConnectionLimit(): number;
  setConnectionLimit(value: number): Database;

  getNumBackends(): number;
  setNumBackends(value: number): Database;

  getAllowConnections(): boolean;
  setAllowConnections(value: boolean): Database;

  getTablespace(): string;
  setTablespace(value: string): Database;

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
    owner: string,
    encoding: string,
    collation: string,
    ctype: string,
    sizeBytes: number,
    connectionLimit: number,
    numBackends: number,
    allowConnections: boolean,
    tablespace: string,
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

export class SchemaSpec extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): SchemaSpec;

  getName(): string;
  setName(value: string): SchemaSpec;

  getOwner(): string;
  setOwner(value: string): SchemaSpec;

  getIfNotExists(): boolean;
  setIfNotExists(value: boolean): SchemaSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaSpec): SchemaSpec.AsObject;
  static serializeBinaryToWriter(message: SchemaSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaSpec;
  static deserializeBinaryFromReader(message: SchemaSpec, reader: jspb.BinaryReader): SchemaSpec;
}

export namespace SchemaSpec {
  export type AsObject = {
    database: string,
    name: string,
    owner: string,
    ifNotExists: boolean,
  }
}

export class SchemaName extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): SchemaName;

  getName(): string;
  setName(value: string): SchemaName;

  getIfExists(): boolean;
  setIfExists(value: boolean): SchemaName;

  getCascade(): boolean;
  setCascade(value: boolean): SchemaName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaName.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaName): SchemaName.AsObject;
  static serializeBinaryToWriter(message: SchemaName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaName;
  static deserializeBinaryFromReader(message: SchemaName, reader: jspb.BinaryReader): SchemaName;
}

export namespace SchemaName {
  export type AsObject = {
    database: string,
    name: string,
    ifExists: boolean,
    cascade: boolean,
  }
}

export class ListSchemasRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ListSchemasRequest;

  getLike(): string;
  setLike(value: string): ListSchemasRequest;

  getIncludeSystem(): boolean;
  setIncludeSystem(value: boolean): ListSchemasRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSchemasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSchemasRequest): ListSchemasRequest.AsObject;
  static serializeBinaryToWriter(message: ListSchemasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSchemasRequest;
  static deserializeBinaryFromReader(message: ListSchemasRequest, reader: jspb.BinaryReader): ListSchemasRequest;
}

export namespace ListSchemasRequest {
  export type AsObject = {
    database: string,
    like: string,
    includeSystem: boolean,
  }
}

export class Schema extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): Schema;

  getName(): string;
  setName(value: string): Schema;

  getOwner(): string;
  setOwner(value: string): Schema;

  getTablesCount(): number;
  setTablesCount(value: number): Schema;

  getTotalBytes(): number;
  setTotalBytes(value: number): Schema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schema.AsObject;
  static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
  static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schema;
  static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
  export type AsObject = {
    database: string,
    name: string,
    owner: string,
    tablesCount: number,
    totalBytes: number,
  }
}

export class SchemaList extends jspb.Message {
  getItemsList(): Array<Schema>;
  setItemsList(value: Array<Schema>): SchemaList;
  clearItemsList(): SchemaList;
  addItems(value?: Schema, index?: number): Schema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaList.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaList): SchemaList.AsObject;
  static serializeBinaryToWriter(message: SchemaList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaList;
  static deserializeBinaryFromReader(message: SchemaList, reader: jspb.BinaryReader): SchemaList;
}

export namespace SchemaList {
  export type AsObject = {
    itemsList: Array<Schema.AsObject>,
  }
}

export class Column extends jspb.Message {
  getName(): string;
  setName(value: string): Column;

  getType(): string;
  setType(value: string): Column;

  getNullable(): boolean;
  setNullable(value: boolean): Column;

  getDefaultExpression(): string;
  setDefaultExpression(value: string): Column;

  getIsIdentity(): boolean;
  setIsIdentity(value: boolean): Column;

  getIdentityGeneration(): string;
  setIdentityGeneration(value: string): Column;

  getGeneratedExpression(): string;
  setGeneratedExpression(value: string): Column;

  getCollation(): string;
  setCollation(value: string): Column;

  getComment(): string;
  setComment(value: string): Column;

  getPrimaryKey(): boolean;
  setPrimaryKey(value: boolean): Column;

  getUnique(): boolean;
  setUnique(value: boolean): Column;

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
    nullable: boolean,
    defaultExpression: string,
    isIdentity: boolean,
    identityGeneration: string,
    generatedExpression: string,
    collation: string,
    comment: string,
    primaryKey: boolean,
    unique: boolean,
  }
}

export class TableSpec extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): TableSpec;

  getSchema(): string;
  setSchema(value: string): TableSpec;

  getName(): string;
  setName(value: string): TableSpec;

  getColumnsList(): Array<Column>;
  setColumnsList(value: Array<Column>): TableSpec;
  clearColumnsList(): TableSpec;
  addColumns(value?: Column, index?: number): Column;

  getPrimaryKeyList(): Array<string>;
  setPrimaryKeyList(value: Array<string>): TableSpec;
  clearPrimaryKeyList(): TableSpec;
  addPrimaryKey(value: string, index?: number): TableSpec;

  getComment(): string;
  setComment(value: string): TableSpec;

  getIfNotExists(): boolean;
  setIfNotExists(value: boolean): TableSpec;

  getUnlogged(): boolean;
  setUnlogged(value: boolean): TableSpec;

  getTablespace(): string;
  setTablespace(value: string): TableSpec;

  getPartitionBy(): string;
  setPartitionBy(value: string): TableSpec;

  getTemporary(): boolean;
  setTemporary(value: boolean): TableSpec;

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
    schema: string,
    name: string,
    columnsList: Array<Column.AsObject>,
    primaryKeyList: Array<string>,
    comment: string,
    ifNotExists: boolean,
    unlogged: boolean,
    tablespace: string,
    partitionBy: string,
    temporary: boolean,
  }
}

export class TableName extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): TableName;

  getSchema(): string;
  setSchema(value: string): TableName;

  getName(): string;
  setName(value: string): TableName;

  getIfExists(): boolean;
  setIfExists(value: boolean): TableName;

  getCascade(): boolean;
  setCascade(value: boolean): TableName;

  getRestartIdentity(): boolean;
  setRestartIdentity(value: boolean): TableName;

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
    schema: string,
    name: string,
    ifExists: boolean,
    cascade: boolean,
    restartIdentity: boolean,
  }
}

export class ListTablesRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ListTablesRequest;

  getSchema(): string;
  setSchema(value: string): ListTablesRequest;

  getLike(): string;
  setLike(value: string): ListTablesRequest;

  getKind(): string;
  setKind(value: string): ListTablesRequest;

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
    schema: string,
    like: string,
    kind: string,
  }
}

export class Table extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): Table;

  getSchema(): string;
  setSchema(value: string): Table;

  getName(): string;
  setName(value: string): Table;

  getKind(): string;
  setKind(value: string): Table;

  getOwner(): string;
  setOwner(value: string): Table;

  getTotalRows(): number;
  setTotalRows(value: number): Table;

  getTotalBytes(): number;
  setTotalBytes(value: number): Table;

  getIndexBytes(): number;
  setIndexBytes(value: number): Table;

  getToastBytes(): number;
  setToastBytes(value: number): Table;

  getLiveTuples(): number;
  setLiveTuples(value: number): Table;

  getDeadTuples(): number;
  setDeadTuples(value: number): Table;

  getComment(): string;
  setComment(value: string): Table;

  getCreateTableQuery(): string;
  setCreateTableQuery(value: string): Table;

  getTablespace(): string;
  setTablespace(value: string): Table;

  getPersistence(): string;
  setPersistence(value: string): Table;

  getLastVacuum(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastVacuum(value?: google_protobuf_timestamp_pb.Timestamp): Table;
  hasLastVacuum(): boolean;
  clearLastVacuum(): Table;

  getLastAnalyze(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAnalyze(value?: google_protobuf_timestamp_pb.Timestamp): Table;
  hasLastAnalyze(): boolean;
  clearLastAnalyze(): Table;

  getLastAutovacuum(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAutovacuum(value?: google_protobuf_timestamp_pb.Timestamp): Table;
  hasLastAutovacuum(): boolean;
  clearLastAutovacuum(): Table;

  getLastAutoanalyze(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAutoanalyze(value?: google_protobuf_timestamp_pb.Timestamp): Table;
  hasLastAutoanalyze(): boolean;
  clearLastAutoanalyze(): Table;

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
    schema: string,
    name: string,
    kind: string,
    owner: string,
    totalRows: number,
    totalBytes: number,
    indexBytes: number,
    toastBytes: number,
    liveTuples: number,
    deadTuples: number,
    comment: string,
    createTableQuery: string,
    tablespace: string,
    persistence: string,
    lastVacuum?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastAnalyze?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastAutovacuum?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastAutoanalyze?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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

  getSchema(): string;
  setSchema(value: string): RenameTableRequest;

  getName(): string;
  setName(value: string): RenameTableRequest;

  getNewSchema(): string;
  setNewSchema(value: string): RenameTableRequest;

  getNewName(): string;
  setNewName(value: string): RenameTableRequest;

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
    schema: string,
    name: string,
    newSchema: string,
    newName: string,
  }
}

export class VacuumTableRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): VacuumTableRequest;

  getSchema(): string;
  setSchema(value: string): VacuumTableRequest;

  getName(): string;
  setName(value: string): VacuumTableRequest;

  getFull(): boolean;
  setFull(value: boolean): VacuumTableRequest;

  getAnalyze(): boolean;
  setAnalyze(value: boolean): VacuumTableRequest;

  getFreeze(): boolean;
  setFreeze(value: boolean): VacuumTableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VacuumTableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VacuumTableRequest): VacuumTableRequest.AsObject;
  static serializeBinaryToWriter(message: VacuumTableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VacuumTableRequest;
  static deserializeBinaryFromReader(message: VacuumTableRequest, reader: jspb.BinaryReader): VacuumTableRequest;
}

export namespace VacuumTableRequest {
  export type AsObject = {
    database: string,
    schema: string,
    name: string,
    full: boolean,
    analyze: boolean,
    freeze: boolean,
  }
}

export class AnalyzeTableRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): AnalyzeTableRequest;

  getSchema(): string;
  setSchema(value: string): AnalyzeTableRequest;

  getName(): string;
  setName(value: string): AnalyzeTableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalyzeTableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnalyzeTableRequest): AnalyzeTableRequest.AsObject;
  static serializeBinaryToWriter(message: AnalyzeTableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalyzeTableRequest;
  static deserializeBinaryFromReader(message: AnalyzeTableRequest, reader: jspb.BinaryReader): AnalyzeTableRequest;
}

export namespace AnalyzeTableRequest {
  export type AsObject = {
    database: string,
    schema: string,
    name: string,
  }
}

export class AddColumnRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): AddColumnRequest;

  getSchema(): string;
  setSchema(value: string): AddColumnRequest;

  getTable(): string;
  setTable(value: string): AddColumnRequest;

  getColumn(): Column | undefined;
  setColumn(value?: Column): AddColumnRequest;
  hasColumn(): boolean;
  clearColumn(): AddColumnRequest;

  getIfNotExists(): boolean;
  setIfNotExists(value: boolean): AddColumnRequest;

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
    schema: string,
    table: string,
    column?: Column.AsObject,
    ifNotExists: boolean,
  }
}

export class DropColumnRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): DropColumnRequest;

  getSchema(): string;
  setSchema(value: string): DropColumnRequest;

  getTable(): string;
  setTable(value: string): DropColumnRequest;

  getName(): string;
  setName(value: string): DropColumnRequest;

  getIfExists(): boolean;
  setIfExists(value: boolean): DropColumnRequest;

  getCascade(): boolean;
  setCascade(value: boolean): DropColumnRequest;

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
    schema: string,
    table: string,
    name: string,
    ifExists: boolean,
    cascade: boolean,
  }
}

export class RenameColumnRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): RenameColumnRequest;

  getSchema(): string;
  setSchema(value: string): RenameColumnRequest;

  getTable(): string;
  setTable(value: string): RenameColumnRequest;

  getName(): string;
  setName(value: string): RenameColumnRequest;

  getNewName(): string;
  setNewName(value: string): RenameColumnRequest;

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
    schema: string,
    table: string,
    name: string,
    newName: string,
  }
}

export class ModifyColumnRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ModifyColumnRequest;

  getSchema(): string;
  setSchema(value: string): ModifyColumnRequest;

  getTable(): string;
  setTable(value: string): ModifyColumnRequest;

  getColumn(): Column | undefined;
  setColumn(value?: Column): ModifyColumnRequest;
  hasColumn(): boolean;
  clearColumn(): ModifyColumnRequest;

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
    schema: string,
    table: string,
    column?: Column.AsObject,
  }
}

export class IndexSpec extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): IndexSpec;

  getSchema(): string;
  setSchema(value: string): IndexSpec;

  getTable(): string;
  setTable(value: string): IndexSpec;

  getName(): string;
  setName(value: string): IndexSpec;

  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): IndexSpec;
  clearColumnsList(): IndexSpec;
  addColumns(value: string, index?: number): IndexSpec;

  getMethod(): string;
  setMethod(value: string): IndexSpec;

  getUnique(): boolean;
  setUnique(value: boolean): IndexSpec;

  getConcurrently(): boolean;
  setConcurrently(value: boolean): IndexSpec;

  getWhere(): string;
  setWhere(value: string): IndexSpec;

  getIfNotExists(): boolean;
  setIfNotExists(value: boolean): IndexSpec;

  getTablespace(): string;
  setTablespace(value: string): IndexSpec;

  getInclude(): string;
  setInclude(value: string): IndexSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexSpec.AsObject;
  static toObject(includeInstance: boolean, msg: IndexSpec): IndexSpec.AsObject;
  static serializeBinaryToWriter(message: IndexSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexSpec;
  static deserializeBinaryFromReader(message: IndexSpec, reader: jspb.BinaryReader): IndexSpec;
}

export namespace IndexSpec {
  export type AsObject = {
    database: string,
    schema: string,
    table: string,
    name: string,
    columnsList: Array<string>,
    method: string,
    unique: boolean,
    concurrently: boolean,
    where: string,
    ifNotExists: boolean,
    tablespace: string,
    include: string,
  }
}

export class IndexName extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): IndexName;

  getSchema(): string;
  setSchema(value: string): IndexName;

  getName(): string;
  setName(value: string): IndexName;

  getIfExists(): boolean;
  setIfExists(value: boolean): IndexName;

  getConcurrently(): boolean;
  setConcurrently(value: boolean): IndexName;

  getCascade(): boolean;
  setCascade(value: boolean): IndexName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexName.AsObject;
  static toObject(includeInstance: boolean, msg: IndexName): IndexName.AsObject;
  static serializeBinaryToWriter(message: IndexName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexName;
  static deserializeBinaryFromReader(message: IndexName, reader: jspb.BinaryReader): IndexName;
}

export namespace IndexName {
  export type AsObject = {
    database: string,
    schema: string,
    name: string,
    ifExists: boolean,
    concurrently: boolean,
    cascade: boolean,
  }
}

export class ListIndexesRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ListIndexesRequest;

  getSchema(): string;
  setSchema(value: string): ListIndexesRequest;

  getTable(): string;
  setTable(value: string): ListIndexesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndexesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndexesRequest): ListIndexesRequest.AsObject;
  static serializeBinaryToWriter(message: ListIndexesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIndexesRequest;
  static deserializeBinaryFromReader(message: ListIndexesRequest, reader: jspb.BinaryReader): ListIndexesRequest;
}

export namespace ListIndexesRequest {
  export type AsObject = {
    database: string,
    schema: string,
    table: string,
  }
}

export class Index extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): Index;

  getSchema(): string;
  setSchema(value: string): Index;

  getTable(): string;
  setTable(value: string): Index;

  getName(): string;
  setName(value: string): Index;

  getMethod(): string;
  setMethod(value: string): Index;

  getUnique(): boolean;
  setUnique(value: boolean): Index;

  getPrimary(): boolean;
  setPrimary(value: boolean): Index;

  getValid(): boolean;
  setValid(value: boolean): Index;

  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): Index;
  clearColumnsList(): Index;
  addColumns(value: string, index?: number): Index;

  getDefinition(): string;
  setDefinition(value: string): Index;

  getSizeBytes(): number;
  setSizeBytes(value: number): Index;

  getTablespace(): string;
  setTablespace(value: string): Index;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Index.AsObject;
  static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
  static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Index;
  static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
}

export namespace Index {
  export type AsObject = {
    database: string,
    schema: string,
    table: string,
    name: string,
    method: string,
    unique: boolean,
    primary: boolean,
    valid: boolean,
    columnsList: Array<string>,
    definition: string,
    sizeBytes: number,
    tablespace: string,
  }
}

export class IndexList extends jspb.Message {
  getItemsList(): Array<Index>;
  setItemsList(value: Array<Index>): IndexList;
  clearItemsList(): IndexList;
  addItems(value?: Index, index?: number): Index;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexList.AsObject;
  static toObject(includeInstance: boolean, msg: IndexList): IndexList.AsObject;
  static serializeBinaryToWriter(message: IndexList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexList;
  static deserializeBinaryFromReader(message: IndexList, reader: jspb.BinaryReader): IndexList;
}

export namespace IndexList {
  export type AsObject = {
    itemsList: Array<Index.AsObject>,
  }
}

export class ReindexRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ReindexRequest;

  getSchema(): string;
  setSchema(value: string): ReindexRequest;

  getTable(): string;
  setTable(value: string): ReindexRequest;

  getName(): string;
  setName(value: string): ReindexRequest;

  getConcurrently(): boolean;
  setConcurrently(value: boolean): ReindexRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReindexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReindexRequest): ReindexRequest.AsObject;
  static serializeBinaryToWriter(message: ReindexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReindexRequest;
  static deserializeBinaryFromReader(message: ReindexRequest, reader: jspb.BinaryReader): ReindexRequest;
}

export namespace ReindexRequest {
  export type AsObject = {
    database: string,
    schema: string,
    table: string,
    name: string,
    concurrently: boolean,
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

  getRowsAffected(): number;
  setRowsAffected(value: number): ExecuteQueryResponse;

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
    rowsAffected: number,
  }
}

export class PreviewTableDataRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): PreviewTableDataRequest;

  getSchema(): string;
  setSchema(value: string): PreviewTableDataRequest;

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
    schema: string,
    table: string,
    limit: number,
    offset: number,
    orderBy: string,
    where: string,
  }
}

export class TablePartition extends jspb.Message {
  getSchema(): string;
  setSchema(value: string): TablePartition;

  getName(): string;
  setName(value: string): TablePartition;

  getExpression(): string;
  setExpression(value: string): TablePartition;

  getTotalRows(): number;
  setTotalRows(value: number): TablePartition;

  getTotalBytes(): number;
  setTotalBytes(value: number): TablePartition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TablePartition.AsObject;
  static toObject(includeInstance: boolean, msg: TablePartition): TablePartition.AsObject;
  static serializeBinaryToWriter(message: TablePartition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TablePartition;
  static deserializeBinaryFromReader(message: TablePartition, reader: jspb.BinaryReader): TablePartition;
}

export namespace TablePartition {
  export type AsObject = {
    schema: string,
    name: string,
    expression: string,
    totalRows: number,
    totalBytes: number,
  }
}

export class ListPartitionsRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ListPartitionsRequest;

  getSchema(): string;
  setSchema(value: string): ListPartitionsRequest;

  getTable(): string;
  setTable(value: string): ListPartitionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartitionsRequest): ListPartitionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPartitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartitionsRequest;
  static deserializeBinaryFromReader(message: ListPartitionsRequest, reader: jspb.BinaryReader): ListPartitionsRequest;
}

export namespace ListPartitionsRequest {
  export type AsObject = {
    database: string,
    schema: string,
    table: string,
  }
}

export class PartitionList extends jspb.Message {
  getItemsList(): Array<TablePartition>;
  setItemsList(value: Array<TablePartition>): PartitionList;
  clearItemsList(): PartitionList;
  addItems(value?: TablePartition, index?: number): TablePartition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionList.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionList): PartitionList.AsObject;
  static serializeBinaryToWriter(message: PartitionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionList;
  static deserializeBinaryFromReader(message: PartitionList, reader: jspb.BinaryReader): PartitionList;
}

export namespace PartitionList {
  export type AsObject = {
    itemsList: Array<TablePartition.AsObject>,
  }
}

export class DropPartitionRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): DropPartitionRequest;

  getSchema(): string;
  setSchema(value: string): DropPartitionRequest;

  getTable(): string;
  setTable(value: string): DropPartitionRequest;

  getName(): string;
  setName(value: string): DropPartitionRequest;

  getDetach(): boolean;
  setDetach(value: boolean): DropPartitionRequest;

  getConcurrently(): boolean;
  setConcurrently(value: boolean): DropPartitionRequest;

  getCascade(): boolean;
  setCascade(value: boolean): DropPartitionRequest;

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
    schema: string,
    table: string,
    name: string,
    detach: boolean,
    concurrently: boolean,
    cascade: boolean,
  }
}

export class ProcessInfo extends jspb.Message {
  getPid(): number;
  setPid(value: number): ProcessInfo;

  getUser(): string;
  setUser(value: string): ProcessInfo;

  getDatabase(): string;
  setDatabase(value: string): ProcessInfo;

  getApplicationName(): string;
  setApplicationName(value: string): ProcessInfo;

  getClientAddr(): string;
  setClientAddr(value: string): ProcessInfo;

  getState(): string;
  setState(value: string): ProcessInfo;

  getWaitEventType(): string;
  setWaitEventType(value: string): ProcessInfo;

  getWaitEvent(): string;
  setWaitEvent(value: string): ProcessInfo;

  getQuery(): string;
  setQuery(value: string): ProcessInfo;

  getBackendStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBackendStart(value?: google_protobuf_timestamp_pb.Timestamp): ProcessInfo;
  hasBackendStart(): boolean;
  clearBackendStart(): ProcessInfo;

  getQueryStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setQueryStart(value?: google_protobuf_timestamp_pb.Timestamp): ProcessInfo;
  hasQueryStart(): boolean;
  clearQueryStart(): ProcessInfo;

  getStateChange(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateChange(value?: google_protobuf_timestamp_pb.Timestamp): ProcessInfo;
  hasStateChange(): boolean;
  clearStateChange(): ProcessInfo;

  getBackendType(): string;
  setBackendType(value: string): ProcessInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessInfo): ProcessInfo.AsObject;
  static serializeBinaryToWriter(message: ProcessInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessInfo;
  static deserializeBinaryFromReader(message: ProcessInfo, reader: jspb.BinaryReader): ProcessInfo;
}

export namespace ProcessInfo {
  export type AsObject = {
    pid: number,
    user: string,
    database: string,
    applicationName: string,
    clientAddr: string,
    state: string,
    waitEventType: string,
    waitEvent: string,
    query: string,
    backendStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    queryStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stateChange?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    backendType: string,
  }
}

export class ListProcessesRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ListProcessesRequest;

  getActiveOnly(): boolean;
  setActiveOnly(value: boolean): ListProcessesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProcessesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProcessesRequest): ListProcessesRequest.AsObject;
  static serializeBinaryToWriter(message: ListProcessesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProcessesRequest;
  static deserializeBinaryFromReader(message: ListProcessesRequest, reader: jspb.BinaryReader): ListProcessesRequest;
}

export namespace ListProcessesRequest {
  export type AsObject = {
    database: string,
    activeOnly: boolean,
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
  getPid(): number;
  setPid(value: number): KillProcessRequest;

  getTerminate(): boolean;
  setTerminate(value: boolean): KillProcessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KillProcessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KillProcessRequest): KillProcessRequest.AsObject;
  static serializeBinaryToWriter(message: KillProcessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KillProcessRequest;
  static deserializeBinaryFromReader(message: KillProcessRequest, reader: jspb.BinaryReader): KillProcessRequest;
}

export namespace KillProcessRequest {
  export type AsObject = {
    pid: number,
    terminate: boolean,
  }
}

export class LockInfo extends jspb.Message {
  getPid(): number;
  setPid(value: number): LockInfo;

  getLocktype(): string;
  setLocktype(value: string): LockInfo;

  getDatabase(): string;
  setDatabase(value: string): LockInfo;

  getRelation(): string;
  setRelation(value: string): LockInfo;

  getMode(): string;
  setMode(value: string): LockInfo;

  getGranted(): boolean;
  setGranted(value: boolean): LockInfo;

  getFastpath(): boolean;
  setFastpath(value: boolean): LockInfo;

  getQuery(): string;
  setQuery(value: string): LockInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LockInfo): LockInfo.AsObject;
  static serializeBinaryToWriter(message: LockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockInfo;
  static deserializeBinaryFromReader(message: LockInfo, reader: jspb.BinaryReader): LockInfo;
}

export namespace LockInfo {
  export type AsObject = {
    pid: number,
    locktype: string,
    database: string,
    relation: string,
    mode: string,
    granted: boolean,
    fastpath: boolean,
    query: string,
  }
}

export class ListLocksRequest extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): ListLocksRequest;

  getGrantedOnly(): boolean;
  setGrantedOnly(value: boolean): ListLocksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLocksRequest): ListLocksRequest.AsObject;
  static serializeBinaryToWriter(message: ListLocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLocksRequest;
  static deserializeBinaryFromReader(message: ListLocksRequest, reader: jspb.BinaryReader): ListLocksRequest;
}

export namespace ListLocksRequest {
  export type AsObject = {
    database: string,
    grantedOnly: boolean,
  }
}

export class LockList extends jspb.Message {
  getItemsList(): Array<LockInfo>;
  setItemsList(value: Array<LockInfo>): LockList;
  clearItemsList(): LockList;
  addItems(value?: LockInfo, index?: number): LockInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockList.AsObject;
  static toObject(includeInstance: boolean, msg: LockList): LockList.AsObject;
  static serializeBinaryToWriter(message: LockList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockList;
  static deserializeBinaryFromReader(message: LockList, reader: jspb.BinaryReader): LockList;
}

export namespace LockList {
  export type AsObject = {
    itemsList: Array<LockInfo.AsObject>,
  }
}

export class TablespaceInfo extends jspb.Message {
  getName(): string;
  setName(value: string): TablespaceInfo;

  getOwner(): string;
  setOwner(value: string): TablespaceInfo;

  getLocation(): string;
  setLocation(value: string): TablespaceInfo;

  getSizeBytes(): number;
  setSizeBytes(value: number): TablespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TablespaceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TablespaceInfo): TablespaceInfo.AsObject;
  static serializeBinaryToWriter(message: TablespaceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TablespaceInfo;
  static deserializeBinaryFromReader(message: TablespaceInfo, reader: jspb.BinaryReader): TablespaceInfo;
}

export namespace TablespaceInfo {
  export type AsObject = {
    name: string,
    owner: string,
    location: string,
    sizeBytes: number,
  }
}

export class ListTablespacesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTablespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTablespacesRequest): ListTablespacesRequest.AsObject;
  static serializeBinaryToWriter(message: ListTablespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTablespacesRequest;
  static deserializeBinaryFromReader(message: ListTablespacesRequest, reader: jspb.BinaryReader): ListTablespacesRequest;
}

export namespace ListTablespacesRequest {
  export type AsObject = {
  }
}

export class TablespaceList extends jspb.Message {
  getItemsList(): Array<TablespaceInfo>;
  setItemsList(value: Array<TablespaceInfo>): TablespaceList;
  clearItemsList(): TablespaceList;
  addItems(value?: TablespaceInfo, index?: number): TablespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TablespaceList.AsObject;
  static toObject(includeInstance: boolean, msg: TablespaceList): TablespaceList.AsObject;
  static serializeBinaryToWriter(message: TablespaceList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TablespaceList;
  static deserializeBinaryFromReader(message: TablespaceList, reader: jspb.BinaryReader): TablespaceList;
}

export namespace TablespaceList {
  export type AsObject = {
    itemsList: Array<TablespaceInfo.AsObject>,
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
  getDatabase(): string;
  setDatabase(value: string): GetMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetricsRequest): GetMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: GetMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetricsRequest;
  static deserializeBinaryFromReader(message: GetMetricsRequest, reader: jspb.BinaryReader): GetMetricsRequest;
}

export namespace GetMetricsRequest {
  export type AsObject = {
    database: string,
  }
}

export class MetricsResponse extends jspb.Message {
  getMetricsList(): Array<MetricItem>;
  setMetricsList(value: Array<MetricItem>): MetricsResponse;
  clearMetricsList(): MetricsResponse;
  addMetrics(value?: MetricItem, index?: number): MetricItem;

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
  }
}

export class TableOptionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableOptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TableOptionsRequest): TableOptionsRequest.AsObject;
  static serializeBinaryToWriter(message: TableOptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableOptionsRequest;
  static deserializeBinaryFromReader(message: TableOptionsRequest, reader: jspb.BinaryReader): TableOptionsRequest;
}

export namespace TableOptionsRequest {
  export type AsObject = {
  }
}

export class TableOptionsResponse extends jspb.Message {
  getDataTypesList(): Array<string>;
  setDataTypesList(value: Array<string>): TableOptionsResponse;
  clearDataTypesList(): TableOptionsResponse;
  addDataTypes(value: string, index?: number): TableOptionsResponse;

  getIndexMethodsList(): Array<string>;
  setIndexMethodsList(value: Array<string>): TableOptionsResponse;
  clearIndexMethodsList(): TableOptionsResponse;
  addIndexMethods(value: string, index?: number): TableOptionsResponse;

  getCollationsList(): Array<string>;
  setCollationsList(value: Array<string>): TableOptionsResponse;
  clearCollationsList(): TableOptionsResponse;
  addCollations(value: string, index?: number): TableOptionsResponse;

  getTablespacesList(): Array<string>;
  setTablespacesList(value: Array<string>): TableOptionsResponse;
  clearTablespacesList(): TableOptionsResponse;
  addTablespaces(value: string, index?: number): TableOptionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableOptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TableOptionsResponse): TableOptionsResponse.AsObject;
  static serializeBinaryToWriter(message: TableOptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableOptionsResponse;
  static deserializeBinaryFromReader(message: TableOptionsResponse, reader: jspb.BinaryReader): TableOptionsResponse;
}

export namespace TableOptionsResponse {
  export type AsObject = {
    dataTypesList: Array<string>,
    indexMethodsList: Array<string>,
    collationsList: Array<string>,
    tablespacesList: Array<string>,
  }
}

