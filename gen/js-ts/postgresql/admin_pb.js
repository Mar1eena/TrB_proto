// source: postgresql/admin.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_api_annotations_pb = require('../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_field_behavior_pb = require('../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.trb.postgresql.v1.AddColumnRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.AnalyzeTableRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.Column', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.Connection', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ConnectionList', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.Database', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.DatabaseList', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.DatabaseName', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.DatabaseSpec', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.DropColumnRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.DropPartitionRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ExecuteQueryRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ExecuteQueryResponse', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.GetMetricsRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.Index', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.IndexList', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.IndexName', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.IndexSpec', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.KillProcessRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ListConnectionsRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ListDatabasesRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ListIndexesRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ListLocksRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ListPartitionsRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ListProcessesRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ListSchemasRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ListTablesRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ListTablespacesRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.LockInfo', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.LockList', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.MetricItem', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.MetricsResponse', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ModifyColumnRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.PartitionList', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.PingRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.PingResponse', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.PreviewTableDataRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ProcessInfo', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ProcessList', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.QueryRow', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ReindexRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.RenameColumnRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.RenameTableRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.Schema', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.SchemaList', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.SchemaName', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.SchemaSpec', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ServerInfoRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.ServerInfoResponse', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.Status', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.Table', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.TableList', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.TableName', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.TableOptionsRequest', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.TableOptionsResponse', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.TablePartition', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.TableSpec', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.TablespaceInfo', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.TablespaceList', null, global);
goog.exportSymbol('proto.trb.postgresql.v1.VacuumTableRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.Connection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.Connection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.Connection.displayName = 'proto.trb.postgresql.v1.Connection';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ListConnectionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ListConnectionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ListConnectionsRequest.displayName = 'proto.trb.postgresql.v1.ListConnectionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ConnectionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.ConnectionList.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.ConnectionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ConnectionList.displayName = 'proto.trb.postgresql.v1.ConnectionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.Status.displayName = 'proto.trb.postgresql.v1.Status';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.PingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.PingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.PingRequest.displayName = 'proto.trb.postgresql.v1.PingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.PingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.PingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.PingResponse.displayName = 'proto.trb.postgresql.v1.PingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ServerInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ServerInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ServerInfoRequest.displayName = 'proto.trb.postgresql.v1.ServerInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ServerInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ServerInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ServerInfoResponse.displayName = 'proto.trb.postgresql.v1.ServerInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.DatabaseSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.DatabaseSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.DatabaseSpec.displayName = 'proto.trb.postgresql.v1.DatabaseSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.DatabaseName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.DatabaseName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.DatabaseName.displayName = 'proto.trb.postgresql.v1.DatabaseName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ListDatabasesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ListDatabasesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ListDatabasesRequest.displayName = 'proto.trb.postgresql.v1.ListDatabasesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.Database = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.Database, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.Database.displayName = 'proto.trb.postgresql.v1.Database';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.DatabaseList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.DatabaseList.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.DatabaseList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.DatabaseList.displayName = 'proto.trb.postgresql.v1.DatabaseList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.SchemaSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.SchemaSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.SchemaSpec.displayName = 'proto.trb.postgresql.v1.SchemaSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.SchemaName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.SchemaName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.SchemaName.displayName = 'proto.trb.postgresql.v1.SchemaName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ListSchemasRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ListSchemasRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ListSchemasRequest.displayName = 'proto.trb.postgresql.v1.ListSchemasRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.Schema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.Schema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.Schema.displayName = 'proto.trb.postgresql.v1.Schema';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.SchemaList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.SchemaList.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.SchemaList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.SchemaList.displayName = 'proto.trb.postgresql.v1.SchemaList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.Column = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.Column, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.Column.displayName = 'proto.trb.postgresql.v1.Column';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.TableSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.TableSpec.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.TableSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.TableSpec.displayName = 'proto.trb.postgresql.v1.TableSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.TableName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.TableName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.TableName.displayName = 'proto.trb.postgresql.v1.TableName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ListTablesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ListTablesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ListTablesRequest.displayName = 'proto.trb.postgresql.v1.ListTablesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.Table = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.Table.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.Table, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.Table.displayName = 'proto.trb.postgresql.v1.Table';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.TableList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.TableList.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.TableList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.TableList.displayName = 'proto.trb.postgresql.v1.TableList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.RenameTableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.RenameTableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.RenameTableRequest.displayName = 'proto.trb.postgresql.v1.RenameTableRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.VacuumTableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.VacuumTableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.VacuumTableRequest.displayName = 'proto.trb.postgresql.v1.VacuumTableRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.AnalyzeTableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.AnalyzeTableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.AnalyzeTableRequest.displayName = 'proto.trb.postgresql.v1.AnalyzeTableRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.AddColumnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.AddColumnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.AddColumnRequest.displayName = 'proto.trb.postgresql.v1.AddColumnRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.DropColumnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.DropColumnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.DropColumnRequest.displayName = 'proto.trb.postgresql.v1.DropColumnRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.RenameColumnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.RenameColumnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.RenameColumnRequest.displayName = 'proto.trb.postgresql.v1.RenameColumnRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ModifyColumnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ModifyColumnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ModifyColumnRequest.displayName = 'proto.trb.postgresql.v1.ModifyColumnRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.IndexSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.IndexSpec.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.IndexSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.IndexSpec.displayName = 'proto.trb.postgresql.v1.IndexSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.IndexName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.IndexName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.IndexName.displayName = 'proto.trb.postgresql.v1.IndexName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ListIndexesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ListIndexesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ListIndexesRequest.displayName = 'proto.trb.postgresql.v1.ListIndexesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.Index = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.Index.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.Index, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.Index.displayName = 'proto.trb.postgresql.v1.Index';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.IndexList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.IndexList.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.IndexList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.IndexList.displayName = 'proto.trb.postgresql.v1.IndexList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ReindexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ReindexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ReindexRequest.displayName = 'proto.trb.postgresql.v1.ReindexRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.QueryRow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.QueryRow.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.QueryRow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.QueryRow.displayName = 'proto.trb.postgresql.v1.QueryRow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ExecuteQueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ExecuteQueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ExecuteQueryRequest.displayName = 'proto.trb.postgresql.v1.ExecuteQueryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ExecuteQueryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.ExecuteQueryResponse.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.ExecuteQueryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ExecuteQueryResponse.displayName = 'proto.trb.postgresql.v1.ExecuteQueryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.PreviewTableDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.PreviewTableDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.PreviewTableDataRequest.displayName = 'proto.trb.postgresql.v1.PreviewTableDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.TablePartition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.TablePartition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.TablePartition.displayName = 'proto.trb.postgresql.v1.TablePartition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ListPartitionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ListPartitionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ListPartitionsRequest.displayName = 'proto.trb.postgresql.v1.ListPartitionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.PartitionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.PartitionList.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.PartitionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.PartitionList.displayName = 'proto.trb.postgresql.v1.PartitionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.DropPartitionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.DropPartitionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.DropPartitionRequest.displayName = 'proto.trb.postgresql.v1.DropPartitionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ProcessInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ProcessInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ProcessInfo.displayName = 'proto.trb.postgresql.v1.ProcessInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ListProcessesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ListProcessesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ListProcessesRequest.displayName = 'proto.trb.postgresql.v1.ListProcessesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ProcessList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.ProcessList.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.ProcessList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ProcessList.displayName = 'proto.trb.postgresql.v1.ProcessList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.KillProcessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.KillProcessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.KillProcessRequest.displayName = 'proto.trb.postgresql.v1.KillProcessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.LockInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.LockInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.LockInfo.displayName = 'proto.trb.postgresql.v1.LockInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ListLocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ListLocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ListLocksRequest.displayName = 'proto.trb.postgresql.v1.ListLocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.LockList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.LockList.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.LockList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.LockList.displayName = 'proto.trb.postgresql.v1.LockList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.TablespaceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.TablespaceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.TablespaceInfo.displayName = 'proto.trb.postgresql.v1.TablespaceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.ListTablespacesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.ListTablespacesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.ListTablespacesRequest.displayName = 'proto.trb.postgresql.v1.ListTablespacesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.TablespaceList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.TablespaceList.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.TablespaceList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.TablespaceList.displayName = 'proto.trb.postgresql.v1.TablespaceList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.MetricItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.MetricItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.MetricItem.displayName = 'proto.trb.postgresql.v1.MetricItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.GetMetricsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.GetMetricsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.GetMetricsRequest.displayName = 'proto.trb.postgresql.v1.GetMetricsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.MetricsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.MetricsResponse.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.MetricsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.MetricsResponse.displayName = 'proto.trb.postgresql.v1.MetricsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.TableOptionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.postgresql.v1.TableOptionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.TableOptionsRequest.displayName = 'proto.trb.postgresql.v1.TableOptionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.trb.postgresql.v1.TableOptionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.postgresql.v1.TableOptionsResponse.repeatedFields_, null);
};
goog.inherits(proto.trb.postgresql.v1.TableOptionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.postgresql.v1.TableOptionsResponse.displayName = 'proto.trb.postgresql.v1.TableOptionsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.Connection.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.Connection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.Connection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Connection.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
host: jspb.Message.getFieldWithDefault(msg, 2, ""),
database: jspb.Message.getFieldWithDefault(msg, 3, ""),
isDefault: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.Connection}
 */
proto.trb.postgresql.v1.Connection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.Connection;
  return proto.trb.postgresql.v1.Connection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.Connection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.Connection}
 */
proto.trb.postgresql.v1.Connection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefault(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.Connection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.Connection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.Connection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Connection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsDefault();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.Connection.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Connection} returns this
 */
proto.trb.postgresql.v1.Connection.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.Connection.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Connection} returns this
 */
proto.trb.postgresql.v1.Connection.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.Connection.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Connection} returns this
 */
proto.trb.postgresql.v1.Connection.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_default = 4;
 * @return {boolean}
 */
proto.trb.postgresql.v1.Connection.prototype.getIsDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.Connection} returns this
 */
proto.trb.postgresql.v1.Connection.prototype.setIsDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ListConnectionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ListConnectionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ListConnectionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListConnectionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ListConnectionsRequest}
 */
proto.trb.postgresql.v1.ListConnectionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ListConnectionsRequest;
  return proto.trb.postgresql.v1.ListConnectionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ListConnectionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ListConnectionsRequest}
 */
proto.trb.postgresql.v1.ListConnectionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ListConnectionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ListConnectionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ListConnectionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListConnectionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.ConnectionList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ConnectionList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ConnectionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ConnectionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ConnectionList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.postgresql.v1.Connection.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ConnectionList}
 */
proto.trb.postgresql.v1.ConnectionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ConnectionList;
  return proto.trb.postgresql.v1.ConnectionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ConnectionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ConnectionList}
 */
proto.trb.postgresql.v1.ConnectionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.postgresql.v1.Connection;
      reader.readMessage(value,proto.trb.postgresql.v1.Connection.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ConnectionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ConnectionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ConnectionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ConnectionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.postgresql.v1.Connection.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Connection items = 1;
 * @return {!Array<!proto.trb.postgresql.v1.Connection>}
 */
proto.trb.postgresql.v1.ConnectionList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.Connection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.Connection, 1));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.Connection>} value
 * @return {!proto.trb.postgresql.v1.ConnectionList} returns this
*/
proto.trb.postgresql.v1.ConnectionList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.postgresql.v1.Connection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.Connection}
 */
