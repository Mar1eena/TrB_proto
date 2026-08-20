// source: clickhouse_manager/manager.proto
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
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.Column', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.Database', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.DatabaseList', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.DatabaseName', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.DiskInfo', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.DiskList', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.MetricItem', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.PartsList', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.PingRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.PingResponse', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.ProcessList', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.QueryRow', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.Status', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.Table', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.TableEngine', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.TableList', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.TableName', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.TablePart', null, global);
goog.exportSymbol('proto.trb.clickhouse.manager.public.contract.v1.TableSpec', null, global);
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
proto.trb.clickhouse.manager.public.contract.v1.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.Status.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.Status';
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
proto.trb.clickhouse.manager.public.contract.v1.PingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.PingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.PingRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.PingRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.PingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.PingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.PingResponse.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.PingResponse';
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
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse';
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
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec';
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
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.DatabaseName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.DatabaseName';
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
proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.Database = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.Database, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.Database.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.Database';
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
proto.trb.clickhouse.manager.public.contract.v1.DatabaseList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.repeatedFields_, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.DatabaseList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.DatabaseList';
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
proto.trb.clickhouse.manager.public.contract.v1.Column = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.Column, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.Column.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.Column';
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
proto.trb.clickhouse.manager.public.contract.v1.TableEngine = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.clickhouse.manager.public.contract.v1.TableEngine.repeatedFields_, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.TableEngine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.TableEngine.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.TableEngine';
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
proto.trb.clickhouse.manager.public.contract.v1.TableSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.clickhouse.manager.public.contract.v1.TableSpec.repeatedFields_, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.TableSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.TableSpec.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.TableSpec';
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
proto.trb.clickhouse.manager.public.contract.v1.TableName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.TableName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.TableName.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.TableName';
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
proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.Table = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.clickhouse.manager.public.contract.v1.Table.repeatedFields_, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.Table, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.Table.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.Table';
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
proto.trb.clickhouse.manager.public.contract.v1.TableList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.clickhouse.manager.public.contract.v1.TableList.repeatedFields_, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.TableList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.TableList.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.TableList';
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
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.QueryRow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.clickhouse.manager.public.contract.v1.QueryRow.repeatedFields_, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.QueryRow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.QueryRow.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.QueryRow';
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
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.repeatedFields_, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse';
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
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.TablePart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.TablePart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.TablePart.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.TablePart';
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
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.PartsList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.clickhouse.manager.public.contract.v1.PartsList.repeatedFields_, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.PartsList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.PartsList.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.PartsList';
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
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo';
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
proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.ProcessList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.clickhouse.manager.public.contract.v1.ProcessList.repeatedFields_, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.ProcessList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.ProcessList.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.ProcessList';
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
proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.DiskInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.DiskInfo';
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
proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.DiskList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.clickhouse.manager.public.contract.v1.DiskList.repeatedFields_, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.DiskList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.DiskList.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.DiskList';
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
proto.trb.clickhouse.manager.public.contract.v1.MetricItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.MetricItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.MetricItem.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.MetricItem';
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
proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.repeatedFields_, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse';
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
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest';
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
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.repeatedFields_, null);
};
goog.inherits(proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.displayName = 'proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse';
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
proto.trb.clickhouse.manager.public.contract.v1.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.Status.toObject = function(includeInstance, msg) {
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Status}
 */
proto.trb.clickhouse.manager.public.contract.v1.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.Status;
  return proto.trb.clickhouse.manager.public.contract.v1.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Status}
 */
proto.trb.clickhouse.manager.public.contract.v1.Status.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.Status.serializeBinaryToWriter = function(message, writer) {
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
proto.trb.clickhouse.manager.public.contract.v1.Status.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Status} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Status.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Status.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Status} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Status.prototype.setMessage = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.PingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.PingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.PingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.PingRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PingRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.PingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.PingRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.PingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.PingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PingRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.PingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.PingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.PingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.PingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.PingRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.trb.clickhouse.manager.public.contract.v1.PingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.PingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.PingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.PingResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PingResponse}
 */
proto.trb.clickhouse.manager.public.contract.v1.PingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.PingResponse;
  return proto.trb.clickhouse.manager.public.contract.v1.PingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.PingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PingResponse}
 */
