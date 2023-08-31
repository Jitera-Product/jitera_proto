/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class ProjectSourceInit {
  projectId: number;
  projectSourceId: number;
  framework: ProjectSourceInitFramework;
  layer: ProjectSourceInitLayer;
  sourcePath: string;
}

export enum ProjectSourceInitFramework {
  FRAMEWORK_UNSPECIFIED = 0,
  NEXTJS = 1,
  VITE = 2,
  NUXTJS = 3,
  NESTJS = 4,
  ROR = 5,
  LARAVEL = 6,
  UNRECOGNIZED = -1,
}

export function projectSourceInitFrameworkFromJSON(object: any): ProjectSourceInitFramework {
  switch (object) {
    case 0:
    case "FRAMEWORK_UNSPECIFIED":
      return ProjectSourceInitFramework.FRAMEWORK_UNSPECIFIED;
    case 1:
    case "NEXTJS":
      return ProjectSourceInitFramework.NEXTJS;
    case 2:
    case "VITE":
      return ProjectSourceInitFramework.VITE;
    case 3:
    case "NUXTJS":
      return ProjectSourceInitFramework.NUXTJS;
    case 4:
    case "NESTJS":
      return ProjectSourceInitFramework.NESTJS;
    case 5:
    case "ROR":
      return ProjectSourceInitFramework.ROR;
    case 6:
    case "LARAVEL":
      return ProjectSourceInitFramework.LARAVEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectSourceInitFramework.UNRECOGNIZED;
  }
}

export function projectSourceInitFrameworkToJSON(object: ProjectSourceInitFramework): string {
  switch (object) {
    case ProjectSourceInitFramework.FRAMEWORK_UNSPECIFIED:
      return "FRAMEWORK_UNSPECIFIED";
    case ProjectSourceInitFramework.NEXTJS:
      return "NEXTJS";
    case ProjectSourceInitFramework.VITE:
      return "VITE";
    case ProjectSourceInitFramework.NUXTJS:
      return "NUXTJS";
    case ProjectSourceInitFramework.NESTJS:
      return "NESTJS";
    case ProjectSourceInitFramework.ROR:
      return "ROR";
    case ProjectSourceInitFramework.LARAVEL:
      return "LARAVEL";
    case ProjectSourceInitFramework.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ProjectSourceInitLayer {
  LAYER_UNSPECIFIED = 0,
  BACKEND = 1,
  FRONTEND = 2,
  MOBILE = 3,
  UNRECOGNIZED = -1,
}

export function projectSourceInitLayerFromJSON(object: any): ProjectSourceInitLayer {
  switch (object) {
    case 0:
    case "LAYER_UNSPECIFIED":
      return ProjectSourceInitLayer.LAYER_UNSPECIFIED;
    case 1:
    case "BACKEND":
      return ProjectSourceInitLayer.BACKEND;
    case 2:
    case "FRONTEND":
      return ProjectSourceInitLayer.FRONTEND;
    case 3:
    case "MOBILE":
      return ProjectSourceInitLayer.MOBILE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectSourceInitLayer.UNRECOGNIZED;
  }
}

export function projectSourceInitLayerToJSON(object: ProjectSourceInitLayer): string {
  switch (object) {
    case ProjectSourceInitLayer.LAYER_UNSPECIFIED:
      return "LAYER_UNSPECIFIED";
    case ProjectSourceInitLayer.BACKEND:
      return "BACKEND";
    case ProjectSourceInitLayer.FRONTEND:
      return "FRONTEND";
    case ProjectSourceInitLayer.MOBILE:
      return "MOBILE";
    case ProjectSourceInitLayer.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class ProjectSourceSync {
  projectId: number;
  projectSourceId: number;
  status: string;
  files: string;
}

function createBaseProjectSourceInit(): ProjectSourceInit {
  return { projectId: 0, projectSourceId: 0, framework: 0, layer: 0, sourcePath: "" };
}

export const ProjectSourceInitData = {
  encode(message: ProjectSourceInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectSourceId !== 0) {
      writer.uint32(16).int32(message.projectSourceId);
    }
    if (message.framework !== 0) {
      writer.uint32(24).int32(message.framework);
    }
    if (message.layer !== 0) {
      writer.uint32(32).int32(message.layer);
    }
    if (message.sourcePath !== "") {
      writer.uint32(42).string(message.sourcePath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectSourceId = reader.int32();
          break;
        case 3:
          message.framework = reader.int32() as any;
          break;
        case 4:
          message.layer = reader.int32() as any;
          break;
        case 5:
          message.sourcePath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceInit {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectSourceId: isSet(object.projectSourceId) ? Number(object.projectSourceId) : 0,
      framework: isSet(object.framework) ? projectSourceInitFrameworkFromJSON(object.framework) : 0,
      layer: isSet(object.layer) ? projectSourceInitLayerFromJSON(object.layer) : 0,
      sourcePath: isSet(object.sourcePath) ? String(object.sourcePath) : "",
    };
  },

  toJSON(message: ProjectSourceInit): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectSourceId !== undefined && (obj.projectSourceId = Math.round(message.projectSourceId));
    message.framework !== undefined && (obj.framework = projectSourceInitFrameworkToJSON(message.framework));
    message.layer !== undefined && (obj.layer = projectSourceInitLayerToJSON(message.layer));
    message.sourcePath !== undefined && (obj.sourcePath = message.sourcePath);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceInit>): ProjectSourceInit {
    const message = createBaseProjectSourceInit();
    message.projectId = object.projectId ?? 0;
    message.projectSourceId = object.projectSourceId ?? 0;
    message.framework = object.framework ?? 0;
    message.layer = object.layer ?? 0;
    message.sourcePath = object.sourcePath ?? "";
    return message;
  },
};

function createBaseProjectSourceSync(): ProjectSourceSync {
  return { projectId: 0, projectSourceId: 0, status: "", files: "" };
}

export const ProjectSourceSyncData = {
  encode(message: ProjectSourceSync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectSourceId !== 0) {
      writer.uint32(16).int32(message.projectSourceId);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    if (message.files !== "") {
      writer.uint32(34).string(message.files);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceSync {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceSync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectSourceId = reader.int32();
          break;
        case 3:
          message.status = reader.string();
          break;
        case 4:
          message.files = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceSync {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectSourceId: isSet(object.projectSourceId) ? Number(object.projectSourceId) : 0,
      status: isSet(object.status) ? String(object.status) : "",
      files: isSet(object.files) ? String(object.files) : "",
    };
  },

  toJSON(message: ProjectSourceSync): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectSourceId !== undefined && (obj.projectSourceId = Math.round(message.projectSourceId));
    message.status !== undefined && (obj.status = message.status);
    message.files !== undefined && (obj.files = message.files);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceSync>): ProjectSourceSync {
    const message = createBaseProjectSourceSync();
    message.projectId = object.projectId ?? 0;
    message.projectSourceId = object.projectSourceId ?? 0;
    message.status = object.status ?? "";
    message.files = object.files ?? "";
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
