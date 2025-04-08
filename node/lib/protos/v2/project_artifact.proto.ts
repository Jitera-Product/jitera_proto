/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Git, GitData, ProjectSource, ProjectSourceData } from "./project_source.proto";

export class ProjectArtifactOperationRequest {
  projectGenerateId: number;
  projectSource?: ProjectSource;
  reindexDocument?: ProjectArtifactOperationRequestReIndexDocumentOperation | undefined;
  reindexSourceCode?: ProjectArtifactOperationRequestReIndexSourceCodeOperation | undefined;
}

export class ProjectArtifactOperationRequestReIndexDocumentOperation {
  indexAll?: boolean | undefined;
  documentPaths?: ProjectArtifactOperationRequestDocumentPaths | undefined;
}

export class ProjectArtifactOperationRequestDocumentPaths {
  /** List of document paths */
  paths: string[];
}

export class ProjectArtifactOperationRequestReIndexSourceCodeOperation {
  git?: Git;
}

export class ProjectArtifactOperationResponse {
  projectGenerateQueueId: number;
  projectId: number;
  progress?: ProjectArtifactOperationResponseProgress | undefined;
  success?: ProjectArtifactOperationResponseSuccess | undefined;
  error?: ProjectArtifactOperationResponseError | undefined;
}

export class ProjectArtifactOperationResponseProgress {
  progress: number;
  message: string;
}

export class ProjectArtifactOperationResponseError {
  /** Error code (e.g., "INVALID_PATH", "AUTH_FAILED") */
  code: string;
  /** Human-readable error message */
  message: string;
  details: { [key: string]: string };
}

export class ProjectArtifactOperationResponseErrorDetailsEntry {
  key: string;
  value: string;
}

export class ProjectArtifactOperationResponseSuccess {
  message: string;
  results: { [key: string]: string };
}

export class ProjectArtifactOperationResponseSuccessResultsEntry {
  key: string;
  value: string;
}

function createBaseProjectArtifactOperationRequest(): ProjectArtifactOperationRequest {
  return { projectGenerateId: 0 };
}

