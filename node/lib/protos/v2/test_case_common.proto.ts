/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { StructData } from "../google/protobuf/struct.proto";
import { BrowserStorageState, BrowserStorageStateData } from "./browser.proto";

export class EnvConfiguration {
  httpBasicUsername?: string | undefined;
  httpBasicPassword?: string | undefined;
  header: { [key: string]: any }[];
}

export class TestCasesRunTestConfiguration {
  url?: string | undefined;
  username: string;
  password: string;
  loginPath?: string | undefined;
  projectGenerateId: number;
  projectId: number;
  tokenExpirationSeconds?: number | undefined;
  code?: string | undefined;
  storageState?: BrowserStorageState;
  envConfiguration?: EnvConfiguration | undefined;
}

function createBaseEnvConfiguration(): EnvConfiguration {
  return { header: [] };
}

export const EnvConfigurationData = {
  encode(
    message: EnvConfiguration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpBasicUsername !== undefined) {
      writer.uint32(10).string(message.httpBasicUsername);
    }
    if (message.httpBasicPassword !== undefined) {
      writer.uint32(18).string(message.httpBasicPassword);
    }
    for (const v of message.header) {
      StructData.encode(StructData.wrap(v!), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnvConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpBasicUsername = reader.string();
          break;
        case 2:
          message.httpBasicPassword = reader.string();
          break;
        case 3:
          message.header.push(
            StructData.unwrap(StructData.decode(reader, reader.uint32()))
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnvConfiguration {
    return {
      httpBasicUsername: isSet(object.httpBasicUsername)
        ? String(object.httpBasicUsername)
        : undefined,
      httpBasicPassword: isSet(object.httpBasicPassword)
        ? String(object.httpBasicPassword)
        : undefined,
      header: Array.isArray(object?.header) ? [...object.header] : [],
    };
  },

  toJSON(message: EnvConfiguration): unknown {
    const obj: any = {};
    message.httpBasicUsername !== undefined &&
      (obj.httpBasicUsername = message.httpBasicUsername);
    message.httpBasicPassword !== undefined &&
      (obj.httpBasicPassword = message.httpBasicPassword);
    if (message.header) {
      obj.header = message.header.map((e) => e);
    } else {
      obj.header = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EnvConfiguration>): EnvConfiguration {
    const message = createBaseEnvConfiguration();
    message.httpBasicUsername = object.httpBasicUsername ?? undefined;
    message.httpBasicPassword = object.httpBasicPassword ?? undefined;
    message.header = object.header?.map((e) => e) || [];
    return message;
  },
};

function createBaseTestCasesRunTestConfiguration(): TestCasesRunTestConfiguration {
  return { username: "", password: "", projectGenerateId: 0, projectId: 0 };
}

export const TestCasesRunTestConfigurationData = {
  encode(
    message: TestCasesRunTestConfiguration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== undefined) {
      writer.uint32(10).string(message.url);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.loginPath !== undefined) {
      writer.uint32(34).string(message.loginPath);
    }
    if (message.projectGenerateId !== 0) {
      writer.uint32(40).int32(message.projectGenerateId);
    }
    if (message.projectId !== 0) {
      writer.uint32(48).int32(message.projectId);
    }
    if (message.tokenExpirationSeconds !== undefined) {
      writer.uint32(56).int32(message.tokenExpirationSeconds);
    }
    if (message.code !== undefined) {
      writer.uint32(66).string(message.code);
    }
    if (message.storageState !== undefined) {
      BrowserStorageStateData.encode(
        message.storageState,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.envConfiguration !== undefined) {
      EnvConfigurationData.encode(
        message.envConfiguration,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestCasesRunTestConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCasesRunTestConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.password = reader.string();
          break;
        case 4:
          message.loginPath = reader.string();
          break;
        case 5:
          message.projectGenerateId = reader.int32();
          break;
        case 6:
          message.projectId = reader.int32();
          break;
        case 7:
          message.tokenExpirationSeconds = reader.int32();
          break;
        case 8:
          message.code = reader.string();
          break;
        case 9:
          message.storageState = BrowserStorageStateData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.envConfiguration = EnvConfigurationData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCasesRunTestConfiguration {
    return {
      url: isSet(object.url) ? String(object.url) : undefined,
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
      loginPath: isSet(object.loginPath) ? String(object.loginPath) : undefined,
      projectGenerateId: isSet(object.projectGenerateId)
        ? Number(object.projectGenerateId)
        : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      tokenExpirationSeconds: isSet(object.tokenExpirationSeconds)
        ? Number(object.tokenExpirationSeconds)
        : undefined,
      code: isSet(object.code) ? String(object.code) : undefined,
      storageState: isSet(object.storageState)
        ? BrowserStorageStateData.fromJSON(object.storageState)
        : undefined,
      envConfiguration: isSet(object.envConfiguration)
        ? EnvConfigurationData.fromJSON(object.envConfiguration)
        : undefined,
    };
  },

  toJSON(message: TestCasesRunTestConfiguration): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    message.loginPath !== undefined && (obj.loginPath = message.loginPath);
    message.projectGenerateId !== undefined &&
      (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.projectId !== undefined &&
      (obj.projectId = Math.round(message.projectId));
    message.tokenExpirationSeconds !== undefined &&
      (obj.tokenExpirationSeconds = Math.round(message.tokenExpirationSeconds));
    message.code !== undefined && (obj.code = message.code);
    message.storageState !== undefined &&
      (obj.storageState = message.storageState
        ? BrowserStorageStateData.toJSON(message.storageState)
        : undefined);
    message.envConfiguration !== undefined &&
      (obj.envConfiguration = message.envConfiguration
        ? EnvConfigurationData.toJSON(message.envConfiguration)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestCasesRunTestConfiguration>
  ): TestCasesRunTestConfiguration {
    const message = createBaseTestCasesRunTestConfiguration();
    message.url = object.url ?? undefined;
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.loginPath = object.loginPath ?? undefined;
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.tokenExpirationSeconds = object.tokenExpirationSeconds ?? undefined;
    message.code = object.code ?? undefined;
    message.storageState =
      object.storageState !== undefined && object.storageState !== null
        ? BrowserStorageStateData.fromPartial(object.storageState)
        : undefined;
    message.envConfiguration =
      object.envConfiguration !== undefined && object.envConfiguration !== null
        ? EnvConfigurationData.fromPartial(object.envConfiguration)
        : undefined;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
