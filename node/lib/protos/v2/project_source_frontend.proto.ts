/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
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
  html?: FrontendUIChangesHtmlPageInfo | undefined;
  figma?: FrontendUIChangesFigmaInfo | undefined;
}

export class FrontendUIChangesHtmlPage {
  id: number;
  html: string;
}

export class FrontendUIChangesFigmaPage {
  nodeId: string;
}

export class FrontendUIChangesHtmlPageInfo {
  pages: FrontendUIChangesHtmlPage[];
}

export class FrontendUIChangesFigmaInfo {
  accessToken: string;
  fileKey: string;
  pages: FrontendUIChangesFigmaPage[];
}

export class FrontendUIChangesResponse {
  projectGenerateQueueId: number;
  projectId: number;
  module: FrontendUIChangesResponseModule;
  status: FrontendUIChangesResponseStatus;
  tokenUsage: number;
  errorMessage: string;
}

export enum FrontendUIChangesResponseModule {
  FIGMA_TO_CODE = 0,
  HTML_TO_CODE = 1,
  UNRECOGNIZED = -1,
}

export function frontendUIChangesResponseModuleFromJSON(object: any): FrontendUIChangesResponseModule {
  switch (object) {
    case 0:
    case "FIGMA_TO_CODE":
      return FrontendUIChangesResponseModule.FIGMA_TO_CODE;
    case 1:
    case "HTML_TO_CODE":
      return FrontendUIChangesResponseModule.HTML_TO_CODE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FrontendUIChangesResponseModule.UNRECOGNIZED;
  }
}

