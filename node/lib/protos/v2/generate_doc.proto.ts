/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class GenerateDocResponse {
  projectGenerateQueueId: number;
  module: GenerateDocResponseModule;
  status: GenerateDocResponseStatus;
  errorMessage?: string | undefined;
  totalChunks: number;
  chunk?: GenerateDocResponseChunk | undefined;
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
  FAILED = 1,
  UNRECOGNIZED = -1,
}

export function generateDocResponseStatusFromJSON(object: any): GenerateDocResponseStatus {
  switch (object) {
    case 0:
    case "STARTED":
      return GenerateDocResponseStatus.STARTED;
    case 1:
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
    case GenerateDocResponseStatus.FAILED:
      return "FAILED";
    case GenerateDocResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class GenerateDocResponseChunk {
  status: GenerateDocResponseChunkStatus;
  data: string;
  errorMessage: string;
  items: string[];
}

export enum GenerateDocResponseChunkStatus {
  SUCCEEDED = 0,
  FAILED = 1,
  UNRECOGNIZED = -1,
}

export function generateDocResponseChunkStatusFromJSON(object: any): GenerateDocResponseChunkStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return GenerateDocResponseChunkStatus.SUCCEEDED;
    case 1:
    case "FAILED":
      return GenerateDocResponseChunkStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GenerateDocResponseChunkStatus.UNRECOGNIZED;
  }
}

export function generateDocResponseChunkStatusToJSON(object: GenerateDocResponseChunkStatus): string {
  switch (object) {
    case GenerateDocResponseChunkStatus.SUCCEEDED:
      return "SUCCEEDED";
    case GenerateDocResponseChunkStatus.FAILED:
      return "FAILED";
    case GenerateDocResponseChunkStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseGenerateDocResponse(): GenerateDocResponse {
  return { projectGenerateQueueId: 0, module: 0, status: 0, totalChunks: 0 };
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
    if (message.errorMessage !== undefined) {
      writer.uint32(34).string(message.errorMessage);
    }
    if (message.totalChunks !== 0) {
      writer.uint32(40).int32(message.totalChunks);
    }
    if (message.chunk !== undefined) {
      GenerateDocResponseChunkData.encode(message.chunk, writer.uint32(50).fork()).ldelim();
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
          message.errorMessage = reader.string();
          break;
        case 5:
          message.totalChunks = reader.int32();
          break;
        case 6:
          message.chunk = GenerateDocResponseChunkData.decode(reader, reader.uint32());
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
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : undefined,
      totalChunks: isSet(object.totalChunks) ? Number(object.totalChunks) : 0,
      chunk: isSet(object.chunk) ? GenerateDocResponseChunkData.fromJSON(object.chunk) : undefined,
    };
  },

  toJSON(message: GenerateDocResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.module !== undefined && (obj.module = generateDocResponseModuleToJSON(message.module));
    message.status !== undefined && (obj.status = generateDocResponseStatusToJSON(message.status));
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    message.totalChunks !== undefined && (obj.totalChunks = Math.round(message.totalChunks));
    message.chunk !== undefined &&
      (obj.chunk = message.chunk ? GenerateDocResponseChunkData.toJSON(message.chunk) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenerateDocResponse>): GenerateDocResponse {
    const message = createBaseGenerateDocResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.module = object.module ?? 0;
    message.status = object.status ?? 0;
    message.errorMessage = object.errorMessage ?? undefined;
    message.totalChunks = object.totalChunks ?? 0;
    message.chunk = (object.chunk !== undefined && object.chunk !== null)
      ? GenerateDocResponseChunkData.fromPartial(object.chunk)
      : undefined;
    return message;
  },
};

function createBaseGenerateDocResponseChunk(): GenerateDocResponseChunk {
  return { status: 0, data: "", errorMessage: "", items: [] };
}

export const GenerateDocResponseChunkData = {
  encode(message: GenerateDocResponseChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    if (message.errorMessage !== "") {
      writer.uint32(26).string(message.errorMessage);
    }
    for (const v of message.items) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDocResponseChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDocResponseChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.data = reader.string();
          break;
        case 3:
          message.errorMessage = reader.string();
          break;
        case 4:
          message.items.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateDocResponseChunk {
    return {
      status: isSet(object.status) ? generateDocResponseChunkStatusFromJSON(object.status) : 0,
      data: isSet(object.data) ? String(object.data) : "",
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: GenerateDocResponseChunk): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = generateDocResponseChunkStatusToJSON(message.status));
    message.data !== undefined && (obj.data = message.data);
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    if (message.items) {
      obj.items = message.items.map((e) => e);
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenerateDocResponseChunk>): GenerateDocResponseChunk {
    const message = createBaseGenerateDocResponseChunk();
    message.status = object.status ?? 0;
    message.data = object.data ?? "";
    message.errorMessage = object.errorMessage ?? "";
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
