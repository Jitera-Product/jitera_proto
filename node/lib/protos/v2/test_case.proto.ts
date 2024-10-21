/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Block, BlockData } from "./block_core.proto";
import { BrowserStorageState, BrowserStorageStateData } from "./browser.proto";

export class TestCase {
  name: string;
  order: number;
  code: string;
  useCaseId: number;
  nodeId: string;
  steps: TestCaseStep[];
}

export class TestCaseStep {
  order: number;
  code: string;
  step: string;
  nodeId: string;
}

export class TestCasesCreation {
  projectGenerateId: number;
  projectId: number;
  testConfiguration?: TestCasesRunTestConfiguration;
  useCases: Block[];
}

export class TestCasesCreationReport {
  projectGenerateId: number;
  testCases: TestCase[];
  errors: string[];
  status: TestCasesCreationReportStatus;
  testConfiguration?: TestCasesRunTestConfiguration;
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

export class TestCasesRun {
  projectGenerateId: number;
  projectId: number;
  testConfiguration?: TestCasesRunTestConfiguration;
  testCases: TestCase[];
}

export class TestCasesRunTestConfiguration {
  url: string;
  username: string;
  password: string;
  loginPath?: string | undefined;
  projectGenerateId: number;
  projectId: number;
  tokenExpirationSeconds?: number | undefined;
  code?: string | undefined;
  storageState?: BrowserStorageState;
}

export class TestCaseAuthorisationCreationReport {
  projectGenerateId: number;
  projectId: number;
  code?: string | undefined;
  storageState?: BrowserStorageState;
  errors: string[];
  status: TestCaseAuthorisationCreationReportStatus;
}

export enum TestCaseAuthorisationCreationReportStatus {
  SUCCEEDED = 0,
  IN_PROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function testCaseAuthorisationCreationReportStatusFromJSON(
  object: any,
): TestCaseAuthorisationCreationReportStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return TestCaseAuthorisationCreationReportStatus.SUCCEEDED;
    case 1:
    case "IN_PROGRESS":
      return TestCaseAuthorisationCreationReportStatus.IN_PROGRESS;
    case 2:
    case "FAILED":
      return TestCaseAuthorisationCreationReportStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TestCaseAuthorisationCreationReportStatus.UNRECOGNIZED;
  }
}

