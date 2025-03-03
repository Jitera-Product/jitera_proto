/* eslint-disable */
import _m0 from "protobufjs/minimal";

export class GenerateERDResponse {
  projectGenerateQueueId: number;
  status: GenerateERDResponseStatus;
  errorMessage: string;
  payload: string;
}

export enum GenerateERDResponseStatus {
  UNSPECIFIED = 0,
  SUCCEEDED = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function generateERDResponseStatusFromJSON(object: any): GenerateERDResponseStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return GenerateERDResponseStatus.UNSPECIFIED;
    case 1:
    case "SUCCEEDED":
      return GenerateERDResponseStatus.SUCCEEDED;
    case 2:
    case "FAILED":
      return GenerateERDResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GenerateERDResponseStatus.UNRECOGNIZED;
  }
}

export function generateERDResponseStatusToJSON(object: GenerateERDResponseStatus): string {
  switch (object) {
    case GenerateERDResponseStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case GenerateERDResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case GenerateERDResponseStatus.FAILED:
      return "FAILED";
    case GenerateERDResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseGenerateERDResponse(): GenerateERDResponse {
  return { projectGenerateQueueId: 0, status: 0, errorMessage: "", payload: "" };
}

export const GenerateERDResponseData = {
  encode(message: GenerateERDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.errorMessage !== "") {
      writer.uint32(26).string(message.errorMessage);
    }
    if (message.payload !== "") {
      writer.uint32(34).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateERDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateERDResponse();
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
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateERDResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      status: isSet(object.status) ? generateERDResponseStatusFromJSON(object.status) : 0,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: GenerateERDResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.status !== undefined && (obj.status = generateERDResponseStatusToJSON(message.status));
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(object: DeepPartial<GenerateERDResponse>): GenerateERDResponse {
    const message = createBaseGenerateERDResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.status = object.status ?? 0;
    message.errorMessage = object.errorMessage ?? "";
    message.payload = object.payload ?? "";
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
