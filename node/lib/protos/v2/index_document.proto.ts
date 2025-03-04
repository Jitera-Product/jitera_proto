/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { StructData } from "../google/protobuf/struct.proto";
import { Document, DocumentData } from "./document.proto";

export class IndexDocumentRequest {
  projectGenerateQueueId: number;
  projectId: number;
  documents: Document[];
}

export class IndexDocumentResponse {
  projectGenerateQueueId: number;
  documents: Document[];
  status: IndexDocumentResponseStatus;
  errorMessage: string;
}

export enum IndexDocumentResponseStatus {
  SUCCEEDED = 0,
  INPROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function indexDocumentResponseStatusFromJSON(
  object: any
): IndexDocumentResponseStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return IndexDocumentResponseStatus.SUCCEEDED;
    case 1:
    case "INPROGRESS":
      return IndexDocumentResponseStatus.INPROGRESS;
    case 2:
    case "FAILED":
      return IndexDocumentResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IndexDocumentResponseStatus.UNRECOGNIZED;
  }
}

export function indexDocumentResponseStatusToJSON(
  object: IndexDocumentResponseStatus
): string {
  switch (object) {
    case IndexDocumentResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case IndexDocumentResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case IndexDocumentResponseStatus.FAILED:
      return "FAILED";
    case IndexDocumentResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class DeleteIndexDocumentRequest {
  projectGenerateQueueId: number;
  projectId: number;
  deletedDocuments?: { [key: string]: any };
}

export class DeleteIndexDocumentResponse {
  projectGenerateQueueId: number;
  message?: string | undefined;
  status: DeleteIndexDocumentResponseStatus;
  errorMessage: string;
}

export enum DeleteIndexDocumentResponseStatus {
  SUCCEEDED = 0,
  INPROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function deleteIndexDocumentResponseStatusFromJSON(
  object: any
): DeleteIndexDocumentResponseStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return DeleteIndexDocumentResponseStatus.SUCCEEDED;
    case 1:
    case "INPROGRESS":
      return DeleteIndexDocumentResponseStatus.INPROGRESS;
    case 2:
    case "FAILED":
      return DeleteIndexDocumentResponseStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DeleteIndexDocumentResponseStatus.UNRECOGNIZED;
  }
}

export function deleteIndexDocumentResponseStatusToJSON(
  object: DeleteIndexDocumentResponseStatus
): string {
  switch (object) {
    case DeleteIndexDocumentResponseStatus.SUCCEEDED:
      return "SUCCEEDED";
    case DeleteIndexDocumentResponseStatus.INPROGRESS:
      return "INPROGRESS";
    case DeleteIndexDocumentResponseStatus.FAILED:
      return "FAILED";
    case DeleteIndexDocumentResponseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseIndexDocumentRequest(): IndexDocumentRequest {
  return { projectGenerateQueueId: 0, projectId: 0, documents: [] };
}

export const IndexDocumentRequestData = {
  encode(
    message: IndexDocumentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    for (const v of message.documents) {
      DocumentData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IndexDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexDocumentRequest();
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
          message.documents.push(DocumentData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexDocumentRequest {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      documents: Array.isArray(object?.documents)
        ? object.documents.map((e: any) => DocumentData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: IndexDocumentRequest): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    if (message.documents) {
      obj.documents = message.documents.map((e) =>
        e ? DocumentData.toJSON(e) : undefined
      );
    } else {
      obj.documents = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<IndexDocumentRequest>): IndexDocumentRequest {
    const message = createBaseIndexDocumentRequest();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.documents =
      object.documents?.map((e) => DocumentData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIndexDocumentResponse(): IndexDocumentResponse {
  return {
    projectGenerateQueueId: 0,
    documents: [],
    status: 0,
    errorMessage: "",
  };
}

export const IndexDocumentResponseData = {
  encode(
    message: IndexDocumentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    for (const v of message.documents) {
      DocumentData.encode(v!, writer.uint32(18).fork()).ldelim();
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
  ): IndexDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexDocumentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateQueueId = reader.int32();
          break;
        case 2:
          message.documents.push(DocumentData.decode(reader, reader.uint32()));
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

  fromJSON(object: any): IndexDocumentResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      documents: Array.isArray(object?.documents)
        ? object.documents.map((e: any) => DocumentData.fromJSON(e))
        : [],
      status: isSet(object.status)
        ? indexDocumentResponseStatusFromJSON(object.status)
        : 0,
      errorMessage: isSet(object.errorMessage)
        ? String(object.errorMessage)
        : "",
    };
  },

  toJSON(message: IndexDocumentResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    if (message.documents) {
      obj.documents = message.documents.map((e) =>
        e ? DocumentData.toJSON(e) : undefined
      );
    } else {
      obj.documents = [];
    }
    message.status !== undefined &&
      (obj.status = indexDocumentResponseStatusToJSON(message.status));
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IndexDocumentResponse>
  ): IndexDocumentResponse {
    const message = createBaseIndexDocumentResponse();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.documents =
      object.documents?.map((e) => DocumentData.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

function createBaseDeleteIndexDocumentRequest(): DeleteIndexDocumentRequest {
  return { projectGenerateQueueId: 0, projectId: 0 };
}

export const DeleteIndexDocumentRequestData = {
  encode(
    message: DeleteIndexDocumentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.projectGenerateQueueId !== 0) {
      writer.uint32(8).int32(message.projectGenerateQueueId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.deletedDocuments !== undefined) {
      StructData.encode(
        StructData.wrap(message.deletedDocuments),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteIndexDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteIndexDocumentRequest();
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
          message.deletedDocuments = StructData.unwrap(
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

  fromJSON(object: any): DeleteIndexDocumentRequest {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      deletedDocuments: isObject(object.deletedDocuments)
        ? object.deletedDocuments
        : undefined,
    };
  },

  toJSON(message: DeleteIndexDocumentRequest): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.deletedDocuments !== undefined &&
      (obj.deletedDocuments = message.deletedDocuments);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteIndexDocumentRequest>
  ): DeleteIndexDocumentRequest {
    const message = createBaseDeleteIndexDocumentRequest();
    message.projectGenerateQueueId = object.projectGenerateQueueId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.deletedDocuments = object.deletedDocuments ?? undefined;
    return message;
  },
};

function createBaseDeleteIndexDocumentResponse(): DeleteIndexDocumentResponse {
  return { projectGenerateQueueId: 0, status: 0, errorMessage: "" };
}

export const DeleteIndexDocumentResponseData = {
  encode(
    message: DeleteIndexDocumentResponse,
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
  ): DeleteIndexDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteIndexDocumentResponse();
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

  fromJSON(object: any): DeleteIndexDocumentResponse {
    return {
      projectGenerateQueueId: isSet(object.projectGenerateQueueId)
        ? Number(object.projectGenerateQueueId)
        : 0,
      message: isSet(object.message) ? String(object.message) : undefined,
      status: isSet(object.status)
        ? deleteIndexDocumentResponseStatusFromJSON(object.status)
        : 0,
      errorMessage: isSet(object.errorMessage)
        ? String(object.errorMessage)
        : "",
    };
  },

  toJSON(message: DeleteIndexDocumentResponse): unknown {
    const obj: any = {};
    message.projectGenerateQueueId !== undefined &&
      (obj.projectGenerateQueueId = Math.round(message.projectGenerateQueueId));
    message.message !== undefined && (obj.message = message.message);
    message.status !== undefined &&
      (obj.status = deleteIndexDocumentResponseStatusToJSON(message.status));
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteIndexDocumentResponse>
  ): DeleteIndexDocumentResponse {
    const message = createBaseDeleteIndexDocumentResponse();
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
