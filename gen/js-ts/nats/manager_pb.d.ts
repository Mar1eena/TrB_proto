import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class PublishRequest extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): PublishRequest;

  getData(): string;
  setData(value: string): PublishRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishRequest): PublishRequest.AsObject;
  static serializeBinaryToWriter(message: PublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishRequest;
  static deserializeBinaryFromReader(message: PublishRequest, reader: jspb.BinaryReader): PublishRequest;
}

export namespace PublishRequest {
  export type AsObject = {
    subject: string,
    data: string,
  }
}

export class PublishResponse extends jspb.Message {
  getResponse(): string;
  setResponse(value: string): PublishResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishResponse): PublishResponse.AsObject;
  static serializeBinaryToWriter(message: PublishResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishResponse;
  static deserializeBinaryFromReader(message: PublishResponse, reader: jspb.BinaryReader): PublishResponse;
}

export namespace PublishResponse {
  export type AsObject = {
    response: string,
  }
}

export class ResponseStreamNameBySubject extends jspb.Message {
  getResponse(): string;
  setResponse(value: string): ResponseStreamNameBySubject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseStreamNameBySubject.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseStreamNameBySubject): ResponseStreamNameBySubject.AsObject;
  static serializeBinaryToWriter(message: ResponseStreamNameBySubject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseStreamNameBySubject;
  static deserializeBinaryFromReader(message: ResponseStreamNameBySubject, reader: jspb.BinaryReader): ResponseStreamNameBySubject;
}

export namespace ResponseStreamNameBySubject {
  export type AsObject = {
    response: string,
  }
}

export class SubjectQuery extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): SubjectQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubjectQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SubjectQuery): SubjectQuery.AsObject;
  static serializeBinaryToWriter(message: SubjectQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubjectQuery;
  static deserializeBinaryFromReader(message: SubjectQuery, reader: jspb.BinaryReader): SubjectQuery;
}

export namespace SubjectQuery {
  export type AsObject = {
    subject: string,
  }
}

export class StreamList extends jspb.Message {
  getItemsList(): Array<StreamInfos>;
  setItemsList(value: Array<StreamInfos>): StreamList;
  clearItemsList(): StreamList;
  addItems(value?: StreamInfos, index?: number): StreamInfos;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamList.AsObject;
  static toObject(includeInstance: boolean, msg: StreamList): StreamList.AsObject;
  static serializeBinaryToWriter(message: StreamList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamList;
  static deserializeBinaryFromReader(message: StreamList, reader: jspb.BinaryReader): StreamList;
}

export namespace StreamList {
  export type AsObject = {
    itemsList: Array<StreamInfos.AsObject>,
  }
}

export class StreamNameList extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): StreamNameList;
  clearNamesList(): StreamNameList;
  addNames(value: string, index?: number): StreamNameList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamNameList.AsObject;
  static toObject(includeInstance: boolean, msg: StreamNameList): StreamNameList.AsObject;
  static serializeBinaryToWriter(message: StreamNameList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamNameList;
  static deserializeBinaryFromReader(message: StreamNameList, reader: jspb.BinaryReader): StreamNameList;
}

export namespace StreamNameList {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class ConsumerList extends jspb.Message {
  getItemsList(): Array<ConsumerInfos>;
  setItemsList(value: Array<ConsumerInfos>): ConsumerList;
  clearItemsList(): ConsumerList;
  addItems(value?: ConsumerInfos, index?: number): ConsumerInfos;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumerList.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumerList): ConsumerList.AsObject;
  static serializeBinaryToWriter(message: ConsumerList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumerList;
  static deserializeBinaryFromReader(message: ConsumerList, reader: jspb.BinaryReader): ConsumerList;
}

export namespace ConsumerList {
  export type AsObject = {
    itemsList: Array<ConsumerInfos.AsObject>,
  }
}

export class ConsumerNameList extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): ConsumerNameList;
  clearNamesList(): ConsumerNameList;
  addNames(value: string, index?: number): ConsumerNameList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumerNameList.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumerNameList): ConsumerNameList.AsObject;
  static serializeBinaryToWriter(message: ConsumerNameList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumerNameList;
  static deserializeBinaryFromReader(message: ConsumerNameList, reader: jspb.BinaryReader): ConsumerNameList;
}

export namespace ConsumerNameList {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class Response extends jspb.Message {
  getResponse(): string;
  setResponse(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    response: string,
  }
}

export class StreamName extends jspb.Message {
  getName(): string;
  setName(value: string): StreamName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamName.AsObject;
  static toObject(includeInstance: boolean, msg: StreamName): StreamName.AsObject;
  static serializeBinaryToWriter(message: StreamName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamName;
  static deserializeBinaryFromReader(message: StreamName, reader: jspb.BinaryReader): StreamName;
}

export namespace StreamName {
  export type AsObject = {
    name: string,
  }
}

export class StreamConfig extends jspb.Message {
  getName(): string;
  setName(value: string): StreamConfig;

  getDescription(): string;
  setDescription(value: string): StreamConfig;

