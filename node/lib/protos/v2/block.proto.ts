/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class BusinessLogicSync {
  projectGenerateQueueId: number;
  projectId: number;
  useCase?: Block;
  businessLogics: Block[];
}

export class BusinessLogicSyncResponse {
  projectGenerateQueueId: number;
  message: string;
  status: BusinessLogicSyncResponseStatus;
  tokenUsage: number;
}

export enum BusinessLogicSyncResponseStatus {
  STATUS_UNSPECIFIED = 0,
  STARTED = 1,
  SUCCEEDED = 2,
  FAILED = 3,
  UNRECOGNIZED = -1,
}

export function businessLogicSyncResponseStatusFromJSON(object: any): BusinessLogicSyncResponseStatus {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return BusinessLogicSyncResponseStatus.STATUS_UNSPECIFIED;
    case 1:
    case "STARTED":
      return BusinessLogicSyncResponseStatus.STARTED;
    case 2:
    case "SUCCEEDED":
      return BusinessLogicSyncResponseStatus.SUCCEEDED;
    case 3:
    case "FAILED":
      return BusinessLogicSyncResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BusinessLogicSyncResponseStatus.UNRECOGNIZED;
  }
}

export function businessLogicSyncResponseStatusToJSON(object: BusinessLogicSyncResponseStatus): string {
  switch (object) {
    case BusinessLogicSyncResponseStatus.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case BusinessLogicSyncResponseStatus.STARTED:
      return "STARTED";
    case BusinessLogicSyncResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case BusinessLogicSyncResponseStatus.FAILED:
      return "FAILED";
    case BusinessLogicSyncResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class Block {
  id: number;
  nodeId: string;
  parentNodeId: string;
  pageNodeId: string;
  blockType: string;
  name: string;
  projectId: number;
  properties?: BlockProperty;
  content: BlockContent[];
  children: Block[];
}

export class BlockContent {
  type: string;
  value: string;
  href?: string | undefined;
  styles?: BlockStyle;
}

export class BlockStyle {
  bold?: boolean | undefined;
  italic?: boolean | undefined;
  underline?: boolean | undefined;
  strike?: boolean | undefined;
  code?: boolean | undefined;
  textColor?: string | undefined;
  backgroundColor?: string | undefined;
}

export class BlockProperty {
  useCaseId?: string | undefined;
  category?: string | undefined;
  level?: number | undefined;
  textColor?: string | undefined;
  backgroundColor?: string | undefined;
  textAlignment?: string | undefined;
  tableWidth?: number | undefined;
  hasColumnHeader?: boolean | undefined;
  hasRowHeader?: boolean | undefined;
  unsupported?: boolean | undefined;
  isToggleable?: boolean | undefined;
  aiGenerated?: boolean | undefined;
}

function createBaseBusinessLogicSync(): BusinessLogicSync {
  return { projectGenerateQueueId: 0, projectId: 0, businessLogics: [] };
}

export const BusinessLogicSyncData = {
  encode(message: BusinessLogicSync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.useCase !== undefined) {
      BlockData.encode(message.useCase, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.businessLogics) {
      BlockData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessLogicSync {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessLogicSync();
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
          message.useCase = BlockData.decode(reader, reader.uint32());
          break;
        case 4:
          message.businessLogics.push(BlockData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessLogicSync {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      useCase: isSet(object.useCase) ? BlockData.fromJSON(object.useCase) : undefined,
      businessLogics: Array.isArray(object?.businessLogics)
        ? object.businessLogics.map((e: any) => BlockData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BusinessLogicSync): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.useCase !== undefined && (obj.useCase = message.useCase ? BlockData.toJSON(message.useCase) : undefined);
    if (message.businessLogics) {
      obj.businessLogics = message.businessLogics.map((e) => e ? BlockData.toJSON(e) : undefined);
    } else {
      obj.businessLogics = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicSync>): BusinessLogicSync {
    const message = createBaseBusinessLogicSync();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.useCase = (object.useCase !== undefined && object.useCase !== null)
      ? BlockData.fromPartial(object.useCase)
      : undefined;
    message.businessLogics = object.businessLogics?.map((e) => BlockData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBusinessLogicSyncResponse(): BusinessLogicSyncResponse {
  return { projectGenerateQueueId: 0, message: "", status: 0, tokenUsage: 0 };
}

export const BusinessLogicSyncResponseData = {
  encode(message: BusinessLogicSyncResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.tokenUsage !== 0) {
      writer.uint32(32).int32(message.tokenUsage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessLogicSyncResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessLogicSyncResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.tokenUsage = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessLogicSyncResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      status: isSet(object.status) ? businessLogicSyncResponseStatusFromJSON(object.status) : 0,
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
    };
  },

  toJSON(message: BusinessLogicSyncResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.message !== undefined && (obj.message = message.message);
    message.status !== undefined && (obj.status = businessLogicSyncResponseStatusToJSON(message.status));
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    return obj;
  },

  fromPartial(object: DeepPartial<BusinessLogicSyncResponse>): BusinessLogicSyncResponse {
    const message = createBaseBusinessLogicSyncResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.message = object.message ?? "";
    message.status = object.status ?? 0;
    message.tokenUsage = object.tokenUsage ?? 0;
    return message;
  },
};

function createBaseBlock(): Block {
  return {
    id: 0,
    nodeId: "",
    parentNodeId: "",
    pageNodeId: "",
    blockType: "",
    name: "",
    projectId: 0,
    content: [],
    children: [],
  };
}

export const BlockData = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.parentNodeId !== "") {
      writer.uint32(26).string(message.parentNodeId);
    }
    if (message.pageNodeId !== "") {
      writer.uint32(34).string(message.pageNodeId);
    }
    if (message.blockType !== "") {
      writer.uint32(42).string(message.blockType);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.projectId !== 0) {
      writer.uint32(56).int32(message.projectId);
    }
    if (message.properties !== undefined) {
      BlockPropertyData.encode(message.properties, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.content) {
      BlockContentData.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.children) {
      BlockData.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
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
          message.parentNodeId = reader.string();
          break;
        case 4:
          message.pageNodeId = reader.string();
          break;
        case 5:
          message.blockType = reader.string();
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.projectId = reader.int32();
          break;
        case 8:
          message.properties = BlockPropertyData.decode(reader, reader.uint32());
          break;
        case 9:
          message.content.push(BlockContentData.decode(reader, reader.uint32()));
          break;
        case 10:
          message.children.push(BlockData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Block {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      parentNodeId: isSet(object.parentNodeId) ? String(object.parentNodeId) : "",
      pageNodeId: isSet(object.pageNodeId) ? String(object.pageNodeId) : "",
      blockType: isSet(object.blockType) ? String(object.blockType) : "",
      name: isSet(object.name) ? String(object.name) : "",
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      properties: isSet(object.properties) ? BlockPropertyData.fromJSON(object.properties) : undefined,
      content: Array.isArray(object?.content) ? object.content.map((e: any) => BlockContentData.fromJSON(e)) : [],
      children: Array.isArray(object?.children) ? object.children.map((e: any) => BlockData.fromJSON(e)) : [],
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.parentNodeId !== undefined && (obj.parentNodeId = message.parentNodeId);
    message.pageNodeId !== undefined && (obj.pageNodeId = message.pageNodeId);
    message.blockType !== undefined && (obj.blockType = message.blockType);
    message.name !== undefined && (obj.name = message.name);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.properties !== undefined &&
      (obj.properties = message.properties ? BlockPropertyData.toJSON(message.properties) : undefined);
    if (message.content) {
      obj.content = message.content.map((e) => e ? BlockContentData.toJSON(e) : undefined);
    } else {
      obj.content = [];
    }
    if (message.children) {
      obj.children = message.children.map((e) => e ? BlockData.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Block>): Block {
    const message = createBaseBlock();
    message.id = object.id ?? 0;
    message.nodeId = object.nodeId ?? "";
    message.parentNodeId = object.parentNodeId ?? "";
    message.pageNodeId = object.pageNodeId ?? "";
    message.blockType = object.blockType ?? "";
    message.name = object.name ?? "";
    message.projectId = object.projectId ?? 0;
    message.properties = (object.properties !== undefined && object.properties !== null)
      ? BlockPropertyData.fromPartial(object.properties)
      : undefined;
    message.content = object.content?.map((e) => BlockContentData.fromPartial(e)) || [];
    message.children = object.children?.map((e) => BlockData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBlockContent(): BlockContent {
  return { type: "", value: "" };
}

export const BlockContentData = {
  encode(message: BlockContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.href !== undefined) {
      writer.uint32(26).string(message.href);
    }
    if (message.styles !== undefined) {
      BlockStyleData.encode(message.styles, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.href = reader.string();
          break;
        case 4:
          message.styles = BlockStyleData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockContent {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      value: isSet(object.value) ? String(object.value) : "",
      href: isSet(object.href) ? String(object.href) : undefined,
      styles: isSet(object.styles) ? BlockStyleData.fromJSON(object.styles) : undefined,
    };
  },

  toJSON(message: BlockContent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = message.value);
    message.href !== undefined && (obj.href = message.href);
    message.styles !== undefined && (obj.styles = message.styles ? BlockStyleData.toJSON(message.styles) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockContent>): BlockContent {
    const message = createBaseBlockContent();
    message.type = object.type ?? "";
    message.value = object.value ?? "";
    message.href = object.href ?? undefined;
    message.styles = (object.styles !== undefined && object.styles !== null)
      ? BlockStyleData.fromPartial(object.styles)
      : undefined;
    return message;
  },
};

function createBaseBlockStyle(): BlockStyle {
  return {};
}

export const BlockStyleData = {
  encode(message: BlockStyle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bold !== undefined) {
      writer.uint32(8).bool(message.bold);
    }
    if (message.italic !== undefined) {
      writer.uint32(16).bool(message.italic);
    }
    if (message.underline !== undefined) {
      writer.uint32(24).bool(message.underline);
    }
    if (message.strike !== undefined) {
      writer.uint32(32).bool(message.strike);
    }
    if (message.code !== undefined) {
      writer.uint32(40).bool(message.code);
    }
    if (message.textColor !== undefined) {
      writer.uint32(50).string(message.textColor);
    }
    if (message.backgroundColor !== undefined) {
      writer.uint32(58).string(message.backgroundColor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockStyle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockStyle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bold = reader.bool();
          break;
        case 2:
          message.italic = reader.bool();
          break;
        case 3:
          message.underline = reader.bool();
          break;
        case 4:
          message.strike = reader.bool();
          break;
        case 5:
          message.code = reader.bool();
          break;
        case 6:
          message.textColor = reader.string();
          break;
        case 7:
          message.backgroundColor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockStyle {
    return {
      bold: isSet(object.bold) ? Boolean(object.bold) : undefined,
      italic: isSet(object.italic) ? Boolean(object.italic) : undefined,
      underline: isSet(object.underline) ? Boolean(object.underline) : undefined,
      strike: isSet(object.strike) ? Boolean(object.strike) : undefined,
      code: isSet(object.code) ? Boolean(object.code) : undefined,
      textColor: isSet(object.textColor) ? String(object.textColor) : undefined,
      backgroundColor: isSet(object.backgroundColor) ? String(object.backgroundColor) : undefined,
    };
  },

  toJSON(message: BlockStyle): unknown {
    const obj: any = {};
    message.bold !== undefined && (obj.bold = message.bold);
    message.italic !== undefined && (obj.italic = message.italic);
    message.underline !== undefined && (obj.underline = message.underline);
    message.strike !== undefined && (obj.strike = message.strike);
    message.code !== undefined && (obj.code = message.code);
    message.textColor !== undefined && (obj.textColor = message.textColor);
    message.backgroundColor !== undefined && (obj.backgroundColor = message.backgroundColor);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockStyle>): BlockStyle {
    const message = createBaseBlockStyle();
    message.bold = object.bold ?? undefined;
    message.italic = object.italic ?? undefined;
    message.underline = object.underline ?? undefined;
    message.strike = object.strike ?? undefined;
    message.code = object.code ?? undefined;
    message.textColor = object.textColor ?? undefined;
    message.backgroundColor = object.backgroundColor ?? undefined;
    return message;
  },
};

function createBaseBlockProperty(): BlockProperty {
  return {};
}

export const BlockPropertyData = {
  encode(message: BlockProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.useCaseId !== undefined) {
      writer.uint32(10).string(message.useCaseId);
    }
    if (message.category !== undefined) {
      writer.uint32(18).string(message.category);
    }
    if (message.level !== undefined) {
      writer.uint32(24).int32(message.level);
    }
    if (message.textColor !== undefined) {
      writer.uint32(34).string(message.textColor);
    }
    if (message.backgroundColor !== undefined) {
      writer.uint32(42).string(message.backgroundColor);
    }
    if (message.textAlignment !== undefined) {
      writer.uint32(50).string(message.textAlignment);
    }
    if (message.tableWidth !== undefined) {
      writer.uint32(56).int32(message.tableWidth);
    }
    if (message.hasColumnHeader !== undefined) {
      writer.uint32(64).bool(message.hasColumnHeader);
    }
    if (message.hasRowHeader !== undefined) {
      writer.uint32(72).bool(message.hasRowHeader);
    }
    if (message.unsupported !== undefined) {
      writer.uint32(80).bool(message.unsupported);
    }
    if (message.isToggleable !== undefined) {
      writer.uint32(88).bool(message.isToggleable);
    }
    if (message.aiGenerated !== undefined) {
      writer.uint32(96).bool(message.aiGenerated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockProperty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.useCaseId = reader.string();
          break;
        case 2:
          message.category = reader.string();
          break;
        case 3:
          message.level = reader.int32();
          break;
        case 4:
          message.textColor = reader.string();
          break;
        case 5:
          message.backgroundColor = reader.string();
          break;
        case 6:
          message.textAlignment = reader.string();
          break;
        case 7:
          message.tableWidth = reader.int32();
          break;
        case 8:
          message.hasColumnHeader = reader.bool();
          break;
        case 9:
          message.hasRowHeader = reader.bool();
          break;
        case 10:
          message.unsupported = reader.bool();
          break;
        case 11:
          message.isToggleable = reader.bool();
          break;
        case 12:
          message.aiGenerated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockProperty {
    return {
      useCaseId: isSet(object.useCaseId) ? String(object.useCaseId) : undefined,
      category: isSet(object.category) ? String(object.category) : undefined,
      level: isSet(object.level) ? Number(object.level) : undefined,
      textColor: isSet(object.textColor) ? String(object.textColor) : undefined,
      backgroundColor: isSet(object.backgroundColor) ? String(object.backgroundColor) : undefined,
      textAlignment: isSet(object.textAlignment) ? String(object.textAlignment) : undefined,
      tableWidth: isSet(object.tableWidth) ? Number(object.tableWidth) : undefined,
      hasColumnHeader: isSet(object.hasColumnHeader) ? Boolean(object.hasColumnHeader) : undefined,
      hasRowHeader: isSet(object.hasRowHeader) ? Boolean(object.hasRowHeader) : undefined,
      unsupported: isSet(object.unsupported) ? Boolean(object.unsupported) : undefined,
      isToggleable: isSet(object.isToggleable) ? Boolean(object.isToggleable) : undefined,
      aiGenerated: isSet(object.aiGenerated) ? Boolean(object.aiGenerated) : undefined,
    };
  },

  toJSON(message: BlockProperty): unknown {
    const obj: any = {};
    message.useCaseId !== undefined && (obj.useCaseId = message.useCaseId);
    message.category !== undefined && (obj.category = message.category);
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.textColor !== undefined && (obj.textColor = message.textColor);
    message.backgroundColor !== undefined && (obj.backgroundColor = message.backgroundColor);
    message.textAlignment !== undefined && (obj.textAlignment = message.textAlignment);
    message.tableWidth !== undefined && (obj.tableWidth = Math.round(message.tableWidth));
    message.hasColumnHeader !== undefined && (obj.hasColumnHeader = message.hasColumnHeader);
    message.hasRowHeader !== undefined && (obj.hasRowHeader = message.hasRowHeader);
    message.unsupported !== undefined && (obj.unsupported = message.unsupported);
    message.isToggleable !== undefined && (obj.isToggleable = message.isToggleable);
    message.aiGenerated !== undefined && (obj.aiGenerated = message.aiGenerated);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockProperty>): BlockProperty {
    const message = createBaseBlockProperty();
    message.useCaseId = object.useCaseId ?? undefined;
    message.category = object.category ?? undefined;
    message.level = object.level ?? undefined;
    message.textColor = object.textColor ?? undefined;
    message.backgroundColor = object.backgroundColor ?? undefined;
    message.textAlignment = object.textAlignment ?? undefined;
    message.tableWidth = object.tableWidth ?? undefined;
    message.hasColumnHeader = object.hasColumnHeader ?? undefined;
    message.hasRowHeader = object.hasRowHeader ?? undefined;
    message.unsupported = object.unsupported ?? undefined;
    message.isToggleable = object.isToggleable ?? undefined;
    message.aiGenerated = object.aiGenerated ?? undefined;
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
