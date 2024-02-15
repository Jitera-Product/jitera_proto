/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { StructData } from "../google/protobuf/struct.proto";

export class Block {
  id: number;
  nodeId: string;
  parentNodeId: string;
  pageNodeId: string;
  blockType: string;
  name: string;
  projectId: number;
  properties?: { [key: string]: any };
  content: BlockContent[];
  children: string[];
  status?: string | undefined;
}

export class BlockContent {
  type: string;
  value: string;
  href?: string | undefined;
  styles?: { [key: string]: any };
}

function createBaseBlock(): Block {
  return {
    id: 0,
    nodeId: "",
    parentNodeId: "",
    pageNodeId: "",
    blockType: "",
    name: "",
    projectId: 0,
    content: [],
    children: [],
  };
}

export const BlockData = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.parentNodeId !== "") {
      writer.uint32(26).string(message.parentNodeId);
    }
    if (message.pageNodeId !== "") {
      writer.uint32(34).string(message.pageNodeId);
    }
    if (message.blockType !== "") {
      writer.uint32(42).string(message.blockType);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.projectId !== 0) {
      writer.uint32(56).int32(message.projectId);
    }
    if (message.properties !== undefined) {
      StructData.encode(StructData.wrap(message.properties), writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.content) {
      BlockContentData.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.children) {
      writer.uint32(82).string(v!);
    }
    if (message.status !== undefined) {
      writer.uint32(90).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
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
          message.parentNodeId = reader.string();
          break;
        case 4:
          message.pageNodeId = reader.string();
          break;
        case 5:
          message.blockType = reader.string();
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.projectId = reader.int32();
          break;
        case 8:
          message.properties = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        case 9:
          message.content.push(BlockContentData.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Block {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      parentNodeId: isSet(object.parentNodeId) ? String(object.parentNodeId) : "",
      pageNodeId: isSet(object.pageNodeId) ? String(object.pageNodeId) : "",
      blockType: isSet(object.blockType) ? String(object.blockType) : "",
      name: isSet(object.name) ? String(object.name) : "",
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      properties: isObject(object.properties) ? object.properties : undefined,
      content: Array.isArray(object?.content) ? object.content.map((e: any) => BlockContentData.fromJSON(e)) : [],
      children: Array.isArray(object?.children) ? object.children.map((e: any) => String(e)) : [],
      status: isSet(object.status) ? String(object.status) : undefined,
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.parentNodeId !== undefined && (obj.parentNodeId = message.parentNodeId);
    message.pageNodeId !== undefined && (obj.pageNodeId = message.pageNodeId);
    message.blockType !== undefined && (obj.blockType = message.blockType);
    message.name !== undefined && (obj.name = message.name);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.properties !== undefined && (obj.properties = message.properties);
    if (message.content) {
      obj.content = message.content.map((e) => e ? BlockContentData.toJSON(e) : undefined);
    } else {
      obj.content = [];
    }
    if (message.children) {
      obj.children = message.children.map((e) => e);
    } else {
      obj.children = [];
    }
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<Block>): Block {
    const message = createBaseBlock();
    message.id = object.id ?? 0;
    message.nodeId = object.nodeId ?? "";
    message.parentNodeId = object.parentNodeId ?? "";
    message.pageNodeId = object.pageNodeId ?? "";
    message.blockType = object.blockType ?? "";
    message.name = object.name ?? "";
    message.projectId = object.projectId ?? 0;
    message.properties = object.properties ?? undefined;
    message.content = object.content?.map((e) => BlockContentData.fromPartial(e)) || [];
    message.children = object.children?.map((e) => e) || [];
    message.status = object.status ?? undefined;
    return message;
  },
};

function createBaseBlockContent(): BlockContent {
  return { type: "", value: "" };
}

export const BlockContentData = {
  encode(message: BlockContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.href !== undefined) {
      writer.uint32(26).string(message.href);
    }
    if (message.styles !== undefined) {
      StructData.encode(StructData.wrap(message.styles), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockContent();
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
          message.href = reader.string();
          break;
        case 4:
          message.styles = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockContent {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      value: isSet(object.value) ? String(object.value) : "",
      href: isSet(object.href) ? String(object.href) : undefined,
      styles: isObject(object.styles) ? object.styles : undefined,
    };
  },

  toJSON(message: BlockContent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = message.value);
    message.href !== undefined && (obj.href = message.href);
    message.styles !== undefined && (obj.styles = message.styles);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockContent>): BlockContent {
    const message = createBaseBlockContent();
    message.type = object.type ?? "";
    message.value = object.value ?? "";
    message.href = object.href ?? undefined;
    message.styles = object.styles ?? undefined;
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
