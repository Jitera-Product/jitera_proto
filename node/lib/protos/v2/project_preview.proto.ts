/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Git, GitData, ProjectSource, ProjectSourceData } from "./project_source.proto";

export class ProjectPreviewRequest {
  projectPreviewId: number;
  projectId: number;
  projectSource?: ProjectSource;
  git?: Git;
  logs: ProjectPreviewRequestLog[];
}

export class ProjectPreviewRequestLog {
  command: string;
  description: string;
  content: string;
}

export class ProjectPreviewResponse {
  projectPreviewId: number;
  projectId: number;
  status: ProjectPreviewResponseStatus;
  tokenUsage: number;
}

export enum ProjectPreviewResponseStatus {
  SUCCEEDED = 0,
  INPROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function projectPreviewResponseStatusFromJSON(object: any): ProjectPreviewResponseStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return ProjectPreviewResponseStatus.SUCCEEDED;
    case 1:
    case "INPROGRESS":
      return ProjectPreviewResponseStatus.INPROGRESS;
    case 2:
    case "FAILED":
      return ProjectPreviewResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectPreviewResponseStatus.UNRECOGNIZED;
  }
}

export function projectPreviewResponseStatusToJSON(object: ProjectPreviewResponseStatus): string {
  switch (object) {
    case ProjectPreviewResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case ProjectPreviewResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case ProjectPreviewResponseStatus.FAILED:
      return "FAILED";
    case ProjectPreviewResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class DeployGenerateScriptItem {
  command: string;
  description: string;
}

export class ProjectPreviewDeployGenerateRequest {
  projectPreviewId: number;
  projectId: number;
  projectSource?: ProjectSource;
  git?: Git;
  previousScripts: DeployGenerateScriptItem[];
}

export class ProjectPreviewDeployGenerateResponse {
  projectPreviewId: number;
  projectId: number;
  status: ProjectPreviewDeployGenerateResponseStatus;
  tokenUsage: number;
  scripts: DeployGenerateScriptItem[];
  baseImageName: string;
}

export enum ProjectPreviewDeployGenerateResponseStatus {
  SUCCEEDED = 0,
  INPROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function projectPreviewDeployGenerateResponseStatusFromJSON(
  object: any,
): ProjectPreviewDeployGenerateResponseStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return ProjectPreviewDeployGenerateResponseStatus.SUCCEEDED;
    case 1:
    case "INPROGRESS":
      return ProjectPreviewDeployGenerateResponseStatus.INPROGRESS;
    case 2:
    case "FAILED":
      return ProjectPreviewDeployGenerateResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectPreviewDeployGenerateResponseStatus.UNRECOGNIZED;
  }
}

export function projectPreviewDeployGenerateResponseStatusToJSON(
  object: ProjectPreviewDeployGenerateResponseStatus,
): string {
  switch (object) {
    case ProjectPreviewDeployGenerateResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case ProjectPreviewDeployGenerateResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case ProjectPreviewDeployGenerateResponseStatus.FAILED:
      return "FAILED";
    case ProjectPreviewDeployGenerateResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseProjectPreviewRequest(): ProjectPreviewRequest {
  return { projectPreviewId: 0, projectId: 0, logs: [] };
}

export const ProjectPreviewRequestData = {
  encode(message: ProjectPreviewRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPreviewId !== 0) {
      writer.uint32(8).int32(message.projectPreviewId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(message.projectSource, writer.uint32(26).fork()).ldelim();
    }
    if (message.git !== undefined) {
      GitData.encode(message.git, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.logs) {
      ProjectPreviewRequestLogData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPreviewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPreviewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPreviewId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.projectSource = ProjectSourceData.decode(reader, reader.uint32());
          break;
        case 4:
          message.git = GitData.decode(reader, reader.uint32());
          break;
        case 5:
          message.logs.push(ProjectPreviewRequestLogData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPreviewRequest {
    return {
      projectPreviewId: isSet(object.projectPreviewId) ? Number(object.projectPreviewId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectSource: isSet(object.projectSource) ? ProjectSourceData.fromJSON(object.projectSource) : undefined,
      git: isSet(object.git) ? GitData.fromJSON(object.git) : undefined,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => ProjectPreviewRequestLogData.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProjectPreviewRequest): unknown {
    const obj: any = {};
    message.projectPreviewId !== undefined && (obj.projectPreviewId = Math.round(message.projectPreviewId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource ? ProjectSourceData.toJSON(message.projectSource) : undefined);
    message.git !== undefined && (obj.git = message.git ? GitData.toJSON(message.git) : undefined);
    if (message.logs) {
      obj.logs = message.logs.map((e) => e ? ProjectPreviewRequestLogData.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectPreviewRequest>): ProjectPreviewRequest {
    const message = createBaseProjectPreviewRequest();
    message.projectPreviewId = object.projectPreviewId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.projectSource = (object.projectSource !== undefined && object.projectSource !== null)
      ? ProjectSourceData.fromPartial(object.projectSource)
      : undefined;
    message.git = (object.git !== undefined && object.git !== null) ? GitData.fromPartial(object.git) : undefined;
    message.logs = object.logs?.map((e) => ProjectPreviewRequestLogData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectPreviewRequestLog(): ProjectPreviewRequestLog {
  return { command: "", description: "", content: "" };
}

export const ProjectPreviewRequestLogData = {
  encode(message: ProjectPreviewRequestLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.command !== "") {
      writer.uint32(10).string(message.command);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPreviewRequestLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPreviewRequestLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.command = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPreviewRequestLog {
    return {
      command: isSet(object.command) ? String(object.command) : "",
      description: isSet(object.description) ? String(object.description) : "",
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: ProjectPreviewRequestLog): unknown {
    const obj: any = {};
    message.command !== undefined && (obj.command = message.command);
    message.description !== undefined && (obj.description = message.description);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectPreviewRequestLog>): ProjectPreviewRequestLog {
    const message = createBaseProjectPreviewRequestLog();
    message.command = object.command ?? "";
    message.description = object.description ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseProjectPreviewResponse(): ProjectPreviewResponse {
  return { projectPreviewId: 0, projectId: 0, status: 0, tokenUsage: 0 };
}

export const ProjectPreviewResponseData = {
  encode(message: ProjectPreviewResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPreviewId !== 0) {
      writer.uint32(8).int32(message.projectPreviewId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokenUsage !== 0) {
      writer.uint32(40).int32(message.tokenUsage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPreviewResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPreviewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPreviewId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.tokenUsage = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPreviewResponse {
    return {
      projectPreviewId: isSet(object.projectPreviewId) ? Number(object.projectPreviewId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      status: isSet(object.status) ? projectPreviewResponseStatusFromJSON(object.status) : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
    };
  },

  toJSON(message: ProjectPreviewResponse): unknown {
    const obj: any = {};
    message.projectPreviewId !== undefined && (obj.projectPreviewId = Math.round(message.projectPreviewId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.status !== undefined && (obj.status = projectPreviewResponseStatusToJSON(message.status));
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectPreviewResponse>): ProjectPreviewResponse {
    const message = createBaseProjectPreviewResponse();
    message.projectPreviewId = object.projectPreviewId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.status = object.status ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    return message;
  },
};

function createBaseDeployGenerateScriptItem(): DeployGenerateScriptItem {
  return { command: "", description: "" };
}

export const DeployGenerateScriptItemData = {
  encode(message: DeployGenerateScriptItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.command !== "") {
      writer.uint32(10).string(message.command);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeployGenerateScriptItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeployGenerateScriptItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.command = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeployGenerateScriptItem {
    return {
      command: isSet(object.command) ? String(object.command) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: DeployGenerateScriptItem): unknown {
    const obj: any = {};
    message.command !== undefined && (obj.command = message.command);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<DeployGenerateScriptItem>): DeployGenerateScriptItem {
    const message = createBaseDeployGenerateScriptItem();
    message.command = object.command ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseProjectPreviewDeployGenerateRequest(): ProjectPreviewDeployGenerateRequest {
  return { projectPreviewId: 0, projectId: 0, previousScripts: [] };
}

export const ProjectPreviewDeployGenerateRequestData = {
  encode(message: ProjectPreviewDeployGenerateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPreviewId !== 0) {
      writer.uint32(8).int32(message.projectPreviewId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(message.projectSource, writer.uint32(26).fork()).ldelim();
    }
    if (message.git !== undefined) {
      GitData.encode(message.git, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.previousScripts) {
      DeployGenerateScriptItemData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPreviewDeployGenerateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPreviewDeployGenerateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPreviewId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.projectSource = ProjectSourceData.decode(reader, reader.uint32());
          break;
        case 4:
          message.git = GitData.decode(reader, reader.uint32());
          break;
        case 5:
          message.previousScripts.push(DeployGenerateScriptItemData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPreviewDeployGenerateRequest {
    return {
      projectPreviewId: isSet(object.projectPreviewId) ? Number(object.projectPreviewId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectSource: isSet(object.projectSource) ? ProjectSourceData.fromJSON(object.projectSource) : undefined,
      git: isSet(object.git) ? GitData.fromJSON(object.git) : undefined,
      previousScripts: Array.isArray(object?.previousScripts)
        ? object.previousScripts.map((e: any) => DeployGenerateScriptItemData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectPreviewDeployGenerateRequest): unknown {
    const obj: any = {};
    message.projectPreviewId !== undefined && (obj.projectPreviewId = Math.round(message.projectPreviewId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource ? ProjectSourceData.toJSON(message.projectSource) : undefined);
    message.git !== undefined && (obj.git = message.git ? GitData.toJSON(message.git) : undefined);
    if (message.previousScripts) {
      obj.previousScripts = message.previousScripts.map((e) => e ? DeployGenerateScriptItemData.toJSON(e) : undefined);
    } else {
      obj.previousScripts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectPreviewDeployGenerateRequest>): ProjectPreviewDeployGenerateRequest {
    const message = createBaseProjectPreviewDeployGenerateRequest();
    message.projectPreviewId = object.projectPreviewId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.projectSource = (object.projectSource !== undefined && object.projectSource !== null)
      ? ProjectSourceData.fromPartial(object.projectSource)
      : undefined;
    message.git = (object.git !== undefined && object.git !== null) ? GitData.fromPartial(object.git) : undefined;
    message.previousScripts = object.previousScripts?.map((e) => DeployGenerateScriptItemData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectPreviewDeployGenerateResponse(): ProjectPreviewDeployGenerateResponse {
  return { projectPreviewId: 0, projectId: 0, status: 0, tokenUsage: 0, scripts: [], baseImageName: "" };
}

export const ProjectPreviewDeployGenerateResponseData = {
  encode(message: ProjectPreviewDeployGenerateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPreviewId !== 0) {
      writer.uint32(8).int32(message.projectPreviewId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokenUsage !== 0) {
      writer.uint32(40).int32(message.tokenUsage);
    }
    for (const v of message.scripts) {
      DeployGenerateScriptItemData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.baseImageName !== "") {
      writer.uint32(58).string(message.baseImageName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPreviewDeployGenerateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPreviewDeployGenerateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPreviewId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.tokenUsage = reader.int32();
          break;
        case 6:
          message.scripts.push(DeployGenerateScriptItemData.decode(reader, reader.uint32()));
          break;
        case 7:
          message.baseImageName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPreviewDeployGenerateResponse {
    return {
      projectPreviewId: isSet(object.projectPreviewId) ? Number(object.projectPreviewId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      status: isSet(object.status) ? projectPreviewDeployGenerateResponseStatusFromJSON(object.status) : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
      scripts: Array.isArray(object?.scripts)
        ? object.scripts.map((e: any) => DeployGenerateScriptItemData.fromJSON(e))
        : [],
      baseImageName: isSet(object.baseImageName) ? String(object.baseImageName) : "",
    };
  },

  toJSON(message: ProjectPreviewDeployGenerateResponse): unknown {
    const obj: any = {};
    message.projectPreviewId !== undefined && (obj.projectPreviewId = Math.round(message.projectPreviewId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.status !== undefined && (obj.status = projectPreviewDeployGenerateResponseStatusToJSON(message.status));
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    if (message.scripts) {
      obj.scripts = message.scripts.map((e) => e ? DeployGenerateScriptItemData.toJSON(e) : undefined);
    } else {
      obj.scripts = [];
    }
    message.baseImageName !== undefined && (obj.baseImageName = message.baseImageName);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectPreviewDeployGenerateResponse>): ProjectPreviewDeployGenerateResponse {
    const message = createBaseProjectPreviewDeployGenerateResponse();
    message.projectPreviewId = object.projectPreviewId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.status = object.status ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    message.scripts = object.scripts?.map((e) => DeployGenerateScriptItemData.fromPartial(e)) || [];
    message.baseImageName = object.baseImageName ?? "";
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
