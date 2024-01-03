/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ProjectSourceRelation, ProjectSourceTable } from "./project_source.proto";

export interface UserCaseCreation {
  projectGenerateQueueId: number;
  projectId: number;
  userCases: UserCase[];
  progress?: UserCaseCreationProgress | undefined;
  error?: UserCaseCreationError | undefined;
  projectTables?: UserCaseCreationProjectTable | undefined;
}

export interface UserCaseCreationProgress {
  message: string;
}

export interface UserCaseCreationError {
  message: string;
}

export interface UserCaseCreationProjectTable {
  tables: ProjectSourceTable[];
  relations: ProjectSourceRelation[];
}

export interface UserCase {
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

export interface UserCaseContent {
  type: string;
  value: string;
}

export interface UserCaseProperty {
  category: string;
}

export interface UserCaseCreationResponse {
  projectGenerateQueueId: number;
  message: string;
  module: UserCaseCreationResponseModule;
  status: UserCaseCreationResponseStatus;
  tokenUsage: number;
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

export enum UserCaseCreationResponseStatus {
  STATUS_UNSPECIFIED = 0,
  STARTED = 1,
  SUCCEEDED = 2,
  FAILED = 3,
  UNRECOGNIZED = -1,
}

export function userCaseCreationResponseStatusFromJSON(object: any): UserCaseCreationResponseStatus {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return UserCaseCreationResponseStatus.STATUS_UNSPECIFIED;
    case 1:
    case "STARTED":
      return UserCaseCreationResponseStatus.STARTED;
    case 2:
    case "SUCCEEDED":
      return UserCaseCreationResponseStatus.SUCCEEDED;
    case 3:
    case "FAILED":
      return UserCaseCreationResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserCaseCreationResponseStatus.UNRECOGNIZED;
  }
}

export function userCaseCreationResponseStatusToJSON(object: UserCaseCreationResponseStatus): string {
  switch (object) {
    case UserCaseCreationResponseStatus.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case UserCaseCreationResponseStatus.STARTED:
      return "STARTED";
    case UserCaseCreationResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case UserCaseCreationResponseStatus.FAILED:
      return "FAILED";
    case UserCaseCreationResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseUserCaseCreation(): UserCaseCreation {
  return { projectGenerateQueueId: 0, projectId: 0, userCases: [] };
}

export const UserCaseCreation = {
  encode(message: UserCaseCreation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    for (const v of message.userCases) {
      UserCase.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.progress !== undefined) {
      UserCaseCreationProgress.encode(message.progress, writer.uint32(34).fork()).ldelim();
    }
    if (message.error !== undefined) {
      UserCaseCreationError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    if (message.projectTables !== undefined) {
      UserCaseCreationProjectTable.encode(message.projectTables, writer.uint32(50).fork()).ldelim();
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
          message.userCases.push(UserCase.decode(reader, reader.uint32()));
          break;
        case 4:
          message.progress = UserCaseCreationProgress.decode(reader, reader.uint32());
          break;
        case 5:
          message.error = UserCaseCreationError.decode(reader, reader.uint32());
          break;
        case 6:
          message.projectTables = UserCaseCreationProjectTable.decode(reader, reader.uint32());
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
      userCases: Array.isArray(object?.userCases) ? object.userCases.map((e: any) => UserCase.fromJSON(e)) : [],
      progress: isSet(object.progress) ? UserCaseCreationProgress.fromJSON(object.progress) : undefined,
      error: isSet(object.error) ? UserCaseCreationError.fromJSON(object.error) : undefined,
      projectTables: isSet(object.projectTables)
        ? UserCaseCreationProjectTable.fromJSON(object.projectTables)
        : undefined,
    };
  },

  toJSON(message: UserCaseCreation): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.userCases) {
      obj.userCases = message.userCases.map((e) => e ? UserCase.toJSON(e) : undefined);
    } else {
      obj.userCases = [];
    }
    message.progress !== undefined &&
      (obj.progress = message.progress ? UserCaseCreationProgress.toJSON(message.progress) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? UserCaseCreationError.toJSON(message.error) : undefined);
    message.projectTables !== undefined && (obj.projectTables = message.projectTables
      ? UserCaseCreationProjectTable.toJSON(message.projectTables)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UserCaseCreation>): UserCaseCreation {
    const message = createBaseUserCaseCreation();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.userCases = object.userCases?.map((e) => UserCase.fromPartial(e)) || [];
    message.progress = (object.progress !== undefined && object.progress !== null)
      ? UserCaseCreationProgress.fromPartial(object.progress)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? UserCaseCreationError.fromPartial(object.error)
      : undefined;
    message.projectTables = (object.projectTables !== undefined && object.projectTables !== null)
      ? UserCaseCreationProjectTable.fromPartial(object.projectTables)
      : undefined;
    return message;
  },
};

function createBaseUserCaseCreationProgress(): UserCaseCreationProgress {
  return { message: "" };
}

export const UserCaseCreationProgress = {
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

export const UserCaseCreationError = {
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

function createBaseUserCaseCreationProjectTable(): UserCaseCreationProjectTable {
  return { tables: [], relations: [] };
}

export const UserCaseCreationProjectTable = {
  encode(message: UserCaseCreationProjectTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tables) {
      ProjectSourceTable.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.relations) {
      ProjectSourceRelation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCaseCreationProjectTable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCaseCreationProjectTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tables.push(ProjectSourceTable.decode(reader, reader.uint32()));
          break;
        case 2:
          message.relations.push(ProjectSourceRelation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserCaseCreationProjectTable {
    return {
      tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => ProjectSourceTable.fromJSON(e)) : [],
      relations: Array.isArray(object?.relations)
        ? object.relations.map((e: any) => ProjectSourceRelation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserCaseCreationProjectTable): unknown {
    const obj: any = {};
    if (message.tables) {
      obj.tables = message.tables.map((e) => e ? ProjectSourceTable.toJSON(e) : undefined);
    } else {
      obj.tables = [];
    }
    if (message.relations) {
      obj.relations = message.relations.map((e) => e ? ProjectSourceRelation.toJSON(e) : undefined);
    } else {
      obj.relations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UserCaseCreationProjectTable>): UserCaseCreationProjectTable {
    const message = createBaseUserCaseCreationProjectTable();
    message.tables = object.tables?.map((e) => ProjectSourceTable.fromPartial(e)) || [];
    message.relations = object.relations?.map((e) => ProjectSourceRelation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserCase(): UserCase {
  return { id: 0, name: "", nodeId: "", parentNodeId: "", blockType: "", content: [], projectId: 0, children: [] };
}

export const UserCase = {
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
      UserCaseContent.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.properties !== undefined) {
      UserCaseProperty.encode(message.properties, writer.uint32(58).fork()).ldelim();
    }
    if (message.projectId !== 0) {
      writer.uint32(64).int32(message.projectId);
    }
    for (const v of message.children) {
      UserCase.encode(v!, writer.uint32(74).fork()).ldelim();
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
          message.content.push(UserCaseContent.decode(reader, reader.uint32()));
          break;
        case 7:
          message.properties = UserCaseProperty.decode(reader, reader.uint32());
          break;
        case 8:
          message.projectId = reader.int32();
          break;
        case 9:
          message.children.push(UserCase.decode(reader, reader.uint32()));
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
      content: Array.isArray(object?.content) ? object.content.map((e: any) => UserCaseContent.fromJSON(e)) : [],
      properties: isSet(object.properties) ? UserCaseProperty.fromJSON(object.properties) : undefined,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      children: Array.isArray(object?.children) ? object.children.map((e: any) => UserCase.fromJSON(e)) : [],
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
      obj.content = message.content.map((e) => e ? UserCaseContent.toJSON(e) : undefined);
    } else {
      obj.content = [];
    }
    message.properties !== undefined &&
      (obj.properties = message.properties ? UserCaseProperty.toJSON(message.properties) : undefined);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.children) {
      obj.children = message.children.map((e) => e ? UserCase.toJSON(e) : undefined);
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
    message.content = object.content?.map((e) => UserCaseContent.fromPartial(e)) || [];
    message.properties = (object.properties !== undefined && object.properties !== null)
      ? UserCaseProperty.fromPartial(object.properties)
      : undefined;
    message.projectId = object.projectId ?? 0;
    message.children = object.children?.map((e) => UserCase.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserCaseContent(): UserCaseContent {
  return { type: "", value: "" };
}

export const UserCaseContent = {
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

export const UserCaseProperty = {
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
  return { projectGenerateQueueId: 0, message: "", module: 0, status: 0, tokenUsage: 0 };
}

export const UserCaseCreationResponse = {
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
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokenUsage !== 0) {
      writer.uint32(40).int32(message.tokenUsage);
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
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.tokenUsage = reader.int32();
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
      status: isSet(object.status) ? userCaseCreationResponseStatusFromJSON(object.status) : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
    };
  },

  toJSON(message: UserCaseCreationResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.message !== undefined && (obj.message = message.message);
    message.module !== undefined && (obj.module = userCaseCreationResponseModuleToJSON(message.module));
    message.status !== undefined && (obj.status = userCaseCreationResponseStatusToJSON(message.status));
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    return obj;
  },

  fromPartial(object: DeepPartial<UserCaseCreationResponse>): UserCaseCreationResponse {
    const message = createBaseUserCaseCreationResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.message = object.message ?? "";
    message.module = object.module ?? 0;
    message.status = object.status ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
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