proto.trb.clickhouse.manager.public.contract.v1.PingResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.PingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.PingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.PingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.PingResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.trb.clickhouse.manager.public.contract.v1.PingResponse.prototype.getOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PingResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.PingResponse.prototype.setOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.PingResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PingResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.PingResponse.prototype.setVersion = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
version: jspb.Message.getFieldWithDefault(msg, 1, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
revision: jspb.Message.getFieldWithDefault(msg, 3, 0),
timezone: jspb.Message.getFieldWithDefault(msg, 4, ""),
uptimeSeconds: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse}
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse;
  return proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse}
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRevision(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUptimeSeconds(value);
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
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRevision();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getUptimeSeconds();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 revision = 3;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.prototype.getRevision = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.prototype.setRevision = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string timezone = 4;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 uptime_seconds = 5;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.prototype.getUptimeSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ServerInfoResponse.prototype.setUptimeSeconds = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
engine: jspb.Message.getFieldWithDefault(msg, 2, ""),
comment: jspb.Message.getFieldWithDefault(msg, 3, ""),
ifNotExists: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
cluster: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec;
  return proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEngine(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfNotExists(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
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
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEngine();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getComment();
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
  f = message.getCluster();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string engine = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.prototype.getEngine = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.prototype.setEngine = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string comment = 3;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool if_not_exists = 4;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.prototype.getIfNotExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.prototype.setIfNotExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string cluster = 5;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseSpec.prototype.setCluster = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
ifExists: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
sync: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
cluster: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseName}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.DatabaseName;
  return proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseName}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSync(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
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
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSync();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCluster();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseName} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool if_exists = 2;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.prototype.getIfExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseName} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.prototype.setIfExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool sync = 3;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.prototype.getSync = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseName} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.prototype.setSync = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string cluster = 4;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseName} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseName.prototype.setCluster = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest.prototype.getLike = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ListDatabasesRequest.prototype.setLike = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.Database.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Database} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
engine: jspb.Message.getFieldWithDefault(msg, 2, ""),
comment: jspb.Message.getFieldWithDefault(msg, 3, ""),
tablesCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
totalBytes: jspb.Message.getFieldWithDefault(msg, 5, 0),
totalRows: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Database}
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.Database;
  return proto.trb.clickhouse.manager.public.contract.v1.Database.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Database} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Database}
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEngine(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTablesCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalBytes(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalRows(value);
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
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.Database.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Database} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEngine();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getComment();
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
  f = message.getTotalRows();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Database} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string engine = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.getEngine = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Database} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.setEngine = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string comment = 3;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Database} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 tables_count = 4;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.getTablesCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Database} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.setTablesCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 total_bytes = 5;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.getTotalBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Database} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.setTotalBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 total_rows = 6;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.getTotalRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Database} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Database.prototype.setTotalRows = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.repeatedFields_ = [1];



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
proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.clickhouse.manager.public.contract.v1.Database.toObject, includeInstance)
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseList}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.DatabaseList;
  return proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseList}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.clickhouse.manager.public.contract.v1.Database;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.Database.deserializeBinaryFromReader);
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
proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.clickhouse.manager.public.contract.v1.Database.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Database items = 1;
 * @return {!Array<!proto.trb.clickhouse.manager.public.contract.v1.Database>}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.clickhouse.manager.public.contract.v1.Database>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.Database, 1));
};


