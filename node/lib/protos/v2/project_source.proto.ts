/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class ProjectSource {
  projectId: number;
  projectSourceId: number;
  framework: ProjectSourceFramework;
  layer: ProjectSourceLayer;
  sourcePath: string;
  created?: ProjectSourceCreated | undefined;
  erd?: ProjectSourceERD | undefined;
}

export enum ProjectSourceFramework {
  FRAMEWORK_UNSPECIFIED = 0,
  NEXTJS = 1,
  VITE = 2,
  NUXTJS = 3,
  NESTJS = 4,
  ROR = 5,
  LARAVEL = 6,
  UNRECOGNIZED = -1,
}

export function projectSourceFrameworkFromJSON(object: any): ProjectSourceFramework {
  switch (object) {
    case 0:
    case "FRAMEWORK_UNSPECIFIED":
      return ProjectSourceFramework.FRAMEWORK_UNSPECIFIED;
    case 1:
    case "NEXTJS":
      return ProjectSourceFramework.NEXTJS;
    case 2:
    case "VITE":
      return ProjectSourceFramework.VITE;
    case 3:
    case "NUXTJS":
      return ProjectSourceFramework.NUXTJS;
    case 4:
    case "NESTJS":
      return ProjectSourceFramework.NESTJS;
    case 5:
    case "ROR":
      return ProjectSourceFramework.ROR;
    case 6:
    case "LARAVEL":
      return ProjectSourceFramework.LARAVEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectSourceFramework.UNRECOGNIZED;
  }
}

