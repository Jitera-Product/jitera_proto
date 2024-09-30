/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { StructData } from "../google/protobuf/struct.proto";
import { BrowserStorageState, BrowserStorageStateData } from "./browser.proto";
import { ProjectSource, ProjectSourceData } from "./project_source.proto";

export class ProjectPageImport {
  projectGenerateQueueId: number;
  projectId: number;
  url: string;
  projectSource?: ProjectSource;
  storageState?: BrowserStorageState;
}

export class ProjectPageImportResponse {
  projectGenerateQueueId: number;
  projectId: number;
  status: ProjectPageImportResponseStatus;
  payload?: { [key: string]: any };
}

export enum ProjectPageImportResponseStatus {
  SUCCEEDED = 0,
  INPROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function projectPageImportResponseStatusFromJSON(object: any): ProjectPageImportResponseStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return ProjectPageImportResponseStatus.SUCCEEDED;
    case 1:
    case "INPROGRESS":
      return ProjectPageImportResponseStatus.INPROGRESS;
    case 2:
    case "FAILED":
      return ProjectPageImportResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectPageImportResponseStatus.UNRECOGNIZED;
  }
}

export function projectPageImportResponseStatusToJSON(object: ProjectPageImportResponseStatus): string {
  switch (object) {
    case ProjectPageImportResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case ProjectPageImportResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case ProjectPageImportResponseStatus.FAILED:
      return "FAILED";
    case ProjectPageImportResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseProjectPageImport(): ProjectPageImport {
  return { projectGenerateQueueId: 0, projectId: 0, url: "" };
}

export const ProjectPageImportData = {
  encode(message: ProjectPageImport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(message.projectSource, writer.uint32(34).fork()).ldelim();
    }
    if (message.storageState !== undefined) {
      BrowserStorageStateData.encode(message.storageState, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPageImport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPageImport();
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
          message.url = reader.string();
          break;
        case 4:
          message.projectSource = ProjectSourceData.decode(reader, reader.uint32());
          break;
        case 5:
          message.storageState = BrowserStorageStateData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPageImport {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      projectSource: isSet(object.projectSource) ? ProjectSourceData.fromJSON(object.projectSource) : undefined,
      storageState: isSet(object.storageState) ? BrowserStorageStateData.fromJSON(object.storageState) : undefined,
    };
  },

  toJSON(message: ProjectPageImport): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.url !== undefined && (obj.url = message.url);
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource ? ProjectSourceData.toJSON(message.projectSource) : undefined);
    message.storageState !== undefined &&
      (obj.storageState = message.storageState ? BrowserStorageStateData.toJSON(message.storageState) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectPageImport>): ProjectPageImport {
    const message = createBaseProjectPageImport();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.url = object.url ?? "";
    message.projectSource = (object.projectSource !== undefined && object.projectSource !== null)
      ? ProjectSourceData.fromPartial(object.projectSource)
      : undefined;
    message.storageState = (object.storageState !== undefined && object.storageState !== null)
      ? BrowserStorageStateData.fromPartial(object.storageState)
      : undefined;
    return message;
  },
};

function createBaseProjectPageImportResponse(): ProjectPageImportResponse {
  return { projectGenerateQueueId: 0, projectId: 0, status: 0 };
}

export const ProjectPageImportResponseData = {
  encode(message: ProjectPageImportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.payload !== undefined) {
      StructData.encode(StructData.wrap(message.payload), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPageImportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPageImportResponse();
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
          message.status = reader.int32() as any;
          break;
        case 4:
          message.payload = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPageImportResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      status: isSet(object.status) ? projectPageImportResponseStatusFromJSON(object.status) : 0,
      payload: isObject(object.payload) ? object.payload : undefined,
    };
  },

  toJSON(message: ProjectPageImportResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.status !== undefined && (obj.status = projectPageImportResponseStatusToJSON(message.status));
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectPageImportResponse>): ProjectPageImportResponse {
    const message = createBaseProjectPageImportResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.status = object.status ?? 0;
    message.payload = object.payload ?? undefined;
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
