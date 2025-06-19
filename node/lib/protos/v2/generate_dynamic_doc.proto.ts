/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Git, ProjectSource, ProjectSourceData, GitData } from "./project_source.proto";

export class GenerateDynamicDocRequest {
  projectGenerateQueueId: number;
  projectSource?: ProjectSource;
  git?: Git;
  projectId: number;
  projectUuid: string;
}

function createBaseGenerateDynamicDocRequest(): GenerateDynamicDocRequest {
  return { projectGenerateQueueId: 0, projectId: 0, projectUuid: "" };
}

export const GenerateDynamicDocRequestData = {
  encode(message: GenerateDynamicDocRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(message.projectSource, writer.uint32(18).fork()).ldelim();
    }
    if (message.git !== undefined) {
      GitData.encode(message.git, writer.uint32(26).fork()).ldelim();
    }
    if (message.projectId !== 0) {
      writer.uint32(32).int32(message.projectId);
    }
    if (message.projectUuid !== "") {
      writer.uint32(42).string(message.projectUuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDynamicDocRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDynamicDocRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.projectSource = ProjectSourceData.decode(reader, reader.uint32());
          break;
        case 3:
          message.git = GitData.decode(reader, reader.uint32());
          break;
        case 4:
          message.projectId = reader.int32();
          break;
        case 5:
          message.projectUuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateDynamicDocRequest {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectSource: isSet(object.projectSource) ? ProjectSourceData.fromJSON(object.projectSource) : undefined,
      git: isSet(object.git) ? GitData.fromJSON(object.git) : undefined,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectUuid: isSet(object.projectUuid) ? String(object.projectUuid) : "",
    };
  },

  toJSON(message: GenerateDynamicDocRequest): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource ? ProjectSourceData.toJSON(message.projectSource) : undefined);
    message.git !== undefined && (obj.git = message.git ? GitData.toJSON(message.git) : undefined);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectUuid !== undefined && (obj.projectUuid = message.projectUuid);
    return obj;
  },

  fromPartial(object: DeepPartial<GenerateDynamicDocRequest>): GenerateDynamicDocRequest {
    const message = createBaseGenerateDynamicDocRequest();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectSource = (object.projectSource !== undefined && object.projectSource !== null)
      ? ProjectSourceData.fromPartial(object.projectSource)
      : undefined;
    message.git = (object.git !== undefined && object.git !== null) ? GitData.fromPartial(object.git) : undefined;
    message.projectId = object.projectId ?? 0;
    message.projectUuid = object.projectUuid ?? "";
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