proto.trb.postgresql.v1.ConnectionList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.postgresql.v1.Connection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.ConnectionList} returns this
 */
proto.trb.postgresql.v1.ConnectionList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Status.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.Status}
 */
proto.trb.postgresql.v1.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.Status;
  return proto.trb.postgresql.v1.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.Status}
 */
proto.trb.postgresql.v1.Status.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Status.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.trb.postgresql.v1.Status.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.Status} returns this
 */
proto.trb.postgresql.v1.Status.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.Status.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Status} returns this
 */
proto.trb.postgresql.v1.Status.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.PingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.PingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.PingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.PingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.PingRequest}
 */
proto.trb.postgresql.v1.PingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.PingRequest;
  return proto.trb.postgresql.v1.PingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.PingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.PingRequest}
 */
proto.trb.postgresql.v1.PingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.PingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.PingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.PingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.PingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.PingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.PingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.PingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.PingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
ok: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.PingResponse}
 */
proto.trb.postgresql.v1.PingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.PingResponse;
  return proto.trb.postgresql.v1.PingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.PingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.PingResponse}
 */
proto.trb.postgresql.v1.PingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOk(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.PingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.PingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.PingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.PingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool ok = 1;
 * @return {boolean}
 */
proto.trb.postgresql.v1.PingResponse.prototype.getOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.PingResponse} returns this
 */
proto.trb.postgresql.v1.PingResponse.prototype.setOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.PingResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.PingResponse} returns this
 */
proto.trb.postgresql.v1.PingResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ServerInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ServerInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ServerInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ServerInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ServerInfoRequest}
 */
proto.trb.postgresql.v1.ServerInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ServerInfoRequest;
  return proto.trb.postgresql.v1.ServerInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ServerInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ServerInfoRequest}
 */
proto.trb.postgresql.v1.ServerInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ServerInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ServerInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ServerInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ServerInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ServerInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ServerInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ServerInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
version: jspb.Message.getFieldWithDefault(msg, 1, ""),
versionNum: jspb.Message.getFieldWithDefault(msg, 2, 0),
serverEncoding: jspb.Message.getFieldWithDefault(msg, 3, ""),
timezone: jspb.Message.getFieldWithDefault(msg, 4, ""),
maxConnections: jspb.Message.getFieldWithDefault(msg, 5, 0),
uptimeSeconds: jspb.Message.getFieldWithDefault(msg, 6, 0),
currentDatabase: jspb.Message.getFieldWithDefault(msg, 7, ""),
currentUser: jspb.Message.getFieldWithDefault(msg, 8, ""),
dataDirectory: jspb.Message.getFieldWithDefault(msg, 9, ""),
clusterName: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ServerInfoResponse}
 */
proto.trb.postgresql.v1.ServerInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ServerInfoResponse;
  return proto.trb.postgresql.v1.ServerInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ServerInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ServerInfoResponse}
 */
proto.trb.postgresql.v1.ServerInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersionNum(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerEncoding(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxConnections(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUptimeSeconds(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentDatabase(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentUser(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataDirectory(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ServerInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ServerInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ServerInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionNum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getServerEncoding();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMaxConnections();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getUptimeSeconds();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getCurrentDatabase();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCurrentUser();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDataDirectory();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ServerInfoResponse} returns this
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 version_num = 2;
 * @return {number}
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.getVersionNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.ServerInfoResponse} returns this
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.setVersionNum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string server_encoding = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.getServerEncoding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ServerInfoResponse} returns this
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.setServerEncoding = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string timezone = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ServerInfoResponse} returns this
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 max_connections = 5;
 * @return {number}
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.getMaxConnections = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.ServerInfoResponse} returns this
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.setMaxConnections = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 uptime_seconds = 6;
 * @return {number}
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.getUptimeSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.ServerInfoResponse} returns this
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.setUptimeSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string current_database = 7;
 * @return {string}
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.getCurrentDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ServerInfoResponse} returns this
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.setCurrentDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string current_user = 8;
 * @return {string}
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.getCurrentUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ServerInfoResponse} returns this
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.setCurrentUser = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string data_directory = 9;
 * @return {string}
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.getDataDirectory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ServerInfoResponse} returns this
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.setDataDirectory = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string cluster_name = 10;
 * @return {string}
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ServerInfoResponse} returns this
 */
proto.trb.postgresql.v1.ServerInfoResponse.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.DatabaseSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.DatabaseSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.DatabaseSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
owner: jspb.Message.getFieldWithDefault(msg, 2, ""),
encoding: jspb.Message.getFieldWithDefault(msg, 3, ""),
collation: jspb.Message.getFieldWithDefault(msg, 4, ""),
ctype: jspb.Message.getFieldWithDefault(msg, 5, ""),
template: jspb.Message.getFieldWithDefault(msg, 6, ""),
tablespace: jspb.Message.getFieldWithDefault(msg, 7, ""),
connectionLimit: jspb.Message.getFieldWithDefault(msg, 8, 0),
ifNotExists: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.DatabaseSpec}
 */
proto.trb.postgresql.v1.DatabaseSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.DatabaseSpec;
  return proto.trb.postgresql.v1.DatabaseSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.DatabaseSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.DatabaseSpec}
 */
proto.trb.postgresql.v1.DatabaseSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoding(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollation(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCtype(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablespace(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setConnectionLimit(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfNotExists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.DatabaseSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.DatabaseSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.DatabaseSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEncoding();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCollation();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCtype();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTemplate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTablespace();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getConnectionLimit();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getIfNotExists();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DatabaseSpec} returns this
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string owner = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DatabaseSpec} returns this
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string encoding = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.getEncoding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DatabaseSpec} returns this
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.setEncoding = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string collation = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.getCollation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DatabaseSpec} returns this
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.setCollation = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ctype = 5;
 * @return {string}
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.getCtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DatabaseSpec} returns this
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.setCtype = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string template = 6;
 * @return {string}
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.getTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DatabaseSpec} returns this
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.setTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string tablespace = 7;
 * @return {string}
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.getTablespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DatabaseSpec} returns this
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.setTablespace = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 connection_limit = 8;
 * @return {number}
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.getConnectionLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.DatabaseSpec} returns this
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.setConnectionLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool if_not_exists = 9;
 * @return {boolean}
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.getIfNotExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.DatabaseSpec} returns this
 */
proto.trb.postgresql.v1.DatabaseSpec.prototype.setIfNotExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.DatabaseName.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.DatabaseName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.DatabaseName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.DatabaseName.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
ifExists: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
force: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.DatabaseName}
 */
proto.trb.postgresql.v1.DatabaseName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.DatabaseName;
  return proto.trb.postgresql.v1.DatabaseName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.DatabaseName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.DatabaseName}
 */
proto.trb.postgresql.v1.DatabaseName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfExists(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.DatabaseName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.DatabaseName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.DatabaseName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.DatabaseName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIfExists();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.DatabaseName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DatabaseName} returns this
 */
proto.trb.postgresql.v1.DatabaseName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool if_exists = 2;
 * @return {boolean}
 */
proto.trb.postgresql.v1.DatabaseName.prototype.getIfExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.DatabaseName} returns this
 */
proto.trb.postgresql.v1.DatabaseName.prototype.setIfExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool force = 3;
 * @return {boolean}
 */
proto.trb.postgresql.v1.DatabaseName.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.DatabaseName} returns this
 */
proto.trb.postgresql.v1.DatabaseName.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ListDatabasesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ListDatabasesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ListDatabasesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListDatabasesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
like: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ListDatabasesRequest}
 */
proto.trb.postgresql.v1.ListDatabasesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ListDatabasesRequest;
  return proto.trb.postgresql.v1.ListDatabasesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ListDatabasesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ListDatabasesRequest}
 */
proto.trb.postgresql.v1.ListDatabasesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLike(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ListDatabasesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ListDatabasesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ListDatabasesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListDatabasesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLike();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string like = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.ListDatabasesRequest.prototype.getLike = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListDatabasesRequest} returns this
 */
proto.trb.postgresql.v1.ListDatabasesRequest.prototype.setLike = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.Database.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.Database.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.Database} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Database.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
owner: jspb.Message.getFieldWithDefault(msg, 2, ""),
encoding: jspb.Message.getFieldWithDefault(msg, 3, ""),
collation: jspb.Message.getFieldWithDefault(msg, 4, ""),
ctype: jspb.Message.getFieldWithDefault(msg, 5, ""),
sizeBytes: jspb.Message.getFieldWithDefault(msg, 6, 0),
connectionLimit: jspb.Message.getFieldWithDefault(msg, 7, 0),
numBackends: jspb.Message.getFieldWithDefault(msg, 8, 0),
allowConnections: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
tablespace: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.Database}
 */
proto.trb.postgresql.v1.Database.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.Database;
  return proto.trb.postgresql.v1.Database.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.Database} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.Database}
 */
proto.trb.postgresql.v1.Database.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoding(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollation(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCtype(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSizeBytes(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setConnectionLimit(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumBackends(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowConnections(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablespace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.Database.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.Database.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.Database} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Database.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEncoding();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCollation();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCtype();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getConnectionLimit();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getNumBackends();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getAllowConnections();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getTablespace();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.Database.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Database} returns this
 */
proto.trb.postgresql.v1.Database.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string owner = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.Database.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Database} returns this
 */
proto.trb.postgresql.v1.Database.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string encoding = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.Database.prototype.getEncoding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Database} returns this
 */
proto.trb.postgresql.v1.Database.prototype.setEncoding = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string collation = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.Database.prototype.getCollation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Database} returns this
 */
proto.trb.postgresql.v1.Database.prototype.setCollation = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ctype = 5;
 * @return {string}
 */
proto.trb.postgresql.v1.Database.prototype.getCtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Database} returns this
 */
proto.trb.postgresql.v1.Database.prototype.setCtype = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 size_bytes = 6;
 * @return {number}
 */
proto.trb.postgresql.v1.Database.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.Database} returns this
 */
proto.trb.postgresql.v1.Database.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 connection_limit = 7;
 * @return {number}
 */
proto.trb.postgresql.v1.Database.prototype.getConnectionLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.Database} returns this
 */
proto.trb.postgresql.v1.Database.prototype.setConnectionLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 num_backends = 8;
 * @return {number}
 */
proto.trb.postgresql.v1.Database.prototype.getNumBackends = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.Database} returns this
 */
proto.trb.postgresql.v1.Database.prototype.setNumBackends = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool allow_connections = 9;
 * @return {boolean}
 */
proto.trb.postgresql.v1.Database.prototype.getAllowConnections = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.Database} returns this
 */
proto.trb.postgresql.v1.Database.prototype.setAllowConnections = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string tablespace = 10;
 * @return {string}
 */
proto.trb.postgresql.v1.Database.prototype.getTablespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Database} returns this
 */
proto.trb.postgresql.v1.Database.prototype.setTablespace = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.DatabaseList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.DatabaseList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.DatabaseList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.DatabaseList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.DatabaseList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.postgresql.v1.Database.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.DatabaseList}
 */
proto.trb.postgresql.v1.DatabaseList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.DatabaseList;
  return proto.trb.postgresql.v1.DatabaseList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.DatabaseList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.DatabaseList}
 */
