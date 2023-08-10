/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class ProjectAnalysis {
  projectImportId: number;
  repo: string;
  owner: string;
  branch: string;
  token: string;
}

export class ProjectAnalysisReport {
  projectImportId: number;
  progress?: ProjectAnalysisReportProgress | undefined;
  error?: ProjectAnalysisReportError | undefined;
}

export class ProjectAnalysisReportProgress {
  percentage: number;
  message: string;
  payload?: ProjectAnalysisReportPayload;
}

export class ProjectAnalysisReportError {
  message: string;
}

export class ProjectAnalysisReportPayload {
  data: string;
  module: string;
}

function createBaseProjectAnalysis(): ProjectAnalysis {
  return { projectImportId: 0, repo: "", owner: "", branch: "", token: "" };
}

export const ProjectAnalysisData = {
  encode(message: ProjectAnalysis, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectImportId !== 0) {
      writer.uint32(8).int32(message.projectImportId);
    }
    if (message.repo !== "") {
      writer.uint32(18).string(message.repo);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.branch !== "") {
      writer.uint32(34).string(message.branch);
    }
    if (message.token !== "") {
      writer.uint32(42).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectAnalysis {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectAnalysis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectImportId = reader.int32();
          break;
        case 2:
          message.repo = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.branch = reader.string();
          break;
        case 5:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectAnalysis {
    return {
      projectImportId: isSet(object.projectImportId) ? Number(object.projectImportId) : 0,
      repo: isSet(object.repo) ? String(object.repo) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      branch: isSet(object.branch) ? String(object.branch) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: ProjectAnalysis): unknown {
    const obj: any = {};
    message.projectImportId !== undefined && (obj.projectImportId = Math.round(message.projectImportId));
    message.repo !== undefined && (obj.repo = message.repo);
    message.owner !== undefined && (obj.owner = message.owner);
    message.branch !== undefined && (obj.branch = message.branch);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectAnalysis>): ProjectAnalysis {
    const message = createBaseProjectAnalysis();
    message.projectImportId = object.projectImportId ?? 0;
    message.repo = object.repo ?? "";
    message.owner = object.owner ?? "";
    message.branch = object.branch ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseProjectAnalysisReport(): ProjectAnalysisReport {
  return { projectImportId: 0 };
}

export const ProjectAnalysisReportData = {
  encode(message: ProjectAnalysisReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectImportId !== 0) {
      writer.uint32(8).int32(message.projectImportId);
    }
    if (message.progress !== undefined) {
      ProjectAnalysisReportProgressData.encode(message.progress, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ProjectAnalysisReportErrorData.encode(message.error, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectAnalysisReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectAnalysisReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectImportId = reader.int32();
          break;
        case 2:
          message.progress = ProjectAnalysisReportProgressData.decode(reader, reader.uint32());
          break;
        case 3:
          message.error = ProjectAnalysisReportErrorData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectAnalysisReport {
    return {
      projectImportId: isSet(object.projectImportId) ? Number(object.projectImportId) : 0,
      progress: isSet(object.progress) ? ProjectAnalysisReportProgressData.fromJSON(object.progress) : undefined,
      error: isSet(object.error) ? ProjectAnalysisReportErrorData.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ProjectAnalysisReport): unknown {
    const obj: any = {};
    message.projectImportId !== undefined && (obj.projectImportId = Math.round(message.projectImportId));
    message.progress !== undefined &&
      (obj.progress = message.progress ? ProjectAnalysisReportProgressData.toJSON(message.progress) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? ProjectAnalysisReportErrorData.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectAnalysisReport>): ProjectAnalysisReport {
    const message = createBaseProjectAnalysisReport();
    message.projectImportId = object.projectImportId ?? 0;
    message.progress = (object.progress !== undefined && object.progress !== null)
      ? ProjectAnalysisReportProgressData.fromPartial(object.progress)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ProjectAnalysisReportErrorData.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseProjectAnalysisReportProgress(): ProjectAnalysisReportProgress {
  return { percentage: 0, message: "" };
}

export const ProjectAnalysisReportProgressData = {
  encode(message: ProjectAnalysisReportProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.percentage !== 0) {
      writer.uint32(13).float(message.percentage);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.payload !== undefined) {
      ProjectAnalysisReportPayloadData.encode(message.payload, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectAnalysisReportProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectAnalysisReportProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.float();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.payload = ProjectAnalysisReportPayloadData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectAnalysisReportProgress {
    return {
      percentage: isSet(object.percentage) ? Number(object.percentage) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      payload: isSet(object.payload) ? ProjectAnalysisReportPayloadData.fromJSON(object.payload) : undefined,
    };
  },

  toJSON(message: ProjectAnalysisReportProgress): unknown {
    const obj: any = {};
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.message !== undefined && (obj.message = message.message);
    message.payload !== undefined &&
      (obj.payload = message.payload ? ProjectAnalysisReportPayloadData.toJSON(message.payload) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectAnalysisReportProgress>): ProjectAnalysisReportProgress {
    const message = createBaseProjectAnalysisReportProgress();
    message.percentage = object.percentage ?? 0;
    message.message = object.message ?? "";
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? ProjectAnalysisReportPayloadData.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseProjectAnalysisReportError(): ProjectAnalysisReportError {
  return { message: "" };
}

export const ProjectAnalysisReportErrorData = {
  encode(message: ProjectAnalysisReportError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectAnalysisReportError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectAnalysisReportError();
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

  fromJSON(object: any): ProjectAnalysisReportError {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: ProjectAnalysisReportError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectAnalysisReportError>): ProjectAnalysisReportError {
    const message = createBaseProjectAnalysisReportError();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseProjectAnalysisReportPayload(): ProjectAnalysisReportPayload {
  return { data: "", module: "" };
}

export const ProjectAnalysisReportPayloadData = {
  encode(message: ProjectAnalysisReportPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.module !== "") {
      writer.uint32(18).string(message.module);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectAnalysisReportPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectAnalysisReportPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.module = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectAnalysisReportPayload {
    return {
      data: isSet(object.data) ? String(object.data) : "",
      module: isSet(object.module) ? String(object.module) : "",
    };
  },

  toJSON(message: ProjectAnalysisReportPayload): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.module !== undefined && (obj.module = message.module);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectAnalysisReportPayload>): ProjectAnalysisReportPayload {
    const message = createBaseProjectAnalysisReportPayload();
    message.data = object.data ?? "";
    message.module = object.module ?? "";
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
