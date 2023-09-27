/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class Block {
  id: number;
  name: string;
  nodeId: string;
  parentNodeId: string;
  pageNodeId: string;
  blockType: string;
  content: string;
  properties: string;
  projectId: number;
  children: string[];
}

function createBaseBlock(): Block {
  return {
    id: 0,
    name: "",
    nodeId: "",
    parentNodeId: "",
    pageNodeId: "",
    blockType: "",
    content: "",
    properties: "",
    projectId: 0,
    children: [],
  };
}

export const BlockData = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.pageNodeId !== "") {
      writer.uint32(42).string(message.pageNodeId);
    }
    if (message.blockType !== "") {
      writer.uint32(50).string(message.blockType);
    }
    if (message.content !== "") {
      writer.uint32(58).string(message.content);
    }
    if (message.properties !== "") {
      writer.uint32(66).string(message.properties);
    }
    if (message.projectId !== 0) {
      writer.uint32(72).int32(message.projectId);
    }
    for (const v of message.children) {
      writer.uint32(82).string(v!);
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
          message.name = reader.string();
          break;
        case 3:
          message.nodeId = reader.string();
          break;
        case 4:
          message.parentNodeId = reader.string();
          break;
        case 5:
          message.pageNodeId = reader.string();
          break;
        case 6:
          message.blockType = reader.string();
          break;
        case 7:
          message.content = reader.string();
          break;
        case 8:
          message.properties = reader.string();
          break;
        case 9:
          message.projectId = reader.int32();
          break;
        case 10:
          message.children.push(reader.string());
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
      name: isSet(object.name) ? String(object.name) : "",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      parentNodeId: isSet(object.parentNodeId) ? String(object.parentNodeId) : "",
      pageNodeId: isSet(object.pageNodeId) ? String(object.pageNodeId) : "",
      blockType: isSet(object.blockType) ? String(object.blockType) : "",
      content: isSet(object.content) ? String(object.content) : "",
      properties: isSet(object.properties) ? String(object.properties) : "",
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      children: Array.isArray(object?.children) ? object.children.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.parentNodeId !== undefined && (obj.parentNodeId = message.parentNodeId);
    message.pageNodeId !== undefined && (obj.pageNodeId = message.pageNodeId);
    message.blockType !== undefined && (obj.blockType = message.blockType);
    message.content !== undefined && (obj.content = message.content);
    message.properties !== undefined && (obj.properties = message.properties);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.children) {
      obj.children = message.children.map((e) => e);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Block>): Block {
    const message = createBaseBlock();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.nodeId = object.nodeId ?? "";
    message.parentNodeId = object.parentNodeId ?? "";
    message.pageNodeId = object.pageNodeId ?? "";
    message.blockType = object.blockType ?? "";
    message.content = object.content ?? "";
    message.properties = object.properties ?? "";
    message.projectId = object.projectId ?? 0;
    message.children = object.children?.map((e) => e) || [];
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
