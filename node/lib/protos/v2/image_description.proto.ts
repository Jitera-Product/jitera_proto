/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ComponentSpecification, ComponentSpecificationData } from "./component_specification.proto";

export class ImageToDescriptionRequest {
  projectGenerateQueueId: number;
  projectId: number;
  images: ImageToDescriptionRequestImage[];
}

export class ImageToDescriptionRequestImage {
  id: string;
  sourceType: string;
  url: string;
  html: string;
  figmaNode?: ImageToDescriptionRequestFigmaNode;
}

export class ImageToDescriptionRequestFigmaNode {
  nodeId: string;
  fileKey: string;
  accessToken: string;
}

export class ImageToDescriptionResponse {
  projectGenerateQueueId: number;
  projectId: number;
  status: ImageToDescriptionResponseStatus;
  images: ImageToDescriptionResponseImage[];
  tokenUsage: number;
  errorMessage: string;
}

export enum ImageToDescriptionResponseStatus {
  SUCCEEDED = 0,
  INPROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function imageToDescriptionResponseStatusFromJSON(object: any): ImageToDescriptionResponseStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return ImageToDescriptionResponseStatus.SUCCEEDED;
    case 1:
    case "INPROGRESS":
      return ImageToDescriptionResponseStatus.INPROGRESS;
    case 2:
    case "FAILED":
      return ImageToDescriptionResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ImageToDescriptionResponseStatus.UNRECOGNIZED;
  }
}

