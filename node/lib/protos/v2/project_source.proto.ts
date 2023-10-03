/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { StructData } from "../google/protobuf/struct.proto";

export class ProjectSource {
  id: number;
  projectId: number;
  framework: ProjectSourceFramework;
  layer: ProjectSourceLayer;
  files: string;
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

export class ProjectSourceTable {
  id: number;
  name: string;
  columns: ProjectSourceTableColumn[];
}

export class ProjectSourceTableColumn {
  id: number;
  name: string;
  type: string;
}

export class ProjectSourceRelation {
  id: number;
  column: string;
  table: string;
  relatedTable: string;
  type: string;
}

export class ProjectSourceCreation {
  projectGenerateQueueId: number;
  projectSource?: ProjectSource;
  sourcePath: string;
}

export class ERDConfig {
  projectGenerateQueueId: number;
  tables: ProjectSourceTable[];
  sourcePath: string;
  projectSource?: ProjectSource;
}

export class BusinessLogicChanges {
  projectGenerateQueueId: number;
  tables: ProjectSourceTable[];
  relations: ProjectSourceRelation[];
  projectSource?: ProjectSource;
  blockDiff?: BlockDiff;
}

export class BlockDiff {
  projectId: number;
  id: number;
  nodeId: string;
  content?: BlockDiffBlockBody;
  blocks: BlockDiffBlock[];
}

export class BlockDiffBlock {
  id: number;
  nodeId: string;
  addition?: BlockDiffBlockAddition | undefined;
  modification?: BlockDiffBlockModification | undefined;
  deletion?: BlockDiffBlockDeletion | undefined;
}

export class BlockDiffBlockAddition {
  content?: BlockDiffBlockBody;
}

export class BlockDiffBlockModification {
  deletion?: BlockDiffBlockBody;
  addition?: BlockDiffBlockBody;
}

export class BlockDiffBlockDeletion {
  content?: BlockDiffBlockBody;
}

export class BlockDiffBlockBody {
  name: string;
  blockType: string;
  parentNodeId: string;
  content: { [key: string]: any }[];
  properties?: { [key: string]: any };
  children: string[];
}

export class ApiChanges {
  projectSource?: ProjectSource;
  blockDiff?: BlockDiff;
  tables: ProjectSourceTable[];
  relations: ProjectSourceRelation[];
  projectGenerateQueueId: number;
}

export class ProjectSourceReport {
  projectGenerateQueueId: number;
  projectId: number;
  projectSourceId: number;
  tokenUsage: number;
  progress?: ProjectSourceReportProgress | undefined;
  complete?: ProjectSourceReportComplete | undefined;
  error?: ProjectSourceReportError | undefined;
}

export class ProjectSourceReportProgress {
  precentage: number;
  message: string;
}

export class ProjectSourceReportError {
  message: string;
}

export class ProjectSourceReportComplete {
  files: string;
}

function createBaseProjectSource(): ProjectSource {
  return { id: 0, projectId: 0, framework: 0, layer: 0, files: "" };
}

export const ProjectSourceData = {
  encode(message: ProjectSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.framework !== 0) {
      writer.uint32(24).int32(message.framework);
    }
    if (message.layer !== 0) {
      writer.uint32(32).int32(message.layer);
    }
    if (message.files !== "") {
      writer.uint32(42).string(message.files);
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
          message.id = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.framework = reader.int32() as any;
          break;
        case 4:
          message.layer = reader.int32() as any;
          break;
        case 5:
          message.files = reader.string();
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
      id: isSet(object.id) ? Number(object.id) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      framework: isSet(object.framework) ? projectSourceFrameworkFromJSON(object.framework) : 0,
      layer: isSet(object.layer) ? projectSourceLayerFromJSON(object.layer) : 0,
      files: isSet(object.files) ? String(object.files) : "",
    };
  },

