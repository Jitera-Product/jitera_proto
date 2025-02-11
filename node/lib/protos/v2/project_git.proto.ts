/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Block, BlockData } from "./block_core.proto";
import {
  Git,
  GitData,
  ProjectSource,
  ProjectSourceConfiguration,
  ProjectSourceConfigurationData,
  ProjectSourceData,
} from "./project_source.proto";

export class ProjectGitSyncRequest {
  projectGenerateQueueId: number;
  projectId: number;
  git?: Git;
  projectSource?: ProjectSource;
  changedFiles: string[];
  actionType?: ProjectGitSyncRequestAction | undefined;
  sourceConfigurations: ProjectSourceConfiguration[];
}

export enum ProjectGitSyncRequestAction {
  CODE_TO_ERD = 0,
  CODE_TO_NATURAL_LANGUAGE = 1,
  UNRECOGNIZED = -1,
}

export function projectGitSyncRequestActionFromJSON(
  object: any
): ProjectGitSyncRequestAction {
  switch (object) {
    case 0:
    case "CODE_TO_ERD":
      return ProjectGitSyncRequestAction.CODE_TO_ERD;
    case 1:
    case "CODE_TO_NATURAL_LANGUAGE":
      return ProjectGitSyncRequestAction.CODE_TO_NATURAL_LANGUAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectGitSyncRequestAction.UNRECOGNIZED;
  }
}

