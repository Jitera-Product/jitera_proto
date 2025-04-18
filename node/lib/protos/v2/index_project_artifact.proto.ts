/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  Git,
  GitData,
  ProjectSource,
  ProjectSourceData,
} from "./project_source.proto";

export class IndexProjectArtifactRequest {
  projectGenerateId: number;
  projectSource?: ProjectSource;
  reindexDocument?: IndexProjectArtifactRequestReIndexDocument | undefined;
  reindexSourceCode?: IndexProjectArtifactRequestReIndexSourceCode | undefined;
}

export class IndexProjectArtifactRequestReIndexDocument {
  indexAll?: boolean | undefined;
  documentPaths?: IndexProjectArtifactRequestDocumentPaths | undefined;
}

export class IndexProjectArtifactRequestDocumentPaths {
  /** List of document paths */
  paths: string[];
}

export class IndexProjectArtifactRequestReIndexSourceCode {
  git?: Git | undefined;
  local?: boolean | undefined;
}

export class IndexProjectArtifactResponse {
  projectGenerateId: number;
  projectId: number;
  progress?: IndexProjectArtifactResponseProgress | undefined;
  success?: IndexProjectArtifactResponseSuccess | undefined;
  error?: IndexProjectArtifactResponseError | undefined;
}

export class IndexProjectArtifactResponseProgress {
  progress: number;
  message: string;
}

export class IndexProjectArtifactResponseError {
  /** Error code (e.g., "INVALID_PATH", "AUTH_FAILED") */
  code: string;
  /** Human-readable error message */
  message: string;
  details: { [key: string]: string };
}

export class IndexProjectArtifactResponseErrorDetailsEntry {
  key: string;
  value: string;
}

export class IndexProjectArtifactResponseSuccess {
  message: string;
  results: { [key: string]: string };
}

export class IndexProjectArtifactResponseSuccessResultsEntry {
  key: string;
  value: string;
}

function createBaseIndexProjectArtifactRequest(): IndexProjectArtifactRequest {
  return { projectGenerateId: 0 };
}