proto.trb.postgresql.v1.DatabaseList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.postgresql.v1.Database;
      reader.readMessage(value,proto.trb.postgresql.v1.Database.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.DatabaseList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.DatabaseList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.DatabaseList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.DatabaseList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.postgresql.v1.Database.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Database items = 1;
 * @return {!Array<!proto.trb.postgresql.v1.Database>}
 */
proto.trb.postgresql.v1.DatabaseList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.Database>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.Database, 1));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.Database>} value
 * @return {!proto.trb.postgresql.v1.DatabaseList} returns this
*/
proto.trb.postgresql.v1.DatabaseList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.postgresql.v1.Database=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.Database}
 */
proto.trb.postgresql.v1.DatabaseList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.postgresql.v1.Database, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.DatabaseList} returns this
 */
proto.trb.postgresql.v1.DatabaseList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.SchemaSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.SchemaSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.SchemaSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.SchemaSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
owner: jspb.Message.getFieldWithDefault(msg, 3, ""),
ifNotExists: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.SchemaSpec}
 */
proto.trb.postgresql.v1.SchemaSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.SchemaSpec;
  return proto.trb.postgresql.v1.SchemaSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.SchemaSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.SchemaSpec}
 */
proto.trb.postgresql.v1.SchemaSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfNotExists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.SchemaSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.SchemaSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.SchemaSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.SchemaSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIfNotExists();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.SchemaSpec.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.SchemaSpec} returns this
 */
proto.trb.postgresql.v1.SchemaSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.SchemaSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.SchemaSpec} returns this
 */
proto.trb.postgresql.v1.SchemaSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string owner = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.SchemaSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.SchemaSpec} returns this
 */
proto.trb.postgresql.v1.SchemaSpec.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool if_not_exists = 4;
 * @return {boolean}
 */
proto.trb.postgresql.v1.SchemaSpec.prototype.getIfNotExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.SchemaSpec} returns this
 */
proto.trb.postgresql.v1.SchemaSpec.prototype.setIfNotExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.SchemaName.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.SchemaName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.SchemaName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.SchemaName.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
ifExists: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
cascade: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.SchemaName}
 */
proto.trb.postgresql.v1.SchemaName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.SchemaName;
  return proto.trb.postgresql.v1.SchemaName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.SchemaName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.SchemaName}
 */
proto.trb.postgresql.v1.SchemaName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfExists(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCascade(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.SchemaName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.SchemaName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.SchemaName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.SchemaName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIfExists();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCascade();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.SchemaName.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.SchemaName} returns this
 */
proto.trb.postgresql.v1.SchemaName.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.SchemaName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.SchemaName} returns this
 */
proto.trb.postgresql.v1.SchemaName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool if_exists = 3;
 * @return {boolean}
 */
proto.trb.postgresql.v1.SchemaName.prototype.getIfExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.SchemaName} returns this
 */
proto.trb.postgresql.v1.SchemaName.prototype.setIfExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool cascade = 4;
 * @return {boolean}
 */
proto.trb.postgresql.v1.SchemaName.prototype.getCascade = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.SchemaName} returns this
 */
proto.trb.postgresql.v1.SchemaName.prototype.setCascade = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ListSchemasRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ListSchemasRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ListSchemasRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListSchemasRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
like: jspb.Message.getFieldWithDefault(msg, 2, ""),
includeSystem: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ListSchemasRequest}
 */
proto.trb.postgresql.v1.ListSchemasRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ListSchemasRequest;
  return proto.trb.postgresql.v1.ListSchemasRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ListSchemasRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ListSchemasRequest}
 */
proto.trb.postgresql.v1.ListSchemasRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLike(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeSystem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ListSchemasRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ListSchemasRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ListSchemasRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListSchemasRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLike();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIncludeSystem();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.ListSchemasRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListSchemasRequest} returns this
 */
proto.trb.postgresql.v1.ListSchemasRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string like = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.ListSchemasRequest.prototype.getLike = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListSchemasRequest} returns this
 */
proto.trb.postgresql.v1.ListSchemasRequest.prototype.setLike = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool include_system = 3;
 * @return {boolean}
 */
proto.trb.postgresql.v1.ListSchemasRequest.prototype.getIncludeSystem = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.ListSchemasRequest} returns this
 */
proto.trb.postgresql.v1.ListSchemasRequest.prototype.setIncludeSystem = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.Schema.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.Schema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.Schema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Schema.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
owner: jspb.Message.getFieldWithDefault(msg, 3, ""),
tablesCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
totalBytes: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.Schema}
 */
proto.trb.postgresql.v1.Schema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.Schema;
  return proto.trb.postgresql.v1.Schema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.Schema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.Schema}
 */
proto.trb.postgresql.v1.Schema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTablesCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.Schema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.Schema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.Schema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Schema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTablesCount();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getTotalBytes();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.Schema.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Schema} returns this
 */
proto.trb.postgresql.v1.Schema.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.Schema.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Schema} returns this
 */
proto.trb.postgresql.v1.Schema.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string owner = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.Schema.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Schema} returns this
 */
proto.trb.postgresql.v1.Schema.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 tables_count = 4;
 * @return {number}
 */
proto.trb.postgresql.v1.Schema.prototype.getTablesCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.Schema} returns this
 */
proto.trb.postgresql.v1.Schema.prototype.setTablesCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 total_bytes = 5;
 * @return {number}
 */
proto.trb.postgresql.v1.Schema.prototype.getTotalBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.Schema} returns this
 */
proto.trb.postgresql.v1.Schema.prototype.setTotalBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.SchemaList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.SchemaList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.SchemaList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.SchemaList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.SchemaList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.postgresql.v1.Schema.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.SchemaList}
 */
proto.trb.postgresql.v1.SchemaList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.SchemaList;
  return proto.trb.postgresql.v1.SchemaList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.SchemaList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.SchemaList}
 */
proto.trb.postgresql.v1.SchemaList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.postgresql.v1.Schema;
      reader.readMessage(value,proto.trb.postgresql.v1.Schema.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.SchemaList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.SchemaList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.SchemaList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.SchemaList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.postgresql.v1.Schema.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Schema items = 1;
 * @return {!Array<!proto.trb.postgresql.v1.Schema>}
 */
proto.trb.postgresql.v1.SchemaList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.Schema>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.Schema, 1));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.Schema>} value
 * @return {!proto.trb.postgresql.v1.SchemaList} returns this
*/
proto.trb.postgresql.v1.SchemaList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.postgresql.v1.Schema=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.Schema}
 */
proto.trb.postgresql.v1.SchemaList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.postgresql.v1.Schema, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.SchemaList} returns this
 */
proto.trb.postgresql.v1.SchemaList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.Column.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.Column.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.Column} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Column.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
type: jspb.Message.getFieldWithDefault(msg, 2, ""),
nullable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
defaultExpression: jspb.Message.getFieldWithDefault(msg, 4, ""),
isIdentity: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
identityGeneration: jspb.Message.getFieldWithDefault(msg, 6, ""),
generatedExpression: jspb.Message.getFieldWithDefault(msg, 7, ""),
collation: jspb.Message.getFieldWithDefault(msg, 8, ""),
comment: jspb.Message.getFieldWithDefault(msg, 9, ""),
primaryKey: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
unique: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.Column}
 */
proto.trb.postgresql.v1.Column.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.Column;
  return proto.trb.postgresql.v1.Column.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.Column} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.Column}
 */
proto.trb.postgresql.v1.Column.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNullable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultExpression(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsIdentity(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityGeneration(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setGeneratedExpression(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollation(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrimaryKey(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnique(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.Column.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.Column.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.Column} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Column.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNullable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDefaultExpression();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsIdentity();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIdentityGeneration();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGeneratedExpression();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCollation();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPrimaryKey();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getUnique();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.Column.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Column} returns this
 */
proto.trb.postgresql.v1.Column.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.Column.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Column} returns this
 */
proto.trb.postgresql.v1.Column.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool nullable = 3;
 * @return {boolean}
 */
proto.trb.postgresql.v1.Column.prototype.getNullable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.Column} returns this
 */
proto.trb.postgresql.v1.Column.prototype.setNullable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string default_expression = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.Column.prototype.getDefaultExpression = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Column} returns this
 */
proto.trb.postgresql.v1.Column.prototype.setDefaultExpression = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_identity = 5;
 * @return {boolean}
 */
proto.trb.postgresql.v1.Column.prototype.getIsIdentity = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.Column} returns this
 */
proto.trb.postgresql.v1.Column.prototype.setIsIdentity = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string identity_generation = 6;
 * @return {string}
 */
proto.trb.postgresql.v1.Column.prototype.getIdentityGeneration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Column} returns this
 */
proto.trb.postgresql.v1.Column.prototype.setIdentityGeneration = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string generated_expression = 7;
 * @return {string}
 */
proto.trb.postgresql.v1.Column.prototype.getGeneratedExpression = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Column} returns this
 */
proto.trb.postgresql.v1.Column.prototype.setGeneratedExpression = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string collation = 8;
 * @return {string}
 */
proto.trb.postgresql.v1.Column.prototype.getCollation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Column} returns this
 */
proto.trb.postgresql.v1.Column.prototype.setCollation = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string comment = 9;
 * @return {string}
 */
proto.trb.postgresql.v1.Column.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Column} returns this
 */
proto.trb.postgresql.v1.Column.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool primary_key = 10;
 * @return {boolean}
 */
proto.trb.postgresql.v1.Column.prototype.getPrimaryKey = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.Column} returns this
 */
proto.trb.postgresql.v1.Column.prototype.setPrimaryKey = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool unique = 11;
 * @return {boolean}
 */
proto.trb.postgresql.v1.Column.prototype.getUnique = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.Column} returns this
 */
proto.trb.postgresql.v1.Column.prototype.setUnique = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.TableSpec.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.TableSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.TableSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.TableSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TableSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
columnsList: jspb.Message.toObjectList(msg.getColumnsList(),
    proto.trb.postgresql.v1.Column.toObject, includeInstance),
primaryKeyList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
comment: jspb.Message.getFieldWithDefault(msg, 6, ""),
ifNotExists: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
unlogged: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
tablespace: jspb.Message.getFieldWithDefault(msg, 9, ""),
partitionBy: jspb.Message.getFieldWithDefault(msg, 10, ""),
temporary: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.TableSpec}
 */
proto.trb.postgresql.v1.TableSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.TableSpec;
  return proto.trb.postgresql.v1.TableSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.TableSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.TableSpec}
 */
proto.trb.postgresql.v1.TableSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.trb.postgresql.v1.Column;
      reader.readMessage(value,proto.trb.postgresql.v1.Column.deserializeBinaryFromReader);
      msg.addColumns(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addPrimaryKey(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfNotExists(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnlogged(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablespace(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartitionBy(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTemporary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.TableSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.TableSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.TableSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TableSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.trb.postgresql.v1.Column.serializeBinaryToWriter
    );
  }
  f = message.getPrimaryKeyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIfNotExists();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getUnlogged();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getTablespace();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPartitionBy();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTemporary();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.TableSpec.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.TableSpec.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.TableSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Column columns = 4;
 * @return {!Array<!proto.trb.postgresql.v1.Column>}
 */
proto.trb.postgresql.v1.TableSpec.prototype.getColumnsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.Column>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.Column, 4));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.Column>} value
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
*/
proto.trb.postgresql.v1.TableSpec.prototype.setColumnsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.trb.postgresql.v1.Column=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.Column}
 */
