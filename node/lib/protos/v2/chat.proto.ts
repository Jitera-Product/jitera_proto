/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Struct } from "../google/protobuf/struct.proto";

export class ChatRequest {
  session?: Session;
  chatId: string;
  status?: ChatRequestStatus | undefined;
  messages: Message[];
  createdFrom?: ChatRequestCreatedFrom | undefined;
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
  status?: MessageStatus | undefined;
  assistant?: MessageMessageAssistant | undefined;
  from?: MessageMessageFrom | undefined;
  content?: string | undefined;
  hidden?: boolean | undefined;
  metadata?: { [key: string]: any };
  assets: MessageAsset[];
  resources: Resource[];
  references: Reference[];
  createdAt: number;
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

export class Resource {
  name?: string | undefined;
  content?: string | undefined;
  resourceType?: ResourceResourceType | undefined;
  status?: ResourceStatus | undefined;
  category?: string | undefined;
  metadata?: { [key: string]: any };
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

export class Reference {
  name?: string | undefined;
  origin?: string | undefined;
  referenceType?: ReferenceReferenceType | undefined;
  category?: string | undefined;
  content?: string | undefined;
  metadata?: { [key: string]: any };
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

export class MessageAsset {
  base64Content: string;
}

export class Session {
  accessToken: string;
}

function createBaseChatRequest(): ChatRequest {
  return { chatId: "", messages: [] };
}

export const ChatRequestData = {
  encode(message: ChatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.session !== undefined) {
      SessionData.encode(message.session, writer.uint32(10).fork()).ldelim();
    }
    if (message.chatId !== "") {
      writer.uint32(18).string(message.chatId);
    }
    if (message.status !== undefined) {
      writer.uint32(24).int32(message.status);
    }
    for (const v of message.messages) {
      MessageData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.createdFrom !== undefined) {
      writer.uint32(40).int32(message.createdFrom);
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
          message.session = SessionData.decode(reader, reader.uint32());
          break;
        case 2:
          message.chatId = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.messages.push(MessageData.decode(reader, reader.uint32()));
          break;
        case 5:
          message.createdFrom = reader.int32() as any;
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
      session: isSet(object.session) ? SessionData.fromJSON(object.session) : undefined,
      chatId: isSet(object.chatId) ? String(object.chatId) : "",
      status: isSet(object.status) ? chatRequestStatusFromJSON(object.status) : undefined,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => MessageData.fromJSON(e)) : [],
      createdFrom: isSet(object.createdFrom) ? chatRequestCreatedFromFromJSON(object.createdFrom) : undefined,
    };
  },

  toJSON(message: ChatRequest): unknown {
    const obj: any = {};
    message.session !== undefined && (obj.session = message.session ? SessionData.toJSON(message.session) : undefined);
    message.chatId !== undefined && (obj.chatId = message.chatId);
    message.status !== undefined &&
      (obj.status = message.status !== undefined ? chatRequestStatusToJSON(message.status) : undefined);
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? MessageData.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    message.createdFrom !== undefined && (obj.createdFrom = message.createdFrom !== undefined
      ? chatRequestCreatedFromToJSON(message.createdFrom)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChatRequest>): ChatRequest {
    const message = createBaseChatRequest();
    message.session = (object.session !== undefined && object.session !== null)
      ? SessionData.fromPartial(object.session)
      : undefined;
    message.chatId = object.chatId ?? "";
    message.status = object.status ?? undefined;
    message.messages = object.messages?.map((e) => MessageData.fromPartial(e)) || [];
    message.createdFrom = object.createdFrom ?? undefined;
    return message;
  },
};

function createBaseMessage(): Message {
  return { projectId: 0, assets: [], resources: [], references: [], createdAt: 0 };
}

export const MessageData = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.assistant !== undefined) {
      writer.uint32(24).int32(message.assistant);
    }
    if (message.from !== undefined) {
      writer.uint32(32).int32(message.from);
    }
    if (message.content !== undefined) {
      writer.uint32(42).string(message.content);
    }
    if (message.hidden !== undefined) {
      writer.uint32(48).bool(message.hidden);
    }
    if (message.metadata !== undefined) {
      StructData.encode(Struct.wrap(message.metadata), writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.assets) {
      MessageAssetData.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.resources) {
      ResourceData.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.references) {
      ReferenceData.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.createdAt !== 0) {
      writer.uint32(88).int32(message.createdAt);
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
          message.metadata = Struct.unwrap(StructData.decode(reader, reader.uint32()));
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
          message.createdAt = reader.int32();
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
      status: isSet(object.status) ? messageStatusFromJSON(object.status) : undefined,
      assistant: isSet(object.assistant) ? messageMessageAssistantFromJSON(object.assistant) : undefined,
      from: isSet(object.from) ? messageMessageFromFromJSON(object.from) : undefined,
      content: isSet(object.content) ? String(object.content) : undefined,
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : undefined,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => MessageAssetData.fromJSON(e)) : [],
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => ResourceData.fromJSON(e)) : [],
      references: Array.isArray(object?.references) ? object.references.map((e: any) => ReferenceData.fromJSON(e)) : [],
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.status !== undefined &&
      (obj.status = message.status !== undefined ? messageStatusToJSON(message.status) : undefined);
    message.assistant !== undefined &&
      (obj.assistant = message.assistant !== undefined ? messageMessageAssistantToJSON(message.assistant) : undefined);
    message.from !== undefined &&
      (obj.from = message.from !== undefined ? messageMessageFromToJSON(message.from) : undefined);
    message.content !== undefined && (obj.content = message.content);
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.metadata !== undefined && (obj.metadata = message.metadata);
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
    message.createdAt !== undefined && (obj.createdAt = Math.round(message.createdAt));
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.projectId = object.projectId ?? 0;
    message.status = object.status ?? undefined;
    message.assistant = object.assistant ?? undefined;
    message.from = object.from ?? undefined;
    message.content = object.content ?? undefined;
    message.hidden = object.hidden ?? undefined;
    message.metadata = object.metadata ?? undefined;
    message.assets = object.assets?.map((e) => MessageAssetData.fromPartial(e)) || [];
    message.resources = object.resources?.map((e) => ResourceData.fromPartial(e)) || [];
    message.references = object.references?.map((e) => ReferenceData.fromPartial(e)) || [];
    message.createdAt = object.createdAt ?? 0;
    return message;
  },
};

