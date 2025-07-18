/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StructData } from "../google/protobuf/struct.proto";

export enum ProjectSourceConfigurationCategoryEnum {
  ERD_MIGRATION = 0,
  ERD_MODEL = 1,
  BL = 2,
  API = 3,
  UNRECOGNIZED = -1,
}

export function projectSourceConfigurationCategoryEnumFromJSON(
  object: any
): ProjectSourceConfigurationCategoryEnum {
  switch (object) {
    case 0:
    case "ERD_MIGRATION":
      return ProjectSourceConfigurationCategoryEnum.ERD_MIGRATION;
    case 1:
    case "ERD_MODEL":
      return ProjectSourceConfigurationCategoryEnum.ERD_MODEL;
    case 2:
    case "BL":
      return ProjectSourceConfigurationCategoryEnum.BL;
    case 3:
    case "API":
      return ProjectSourceConfigurationCategoryEnum.API;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectSourceConfigurationCategoryEnum.UNRECOGNIZED;
  }
}

export function projectSourceConfigurationCategoryEnumToJSON(
  object: ProjectSourceConfigurationCategoryEnum
): string {
  switch (object) {
    case ProjectSourceConfigurationCategoryEnum.ERD_MIGRATION:
      return "ERD_MIGRATION";
    case ProjectSourceConfigurationCategoryEnum.ERD_MODEL:
      return "ERD_MODEL";
    case ProjectSourceConfigurationCategoryEnum.BL:
      return "BL";
    case ProjectSourceConfigurationCategoryEnum.API:
      return "API";
    case ProjectSourceConfigurationCategoryEnum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ImportBy {
  github = 0,
  notion = 1,
  google_docs = 2,
  figma = 3,
  gitlab = 4,
  dsl = 5,
  local = 6,
  UNRECOGNIZED = -1,
}

export function importByFromJSON(object: any): ImportBy {
  switch (object) {
    case 0:
    case "github":
      return ImportBy.github;
    case 1:
    case "notion":
      return ImportBy.notion;
    case 2:
    case "google_docs":
      return ImportBy.google_docs;
    case 3:
    case "figma":
      return ImportBy.figma;
    case 4:
    case "gitlab":
      return ImportBy.gitlab;
    case 5:
    case "dsl":
      return ImportBy.dsl;
    case 6:
    case "local":
      return ImportBy.local;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ImportBy.UNRECOGNIZED;
  }
}

export function importByToJSON(object: ImportBy): string {
  switch (object) {
    case ImportBy.github:
      return "github";
    case ImportBy.notion:
      return "notion";
    case ImportBy.google_docs:
      return "google_docs";
    case ImportBy.figma:
      return "figma";
    case ImportBy.gitlab:
      return "gitlab";
    case ImportBy.dsl:
      return "dsl";
    case ImportBy.local:
      return "local";
    case ImportBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class GenerateSource {
  id: number;
  type: string;
  data?: { [key: string]: any };
}

export class ProjectSourceConfiguration {
  id: string;
  category: ProjectSourceConfigurationCategoryEnum;
  filePatterns: string[];
  autoDiscover: boolean;
}

export class ProjectSource {
  id: number;
  projectId: number;
  framework: ProjectSourceFramework;
  layer: ProjectSourceLayer;
  files: string;
  platform: ProjectSourcePlatform;
  masterLanguageCode: string;
  sourceUrl?: string | undefined;
  sourceFileEncryptedKey?: string | undefined;
  uuid: string;
}

export enum ProjectSourceFramework {
  FRAMEWORK_UNSPECIFIED = 0,
  NEXTJS = 1,
  VITE = 2,
  NUXTJS = 3,
  NESTJS = 4,
  ROR = 5,
  LARAVEL = 6,
  REACT_NATIVE = 7,
  UNRECOGNIZED = -1,
}

export function projectSourceFrameworkFromJSON(
  object: any
): ProjectSourceFramework {
  switch (object) {
    case 0:
    case "FRAMEWORK_UNSPECIFIED":
      return ProjectSourceFramework.FRAMEWORK_UNSPECIFIED;
    case 1:
    case "NEXTJS":
      return ProjectSourceFramework.NEXTJS;
    case 2:
    case "VITE":
      return ProjectSourceFramework.VITE;
    case 3:
    case "NUXTJS":
      return ProjectSourceFramework.NUXTJS;
    case 4:
    case "NESTJS":
      return ProjectSourceFramework.NESTJS;
    case 5:
    case "ROR":
      return ProjectSourceFramework.ROR;
    case 6:
    case "LARAVEL":
      return ProjectSourceFramework.LARAVEL;
    case 7:
    case "REACT_NATIVE":
      return ProjectSourceFramework.REACT_NATIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectSourceFramework.UNRECOGNIZED;
  }
}

export function projectSourceFrameworkToJSON(
  object: ProjectSourceFramework
): string {
  switch (object) {
    case ProjectSourceFramework.FRAMEWORK_UNSPECIFIED:
      return "FRAMEWORK_UNSPECIFIED";
    case ProjectSourceFramework.NEXTJS:
      return "NEXTJS";
    case ProjectSourceFramework.VITE:
      return "VITE";
    case ProjectSourceFramework.NUXTJS:
      return "NUXTJS";
    case ProjectSourceFramework.NESTJS:
      return "NESTJS";
    case ProjectSourceFramework.ROR:
      return "ROR";
    case ProjectSourceFramework.LARAVEL:
      return "LARAVEL";
    case ProjectSourceFramework.REACT_NATIVE:
      return "REACT_NATIVE";
    case ProjectSourceFramework.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ProjectSourceLayer {
  LAYER_UNSPECIFIED = 0,
  BACKEND = 1,
  FRONTEND = 2,
  MONOREPO = 3,
  UNRECOGNIZED = -1,
}

export function projectSourceLayerFromJSON(object: any): ProjectSourceLayer {
  switch (object) {
    case 0:
    case "LAYER_UNSPECIFIED":
      return ProjectSourceLayer.LAYER_UNSPECIFIED;
    case 1:
    case "BACKEND":
      return ProjectSourceLayer.BACKEND;
    case 2:
    case "FRONTEND":
      return ProjectSourceLayer.FRONTEND;
    case 3:
    case "MONOREPO":
      return ProjectSourceLayer.MONOREPO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectSourceLayer.UNRECOGNIZED;
  }
}

export function projectSourceLayerToJSON(object: ProjectSourceLayer): string {
  switch (object) {
    case ProjectSourceLayer.LAYER_UNSPECIFIED:
      return "LAYER_UNSPECIFIED";
    case ProjectSourceLayer.BACKEND:
      return "BACKEND";
    case ProjectSourceLayer.FRONTEND:
      return "FRONTEND";
    case ProjectSourceLayer.MONOREPO:
      return "MONOREPO";
    case ProjectSourceLayer.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ProjectSourcePlatform {
  PLATFORM_UNSPECIFIED = 0,
  WEB = 1,
  MOBILE = 2,
  DESKTOP = 3,
  CROSS_PLATFORM = 4,
  UNRECOGNIZED = -1,
}

export function projectSourcePlatformFromJSON(
  object: any
): ProjectSourcePlatform {
  switch (object) {
    case 0:
    case "PLATFORM_UNSPECIFIED":
      return ProjectSourcePlatform.PLATFORM_UNSPECIFIED;
    case 1:
    case "WEB":
      return ProjectSourcePlatform.WEB;
    case 2:
    case "MOBILE":
      return ProjectSourcePlatform.MOBILE;
    case 3:
    case "DESKTOP":
      return ProjectSourcePlatform.DESKTOP;
    case 4:
    case "CROSS_PLATFORM":
      return ProjectSourcePlatform.CROSS_PLATFORM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectSourcePlatform.UNRECOGNIZED;
  }
}

export function projectSourcePlatformToJSON(
  object: ProjectSourcePlatform
): string {
  switch (object) {
    case ProjectSourcePlatform.PLATFORM_UNSPECIFIED:
      return "PLATFORM_UNSPECIFIED";
    case ProjectSourcePlatform.WEB:
      return "WEB";
    case ProjectSourcePlatform.MOBILE:
      return "MOBILE";
    case ProjectSourcePlatform.DESKTOP:
      return "DESKTOP";
    case ProjectSourcePlatform.CROSS_PLATFORM:
      return "CROSS_PLATFORM";
    case ProjectSourcePlatform.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class ProjectSourceTable {
  id: number;
  name: string;
  columns: ProjectSourceTableColumn[];
  locked?: boolean | undefined;
}

export class ProjectSourceTableColumn {
  id: number;
  name: string;
  type: string;
}

export class ProjectSourceRelation {
  id: number;
  column: string;
  table: string;
  relatedTable: string;
  type: string;
}

export class PullRequest {
  id: number;
  number: number;
  name: string;
  status: string;
}

export class Git {
  repo: string;
  owner: string;
  branch: string;
  token: string;
  jiteraBranch: string;
  targetBranch: string;
  pullRequest?: PullRequest;
  provider?: GitProvider | undefined;
  providerHostUrl?: string | undefined;
  headers?: { [key: string]: any };
}

export enum GitProvider {
  github = 0,
  gitlab = 1,
  UNRECOGNIZED = -1,
}

export function gitProviderFromJSON(object: any): GitProvider {
  switch (object) {
    case 0:
    case "github":
      return GitProvider.github;
    case 1:
    case "gitlab":
      return GitProvider.gitlab;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GitProvider.UNRECOGNIZED;
  }
}

export function gitProviderToJSON(object: GitProvider): string {
  switch (object) {
    case GitProvider.github:
      return "github";
    case GitProvider.gitlab:
      return "gitlab";
    case GitProvider.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class ActionSteps {
  steps: ActionStepsKey[];
}

export enum ActionStepsKey {
  INDEX_CODE = 0,
  ANALYZE_CODE = 1,
  CODE_TO_ERD = 2,
  CODE_TO_NATURAL_LANGUAGE = 3,
  UNRECOGNIZED = -1,
}

export function actionStepsKeyFromJSON(object: any): ActionStepsKey {
  switch (object) {
    case 0:
    case "INDEX_CODE":
      return ActionStepsKey.INDEX_CODE;
    case 1:
    case "ANALYZE_CODE":
      return ActionStepsKey.ANALYZE_CODE;
    case 2:
    case "CODE_TO_ERD":
      return ActionStepsKey.CODE_TO_ERD;
    case 3:
    case "CODE_TO_NATURAL_LANGUAGE":
      return ActionStepsKey.CODE_TO_NATURAL_LANGUAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionStepsKey.UNRECOGNIZED;
  }
}

export function actionStepsKeyToJSON(object: ActionStepsKey): string {
  switch (object) {
    case ActionStepsKey.INDEX_CODE:
      return "INDEX_CODE";
    case ActionStepsKey.ANALYZE_CODE:
      return "ANALYZE_CODE";
    case ActionStepsKey.CODE_TO_ERD:
      return "CODE_TO_ERD";
    case ActionStepsKey.CODE_TO_NATURAL_LANGUAGE:
      return "CODE_TO_NATURAL_LANGUAGE";
    case ActionStepsKey.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class ProjectSourceCreation {
  projectGenerateQueueId: number;
  projectSource?: ProjectSource;
  importBy?: ImportBy | undefined;
  action?: ProjectSourceCreationAction | undefined;
  steps?: ActionSteps | undefined;
  metadata?: { [key: string]: any };
  changedFiles: string[];
  commitSha?: string | undefined;
  sourceConfigurations: ProjectSourceConfiguration[];
  sourcePath?: string | undefined;
  git?: Git | undefined;
}

export enum ProjectSourceCreationAction {
  INDEX_CODE = 0,
  ANALYZE_CODE = 1,
  CODE_TO_ERD = 2,
  REMOVE_INDEX = 3,
  FORCE_INDEX = 4,
  RE_INDEX = 5,
  MERGE_UC_ERD_INDEX = 6,
  CODE_TO_NATURAL_LANGUAGE = 7,
  UNRECOGNIZED = -1,
}

export function projectSourceCreationActionFromJSON(
  object: any
): ProjectSourceCreationAction {
  switch (object) {
    case 0:
    case "INDEX_CODE":
      return ProjectSourceCreationAction.INDEX_CODE;
    case 1:
    case "ANALYZE_CODE":
      return ProjectSourceCreationAction.ANALYZE_CODE;
    case 2:
    case "CODE_TO_ERD":
      return ProjectSourceCreationAction.CODE_TO_ERD;
    case 3:
    case "REMOVE_INDEX":
      return ProjectSourceCreationAction.REMOVE_INDEX;
    case 4:
    case "FORCE_INDEX":
      return ProjectSourceCreationAction.FORCE_INDEX;
    case 5:
    case "RE_INDEX":
      return ProjectSourceCreationAction.RE_INDEX;
    case 6:
    case "MERGE_UC_ERD_INDEX":
      return ProjectSourceCreationAction.MERGE_UC_ERD_INDEX;
    case 7:
    case "CODE_TO_NATURAL_LANGUAGE":
      return ProjectSourceCreationAction.CODE_TO_NATURAL_LANGUAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectSourceCreationAction.UNRECOGNIZED;
  }
}

export function projectSourceCreationActionToJSON(
  object: ProjectSourceCreationAction
): string {
  switch (object) {
    case ProjectSourceCreationAction.INDEX_CODE:
      return "INDEX_CODE";
    case ProjectSourceCreationAction.ANALYZE_CODE:
      return "ANALYZE_CODE";
    case ProjectSourceCreationAction.CODE_TO_ERD:
      return "CODE_TO_ERD";
    case ProjectSourceCreationAction.REMOVE_INDEX:
      return "REMOVE_INDEX";
    case ProjectSourceCreationAction.FORCE_INDEX:
      return "FORCE_INDEX";
    case ProjectSourceCreationAction.RE_INDEX:
      return "RE_INDEX";
    case ProjectSourceCreationAction.MERGE_UC_ERD_INDEX:
      return "MERGE_UC_ERD_INDEX";
    case ProjectSourceCreationAction.CODE_TO_NATURAL_LANGUAGE:
      return "CODE_TO_NATURAL_LANGUAGE";
    case ProjectSourceCreationAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class BusinessLogicChanges {
  projectGenerateQueueId: number;
  tables: ProjectSourceTable[];
  relations: ProjectSourceRelation[];
  projectSource?: ProjectSource;
  blockDiff?: BlockDiff;
  git?: Git;
  importBy?: ImportBy | undefined;
  generateSource?: GenerateSource | undefined;
  usersPrompt?: string | undefined;
  isNonFailedRegeneration: boolean;
}

export class BlockDiff {
  projectId: number;
  id: number;
  nodeId: string;
  content?: BlockDiffBlockBody;
  blocks: BlockDiffBlock[];
}

export class BlockDiffBlock {
  id: number;
  nodeId: string;
  addition?: BlockDiffBlockAddition | undefined;
  modification?: BlockDiffBlockModification | undefined;
  deletion?: BlockDiffBlockDeletion | undefined;
}

export class BlockDiffBlockAddition {
  content?: BlockDiffBlockBody;
}

export class BlockDiffBlockModification {
  deletion?: BlockDiffBlockBody;
  addition?: BlockDiffBlockBody;
}

export class BlockDiffBlockDeletion {
  content?: BlockDiffBlockBody;
}

export class BlockDiffBlockBody {
  name: string;
  blockType: string;
  parentNodeId: string;
  content: { [key: string]: any }[];
  properties?: { [key: string]: any };
  children: string[];
}

export class ApiChanges {
  projectSource?: ProjectSource;
  blockDiff?: BlockDiff;
  tables: ProjectSourceTable[];
  relations: ProjectSourceRelation[];
  projectGenerateQueueId: number;
  git?: Git;
  importBy?: ImportBy | undefined;
  generateSource?: GenerateSource | undefined;
  usersPrompt?: string | undefined;
  isNonFailedRegeneration: boolean;
}

export class ProjectSourceReport {
  projectGenerateQueueId: number;
  projectId: number;
  projectSourceId: number;
  tokenUsage: number;
  payload?: { [key: string]: any };
  progress?: ProjectSourceReportProgress | undefined;
  complete?: ProjectSourceReportComplete | undefined;
  error?: ProjectSourceReportError | undefined;
}

export class ProjectSourceReportProgress {
  percentage: number;
  message: string;
  payload: string;
}

export class ProjectSourceReportError {
  message: string;
}

export class ProjectSourceReportComplete {
  files: string;
}

export class UseCaseRemoval {
  projectSource?: ProjectSource;
  projectGenerateQueueId: number;
  git?: Git;
  importBy?: ImportBy | undefined;
  useCaseBlocks: UseCaseRemovalBlock[];
  businessLogicBlocks: UseCaseRemovalBlock[];
  apiBlocks: UseCaseRemovalBlock[];
}

export class UseCaseRemovalBlock {
  id: number;
  nodeId: string;
  name: string;
  blockType: string;
  parentNodeId: string;
  properties?: { [key: string]: any };
  children: string[];
}

function createBaseGenerateSource(): GenerateSource {
  return { id: 0, type: "" };
}

export const GenerateSourceData = {
  encode(
    message: GenerateSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.data !== undefined) {
      StructData.encode(
        StructData.wrap(message.data),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.data = StructData.unwrap(
            StructData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateSource {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      data: isObject(object.data) ? object.data : undefined,
    };
  },

  toJSON(message: GenerateSource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.type !== undefined && (obj.type = message.type);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<GenerateSource>): GenerateSource {
    const message = createBaseGenerateSource();
    message.id = object.id ?? 0;
    message.type = object.type ?? "";
    message.data = object.data ?? undefined;
    return message;
  },
};

function createBaseProjectSourceConfiguration(): ProjectSourceConfiguration {
  return { id: "", category: 0, filePatterns: [], autoDiscover: false };
}

export const ProjectSourceConfigurationData = {
  encode(
    message: ProjectSourceConfiguration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.category !== 0) {
      writer.uint32(16).int32(message.category);
    }
    for (const v of message.filePatterns) {
      writer.uint32(26).string(v!);
    }
    if (message.autoDiscover === true) {
      writer.uint32(32).bool(message.autoDiscover);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectSourceConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.category = reader.int32() as any;
          break;
        case 3:
          message.filePatterns.push(reader.string());
          break;
        case 4:
          message.autoDiscover = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceConfiguration {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      category: isSet(object.category)
        ? projectSourceConfigurationCategoryEnumFromJSON(object.category)
        : 0,
      filePatterns: Array.isArray(object?.filePatterns)
        ? object.filePatterns.map((e: any) => String(e))
        : [],
      autoDiscover: isSet(object.autoDiscover)
        ? Boolean(object.autoDiscover)
        : false,
    };
  },

  toJSON(message: ProjectSourceConfiguration): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.category !== undefined &&
      (obj.category = projectSourceConfigurationCategoryEnumToJSON(
        message.category
      ));
    if (message.filePatterns) {
      obj.filePatterns = message.filePatterns.map((e) => e);
    } else {
      obj.filePatterns = [];
    }
    message.autoDiscover !== undefined &&
      (obj.autoDiscover = message.autoDiscover);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectSourceConfiguration>
  ): ProjectSourceConfiguration {
    const message = createBaseProjectSourceConfiguration();
    message.id = object.id ?? "";
    message.category = object.category ?? 0;
    message.filePatterns = object.filePatterns?.map((e) => e) || [];
    message.autoDiscover = object.autoDiscover ?? false;
    return message;
  },
};

function createBaseProjectSource(): ProjectSource {
  return {
    id: 0,
    projectId: 0,
    framework: 0,
    layer: 0,
    files: "",
    platform: 0,
    masterLanguageCode: "",
    uuid: "",
  };
}

export const ProjectSourceData = {
  encode(
    message: ProjectSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.framework !== 0) {
      writer.uint32(24).int32(message.framework);
    }
    if (message.layer !== 0) {
      writer.uint32(32).int32(message.layer);
    }
    if (message.files !== "") {
      writer.uint32(42).string(message.files);
    }
    if (message.platform !== 0) {
      writer.uint32(48).int32(message.platform);
    }
    if (message.masterLanguageCode !== "") {
      writer.uint32(58).string(message.masterLanguageCode);
    }
    if (message.sourceUrl !== undefined) {
      writer.uint32(66).string(message.sourceUrl);
    }
    if (message.sourceFileEncryptedKey !== undefined) {
      writer.uint32(74).string(message.sourceFileEncryptedKey);
    }
    if (message.uuid !== "") {
      writer.uint32(82).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.framework = reader.int32() as any;
          break;
        case 4:
          message.layer = reader.int32() as any;
          break;
        case 5:
          message.files = reader.string();
          break;
        case 6:
          message.platform = reader.int32() as any;
          break;
        case 7:
          message.masterLanguageCode = reader.string();
          break;
        case 8:
          message.sourceUrl = reader.string();
          break;
        case 9:
          message.sourceFileEncryptedKey = reader.string();
          break;
        case 10:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSource {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      framework: isSet(object.framework)
        ? projectSourceFrameworkFromJSON(object.framework)
        : 0,
      layer: isSet(object.layer) ? projectSourceLayerFromJSON(object.layer) : 0,
      files: isSet(object.files) ? String(object.files) : "",
      platform: isSet(object.platform)
        ? projectSourcePlatformFromJSON(object.platform)
        : 0,
      masterLanguageCode: isSet(object.masterLanguageCode)
        ? String(object.masterLanguageCode)
        : "",
      sourceUrl: isSet(object.sourceUrl) ? String(object.sourceUrl) : undefined,
      sourceFileEncryptedKey: isSet(object.sourceFileEncryptedKey)
        ? String(object.sourceFileEncryptedKey)
        : undefined,
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
    };
  },

  toJSON(message: ProjectSource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.framework !== undefined &&
      (obj.framework = projectSourceFrameworkToJSON(message.framework));
    message.layer !== undefined &&
      (obj.layer = projectSourceLayerToJSON(message.layer));
    message.files !== undefined && (obj.files = message.files);
    message.platform !== undefined &&
      (obj.platform = projectSourcePlatformToJSON(message.platform));
    message.masterLanguageCode !== undefined &&
      (obj.masterLanguageCode = message.masterLanguageCode);
    message.sourceUrl !== undefined && (obj.sourceUrl = message.sourceUrl);
    message.sourceFileEncryptedKey !== undefined &&
      (obj.sourceFileEncryptedKey = message.sourceFileEncryptedKey);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSource>): ProjectSource {
    const message = createBaseProjectSource();
    message.id = object.id ?? 0;
    message.projectId = object.projectId ?? 0;
    message.framework = object.framework ?? 0;
    message.layer = object.layer ?? 0;
    message.files = object.files ?? "";
    message.platform = object.platform ?? 0;
    message.masterLanguageCode = object.masterLanguageCode ?? "";
    message.sourceUrl = object.sourceUrl ?? undefined;
    message.sourceFileEncryptedKey = object.sourceFileEncryptedKey ?? undefined;
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseProjectSourceTable(): ProjectSourceTable {
  return { id: 0, name: "", columns: [] };
}

export const ProjectSourceTableData = {
  encode(
    message: ProjectSourceTable,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.columns) {
      ProjectSourceTableColumnData.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.locked !== undefined) {
      writer.uint32(32).bool(message.locked);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceTable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceTable();
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
          message.columns.push(
            ProjectSourceTableColumnData.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.locked = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceTable {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      columns: Array.isArray(object?.columns)
        ? object.columns.map((e: any) =>
            ProjectSourceTableColumnData.fromJSON(e)
          )
        : [],
      locked: isSet(object.locked) ? Boolean(object.locked) : undefined,
    };
  },

  toJSON(message: ProjectSourceTable): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    if (message.columns) {
      obj.columns = message.columns.map((e) =>
        e ? ProjectSourceTableColumnData.toJSON(e) : undefined
      );
    } else {
      obj.columns = [];
    }
    message.locked !== undefined && (obj.locked = message.locked);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceTable>): ProjectSourceTable {
    const message = createBaseProjectSourceTable();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.columns =
      object.columns?.map((e) => ProjectSourceTableColumnData.fromPartial(e)) ||
      [];
    message.locked = object.locked ?? undefined;
    return message;
  },
};

function createBaseProjectSourceTableColumn(): ProjectSourceTableColumn {
  return { id: 0, name: "", type: "" };
}

export const ProjectSourceTableColumnData = {
  encode(
    message: ProjectSourceTableColumn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectSourceTableColumn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceTableColumn();
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
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceTableColumn {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: ProjectSourceTableColumn): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectSourceTableColumn>
  ): ProjectSourceTableColumn {
    const message = createBaseProjectSourceTableColumn();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseProjectSourceRelation(): ProjectSourceRelation {
  return { id: 0, column: "", table: "", relatedTable: "", type: "" };
}

export const ProjectSourceRelationData = {
  encode(
    message: ProjectSourceRelation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.column !== "") {
      writer.uint32(18).string(message.column);
    }
    if (message.table !== "") {
      writer.uint32(26).string(message.table);
    }
    if (message.relatedTable !== "") {
      writer.uint32(34).string(message.relatedTable);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectSourceRelation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.column = reader.string();
          break;
        case 3:
          message.table = reader.string();
          break;
        case 4:
          message.relatedTable = reader.string();
          break;
        case 5:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceRelation {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      column: isSet(object.column) ? String(object.column) : "",
      table: isSet(object.table) ? String(object.table) : "",
      relatedTable: isSet(object.relatedTable)
        ? String(object.relatedTable)
        : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: ProjectSourceRelation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.column !== undefined && (obj.column = message.column);
    message.table !== undefined && (obj.table = message.table);
    message.relatedTable !== undefined &&
      (obj.relatedTable = message.relatedTable);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectSourceRelation>
  ): ProjectSourceRelation {
    const message = createBaseProjectSourceRelation();
    message.id = object.id ?? 0;
    message.column = object.column ?? "";
    message.table = object.table ?? "";
    message.relatedTable = object.relatedTable ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBasePullRequest(): PullRequest {
  return { id: 0, number: 0, name: "", status: "" };
}

export const PullRequestData = {
  encode(
    message: PullRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PullRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePullRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PullRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      number: isSet(object.number) ? Number(object.number) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: PullRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.name !== undefined && (obj.name = message.name);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<PullRequest>): PullRequest {
    const message = createBasePullRequest();
    message.id = object.id ?? 0;
    message.number = object.number ?? 0;
    message.name = object.name ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseGit(): Git {
  return {
    repo: "",
    owner: "",
    branch: "",
    token: "",
    jiteraBranch: "",
    targetBranch: "",
  };
}

export const GitData = {
  encode(message: Git, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repo !== "") {
      writer.uint32(26).string(message.repo);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.branch !== "") {
      writer.uint32(42).string(message.branch);
    }
    if (message.token !== "") {
      writer.uint32(50).string(message.token);
    }
    if (message.jiteraBranch !== "") {
      writer.uint32(58).string(message.jiteraBranch);
    }
    if (message.targetBranch !== "") {
      writer.uint32(66).string(message.targetBranch);
    }
    if (message.pullRequest !== undefined) {
      PullRequestData.encode(
        message.pullRequest,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.provider !== undefined) {
      writer.uint32(80).int32(message.provider);
    }
    if (message.providerHostUrl !== undefined) {
      writer.uint32(90).string(message.providerHostUrl);
    }
    if (message.headers !== undefined) {
      StructData.encode(
        StructData.wrap(message.headers),
        writer.uint32(98).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Git {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.repo = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.branch = reader.string();
          break;
        case 6:
          message.token = reader.string();
          break;
        case 7:
          message.jiteraBranch = reader.string();
          break;
        case 8:
          message.targetBranch = reader.string();
          break;
        case 9:
          message.pullRequest = PullRequestData.decode(reader, reader.uint32());
          break;
        case 10:
          message.provider = reader.int32() as any;
          break;
        case 11:
          message.providerHostUrl = reader.string();
          break;
        case 12:
          message.headers = StructData.unwrap(
            StructData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Git {
    return {
      repo: isSet(object.repo) ? String(object.repo) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      branch: isSet(object.branch) ? String(object.branch) : "",
      token: isSet(object.token) ? String(object.token) : "",
      jiteraBranch: isSet(object.jiteraBranch)
        ? String(object.jiteraBranch)
        : "",
      targetBranch: isSet(object.targetBranch)
        ? String(object.targetBranch)
        : "",
      pullRequest: isSet(object.pullRequest)
        ? PullRequestData.fromJSON(object.pullRequest)
        : undefined,
      provider: isSet(object.provider)
        ? gitProviderFromJSON(object.provider)
        : undefined,
      providerHostUrl: isSet(object.providerHostUrl)
        ? String(object.providerHostUrl)
        : undefined,
      headers: isObject(object.headers) ? object.headers : undefined,
    };
  },

  toJSON(message: Git): unknown {
    const obj: any = {};
    message.repo !== undefined && (obj.repo = message.repo);
    message.owner !== undefined && (obj.owner = message.owner);
    message.branch !== undefined && (obj.branch = message.branch);
    message.token !== undefined && (obj.token = message.token);
    message.jiteraBranch !== undefined &&
      (obj.jiteraBranch = message.jiteraBranch);
    message.targetBranch !== undefined &&
      (obj.targetBranch = message.targetBranch);
    message.pullRequest !== undefined &&
      (obj.pullRequest = message.pullRequest
        ? PullRequestData.toJSON(message.pullRequest)
        : undefined);
    message.provider !== undefined &&
      (obj.provider =
        message.provider !== undefined
          ? gitProviderToJSON(message.provider)
          : undefined);
    message.providerHostUrl !== undefined &&
      (obj.providerHostUrl = message.providerHostUrl);
    message.headers !== undefined && (obj.headers = message.headers);
    return obj;
  },

  fromPartial(object: DeepPartial<Git>): Git {
    const message = createBaseGit();
    message.repo = object.repo ?? "";
    message.owner = object.owner ?? "";
    message.branch = object.branch ?? "";
    message.token = object.token ?? "";
    message.jiteraBranch = object.jiteraBranch ?? "";
    message.targetBranch = object.targetBranch ?? "";
    message.pullRequest =
      object.pullRequest !== undefined && object.pullRequest !== null
        ? PullRequestData.fromPartial(object.pullRequest)
        : undefined;
    message.provider = object.provider ?? undefined;
    message.providerHostUrl = object.providerHostUrl ?? undefined;
    message.headers = object.headers ?? undefined;
    return message;
  },
};

function createBaseActionSteps(): ActionSteps {
  return { steps: [] };
}

export const ActionStepsData = {
  encode(
    message: ActionSteps,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.steps) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionSteps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSteps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steps.push(reader.int32() as any);
            }
          } else {
            message.steps.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionSteps {
    return {
      steps: Array.isArray(object?.steps)
        ? object.steps.map((e: any) => actionStepsKeyFromJSON(e))
        : [],
    };
  },

  toJSON(message: ActionSteps): unknown {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map((e) => actionStepsKeyToJSON(e));
    } else {
      obj.steps = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ActionSteps>): ActionSteps {
    const message = createBaseActionSteps();
    message.steps = object.steps?.map((e) => e) || [];
    return message;
  },
};

function createBaseProjectSourceCreation(): ProjectSourceCreation {
  return {
    projectGenerateQueueId: 0,
    changedFiles: [],
    sourceConfigurations: [],
  };
}

export const ProjectSourceCreationData = {
  encode(
    message: ProjectSourceCreation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(
        message.projectSource,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.importBy !== undefined) {
      writer.uint32(40).int32(message.importBy);
    }
    if (message.action !== undefined) {
      writer.uint32(48).int32(message.action);
    }
    if (message.steps !== undefined) {
      ActionStepsData.encode(message.steps, writer.uint32(58).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      StructData.encode(
        StructData.wrap(message.metadata),
        writer.uint32(66).fork()
      ).ldelim();
    }
    for (const v of message.changedFiles) {
      writer.uint32(74).string(v!);
    }
    if (message.commitSha !== undefined) {
      writer.uint32(82).string(message.commitSha);
    }
    for (const v of message.sourceConfigurations) {
      ProjectSourceConfigurationData.encode(
        v!,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.sourcePath !== undefined) {
      writer.uint32(26).string(message.sourcePath);
    }
    if (message.git !== undefined) {
      GitData.encode(message.git, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectSourceCreation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceCreation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.projectSource = ProjectSourceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.importBy = reader.int32() as any;
          break;
        case 6:
          message.action = reader.int32() as any;
          break;
        case 7:
          message.steps = ActionStepsData.decode(reader, reader.uint32());
          break;
        case 8:
          message.metadata = StructData.unwrap(
            StructData.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.changedFiles.push(reader.string());
          break;
        case 10:
          message.commitSha = reader.string();
          break;
        case 11:
          message.sourceConfigurations.push(
            ProjectSourceConfigurationData.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.sourcePath = reader.string();
          break;
        case 4:
          message.git = GitData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceCreation {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      projectSource: isSet(object.projectSource)
        ? ProjectSourceData.fromJSON(object.projectSource)
        : undefined,
      importBy: isSet(object.importBy)
        ? importByFromJSON(object.importBy)
        : undefined,
      action: isSet(object.action)
        ? projectSourceCreationActionFromJSON(object.action)
        : undefined,
      steps: isSet(object.steps)
        ? ActionStepsData.fromJSON(object.steps)
        : undefined,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
      changedFiles: Array.isArray(object?.changedFiles)
        ? object.changedFiles.map((e: any) => String(e))
        : [],
      commitSha: isSet(object.commitSha) ? String(object.commitSha) : undefined,
      sourceConfigurations: Array.isArray(object?.sourceConfigurations)
        ? object.sourceConfigurations.map((e: any) =>
            ProjectSourceConfigurationData.fromJSON(e)
          )
        : [],
      sourcePath: isSet(object.sourcePath)
        ? String(object.sourcePath)
        : undefined,
      git: isSet(object.git) ? GitData.fromJSON(object.git) : undefined,
    };
  },

  toJSON(message: ProjectSourceCreation): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource
        ? ProjectSourceData.toJSON(message.projectSource)
        : undefined);
    message.importBy !== undefined &&
      (obj.importBy =
        message.importBy !== undefined
          ? importByToJSON(message.importBy)
          : undefined);
    message.action !== undefined &&
      (obj.action =
        message.action !== undefined
          ? projectSourceCreationActionToJSON(message.action)
          : undefined);
    message.steps !== undefined &&
      (obj.steps = message.steps
        ? ActionStepsData.toJSON(message.steps)
        : undefined);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.changedFiles) {
      obj.changedFiles = message.changedFiles.map((e) => e);
    } else {
      obj.changedFiles = [];
    }
    message.commitSha !== undefined && (obj.commitSha = message.commitSha);
    if (message.sourceConfigurations) {
      obj.sourceConfigurations = message.sourceConfigurations.map((e) =>
        e ? ProjectSourceConfigurationData.toJSON(e) : undefined
      );
    } else {
      obj.sourceConfigurations = [];
    }
    message.sourcePath !== undefined && (obj.sourcePath = message.sourcePath);
    message.git !== undefined &&
      (obj.git = message.git ? GitData.toJSON(message.git) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectSourceCreation>
  ): ProjectSourceCreation {
    const message = createBaseProjectSourceCreation();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectSource =
      object.projectSource !== undefined && object.projectSource !== null
        ? ProjectSourceData.fromPartial(object.projectSource)
        : undefined;
    message.importBy = object.importBy ?? undefined;
    message.action = object.action ?? undefined;
    message.steps =
      object.steps !== undefined && object.steps !== null
        ? ActionStepsData.fromPartial(object.steps)
        : undefined;
    message.metadata = object.metadata ?? undefined;
    message.changedFiles = object.changedFiles?.map((e) => e) || [];
    message.commitSha = object.commitSha ?? undefined;
    message.sourceConfigurations =
      object.sourceConfigurations?.map((e) =>
        ProjectSourceConfigurationData.fromPartial(e)
      ) || [];
    message.sourcePath = object.sourcePath ?? undefined;
    message.git =
      object.git !== undefined && object.git !== null
        ? GitData.fromPartial(object.git)
        : undefined;
    return message;
  },
};

function createBaseBusinessLogicChanges(): BusinessLogicChanges {
  return {
    projectGenerateQueueId: 0,
    tables: [],
    relations: [],
    isNonFailedRegeneration: false,
  };
}

export const BusinessLogicChangesData = {
  encode(
    message: BusinessLogicChanges,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    for (const v of message.tables) {
      ProjectSourceTableData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.relations) {
      ProjectSourceRelationData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(
        message.projectSource,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.blockDiff !== undefined) {
      BlockDiffData.encode(
        message.blockDiff,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.git !== undefined) {
      GitData.encode(message.git, writer.uint32(50).fork()).ldelim();
    }
    if (message.importBy !== undefined) {
      writer.uint32(56).int32(message.importBy);
    }
    if (message.generateSource !== undefined) {
      GenerateSourceData.encode(
        message.generateSource,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.usersPrompt !== undefined) {
      writer.uint32(74).string(message.usersPrompt);
    }
    if (message.isNonFailedRegeneration === true) {
      writer.uint32(88).bool(message.isNonFailedRegeneration);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessLogicChanges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessLogicChanges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.tables.push(
            ProjectSourceTableData.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.relations.push(
            ProjectSourceRelationData.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.projectSource = ProjectSourceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.blockDiff = BlockDiffData.decode(reader, reader.uint32());
          break;
        case 6:
          message.git = GitData.decode(reader, reader.uint32());
          break;
        case 7:
          message.importBy = reader.int32() as any;
          break;
        case 8:
          message.generateSource = GenerateSourceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.usersPrompt = reader.string();
          break;
        case 11:
          message.isNonFailedRegeneration = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessLogicChanges {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      tables: Array.isArray(object?.tables)
        ? object.tables.map((e: any) => ProjectSourceTableData.fromJSON(e))
        : [],
      relations: Array.isArray(object?.relations)
        ? object.relations.map((e: any) =>
            ProjectSourceRelationData.fromJSON(e)
          )
        : [],
      projectSource: isSet(object.projectSource)
        ? ProjectSourceData.fromJSON(object.projectSource)
        : undefined,
      blockDiff: isSet(object.blockDiff)
        ? BlockDiffData.fromJSON(object.blockDiff)
        : undefined,
      git: isSet(object.git) ? GitData.fromJSON(object.git) : undefined,
      importBy: isSet(object.importBy)
        ? importByFromJSON(object.importBy)
        : undefined,
      generateSource: isSet(object.generateSource)
        ? GenerateSourceData.fromJSON(object.generateSource)
        : undefined,
      usersPrompt: isSet(object.usersPrompt)
        ? String(object.usersPrompt)
        : undefined,
      isNonFailedRegeneration: isSet(object.isNonFailedRegeneration)
        ? Boolean(object.isNonFailedRegeneration)
        : false,
    };
  },

  toJSON(message: BusinessLogicChanges): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    if (message.tables) {
      obj.tables = message.tables.map((e) =>
        e ? ProjectSourceTableData.toJSON(e) : undefined
      );
    } else {
      obj.tables = [];
    }
    if (message.relations) {
      obj.relations = message.relations.map((e) =>
        e ? ProjectSourceRelationData.toJSON(e) : undefined
      );
    } else {
      obj.relations = [];
    }
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource
        ? ProjectSourceData.toJSON(message.projectSource)
        : undefined);
    message.blockDiff !== undefined &&
      (obj.blockDiff = message.blockDiff
        ? BlockDiffData.toJSON(message.blockDiff)
        : undefined);
    message.git !== undefined &&
      (obj.git = message.git ? GitData.toJSON(message.git) : undefined);
    message.importBy !== undefined &&
      (obj.importBy =
        message.importBy !== undefined
          ? importByToJSON(message.importBy)
          : undefined);
    message.generateSource !== undefined &&
      (obj.generateSource = message.generateSource
        ? GenerateSourceData.toJSON(message.generateSource)
        : undefined);
    message.usersPrompt !== undefined &&
      (obj.usersPrompt = message.usersPrompt);
    message.isNonFailedRegeneration !== undefined &&
      (obj.isNonFailedRegeneration = message.isNonFailedRegeneration);
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicChanges>): BusinessLogicChanges {
    const message = createBaseBusinessLogicChanges();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.tables =
      object.tables?.map((e) => ProjectSourceTableData.fromPartial(e)) || [];
    message.relations =
      object.relations?.map((e) => ProjectSourceRelationData.fromPartial(e)) ||
      [];
    message.projectSource =
      object.projectSource !== undefined && object.projectSource !== null
        ? ProjectSourceData.fromPartial(object.projectSource)
        : undefined;
    message.blockDiff =
      object.blockDiff !== undefined && object.blockDiff !== null
        ? BlockDiffData.fromPartial(object.blockDiff)
        : undefined;
    message.git =
      object.git !== undefined && object.git !== null
        ? GitData.fromPartial(object.git)
        : undefined;
    message.importBy = object.importBy ?? undefined;
    message.generateSource =
      object.generateSource !== undefined && object.generateSource !== null
        ? GenerateSourceData.fromPartial(object.generateSource)
        : undefined;
    message.usersPrompt = object.usersPrompt ?? undefined;
    message.isNonFailedRegeneration = object.isNonFailedRegeneration ?? false;
    return message;
  },
};

function createBaseBlockDiff(): BlockDiff {
  return { projectId: 0, id: 0, nodeId: "", blocks: [] };
}

export const BlockDiffData = {
  encode(
    message: BlockDiff,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.id !== 0) {
      writer.uint32(24).int32(message.id);
    }
    if (message.nodeId !== "") {
      writer.uint32(34).string(message.nodeId);
    }
    if (message.content !== undefined) {
      BlockDiffBlockBodyData.encode(
        message.content,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.blocks) {
      BlockDiffBlockData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockDiff {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockDiff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 3:
          message.id = reader.int32();
          break;
        case 4:
          message.nodeId = reader.string();
          break;
        case 5:
          message.content = BlockDiffBlockBodyData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.blocks.push(
            BlockDiffBlockData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockDiff {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      content: isSet(object.content)
        ? BlockDiffBlockBodyData.fromJSON(object.content)
        : undefined,
      blocks: Array.isArray(object?.blocks)
        ? object.blocks.map((e: any) => BlockDiffBlockData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BlockDiff): unknown {
    const obj: any = {};
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.content !== undefined &&
      (obj.content = message.content
        ? BlockDiffBlockBodyData.toJSON(message.content)
        : undefined);
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) =>
        e ? BlockDiffBlockData.toJSON(e) : undefined
      );
    } else {
      obj.blocks = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BlockDiff>): BlockDiff {
    const message = createBaseBlockDiff();
    message.projectId = object.projectId ?? 0;
    message.id = object.id ?? 0;
    message.nodeId = object.nodeId ?? "";
    message.content =
      object.content !== undefined && object.content !== null
        ? BlockDiffBlockBodyData.fromPartial(object.content)
        : undefined;
    message.blocks =
      object.blocks?.map((e) => BlockDiffBlockData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBlockDiffBlock(): BlockDiffBlock {
  return { id: 0, nodeId: "" };
}

export const BlockDiffBlockData = {
  encode(
    message: BlockDiffBlock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.addition !== undefined) {
      BlockDiffBlockAdditionData.encode(
        message.addition,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.modification !== undefined) {
      BlockDiffBlockModificationData.encode(
        message.modification,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.deletion !== undefined) {
      BlockDiffBlockDeletionData.encode(
        message.deletion,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockDiffBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockDiffBlock();
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
          message.addition = BlockDiffBlockAdditionData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.modification = BlockDiffBlockModificationData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.deletion = BlockDiffBlockDeletionData.decode(
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

  fromJSON(object: any): BlockDiffBlock {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      addition: isSet(object.addition)
        ? BlockDiffBlockAdditionData.fromJSON(object.addition)
        : undefined,
      modification: isSet(object.modification)
        ? BlockDiffBlockModificationData.fromJSON(object.modification)
        : undefined,
      deletion: isSet(object.deletion)
        ? BlockDiffBlockDeletionData.fromJSON(object.deletion)
        : undefined,
    };
  },

  toJSON(message: BlockDiffBlock): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.addition !== undefined &&
      (obj.addition = message.addition
        ? BlockDiffBlockAdditionData.toJSON(message.addition)
        : undefined);
    message.modification !== undefined &&
      (obj.modification = message.modification
        ? BlockDiffBlockModificationData.toJSON(message.modification)
        : undefined);
    message.deletion !== undefined &&
      (obj.deletion = message.deletion
        ? BlockDiffBlockDeletionData.toJSON(message.deletion)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockDiffBlock>): BlockDiffBlock {
    const message = createBaseBlockDiffBlock();
    message.id = object.id ?? 0;
    message.nodeId = object.nodeId ?? "";
    message.addition =
      object.addition !== undefined && object.addition !== null
        ? BlockDiffBlockAdditionData.fromPartial(object.addition)
        : undefined;
    message.modification =
      object.modification !== undefined && object.modification !== null
        ? BlockDiffBlockModificationData.fromPartial(object.modification)
        : undefined;
    message.deletion =
      object.deletion !== undefined && object.deletion !== null
        ? BlockDiffBlockDeletionData.fromPartial(object.deletion)
        : undefined;
    return message;
  },
};

function createBaseBlockDiffBlockAddition(): BlockDiffBlockAddition {
  return {};
}

export const BlockDiffBlockAdditionData = {
  encode(
    message: BlockDiffBlockAddition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.content !== undefined) {
      BlockDiffBlockBodyData.encode(
        message.content,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BlockDiffBlockAddition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockDiffBlockAddition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = BlockDiffBlockBodyData.decode(
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

  fromJSON(object: any): BlockDiffBlockAddition {
    return {
      content: isSet(object.content)
        ? BlockDiffBlockBodyData.fromJSON(object.content)
        : undefined,
    };
  },

  toJSON(message: BlockDiffBlockAddition): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content = message.content
        ? BlockDiffBlockBodyData.toJSON(message.content)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BlockDiffBlockAddition>
  ): BlockDiffBlockAddition {
    const message = createBaseBlockDiffBlockAddition();
    message.content =
      object.content !== undefined && object.content !== null
        ? BlockDiffBlockBodyData.fromPartial(object.content)
        : undefined;
    return message;
  },
};

function createBaseBlockDiffBlockModification(): BlockDiffBlockModification {
  return {};
}

export const BlockDiffBlockModificationData = {
  encode(
    message: BlockDiffBlockModification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deletion !== undefined) {
      BlockDiffBlockBodyData.encode(
        message.deletion,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.addition !== undefined) {
      BlockDiffBlockBodyData.encode(
        message.addition,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BlockDiffBlockModification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockDiffBlockModification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deletion = BlockDiffBlockBodyData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.addition = BlockDiffBlockBodyData.decode(
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

  fromJSON(object: any): BlockDiffBlockModification {
    return {
      deletion: isSet(object.deletion)
        ? BlockDiffBlockBodyData.fromJSON(object.deletion)
        : undefined,
      addition: isSet(object.addition)
        ? BlockDiffBlockBodyData.fromJSON(object.addition)
        : undefined,
    };
  },

  toJSON(message: BlockDiffBlockModification): unknown {
    const obj: any = {};
    message.deletion !== undefined &&
      (obj.deletion = message.deletion
        ? BlockDiffBlockBodyData.toJSON(message.deletion)
        : undefined);
    message.addition !== undefined &&
      (obj.addition = message.addition
        ? BlockDiffBlockBodyData.toJSON(message.addition)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BlockDiffBlockModification>
  ): BlockDiffBlockModification {
    const message = createBaseBlockDiffBlockModification();
    message.deletion =
      object.deletion !== undefined && object.deletion !== null
        ? BlockDiffBlockBodyData.fromPartial(object.deletion)
        : undefined;
    message.addition =
      object.addition !== undefined && object.addition !== null
        ? BlockDiffBlockBodyData.fromPartial(object.addition)
        : undefined;
    return message;
  },
};

function createBaseBlockDiffBlockDeletion(): BlockDiffBlockDeletion {
  return {};
}

export const BlockDiffBlockDeletionData = {
  encode(
    message: BlockDiffBlockDeletion,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.content !== undefined) {
      BlockDiffBlockBodyData.encode(
        message.content,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BlockDiffBlockDeletion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockDiffBlockDeletion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = BlockDiffBlockBodyData.decode(
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

  fromJSON(object: any): BlockDiffBlockDeletion {
    return {
      content: isSet(object.content)
        ? BlockDiffBlockBodyData.fromJSON(object.content)
        : undefined,
    };
  },

  toJSON(message: BlockDiffBlockDeletion): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content = message.content
        ? BlockDiffBlockBodyData.toJSON(message.content)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BlockDiffBlockDeletion>
  ): BlockDiffBlockDeletion {
    const message = createBaseBlockDiffBlockDeletion();
    message.content =
      object.content !== undefined && object.content !== null
        ? BlockDiffBlockBodyData.fromPartial(object.content)
        : undefined;
    return message;
  },
};

function createBaseBlockDiffBlockBody(): BlockDiffBlockBody {
  return {
    name: "",
    blockType: "",
    parentNodeId: "",
    content: [],
    children: [],
  };
}

export const BlockDiffBlockBodyData = {
  encode(
    message: BlockDiffBlockBody,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.blockType !== "") {
      writer.uint32(18).string(message.blockType);
    }
    if (message.parentNodeId !== "") {
      writer.uint32(26).string(message.parentNodeId);
    }
    for (const v of message.content) {
      StructData.encode(StructData.wrap(v!), writer.uint32(34).fork()).ldelim();
    }
    if (message.properties !== undefined) {
      StructData.encode(
        StructData.wrap(message.properties),
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.children) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockDiffBlockBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockDiffBlockBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.blockType = reader.string();
          break;
        case 3:
          message.parentNodeId = reader.string();
          break;
        case 4:
          message.content.push(
            StructData.unwrap(StructData.decode(reader, reader.uint32()))
          );
          break;
        case 5:
          message.properties = StructData.unwrap(
            StructData.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.children.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockDiffBlockBody {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      blockType: isSet(object.blockType) ? String(object.blockType) : "",
      parentNodeId: isSet(object.parentNodeId)
        ? String(object.parentNodeId)
        : "",
      content: Array.isArray(object?.content) ? [...object.content] : [],
      properties: isObject(object.properties) ? object.properties : undefined,
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: BlockDiffBlockBody): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.blockType !== undefined && (obj.blockType = message.blockType);
    message.parentNodeId !== undefined &&
      (obj.parentNodeId = message.parentNodeId);
    if (message.content) {
      obj.content = message.content.map((e) => e);
    } else {
      obj.content = [];
    }
    message.properties !== undefined && (obj.properties = message.properties);
    if (message.children) {
      obj.children = message.children.map((e) => e);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BlockDiffBlockBody>): BlockDiffBlockBody {
    const message = createBaseBlockDiffBlockBody();
    message.name = object.name ?? "";
    message.blockType = object.blockType ?? "";
    message.parentNodeId = object.parentNodeId ?? "";
    message.content = object.content?.map((e) => e) || [];
    message.properties = object.properties ?? undefined;
    message.children = object.children?.map((e) => e) || [];
    return message;
  },
};

function createBaseApiChanges(): ApiChanges {
  return {
    tables: [],
    relations: [],
    projectGenerateQueueId: 0,
    isNonFailedRegeneration: false,
  };
}

export const ApiChangesData = {
  encode(
    message: ApiChanges,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(
        message.projectSource,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.blockDiff !== undefined) {
      BlockDiffData.encode(
        message.blockDiff,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.tables) {
      ProjectSourceTableData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.relations) {
      ProjectSourceRelationData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(40).int32(message.projectGenerateQueueId);
    }
    if (message.git !== undefined) {
      GitData.encode(message.git, writer.uint32(50).fork()).ldelim();
    }
    if (message.importBy !== undefined) {
      writer.uint32(56).int32(message.importBy);
    }
    if (message.generateSource !== undefined) {
      GenerateSourceData.encode(
        message.generateSource,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.usersPrompt !== undefined) {
      writer.uint32(74).string(message.usersPrompt);
    }
    if (message.isNonFailedRegeneration === true) {
      writer.uint32(88).bool(message.isNonFailedRegeneration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiChanges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiChanges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectSource = ProjectSourceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.blockDiff = BlockDiffData.decode(reader, reader.uint32());
          break;
        case 3:
          message.tables.push(
            ProjectSourceTableData.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.relations.push(
            ProjectSourceRelationData.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 6:
          message.git = GitData.decode(reader, reader.uint32());
          break;
        case 7:
          message.importBy = reader.int32() as any;
          break;
        case 8:
          message.generateSource = GenerateSourceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.usersPrompt = reader.string();
          break;
        case 11:
          message.isNonFailedRegeneration = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApiChanges {
    return {
      projectSource: isSet(object.projectSource)
        ? ProjectSourceData.fromJSON(object.projectSource)
        : undefined,
      blockDiff: isSet(object.blockDiff)
        ? BlockDiffData.fromJSON(object.blockDiff)
        : undefined,
      tables: Array.isArray(object?.tables)
        ? object.tables.map((e: any) => ProjectSourceTableData.fromJSON(e))
        : [],
      relations: Array.isArray(object?.relations)
        ? object.relations.map((e: any) =>
            ProjectSourceRelationData.fromJSON(e)
          )
        : [],
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      git: isSet(object.git) ? GitData.fromJSON(object.git) : undefined,
      importBy: isSet(object.importBy)
        ? importByFromJSON(object.importBy)
        : undefined,
      generateSource: isSet(object.generateSource)
        ? GenerateSourceData.fromJSON(object.generateSource)
        : undefined,
      usersPrompt: isSet(object.usersPrompt)
        ? String(object.usersPrompt)
        : undefined,
      isNonFailedRegeneration: isSet(object.isNonFailedRegeneration)
        ? Boolean(object.isNonFailedRegeneration)
        : false,
    };
  },

  toJSON(message: ApiChanges): unknown {
    const obj: any = {};
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource
        ? ProjectSourceData.toJSON(message.projectSource)
        : undefined);
    message.blockDiff !== undefined &&
      (obj.blockDiff = message.blockDiff
        ? BlockDiffData.toJSON(message.blockDiff)
        : undefined);
    if (message.tables) {
      obj.tables = message.tables.map((e) =>
        e ? ProjectSourceTableData.toJSON(e) : undefined
      );
    } else {
      obj.tables = [];
    }
    if (message.relations) {
      obj.relations = message.relations.map((e) =>
        e ? ProjectSourceRelationData.toJSON(e) : undefined
      );
    } else {
      obj.relations = [];
    }
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.git !== undefined &&
      (obj.git = message.git ? GitData.toJSON(message.git) : undefined);
    message.importBy !== undefined &&
      (obj.importBy =
        message.importBy !== undefined
          ? importByToJSON(message.importBy)
          : undefined);
    message.generateSource !== undefined &&
      (obj.generateSource = message.generateSource
        ? GenerateSourceData.toJSON(message.generateSource)
        : undefined);
    message.usersPrompt !== undefined &&
      (obj.usersPrompt = message.usersPrompt);
    message.isNonFailedRegeneration !== undefined &&
      (obj.isNonFailedRegeneration = message.isNonFailedRegeneration);
    return obj;
  },

  fromPartial(object: DeepPartial<ApiChanges>): ApiChanges {
    const message = createBaseApiChanges();
    message.projectSource =
      object.projectSource !== undefined && object.projectSource !== null
        ? ProjectSourceData.fromPartial(object.projectSource)
        : undefined;
    message.blockDiff =
      object.blockDiff !== undefined && object.blockDiff !== null
        ? BlockDiffData.fromPartial(object.blockDiff)
        : undefined;
    message.tables =
      object.tables?.map((e) => ProjectSourceTableData.fromPartial(e)) || [];
    message.relations =
      object.relations?.map((e) => ProjectSourceRelationData.fromPartial(e)) ||
      [];
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.git =
      object.git !== undefined && object.git !== null
        ? GitData.fromPartial(object.git)
        : undefined;
    message.importBy = object.importBy ?? undefined;
    message.generateSource =
      object.generateSource !== undefined && object.generateSource !== null
        ? GenerateSourceData.fromPartial(object.generateSource)
        : undefined;
    message.usersPrompt = object.usersPrompt ?? undefined;
    message.isNonFailedRegeneration = object.isNonFailedRegeneration ?? false;
    return message;
  },
};

function createBaseProjectSourceReport(): ProjectSourceReport {
  return {
    projectGenerateQueueId: 0,
    projectId: 0,
    projectSourceId: 0,
    tokenUsage: 0,
  };
}

export const ProjectSourceReportData = {
  encode(
    message: ProjectSourceReport,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.projectSourceId !== 0) {
      writer.uint32(24).int32(message.projectSourceId);
    }
    if (message.tokenUsage !== 0) {
      writer.uint32(32).int32(message.tokenUsage);
    }
    if (message.payload !== undefined) {
      StructData.encode(
        StructData.wrap(message.payload),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.progress !== undefined) {
      ProjectSourceReportProgressData.encode(
        message.progress,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.complete !== undefined) {
      ProjectSourceReportCompleteData.encode(
        message.complete,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      ProjectSourceReportErrorData.encode(
        message.error,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSourceReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceReport();
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
          message.projectSourceId = reader.int32();
          break;
        case 4:
          message.tokenUsage = reader.int32();
          break;
        case 8:
          message.payload = StructData.unwrap(
            StructData.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.progress = ProjectSourceReportProgressData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.complete = ProjectSourceReportCompleteData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.error = ProjectSourceReportErrorData.decode(
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

  fromJSON(object: any): ProjectSourceReport {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectSourceId: isSet(object.projectSourceId)
        ? Number(object.projectSourceId)
        : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
      payload: isObject(object.payload) ? object.payload : undefined,
      progress: isSet(object.progress)
        ? ProjectSourceReportProgressData.fromJSON(object.progress)
        : undefined,
      complete: isSet(object.complete)
        ? ProjectSourceReportCompleteData.fromJSON(object.complete)
        : undefined,
      error: isSet(object.error)
        ? ProjectSourceReportErrorData.fromJSON(object.error)
        : undefined,
    };
  },

  toJSON(message: ProjectSourceReport): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.projectSourceId !== undefined &&
      (obj.projectSourceId = Math.round(message.projectSourceId));
    message.tokenUsage !== undefined &&
      (obj.tokenUsage = Math.round(message.tokenUsage));
    message.payload !== undefined && (obj.payload = message.payload);
    message.progress !== undefined &&
      (obj.progress = message.progress
        ? ProjectSourceReportProgressData.toJSON(message.progress)
        : undefined);
    message.complete !== undefined &&
      (obj.complete = message.complete
        ? ProjectSourceReportCompleteData.toJSON(message.complete)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error
        ? ProjectSourceReportErrorData.toJSON(message.error)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectSourceReport>): ProjectSourceReport {
    const message = createBaseProjectSourceReport();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.projectSourceId = object.projectSourceId ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    message.payload = object.payload ?? undefined;
    message.progress =
      object.progress !== undefined && object.progress !== null
        ? ProjectSourceReportProgressData.fromPartial(object.progress)
        : undefined;
    message.complete =
      object.complete !== undefined && object.complete !== null
        ? ProjectSourceReportCompleteData.fromPartial(object.complete)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? ProjectSourceReportErrorData.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseProjectSourceReportProgress(): ProjectSourceReportProgress {
  return { percentage: 0, message: "", payload: "" };
}

export const ProjectSourceReportProgressData = {
  encode(
    message: ProjectSourceReportProgress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.percentage !== 0) {
      writer.uint32(8).int32(message.percentage);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectSourceReportProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceReportProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceReportProgress {
    return {
      percentage: isSet(object.percentage) ? Number(object.percentage) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: ProjectSourceReportProgress): unknown {
    const obj: any = {};
    message.percentage !== undefined &&
      (obj.percentage = Math.round(message.percentage));
    message.message !== undefined && (obj.message = message.message);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectSourceReportProgress>
  ): ProjectSourceReportProgress {
    const message = createBaseProjectSourceReportProgress();
    message.percentage = object.percentage ?? 0;
    message.message = object.message ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseProjectSourceReportError(): ProjectSourceReportError {
  return { message: "" };
}

export const ProjectSourceReportErrorData = {
  encode(
    message: ProjectSourceReportError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectSourceReportError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceReportError();
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

  fromJSON(object: any): ProjectSourceReportError {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: ProjectSourceReportError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectSourceReportError>
  ): ProjectSourceReportError {
    const message = createBaseProjectSourceReportError();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseProjectSourceReportComplete(): ProjectSourceReportComplete {
  return { files: "" };
}

export const ProjectSourceReportCompleteData = {
  encode(
    message: ProjectSourceReportComplete,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.files !== "") {
      writer.uint32(34).string(message.files);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProjectSourceReportComplete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSourceReportComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.files = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectSourceReportComplete {
    return { files: isSet(object.files) ? String(object.files) : "" };
  },

  toJSON(message: ProjectSourceReportComplete): unknown {
    const obj: any = {};
    message.files !== undefined && (obj.files = message.files);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProjectSourceReportComplete>
  ): ProjectSourceReportComplete {
    const message = createBaseProjectSourceReportComplete();
    message.files = object.files ?? "";
    return message;
  },
};

function createBaseUseCaseRemoval(): UseCaseRemoval {
  return {
    projectGenerateQueueId: 0,
    useCaseBlocks: [],
    businessLogicBlocks: [],
    apiBlocks: [],
  };
}

export const UseCaseRemovalData = {
  encode(
    message: UseCaseRemoval,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(
        message.projectSource,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(16).int32(message.projectGenerateQueueId);
    }
    if (message.git !== undefined) {
      GitData.encode(message.git, writer.uint32(26).fork()).ldelim();
    }
    if (message.importBy !== undefined) {
      writer.uint32(32).int32(message.importBy);
    }
    for (const v of message.useCaseBlocks) {
      UseCaseRemovalBlockData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.businessLogicBlocks) {
      UseCaseRemovalBlockData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.apiBlocks) {
      UseCaseRemovalBlockData.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UseCaseRemoval {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUseCaseRemoval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectSource = ProjectSourceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 3:
          message.git = GitData.decode(reader, reader.uint32());
          break;
        case 4:
          message.importBy = reader.int32() as any;
          break;
        case 5:
          message.useCaseBlocks.push(
            UseCaseRemovalBlockData.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.businessLogicBlocks.push(
            UseCaseRemovalBlockData.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.apiBlocks.push(
            UseCaseRemovalBlockData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UseCaseRemoval {
    return {
      projectSource: isSet(object.projectSource)
        ? ProjectSourceData.fromJSON(object.projectSource)
        : undefined,
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      git: isSet(object.git) ? GitData.fromJSON(object.git) : undefined,
      importBy: isSet(object.importBy)
        ? importByFromJSON(object.importBy)
        : undefined,
      useCaseBlocks: Array.isArray(object?.useCaseBlocks)
        ? object.useCaseBlocks.map((e: any) =>
            UseCaseRemovalBlockData.fromJSON(e)
          )
        : [],
      businessLogicBlocks: Array.isArray(object?.businessLogicBlocks)
        ? object.businessLogicBlocks.map((e: any) =>
            UseCaseRemovalBlockData.fromJSON(e)
          )
        : [],
      apiBlocks: Array.isArray(object?.apiBlocks)
        ? object.apiBlocks.map((e: any) => UseCaseRemovalBlockData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UseCaseRemoval): unknown {
    const obj: any = {};
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource
        ? ProjectSourceData.toJSON(message.projectSource)
        : undefined);
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.git !== undefined &&
      (obj.git = message.git ? GitData.toJSON(message.git) : undefined);
    message.importBy !== undefined &&
      (obj.importBy =
        message.importBy !== undefined
          ? importByToJSON(message.importBy)
          : undefined);
    if (message.useCaseBlocks) {
      obj.useCaseBlocks = message.useCaseBlocks.map((e) =>
        e ? UseCaseRemovalBlockData.toJSON(e) : undefined
      );
    } else {
      obj.useCaseBlocks = [];
    }
    if (message.businessLogicBlocks) {
      obj.businessLogicBlocks = message.businessLogicBlocks.map((e) =>
        e ? UseCaseRemovalBlockData.toJSON(e) : undefined
      );
    } else {
      obj.businessLogicBlocks = [];
    }
    if (message.apiBlocks) {
      obj.apiBlocks = message.apiBlocks.map((e) =>
        e ? UseCaseRemovalBlockData.toJSON(e) : undefined
      );
    } else {
      obj.apiBlocks = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UseCaseRemoval>): UseCaseRemoval {
    const message = createBaseUseCaseRemoval();
    message.projectSource =
      object.projectSource !== undefined && object.projectSource !== null
        ? ProjectSourceData.fromPartial(object.projectSource)
        : undefined;
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.git =
      object.git !== undefined && object.git !== null
        ? GitData.fromPartial(object.git)
        : undefined;
    message.importBy = object.importBy ?? undefined;
    message.useCaseBlocks =
      object.useCaseBlocks?.map((e) =>
        UseCaseRemovalBlockData.fromPartial(e)
      ) || [];
    message.businessLogicBlocks =
      object.businessLogicBlocks?.map((e) =>
        UseCaseRemovalBlockData.fromPartial(e)
      ) || [];
    message.apiBlocks =
      object.apiBlocks?.map((e) => UseCaseRemovalBlockData.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseUseCaseRemovalBlock(): UseCaseRemovalBlock {
  return {
    id: 0,
    nodeId: "",
    name: "",
    blockType: "",
    parentNodeId: "",
    children: [],
  };
}

export const UseCaseRemovalBlockData = {
  encode(
    message: UseCaseRemovalBlock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.blockType !== "") {
      writer.uint32(34).string(message.blockType);
    }
    if (message.parentNodeId !== "") {
      writer.uint32(42).string(message.parentNodeId);
    }
    if (message.properties !== undefined) {
      StructData.encode(
        StructData.wrap(message.properties),
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.children) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UseCaseRemovalBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUseCaseRemovalBlock();
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
          message.name = reader.string();
          break;
        case 4:
          message.blockType = reader.string();
          break;
        case 5:
          message.parentNodeId = reader.string();
          break;
        case 6:
          message.properties = StructData.unwrap(
            StructData.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.children.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UseCaseRemovalBlock {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      blockType: isSet(object.blockType) ? String(object.blockType) : "",
      parentNodeId: isSet(object.parentNodeId)
        ? String(object.parentNodeId)
        : "",
      properties: isObject(object.properties) ? object.properties : undefined,
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: UseCaseRemovalBlock): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.name !== undefined && (obj.name = message.name);
    message.blockType !== undefined && (obj.blockType = message.blockType);
    message.parentNodeId !== undefined &&
      (obj.parentNodeId = message.parentNodeId);
    message.properties !== undefined && (obj.properties = message.properties);
    if (message.children) {
      obj.children = message.children.map((e) => e);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UseCaseRemovalBlock>): UseCaseRemovalBlock {
    const message = createBaseUseCaseRemovalBlock();
    message.id = object.id ?? 0;
    message.nodeId = object.nodeId ?? "";
    message.name = object.name ?? "";
    message.blockType = object.blockType ?? "";
    message.parentNodeId = object.parentNodeId ?? "";
    message.properties = object.properties ?? undefined;
    message.children = object.children?.map((e) => e) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error(
      "Value is larger than Number.MAX_SAFE_INTEGER"
    );
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