export function frontendUIChangesResponseModuleToJSON(object: FrontendUIChangesResponseModule): string {
  switch (object) {
    case FrontendUIChangesResponseModule.FIGMA_TO_CODE:
      return "FIGMA_TO_CODE";
    case FrontendUIChangesResponseModule.HTML_TO_CODE:
      return "HTML_TO_CODE";
    case FrontendUIChangesResponseModule.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FrontendUIChangesResponseStatus {
  STARTED = 0,
  INPROGRESS = 1,
  SUCCEEDED = 2,
  FAILED = 3,
  UNRECOGNIZED = -1,
}

export function frontendUIChangesResponseStatusFromJSON(object: any): FrontendUIChangesResponseStatus {
  switch (object) {
    case 0:
    case "STARTED":
      return FrontendUIChangesResponseStatus.STARTED;
    case 1:
    case "INPROGRESS":
      return FrontendUIChangesResponseStatus.INPROGRESS;
    case 2:
    case "SUCCEEDED":
      return FrontendUIChangesResponseStatus.SUCCEEDED;
    case 3:
    case "FAILED":
      return FrontendUIChangesResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FrontendUIChangesResponseStatus.UNRECOGNIZED;
  }
}

export function frontendUIChangesResponseStatusToJSON(object: FrontendUIChangesResponseStatus): string {
  switch (object) {
    case FrontendUIChangesResponseStatus.STARTED:
      return "STARTED";
    case FrontendUIChangesResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case FrontendUIChangesResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case FrontendUIChangesResponseStatus.FAILED:
      return "FAILED";
    case FrontendUIChangesResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseFrontendUIChanges(): FrontendUIChanges {
  return { projectGenerateQueueId: 0, tables: [], relations: [] };
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
      FrontendUIChangesHtmlPageInfoData.encode(message.html, writer.uint32(74).fork()).ldelim();
    }
    if (message.figma !== undefined) {
      FrontendUIChangesFigmaInfoData.encode(message.figma, writer.uint32(82).fork()).ldelim();
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
          message.html = FrontendUIChangesHtmlPageInfoData.decode(reader, reader.uint32());
          break;
        case 10:
          message.figma = FrontendUIChangesFigmaInfoData.decode(reader, reader.uint32());
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
      html: isSet(object.html) ? FrontendUIChangesHtmlPageInfoData.fromJSON(object.html) : undefined,
      figma: isSet(object.figma) ? FrontendUIChangesFigmaInfoData.fromJSON(object.figma) : undefined,
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
      (obj.html = message.html ? FrontendUIChangesHtmlPageInfoData.toJSON(message.html) : undefined);
    message.figma !== undefined &&
      (obj.figma = message.figma ? FrontendUIChangesFigmaInfoData.toJSON(message.figma) : undefined);
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
      ? FrontendUIChangesHtmlPageInfoData.fromPartial(object.html)
      : undefined;
    message.figma = (object.figma !== undefined && object.figma !== null)
      ? FrontendUIChangesFigmaInfoData.fromPartial(object.figma)
      : undefined;
    return message;
  },
};

function createBaseFrontendUIChangesHtmlPage(): FrontendUIChangesHtmlPage {
  return { id: 0, html: "" };
}

export const FrontendUIChangesHtmlPageData = {
  encode(message: FrontendUIChangesHtmlPage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.html !== "") {
      writer.uint32(18).string(message.html);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FrontendUIChangesHtmlPage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrontendUIChangesHtmlPage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.html = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FrontendUIChangesHtmlPage {
    return { id: isSet(object.id) ? Number(object.id) : 0, html: isSet(object.html) ? String(object.html) : "" };
  },

  toJSON(message: FrontendUIChangesHtmlPage): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.html !== undefined && (obj.html = message.html);
    return obj;
  },

  fromPartial(object: DeepPartial<FrontendUIChangesHtmlPage>): FrontendUIChangesHtmlPage {
    const message = createBaseFrontendUIChangesHtmlPage();
    message.id = object.id ?? 0;
    message.html = object.html ?? "";
    return message;
  },
};

function createBaseFrontendUIChangesFigmaPage(): FrontendUIChangesFigmaPage {
  return { nodeId: "" };
}

export const FrontendUIChangesFigmaPageData = {
  encode(message: FrontendUIChangesFigmaPage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FrontendUIChangesFigmaPage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrontendUIChangesFigmaPage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FrontendUIChangesFigmaPage {
    return { nodeId: isSet(object.nodeId) ? String(object.nodeId) : "" };
  },

  toJSON(message: FrontendUIChangesFigmaPage): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },

  fromPartial(object: DeepPartial<FrontendUIChangesFigmaPage>): FrontendUIChangesFigmaPage {
    const message = createBaseFrontendUIChangesFigmaPage();
    message.nodeId = object.nodeId ?? "";
    return message;
  },
};

function createBaseFrontendUIChangesHtmlPageInfo(): FrontendUIChangesHtmlPageInfo {
  return { pages: [] };
}

export const FrontendUIChangesHtmlPageInfoData = {
  encode(message: FrontendUIChangesHtmlPageInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pages) {
      FrontendUIChangesHtmlPageData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FrontendUIChangesHtmlPageInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrontendUIChangesHtmlPageInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pages.push(FrontendUIChangesHtmlPageData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FrontendUIChangesHtmlPageInfo {
    return {
      pages: Array.isArray(object?.pages)
        ? object.pages.map((e: any) => FrontendUIChangesHtmlPageData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FrontendUIChangesHtmlPageInfo): unknown {
    const obj: any = {};
    if (message.pages) {
      obj.pages = message.pages.map((e) => e ? FrontendUIChangesHtmlPageData.toJSON(e) : undefined);
    } else {
      obj.pages = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FrontendUIChangesHtmlPageInfo>): FrontendUIChangesHtmlPageInfo {
    const message = createBaseFrontendUIChangesHtmlPageInfo();
    message.pages = object.pages?.map((e) => FrontendUIChangesHtmlPageData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFrontendUIChangesFigmaInfo(): FrontendUIChangesFigmaInfo {
  return { accessToken: "", fileKey: "", pages: [] };
}

export const FrontendUIChangesFigmaInfoData = {
  encode(message: FrontendUIChangesFigmaInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.fileKey !== "") {
      writer.uint32(18).string(message.fileKey);
    }
    for (const v of message.pages) {
      FrontendUIChangesFigmaPageData.encode(v!, writer.uint32(26).fork()).ldelim();
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
        case 2:
          message.fileKey = reader.string();
          break;
        case 3:
          message.pages.push(FrontendUIChangesFigmaPageData.decode(reader, reader.uint32()));
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
      fileKey: isSet(object.fileKey) ? String(object.fileKey) : "",
      pages: Array.isArray(object?.pages)
        ? object.pages.map((e: any) => FrontendUIChangesFigmaPageData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FrontendUIChangesFigmaInfo): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.fileKey !== undefined && (obj.fileKey = message.fileKey);
    if (message.pages) {
      obj.pages = message.pages.map((e) => e ? FrontendUIChangesFigmaPageData.toJSON(e) : undefined);
    } else {
      obj.pages = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FrontendUIChangesFigmaInfo>): FrontendUIChangesFigmaInfo {
    const message = createBaseFrontendUIChangesFigmaInfo();
    message.accessToken = object.accessToken ?? "";
    message.fileKey = object.fileKey ?? "";
    message.pages = object.pages?.map((e) => FrontendUIChangesFigmaPageData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFrontendUIChangesResponse(): FrontendUIChangesResponse {
  return { projectGenerateQueueId: 0, projectId: 0, module: 0, status: 0, tokenUsage: 0, errorMessage: "" };
}

export const FrontendUIChangesResponseData = {
  encode(message: FrontendUIChangesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.module !== 0) {
      writer.uint32(24).int32(message.module);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokenUsage !== 0) {
      writer.uint32(40).int32(message.tokenUsage);
    }
    if (message.errorMessage !== "") {
      writer.uint32(58).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FrontendUIChangesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrontendUIChangesResponse();
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
          message.module = reader.int32() as any;
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.tokenUsage = reader.int32();
          break;
        case 7:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FrontendUIChangesResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      module: isSet(object.module) ? frontendUIChangesResponseModuleFromJSON(object.module) : 0,
      status: isSet(object.status) ? frontendUIChangesResponseStatusFromJSON(object.status) : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
    };
  },

  toJSON(message: FrontendUIChangesResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.module !== undefined && (obj.module = frontendUIChangesResponseModuleToJSON(message.module));
    message.status !== undefined && (obj.status = frontendUIChangesResponseStatusToJSON(message.status));
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial(object: DeepPartial<FrontendUIChangesResponse>): FrontendUIChangesResponse {
    const message = createBaseFrontendUIChangesResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.module = object.module ?? 0;
    message.status = object.status ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    message.errorMessage = object.errorMessage ?? "";
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
