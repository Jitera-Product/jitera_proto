/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Block, BlockData } from "./block_core.proto";

export class ProjectPdfImportRequest {
  projectGenerateQueueId: number;
  projectId: number;
  file: string;
  succeedPages: number[];
  failedPages: number[];
}

export class ProjectPdfImportResponse {
  projectGenerateQueueId: number;
  projectId: number;
  module: ProjectPdfImportResponseModule;
  status: ProjectPdfImportResponseStatus;
  tokenUsage: number;
  useCaseBlocks: Block[];
  errorMessage: string;
  succeedPages: number[];
  failedPages: number[];
  language: string;
}

export enum ProjectPdfImportResponseModule {
  PDF_TO_NATURAL_LANGUAGE = 0,
  UNRECOGNIZED = -1,
}

export function projectPdfImportResponseModuleFromJSON(object: any): ProjectPdfImportResponseModule {
  switch (object) {
    case 0:
    case "PDF_TO_NATURAL_LANGUAGE":
      return ProjectPdfImportResponseModule.PDF_TO_NATURAL_LANGUAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectPdfImportResponseModule.UNRECOGNIZED;
  }
}

export function projectPdfImportResponseModuleToJSON(object: ProjectPdfImportResponseModule): string {
  switch (object) {
    case ProjectPdfImportResponseModule.PDF_TO_NATURAL_LANGUAGE:
      return "PDF_TO_NATURAL_LANGUAGE";
    case ProjectPdfImportResponseModule.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ProjectPdfImportResponseStatus {
  SUCCEEDED = 0,
  INPROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function projectPdfImportResponseStatusFromJSON(object: any): ProjectPdfImportResponseStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return ProjectPdfImportResponseStatus.SUCCEEDED;
    case 1:
    case "INPROGRESS":
      return ProjectPdfImportResponseStatus.INPROGRESS;
    case 2:
    case "FAILED":
      return ProjectPdfImportResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectPdfImportResponseStatus.UNRECOGNIZED;
  }
}

export function projectPdfImportResponseStatusToJSON(object: ProjectPdfImportResponseStatus): string {
  switch (object) {
    case ProjectPdfImportResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case ProjectPdfImportResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case ProjectPdfImportResponseStatus.FAILED:
      return "FAILED";
    case ProjectPdfImportResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseProjectPdfImportRequest(): ProjectPdfImportRequest {
  return { projectGenerateQueueId: 0, projectId: 0, file: "", succeedPages: [], failedPages: [] };
}

export const ProjectPdfImportRequestData = {
  encode(message: ProjectPdfImportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.file !== "") {
      writer.uint32(26).string(message.file);
    }
    writer.uint32(34).fork();
    for (const v of message.succeedPages) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.failedPages) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPdfImportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPdfImportRequest();
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
          message.file = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.succeedPages.push(reader.int32());
            }
          } else {
            message.succeedPages.push(reader.int32());
          }
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.failedPages.push(reader.int32());
            }
          } else {
            message.failedPages.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPdfImportRequest {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      file: isSet(object.file) ? String(object.file) : "",
      succeedPages: Array.isArray(object?.succeedPages) ? object.succeedPages.map((e: any) => Number(e)) : [],
      failedPages: Array.isArray(object?.failedPages) ? object.failedPages.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: ProjectPdfImportRequest): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.file !== undefined && (obj.file = message.file);
    if (message.succeedPages) {
      obj.succeedPages = message.succeedPages.map((e) => Math.round(e));
    } else {
      obj.succeedPages = [];
    }
    if (message.failedPages) {
      obj.failedPages = message.failedPages.map((e) => Math.round(e));
    } else {
      obj.failedPages = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectPdfImportRequest>): ProjectPdfImportRequest {
    const message = createBaseProjectPdfImportRequest();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.file = object.file ?? "";
    message.succeedPages = object.succeedPages?.map((e) => e) || [];
    message.failedPages = object.failedPages?.map((e) => e) || [];
    return message;
  },
};

function createBaseProjectPdfImportResponse(): ProjectPdfImportResponse {
  return {
    projectGenerateQueueId: 0,
    projectId: 0,
    module: 0,
    status: 0,
    tokenUsage: 0,
    useCaseBlocks: [],
    errorMessage: "",
    succeedPages: [],
    failedPages: [],
    language: "",
  };
}

export const ProjectPdfImportResponseData = {
  encode(message: ProjectPdfImportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.module !== 0) {
      writer.uint32(24).int32(message.module);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokenUsage !== 0) {
      writer.uint32(40).int32(message.tokenUsage);
    }
    for (const v of message.useCaseBlocks) {
      BlockData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.errorMessage !== "") {
      writer.uint32(58).string(message.errorMessage);
    }
    writer.uint32(66).fork();
    for (const v of message.succeedPages) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(74).fork();
    for (const v of message.failedPages) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.language !== "") {
      writer.uint32(82).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPdfImportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPdfImportResponse();
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
          message.module = reader.int32() as any;
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.tokenUsage = reader.int32();
          break;
        case 6:
          message.useCaseBlocks.push(BlockData.decode(reader, reader.uint32()));
          break;
        case 7:
          message.errorMessage = reader.string();
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.succeedPages.push(reader.int32());
            }
          } else {
            message.succeedPages.push(reader.int32());
          }
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.failedPages.push(reader.int32());
            }
          } else {
            message.failedPages.push(reader.int32());
          }
          break;
        case 10:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPdfImportResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      module: isSet(object.module) ? projectPdfImportResponseModuleFromJSON(object.module) : 0,
      status: isSet(object.status) ? projectPdfImportResponseStatusFromJSON(object.status) : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
      useCaseBlocks: Array.isArray(object?.useCaseBlocks)
        ? object.useCaseBlocks.map((e: any) => BlockData.fromJSON(e))
        : [],
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
      succeedPages: Array.isArray(object?.succeedPages) ? object.succeedPages.map((e: any) => Number(e)) : [],
      failedPages: Array.isArray(object?.failedPages) ? object.failedPages.map((e: any) => Number(e)) : [],
      language: isSet(object.language) ? String(object.language) : "",
    };
  },

  toJSON(message: ProjectPdfImportResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.module !== undefined && (obj.module = projectPdfImportResponseModuleToJSON(message.module));
    message.status !== undefined && (obj.status = projectPdfImportResponseStatusToJSON(message.status));
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    if (message.useCaseBlocks) {
      obj.useCaseBlocks = message.useCaseBlocks.map((e) => e ? BlockData.toJSON(e) : undefined);
    } else {
      obj.useCaseBlocks = [];
    }
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    if (message.succeedPages) {
      obj.succeedPages = message.succeedPages.map((e) => Math.round(e));
    } else {
      obj.succeedPages = [];
    }
    if (message.failedPages) {
      obj.failedPages = message.failedPages.map((e) => Math.round(e));
    } else {
      obj.failedPages = [];
    }
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectPdfImportResponse>): ProjectPdfImportResponse {
    const message = createBaseProjectPdfImportResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.module = object.module ?? 0;
    message.status = object.status ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    message.useCaseBlocks = object.useCaseBlocks?.map((e) => BlockData.fromPartial(e)) || [];
    message.errorMessage = object.errorMessage ?? "";
    message.succeedPages = object.succeedPages?.map((e) => e) || [];
    message.failedPages = object.failedPages?.map((e) => e) || [];
    message.language = object.language ?? "";
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
