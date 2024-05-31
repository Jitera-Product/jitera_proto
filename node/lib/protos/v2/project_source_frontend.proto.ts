/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { StructData } from "../google/protobuf/struct.proto";
import { ComponentSpecification, ComponentSpecificationData } from "./component_specification.proto";
import {
  BlockDiff,
  BlockDiffData,
  GenerateSource,
  GenerateSourceData,
  Git,
  GitData,
  ImportBy,
  importByFromJSON,
  importByToJSON,
  ProjectSource,
  ProjectSourceData,
  ProjectSourceRelation,
  ProjectSourceRelationData,
  ProjectSourceTable,
  ProjectSourceTableData,
} from "./project_source.proto";

export class FrontendUIChanges {
  projectGenerateQueueId: number;
  tables: ProjectSourceTable[];
  relations: ProjectSourceRelation[];
  projectSource?: ProjectSource;
  blockDiff?: BlockDiff;
  git?: Git;
  importBy?: ImportBy | undefined;
  generateSource?: GenerateSource | undefined;
  html?: FrontendUIChangesHtmlInfo | undefined;
  figma?: FrontendUIChangesFigmaInfo | undefined;
  usersPrompt?: string | undefined;
  isNonFailedRegeneration: string;
}

export class FrontendUIChangesHtmlScreen {
  id: number;
  htmlCode: string;
  componentSpecifications: ComponentSpecification[];
}

export class FrontendUIChangesFigmaScreen {
  nodeId: string;
  fileKey: string;
  imageUri?: string | undefined;
  componentSpecifications: ComponentSpecification[];
}

export class FrontendUIChangesHtmlInfo {
  screens: FrontendUIChangesHtmlScreen[];
}

export class FrontendUIChangesFigmaInfo {
  accessToken: string;
  screens: FrontendUIChangesFigmaScreen[];
}

export class ProjectSourceFrontendReport {
  projectGenerateQueueId: number;
  projectId: number;
  projectSourceId: number;
  tokenUsage: number;
  module: string;
  payload?: { [key: string]: any };
  progress?: ProjectSourceFrontendReportProgress | undefined;
  complete?: ProjectSourceFrontendReportComplete | undefined;
  error?: ProjectSourceFrontendReportError | undefined;
}

export class ProjectSourceFrontendReportProgress {
  percentage: number;
  message: string;
  payload?: { [key: string]: any };
}

export class ProjectSourceFrontendReportError {
  message: string;
  payload?: { [key: string]: any };
}

export class ProjectSourceFrontendReportComplete {
  payload?: { [key: string]: any };
}

function createBaseFrontendUIChanges(): FrontendUIChanges {
  return { projectGenerateQueueId: 0, tables: [], relations: [], isNonFailedRegeneration: "" };
}