export function projectGitSyncRequestActionToJSON(
  object: ProjectGitSyncRequestAction
): string {
  switch (object) {
    case ProjectGitSyncRequestAction.CODE_TO_ERD:
      return "CODE_TO_ERD";
    case ProjectGitSyncRequestAction.CODE_TO_NATURAL_LANGUAGE:
      return "CODE_TO_NATURAL_LANGUAGE";
    case ProjectGitSyncRequestAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class ProjectGitSyncResponse {
  projectGenerateQueueId: number;
  projectId: number;
  module: ProjectGitSyncResponseModule;
  status: ProjectGitSyncResponseStatus;
  tokenUsage: number;
  blocks: Block[];
  erds: string;
  errorMessage: string;
}

export enum ProjectGitSyncResponseModule {
  CODE_TO_ERD = 0,
  CODE_TO_NATURAL_LANGUAGE = 1,
  UNRECOGNIZED = -1,
}

export function projectGitSyncResponseModuleFromJSON(
  object: any
): ProjectGitSyncResponseModule {
  switch (object) {
    case 0:
    case "CODE_TO_ERD":
      return ProjectGitSyncResponseModule.CODE_TO_ERD;
    case 1:
    case "CODE_TO_NATURAL_LANGUAGE":
      return ProjectGitSyncResponseModule.CODE_TO_NATURAL_LANGUAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectGitSyncResponseModule.UNRECOGNIZED;
  }
}

export function projectGitSyncResponseModuleToJSON(
  object: ProjectGitSyncResponseModule
): string {
  switch (object) {
    case ProjectGitSyncResponseModule.CODE_TO_ERD:
      return "CODE_TO_ERD";
    case ProjectGitSyncResponseModule.CODE_TO_NATURAL_LANGUAGE:
      return "CODE_TO_NATURAL_LANGUAGE";
    case ProjectGitSyncResponseModule.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ProjectGitSyncResponseStatus {
  SUCCEEDED = 0,
  INPROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function projectGitSyncResponseStatusFromJSON(
  object: any
): ProjectGitSyncResponseStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return ProjectGitSyncResponseStatus.SUCCEEDED;
    case 1:
    case "INPROGRESS":
      return ProjectGitSyncResponseStatus.INPROGRESS;
    case 2:
    case "FAILED":
      return ProjectGitSyncResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectGitSyncResponseStatus.UNRECOGNIZED;
  }
}

export function projectGitSyncResponseStatusToJSON(
  object: ProjectGitSyncResponseStatus
): string {
  switch (object) {
    case ProjectGitSyncResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case ProjectGitSyncResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case ProjectGitSyncResponseStatus.FAILED:
      return "FAILED";
    case ProjectGitSyncResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseProjectGitSyncRequest(): ProjectGitSyncRequest {
  return {
    projectGenerateQueueId: 0,
    projectId: 0,
    changedFiles: [],
    sourceConfigurations: [],
  };
}

export const ProjectGitSyncRequestData = {
  encode(
    message: ProjectGitSyncRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.git !== undefined) {
      GitData.encode(message.git, writer.uint32(26).fork()).ldelim();
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(
        message.projectSource,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.changedFiles) {
      writer.uint32(42).string(v!);
    }
    if (message.actionType !== undefined) {
      writer.uint32(48).int32(message.actionType);
    }
    for (const v of message.sourceConfigurations) {
      ProjectSourceConfigurationData.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectGitSyncRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectGitSyncRequest();
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
          message.git = GitData.decode(reader, reader.uint32());
          break;
        case 4:
          message.projectSource = ProjectSourceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.changedFiles.push(reader.string());
          break;
        case 6:
          message.actionType = reader.int32() as any;
          break;
        case 7:
          message.sourceConfigurations.push(
            ProjectSourceConfigurationData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectGitSyncRequest {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      git: isSet(object.git) ? GitData.fromJSON(object.git) : undefined,
      projectSource: isSet(object.projectSource)
        ? ProjectSourceData.fromJSON(object.projectSource)
        : undefined,
      changedFiles: Array.isArray(object?.changedFiles)
        ? object.changedFiles.map((e: any) => String(e))
        : [],
      actionType: isSet(object.actionType)
        ? projectGitSyncRequestActionFromJSON(object.actionType)
        : undefined,
      sourceConfigurations: Array.isArray(object?.sourceConfigurations)
        ? object.sourceConfigurations.map((e: any) =>
            ProjectSourceConfigurationData.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: ProjectGitSyncRequest): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.git !== undefined &&
      (obj.git = message.git ? GitData.toJSON(message.git) : undefined);
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource
        ? ProjectSourceData.toJSON(message.projectSource)
        : undefined);
    if (message.changedFiles) {
      obj.changedFiles = message.changedFiles.map((e) => e);
    } else {
      obj.changedFiles = [];
    }
    message.actionType !== undefined &&
      (obj.actionType =
        message.actionType !== undefined
          ? projectGitSyncRequestActionToJSON(message.actionType)
          : undefined);
    if (message.sourceConfigurations) {
      obj.sourceConfigurations = message.sourceConfigurations.map((e) =>
        e ? ProjectSourceConfigurationData.toJSON(e) : undefined
      );
    } else {
      obj.sourceConfigurations = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectGitSyncRequest>
  ): ProjectGitSyncRequest {
    const message = createBaseProjectGitSyncRequest();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.git =
      object.git !== undefined && object.git !== null
        ? GitData.fromPartial(object.git)
        : undefined;
    message.projectSource =
      object.projectSource !== undefined && object.projectSource !== null
        ? ProjectSourceData.fromPartial(object.projectSource)
        : undefined;
    message.changedFiles = object.changedFiles?.map((e) => e) || [];
    message.actionType = object.actionType ?? undefined;
    message.sourceConfigurations =
      object.sourceConfigurations?.map((e) =>
        ProjectSourceConfigurationData.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseProjectGitSyncResponse(): ProjectGitSyncResponse {
  return {
    projectGenerateQueueId: 0,
    projectId: 0,
    module: 0,
    status: 0,
    tokenUsage: 0,
    blocks: [],
    erds: "",
    errorMessage: "",
  };
}

export const ProjectGitSyncResponseData = {
  encode(
    message: ProjectGitSyncResponse,
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
    for (const v of message.blocks) {
      BlockData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.erds !== "") {
      writer.uint32(58).string(message.erds);
    }
    if (message.errorMessage !== "") {
      writer.uint32(66).string(message.errorMessage);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectGitSyncResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectGitSyncResponse();
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
          message.blocks.push(BlockData.decode(reader, reader.uint32()));
          break;
        case 7:
          message.erds = reader.string();
          break;
        case 8:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectGitSyncResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      module: isSet(object.module)
        ? projectGitSyncResponseModuleFromJSON(object.module)
        : 0,
      status: isSet(object.status)
        ? projectGitSyncResponseStatusFromJSON(object.status)
        : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
      blocks: Array.isArray(object?.blocks)
        ? object.blocks.map((e: any) => BlockData.fromJSON(e))
        : [],
      erds: isSet(object.erds) ? String(object.erds) : "",
      errorMessage: isSet(object.errorMessage)
        ? String(object.errorMessage)
        : "",
    };
  },

  toJSON(message: ProjectGitSyncResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.module !== undefined &&
      (obj.module = projectGitSyncResponseModuleToJSON(message.module));
    message.status !== undefined &&
      (obj.status = projectGitSyncResponseStatusToJSON(message.status));
    message.tokenUsage !== undefined &&
      (obj.tokenUsage = Math.round(message.tokenUsage));
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) =>
        e ? BlockData.toJSON(e) : undefined
      );
    } else {
      obj.blocks = [];
    }
    message.erds !== undefined && (obj.erds = message.erds);
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectGitSyncResponse>
  ): ProjectGitSyncResponse {
    const message = createBaseProjectGitSyncResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.module = object.module ?? 0;
    message.status = object.status ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    message.blocks = object.blocks?.map((e) => BlockData.fromPartial(e)) || [];
    message.erds = object.erds ?? "";
    message.errorMessage = object.errorMessage ?? "";
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