/**
 * @param {!Array<!proto.trb.clickhouse.manager.public.contract.v1.Database>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseList} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Database=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Database}
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.clickhouse.manager.public.contract.v1.Database, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DatabaseList} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DatabaseList.prototype.clearItemsList = function() {
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
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.Column.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Column} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
type: jspb.Message.getFieldWithDefault(msg, 2, ""),
defaultKind: jspb.Message.getFieldWithDefault(msg, 3, ""),
defaultExpression: jspb.Message.getFieldWithDefault(msg, 4, ""),
codec: jspb.Message.getFieldWithDefault(msg, 5, ""),
ttl: jspb.Message.getFieldWithDefault(msg, 6, ""),
comment: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Column}
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.Column;
  return proto.trb.clickhouse.manager.public.contract.v1.Column.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Column} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Column}
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultKind(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultExpression(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodec(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTtl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
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
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.Column.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Column} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDefaultKind();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getCodec();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTtl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Column} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Column} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string default_kind = 3;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.getDefaultKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Column} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.setDefaultKind = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string default_expression = 4;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.getDefaultExpression = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Column} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.setDefaultExpression = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string codec = 5;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.getCodec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Column} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.setCodec = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string ttl = 6;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.getTtl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Column} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.setTtl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string comment = 7;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Column} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Column.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.repeatedFields_ = [2];



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
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.TableEngine.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableEngine} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
paramsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableEngine}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.TableEngine;
  return proto.trb.clickhouse.manager.public.contract.v1.TableEngine.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableEngine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableEngine}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addParams(value);
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
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.TableEngine.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableEngine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParamsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableEngine} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string params = 2;
 * @return {!Array<string>}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.prototype.getParamsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableEngine} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.prototype.setParamsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableEngine} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.prototype.addParams = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableEngine} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableEngine.prototype.clearParamsList = function() {
  return this.setParamsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.repeatedFields_ = [3];



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
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.TableSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
columnsList: jspb.Message.toObjectList(msg.getColumnsList(),
    proto.trb.clickhouse.manager.public.contract.v1.Column.toObject, includeInstance),
engine: (f = msg.getEngine()) && proto.trb.clickhouse.manager.public.contract.v1.TableEngine.toObject(includeInstance, f),
orderBy: jspb.Message.getFieldWithDefault(msg, 5, ""),
partitionBy: jspb.Message.getFieldWithDefault(msg, 6, ""),
primaryKey: jspb.Message.getFieldWithDefault(msg, 7, ""),
sampleBy: jspb.Message.getFieldWithDefault(msg, 8, ""),
ttl: jspb.Message.getFieldWithDefault(msg, 9, ""),
settingsMap: (f = msg.getSettingsMap()) ? f.toObject(includeInstance, undefined) : [],
comment: jspb.Message.getFieldWithDefault(msg, 11, ""),
ifNotExists: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
cluster: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.TableSpec;
  return proto.trb.clickhouse.manager.public.contract.v1.TableSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.trb.clickhouse.manager.public.contract.v1.Column;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.Column.deserializeBinaryFromReader);
      msg.addColumns(value);
      break;
    case 4:
      var value = new proto.trb.clickhouse.manager.public.contract.v1.TableEngine;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.TableEngine.deserializeBinaryFromReader);
      msg.setEngine(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderBy(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartitionBy(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimaryKey(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSampleBy(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTtl(value);
      break;
    case 10:
      var value = msg.getSettingsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfNotExists(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
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
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.TableSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.trb.clickhouse.manager.public.contract.v1.Column.serializeBinaryToWriter
    );
  }
  f = message.getEngine();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.trb.clickhouse.manager.public.contract.v1.TableEngine.serializeBinaryToWriter
    );
  }
  f = message.getOrderBy();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPartitionBy();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPrimaryKey();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSampleBy();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTtl();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSettingsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getIfNotExists();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getCluster();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Column columns = 3;
 * @return {!Array<!proto.trb.clickhouse.manager.public.contract.v1.Column>}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getColumnsList = function() {
  return /** @type{!Array<!proto.trb.clickhouse.manager.public.contract.v1.Column>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.Column, 3));
};


/**
 * @param {!Array<!proto.trb.clickhouse.manager.public.contract.v1.Column>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.setColumnsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Column=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Column}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.addColumns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.trb.clickhouse.manager.public.contract.v1.Column, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * optional TableEngine engine = 4;
 * @return {?proto.trb.clickhouse.manager.public.contract.v1.TableEngine}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getEngine = function() {
  return /** @type{?proto.trb.clickhouse.manager.public.contract.v1.TableEngine} */ (
    jspb.Message.getWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.TableEngine, 4));
};


