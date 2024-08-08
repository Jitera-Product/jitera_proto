/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class Chat {
  projectId: number;
  status: ChatStatus;
}

export enum ChatStatus {
  started = 0,
  inprogress = 1,
  done = 2,
  UNRECOGNIZED = -1,
}

export function chatStatusFromJSON(object: any): ChatStatus {
  switch (object) {
    case 0:
    case "started":
      return ChatStatus.started;
    case 1:
    case "inprogress":
      return ChatStatus.inprogress;
    case 2:
    case "done":
      return ChatStatus.done;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChatStatus.UNRECOGNIZED;
  }
}

export function chatStatusToJSON(object: ChatStatus): string {
  switch (object) {
    case ChatStatus.started:
      return "started";
    case ChatStatus.inprogress:
      return "inprogress";
    case ChatStatus.done:
      return "done";
    case ChatStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ChatCreatedFrom {
  assistant = 0,
  plugin = 1,
  UNRECOGNIZED = -1,
}

export function chatCreatedFromFromJSON(object: any): ChatCreatedFrom {
  switch (object) {
    case 0:
    case "assistant":
      return ChatCreatedFrom.assistant;
    case 1:
    case "plugin":
      return ChatCreatedFrom.plugin;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChatCreatedFrom.UNRECOGNIZED;
  }
}

export function chatCreatedFromToJSON(object: ChatCreatedFrom): string {
  switch (object) {
    case ChatCreatedFrom.assistant:
      return "assistant";
    case ChatCreatedFrom.plugin:
      return "plugin";
    case ChatCreatedFrom.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class Message {
  projectId: number;
  status: MessageStatus;
  assitant: MessageAssitant;
  from: MessageFrom;
  content: string;
  hidden: boolean;
  metadata: { [key: string]: string };
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

export enum MessageAssitant {
  backend = 0,
  frontend = 1,
  po = 2,
  tm = 3,
  developer = 4,
  monorepo = 5,
  fullstack_developer = 6,
  UNRECOGNIZED = -1,
}

export function messageAssitantFromJSON(object: any): MessageAssitant {
  switch (object) {
    case 0:
    case "backend":
      return MessageAssitant.backend;
    case 1:
    case "frontend":
      return MessageAssitant.frontend;
    case 2:
    case "po":
      return MessageAssitant.po;
    case 3:
    case "tm":
      return MessageAssitant.tm;
    case 4:
    case "developer":
      return MessageAssitant.developer;
    case 5:
    case "monorepo":
      return MessageAssitant.monorepo;
    case 6:
    case "fullstack_developer":
      return MessageAssitant.fullstack_developer;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageAssitant.UNRECOGNIZED;
  }
}

export function messageAssitantToJSON(object: MessageAssitant): string {
  switch (object) {
    case MessageAssitant.backend:
      return "backend";
    case MessageAssitant.frontend:
      return "frontend";
    case MessageAssitant.po:
      return "po";
    case MessageAssitant.tm:
      return "tm";
    case MessageAssitant.developer:
      return "developer";
    case MessageAssitant.monorepo:
      return "monorepo";
    case MessageAssitant.fullstack_developer:
      return "fullstack_developer";
    case MessageAssitant.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MessageFrom {
  system = 0,
  ai = 1,
  human = 2,
  assistant = 3,
  UNRECOGNIZED = -1,
}

export function messageFromFromJSON(object: any): MessageFrom {
  switch (object) {
    case 0:
    case "system":
      return MessageFrom.system;
    case 1:
    case "ai":
      return MessageFrom.ai;
    case 2:
    case "human":
      return MessageFrom.human;
    case 3:
    case "assistant":
      return MessageFrom.assistant;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageFrom.UNRECOGNIZED;
  }
}

export function messageFromToJSON(object: MessageFrom): string {
  switch (object) {
    case MessageFrom.system:
      return "system";
    case MessageFrom.ai:
      return "ai";
    case MessageFrom.human:
      return "human";
    case MessageFrom.assistant:
      return "assistant";
    case MessageFrom.UNRECOGNIZED:
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
  CODE = 0,
  USECASE = 1,
  BUSINESS_LOGIC = 2,
  API = 3,
  TICKET = 4,
  IMAGE = 5,
  UNRECOGNIZED = -1,
}

export function referenceReferenceTypeFromJSON(object: any): ReferenceReferenceType {
  switch (object) {
    case 0:
    case "CODE":
      return ReferenceReferenceType.CODE;
    case 1:
    case "USECASE":
      return ReferenceReferenceType.USECASE;
    case 2:
    case "BUSINESS_LOGIC":
      return ReferenceReferenceType.BUSINESS_LOGIC;
    case 3:
    case "API":
      return ReferenceReferenceType.API;
    case 4:
    case "TICKET":
      return ReferenceReferenceType.TICKET;
    case 5:
    case "IMAGE":
      return ReferenceReferenceType.IMAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReferenceReferenceType.UNRECOGNIZED;
  }
}

export function referenceReferenceTypeToJSON(object: ReferenceReferenceType): string {
  switch (object) {
    case ReferenceReferenceType.CODE:
      return "CODE";
    case ReferenceReferenceType.USECASE:
      return "USECASE";
    case ReferenceReferenceType.BUSINESS_LOGIC:
      return "BUSINESS_LOGIC";
    case ReferenceReferenceType.API:
      return "API";
    case ReferenceReferenceType.TICKET:
      return "TICKET";
    case ReferenceReferenceType.IMAGE:
      return "IMAGE";
    case ReferenceReferenceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class ReferenceMetadataEntry {
  key: string;
  value: string;
}

function createBaseChat(): Chat {
  return { projectId: 0, status: 0 };
}

export const ChatData = {
  encode(message: Chat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Chat {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      status: isSet(object.status) ? chatStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Chat): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.status !== undefined && (obj.status = chatStatusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<Chat>): Chat {
    const message = createBaseChat();
    message.projectId = object.projectId ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMessage(): Message {
  return { projectId: 0, status: 0, assitant: 0, from: 0, content: "", hidden: false, metadata: {} };
}

export const MessageData = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.assitant !== 0) {
      writer.uint32(24).int32(message.assitant);
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
          message.assitant = reader.int32() as any;
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
      assitant: isSet(object.assitant) ? messageAssitantFromJSON(object.assitant) : 0,
      from: isSet(object.from) ? messageFromFromJSON(object.from) : 0,
      content: isSet(object.content) ? String(object.content) : "",
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.status !== undefined && (obj.status = messageStatusToJSON(message.status));
    message.assitant !== undefined && (obj.assitant = messageAssitantToJSON(message.assitant));
    message.from !== undefined && (obj.from = messageFromToJSON(message.from));
    message.content !== undefined && (obj.content = message.content);
    message.hidden !== undefined && (obj.hidden = message.hidden);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.projectId = object.projectId ?? 0;
    message.status = object.status ?? 0;
    message.assitant = object.assitant ?? 0;
    message.from = object.from ?? 0;
    message.content = object.content ?? "";
    message.hidden = object.hidden ?? false;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
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
