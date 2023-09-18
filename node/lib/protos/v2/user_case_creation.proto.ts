/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class UserCaseCreation {
  projectGenerateQueueId: number;
  projectId: number;
  userCases: UserCase[];
  progress?: UserCaseCreationProgress | undefined;
  error?: UserCaseCreationError | undefined;
}

export class UserCaseCreationProgress {
  message: string;
}

export class UserCaseCreationError {
  message: string;
}

export class UserCase {
  id: number;
  name: string;
  nodeId: string;
  parentNodeId: string;
  blockType: string;
  content: UserCaseContent[];
  properties?: UserCaseProperty;
  projectId: number;
  children: UserCase[];
}

export class UserCaseContent {
  type: string;
  value: string;
}

export class UserCaseProperty {
  category: string;
}

export class UserCaseCreationResponse {
  projectGenerateQueueId: number;
  message: string;
  module: UserCaseCreationResponseModule;
}

export enum UserCaseCreationResponseModule {
  UNSPECIFIED = 0,
  BUSINESS_LOGIC = 1,
  ERD = 2,
  API = 3,
  UNRECOGNIZED = -1,
}

export function userCaseCreationResponseModuleFromJSON(object: any): UserCaseCreationResponseModule {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return UserCaseCreationResponseModule.UNSPECIFIED;
    case 1:
    case "BUSINESS_LOGIC":
      return UserCaseCreationResponseModule.BUSINESS_LOGIC;
    case 2:
    case "ERD":
      return UserCaseCreationResponseModule.ERD;
    case 3:
    case "API":
      return UserCaseCreationResponseModule.API;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserCaseCreationResponseModule.UNRECOGNIZED;
  }
}

