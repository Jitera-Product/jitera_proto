/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export class ProjectGenerateReport {
  projectGenerateQueueId: number;
  projectId: number;
  progress?: ProjectGenerateReportProgress | undefined;
  error?: ProjectGenerateReportError | undefined;
}

export class ProjectGenerateReportProgress {
  message: string;
}

export class ProjectGenerateReportError {
  message: string;
}

export class ProjectGenerateProgress {
  projectGenerateQueueId: number;
  statusKey: string;
  /** Unix time in seconds */
  eventTimestamp: number;
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
      ProjectGenerateReportProgressData.encode(message.progress, writer.uint32(26).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ProjectGenerateReportErrorData.encode(message.error, writer.uint32(34).fork()).ldelim();
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
        case 3:
          message.progress = ProjectGenerateReportProgressData.decode(reader, reader.uint32());
          break;
        case 4:
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
  return { message: "" };
}

export const ProjectGenerateReportProgressData = {
  encode(message: ProjectGenerateReportProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
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
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: ProjectGenerateReportProgress): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectGenerateReportProgress>): ProjectGenerateReportProgress {
    const message = createBaseProjectGenerateReportProgress();
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

function createBaseProjectGenerateProgress(): ProjectGenerateProgress {
  return { projectGenerateQueueId: 0, statusKey: "", eventTimestamp: 0 };
}

export const ProjectGenerateProgressData = {
  encode(message: ProjectGenerateProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.statusKey !== "") {
      writer.uint32(18).string(message.statusKey);
    }
    if (message.eventTimestamp !== 0) {
      writer.uint32(24).int64(message.eventTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectGenerateProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectGenerateProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.statusKey = reader.string();
          break;
        case 3:
          message.eventTimestamp = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectGenerateProgress {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      statusKey: isSet(object.statusKey) ? String(object.statusKey) : "",
      eventTimestamp: isSet(object.eventTimestamp) ? Number(object.eventTimestamp) : 0,
    };
  },

  toJSON(message: ProjectGenerateProgress): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.statusKey !== undefined && (obj.statusKey = message.statusKey);
    message.eventTimestamp !== undefined && (obj.eventTimestamp = Math.round(message.eventTimestamp));
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectGenerateProgress>): ProjectGenerateProgress {
    const message = createBaseProjectGenerateProgress();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.statusKey = object.statusKey ?? "";
    message.eventTimestamp = object.eventTimestamp ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