proto.trb.postgresql.v1.TableSpec.prototype.addColumns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.trb.postgresql.v1.Column, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * repeated string primary_key = 5;
 * @return {!Array<string>}
 */
proto.trb.postgresql.v1.TableSpec.prototype.getPrimaryKeyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.setPrimaryKeyList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.addPrimaryKey = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.clearPrimaryKeyList = function() {
  return this.setPrimaryKeyList([]);
};


/**
 * optional string comment = 6;
 * @return {string}
 */
proto.trb.postgresql.v1.TableSpec.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool if_not_exists = 7;
 * @return {boolean}
 */
proto.trb.postgresql.v1.TableSpec.prototype.getIfNotExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.setIfNotExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool unlogged = 8;
 * @return {boolean}
 */
proto.trb.postgresql.v1.TableSpec.prototype.getUnlogged = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.setUnlogged = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string tablespace = 9;
 * @return {string}
 */
proto.trb.postgresql.v1.TableSpec.prototype.getTablespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.setTablespace = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string partition_by = 10;
 * @return {string}
 */
proto.trb.postgresql.v1.TableSpec.prototype.getPartitionBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.setPartitionBy = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool temporary = 11;
 * @return {boolean}
 */
proto.trb.postgresql.v1.TableSpec.prototype.getTemporary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.TableSpec} returns this
 */
proto.trb.postgresql.v1.TableSpec.prototype.setTemporary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.TableName.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.TableName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.TableName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TableName.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
ifExists: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
cascade: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
restartIdentity: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.TableName}
 */
proto.trb.postgresql.v1.TableName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.TableName;
  return proto.trb.postgresql.v1.TableName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.TableName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.TableName}
 */
proto.trb.postgresql.v1.TableName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfExists(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCascade(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRestartIdentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.TableName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.TableName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.TableName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TableName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIfExists();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCascade();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getRestartIdentity();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.TableName.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TableName} returns this
 */
proto.trb.postgresql.v1.TableName.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.TableName.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TableName} returns this
 */
proto.trb.postgresql.v1.TableName.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.TableName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TableName} returns this
 */
proto.trb.postgresql.v1.TableName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool if_exists = 4;
 * @return {boolean}
 */
proto.trb.postgresql.v1.TableName.prototype.getIfExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.TableName} returns this
 */
proto.trb.postgresql.v1.TableName.prototype.setIfExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool cascade = 5;
 * @return {boolean}
 */
proto.trb.postgresql.v1.TableName.prototype.getCascade = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.TableName} returns this
 */
proto.trb.postgresql.v1.TableName.prototype.setCascade = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool restart_identity = 6;
 * @return {boolean}
 */
proto.trb.postgresql.v1.TableName.prototype.getRestartIdentity = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.TableName} returns this
 */
proto.trb.postgresql.v1.TableName.prototype.setRestartIdentity = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ListTablesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ListTablesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ListTablesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListTablesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
like: jspb.Message.getFieldWithDefault(msg, 3, ""),
kind: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ListTablesRequest}
 */
proto.trb.postgresql.v1.ListTablesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ListTablesRequest;
  return proto.trb.postgresql.v1.ListTablesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ListTablesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ListTablesRequest}
 */
proto.trb.postgresql.v1.ListTablesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLike(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ListTablesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ListTablesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ListTablesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListTablesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLike();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.ListTablesRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListTablesRequest} returns this
 */
proto.trb.postgresql.v1.ListTablesRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.ListTablesRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListTablesRequest} returns this
 */
proto.trb.postgresql.v1.ListTablesRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string like = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.ListTablesRequest.prototype.getLike = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListTablesRequest} returns this
 */
proto.trb.postgresql.v1.ListTablesRequest.prototype.setLike = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string kind = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.ListTablesRequest.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListTablesRequest} returns this
 */
proto.trb.postgresql.v1.ListTablesRequest.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.Table.repeatedFields_ = [20];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.Table.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.Table.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.Table} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Table.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
kind: jspb.Message.getFieldWithDefault(msg, 4, ""),
owner: jspb.Message.getFieldWithDefault(msg, 5, ""),
totalRows: jspb.Message.getFieldWithDefault(msg, 6, 0),
totalBytes: jspb.Message.getFieldWithDefault(msg, 7, 0),
indexBytes: jspb.Message.getFieldWithDefault(msg, 8, 0),
toastBytes: jspb.Message.getFieldWithDefault(msg, 9, 0),
liveTuples: jspb.Message.getFieldWithDefault(msg, 10, 0),
deadTuples: jspb.Message.getFieldWithDefault(msg, 11, 0),
comment: jspb.Message.getFieldWithDefault(msg, 12, ""),
createTableQuery: jspb.Message.getFieldWithDefault(msg, 13, ""),
tablespace: jspb.Message.getFieldWithDefault(msg, 14, ""),
persistence: jspb.Message.getFieldWithDefault(msg, 15, ""),
lastVacuum: (f = msg.getLastVacuum()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
lastAnalyze: (f = msg.getLastAnalyze()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
lastAutovacuum: (f = msg.getLastAutovacuum()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
lastAutoanalyze: (f = msg.getLastAutoanalyze()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
columnsList: jspb.Message.toObjectList(msg.getColumnsList(),
    proto.trb.postgresql.v1.Column.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.Table}
 */
proto.trb.postgresql.v1.Table.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.Table;
  return proto.trb.postgresql.v1.Table.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.Table} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.Table}
 */
proto.trb.postgresql.v1.Table.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalRows(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalBytes(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndexBytes(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setToastBytes(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLiveTuples(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeadTuples(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateTableQuery(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablespace(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPersistence(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastVacuum(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastAnalyze(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastAutovacuum(value);
      break;
    case 19:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastAutoanalyze(value);
      break;
    case 20:
      var value = new proto.trb.postgresql.v1.Column;
      reader.readMessage(value,proto.trb.postgresql.v1.Column.deserializeBinaryFromReader);
      msg.addColumns(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.Table.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.Table.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.Table} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Table.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTotalRows();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getTotalBytes();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getIndexBytes();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getToastBytes();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getLiveTuples();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getDeadTuples();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCreateTableQuery();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getTablespace();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPersistence();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getLastVacuum();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastAnalyze();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastAutovacuum();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastAutoanalyze();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.trb.postgresql.v1.Column.serializeBinaryToWriter
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.Table.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.Table.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.Table.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string kind = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.Table.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string owner = 5;
 * @return {string}
 */
proto.trb.postgresql.v1.Table.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 total_rows = 6;
 * @return {number}
 */
proto.trb.postgresql.v1.Table.prototype.getTotalRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setTotalRows = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 total_bytes = 7;
 * @return {number}
 */
proto.trb.postgresql.v1.Table.prototype.getTotalBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setTotalBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 index_bytes = 8;
 * @return {number}
 */
proto.trb.postgresql.v1.Table.prototype.getIndexBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setIndexBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 toast_bytes = 9;
 * @return {number}
 */
proto.trb.postgresql.v1.Table.prototype.getToastBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setToastBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 live_tuples = 10;
 * @return {number}
 */
proto.trb.postgresql.v1.Table.prototype.getLiveTuples = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setLiveTuples = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 dead_tuples = 11;
 * @return {number}
 */
proto.trb.postgresql.v1.Table.prototype.getDeadTuples = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setDeadTuples = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string comment = 12;
 * @return {string}
 */
proto.trb.postgresql.v1.Table.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string create_table_query = 13;
 * @return {string}
 */
proto.trb.postgresql.v1.Table.prototype.getCreateTableQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setCreateTableQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string tablespace = 14;
 * @return {string}
 */
proto.trb.postgresql.v1.Table.prototype.getTablespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setTablespace = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string persistence = 15;
 * @return {string}
 */
proto.trb.postgresql.v1.Table.prototype.getPersistence = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.setPersistence = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional google.protobuf.Timestamp last_vacuum = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.trb.postgresql.v1.Table.prototype.getLastVacuum = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
*/
proto.trb.postgresql.v1.Table.prototype.setLastVacuum = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.clearLastVacuum = function() {
  return this.setLastVacuum(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.postgresql.v1.Table.prototype.hasLastVacuum = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp last_analyze = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.trb.postgresql.v1.Table.prototype.getLastAnalyze = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
*/
proto.trb.postgresql.v1.Table.prototype.setLastAnalyze = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.clearLastAnalyze = function() {
  return this.setLastAnalyze(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.postgresql.v1.Table.prototype.hasLastAnalyze = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp last_autovacuum = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.trb.postgresql.v1.Table.prototype.getLastAutovacuum = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
*/
proto.trb.postgresql.v1.Table.prototype.setLastAutovacuum = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.clearLastAutovacuum = function() {
  return this.setLastAutovacuum(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.postgresql.v1.Table.prototype.hasLastAutovacuum = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional google.protobuf.Timestamp last_autoanalyze = 19;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.trb.postgresql.v1.Table.prototype.getLastAutoanalyze = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 19));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
*/
proto.trb.postgresql.v1.Table.prototype.setLastAutoanalyze = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.clearLastAutoanalyze = function() {
  return this.setLastAutoanalyze(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.postgresql.v1.Table.prototype.hasLastAutoanalyze = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * repeated Column columns = 20;
 * @return {!Array<!proto.trb.postgresql.v1.Column>}
 */
proto.trb.postgresql.v1.Table.prototype.getColumnsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.Column>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.Column, 20));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.Column>} value
 * @return {!proto.trb.postgresql.v1.Table} returns this
*/
proto.trb.postgresql.v1.Table.prototype.setColumnsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.trb.postgresql.v1.Column=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.Column}
 */
proto.trb.postgresql.v1.Table.prototype.addColumns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.trb.postgresql.v1.Column, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.Table} returns this
 */
proto.trb.postgresql.v1.Table.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.TableList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.TableList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.TableList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.TableList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TableList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.postgresql.v1.Table.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.TableList}
 */
proto.trb.postgresql.v1.TableList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.TableList;
  return proto.trb.postgresql.v1.TableList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.TableList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.TableList}
 */
proto.trb.postgresql.v1.TableList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.postgresql.v1.Table;
      reader.readMessage(value,proto.trb.postgresql.v1.Table.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.TableList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.TableList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.TableList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TableList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.postgresql.v1.Table.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Table items = 1;
 * @return {!Array<!proto.trb.postgresql.v1.Table>}
 */
proto.trb.postgresql.v1.TableList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.Table>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.Table, 1));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.Table>} value
 * @return {!proto.trb.postgresql.v1.TableList} returns this
*/
proto.trb.postgresql.v1.TableList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.postgresql.v1.Table=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.Table}
 */
proto.trb.postgresql.v1.TableList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.postgresql.v1.Table, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.TableList} returns this
 */
proto.trb.postgresql.v1.TableList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.RenameTableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.RenameTableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.RenameTableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.RenameTableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
newSchema: jspb.Message.getFieldWithDefault(msg, 4, ""),
newName: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.RenameTableRequest}
 */
proto.trb.postgresql.v1.RenameTableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.RenameTableRequest;
  return proto.trb.postgresql.v1.RenameTableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.RenameTableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.RenameTableRequest}
 */
proto.trb.postgresql.v1.RenameTableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewSchema(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.RenameTableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.RenameTableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.RenameTableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.RenameTableRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewSchema();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNewName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.RenameTableRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.RenameTableRequest} returns this
 */
proto.trb.postgresql.v1.RenameTableRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.RenameTableRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.RenameTableRequest} returns this
 */
proto.trb.postgresql.v1.RenameTableRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.RenameTableRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.RenameTableRequest} returns this
 */
proto.trb.postgresql.v1.RenameTableRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string new_schema = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.RenameTableRequest.prototype.getNewSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.RenameTableRequest} returns this
 */
proto.trb.postgresql.v1.RenameTableRequest.prototype.setNewSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string new_name = 5;
 * @return {string}
 */
proto.trb.postgresql.v1.RenameTableRequest.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.RenameTableRequest} returns this
 */
proto.trb.postgresql.v1.RenameTableRequest.prototype.setNewName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.VacuumTableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.VacuumTableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.VacuumTableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
full: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
analyze: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
freeze: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.VacuumTableRequest}
 */
proto.trb.postgresql.v1.VacuumTableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.VacuumTableRequest;
  return proto.trb.postgresql.v1.VacuumTableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.VacuumTableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.VacuumTableRequest}
 */