export function userCaseCreationResponseModuleToJSON(object: UserCaseCreationResponseModule): string {
  switch (object) {
    case UserCaseCreationResponseModule.UNSPECIFIED:
      return "UNSPECIFIED";
    case UserCaseCreationResponseModule.BUSINESS_LOGIC:
      return "BUSINESS_LOGIC";
    case UserCaseCreationResponseModule.ERD:
      return "ERD";
    case UserCaseCreationResponseModule.API:
      return "API";
    case UserCaseCreationResponseModule.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseUserCaseCreation(): UserCaseCreation {
  return { projectGenerateQueueId: 0, projectId: 0, userCases: [] };
}

export const UserCaseCreationData = {
  encode(message: UserCaseCreation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    for (const v of message.userCases) {
      UserCaseData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.progress !== undefined) {
      UserCaseCreationProgressData.encode(message.progress, writer.uint32(34).fork()).ldelim();
    }
    if (message.error !== undefined) {
      UserCaseCreationErrorData.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCaseCreation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCaseCreation();
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
          message.userCases.push(UserCaseData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.progress = UserCaseCreationProgressData.decode(reader, reader.uint32());
          break;
        case 5:
          message.error = UserCaseCreationErrorData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserCaseCreation {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      userCases: Array.isArray(object?.userCases) ? object.userCases.map((e: any) => UserCaseData.fromJSON(e)) : [],
      progress: isSet(object.progress) ? UserCaseCreationProgressData.fromJSON(object.progress) : undefined,
      error: isSet(object.error) ? UserCaseCreationErrorData.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: UserCaseCreation): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.userCases) {
      obj.userCases = message.userCases.map((e) => e ? UserCaseData.toJSON(e) : undefined);
    } else {
      obj.userCases = [];
    }
    message.progress !== undefined &&
      (obj.progress = message.progress ? UserCaseCreationProgressData.toJSON(message.progress) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? UserCaseCreationErrorData.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UserCaseCreation>): UserCaseCreation {
    const message = createBaseUserCaseCreation();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.userCases = object.userCases?.map((e) => UserCaseData.fromPartial(e)) || [];
    message.progress = (object.progress !== undefined && object.progress !== null)
      ? UserCaseCreationProgressData.fromPartial(object.progress)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? UserCaseCreationErrorData.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseUserCaseCreationProgress(): UserCaseCreationProgress {
  return { message: "" };
}

export const UserCaseCreationProgressData = {
  encode(message: UserCaseCreationProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCaseCreationProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCaseCreationProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserCaseCreationProgress {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: UserCaseCreationProgress): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<UserCaseCreationProgress>): UserCaseCreationProgress {
    const message = createBaseUserCaseCreationProgress();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseUserCaseCreationError(): UserCaseCreationError {
  return { message: "" };
}

export const UserCaseCreationErrorData = {
  encode(message: UserCaseCreationError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCaseCreationError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCaseCreationError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserCaseCreationError {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: UserCaseCreationError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<UserCaseCreationError>): UserCaseCreationError {
    const message = createBaseUserCaseCreationError();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseUserCase(): UserCase {
  return { id: 0, name: "", nodeId: "", parentNodeId: "", blockType: "", content: [], projectId: 0, children: [] };
}

export const UserCaseData = {
  encode(message: UserCase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.nodeId !== "") {
      writer.uint32(26).string(message.nodeId);
    }
    if (message.parentNodeId !== "") {
      writer.uint32(34).string(message.parentNodeId);
    }
    if (message.blockType !== "") {
      writer.uint32(42).string(message.blockType);
    }
    for (const v of message.content) {
      UserCaseContentData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.properties !== undefined) {
      UserCasePropertyData.encode(message.properties, writer.uint32(58).fork()).ldelim();
    }
    if (message.projectId !== 0) {
      writer.uint32(64).int32(message.projectId);
    }
    for (const v of message.children) {
      UserCaseData.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.nodeId = reader.string();
          break;
        case 4:
          message.parentNodeId = reader.string();
          break;
        case 5:
          message.blockType = reader.string();
          break;
        case 6:
          message.content.push(UserCaseContentData.decode(reader, reader.uint32()));
          break;
        case 7:
          message.properties = UserCasePropertyData.decode(reader, reader.uint32());
          break;
        case 8:
          message.projectId = reader.int32();
          break;
        case 9:
          message.children.push(UserCaseData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserCase {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      parentNodeId: isSet(object.parentNodeId) ? String(object.parentNodeId) : "",
      blockType: isSet(object.blockType) ? String(object.blockType) : "",
      content: Array.isArray(object?.content) ? object.content.map((e: any) => UserCaseContentData.fromJSON(e)) : [],
      properties: isSet(object.properties) ? UserCasePropertyData.fromJSON(object.properties) : undefined,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      children: Array.isArray(object?.children) ? object.children.map((e: any) => UserCaseData.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserCase): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.parentNodeId !== undefined && (obj.parentNodeId = message.parentNodeId);
    message.blockType !== undefined && (obj.blockType = message.blockType);
    if (message.content) {
      obj.content = message.content.map((e) => e ? UserCaseContentData.toJSON(e) : undefined);
    } else {
      obj.content = [];
    }
    message.properties !== undefined &&
      (obj.properties = message.properties ? UserCasePropertyData.toJSON(message.properties) : undefined);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.children) {
      obj.children = message.children.map((e) => e ? UserCaseData.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UserCase>): UserCase {
    const message = createBaseUserCase();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.nodeId = object.nodeId ?? "";
    message.parentNodeId = object.parentNodeId ?? "";
    message.blockType = object.blockType ?? "";
    message.content = object.content?.map((e) => UserCaseContentData.fromPartial(e)) || [];
    message.properties = (object.properties !== undefined && object.properties !== null)
      ? UserCasePropertyData.fromPartial(object.properties)
      : undefined;
    message.projectId = object.projectId ?? 0;
    message.children = object.children?.map((e) => UserCaseData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserCaseContent(): UserCaseContent {
  return { type: "", value: "" };
}

export const UserCaseContentData = {
  encode(message: UserCaseContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCaseContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCaseContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserCaseContent {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: UserCaseContent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<UserCaseContent>): UserCaseContent {
    const message = createBaseUserCaseContent();
    message.type = object.type ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseUserCaseProperty(): UserCaseProperty {
  return { category: "" };
}

export const UserCasePropertyData = {
  encode(message: UserCaseProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.category !== "") {
      writer.uint32(10).string(message.category);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCaseProperty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCaseProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserCaseProperty {
    return { category: isSet(object.category) ? String(object.category) : "" };
  },

  toJSON(message: UserCaseProperty): unknown {
    const obj: any = {};
    message.category !== undefined && (obj.category = message.category);
    return obj;
  },

  fromPartial(object: DeepPartial<UserCaseProperty>): UserCaseProperty {
    const message = createBaseUserCaseProperty();
    message.category = object.category ?? "";
    return message;
  },
};

function createBaseUserCaseCreationResponse(): UserCaseCreationResponse {
  return { projectGenerateQueueId: 0, message: "", module: 0 };
}

export const UserCaseCreationResponseData = {
  encode(message: UserCaseCreationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.module !== 0) {
      writer.uint32(24).int32(message.module);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCaseCreationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCaseCreationResponse();
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
          message.module = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserCaseCreationResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      module: isSet(object.module) ? userCaseCreationResponseModuleFromJSON(object.module) : 0,
    };
  },

  toJSON(message: UserCaseCreationResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.message !== undefined && (obj.message = message.message);
    message.module !== undefined && (obj.module = userCaseCreationResponseModuleToJSON(message.module));
    return obj;
  },

  fromPartial(object: DeepPartial<UserCaseCreationResponse>): UserCaseCreationResponse {
    const message = createBaseUserCaseCreationResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.message = object.message ?? "";
    message.module = object.module ?? 0;
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