  getSubjectsList(): Array<string>;
  setSubjectsList(value: Array<string>): StreamConfig;
  clearSubjectsList(): StreamConfig;
  addSubjects(value: string, index?: number): StreamConfig;

  getRetention(): number;
  setRetention(value: number): StreamConfig;

  getMaxConsumers(): number;
  setMaxConsumers(value: number): StreamConfig;

  getMaxMsgs(): number;
  setMaxMsgs(value: number): StreamConfig;

  getMaxBytes(): number;
  setMaxBytes(value: number): StreamConfig;

  getDiscard(): number;
  setDiscard(value: number): StreamConfig;

  getDiscardNewPerSubject(): boolean;
  setDiscardNewPerSubject(value: boolean): StreamConfig;

  getMaxAge(): number;
  setMaxAge(value: number): StreamConfig;

  getMaxMsgsPerSubject(): number;
  setMaxMsgsPerSubject(value: number): StreamConfig;

  getMaxMsgSize(): number;
  setMaxMsgSize(value: number): StreamConfig;

  getStorage(): number;
  setStorage(value: number): StreamConfig;

  getReplicas(): number;
  setReplicas(value: number): StreamConfig;

  getNoAck(): boolean;
  setNoAck(value: boolean): StreamConfig;

  getDuplicateWindow(): number;
  setDuplicateWindow(value: number): StreamConfig;

  getPlacement(): Placement | undefined;
  setPlacement(value?: Placement): StreamConfig;
  hasPlacement(): boolean;
  clearPlacement(): StreamConfig;

  getMirror(): StreamSource | undefined;
  setMirror(value?: StreamSource): StreamConfig;
  hasMirror(): boolean;
  clearMirror(): StreamConfig;

  getSourcesList(): Array<StreamSource>;
  setSourcesList(value: Array<StreamSource>): StreamConfig;
  clearSourcesList(): StreamConfig;
  addSources(value?: StreamSource, index?: number): StreamSource;

  getSealed(): boolean;
  setSealed(value: boolean): StreamConfig;

  getDenyDelete(): boolean;
  setDenyDelete(value: boolean): StreamConfig;

  getDenyPurge(): boolean;
  setDenyPurge(value: boolean): StreamConfig;

  getAllowRollup(): boolean;
  setAllowRollup(value: boolean): StreamConfig;

  getCompression(): number;
  setCompression(value: number): StreamConfig;

  getFirstSeq(): number;
  setFirstSeq(value: number): StreamConfig;

  getSubjectTransform(): SubjectTransformConfig | undefined;
  setSubjectTransform(value?: SubjectTransformConfig): StreamConfig;
  hasSubjectTransform(): boolean;
  clearSubjectTransform(): StreamConfig;

  getRepublish(): RePublish | undefined;
  setRepublish(value?: RePublish): StreamConfig;
  hasRepublish(): boolean;
  clearRepublish(): StreamConfig;

  getAllowDirect(): boolean;
  setAllowDirect(value: boolean): StreamConfig;

  getMirrorDirect(): boolean;
  setMirrorDirect(value: boolean): StreamConfig;

  getConsumerLimits(): StreamConsumerLimits | undefined;
  setConsumerLimits(value?: StreamConsumerLimits): StreamConfig;
  hasConsumerLimits(): boolean;
  clearConsumerLimits(): StreamConfig;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): StreamConfig;

  getTemplateOwner(): string;
  setTemplateOwner(value: string): StreamConfig;

  getAllowMsgTtl(): boolean;
  setAllowMsgTtl(value: boolean): StreamConfig;

  getSubjectDeleteMarkerTtl(): number;
  setSubjectDeleteMarkerTtl(value: number): StreamConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamConfig): StreamConfig.AsObject;
  static serializeBinaryToWriter(message: StreamConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamConfig;
  static deserializeBinaryFromReader(message: StreamConfig, reader: jspb.BinaryReader): StreamConfig;
}

export namespace StreamConfig {
  export type AsObject = {
    name: string,
    description: string,
    subjectsList: Array<string>,
    retention: number,
    maxConsumers: number,
    maxMsgs: number,
    maxBytes: number,
    discard: number,
    discardNewPerSubject: boolean,
    maxAge: number,
    maxMsgsPerSubject: number,
    maxMsgSize: number,
    storage: number,
    replicas: number,
    noAck: boolean,
    duplicateWindow: number,
    placement?: Placement.AsObject,
    mirror?: StreamSource.AsObject,
    sourcesList: Array<StreamSource.AsObject>,
    sealed: boolean,
    denyDelete: boolean,
    denyPurge: boolean,
    allowRollup: boolean,
    compression: number,
    firstSeq: number,
    subjectTransform?: SubjectTransformConfig.AsObject,
    republish?: RePublish.AsObject,
    allowDirect: boolean,
    mirrorDirect: boolean,
    consumerLimits?: StreamConsumerLimits.AsObject,
    metadataMap: Array<[string, string]>,
    templateOwner: string,
    allowMsgTtl: boolean,
    subjectDeleteMarkerTtl: number,
  }
}

export class Placement extends jspb.Message {
  getCluster(): string;
  setCluster(value: string): Placement;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Placement;
  clearTagsList(): Placement;
  addTags(value: string, index?: number): Placement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Placement.AsObject;
  static toObject(includeInstance: boolean, msg: Placement): Placement.AsObject;
  static serializeBinaryToWriter(message: Placement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Placement;
  static deserializeBinaryFromReader(message: Placement, reader: jspb.BinaryReader): Placement;
}

export namespace Placement {
  export type AsObject = {
    cluster: string,
    tagsList: Array<string>,
  }
}

export class StreamSource extends jspb.Message {
  getName(): string;
  setName(value: string): StreamSource;

