/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Block, BlockData } from "./block_core.proto";

export class TestCasesCreation {
  projectGenerateId: number;
  projectId: number;
  testConfiguration?: TestCasesCreationTestConfiguration;
  useCases: Block[];
}

export class TestCasesCreationTestConfiguration {
  url: string;
  username: string;
  password: string;
}

export class TestCasesCreationReport {
  projectGenerateId: number;
  testCases: TestCasesCreationReportTestCase[];
  errors: string[];
  status: TestCasesCreationReportStatus;
}

export enum TestCasesCreationReportStatus {
  SUCCEEDED = 0,
  IN_PROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function testCasesCreationReportStatusFromJSON(object: any): TestCasesCreationReportStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return TestCasesCreationReportStatus.SUCCEEDED;
    case 1:
    case "IN_PROGRESS":
      return TestCasesCreationReportStatus.IN_PROGRESS;
    case 2:
    case "FAILED":
      return TestCasesCreationReportStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TestCasesCreationReportStatus.UNRECOGNIZED;
  }
}

export function testCasesCreationReportStatusToJSON(object: TestCasesCreationReportStatus): string {
  switch (object) {
    case TestCasesCreationReportStatus.SUCCEEDED:
      return "SUCCEEDED";
    case TestCasesCreationReportStatus.IN_PROGRESS:
      return "IN_PROGRESS";
    case TestCasesCreationReportStatus.FAILED:
      return "FAILED";
    case TestCasesCreationReportStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class TestCasesCreationReportTestCase {
  name: string;
  order: number;
  code: string;
  useCaseId: number;
  nodeId: string;
  steps: TestCasesCreationReportTestCaseStep[];
}

export class TestCasesCreationReportTestCaseStep {
  order: number;
  code: string;
  step: string;
  nodeId: string;
}

function createBaseTestCasesCreation(): TestCasesCreation {
  return { projectGenerateId: 0, projectId: 0, useCases: [] };
}

export const TestCasesCreationData = {
  encode(message: TestCasesCreation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateId !== 0) {
      writer.uint32(8).int32(message.projectGenerateId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.testConfiguration !== undefined) {
      TestCasesCreationTestConfigurationData.encode(message.testConfiguration, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.useCases) {
      BlockData.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.testConfiguration = TestCasesCreationTestConfigurationData.decode(reader, reader.uint32());
          break;
        case 4:
          message.useCases.push(BlockData.decode(reader, reader.uint32()));
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
      testConfiguration: isSet(object.testConfiguration)
        ? TestCasesCreationTestConfigurationData.fromJSON(object.testConfiguration)
        : undefined,
      useCases: Array.isArray(object?.useCases) ? object.useCases.map((e: any) => BlockData.fromJSON(e)) : [],
    };
  },

  toJSON(message: TestCasesCreation): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined && (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.testConfiguration !== undefined && (obj.testConfiguration = message.testConfiguration
      ? TestCasesCreationTestConfigurationData.toJSON(message.testConfiguration)
      : undefined);
    if (message.useCases) {
      obj.useCases = message.useCases.map((e) => e ? BlockData.toJSON(e) : undefined);
    } else {
      obj.useCases = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesCreation>): TestCasesCreation {
    const message = createBaseTestCasesCreation();
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.testConfiguration = (object.testConfiguration !== undefined && object.testConfiguration !== null)
      ? TestCasesCreationTestConfigurationData.fromPartial(object.testConfiguration)
      : undefined;
    message.useCases = object.useCases?.map((e) => BlockData.fromPartial(e)) || [];
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

function createBaseTestCasesCreationReport(): TestCasesCreationReport {
  return { projectGenerateId: 0, testCases: [], errors: [], status: 0 };
}

export const TestCasesCreationReportData = {
  encode(message: TestCasesCreationReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateId !== 0) {
      writer.uint32(8).int32(message.projectGenerateId);
    }
    for (const v of message.testCases) {
      TestCasesCreationReportTestCaseData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.errors) {
      writer.uint32(26).string(v!);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
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
        case 2:
          message.testCases.push(TestCasesCreationReportTestCaseData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.errors.push(reader.string());
          break;
        case 4:
          message.status = reader.int32() as any;
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
      status: isSet(object.status) ? testCasesCreationReportStatusFromJSON(object.status) : 0,
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
    message.status !== undefined && (obj.status = testCasesCreationReportStatusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesCreationReport>): TestCasesCreationReport {
    const message = createBaseTestCasesCreationReport();
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.testCases = object.testCases?.map((e) => TestCasesCreationReportTestCaseData.fromPartial(e)) || [];
    message.errors = object.errors?.map((e) => e) || [];
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseTestCasesCreationReportTestCase(): TestCasesCreationReportTestCase {
  return { name: "", order: 0, code: "", useCaseId: 0, nodeId: "", steps: [] };
}

export const TestCasesCreationReportTestCaseData = {
  encode(message: TestCasesCreationReportTestCase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.order !== 0) {
      writer.uint32(16).int32(message.order);
    }
    if (message.code !== "") {
      writer.uint32(26).string(message.code);
    }
    if (message.useCaseId !== 0) {
      writer.uint32(32).int32(message.useCaseId);
    }
    if (message.nodeId !== "") {
      writer.uint32(42).string(message.nodeId);
    }
    for (const v of message.steps) {
      TestCasesCreationReportTestCaseStepData.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.name = reader.string();
          break;
        case 2:
          message.order = reader.int32();
          break;
        case 3:
          message.code = reader.string();
          break;
        case 4:
          message.useCaseId = reader.int32();
          break;
        case 5:
          message.nodeId = reader.string();
          break;
        case 6:
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
      name: isSet(object.name) ? String(object.name) : "",
      order: isSet(object.order) ? Number(object.order) : 0,
      code: isSet(object.code) ? String(object.code) : "",
      useCaseId: isSet(object.useCaseId) ? Number(object.useCaseId) : 0,
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      steps: Array.isArray(object?.steps)
        ? object.steps.map((e: any) => TestCasesCreationReportTestCaseStepData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TestCasesCreationReportTestCase): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.order !== undefined && (obj.order = Math.round(message.order));
    message.code !== undefined && (obj.code = message.code);
    message.useCaseId !== undefined && (obj.useCaseId = Math.round(message.useCaseId));
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    if (message.steps) {
      obj.steps = message.steps.map((e) => e ? TestCasesCreationReportTestCaseStepData.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesCreationReportTestCase>): TestCasesCreationReportTestCase {
    const message = createBaseTestCasesCreationReportTestCase();
    message.name = object.name ?? "";
    message.order = object.order ?? 0;
    message.code = object.code ?? "";
    message.useCaseId = object.useCaseId ?? 0;
    message.nodeId = object.nodeId ?? "";
    message.steps = object.steps?.map((e) => TestCasesCreationReportTestCaseStepData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTestCasesCreationReportTestCaseStep(): TestCasesCreationReportTestCaseStep {
  return { order: 0, code: "", step: "", nodeId: "" };
}

export const TestCasesCreationReportTestCaseStepData = {
  encode(message: TestCasesCreationReportTestCaseStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== 0) {
      writer.uint32(8).int32(message.order);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.step !== "") {
      writer.uint32(26).string(message.step);
    }
    if (message.nodeId !== "") {
      writer.uint32(34).string(message.nodeId);
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
          message.order = reader.int32();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.step = reader.string();
          break;
        case 4:
          message.nodeId = reader.string();
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
      order: isSet(object.order) ? Number(object.order) : 0,
      code: isSet(object.code) ? String(object.code) : "",
      step: isSet(object.step) ? String(object.step) : "",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
    };
  },

  toJSON(message: TestCasesCreationReportTestCaseStep): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = Math.round(message.order));
    message.code !== undefined && (obj.code = message.code);
    message.step !== undefined && (obj.step = message.step);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesCreationReportTestCaseStep>): TestCasesCreationReportTestCaseStep {
    const message = createBaseTestCasesCreationReportTestCaseStep();
    message.order = object.order ?? 0;
    message.code = object.code ?? "";
    message.step = object.step ?? "";
    message.nodeId = object.nodeId ?? "";
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
