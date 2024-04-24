/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { StructData } from "../google/protobuf/struct.proto";
import { Block, BlockData } from "./block_core.proto";
import { ProjectSourceRelation, ProjectSourceRelationData, ProjectSourceTable, ProjectSourceTableData } from "./project_source.proto";

export class UseCaseCreation {
  projectGenerateQueueId: number;
  projectId: number;
  useCases: UseCase[];
  tickets: Block[];
  htmlWireframes: UseCaseCreationHtmlWireframe[];
  progress?: UseCaseCreationProgress | undefined;
  error?: UseCaseCreationError | undefined;
  projectTables?: UseCaseCreationProjectTable | undefined;
  relatedTables?: UseCaseCreationProjectTable | undefined;
}

export class UseCaseCreationProgress {
  message: string;
}

export class UseCaseCreationError {
  message: string;
}

export class UseCaseCreationProjectTable {
  tables: ProjectSourceTable[];
  relations: ProjectSourceRelation[];
}

export class UseCaseCreationHtmlWireframe {
  id: number;
  html: string;
}

export class UseCase {
  id: number;
  name: string;
  nodeId: string;
  parentNodeId: string;
  blockType: string;
  content: UseCaseContent[];
  properties?: { [key: string]: any };
  projectId: number;
  children: UseCase[];
}

export class UseCaseContent {
  type: string;
  value: string;
}

export class UseCaseCreationResponse {
  projectGenerateQueueId: number;
  message: string;
  module: UseCaseCreationResponseModule;
  status: UseCaseCreationResponseStatus;
  tokenUsage: number;
}

export enum UseCaseCreationResponseModule {
  UNSPECIFIED = 0,
  BUSINESS_LOGIC = 1,
  ERD = 2,
  API = 3,
  IMAGE = 4,
  WIREFRAME = 5,
  UNRECOGNIZED = -1,
}

export function useCaseCreationResponseModuleFromJSON(object: any): UseCaseCreationResponseModule {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return UseCaseCreationResponseModule.UNSPECIFIED;
    case 1:
    case "BUSINESS_LOGIC":
      return UseCaseCreationResponseModule.BUSINESS_LOGIC;
    case 2:
    case "ERD":
      return UseCaseCreationResponseModule.ERD;
    case 3:
    case "API":
      return UseCaseCreationResponseModule.API;
    case 4:
    case "IMAGE":
      return UseCaseCreationResponseModule.IMAGE;
    case 5:
    case "WIREFRAME":
      return UseCaseCreationResponseModule.WIREFRAME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UseCaseCreationResponseModule.UNRECOGNIZED;
  }
}

