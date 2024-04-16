/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class ComponentSpecification {
  type: string;
  description: string;
  figmaNodeId: string;
  boundingBox: ComponentSpecificationBoundingBox[];
}

export class ComponentSpecificationBoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

function createBaseComponentSpecification(): ComponentSpecification {
  return { type: "", description: "", figmaNodeId: "", boundingBox: [] };
}

export const ComponentSpecificationData = {
  encode(message: ComponentSpecification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.figmaNodeId !== "") {
      writer.uint32(26).string(message.figmaNodeId);
    }
    for (const v of message.boundingBox) {
      ComponentSpecificationBoundingBoxData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComponentSpecification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComponentSpecification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.figmaNodeId = reader.string();
          break;
        case 4:
          message.boundingBox.push(ComponentSpecificationBoundingBoxData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComponentSpecification {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      description: isSet(object.description) ? String(object.description) : "",
      figmaNodeId: isSet(object.figmaNodeId) ? String(object.figmaNodeId) : "",
      boundingBox: Array.isArray(object?.boundingBox)
        ? object.boundingBox.map((e: any) => ComponentSpecificationBoundingBoxData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ComponentSpecification): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.description !== undefined && (obj.description = message.description);
    message.figmaNodeId !== undefined && (obj.figmaNodeId = message.figmaNodeId);
    if (message.boundingBox) {
      obj.boundingBox = message.boundingBox.map((e) => e ? ComponentSpecificationBoundingBoxData.toJSON(e) : undefined);
    } else {
      obj.boundingBox = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ComponentSpecification>): ComponentSpecification {
    const message = createBaseComponentSpecification();
    message.type = object.type ?? "";
    message.description = object.description ?? "";
    message.figmaNodeId = object.figmaNodeId ?? "";
    message.boundingBox = object.boundingBox?.map((e) => ComponentSpecificationBoundingBoxData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseComponentSpecificationBoundingBox(): ComponentSpecificationBoundingBox {
  return { x: 0, y: 0, width: 0, height: 0 };
}

export const ComponentSpecificationBoundingBoxData = {
  encode(message: ComponentSpecificationBoundingBox, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.width !== 0) {
      writer.uint32(29).float(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(37).float(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComponentSpecificationBoundingBox {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComponentSpecificationBoundingBox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        case 3:
          message.width = reader.float();
          break;
        case 4:
          message.height = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComponentSpecificationBoundingBox {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: ComponentSpecificationBoundingBox): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(object: DeepPartial<ComponentSpecificationBoundingBox>): ComponentSpecificationBoundingBox {
    const message = createBaseComponentSpecificationBoundingBox();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
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
