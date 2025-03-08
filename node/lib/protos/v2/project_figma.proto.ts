/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Block, BlockData } from "./block_core.proto";
import {
  ComponentSpecification,
  ComponentSpecificationData,
} from "./component_specification.proto";

export class ProjectFigmaImportRequest {
  projectGenerateQueueId: number;
  projectId: number;
  accessToken: string;
  nodeIds: string;
  fileKey: string;
  masterLanguageCode: string;
}

export class ProjectFigmaSyncRequest {
  projectGenerateQueueId: number;
  projectId: number;
  accessToken: string;
  useCaseBlocks: Block[];
  masterLanguageCode: string;
}

export class ProjectFigmaImportResponse {
  projectGenerateQueueId: number;
  projectId: number;
  module: ProjectFigmaImportResponseModule;
  status: ProjectFigmaImportResponseStatus;
  tokenUsage: number;
  useCaseBlocks: Block[];
  errorMessage: string;
  componentSpecifications: ComponentSpecification[];
}

export enum ProjectFigmaImportResponseModule {
  FIGMA_TO_NATURAL_LANGUAGE = 0,
  FIGMA_TO_COMPONENT_SPECIFICATION = 1,
  UNRECOGNIZED = -1,
}

export function projectFigmaImportResponseModuleFromJSON(
  object: any
): ProjectFigmaImportResponseModule {
  switch (object) {
    case 0:
    case "FIGMA_TO_NATURAL_LANGUAGE":
      return ProjectFigmaImportResponseModule.FIGMA_TO_NATURAL_LANGUAGE;
    case 1:
    case "FIGMA_TO_COMPONENT_SPECIFICATION":
      return ProjectFigmaImportResponseModule.FIGMA_TO_COMPONENT_SPECIFICATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectFigmaImportResponseModule.UNRECOGNIZED;
  }
}