  getOptStartSeq(): number;
  setOptStartSeq(value: number): StreamSource;

  getOptStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOptStartTime(value?: google_protobuf_timestamp_pb.Timestamp): StreamSource;
  hasOptStartTime(): boolean;
  clearOptStartTime(): StreamSource;

  getFilterSubject(): string;
  setFilterSubject(value: string): StreamSource;

  getSubjectTransformsList(): Array<SubjectTransformConfig>;
  setSubjectTransformsList(value: Array<SubjectTransformConfig>): StreamSource;
  clearSubjectTransformsList(): StreamSource;
  addSubjectTransforms(value?: SubjectTransformConfig, index?: number): SubjectTransformConfig;

  getExternal(): ExternalStream | undefined;
  setExternal(value?: ExternalStream): StreamSource;
  hasExternal(): boolean;
  clearExternal(): StreamSource;

  getDomain(): string;
  setDomain(value: string): StreamSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamSource.AsObject;
  static toObject(includeInstance: boolean, msg: StreamSource): StreamSource.AsObject;
  static serializeBinaryToWriter(message: StreamSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamSource;
  static deserializeBinaryFromReader(message: StreamSource, reader: jspb.BinaryReader): StreamSource;
}

export namespace StreamSource {
  export type AsObject = {
    name: string,
    optStartSeq: number,
    optStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    filterSubject: string,
    subjectTransformsList: Array<SubjectTransformConfig.AsObject>,
    external?: ExternalStream.AsObject,
    domain: string,
  }
}

export class ExternalStream extends jspb.Message {
  getApi(): string;
  setApi(value: string): ExternalStream;

  getDeliver(): string;
  setDeliver(value: string): ExternalStream;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalStream.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalStream): ExternalStream.AsObject;
  static serializeBinaryToWriter(message: ExternalStream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalStream;
  static deserializeBinaryFromReader(message: ExternalStream, reader: jspb.BinaryReader): ExternalStream;
}

export namespace ExternalStream {
  export type AsObject = {
    api: string,
    deliver: string,
  }
}

export class SubjectTransformConfig extends jspb.Message {
  getSrc(): string;
  setSrc(value: string): SubjectTransformConfig;

  getDest(): string;
  setDest(value: string): SubjectTransformConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubjectTransformConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SubjectTransformConfig): SubjectTransformConfig.AsObject;
  static serializeBinaryToWriter(message: SubjectTransformConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubjectTransformConfig;
  static deserializeBinaryFromReader(message: SubjectTransformConfig, reader: jspb.BinaryReader): SubjectTransformConfig;
}

export namespace SubjectTransformConfig {
  export type AsObject = {
    src: string,
    dest: string,
  }
}

export class RePublish extends jspb.Message {
  getSrc(): string;
  setSrc(value: string): RePublish;

  getDest(): string;
  setDest(value: string): RePublish;

  getHeadersOnly(): boolean;
  setHeadersOnly(value: boolean): RePublish;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RePublish.AsObject;
  static toObject(includeInstance: boolean, msg: RePublish): RePublish.AsObject;
  static serializeBinaryToWriter(message: RePublish, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RePublish;
  static deserializeBinaryFromReader(message: RePublish, reader: jspb.BinaryReader): RePublish;
}

export namespace RePublish {
  export type AsObject = {
    src: string,
    dest: string,
    headersOnly: boolean,
  }
}

export class StreamConsumerLimits extends jspb.Message {
  getInactiveThreshold(): number;
  setInactiveThreshold(value: number): StreamConsumerLimits;

  getMaxAckPending(): number;
  setMaxAckPending(value: number): StreamConsumerLimits;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamConsumerLimits.AsObject;
  static toObject(includeInstance: boolean, msg: StreamConsumerLimits): StreamConsumerLimits.AsObject;
  static serializeBinaryToWriter(message: StreamConsumerLimits, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamConsumerLimits;
  static deserializeBinaryFromReader(message: StreamConsumerLimits, reader: jspb.BinaryReader): StreamConsumerLimits;
}

export namespace StreamConsumerLimits {
  export type AsObject = {
    inactiveThreshold: number,
    maxAckPending: number,
  }
}

export class StreamInfos extends jspb.Message {
  getConfig(): StreamConfig | undefined;
  setConfig(value?: StreamConfig): StreamInfos;
  hasConfig(): boolean;
  clearConfig(): StreamInfos;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): StreamInfos;
  hasCreated(): boolean;
  clearCreated(): StreamInfos;