  toJSON(message: ProjectSource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.framework !== undefined && (obj.framework = projectSourceFrameworkToJSON(message.framework));
    message.layer !== undefined && (obj.layer = projectSourceLayerToJSON(message.layer));
    message.files !== undefined && (obj.files = message.files);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSource>): ProjectSource {
    const message = createBaseProjectSource();
    message.id = object.id ?? 0;
    message.projectId = object.projectId ?? 0;
    message.framework = object.framework ?? 0;
    message.layer = object.layer ?? 0;
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
      ProjectSourceTableColumnData.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.columns.push(ProjectSourceTableColumnData.decode(reader, reader.uint32()));
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
        ? object.columns.map((e: any) => ProjectSourceTableColumnData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectSourceTable): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    if (message.columns) {
      obj.columns = message.columns.map((e) => e ? ProjectSourceTableColumnData.toJSON(e) : undefined);
    } else {
      obj.columns = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceTable>): ProjectSourceTable {
    const message = createBaseProjectSourceTable();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.columns = object.columns?.map((e) => ProjectSourceTableColumnData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectSourceTableColumn(): ProjectSourceTableColumn {
  return { id: 0, name: "", type: "" };
}

export const ProjectSourceTableColumnData = {
  encode(message: ProjectSourceTableColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceTableColumn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceTableColumn();
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
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceTableColumn {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: ProjectSourceTableColumn): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceTableColumn>): ProjectSourceTableColumn {
    const message = createBaseProjectSourceTableColumn();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseProjectSourceRelation(): ProjectSourceRelation {
  return { id: 0, column: "", table: "", relatedTable: "", type: "" };
}

export const ProjectSourceRelationData = {
  encode(message: ProjectSourceRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.column !== "") {
      writer.uint32(18).string(message.column);
    }
    if (message.table !== "") {
      writer.uint32(26).string(message.table);
    }
    if (message.relatedTable !== "") {
      writer.uint32(34).string(message.relatedTable);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceRelation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.column = reader.string();
          break;
        case 3:
          message.table = reader.string();
          break;
        case 4:
          message.relatedTable = reader.string();
          break;
        case 5:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceRelation {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      column: isSet(object.column) ? String(object.column) : "",
      table: isSet(object.table) ? String(object.table) : "",
      relatedTable: isSet(object.relatedTable) ? String(object.relatedTable) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: ProjectSourceRelation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.column !== undefined && (obj.column = message.column);
    message.table !== undefined && (obj.table = message.table);
    message.relatedTable !== undefined && (obj.relatedTable = message.relatedTable);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceRelation>): ProjectSourceRelation {
    const message = createBaseProjectSourceRelation();
    message.id = object.id ?? 0;
    message.column = object.column ?? "";
    message.table = object.table ?? "";
    message.relatedTable = object.relatedTable ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseProjectSourceCreation(): ProjectSourceCreation {
  return { projectGenerateQueueId: 0, sourcePath: "" };
}

export const ProjectSourceCreationData = {
  encode(message: ProjectSourceCreation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(message.projectSource, writer.uint32(18).fork()).ldelim();
    }
    if (message.sourcePath !== "") {
      writer.uint32(26).string(message.sourcePath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceCreation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceCreation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.projectSource = ProjectSourceData.decode(reader, reader.uint32());
          break;
        case 3:
          message.sourcePath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceCreation {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectSource: isSet(object.projectSource) ? ProjectSourceData.fromJSON(object.projectSource) : undefined,
      sourcePath: isSet(object.sourcePath) ? String(object.sourcePath) : "",
    };
  },

  toJSON(message: ProjectSourceCreation): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource ? ProjectSourceData.toJSON(message.projectSource) : undefined);
    message.sourcePath !== undefined && (obj.sourcePath = message.sourcePath);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceCreation>): ProjectSourceCreation {
    const message = createBaseProjectSourceCreation();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectSource = (object.projectSource !== undefined && object.projectSource !== null)
      ? ProjectSourceData.fromPartial(object.projectSource)
      : undefined;
    message.sourcePath = object.sourcePath ?? "";
    return message;
  },
};

function createBaseERDConfig(): ERDConfig {
  return { projectGenerateQueueId: 0, tables: [], sourcePath: "" };
}

export const ERDConfigData = {
  encode(message: ERDConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    for (const v of message.tables) {
      ProjectSourceTableData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.sourcePath !== "") {
      writer.uint32(26).string(message.sourcePath);
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(message.projectSource, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERDConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERDConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.tables.push(ProjectSourceTableData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.sourcePath = reader.string();
          break;
        case 4:
          message.projectSource = ProjectSourceData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERDConfig {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => ProjectSourceTableData.fromJSON(e)) : [],
      sourcePath: isSet(object.sourcePath) ? String(object.sourcePath) : "",
      projectSource: isSet(object.projectSource) ? ProjectSourceData.fromJSON(object.projectSource) : undefined,
    };
  },

  toJSON(message: ERDConfig): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    if (message.tables) {
      obj.tables = message.tables.map((e) => e ? ProjectSourceTableData.toJSON(e) : undefined);
    } else {
      obj.tables = [];
    }
    message.sourcePath !== undefined && (obj.sourcePath = message.sourcePath);
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource ? ProjectSourceData.toJSON(message.projectSource) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ERDConfig>): ERDConfig {
    const message = createBaseERDConfig();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.tables = object.tables?.map((e) => ProjectSourceTableData.fromPartial(e)) || [];
    message.sourcePath = object.sourcePath ?? "";
    message.projectSource = (object.projectSource !== undefined && object.projectSource !== null)
      ? ProjectSourceData.fromPartial(object.projectSource)
      : undefined;
    return message;
  },
};

function createBaseBusinessLogicChanges(): BusinessLogicChanges {
  return { projectGenerateQueueId: 0, tables: [], relations: [] };
}

export const BusinessLogicChangesData = {
  encode(message: BusinessLogicChanges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    for (const v of message.tables) {
      ProjectSourceTableData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.relations) {
      ProjectSourceRelationData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(message.projectSource, writer.uint32(34).fork()).ldelim();
    }
    if (message.blockDiff !== undefined) {
      BlockDiffData.encode(message.blockDiff, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessLogicChanges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessLogicChanges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.tables.push(ProjectSourceTableData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.relations.push(ProjectSourceRelationData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.projectSource = ProjectSourceData.decode(reader, reader.uint32());
          break;
        case 5:
          message.blockDiff = BlockDiffData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessLogicChanges {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => ProjectSourceTableData.fromJSON(e)) : [],
      relations: Array.isArray(object?.relations)
        ? object.relations.map((e: any) => ProjectSourceRelationData.fromJSON(e))
        : [],
      projectSource: isSet(object.projectSource) ? ProjectSourceData.fromJSON(object.projectSource) : undefined,
      blockDiff: isSet(object.blockDiff) ? BlockDiffData.fromJSON(object.blockDiff) : undefined,
    };
  },

  toJSON(message: BusinessLogicChanges): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    if (message.tables) {
      obj.tables = message.tables.map((e) => e ? ProjectSourceTableData.toJSON(e) : undefined);
    } else {
      obj.tables = [];
    }
    if (message.relations) {
      obj.relations = message.relations.map((e) => e ? ProjectSourceRelationData.toJSON(e) : undefined);
    } else {
      obj.relations = [];
    }
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource ? ProjectSourceData.toJSON(message.projectSource) : undefined);
    message.blockDiff !== undefined &&
      (obj.blockDiff = message.blockDiff ? BlockDiffData.toJSON(message.blockDiff) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicChanges>): BusinessLogicChanges {
    const message = createBaseBusinessLogicChanges();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.tables = object.tables?.map((e) => ProjectSourceTableData.fromPartial(e)) || [];
    message.relations = object.relations?.map((e) => ProjectSourceRelationData.fromPartial(e)) || [];
    message.projectSource = (object.projectSource !== undefined && object.projectSource !== null)
      ? ProjectSourceData.fromPartial(object.projectSource)
      : undefined;
    message.blockDiff = (object.blockDiff !== undefined && object.blockDiff !== null)
      ? BlockDiffData.fromPartial(object.blockDiff)
      : undefined;
    return message;
  },
};

function createBaseBlockDiff(): BlockDiff {
  return { projectId: 0, id: 0, nodeId: "", blocks: [] };
}

export const BlockDiffData = {
  encode(message: BlockDiff, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.id !== 0) {
      writer.uint32(24).int32(message.id);
    }
    if (message.nodeId !== "") {
      writer.uint32(34).string(message.nodeId);
    }
    if (message.content !== undefined) {
      BlockDiffBlockBodyData.encode(message.content, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.blocks) {
      BlockDiffBlockData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockDiff {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockDiff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 3:
          message.id = reader.int32();
          break;
        case 4:
          message.nodeId = reader.string();
          break;
        case 5:
          message.content = BlockDiffBlockBodyData.decode(reader, reader.uint32());
          break;
        case 6:
          message.blocks.push(BlockDiffBlockData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockDiff {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      content: isSet(object.content) ? BlockDiffBlockBodyData.fromJSON(object.content) : undefined,
      blocks: Array.isArray(object?.blocks) ? object.blocks.map((e: any) => BlockDiffBlockData.fromJSON(e)) : [],
    };
  },

  toJSON(message: BlockDiff): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.content !== undefined &&
      (obj.content = message.content ? BlockDiffBlockBodyData.toJSON(message.content) : undefined);
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => e ? BlockDiffBlockData.toJSON(e) : undefined);
    } else {
      obj.blocks = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BlockDiff>): BlockDiff {
    const message = createBaseBlockDiff();
    message.projectId = object.projectId ?? 0;
    message.id = object.id ?? 0;
    message.nodeId = object.nodeId ?? "";
    message.content = (object.content !== undefined && object.content !== null)
      ? BlockDiffBlockBodyData.fromPartial(object.content)
      : undefined;
    message.blocks = object.blocks?.map((e) => BlockDiffBlockData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBlockDiffBlock(): BlockDiffBlock {
  return { id: 0, nodeId: "" };
}

export const BlockDiffBlockData = {
  encode(message: BlockDiffBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.addition !== undefined) {
      BlockDiffBlockAdditionData.encode(message.addition, writer.uint32(26).fork()).ldelim();
    }
    if (message.modification !== undefined) {
      BlockDiffBlockModificationData.encode(message.modification, writer.uint32(34).fork()).ldelim();
    }
    if (message.deletion !== undefined) {
      BlockDiffBlockDeletionData.encode(message.deletion, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockDiffBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockDiffBlock();
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
          message.addition = BlockDiffBlockAdditionData.decode(reader, reader.uint32());
          break;
        case 4:
          message.modification = BlockDiffBlockModificationData.decode(reader, reader.uint32());
          break;
        case 5:
          message.deletion = BlockDiffBlockDeletionData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockDiffBlock {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      addition: isSet(object.addition) ? BlockDiffBlockAdditionData.fromJSON(object.addition) : undefined,
      modification: isSet(object.modification)
        ? BlockDiffBlockModificationData.fromJSON(object.modification)
        : undefined,
      deletion: isSet(object.deletion) ? BlockDiffBlockDeletionData.fromJSON(object.deletion) : undefined,
    };
  },

  toJSON(message: BlockDiffBlock): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.addition !== undefined &&
      (obj.addition = message.addition ? BlockDiffBlockAdditionData.toJSON(message.addition) : undefined);
    message.modification !== undefined &&
      (obj.modification = message.modification
        ? BlockDiffBlockModificationData.toJSON(message.modification)
        : undefined);
    message.deletion !== undefined &&
      (obj.deletion = message.deletion ? BlockDiffBlockDeletionData.toJSON(message.deletion) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockDiffBlock>): BlockDiffBlock {
    const message = createBaseBlockDiffBlock();
    message.id = object.id ?? 0;
    message.nodeId = object.nodeId ?? "";
    message.addition = (object.addition !== undefined && object.addition !== null)
      ? BlockDiffBlockAdditionData.fromPartial(object.addition)
      : undefined;
    message.modification = (object.modification !== undefined && object.modification !== null)
      ? BlockDiffBlockModificationData.fromPartial(object.modification)
      : undefined;
    message.deletion = (object.deletion !== undefined && object.deletion !== null)
      ? BlockDiffBlockDeletionData.fromPartial(object.deletion)
      : undefined;
    return message;
  },
};

function createBaseBlockDiffBlockAddition(): BlockDiffBlockAddition {
  return {};
}

export const BlockDiffBlockAdditionData = {
  encode(message: BlockDiffBlockAddition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      BlockDiffBlockBodyData.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockDiffBlockAddition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockDiffBlockAddition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = BlockDiffBlockBodyData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockDiffBlockAddition {
    return { content: isSet(object.content) ? BlockDiffBlockBodyData.fromJSON(object.content) : undefined };
  },

  toJSON(message: BlockDiffBlockAddition): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content = message.content ? BlockDiffBlockBodyData.toJSON(message.content) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockDiffBlockAddition>): BlockDiffBlockAddition {
    const message = createBaseBlockDiffBlockAddition();
    message.content = (object.content !== undefined && object.content !== null)
      ? BlockDiffBlockBodyData.fromPartial(object.content)
      : undefined;
    return message;
  },
};

function createBaseBlockDiffBlockModification(): BlockDiffBlockModification {
  return {};
}

export const BlockDiffBlockModificationData = {
  encode(message: BlockDiffBlockModification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deletion !== undefined) {
      BlockDiffBlockBodyData.encode(message.deletion, writer.uint32(10).fork()).ldelim();
    }
    if (message.addition !== undefined) {
      BlockDiffBlockBodyData.encode(message.addition, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockDiffBlockModification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockDiffBlockModification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deletion = BlockDiffBlockBodyData.decode(reader, reader.uint32());
          break;
        case 2:
          message.addition = BlockDiffBlockBodyData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockDiffBlockModification {
    return {
      deletion: isSet(object.deletion) ? BlockDiffBlockBodyData.fromJSON(object.deletion) : undefined,
      addition: isSet(object.addition) ? BlockDiffBlockBodyData.fromJSON(object.addition) : undefined,
    };
  },

  toJSON(message: BlockDiffBlockModification): unknown {
    const obj: any = {};
    message.deletion !== undefined &&
      (obj.deletion = message.deletion ? BlockDiffBlockBodyData.toJSON(message.deletion) : undefined);
    message.addition !== undefined &&
      (obj.addition = message.addition ? BlockDiffBlockBodyData.toJSON(message.addition) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockDiffBlockModification>): BlockDiffBlockModification {
    const message = createBaseBlockDiffBlockModification();
    message.deletion = (object.deletion !== undefined && object.deletion !== null)
      ? BlockDiffBlockBodyData.fromPartial(object.deletion)
      : undefined;
    message.addition = (object.addition !== undefined && object.addition !== null)
      ? BlockDiffBlockBodyData.fromPartial(object.addition)
      : undefined;
    return message;
  },
};

function createBaseBlockDiffBlockDeletion(): BlockDiffBlockDeletion {
  return {};
}

export const BlockDiffBlockDeletionData = {
  encode(message: BlockDiffBlockDeletion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      BlockDiffBlockBodyData.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockDiffBlockDeletion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockDiffBlockDeletion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = BlockDiffBlockBodyData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockDiffBlockDeletion {
    return { content: isSet(object.content) ? BlockDiffBlockBodyData.fromJSON(object.content) : undefined };
  },

  toJSON(message: BlockDiffBlockDeletion): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content = message.content ? BlockDiffBlockBodyData.toJSON(message.content) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockDiffBlockDeletion>): BlockDiffBlockDeletion {
    const message = createBaseBlockDiffBlockDeletion();
    message.content = (object.content !== undefined && object.content !== null)
      ? BlockDiffBlockBodyData.fromPartial(object.content)
      : undefined;
    return message;
  },
};

function createBaseBlockDiffBlockBody(): BlockDiffBlockBody {
  return { name: "", blockType: "", parentNodeId: "", content: [], children: [] };
}

export const BlockDiffBlockBodyData = {
  encode(message: BlockDiffBlockBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.blockType !== "") {
      writer.uint32(18).string(message.blockType);
    }
    if (message.parentNodeId !== "") {
      writer.uint32(26).string(message.parentNodeId);
    }
    for (const v of message.content) {
      StructData.encode(StructData.wrap(v!), writer.uint32(34).fork()).ldelim();
    }
    if (message.properties !== undefined) {
      StructData.encode(StructData.wrap(message.properties), writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.children) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockDiffBlockBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockDiffBlockBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.blockType = reader.string();
          break;
        case 3:
          message.parentNodeId = reader.string();
          break;
        case 4:
          message.content.push(StructData.unwrap(StructData.decode(reader, reader.uint32())));
          break;
        case 5:
          message.properties = StructData.unwrap(StructData.decode(reader, reader.uint32()));
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

  fromJSON(object: any): BlockDiffBlockBody {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      blockType: isSet(object.blockType) ? String(object.blockType) : "",
      parentNodeId: isSet(object.parentNodeId) ? String(object.parentNodeId) : "",
      content: Array.isArray(object?.content) ? [...object.content] : [],
      properties: isObject(object.properties) ? object.properties : undefined,
      children: Array.isArray(object?.children) ? object.children.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: BlockDiffBlockBody): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.blockType !== undefined && (obj.blockType = message.blockType);
    message.parentNodeId !== undefined && (obj.parentNodeId = message.parentNodeId);
    if (message.content) {
      obj.content = message.content.map((e) => e);
    } else {
      obj.content = [];
    }
    message.properties !== undefined && (obj.properties = message.properties);
    if (message.children) {
      obj.children = message.children.map((e) => e);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BlockDiffBlockBody>): BlockDiffBlockBody {
    const message = createBaseBlockDiffBlockBody();
    message.name = object.name ?? "";
    message.blockType = object.blockType ?? "";
    message.parentNodeId = object.parentNodeId ?? "";
    message.content = object.content?.map((e) => e) || [];
    message.properties = object.properties ?? undefined;
    message.children = object.children?.map((e) => e) || [];
    return message;
  },
};

function createBaseApiChanges(): ApiChanges {
  return { tables: [], relations: [], projectGenerateQueueId: 0 };
}

export const ApiChangesData = {
  encode(message: ApiChanges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(message.projectSource, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockDiff !== undefined) {
      BlockDiffData.encode(message.blockDiff, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.tables) {
      ProjectSourceTableData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.relations) {
      ProjectSourceRelationData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(40).int32(message.projectGenerateQueueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiChanges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiChanges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectSource = ProjectSourceData.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockDiff = BlockDiffData.decode(reader, reader.uint32());
          break;
        case 3:
          message.tables.push(ProjectSourceTableData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.relations.push(ProjectSourceRelationData.decode(reader, reader.uint32()));
          break;
        case 5:
          message.projectGenerateQueueId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApiChanges {
    return {
      projectSource: isSet(object.projectSource) ? ProjectSourceData.fromJSON(object.projectSource) : undefined,
      blockDiff: isSet(object.blockDiff) ? BlockDiffData.fromJSON(object.blockDiff) : undefined,
      tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => ProjectSourceTableData.fromJSON(e)) : [],
      relations: Array.isArray(object?.relations)
        ? object.relations.map((e: any) => ProjectSourceRelationData.fromJSON(e))
        : [],
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
    };
  },

  toJSON(message: ApiChanges): unknown {
    const obj: any = {};
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource ? ProjectSourceData.toJSON(message.projectSource) : undefined);
    message.blockDiff !== undefined &&
      (obj.blockDiff = message.blockDiff ? BlockDiffData.toJSON(message.blockDiff) : undefined);
    if (message.tables) {
      obj.tables = message.tables.map((e) => e ? ProjectSourceTableData.toJSON(e) : undefined);
    } else {
      obj.tables = [];
    }
    if (message.relations) {
      obj.relations = message.relations.map((e) => e ? ProjectSourceRelationData.toJSON(e) : undefined);
    } else {
      obj.relations = [];
    }
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    return obj;
  },

  fromPartial(object: DeepPartial<ApiChanges>): ApiChanges {
    const message = createBaseApiChanges();
    message.projectSource = (object.projectSource !== undefined && object.projectSource !== null)
      ? ProjectSourceData.fromPartial(object.projectSource)
      : undefined;
    message.blockDiff = (object.blockDiff !== undefined && object.blockDiff !== null)
      ? BlockDiffData.fromPartial(object.blockDiff)
      : undefined;
    message.tables = object.tables?.map((e) => ProjectSourceTableData.fromPartial(e)) || [];
    message.relations = object.relations?.map((e) => ProjectSourceRelationData.fromPartial(e)) || [];
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    return message;
  },
};

function createBaseProjectSourceReport(): ProjectSourceReport {
  return { projectGenerateQueueId: 0, projectId: 0, projectSourceId: 0, tokenUsage: 0 };
}

export const ProjectSourceReportData = {
  encode(message: ProjectSourceReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.projectSourceId !== 0) {
      writer.uint32(24).int32(message.projectSourceId);
    }
    if (message.tokenUsage !== 0) {
      writer.uint32(32).int32(message.tokenUsage);
    }
    if (message.progress !== undefined) {
      ProjectSourceReportProgressData.encode(message.progress, writer.uint32(42).fork()).ldelim();
    }
    if (message.complete !== undefined) {
      ProjectSourceReportCompleteData.encode(message.complete, writer.uint32(50).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ProjectSourceReportErrorData.encode(message.error, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceReport();
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
          message.projectSourceId = reader.int32();
          break;
        case 4:
          message.tokenUsage = reader.int32();
          break;
        case 5:
          message.progress = ProjectSourceReportProgressData.decode(reader, reader.uint32());
          break;
        case 6:
          message.complete = ProjectSourceReportCompleteData.decode(reader, reader.uint32());
          break;
        case 7:
          message.error = ProjectSourceReportErrorData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceReport {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectSourceId: isSet(object.projectSourceId) ? Number(object.projectSourceId) : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
      progress: isSet(object.progress) ? ProjectSourceReportProgressData.fromJSON(object.progress) : undefined,
      complete: isSet(object.complete) ? ProjectSourceReportCompleteData.fromJSON(object.complete) : undefined,
      error: isSet(object.error) ? ProjectSourceReportErrorData.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ProjectSourceReport): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectSourceId !== undefined && (obj.projectSourceId = Math.round(message.projectSourceId));
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    message.progress !== undefined &&
      (obj.progress = message.progress ? ProjectSourceReportProgressData.toJSON(message.progress) : undefined);
    message.complete !== undefined &&
      (obj.complete = message.complete ? ProjectSourceReportCompleteData.toJSON(message.complete) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? ProjectSourceReportErrorData.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceReport>): ProjectSourceReport {
    const message = createBaseProjectSourceReport();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.projectSourceId = object.projectSourceId ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    message.progress = (object.progress !== undefined && object.progress !== null)
      ? ProjectSourceReportProgressData.fromPartial(object.progress)
      : undefined;
    message.complete = (object.complete !== undefined && object.complete !== null)
      ? ProjectSourceReportCompleteData.fromPartial(object.complete)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ProjectSourceReportErrorData.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseProjectSourceReportProgress(): ProjectSourceReportProgress {
  return { precentage: 0, message: "" };
}

export const ProjectSourceReportProgressData = {
  encode(message: ProjectSourceReportProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.precentage !== 0) {
      writer.uint32(8).int32(message.precentage);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceReportProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceReportProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.precentage = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceReportProgress {
    return {
      precentage: isSet(object.precentage) ? Number(object.precentage) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: ProjectSourceReportProgress): unknown {
    const obj: any = {};
    message.precentage !== undefined && (obj.precentage = Math.round(message.precentage));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceReportProgress>): ProjectSourceReportProgress {
    const message = createBaseProjectSourceReportProgress();
    message.precentage = object.precentage ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseProjectSourceReportError(): ProjectSourceReportError {
  return { message: "" };
}

export const ProjectSourceReportErrorData = {
  encode(message: ProjectSourceReportError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceReportError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceReportError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceReportError {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: ProjectSourceReportError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceReportError>): ProjectSourceReportError {
    const message = createBaseProjectSourceReportError();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseProjectSourceReportComplete(): ProjectSourceReportComplete {
  return { files: "" };
}

export const ProjectSourceReportCompleteData = {
  encode(message: ProjectSourceReportComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.files !== "") {
      writer.uint32(34).string(message.files);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceReportComplete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceReportComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

  fromJSON(object: any): ProjectSourceReportComplete {
    return { files: isSet(object.files) ? String(object.files) : "" };
  },

  toJSON(message: ProjectSourceReportComplete): unknown {
    const obj: any = {};
    message.files !== undefined && (obj.files = message.files);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceReportComplete>): ProjectSourceReportComplete {
    const message = createBaseProjectSourceReportComplete();
    message.files = object.files ?? "";
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