function createBaseResource(): Resource {
  return {};
}

export const ResourceData = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.content !== undefined) {
      writer.uint32(18).string(message.content);
    }
    if (message.resourceType !== undefined) {
      writer.uint32(24).int32(message.resourceType);
    }
    if (message.status !== undefined) {
      writer.uint32(32).int32(message.status);
    }
    if (message.category !== undefined) {
      writer.uint32(42).string(message.category);
    }
    if (message.metadata !== undefined) {
      StructData.encode(Struct.wrap(message.metadata), writer.uint32(50).fork()).ldelim();
    }
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
          message.metadata = Struct.unwrap(StructData.decode(reader, reader.uint32()));
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
      name: isSet(object.name) ? String(object.name) : undefined,
      content: isSet(object.content) ? String(object.content) : undefined,
      resourceType: isSet(object.resourceType) ? resourceResourceTypeFromJSON(object.resourceType) : undefined,
      status: isSet(object.status) ? resourceStatusFromJSON(object.status) : undefined,
      category: isSet(object.category) ? String(object.category) : undefined,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.content !== undefined && (obj.content = message.content);
    message.resourceType !== undefined && (obj.resourceType = message.resourceType !== undefined
      ? resourceResourceTypeToJSON(message.resourceType)
      : undefined);
    message.status !== undefined &&
      (obj.status = message.status !== undefined ? resourceStatusToJSON(message.status) : undefined);
    message.category !== undefined && (obj.category = message.category);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = createBaseResource();
    message.name = object.name ?? undefined;
    message.content = object.content ?? undefined;
    message.resourceType = object.resourceType ?? undefined;
    message.status = object.status ?? undefined;
    message.category = object.category ?? undefined;
    message.metadata = object.metadata ?? undefined;
    return message;
  },
};

function createBaseReference(): Reference {
  return {};
}

export const ReferenceData = {
  encode(message: Reference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.origin !== undefined) {
      writer.uint32(18).string(message.origin);
    }
    if (message.referenceType !== undefined) {
      writer.uint32(24).int32(message.referenceType);
    }
    if (message.category !== undefined) {
      writer.uint32(34).string(message.category);
    }
    if (message.content !== undefined) {
      writer.uint32(42).string(message.content);
    }
    if (message.metadata !== undefined) {
      StructData.encode(Struct.wrap(message.metadata), writer.uint32(50).fork()).ldelim();
    }
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
          message.metadata = Struct.unwrap(StructData.decode(reader, reader.uint32()));
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
      name: isSet(object.name) ? String(object.name) : undefined,
      origin: isSet(object.origin) ? String(object.origin) : undefined,
      referenceType: isSet(object.referenceType) ? referenceReferenceTypeFromJSON(object.referenceType) : undefined,
      category: isSet(object.category) ? String(object.category) : undefined,
      content: isSet(object.content) ? String(object.content) : undefined,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
    };
  },

  toJSON(message: Reference): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.origin !== undefined && (obj.origin = message.origin);
    message.referenceType !== undefined && (obj.referenceType = message.referenceType !== undefined
      ? referenceReferenceTypeToJSON(message.referenceType)
      : undefined);
    message.category !== undefined && (obj.category = message.category);
    message.content !== undefined && (obj.content = message.content);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<Reference>): Reference {
    const message = createBaseReference();
    message.name = object.name ?? undefined;
    message.origin = object.origin ?? undefined;
    message.referenceType = object.referenceType ?? undefined;
    message.category = object.category ?? undefined;
    message.content = object.content ?? undefined;
    message.metadata = object.metadata ?? undefined;
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
