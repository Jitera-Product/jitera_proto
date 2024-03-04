/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class TranslationBlocks {
  projectGenerateQueueId: number;
  projectId: number;
  languageConfig?: TranslationBlocksLanguageConfig;
  block?: TranslationBlock;
  progress?: TranslationBlocksProgress | undefined;
  error?: TranslationBlocksError | undefined;
}

export class TranslationBlocksLanguageConfig {
  fromLanguage: string;
  toLanguage: string;
}

export class TranslationBlocksProgress {
  message: string;
}

export class TranslationBlocksError {
  message: string;
}

export class TranslationBlock {
  id: number;
  nodeId: string;
  parentNodeId: string;
  content: string[];
  children: TranslationBlock[];
}

function createBaseTranslationBlocks(): TranslationBlocks {
  return { projectGenerateQueueId: 0, projectId: 0 };
}

export const TranslationBlocksData = {
  encode(message: TranslationBlocks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.languageConfig !== undefined) {
      TranslationBlocksLanguageConfigData.encode(message.languageConfig, writer.uint32(26).fork()).ldelim();
    }
    if (message.block !== undefined) {
      TranslationBlockData.encode(message.block, writer.uint32(34).fork()).ldelim();
    }
    if (message.progress !== undefined) {
      TranslationBlocksProgressData.encode(message.progress, writer.uint32(42).fork()).ldelim();
    }
    if (message.error !== undefined) {
      TranslationBlocksErrorData.encode(message.error, writer.uint32(50).fork()).ldelim();
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
          message.projectId = reader.int32();
          break;
        case 3:
          message.languageConfig = TranslationBlocksLanguageConfigData.decode(reader, reader.uint32());
          break;
        case 4:
          message.block = TranslationBlockData.decode(reader, reader.uint32());
          break;
        case 5:
          message.progress = TranslationBlocksProgressData.decode(reader, reader.uint32());
          break;
        case 6:
          message.error = TranslationBlocksErrorData.decode(reader, reader.uint32());
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
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      languageConfig: isSet(object.languageConfig)
        ? TranslationBlocksLanguageConfigData.fromJSON(object.languageConfig)
        : undefined,
      block: isSet(object.block) ? TranslationBlockData.fromJSON(object.block) : undefined,
      progress: isSet(object.progress) ? TranslationBlocksProgressData.fromJSON(object.progress) : undefined,
      error: isSet(object.error) ? TranslationBlocksErrorData.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: TranslationBlocks): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.languageConfig !== undefined && (obj.languageConfig = message.languageConfig
      ? TranslationBlocksLanguageConfigData.toJSON(message.languageConfig)
      : undefined);
    message.block !== undefined && (obj.block = message.block ? TranslationBlockData.toJSON(message.block) : undefined);
    message.progress !== undefined &&
      (obj.progress = message.progress ? TranslationBlocksProgressData.toJSON(message.progress) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? TranslationBlocksErrorData.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TranslationBlocks>): TranslationBlocks {
    const message = createBaseTranslationBlocks();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.languageConfig = (object.languageConfig !== undefined && object.languageConfig !== null)
      ? TranslationBlocksLanguageConfigData.fromPartial(object.languageConfig)
      : undefined;
    message.block = (object.block !== undefined && object.block !== null)
      ? TranslationBlockData.fromPartial(object.block)
      : undefined;
    message.progress = (object.progress !== undefined && object.progress !== null)
      ? TranslationBlocksProgressData.fromPartial(object.progress)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? TranslationBlocksErrorData.fromPartial(object.error)
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

function createBaseTranslationBlocksProgress(): TranslationBlocksProgress {
  return { message: "" };
}

export const TranslationBlocksProgressData = {
  encode(message: TranslationBlocksProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranslationBlocksProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslationBlocksProgress();
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

  fromJSON(object: any): TranslationBlocksProgress {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: TranslationBlocksProgress): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<TranslationBlocksProgress>): TranslationBlocksProgress {
    const message = createBaseTranslationBlocksProgress();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseTranslationBlocksError(): TranslationBlocksError {
  return { message: "" };
}

export const TranslationBlocksErrorData = {
  encode(message: TranslationBlocksError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TranslationBlocksError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslationBlocksError();
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

  fromJSON(object: any): TranslationBlocksError {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: TranslationBlocksError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<TranslationBlocksError>): TranslationBlocksError {
    const message = createBaseTranslationBlocksError();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseTranslationBlock(): TranslationBlock {
  return { id: 0, nodeId: "", parentNodeId: "", content: [], children: [] };
}

export const TranslationBlockData = {
  encode(message: TranslationBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.parentNodeId !== "") {
      writer.uint32(26).string(message.parentNodeId);
    }
    for (const v of message.content) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.children) {
      TranslationBlockData.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.nodeId = reader.string();
          break;
        case 3:
          message.parentNodeId = reader.string();
          break;
        case 4:
          message.content.push(reader.string());
          break;
        case 5:
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
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      parentNodeId: isSet(object.parentNodeId) ? String(object.parentNodeId) : "",
      content: Array.isArray(object?.content) ? object.content.map((e: any) => String(e)) : [],
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => TranslationBlockData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TranslationBlock): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.parentNodeId !== undefined && (obj.parentNodeId = message.parentNodeId);
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
    message.nodeId = object.nodeId ?? "";
    message.parentNodeId = object.parentNodeId ?? "";
    message.content = object.content?.map((e) => e) || [];
    message.children = object.children?.map((e) => TranslationBlockData.fromPartial(e)) || [];
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
