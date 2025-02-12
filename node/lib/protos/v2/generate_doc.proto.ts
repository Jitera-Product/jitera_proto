/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Value, ValueData } from "../google/protobuf/struct.proto";

export class GenerateDocResponse {
  projectGenerateQueueId: number;
  module: GenerateDocResponseModule;
  status: GenerateDocResponseStatus;
  errorMessage?: string | undefined;
  totalChunks: number;
  chunk?: GenerateDocResponseChunk | undefined;
}

export enum GenerateDocResponseModule {
  CODE_TO_NATURAL_LANGUAGE = 0,
  UNRECOGNIZED = -1,
}

export function generateDocResponseModuleFromJSON(object: any): GenerateDocResponseModule {
  switch (object) {
    case 0:
    case "CODE_TO_NATURAL_LANGUAGE":
      return GenerateDocResponseModule.CODE_TO_NATURAL_LANGUAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GenerateDocResponseModule.UNRECOGNIZED;
  }
}

export function generateDocResponseModuleToJSON(object: GenerateDocResponseModule): string {
  switch (object) {
    case GenerateDocResponseModule.CODE_TO_NATURAL_LANGUAGE:
      return "CODE_TO_NATURAL_LANGUAGE";
    case GenerateDocResponseModule.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GenerateDocResponseStatus {
  STARTED = 0,
  FAILED = 1,
  UNRECOGNIZED = -1,
}

export function generateDocResponseStatusFromJSON(object: any): GenerateDocResponseStatus {
  switch (object) {
    case 0:
    case "STARTED":
      return GenerateDocResponseStatus.STARTED;
    case 1:
    case "FAILED":
      return GenerateDocResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GenerateDocResponseStatus.UNRECOGNIZED;
  }
}

export function generateDocResponseStatusToJSON(object: GenerateDocResponseStatus): string {
  switch (object) {
    case GenerateDocResponseStatus.STARTED:
      return "STARTED";
    case GenerateDocResponseStatus.FAILED:
      return "FAILED";
    case GenerateDocResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class GenerateDocResponseChunk {
  status: GenerateDocResponseChunkStatus;
  blocks: GenerateDocResponseChunkBlockResponse[];
  errorMessage: string;
  items: string[];
}

export enum GenerateDocResponseChunkStatus {
  SUCCEEDED = 0,
  FAILED = 1,
  UNRECOGNIZED = -1,
}

export function generateDocResponseChunkStatusFromJSON(object: any): GenerateDocResponseChunkStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return GenerateDocResponseChunkStatus.SUCCEEDED;
    case 1:
    case "FAILED":
      return GenerateDocResponseChunkStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GenerateDocResponseChunkStatus.UNRECOGNIZED;
  }
}

export function generateDocResponseChunkStatusToJSON(object: GenerateDocResponseChunkStatus): string {
  switch (object) {
    case GenerateDocResponseChunkStatus.SUCCEEDED:
      return "SUCCEEDED";
    case GenerateDocResponseChunkStatus.FAILED:
      return "FAILED";
    case GenerateDocResponseChunkStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class GenerateDocResponseChunkBlockResponse {
  id?: number | undefined;
  nodeId: string;
  name: string;
  blockType: string;
  parentNodeId: string;
  pageNodeId: string;
  projectId?: number | undefined;
  content: GenerateDocResponseChunkBlockResponseContentEntry[];
  properties?: GenerateDocResponseChunkBlockResponseProperties | undefined;
  children: string[];
  status?: string | undefined;
}

export class GenerateDocResponseChunkBlockResponseContentEntry {
  content: { [key: string]: any };
}

export class GenerateDocResponseChunkBlockResponseContentEntryContentEntry {
  key: string;
  value?: any;
}

export class GenerateDocResponseChunkBlockResponseProperties {
  properties: { [key: string]: any };
}

export class GenerateDocResponseChunkBlockResponsePropertiesPropertiesEntry {
  key: string;
  value?: any;
}

function createBaseGenerateDocResponse(): GenerateDocResponse {
  return { projectGenerateQueueId: 0, module: 0, status: 0, totalChunks: 0 };
}

export const GenerateDocResponseData = {
  encode(message: GenerateDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.module !== 0) {
      writer.uint32(16).int32(message.module);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.errorMessage !== undefined) {
      writer.uint32(34).string(message.errorMessage);
    }
    if (message.totalChunks !== 0) {
      writer.uint32(40).int32(message.totalChunks);
    }
    if (message.chunk !== undefined) {
      GenerateDocResponseChunkData.encode(message.chunk, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDocResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.module = reader.int32() as any;
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.errorMessage = reader.string();
          break;
        case 5:
          message.totalChunks = reader.int32();
          break;
        case 6:
          message.chunk = GenerateDocResponseChunkData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateDocResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      module: isSet(object.module) ? generateDocResponseModuleFromJSON(object.module) : 0,
      status: isSet(object.status) ? generateDocResponseStatusFromJSON(object.status) : 0,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : undefined,
      totalChunks: isSet(object.totalChunks) ? Number(object.totalChunks) : 0,
      chunk: isSet(object.chunk) ? GenerateDocResponseChunkData.fromJSON(object.chunk) : undefined,
    };
  },

  toJSON(message: GenerateDocResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.module !== undefined && (obj.module = generateDocResponseModuleToJSON(message.module));
    message.status !== undefined && (obj.status = generateDocResponseStatusToJSON(message.status));
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    message.totalChunks !== undefined && (obj.totalChunks = Math.round(message.totalChunks));
    message.chunk !== undefined &&
      (obj.chunk = message.chunk ? GenerateDocResponseChunkData.toJSON(message.chunk) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenerateDocResponse>): GenerateDocResponse {
    const message = createBaseGenerateDocResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.module = object.module ?? 0;
    message.status = object.status ?? 0;
    message.errorMessage = object.errorMessage ?? undefined;
    message.totalChunks = object.totalChunks ?? 0;
    message.chunk = (object.chunk !== undefined && object.chunk !== null)
      ? GenerateDocResponseChunkData.fromPartial(object.chunk)
      : undefined;
    return message;
  },
};

function createBaseGenerateDocResponseChunk(): GenerateDocResponseChunk {
  return { status: 0, blocks: [], errorMessage: "", items: [] };
}

export const GenerateDocResponseChunkData = {
  encode(message: GenerateDocResponseChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.blocks) {
      GenerateDocResponseChunkBlockResponseData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.errorMessage !== "") {
      writer.uint32(26).string(message.errorMessage);
    }
    for (const v of message.items) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDocResponseChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDocResponseChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.blocks.push(GenerateDocResponseChunkBlockResponseData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.errorMessage = reader.string();
          break;
        case 4:
          message.items.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateDocResponseChunk {
    return {
      status: isSet(object.status) ? generateDocResponseChunkStatusFromJSON(object.status) : 0,
      blocks: Array.isArray(object?.blocks)
        ? object.blocks.map((e: any) => GenerateDocResponseChunkBlockResponseData.fromJSON(e))
        : [],
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: GenerateDocResponseChunk): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = generateDocResponseChunkStatusToJSON(message.status));
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => e ? GenerateDocResponseChunkBlockResponseData.toJSON(e) : undefined);
    } else {
      obj.blocks = [];
    }
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    if (message.items) {
      obj.items = message.items.map((e) => e);
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenerateDocResponseChunk>): GenerateDocResponseChunk {
    const message = createBaseGenerateDocResponseChunk();
    message.status = object.status ?? 0;
    message.blocks = object.blocks?.map((e) => GenerateDocResponseChunkBlockResponseData.fromPartial(e)) || [];
    message.errorMessage = object.errorMessage ?? "";
    message.items = object.items?.map((e) => e) || [];
    return message;
  },
};

function createBaseGenerateDocResponseChunkBlockResponse(): GenerateDocResponseChunkBlockResponse {
  return { nodeId: "", name: "", blockType: "", parentNodeId: "", pageNodeId: "", content: [], children: [] };
}

export const GenerateDocResponseChunkBlockResponseData = {
  encode(message: GenerateDocResponseChunkBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).int32(message.id);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.blockType !== "") {
      writer.uint32(34).string(message.blockType);
    }
    if (message.parentNodeId !== "") {
      writer.uint32(42).string(message.parentNodeId);
    }
    if (message.pageNodeId !== "") {
      writer.uint32(50).string(message.pageNodeId);
    }
    if (message.projectId !== undefined) {
      writer.uint32(56).int32(message.projectId);
    }
    for (const v of message.content) {
      GenerateDocResponseChunkBlockResponseContentEntryData.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.properties !== undefined) {
      GenerateDocResponseChunkBlockResponsePropertiesData.encode(message.properties, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.children) {
      writer.uint32(82).string(v!);
    }
    if (message.status !== undefined) {
      writer.uint32(90).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDocResponseChunkBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDocResponseChunkBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.blockType = reader.string();
          break;
        case 5:
          message.parentNodeId = reader.string();
          break;
        case 6:
          message.pageNodeId = reader.string();
          break;
        case 7:
          message.projectId = reader.int32();
          break;
        case 8:
          message.content.push(GenerateDocResponseChunkBlockResponseContentEntryData.decode(reader, reader.uint32()));
          break;
        case 9:
          message.properties = GenerateDocResponseChunkBlockResponsePropertiesData.decode(reader, reader.uint32());
          break;
        case 10:
          message.children.push(reader.string());
          break;
        case 11:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateDocResponseChunkBlockResponse {
    return {
      id: isSet(object.id) ? Number(object.id) : undefined,
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      blockType: isSet(object.blockType) ? String(object.blockType) : "",
      parentNodeId: isSet(object.parentNodeId) ? String(object.parentNodeId) : "",
      pageNodeId: isSet(object.pageNodeId) ? String(object.pageNodeId) : "",
      projectId: isSet(object.projectId) ? Number(object.projectId) : undefined,
      content: Array.isArray(object?.content)
        ? object.content.map((e: any) => GenerateDocResponseChunkBlockResponseContentEntryData.fromJSON(e))
        : [],
      properties: isSet(object.properties)
        ? GenerateDocResponseChunkBlockResponsePropertiesData.fromJSON(object.properties)
        : undefined,
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => String(e))
        : [],
      status: isSet(object.status) ? String(object.status) : undefined,
    };
  },

  toJSON(message: GenerateDocResponseChunkBlockResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.name !== undefined && (obj.name = message.name);
    message.blockType !== undefined && (obj.blockType = message.blockType);
    message.parentNodeId !== undefined && (obj.parentNodeId = message.parentNodeId);
    message.pageNodeId !== undefined && (obj.pageNodeId = message.pageNodeId);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.content) {
      obj.content = message.content.map((e) =>
        e ? GenerateDocResponseChunkBlockResponseContentEntryData.toJSON(e) : undefined
      );
    } else {
      obj.content = [];
    }
    message.properties !== undefined && (obj.properties = message.properties
      ? GenerateDocResponseChunkBlockResponsePropertiesData.toJSON(message.properties)
      : undefined);
    if (message.children) {
      obj.children = message.children.map((e) => e);
    } else {
      obj.children = [];
    }
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<GenerateDocResponseChunkBlockResponse>): GenerateDocResponseChunkBlockResponse {
    const message = createBaseGenerateDocResponseChunkBlockResponse();
    message.id = object.id ?? undefined;
    message.nodeId = object.nodeId ?? "";
    message.name = object.name ?? "";
    message.blockType = object.blockType ?? "";
    message.parentNodeId = object.parentNodeId ?? "";
    message.pageNodeId = object.pageNodeId ?? "";
    message.projectId = object.projectId ?? undefined;
    message.content =
      object.content?.map((e) => GenerateDocResponseChunkBlockResponseContentEntryData.fromPartial(e)) || [];
    message.properties = (object.properties !== undefined && object.properties !== null)
      ? GenerateDocResponseChunkBlockResponsePropertiesData.fromPartial(object.properties)
      : undefined;
    message.children = object.children?.map((e) => e) || [];
    message.status = object.status ?? undefined;
    return message;
  },
};

function createBaseGenerateDocResponseChunkBlockResponseContentEntry(): GenerateDocResponseChunkBlockResponseContentEntry {
  return { content: {} };
}

export const GenerateDocResponseChunkBlockResponseContentEntryData = {
  encode(
    message: GenerateDocResponseChunkBlockResponseContentEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.content).forEach(([key, value]) => {
      if (value !== undefined) {
        GenerateDocResponseChunkBlockResponseContentEntryContentEntryData.encode(
          { key: key as any, value },
          writer.uint32(10).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDocResponseChunkBlockResponseContentEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDocResponseChunkBlockResponseContentEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = GenerateDocResponseChunkBlockResponseContentEntryContentEntryData.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.content[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateDocResponseChunkBlockResponseContentEntry {
    return {
      content: isObject(object.content)
        ? Object.entries(object.content).reduce<{ [key: string]: any }>((acc, [key, value]) => {
          acc[key] = value as any;
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GenerateDocResponseChunkBlockResponseContentEntry): unknown {
    const obj: any = {};
    obj.content = {};
    if (message.content) {
      Object.entries(message.content).forEach(([k, v]) => {
        obj.content[k] = v;
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenerateDocResponseChunkBlockResponseContentEntry>,
  ): GenerateDocResponseChunkBlockResponseContentEntry {
    const message = createBaseGenerateDocResponseChunkBlockResponseContentEntry();
    message.content = Object.entries(object.content ?? {}).reduce<{ [key: string]: any }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGenerateDocResponseChunkBlockResponseContentEntryContentEntry(): GenerateDocResponseChunkBlockResponseContentEntryContentEntry {
  return { key: "" };
}

export const GenerateDocResponseChunkBlockResponseContentEntryContentEntryData = {
  encode(
    message: GenerateDocResponseChunkBlockResponseContentEntryContentEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ValueData.encode(ValueData.wrap(message.value), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GenerateDocResponseChunkBlockResponseContentEntryContentEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDocResponseChunkBlockResponseContentEntryContentEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ValueData.unwrap(ValueData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateDocResponseChunkBlockResponseContentEntryContentEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: GenerateDocResponseChunkBlockResponseContentEntryContentEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenerateDocResponseChunkBlockResponseContentEntryContentEntry>,
  ): GenerateDocResponseChunkBlockResponseContentEntryContentEntry {
    const message = createBaseGenerateDocResponseChunkBlockResponseContentEntryContentEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseGenerateDocResponseChunkBlockResponseProperties(): GenerateDocResponseChunkBlockResponseProperties {
  return { properties: {} };
}

export const GenerateDocResponseChunkBlockResponsePropertiesData = {
  encode(
    message: GenerateDocResponseChunkBlockResponseProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.properties).forEach(([key, value]) => {
      if (value !== undefined) {
        GenerateDocResponseChunkBlockResponsePropertiesPropertiesEntryData.encode(
          { key: key as any, value },
          writer.uint32(10).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDocResponseChunkBlockResponseProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDocResponseChunkBlockResponseProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = GenerateDocResponseChunkBlockResponsePropertiesPropertiesEntryData.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.properties[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateDocResponseChunkBlockResponseProperties {
    return {
      properties: isObject(object.properties)
        ? Object.entries(object.properties).reduce<{ [key: string]: any }>((acc, [key, value]) => {
          acc[key] = value as any;
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GenerateDocResponseChunkBlockResponseProperties): unknown {
    const obj: any = {};
    obj.properties = {};
    if (message.properties) {
      Object.entries(message.properties).forEach(([k, v]) => {
        obj.properties[k] = v;
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenerateDocResponseChunkBlockResponseProperties>,
  ): GenerateDocResponseChunkBlockResponseProperties {
    const message = createBaseGenerateDocResponseChunkBlockResponseProperties();
    message.properties = Object.entries(object.properties ?? {}).reduce<{ [key: string]: any }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGenerateDocResponseChunkBlockResponsePropertiesPropertiesEntry(): GenerateDocResponseChunkBlockResponsePropertiesPropertiesEntry {
  return { key: "" };
}

export const GenerateDocResponseChunkBlockResponsePropertiesPropertiesEntryData = {
  encode(
    message: GenerateDocResponseChunkBlockResponsePropertiesPropertiesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ValueData.encode(ValueData.wrap(message.value), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GenerateDocResponseChunkBlockResponsePropertiesPropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDocResponseChunkBlockResponsePropertiesPropertiesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ValueData.unwrap(ValueData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateDocResponseChunkBlockResponsePropertiesPropertiesEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: GenerateDocResponseChunkBlockResponsePropertiesPropertiesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenerateDocResponseChunkBlockResponsePropertiesPropertiesEntry>,
  ): GenerateDocResponseChunkBlockResponsePropertiesPropertiesEntry {
    const message = createBaseGenerateDocResponseChunkBlockResponsePropertiesPropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
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
