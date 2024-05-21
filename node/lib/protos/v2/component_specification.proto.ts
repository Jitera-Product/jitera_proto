/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export interface ComponentSpecification {
  type: string;
  title: string;
  description: string;
  figmaNodeId: string;
  boundingBox?: ComponentSpecificationBoundingBox;
  actions: ComponentSpecificationAction[];
}

export interface ComponentSpecificationBoundingBox {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export interface ComponentSpecificationAction {
  type: string;
  description: string;
  reference: string;
  referenceId: string;
}

function createBaseComponentSpecification(): ComponentSpecification {
  return { type: "", title: "", description: "", figmaNodeId: "", actions: [] };
}

export const ComponentSpecification = {
  encode(message: ComponentSpecification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.figmaNodeId !== "") {
      writer.uint32(34).string(message.figmaNodeId);
    }
    if (message.boundingBox !== undefined) {
      ComponentSpecificationBoundingBox.encode(message.boundingBox, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.actions) {
      ComponentSpecificationAction.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.figmaNodeId = reader.string();
          break;
        case 5:
          message.boundingBox = ComponentSpecificationBoundingBox.decode(reader, reader.uint32());
          break;
        case 6:
          message.actions.push(ComponentSpecificationAction.decode(reader, reader.uint32()));
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      figmaNodeId: isSet(object.figmaNodeId) ? String(object.figmaNodeId) : "",
      boundingBox: isSet(object.boundingBox)
        ? ComponentSpecificationBoundingBox.fromJSON(object.boundingBox)
        : undefined,
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => ComponentSpecificationAction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ComponentSpecification): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.figmaNodeId !== undefined && (obj.figmaNodeId = message.figmaNodeId);
    message.boundingBox !== undefined &&
      (obj.boundingBox = message.boundingBox
        ? ComponentSpecificationBoundingBox.toJSON(message.boundingBox)
        : undefined);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? ComponentSpecificationAction.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ComponentSpecification>): ComponentSpecification {
    const message = createBaseComponentSpecification();
    message.type = object.type ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.figmaNodeId = object.figmaNodeId ?? "";
    message.boundingBox = (object.boundingBox !== undefined && object.boundingBox !== null)
      ? ComponentSpecificationBoundingBox.fromPartial(object.boundingBox)
      : undefined;
    message.actions = object.actions?.map((e) => ComponentSpecificationAction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseComponentSpecificationBoundingBox(): ComponentSpecificationBoundingBox {
  return { top: 0, left: 0, right: 0, bottom: 0 };
}

export const ComponentSpecificationBoundingBox = {
  encode(message: ComponentSpecificationBoundingBox, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.top !== 0) {
      writer.uint32(13).float(message.top);
    }
    if (message.left !== 0) {
      writer.uint32(21).float(message.left);
    }
    if (message.right !== 0) {
      writer.uint32(29).float(message.right);
    }
    if (message.bottom !== 0) {
      writer.uint32(37).float(message.bottom);
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
          message.top = reader.float();
          break;
        case 2:
          message.left = reader.float();
          break;
        case 3:
          message.right = reader.float();
          break;
        case 4:
          message.bottom = reader.float();
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
      top: isSet(object.top) ? Number(object.top) : 0,
      left: isSet(object.left) ? Number(object.left) : 0,
      right: isSet(object.right) ? Number(object.right) : 0,
      bottom: isSet(object.bottom) ? Number(object.bottom) : 0,
    };
  },

  toJSON(message: ComponentSpecificationBoundingBox): unknown {
    const obj: any = {};
    message.top !== undefined && (obj.top = message.top);
    message.left !== undefined && (obj.left = message.left);
    message.right !== undefined && (obj.right = message.right);
    message.bottom !== undefined && (obj.bottom = message.bottom);
    return obj;
  },

  fromPartial(object: DeepPartial<ComponentSpecificationBoundingBox>): ComponentSpecificationBoundingBox {
    const message = createBaseComponentSpecificationBoundingBox();
    message.top = object.top ?? 0;
    message.left = object.left ?? 0;
    message.right = object.right ?? 0;
    message.bottom = object.bottom ?? 0;
    return message;
  },
};

function createBaseComponentSpecificationAction(): ComponentSpecificationAction {
  return { type: "", description: "", reference: "", referenceId: "" };
}

export const ComponentSpecificationAction = {
  encode(message: ComponentSpecificationAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.reference !== "") {
      writer.uint32(26).string(message.reference);
    }
    if (message.referenceId !== "") {
      writer.uint32(34).string(message.referenceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComponentSpecificationAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComponentSpecificationAction();
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
          message.reference = reader.string();
          break;
        case 4:
          message.referenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComponentSpecificationAction {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      description: isSet(object.description) ? String(object.description) : "",
      reference: isSet(object.reference) ? String(object.reference) : "",
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : "",
    };
  },

  toJSON(message: ComponentSpecificationAction): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.description !== undefined && (obj.description = message.description);
    message.reference !== undefined && (obj.reference = message.reference);
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    return obj;
  },

  fromPartial(object: DeepPartial<ComponentSpecificationAction>): ComponentSpecificationAction {
    const message = createBaseComponentSpecificationAction();
    message.type = object.type ?? "";
    message.description = object.description ?? "";
    message.reference = object.reference ?? "";
    message.referenceId = object.referenceId ?? "";
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
