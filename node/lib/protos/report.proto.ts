/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class Report {
  projectName: string;
  projectId: number;
  progress?: ReportProgress | undefined;
  complete?: ReportComplete | undefined;
  error?: ReportError | undefined;
  projectExport?: ReportProjectExport | undefined;
  projectPreview?: ReportProjectPreview | undefined;
}

export class ReportProgress {
  percentage: number;
  message: string;
}

export class ReportComplete {
  path: string;
}

export class ReportProjectExport {
  id: number;
}

export class ReportProjectPreview {
  id: number;
}

export class ReportError {
  message: string;
}

function createBaseReport(): Report {
  return { projectName: "", projectId: 0 };
}

export const ReportData = {
  encode(message: Report, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectName !== "") {
      writer.uint32(10).string(message.projectName);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.progress !== undefined) {
      ReportProgressData.encode(message.progress, writer.uint32(26).fork()).ldelim();
    }
    if (message.complete !== undefined) {
      ReportCompleteData.encode(message.complete, writer.uint32(34).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ReportErrorData.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    if (message.projectExport !== undefined) {
      ReportProjectExportData.encode(message.projectExport, writer.uint32(50).fork()).ldelim();
    }
    if (message.projectPreview !== undefined) {
      ReportProjectPreviewData.encode(message.projectPreview, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Report {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectName = reader.string();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.progress = ReportProgressData.decode(reader, reader.uint32());
          break;
        case 4:
          message.complete = ReportCompleteData.decode(reader, reader.uint32());
          break;
        case 5:
          message.error = ReportErrorData.decode(reader, reader.uint32());
          break;
        case 6:
          message.projectExport = ReportProjectExportData.decode(reader, reader.uint32());
          break;
        case 7:
          message.projectPreview = ReportProjectPreviewData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Report {
    return {
      projectName: isSet(object.projectName) ? String(object.projectName) : "",
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      progress: isSet(object.progress) ? ReportProgressData.fromJSON(object.progress) : undefined,
      complete: isSet(object.complete) ? ReportCompleteData.fromJSON(object.complete) : undefined,
      error: isSet(object.error) ? ReportErrorData.fromJSON(object.error) : undefined,
      projectExport: isSet(object.projectExport) ? ReportProjectExportData.fromJSON(object.projectExport) : undefined,
      projectPreview: isSet(object.projectPreview)
        ? ReportProjectPreviewData.fromJSON(object.projectPreview)
        : undefined,
    };
  },

  toJSON(message: Report): unknown {
    const obj: any = {};
    message.projectName !== undefined && (obj.projectName = message.projectName);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.progress !== undefined &&
      (obj.progress = message.progress ? ReportProgressData.toJSON(message.progress) : undefined);
    message.complete !== undefined &&
      (obj.complete = message.complete ? ReportCompleteData.toJSON(message.complete) : undefined);
    message.error !== undefined && (obj.error = message.error ? ReportErrorData.toJSON(message.error) : undefined);
    message.projectExport !== undefined &&
      (obj.projectExport = message.projectExport ? ReportProjectExportData.toJSON(message.projectExport) : undefined);
    message.projectPreview !== undefined &&
      (obj.projectPreview = message.projectPreview
        ? ReportProjectPreviewData.toJSON(message.projectPreview)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Report>): Report {
    const message = createBaseReport();
    message.projectName = object.projectName ?? "";
    message.projectId = object.projectId ?? 0;
    message.progress = (object.progress !== undefined && object.progress !== null)
      ? ReportProgressData.fromPartial(object.progress)
      : undefined;
    message.complete = (object.complete !== undefined && object.complete !== null)
      ? ReportCompleteData.fromPartial(object.complete)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ReportErrorData.fromPartial(object.error)
      : undefined;
    message.projectExport = (object.projectExport !== undefined && object.projectExport !== null)
      ? ReportProjectExportData.fromPartial(object.projectExport)
      : undefined;
    message.projectPreview = (object.projectPreview !== undefined && object.projectPreview !== null)
      ? ReportProjectPreviewData.fromPartial(object.projectPreview)
      : undefined;
    return message;
  },
};

function createBaseReportProgress(): ReportProgress {
  return { percentage: 0, message: "" };
}

export const ReportProgressData = {
  encode(message: ReportProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.percentage !== 0) {
      writer.uint32(13).float(message.percentage);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportProgress();
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

  fromJSON(object: any): ReportProgress {
    return {
      percentage: isSet(object.percentage) ? Number(object.percentage) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: ReportProgress): unknown {
    const obj: any = {};
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<ReportProgress>): ReportProgress {
    const message = createBaseReportProgress();
    message.percentage = object.percentage ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseReportComplete(): ReportComplete {
  return { path: "" };
}

export const ReportCompleteData = {
  encode(message: ReportComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportComplete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReportComplete {
    return { path: isSet(object.path) ? String(object.path) : "" };
  },

  toJSON(message: ReportComplete): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial(object: DeepPartial<ReportComplete>): ReportComplete {
    const message = createBaseReportComplete();
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseReportProjectExport(): ReportProjectExport {
  return { id: 0 };
}

export const ReportProjectExportData = {
  encode(message: ReportProjectExport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportProjectExport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportProjectExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReportProjectExport {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: ReportProjectExport): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial(object: DeepPartial<ReportProjectExport>): ReportProjectExport {
    const message = createBaseReportProjectExport();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseReportProjectPreview(): ReportProjectPreview {
  return { id: 0 };
}

export const ReportProjectPreviewData = {
  encode(message: ReportProjectPreview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportProjectPreview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportProjectPreview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReportProjectPreview {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: ReportProjectPreview): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial(object: DeepPartial<ReportProjectPreview>): ReportProjectPreview {
    const message = createBaseReportProjectPreview();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseReportError(): ReportError {
  return { message: "" };
}

export const ReportErrorData = {
  encode(message: ReportError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportError();
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

  fromJSON(object: any): ReportError {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: ReportError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<ReportError>): ReportError {
    const message = createBaseReportError();
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