export function useCaseCreationResponseModuleToJSON(object: UseCaseCreationResponseModule): string {
  switch (object) {
    case UseCaseCreationResponseModule.UNSPECIFIED:
      return "UNSPECIFIED";
    case UseCaseCreationResponseModule.BUSINESS_LOGIC:
      return "BUSINESS_LOGIC";
    case UseCaseCreationResponseModule.ERD:
      return "ERD";
    case UseCaseCreationResponseModule.API:
      return "API";
    case UseCaseCreationResponseModule.IMAGE:
      return "IMAGE";
    case UseCaseCreationResponseModule.WIREFRAME:
      return "WIREFRAME";
    case UseCaseCreationResponseModule.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UseCaseCreationResponseStatus {
  STATUS_UNSPECIFIED = 0,
  STARTED = 1,
  SUCCEEDED = 2,
  FAILED = 3,
  UNRECOGNIZED = -1,
}

export function useCaseCreationResponseStatusFromJSON(object: any): UseCaseCreationResponseStatus {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return UseCaseCreationResponseStatus.STATUS_UNSPECIFIED;
    case 1:
    case "STARTED":
      return UseCaseCreationResponseStatus.STARTED;
    case 2:
    case "SUCCEEDED":
      return UseCaseCreationResponseStatus.SUCCEEDED;
    case 3:
    case "FAILED":
      return UseCaseCreationResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UseCaseCreationResponseStatus.UNRECOGNIZED;
  }
}

export function useCaseCreationResponseStatusToJSON(object: UseCaseCreationResponseStatus): string {
  switch (object) {
    case UseCaseCreationResponseStatus.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case UseCaseCreationResponseStatus.STARTED:
      return "STARTED";
    case UseCaseCreationResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case UseCaseCreationResponseStatus.FAILED:
      return "FAILED";
    case UseCaseCreationResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseUseCaseCreation(): UseCaseCreation {
  return { projectGenerateQueueId: 0, projectId: 0, useCases: [], tickets: [], htmlWireframes: [] };
}

export const UseCaseCreationData = {
  encode(message: UseCaseCreation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    for (const v of message.useCases) {
      UseCaseData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.tickets) {
      BlockData.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.htmlWireframes) {
      UseCaseCreationHtmlWireframeData.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.progress !== undefined) {
      UseCaseCreationProgressData.encode(message.progress, writer.uint32(34).fork()).ldelim();
    }
    if (message.error !== undefined) {
      UseCaseCreationErrorData.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    if (message.projectTables !== undefined) {
      UseCaseCreationProjectTableData.encode(message.projectTables, writer.uint32(50).fork()).ldelim();
    }
    if (message.relatedTables !== undefined) {
      UseCaseCreationProjectTableData.encode(message.relatedTables, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UseCaseCreation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUseCaseCreation();
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
          message.useCases.push(UseCaseData.decode(reader, reader.uint32()));
          break;
        case 9:
          message.tickets.push(BlockData.decode(reader, reader.uint32()));
          break;
        case 7:
          message.htmlWireframes.push(UseCaseCreationHtmlWireframeData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.progress = UseCaseCreationProgressData.decode(reader, reader.uint32());
          break;
        case 5:
          message.error = UseCaseCreationErrorData.decode(reader, reader.uint32());
          break;
        case 6:
          message.projectTables = UseCaseCreationProjectTableData.decode(reader, reader.uint32());
          break;
        case 8:
          message.relatedTables = UseCaseCreationProjectTableData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UseCaseCreation {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      useCases: Array.isArray(object?.useCases) ? object.useCases.map((e: any) => UseCaseData.fromJSON(e)) : [],
      tickets: Array.isArray(object?.tickets) ? object.tickets.map((e: any) => BlockData.fromJSON(e)) : [],
      htmlWireframes: Array.isArray(object?.htmlWireframes)
        ? object.htmlWireframes.map((e: any) => UseCaseCreationHtmlWireframeData.fromJSON(e))
        : [],
      progress: isSet(object.progress) ? UseCaseCreationProgressData.fromJSON(object.progress) : undefined,
      error: isSet(object.error) ? UseCaseCreationErrorData.fromJSON(object.error) : undefined,
      projectTables: isSet(object.projectTables)
        ? UseCaseCreationProjectTableData.fromJSON(object.projectTables)
        : undefined,
      relatedTables: isSet(object.relatedTables)
        ? UseCaseCreationProjectTableData.fromJSON(object.relatedTables)
        : undefined,
    };
  },

  toJSON(message: UseCaseCreation): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.useCases) {
      obj.useCases = message.useCases.map((e) => e ? UseCaseData.toJSON(e) : undefined);
    } else {
      obj.useCases = [];
    }
    if (message.tickets) {
      obj.tickets = message.tickets.map((e) => e ? BlockData.toJSON(e) : undefined);
    } else {
      obj.tickets = [];
    }
    if (message.htmlWireframes) {
      obj.htmlWireframes = message.htmlWireframes.map((e) =>
        e ? UseCaseCreationHtmlWireframeData.toJSON(e) : undefined
      );
    } else {
      obj.htmlWireframes = [];
    }
    message.progress !== undefined &&
      (obj.progress = message.progress ? UseCaseCreationProgressData.toJSON(message.progress) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? UseCaseCreationErrorData.toJSON(message.error) : undefined);
    message.projectTables !== undefined && (obj.projectTables = message.projectTables
      ? UseCaseCreationProjectTableData.toJSON(message.projectTables)
      : undefined);
    message.relatedTables !== undefined && (obj.relatedTables = message.relatedTables
      ? UseCaseCreationProjectTableData.toJSON(message.relatedTables)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UseCaseCreation>): UseCaseCreation {
    const message = createBaseUseCaseCreation();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.useCases = object.useCases?.map((e) => UseCaseData.fromPartial(e)) || [];
    message.tickets = object.tickets?.map((e) => BlockData.fromPartial(e)) || [];
    message.htmlWireframes = object.htmlWireframes?.map((e) => UseCaseCreationHtmlWireframeData.fromPartial(e)) || [];
    message.progress = (object.progress !== undefined && object.progress !== null)
      ? UseCaseCreationProgressData.fromPartial(object.progress)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? UseCaseCreationErrorData.fromPartial(object.error)
      : undefined;
    message.projectTables = (object.projectTables !== undefined && object.projectTables !== null)
      ? UseCaseCreationProjectTableData.fromPartial(object.projectTables)
      : undefined;
    message.relatedTables = (object.relatedTables !== undefined && object.relatedTables !== null)
      ? UseCaseCreationProjectTableData.fromPartial(object.relatedTables)
      : undefined;
    return message;
  },
};

function createBaseUseCaseCreationProgress(): UseCaseCreationProgress {
  return { message: "" };
}

export const UseCaseCreationProgressData = {
  encode(message: UseCaseCreationProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UseCaseCreationProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUseCaseCreationProgress();
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

  fromJSON(object: any): UseCaseCreationProgress {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: UseCaseCreationProgress): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<UseCaseCreationProgress>): UseCaseCreationProgress {
    const message = createBaseUseCaseCreationProgress();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseUseCaseCreationError(): UseCaseCreationError {
  return { message: "" };
}

export const UseCaseCreationErrorData = {
  encode(message: UseCaseCreationError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UseCaseCreationError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUseCaseCreationError();
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

  fromJSON(object: any): UseCaseCreationError {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: UseCaseCreationError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<UseCaseCreationError>): UseCaseCreationError {
    const message = createBaseUseCaseCreationError();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseUseCaseCreationProjectTable(): UseCaseCreationProjectTable {
  return { tables: [], relations: [] };
}

export const UseCaseCreationProjectTableData = {
  encode(message: UseCaseCreationProjectTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tables) {
      ProjectSourceTableData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.relations) {
      ProjectSourceRelationData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UseCaseCreationProjectTable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUseCaseCreationProjectTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tables.push(ProjectSourceTableData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.relations.push(ProjectSourceRelationData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UseCaseCreationProjectTable {
    return {
      tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => ProjectSourceTableData.fromJSON(e)) : [],
      relations: Array.isArray(object?.relations)
        ? object.relations.map((e: any) => ProjectSourceRelationData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UseCaseCreationProjectTable): unknown {
    const obj: any = {};
    if (message.tables) {
      obj.tables = message.tables.map((e) => e ? ProjectSourceTableData.toJSON(e) : undefined);
    } else {
      obj.tables = [];
    }
    if (message.relations) {
      obj.relations = message.relations.map((e) => e ? ProjectSourceRelationData.toJSON(e) : undefined);
    } else {
      obj.relations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UseCaseCreationProjectTable>): UseCaseCreationProjectTable {
    const message = createBaseUseCaseCreationProjectTable();
    message.tables = object.tables?.map((e) => ProjectSourceTableData.fromPartial(e)) || [];
    message.relations = object.relations?.map((e) => ProjectSourceRelationData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUseCaseCreationHtmlWireframe(): UseCaseCreationHtmlWireframe {
  return { id: 0, html: "" };
}

export const UseCaseCreationHtmlWireframeData = {
  encode(message: UseCaseCreationHtmlWireframe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.html !== "") {
      writer.uint32(18).string(message.html);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UseCaseCreationHtmlWireframe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUseCaseCreationHtmlWireframe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.html = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UseCaseCreationHtmlWireframe {
    return { id: isSet(object.id) ? Number(object.id) : 0, html: isSet(object.html) ? String(object.html) : "" };
  },

  toJSON(message: UseCaseCreationHtmlWireframe): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.html !== undefined && (obj.html = message.html);
    return obj;
  },

  fromPartial(object: DeepPartial<UseCaseCreationHtmlWireframe>): UseCaseCreationHtmlWireframe {
    const message = createBaseUseCaseCreationHtmlWireframe();
    message.id = object.id ?? 0;
    message.html = object.html ?? "";
    return message;
  },
};

function createBaseUseCase(): UseCase {
  return { id: 0, name: "", nodeId: "", parentNodeId: "", blockType: "", content: [], projectId: 0, children: [] };
}

export const UseCaseData = {
  encode(message: UseCase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      UseCaseContentData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.properties !== undefined) {
      StructData.encode(StructData.wrap(message.properties), writer.uint32(58).fork()).ldelim();
    }
    if (message.projectId !== 0) {
      writer.uint32(64).int32(message.projectId);
    }
    for (const v of message.children) {
      UseCaseData.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UseCase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUseCase();
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
          message.content.push(UseCaseContentData.decode(reader, reader.uint32()));
          break;
        case 7:
          message.properties = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        case 8:
          message.projectId = reader.int32();
          break;
        case 9:
          message.children.push(UseCaseData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UseCase {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      parentNodeId: isSet(object.parentNodeId) ? String(object.parentNodeId) : "",
      blockType: isSet(object.blockType) ? String(object.blockType) : "",
      content: Array.isArray(object?.content) ? object.content.map((e: any) => UseCaseContentData.fromJSON(e)) : [],
      properties: isObject(object.properties) ? object.properties : undefined,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      children: Array.isArray(object?.children) ? object.children.map((e: any) => UseCaseData.fromJSON(e)) : [],
    };
  },

  toJSON(message: UseCase): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.parentNodeId !== undefined && (obj.parentNodeId = message.parentNodeId);
    message.blockType !== undefined && (obj.blockType = message.blockType);
    if (message.content) {
      obj.content = message.content.map((e) => e ? UseCaseContentData.toJSON(e) : undefined);
    } else {
      obj.content = [];
    }
    message.properties !== undefined && (obj.properties = message.properties);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.children) {
      obj.children = message.children.map((e) => e ? UseCaseData.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UseCase>): UseCase {
    const message = createBaseUseCase();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.nodeId = object.nodeId ?? "";
    message.parentNodeId = object.parentNodeId ?? "";
    message.blockType = object.blockType ?? "";
    message.content = object.content?.map((e) => UseCaseContentData.fromPartial(e)) || [];
    message.properties = object.properties ?? undefined;
    message.projectId = object.projectId ?? 0;
    message.children = object.children?.map((e) => UseCaseData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUseCaseContent(): UseCaseContent {
  return { type: "", value: "" };
}

export const UseCaseContentData = {
  encode(message: UseCaseContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UseCaseContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUseCaseContent();
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

  fromJSON(object: any): UseCaseContent {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: UseCaseContent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<UseCaseContent>): UseCaseContent {
    const message = createBaseUseCaseContent();
    message.type = object.type ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseUseCaseCreationResponse(): UseCaseCreationResponse {
  return { projectGenerateQueueId: 0, message: "", module: 0, status: 0, tokenUsage: 0 };
}

export const UseCaseCreationResponseData = {
  encode(message: UseCaseCreationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UseCaseCreationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUseCaseCreationResponse();
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

  fromJSON(object: any): UseCaseCreationResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      module: isSet(object.module) ? useCaseCreationResponseModuleFromJSON(object.module) : 0,
      status: isSet(object.status) ? useCaseCreationResponseStatusFromJSON(object.status) : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
    };
  },

  toJSON(message: UseCaseCreationResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.message !== undefined && (obj.message = message.message);
    message.module !== undefined && (obj.module = useCaseCreationResponseModuleToJSON(message.module));
    message.status !== undefined && (obj.status = useCaseCreationResponseStatusToJSON(message.status));
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    return obj;
  },

  fromPartial(object: DeepPartial<UseCaseCreationResponse>): UseCaseCreationResponse {
    const message = createBaseUseCaseCreationResponse();
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
