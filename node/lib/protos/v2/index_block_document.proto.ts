/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { StructData } from "../google/protobuf/struct.proto";
import { Block, BlockData } from "./block_core.proto";

export class IndexBlockDocumentRequest {
  projectGenerateQueueId: number;
  projectId: number;
  blocks: Block[];
}

export class IndexBlockDocumentResponse {
  projectGenerateQueueId: number;
  message?: string | undefined;
  status: IndexBlockDocumentResponseStatus;
  errorMessage: string;
}

export enum IndexBlockDocumentResponseStatus {
  SUCCEEDED = 0,
  INPROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function indexBlockDocumentResponseStatusFromJSON(
  object: any
): IndexBlockDocumentResponseStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return IndexBlockDocumentResponseStatus.SUCCEEDED;
    case 1:
    case "INPROGRESS":
      return IndexBlockDocumentResponseStatus.INPROGRESS;
    case 2:
    case "FAILED":
      return IndexBlockDocumentResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IndexBlockDocumentResponseStatus.UNRECOGNIZED;
  }
}

export function indexBlockDocumentResponseStatusToJSON(
  object: IndexBlockDocumentResponseStatus
): string {
  switch (object) {
    case IndexBlockDocumentResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case IndexBlockDocumentResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case IndexBlockDocumentResponseStatus.FAILED:
      return "FAILED";
    case IndexBlockDocumentResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class DeleteIndexBlockDocumentRequest {
  projectGenerateQueueId: number;
  projectId: number;
  deletedBlockNodeIds?: { [key: string]: any };
}

export class DeleteIndexBlockDocumentResponse {
  projectGenerateQueueId: number;
  message?: string | undefined;
  status: DeleteIndexBlockDocumentResponseStatus;
  errorMessage: string;
}

export enum DeleteIndexBlockDocumentResponseStatus {
  SUCCEEDED = 0,
  INPROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function deleteIndexBlockDocumentResponseStatusFromJSON(
  object: any
): DeleteIndexBlockDocumentResponseStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return DeleteIndexBlockDocumentResponseStatus.SUCCEEDED;
    case 1:
    case "INPROGRESS":
      return DeleteIndexBlockDocumentResponseStatus.INPROGRESS;
    case 2:
    case "FAILED":
      return DeleteIndexBlockDocumentResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DeleteIndexBlockDocumentResponseStatus.UNRECOGNIZED;
  }
}

export function deleteIndexBlockDocumentResponseStatusToJSON(
  object: DeleteIndexBlockDocumentResponseStatus
): string {
  switch (object) {
    case DeleteIndexBlockDocumentResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case DeleteIndexBlockDocumentResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case DeleteIndexBlockDocumentResponseStatus.FAILED:
      return "FAILED";
    case DeleteIndexBlockDocumentResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseIndexBlockDocumentRequest(): IndexBlockDocumentRequest {
  return { projectGenerateQueueId: 0, projectId: 0, blocks: [] };
}

export const IndexBlockDocumentRequestData = {
  encode(
    message: IndexBlockDocumentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    for (const v of message.blocks) {
      BlockData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexBlockDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexBlockDocumentRequest();
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
          message.blocks.push(BlockData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexBlockDocumentRequest {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      blocks: Array.isArray(object?.blocks)
        ? object.blocks.map((e: any) => BlockData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: IndexBlockDocumentRequest): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) =>
        e ? BlockData.toJSON(e) : undefined
      );
    } else {
      obj.blocks = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexBlockDocumentRequest>
  ): IndexBlockDocumentRequest {
    const message = createBaseIndexBlockDocumentRequest();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.blocks = object.blocks?.map((e) => BlockData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIndexBlockDocumentResponse(): IndexBlockDocumentResponse {
  return { projectGenerateQueueId: 0, status: 0, errorMessage: "" };
}

export const IndexBlockDocumentResponseData = {
  encode(
    message: IndexBlockDocumentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.message !== undefined) {
      writer.uint32(18).string(message.message);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.errorMessage !== "") {
      writer.uint32(58).string(message.errorMessage);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexBlockDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexBlockDocumentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 4:
          message.status = reader.int32() as any;
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

  fromJSON(object: any): IndexBlockDocumentResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      message: isSet(object.message) ? String(object.message) : undefined,
      status: isSet(object.status)
        ? indexBlockDocumentResponseStatusFromJSON(object.status)
        : 0,
      errorMessage: isSet(object.errorMessage)
        ? String(object.errorMessage)
        : "",
    };
  },

  toJSON(message: IndexBlockDocumentResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.message !== undefined && (obj.message = message.message);
    message.status !== undefined &&
      (obj.status = indexBlockDocumentResponseStatusToJSON(message.status));
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexBlockDocumentResponse>
  ): IndexBlockDocumentResponse {
    const message = createBaseIndexBlockDocumentResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.message = object.message ?? undefined;
    message.status = object.status ?? 0;
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

function createBaseDeleteIndexBlockDocumentRequest(): DeleteIndexBlockDocumentRequest {
  return { projectGenerateQueueId: 0, projectId: 0 };
}

export const DeleteIndexBlockDocumentRequestData = {
  encode(
    message: DeleteIndexBlockDocumentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.deletedBlockNodeIds !== undefined) {
      StructData.encode(
        StructData.wrap(message.deletedBlockNodeIds),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteIndexBlockDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteIndexBlockDocumentRequest();
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
          message.deletedBlockNodeIds = StructData.unwrap(
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

  fromJSON(object: any): DeleteIndexBlockDocumentRequest {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      deletedBlockNodeIds: isObject(object.deletedBlockNodeIds)
        ? object.deletedBlockNodeIds
        : undefined,
    };
  },

  toJSON(message: DeleteIndexBlockDocumentRequest): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.deletedBlockNodeIds !== undefined &&
      (obj.deletedBlockNodeIds = message.deletedBlockNodeIds);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteIndexBlockDocumentRequest>
  ): DeleteIndexBlockDocumentRequest {
    const message = createBaseDeleteIndexBlockDocumentRequest();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.deletedBlockNodeIds = object.deletedBlockNodeIds ?? undefined;
    return message;
  },
};

function createBaseDeleteIndexBlockDocumentResponse(): DeleteIndexBlockDocumentResponse {
  return { projectGenerateQueueId: 0, status: 0, errorMessage: "" };
}

export const DeleteIndexBlockDocumentResponseData = {
  encode(
    message: DeleteIndexBlockDocumentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.message !== undefined) {
      writer.uint32(18).string(message.message);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.errorMessage !== "") {
      writer.uint32(58).string(message.errorMessage);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteIndexBlockDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteIndexBlockDocumentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 4:
          message.status = reader.int32() as any;
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

  fromJSON(object: any): DeleteIndexBlockDocumentResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      message: isSet(object.message) ? String(object.message) : undefined,
      status: isSet(object.status)
        ? deleteIndexBlockDocumentResponseStatusFromJSON(object.status)
        : 0,
      errorMessage: isSet(object.errorMessage)
        ? String(object.errorMessage)
        : "",
    };
  },

  toJSON(message: DeleteIndexBlockDocumentResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.message !== undefined && (obj.message = message.message);
    message.status !== undefined &&
      (obj.status = deleteIndexBlockDocumentResponseStatusToJSON(
        message.status
      ));
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteIndexBlockDocumentResponse>
  ): DeleteIndexBlockDocumentResponse {
    const message = createBaseDeleteIndexBlockDocumentResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.message = object.message ?? undefined;
    message.status = object.status ?? 0;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
