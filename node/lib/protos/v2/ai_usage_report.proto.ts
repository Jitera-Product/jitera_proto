/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { StructData } from "../google/protobuf/struct.proto";

export class AIUsageReport {
  projectId: number;
  metadata?: { [key: string]: any };
  tags: string[];
  provider: string;
  detailUsages: AIUsageReportDetailUsage[];
  model: string;
  status: AIUsageReportStatus;
}

export enum AIUsageReportType {
  input = 0,
  output = 1,
  UNRECOGNIZED = -1,
}

export function aIUsageReportTypeFromJSON(object: any): AIUsageReportType {
  switch (object) {
    case 0:
    case "input":
      return AIUsageReportType.input;
    case 1:
    case "output":
      return AIUsageReportType.output;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AIUsageReportType.UNRECOGNIZED;
  }
}

export function aIUsageReportTypeToJSON(object: AIUsageReportType): string {
  switch (object) {
    case AIUsageReportType.input:
      return "input";
    case AIUsageReportType.output:
      return "output";
    case AIUsageReportType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum AIUsageReportStatus {
  success = 0,
  failed = 1,
  UNRECOGNIZED = -1,
}

export function aIUsageReportStatusFromJSON(object: any): AIUsageReportStatus {
  switch (object) {
    case 0:
    case "success":
      return AIUsageReportStatus.success;
    case 1:
    case "failed":
      return AIUsageReportStatus.failed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AIUsageReportStatus.UNRECOGNIZED;
  }
}

export function aIUsageReportStatusToJSON(object: AIUsageReportStatus): string {
  switch (object) {
    case AIUsageReportStatus.success:
      return "success";
    case AIUsageReportStatus.failed:
      return "failed";
    case AIUsageReportStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class AIUsageReportDetailUsage {
  type: AIUsageReportType;
  total: number;
}

function createBaseAIUsageReport(): AIUsageReport {
  return { projectId: 0, tags: [], provider: "", detailUsages: [], model: "", status: 0 };
}

export const AIUsageReportData = {
  encode(message: AIUsageReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.metadata !== undefined) {
      StructData.encode(StructData.wrap(message.metadata), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!);
    }
    if (message.provider !== "") {
      writer.uint32(34).string(message.provider);
    }
    for (const v of message.detailUsages) {
      AIUsageReportDetailUsageData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.model !== "") {
      writer.uint32(50).string(message.model);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AIUsageReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAIUsageReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.metadata = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tags.push(reader.string());
          break;
        case 4:
          message.provider = reader.string();
          break;
        case 5:
          message.detailUsages.push(AIUsageReportDetailUsageData.decode(reader, reader.uint32()));
          break;
        case 6:
          message.model = reader.string();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AIUsageReport {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      provider: isSet(object.provider) ? String(object.provider) : "",
      detailUsages: Array.isArray(object?.detailUsages)
        ? object.detailUsages.map((e: any) => AIUsageReportDetailUsageData.fromJSON(e))
        : [],
      model: isSet(object.model) ? String(object.model) : "",
      status: isSet(object.status) ? aIUsageReportStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: AIUsageReport): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.detailUsages) {
      obj.detailUsages = message.detailUsages.map((e) => e ? AIUsageReportDetailUsageData.toJSON(e) : undefined);
    } else {
      obj.detailUsages = [];
    }
    message.model !== undefined && (obj.model = message.model);
    message.status !== undefined && (obj.status = aIUsageReportStatusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<AIUsageReport>): AIUsageReport {
    const message = createBaseAIUsageReport();
    message.projectId = object.projectId ?? 0;
    message.metadata = object.metadata ?? undefined;
    message.tags = object.tags?.map((e) => e) || [];
    message.provider = object.provider ?? "";
    message.detailUsages = object.detailUsages?.map((e) => AIUsageReportDetailUsageData.fromPartial(e)) || [];
    message.model = object.model ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseAIUsageReportDetailUsage(): AIUsageReportDetailUsage {
  return { type: 0, total: 0 };
}

export const AIUsageReportDetailUsageData = {
  encode(message: AIUsageReportDetailUsage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.total !== 0) {
      writer.uint32(24).int32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AIUsageReportDetailUsage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAIUsageReportDetailUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.total = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AIUsageReportDetailUsage {
    return {
      type: isSet(object.type) ? aIUsageReportTypeFromJSON(object.type) : 0,
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: AIUsageReportDetailUsage): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = aIUsageReportTypeToJSON(message.type));
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  fromPartial(object: DeepPartial<AIUsageReportDetailUsage>): AIUsageReportDetailUsage {
    const message = createBaseAIUsageReportDetailUsage();
    message.type = object.type ?? 0;
    message.total = object.total ?? 0;
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
