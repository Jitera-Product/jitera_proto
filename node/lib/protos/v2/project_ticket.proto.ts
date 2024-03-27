/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Block, BlockData } from "./block_core.proto";
import { Figma, FigmaData } from "./project_figma.proto";

export class ProjectTicketCreationRequest {
  projectGenerateQueueId: number;
  projectId: number;
  figma?: Figma | undefined;
  useCases: Block[];
}

export class ProjectTicketCreationResponse {
  projectGenerateQueueId: number;
  projectId: number;
  module: ProjectTicketCreationResponseModule;
  status: ProjectTicketCreationResponseStatus;
  tokenUsage: number;
  tickets: Block[];
  errorMessage: string;
}

export enum ProjectTicketCreationResponseModule {
  USECASE_TO_TICKET = 0,
  UNRECOGNIZED = -1,
}

export function projectTicketCreationResponseModuleFromJSON(object: any): ProjectTicketCreationResponseModule {
  switch (object) {
    case 0:
    case "USECASE_TO_TICKET":
      return ProjectTicketCreationResponseModule.USECASE_TO_TICKET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectTicketCreationResponseModule.UNRECOGNIZED;
  }
}

export function projectTicketCreationResponseModuleToJSON(object: ProjectTicketCreationResponseModule): string {
  switch (object) {
    case ProjectTicketCreationResponseModule.USECASE_TO_TICKET:
      return "USECASE_TO_TICKET";
    case ProjectTicketCreationResponseModule.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ProjectTicketCreationResponseStatus {
  SUCCEEDED = 0,
  INPROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function projectTicketCreationResponseStatusFromJSON(object: any): ProjectTicketCreationResponseStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return ProjectTicketCreationResponseStatus.SUCCEEDED;
    case 1:
    case "INPROGRESS":
      return ProjectTicketCreationResponseStatus.INPROGRESS;
    case 2:
    case "FAILED":
      return ProjectTicketCreationResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectTicketCreationResponseStatus.UNRECOGNIZED;
  }
}

export function projectTicketCreationResponseStatusToJSON(object: ProjectTicketCreationResponseStatus): string {
  switch (object) {
    case ProjectTicketCreationResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case ProjectTicketCreationResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case ProjectTicketCreationResponseStatus.FAILED:
      return "FAILED";
    case ProjectTicketCreationResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseProjectTicketCreationRequest(): ProjectTicketCreationRequest {
  return { projectGenerateQueueId: 0, projectId: 0, useCases: [] };
}

export const ProjectTicketCreationRequestData = {
  encode(message: ProjectTicketCreationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.figma !== undefined) {
      FigmaData.encode(message.figma, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.useCases) {
      BlockData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectTicketCreationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectTicketCreationRequest();
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
          message.figma = FigmaData.decode(reader, reader.uint32());
          break;
        case 4:
          message.useCases.push(BlockData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectTicketCreationRequest {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      figma: isSet(object.figma) ? FigmaData.fromJSON(object.figma) : undefined,
      useCases: Array.isArray(object?.useCases) ? object.useCases.map((e: any) => BlockData.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProjectTicketCreationRequest): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.figma !== undefined && (obj.figma = message.figma ? FigmaData.toJSON(message.figma) : undefined);
    if (message.useCases) {
      obj.useCases = message.useCases.map((e) => e ? BlockData.toJSON(e) : undefined);
    } else {
      obj.useCases = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectTicketCreationRequest>): ProjectTicketCreationRequest {
    const message = createBaseProjectTicketCreationRequest();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.figma = (object.figma !== undefined && object.figma !== null)
      ? FigmaData.fromPartial(object.figma)
      : undefined;
    message.useCases = object.useCases?.map((e) => BlockData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectTicketCreationResponse(): ProjectTicketCreationResponse {
  return {
    projectGenerateQueueId: 0,
    projectId: 0,
    module: 0,
    status: 0,
    tokenUsage: 0,
    tickets: [],
    errorMessage: "",
  };
}

export const ProjectTicketCreationResponseData = {
  encode(message: ProjectTicketCreationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    for (const v of message.tickets) {
      BlockData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.errorMessage !== "") {
      writer.uint32(58).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectTicketCreationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectTicketCreationResponse();
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
          message.tickets.push(BlockData.decode(reader, reader.uint32()));
          break;
        case 7:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectTicketCreationResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      module: isSet(object.module) ? projectTicketCreationResponseModuleFromJSON(object.module) : 0,
      status: isSet(object.status) ? projectTicketCreationResponseStatusFromJSON(object.status) : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
      tickets: Array.isArray(object?.tickets) ? object.tickets.map((e: any) => BlockData.fromJSON(e)) : [],
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
    };
  },

  toJSON(message: ProjectTicketCreationResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.module !== undefined && (obj.module = projectTicketCreationResponseModuleToJSON(message.module));
    message.status !== undefined && (obj.status = projectTicketCreationResponseStatusToJSON(message.status));
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    if (message.tickets) {
      obj.tickets = message.tickets.map((e) => e ? BlockData.toJSON(e) : undefined);
    } else {
      obj.tickets = [];
    }
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectTicketCreationResponse>): ProjectTicketCreationResponse {
    const message = createBaseProjectTicketCreationResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.module = object.module ?? 0;
    message.status = object.status ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    message.tickets = object.tickets?.map((e) => BlockData.fromPartial(e)) || [];
    message.errorMessage = object.errorMessage ?? "";
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
