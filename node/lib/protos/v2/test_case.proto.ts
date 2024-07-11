/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export class TestCasesCreation {
  projectGenerateId: number;
  projectId: number;
  testCases: TestCasesCreationTestCase[];
  testConfiguration?: TestCasesCreationTestConfiguration;
}

export class TestCasesCreationTestConfiguration {
  url: string;
  username: string;
  password: string;
}

export class TestCasesCreationTestCase {
  id: number;
  name: string;
  order: number;
  steps: TestCasesCreationTestCaseStep[];
}

export class TestCasesCreationTestCaseStep {
  nodeId: string;
  order: number;
  description: string;
}

export class TestCasesCreationReport {
  projectGenerateId: number;
  testCases: TestCasesCreationReportTestCase[];
  errors: string[];
}

export class TestCasesCreationReportTestCase {
  id: number;
  code: number;
  steps: TestCasesCreationReportTestCaseStep[];
}

export class TestCasesCreationReportTestCaseStep {
  nodeId: string;
  code: number;
}

function createBaseTestCasesCreation(): TestCasesCreation {
  return { projectGenerateId: 0, projectId: 0, testCases: [] };
}

export const TestCasesCreationData = {
  encode(message: TestCasesCreation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateId !== 0) {
      writer.uint32(8).int32(message.projectGenerateId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    for (const v of message.testCases) {
      TestCasesCreationTestCaseData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.testConfiguration !== undefined) {
      TestCasesCreationTestConfigurationData.encode(message.testConfiguration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCasesCreation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCasesCreation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.testCases.push(TestCasesCreationTestCaseData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.testConfiguration = TestCasesCreationTestConfigurationData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCasesCreation {
    return {
      projectGenerateId: isSet(object.projectGenerateId) ? Number(object.projectGenerateId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      testCases: Array.isArray(object?.testCases)
        ? object.testCases.map((e: any) => TestCasesCreationTestCaseData.fromJSON(e))
        : [],
      testConfiguration: isSet(object.testConfiguration)
        ? TestCasesCreationTestConfigurationData.fromJSON(object.testConfiguration)
        : undefined,
    };
  },

  toJSON(message: TestCasesCreation): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined && (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.testCases) {
      obj.testCases = message.testCases.map((e) => e ? TestCasesCreationTestCaseData.toJSON(e) : undefined);
    } else {
      obj.testCases = [];
    }
    message.testConfiguration !== undefined && (obj.testConfiguration = message.testConfiguration
      ? TestCasesCreationTestConfigurationData.toJSON(message.testConfiguration)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesCreation>): TestCasesCreation {
    const message = createBaseTestCasesCreation();
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.testCases = object.testCases?.map((e) => TestCasesCreationTestCaseData.fromPartial(e)) || [];
    message.testConfiguration = (object.testConfiguration !== undefined && object.testConfiguration !== null)
      ? TestCasesCreationTestConfigurationData.fromPartial(object.testConfiguration)
      : undefined;
    return message;
  },
};

function createBaseTestCasesCreationTestConfiguration(): TestCasesCreationTestConfiguration {
  return { url: "", username: "", password: "" };
}

export const TestCasesCreationTestConfigurationData = {
  encode(message: TestCasesCreationTestConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCasesCreationTestConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCasesCreationTestConfiguration();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCasesCreationTestConfiguration {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: TestCasesCreationTestConfiguration): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesCreationTestConfiguration>): TestCasesCreationTestConfiguration {
    const message = createBaseTestCasesCreationTestConfiguration();
    message.url = object.url ?? "";
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseTestCasesCreationTestCase(): TestCasesCreationTestCase {
  return { id: 0, name: "", order: 0, steps: [] };
}

export const TestCasesCreationTestCaseData = {
  encode(message: TestCasesCreationTestCase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.order !== 0) {
      writer.uint32(24).int32(message.order);
    }
    for (const v of message.steps) {
      TestCasesCreationTestCaseStepData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCasesCreationTestCase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCasesCreationTestCase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.order = reader.int32();
          break;
        case 4:
          message.steps.push(TestCasesCreationTestCaseStepData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCasesCreationTestCase {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      order: isSet(object.order) ? Number(object.order) : 0,
      steps: Array.isArray(object?.steps)
        ? object.steps.map((e: any) => TestCasesCreationTestCaseStepData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TestCasesCreationTestCase): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.order !== undefined && (obj.order = Math.round(message.order));
    if (message.steps) {
      obj.steps = message.steps.map((e) => e ? TestCasesCreationTestCaseStepData.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesCreationTestCase>): TestCasesCreationTestCase {
    const message = createBaseTestCasesCreationTestCase();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.order = object.order ?? 0;
    message.steps = object.steps?.map((e) => TestCasesCreationTestCaseStepData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTestCasesCreationTestCaseStep(): TestCasesCreationTestCaseStep {
  return { nodeId: "", order: 0, description: "" };
}

export const TestCasesCreationTestCaseStepData = {
  encode(message: TestCasesCreationTestCaseStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.order !== 0) {
      writer.uint32(16).int32(message.order);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCasesCreationTestCaseStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCasesCreationTestCaseStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.order = reader.int32();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCasesCreationTestCaseStep {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      order: isSet(object.order) ? Number(object.order) : 0,
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: TestCasesCreationTestCaseStep): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.order !== undefined && (obj.order = Math.round(message.order));
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesCreationTestCaseStep>): TestCasesCreationTestCaseStep {
    const message = createBaseTestCasesCreationTestCaseStep();
    message.nodeId = object.nodeId ?? "";
    message.order = object.order ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseTestCasesCreationReport(): TestCasesCreationReport {
  return { projectGenerateId: 0, testCases: [], errors: [] };
}

export const TestCasesCreationReportData = {
  encode(message: TestCasesCreationReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateId !== 0) {
      writer.uint32(8).int32(message.projectGenerateId);
    }
    for (const v of message.testCases) {
      TestCasesCreationReportTestCaseData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.errors) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCasesCreationReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCasesCreationReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateId = reader.int32();
          break;
        case 3:
          message.testCases.push(TestCasesCreationReportTestCaseData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.errors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCasesCreationReport {
    return {
      projectGenerateId: isSet(object.projectGenerateId) ? Number(object.projectGenerateId) : 0,
      testCases: Array.isArray(object?.testCases)
        ? object.testCases.map((e: any) => TestCasesCreationReportTestCaseData.fromJSON(e))
        : [],
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: TestCasesCreationReport): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined && (obj.projectGenerateId = Math.round(message.projectGenerateId));
    if (message.testCases) {
      obj.testCases = message.testCases.map((e) => e ? TestCasesCreationReportTestCaseData.toJSON(e) : undefined);
    } else {
      obj.testCases = [];
    }
    if (message.errors) {
      obj.errors = message.errors.map((e) => e);
    } else {
      obj.errors = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesCreationReport>): TestCasesCreationReport {
    const message = createBaseTestCasesCreationReport();
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.testCases = object.testCases?.map((e) => TestCasesCreationReportTestCaseData.fromPartial(e)) || [];
    message.errors = object.errors?.map((e) => e) || [];
    return message;
  },
};

function createBaseTestCasesCreationReportTestCase(): TestCasesCreationReportTestCase {
  return { id: 0, code: 0, steps: [] };
}

export const TestCasesCreationReportTestCaseData = {
  encode(message: TestCasesCreationReportTestCase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.code !== 0) {
      writer.uint32(16).int32(message.code);
    }
    for (const v of message.steps) {
      TestCasesCreationReportTestCaseStepData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCasesCreationReportTestCase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCasesCreationReportTestCase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.code = reader.int32();
          break;
        case 3:
          message.steps.push(TestCasesCreationReportTestCaseStepData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCasesCreationReportTestCase {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      code: isSet(object.code) ? Number(object.code) : 0,
      steps: Array.isArray(object?.steps)
        ? object.steps.map((e: any) => TestCasesCreationReportTestCaseStepData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TestCasesCreationReportTestCase): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.code !== undefined && (obj.code = Math.round(message.code));
    if (message.steps) {
      obj.steps = message.steps.map((e) => e ? TestCasesCreationReportTestCaseStepData.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesCreationReportTestCase>): TestCasesCreationReportTestCase {
    const message = createBaseTestCasesCreationReportTestCase();
    message.id = object.id ?? 0;
    message.code = object.code ?? 0;
    message.steps = object.steps?.map((e) => TestCasesCreationReportTestCaseStepData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTestCasesCreationReportTestCaseStep(): TestCasesCreationReportTestCaseStep {
  return { nodeId: "", code: 0 };
}

export const TestCasesCreationReportTestCaseStepData = {
  encode(message: TestCasesCreationReportTestCaseStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.code !== 0) {
      writer.uint32(16).int32(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCasesCreationReportTestCaseStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCasesCreationReportTestCaseStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.code = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCasesCreationReportTestCaseStep {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      code: isSet(object.code) ? Number(object.code) : 0,
    };
  },

  toJSON(message: TestCasesCreationReportTestCaseStep): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesCreationReportTestCaseStep>): TestCasesCreationReportTestCaseStep {
    const message = createBaseTestCasesCreationReportTestCaseStep();
    message.nodeId = object.nodeId ?? "";
    message.code = object.code ?? 0;
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
