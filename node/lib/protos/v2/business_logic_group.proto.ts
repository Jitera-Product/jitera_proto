/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Block, BlockData } from "./block_core.proto";

export class BusinessLogicGroupSyncResponse {
  projectGenerateQueueId: number;
  message: string;
  status: BusinessLogicGroupSyncResponseStatus;
  tokenUsage: number;
  businessLogicGroups: BusinessLogicGroup[];
}

export enum BusinessLogicGroupSyncResponseStatus {
  STATUS_UNSPECIFIED = 0,
  STARTED = 1,
  SUCCEEDED = 2,
  FAILED = 3,
  UNRECOGNIZED = -1,
}

export function businessLogicGroupSyncResponseStatusFromJSON(object: any): BusinessLogicGroupSyncResponseStatus {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return BusinessLogicGroupSyncResponseStatus.STATUS_UNSPECIFIED;
    case 1:
    case "STARTED":
      return BusinessLogicGroupSyncResponseStatus.STARTED;
    case 2:
    case "SUCCEEDED":
      return BusinessLogicGroupSyncResponseStatus.SUCCEEDED;
    case 3:
    case "FAILED":
      return BusinessLogicGroupSyncResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BusinessLogicGroupSyncResponseStatus.UNRECOGNIZED;
  }
}

export function businessLogicGroupSyncResponseStatusToJSON(object: BusinessLogicGroupSyncResponseStatus): string {
  switch (object) {
    case BusinessLogicGroupSyncResponseStatus.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case BusinessLogicGroupSyncResponseStatus.STARTED:
      return "STARTED";
    case BusinessLogicGroupSyncResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case BusinessLogicGroupSyncResponseStatus.FAILED:
      return "FAILED";
    case BusinessLogicGroupSyncResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class BusinessLogicGroup {
  category: string;
  nodeIds: string[];
}

export class BusinessLogicGroupSync {
  projectGenerateQueueId: number;
  projectId: number;
  useCase?: Block;
  businessLogics: Block[];
}

function createBaseBusinessLogicGroupSyncResponse(): BusinessLogicGroupSyncResponse {
  return { projectGenerateQueueId: 0, message: "", status: 0, tokenUsage: 0, businessLogicGroups: [] };
}

export const BusinessLogicGroupSyncResponseData = {
  encode(message: BusinessLogicGroupSyncResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.tokenUsage !== 0) {
      writer.uint32(32).int32(message.tokenUsage);
    }
    for (const v of message.businessLogicGroups) {
      BusinessLogicGroupData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessLogicGroupSyncResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessLogicGroupSyncResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.tokenUsage = reader.int32();
          break;
        case 5:
          message.businessLogicGroups.push(BusinessLogicGroupData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessLogicGroupSyncResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      status: isSet(object.status) ? businessLogicGroupSyncResponseStatusFromJSON(object.status) : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
      businessLogicGroups: Array.isArray(object?.businessLogicGroups)
        ? object.businessLogicGroups.map((e: any) => BusinessLogicGroupData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BusinessLogicGroupSyncResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.message !== undefined && (obj.message = message.message);
    message.status !== undefined && (obj.status = businessLogicGroupSyncResponseStatusToJSON(message.status));
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    if (message.businessLogicGroups) {
      obj.businessLogicGroups = message.businessLogicGroups.map((e) =>
        e ? BusinessLogicGroupData.toJSON(e) : undefined
      );
    } else {
      obj.businessLogicGroups = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicGroupSyncResponse>): BusinessLogicGroupSyncResponse {
    const message = createBaseBusinessLogicGroupSyncResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.message = object.message ?? "";
    message.status = object.status ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    message.businessLogicGroups = object.businessLogicGroups?.map((e) => BusinessLogicGroupData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBusinessLogicGroup(): BusinessLogicGroup {
  return { category: "", nodeIds: [] };
}

export const BusinessLogicGroupData = {
  encode(message: BusinessLogicGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.category !== "") {
      writer.uint32(10).string(message.category);
    }
    for (const v of message.nodeIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessLogicGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessLogicGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = reader.string();
          break;
        case 2:
          message.nodeIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessLogicGroup {
    return {
      category: isSet(object.category) ? String(object.category) : "",
      nodeIds: Array.isArray(object?.nodeIds) ? object.nodeIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: BusinessLogicGroup): unknown {
    const obj: any = {};
    message.category !== undefined && (obj.category = message.category);
    if (message.nodeIds) {
      obj.nodeIds = message.nodeIds.map((e) => e);
    } else {
      obj.nodeIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicGroup>): BusinessLogicGroup {
    const message = createBaseBusinessLogicGroup();
    message.category = object.category ?? "";
    message.nodeIds = object.nodeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseBusinessLogicGroupSync(): BusinessLogicGroupSync {
  return { projectGenerateQueueId: 0, projectId: 0, businessLogics: [] };
}

export const BusinessLogicGroupSyncData = {
  encode(message: BusinessLogicGroupSync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.useCase !== undefined) {
      BlockData.encode(message.useCase, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.businessLogics) {
      BlockData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessLogicGroupSync {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessLogicGroupSync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.useCase = BlockData.decode(reader, reader.uint32());
          break;
        case 4:
          message.businessLogics.push(BlockData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessLogicGroupSync {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      useCase: isSet(object.useCase) ? BlockData.fromJSON(object.useCase) : undefined,
      businessLogics: Array.isArray(object?.businessLogics)
        ? object.businessLogics.map((e: any) => BlockData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BusinessLogicGroupSync): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.useCase !== undefined && (obj.useCase = message.useCase ? BlockData.toJSON(message.useCase) : undefined);
    if (message.businessLogics) {
      obj.businessLogics = message.businessLogics.map((e) => e ? BlockData.toJSON(e) : undefined);
    } else {
      obj.businessLogics = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicGroupSync>): BusinessLogicGroupSync {
    const message = createBaseBusinessLogicGroupSync();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.useCase = (object.useCase !== undefined && object.useCase !== null)
      ? BlockData.fromPartial(object.useCase)
      : undefined;
    message.businessLogics = object.businessLogics?.map((e) => BlockData.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