/**
 * @param {?proto.trb.clickhouse.manager.public.contract.v1.TableEngine|undefined} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.setEngine = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.clearEngine = function() {
  return this.setEngine(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.hasEngine = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string order_by = 5;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getOrderBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.setOrderBy = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string partition_by = 6;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getPartitionBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.setPartitionBy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string primary_key = 7;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getPrimaryKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.setPrimaryKey = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string sample_by = 8;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getSampleBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.setSampleBy = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string ttl = 9;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getTtl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.setTtl = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * map<string, string> settings = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getSettingsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.clearSettingsMap = function() {
  this.getSettingsMap().clear();
  return this;
};


/**
 * optional string comment = 11;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool if_not_exists = 12;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getIfNotExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.setIfNotExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional string cluster = 13;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableSpec} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableSpec.prototype.setCluster = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.TableName.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.TableName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
ifExists: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
sync: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
cluster: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableName}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.TableName;
  return proto.trb.clickhouse.manager.public.contract.v1.TableName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableName}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSync(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
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
proto.trb.clickhouse.manager.public.contract.v1.TableName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.TableName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSync();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCluster();
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
proto.trb.clickhouse.manager.public.contract.v1.TableName.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableName} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableName} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool if_exists = 3;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.prototype.getIfExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableName} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.prototype.setIfExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool sync = 4;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.prototype.getSync = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableName} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.prototype.setSync = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string cluster = 5;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableName} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableName.prototype.setCluster = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
like: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string like = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.prototype.getLike = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ListTablesRequest.prototype.setLike = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.repeatedFields_ = [12];



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
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.Table.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Table} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
engine: jspb.Message.getFieldWithDefault(msg, 3, ""),
totalRows: jspb.Message.getFieldWithDefault(msg, 4, 0),
totalBytes: jspb.Message.getFieldWithDefault(msg, 5, 0),
partitionKey: jspb.Message.getFieldWithDefault(msg, 6, ""),
sortingKey: jspb.Message.getFieldWithDefault(msg, 7, ""),
primaryKey: jspb.Message.getFieldWithDefault(msg, 8, ""),
comment: jspb.Message.getFieldWithDefault(msg, 9, ""),
createTableQuery: jspb.Message.getFieldWithDefault(msg, 10, ""),
metadataModificationTime: (f = msg.getMetadataModificationTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
columnsList: jspb.Message.toObjectList(msg.getColumnsList(),
    proto.trb.clickhouse.manager.public.contract.v1.Column.toObject, includeInstance),
partsCount: jspb.Message.getFieldWithDefault(msg, 13, 0),
dataUncompressedBytes: jspb.Message.getFieldWithDefault(msg, 14, 0)
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.Table;
  return proto.trb.clickhouse.manager.public.contract.v1.Table.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Table} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEngine(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalRows(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalBytes(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartitionKey(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSortingKey(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimaryKey(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateTableQuery(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMetadataModificationTime(value);
      break;
    case 12:
      var value = new proto.trb.clickhouse.manager.public.contract.v1.Column;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.Column.deserializeBinaryFromReader);
      msg.addColumns(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPartsCount(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDataUncompressedBytes(value);
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
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.Table.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Table} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getEngine();
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
  f = message.getPartitionKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSortingKey();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPrimaryKey();
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
  f = message.getCreateTableQuery();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMetadataModificationTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.trb.clickhouse.manager.public.contract.v1.Column.serializeBinaryToWriter
    );
  }
  f = message.getPartsCount();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getDataUncompressedBytes();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string engine = 3;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getEngine = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setEngine = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 total_rows = 4;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getTotalRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setTotalRows = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 total_bytes = 5;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getTotalBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setTotalBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string partition_key = 6;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getPartitionKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setPartitionKey = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string sorting_key = 7;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getSortingKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setSortingKey = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string primary_key = 8;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getPrimaryKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setPrimaryKey = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string comment = 9;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string create_table_query = 10;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getCreateTableQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setCreateTableQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp metadata_modification_time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getMetadataModificationTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setMetadataModificationTime = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.clearMetadataModificationTime = function() {
  return this.setMetadataModificationTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.hasMetadataModificationTime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Column columns = 12;
 * @return {!Array<!proto.trb.clickhouse.manager.public.contract.v1.Column>}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getColumnsList = function() {
  return /** @type{!Array<!proto.trb.clickhouse.manager.public.contract.v1.Column>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.Column, 12));
};


/**
 * @param {!Array<!proto.trb.clickhouse.manager.public.contract.v1.Column>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setColumnsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Column=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Column}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.addColumns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.trb.clickhouse.manager.public.contract.v1.Column, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * optional uint64 parts_count = 13;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getPartsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setPartsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint64 data_uncompressed_bytes = 14;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.getDataUncompressedBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.Table.prototype.setDataUncompressedBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.clickhouse.manager.public.contract.v1.TableList.repeatedFields_ = [1];



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
proto.trb.clickhouse.manager.public.contract.v1.TableList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.TableList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TableList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.clickhouse.manager.public.contract.v1.Table.toObject, includeInstance)
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableList}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.TableList;
  return proto.trb.clickhouse.manager.public.contract.v1.TableList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableList}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.clickhouse.manager.public.contract.v1.Table;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.Table.deserializeBinaryFromReader);
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
proto.trb.clickhouse.manager.public.contract.v1.TableList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.TableList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TableList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.clickhouse.manager.public.contract.v1.Table.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Table items = 1;
 * @return {!Array<!proto.trb.clickhouse.manager.public.contract.v1.Table>}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.clickhouse.manager.public.contract.v1.Table>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.Table, 1));
};


/**
 * @param {!Array<!proto.trb.clickhouse.manager.public.contract.v1.Table>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableList} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.TableList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.Table=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.Table}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.clickhouse.manager.public.contract.v1.Table, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableList} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableList.prototype.clearItemsList = function() {
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
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
newDatabase: jspb.Message.getFieldWithDefault(msg, 3, ""),
newName: jspb.Message.getFieldWithDefault(msg, 4, ""),
cluster: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNewDatabase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
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
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getNewDatabase();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCluster();
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
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_database = 3;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.prototype.getNewDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.prototype.setNewDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string new_name = 4;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.prototype.setNewName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string cluster = 5;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameTableRequest.prototype.setCluster = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
partition: jspb.Message.getFieldWithDefault(msg, 3, ""),
pb_final: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
deduplicate: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
cluster: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPartition(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinal(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeduplicate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
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
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPartition();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFinal();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getDeduplicate();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCluster();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string partition = 3;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.getPartition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.setPartition = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool final = 4;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.getFinal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.setFinal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool deduplicate = 5;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.getDeduplicate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.setDeduplicate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string cluster = 6;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.OptimizeTableRequest.prototype.setCluster = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
table: jspb.Message.getFieldWithDefault(msg, 2, ""),
column: (f = msg.getColumn()) && proto.trb.clickhouse.manager.public.contract.v1.Column.toObject(includeInstance, f),
after: jspb.Message.getFieldWithDefault(msg, 4, ""),
ifNotExists: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
cluster: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTable(value);
      break;
    case 3:
      var value = new proto.trb.clickhouse.manager.public.contract.v1.Column;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.Column.deserializeBinaryFromReader);
      msg.setColumn(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAfter(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfNotExists(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
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
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColumn();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.trb.clickhouse.manager.public.contract.v1.Column.serializeBinaryToWriter
    );
  }
  f = message.getAfter();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIfNotExists();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCluster();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string table = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Column column = 3;
 * @return {?proto.trb.clickhouse.manager.public.contract.v1.Column}
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.getColumn = function() {
  return /** @type{?proto.trb.clickhouse.manager.public.contract.v1.Column} */ (
    jspb.Message.getWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.Column, 3));
};


