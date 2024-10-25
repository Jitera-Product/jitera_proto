/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { BrowserStorageState, BrowserStorageStateData } from "./browser.proto";
import { ProjectSource, ProjectSourceData } from "./project_source.proto";
import { StructData } from "../google/protobuf/struct.proto";

export class ProjectPageImport {
  projectGenerateId: number;
  projectId: number;
  projectSource?: ProjectSource;
  url: string;
  storageState?: BrowserStorageState;
  handledUrls: string[];
}

export class ProjectImportPageAction {
  uuid: string;
  actionableType: string;
  actionableId: number;
  name: string;
  script: string;
  actionType: string;
  url: string;
  dynamicPath: string;
  selector: string;
  inputs?: { [key: string]: any };
  files: string[];
  description: string;
  logicDescription: string;
  metadata?: { [key: string]: any };
}

export class ProjectImportPageComponent {
  uuid: string;
  projectImportPageId: number;
  name: string;
  html: string;
  script: string;
  parent: string;
  screenshot: string;
  description: string;
  logicDescription: string;
  size?: { [key: string]: any };
  position?: { [key: string]: any };
  elements?: { [key: string]: any };
  files: string[];
  metadata?: { [key: string]: any };
  actions: ProjectImportPageAction[];
}

export class ProjectImportPage {
  uuid: string;
  projectId: number;
  projectSourceId: number;
  url: string;
  name: string;
  path: string;
  parentUrl: string;
  dynamicPath: string;
  html: string;
  size?: { [key: string]: any };
  files: string[];
  description: string;
  metadata?: { [key: string]: any };
  actions: ProjectImportPageAction[];
  components: ProjectImportPageComponent[];
}

export class ProjectPageImportResponse {
  projectGenerateId: number;
  projectId: number;
  status: ProjectPageImportResponseStatus;
  payload?: { [key: string]: any };
}

export enum ProjectPageImportResponseStatus {
  STARTED = 0,
  SUCCEEDED = 2,
  INPROGRESS = 3,
  FAILED = 4,
  UNRECOGNIZED = -1,
}

