/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class ChatRequest {
  user?: Session;
  projectId: number;
  status: ChatRequestStatus;
  messages: Message[];
}

export enum ChatRequestStatus {
  started = 0,
  inprogress = 1,
  done = 2,
  UNRECOGNIZED = -1,
}

export function chatRequestStatusFromJSON(object: any): ChatRequestStatus {
  switch (object) {
    case 0:
    case "started":
      return ChatRequestStatus.started;
    case 1:
    case "inprogress":
      return ChatRequestStatus.inprogress;
    case 2:
    case "done":
      return ChatRequestStatus.done;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChatRequestStatus.UNRECOGNIZED;
  }
}

export function chatRequestStatusToJSON(object: ChatRequestStatus): string {
  switch (object) {
    case ChatRequestStatus.started:
      return "started";
    case ChatRequestStatus.inprogress:
      return "inprogress";
    case ChatRequestStatus.done:
      return "done";
    case ChatRequestStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ChatRequestCreatedFrom {
  assistant = 0,
  plugin = 1,
  UNRECOGNIZED = -1,
}

export function chatRequestCreatedFromFromJSON(object: any): ChatRequestCreatedFrom {
  switch (object) {
    case 0:
    case "assistant":
      return ChatRequestCreatedFrom.assistant;
    case 1:
    case "plugin":
      return ChatRequestCreatedFrom.plugin;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChatRequestCreatedFrom.UNRECOGNIZED;
  }
}

export function chatRequestCreatedFromToJSON(object: ChatRequestCreatedFrom): string {
  switch (object) {
    case ChatRequestCreatedFrom.assistant:
      return "assistant";
    case ChatRequestCreatedFrom.plugin:
      return "plugin";
    case ChatRequestCreatedFrom.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class Message {
  projectId: number;
  status: MessageStatus;
  assistant: MessageMessageAssistant;
  from: MessageMessageFrom;
  content: string;
  hidden: boolean;
  metadata: { [key: string]: string };
  assets: MessageAsset[];
  resources: Resource[];
  references: Reference[];
  createdAt: string;
}

export enum MessageStatus {
  success = 0,
  inprogress = 1,
  failed = 2,
  UNRECOGNIZED = -1,
}

export function messageStatusFromJSON(object: any): MessageStatus {
  switch (object) {
    case 0:
    case "success":
      return MessageStatus.success;
    case 1:
    case "inprogress":
      return MessageStatus.inprogress;
    case 2:
    case "failed":
      return MessageStatus.failed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageStatus.UNRECOGNIZED;
  }
}

export function messageStatusToJSON(object: MessageStatus): string {
  switch (object) {
    case MessageStatus.success:
      return "success";
    case MessageStatus.inprogress:
      return "inprogress";
    case MessageStatus.failed:
      return "failed";
    case MessageStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MessageMessageAssistant {
  backend = 0,
  frontend = 1,
  po = 2,
  tm = 3,
  developer = 4,
  monorepo = 5,
  fullstack_developer = 6,
  assistant_role = 7,
  UNRECOGNIZED = -1,
}

export function messageMessageAssistantFromJSON(object: any): MessageMessageAssistant {
  switch (object) {
    case 0:
    case "backend":
      return MessageMessageAssistant.backend;
    case 1:
    case "frontend":
      return MessageMessageAssistant.frontend;
    case 2:
    case "po":
      return MessageMessageAssistant.po;
    case 3:
    case "tm":
      return MessageMessageAssistant.tm;
    case 4:
    case "developer":
      return MessageMessageAssistant.developer;
    case 5:
    case "monorepo":
      return MessageMessageAssistant.monorepo;
    case 6:
    case "fullstack_developer":
      return MessageMessageAssistant.fullstack_developer;
    case 7:
    case "assistant_role":
      return MessageMessageAssistant.assistant_role;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageMessageAssistant.UNRECOGNIZED;
  }
}

export function messageMessageAssistantToJSON(object: MessageMessageAssistant): string {
  switch (object) {
    case MessageMessageAssistant.backend:
      return "backend";
    case MessageMessageAssistant.frontend:
      return "frontend";
    case MessageMessageAssistant.po:
      return "po";
    case MessageMessageAssistant.tm:
      return "tm";
    case MessageMessageAssistant.developer:
      return "developer";
    case MessageMessageAssistant.monorepo:
      return "monorepo";
    case MessageMessageAssistant.fullstack_developer:
      return "fullstack_developer";
    case MessageMessageAssistant.assistant_role:
      return "assistant_role";
    case MessageMessageAssistant.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MessageMessageFrom {
  system = 0,
  ai = 1,
  human = 2,
  from_assistant = 3,
  UNRECOGNIZED = -1,
}

export function messageMessageFromFromJSON(object: any): MessageMessageFrom {
  switch (object) {
    case 0:
    case "system":
      return MessageMessageFrom.system;
    case 1:
    case "ai":
      return MessageMessageFrom.ai;
    case 2:
    case "human":
      return MessageMessageFrom.human;
    case 3:
    case "from_assistant":
      return MessageMessageFrom.from_assistant;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageMessageFrom.UNRECOGNIZED;
  }
}

export function messageMessageFromToJSON(object: MessageMessageFrom): string {
  switch (object) {
    case MessageMessageFrom.system:
      return "system";
    case MessageMessageFrom.ai:
      return "ai";
    case MessageMessageFrom.human:
      return "human";
    case MessageMessageFrom.from_assistant:
      return "from_assistant";
    case MessageMessageFrom.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class MessageMetadataEntry {
  key: string;
  value: string;
}

export class Resource {
  name: string;
  content: string;
  resourceType: ResourceResourceType;
  status: ResourceStatus;
  category: string;
  metadata: { [key: string]: string };
}

export enum ResourceStatus {
  draft = 0,
  ready = 1,
  inprogress = 2,
  error = 3,
  success = 4,
  UNRECOGNIZED = -1,
}

export function resourceStatusFromJSON(object: any): ResourceStatus {
  switch (object) {
    case 0:
    case "draft":
      return ResourceStatus.draft;
    case 1:
    case "ready":
      return ResourceStatus.ready;
    case 2:
    case "inprogress":
      return ResourceStatus.inprogress;
    case 3:
    case "error":
      return ResourceStatus.error;
    case 4:
    case "success":
      return ResourceStatus.success;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourceStatus.UNRECOGNIZED;
  }
}

export function resourceStatusToJSON(object: ResourceStatus): string {
  switch (object) {
    case ResourceStatus.draft:
      return "draft";
    case ResourceStatus.ready:
      return "ready";
    case ResourceStatus.inprogress:
      return "inprogress";
    case ResourceStatus.error:
      return "error";
    case ResourceStatus.success:
      return "success";
    case ResourceStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ResourceResourceType {
  code = 0,
  document = 1,
  image = 2,
  UNRECOGNIZED = -1,
}

export function resourceResourceTypeFromJSON(object: any): ResourceResourceType {
  switch (object) {
    case 0:
    case "code":
      return ResourceResourceType.code;
    case 1:
    case "document":
      return ResourceResourceType.document;
    case 2:
    case "image":
      return ResourceResourceType.image;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourceResourceType.UNRECOGNIZED;
  }
}

export function resourceResourceTypeToJSON(object: ResourceResourceType): string {
  switch (object) {
    case ResourceResourceType.code:
      return "code";
    case ResourceResourceType.document:
      return "document";
    case ResourceResourceType.image:
      return "image";
    case ResourceResourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class ResourceMetadataEntry {
  key: string;
  value: string;
}

export class Reference {
  name: string;
  origin: string;
  referenceType: ReferenceReferenceType;
  category: string;
  content: string;
  metadata: { [key: string]: string };
}

export enum ReferenceReferenceType {
  code = 0,
  usecase = 1,
  business_logic = 2,
  api = 3,
  ticket = 4,
  image = 5,
  UNRECOGNIZED = -1,
}

export function referenceReferenceTypeFromJSON(object: any): ReferenceReferenceType {
  switch (object) {
    case 0:
    case "code":
      return ReferenceReferenceType.code;
    case 1:
    case "usecase":
      return ReferenceReferenceType.usecase;
    case 2:
    case "business_logic":
      return ReferenceReferenceType.business_logic;
    case 3:
    case "api":
      return ReferenceReferenceType.api;
    case 4:
    case "ticket":
      return ReferenceReferenceType.ticket;
    case 5:
    case "image":
      return ReferenceReferenceType.image;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReferenceReferenceType.UNRECOGNIZED;
  }
}

export function referenceReferenceTypeToJSON(object: ReferenceReferenceType): string {
  switch (object) {
    case ReferenceReferenceType.code:
      return "code";
    case ReferenceReferenceType.usecase:
      return "usecase";
    case ReferenceReferenceType.business_logic:
      return "business_logic";
    case ReferenceReferenceType.api:
      return "api";
    case ReferenceReferenceType.ticket:
      return "ticket";
    case ReferenceReferenceType.image:
      return "image";
    case ReferenceReferenceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class ReferenceMetadataEntry {
  key: string;
  value: string;
}

export class MessageAsset {
  base64Content: string;
}

export class Session {
  accessToken: string;
}

function createBaseChatRequest(): ChatRequest {
  return { projectId: 0, status: 0, messages: [] };
}

export const ChatRequestData = {
  encode(message: ChatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      SessionData.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    for (const v of message.messages) {
      MessageData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = SessionData.decode(reader, reader.uint32());
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.messages.push(MessageData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChatRequest {
    return {
      user: isSet(object.user) ? SessionData.fromJSON(object.user) : undefined,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      status: isSet(object.status) ? chatRequestStatusFromJSON(object.status) : 0,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => MessageData.fromJSON(e)) : [],
    };
  },

  toJSON(message: ChatRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? SessionData.toJSON(message.user) : undefined);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.status !== undefined && (obj.status = chatRequestStatusToJSON(message.status));
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? MessageData.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ChatRequest>): ChatRequest {
    const message = createBaseChatRequest();
    message.user = (object.user !== undefined && object.user !== null)
      ? SessionData.fromPartial(object.user)
      : undefined;
    message.projectId = object.projectId ?? 0;
    message.status = object.status ?? 0;
    message.messages = object.messages?.map((e) => MessageData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMessage(): Message {
  return {
    projectId: 0,
    status: 0,
    assistant: 0,
    from: 0,
    content: "",
    hidden: false,
    metadata: {},
    assets: [],
    resources: [],
    references: [],
    createdAt: "",
  };
}

export const MessageData = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.assistant !== 0) {
      writer.uint32(24).int32(message.assistant);
    }
    if (message.from !== 0) {
      writer.uint32(32).int32(message.from);
    }
    if (message.content !== "") {
      writer.uint32(42).string(message.content);
    }
    if (message.hidden === true) {
      writer.uint32(48).bool(message.hidden);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      MessageMetadataEntryData.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    for (const v of message.assets) {
      MessageAssetData.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.resources) {
      ResourceData.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.references) {
      ReferenceData.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.createdAt !== "") {
      writer.uint32(90).string(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.assistant = reader.int32() as any;
          break;
        case 4:
          message.from = reader.int32() as any;
          break;
        case 5:
          message.content = reader.string();
          break;
        case 6:
          message.hidden = reader.bool();
          break;
        case 7:
          const entry7 = MessageMetadataEntryData.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.metadata[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.assets.push(MessageAssetData.decode(reader, reader.uint32()));
          break;
        case 9:
          message.resources.push(ResourceData.decode(reader, reader.uint32()));
          break;
        case 10:
          message.references.push(ReferenceData.decode(reader, reader.uint32()));
          break;
        case 11:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      status: isSet(object.status) ? messageStatusFromJSON(object.status) : 0,
      assistant: isSet(object.assistant) ? messageMessageAssistantFromJSON(object.assistant) : 0,
      from: isSet(object.from) ? messageMessageFromFromJSON(object.from) : 0,
      content: isSet(object.content) ? String(object.content) : "",
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => MessageAssetData.fromJSON(e)) : [],
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => ResourceData.fromJSON(e)) : [],
      references: Array.isArray(object?.references) ? object.references.map((e: any) => ReferenceData.fromJSON(e)) : [],
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.status !== undefined && (obj.status = messageStatusToJSON(message.status));
    message.assistant !== undefined && (obj.assistant = messageMessageAssistantToJSON(message.assistant));
    message.from !== undefined && (obj.from = messageMessageFromToJSON(message.from));
    message.content !== undefined && (obj.content = message.content);
    message.hidden !== undefined && (obj.hidden = message.hidden);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    if (message.assets) {
      obj.assets = message.assets.map((e) => e ? MessageAssetData.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    if (message.resources) {
      obj.resources = message.resources.map((e) => e ? ResourceData.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    if (message.references) {
      obj.references = message.references.map((e) => e ? ReferenceData.toJSON(e) : undefined);
    } else {
      obj.references = [];
    }
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.projectId = object.projectId ?? 0;
    message.status = object.status ?? 0;
    message.assistant = object.assistant ?? 0;
    message.from = object.from ?? 0;
    message.content = object.content ?? "";
    message.hidden = object.hidden ?? false;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.assets = object.assets?.map((e) => MessageAssetData.fromPartial(e)) || [];
    message.resources = object.resources?.map((e) => ResourceData.fromPartial(e)) || [];
    message.references = object.references?.map((e) => ReferenceData.fromPartial(e)) || [];
    message.createdAt = object.createdAt ?? "";
    return message;
  },
};

function createBaseMessageMetadataEntry(): MessageMetadataEntry {
  return { key: "", value: "" };
}

export const MessageMetadataEntryData = {
  encode(message: MessageMetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageMetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageMetadataEntry();
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

  fromJSON(object: any): MessageMetadataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: MessageMetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MessageMetadataEntry>): MessageMetadataEntry {
    const message = createBaseMessageMetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseResource(): Resource {
  return { name: "", content: "", resourceType: 0, status: 0, category: "", metadata: {} };
}

export const ResourceData = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    if (message.resourceType !== 0) {
      writer.uint32(24).int32(message.resourceType);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.category !== "") {
      writer.uint32(42).string(message.category);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      ResourceMetadataEntryData.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.content = reader.string();
          break;
        case 3:
          message.resourceType = reader.int32() as any;
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.category = reader.string();
          break;
        case 6:
          const entry6 = ResourceMetadataEntryData.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.metadata[entry6.key] = entry6.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resource {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      content: isSet(object.content) ? String(object.content) : "",
      resourceType: isSet(object.resourceType) ? resourceResourceTypeFromJSON(object.resourceType) : 0,
      status: isSet(object.status) ? resourceStatusFromJSON(object.status) : 0,
      category: isSet(object.category) ? String(object.category) : "",
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.content !== undefined && (obj.content = message.content);
    message.resourceType !== undefined && (obj.resourceType = resourceResourceTypeToJSON(message.resourceType));
    message.status !== undefined && (obj.status = resourceStatusToJSON(message.status));
    message.category !== undefined && (obj.category = message.category);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = createBaseResource();
    message.name = object.name ?? "";
    message.content = object.content ?? "";
    message.resourceType = object.resourceType ?? 0;
    message.status = object.status ?? 0;
    message.category = object.category ?? "";
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseResourceMetadataEntry(): ResourceMetadataEntry {
  return { key: "", value: "" };
}

export const ResourceMetadataEntryData = {
  encode(message: ResourceMetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceMetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceMetadataEntry();
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

  fromJSON(object: any): ResourceMetadataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ResourceMetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<ResourceMetadataEntry>): ResourceMetadataEntry {
    const message = createBaseResourceMetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseReference(): Reference {
  return { name: "", origin: "", referenceType: 0, category: "", content: "", metadata: {} };
}

export const ReferenceData = {
  encode(message: Reference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.origin !== "") {
      writer.uint32(18).string(message.origin);
    }
    if (message.referenceType !== 0) {
      writer.uint32(24).int32(message.referenceType);
    }
    if (message.category !== "") {
      writer.uint32(34).string(message.category);
    }
    if (message.content !== "") {
      writer.uint32(42).string(message.content);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      ReferenceMetadataEntryData.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.origin = reader.string();
          break;
        case 3:
          message.referenceType = reader.int32() as any;
          break;
        case 4:
          message.category = reader.string();
          break;
        case 5:
          message.content = reader.string();
          break;
        case 6:
          const entry6 = ReferenceMetadataEntryData.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.metadata[entry6.key] = entry6.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Reference {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      origin: isSet(object.origin) ? String(object.origin) : "",
      referenceType: isSet(object.referenceType) ? referenceReferenceTypeFromJSON(object.referenceType) : 0,
      category: isSet(object.category) ? String(object.category) : "",
      content: isSet(object.content) ? String(object.content) : "",
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Reference): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.origin !== undefined && (obj.origin = message.origin);
    message.referenceType !== undefined && (obj.referenceType = referenceReferenceTypeToJSON(message.referenceType));
    message.category !== undefined && (obj.category = message.category);
    message.content !== undefined && (obj.content = message.content);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Reference>): Reference {
    const message = createBaseReference();
    message.name = object.name ?? "";
    message.origin = object.origin ?? "";
    message.referenceType = object.referenceType ?? 0;
    message.category = object.category ?? "";
    message.content = object.content ?? "";
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseReferenceMetadataEntry(): ReferenceMetadataEntry {
  return { key: "", value: "" };
}

export const ReferenceMetadataEntryData = {
  encode(message: ReferenceMetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReferenceMetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReferenceMetadataEntry();
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

  fromJSON(object: any): ReferenceMetadataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ReferenceMetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<ReferenceMetadataEntry>): ReferenceMetadataEntry {
    const message = createBaseReferenceMetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMessageAsset(): MessageAsset {
  return { base64Content: "" };
}

export const MessageAssetData = {
  encode(message: MessageAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base64Content !== "") {
      writer.uint32(10).string(message.base64Content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base64Content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageAsset {
    return { base64Content: isSet(object.base64Content) ? String(object.base64Content) : "" };
  },

  toJSON(message: MessageAsset): unknown {
    const obj: any = {};
    message.base64Content !== undefined && (obj.base64Content = message.base64Content);
    return obj;
  },

  fromPartial(object: DeepPartial<MessageAsset>): MessageAsset {
    const message = createBaseMessageAsset();
    message.base64Content = object.base64Content ?? "";
    return message;
  },
};

function createBaseSession(): Session {
  return { accessToken: "" };
}

export const SessionData = {
  encode(message: Session, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Session {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSession();
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

  fromJSON(object: any): Session {
    return { accessToken: isSet(object.accessToken) ? String(object.accessToken) : "" };
  },

  toJSON(message: Session): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    return obj;
  },

  fromPartial(object: DeepPartial<Session>): Session {
    const message = createBaseSession();
    message.accessToken = object.accessToken ?? "";
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
