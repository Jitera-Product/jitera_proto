/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class NewProject {
  projectId: number;
  projectName: string;
  timeZone: string;
  defaultLanguageCode: string;
  languageCodes: string[];
}

export enum NewProjectFramework {
  UNSPECIFIED = 0,
  NESTJS = 1,
  NEXTJS = 2,
  REACT_NATIVE = 3,
  RUBY_ON_RAILS = 4,
  LARAVEL = 5,
  UNRECOGNIZED = -1,
}

export function newProjectFrameworkFromJSON(object: any): NewProjectFramework {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return NewProjectFramework.UNSPECIFIED;
    case 1:
    case "NESTJS":
      return NewProjectFramework.NESTJS;
    case 2:
    case "NEXTJS":
      return NewProjectFramework.NEXTJS;
    case 3:
    case "REACT_NATIVE":
      return NewProjectFramework.REACT_NATIVE;
    case 4:
    case "RUBY_ON_RAILS":
      return NewProjectFramework.RUBY_ON_RAILS;
    case 5:
    case "LARAVEL":
      return NewProjectFramework.LARAVEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NewProjectFramework.UNRECOGNIZED;
  }
}

export function newProjectFrameworkToJSON(object: NewProjectFramework): string {
  switch (object) {
    case NewProjectFramework.UNSPECIFIED:
      return "UNSPECIFIED";
    case NewProjectFramework.NESTJS:
      return "NESTJS";
    case NewProjectFramework.NEXTJS:
      return "NEXTJS";
    case NewProjectFramework.REACT_NATIVE:
      return "REACT_NATIVE";
    case NewProjectFramework.RUBY_ON_RAILS:
      return "RUBY_ON_RAILS";
    case NewProjectFramework.LARAVEL:
      return "LARAVEL";
    case NewProjectFramework.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

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

function createBaseNewProject(): NewProject {
  return { projectId: 0, projectName: "", timeZone: "", defaultLanguageCode: "", languageCodes: [] };
}

export const NewProjectData = {
  encode(message: NewProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectName !== "") {
      writer.uint32(18).string(message.projectName);
    }
    if (message.timeZone !== "") {
      writer.uint32(26).string(message.timeZone);
    }
    if (message.defaultLanguageCode !== "") {
      writer.uint32(34).string(message.defaultLanguageCode);
    }
    for (const v of message.languageCodes) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectName = reader.string();
          break;
        case 3:
          message.timeZone = reader.string();
          break;
        case 4:
          message.defaultLanguageCode = reader.string();
          break;
        case 5:
          message.languageCodes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewProject {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectName: isSet(object.projectName) ? String(object.projectName) : "",
      timeZone: isSet(object.timeZone) ? String(object.timeZone) : "",
      defaultLanguageCode: isSet(object.defaultLanguageCode) ? String(object.defaultLanguageCode) : "",
      languageCodes: Array.isArray(object?.languageCodes) ? object.languageCodes.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: NewProject): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectName !== undefined && (obj.projectName = message.projectName);
    message.timeZone !== undefined && (obj.timeZone = message.timeZone);
    message.defaultLanguageCode !== undefined && (obj.defaultLanguageCode = message.defaultLanguageCode);
    if (message.languageCodes) {
      obj.languageCodes = message.languageCodes.map((e) => e);
    } else {
      obj.languageCodes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<NewProject>): NewProject {
    const message = createBaseNewProject();
    message.projectId = object.projectId ?? 0;
    message.projectName = object.projectName ?? "";
    message.timeZone = object.timeZone ?? "";
    message.defaultLanguageCode = object.defaultLanguageCode ?? "";
    message.languageCodes = object.languageCodes?.map((e) => e) || [];
    return message;
  },
};

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