/**
 * @param {?proto.trb.clickhouse.manager.public.contract.v1.Column|undefined} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.setColumn = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.clearColumn = function() {
  return this.setColumn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.hasColumn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string after = 4;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.getAfter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.setAfter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool if_not_exists = 5;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.getIfNotExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.setIfNotExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string cluster = 6;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.AddColumnRequest.prototype.setCluster = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
table: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
ifExists: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
cluster: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTable(value);
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
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
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
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTable();
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
  f = message.getCluster();
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
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string table = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool if_exists = 4;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.prototype.getIfExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.prototype.setIfExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string cluster = 5;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DropColumnRequest.prototype.setCluster = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
table: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
newName: jspb.Message.getFieldWithDefault(msg, 4, ""),
cluster: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTable(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
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
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTable();
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
  f = message.getNewName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCluster();
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
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string table = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string new_name = 4;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.prototype.setNewName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string cluster = 5;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.RenameColumnRequest.prototype.setCluster = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
table: jspb.Message.getFieldWithDefault(msg, 2, ""),
column: (f = msg.getColumn()) && proto.trb.clickhouse.manager.public.contract.v1.Column.toObject(includeInstance, f),
cluster: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTable(value);
      break;
    case 3:
      var value = new proto.trb.clickhouse.manager.public.contract.v1.Column;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.Column.deserializeBinaryFromReader);
      msg.setColumn(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
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
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColumn();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.trb.clickhouse.manager.public.contract.v1.Column.serializeBinaryToWriter
    );
  }
  f = message.getCluster();
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
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string table = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Column column = 3;
 * @return {?proto.trb.clickhouse.manager.public.contract.v1.Column}
 */
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.prototype.getColumn = function() {
  return /** @type{?proto.trb.clickhouse.manager.public.contract.v1.Column} */ (
    jspb.Message.getWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.Column, 3));
};


/**
 * @param {?proto.trb.clickhouse.manager.public.contract.v1.Column|undefined} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.prototype.setColumn = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.prototype.clearColumn = function() {
  return this.setColumn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.prototype.hasColumn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string cluster = 4;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ModifyColumnRequest.prototype.setCluster = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.clickhouse.manager.public.contract.v1.QueryRow.repeatedFields_ = [1];



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
proto.trb.clickhouse.manager.public.contract.v1.QueryRow.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.QueryRow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.QueryRow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.QueryRow.toObject = function(includeInstance, msg) {
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.QueryRow}
 */
proto.trb.clickhouse.manager.public.contract.v1.QueryRow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.QueryRow;
  return proto.trb.clickhouse.manager.public.contract.v1.QueryRow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.QueryRow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.QueryRow}
 */
proto.trb.clickhouse.manager.public.contract.v1.QueryRow.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.QueryRow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.QueryRow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.QueryRow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.QueryRow.serializeBinaryToWriter = function(message, writer) {
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
proto.trb.clickhouse.manager.public.contract.v1.QueryRow.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.QueryRow} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.QueryRow.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.QueryRow} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.QueryRow.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.QueryRow} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.QueryRow.prototype.clearValuesList = function() {
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
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 max_rows = 2;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.prototype.getMaxRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.prototype.setMaxRows = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.repeatedFields_ = [1,2,3];



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
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
columnsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
typesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
rowsList: jspb.Message.toObjectList(msg.getRowsList(),
    proto.trb.clickhouse.manager.public.contract.v1.QueryRow.toObject, includeInstance),
totalRows: jspb.Message.getFieldWithDefault(msg, 4, 0),
elapsedSeconds: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
bytesRead: jspb.Message.getFieldWithDefault(msg, 6, 0),
rowsRead: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse;
  return proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.trb.clickhouse.manager.public.contract.v1.QueryRow;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.QueryRow.deserializeBinaryFromReader);
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
      msg.setBytesRead(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRowsRead(value);
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
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.trb.clickhouse.manager.public.contract.v1.QueryRow.serializeBinaryToWriter
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
  f = message.getBytesRead();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getRowsRead();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * repeated string types = 2;
 * @return {!Array<string>}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.getTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};