  getState(): StreamState | undefined;
  setState(value?: StreamState): StreamInfos;
  hasState(): boolean;
  clearState(): StreamInfos;

  getCluster(): ClusterInfo | undefined;
  setCluster(value?: ClusterInfo): StreamInfos;
  hasCluster(): boolean;
  clearCluster(): StreamInfos;

  getMirror(): StreamSourceInfo | undefined;
  setMirror(value?: StreamSourceInfo): StreamInfos;
  hasMirror(): boolean;
  clearMirror(): StreamInfos;

  getSourcesList(): Array<StreamSourceInfo>;
  setSourcesList(value: Array<StreamSourceInfo>): StreamInfos;
  clearSourcesList(): StreamInfos;
  addSources(value?: StreamSourceInfo, index?: number): StreamSourceInfo;

  getAlternatesList(): Array<StreamAlternate>;
  setAlternatesList(value: Array<StreamAlternate>): StreamInfos;
  clearAlternatesList(): StreamInfos;
  addAlternates(value?: StreamAlternate, index?: number): StreamAlternate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamInfos.AsObject;
  static toObject(includeInstance: boolean, msg: StreamInfos): StreamInfos.AsObject;
  static serializeBinaryToWriter(message: StreamInfos, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamInfos;
  static deserializeBinaryFromReader(message: StreamInfos, reader: jspb.BinaryReader): StreamInfos;
}

export namespace StreamInfos {
  export type AsObject = {
    config?: StreamConfig.AsObject,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state?: StreamState.AsObject,
    cluster?: ClusterInfo.AsObject,
    mirror?: StreamSourceInfo.AsObject,
    sourcesList: Array<StreamSourceInfo.AsObject>,
    alternatesList: Array<StreamAlternate.AsObject>,
  }
}

export class StreamSourceInfo extends jspb.Message {
  getName(): string;
  setName(value: string): StreamSourceInfo;

  getLag(): number;
  setLag(value: number): StreamSourceInfo;

  getActive(): number;
  setActive(value: number): StreamSourceInfo;

  getExternal(): ExternalStream | undefined;
  setExternal(value?: ExternalStream): StreamSourceInfo;
  hasExternal(): boolean;
  clearExternal(): StreamSourceInfo;

  getError(): APIError | undefined;
  setError(value?: APIError): StreamSourceInfo;
  hasError(): boolean;
  clearError(): StreamSourceInfo;

  getFilterSubject(): string;
  setFilterSubject(value: string): StreamSourceInfo;

  getSubjectTransformsList(): Array<SubjectTransformConfig>;
  setSubjectTransformsList(value: Array<SubjectTransformConfig>): StreamSourceInfo;
  clearSubjectTransformsList(): StreamSourceInfo;
  addSubjectTransforms(value?: SubjectTransformConfig, index?: number): SubjectTransformConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamSourceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StreamSourceInfo): StreamSourceInfo.AsObject;
  static serializeBinaryToWriter(message: StreamSourceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamSourceInfo;
  static deserializeBinaryFromReader(message: StreamSourceInfo, reader: jspb.BinaryReader): StreamSourceInfo;
}

export namespace StreamSourceInfo {
  export type AsObject = {
    name: string,
    lag: number,
    active: number,
    external?: ExternalStream.AsObject,
    error?: APIError.AsObject,
    filterSubject: string,
    subjectTransformsList: Array<SubjectTransformConfig.AsObject>,
  }
}

export class StreamAlternate extends jspb.Message {
  getName(): string;
  setName(value: string): StreamAlternate;

  getDomain(): string;
  setDomain(value: string): StreamAlternate;

  getCluster(): string;
  setCluster(value: string): StreamAlternate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamAlternate.AsObject;
  static toObject(includeInstance: boolean, msg: StreamAlternate): StreamAlternate.AsObject;
  static serializeBinaryToWriter(message: StreamAlternate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamAlternate;
  static deserializeBinaryFromReader(message: StreamAlternate, reader: jspb.BinaryReader): StreamAlternate;
}

export namespace StreamAlternate {
  export type AsObject = {
    name: string,
    domain: string,
    cluster: string,
  }
}

export class APIError extends jspb.Message {
  getCode(): number;
  setCode(value: number): APIError;

  getErrCode(): number;
  setErrCode(value: number): APIError;

  getDescription(): string;
  setDescription(value: string): APIError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIError.AsObject;
  static toObject(includeInstance: boolean, msg: APIError): APIError.AsObject;
  static serializeBinaryToWriter(message: APIError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIError;
  static deserializeBinaryFromReader(message: APIError, reader: jspb.BinaryReader): APIError;
}

export namespace APIError {
  export type AsObject = {
    code: number,
    errCode: number,
    description: string,
  }
}

export class ClusterInfo extends jspb.Message {
  getName(): string;
  setName(value: string): ClusterInfo;

  getLeader(): string;
  setLeader(value: string): ClusterInfo;