export function projectSourceFrameworkToJSON(object: ProjectSourceFramework): string {
  switch (object) {
    case ProjectSourceFramework.FRAMEWORK_UNSPECIFIED:
      return "FRAMEWORK_UNSPECIFIED";
    case ProjectSourceFramework.NEXTJS:
      return "NEXTJS";
    case ProjectSourceFramework.VITE:
      return "VITE";
    case ProjectSourceFramework.NUXTJS:
      return "NUXTJS";
    case ProjectSourceFramework.NESTJS:
      return "NESTJS";
    case ProjectSourceFramework.ROR:
      return "ROR";
    case ProjectSourceFramework.LARAVEL:
      return "LARAVEL";
    case ProjectSourceFramework.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ProjectSourceLayer {
  LAYER_UNSPECIFIED = 0,
  BACKEND = 1,
  FRONTEND = 2,
  MOBILE = 3,
  UNRECOGNIZED = -1,
}

export function projectSourceLayerFromJSON(object: any): ProjectSourceLayer {
  switch (object) {
    case 0:
    case "LAYER_UNSPECIFIED":
      return ProjectSourceLayer.LAYER_UNSPECIFIED;
    case 1:
    case "BACKEND":
      return ProjectSourceLayer.BACKEND;
    case 2:
    case "FRONTEND":
      return ProjectSourceLayer.FRONTEND;
    case 3:
    case "MOBILE":
      return ProjectSourceLayer.MOBILE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectSourceLayer.UNRECOGNIZED;
  }
}

export function projectSourceLayerToJSON(object: ProjectSourceLayer): string {
  switch (object) {
    case ProjectSourceLayer.LAYER_UNSPECIFIED:
      return "LAYER_UNSPECIFIED";
    case ProjectSourceLayer.BACKEND:
      return "BACKEND";
    case ProjectSourceLayer.FRONTEND:
      return "FRONTEND";
    case ProjectSourceLayer.MOBILE:
      return "MOBILE";
    case ProjectSourceLayer.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class ProjectSourceCreated {
}

export class ProjectSourceERD {
  tables: ProjectSourceTable[];
  files: string;
}

export class ProjectSourceTable {
  id: number;
  name: string;
  columns: ProjectSourceColumn[];
}

export class ProjectSourceColumn {
  id: number;
  name: string;
}

export class ProjectSourceSync {
  projectId: number;
  projectSourceId: number;
  status: string;
  files: string;
}

function createBaseProjectSource(): ProjectSource {
  return { projectId: 0, projectSourceId: 0, framework: 0, layer: 0, sourcePath: "" };
}

export const ProjectSourceData = {
  encode(message: ProjectSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.created !== undefined) {
      ProjectSourceCreatedData.encode(message.created, writer.uint32(50).fork()).ldelim();
    }
    if (message.erd !== undefined) {
      ProjectSourceERDData.encode(message.erd, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSource();
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
        case 6:
          message.created = ProjectSourceCreatedData.decode(reader, reader.uint32());
          break;
        case 7:
          message.erd = ProjectSourceERDData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSource {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectSourceId: isSet(object.projectSourceId) ? Number(object.projectSourceId) : 0,
      framework: isSet(object.framework) ? projectSourceFrameworkFromJSON(object.framework) : 0,
      layer: isSet(object.layer) ? projectSourceLayerFromJSON(object.layer) : 0,
      sourcePath: isSet(object.sourcePath) ? String(object.sourcePath) : "",
      created: isSet(object.created) ? ProjectSourceCreatedData.fromJSON(object.created) : undefined,
      erd: isSet(object.erd) ? ProjectSourceERDData.fromJSON(object.erd) : undefined,
    };
  },

  toJSON(message: ProjectSource): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectSourceId !== undefined && (obj.projectSourceId = Math.round(message.projectSourceId));
    message.framework !== undefined && (obj.framework = projectSourceFrameworkToJSON(message.framework));
    message.layer !== undefined && (obj.layer = projectSourceLayerToJSON(message.layer));
    message.sourcePath !== undefined && (obj.sourcePath = message.sourcePath);
    message.created !== undefined &&
      (obj.created = message.created ? ProjectSourceCreatedData.toJSON(message.created) : undefined);
    message.erd !== undefined && (obj.erd = message.erd ? ProjectSourceERDData.toJSON(message.erd) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSource>): ProjectSource {
    const message = createBaseProjectSource();
    message.projectId = object.projectId ?? 0;
    message.projectSourceId = object.projectSourceId ?? 0;
    message.framework = object.framework ?? 0;
    message.layer = object.layer ?? 0;
    message.sourcePath = object.sourcePath ?? "";
    message.created = (object.created !== undefined && object.created !== null)
      ? ProjectSourceCreatedData.fromPartial(object.created)
      : undefined;
    message.erd = (object.erd !== undefined && object.erd !== null)
      ? ProjectSourceERDData.fromPartial(object.erd)
      : undefined;
    return message;
  },
};

function createBaseProjectSourceCreated(): ProjectSourceCreated {
  return {};
}

export const ProjectSourceCreatedData = {
  encode(_: ProjectSourceCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceCreated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ProjectSourceCreated {
    return {};
  },

  toJSON(_: ProjectSourceCreated): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ProjectSourceCreated>): ProjectSourceCreated {
    const message = createBaseProjectSourceCreated();
    return message;
  },
};

function createBaseProjectSourceERD(): ProjectSourceERD {
  return { tables: [], files: "" };
}

export const ProjectSourceERDData = {
  encode(message: ProjectSourceERD, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tables) {
      ProjectSourceTableData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.files !== "") {
      writer.uint32(18).string(message.files);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceERD {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceERD();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tables.push(ProjectSourceTableData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.files = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceERD {
    return {
      tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => ProjectSourceTableData.fromJSON(e)) : [],
      files: isSet(object.files) ? String(object.files) : "",
    };
  },

  toJSON(message: ProjectSourceERD): unknown {
    const obj: any = {};
    if (message.tables) {
      obj.tables = message.tables.map((e) => e ? ProjectSourceTableData.toJSON(e) : undefined);
    } else {
      obj.tables = [];
    }
    message.files !== undefined && (obj.files = message.files);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceERD>): ProjectSourceERD {
    const message = createBaseProjectSourceERD();
    message.tables = object.tables?.map((e) => ProjectSourceTableData.fromPartial(e)) || [];
    message.files = object.files ?? "";
    return message;
  },
};

function createBaseProjectSourceTable(): ProjectSourceTable {
  return { id: 0, name: "", columns: [] };
}

export const ProjectSourceTableData = {
  encode(message: ProjectSourceTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.columns) {
      ProjectSourceColumnData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceTable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceTable();
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
          message.columns.push(ProjectSourceColumnData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceTable {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      columns: Array.isArray(object?.columns)
        ? object.columns.map((e: any) => ProjectSourceColumnData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectSourceTable): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    if (message.columns) {
      obj.columns = message.columns.map((e) => e ? ProjectSourceColumnData.toJSON(e) : undefined);
    } else {
      obj.columns = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceTable>): ProjectSourceTable {
    const message = createBaseProjectSourceTable();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.columns = object.columns?.map((e) => ProjectSourceColumnData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectSourceColumn(): ProjectSourceColumn {
  return { id: 0, name: "" };
}

export const ProjectSourceColumnData = {
  encode(message: ProjectSourceColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceColumn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceColumn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceColumn {
    return { id: isSet(object.id) ? Number(object.id) : 0, name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: ProjectSourceColumn): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceColumn>): ProjectSourceColumn {
    const message = createBaseProjectSourceColumn();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
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
