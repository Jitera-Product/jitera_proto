/* eslint-disable */
import _m0 from "protobufjs/minimal";

export class GenerateDynamicDocReport {
  projectGenerateQueueId: number;
  status: GenerateDynamicDocReportStatus;
  errorMessage: string;
  documentUuids: string[];
}

export enum GenerateDynamicDocReportStatus {
  STARTED = 0,
  COMPLETED = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function generateDynamicDocReportStatusFromJSON(object: any): GenerateDynamicDocReportStatus {
  switch (object) {
    case 0:
    case "STARTED":
      return GenerateDynamicDocReportStatus.STARTED;
    case 1:
    case "COMPLETED":
      return GenerateDynamicDocReportStatus.COMPLETED;
    case 2:
    case "FAILED":
      return GenerateDynamicDocReportStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GenerateDynamicDocReportStatus.UNRECOGNIZED;
  }
}

export function generateDynamicDocReportStatusToJSON(object: GenerateDynamicDocReportStatus): string {
  switch (object) {
    case GenerateDynamicDocReportStatus.STARTED:
      return "STARTED";
    case GenerateDynamicDocReportStatus.COMPLETED:
      return "COMPLETED";
    case GenerateDynamicDocReportStatus.FAILED:
      return "FAILED";
    case GenerateDynamicDocReportStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseGenerateDynamicDocReport(): GenerateDynamicDocReport {
  return { projectGenerateQueueId: 0, status: 0, errorMessage: "", documentUuids: [] };
}

export const GenerateDynamicDocReportData = {
  encode(message: GenerateDynamicDocReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.errorMessage !== "") {
      writer.uint32(26).string(message.errorMessage);
    }
    for (const v of message.documentUuids) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDynamicDocReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDynamicDocReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.errorMessage = reader.string();
          break;
        case 4:
          message.documentUuids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateDynamicDocReport {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      status: isSet(object.status) ? generateDynamicDocReportStatusFromJSON(object.status) : 0,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
      documentUuids: Array.isArray(object?.documentUuids) ? object.documentUuids.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: GenerateDynamicDocReport): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.status !== undefined && (obj.status = generateDynamicDocReportStatusToJSON(message.status));
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    if (message.documentUuids) {
      obj.documentUuids = message.documentUuids.map((e) => e);
    } else {
      obj.documentUuids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenerateDynamicDocReport>): GenerateDynamicDocReport {
    const message = createBaseGenerateDynamicDocReport();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.status = object.status ?? 0;
    message.errorMessage = object.errorMessage ?? "";
    message.documentUuids = object.documentUuids?.map((e) => e) || [];
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