proto.trb.postgresql.v1.VacuumTableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFull(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAnalyze(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFreeze(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.VacuumTableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.VacuumTableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.VacuumTableRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFull();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAnalyze();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getFreeze();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.VacuumTableRequest} returns this
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.VacuumTableRequest} returns this
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.VacuumTableRequest} returns this
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool full = 4;
 * @return {boolean}
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.getFull = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.VacuumTableRequest} returns this
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.setFull = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool analyze = 5;
 * @return {boolean}
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.getAnalyze = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.VacuumTableRequest} returns this
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.setAnalyze = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool freeze = 6;
 * @return {boolean}
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.getFreeze = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.VacuumTableRequest} returns this
 */
proto.trb.postgresql.v1.VacuumTableRequest.prototype.setFreeze = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.AnalyzeTableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.AnalyzeTableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.AnalyzeTableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.AnalyzeTableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.AnalyzeTableRequest}
 */
proto.trb.postgresql.v1.AnalyzeTableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.AnalyzeTableRequest;
  return proto.trb.postgresql.v1.AnalyzeTableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.AnalyzeTableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.AnalyzeTableRequest}
 */
proto.trb.postgresql.v1.AnalyzeTableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.AnalyzeTableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.AnalyzeTableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.AnalyzeTableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.AnalyzeTableRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.AnalyzeTableRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.AnalyzeTableRequest} returns this
 */
proto.trb.postgresql.v1.AnalyzeTableRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.AnalyzeTableRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.AnalyzeTableRequest} returns this
 */
proto.trb.postgresql.v1.AnalyzeTableRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.AnalyzeTableRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.AnalyzeTableRequest} returns this
 */
proto.trb.postgresql.v1.AnalyzeTableRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.AddColumnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.AddColumnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.AddColumnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
table: jspb.Message.getFieldWithDefault(msg, 3, ""),
column: (f = msg.getColumn()) && proto.trb.postgresql.v1.Column.toObject(includeInstance, f),
ifNotExists: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.AddColumnRequest}
 */
proto.trb.postgresql.v1.AddColumnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.AddColumnRequest;
  return proto.trb.postgresql.v1.AddColumnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.AddColumnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.AddColumnRequest}
 */
proto.trb.postgresql.v1.AddColumnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    case 4:
      var value = new proto.trb.postgresql.v1.Column;
      reader.readMessage(value,proto.trb.postgresql.v1.Column.deserializeBinaryFromReader);
      msg.setColumn(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfNotExists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.AddColumnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.AddColumnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.AddColumnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getColumn();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.trb.postgresql.v1.Column.serializeBinaryToWriter
    );
  }
  f = message.getIfNotExists();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.AddColumnRequest} returns this
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.AddColumnRequest} returns this
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.AddColumnRequest} returns this
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Column column = 4;
 * @return {?proto.trb.postgresql.v1.Column}
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.getColumn = function() {
  return /** @type{?proto.trb.postgresql.v1.Column} */ (
    jspb.Message.getWrapperField(this, proto.trb.postgresql.v1.Column, 4));
};


/**
 * @param {?proto.trb.postgresql.v1.Column|undefined} value
 * @return {!proto.trb.postgresql.v1.AddColumnRequest} returns this
*/
proto.trb.postgresql.v1.AddColumnRequest.prototype.setColumn = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.postgresql.v1.AddColumnRequest} returns this
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.clearColumn = function() {
  return this.setColumn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.hasColumn = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool if_not_exists = 5;
 * @return {boolean}
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.getIfNotExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.AddColumnRequest} returns this
 */
proto.trb.postgresql.v1.AddColumnRequest.prototype.setIfNotExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.DropColumnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.DropColumnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.DropColumnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
table: jspb.Message.getFieldWithDefault(msg, 3, ""),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
ifExists: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
cascade: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.DropColumnRequest}
 */
proto.trb.postgresql.v1.DropColumnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.DropColumnRequest;
  return proto.trb.postgresql.v1.DropColumnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.DropColumnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.DropColumnRequest}
 */
proto.trb.postgresql.v1.DropColumnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfExists(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCascade(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.DropColumnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.DropColumnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.DropColumnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIfExists();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCascade();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DropColumnRequest} returns this
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DropColumnRequest} returns this
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DropColumnRequest} returns this
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DropColumnRequest} returns this
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool if_exists = 5;
 * @return {boolean}
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.getIfExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.DropColumnRequest} returns this
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.setIfExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool cascade = 6;
 * @return {boolean}
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.getCascade = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.DropColumnRequest} returns this
 */
proto.trb.postgresql.v1.DropColumnRequest.prototype.setCascade = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.RenameColumnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.RenameColumnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.RenameColumnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.RenameColumnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
table: jspb.Message.getFieldWithDefault(msg, 3, ""),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
newName: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.RenameColumnRequest}
 */
proto.trb.postgresql.v1.RenameColumnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.RenameColumnRequest;
  return proto.trb.postgresql.v1.RenameColumnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.RenameColumnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.RenameColumnRequest}
 */
proto.trb.postgresql.v1.RenameColumnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.RenameColumnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.RenameColumnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.RenameColumnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.RenameColumnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNewName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.RenameColumnRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.RenameColumnRequest} returns this
 */
proto.trb.postgresql.v1.RenameColumnRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.RenameColumnRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.RenameColumnRequest} returns this
 */
proto.trb.postgresql.v1.RenameColumnRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.RenameColumnRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.RenameColumnRequest} returns this
 */
proto.trb.postgresql.v1.RenameColumnRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.RenameColumnRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.RenameColumnRequest} returns this
 */
proto.trb.postgresql.v1.RenameColumnRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string new_name = 5;
 * @return {string}
 */
proto.trb.postgresql.v1.RenameColumnRequest.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.RenameColumnRequest} returns this
 */
proto.trb.postgresql.v1.RenameColumnRequest.prototype.setNewName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ModifyColumnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ModifyColumnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ModifyColumnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ModifyColumnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
table: jspb.Message.getFieldWithDefault(msg, 3, ""),
column: (f = msg.getColumn()) && proto.trb.postgresql.v1.Column.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ModifyColumnRequest}
 */
proto.trb.postgresql.v1.ModifyColumnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ModifyColumnRequest;
  return proto.trb.postgresql.v1.ModifyColumnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ModifyColumnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ModifyColumnRequest}
 */
proto.trb.postgresql.v1.ModifyColumnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    case 4:
      var value = new proto.trb.postgresql.v1.Column;
      reader.readMessage(value,proto.trb.postgresql.v1.Column.deserializeBinaryFromReader);
      msg.setColumn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ModifyColumnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ModifyColumnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ModifyColumnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ModifyColumnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getColumn();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.trb.postgresql.v1.Column.serializeBinaryToWriter
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.ModifyColumnRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ModifyColumnRequest} returns this
 */
proto.trb.postgresql.v1.ModifyColumnRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.ModifyColumnRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ModifyColumnRequest} returns this
 */
proto.trb.postgresql.v1.ModifyColumnRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.ModifyColumnRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ModifyColumnRequest} returns this
 */
proto.trb.postgresql.v1.ModifyColumnRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Column column = 4;
 * @return {?proto.trb.postgresql.v1.Column}
 */
proto.trb.postgresql.v1.ModifyColumnRequest.prototype.getColumn = function() {
  return /** @type{?proto.trb.postgresql.v1.Column} */ (
    jspb.Message.getWrapperField(this, proto.trb.postgresql.v1.Column, 4));
};


/**
 * @param {?proto.trb.postgresql.v1.Column|undefined} value
 * @return {!proto.trb.postgresql.v1.ModifyColumnRequest} returns this
*/
proto.trb.postgresql.v1.ModifyColumnRequest.prototype.setColumn = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.postgresql.v1.ModifyColumnRequest} returns this
 */
proto.trb.postgresql.v1.ModifyColumnRequest.prototype.clearColumn = function() {
  return this.setColumn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.postgresql.v1.ModifyColumnRequest.prototype.hasColumn = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.IndexSpec.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.IndexSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.IndexSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.IndexSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
table: jspb.Message.getFieldWithDefault(msg, 3, ""),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
columnsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
method: jspb.Message.getFieldWithDefault(msg, 6, ""),
unique: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
concurrently: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
where: jspb.Message.getFieldWithDefault(msg, 9, ""),
ifNotExists: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
tablespace: jspb.Message.getFieldWithDefault(msg, 11, ""),
include: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.IndexSpec}
 */
proto.trb.postgresql.v1.IndexSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.IndexSpec;
  return proto.trb.postgresql.v1.IndexSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.IndexSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.IndexSpec}
 */
proto.trb.postgresql.v1.IndexSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnique(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConcurrently(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhere(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfNotExists(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablespace(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setInclude(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.IndexSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.IndexSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.IndexSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUnique();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getConcurrently();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getWhere();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIfNotExists();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getTablespace();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getInclude();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string columns = 5;
 * @return {!Array<string>}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * optional string method = 6;
 * @return {string}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool unique = 7;
 * @return {boolean}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.getUnique = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.setUnique = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool concurrently = 8;
 * @return {boolean}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.getConcurrently = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.setConcurrently = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string where = 9;
 * @return {string}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.getWhere = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.setWhere = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool if_not_exists = 10;
 * @return {boolean}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.getIfNotExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.setIfNotExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string tablespace = 11;
 * @return {string}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.getTablespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.setTablespace = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string include = 12;
 * @return {string}
 */
proto.trb.postgresql.v1.IndexSpec.prototype.getInclude = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.IndexSpec} returns this
 */
proto.trb.postgresql.v1.IndexSpec.prototype.setInclude = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.IndexName.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.IndexName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.IndexName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.IndexName.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
ifExists: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
concurrently: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
cascade: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.IndexName}
 */
proto.trb.postgresql.v1.IndexName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.IndexName;
  return proto.trb.postgresql.v1.IndexName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.IndexName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.IndexName}
 */
proto.trb.postgresql.v1.IndexName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfExists(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConcurrently(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCascade(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.IndexName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.IndexName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.IndexName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.IndexName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIfExists();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getConcurrently();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCascade();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.IndexName.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.IndexName} returns this
 */
proto.trb.postgresql.v1.IndexName.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.IndexName.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.IndexName} returns this
 */
proto.trb.postgresql.v1.IndexName.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.IndexName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.IndexName} returns this
 */
proto.trb.postgresql.v1.IndexName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool if_exists = 4;
 * @return {boolean}
 */
proto.trb.postgresql.v1.IndexName.prototype.getIfExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.IndexName} returns this
 */
proto.trb.postgresql.v1.IndexName.prototype.setIfExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool concurrently = 5;
 * @return {boolean}
 */
proto.trb.postgresql.v1.IndexName.prototype.getConcurrently = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.IndexName} returns this
 */
proto.trb.postgresql.v1.IndexName.prototype.setConcurrently = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool cascade = 6;
 * @return {boolean}
 */
proto.trb.postgresql.v1.IndexName.prototype.getCascade = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.IndexName} returns this
 */
