/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class ProjectSpecChanges {
  projectId: number;
  category: string;
  payload: string;
}

export class ProjectChangesSync {
  projectId: number;
  category: string;
  payload: string;
}

function createBaseProjectSpecChanges(): ProjectSpecChanges {
  return { projectId: 0, category: "", payload: "" };
}

export const ProjectSpecChangesData = {
  encode(message: ProjectSpecChanges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.category !== "") {
      writer.uint32(18).string(message.category);
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSpecChanges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSpecChanges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.category = reader.string();
          break;
        case 3:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSpecChanges {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      category: isSet(object.category) ? String(object.category) : "",
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: ProjectSpecChanges): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.category !== undefined && (obj.category = message.category);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSpecChanges>): ProjectSpecChanges {
    const message = createBaseProjectSpecChanges();
    message.projectId = object.projectId ?? 0;
    message.category = object.category ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseProjectChangesSync(): ProjectChangesSync {
  return { projectId: 0, category: "", payload: "" };
}

export const ProjectChangesSyncData = {
  encode(message: ProjectChangesSync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.category !== "") {
      writer.uint32(18).string(message.category);
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectChangesSync {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectChangesSync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.category = reader.string();
          break;
        case 3:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectChangesSync {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      category: isSet(object.category) ? String(object.category) : "",
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: ProjectChangesSync): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.category !== undefined && (obj.category = message.category);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectChangesSync>): ProjectChangesSync {
    const message = createBaseProjectChangesSync();
    message.projectId = object.projectId ?? 0;
    message.category = object.category ?? "";
    message.payload = object.payload ?? "";
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