export function imageToDescriptionResponseStatusToJSON(object: ImageToDescriptionResponseStatus): string {
  switch (object) {
    case ImageToDescriptionResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case ImageToDescriptionResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case ImageToDescriptionResponseStatus.FAILED:
      return "FAILED";
    case ImageToDescriptionResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class ImageToDescriptionResponseImage {
  id: string;
  sourceType: string;
  componentSpecifications: ComponentSpecification[];
  imageWidth: number;
}

function createBaseImageToDescriptionRequest(): ImageToDescriptionRequest {
  return { projectGenerateQueueId: 0, projectId: 0, images: [] };
}

export const ImageToDescriptionRequestData = {
  encode(message: ImageToDescriptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    for (const v of message.images) {
      ImageToDescriptionRequestImageData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImageToDescriptionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImageToDescriptionRequest();
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
          message.images.push(ImageToDescriptionRequestImageData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImageToDescriptionRequest {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      images: Array.isArray(object?.images)
        ? object.images.map((e: any) => ImageToDescriptionRequestImageData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ImageToDescriptionRequest): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.images) {
      obj.images = message.images.map((e) => e ? ImageToDescriptionRequestImageData.toJSON(e) : undefined);
    } else {
      obj.images = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ImageToDescriptionRequest>): ImageToDescriptionRequest {
    const message = createBaseImageToDescriptionRequest();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.images = object.images?.map((e) => ImageToDescriptionRequestImageData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseImageToDescriptionRequestImage(): ImageToDescriptionRequestImage {
  return { id: "", sourceType: "", url: "", html: "" };
}

export const ImageToDescriptionRequestImageData = {
  encode(message: ImageToDescriptionRequestImage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sourceType !== "") {
      writer.uint32(18).string(message.sourceType);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.html !== "") {
      writer.uint32(34).string(message.html);
    }
    if (message.figmaNode !== undefined) {
      ImageToDescriptionRequestFigmaNodeData.encode(message.figmaNode, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImageToDescriptionRequestImage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImageToDescriptionRequestImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sourceType = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.html = reader.string();
          break;
        case 5:
          message.figmaNode = ImageToDescriptionRequestFigmaNodeData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImageToDescriptionRequestImage {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sourceType: isSet(object.sourceType) ? String(object.sourceType) : "",
      url: isSet(object.url) ? String(object.url) : "",
      html: isSet(object.html) ? String(object.html) : "",
      figmaNode: isSet(object.figmaNode)
        ? ImageToDescriptionRequestFigmaNodeData.fromJSON(object.figmaNode)
        : undefined,
    };
  },

  toJSON(message: ImageToDescriptionRequestImage): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sourceType !== undefined && (obj.sourceType = message.sourceType);
    message.url !== undefined && (obj.url = message.url);
    message.html !== undefined && (obj.html = message.html);
    message.figmaNode !== undefined &&
      (obj.figmaNode = message.figmaNode
        ? ImageToDescriptionRequestFigmaNodeData.toJSON(message.figmaNode)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ImageToDescriptionRequestImage>): ImageToDescriptionRequestImage {
    const message = createBaseImageToDescriptionRequestImage();
    message.id = object.id ?? "";
    message.sourceType = object.sourceType ?? "";
    message.url = object.url ?? "";
    message.html = object.html ?? "";
    message.figmaNode = (object.figmaNode !== undefined && object.figmaNode !== null)
      ? ImageToDescriptionRequestFigmaNodeData.fromPartial(object.figmaNode)
      : undefined;
    return message;
  },
};

function createBaseImageToDescriptionRequestFigmaNode(): ImageToDescriptionRequestFigmaNode {
  return { nodeId: "", fileKey: "", accessToken: "" };
}

export const ImageToDescriptionRequestFigmaNodeData = {
  encode(message: ImageToDescriptionRequestFigmaNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.fileKey !== "") {
      writer.uint32(18).string(message.fileKey);
    }
    if (message.accessToken !== "") {
      writer.uint32(26).string(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImageToDescriptionRequestFigmaNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImageToDescriptionRequestFigmaNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.fileKey = reader.string();
          break;
        case 3:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImageToDescriptionRequestFigmaNode {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      fileKey: isSet(object.fileKey) ? String(object.fileKey) : "",
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
    };
  },

  toJSON(message: ImageToDescriptionRequestFigmaNode): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.fileKey !== undefined && (obj.fileKey = message.fileKey);
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    return obj;
  },

  fromPartial(object: DeepPartial<ImageToDescriptionRequestFigmaNode>): ImageToDescriptionRequestFigmaNode {
    const message = createBaseImageToDescriptionRequestFigmaNode();
    message.nodeId = object.nodeId ?? "";
    message.fileKey = object.fileKey ?? "";
    message.accessToken = object.accessToken ?? "";
    return message;
  },
};

function createBaseImageToDescriptionResponse(): ImageToDescriptionResponse {
  return { projectGenerateQueueId: 0, projectId: 0, status: 0, images: [], tokenUsage: 0, errorMessage: "" };
}

export const ImageToDescriptionResponseData = {
  encode(message: ImageToDescriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    for (const v of message.images) {
      ImageToDescriptionResponseImageData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.tokenUsage !== 0) {
      writer.uint32(40).int32(message.tokenUsage);
    }
    if (message.errorMessage !== "") {
      writer.uint32(50).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImageToDescriptionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImageToDescriptionResponse();
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
          message.status = reader.int32() as any;
          break;
        case 4:
          message.images.push(ImageToDescriptionResponseImageData.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tokenUsage = reader.int32();
          break;
        case 6:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImageToDescriptionResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId) ? Number(object.projectGenerateQueueId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      status: isSet(object.status) ? imageToDescriptionResponseStatusFromJSON(object.status) : 0,
      images: Array.isArray(object?.images)
        ? object.images.map((e: any) => ImageToDescriptionResponseImageData.fromJSON(e))
        : [],
      tokenUsage: isSet(object.tokenUsage) ? Number(object.tokenUsage) : 0,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
    };
  },

  toJSON(message: ImageToDescriptionResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.status !== undefined && (obj.status = imageToDescriptionResponseStatusToJSON(message.status));
    if (message.images) {
      obj.images = message.images.map((e) => e ? ImageToDescriptionResponseImageData.toJSON(e) : undefined);
    } else {
      obj.images = [];
    }
    message.tokenUsage !== undefined && (obj.tokenUsage = Math.round(message.tokenUsage));
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial(object: DeepPartial<ImageToDescriptionResponse>): ImageToDescriptionResponse {
    const message = createBaseImageToDescriptionResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.status = object.status ?? 0;
    message.images = object.images?.map((e) => ImageToDescriptionResponseImageData.fromPartial(e)) || [];
    message.tokenUsage = object.tokenUsage ?? 0;
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

function createBaseImageToDescriptionResponseImage(): ImageToDescriptionResponseImage {
  return { id: "", sourceType: "", componentSpecifications: [], imageWidth: 0 };
}

export const ImageToDescriptionResponseImageData = {
  encode(message: ImageToDescriptionResponseImage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sourceType !== "") {
      writer.uint32(18).string(message.sourceType);
    }
    for (const v of message.componentSpecifications) {
      ComponentSpecificationData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.imageWidth !== 0) {
      writer.uint32(32).int32(message.imageWidth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImageToDescriptionResponseImage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImageToDescriptionResponseImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sourceType = reader.string();
          break;
        case 3:
          message.componentSpecifications.push(ComponentSpecificationData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.imageWidth = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImageToDescriptionResponseImage {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sourceType: isSet(object.sourceType) ? String(object.sourceType) : "",
      componentSpecifications: Array.isArray(object?.componentSpecifications)
        ? object.componentSpecifications.map((e: any) => ComponentSpecificationData.fromJSON(e))
        : [],
      imageWidth: isSet(object.imageWidth) ? Number(object.imageWidth) : 0,
    };
  },

  toJSON(message: ImageToDescriptionResponseImage): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sourceType !== undefined && (obj.sourceType = message.sourceType);
    if (message.componentSpecifications) {
      obj.componentSpecifications = message.componentSpecifications.map((e) =>
        e ? ComponentSpecificationData.toJSON(e) : undefined
      );
    } else {
      obj.componentSpecifications = [];
    }
    message.imageWidth !== undefined && (obj.imageWidth = Math.round(message.imageWidth));
    return obj;
  },

  fromPartial(object: DeepPartial<ImageToDescriptionResponseImage>): ImageToDescriptionResponseImage {
    const message = createBaseImageToDescriptionResponseImage();
    message.id = object.id ?? "";
    message.sourceType = object.sourceType ?? "";
    message.componentSpecifications =
      object.componentSpecifications?.map((e) => ComponentSpecificationData.fromPartial(e)) || [];
    message.imageWidth = object.imageWidth ?? 0;
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