  getReplicasList(): Array<PeerInfo>;
  setReplicasList(value: Array<PeerInfo>): ClusterInfo;
  clearReplicasList(): ClusterInfo;
  addReplicas(value?: PeerInfo, index?: number): PeerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterInfo): ClusterInfo.AsObject;
  static serializeBinaryToWriter(message: ClusterInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterInfo;
  static deserializeBinaryFromReader(message: ClusterInfo, reader: jspb.BinaryReader): ClusterInfo;
}

export namespace ClusterInfo {
  export type AsObject = {
    name: string,
    leader: string,
    replicasList: Array<PeerInfo.AsObject>,
  }
}

export class PeerInfo extends jspb.Message {
  getName(): string;
  setName(value: string): PeerInfo;

  getCurrent(): boolean;
  setCurrent(value: boolean): PeerInfo;

  getOffline(): boolean;
  setOffline(value: boolean): PeerInfo;

  getActive(): number;
  setActive(value: number): PeerInfo;

  getLag(): number;
  setLag(value: number): PeerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PeerInfo): PeerInfo.AsObject;
  static serializeBinaryToWriter(message: PeerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerInfo;
  static deserializeBinaryFromReader(message: PeerInfo, reader: jspb.BinaryReader): PeerInfo;
}

export namespace PeerInfo {
  export type AsObject = {
    name: string,
    current: boolean,
    offline: boolean,
    active: number,
    lag: number,
  }
}

export class StreamState extends jspb.Message {
  getMsgs(): number;
  setMsgs(value: number): StreamState;

  getBytes(): number;
  setBytes(value: number): StreamState;

  getFirstSeq(): number;
  setFirstSeq(value: number): StreamState;

  getFirstTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstTs(value?: google_protobuf_timestamp_pb.Timestamp): StreamState;
  hasFirstTs(): boolean;
  clearFirstTs(): StreamState;

  getLastSeq(): number;
  setLastSeq(value: number): StreamState;

  getLastTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastTs(value?: google_protobuf_timestamp_pb.Timestamp): StreamState;
  hasLastTs(): boolean;
  clearLastTs(): StreamState;

  getConsumerCount(): number;
  setConsumerCount(value: number): StreamState;

  getDeletedList(): Array<number>;
  setDeletedList(value: Array<number>): StreamState;
  clearDeletedList(): StreamState;
  addDeleted(value: number, index?: number): StreamState;

  getNumDeleted(): number;
  setNumDeleted(value: number): StreamState;

  getNumSubjects(): number;
  setNumSubjects(value: number): StreamState;

  getSubjectsMap(): jspb.Map<string, number>;
  clearSubjectsMap(): StreamState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamState.AsObject;
  static toObject(includeInstance: boolean, msg: StreamState): StreamState.AsObject;
  static serializeBinaryToWriter(message: StreamState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamState;
  static deserializeBinaryFromReader(message: StreamState, reader: jspb.BinaryReader): StreamState;
}

export namespace StreamState {
  export type AsObject = {
    msgs: number,
    bytes: number,
    firstSeq: number,
    firstTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastSeq: number,
    lastTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    consumerCount: number,
    deletedList: Array<number>,
    numDeleted: number,
    numSubjects: number,
    subjectsMap: Array<[string, number]>,
  }
}

export class JsOpts extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JsOpts.AsObject;
  static toObject(includeInstance: boolean, msg: JsOpts): JsOpts.AsObject;
  static serializeBinaryToWriter(message: JsOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JsOpts;
  static deserializeBinaryFromReader(message: JsOpts, reader: jspb.BinaryReader): JsOpts;
}

export namespace JsOpts {
  export type AsObject = {
  }
}

export class Msg extends jspb.Message {
  getName(): string;
  setName(value: string): Msg;

  getSeq(): number;
  setSeq(value: number): Msg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Msg.AsObject;
  static toObject(includeInstance: boolean, msg: Msg): Msg.AsObject;
  static serializeBinaryToWriter(message: Msg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Msg;
  static deserializeBinaryFromReader(message: Msg, reader: jspb.BinaryReader): Msg;
}

export namespace Msg {
  export type AsObject = {
    name: string,
    seq: number,
  }
}

export class MsgRange extends jspb.Message {
  getName(): string;
  setName(value: string): MsgRange;

  getFromSeq(): number;
  setFromSeq(value: number): MsgRange;

  getToSeq(): number;
  setToSeq(value: number): MsgRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRange.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRange): MsgRange.AsObject;
  static serializeBinaryToWriter(message: MsgRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRange;
  static deserializeBinaryFromReader(message: MsgRange, reader: jspb.BinaryReader): MsgRange;
}

export namespace MsgRange {
  export type AsObject = {
    name: string,
    fromSeq: number,
    toSeq: number,
  }
}

export class MsgList extends jspb.Message {
  getItemsList(): Array<RawStreamMsg>;
  setItemsList(value: Array<RawStreamMsg>): MsgList;
  clearItemsList(): MsgList;
  addItems(value?: RawStreamMsg, index?: number): RawStreamMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgList.AsObject;
  static toObject(includeInstance: boolean, msg: MsgList): MsgList.AsObject;
  static serializeBinaryToWriter(message: MsgList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgList;
  static deserializeBinaryFromReader(message: MsgList, reader: jspb.BinaryReader): MsgList;
}

export namespace MsgList {
  export type AsObject = {
    itemsList: Array<RawStreamMsg.AsObject>,
  }
}

export class LastMsg extends jspb.Message {
  getName(): string;
  setName(value: string): LastMsg;