proto.trb.postgresql.v1.IndexName.prototype.setCascade = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ListIndexesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ListIndexesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ListIndexesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListIndexesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
table: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ListIndexesRequest}
 */
proto.trb.postgresql.v1.ListIndexesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ListIndexesRequest;
  return proto.trb.postgresql.v1.ListIndexesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ListIndexesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ListIndexesRequest}
 */
proto.trb.postgresql.v1.ListIndexesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ListIndexesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ListIndexesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ListIndexesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListIndexesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.ListIndexesRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListIndexesRequest} returns this
 */
proto.trb.postgresql.v1.ListIndexesRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.ListIndexesRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListIndexesRequest} returns this
 */
proto.trb.postgresql.v1.ListIndexesRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.ListIndexesRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListIndexesRequest} returns this
 */
proto.trb.postgresql.v1.ListIndexesRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.Index.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.Index.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.Index.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.Index} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Index.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
table: jspb.Message.getFieldWithDefault(msg, 3, ""),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
method: jspb.Message.getFieldWithDefault(msg, 5, ""),
unique: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
primary: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
valid: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
columnsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
definition: jspb.Message.getFieldWithDefault(msg, 10, ""),
sizeBytes: jspb.Message.getFieldWithDefault(msg, 11, 0),
tablespace: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.Index}
 */
proto.trb.postgresql.v1.Index.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.Index;
  return proto.trb.postgresql.v1.Index.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.Index} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.Index}
 */
proto.trb.postgresql.v1.Index.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnique(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrimary(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefinition(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSizeBytes(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablespace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.Index.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.Index.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.Index} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.Index.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUnique();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPrimary();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getValid();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getDefinition();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getTablespace();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.Index.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.Index.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.Index.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.Index.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string method = 5;
 * @return {string}
 */
proto.trb.postgresql.v1.Index.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool unique = 6;
 * @return {boolean}
 */
proto.trb.postgresql.v1.Index.prototype.getUnique = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.setUnique = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool primary = 7;
 * @return {boolean}
 */
proto.trb.postgresql.v1.Index.prototype.getPrimary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.setPrimary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool valid = 8;
 * @return {boolean}
 */
proto.trb.postgresql.v1.Index.prototype.getValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.setValid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * repeated string columns = 9;
 * @return {!Array<string>}
 */
proto.trb.postgresql.v1.Index.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * optional string definition = 10;
 * @return {string}
 */
proto.trb.postgresql.v1.Index.prototype.getDefinition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.setDefinition = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional uint64 size_bytes = 11;
 * @return {number}
 */
proto.trb.postgresql.v1.Index.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string tablespace = 12;
 * @return {string}
 */
proto.trb.postgresql.v1.Index.prototype.getTablespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.Index} returns this
 */
proto.trb.postgresql.v1.Index.prototype.setTablespace = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.IndexList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.IndexList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.IndexList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.IndexList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.IndexList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.postgresql.v1.Index.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.IndexList}
 */
proto.trb.postgresql.v1.IndexList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.IndexList;
  return proto.trb.postgresql.v1.IndexList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.IndexList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.IndexList}
 */
proto.trb.postgresql.v1.IndexList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.postgresql.v1.Index;
      reader.readMessage(value,proto.trb.postgresql.v1.Index.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.IndexList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.IndexList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.IndexList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.IndexList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.postgresql.v1.Index.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Index items = 1;
 * @return {!Array<!proto.trb.postgresql.v1.Index>}
 */
proto.trb.postgresql.v1.IndexList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.Index>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.Index, 1));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.Index>} value
 * @return {!proto.trb.postgresql.v1.IndexList} returns this
*/
proto.trb.postgresql.v1.IndexList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.postgresql.v1.Index=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.Index}
 */
proto.trb.postgresql.v1.IndexList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.postgresql.v1.Index, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.IndexList} returns this
 */
proto.trb.postgresql.v1.IndexList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ReindexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ReindexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ReindexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ReindexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
table: jspb.Message.getFieldWithDefault(msg, 3, ""),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
concurrently: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ReindexRequest}
 */
proto.trb.postgresql.v1.ReindexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ReindexRequest;
  return proto.trb.postgresql.v1.ReindexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ReindexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ReindexRequest}
 */
proto.trb.postgresql.v1.ReindexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConcurrently(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ReindexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ReindexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ReindexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ReindexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getConcurrently();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.ReindexRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ReindexRequest} returns this
 */
proto.trb.postgresql.v1.ReindexRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.ReindexRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ReindexRequest} returns this
 */
proto.trb.postgresql.v1.ReindexRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.ReindexRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ReindexRequest} returns this
 */
proto.trb.postgresql.v1.ReindexRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.ReindexRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ReindexRequest} returns this
 */
proto.trb.postgresql.v1.ReindexRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool concurrently = 5;
 * @return {boolean}
 */
proto.trb.postgresql.v1.ReindexRequest.prototype.getConcurrently = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.ReindexRequest} returns this
 */
proto.trb.postgresql.v1.ReindexRequest.prototype.setConcurrently = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.QueryRow.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.QueryRow.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.QueryRow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.QueryRow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.QueryRow.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.QueryRow}
 */
proto.trb.postgresql.v1.QueryRow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.QueryRow;
  return proto.trb.postgresql.v1.QueryRow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.QueryRow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.QueryRow}
 */
proto.trb.postgresql.v1.QueryRow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.QueryRow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.QueryRow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.QueryRow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.QueryRow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string values = 1;
 * @return {!Array<string>}
 */
proto.trb.postgresql.v1.QueryRow.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.postgresql.v1.QueryRow} returns this
 */
proto.trb.postgresql.v1.QueryRow.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.QueryRow} returns this
 */
proto.trb.postgresql.v1.QueryRow.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.QueryRow} returns this
 */
proto.trb.postgresql.v1.QueryRow.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ExecuteQueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ExecuteQueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ExecuteQueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ExecuteQueryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: jspb.Message.getFieldWithDefault(msg, 1, ""),
maxRows: jspb.Message.getFieldWithDefault(msg, 2, 0),
database: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ExecuteQueryRequest}
 */
proto.trb.postgresql.v1.ExecuteQueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ExecuteQueryRequest;
  return proto.trb.postgresql.v1.ExecuteQueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ExecuteQueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ExecuteQueryRequest}
 */
proto.trb.postgresql.v1.ExecuteQueryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxRows(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ExecuteQueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ExecuteQueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ExecuteQueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ExecuteQueryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxRows();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.ExecuteQueryRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ExecuteQueryRequest} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 max_rows = 2;
 * @return {number}
 */
proto.trb.postgresql.v1.ExecuteQueryRequest.prototype.getMaxRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.ExecuteQueryRequest} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryRequest.prototype.setMaxRows = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.ExecuteQueryRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ExecuteQueryRequest} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ExecuteQueryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ExecuteQueryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
columnsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
typesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
rowsList: jspb.Message.toObjectList(msg.getRowsList(),
    proto.trb.postgresql.v1.QueryRow.toObject, includeInstance),
totalRows: jspb.Message.getFieldWithDefault(msg, 4, 0),
elapsedSeconds: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
rowsAffected: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse}
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ExecuteQueryResponse;
  return proto.trb.postgresql.v1.ExecuteQueryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ExecuteQueryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse}
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTypes(value);
      break;
    case 3:
      var value = new proto.trb.postgresql.v1.QueryRow;
      reader.readMessage(value,proto.trb.postgresql.v1.QueryRow.deserializeBinaryFromReader);
      msg.addRows(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalRows(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setElapsedSeconds(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRowsAffected(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ExecuteQueryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ExecuteQueryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getRowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.trb.postgresql.v1.QueryRow.serializeBinaryToWriter
    );
  }
  f = message.getTotalRows();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getElapsedSeconds();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getRowsAffected();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * repeated string types = 2;
 * @return {!Array<string>}
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.getTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};


/**
 * repeated QueryRow rows = 3;
 * @return {!Array<!proto.trb.postgresql.v1.QueryRow>}
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.getRowsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.QueryRow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.QueryRow, 3));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.QueryRow>} value
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse} returns this
*/
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.setRowsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.trb.postgresql.v1.QueryRow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.QueryRow}
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.addRows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.trb.postgresql.v1.QueryRow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.clearRowsList = function() {
  return this.setRowsList([]);
};


/**
 * optional uint64 total_rows = 4;
 * @return {number}
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.getTotalRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.setTotalRows = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double elapsed_seconds = 5;
 * @return {number}
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.getElapsedSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.setElapsedSeconds = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint64 rows_affected = 6;
 * @return {number}
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.getRowsAffected = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.ExecuteQueryResponse} returns this
 */
proto.trb.postgresql.v1.ExecuteQueryResponse.prototype.setRowsAffected = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.PreviewTableDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.PreviewTableDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
table: jspb.Message.getFieldWithDefault(msg, 3, ""),
limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
offset: jspb.Message.getFieldWithDefault(msg, 5, 0),
orderBy: jspb.Message.getFieldWithDefault(msg, 6, ""),
where: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.PreviewTableDataRequest}
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.PreviewTableDataRequest;
  return proto.trb.postgresql.v1.PreviewTableDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.PreviewTableDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.PreviewTableDataRequest}
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOffset(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderBy(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhere(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.PreviewTableDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.PreviewTableDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getOrderBy();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWhere();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.PreviewTableDataRequest} returns this
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.PreviewTableDataRequest} returns this
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.PreviewTableDataRequest} returns this
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.PreviewTableDataRequest} returns this
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 offset = 5;
 * @return {number}
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.PreviewTableDataRequest} returns this
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string order_by = 6;
 * @return {string}
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.getOrderBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.PreviewTableDataRequest} returns this
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.setOrderBy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string where = 7;
 * @return {string}
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.getWhere = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.PreviewTableDataRequest} returns this
 */
proto.trb.postgresql.v1.PreviewTableDataRequest.prototype.setWhere = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.TablePartition.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.TablePartition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.TablePartition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TablePartition.toObject = function(includeInstance, msg) {
  var f, obj = {
schema: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
expression: jspb.Message.getFieldWithDefault(msg, 3, ""),
totalRows: jspb.Message.getFieldWithDefault(msg, 4, 0),
totalBytes: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.TablePartition}
 */
proto.trb.postgresql.v1.TablePartition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.TablePartition;
  return proto.trb.postgresql.v1.TablePartition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.TablePartition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.TablePartition}
 */
