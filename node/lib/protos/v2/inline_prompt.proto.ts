/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { StructData } from "../google/protobuf/struct.proto";

export class InlinePromptResponse {
  uuid: string;
  userUuid: string;
  projectUuid: string;
  inlinePrompt?: InlinePrompt;
}

export class InlinePrompt {
  prompt: string;
  properties?: { [key: string]: any };
}

function createBaseInlinePromptResponse(): InlinePromptResponse {
  return { uuid: "", userUuid: "", projectUuid: "" };
}

export const InlinePromptResponseData = {
  encode(message: InlinePromptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.userUuid !== "") {
      writer.uint32(18).string(message.userUuid);
    }
    if (message.projectUuid !== "") {
      writer.uint32(26).string(message.projectUuid);
    }
    if (message.inlinePrompt !== undefined) {
      InlinePromptData.encode(message.inlinePrompt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InlinePromptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInlinePromptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.userUuid = reader.string();
          break;
        case 3:
          message.projectUuid = reader.string();
          break;
        case 4:
          message.inlinePrompt = InlinePromptData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InlinePromptResponse {
    return {
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      userUuid: isSet(object.userUuid) ? String(object.userUuid) : "",
      projectUuid: isSet(object.projectUuid) ? String(object.projectUuid) : "",
      inlinePrompt: isSet(object.inlinePrompt) ? InlinePromptData.fromJSON(object.inlinePrompt) : undefined,
    };
  },

  toJSON(message: InlinePromptResponse): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.userUuid !== undefined && (obj.userUuid = message.userUuid);
    message.projectUuid !== undefined && (obj.projectUuid = message.projectUuid);
    message.inlinePrompt !== undefined &&
      (obj.inlinePrompt = message.inlinePrompt ? InlinePromptData.toJSON(message.inlinePrompt) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<InlinePromptResponse>): InlinePromptResponse {
    const message = createBaseInlinePromptResponse();
    message.uuid = object.uuid ?? "";
    message.userUuid = object.userUuid ?? "";
    message.projectUuid = object.projectUuid ?? "";
    message.inlinePrompt = (object.inlinePrompt !== undefined && object.inlinePrompt !== null)
      ? InlinePromptData.fromPartial(object.inlinePrompt)
      : undefined;
    return message;
  },
};

function createBaseInlinePrompt(): InlinePrompt {
  return { prompt: "" };
}

export const InlinePromptData = {
  encode(message: InlinePrompt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prompt !== "") {
      writer.uint32(10).string(message.prompt);
    }
    if (message.properties !== undefined) {
      StructData.encode(StructData.wrap(message.properties), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InlinePrompt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInlinePrompt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prompt = reader.string();
          break;
        case 2:
          message.properties = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InlinePrompt {
    return {
      prompt: isSet(object.prompt) ? String(object.prompt) : "",
      properties: isObject(object.properties) ? object.properties : undefined,
    };
  },

  toJSON(message: InlinePrompt): unknown {
    const obj: any = {};
    message.prompt !== undefined && (obj.prompt = message.prompt);
    message.properties !== undefined && (obj.properties = message.properties);
    return obj;
  },

  fromPartial(object: DeepPartial<InlinePrompt>): InlinePrompt {
    const message = createBaseInlinePrompt();
    message.prompt = object.prompt ?? "";
    message.properties = object.properties ?? undefined;
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
