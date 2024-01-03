/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export interface BusinessLogicResponse {
  projectGenerateQueueId: number;
  projectId: number;
  businessLogics: BusinessLogic[];
}

export interface BusinessLogic {
  nodeId: string;
  parentNodeId: string;
  pageNodeId: string;
  blockType: string;
  name: string;
  content: BusinessLogicContent[];
  properties?: BusinessLogicProperty;
  projectId: number;
  children: string[];
}

export interface BusinessLogicContent {
  type: string;
  value: string;
  styles: string;
}

export interface BusinessLogicProperty {
  useCaseId?: string | undefined;
  category?: string | undefined;
  level?: number | undefined;
  textColor?: string | undefined;
  backgroundColor?: string | undefined;
  textAlignment?: string | undefined;
}

function createBaseBusinessLogicResponse(): BusinessLogicResponse {
  return { projectGenerateQueueId: 0, projectId: 0, businessLogics: [] };
}

export const BusinessLogicResponse = {
  encode(message: BusinessLogicResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    for (const v of message.businessLogics) {
      BusinessLogic.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessLogicResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessLogicResponse();
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
          message.businessLogics.push(BusinessLogic.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessLogicResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      businessLogics: Array.isArray(object?.businessLogics)
        ? object.businessLogics.map((e: any) => BusinessLogic.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BusinessLogicResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.businessLogics) {
      obj.businessLogics = message.businessLogics.map((e) => e ? BusinessLogic.toJSON(e) : undefined);
    } else {
      obj.businessLogics = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicResponse>): BusinessLogicResponse {
    const message = createBaseBusinessLogicResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.businessLogics = object.businessLogics?.map((e) => BusinessLogic.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBusinessLogic(): BusinessLogic {
  return {
    nodeId: "",
    parentNodeId: "",
    pageNodeId: "",
    blockType: "",
    name: "",
    content: [],
    projectId: 0,
    children: [],
  };
}

export const BusinessLogic = {
  encode(message: BusinessLogic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.parentNodeId !== "") {
      writer.uint32(18).string(message.parentNodeId);
    }
    if (message.pageNodeId !== "") {
      writer.uint32(26).string(message.pageNodeId);
    }
    if (message.blockType !== "") {
      writer.uint32(34).string(message.blockType);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    for (const v of message.content) {
      BusinessLogicContent.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.properties !== undefined) {
      BusinessLogicProperty.encode(message.properties, writer.uint32(58).fork()).ldelim();
    }
    if (message.projectId !== 0) {
      writer.uint32(64).int32(message.projectId);
    }
    for (const v of message.children) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessLogic {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessLogic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.parentNodeId = reader.string();
          break;
        case 3:
          message.pageNodeId = reader.string();
          break;
        case 4:
          message.blockType = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.content.push(BusinessLogicContent.decode(reader, reader.uint32()));
          break;
        case 7:
          message.properties = BusinessLogicProperty.decode(reader, reader.uint32());
          break;
        case 8:
          message.projectId = reader.int32();
          break;
        case 9:
          message.children.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessLogic {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      parentNodeId: isSet(object.parentNodeId) ? String(object.parentNodeId) : "",
      pageNodeId: isSet(object.pageNodeId) ? String(object.pageNodeId) : "",
      blockType: isSet(object.blockType) ? String(object.blockType) : "",
      name: isSet(object.name) ? String(object.name) : "",
      content: Array.isArray(object?.content) ? object.content.map((e: any) => BusinessLogicContent.fromJSON(e)) : [],
      properties: isSet(object.properties) ? BusinessLogicProperty.fromJSON(object.properties) : undefined,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      children: Array.isArray(object?.children) ? object.children.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: BusinessLogic): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.parentNodeId !== undefined && (obj.parentNodeId = message.parentNodeId);
    message.pageNodeId !== undefined && (obj.pageNodeId = message.pageNodeId);
    message.blockType !== undefined && (obj.blockType = message.blockType);
    message.name !== undefined && (obj.name = message.name);
    if (message.content) {
      obj.content = message.content.map((e) => e ? BusinessLogicContent.toJSON(e) : undefined);
    } else {
      obj.content = [];
    }
    message.properties !== undefined &&
      (obj.properties = message.properties ? BusinessLogicProperty.toJSON(message.properties) : undefined);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.children) {
      obj.children = message.children.map((e) => e);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogic>): BusinessLogic {
    const message = createBaseBusinessLogic();
    message.nodeId = object.nodeId ?? "";
    message.parentNodeId = object.parentNodeId ?? "";
    message.pageNodeId = object.pageNodeId ?? "";
    message.blockType = object.blockType ?? "";
    message.name = object.name ?? "";
    message.content = object.content?.map((e) => BusinessLogicContent.fromPartial(e)) || [];
    message.properties = (object.properties !== undefined && object.properties !== null)
      ? BusinessLogicProperty.fromPartial(object.properties)
      : undefined;
    message.projectId = object.projectId ?? 0;
    message.children = object.children?.map((e) => e) || [];
    return message;
  },
};

function createBaseBusinessLogicContent(): BusinessLogicContent {
  return { type: "", value: "", styles: "" };
}

export const BusinessLogicContent = {
  encode(message: BusinessLogicContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.styles !== "") {
      writer.uint32(26).string(message.styles);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessLogicContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessLogicContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.styles = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessLogicContent {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      value: isSet(object.value) ? String(object.value) : "",
      styles: isSet(object.styles) ? String(object.styles) : "",
    };
  },

  toJSON(message: BusinessLogicContent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = message.value);
    message.styles !== undefined && (obj.styles = message.styles);
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicContent>): BusinessLogicContent {
    const message = createBaseBusinessLogicContent();
    message.type = object.type ?? "";
    message.value = object.value ?? "";
    message.styles = object.styles ?? "";
    return message;
  },
};

function createBaseBusinessLogicProperty(): BusinessLogicProperty {
  return {};
}

export const BusinessLogicProperty = {
  encode(message: BusinessLogicProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.useCaseId !== undefined) {
      writer.uint32(10).string(message.useCaseId);
    }
    if (message.category !== undefined) {
      writer.uint32(18).string(message.category);
    }
    if (message.level !== undefined) {
      writer.uint32(24).int32(message.level);
    }
    if (message.textColor !== undefined) {
      writer.uint32(34).string(message.textColor);
    }
    if (message.backgroundColor !== undefined) {
      writer.uint32(42).string(message.backgroundColor);
    }
    if (message.textAlignment !== undefined) {
      writer.uint32(50).string(message.textAlignment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessLogicProperty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessLogicProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.useCaseId = reader.string();
          break;
        case 2:
          message.category = reader.string();
          break;
        case 3:
          message.level = reader.int32();
          break;
        case 4:
          message.textColor = reader.string();
          break;
        case 5:
          message.backgroundColor = reader.string();
          break;
        case 6:
          message.textAlignment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessLogicProperty {
    return {
      useCaseId: isSet(object.useCaseId) ? String(object.useCaseId) : undefined,
      category: isSet(object.category) ? String(object.category) : undefined,
      level: isSet(object.level) ? Number(object.level) : undefined,
      textColor: isSet(object.textColor) ? String(object.textColor) : undefined,
      backgroundColor: isSet(object.backgroundColor) ? String(object.backgroundColor) : undefined,
      textAlignment: isSet(object.textAlignment) ? String(object.textAlignment) : undefined,
    };
  },

  toJSON(message: BusinessLogicProperty): unknown {
    const obj: any = {};
    message.useCaseId !== undefined && (obj.useCaseId = message.useCaseId);
    message.category !== undefined && (obj.category = message.category);
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.textColor !== undefined && (obj.textColor = message.textColor);
    message.backgroundColor !== undefined && (obj.backgroundColor = message.backgroundColor);
    message.textAlignment !== undefined && (obj.textAlignment = message.textAlignment);
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicProperty>): BusinessLogicProperty {
    const message = createBaseBusinessLogicProperty();
    message.useCaseId = object.useCaseId ?? undefined;
    message.category = object.category ?? undefined;
    message.level = object.level ?? undefined;
    message.textColor = object.textColor ?? undefined;
    message.backgroundColor = object.backgroundColor ?? undefined;
    message.textAlignment = object.textAlignment ?? undefined;
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