proto.trb.postgresql.v1.TablePartition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpression(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalRows(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.TablePartition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.TablePartition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.TablePartition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TablePartition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpression();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotalRows();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getTotalBytes();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string schema = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.TablePartition.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TablePartition} returns this
 */
proto.trb.postgresql.v1.TablePartition.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.TablePartition.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TablePartition} returns this
 */
proto.trb.postgresql.v1.TablePartition.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string expression = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.TablePartition.prototype.getExpression = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TablePartition} returns this
 */
proto.trb.postgresql.v1.TablePartition.prototype.setExpression = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 total_rows = 4;
 * @return {number}
 */
proto.trb.postgresql.v1.TablePartition.prototype.getTotalRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.TablePartition} returns this
 */
proto.trb.postgresql.v1.TablePartition.prototype.setTotalRows = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 total_bytes = 5;
 * @return {number}
 */
proto.trb.postgresql.v1.TablePartition.prototype.getTotalBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.TablePartition} returns this
 */
proto.trb.postgresql.v1.TablePartition.prototype.setTotalBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ListPartitionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ListPartitionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ListPartitionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListPartitionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
table: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ListPartitionsRequest}
 */
proto.trb.postgresql.v1.ListPartitionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ListPartitionsRequest;
  return proto.trb.postgresql.v1.ListPartitionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ListPartitionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ListPartitionsRequest}
 */
proto.trb.postgresql.v1.ListPartitionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ListPartitionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ListPartitionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ListPartitionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListPartitionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.ListPartitionsRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListPartitionsRequest} returns this
 */
proto.trb.postgresql.v1.ListPartitionsRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.ListPartitionsRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListPartitionsRequest} returns this
 */
proto.trb.postgresql.v1.ListPartitionsRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.ListPartitionsRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListPartitionsRequest} returns this
 */
proto.trb.postgresql.v1.ListPartitionsRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.PartitionList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.PartitionList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.PartitionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.PartitionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.PartitionList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.postgresql.v1.TablePartition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.PartitionList}
 */
proto.trb.postgresql.v1.PartitionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.PartitionList;
  return proto.trb.postgresql.v1.PartitionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.PartitionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.PartitionList}
 */
proto.trb.postgresql.v1.PartitionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.postgresql.v1.TablePartition;
      reader.readMessage(value,proto.trb.postgresql.v1.TablePartition.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.PartitionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.PartitionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.PartitionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.PartitionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.postgresql.v1.TablePartition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TablePartition items = 1;
 * @return {!Array<!proto.trb.postgresql.v1.TablePartition>}
 */
proto.trb.postgresql.v1.PartitionList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.TablePartition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.TablePartition, 1));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.TablePartition>} value
 * @return {!proto.trb.postgresql.v1.PartitionList} returns this
*/
proto.trb.postgresql.v1.PartitionList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.postgresql.v1.TablePartition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.TablePartition}
 */
proto.trb.postgresql.v1.PartitionList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.postgresql.v1.TablePartition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.PartitionList} returns this
 */
proto.trb.postgresql.v1.PartitionList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.DropPartitionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.DropPartitionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.DropPartitionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
table: jspb.Message.getFieldWithDefault(msg, 3, ""),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
detach: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
concurrently: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
cascade: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.DropPartitionRequest}
 */
proto.trb.postgresql.v1.DropPartitionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.DropPartitionRequest;
  return proto.trb.postgresql.v1.DropPartitionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.DropPartitionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.DropPartitionRequest}
 */
proto.trb.postgresql.v1.DropPartitionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDetach(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConcurrently(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCascade(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.DropPartitionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.DropPartitionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.DropPartitionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDetach();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getConcurrently();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getCascade();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DropPartitionRequest} returns this
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DropPartitionRequest} returns this
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DropPartitionRequest} returns this
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.DropPartitionRequest} returns this
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool detach = 5;
 * @return {boolean}
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.getDetach = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.DropPartitionRequest} returns this
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.setDetach = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool concurrently = 6;
 * @return {boolean}
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.getConcurrently = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.DropPartitionRequest} returns this
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.setConcurrently = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool cascade = 7;
 * @return {boolean}
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.getCascade = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.DropPartitionRequest} returns this
 */
proto.trb.postgresql.v1.DropPartitionRequest.prototype.setCascade = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ProcessInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ProcessInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ProcessInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
user: jspb.Message.getFieldWithDefault(msg, 2, ""),
database: jspb.Message.getFieldWithDefault(msg, 3, ""),
applicationName: jspb.Message.getFieldWithDefault(msg, 4, ""),
clientAddr: jspb.Message.getFieldWithDefault(msg, 5, ""),
state: jspb.Message.getFieldWithDefault(msg, 6, ""),
waitEventType: jspb.Message.getFieldWithDefault(msg, 7, ""),
waitEvent: jspb.Message.getFieldWithDefault(msg, 8, ""),
query: jspb.Message.getFieldWithDefault(msg, 9, ""),
backendStart: (f = msg.getBackendStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
queryStart: (f = msg.getQueryStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
stateChange: (f = msg.getStateChange()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
backendType: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ProcessInfo}
 */
proto.trb.postgresql.v1.ProcessInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ProcessInfo;
  return proto.trb.postgresql.v1.ProcessInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ProcessInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ProcessInfo}
 */
proto.trb.postgresql.v1.ProcessInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientAddr(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWaitEventType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setWaitEvent(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBackendStart(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setQueryStart(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStateChange(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackendType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ProcessInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ProcessInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ProcessInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApplicationName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientAddr();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWaitEventType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getWaitEvent();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getBackendStart();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getQueryStart();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStateChange();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getBackendType();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional int32 pid = 1;
 * @return {number}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string user = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string application_name = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getApplicationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.setApplicationName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string client_addr = 5;
 * @return {string}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getClientAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.setClientAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string state = 6;
 * @return {string}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string wait_event_type = 7;
 * @return {string}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getWaitEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.setWaitEventType = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string wait_event = 8;
 * @return {string}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getWaitEvent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.setWaitEvent = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string query = 9;
 * @return {string}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp backend_start = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getBackendStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
*/
proto.trb.postgresql.v1.ProcessInfo.prototype.setBackendStart = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.clearBackendStart = function() {
  return this.setBackendStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.hasBackendStart = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp query_start = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getQueryStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
*/
proto.trb.postgresql.v1.ProcessInfo.prototype.setQueryStart = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.clearQueryStart = function() {
  return this.setQueryStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.hasQueryStart = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp state_change = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getStateChange = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
*/
proto.trb.postgresql.v1.ProcessInfo.prototype.setStateChange = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.clearStateChange = function() {
  return this.setStateChange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.hasStateChange = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string backend_type = 13;
 * @return {string}
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.getBackendType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ProcessInfo} returns this
 */
proto.trb.postgresql.v1.ProcessInfo.prototype.setBackendType = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ListProcessesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ListProcessesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ListProcessesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListProcessesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
activeOnly: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ListProcessesRequest}
 */
proto.trb.postgresql.v1.ListProcessesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ListProcessesRequest;
  return proto.trb.postgresql.v1.ListProcessesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ListProcessesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ListProcessesRequest}
 */
proto.trb.postgresql.v1.ListProcessesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActiveOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ListProcessesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ListProcessesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ListProcessesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListProcessesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActiveOnly();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.ListProcessesRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListProcessesRequest} returns this
 */
proto.trb.postgresql.v1.ListProcessesRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool active_only = 2;
 * @return {boolean}
 */
proto.trb.postgresql.v1.ListProcessesRequest.prototype.getActiveOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.ListProcessesRequest} returns this
 */
proto.trb.postgresql.v1.ListProcessesRequest.prototype.setActiveOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.ProcessList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ProcessList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ProcessList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ProcessList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ProcessList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.postgresql.v1.ProcessInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ProcessList}
 */
proto.trb.postgresql.v1.ProcessList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ProcessList;
  return proto.trb.postgresql.v1.ProcessList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ProcessList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ProcessList}
 */
proto.trb.postgresql.v1.ProcessList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.postgresql.v1.ProcessInfo;
      reader.readMessage(value,proto.trb.postgresql.v1.ProcessInfo.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ProcessList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ProcessList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ProcessList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ProcessList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.postgresql.v1.ProcessInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProcessInfo items = 1;
 * @return {!Array<!proto.trb.postgresql.v1.ProcessInfo>}
 */
proto.trb.postgresql.v1.ProcessList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.ProcessInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.ProcessInfo, 1));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.ProcessInfo>} value
 * @return {!proto.trb.postgresql.v1.ProcessList} returns this
*/
proto.trb.postgresql.v1.ProcessList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.postgresql.v1.ProcessInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.ProcessInfo}
 */
proto.trb.postgresql.v1.ProcessList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.postgresql.v1.ProcessInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.ProcessList} returns this
 */
proto.trb.postgresql.v1.ProcessList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.KillProcessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.KillProcessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.KillProcessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.KillProcessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
terminate: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.KillProcessRequest}
 */
proto.trb.postgresql.v1.KillProcessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.KillProcessRequest;
  return proto.trb.postgresql.v1.KillProcessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.KillProcessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.KillProcessRequest}
 */
proto.trb.postgresql.v1.KillProcessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTerminate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.KillProcessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.KillProcessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.KillProcessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.KillProcessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTerminate();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int32 pid = 1;
 * @return {number}
 */
proto.trb.postgresql.v1.KillProcessRequest.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.KillProcessRequest} returns this
 */
proto.trb.postgresql.v1.KillProcessRequest.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool terminate = 2;
 * @return {boolean}
 */
proto.trb.postgresql.v1.KillProcessRequest.prototype.getTerminate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.KillProcessRequest} returns this
 */
proto.trb.postgresql.v1.KillProcessRequest.prototype.setTerminate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.LockInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.LockInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.LockInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.LockInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
locktype: jspb.Message.getFieldWithDefault(msg, 2, ""),
database: jspb.Message.getFieldWithDefault(msg, 3, ""),
relation: jspb.Message.getFieldWithDefault(msg, 4, ""),
mode: jspb.Message.getFieldWithDefault(msg, 5, ""),
granted: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
fastpath: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
query: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.LockInfo}
 */
proto.trb.postgresql.v1.LockInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.LockInfo;
  return proto.trb.postgresql.v1.LockInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.LockInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.LockInfo}
 */
proto.trb.postgresql.v1.LockInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocktype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelation(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGranted(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFastpath(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.LockInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.LockInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.LockInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.LockInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLocktype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRelation();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getGranted();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getFastpath();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int32 pid = 1;
 * @return {number}
 */
proto.trb.postgresql.v1.LockInfo.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.LockInfo} returns this
 */
proto.trb.postgresql.v1.LockInfo.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string locktype = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.LockInfo.prototype.getLocktype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.LockInfo} returns this
 */
proto.trb.postgresql.v1.LockInfo.prototype.setLocktype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.LockInfo.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.LockInfo} returns this
 */
proto.trb.postgresql.v1.LockInfo.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string relation = 4;
 * @return {string}
 */