/**
 * repeated QueryRow rows = 3;
 * @return {!Array<!proto.trb.clickhouse.manager.public.contract.v1.QueryRow>}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.getRowsList = function() {
  return /** @type{!Array<!proto.trb.clickhouse.manager.public.contract.v1.QueryRow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.QueryRow, 3));
};


/**
 * @param {!Array<!proto.trb.clickhouse.manager.public.contract.v1.QueryRow>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.setRowsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.QueryRow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.QueryRow}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.addRows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.trb.clickhouse.manager.public.contract.v1.QueryRow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.clearRowsList = function() {
  return this.setRowsList([]);
};


/**
 * optional uint64 total_rows = 4;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.getTotalRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.setTotalRows = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double elapsed_seconds = 5;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.getElapsedSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.setElapsedSeconds = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint64 bytes_read = 6;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.getBytesRead = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.setBytesRead = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 rows_read = 7;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.getRowsRead = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ExecuteQueryResponse.prototype.setRowsRead = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
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
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
table: jspb.Message.getFieldWithDefault(msg, 2, ""),
limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
offset: jspb.Message.getFieldWithDefault(msg, 4, 0),
orderBy: jspb.Message.getFieldWithDefault(msg, 5, ""),
where: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTable(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOffset(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderBy(value);
      break;
    case 6:
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
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getOrderBy();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWhere();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string table = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 offset = 4;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string order_by = 5;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.getOrderBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.setOrderBy = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string where = 6;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.getWhere = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.PreviewTableDataRequest.prototype.setWhere = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.TablePart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.toObject = function(includeInstance, msg) {
  var f, obj = {
partition: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
active: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
rows: jspb.Message.getFieldWithDefault(msg, 4, 0),
bytesOnDisk: jspb.Message.getFieldWithDefault(msg, 5, 0),
dataUncompressedBytes: jspb.Message.getFieldWithDefault(msg, 6, 0),
modificationTime: (f = msg.getModificationTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
diskName: jspb.Message.getFieldWithDefault(msg, 8, ""),
minDate: jspb.Message.getFieldWithDefault(msg, 9, ""),
maxDate: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.TablePart;
  return proto.trb.clickhouse.manager.public.contract.v1.TablePart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRows(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBytesOnDisk(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDataUncompressedBytes(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModificationTime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiskName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinDate(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxDate(value);
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
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.TablePart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartition();
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
  f = message.getActive();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRows();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getBytesOnDisk();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getDataUncompressedBytes();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getModificationTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDiskName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMinDate();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMaxDate();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string partition = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.getPartition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.setPartition = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool active = 3;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint64 rows = 4;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.getRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.setRows = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 bytes_on_disk = 5;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.getBytesOnDisk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.setBytesOnDisk = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 data_uncompressed_bytes = 6;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.getDataUncompressedBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.setDataUncompressedBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp modification_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.getModificationTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.setModificationTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.clearModificationTime = function() {
  return this.setModificationTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.hasModificationTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string disk_name = 8;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.getDiskName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.setDiskName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string min_date = 9;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.getMinDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.setMinDate = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string max_date = 10;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.getMaxDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TablePart.prototype.setMaxDate = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
table: jspb.Message.getFieldWithDefault(msg, 2, ""),
activeOnly: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTable(value);
      break;
    case 3:
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
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActiveOnly();
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
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string table = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool active_only = 3;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.prototype.getActiveOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ListPartsRequest.prototype.setActiveOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.clickhouse.manager.public.contract.v1.PartsList.repeatedFields_ = [1];



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
proto.trb.clickhouse.manager.public.contract.v1.PartsList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.PartsList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.PartsList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.PartsList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.clickhouse.manager.public.contract.v1.TablePart.toObject, includeInstance)
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PartsList}
 */
proto.trb.clickhouse.manager.public.contract.v1.PartsList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.PartsList;
  return proto.trb.clickhouse.manager.public.contract.v1.PartsList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.PartsList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PartsList}
 */
proto.trb.clickhouse.manager.public.contract.v1.PartsList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.clickhouse.manager.public.contract.v1.TablePart;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.TablePart.deserializeBinaryFromReader);
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
proto.trb.clickhouse.manager.public.contract.v1.PartsList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.PartsList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.PartsList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.PartsList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.clickhouse.manager.public.contract.v1.TablePart.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TablePart items = 1;
 * @return {!Array<!proto.trb.clickhouse.manager.public.contract.v1.TablePart>}
 */
proto.trb.clickhouse.manager.public.contract.v1.PartsList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.clickhouse.manager.public.contract.v1.TablePart>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.TablePart, 1));
};


/**
 * @param {!Array<!proto.trb.clickhouse.manager.public.contract.v1.TablePart>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PartsList} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.PartsList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TablePart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TablePart}
 */