export function projectFigmaImportResponseModuleToJSON(
  object: ProjectFigmaImportResponseModule
): string {
  switch (object) {
    case ProjectFigmaImportResponseModule.FIGMA_TO_NATURAL_LANGUAGE:
      return "FIGMA_TO_NATURAL_LANGUAGE";
    case ProjectFigmaImportResponseModule.FIGMA_TO_COMPONENT_SPECIFICATION:
      return "FIGMA_TO_COMPONENT_SPECIFICATION";
    case ProjectFigmaImportResponseModule.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ProjectFigmaImportResponseStatus {
  SUCCEEDED = 0,
  INPROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function projectFigmaImportResponseStatusFromJSON(
  object: any
): ProjectFigmaImportResponseStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return ProjectFigmaImportResponseStatus.SUCCEEDED;
    case 1:
    case "INPROGRESS":
      return ProjectFigmaImportResponseStatus.INPROGRESS;
    case 2:
    case "FAILED":
      return ProjectFigmaImportResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectFigmaImportResponseStatus.UNRECOGNIZED;
  }
}

export function projectFigmaImportResponseStatusToJSON(
  object: ProjectFigmaImportResponseStatus
): string {
  switch (object) {
    case ProjectFigmaImportResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case ProjectFigmaImportResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case ProjectFigmaImportResponseStatus.FAILED:
      return "FAILED";
    case ProjectFigmaImportResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class Figma {
  accessToken: string;
}

function createBaseProjectFigmaImportRequest(): ProjectFigmaImportRequest {
  return {
    projectGenerateQueueId: 0,
    projectId: 0,
    accessToken: "",
    nodeIds: "",
    fileKey: "",
    masterLanguageCode: "",
  };
}

export const ProjectFigmaImportRequestData = {
  encode(
    message: ProjectFigmaImportRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.accessToken !== "") {
      writer.uint32(26).string(message.accessToken);
    }
    if (message.nodeIds !== "") {
      writer.uint32(34).string(message.nodeIds);
    }
    if (message.fileKey !== "") {
      writer.uint32(42).string(message.fileKey);
    }
    if (message.masterLanguageCode !== "") {
      writer.uint32(50).string(message.masterLanguageCode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectFigmaImportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectFigmaImportRequest();
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
          message.accessToken = reader.string();
          break;
        case 4:
          message.nodeIds = reader.string();
          break;
        case 5:
          message.fileKey = reader.string();
          break;
        case 6:
          message.masterLanguageCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectFigmaImportRequest {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      nodeIds: isSet(object.nodeIds) ? String(object.nodeIds) : "",
      fileKey: isSet(object.fileKey) ? String(object.fileKey) : "",
      masterLanguageCode: isSet(object.masterLanguageCode)
        ? String(object.masterLanguageCode)
        : "",
    };
  },

  toJSON(message: ProjectFigmaImportRequest): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.accessToken !== undefined &&
      (obj.accessToken = message.accessToken);
    message.nodeIds !== undefined && (obj.nodeIds = message.nodeIds);
    message.fileKey !== undefined && (obj.fileKey = message.fileKey);
    message.masterLanguageCode !== undefined &&
      (obj.masterLanguageCode = message.masterLanguageCode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectFigmaImportRequest>
  ): ProjectFigmaImportRequest {
    const message = createBaseProjectFigmaImportRequest();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.accessToken = object.accessToken ?? "";
    message.nodeIds = object.nodeIds ?? "";
    message.fileKey = object.fileKey ?? "";
    message.masterLanguageCode = object.masterLanguageCode ?? "";
    return message;
  },
};

function createBaseProjectFigmaSyncRequest(): ProjectFigmaSyncRequest {
  return {
    projectGenerateQueueId: 0,
    projectId: 0,
    accessToken: "",
    useCaseBlocks: [],
    masterLanguageCode: "",
  };
}

export const ProjectFigmaSyncRequestData = {
  encode(
    message: ProjectFigmaSyncRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.accessToken !== "") {
      writer.uint32(26).string(message.accessToken);
    }
    for (const v of message.useCaseBlocks) {
      BlockData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.masterLanguageCode !== "") {
      writer.uint32(42).string(message.masterLanguageCode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectFigmaSyncRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectFigmaSyncRequest();
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
          message.accessToken = reader.string();
          break;
        case 4:
          message.useCaseBlocks.push(BlockData.decode(reader, reader.uint32()));
          break;
        case 5:
          message.masterLanguageCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectFigmaSyncRequest {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      useCaseBlocks: Array.isArray(object?.useCaseBlocks)
        ? object.useCaseBlocks.map((e: any) => BlockData.fromJSON(e))
        : [],
      masterLanguageCode: isSet(object.masterLanguageCode)
        ? String(object.masterLanguageCode)
        : "",
    };
  },

  toJSON(message: ProjectFigmaSyncRequest): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.accessToken !== undefined &&
      (obj.accessToken = message.accessToken);
    if (message.useCaseBlocks) {
      obj.useCaseBlocks = message.useCaseBlocks.map((e) =>
        e ? BlockData.toJSON(e) : undefined
      );
    } else {
      obj.useCaseBlocks = [];
    }
    message.masterLanguageCode !== undefined &&
      (obj.masterLanguageCode = message.masterLanguageCode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectFigmaSyncRequest>
  ): ProjectFigmaSyncRequest {
    const message = createBaseProjectFigmaSyncRequest();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.accessToken = object.accessToken ?? "";
    message.useCaseBlocks =
      object.useCaseBlocks?.map((e) => BlockData.fromPartial(e)) || [];
    message.masterLanguageCode = object.masterLanguageCode ?? "";
    return message;
  },
};

function createBaseProjectFigmaImportResponse(): ProjectFigmaImportResponse {
  return {
    projectGenerateQueueId: 0,
    projectId: 0,
    module: 0,
    status: 0,
    tokenUsage: 0,
    useCaseBlocks: [],
    errorMessage: "",
    componentSpecifications: [],
  };
}

export const ProjectFigmaImportResponseData = {
  encode(
    message: ProjectFigmaImportResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    for (const v of message.componentSpecifications) {
      ComponentSpecificationData.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectFigmaImportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectFigmaImportResponse();
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
          message.componentSpecifications.push(
            ComponentSpecificationData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectFigmaImportResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      module: isSet(object.module)
        ? projectFigmaImportResponseModuleFromJSON(object.module)
        : 0,
      status: isSet(object.status)
        ? projectFigmaImportResponseStatusFromJSON(object.status)
        : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
      useCaseBlocks: Array.isArray(object?.useCaseBlocks)
        ? object.useCaseBlocks.map((e: any) => BlockData.fromJSON(e))
        : [],
      errorMessage: isSet(object.errorMessage)
        ? String(object.errorMessage)
        : "",
      componentSpecifications: Array.isArray(object?.componentSpecifications)
        ? object.componentSpecifications.map((e: any) =>
            ComponentSpecificationData.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: ProjectFigmaImportResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.module !== undefined &&
      (obj.module = projectFigmaImportResponseModuleToJSON(message.module));
    message.status !== undefined &&
      (obj.status = projectFigmaImportResponseStatusToJSON(message.status));
    message.tokenUsage !== undefined &&
      (obj.tokenUsage = Math.round(message.tokenUsage));
    if (message.useCaseBlocks) {
      obj.useCaseBlocks = message.useCaseBlocks.map((e) =>
        e ? BlockData.toJSON(e) : undefined
      );
    } else {
      obj.useCaseBlocks = [];
    }
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    if (message.componentSpecifications) {
      obj.componentSpecifications = message.componentSpecifications.map((e) =>
        e ? ComponentSpecificationData.toJSON(e) : undefined
      );
    } else {
      obj.componentSpecifications = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectFigmaImportResponse>
  ): ProjectFigmaImportResponse {
    const message = createBaseProjectFigmaImportResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.module = object.module ?? 0;
    message.status = object.status ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    message.useCaseBlocks =
      object.useCaseBlocks?.map((e) => BlockData.fromPartial(e)) || [];
    message.errorMessage = object.errorMessage ?? "";
    message.componentSpecifications =
      object.componentSpecifications?.map((e) =>
        ComponentSpecificationData.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseFigma(): Figma {
  return { accessToken: "" };
}

export const FigmaData = {
  encode(message: Figma, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Figma {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFigma();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Figma {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
    };
  },

  toJSON(message: Figma): unknown {
    const obj: any = {};
    message.accessToken !== undefined &&
      (obj.accessToken = message.accessToken);
    return obj;
  },

  fromPartial(object: DeepPartial<Figma>): Figma {
    const message = createBaseFigma();
    message.accessToken = object.accessToken ?? "";
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