export const IndexProjectArtifactRequestData = {
  encode(
    message: IndexProjectArtifactRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateId !== 0) {
      writer.uint32(8).int32(message.projectGenerateId);
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(
        message.projectSource,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.reindexDocument !== undefined) {
      IndexProjectArtifactRequestReIndexDocumentData.encode(
        message.reindexDocument,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.reindexSourceCode !== undefined) {
      IndexProjectArtifactRequestReIndexSourceCodeData.encode(
        message.reindexSourceCode,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexProjectArtifactRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexProjectArtifactRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateId = reader.int32();
          break;
        case 2:
          message.projectSource = ProjectSourceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.reindexDocument =
            IndexProjectArtifactRequestReIndexDocumentData.decode(
              reader,
              reader.uint32()
            );
          break;
        case 4:
          message.reindexSourceCode =
            IndexProjectArtifactRequestReIndexSourceCodeData.decode(
              reader,
              reader.uint32()
            );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexProjectArtifactRequest {
    return {
      projectGenerateId: isSet(object.projectGenerateId)
        ? Number(object.projectGenerateId)
        : 0,
      projectSource: isSet(object.projectSource)
        ? ProjectSourceData.fromJSON(object.projectSource)
        : undefined,
      reindexDocument: isSet(object.reindexDocument)
        ? IndexProjectArtifactRequestReIndexDocumentData.fromJSON(
            object.reindexDocument
          )
        : undefined,
      reindexSourceCode: isSet(object.reindexSourceCode)
        ? IndexProjectArtifactRequestReIndexSourceCodeData.fromJSON(
            object.reindexSourceCode
          )
        : undefined,
    };
  },

  toJSON(message: IndexProjectArtifactRequest): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined &&
      (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource
        ? ProjectSourceData.toJSON(message.projectSource)
        : undefined);
    message.reindexDocument !== undefined &&
      (obj.reindexDocument = message.reindexDocument
        ? IndexProjectArtifactRequestReIndexDocumentData.toJSON(
            message.reindexDocument
          )
        : undefined);
    message.reindexSourceCode !== undefined &&
      (obj.reindexSourceCode = message.reindexSourceCode
        ? IndexProjectArtifactRequestReIndexSourceCodeData.toJSON(
            message.reindexSourceCode
          )
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexProjectArtifactRequest>
  ): IndexProjectArtifactRequest {
    const message = createBaseIndexProjectArtifactRequest();
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.projectSource =
      object.projectSource !== undefined && object.projectSource !== null
        ? ProjectSourceData.fromPartial(object.projectSource)
        : undefined;
    message.reindexDocument =
      object.reindexDocument !== undefined && object.reindexDocument !== null
        ? IndexProjectArtifactRequestReIndexDocumentData.fromPartial(
            object.reindexDocument
          )
        : undefined;
    message.reindexSourceCode =
      object.reindexSourceCode !== undefined &&
      object.reindexSourceCode !== null
        ? IndexProjectArtifactRequestReIndexSourceCodeData.fromPartial(
            object.reindexSourceCode
          )
        : undefined;
    return message;
  },
};

function createBaseIndexProjectArtifactRequestReIndexDocument(): IndexProjectArtifactRequestReIndexDocument {
  return {};
}

export const IndexProjectArtifactRequestReIndexDocumentData = {
  encode(
    message: IndexProjectArtifactRequestReIndexDocument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.indexAll !== undefined) {
      writer.uint32(8).bool(message.indexAll);
    }
    if (message.documentPaths !== undefined) {
      IndexProjectArtifactRequestDocumentPathsData.encode(
        message.documentPaths,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexProjectArtifactRequestReIndexDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexProjectArtifactRequestReIndexDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.indexAll = reader.bool();
          break;
        case 2:
          message.documentPaths =
            IndexProjectArtifactRequestDocumentPathsData.decode(
              reader,
              reader.uint32()
            );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexProjectArtifactRequestReIndexDocument {
    return {
      indexAll: isSet(object.indexAll) ? Boolean(object.indexAll) : undefined,
      documentPaths: isSet(object.documentPaths)
        ? IndexProjectArtifactRequestDocumentPathsData.fromJSON(
            object.documentPaths
          )
        : undefined,
    };
  },

  toJSON(message: IndexProjectArtifactRequestReIndexDocument): unknown {
    const obj: any = {};
    message.indexAll !== undefined && (obj.indexAll = message.indexAll);
    message.documentPaths !== undefined &&
      (obj.documentPaths = message.documentPaths
        ? IndexProjectArtifactRequestDocumentPathsData.toJSON(
            message.documentPaths
          )
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexProjectArtifactRequestReIndexDocument>
  ): IndexProjectArtifactRequestReIndexDocument {
    const message = createBaseIndexProjectArtifactRequestReIndexDocument();
    message.indexAll = object.indexAll ?? undefined;
    message.documentPaths =
      object.documentPaths !== undefined && object.documentPaths !== null
        ? IndexProjectArtifactRequestDocumentPathsData.fromPartial(
            object.documentPaths
          )
        : undefined;
    return message;
  },
};

function createBaseIndexProjectArtifactRequestDocumentPaths(): IndexProjectArtifactRequestDocumentPaths {
  return { paths: [] };
}

export const IndexProjectArtifactRequestDocumentPathsData = {
  encode(
    message: IndexProjectArtifactRequestDocumentPaths,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.paths) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexProjectArtifactRequestDocumentPaths {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexProjectArtifactRequestDocumentPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexProjectArtifactRequestDocumentPaths {
    return {
      paths: Array.isArray(object?.paths)
        ? object.paths.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: IndexProjectArtifactRequestDocumentPaths): unknown {
    const obj: any = {};
    if (message.paths) {
      obj.paths = message.paths.map((e) => e);
    } else {
      obj.paths = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexProjectArtifactRequestDocumentPaths>
  ): IndexProjectArtifactRequestDocumentPaths {
    const message = createBaseIndexProjectArtifactRequestDocumentPaths();
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
};

function createBaseIndexProjectArtifactRequestReIndexSourceCode(): IndexProjectArtifactRequestReIndexSourceCode {
  return {};
}

export const IndexProjectArtifactRequestReIndexSourceCodeData = {
  encode(
    message: IndexProjectArtifactRequestReIndexSourceCode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.git !== undefined) {
      GitData.encode(message.git, writer.uint32(10).fork()).ldelim();
    }
    if (message.local !== undefined) {
      writer.uint32(16).bool(message.local);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexProjectArtifactRequestReIndexSourceCode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexProjectArtifactRequestReIndexSourceCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.git = GitData.decode(reader, reader.uint32());
          break;
        case 2:
          message.local = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexProjectArtifactRequestReIndexSourceCode {
    return {
      git: isSet(object.git) ? GitData.fromJSON(object.git) : undefined,
      local: isSet(object.local) ? Boolean(object.local) : undefined,
    };
  },

  toJSON(message: IndexProjectArtifactRequestReIndexSourceCode): unknown {
    const obj: any = {};
    message.git !== undefined &&
      (obj.git = message.git ? GitData.toJSON(message.git) : undefined);
    message.local !== undefined && (obj.local = message.local);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexProjectArtifactRequestReIndexSourceCode>
  ): IndexProjectArtifactRequestReIndexSourceCode {
    const message = createBaseIndexProjectArtifactRequestReIndexSourceCode();
    message.git =
      object.git !== undefined && object.git !== null
        ? GitData.fromPartial(object.git)
        : undefined;
    message.local = object.local ?? undefined;
    return message;
  },
};

function createBaseIndexProjectArtifactResponse(): IndexProjectArtifactResponse {
  return { projectGenerateId: 0, projectId: 0 };
}

export const IndexProjectArtifactResponseData = {
  encode(
    message: IndexProjectArtifactResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateId !== 0) {
      writer.uint32(8).int32(message.projectGenerateId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.progress !== undefined) {
      IndexProjectArtifactResponseProgressData.encode(
        message.progress,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.success !== undefined) {
      IndexProjectArtifactResponseSuccessData.encode(
        message.success,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IndexProjectArtifactResponseErrorData.encode(
        message.error,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexProjectArtifactResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexProjectArtifactResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 5:
          message.progress = IndexProjectArtifactResponseProgressData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.success = IndexProjectArtifactResponseSuccessData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.error = IndexProjectArtifactResponseErrorData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexProjectArtifactResponse {
    return {
      projectGenerateId: isSet(object.projectGenerateId)
        ? Number(object.projectGenerateId)
        : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      progress: isSet(object.progress)
        ? IndexProjectArtifactResponseProgressData.fromJSON(object.progress)
        : undefined,
      success: isSet(object.success)
        ? IndexProjectArtifactResponseSuccessData.fromJSON(object.success)
        : undefined,
      error: isSet(object.error)
        ? IndexProjectArtifactResponseErrorData.fromJSON(object.error)
        : undefined,
    };
  },

  toJSON(message: IndexProjectArtifactResponse): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined &&
      (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.progress !== undefined &&
      (obj.progress = message.progress
        ? IndexProjectArtifactResponseProgressData.toJSON(message.progress)
        : undefined);
    message.success !== undefined &&
      (obj.success = message.success
        ? IndexProjectArtifactResponseSuccessData.toJSON(message.success)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error
        ? IndexProjectArtifactResponseErrorData.toJSON(message.error)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexProjectArtifactResponse>
  ): IndexProjectArtifactResponse {
    const message = createBaseIndexProjectArtifactResponse();
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.progress =
      object.progress !== undefined && object.progress !== null
        ? IndexProjectArtifactResponseProgressData.fromPartial(object.progress)
        : undefined;
    message.success =
      object.success !== undefined && object.success !== null
        ? IndexProjectArtifactResponseSuccessData.fromPartial(object.success)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IndexProjectArtifactResponseErrorData.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseIndexProjectArtifactResponseProgress(): IndexProjectArtifactResponseProgress {
  return { progress: 0, message: "" };
}

export const IndexProjectArtifactResponseProgressData = {
  encode(
    message: IndexProjectArtifactResponseProgress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.progress !== 0) {
      writer.uint32(8).int32(message.progress);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexProjectArtifactResponseProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexProjectArtifactResponseProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.progress = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexProjectArtifactResponseProgress {
    return {
      progress: isSet(object.progress) ? Number(object.progress) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: IndexProjectArtifactResponseProgress): unknown {
    const obj: any = {};
    message.progress !== undefined &&
      (obj.progress = Math.round(message.progress));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexProjectArtifactResponseProgress>
  ): IndexProjectArtifactResponseProgress {
    const message = createBaseIndexProjectArtifactResponseProgress();
    message.progress = object.progress ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseIndexProjectArtifactResponseError(): IndexProjectArtifactResponseError {
  return { code: "", message: "", details: {} };
}

export const IndexProjectArtifactResponseErrorData = {
  encode(
    message: IndexProjectArtifactResponseError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    Object.entries(message.details).forEach(([key, value]) => {
      IndexProjectArtifactResponseErrorDetailsEntryData.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexProjectArtifactResponseError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexProjectArtifactResponseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          const entry3 =
            IndexProjectArtifactResponseErrorDetailsEntryData.decode(
              reader,
              reader.uint32()
            );
          if (entry3.value !== undefined) {
            message.details[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexProjectArtifactResponseError {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      message: isSet(object.message) ? String(object.message) : "",
      details: isObject(object.details)
        ? Object.entries(object.details).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: IndexProjectArtifactResponseError): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    obj.details = {};
    if (message.details) {
      Object.entries(message.details).forEach(([k, v]) => {
        obj.details[k] = v;
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexProjectArtifactResponseError>
  ): IndexProjectArtifactResponseError {
    const message = createBaseIndexProjectArtifactResponseError();
    message.code = object.code ?? "";
    message.message = object.message ?? "";
    message.details = Object.entries(object.details ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseIndexProjectArtifactResponseErrorDetailsEntry(): IndexProjectArtifactResponseErrorDetailsEntry {
  return { key: "", value: "" };
}

export const IndexProjectArtifactResponseErrorDetailsEntryData = {
  encode(
    message: IndexProjectArtifactResponseErrorDetailsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexProjectArtifactResponseErrorDetailsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexProjectArtifactResponseErrorDetailsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexProjectArtifactResponseErrorDetailsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: IndexProjectArtifactResponseErrorDetailsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexProjectArtifactResponseErrorDetailsEntry>
  ): IndexProjectArtifactResponseErrorDetailsEntry {
    const message = createBaseIndexProjectArtifactResponseErrorDetailsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseIndexProjectArtifactResponseSuccess(): IndexProjectArtifactResponseSuccess {
  return { message: "", results: {} };
}

export const IndexProjectArtifactResponseSuccessData = {
  encode(
    message: IndexProjectArtifactResponseSuccess,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    Object.entries(message.results).forEach(([key, value]) => {
      IndexProjectArtifactResponseSuccessResultsEntryData.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexProjectArtifactResponseSuccess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexProjectArtifactResponseSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          const entry2 =
            IndexProjectArtifactResponseSuccessResultsEntryData.decode(
              reader,
              reader.uint32()
            );
          if (entry2.value !== undefined) {
            message.results[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexProjectArtifactResponseSuccess {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      results: isObject(object.results)
        ? Object.entries(object.results).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: IndexProjectArtifactResponseSuccess): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    obj.results = {};
    if (message.results) {
      Object.entries(message.results).forEach(([k, v]) => {
        obj.results[k] = v;
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexProjectArtifactResponseSuccess>
  ): IndexProjectArtifactResponseSuccess {
    const message = createBaseIndexProjectArtifactResponseSuccess();
    message.message = object.message ?? "";
    message.results = Object.entries(object.results ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseIndexProjectArtifactResponseSuccessResultsEntry(): IndexProjectArtifactResponseSuccessResultsEntry {
  return { key: "", value: "" };
}

export const IndexProjectArtifactResponseSuccessResultsEntryData = {
  encode(
    message: IndexProjectArtifactResponseSuccessResultsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexProjectArtifactResponseSuccessResultsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexProjectArtifactResponseSuccessResultsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexProjectArtifactResponseSuccessResultsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: IndexProjectArtifactResponseSuccessResultsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexProjectArtifactResponseSuccessResultsEntry>
  ): IndexProjectArtifactResponseSuccessResultsEntry {
    const message = createBaseIndexProjectArtifactResponseSuccessResultsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
