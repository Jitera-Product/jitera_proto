/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export class BrowserCookie {
  name: string;
  value: string;
  domain: string;
  expires: number;
  path: string;
  httpOnly: boolean;
  secure: boolean;
  sameSite: string;
}

export class BrowserLocalStorage {
  name: string;
  value: string;
}

export class BrowserOrigin {
  origin: string;
  localStorage: BrowserLocalStorage[];
}

export class BrowserStorageState {
  cookies: BrowserCookie[];
  origins: BrowserOrigin[];
}

function createBaseBrowserCookie(): BrowserCookie {
  return { name: "", value: "", domain: "", expires: 0, path: "", httpOnly: false, secure: false, sameSite: "" };
}

export const BrowserCookieData = {
  encode(message: BrowserCookie, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }
    if (message.expires !== 0) {
      writer.uint32(32).int64(message.expires);
    }
    if (message.path !== "") {
      writer.uint32(42).string(message.path);
    }
    if (message.httpOnly === true) {
      writer.uint32(48).bool(message.httpOnly);
    }
    if (message.secure === true) {
      writer.uint32(56).bool(message.secure);
    }
    if (message.sameSite !== "") {
      writer.uint32(66).string(message.sameSite);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BrowserCookie {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowserCookie();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.domain = reader.string();
          break;
        case 4:
          message.expires = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.path = reader.string();
          break;
        case 6:
          message.httpOnly = reader.bool();
          break;
        case 7:
          message.secure = reader.bool();
          break;
        case 8:
          message.sameSite = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BrowserCookie {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
      domain: isSet(object.domain) ? String(object.domain) : "",
      expires: isSet(object.expires) ? Number(object.expires) : 0,
      path: isSet(object.path) ? String(object.path) : "",
      httpOnly: isSet(object.httpOnly) ? Boolean(object.httpOnly) : false,
      secure: isSet(object.secure) ? Boolean(object.secure) : false,
      sameSite: isSet(object.sameSite) ? String(object.sameSite) : "",
    };
  },

  toJSON(message: BrowserCookie): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    message.domain !== undefined && (obj.domain = message.domain);
    message.expires !== undefined && (obj.expires = Math.round(message.expires));
    message.path !== undefined && (obj.path = message.path);
    message.httpOnly !== undefined && (obj.httpOnly = message.httpOnly);
    message.secure !== undefined && (obj.secure = message.secure);
    message.sameSite !== undefined && (obj.sameSite = message.sameSite);
    return obj;
  },

  fromPartial(object: DeepPartial<BrowserCookie>): BrowserCookie {
    const message = createBaseBrowserCookie();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.domain = object.domain ?? "";
    message.expires = object.expires ?? 0;
    message.path = object.path ?? "";
    message.httpOnly = object.httpOnly ?? false;
    message.secure = object.secure ?? false;
    message.sameSite = object.sameSite ?? "";
    return message;
  },
};

function createBaseBrowserLocalStorage(): BrowserLocalStorage {
  return { name: "", value: "" };
}

export const BrowserLocalStorageData = {
  encode(message: BrowserLocalStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BrowserLocalStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowserLocalStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
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

  fromJSON(object: any): BrowserLocalStorage {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: BrowserLocalStorage): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<BrowserLocalStorage>): BrowserLocalStorage {
    const message = createBaseBrowserLocalStorage();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseBrowserOrigin(): BrowserOrigin {
  return { origin: "", localStorage: [] };
}

export const BrowserOriginData = {
  encode(message: BrowserOrigin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== "") {
      writer.uint32(10).string(message.origin);
    }
    for (const v of message.localStorage) {
      BrowserLocalStorageData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BrowserOrigin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowserOrigin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.origin = reader.string();
          break;
        case 2:
          message.localStorage.push(BrowserLocalStorageData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BrowserOrigin {
    return {
      origin: isSet(object.origin) ? String(object.origin) : "",
      localStorage: Array.isArray(object?.localStorage)
        ? object.localStorage.map((e: any) => BrowserLocalStorageData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BrowserOrigin): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin);
    if (message.localStorage) {
      obj.localStorage = message.localStorage.map((e) => e ? BrowserLocalStorageData.toJSON(e) : undefined);
    } else {
      obj.localStorage = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BrowserOrigin>): BrowserOrigin {
    const message = createBaseBrowserOrigin();
    message.origin = object.origin ?? "";
    message.localStorage = object.localStorage?.map((e) => BrowserLocalStorageData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBrowserStorageState(): BrowserStorageState {
  return { cookies: [], origins: [] };
}

export const BrowserStorageStateData = {
  encode(message: BrowserStorageState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cookies) {
      BrowserCookieData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.origins) {
      BrowserOriginData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BrowserStorageState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowserStorageState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cookies.push(BrowserCookieData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.origins.push(BrowserOriginData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BrowserStorageState {
    return {
      cookies: Array.isArray(object?.cookies) ? object.cookies.map((e: any) => BrowserCookieData.fromJSON(e)) : [],
      origins: Array.isArray(object?.origins) ? object.origins.map((e: any) => BrowserOriginData.fromJSON(e)) : [],
    };
  },

  toJSON(message: BrowserStorageState): unknown {
    const obj: any = {};
    if (message.cookies) {
      obj.cookies = message.cookies.map((e) => e ? BrowserCookieData.toJSON(e) : undefined);
    } else {
      obj.cookies = [];
    }
    if (message.origins) {
      obj.origins = message.origins.map((e) => e ? BrowserOriginData.toJSON(e) : undefined);
    } else {
      obj.origins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BrowserStorageState>): BrowserStorageState {
    const message = createBaseBrowserStorageState();
    message.cookies = object.cookies?.map((e) => BrowserCookieData.fromPartial(e)) || [];
    message.origins = object.origins?.map((e) => BrowserOriginData.fromPartial(e)) || [];
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