proto.trb.postgresql.v1.LockInfo.prototype.getRelation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.LockInfo} returns this
 */
proto.trb.postgresql.v1.LockInfo.prototype.setRelation = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string mode = 5;
 * @return {string}
 */
proto.trb.postgresql.v1.LockInfo.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.LockInfo} returns this
 */
proto.trb.postgresql.v1.LockInfo.prototype.setMode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool granted = 6;
 * @return {boolean}
 */
proto.trb.postgresql.v1.LockInfo.prototype.getGranted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.LockInfo} returns this
 */
proto.trb.postgresql.v1.LockInfo.prototype.setGranted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool fastpath = 7;
 * @return {boolean}
 */
proto.trb.postgresql.v1.LockInfo.prototype.getFastpath = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.LockInfo} returns this
 */
proto.trb.postgresql.v1.LockInfo.prototype.setFastpath = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string query = 8;
 * @return {string}
 */
proto.trb.postgresql.v1.LockInfo.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.LockInfo} returns this
 */
proto.trb.postgresql.v1.LockInfo.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ListLocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ListLocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ListLocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListLocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
grantedOnly: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ListLocksRequest}
 */
proto.trb.postgresql.v1.ListLocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ListLocksRequest;
  return proto.trb.postgresql.v1.ListLocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ListLocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ListLocksRequest}
 */
proto.trb.postgresql.v1.ListLocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGrantedOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ListLocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ListLocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ListLocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListLocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantedOnly();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.ListLocksRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.ListLocksRequest} returns this
 */
proto.trb.postgresql.v1.ListLocksRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool granted_only = 2;
 * @return {boolean}
 */
proto.trb.postgresql.v1.ListLocksRequest.prototype.getGrantedOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.postgresql.v1.ListLocksRequest} returns this
 */
proto.trb.postgresql.v1.ListLocksRequest.prototype.setGrantedOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.LockList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.LockList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.LockList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.LockList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.LockList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.postgresql.v1.LockInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.LockList}
 */
proto.trb.postgresql.v1.LockList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.LockList;
  return proto.trb.postgresql.v1.LockList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.LockList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.LockList}
 */
proto.trb.postgresql.v1.LockList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.postgresql.v1.LockInfo;
      reader.readMessage(value,proto.trb.postgresql.v1.LockInfo.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.LockList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.LockList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.LockList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.LockList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.postgresql.v1.LockInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LockInfo items = 1;
 * @return {!Array<!proto.trb.postgresql.v1.LockInfo>}
 */
proto.trb.postgresql.v1.LockList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.LockInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.LockInfo, 1));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.LockInfo>} value
 * @return {!proto.trb.postgresql.v1.LockList} returns this
*/
proto.trb.postgresql.v1.LockList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.postgresql.v1.LockInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.LockInfo}
 */
proto.trb.postgresql.v1.LockList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.postgresql.v1.LockInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.LockList} returns this
 */
proto.trb.postgresql.v1.LockList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.TablespaceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.TablespaceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.TablespaceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TablespaceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
owner: jspb.Message.getFieldWithDefault(msg, 2, ""),
location: jspb.Message.getFieldWithDefault(msg, 3, ""),
sizeBytes: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.TablespaceInfo}
 */
proto.trb.postgresql.v1.TablespaceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.TablespaceInfo;
  return proto.trb.postgresql.v1.TablespaceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.TablespaceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.TablespaceInfo}
 */
proto.trb.postgresql.v1.TablespaceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSizeBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.TablespaceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.TablespaceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.TablespaceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TablespaceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.TablespaceInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TablespaceInfo} returns this
 */
proto.trb.postgresql.v1.TablespaceInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string owner = 2;
 * @return {string}
 */
proto.trb.postgresql.v1.TablespaceInfo.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TablespaceInfo} returns this
 */
proto.trb.postgresql.v1.TablespaceInfo.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string location = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.TablespaceInfo.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.TablespaceInfo} returns this
 */
proto.trb.postgresql.v1.TablespaceInfo.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 size_bytes = 4;
 * @return {number}
 */
proto.trb.postgresql.v1.TablespaceInfo.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.TablespaceInfo} returns this
 */
proto.trb.postgresql.v1.TablespaceInfo.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.ListTablespacesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.ListTablespacesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.ListTablespacesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListTablespacesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.ListTablespacesRequest}
 */
proto.trb.postgresql.v1.ListTablespacesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.ListTablespacesRequest;
  return proto.trb.postgresql.v1.ListTablespacesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.ListTablespacesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.ListTablespacesRequest}
 */
proto.trb.postgresql.v1.ListTablespacesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.ListTablespacesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.ListTablespacesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.ListTablespacesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.ListTablespacesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.TablespaceList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.TablespaceList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.TablespaceList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.TablespaceList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TablespaceList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.postgresql.v1.TablespaceInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.TablespaceList}
 */
proto.trb.postgresql.v1.TablespaceList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.TablespaceList;
  return proto.trb.postgresql.v1.TablespaceList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.TablespaceList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.TablespaceList}
 */
proto.trb.postgresql.v1.TablespaceList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.postgresql.v1.TablespaceInfo;
      reader.readMessage(value,proto.trb.postgresql.v1.TablespaceInfo.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.TablespaceList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.TablespaceList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.TablespaceList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TablespaceList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.postgresql.v1.TablespaceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TablespaceInfo items = 1;
 * @return {!Array<!proto.trb.postgresql.v1.TablespaceInfo>}
 */
proto.trb.postgresql.v1.TablespaceList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.TablespaceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.TablespaceInfo, 1));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.TablespaceInfo>} value
 * @return {!proto.trb.postgresql.v1.TablespaceList} returns this
*/
proto.trb.postgresql.v1.TablespaceList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.postgresql.v1.TablespaceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.TablespaceInfo}
 */
proto.trb.postgresql.v1.TablespaceList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.postgresql.v1.TablespaceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.TablespaceList} returns this
 */
proto.trb.postgresql.v1.TablespaceList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.MetricItem.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.MetricItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.MetricItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.MetricItem.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
description: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.MetricItem}
 */
proto.trb.postgresql.v1.MetricItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.MetricItem;
  return proto.trb.postgresql.v1.MetricItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.MetricItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.MetricItem}
 */
proto.trb.postgresql.v1.MetricItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.MetricItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.MetricItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.MetricItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.MetricItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.MetricItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.MetricItem} returns this
 */
proto.trb.postgresql.v1.MetricItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.trb.postgresql.v1.MetricItem.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.trb.postgresql.v1.MetricItem} returns this
 */
proto.trb.postgresql.v1.MetricItem.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.trb.postgresql.v1.MetricItem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.MetricItem} returns this
 */
proto.trb.postgresql.v1.MetricItem.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.GetMetricsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.GetMetricsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.GetMetricsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.GetMetricsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.GetMetricsRequest}
 */
proto.trb.postgresql.v1.GetMetricsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.GetMetricsRequest;
  return proto.trb.postgresql.v1.GetMetricsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.GetMetricsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.GetMetricsRequest}
 */
proto.trb.postgresql.v1.GetMetricsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.GetMetricsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.GetMetricsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.GetMetricsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.GetMetricsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.postgresql.v1.GetMetricsRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.postgresql.v1.GetMetricsRequest} returns this
 */
proto.trb.postgresql.v1.GetMetricsRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.MetricsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.MetricsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.MetricsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.MetricsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.MetricsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
metricsList: jspb.Message.toObjectList(msg.getMetricsList(),
    proto.trb.postgresql.v1.MetricItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.MetricsResponse}
 */
proto.trb.postgresql.v1.MetricsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.MetricsResponse;
  return proto.trb.postgresql.v1.MetricsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.MetricsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.MetricsResponse}
 */
proto.trb.postgresql.v1.MetricsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.postgresql.v1.MetricItem;
      reader.readMessage(value,proto.trb.postgresql.v1.MetricItem.deserializeBinaryFromReader);
      msg.addMetrics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.MetricsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.MetricsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.MetricsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.MetricsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.postgresql.v1.MetricItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MetricItem metrics = 1;
 * @return {!Array<!proto.trb.postgresql.v1.MetricItem>}
 */
proto.trb.postgresql.v1.MetricsResponse.prototype.getMetricsList = function() {
  return /** @type{!Array<!proto.trb.postgresql.v1.MetricItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.postgresql.v1.MetricItem, 1));
};


/**
 * @param {!Array<!proto.trb.postgresql.v1.MetricItem>} value
 * @return {!proto.trb.postgresql.v1.MetricsResponse} returns this
*/
proto.trb.postgresql.v1.MetricsResponse.prototype.setMetricsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.postgresql.v1.MetricItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.MetricItem}
 */
proto.trb.postgresql.v1.MetricsResponse.prototype.addMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.postgresql.v1.MetricItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.MetricsResponse} returns this
 */
proto.trb.postgresql.v1.MetricsResponse.prototype.clearMetricsList = function() {
  return this.setMetricsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.TableOptionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.TableOptionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.TableOptionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TableOptionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.TableOptionsRequest}
 */
proto.trb.postgresql.v1.TableOptionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.TableOptionsRequest;
  return proto.trb.postgresql.v1.TableOptionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.TableOptionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.TableOptionsRequest}
 */
proto.trb.postgresql.v1.TableOptionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.TableOptionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.TableOptionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.TableOptionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TableOptionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.postgresql.v1.TableOptionsResponse.repeatedFields_ = [1,2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.postgresql.v1.TableOptionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.postgresql.v1.TableOptionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TableOptionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
dataTypesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
indexMethodsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
collationsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
tablespacesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse}
 */
proto.trb.postgresql.v1.TableOptionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.postgresql.v1.TableOptionsResponse;
  return proto.trb.postgresql.v1.TableOptionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.postgresql.v1.TableOptionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse}
 */
proto.trb.postgresql.v1.TableOptionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDataTypes(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addIndexMethods(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addCollations(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTablespaces(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.postgresql.v1.TableOptionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.postgresql.v1.TableOptionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.postgresql.v1.TableOptionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getIndexMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getCollationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getTablespacesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * repeated string data_types = 1;
 * @return {!Array<string>}
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.getDataTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse} returns this
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.setDataTypesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse} returns this
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.addDataTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse} returns this
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.clearDataTypesList = function() {
  return this.setDataTypesList([]);
};


/**
 * repeated string index_methods = 2;
 * @return {!Array<string>}
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.getIndexMethodsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse} returns this
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.setIndexMethodsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse} returns this
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.addIndexMethods = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse} returns this
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.clearIndexMethodsList = function() {
  return this.setIndexMethodsList([]);
};


/**
 * repeated string collations = 3;
 * @return {!Array<string>}
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.getCollationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse} returns this
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.setCollationsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse} returns this
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.addCollations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse} returns this
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.clearCollationsList = function() {
  return this.setCollationsList([]);
};


/**
 * repeated string tablespaces = 4;
 * @return {!Array<string>}
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.getTablespacesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse} returns this
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.setTablespacesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse} returns this
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.addTablespaces = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.postgresql.v1.TableOptionsResponse} returns this
 */
proto.trb.postgresql.v1.TableOptionsResponse.prototype.clearTablespacesList = function() {
  return this.setTablespacesList([]);
};


goog.object.extend(exports, proto.trb.postgresql.v1);