proto.trb.clickhouse.manager.public.contract.v1.PartsList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.clickhouse.manager.public.contract.v1.TablePart, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.PartsList} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.PartsList.prototype.clearItemsList = function() {
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
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
table: jspb.Message.getFieldWithDefault(msg, 2, ""),
partition: jspb.Message.getFieldWithDefault(msg, 3, ""),
detach: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
cluster: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTable(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartition(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDetach(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
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
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPartition();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDetach();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCluster();
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
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string table = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string partition = 3;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.prototype.getPartition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.prototype.setPartition = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool detach = 4;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.prototype.getDetach = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.prototype.setDetach = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string cluster = 5;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DropPartitionRequest.prototype.setCluster = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
queryId: jspb.Message.getFieldWithDefault(msg, 1, ""),
user: jspb.Message.getFieldWithDefault(msg, 2, ""),
elapsedSeconds: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
rowsRead: jspb.Message.getFieldWithDefault(msg, 4, 0),
bytesRead: jspb.Message.getFieldWithDefault(msg, 5, 0),
memoryUsage: jspb.Message.getFieldWithDefault(msg, 6, 0),
query: jspb.Message.getFieldWithDefault(msg, 7, ""),
clientName: jspb.Message.getFieldWithDefault(msg, 8, ""),
osUser: jspb.Message.getFieldWithDefault(msg, 9, ""),
isCancelled: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo;
  return proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueryId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setElapsedSeconds(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRowsRead(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBytesRead(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemoryUsage(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOsUser(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCancelled(value);
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
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueryId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getElapsedSeconds();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getRowsRead();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getBytesRead();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getMemoryUsage();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getClientName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOsUser();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIsCancelled();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional string query_id = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.getQueryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.setQueryId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double elapsed_seconds = 3;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.getElapsedSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.setElapsedSeconds = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional uint64 rows_read = 4;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.getRowsRead = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.setRowsRead = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 bytes_read = 5;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.getBytesRead = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.setBytesRead = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 memory_usage = 6;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.getMemoryUsage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.setMemoryUsage = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string query = 7;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string client_name = 8;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.getClientName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.setClientName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string os_user = 9;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.getOsUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.setOsUser = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool is_cancelled = 10;
 * @return {boolean}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.getIsCancelled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.prototype.setIsCancelled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
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
proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ListProcessesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessList.repeatedFields_ = [1];



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
proto.trb.clickhouse.manager.public.contract.v1.ProcessList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.ProcessList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ProcessList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.toObject, includeInstance)
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessList}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.ProcessList;
  return proto.trb.clickhouse.manager.public.contract.v1.ProcessList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ProcessList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessList}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.deserializeBinaryFromReader);
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
proto.trb.clickhouse.manager.public.contract.v1.ProcessList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.ProcessList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ProcessList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProcessInfo items = 1;
 * @return {!Array<!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo>}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo, 1));
};


/**
 * @param {!Array<!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessList} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.ProcessList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo}
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.clickhouse.manager.public.contract.v1.ProcessInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ProcessList} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.ProcessList.prototype.clearItemsList = function() {
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
proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
queryId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueryId(value);
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
proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueryId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query_id = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest.prototype.getQueryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.KillProcessRequest.prototype.setQueryId = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
path: jspb.Message.getFieldWithDefault(msg, 2, ""),
freeSpace: jspb.Message.getFieldWithDefault(msg, 3, 0),
totalSpace: jspb.Message.getFieldWithDefault(msg, 4, 0),
unreservedSpace: jspb.Message.getFieldWithDefault(msg, 5, 0),
type: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo}
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.DiskInfo;
  return proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo}
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFreeSpace(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalSpace(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUnreservedSpace(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
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
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFreeSpace();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTotalSpace();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getUnreservedSpace();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 free_space = 3;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.getFreeSpace = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.setFreeSpace = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 total_space = 4;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.getTotalSpace = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.setTotalSpace = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 unreserved_space = 5;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.getUnreservedSpace = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.setUnreservedSpace = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string type = 6;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.ListDisksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskList.repeatedFields_ = [1];



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
proto.trb.clickhouse.manager.public.contract.v1.DiskList.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.DiskList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DiskList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.toObject, includeInstance)
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskList}
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.DiskList;
  return proto.trb.clickhouse.manager.public.contract.v1.DiskList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DiskList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskList}
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.clickhouse.manager.public.contract.v1.DiskInfo;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.deserializeBinaryFromReader);
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
proto.trb.clickhouse.manager.public.contract.v1.DiskList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.DiskList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DiskList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.clickhouse.manager.public.contract.v1.DiskInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DiskInfo items = 1;
 * @return {!Array<!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo>}
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.DiskInfo, 1));
};


/**
 * @param {!Array<!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskList} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.DiskList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskInfo}
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.clickhouse.manager.public.contract.v1.DiskInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.DiskList} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.DiskList.prototype.clearItemsList = function() {
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
proto.trb.clickhouse.manager.public.contract.v1.MetricItem.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.MetricItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.MetricItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricItem.toObject = function(includeInstance, msg) {
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricItem}
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.MetricItem;
  return proto.trb.clickhouse.manager.public.contract.v1.MetricItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.MetricItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricItem}
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricItem.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.MetricItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.MetricItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.MetricItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricItem.serializeBinaryToWriter = function(message, writer) {
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
proto.trb.clickhouse.manager.public.contract.v1.MetricItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricItem} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricItem.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricItem} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricItem.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricItem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricItem} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricItem.prototype.setDescription = function(value) {
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
proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.GetMetricsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.repeatedFields_ = [1,2];



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
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
metricsList: jspb.Message.toObjectList(msg.getMetricsList(),
    proto.trb.clickhouse.manager.public.contract.v1.MetricItem.toObject, includeInstance),
asyncMetricsList: jspb.Message.toObjectList(msg.getAsyncMetricsList(),
    proto.trb.clickhouse.manager.public.contract.v1.MetricItem.toObject, includeInstance)
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse}
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse;
  return proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse}
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.trb.clickhouse.manager.public.contract.v1.MetricItem;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.MetricItem.deserializeBinaryFromReader);
      msg.addMetrics(value);
      break;
    case 2:
      var value = new proto.trb.clickhouse.manager.public.contract.v1.MetricItem;
      reader.readMessage(value,proto.trb.clickhouse.manager.public.contract.v1.MetricItem.deserializeBinaryFromReader);
      msg.addAsyncMetrics(value);
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
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.trb.clickhouse.manager.public.contract.v1.MetricItem.serializeBinaryToWriter
    );
  }
  f = message.getAsyncMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.trb.clickhouse.manager.public.contract.v1.MetricItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MetricItem metrics = 1;
 * @return {!Array<!proto.trb.clickhouse.manager.public.contract.v1.MetricItem>}
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.prototype.getMetricsList = function() {
  return /** @type{!Array<!proto.trb.clickhouse.manager.public.contract.v1.MetricItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.MetricItem, 1));
};


/**
 * @param {!Array<!proto.trb.clickhouse.manager.public.contract.v1.MetricItem>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.prototype.setMetricsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.MetricItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricItem}
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.prototype.addMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.trb.clickhouse.manager.public.contract.v1.MetricItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.prototype.clearMetricsList = function() {
  return this.setMetricsList([]);
};


/**
 * repeated MetricItem async_metrics = 2;
 * @return {!Array<!proto.trb.clickhouse.manager.public.contract.v1.MetricItem>}
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.prototype.getAsyncMetricsList = function() {
  return /** @type{!Array<!proto.trb.clickhouse.manager.public.contract.v1.MetricItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.trb.clickhouse.manager.public.contract.v1.MetricItem, 2));
};


/**
 * @param {!Array<!proto.trb.clickhouse.manager.public.contract.v1.MetricItem>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse} returns this
*/
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.prototype.setAsyncMetricsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.MetricItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricItem}
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.prototype.addAsyncMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.trb.clickhouse.manager.public.contract.v1.MetricItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.MetricsResponse.prototype.clearAsyncMetricsList = function() {
  return this.setAsyncMetricsList([]);
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
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest;
  return proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.repeatedFields_ = [1,2,3,4];



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
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
enginesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
dataTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
mergeTreeSettingsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
codecsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse;
  return proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addEngines(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDataTypes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addMergeTreeSettings(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCodecs(value);
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
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnginesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getDataTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getMergeTreeSettingsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getCodecsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * repeated string engines = 1;
 * @return {!Array<string>}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.getEnginesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.setEnginesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.addEngines = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.clearEnginesList = function() {
  return this.setEnginesList([]);
};


/**
 * repeated string data_types = 2;
 * @return {!Array<string>}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.getDataTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.setDataTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.addDataTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.clearDataTypesList = function() {
  return this.setDataTypesList([]);
};


/**
 * repeated string merge_tree_settings = 3;
 * @return {!Array<string>}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.getMergeTreeSettingsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.setMergeTreeSettingsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.addMergeTreeSettings = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.clearMergeTreeSettingsList = function() {
  return this.setMergeTreeSettingsList([]);
};


/**
 * repeated string codecs = 4;
 * @return {!Array<string>}
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.getCodecsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.setCodecsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.addCodecs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse} returns this
 */
proto.trb.clickhouse.manager.public.contract.v1.TableOptionsResponse.prototype.clearCodecsList = function() {
  return this.setCodecsList([]);
};


goog.object.extend(exports, proto.trb.clickhouse.manager.public.contract.v1);
