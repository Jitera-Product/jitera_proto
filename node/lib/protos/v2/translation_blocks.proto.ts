/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class TranslationBlocks {
  projectGenerateQueueId: number;
  languageConfig?: TranslationBlocksLanguageConfig;
  block?: TranslationBlock;
}

export class TranslationBlocksLanguageConfig {
  fromLanguage: string;
  toLanguage: string;
}

export class TranslationBlock {
  id: number;
  name: string;
  content: string[];
  children: TranslationBlock[];
}

export class TranslationBlocksResponse {
  projectGenerateQueueId: number;
  tokenUsage: number;
  blocks: TranslationBlock[];
  errors: string[];
  languageConfig?: TranslationBlocksResponseLanguageConfig;
}

export class TranslationBlocksResponseLanguageConfig {
  fromLanguage: string;
  toLanguage: string;
}

function createBaseTranslationBlocks(): TranslationBlocks {
  return { projectGenerateQueueId: 0 };
}

export const TranslationBlocksData = {
  encode(message: TranslationBlocks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.languageConfig !== undefined) {
      TranslationBlocksLanguageConfigData.encode(message.languageConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== undefined) {
      TranslationBlockData.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranslationBlocks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslationBlocks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.languageConfig = TranslationBlocksLanguageConfigData.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = TranslationBlockData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TranslationBlocks {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      languageConfig: isSet(object.languageConfig)
        ? TranslationBlocksLanguageConfigData.fromJSON(object.languageConfig)
        : undefined,
      block: isSet(object.block) ? TranslationBlockData.fromJSON(object.block) : undefined,
    };
  },

  toJSON(message: TranslationBlocks): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.languageConfig !== undefined && (obj.languageConfig = message.languageConfig
      ? TranslationBlocksLanguageConfigData.toJSON(message.languageConfig)
      : undefined);
    message.block !== undefined && (obj.block = message.block ? TranslationBlockData.toJSON(message.block) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TranslationBlocks>): TranslationBlocks {
    const message = createBaseTranslationBlocks();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.languageConfig = (object.languageConfig !== undefined && object.languageConfig !== null)
      ? TranslationBlocksLanguageConfigData.fromPartial(object.languageConfig)
      : undefined;
    message.block = (object.block !== undefined && object.block !== null)
      ? TranslationBlockData.fromPartial(object.block)
      : undefined;
    return message;
  },
};

function createBaseTranslationBlocksLanguageConfig(): TranslationBlocksLanguageConfig {
  return { fromLanguage: "", toLanguage: "" };
}

export const TranslationBlocksLanguageConfigData = {
  encode(message: TranslationBlocksLanguageConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromLanguage !== "") {
      writer.uint32(10).string(message.fromLanguage);
    }
    if (message.toLanguage !== "") {
      writer.uint32(18).string(message.toLanguage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranslationBlocksLanguageConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslationBlocksLanguageConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromLanguage = reader.string();
          break;
        case 2:
          message.toLanguage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TranslationBlocksLanguageConfig {
    return {
      fromLanguage: isSet(object.fromLanguage) ? String(object.fromLanguage) : "",
      toLanguage: isSet(object.toLanguage) ? String(object.toLanguage) : "",
    };
  },

  toJSON(message: TranslationBlocksLanguageConfig): unknown {
    const obj: any = {};
    message.fromLanguage !== undefined && (obj.fromLanguage = message.fromLanguage);
    message.toLanguage !== undefined && (obj.toLanguage = message.toLanguage);
    return obj;
  },

  fromPartial(object: DeepPartial<TranslationBlocksLanguageConfig>): TranslationBlocksLanguageConfig {
    const message = createBaseTranslationBlocksLanguageConfig();
    message.fromLanguage = object.fromLanguage ?? "";
    message.toLanguage = object.toLanguage ?? "";
    return message;
  },
};

function createBaseTranslationBlock(): TranslationBlock {
  return { id: 0, name: "", content: [], children: [] };
}

export const TranslationBlockData = {
  encode(message: TranslationBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.content) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.children) {
      TranslationBlockData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranslationBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslationBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.content.push(reader.string());
          break;
        case 4:
          message.children.push(TranslationBlockData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TranslationBlock {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      content: Array.isArray(object?.content) ? object.content.map((e: any) => String(e)) : [],
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => TranslationBlockData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TranslationBlock): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    if (message.content) {
      obj.content = message.content.map((e) => e);
    } else {
      obj.content = [];
    }
    if (message.children) {
      obj.children = message.children.map((e) => e ? TranslationBlockData.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TranslationBlock>): TranslationBlock {
    const message = createBaseTranslationBlock();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.content = object.content?.map((e) => e) || [];
    message.children = object.children?.map((e) => TranslationBlockData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTranslationBlocksResponse(): TranslationBlocksResponse {
  return { projectGenerateQueueId: 0, tokenUsage: 0, blocks: [], errors: [] };
}

export const TranslationBlocksResponseData = {
  encode(message: TranslationBlocksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.tokenUsage !== 0) {
      writer.uint32(16).int32(message.tokenUsage);
    }
    for (const v of message.blocks) {
      TranslationBlockData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.errors) {
      writer.uint32(34).string(v!);
    }
    if (message.languageConfig !== undefined) {
      TranslationBlocksResponseLanguageConfigData.encode(message.languageConfig, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranslationBlocksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslationBlocksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.tokenUsage = reader.int32();
          break;
        case 3:
          message.blocks.push(TranslationBlockData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.errors.push(reader.string());
          break;
        case 5:
          message.languageConfig = TranslationBlocksResponseLanguageConfigData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TranslationBlocksResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
      blocks: Array.isArray(object?.blocks) ? object.blocks.map((e: any) => TranslationBlockData.fromJSON(e)) : [],
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => String(e)) : [],
      languageConfig: isSet(object.languageConfig)
        ? TranslationBlocksResponseLanguageConfigData.fromJSON(object.languageConfig)
        : undefined,
    };
  },

  toJSON(message: TranslationBlocksResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => e ? TranslationBlockData.toJSON(e) : undefined);
    } else {
      obj.blocks = [];
    }
    if (message.errors) {
      obj.errors = message.errors.map((e) => e);
    } else {
      obj.errors = [];
    }
    message.languageConfig !== undefined && (obj.languageConfig = message.languageConfig
      ? TranslationBlocksResponseLanguageConfigData.toJSON(message.languageConfig)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TranslationBlocksResponse>): TranslationBlocksResponse {
    const message = createBaseTranslationBlocksResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    message.blocks = object.blocks?.map((e) => TranslationBlockData.fromPartial(e)) || [];
    message.errors = object.errors?.map((e) => e) || [];
    message.languageConfig = (object.languageConfig !== undefined && object.languageConfig !== null)
      ? TranslationBlocksResponseLanguageConfigData.fromPartial(object.languageConfig)
      : undefined;
    return message;
  },
};

function createBaseTranslationBlocksResponseLanguageConfig(): TranslationBlocksResponseLanguageConfig {
  return { fromLanguage: "", toLanguage: "" };
}

export const TranslationBlocksResponseLanguageConfigData = {
  encode(message: TranslationBlocksResponseLanguageConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromLanguage !== "") {
      writer.uint32(10).string(message.fromLanguage);
    }
    if (message.toLanguage !== "") {
      writer.uint32(18).string(message.toLanguage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranslationBlocksResponseLanguageConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslationBlocksResponseLanguageConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromLanguage = reader.string();
          break;
        case 2:
          message.toLanguage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TranslationBlocksResponseLanguageConfig {
    return {
      fromLanguage: isSet(object.fromLanguage) ? String(object.fromLanguage) : "",
      toLanguage: isSet(object.toLanguage) ? String(object.toLanguage) : "",
    };
  },

  toJSON(message: TranslationBlocksResponseLanguageConfig): unknown {
    const obj: any = {};
    message.fromLanguage !== undefined && (obj.fromLanguage = message.fromLanguage);
    message.toLanguage !== undefined && (obj.toLanguage = message.toLanguage);
    return obj;
  },

  fromPartial(object: DeepPartial<TranslationBlocksResponseLanguageConfig>): TranslationBlocksResponseLanguageConfig {
    const message = createBaseTranslationBlocksResponseLanguageConfig();
    message.fromLanguage = object.fromLanguage ?? "";
    message.toLanguage = object.toLanguage ?? "";
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