export function testCaseAuthorisationCreationReportStatusToJSON(
  object: TestCaseAuthorisationCreationReportStatus,
): string {
  switch (object) {
    case TestCaseAuthorisationCreationReportStatus.SUCCEEDED:
      return "SUCCEEDED";
    case TestCaseAuthorisationCreationReportStatus.IN_PROGRESS:
      return "IN_PROGRESS";
    case TestCaseAuthorisationCreationReportStatus.FAILED:
      return "FAILED";
    case TestCaseAuthorisationCreationReportStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class TestCasesRunReport {
  projectGenerateId: number;
  status: TestCasesRunReportStatus;
  testConfiguration?: TestCasesRunTestConfiguration;
  errors: string[];
  testCase?: TestCasesRunReportTestCaseSource | undefined;
  testCaseStep?: TestCasesRunReportTestCaseStepSource | undefined;
}

export enum TestCasesRunReportStatus {
  SUCCEEDED = 0,
  IN_PROGRESS = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function testCasesRunReportStatusFromJSON(object: any): TestCasesRunReportStatus {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return TestCasesRunReportStatus.SUCCEEDED;
    case 1:
    case "IN_PROGRESS":
      return TestCasesRunReportStatus.IN_PROGRESS;
    case 2:
    case "FAILED":
      return TestCasesRunReportStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TestCasesRunReportStatus.UNRECOGNIZED;
  }
}

export function testCasesRunReportStatusToJSON(object: TestCasesRunReportStatus): string {
  switch (object) {
    case TestCasesRunReportStatus.SUCCEEDED:
      return "SUCCEEDED";
    case TestCasesRunReportStatus.IN_PROGRESS:
      return "IN_PROGRESS";
    case TestCasesRunReportStatus.FAILED:
      return "FAILED";
    case TestCasesRunReportStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export class TestCasesRunReportTestCaseStepSource {
  nodeId: string;
  code?: string | undefined;
  screenshot?: string | undefined;
  message?: string | undefined;
  status: TestCasesRunReportStatus;
}

export class TestCasesRunReportTestCaseSource {
  nodeId: string;
  status: TestCasesRunReportStatus;
}

function createBaseTestCase(): TestCase {
  return { name: "", order: 0, code: "", useCaseId: 0, nodeId: "", steps: [] };
}

export const TestCaseData = {
  encode(message: TestCase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      TestCaseStepData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCase();
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
          message.steps.push(TestCaseStepData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCase {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      order: isSet(object.order) ? Number(object.order) : 0,
      code: isSet(object.code) ? String(object.code) : "",
      useCaseId: isSet(object.useCaseId) ? Number(object.useCaseId) : 0,
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => TestCaseStepData.fromJSON(e)) : [],
    };
  },

  toJSON(message: TestCase): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.order !== undefined && (obj.order = Math.round(message.order));
    message.code !== undefined && (obj.code = message.code);
    message.useCaseId !== undefined && (obj.useCaseId = Math.round(message.useCaseId));
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    if (message.steps) {
      obj.steps = message.steps.map((e) => e ? TestCaseStepData.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TestCase>): TestCase {
    const message = createBaseTestCase();
    message.name = object.name ?? "";
    message.order = object.order ?? 0;
    message.code = object.code ?? "";
    message.useCaseId = object.useCaseId ?? 0;
    message.nodeId = object.nodeId ?? "";
    message.steps = object.steps?.map((e) => TestCaseStepData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTestCaseStep(): TestCaseStep {
  return { order: 0, code: "", step: "", nodeId: "" };
}

export const TestCaseStepData = {
  encode(message: TestCaseStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCaseStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCaseStep();
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

  fromJSON(object: any): TestCaseStep {
    return {
      order: isSet(object.order) ? Number(object.order) : 0,
      code: isSet(object.code) ? String(object.code) : "",
      step: isSet(object.step) ? String(object.step) : "",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
    };
  },

  toJSON(message: TestCaseStep): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = Math.round(message.order));
    message.code !== undefined && (obj.code = message.code);
    message.step !== undefined && (obj.step = message.step);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },

  fromPartial(object: DeepPartial<TestCaseStep>): TestCaseStep {
    const message = createBaseTestCaseStep();
    message.order = object.order ?? 0;
    message.code = object.code ?? "";
    message.step = object.step ?? "";
    message.nodeId = object.nodeId ?? "";
    return message;
  },
};

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
      TestCasesRunTestConfigurationData.encode(message.testConfiguration, writer.uint32(26).fork()).ldelim();
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
          message.testConfiguration = TestCasesRunTestConfigurationData.decode(reader, reader.uint32());
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
        ? TestCasesRunTestConfigurationData.fromJSON(object.testConfiguration)
        : undefined,
      useCases: Array.isArray(object?.useCases) ? object.useCases.map((e: any) => BlockData.fromJSON(e)) : [],
    };
  },

  toJSON(message: TestCasesCreation): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined && (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.testConfiguration !== undefined && (obj.testConfiguration = message.testConfiguration
      ? TestCasesRunTestConfigurationData.toJSON(message.testConfiguration)
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
      ? TestCasesRunTestConfigurationData.fromPartial(object.testConfiguration)
      : undefined;
    message.useCases = object.useCases?.map((e) => BlockData.fromPartial(e)) || [];
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
      TestCaseData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.errors) {
      writer.uint32(26).string(v!);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.testConfiguration !== undefined) {
      TestCasesRunTestConfigurationData.encode(message.testConfiguration, writer.uint32(42).fork()).ldelim();
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
          message.testCases.push(TestCaseData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.errors.push(reader.string());
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.testConfiguration = TestCasesRunTestConfigurationData.decode(reader, reader.uint32());
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
      testCases: Array.isArray(object?.testCases) ? object.testCases.map((e: any) => TestCaseData.fromJSON(e)) : [],
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => String(e)) : [],
      status: isSet(object.status) ? testCasesCreationReportStatusFromJSON(object.status) : 0,
      testConfiguration: isSet(object.testConfiguration)
        ? TestCasesRunTestConfigurationData.fromJSON(object.testConfiguration)
        : undefined,
    };
  },

  toJSON(message: TestCasesCreationReport): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined && (obj.projectGenerateId = Math.round(message.projectGenerateId));
    if (message.testCases) {
      obj.testCases = message.testCases.map((e) => e ? TestCaseData.toJSON(e) : undefined);
    } else {
      obj.testCases = [];
    }
    if (message.errors) {
      obj.errors = message.errors.map((e) => e);
    } else {
      obj.errors = [];
    }
    message.status !== undefined && (obj.status = testCasesCreationReportStatusToJSON(message.status));
    message.testConfiguration !== undefined && (obj.testConfiguration = message.testConfiguration
      ? TestCasesRunTestConfigurationData.toJSON(message.testConfiguration)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesCreationReport>): TestCasesCreationReport {
    const message = createBaseTestCasesCreationReport();
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.testCases = object.testCases?.map((e) => TestCaseData.fromPartial(e)) || [];
    message.errors = object.errors?.map((e) => e) || [];
    message.status = object.status ?? 0;
    message.testConfiguration = (object.testConfiguration !== undefined && object.testConfiguration !== null)
      ? TestCasesRunTestConfigurationData.fromPartial(object.testConfiguration)
      : undefined;
    return message;
  },
};

function createBaseTestCasesRun(): TestCasesRun {
  return { projectGenerateId: 0, projectId: 0, testCases: [] };
}

export const TestCasesRunData = {
  encode(message: TestCasesRun, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateId !== 0) {
      writer.uint32(8).int32(message.projectGenerateId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.testConfiguration !== undefined) {
      TestCasesRunTestConfigurationData.encode(message.testConfiguration, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.testCases) {
      TestCaseData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCasesRun {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCasesRun();
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
          message.testConfiguration = TestCasesRunTestConfigurationData.decode(reader, reader.uint32());
          break;
        case 4:
          message.testCases.push(TestCaseData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCasesRun {
    return {
      projectGenerateId: isSet(object.projectGenerateId) ? Number(object.projectGenerateId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      testConfiguration: isSet(object.testConfiguration)
        ? TestCasesRunTestConfigurationData.fromJSON(object.testConfiguration)
        : undefined,
      testCases: Array.isArray(object?.testCases) ? object.testCases.map((e: any) => TestCaseData.fromJSON(e)) : [],
    };
  },

  toJSON(message: TestCasesRun): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined && (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.testConfiguration !== undefined && (obj.testConfiguration = message.testConfiguration
      ? TestCasesRunTestConfigurationData.toJSON(message.testConfiguration)
      : undefined);
    if (message.testCases) {
      obj.testCases = message.testCases.map((e) => e ? TestCaseData.toJSON(e) : undefined);
    } else {
      obj.testCases = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesRun>): TestCasesRun {
    const message = createBaseTestCasesRun();
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.testConfiguration = (object.testConfiguration !== undefined && object.testConfiguration !== null)
      ? TestCasesRunTestConfigurationData.fromPartial(object.testConfiguration)
      : undefined;
    message.testCases = object.testCases?.map((e) => TestCaseData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTestCasesRunTestConfiguration(): TestCasesRunTestConfiguration {
  return { url: "", username: "", password: "", projectGenerateId: 0, projectId: 0 };
}

export const TestCasesRunTestConfigurationData = {
  encode(message: TestCasesRunTestConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
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
      BrowserStorageStateData.encode(message.storageState, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCasesRunTestConfiguration {
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
          message.storageState = BrowserStorageStateData.decode(reader, reader.uint32());
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
      url: isSet(object.url) ? String(object.url) : "",
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
      loginPath: isSet(object.loginPath) ? String(object.loginPath) : undefined,
      projectGenerateId: isSet(object.projectGenerateId) ? Number(object.projectGenerateId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      tokenExpirationSeconds: isSet(object.tokenExpirationSeconds) ? Number(object.tokenExpirationSeconds) : undefined,
      code: isSet(object.code) ? String(object.code) : undefined,
      storageState: isSet(object.storageState) ? BrowserStorageStateData.fromJSON(object.storageState) : undefined,
    };
  },

  toJSON(message: TestCasesRunTestConfiguration): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    message.loginPath !== undefined && (obj.loginPath = message.loginPath);
    message.projectGenerateId !== undefined && (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.tokenExpirationSeconds !== undefined &&
      (obj.tokenExpirationSeconds = Math.round(message.tokenExpirationSeconds));
    message.code !== undefined && (obj.code = message.code);
    message.storageState !== undefined &&
      (obj.storageState = message.storageState ? BrowserStorageStateData.toJSON(message.storageState) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesRunTestConfiguration>): TestCasesRunTestConfiguration {
    const message = createBaseTestCasesRunTestConfiguration();
    message.url = object.url ?? "";
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.loginPath = object.loginPath ?? undefined;
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.tokenExpirationSeconds = object.tokenExpirationSeconds ?? undefined;
    message.code = object.code ?? undefined;
    message.storageState = (object.storageState !== undefined && object.storageState !== null)
      ? BrowserStorageStateData.fromPartial(object.storageState)
      : undefined;
    return message;
  },
};

function createBaseTestCaseAuthorisationCreationReport(): TestCaseAuthorisationCreationReport {
  return { projectGenerateId: 0, projectId: 0, errors: [], status: 0 };
}

export const TestCaseAuthorisationCreationReportData = {
  encode(message: TestCaseAuthorisationCreationReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateId !== 0) {
      writer.uint32(8).int32(message.projectGenerateId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.code !== undefined) {
      writer.uint32(26).string(message.code);
    }
    if (message.storageState !== undefined) {
      BrowserStorageStateData.encode(message.storageState, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.errors) {
      writer.uint32(42).string(v!);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCaseAuthorisationCreationReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCaseAuthorisationCreationReport();
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
          message.code = reader.string();
          break;
        case 4:
          message.storageState = BrowserStorageStateData.decode(reader, reader.uint32());
          break;
        case 5:
          message.errors.push(reader.string());
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCaseAuthorisationCreationReport {
    return {
      projectGenerateId: isSet(object.projectGenerateId) ? Number(object.projectGenerateId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      code: isSet(object.code) ? String(object.code) : undefined,
      storageState: isSet(object.storageState) ? BrowserStorageStateData.fromJSON(object.storageState) : undefined,
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => String(e)) : [],
      status: isSet(object.status) ? testCaseAuthorisationCreationReportStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: TestCaseAuthorisationCreationReport): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined && (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.code !== undefined && (obj.code = message.code);
    message.storageState !== undefined &&
      (obj.storageState = message.storageState ? BrowserStorageStateData.toJSON(message.storageState) : undefined);
    if (message.errors) {
      obj.errors = message.errors.map((e) => e);
    } else {
      obj.errors = [];
    }
    message.status !== undefined && (obj.status = testCaseAuthorisationCreationReportStatusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<TestCaseAuthorisationCreationReport>): TestCaseAuthorisationCreationReport {
    const message = createBaseTestCaseAuthorisationCreationReport();
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.code = object.code ?? undefined;
    message.storageState = (object.storageState !== undefined && object.storageState !== null)
      ? BrowserStorageStateData.fromPartial(object.storageState)
      : undefined;
    message.errors = object.errors?.map((e) => e) || [];
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseTestCasesRunReport(): TestCasesRunReport {
  return { projectGenerateId: 0, status: 0, errors: [] };
}

export const TestCasesRunReportData = {
  encode(message: TestCasesRunReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGenerateId !== 0) {
      writer.uint32(8).int32(message.projectGenerateId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.testConfiguration !== undefined) {
      TestCasesRunTestConfigurationData.encode(message.testConfiguration, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.errors) {
      writer.uint32(34).string(v!);
    }
    if (message.testCase !== undefined) {
      TestCasesRunReportTestCaseSourceData.encode(message.testCase, writer.uint32(42).fork()).ldelim();
    }
    if (message.testCaseStep !== undefined) {
      TestCasesRunReportTestCaseStepSourceData.encode(message.testCaseStep, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCasesRunReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCasesRunReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectGenerateId = reader.int32();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.testConfiguration = TestCasesRunTestConfigurationData.decode(reader, reader.uint32());
          break;
        case 4:
          message.errors.push(reader.string());
          break;
        case 5:
          message.testCase = TestCasesRunReportTestCaseSourceData.decode(reader, reader.uint32());
          break;
        case 6:
          message.testCaseStep = TestCasesRunReportTestCaseStepSourceData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCasesRunReport {
    return {
      projectGenerateId: isSet(object.projectGenerateId) ? Number(object.projectGenerateId) : 0,
      status: isSet(object.status) ? testCasesRunReportStatusFromJSON(object.status) : 0,
      testConfiguration: isSet(object.testConfiguration)
        ? TestCasesRunTestConfigurationData.fromJSON(object.testConfiguration)
        : undefined,
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => String(e)) : [],
      testCase: isSet(object.testCase) ? TestCasesRunReportTestCaseSourceData.fromJSON(object.testCase) : undefined,
      testCaseStep: isSet(object.testCaseStep)
        ? TestCasesRunReportTestCaseStepSourceData.fromJSON(object.testCaseStep)
        : undefined,
    };
  },

  toJSON(message: TestCasesRunReport): unknown {
    const obj: any = {};
    message.projectGenerateId !== undefined && (obj.projectGenerateId = Math.round(message.projectGenerateId));
    message.status !== undefined && (obj.status = testCasesRunReportStatusToJSON(message.status));
    message.testConfiguration !== undefined && (obj.testConfiguration = message.testConfiguration
      ? TestCasesRunTestConfigurationData.toJSON(message.testConfiguration)
      : undefined);
    if (message.errors) {
      obj.errors = message.errors.map((e) => e);
    } else {
      obj.errors = [];
    }
    message.testCase !== undefined &&
      (obj.testCase = message.testCase ? TestCasesRunReportTestCaseSourceData.toJSON(message.testCase) : undefined);
    message.testCaseStep !== undefined && (obj.testCaseStep = message.testCaseStep
      ? TestCasesRunReportTestCaseStepSourceData.toJSON(message.testCaseStep)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesRunReport>): TestCasesRunReport {
    const message = createBaseTestCasesRunReport();
    message.projectGenerateId = object.projectGenerateId ?? 0;
    message.status = object.status ?? 0;
    message.testConfiguration = (object.testConfiguration !== undefined && object.testConfiguration !== null)
      ? TestCasesRunTestConfigurationData.fromPartial(object.testConfiguration)
      : undefined;
    message.errors = object.errors?.map((e) => e) || [];
    message.testCase = (object.testCase !== undefined && object.testCase !== null)
      ? TestCasesRunReportTestCaseSourceData.fromPartial(object.testCase)
      : undefined;
    message.testCaseStep = (object.testCaseStep !== undefined && object.testCaseStep !== null)
      ? TestCasesRunReportTestCaseStepSourceData.fromPartial(object.testCaseStep)
      : undefined;
    return message;
  },
};

function createBaseTestCasesRunReportTestCaseStepSource(): TestCasesRunReportTestCaseStepSource {
  return { nodeId: "", status: 0 };
}

export const TestCasesRunReportTestCaseStepSourceData = {
  encode(message: TestCasesRunReportTestCaseStepSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.code !== undefined) {
      writer.uint32(18).string(message.code);
    }
    if (message.screenshot !== undefined) {
      writer.uint32(26).string(message.screenshot);
    }
    if (message.message !== undefined) {
      writer.uint32(34).string(message.message);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCasesRunReportTestCaseStepSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCasesRunReportTestCaseStepSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.screenshot = reader.string();
          break;
        case 4:
          message.message = reader.string();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestCasesRunReportTestCaseStepSource {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      code: isSet(object.code) ? String(object.code) : undefined,
      screenshot: isSet(object.screenshot) ? String(object.screenshot) : undefined,
      message: isSet(object.message) ? String(object.message) : undefined,
      status: isSet(object.status) ? testCasesRunReportStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: TestCasesRunReportTestCaseStepSource): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.code !== undefined && (obj.code = message.code);
    message.screenshot !== undefined && (obj.screenshot = message.screenshot);
    message.message !== undefined && (obj.message = message.message);
    message.status !== undefined && (obj.status = testCasesRunReportStatusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesRunReportTestCaseStepSource>): TestCasesRunReportTestCaseStepSource {
    const message = createBaseTestCasesRunReportTestCaseStepSource();
    message.nodeId = object.nodeId ?? "";
    message.code = object.code ?? undefined;
    message.screenshot = object.screenshot ?? undefined;
    message.message = object.message ?? undefined;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseTestCasesRunReportTestCaseSource(): TestCasesRunReportTestCaseSource {
  return { nodeId: "", status: 0 };
}

export const TestCasesRunReportTestCaseSourceData = {
  encode(message: TestCasesRunReportTestCaseSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestCasesRunReportTestCaseSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestCasesRunReportTestCaseSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
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

  fromJSON(object: any): TestCasesRunReportTestCaseSource {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      status: isSet(object.status) ? testCasesRunReportStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: TestCasesRunReportTestCaseSource): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.status !== undefined && (obj.status = testCasesRunReportStatusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<TestCasesRunReportTestCaseSource>): TestCasesRunReportTestCaseSource {
    const message = createBaseTestCasesRunReportTestCaseSource();
    message.nodeId = object.nodeId ?? "";
    message.status = object.status ?? 0;
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
