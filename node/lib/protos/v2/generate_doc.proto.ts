/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Block, BlockData } from "./block_core.proto";

export class GenerateDocResponse {
  projectGenerateQueueId: number;
  module: GenerateDocResponseModule;
  status: GenerateDocResponseStatus;
  blocks: Block[];
  errorMessage: string;
  totalChunks: number;
  items: string[];
}

export enum GenerateDocResponseModule {
  CODE_TO_NATURAL_LANGUAGE = 0,
  UNRECOGNIZED = -1,
}

export function generateDocResponseModuleFromJSON(object: any): GenerateDocResponseModule {
  switch (object) {
    case 0:
    case "CODE_TO_NATURAL_LANGUAGE":
      return GenerateDocResponseModule.CODE_TO_NATURAL_LANGUAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GenerateDocResponseModule.UNRECOGNIZED;
  }
}

export function generateDocResponseModuleToJSON(object: GenerateDocResponseModule): string {
  switch (object) {
    case GenerateDocResponseModule.CODE_TO_NATURAL_LANGUAGE:
      return "CODE_TO_NATURAL_LANGUAGE";
    case GenerateDocResponseModule.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GenerateDocResponseStatus {
  STARTED = 0,
  SUCCEEDED = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function generateDocResponseStatusFromJSON(object: any): GenerateDocResponseStatus {
  switch (object) {
    case 0:
    case "STARTED":
      return GenerateDocResponseStatus.STARTED;
    case 1:
    case "SUCCEEDED":
      return GenerateDocResponseStatus.SUCCEEDED;
    case 2:
    case "FAILED":
      return GenerateDocResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GenerateDocResponseStatus.UNRECOGNIZED;
  }
}

export function generateDocResponseStatusToJSON(object: GenerateDocResponseStatus): string {
  switch (object) {
    case GenerateDocResponseStatus.STARTED:
      return "STARTED";
    case GenerateDocResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case GenerateDocResponseStatus.FAILED:
      return "FAILED";
    case GenerateDocResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseGenerateDocResponse(): GenerateDocResponse {
  return { projectGenerateQueueId: 0, module: 0, status: 0, blocks: [], errorMessage: "", totalChunks: 0, items: [] };
}

export const GenerateDocResponseData = {
  encode(message: GenerateDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.module !== 0) {
      writer.uint32(16).int32(message.module);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    for (const v of message.blocks) {
      BlockData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.errorMessage !== "") {
      writer.uint32(42).string(message.errorMessage);
    }
    if (message.totalChunks !== 0) {
      writer.uint32(48).int32(message.totalChunks);
    }
    for (const v of message.items) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDocResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.module = reader.int32() as any;
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.blocks.push(BlockData.decode(reader, reader.uint32()));
          break;
        case 5:
          message.errorMessage = reader.string();
          break;
        case 6:
          message.totalChunks = reader.int32();
          break;
        case 7:
          message.items.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateDocResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      module: isSet(object.module) ? generateDocResponseModuleFromJSON(object.module) : 0,
      status: isSet(object.status) ? generateDocResponseStatusFromJSON(object.status) : 0,
      blocks: Array.isArray(object?.blocks) ? object.blocks.map((e: any) => BlockData.fromJSON(e)) : [],
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
      totalChunks: isSet(object.totalChunks) ? Number(object.totalChunks) : 0,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: GenerateDocResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.module !== undefined && (obj.module = generateDocResponseModuleToJSON(message.module));
    message.status !== undefined && (obj.status = generateDocResponseStatusToJSON(message.status));
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => e ? BlockData.toJSON(e) : undefined);
    } else {
      obj.blocks = [];
    }
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    message.totalChunks !== undefined && (obj.totalChunks = Math.round(message.totalChunks));
    if (message.items) {
      obj.items = message.items.map((e) => e);
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenerateDocResponse>): GenerateDocResponse {
    const message = createBaseGenerateDocResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.module = object.module ?? 0;
    message.status = object.status ?? 0;
    message.blocks = object.blocks?.map((e) => BlockData.fromPartial(e)) || [];
    message.errorMessage = object.errorMessage ?? "";
    message.totalChunks = object.totalChunks ?? 0;
    message.items = object.items?.map((e) => e) || [];
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