export function projectPageImportResponseStatusFromJSON(object: any): ProjectPageImportResponseStatus {
  switch (object) {
    case 0:
    case "STARTED":
      return ProjectPageImportResponseStatus.STARTED;
    case 2:
    case "SUCCEEDED":
      return ProjectPageImportResponseStatus.SUCCEEDED;
    case 3:
    case "INPROGRESS":
      return ProjectPageImportResponseStatus.INPROGRESS;
    case 4:
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
    case ProjectPageImportResponseStatus.STARTED:
      return "STARTED";
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
  return { projectGenerateId: 0, projectId: 0, url: "", handledUrls: [] };
}

export const ProjectPageImportData = {
  encode(message: ProjectPageImport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateId !== 0) {
      writer.uint32(8).int32(message.projectGenerateId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.projectSource !== undefined) {
      ProjectSourceData.encode(message.projectSource, writer.uint32(26).fork()).ldelim();
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.storageState !== undefined) {
      BrowserStorageStateData.encode(message.storageState, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.handledUrls) {
      writer.uint32(50).string(v!);
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
          message.projectGenerateId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.projectSource = ProjectSourceData.decode(reader, reader.uint32());
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.storageState = BrowserStorageStateData.decode(reader, reader.uint32());
          break;
        case 6:
          message.handledUrls.push(reader.string());
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
      projectGenerateId: isSet(object.projectGenerateId) ? Number(object.projectGenerateId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectSource: isSet(object.projectSource) ? ProjectSourceData.fromJSON(object.projectSource) : undefined,
      url: isSet(object.url) ? String(object.url) : "",
      storageState: isSet(object.storageState) ? BrowserStorageStateData.fromJSON(object.storageState) : undefined,
      handledUrls: Array.isArray(object?.handledUrls) ? object.handledUrls.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ProjectPageImport): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined && (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectSource !== undefined &&
      (obj.projectSource = message.projectSource ? ProjectSourceData.toJSON(message.projectSource) : undefined);
    message.url !== undefined && (obj.url = message.url);
    message.storageState !== undefined &&
      (obj.storageState = message.storageState ? BrowserStorageStateData.toJSON(message.storageState) : undefined);
    if (message.handledUrls) {
      obj.handledUrls = message.handledUrls.map((e) => e);
    } else {
      obj.handledUrls = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectPageImport>): ProjectPageImport {
    const message = createBaseProjectPageImport();
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.projectSource = (object.projectSource !== undefined && object.projectSource !== null)
      ? ProjectSourceData.fromPartial(object.projectSource)
      : undefined;
    message.url = object.url ?? "";
    message.storageState = (object.storageState !== undefined && object.storageState !== null)
      ? BrowserStorageStateData.fromPartial(object.storageState)
      : undefined;
    message.handledUrls = object.handledUrls?.map((e) => e) || [];
    return message;
  },
};

function createBaseProjectImportPageAction(): ProjectImportPageAction {
  return {
    uuid: "",
    actionableType: "",
    actionableId: 0,
    name: "",
    script: "",
    actionType: "",
    url: "",
    dynamicPath: "",
    selector: "",
    files: [],
    description: "",
    logicDescription: "",
  };
}

export const ProjectImportPageActionData = {
  encode(message: ProjectImportPageAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.actionableType !== "") {
      writer.uint32(18).string(message.actionableType);
    }
    if (message.actionableId !== 0) {
      writer.uint32(24).int32(message.actionableId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.script !== "") {
      writer.uint32(42).string(message.script);
    }
    if (message.actionType !== "") {
      writer.uint32(50).string(message.actionType);
    }
    if (message.url !== "") {
      writer.uint32(58).string(message.url);
    }
    if (message.dynamicPath !== "") {
      writer.uint32(66).string(message.dynamicPath);
    }
    if (message.selector !== "") {
      writer.uint32(74).string(message.selector);
    }
    if (message.inputs !== undefined) {
      StructData.encode(StructData.wrap(message.inputs), writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.files) {
      writer.uint32(90).string(v!);
    }
    if (message.description !== "") {
      writer.uint32(98).string(message.description);
    }
    if (message.logicDescription !== "") {
      writer.uint32(106).string(message.logicDescription);
    }
    if (message.metadata !== undefined) {
      StructData.encode(StructData.wrap(message.metadata), writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectImportPageAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectImportPageAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.actionableType = reader.string();
          break;
        case 3:
          message.actionableId = reader.int32();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.script = reader.string();
          break;
        case 6:
          message.actionType = reader.string();
          break;
        case 7:
          message.url = reader.string();
          break;
        case 8:
          message.dynamicPath = reader.string();
          break;
        case 9:
          message.selector = reader.string();
          break;
        case 10:
          message.inputs = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        case 11:
          message.files.push(reader.string());
          break;
        case 12:
          message.description = reader.string();
          break;
        case 13:
          message.logicDescription = reader.string();
          break;
        case 14:
          message.metadata = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectImportPageAction {
    return {
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      actionableType: isSet(object.actionableType) ? String(object.actionableType) : "",
      actionableId: isSet(object.actionableId) ? Number(object.actionableId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      script: isSet(object.script) ? String(object.script) : "",
      actionType: isSet(object.actionType) ? String(object.actionType) : "",
      url: isSet(object.url) ? String(object.url) : "",
      dynamicPath: isSet(object.dynamicPath) ? String(object.dynamicPath) : "",
      selector: isSet(object.selector) ? String(object.selector) : "",
      inputs: isObject(object.inputs) ? object.inputs : undefined,
      files: Array.isArray(object?.files) ? object.files.map((e: any) => String(e)) : [],
      description: isSet(object.description) ? String(object.description) : "",
      logicDescription: isSet(object.logicDescription) ? String(object.logicDescription) : "",
      metadata: isObject(object.metadata) ? object.metadata : undefined,
    };
  },

  toJSON(message: ProjectImportPageAction): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.actionableType !== undefined && (obj.actionableType = message.actionableType);
    message.actionableId !== undefined && (obj.actionableId = Math.round(message.actionableId));
    message.name !== undefined && (obj.name = message.name);
    message.script !== undefined && (obj.script = message.script);
    message.actionType !== undefined && (obj.actionType = message.actionType);
    message.url !== undefined && (obj.url = message.url);
    message.dynamicPath !== undefined && (obj.dynamicPath = message.dynamicPath);
    message.selector !== undefined && (obj.selector = message.selector);
    message.inputs !== undefined && (obj.inputs = message.inputs);
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    message.description !== undefined && (obj.description = message.description);
    message.logicDescription !== undefined && (obj.logicDescription = message.logicDescription);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectImportPageAction>): ProjectImportPageAction {
    const message = createBaseProjectImportPageAction();
    message.uuid = object.uuid ?? "";
    message.actionableType = object.actionableType ?? "";
    message.actionableId = object.actionableId ?? 0;
    message.name = object.name ?? "";
    message.script = object.script ?? "";
    message.actionType = object.actionType ?? "";
    message.url = object.url ?? "";
    message.dynamicPath = object.dynamicPath ?? "";
    message.selector = object.selector ?? "";
    message.inputs = object.inputs ?? undefined;
    message.files = object.files?.map((e) => e) || [];
    message.description = object.description ?? "";
    message.logicDescription = object.logicDescription ?? "";
    message.metadata = object.metadata ?? undefined;
    return message;
  },
};

function createBaseProjectImportPageComponent(): ProjectImportPageComponent {
  return {
    uuid: "",
    projectImportPageId: 0,
    name: "",
    html: "",
    script: "",
    parent: "",
    screenshot: "",
    description: "",
    logicDescription: "",
    files: [],
    actions: [],
  };
}

export const ProjectImportPageComponentData = {
  encode(message: ProjectImportPageComponent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.projectImportPageId !== 0) {
      writer.uint32(16).int32(message.projectImportPageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.html !== "") {
      writer.uint32(34).string(message.html);
    }
    if (message.script !== "") {
      writer.uint32(42).string(message.script);
    }
    if (message.parent !== "") {
      writer.uint32(50).string(message.parent);
    }
    if (message.screenshot !== "") {
      writer.uint32(58).string(message.screenshot);
    }
    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }
    if (message.logicDescription !== "") {
      writer.uint32(74).string(message.logicDescription);
    }
    if (message.size !== undefined) {
      StructData.encode(StructData.wrap(message.size), writer.uint32(82).fork()).ldelim();
    }
    if (message.position !== undefined) {
      StructData.encode(StructData.wrap(message.position), writer.uint32(90).fork()).ldelim();
    }
    if (message.elements !== undefined) {
      StructData.encode(StructData.wrap(message.elements), writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.files) {
      writer.uint32(106).string(v!);
    }
    if (message.metadata !== undefined) {
      StructData.encode(StructData.wrap(message.metadata), writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.actions) {
      ProjectImportPageActionData.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectImportPageComponent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectImportPageComponent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.projectImportPageId = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.html = reader.string();
          break;
        case 5:
          message.script = reader.string();
          break;
        case 6:
          message.parent = reader.string();
          break;
        case 7:
          message.screenshot = reader.string();
          break;
        case 8:
          message.description = reader.string();
          break;
        case 9:
          message.logicDescription = reader.string();
          break;
        case 10:
          message.size = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        case 11:
          message.position = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        case 12:
          message.elements = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        case 13:
          message.files.push(reader.string());
          break;
        case 14:
          message.metadata = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        case 15:
          message.actions.push(ProjectImportPageActionData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectImportPageComponent {
    return {
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      projectImportPageId: isSet(object.projectImportPageId) ? Number(object.projectImportPageId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      html: isSet(object.html) ? String(object.html) : "",
      script: isSet(object.script) ? String(object.script) : "",
      parent: isSet(object.parent) ? String(object.parent) : "",
      screenshot: isSet(object.screenshot) ? String(object.screenshot) : "",
      description: isSet(object.description) ? String(object.description) : "",
      logicDescription: isSet(object.logicDescription) ? String(object.logicDescription) : "",
      size: isObject(object.size) ? object.size : undefined,
      position: isObject(object.position) ? object.position : undefined,
      elements: isObject(object.elements) ? object.elements : undefined,
      files: Array.isArray(object?.files) ? object.files.map((e: any) => String(e)) : [],
      metadata: isObject(object.metadata) ? object.metadata : undefined,
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => ProjectImportPageActionData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectImportPageComponent): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.projectImportPageId !== undefined && (obj.projectImportPageId = Math.round(message.projectImportPageId));
    message.name !== undefined && (obj.name = message.name);
    message.html !== undefined && (obj.html = message.html);
    message.script !== undefined && (obj.script = message.script);
    message.parent !== undefined && (obj.parent = message.parent);
    message.screenshot !== undefined && (obj.screenshot = message.screenshot);
    message.description !== undefined && (obj.description = message.description);
    message.logicDescription !== undefined && (obj.logicDescription = message.logicDescription);
    message.size !== undefined && (obj.size = message.size);
    message.position !== undefined && (obj.position = message.position);
    message.elements !== undefined && (obj.elements = message.elements);
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? ProjectImportPageActionData.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectImportPageComponent>): ProjectImportPageComponent {
    const message = createBaseProjectImportPageComponent();
    message.uuid = object.uuid ?? "";
    message.projectImportPageId = object.projectImportPageId ?? 0;
    message.name = object.name ?? "";
    message.html = object.html ?? "";
    message.script = object.script ?? "";
    message.parent = object.parent ?? "";
    message.screenshot = object.screenshot ?? "";
    message.description = object.description ?? "";
    message.logicDescription = object.logicDescription ?? "";
    message.size = object.size ?? undefined;
    message.position = object.position ?? undefined;
    message.elements = object.elements ?? undefined;
    message.files = object.files?.map((e) => e) || [];
    message.metadata = object.metadata ?? undefined;
    message.actions = object.actions?.map((e) => ProjectImportPageActionData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectImportPage(): ProjectImportPage {
  return {
    uuid: "",
    projectId: 0,
    projectSourceId: 0,
    url: "",
    name: "",
    path: "",
    parentUrl: "",
    dynamicPath: "",
    html: "",
    files: [],
    description: "",
    actions: [],
    components: [],
  };
}

export const ProjectImportPageData = {
  encode(message: ProjectImportPage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.projectSourceId !== 0) {
      writer.uint32(24).int32(message.projectSourceId);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.path !== "") {
      writer.uint32(50).string(message.path);
    }
    if (message.parentUrl !== "") {
      writer.uint32(58).string(message.parentUrl);
    }
    if (message.dynamicPath !== "") {
      writer.uint32(66).string(message.dynamicPath);
    }
    if (message.html !== "") {
      writer.uint32(74).string(message.html);
    }
    if (message.size !== undefined) {
      StructData.encode(StructData.wrap(message.size), writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.files) {
      writer.uint32(90).string(v!);
    }
    if (message.description !== "") {
      writer.uint32(98).string(message.description);
    }
    if (message.metadata !== undefined) {
      StructData.encode(StructData.wrap(message.metadata), writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.actions) {
      ProjectImportPageActionData.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.components) {
      ProjectImportPageComponentData.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectImportPage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectImportPage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.projectSourceId = reader.int32();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.path = reader.string();
          break;
        case 7:
          message.parentUrl = reader.string();
          break;
        case 8:
          message.dynamicPath = reader.string();
          break;
        case 9:
          message.html = reader.string();
          break;
        case 10:
          message.size = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        case 11:
          message.files.push(reader.string());
          break;
        case 12:
          message.description = reader.string();
          break;
        case 13:
          message.metadata = StructData.unwrap(StructData.decode(reader, reader.uint32()));
          break;
        case 14:
          message.actions.push(ProjectImportPageActionData.decode(reader, reader.uint32()));
          break;
        case 15:
          message.components.push(ProjectImportPageComponentData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectImportPage {
    return {
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectSourceId: isSet(object.projectSourceId) ? Number(object.projectSourceId) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      parentUrl: isSet(object.parentUrl) ? String(object.parentUrl) : "",
      dynamicPath: isSet(object.dynamicPath) ? String(object.dynamicPath) : "",
      html: isSet(object.html) ? String(object.html) : "",
      size: isObject(object.size) ? object.size : undefined,
      files: Array.isArray(object?.files) ? object.files.map((e: any) => String(e)) : [],
      description: isSet(object.description) ? String(object.description) : "",
      metadata: isObject(object.metadata) ? object.metadata : undefined,
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => ProjectImportPageActionData.fromJSON(e))
        : [],
      components: Array.isArray(object?.components)
        ? object.components.map((e: any) => ProjectImportPageComponentData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectImportPage): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectSourceId !== undefined && (obj.projectSourceId = Math.round(message.projectSourceId));
    message.url !== undefined && (obj.url = message.url);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    message.parentUrl !== undefined && (obj.parentUrl = message.parentUrl);
    message.dynamicPath !== undefined && (obj.dynamicPath = message.dynamicPath);
    message.html !== undefined && (obj.html = message.html);
    message.size !== undefined && (obj.size = message.size);
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    message.description !== undefined && (obj.description = message.description);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? ProjectImportPageActionData.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    if (message.components) {
      obj.components = message.components.map((e) => e ? ProjectImportPageComponentData.toJSON(e) : undefined);
    } else {
      obj.components = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectImportPage>): ProjectImportPage {
    const message = createBaseProjectImportPage();
    message.uuid = object.uuid ?? "";
    message.projectId = object.projectId ?? 0;
    message.projectSourceId = object.projectSourceId ?? 0;
    message.url = object.url ?? "";
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.parentUrl = object.parentUrl ?? "";
    message.dynamicPath = object.dynamicPath ?? "";
    message.html = object.html ?? "";
    message.size = object.size ?? undefined;
    message.files = object.files?.map((e) => e) || [];
    message.description = object.description ?? "";
    message.metadata = object.metadata ?? undefined;
    message.actions = object.actions?.map((e) => ProjectImportPageActionData.fromPartial(e)) || [];
    message.components = object.components?.map((e) => ProjectImportPageComponentData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectPageImportResponse(): ProjectPageImportResponse {
  return { projectGenerateId: 0, projectId: 0, status: 0 };
}

export const ProjectPageImportResponseData = {
  encode(message: ProjectPageImportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateId !== 0) {
      writer.uint32(8).int32(message.projectGenerateId);
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
          message.projectGenerateId = reader.int32();
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
      projectGenerateId: isSet(object.projectGenerateId) ? Number(object.projectGenerateId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      status: isSet(object.status) ? projectPageImportResponseStatusFromJSON(object.status) : 0,
      payload: isObject(object.payload) ? object.payload : undefined,
    };
  },

  toJSON(message: ProjectPageImportResponse): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined && (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.status !== undefined && (obj.status = projectPageImportResponseStatusToJSON(message.status));
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectPageImportResponse>): ProjectPageImportResponse {
    const message = createBaseProjectPageImportResponse();
    message.projectGenerateId = object.projectGenerateId ?? 0;
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