  getSubject(): string;
  setSubject(value: string): LastMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastMsg.AsObject;
  static toObject(includeInstance: boolean, msg: LastMsg): LastMsg.AsObject;
  static serializeBinaryToWriter(message: LastMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastMsg;
  static deserializeBinaryFromReader(message: LastMsg, reader: jspb.BinaryReader): LastMsg;
}

export namespace LastMsg {
  export type AsObject = {
    name: string,
    subject: string,
  }
}

export class RawStreamMsg extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): RawStreamMsg;

  getSeq(): number;
  setSeq(value: number): RawStreamMsg;

  getHdrsMap(): jspb.Map<string, Strings>;
  clearHdrsMap(): RawStreamMsg;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): RawStreamMsg;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): RawStreamMsg;
  hasTime(): boolean;
  clearTime(): RawStreamMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RawStreamMsg.AsObject;
  static toObject(includeInstance: boolean, msg: RawStreamMsg): RawStreamMsg.AsObject;
  static serializeBinaryToWriter(message: RawStreamMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RawStreamMsg;
  static deserializeBinaryFromReader(message: RawStreamMsg, reader: jspb.BinaryReader): RawStreamMsg;
}

export namespace RawStreamMsg {
  export type AsObject = {
    subject: string,
    seq: number,
    hdrsMap: Array<[string, Strings.AsObject]>,
    data: Uint8Array | string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Strings extends jspb.Message {
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): Strings;
  clearValuesList(): Strings;
  addValues(value: string, index?: number): Strings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Strings.AsObject;
  static toObject(includeInstance: boolean, msg: Strings): Strings.AsObject;
  static serializeBinaryToWriter(message: Strings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Strings;
  static deserializeBinaryFromReader(message: Strings, reader: jspb.BinaryReader): Strings;
}

export namespace Strings {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class ConsumerName extends jspb.Message {
  getStream(): string;
  setStream(value: string): ConsumerName;

  getName(): string;
  setName(value: string): ConsumerName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumerName.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumerName): ConsumerName.AsObject;
  static serializeBinaryToWriter(message: ConsumerName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumerName;
  static deserializeBinaryFromReader(message: ConsumerName, reader: jspb.BinaryReader): ConsumerName;
}

export namespace ConsumerName {
  export type AsObject = {
    stream: string,
    name: string,
  }
}

export class Consumer extends jspb.Message {
  getName(): string;
  setName(value: string): Consumer;

  getConfig(): ConsumerConfig | undefined;
  setConfig(value?: ConsumerConfig): Consumer;
  hasConfig(): boolean;
  clearConfig(): Consumer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Consumer.AsObject;
  static toObject(includeInstance: boolean, msg: Consumer): Consumer.AsObject;
  static serializeBinaryToWriter(message: Consumer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Consumer;
  static deserializeBinaryFromReader(message: Consumer, reader: jspb.BinaryReader): Consumer;
}

export namespace Consumer {
  export type AsObject = {
    name: string,
    config?: ConsumerConfig.AsObject,
  }
}

export class ConsumerConfig extends jspb.Message {
  getDurable(): string;
  setDurable(value: string): ConsumerConfig;

  getName(): string;
  setName(value: string): ConsumerConfig;

  getDescription(): string;
  setDescription(value: string): ConsumerConfig;

  getDeliverPolicy(): number;
  setDeliverPolicy(value: number): ConsumerConfig;

  getOptStartSeq(): number;
  setOptStartSeq(value: number): ConsumerConfig;

  getOptStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOptStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ConsumerConfig;
  hasOptStartTime(): boolean;
  clearOptStartTime(): ConsumerConfig;

  getAckPolicy(): number;
  setAckPolicy(value: number): ConsumerConfig;

  getAckWait(): number;
  setAckWait(value: number): ConsumerConfig;

  getMaxDeliver(): number;
  setMaxDeliver(value: number): ConsumerConfig;

  getBackoffList(): Array<number>;
  setBackoffList(value: Array<number>): ConsumerConfig;
  clearBackoffList(): ConsumerConfig;
  addBackoff(value: number, index?: number): ConsumerConfig;

  getFilterSubject(): string;
  setFilterSubject(value: string): ConsumerConfig;

  getFilterSubjectsList(): Array<string>;
  setFilterSubjectsList(value: Array<string>): ConsumerConfig;
  clearFilterSubjectsList(): ConsumerConfig;
  addFilterSubjects(value: string, index?: number): ConsumerConfig;

  getReplayPolicy(): number;
  setReplayPolicy(value: number): ConsumerConfig;

  getRateLimitBps(): number;
  setRateLimitBps(value: number): ConsumerConfig;

  getSampleFreq(): string;
  setSampleFreq(value: string): ConsumerConfig;

  getMaxWaiting(): number;
  setMaxWaiting(value: number): ConsumerConfig;

  getMaxAckPending(): number;
  setMaxAckPending(value: number): ConsumerConfig;

  getFlowControl(): boolean;
  setFlowControl(value: boolean): ConsumerConfig;

  getIdleHeartbeat(): number;
  setIdleHeartbeat(value: number): ConsumerConfig;

  getHeadersOnly(): boolean;
  setHeadersOnly(value: boolean): ConsumerConfig;

  getMaxRequestBatch(): number;
  setMaxRequestBatch(value: number): ConsumerConfig;

  getMaxRequestExpires(): number;
  setMaxRequestExpires(value: number): ConsumerConfig;

  getMaxRequestMaxBytes(): number;
  setMaxRequestMaxBytes(value: number): ConsumerConfig;

  getDeliverSubject(): string;
  setDeliverSubject(value: string): ConsumerConfig;

  getDeliverGroup(): string;
  setDeliverGroup(value: string): ConsumerConfig;

  getInactiveThreshold(): number;
  setInactiveThreshold(value: number): ConsumerConfig;

  getReplicas(): number;
  setReplicas(value: number): ConsumerConfig;

  getMemoryStorage(): boolean;
  setMemoryStorage(value: boolean): ConsumerConfig;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): ConsumerConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumerConfig): ConsumerConfig.AsObject;
  static serializeBinaryToWriter(message: ConsumerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumerConfig;
  static deserializeBinaryFromReader(message: ConsumerConfig, reader: jspb.BinaryReader): ConsumerConfig;
}

export namespace ConsumerConfig {
  export type AsObject = {
    durable: string,
    name: string,
    description: string,
    deliverPolicy: number,
    optStartSeq: number,
    optStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ackPolicy: number,
    ackWait: number,
    maxDeliver: number,
    backoffList: Array<number>,
    filterSubject: string,
    filterSubjectsList: Array<string>,
    replayPolicy: number,
    rateLimitBps: number,
    sampleFreq: string,
    maxWaiting: number,
    maxAckPending: number,
    flowControl: boolean,
    idleHeartbeat: number,
    headersOnly: boolean,
    maxRequestBatch: number,
    maxRequestExpires: number,
    maxRequestMaxBytes: number,
    deliverSubject: string,
    deliverGroup: string,
    inactiveThreshold: number,
    replicas: number,
    memoryStorage: boolean,
    metadataMap: Array<[string, string]>,
  }
}

export class ConsumerInfos extends jspb.Message {
  getStreamName(): string;
  setStreamName(value: string): ConsumerInfos;

  getName(): string;
  setName(value: string): ConsumerInfos;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): ConsumerInfos;
  hasCreated(): boolean;
  clearCreated(): ConsumerInfos;

  getDelivered(): SequenceInfo | undefined;
  setDelivered(value?: SequenceInfo): ConsumerInfos;
  hasDelivered(): boolean;
  clearDelivered(): ConsumerInfos;

  getAckFloor(): SequenceInfo | undefined;
  setAckFloor(value?: SequenceInfo): ConsumerInfos;
  hasAckFloor(): boolean;
  clearAckFloor(): ConsumerInfos;

  getNumAckPendin(): number;
  setNumAckPendin(value: number): ConsumerInfos;

  getNumRedelivered(): number;
  setNumRedelivered(value: number): ConsumerInfos;

  getNumWaiting(): number;
  setNumWaiting(value: number): ConsumerInfos;

  getNumPending(): number;
  setNumPending(value: number): ConsumerInfos;

  getCluster(): ClusterInfo | undefined;
  setCluster(value?: ClusterInfo): ConsumerInfos;
  hasCluster(): boolean;
  clearCluster(): ConsumerInfos;

  getPushBound(): boolean;
  setPushBound(value: boolean): ConsumerInfos;

  getConfig(): ConsumerConfig | undefined;
  setConfig(value?: ConsumerConfig): ConsumerInfos;
  hasConfig(): boolean;
  clearConfig(): ConsumerInfos;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumerInfos.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumerInfos): ConsumerInfos.AsObject;
  static serializeBinaryToWriter(message: ConsumerInfos, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumerInfos;
  static deserializeBinaryFromReader(message: ConsumerInfos, reader: jspb.BinaryReader): ConsumerInfos;
}

export namespace ConsumerInfos {
  export type AsObject = {
    streamName: string,
    name: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    delivered?: SequenceInfo.AsObject,
    ackFloor?: SequenceInfo.AsObject,
    numAckPendin: number,
    numRedelivered: number,
    numWaiting: number,
    numPending: number,
    cluster?: ClusterInfo.AsObject,
    pushBound: boolean,
    config?: ConsumerConfig.AsObject,
  }
}

export class SequenceInfo extends jspb.Message {
  getConsumerSeq(): number;
  setConsumerSeq(value: number): SequenceInfo;

  getStreamSeq(): number;
  setStreamSeq(value: number): SequenceInfo;

  getLastActive(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastActive(value?: google_protobuf_timestamp_pb.Timestamp): SequenceInfo;
  hasLastActive(): boolean;
  clearLastActive(): SequenceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SequenceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SequenceInfo): SequenceInfo.AsObject;
  static serializeBinaryToWriter(message: SequenceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SequenceInfo;
  static deserializeBinaryFromReader(message: SequenceInfo, reader: jspb.BinaryReader): SequenceInfo;
}

export namespace SequenceInfo {
  export type AsObject = {
    consumerSeq: number,
    streamSeq: number,
    lastActive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ConsNames extends jspb.Message {
  getResponse(): string;
  setResponse(value: string): ConsNames;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsNames.AsObject;
  static toObject(includeInstance: boolean, msg: ConsNames): ConsNames.AsObject;
  static serializeBinaryToWriter(message: ConsNames, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsNames;
  static deserializeBinaryFromReader(message: ConsNames, reader: jspb.BinaryReader): ConsNames;
}

export namespace ConsNames {
  export type AsObject = {
    response: string,
  }
}

export class AccountInfos extends jspb.Message {
  getTier(): Tier | undefined;
  setTier(value?: Tier): AccountInfos;
  hasTier(): boolean;
  clearTier(): AccountInfos;

  getDomain(): string;
  setDomain(value: string): AccountInfos;

  getApi(): APIStats | undefined;
  setApi(value?: APIStats): AccountInfos;
  hasApi(): boolean;
  clearApi(): AccountInfos;

  getTiersMap(): jspb.Map<string, Tier>;
  clearTiersMap(): AccountInfos;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountInfos.AsObject;
  static toObject(includeInstance: boolean, msg: AccountInfos): AccountInfos.AsObject;
  static serializeBinaryToWriter(message: AccountInfos, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountInfos;
  static deserializeBinaryFromReader(message: AccountInfos, reader: jspb.BinaryReader): AccountInfos;
}

export namespace AccountInfos {
  export type AsObject = {
    tier?: Tier.AsObject,
    domain: string,
    api?: APIStats.AsObject,
    tiersMap: Array<[string, Tier.AsObject]>,
  }
}

export class Tier extends jspb.Message {
  getMemory(): number;
  setMemory(value: number): Tier;

  getStorage(): number;
  setStorage(value: number): Tier;

  getReservedMemory(): number;
  setReservedMemory(value: number): Tier;

  getReservedStorage(): number;
  setReservedStorage(value: number): Tier;

  getStream(): number;
  setStream(value: number): Tier;

  getConsumers(): number;
  setConsumers(value: number): Tier;

  getLimits(): AccountLimits | undefined;
  setLimits(value?: AccountLimits): Tier;
  hasLimits(): boolean;
  clearLimits(): Tier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tier.AsObject;
  static toObject(includeInstance: boolean, msg: Tier): Tier.AsObject;
  static serializeBinaryToWriter(message: Tier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tier;
  static deserializeBinaryFromReader(message: Tier, reader: jspb.BinaryReader): Tier;
}

export namespace Tier {
  export type AsObject = {
    memory: number,
    storage: number,
    reservedMemory: number,
    reservedStorage: number,
    stream: number,
    consumers: number,
    limits?: AccountLimits.AsObject,
  }
}

export class AccountLimits extends jspb.Message {
  getMaxMemory(): number;
  setMaxMemory(value: number): AccountLimits;

  getMaxStorage(): number;
  setMaxStorage(value: number): AccountLimits;

  getMaxStreams(): number;
  setMaxStreams(value: number): AccountLimits;

  getMaxConsumers(): number;
  setMaxConsumers(value: number): AccountLimits;

  getMaxAckPending(): number;
  setMaxAckPending(value: number): AccountLimits;

  getMemoryMaxStreamBytes(): number;
  setMemoryMaxStreamBytes(value: number): AccountLimits;

  getStorageMaxStreamBytes(): number;
  setStorageMaxStreamBytes(value: number): AccountLimits;

  getMaxBytesRequired(): boolean;
  setMaxBytesRequired(value: boolean): AccountLimits;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountLimits.AsObject;
  static toObject(includeInstance: boolean, msg: AccountLimits): AccountLimits.AsObject;
  static serializeBinaryToWriter(message: AccountLimits, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountLimits;
  static deserializeBinaryFromReader(message: AccountLimits, reader: jspb.BinaryReader): AccountLimits;
}

export namespace AccountLimits {
  export type AsObject = {
    maxMemory: number,
    maxStorage: number,
    maxStreams: number,
    maxConsumers: number,
    maxAckPending: number,
    memoryMaxStreamBytes: number,
    storageMaxStreamBytes: number,
    maxBytesRequired: boolean,
  }
}

export class APIStats extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): APIStats;

  getErrors(): number;
  setErrors(value: number): APIStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIStats.AsObject;
  static toObject(includeInstance: boolean, msg: APIStats): APIStats.AsObject;
  static serializeBinaryToWriter(message: APIStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIStats;
  static deserializeBinaryFromReader(message: APIStats, reader: jspb.BinaryReader): APIStats;
}

export namespace APIStats {
  export type AsObject = {
    total: number,
    errors: number,
  }
}

