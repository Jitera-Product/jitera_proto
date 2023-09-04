/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class ProjectGenerateReport {
  projectGenerateQueueId: number;
  projectId: number;
  progress?: ProjectGenerateReportProgress | undefined;
  error?: ProjectGenerateReportError | undefined;
}

export class ProjectGenerateReportProgress {
  percentage: number;
  message: string;
}

export class ProjectGenerateReportError {
  message: string;
}

function createBaseProjectGenerateReport(): ProjectGenerateReport {
  return { projectGenerateQueueId: 0, projectId: 0 };
}

export const ProjectGenerateReportData = {
  encode(message: ProjectGenerateReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.progress !== undefined) {
      ProjectGenerateReportProgressData.encode(message.progress, writer.uint32(34).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ProjectGenerateReportErrorData.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectGenerateReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectGenerateReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 4:
          message.progress = ProjectGenerateReportProgressData.decode(reader, reader.uint32());
          break;
        case 5:
          message.error = ProjectGenerateReportErrorData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectGenerateReport {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      progress: isSet(object.progress) ? ProjectGenerateReportProgressData.fromJSON(object.progress) : undefined,
      error: isSet(object.error) ? ProjectGenerateReportErrorData.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ProjectGenerateReport): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.progress !== undefined &&
      (obj.progress = message.progress ? ProjectGenerateReportProgressData.toJSON(message.progress) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? ProjectGenerateReportErrorData.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectGenerateReport>): ProjectGenerateReport {
    const message = createBaseProjectGenerateReport();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.progress = (object.progress !== undefined && object.progress !== null)
      ? ProjectGenerateReportProgressData.fromPartial(object.progress)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ProjectGenerateReportErrorData.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseProjectGenerateReportProgress(): ProjectGenerateReportProgress {
  return { percentage: 0, message: "" };
}

export const ProjectGenerateReportProgressData = {
  encode(message: ProjectGenerateReportProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.percentage !== 0) {
      writer.uint32(13).float(message.percentage);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectGenerateReportProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectGenerateReportProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.float();
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

  fromJSON(object: any): ProjectGenerateReportProgress {
    return {
      percentage: isSet(object.percentage) ? Number(object.percentage) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: ProjectGenerateReportProgress): unknown {
    const obj: any = {};
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectGenerateReportProgress>): ProjectGenerateReportProgress {
    const message = createBaseProjectGenerateReportProgress();
    message.percentage = object.percentage ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseProjectGenerateReportError(): ProjectGenerateReportError {
  return { message: "" };
}

export const ProjectGenerateReportErrorData = {
  encode(message: ProjectGenerateReportError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectGenerateReportError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectGenerateReportError();
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

  fromJSON(object: any): ProjectGenerateReportError {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: ProjectGenerateReportError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectGenerateReportError>): ProjectGenerateReportError {
    const message = createBaseProjectGenerateReportError();
    message.message = object.message ?? "";
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