export const FrontendUIChangesData = {
  encode(message: FrontendUIChanges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.git !== undefined) {
      GitData.encode(message.git, writer.uint32(50).fork()).ldelim();
    }
    if (message.importBy !== undefined) {
      writer.uint32(56).int32(message.importBy);
    }
    if (message.generateSource !== undefined) {
      GenerateSourceData.encode(message.generateSource, writer.uint32(66).fork()).ldelim();
    }
    if (message.html !== undefined) {
      FrontendUIChangesHtmlInfoData.encode(message.html, writer.uint32(74).fork()).ldelim();
    }
    if (message.figma !== undefined) {
      FrontendUIChangesFigmaInfoData.encode(message.figma, writer.uint32(82).fork()).ldelim();
    }
    if (message.usersPrompt !== undefined) {
      writer.uint32(90).string(message.usersPrompt);
    }
    if (message.isNonFailedRegeneration !== "") {
      writer.uint32(98).string(message.isNonFailedRegeneration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FrontendUIChanges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrontendUIChanges();
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
        case 6:
          message.git = GitData.decode(reader, reader.uint32());
          break;
        case 7:
          message.importBy = reader.int32() as any;
          break;
        case 8:
          message.generateSource = GenerateSourceData.decode(reader, reader.uint32());
          break;
        case 9:
          message.html = FrontendUIChangesHtmlInfoData.decode(reader, reader.uint32());
          break;
        case 10:
          message.figma = FrontendUIChangesFigmaInfoData.decode(reader, reader.uint32());
          break;
        case 11:
          message.usersPrompt = reader.string();
          break;
        case 12:
          message.isNonFailedRegeneration = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FrontendUIChanges {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => ProjectSourceTableData.fromJSON(e)) : [],
      relations: Array.isArray(object?.relations)
        ? object.relations.map((e: any) => ProjectSourceRelationData.fromJSON(e))
        : [],
      projectSource: isSet(object.projectSource) ? ProjectSourceData.fromJSON(object.projectSource) : undefined,
      blockDiff: isSet(object.blockDiff) ? BlockDiffData.fromJSON(object.blockDiff) : undefined,
      git: isSet(object.git) ? GitData.fromJSON(object.git) : undefined,
      importBy: isSet(object.importBy) ? importByFromJSON(object.importBy) : undefined,
      generateSource: isSet(object.generateSource) ? GenerateSourceData.fromJSON(object.generateSource) : undefined,
      html: isSet(object.html) ? FrontendUIChangesHtmlInfoData.fromJSON(object.html) : undefined,
      figma: isSet(object.figma) ? FrontendUIChangesFigmaInfoData.fromJSON(object.figma) : undefined,
      usersPrompt: isSet(object.usersPrompt) ? String(object.usersPrompt) : undefined,
      isNonFailedRegeneration: isSet(object.isNonFailedRegeneration) ? String(object.isNonFailedRegeneration) : "",
    };
  },

  toJSON(message: FrontendUIChanges): unknown {
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
    message.git !== undefined && (obj.git = message.git ? GitData.toJSON(message.git) : undefined);
    message.importBy !== undefined &&
      (obj.importBy = message.importBy !== undefined ? importByToJSON(message.importBy) : undefined);
    message.generateSource !== undefined &&
      (obj.generateSource = message.generateSource ? GenerateSourceData.toJSON(message.generateSource) : undefined);
    message.html !== undefined &&
      (obj.html = message.html ? FrontendUIChangesHtmlInfoData.toJSON(message.html) : undefined);
    message.figma !== undefined &&
      (obj.figma = message.figma ? FrontendUIChangesFigmaInfoData.toJSON(message.figma) : undefined);
    message.usersPrompt !== undefined && (obj.usersPrompt = message.usersPrompt);
    message.isNonFailedRegeneration !== undefined && (obj.isNonFailedRegeneration = message.isNonFailedRegeneration);
    return obj;
  },

  fromPartial(object: DeepPartial<FrontendUIChanges>): FrontendUIChanges {
    const message = createBaseFrontendUIChanges();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.tables = object.tables?.map((e) => ProjectSourceTableData.fromPartial(e)) || [];
    message.relations = object.relations?.map((e) => ProjectSourceRelationData.fromPartial(e)) || [];
    message.projectSource = (object.projectSource !== undefined && object.projectSource !== null)
      ? ProjectSourceData.fromPartial(object.projectSource)
      : undefined;
    message.blockDiff = (object.blockDiff !== undefined && object.blockDiff !== null)
      ? BlockDiffData.fromPartial(object.blockDiff)
      : undefined;
    message.git = (object.git !== undefined && object.git !== null) ? GitData.fromPartial(object.git) : undefined;
    message.importBy = object.importBy ?? undefined;
    message.generateSource = (object.generateSource !== undefined && object.generateSource !== null)
      ? GenerateSourceData.fromPartial(object.generateSource)
      : undefined;
    message.html = (object.html !== undefined && object.html !== null)
      ? FrontendUIChangesHtmlInfoData.fromPartial(object.html)
      : undefined;
    message.figma = (object.figma !== undefined && object.figma !== null)
      ? FrontendUIChangesFigmaInfoData.fromPartial(object.figma)
      : undefined;
    message.usersPrompt = object.usersPrompt ?? undefined;
    message.isNonFailedRegeneration = object.isNonFailedRegeneration ?? "";
    return message;
  },
};