export const ProjectArtifactOperationRequestData = {
  encode(message: ProjectArtifactOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateId !== 0) {
      writer.uint32(8).int32(message.projectGenerateId);
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(message.projectSource, writer.uint32(18).fork()).ldelim();
    }
    if (message.reindexDocument !== undefined) {
      ProjectArtifactOperationRequestReIndexDocumentOperationData.encode(
        message.reindexDocument,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.reindexSourceCode !== undefined) {
      ProjectArtifactOperationRequestReIndexSourceCodeOperationData.encode(
        message.reindexSourceCode,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectArtifactOperationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectArtifactOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateId = reader.int32();
          break;
        case 2:
          message.projectSource = ProjectSourceData.decode(reader, reader.uint32());
          break;
        case 3:
          message.reindexDocument = ProjectArtifactOperationRequestReIndexDocumentOperationData.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.reindexSourceCode = ProjectArtifactOperationRequestReIndexSourceCodeOperationData.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectArtifactOperationRequest {
    return {
      projectGenerateId: isSet(object.projectGenerateId) ? Number(object.projectGenerateId) : 0,
      projectSource: isSet(object.projectSource) ? ProjectSourceData.fromJSON(object.projectSource) : undefined,
      reindexDocument: isSet(object.reindexDocument)
        ? ProjectArtifactOperationRequestReIndexDocumentOperationData.fromJSON(object.reindexDocument)
        : undefined,
      reindexSourceCode: isSet(object.reindexSourceCode)
        ? ProjectArtifactOperationRequestReIndexSourceCodeOperationData.fromJSON(object.reindexSourceCode)
        : undefined,
    };
  },

  toJSON(message: ProjectArtifactOperationRequest): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined && (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource ? ProjectSourceData.toJSON(message.projectSource) : undefined);
    message.reindexDocument !== undefined && (obj.reindexDocument = message.reindexDocument
      ? ProjectArtifactOperationRequestReIndexDocumentOperationData.toJSON(message.reindexDocument)
      : undefined);
    message.reindexSourceCode !== undefined && (obj.reindexSourceCode = message.reindexSourceCode
      ? ProjectArtifactOperationRequestReIndexSourceCodeOperationData.toJSON(message.reindexSourceCode)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectArtifactOperationRequest>): ProjectArtifactOperationRequest {
    const message = createBaseProjectArtifactOperationRequest();
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.projectSource = (object.projectSource !== undefined && object.projectSource !== null)
      ? ProjectSourceData.fromPartial(object.projectSource)
      : undefined;
    message.reindexDocument = (object.reindexDocument !== undefined && object.reindexDocument !== null)
      ? ProjectArtifactOperationRequestReIndexDocumentOperationData.fromPartial(object.reindexDocument)
      : undefined;
    message.reindexSourceCode = (object.reindexSourceCode !== undefined && object.reindexSourceCode !== null)
      ? ProjectArtifactOperationRequestReIndexSourceCodeOperationData.fromPartial(object.reindexSourceCode)
      : undefined;
    return message;
  },
};

function createBaseProjectArtifactOperationRequestReIndexDocumentOperation(): ProjectArtifactOperationRequestReIndexDocumentOperation {
  return {};
}

export const ProjectArtifactOperationRequestReIndexDocumentOperationData = {
  encode(
    message: ProjectArtifactOperationRequestReIndexDocumentOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.indexAll !== undefined) {
      writer.uint32(8).bool(message.indexAll);
    }
    if (message.documentPaths !== undefined) {
      ProjectArtifactOperationRequestDocumentPathsData.encode(message.documentPaths, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectArtifactOperationRequestReIndexDocumentOperation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectArtifactOperationRequestReIndexDocumentOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.indexAll = reader.bool();
          break;
        case 2:
          message.documentPaths = ProjectArtifactOperationRequestDocumentPathsData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectArtifactOperationRequestReIndexDocumentOperation {
    return {
      indexAll: isSet(object.indexAll) ? Boolean(object.indexAll) : undefined,
      documentPaths: isSet(object.documentPaths)
        ? ProjectArtifactOperationRequestDocumentPathsData.fromJSON(object.documentPaths)
        : undefined,
    };
  },

  toJSON(message: ProjectArtifactOperationRequestReIndexDocumentOperation): unknown {
    const obj: any = {};
    message.indexAll !== undefined && (obj.indexAll = message.indexAll);
    message.documentPaths !== undefined && (obj.documentPaths = message.documentPaths
      ? ProjectArtifactOperationRequestDocumentPathsData.toJSON(message.documentPaths)
      : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectArtifactOperationRequestReIndexDocumentOperation>,
  ): ProjectArtifactOperationRequestReIndexDocumentOperation {
    const message = createBaseProjectArtifactOperationRequestReIndexDocumentOperation();
    message.indexAll = object.indexAll ?? undefined;
    message.documentPaths = (object.documentPaths !== undefined && object.documentPaths !== null)
      ? ProjectArtifactOperationRequestDocumentPathsData.fromPartial(object.documentPaths)
      : undefined;
    return message;
  },
};

function createBaseProjectArtifactOperationRequestDocumentPaths(): ProjectArtifactOperationRequestDocumentPaths {
  return { paths: [] };
}

export const ProjectArtifactOperationRequestDocumentPathsData = {
  encode(message: ProjectArtifactOperationRequestDocumentPaths, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paths) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectArtifactOperationRequestDocumentPaths {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectArtifactOperationRequestDocumentPaths();
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

  fromJSON(object: any): ProjectArtifactOperationRequestDocumentPaths {
    return { paths: Array.isArray(object?.paths) ? object.paths.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ProjectArtifactOperationRequestDocumentPaths): unknown {
    const obj: any = {};
    if (message.paths) {
      obj.paths = message.paths.map((e) => e);
    } else {
      obj.paths = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectArtifactOperationRequestDocumentPaths>,
  ): ProjectArtifactOperationRequestDocumentPaths {
    const message = createBaseProjectArtifactOperationRequestDocumentPaths();
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
};

function createBaseProjectArtifactOperationRequestReIndexSourceCodeOperation(): ProjectArtifactOperationRequestReIndexSourceCodeOperation {
  return {};
}

export const ProjectArtifactOperationRequestReIndexSourceCodeOperationData = {
  encode(
    message: ProjectArtifactOperationRequestReIndexSourceCodeOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.git !== undefined) {
      GitData.encode(message.git, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectArtifactOperationRequestReIndexSourceCodeOperation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectArtifactOperationRequestReIndexSourceCodeOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.git = GitData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectArtifactOperationRequestReIndexSourceCodeOperation {
    return { git: isSet(object.git) ? GitData.fromJSON(object.git) : undefined };
  },

  toJSON(message: ProjectArtifactOperationRequestReIndexSourceCodeOperation): unknown {
    const obj: any = {};
    message.git !== undefined && (obj.git = message.git ? GitData.toJSON(message.git) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectArtifactOperationRequestReIndexSourceCodeOperation>,
  ): ProjectArtifactOperationRequestReIndexSourceCodeOperation {
    const message = createBaseProjectArtifactOperationRequestReIndexSourceCodeOperation();
    message.git = (object.git !== undefined && object.git !== null) ? GitData.fromPartial(object.git) : undefined;
    return message;
  },
};

function createBaseProjectArtifactOperationResponse(): ProjectArtifactOperationResponse {
  return { projectGenerateQueueId: 0, projectId: 0 };
}

export const ProjectArtifactOperationResponseData = {
  encode(message: ProjectArtifactOperationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.progress !== undefined) {
      ProjectArtifactOperationResponseProgressData.encode(message.progress, writer.uint32(42).fork()).ldelim();
    }
    if (message.success !== undefined) {
      ProjectArtifactOperationResponseSuccessData.encode(message.success, writer.uint32(50).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ProjectArtifactOperationResponseErrorData.encode(message.error, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectArtifactOperationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectArtifactOperationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 5:
          message.progress = ProjectArtifactOperationResponseProgressData.decode(reader, reader.uint32());
          break;
        case 6:
          message.success = ProjectArtifactOperationResponseSuccessData.decode(reader, reader.uint32());
          break;
        case 7:
          message.error = ProjectArtifactOperationResponseErrorData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectArtifactOperationResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      progress: isSet(object.progress)
        ? ProjectArtifactOperationResponseProgressData.fromJSON(object.progress)
        : undefined,
      success: isSet(object.success) ? ProjectArtifactOperationResponseSuccessData.fromJSON(object.success) : undefined,
      error: isSet(object.error) ? ProjectArtifactOperationResponseErrorData.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ProjectArtifactOperationResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.progress !== undefined && (obj.progress = message.progress
      ? ProjectArtifactOperationResponseProgressData.toJSON(message.progress)
      : undefined);
    message.success !== undefined &&
      (obj.success = message.success ? ProjectArtifactOperationResponseSuccessData.toJSON(message.success) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? ProjectArtifactOperationResponseErrorData.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectArtifactOperationResponse>): ProjectArtifactOperationResponse {
    const message = createBaseProjectArtifactOperationResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.progress = (object.progress !== undefined && object.progress !== null)
      ? ProjectArtifactOperationResponseProgressData.fromPartial(object.progress)
      : undefined;
    message.success = (object.success !== undefined && object.success !== null)
      ? ProjectArtifactOperationResponseSuccessData.fromPartial(object.success)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ProjectArtifactOperationResponseErrorData.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseProjectArtifactOperationResponseProgress(): ProjectArtifactOperationResponseProgress {
  return { progress: 0, message: "" };
}

export const ProjectArtifactOperationResponseProgressData = {
  encode(message: ProjectArtifactOperationResponseProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.progress !== 0) {
      writer.uint32(8).int32(message.progress);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectArtifactOperationResponseProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectArtifactOperationResponseProgress();
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

  fromJSON(object: any): ProjectArtifactOperationResponseProgress {
    return {
      progress: isSet(object.progress) ? Number(object.progress) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: ProjectArtifactOperationResponseProgress): unknown {
    const obj: any = {};
    message.progress !== undefined && (obj.progress = Math.round(message.progress));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectArtifactOperationResponseProgress>): ProjectArtifactOperationResponseProgress {
    const message = createBaseProjectArtifactOperationResponseProgress();
    message.progress = object.progress ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseProjectArtifactOperationResponseError(): ProjectArtifactOperationResponseError {
  return { code: "", message: "", details: {} };
}

export const ProjectArtifactOperationResponseErrorData = {
  encode(message: ProjectArtifactOperationResponseError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    Object.entries(message.details).forEach(([key, value]) => {
      ProjectArtifactOperationResponseErrorDetailsEntryData.encode({ key: key as any, value }, writer.uint32(26).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectArtifactOperationResponseError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectArtifactOperationResponseError();
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
          const entry3 = ProjectArtifactOperationResponseErrorDetailsEntryData.decode(reader, reader.uint32());
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

  fromJSON(object: any): ProjectArtifactOperationResponseError {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      message: isSet(object.message) ? String(object.message) : "",
      details: isObject(object.details)
        ? Object.entries(object.details).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ProjectArtifactOperationResponseError): unknown {
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

  fromPartial(object: DeepPartial<ProjectArtifactOperationResponseError>): ProjectArtifactOperationResponseError {
    const message = createBaseProjectArtifactOperationResponseError();
    message.code = object.code ?? "";
    message.message = object.message ?? "";
    message.details = Object.entries(object.details ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseProjectArtifactOperationResponseErrorDetailsEntry(): ProjectArtifactOperationResponseErrorDetailsEntry {
  return { key: "", value: "" };
}

export const ProjectArtifactOperationResponseErrorDetailsEntryData = {
  encode(
    message: ProjectArtifactOperationResponseErrorDetailsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectArtifactOperationResponseErrorDetailsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectArtifactOperationResponseErrorDetailsEntry();
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

  fromJSON(object: any): ProjectArtifactOperationResponseErrorDetailsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProjectArtifactOperationResponseErrorDetailsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectArtifactOperationResponseErrorDetailsEntry>,
  ): ProjectArtifactOperationResponseErrorDetailsEntry {
    const message = createBaseProjectArtifactOperationResponseErrorDetailsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProjectArtifactOperationResponseSuccess(): ProjectArtifactOperationResponseSuccess {
  return { message: "", results: {} };
}

export const ProjectArtifactOperationResponseSuccessData = {
  encode(message: ProjectArtifactOperationResponseSuccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    Object.entries(message.results).forEach(([key, value]) => {
      ProjectArtifactOperationResponseSuccessResultsEntryData.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectArtifactOperationResponseSuccess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectArtifactOperationResponseSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          const entry2 = ProjectArtifactOperationResponseSuccessResultsEntryData.decode(reader, reader.uint32());
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

  fromJSON(object: any): ProjectArtifactOperationResponseSuccess {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      results: isObject(object.results)
        ? Object.entries(object.results).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ProjectArtifactOperationResponseSuccess): unknown {
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

  fromPartial(object: DeepPartial<ProjectArtifactOperationResponseSuccess>): ProjectArtifactOperationResponseSuccess {
    const message = createBaseProjectArtifactOperationResponseSuccess();
    message.message = object.message ?? "";
    message.results = Object.entries(object.results ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseProjectArtifactOperationResponseSuccessResultsEntry(): ProjectArtifactOperationResponseSuccessResultsEntry {
  return { key: "", value: "" };
}

export const ProjectArtifactOperationResponseSuccessResultsEntryData = {
  encode(
    message: ProjectArtifactOperationResponseSuccessResultsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectArtifactOperationResponseSuccessResultsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectArtifactOperationResponseSuccessResultsEntry();
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

  fromJSON(object: any): ProjectArtifactOperationResponseSuccessResultsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProjectArtifactOperationResponseSuccessResultsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectArtifactOperationResponseSuccessResultsEntry>,
  ): ProjectArtifactOperationResponseSuccessResultsEntry {
    const message = createBaseProjectArtifactOperationResponseSuccessResultsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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
