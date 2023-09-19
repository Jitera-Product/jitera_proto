/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class BusinessLogicResponse {
  projectGenerateQueueId: number;
  projectId: number;
  businessLogics: BusinessLogic[];
}

export class BusinessLogic {
  nodeId: string;
  blockType: string;
  content: BusinessLogicContent[];
  properties?: BusinessLogicProperty;
  projectId: number;
  children: string[];
}

export class BusinessLogicContent {
  type: string;
  value: string;
}

export class BusinessLogicProperty {
  category: string;
  userCaseId: number;
}

function createBaseBusinessLogicResponse(): BusinessLogicResponse {
  return { projectGenerateQueueId: 0, projectId: 0, businessLogics: [] };
}

export const BusinessLogicResponseData = {
  encode(message: BusinessLogicResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    for (const v of message.businessLogics) {
      BusinessLogicData.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.businessLogics.push(BusinessLogicData.decode(reader, reader.uint32()));
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
        ? object.businessLogics.map((e: any) => BusinessLogicData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BusinessLogicResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.businessLogics) {
      obj.businessLogics = message.businessLogics.map((e) => e ? BusinessLogicData.toJSON(e) : undefined);
    } else {
      obj.businessLogics = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicResponse>): BusinessLogicResponse {
    const message = createBaseBusinessLogicResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.businessLogics = object.businessLogics?.map((e) => BusinessLogicData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBusinessLogic(): BusinessLogic {
  return { nodeId: "", blockType: "", content: [], projectId: 0, children: [] };
}

export const BusinessLogicData = {
  encode(message: BusinessLogic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.blockType !== "") {
      writer.uint32(18).string(message.blockType);
    }
    for (const v of message.content) {
      BusinessLogicContentData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.properties !== undefined) {
      BusinessLogicPropertyData.encode(message.properties, writer.uint32(34).fork()).ldelim();
    }
    if (message.projectId !== 0) {
      writer.uint32(40).int32(message.projectId);
    }
    for (const v of message.children) {
      writer.uint32(50).string(v!);
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
          message.blockType = reader.string();
          break;
        case 3:
          message.content.push(BusinessLogicContentData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.properties = BusinessLogicPropertyData.decode(reader, reader.uint32());
          break;
        case 5:
          message.projectId = reader.int32();
          break;
        case 6:
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
      blockType: isSet(object.blockType) ? String(object.blockType) : "",
      content: Array.isArray(object?.content)
        ? object.content.map((e: any) => BusinessLogicContentData.fromJSON(e))
        : [],
      properties: isSet(object.properties) ? BusinessLogicPropertyData.fromJSON(object.properties) : undefined,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      children: Array.isArray(object?.children) ? object.children.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: BusinessLogic): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.blockType !== undefined && (obj.blockType = message.blockType);
    if (message.content) {
      obj.content = message.content.map((e) => e ? BusinessLogicContentData.toJSON(e) : undefined);
    } else {
      obj.content = [];
    }
    message.properties !== undefined &&
      (obj.properties = message.properties ? BusinessLogicPropertyData.toJSON(message.properties) : undefined);
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
    message.blockType = object.blockType ?? "";
    message.content = object.content?.map((e) => BusinessLogicContentData.fromPartial(e)) || [];
    message.properties = (object.properties !== undefined && object.properties !== null)
      ? BusinessLogicPropertyData.fromPartial(object.properties)
      : undefined;
    message.projectId = object.projectId ?? 0;
    message.children = object.children?.map((e) => e) || [];
    return message;
  },
};

function createBaseBusinessLogicContent(): BusinessLogicContent {
  return { type: "", value: "" };
}

export const BusinessLogicContentData = {
  encode(message: BusinessLogicContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
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
    };
  },

  toJSON(message: BusinessLogicContent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicContent>): BusinessLogicContent {
    const message = createBaseBusinessLogicContent();
    message.type = object.type ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseBusinessLogicProperty(): BusinessLogicProperty {
  return { category: "", userCaseId: 0 };
}

export const BusinessLogicPropertyData = {
  encode(message: BusinessLogicProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.category !== "") {
      writer.uint32(10).string(message.category);
    }
    if (message.userCaseId !== 0) {
      writer.uint32(16).int32(message.userCaseId);
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
          message.category = reader.string();
          break;
        case 2:
          message.userCaseId = reader.int32();
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
      category: isSet(object.category) ? String(object.category) : "",
      userCaseId: isSet(object.userCaseId) ? Number(object.userCaseId) : 0,
    };
  },

  toJSON(message: BusinessLogicProperty): unknown {
    const obj: any = {};
    message.category !== undefined && (obj.category = message.category);
    message.userCaseId !== undefined && (obj.userCaseId = Math.round(message.userCaseId));
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicProperty>): BusinessLogicProperty {
    const message = createBaseBusinessLogicProperty();
    message.category = object.category ?? "";
    message.userCaseId = object.userCaseId ?? 0;
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