function createBaseFrontendUIChangesHtmlScreen(): FrontendUIChangesHtmlScreen {
  return { id: 0, htmlCode: "", componentSpecifications: [] };
}

export const FrontendUIChangesHtmlScreenData = {
  encode(message: FrontendUIChangesHtmlScreen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.htmlCode !== "") {
      writer.uint32(18).string(message.htmlCode);
    }
    for (const v of message.componentSpecifications) {
      ComponentSpecificationData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FrontendUIChangesHtmlScreen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrontendUIChangesHtmlScreen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.htmlCode = reader.string();
          break;
        case 3:
          message.componentSpecifications.push(ComponentSpecificationData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FrontendUIChangesHtmlScreen {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      htmlCode: isSet(object.htmlCode) ? String(object.htmlCode) : "",
      componentSpecifications: Array.isArray(object?.componentSpecifications)
        ? object.componentSpecifications.map((e: any) => ComponentSpecificationData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FrontendUIChangesHtmlScreen): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.htmlCode !== undefined && (obj.htmlCode = message.htmlCode);
    if (message.componentSpecifications) {
      obj.componentSpecifications = message.componentSpecifications.map((e) =>
        e ? ComponentSpecificationData.toJSON(e) : undefined
      );
    } else {
      obj.componentSpecifications = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FrontendUIChangesHtmlScreen>): FrontendUIChangesHtmlScreen {
    const message = createBaseFrontendUIChangesHtmlScreen();
    message.id = object.id ?? 0;
    message.htmlCode = object.htmlCode ?? "";
    message.componentSpecifications =
      object.componentSpecifications?.map((e) => ComponentSpecificationData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFrontendUIChangesFigmaScreen(): FrontendUIChangesFigmaScreen {
  return { nodeId: "", fileKey: "", componentSpecifications: [] };
}

export const FrontendUIChangesFigmaScreenData = {
  encode(message: FrontendUIChangesFigmaScreen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.fileKey !== "") {
      writer.uint32(18).string(message.fileKey);
    }
    if (message.imageUri !== undefined) {
      writer.uint32(26).string(message.imageUri);
    }
    for (const v of message.componentSpecifications) {
      ComponentSpecificationData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FrontendUIChangesFigmaScreen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrontendUIChangesFigmaScreen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.fileKey = reader.string();
          break;
        case 3:
          message.imageUri = reader.string();
          break;
        case 4:
          message.componentSpecifications.push(ComponentSpecificationData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FrontendUIChangesFigmaScreen {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      fileKey: isSet(object.fileKey) ? String(object.fileKey) : "",
      imageUri: isSet(object.imageUri) ? String(object.imageUri) : undefined,
      componentSpecifications: Array.isArray(object?.componentSpecifications)
        ? object.componentSpecifications.map((e: any) => ComponentSpecificationData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FrontendUIChangesFigmaScreen): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.fileKey !== undefined && (obj.fileKey = message.fileKey);
    message.imageUri !== undefined && (obj.imageUri = message.imageUri);
    if (message.componentSpecifications) {
      obj.componentSpecifications = message.componentSpecifications.map((e) =>
        e ? ComponentSpecificationData.toJSON(e) : undefined
      );
    } else {
      obj.componentSpecifications = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FrontendUIChangesFigmaScreen>): FrontendUIChangesFigmaScreen {
    const message = createBaseFrontendUIChangesFigmaScreen();
    message.nodeId = object.nodeId ?? "";
    message.fileKey = object.fileKey ?? "";
    message.imageUri = object.imageUri ?? undefined;
    message.componentSpecifications =
      object.componentSpecifications?.map((e) => ComponentSpecificationData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFrontendUIChangesHtmlInfo(): FrontendUIChangesHtmlInfo {
  return { screens: [] };
}

export const FrontendUIChangesHtmlInfoData = {
  encode(message: FrontendUIChangesHtmlInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.screens) {
      FrontendUIChangesHtmlScreenData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FrontendUIChangesHtmlInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrontendUIChangesHtmlInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.screens.push(FrontendUIChangesHtmlScreenData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FrontendUIChangesHtmlInfo {
    return {
      screens: Array.isArray(object?.screens)
        ? object.screens.map((e: any) => FrontendUIChangesHtmlScreenData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FrontendUIChangesHtmlInfo): unknown {
    const obj: any = {};
    if (message.screens) {
      obj.screens = message.screens.map((e) => e ? FrontendUIChangesHtmlScreenData.toJSON(e) : undefined);
    } else {
      obj.screens = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FrontendUIChangesHtmlInfo>): FrontendUIChangesHtmlInfo {
    const message = createBaseFrontendUIChangesHtmlInfo();
    message.screens = object.screens?.map((e) => FrontendUIChangesHtmlScreenData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFrontendUIChangesFigmaInfo(): FrontendUIChangesFigmaInfo {
  return { accessToken: "", screens: [] };
}

export const FrontendUIChangesFigmaInfoData = {
  encode(message: FrontendUIChangesFigmaInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    for (const v of message.screens) {
      FrontendUIChangesFigmaScreenData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FrontendUIChangesFigmaInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrontendUIChangesFigmaInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        case 3:
          message.screens.push(FrontendUIChangesFigmaScreenData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FrontendUIChangesFigmaInfo {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      screens: Array.isArray(object?.screens)
        ? object.screens.map((e: any) => FrontendUIChangesFigmaScreenData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FrontendUIChangesFigmaInfo): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    if (message.screens) {
      obj.screens = message.screens.map((e) => e ? FrontendUIChangesFigmaScreenData.toJSON(e) : undefined);
    } else {
      obj.screens = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FrontendUIChangesFigmaInfo>): FrontendUIChangesFigmaInfo {
    const message = createBaseFrontendUIChangesFigmaInfo();
    message.accessToken = object.accessToken ?? "";
    message.screens = object.screens?.map((e) => FrontendUIChangesFigmaScreenData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectSourceFrontendReport(): ProjectSourceFrontendReport {
  return { projectGenerateQueueId: 0, projectId: 0, projectSourceId: 0, tokenUsage: 0, module: "" };
}

export const ProjectSourceFrontendReportData = {
  encode(message: ProjectSourceFrontendReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.module !== "") {
      writer.uint32(42).string(message.module);
    }
    if (message.payload !== undefined) {
      StructData.encode(StructData.wrap(message.payload), writer.uint32(50).fork()).ldelim();
    }
    if (message.progress !== undefined) {
      ProjectSourceFrontendReportProgressData.encode(message.progress, writer.uint32(58).fork()).ldelim();
    }
    if (message.complete !== undefined) {
      ProjectSourceFrontendReportCompleteData.encode(message.complete, writer.uint32(66).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ProjectSourceFrontendReportErrorData.encode(message.error, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceFrontendReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceFrontendReport();
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
          message.module = reader.string();
          break;
        case 6:
          message.payload = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        case 7:
          message.progress = ProjectSourceFrontendReportProgressData.decode(reader, reader.uint32());
          break;
        case 8:
          message.complete = ProjectSourceFrontendReportCompleteData.decode(reader, reader.uint32());
          break;
        case 9:
          message.error = ProjectSourceFrontendReportErrorData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceFrontendReport {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectSourceId: isSet(object.projectSourceId) ? Number(object.projectSourceId) : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
      module: isSet(object.module) ? String(object.module) : "",
      payload: isObject(object.payload) ? object.payload : undefined,
      progress: isSet(object.progress) ? ProjectSourceFrontendReportProgressData.fromJSON(object.progress) : undefined,
      complete: isSet(object.complete) ? ProjectSourceFrontendReportCompleteData.fromJSON(object.complete) : undefined,
      error: isSet(object.error) ? ProjectSourceFrontendReportErrorData.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ProjectSourceFrontendReport): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectSourceId !== undefined && (obj.projectSourceId = Math.round(message.projectSourceId));
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    message.module !== undefined && (obj.module = message.module);
    message.payload !== undefined && (obj.payload = message.payload);
    message.progress !== undefined &&
      (obj.progress = message.progress ? ProjectSourceFrontendReportProgressData.toJSON(message.progress) : undefined);
    message.complete !== undefined &&
      (obj.complete = message.complete ? ProjectSourceFrontendReportCompleteData.toJSON(message.complete) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? ProjectSourceFrontendReportErrorData.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceFrontendReport>): ProjectSourceFrontendReport {
    const message = createBaseProjectSourceFrontendReport();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.projectSourceId = object.projectSourceId ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    message.module = object.module ?? "";
    message.payload = object.payload ?? undefined;
    message.progress = (object.progress !== undefined && object.progress !== null)
      ? ProjectSourceFrontendReportProgressData.fromPartial(object.progress)
      : undefined;
    message.complete = (object.complete !== undefined && object.complete !== null)
      ? ProjectSourceFrontendReportCompleteData.fromPartial(object.complete)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ProjectSourceFrontendReportErrorData.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseProjectSourceFrontendReportProgress(): ProjectSourceFrontendReportProgress {
  return { percentage: 0, message: "" };
}

export const ProjectSourceFrontendReportProgressData = {
  encode(message: ProjectSourceFrontendReportProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.percentage !== 0) {
      writer.uint32(8).int32(message.percentage);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.payload !== undefined) {
      StructData.encode(StructData.wrap(message.payload), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceFrontendReportProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceFrontendReportProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.payload = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceFrontendReportProgress {
    return {
      percentage: isSet(object.percentage) ? Number(object.percentage) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      payload: isObject(object.payload) ? object.payload : undefined,
    };
  },

  toJSON(message: ProjectSourceFrontendReportProgress): unknown {
    const obj: any = {};
    message.percentage !== undefined && (obj.percentage = Math.round(message.percentage));
    message.message !== undefined && (obj.message = message.message);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceFrontendReportProgress>): ProjectSourceFrontendReportProgress {
    const message = createBaseProjectSourceFrontendReportProgress();
    message.percentage = object.percentage ?? 0;
    message.message = object.message ?? "";
    message.payload = object.payload ?? undefined;
    return message;
  },
};

function createBaseProjectSourceFrontendReportError(): ProjectSourceFrontendReportError {
  return { message: "" };
}

export const ProjectSourceFrontendReportErrorData = {
  encode(message: ProjectSourceFrontendReportError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.payload !== undefined) {
      StructData.encode(StructData.wrap(message.payload), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceFrontendReportError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceFrontendReportError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.payload = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceFrontendReportError {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      payload: isObject(object.payload) ? object.payload : undefined,
    };
  },

  toJSON(message: ProjectSourceFrontendReportError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceFrontendReportError>): ProjectSourceFrontendReportError {
    const message = createBaseProjectSourceFrontendReportError();
    message.message = object.message ?? "";
    message.payload = object.payload ?? undefined;
    return message;
  },
};

function createBaseProjectSourceFrontendReportComplete(): ProjectSourceFrontendReportComplete {
  return {};
}

export const ProjectSourceFrontendReportCompleteData = {
  encode(message: ProjectSourceFrontendReportComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      StructData.encode(StructData.wrap(message.payload), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceFrontendReportComplete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceFrontendReportComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceFrontendReportComplete {
    return { payload: isObject(object.payload) ? object.payload : undefined };
  },

  toJSON(message: ProjectSourceFrontendReportComplete): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceFrontendReportComplete>): ProjectSourceFrontendReportComplete {
    const message = createBaseProjectSourceFrontendReportComplete();
    message.payload = object.payload ?? undefined;
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
