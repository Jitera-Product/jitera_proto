/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { StructData } from "../google/protobuf/struct.proto";

export class Document {
  id: number;
  projectId: number;
  uuid: string;
  title: string;
  content: string;
  properties?: { [key: string]: any };
}

function createBaseDocument(): Document {
  return { id: 0, projectId: 0, uuid: "", title: "", content: "" };
}

export const DocumentData = {
  encode(
    message: Document,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.uuid !== "") {
      writer.uint32(26).string(message.uuid);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(42).string(message.content);
    }
    if (message.properties !== undefined) {
      StructData.encode(
        StructData.wrap(message.properties),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Document {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocument();
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
          message.uuid = reader.string();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.content = reader.string();
          break;
        case 6:
          message.properties = StructData.unwrap(
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

  fromJSON(object: any): Document {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      title: isSet(object.title) ? String(object.title) : "",
      content: isSet(object.content) ? String(object.content) : "",
      properties: isObject(object.properties) ? object.properties : undefined,
    };
  },

  toJSON(message: Document): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    message.properties !== undefined && (obj.properties = message.properties);
    return obj;
  },

  fromPartial(object: DeepPartial<Document>): Document {
    const message = createBaseDocument();
    message.id = object.id ?? 0;
    message.projectId = object.projectId ?? 0;
    message.uuid = object.uuid ?? "";
    message.title = object.title ?? "";
    message.content = object.content ?? "";
    message.properties = object.properties ?? undefined;
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
