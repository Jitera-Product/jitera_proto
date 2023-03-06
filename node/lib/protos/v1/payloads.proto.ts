/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Struct } from "../google/protobuf/struct.proto";

export enum DataTypeName {
  BOOLEAN = 0,
  INTEGER = 1,
  FLOAT = 2,
  STRING = 3,
  TEXT = 4,
  DATE = 5,
  DATETIME = 6,
  ARRAY = 7,
  OBJECT = 8,
  PAGE_SIZE = 9,
  PAGE_NUMBER = 10,
  FILE = 11,
  TABLE = 12,
  ENUM = 13,
  CURRENT_USER = 14,
  UNRECOGNIZED = -1,
}

export function dataTypeNameFromJSON(object: any): DataTypeName {
  switch (object) {
    case 0:
    case "BOOLEAN":
      return DataTypeName.BOOLEAN;
    case 1:
    case "INTEGER":
      return DataTypeName.INTEGER;
    case 2:
    case "FLOAT":
      return DataTypeName.FLOAT;
    case 3:
    case "STRING":
      return DataTypeName.STRING;
    case 4:
    case "TEXT":
      return DataTypeName.TEXT;
    case 5:
    case "DATE":
      return DataTypeName.DATE;
    case 6:
    case "DATETIME":
      return DataTypeName.DATETIME;
    case 7:
    case "ARRAY":
      return DataTypeName.ARRAY;
    case 8:
    case "OBJECT":
      return DataTypeName.OBJECT;
    case 9:
    case "PAGE_SIZE":
      return DataTypeName.PAGE_SIZE;
    case 10:
    case "PAGE_NUMBER":
      return DataTypeName.PAGE_NUMBER;
    case 11:
    case "FILE":
      return DataTypeName.FILE;
    case 12:
    case "TABLE":
      return DataTypeName.TABLE;
    case 13:
    case "ENUM":
      return DataTypeName.ENUM;
    case 14:
    case "CURRENT_USER":
      return DataTypeName.CURRENT_USER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataTypeName.UNRECOGNIZED;
  }
}

export function dataTypeNameToJSON(object: DataTypeName): string {
  switch (object) {
    case DataTypeName.BOOLEAN:
      return "BOOLEAN";
    case DataTypeName.INTEGER:
      return "INTEGER";
    case DataTypeName.FLOAT:
      return "FLOAT";
    case DataTypeName.STRING:
      return "STRING";
    case DataTypeName.TEXT:
      return "TEXT";
    case DataTypeName.DATE:
      return "DATE";
    case DataTypeName.DATETIME:
      return "DATETIME";
    case DataTypeName.ARRAY:
      return "ARRAY";
    case DataTypeName.OBJECT:
      return "OBJECT";
    case DataTypeName.PAGE_SIZE:
      return "PAGE_SIZE";
    case DataTypeName.PAGE_NUMBER:
      return "PAGE_NUMBER";
    case DataTypeName.FILE:
      return "FILE";
    case DataTypeName.TABLE:
      return "TABLE";
    case DataTypeName.ENUM:
      return "ENUM";
    case DataTypeName.CURRENT_USER:
      return "CURRENT_USER";
    case DataTypeName.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Operator {
  WHERE = 0,
  PAGINATION = 1,
  ORDER = 2,
  ORDER_ASC = 3,
  ORDER_DESC = 4,
  JOIN_AND = 5,
  JOIN_OR = 6,
  EQUAL = 7,
  START_WITH = 8,
  END_WITH = 9,
  CONTAIN = 10,
  NOT_EQUAL = 11,
  GREATER_THAN = 12,
  LESS_THAN = 13,
  GREATER_OR_EQUAL_THAN = 14,
  LESS_OR_EQUAL_THAN = 15,
  WHERE_AND = 16,
  WHERE_OR = 17,
  UNRECOGNIZED = -1,
}

export function operatorFromJSON(object: any): Operator {
  switch (object) {
    case 0:
    case "WHERE":
      return Operator.WHERE;
    case 1:
    case "PAGINATION":
      return Operator.PAGINATION;
    case 2:
    case "ORDER":
      return Operator.ORDER;
    case 3:
    case "ORDER_ASC":
      return Operator.ORDER_ASC;
    case 4:
    case "ORDER_DESC":
      return Operator.ORDER_DESC;
    case 5:
    case "JOIN_AND":
      return Operator.JOIN_AND;
    case 6:
    case "JOIN_OR":
      return Operator.JOIN_OR;
    case 7:
    case "EQUAL":
      return Operator.EQUAL;
    case 8:
    case "START_WITH":
      return Operator.START_WITH;
    case 9:
    case "END_WITH":
      return Operator.END_WITH;
    case 10:
    case "CONTAIN":
      return Operator.CONTAIN;
    case 11:
    case "NOT_EQUAL":
      return Operator.NOT_EQUAL;
    case 12:
    case "GREATER_THAN":
      return Operator.GREATER_THAN;
    case 13:
    case "LESS_THAN":
      return Operator.LESS_THAN;
    case 14:
    case "GREATER_OR_EQUAL_THAN":
      return Operator.GREATER_OR_EQUAL_THAN;
    case 15:
    case "LESS_OR_EQUAL_THAN":
      return Operator.LESS_OR_EQUAL_THAN;
    case 16:
    case "WHERE_AND":
      return Operator.WHERE_AND;
    case 17:
    case "WHERE_OR":
      return Operator.WHERE_OR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Operator.UNRECOGNIZED;
  }
}

export function operatorToJSON(object: Operator): string {
  switch (object) {
    case Operator.WHERE:
      return "WHERE";
    case Operator.PAGINATION:
      return "PAGINATION";
    case Operator.ORDER:
      return "ORDER";
    case Operator.ORDER_ASC:
      return "ORDER_ASC";
    case Operator.ORDER_DESC:
      return "ORDER_DESC";
    case Operator.JOIN_AND:
      return "JOIN_AND";
    case Operator.JOIN_OR:
      return "JOIN_OR";
    case Operator.EQUAL:
      return "EQUAL";
    case Operator.START_WITH:
      return "START_WITH";
    case Operator.END_WITH:
      return "END_WITH";
    case Operator.CONTAIN:
      return "CONTAIN";
    case Operator.NOT_EQUAL:
      return "NOT_EQUAL";
    case Operator.GREATER_THAN:
      return "GREATER_THAN";
    case Operator.LESS_THAN:
      return "LESS_THAN";
    case Operator.GREATER_OR_EQUAL_THAN:
      return "GREATER_OR_EQUAL_THAN";
    case Operator.LESS_OR_EQUAL_THAN:
      return "LESS_OR_EQUAL_THAN";
    case Operator.WHERE_AND:
      return "WHERE_AND";
    case Operator.WHERE_OR:
      return "WHERE_OR";
    case Operator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Project {
  id: string;
  projectName: string;
  projectId: number;
  infra?: Infra | undefined;
  timeZone: string;
  defaultLanguageCode: string;
  languageCodes: string[];
  projectExport?: ProjectExport | undefined;
  projectPreview?: ProjectPreview | undefined;
}

export interface ProjectExport {
  id: number;
}

export interface ProjectPreview {
  id: number;
}

export interface Infra {
  path: string;
}

export interface Backend {
  tables: Table[];
  controllers: Controller[];
  features: Feature[];
  authorizations: Authorization[];
  localizations: Localization[];
  migrations: Migration[];
}

export interface Localization {
  lang: string;
  namespaces: LocalizationNamespace[];
}

export interface LocalizationNamespace {
  name: string;
  translates: LocalizationTranslate[];
}

export interface LocalizationTranslate {
  key: string;
  value: string;
}

export interface DataType {
  name: DataTypeName;
}

export interface Authorization {
  name: string;
  id: number;
  policies: AuthorizationPolicy[];
}

export interface AuthorizationPolicy {
  resource: string;
  roleBinding?: AuthorizationPolicyRoleBinding;
  rule?: AuthorizationPolicyRule;
  scope: AuthorizationPolicyScope;
}

export enum AuthorizationPolicyScope {
  ALL = 0,
  ASSOCIATED = 1,
  UNRECOGNIZED = -1,
}

export function authorizationPolicyScopeFromJSON(object: any): AuthorizationPolicyScope {
  switch (object) {
    case 0:
    case "ALL":
      return AuthorizationPolicyScope.ALL;
    case 1:
    case "ASSOCIATED":
      return AuthorizationPolicyScope.ASSOCIATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthorizationPolicyScope.UNRECOGNIZED;
  }
}

export function authorizationPolicyScopeToJSON(object: AuthorizationPolicyScope): string {
  switch (object) {
    case AuthorizationPolicyScope.ALL:
      return "ALL";
    case AuthorizationPolicyScope.ASSOCIATED:
      return "ASSOCIATED";
    case AuthorizationPolicyScope.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AuthorizationPolicyRoleBinding {
  table: string;
  column: string;
  role: string;
}

export interface AuthorizationPolicyRule {
  operands: AuthorizationPolicyRuleOperand[];
  operators: Operator[];
}

export interface AuthorizationPolicyRuleOperand {
  expr?: AuthorizationPolicyRuleExpr | undefined;
  rule?: AuthorizationPolicyRule | undefined;
}

export interface AuthorizationPolicyRuleExpr {
  column: string;
  value?: string | undefined;
  paths?: string | undefined;
  dataType?: DataType;
  operator: Operator;
}

export interface Feature {
  name: FeatureFeatureName;
  env: FeatureEnvironment;
  emailLogin?: FeatureEmailLogin | undefined;
  jpBankData?: FeatureJPBankData | undefined;
  basicAuth?: FeatureBasicAuth | undefined;
  twilioLogin?: FeatureTwilioLogin | undefined;
  rollbar?: FeatureRollbar | undefined;
  deepLink?: FeatureDeepLink | undefined;
  stripe?: FeatureStripe | undefined;
  lineLogin?: FeatureLineLogin | undefined;
}

export enum FeatureFeatureName {
  NIL = 0,
  EMAIL_LOGIN = 1,
  JP_BANKS_DATA = 2,
  BASIC_AUTH = 3,
  TWILIO_LOGIN = 4,
  ROLLBAR = 5,
  DEEP_LINK = 6,
  STRIPE = 7,
  LINE_LOGIN = 8,
  UNRECOGNIZED = -1,
}

export function featureFeatureNameFromJSON(object: any): FeatureFeatureName {
  switch (object) {
    case 0:
    case "NIL":
      return FeatureFeatureName.NIL;
    case 1:
    case "EMAIL_LOGIN":
      return FeatureFeatureName.EMAIL_LOGIN;
    case 2:
    case "JP_BANKS_DATA":
      return FeatureFeatureName.JP_BANKS_DATA;
    case 3:
    case "BASIC_AUTH":
      return FeatureFeatureName.BASIC_AUTH;
    case 4:
    case "TWILIO_LOGIN":
      return FeatureFeatureName.TWILIO_LOGIN;
    case 5:
    case "ROLLBAR":
      return FeatureFeatureName.ROLLBAR;
    case 6:
    case "DEEP_LINK":
      return FeatureFeatureName.DEEP_LINK;
    case 7:
    case "STRIPE":
      return FeatureFeatureName.STRIPE;
    case 8:
    case "LINE_LOGIN":
      return FeatureFeatureName.LINE_LOGIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureFeatureName.UNRECOGNIZED;
  }
}

export function featureFeatureNameToJSON(object: FeatureFeatureName): string {
  switch (object) {
    case FeatureFeatureName.NIL:
      return "NIL";
    case FeatureFeatureName.EMAIL_LOGIN:
      return "EMAIL_LOGIN";
    case FeatureFeatureName.JP_BANKS_DATA:
      return "JP_BANKS_DATA";
    case FeatureFeatureName.BASIC_AUTH:
      return "BASIC_AUTH";
    case FeatureFeatureName.TWILIO_LOGIN:
      return "TWILIO_LOGIN";
    case FeatureFeatureName.ROLLBAR:
      return "ROLLBAR";
    case FeatureFeatureName.DEEP_LINK:
      return "DEEP_LINK";
    case FeatureFeatureName.STRIPE:
      return "STRIPE";
    case FeatureFeatureName.LINE_LOGIN:
      return "LINE_LOGIN";
    case FeatureFeatureName.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FeatureEnvironment {
  DEVELOPMENT = 0,
  STAGING = 1,
  PRODUCTION = 2,
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function featureEnvironmentFromJSON(object: any): FeatureEnvironment {
  switch (object) {
    case 0:
    case "DEVELOPMENT":
      return FeatureEnvironment.DEVELOPMENT;
    case 1:
    case "STAGING":
      return FeatureEnvironment.STAGING;
    case 2:
    case "PRODUCTION":
      return FeatureEnvironment.PRODUCTION;
    case 3:
    case "ALL":
      return FeatureEnvironment.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureEnvironment.UNRECOGNIZED;
  }
}

export function featureEnvironmentToJSON(object: FeatureEnvironment): string {
  switch (object) {
    case FeatureEnvironment.DEVELOPMENT:
      return "DEVELOPMENT";
    case FeatureEnvironment.STAGING:
      return "STAGING";
    case FeatureEnvironment.PRODUCTION:
      return "PRODUCTION";
    case FeatureEnvironment.ALL:
      return "ALL";
    case FeatureEnvironment.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface FeatureEmailLogin {
  tables: string[];
  passwordMinLength: number;
  rememberFor: number;
  resetPasswordWithin: number;
  maximumRetries: number;
  unlockStrategy: FeatureEmailLoginUnlockStrategy;
  unlockIn: number;
  passwordRegex: string;
  confirmationEmail: boolean;
}

export enum FeatureEmailLoginUnlockStrategy {
  TIME = 0,
  EMAIL = 1,
  BOTH = 2,
  UNRECOGNIZED = -1,
}

export function featureEmailLoginUnlockStrategyFromJSON(object: any): FeatureEmailLoginUnlockStrategy {
  switch (object) {
    case 0:
    case "TIME":
      return FeatureEmailLoginUnlockStrategy.TIME;
    case 1:
    case "EMAIL":
      return FeatureEmailLoginUnlockStrategy.EMAIL;
    case 2:
    case "BOTH":
      return FeatureEmailLoginUnlockStrategy.BOTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureEmailLoginUnlockStrategy.UNRECOGNIZED;
  }
}

export function featureEmailLoginUnlockStrategyToJSON(object: FeatureEmailLoginUnlockStrategy): string {
  switch (object) {
    case FeatureEmailLoginUnlockStrategy.TIME:
      return "TIME";
    case FeatureEmailLoginUnlockStrategy.EMAIL:
      return "EMAIL";
    case FeatureEmailLoginUnlockStrategy.BOTH:
      return "BOTH";
    case FeatureEmailLoginUnlockStrategy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface FeatureJPBankData {
}

export interface FeatureBasicAuth {
  username: string;
  password: string;
}

export interface FeatureTwilioLogin {
  userTables: string[];
  serviceId: string;
  sid: string;
  token: string;
  otpLength: number;
}

export interface FeatureRollbar {
  accessToken: string;
}

export interface FeatureDeepLink {
  iosAppStoreId: string;
  iosBundleId: string;
  iosAppLink: string;
  androidPackageName: string;
  androidCertFingerprints: string;
  androidAppLink: string;
  firebaseDomain: string;
}

export interface FeatureStripe {
  subscriptionTables: string[];
  userTables: string[];
  publicKey: string;
  secretKey: string;
  stripeEndpointSecret: string;
  httpStripeSignature: string;
  addStripeSubscription: boolean;
  addChargeApi: boolean;
  addIntentApi: boolean;
}

export interface FeatureLineLogin {
  userTables: string[];
  clientId: string;
  secretKey: string;
}

export interface Controller {
  name: string;
  endpoints: ControllerEndpoint[];
}

export interface ControllerEndpoint {
  path: string;
  name: string;
  table?: string | undefined;
  feature?: FeatureFeatureName | undefined;
  list?: ControllerEndpointList | undefined;
  get?: ControllerEndpointGet | undefined;
  create?: ControllerEndpointCreate | undefined;
  update?: ControllerEndpointUpdate | undefined;
  delete?: ControllerEndpointDelete | undefined;
  authentication?: ControllerAuthentication;
  authorization?: ControllerAuthorization;
  responses?: ControllerResponse;
  params?: ControllerRequestContent;
  writable: boolean;
  featureAction?: string | undefined;
  featureTable?: string | undefined;
}

export interface ControllerEndpointList {
  queries?: ControllerRequestContent;
  conditions?: ControllerResourceCondition;
}

export interface ControllerEndpointGet {
  queries?: ControllerRequestContent;
  conditions?: ControllerResourceCondition;
}

export interface ControllerEndpointCreate {
  body?: ControllerRequestContent;
  conditions?: ControllerResourceCondition;
  resources?: ControllerResourceUpdate;
}

export interface ControllerEndpointUpdate {
  body?: ControllerRequestContent;
  conditions?: ControllerResourceCondition;
  resources?: ControllerResourceUpdate;
}

export interface ControllerEndpointDelete {
  body?: ControllerRequestContent;
  conditions?: ControllerResourceCondition;
}

export interface ControllerRequestContent {
  fields: ControllerRequestContentField[];
}

export interface ControllerRequestContentField {
  name: string;
  dataType?: DataType;
  children: ControllerRequestContentField[];
}

export interface ControllerResponse {
  fields: ControllerResponseField[];
}

export interface ControllerResponseField {
  name: string;
  resource?: string | undefined;
  property?: string | undefined;
  value?: string | undefined;
  dataType?: DataType;
  children: ControllerResponseField[];
  category: string;
}

export interface ControllerResourceCondition {
  operands: ControllerResourceConditionOperand[];
  operators: Operator[];
}

export enum ControllerResourceConditionSystem {
  RESOURCE_OWNER = 0,
  UNRECOGNIZED = -1,
}

export function controllerResourceConditionSystemFromJSON(object: any): ControllerResourceConditionSystem {
  switch (object) {
    case 0:
    case "RESOURCE_OWNER":
      return ControllerResourceConditionSystem.RESOURCE_OWNER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ControllerResourceConditionSystem.UNRECOGNIZED;
  }
}

export function controllerResourceConditionSystemToJSON(object: ControllerResourceConditionSystem): string {
  switch (object) {
    case ControllerResourceConditionSystem.RESOURCE_OWNER:
      return "RESOURCE_OWNER";
    case ControllerResourceConditionSystem.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ControllerResourceConditionOperand {
  expr?: ControllerResourceConditionExpr | undefined;
  condition?: ControllerResourceCondition | undefined;
}

export interface ControllerResourceConditionExpr {
  paths: string[];
  query?: string | undefined;
  params?: string | undefined;
  body?: string | undefined;
  value?: string | undefined;
  system?: ControllerResourceConditionSystem | undefined;
  dataType?: DataType;
  operator: Operator;
}

export interface ControllerResourceUpdate {
  fields: ControllerResourceUpdateField[];
}

export interface ControllerResourceUpdateField {
  name: string;
  query?: string | undefined;
  params?: string | undefined;
  body?: string | undefined;
  value?: string | undefined;
  dataType?: DataType;
  children: ControllerResourceUpdateField[];
}

export interface ControllerAuthentication {
  tableName: string;
}

export interface ControllerAuthorization {
  authorizationId: number;
  tableName: string;
}

export interface Table {
  name: string;
  columns: TableColumn[];
  relations: TableRelation[];
  indexes: TableIndex[];
}

export interface TableColumn {
  name: string;
  type?: TableColumnColumnType;
  constraints: TableConstraint[];
  hidden?: boolean | undefined;
  columnValidation?: TableColumnValidation | undefined;
}

export enum TableColumnOperator {
  GREATER_THAN = 0,
  GREATER_THAN_OR_EQUAL = 1,
  EQUAL = 2,
  LESS_THAN = 3,
  LESS_THAN_OR_EQUAL = 4,
  NOT_EQUAL = 5,
  UNRECOGNIZED = -1,
}

export function tableColumnOperatorFromJSON(object: any): TableColumnOperator {
  switch (object) {
    case 0:
    case "GREATER_THAN":
      return TableColumnOperator.GREATER_THAN;
    case 1:
    case "GREATER_THAN_OR_EQUAL":
      return TableColumnOperator.GREATER_THAN_OR_EQUAL;
    case 2:
    case "EQUAL":
      return TableColumnOperator.EQUAL;
    case 3:
    case "LESS_THAN":
      return TableColumnOperator.LESS_THAN;
    case 4:
    case "LESS_THAN_OR_EQUAL":
      return TableColumnOperator.LESS_THAN_OR_EQUAL;
    case 5:
    case "NOT_EQUAL":
      return TableColumnOperator.NOT_EQUAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TableColumnOperator.UNRECOGNIZED;
  }
}

export function tableColumnOperatorToJSON(object: TableColumnOperator): string {
  switch (object) {
    case TableColumnOperator.GREATER_THAN:
      return "GREATER_THAN";
    case TableColumnOperator.GREATER_THAN_OR_EQUAL:
      return "GREATER_THAN_OR_EQUAL";
    case TableColumnOperator.EQUAL:
      return "EQUAL";
    case TableColumnOperator.LESS_THAN:
      return "LESS_THAN";
    case TableColumnOperator.LESS_THAN_OR_EQUAL:
      return "LESS_THAN_OR_EQUAL";
    case TableColumnOperator.NOT_EQUAL:
      return "NOT_EQUAL";
    case TableColumnOperator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TableColumnColumnType {
  integerType?: TableColumnIntegerType | undefined;
  stringType?: TableColumnStringType | undefined;
  floatType?: TableColumnFloatType | undefined;
  booleanType?: TableColumnBooleanType | undefined;
  dateType?: TableColumnDateType | undefined;
  fileType?: TableColumnFileType | undefined;
  enumType?: TableColumnEnumType | undefined;
}

export interface TableColumnStringType {
  defaultValue?: string | undefined;
  isText: boolean;
  formats: TableColumnStringTypeFormat[];
  conditions: TableColumnStringTypeCondition[];
}

export enum TableColumnStringTypeFormat {
  EMAIL = 0,
  HIRAGANA = 1,
  KATAKANA = 2,
  PHONE_NUMBER = 3,
  URL = 4,
  UNRECOGNIZED = -1,
}

export function tableColumnStringTypeFormatFromJSON(object: any): TableColumnStringTypeFormat {
  switch (object) {
    case 0:
    case "EMAIL":
      return TableColumnStringTypeFormat.EMAIL;
    case 1:
    case "HIRAGANA":
      return TableColumnStringTypeFormat.HIRAGANA;
    case 2:
    case "KATAKANA":
      return TableColumnStringTypeFormat.KATAKANA;
    case 3:
    case "PHONE_NUMBER":
      return TableColumnStringTypeFormat.PHONE_NUMBER;
    case 4:
    case "URL":
      return TableColumnStringTypeFormat.URL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TableColumnStringTypeFormat.UNRECOGNIZED;
  }
}

export function tableColumnStringTypeFormatToJSON(object: TableColumnStringTypeFormat): string {
  switch (object) {
    case TableColumnStringTypeFormat.EMAIL:
      return "EMAIL";
    case TableColumnStringTypeFormat.HIRAGANA:
      return "HIRAGANA";
    case TableColumnStringTypeFormat.KATAKANA:
      return "KATAKANA";
    case TableColumnStringTypeFormat.PHONE_NUMBER:
      return "PHONE_NUMBER";
    case TableColumnStringTypeFormat.URL:
      return "URL";
    case TableColumnStringTypeFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TableColumnStringTypeCondition {
  operator: TableColumnOperator;
  value?: number | undefined;
  columnName?: string | undefined;
}

export interface TableColumnIntegerType {
  defaultValue?: number | undefined;
  conditions: TableColumnIntegerTypeCondition[];
}

export interface TableColumnIntegerTypeCondition {
  operator: TableColumnOperator;
  value?: number | undefined;
  columnName?: string | undefined;
}

export interface TableColumnFloatType {
  defaultValue?: number | undefined;
  conditions: TableColumnFloatTypeCondition[];
}

export interface TableColumnFloatTypeCondition {
  operator: TableColumnOperator;
  value?: number | undefined;
  columnName?: string | undefined;
}

export interface TableColumnBooleanType {
  defaultValue: boolean;
}

export interface TableColumnDateType {
  withTime: boolean;
  conditions: TableColumnDateTypeCondition[];
}

export enum TableColumnDateTypeCondition {
  IN_PAST = 0,
  IN_FUTURE = 1,
  UNRECOGNIZED = -1,
}

export function tableColumnDateTypeConditionFromJSON(object: any): TableColumnDateTypeCondition {
  switch (object) {
    case 0:
    case "IN_PAST":
      return TableColumnDateTypeCondition.IN_PAST;
    case 1:
    case "IN_FUTURE":
      return TableColumnDateTypeCondition.IN_FUTURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TableColumnDateTypeCondition.UNRECOGNIZED;
  }
}

export function tableColumnDateTypeConditionToJSON(object: TableColumnDateTypeCondition): string {
  switch (object) {
    case TableColumnDateTypeCondition.IN_PAST:
      return "IN_PAST";
    case TableColumnDateTypeCondition.IN_FUTURE:
      return "IN_FUTURE";
    case TableColumnDateTypeCondition.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TableColumnFileType {
  maximumSize: number;
  numberOfFiles?: TableColumnFileTypeNumberOfFiles;
  contentTypes: TableColumnFileTypeContentType[];
  multiple: boolean;
}

export enum TableColumnFileTypeContentType {
  IMAGE = 0,
  VIDEO = 1,
  AUDIO = 2,
  CSV = 3,
  PDF = 4,
  JSON = 5,
  UNRECOGNIZED = -1,
}

export function tableColumnFileTypeContentTypeFromJSON(object: any): TableColumnFileTypeContentType {
  switch (object) {
    case 0:
    case "IMAGE":
      return TableColumnFileTypeContentType.IMAGE;
    case 1:
    case "VIDEO":
      return TableColumnFileTypeContentType.VIDEO;
    case 2:
    case "AUDIO":
      return TableColumnFileTypeContentType.AUDIO;
    case 3:
    case "CSV":
      return TableColumnFileTypeContentType.CSV;
    case 4:
    case "PDF":
      return TableColumnFileTypeContentType.PDF;
    case 5:
    case "JSON":
      return TableColumnFileTypeContentType.JSON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TableColumnFileTypeContentType.UNRECOGNIZED;
  }
}

export function tableColumnFileTypeContentTypeToJSON(object: TableColumnFileTypeContentType): string {
  switch (object) {
    case TableColumnFileTypeContentType.IMAGE:
      return "IMAGE";
    case TableColumnFileTypeContentType.VIDEO:
      return "VIDEO";
    case TableColumnFileTypeContentType.AUDIO:
      return "AUDIO";
    case TableColumnFileTypeContentType.CSV:
      return "CSV";
    case TableColumnFileTypeContentType.PDF:
      return "PDF";
    case TableColumnFileTypeContentType.JSON:
      return "JSON";
    case TableColumnFileTypeContentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TableColumnFileTypeNumberOfFiles {
  minimum: number;
  maximum: number;
}

export interface TableColumnEnumType {
  defaultValue: string;
  values: string[];
}

export interface TableColumnValidation {
  columnValidationOptions: TableColumnValidationOption[];
  presence: boolean;
  uniqueness: boolean;
  allowNil: boolean;
}

export interface TableColumnValidationOption {
  lengthValidation?: TableColumnValidationOptionLengthValidation | undefined;
  charValidation?: TableColumnValidationOptionCharValidation | undefined;
  dateValidation?: TableColumnValidationOptionDateValidation | undefined;
  dateTimeValidation?: TableColumnValidationOptionDateValidation | undefined;
  numericalityValidation?: TableColumnValidationOptionNumericalityValidation | undefined;
  fileValidation?: TableColumnValidationOptionFileValidation | undefined;
}

export interface TableColumnValidationOptionLengthValidation {
  maximum: number;
  minimum: number;
  is: number;
}

export interface TableColumnValidationOptionCharValidation {
  email: boolean;
  hiragana: boolean;
  katakana: boolean;
  phoneNumber: boolean;
  url: boolean;
}

export interface TableColumnValidationOptionDateValidation {
  past: boolean;
  future: boolean;
}

export interface TableColumnValidationOptionNumericalityValidation {
  greaterThan: number;
  greaterThanOrEqualTo: number;
  lessThan: number;
  lessThanOrEqualTo: number;
}

export interface TableColumnValidationOptionFileValidation {
  single: boolean;
  contentTypes: string[];
}

export interface TableConstraint {
  primaryKey?: TableConstraintPrimaryKey | undefined;
  foreignKey?: TableConstraintForeignKey | undefined;
  notNull?: TableConstraintNotNull | undefined;
  unique?: TableConstraintUnique | undefined;
}

export interface TableConstraintPrimaryKey {
}

export interface TableConstraintForeignKey {
  tableName: string;
  primaryKey: string;
}

export interface TableConstraintNotNull {
}

export interface TableConstraintUnique {
}

export interface TableIndex {
  name: string;
  unique: boolean;
  columns: string[];
}

export interface TableRelation {
  hasOne?: TableRelationRelationHasOne | undefined;
  belongTo?: TableRelationRelationBelongTo | undefined;
  oneMany?: TableRelationRelationOneMany | undefined;
  manyOne?: TableRelationRelationManyOne | undefined;
  manyMany?: TableRelationRelationManyMany | undefined;
}

export interface TableRelationRelationHasOne {
  tableName: string;
  columnName: string;
}

export interface TableRelationRelationBelongTo {
  tableName: string;
  columnName: string;
}

export interface TableRelationRelationManyOne {
  tableName: string;
  columnName: string;
}

export interface TableRelationRelationOneMany {
  tableName: string;
  columnName: string;
}

export interface TableRelationRelationManyMany {
  tableName: string;
  joinedName: string;
}

export interface Migration {
  migrationId: string;
  changes: MigrationChange[];
}

export interface MigrationChange {
  createTable?: CreateTable | undefined;
  changeTableName?: ChangeTableName | undefined;
  changeTableComment?: ChangeTableComment | undefined;
  addColumn?: AddColumn | undefined;
  renameColumn?: RenameColumn | undefined;
  changeColumnComment?: ChangeColumnComment | undefined;
  changeColumn?: ChangeColumn | undefined;
  changeColumnDefault?: ChangeColumnDefault | undefined;
  changeColumnNull?: ChangeColumnNull | undefined;
  removeTableIndex?: RemoveTableIndex | undefined;
  removeTableRelation?: RemoveTableRelation | undefined;
  createTableRelation?: CreateTableRelation | undefined;
  removeColumn?: RemoveColumn | undefined;
  dropTable?: DropTable | undefined;
  changeTableIndex?: ChangeTableIndex | undefined;
  createTableIndex?: CreateTableIndex | undefined;
  addUniqColumn?: AddUniqColumn | undefined;
  changeColumnUnique?: ChangeColumnUnique | undefined;
}

export interface CreateTable {
  key: string;
  changeTo?: CreateTableChange;
  prevUuid: string;
  nextUuid: string;
  nextRecord?: CreateTableNextRecord;
}

export interface ChangeTableName {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: CreateTableNextRecord;
  nextRecord?: CreateTableNextRecord;
}

export interface ChangeTableComment {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: CreateTableNextRecord;
  nextRecord?: CreateTableNextRecord;
}

export interface CreateTableChange {
  name: string;
  uuid: string;
  comment?: string | undefined;
}

export interface AddColumn {
  key: string;
  changeTo?: MigrationColumnDefinition;
  prevUuid: string;
  nextUuid: string;
  nextRecord?: MigrationColumnDefinition;
}

export interface RenameColumn {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
  nextRecord?: MigrationColumnDefinition;
}

export interface ChangeColumnComment {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
  nextRecord?: MigrationColumnDefinition;
}

export interface ChangeColumn {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
  nextRecord?: MigrationColumnDefinition;
}

export interface ChangeColumnDefault {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
  nextRecord?: MigrationColumnDefinition;
}

export interface ChangeColumnNull {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
  nextRecord?: MigrationColumnDefinition;
}

export interface RemoveTableIndex {
  key: string;
  changeFrom?: TableIndexMigration;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: TableIndexMigration;
}

export interface RemoveTableRelation {
  key: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: TableRelationMigration;
}

export interface CreateTableRelation {
  key: string;
  changeTo?: TableRelationMigration;
  prevUuid: string;
  nextUuid: string;
  nextRecord?: TableRelationMigration;
}

export interface RemoveColumn {
  key: string;
  changeFrom?: MigrationColumnDefinition;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
}

export interface DropTable {
  key: string;
  changeFrom?: CreateTableNextRecord;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: CreateTableNextRecord;
}

export interface ChangeTableIndex {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: TableIndexMigration;
  nextRecord?: TableIndexMigration;
}

export interface CreateTableIndex {
  key: string;
  changeTo?: TableIndexMigration;
  nextUuid: string;
  nextRecord?: TableIndexMigration;
}

export interface AddUniqColumn {
  nextRecord?: MigrationColumnDefinition;
}

export interface ChangeColumnUnique {
  key: string;
  changeFrom: boolean;
  changeTo: boolean;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
  nextRecord?: MigrationColumnDefinition;
}

export interface CreateTableNextRecord {
  name: string;
  uuid: string;
  comment: string;
  columnDefinitions: MigrationColumnDefinition[];
}

export interface MigrationColumnDefinition {
  name: string;
  columnType: string;
  required: boolean;
  unique: boolean;
  defaultValue: string;
  comment: string;
  uuid: string;
  tableDefinitionUuid: string;
  customForeignKey?: boolean | undefined;
  tableDefinition?: TableMetaDataMigration | undefined;
  id: number;
}

export interface TableMetaDataMigration {
  name: string;
  uuid: string;
}

export interface TableIndexMigration {
  name: string;
  unique: boolean;
  uuid: string;
  tableDefinitionUuid: string;
  columnDefinitions: MigrationColumnDefinition[];
  singleIndex: boolean;
  tableDefinition?: TableMetaDataMigration | undefined;
  id: number;
}

export interface TableRelationMigration {
  foreignKey: string;
  relationType: string;
  required: boolean;
  uuid: string;
  tableDefinitionUuid: string;
  relatedTableUuid: string;
  customForeignKey?: boolean | undefined;
  tableDefinition?: CreateTableChange;
  relatedTable?: CreateTableChange;
  id: number;
}

export interface WebApp {
  appPages: AppPage[];
  assets: Asset[];
  variables: WebAppVariable[];
  categories: AppPageCategory[];
}

export enum WebAppVariableType {
  JS = 0,
  CSS = 1,
  UNRECOGNIZED = -1,
}

export function webAppVariableTypeFromJSON(object: any): WebAppVariableType {
  switch (object) {
    case 0:
    case "JS":
      return WebAppVariableType.JS;
    case 1:
    case "CSS":
      return WebAppVariableType.CSS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WebAppVariableType.UNRECOGNIZED;
  }
}

export function webAppVariableTypeToJSON(object: WebAppVariableType): string {
  switch (object) {
    case WebAppVariableType.JS:
      return "JS";
    case WebAppVariableType.CSS:
      return "CSS";
    case WebAppVariableType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface WebAppVariable {
  type: WebAppVariableType;
  name: string;
  value: string;
}

export interface Asset {
  id: string;
  url: string;
  fileName: string;
  fileSize: number;
  contentType: string;
}

export interface AppPage {
  id: string;
  pageName: string;
  slug: string;
  pageType: AppPagePageType;
  nodes: PageNode[];
  categoryId: string;
}

export enum AppPagePageType {
  SCREEN = 0,
  MOLECULE = 1,
  UNRECOGNIZED = -1,
}

export function appPagePageTypeFromJSON(object: any): AppPagePageType {
  switch (object) {
    case 0:
    case "SCREEN":
      return AppPagePageType.SCREEN;
    case 1:
    case "MOLECULE":
      return AppPagePageType.MOLECULE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AppPagePageType.UNRECOGNIZED;
  }
}

export function appPagePageTypeToJSON(object: AppPagePageType): string {
  switch (object) {
    case AppPagePageType.SCREEN:
      return "SCREEN";
    case AppPagePageType.MOLECULE:
      return "MOLECULE";
    case AppPagePageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AppPageCategory {
  id: string;
  name: string;
}

export interface PageNode {
  id: string;
  displayName: string;
  name: string;
  parent: string;
  nodes: string[];
  linkedNodes: { [key: string]: string };
  componentName: string;
  custom?: NodeCustom;
  webProps?: WebNodeProps | undefined;
  mobileProps?: MobileNodeProps | undefined;
}

export interface PageNodeLinkedNodesEntry {
  key: string;
  value: string;
}

export interface WebNodeProps {
  elementKey: string;
  buttonType?: string | undefined;
  span?: string | undefined;
  offset?: string | undefined;
  pushProp?: string | undefined;
  pullProp?: string | undefined;
  order?: string | undefined;
  gutter: number[];
  wrap?: string | undefined;
  justify?: string | undefined;
  align?: string | undefined;
  pinCount?: number | undefined;
  autoFocus?: boolean | undefined;
  otpInputType?: string | undefined;
  iconName?: string | undefined;
  iconPosition?: string | undefined;
  color?: string | undefined;
  activeColor?: string | undefined;
  inactiveColor?: string | undefined;
  checkColor?: string | undefined;
  direction?: string | undefined;
  size?: string | undefined;
  label?: string | undefined;
  dateMode?: string | undefined;
  dateFormat?: string | undefined;
  weekFormat?: string | undefined;
  monthFormat?: string | undefined;
  timeFormat?: string | undefined;
  mode?: string | undefined;
  spaceBetween?: number | undefined;
  isRequiredAuthentication?: boolean | undefined;
  redirectUrl?: string | undefined;
  flex?: string | undefined;
  sourceType?: string | undefined;
  isPasswordField?: boolean | undefined;
  alignItems?: string | undefined;
  justifyContent?: string | undefined;
  xs?: number | undefined;
  sm?: number | undefined;
  md?: number | undefined;
  lg?: number | undefined;
  xl?: number | undefined;
  xxl?:
    | number
    | undefined;
  /** { gutter: number, xs: number, md: number, xl: number } */
  grid?: { [key: string]: any };
  /** { slidesToShow: number } */
  xlResponsive?: { [key: string]: any };
  mdResponsive?: { [key: string]: any };
  xsResponsive?: { [key: string]: any };
  picker?: string | undefined;
  showTime?: boolean | undefined;
  format?: string | undefined;
  disabledOverflow?: boolean | undefined;
  multiple?: boolean | undefined;
  maxCount?: number | undefined;
  placement?: string | undefined;
  width?: number | undefined;
  closable?: boolean | undefined;
  headerVisible?: boolean | undefined;
  type?: string | undefined;
  textType?: string | undefined;
  slidesToShow?: number | undefined;
  variableWidth?: boolean | undefined;
  infinity?: boolean | undefined;
  infinite?: boolean | undefined;
  centered?: boolean | undefined;
  tabPosition?: string | undefined;
  tabs?: { [key: string]: any };
  tabLabelStyle?: { [key: string]: any };
  defaultActiveKey?: string | undefined;
  isHeaderVisible?: boolean | undefined;
  isFooterVisible?: boolean | undefined;
  isDataSortable?: boolean | undefined;
  isPaginationEnabled?: boolean | undefined;
  paginationPosition?: string | undefined;
  pageSize?: number | undefined;
  bodyStyle?: { [key: string]: any };
  placeholderStyle?: { [key: string]: any };
  containerStyle?: { [key: string]: any };
  dropdownStyle?: { [key: string]: any };
  optionStyle?: { [key: string]: any };
  cellStyle?: { [key: string]: any };
  cellTextStyle?: { [key: string]: any };
  style?: { [key: string]: any };
  buttonStyle?: { [key: string]: any };
  headerStyle?: { [key: string]: any };
  wrapperStyle?: { [key: string]: any };
  tableStyle?: { [key: string]: any };
  headerRowStyle?: { [key: string]: any };
  headerColumnStyle?: { [key: string]: any };
  bodyRowStyle?: { [key: string]: any };
  bodyColumnStyle?: { [key: string]: any };
  sortColumnStyle?: { [key: string]: any };
  footerRowStyle?: { [key: string]: any };
  footerColumnStyle?: { [key: string]: any };
  paginationWrapperStyle?: { [key: string]: any };
  labelStyle?: { [key: string]: any };
  inputStyle?: { [key: string]: any };
  ascendingIconProps?: WebNodeProps | undefined;
  descendingIconProps?: WebNodeProps | undefined;
  iconProps?: WebNodeProps | undefined;
  drawerProps?: WebNodeProps | undefined;
  buttonProps?: WebNodeProps | undefined;
  prefixIconProps?: WebNodeProps | undefined;
  suffixIconProps?: WebNodeProps | undefined;
  renderItem?: RenderMolecule | undefined;
  header?: MoleculeComponent | undefined;
  footer?: MoleculeComponent | undefined;
  drawerTitle: NodeVariable[];
  placeholder: NodeVariable[];
  inputLabel: NodeVariable[];
  href: NodeVariable[];
  action: NodeVariable[];
  data: NodeVariable[];
  totalPage: NodeVariable[];
  defaultValue: NodeVariable[];
  source: NodeVariable[];
  title: NodeVariable[];
  childrenData: NodeVariable[];
  responsiveVisibility: NodeVariable[];
  dataSource: NodeVariable[];
  tableColumns: WebNodePropsTableColumn[];
  tableActions: WebNodePropsTableColumn[];
  onPaginationChange: NodeAction[];
  onDataSortingChange: NodeAction[];
}

export interface WebNodePropsTableColumn {
  molecule?: RenderMolecule;
  sortable: boolean[];
  filterable: boolean[];
  columnIndex: number[];
  columnName: string[];
  columnPath: string[];
}

export interface MobileNodeProps {
  elementKey: string;
  backgroundColor?: string | undefined;
  safeArea?: string | undefined;
  placeholderTextColor?: string | undefined;
  secureTextEntry?: boolean | undefined;
  autoCorrect?: boolean | undefined;
  showClearText?: boolean | undefined;
  showCharacterCounter?: boolean | undefined;
  maxLength?: number | undefined;
  clearIconColor?: string | undefined;
  secureEyeIconColor?: string | undefined;
  editable?: boolean | undefined;
  numberOfLines?: number | undefined;
  vertical?: boolean | undefined;
  loop?: boolean | undefined;
  timeout?: number | undefined;
  horizontal?: boolean | undefined;
  numColumns?: number | undefined;
  sourceType?: string | undefined;
  useDefaultBackButton?: boolean | undefined;
  autoFocus?: boolean | undefined;
  pinCount?: number | undefined;
  position?: string | undefined;
  returnKeyType?: string | undefined;
  resizeMode?: string | undefined;
  keyboardType?: string | undefined;
  autoCapitalize?: string | undefined;
  dateMode?: string | undefined;
  mode?: string | undefined;
  infinity?: boolean | undefined;
  inverted?: boolean | undefined;
  name?: string | undefined;
  size?: number | undefined;
  color?: string | undefined;
  type?: string | undefined;
  leftIconName?: string | undefined;
  leftIconType?: string | undefined;
  leftIconSize?: number | undefined;
  leftIconColor?: string | undefined;
  rightIconName?: string | undefined;
  rightIconType?: string | undefined;
  rightIconSize?: number | undefined;
  rightIconColor?: string | undefined;
  launcherType?: string | undefined;
  otpInputType?: string | undefined;
  borderBottomWidth?: number | undefined;
  borderBottomColor?: string | undefined;
  style?: { [key: string]: any };
  contentContainerStyle?: { [key: string]: any };
  inputStyle?: { [key: string]: any };
  labelStyle?: { [key: string]: any };
  characterCounterStyle?: { [key: string]: any };
  cellStyle?: { [key: string]: any };
  cellTextStyle?: { [key: string]: any };
  titleStyle?: { [key: string]: any };
  renderItem?: RenderMolecule | undefined;
  preview?: RenderMolecule | undefined;
  component?: RenderMolecule | undefined;
  listEmptyComponent?: MoleculeComponent | undefined;
  listHeaderComponent?: MoleculeComponent | undefined;
  listFooterComponent?: MoleculeComponent | undefined;
  itemSeparatorComponent?: MoleculeComponent | undefined;
  keyExtractor?: NodeReference | undefined;
  placeholder: NodeVariable[];
  data: NodeVariable[];
  source: NodeVariable[];
  title: NodeVariable[];
  childrenData: NodeVariable[];
}

export interface RenderMolecule {
  reference?: NodeReference | undefined;
  arguments: FunctionArgument[];
  props: NodeParam[];
}

export interface NodeReference {
  name: string;
  refId: string;
  refData?: { [key: string]: any };
  value: string;
  refType: NodeReferenceReferenceRefType;
}

export enum NodeReferenceReferenceRefType {
  NONE = 0,
  API_REQUEST = 1,
  API_REQUEST_PARAM = 2,
  API_BUSINESS_PROCESS = 3,
  API_RESPONSE_DATA = 4,
  COLUMN_DEFINITION = 5,
  MOBILE_APP_ASSET = 6,
  MOBILE_APP_PAGE = 7,
  MOBILE_APP_PAGE_ACTION = 8,
  MOBILE_APP_PAGE_NODE = 9,
  MOBILE_APP_PAGE_PARAM = 10,
  MOBILE_APP_PAGE_FORM = 11,
  MOBILE_NAVIGATION = 12,
  MOBILE_NAVIGATION_NODE = 13,
  MOBILE_MOLECULE_PROP = 14,
  TABLE_DEFINITION = 15,
  UNRECOGNIZED = -1,
}

export function nodeReferenceReferenceRefTypeFromJSON(object: any): NodeReferenceReferenceRefType {
  switch (object) {
    case 0:
    case "NONE":
      return NodeReferenceReferenceRefType.NONE;
    case 1:
    case "API_REQUEST":
      return NodeReferenceReferenceRefType.API_REQUEST;
    case 2:
    case "API_REQUEST_PARAM":
      return NodeReferenceReferenceRefType.API_REQUEST_PARAM;
    case 3:
    case "API_BUSINESS_PROCESS":
      return NodeReferenceReferenceRefType.API_BUSINESS_PROCESS;
    case 4:
    case "API_RESPONSE_DATA":
      return NodeReferenceReferenceRefType.API_RESPONSE_DATA;
    case 5:
    case "COLUMN_DEFINITION":
      return NodeReferenceReferenceRefType.COLUMN_DEFINITION;
    case 6:
    case "MOBILE_APP_ASSET":
      return NodeReferenceReferenceRefType.MOBILE_APP_ASSET;
    case 7:
    case "MOBILE_APP_PAGE":
      return NodeReferenceReferenceRefType.MOBILE_APP_PAGE;
    case 8:
    case "MOBILE_APP_PAGE_ACTION":
      return NodeReferenceReferenceRefType.MOBILE_APP_PAGE_ACTION;
    case 9:
    case "MOBILE_APP_PAGE_NODE":
      return NodeReferenceReferenceRefType.MOBILE_APP_PAGE_NODE;
    case 10:
    case "MOBILE_APP_PAGE_PARAM":
      return NodeReferenceReferenceRefType.MOBILE_APP_PAGE_PARAM;
    case 11:
    case "MOBILE_APP_PAGE_FORM":
      return NodeReferenceReferenceRefType.MOBILE_APP_PAGE_FORM;
    case 12:
    case "MOBILE_NAVIGATION":
      return NodeReferenceReferenceRefType.MOBILE_NAVIGATION;
    case 13:
    case "MOBILE_NAVIGATION_NODE":
      return NodeReferenceReferenceRefType.MOBILE_NAVIGATION_NODE;
    case 14:
    case "MOBILE_MOLECULE_PROP":
      return NodeReferenceReferenceRefType.MOBILE_MOLECULE_PROP;
    case 15:
    case "TABLE_DEFINITION":
      return NodeReferenceReferenceRefType.TABLE_DEFINITION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NodeReferenceReferenceRefType.UNRECOGNIZED;
  }
}

export function nodeReferenceReferenceRefTypeToJSON(object: NodeReferenceReferenceRefType): string {
  switch (object) {
    case NodeReferenceReferenceRefType.NONE:
      return "NONE";
    case NodeReferenceReferenceRefType.API_REQUEST:
      return "API_REQUEST";
    case NodeReferenceReferenceRefType.API_REQUEST_PARAM:
      return "API_REQUEST_PARAM";
    case NodeReferenceReferenceRefType.API_BUSINESS_PROCESS:
      return "API_BUSINESS_PROCESS";
    case NodeReferenceReferenceRefType.API_RESPONSE_DATA:
      return "API_RESPONSE_DATA";
    case NodeReferenceReferenceRefType.COLUMN_DEFINITION:
      return "COLUMN_DEFINITION";
    case NodeReferenceReferenceRefType.MOBILE_APP_ASSET:
      return "MOBILE_APP_ASSET";
    case NodeReferenceReferenceRefType.MOBILE_APP_PAGE:
      return "MOBILE_APP_PAGE";
    case NodeReferenceReferenceRefType.MOBILE_APP_PAGE_ACTION:
      return "MOBILE_APP_PAGE_ACTION";
    case NodeReferenceReferenceRefType.MOBILE_APP_PAGE_NODE:
      return "MOBILE_APP_PAGE_NODE";
    case NodeReferenceReferenceRefType.MOBILE_APP_PAGE_PARAM:
      return "MOBILE_APP_PAGE_PARAM";
    case NodeReferenceReferenceRefType.MOBILE_APP_PAGE_FORM:
      return "MOBILE_APP_PAGE_FORM";
    case NodeReferenceReferenceRefType.MOBILE_NAVIGATION:
      return "MOBILE_NAVIGATION";
    case NodeReferenceReferenceRefType.MOBILE_NAVIGATION_NODE:
      return "MOBILE_NAVIGATION_NODE";
    case NodeReferenceReferenceRefType.MOBILE_MOLECULE_PROP:
      return "MOBILE_MOLECULE_PROP";
    case NodeReferenceReferenceRefType.TABLE_DEFINITION:
      return "TABLE_DEFINITION";
    case NodeReferenceReferenceRefType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface FunctionArgument {
  name: string;
  argumentType: string;
  plural: boolean;
  reference?: NodeReference;
}

export interface NodeParam {
  name: string;
  paramType: string;
  paramTypeEnum: string[];
  defaultValue: string;
  plural: boolean;
  automated: boolean;
  reference?: NodeReference;
  value?: NodeVariable;
  actions: NodeAction[];
  functionArguments: FunctionArgument[];
}

export interface NodeVariable {
  localId: string;
  name: string;
  value: string;
  valuePath: string;
  defaultValue: string;
  valueType: string;
  defaultType: NodeVariableVariableDefaultType;
  source: NodeVariableVariableSource;
  variableType: NodeVariableVariableType;
  values: NodeReference[];
}

export enum NodeVariableVariableDefaultType {
  STRING = 0,
  VARIABLE = 1,
  UNRECOGNIZED = -1,
}

export function nodeVariableVariableDefaultTypeFromJSON(object: any): NodeVariableVariableDefaultType {
  switch (object) {
    case 0:
    case "STRING":
      return NodeVariableVariableDefaultType.STRING;
    case 1:
    case "VARIABLE":
      return NodeVariableVariableDefaultType.VARIABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NodeVariableVariableDefaultType.UNRECOGNIZED;
  }
}

export function nodeVariableVariableDefaultTypeToJSON(object: NodeVariableVariableDefaultType): string {
  switch (object) {
    case NodeVariableVariableDefaultType.STRING:
      return "STRING";
    case NodeVariableVariableDefaultType.VARIABLE:
      return "VARIABLE";
    case NodeVariableVariableDefaultType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum NodeVariableVariableSource {
  PARAMS = 0,
  FORM_VALUES = 1,
  ACTION_RESPONSE = 2,
  STORAGE = 3,
  AUTHENTICATED_USER = 4,
  MOLECULE_PROPS = 5,
  PROJECT_ASSET = 6,
  CONTEXT_VALUES = 7,
  LOCAL_CONTEXT_RESPONSE = 8,
  FORM_VALIDATION_ERROR_MESSAGE = 9,
  UNRECOGNIZED = -1,
}

export function nodeVariableVariableSourceFromJSON(object: any): NodeVariableVariableSource {
  switch (object) {
    case 0:
    case "PARAMS":
      return NodeVariableVariableSource.PARAMS;
    case 1:
    case "FORM_VALUES":
      return NodeVariableVariableSource.FORM_VALUES;
    case 2:
    case "ACTION_RESPONSE":
      return NodeVariableVariableSource.ACTION_RESPONSE;
    case 3:
    case "STORAGE":
      return NodeVariableVariableSource.STORAGE;
    case 4:
    case "AUTHENTICATED_USER":
      return NodeVariableVariableSource.AUTHENTICATED_USER;
    case 5:
    case "MOLECULE_PROPS":
      return NodeVariableVariableSource.MOLECULE_PROPS;
    case 6:
    case "PROJECT_ASSET":
      return NodeVariableVariableSource.PROJECT_ASSET;
    case 7:
    case "CONTEXT_VALUES":
      return NodeVariableVariableSource.CONTEXT_VALUES;
    case 8:
    case "LOCAL_CONTEXT_RESPONSE":
      return NodeVariableVariableSource.LOCAL_CONTEXT_RESPONSE;
    case 9:
    case "FORM_VALIDATION_ERROR_MESSAGE":
      return NodeVariableVariableSource.FORM_VALIDATION_ERROR_MESSAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NodeVariableVariableSource.UNRECOGNIZED;
  }
}

export function nodeVariableVariableSourceToJSON(object: NodeVariableVariableSource): string {
  switch (object) {
    case NodeVariableVariableSource.PARAMS:
      return "PARAMS";
    case NodeVariableVariableSource.FORM_VALUES:
      return "FORM_VALUES";
    case NodeVariableVariableSource.ACTION_RESPONSE:
      return "ACTION_RESPONSE";
    case NodeVariableVariableSource.STORAGE:
      return "STORAGE";
    case NodeVariableVariableSource.AUTHENTICATED_USER:
      return "AUTHENTICATED_USER";
    case NodeVariableVariableSource.MOLECULE_PROPS:
      return "MOLECULE_PROPS";
    case NodeVariableVariableSource.PROJECT_ASSET:
      return "PROJECT_ASSET";
    case NodeVariableVariableSource.CONTEXT_VALUES:
      return "CONTEXT_VALUES";
    case NodeVariableVariableSource.LOCAL_CONTEXT_RESPONSE:
      return "LOCAL_CONTEXT_RESPONSE";
    case NodeVariableVariableSource.FORM_VALIDATION_ERROR_MESSAGE:
      return "FORM_VALIDATION_ERROR_MESSAGE";
    case NodeVariableVariableSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum NodeVariableVariableType {
  STATIC = 0,
  DYNAMIC = 1,
  UNRECOGNIZED = -1,
}

export function nodeVariableVariableTypeFromJSON(object: any): NodeVariableVariableType {
  switch (object) {
    case 0:
    case "STATIC":
      return NodeVariableVariableType.STATIC;
    case 1:
    case "DYNAMIC":
      return NodeVariableVariableType.DYNAMIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NodeVariableVariableType.UNRECOGNIZED;
  }
}

export function nodeVariableVariableTypeToJSON(object: NodeVariableVariableType): string {
  switch (object) {
    case NodeVariableVariableType.STATIC:
      return "STATIC";
    case NodeVariableVariableType.DYNAMIC:
      return "DYNAMIC";
    case NodeVariableVariableType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface NodeAction {
  action: string;
  value: string;
  actionType: NodeActionActionType;
  source: NodeActionActionSource;
  payload: NodePayload[];
  response: NodePayload[];
  values: NodeReference[];
  successActions: NodeAction[];
  errorActions: NodeAction[];
}

export enum NodeActionActionType {
  API = 0,
  GENERAL = 1,
  UNRECOGNIZED = -1,
}

export function nodeActionActionTypeFromJSON(object: any): NodeActionActionType {
  switch (object) {
    case 0:
    case "API":
      return NodeActionActionType.API;
    case 1:
    case "GENERAL":
      return NodeActionActionType.GENERAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NodeActionActionType.UNRECOGNIZED;
  }
}

export function nodeActionActionTypeToJSON(object: NodeActionActionType): string {
  switch (object) {
    case NodeActionActionType.API:
      return "API";
    case NodeActionActionType.GENERAL:
      return "GENERAL";
    case NodeActionActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum NodeActionActionSource {
  AUTHENTICATION = 0,
  BACKEND_CALL = 1,
  FORM_SUBMIT = 2,
  NAVIGATION = 3,
  SHOW_TOAST_MESSAGE = 4,
  MOLECULE_PROPS = 5,
  MODAL = 6,
  EVENT_LOG = 7,
  REQUEST_NOTIFICATION_PERMISSION = 8,
  DRAWER = 9,
  UNRECOGNIZED = -1,
}

export function nodeActionActionSourceFromJSON(object: any): NodeActionActionSource {
  switch (object) {
    case 0:
    case "AUTHENTICATION":
      return NodeActionActionSource.AUTHENTICATION;
    case 1:
    case "BACKEND_CALL":
      return NodeActionActionSource.BACKEND_CALL;
    case 2:
    case "FORM_SUBMIT":
      return NodeActionActionSource.FORM_SUBMIT;
    case 3:
    case "NAVIGATION":
      return NodeActionActionSource.NAVIGATION;
    case 4:
    case "SHOW_TOAST_MESSAGE":
      return NodeActionActionSource.SHOW_TOAST_MESSAGE;
    case 5:
    case "MOLECULE_PROPS":
      return NodeActionActionSource.MOLECULE_PROPS;
    case 6:
    case "MODAL":
      return NodeActionActionSource.MODAL;
    case 7:
    case "EVENT_LOG":
      return NodeActionActionSource.EVENT_LOG;
    case 8:
    case "REQUEST_NOTIFICATION_PERMISSION":
      return NodeActionActionSource.REQUEST_NOTIFICATION_PERMISSION;
    case 9:
    case "DRAWER":
      return NodeActionActionSource.DRAWER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NodeActionActionSource.UNRECOGNIZED;
  }
}

export function nodeActionActionSourceToJSON(object: NodeActionActionSource): string {
  switch (object) {
    case NodeActionActionSource.AUTHENTICATION:
      return "AUTHENTICATION";
    case NodeActionActionSource.BACKEND_CALL:
      return "BACKEND_CALL";
    case NodeActionActionSource.FORM_SUBMIT:
      return "FORM_SUBMIT";
    case NodeActionActionSource.NAVIGATION:
      return "NAVIGATION";
    case NodeActionActionSource.SHOW_TOAST_MESSAGE:
      return "SHOW_TOAST_MESSAGE";
    case NodeActionActionSource.MOLECULE_PROPS:
      return "MOLECULE_PROPS";
    case NodeActionActionSource.MODAL:
      return "MODAL";
    case NodeActionActionSource.EVENT_LOG:
      return "EVENT_LOG";
    case NodeActionActionSource.REQUEST_NOTIFICATION_PERMISSION:
      return "REQUEST_NOTIFICATION_PERMISSION";
    case NodeActionActionSource.DRAWER:
      return "DRAWER";
    case NodeActionActionSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface NodePayload {
  value?: NodeVariable;
  reference?: NodeReference;
  actions: NodeAction[];
}

export interface MoleculeComponent {
  reference?: NodeReference;
  props: NodeParam[];
}

export interface NodeCustom {
  usePropStyle?: boolean | undefined;
  ignorePropStyle?: boolean | undefined;
  form?: NodeReference | undefined;
  molecule?: NodeReference | undefined;
  mediaQueries: NodeMediaQuery[];
  authentication?: NodeReference | undefined;
  renderCondition?: RenderCondition | undefined;
  seoTitle: NodeVariable[];
  seoDescription: NodeVariable[];
  actions: NodeAction[];
  params: NodeParam[];
  props: NodeParam[];
  childrenData: NodeVariable[];
  formValidations: FormValidation[];
}

export interface NodeMediaQuery {
  lower: number;
  upper: number;
  style?: { [key: string]: any };
}

export interface RenderCondition {
  enabled: boolean;
  conditions: RenderConditionCondition[];
}

export enum RenderConditionSource {
  BINARY = 0,
  GLOBAL = 1,
  UNRECOGNIZED = -1,
}

export function renderConditionSourceFromJSON(object: any): RenderConditionSource {
  switch (object) {
    case 0:
    case "BINARY":
      return RenderConditionSource.BINARY;
    case 1:
    case "GLOBAL":
      return RenderConditionSource.GLOBAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RenderConditionSource.UNRECOGNIZED;
  }
}

export function renderConditionSourceToJSON(object: RenderConditionSource): string {
  switch (object) {
    case RenderConditionSource.BINARY:
      return "BINARY";
    case RenderConditionSource.GLOBAL:
      return "GLOBAL";
    case RenderConditionSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum RenderConditionOperator {
  LESS_THAN = 0,
  LESS_EQUAL_THAN = 1,
  EQUAL = 2,
  NOT_EQUAL = 3,
  GREATER_THAN = 4,
  GREATER_EQUAL_THAN = 5,
  EXIST = 6,
  NOT_EXIST = 7,
  UNRECOGNIZED = -1,
}

export function renderConditionOperatorFromJSON(object: any): RenderConditionOperator {
  switch (object) {
    case 0:
    case "LESS_THAN":
      return RenderConditionOperator.LESS_THAN;
    case 1:
    case "LESS_EQUAL_THAN":
      return RenderConditionOperator.LESS_EQUAL_THAN;
    case 2:
    case "EQUAL":
      return RenderConditionOperator.EQUAL;
    case 3:
    case "NOT_EQUAL":
      return RenderConditionOperator.NOT_EQUAL;
    case 4:
    case "GREATER_THAN":
      return RenderConditionOperator.GREATER_THAN;
    case 5:
    case "GREATER_EQUAL_THAN":
      return RenderConditionOperator.GREATER_EQUAL_THAN;
    case 6:
    case "EXIST":
      return RenderConditionOperator.EXIST;
    case 7:
    case "NOT_EXIST":
      return RenderConditionOperator.NOT_EXIST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RenderConditionOperator.UNRECOGNIZED;
  }
}

export function renderConditionOperatorToJSON(object: RenderConditionOperator): string {
  switch (object) {
    case RenderConditionOperator.LESS_THAN:
      return "LESS_THAN";
    case RenderConditionOperator.LESS_EQUAL_THAN:
      return "LESS_EQUAL_THAN";
    case RenderConditionOperator.EQUAL:
      return "EQUAL";
    case RenderConditionOperator.NOT_EQUAL:
      return "NOT_EQUAL";
    case RenderConditionOperator.GREATER_THAN:
      return "GREATER_THAN";
    case RenderConditionOperator.GREATER_EQUAL_THAN:
      return "GREATER_EQUAL_THAN";
    case RenderConditionOperator.EXIST:
      return "EXIST";
    case RenderConditionOperator.NOT_EXIST:
      return "NOT_EXIST";
    case RenderConditionOperator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface RenderConditionCondition {
  source: RenderConditionSource;
  operator: RenderConditionOperator;
  left?: NodeVariable;
  right?: NodeVariable;
}

export interface FormValidation {
  validationType: FormValidationValidationType;
  validationRules: FormValidationFormValidationsRule[];
}

export enum FormValidationValidationType {
  TEXT = 0,
  NUMBER = 1,
  EMAIL = 2,
  PASSWORD = 3,
  PHONE_NUMBER = 4,
  UNRECOGNIZED = -1,
}

export function formValidationValidationTypeFromJSON(object: any): FormValidationValidationType {
  switch (object) {
    case 0:
    case "TEXT":
      return FormValidationValidationType.TEXT;
    case 1:
    case "NUMBER":
      return FormValidationValidationType.NUMBER;
    case 2:
    case "EMAIL":
      return FormValidationValidationType.EMAIL;
    case 3:
    case "PASSWORD":
      return FormValidationValidationType.PASSWORD;
    case 4:
    case "PHONE_NUMBER":
      return FormValidationValidationType.PHONE_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FormValidationValidationType.UNRECOGNIZED;
  }
}

export function formValidationValidationTypeToJSON(object: FormValidationValidationType): string {
  switch (object) {
    case FormValidationValidationType.TEXT:
      return "TEXT";
    case FormValidationValidationType.NUMBER:
      return "NUMBER";
    case FormValidationValidationType.EMAIL:
      return "EMAIL";
    case FormValidationValidationType.PASSWORD:
      return "PASSWORD";
    case FormValidationValidationType.PHONE_NUMBER:
      return "PHONE_NUMBER";
    case FormValidationValidationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FormValidationRuleType {
  REQUIRED = 0,
  MAXIMUM = 1,
  MINIMUM = 2,
  REGEX = 3,
  UNRECOGNIZED = -1,
}

export function formValidationRuleTypeFromJSON(object: any): FormValidationRuleType {
  switch (object) {
    case 0:
    case "REQUIRED":
      return FormValidationRuleType.REQUIRED;
    case 1:
    case "MAXIMUM":
      return FormValidationRuleType.MAXIMUM;
    case 2:
    case "MINIMUM":
      return FormValidationRuleType.MINIMUM;
    case 3:
    case "REGEX":
      return FormValidationRuleType.REGEX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FormValidationRuleType.UNRECOGNIZED;
  }
}

export function formValidationRuleTypeToJSON(object: FormValidationRuleType): string {
  switch (object) {
    case FormValidationRuleType.REQUIRED:
      return "REQUIRED";
    case FormValidationRuleType.MAXIMUM:
      return "MAXIMUM";
    case FormValidationRuleType.MINIMUM:
      return "MINIMUM";
    case FormValidationRuleType.REGEX:
      return "REGEX";
    case FormValidationRuleType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface FormValidationFormValidationsRule {
  value: string;
  valueType: string;
  errorMessages: NodeVariable[];
}

export interface GetWebAppRequest {
  projectId: number;
}

export interface GetWebAppResponse {
  webApp?: WebApp;
}

export interface GetBackendRequest {
  projectId: number;
}

export interface GetBackendResponse {
  backend?: Backend;
}

export interface ListTablesRequest {
  projectId: number;
}

export interface ListTablesResponse {
  tables: Table[];
}

export interface ListMigrationsRequest {
  projectId: number;
}

export interface ListControllersRequest {
  projectId: number;
}

export interface ListControllersResponse {
  controllers: Controller[];
}

export interface ListFeaturesRequest {
  projectId: number;
}

export interface ListFeaturesResponse {
  features: Feature[];
}

export interface ListAuthorizationsRequest {
  projectId: number;
}

export interface ListAuthorizationsResponse {
  authorizations: Authorization[];
}

export interface ListLocalizationsRequest {
  projectId: number;
}

export interface ListLocalizationsResponse {
  localizations: Localization[];
}

export interface ListMigrationsResponse {
  migrations: Migration[];
}

function createBaseProject(): Project {
  return { id: "", projectName: "", projectId: 0, timeZone: "", defaultLanguageCode: "", languageCodes: [] };
}

export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.projectName !== "") {
      writer.uint32(18).string(message.projectName);
    }
    if (message.projectId !== 0) {
      writer.uint32(24).int32(message.projectId);
    }
    if (message.infra !== undefined) {
      Infra.encode(message.infra, writer.uint32(34).fork()).ldelim();
    }
    if (message.timeZone !== "") {
      writer.uint32(42).string(message.timeZone);
    }
    if (message.defaultLanguageCode !== "") {
      writer.uint32(50).string(message.defaultLanguageCode);
    }
    for (const v of message.languageCodes) {
      writer.uint32(58).string(v!);
    }
    if (message.projectExport !== undefined) {
      ProjectExport.encode(message.projectExport, writer.uint32(74).fork()).ldelim();
    }
    if (message.projectPreview !== undefined) {
      ProjectPreview.encode(message.projectPreview, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.projectName = reader.string();
          break;
        case 3:
          message.projectId = reader.int32();
          break;
        case 4:
          message.infra = Infra.decode(reader, reader.uint32());
          break;
        case 5:
          message.timeZone = reader.string();
          break;
        case 6:
          message.defaultLanguageCode = reader.string();
          break;
        case 7:
          message.languageCodes.push(reader.string());
          break;
        case 9:
          message.projectExport = ProjectExport.decode(reader, reader.uint32());
          break;
        case 10:
          message.projectPreview = ProjectPreview.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Project {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      projectName: isSet(object.projectName) ? String(object.projectName) : "",
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      infra: isSet(object.infra) ? Infra.fromJSON(object.infra) : undefined,
      timeZone: isSet(object.timeZone) ? String(object.timeZone) : "",
      defaultLanguageCode: isSet(object.defaultLanguageCode) ? String(object.defaultLanguageCode) : "",
      languageCodes: Array.isArray(object?.languageCodes) ? object.languageCodes.map((e: any) => String(e)) : [],
      projectExport: isSet(object.projectExport) ? ProjectExport.fromJSON(object.projectExport) : undefined,
      projectPreview: isSet(object.projectPreview) ? ProjectPreview.fromJSON(object.projectPreview) : undefined,
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.projectName !== undefined && (obj.projectName = message.projectName);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.infra !== undefined && (obj.infra = message.infra ? Infra.toJSON(message.infra) : undefined);
    message.timeZone !== undefined && (obj.timeZone = message.timeZone);
    message.defaultLanguageCode !== undefined && (obj.defaultLanguageCode = message.defaultLanguageCode);
    if (message.languageCodes) {
      obj.languageCodes = message.languageCodes.map((e) => e);
    } else {
      obj.languageCodes = [];
    }
    message.projectExport !== undefined &&
      (obj.projectExport = message.projectExport ? ProjectExport.toJSON(message.projectExport) : undefined);
    message.projectPreview !== undefined &&
      (obj.projectPreview = message.projectPreview ? ProjectPreview.toJSON(message.projectPreview) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Project>): Project {
    const message = createBaseProject();
    message.id = object.id ?? "";
    message.projectName = object.projectName ?? "";
    message.projectId = object.projectId ?? 0;
    message.infra = (object.infra !== undefined && object.infra !== null) ? Infra.fromPartial(object.infra) : undefined;
    message.timeZone = object.timeZone ?? "";
    message.defaultLanguageCode = object.defaultLanguageCode ?? "";
    message.languageCodes = object.languageCodes?.map((e) => e) || [];
    message.projectExport = (object.projectExport !== undefined && object.projectExport !== null)
      ? ProjectExport.fromPartial(object.projectExport)
      : undefined;
    message.projectPreview = (object.projectPreview !== undefined && object.projectPreview !== null)
      ? ProjectPreview.fromPartial(object.projectPreview)
      : undefined;
    return message;
  },
};

function createBaseProjectExport(): ProjectExport {
  return { id: 0 };
}

export const ProjectExport = {
  encode(message: ProjectExport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectExport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectExport {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: ProjectExport): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectExport>): ProjectExport {
    const message = createBaseProjectExport();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseProjectPreview(): ProjectPreview {
  return { id: 0 };
}

export const ProjectPreview = {
  encode(message: ProjectPreview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPreview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPreview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPreview {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: ProjectPreview): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectPreview>): ProjectPreview {
    const message = createBaseProjectPreview();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseInfra(): Infra {
  return { path: "" };
}

export const Infra = {
  encode(message: Infra, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Infra {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Infra {
    return { path: isSet(object.path) ? String(object.path) : "" };
  },

  toJSON(message: Infra): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial(object: DeepPartial<Infra>): Infra {
    const message = createBaseInfra();
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseBackend(): Backend {
  return { tables: [], controllers: [], features: [], authorizations: [], localizations: [], migrations: [] };
}

export const Backend = {
  encode(message: Backend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tables) {
      Table.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.controllers) {
      Controller.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.features) {
      Feature.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.authorizations) {
      Authorization.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.localizations) {
      Localization.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.migrations) {
      Migration.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.tables.push(Table.decode(reader, reader.uint32()));
          break;
        case 5:
          message.controllers.push(Controller.decode(reader, reader.uint32()));
          break;
        case 6:
          message.features.push(Feature.decode(reader, reader.uint32()));
          break;
        case 7:
          message.authorizations.push(Authorization.decode(reader, reader.uint32()));
          break;
        case 8:
          message.localizations.push(Localization.decode(reader, reader.uint32()));
          break;
        case 9:
          message.migrations.push(Migration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Backend {
    return {
      tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => Table.fromJSON(e)) : [],
      controllers: Array.isArray(object?.controllers) ? object.controllers.map((e: any) => Controller.fromJSON(e)) : [],
      features: Array.isArray(object?.features) ? object.features.map((e: any) => Feature.fromJSON(e)) : [],
      authorizations: Array.isArray(object?.authorizations)
        ? object.authorizations.map((e: any) => Authorization.fromJSON(e))
        : [],
      localizations: Array.isArray(object?.localizations)
        ? object.localizations.map((e: any) => Localization.fromJSON(e))
        : [],
      migrations: Array.isArray(object?.migrations) ? object.migrations.map((e: any) => Migration.fromJSON(e)) : [],
    };
  },

  toJSON(message: Backend): unknown {
    const obj: any = {};
    if (message.tables) {
      obj.tables = message.tables.map((e) => e ? Table.toJSON(e) : undefined);
    } else {
      obj.tables = [];
    }
    if (message.controllers) {
      obj.controllers = message.controllers.map((e) => e ? Controller.toJSON(e) : undefined);
    } else {
      obj.controllers = [];
    }
    if (message.features) {
      obj.features = message.features.map((e) => e ? Feature.toJSON(e) : undefined);
    } else {
      obj.features = [];
    }
    if (message.authorizations) {
      obj.authorizations = message.authorizations.map((e) => e ? Authorization.toJSON(e) : undefined);
    } else {
      obj.authorizations = [];
    }
    if (message.localizations) {
      obj.localizations = message.localizations.map((e) => e ? Localization.toJSON(e) : undefined);
    } else {
      obj.localizations = [];
    }
    if (message.migrations) {
      obj.migrations = message.migrations.map((e) => e ? Migration.toJSON(e) : undefined);
    } else {
      obj.migrations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Backend>): Backend {
    const message = createBaseBackend();
    message.tables = object.tables?.map((e) => Table.fromPartial(e)) || [];
    message.controllers = object.controllers?.map((e) => Controller.fromPartial(e)) || [];
    message.features = object.features?.map((e) => Feature.fromPartial(e)) || [];
    message.authorizations = object.authorizations?.map((e) => Authorization.fromPartial(e)) || [];
    message.localizations = object.localizations?.map((e) => Localization.fromPartial(e)) || [];
    message.migrations = object.migrations?.map((e) => Migration.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLocalization(): Localization {
  return { lang: "", namespaces: [] };
}

export const Localization = {
  encode(message: Localization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lang !== "") {
      writer.uint32(10).string(message.lang);
    }
    for (const v of message.namespaces) {
      LocalizationNamespace.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Localization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lang = reader.string();
          break;
        case 3:
          message.namespaces.push(LocalizationNamespace.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Localization {
    return {
      lang: isSet(object.lang) ? String(object.lang) : "",
      namespaces: Array.isArray(object?.namespaces)
        ? object.namespaces.map((e: any) => LocalizationNamespace.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Localization): unknown {
    const obj: any = {};
    message.lang !== undefined && (obj.lang = message.lang);
    if (message.namespaces) {
      obj.namespaces = message.namespaces.map((e) => e ? LocalizationNamespace.toJSON(e) : undefined);
    } else {
      obj.namespaces = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Localization>): Localization {
    const message = createBaseLocalization();
    message.lang = object.lang ?? "";
    message.namespaces = object.namespaces?.map((e) => LocalizationNamespace.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLocalizationNamespace(): LocalizationNamespace {
  return { name: "", translates: [] };
}

export const LocalizationNamespace = {
  encode(message: LocalizationNamespace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.translates) {
      LocalizationTranslate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalizationNamespace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalizationNamespace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.translates.push(LocalizationTranslate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LocalizationNamespace {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      translates: Array.isArray(object?.translates)
        ? object.translates.map((e: any) => LocalizationTranslate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LocalizationNamespace): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.translates) {
      obj.translates = message.translates.map((e) => e ? LocalizationTranslate.toJSON(e) : undefined);
    } else {
      obj.translates = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<LocalizationNamespace>): LocalizationNamespace {
    const message = createBaseLocalizationNamespace();
    message.name = object.name ?? "";
    message.translates = object.translates?.map((e) => LocalizationTranslate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLocalizationTranslate(): LocalizationTranslate {
  return { key: "", value: "" };
}

export const LocalizationTranslate = {
  encode(message: LocalizationTranslate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalizationTranslate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalizationTranslate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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

  fromJSON(object: any): LocalizationTranslate {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: LocalizationTranslate): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<LocalizationTranslate>): LocalizationTranslate {
    const message = createBaseLocalizationTranslate();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseDataType(): DataType {
  return { name: 0 };
}

export const DataType = {
  encode(message: DataType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== 0) {
      writer.uint32(8).int32(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataType {
    return { name: isSet(object.name) ? dataTypeNameFromJSON(object.name) : 0 };
  },

  toJSON(message: DataType): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = dataTypeNameToJSON(message.name));
    return obj;
  },

  fromPartial(object: DeepPartial<DataType>): DataType {
    const message = createBaseDataType();
    message.name = object.name ?? 0;
    return message;
  },
};

function createBaseAuthorization(): Authorization {
  return { name: "", id: 0, policies: [] };
}

export const Authorization = {
  encode(message: Authorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== 0) {
      writer.uint32(16).int32(message.id);
    }
    for (const v of message.policies) {
      AuthorizationPolicy.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Authorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.id = reader.int32();
          break;
        case 3:
          message.policies.push(AuthorizationPolicy.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Authorization {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      policies: Array.isArray(object?.policies) ? object.policies.map((e: any) => AuthorizationPolicy.fromJSON(e)) : [],
    };
  },

  toJSON(message: Authorization): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined && (obj.id = Math.round(message.id));
    if (message.policies) {
      obj.policies = message.policies.map((e) => e ? AuthorizationPolicy.toJSON(e) : undefined);
    } else {
      obj.policies = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Authorization>): Authorization {
    const message = createBaseAuthorization();
    message.name = object.name ?? "";
    message.id = object.id ?? 0;
    message.policies = object.policies?.map((e) => AuthorizationPolicy.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAuthorizationPolicy(): AuthorizationPolicy {
  return { resource: "", scope: 0 };
}

export const AuthorizationPolicy = {
  encode(message: AuthorizationPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== "") {
      writer.uint32(26).string(message.resource);
    }
    if (message.roleBinding !== undefined) {
      AuthorizationPolicyRoleBinding.encode(message.roleBinding, writer.uint32(34).fork()).ldelim();
    }
    if (message.rule !== undefined) {
      AuthorizationPolicyRule.encode(message.rule, writer.uint32(42).fork()).ldelim();
    }
    if (message.scope !== 0) {
      writer.uint32(48).int32(message.scope);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizationPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.resource = reader.string();
          break;
        case 4:
          message.roleBinding = AuthorizationPolicyRoleBinding.decode(reader, reader.uint32());
          break;
        case 5:
          message.rule = AuthorizationPolicyRule.decode(reader, reader.uint32());
          break;
        case 6:
          message.scope = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthorizationPolicy {
    return {
      resource: isSet(object.resource) ? String(object.resource) : "",
      roleBinding: isSet(object.roleBinding) ? AuthorizationPolicyRoleBinding.fromJSON(object.roleBinding) : undefined,
      rule: isSet(object.rule) ? AuthorizationPolicyRule.fromJSON(object.rule) : undefined,
      scope: isSet(object.scope) ? authorizationPolicyScopeFromJSON(object.scope) : 0,
    };
  },

  toJSON(message: AuthorizationPolicy): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource);
    message.roleBinding !== undefined &&
      (obj.roleBinding = message.roleBinding ? AuthorizationPolicyRoleBinding.toJSON(message.roleBinding) : undefined);
    message.rule !== undefined && (obj.rule = message.rule ? AuthorizationPolicyRule.toJSON(message.rule) : undefined);
    message.scope !== undefined && (obj.scope = authorizationPolicyScopeToJSON(message.scope));
    return obj;
  },

  fromPartial(object: DeepPartial<AuthorizationPolicy>): AuthorizationPolicy {
    const message = createBaseAuthorizationPolicy();
    message.resource = object.resource ?? "";
    message.roleBinding = (object.roleBinding !== undefined && object.roleBinding !== null)
      ? AuthorizationPolicyRoleBinding.fromPartial(object.roleBinding)
      : undefined;
    message.rule = (object.rule !== undefined && object.rule !== null)
      ? AuthorizationPolicyRule.fromPartial(object.rule)
      : undefined;
    message.scope = object.scope ?? 0;
    return message;
  },
};

function createBaseAuthorizationPolicyRoleBinding(): AuthorizationPolicyRoleBinding {
  return { table: "", column: "", role: "" };
}

export const AuthorizationPolicyRoleBinding = {
  encode(message: AuthorizationPolicyRoleBinding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    if (message.column !== "") {
      writer.uint32(18).string(message.column);
    }
    if (message.role !== "") {
      writer.uint32(26).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicyRoleBinding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizationPolicyRoleBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.table = reader.string();
          break;
        case 2:
          message.column = reader.string();
          break;
        case 3:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthorizationPolicyRoleBinding {
    return {
      table: isSet(object.table) ? String(object.table) : "",
      column: isSet(object.column) ? String(object.column) : "",
      role: isSet(object.role) ? String(object.role) : "",
    };
  },

  toJSON(message: AuthorizationPolicyRoleBinding): unknown {
    const obj: any = {};
    message.table !== undefined && (obj.table = message.table);
    message.column !== undefined && (obj.column = message.column);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(object: DeepPartial<AuthorizationPolicyRoleBinding>): AuthorizationPolicyRoleBinding {
    const message = createBaseAuthorizationPolicyRoleBinding();
    message.table = object.table ?? "";
    message.column = object.column ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseAuthorizationPolicyRule(): AuthorizationPolicyRule {
  return { operands: [], operators: [] };
}

export const AuthorizationPolicyRule = {
  encode(message: AuthorizationPolicyRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operands) {
      AuthorizationPolicyRuleOperand.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.operators) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicyRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizationPolicyRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operands.push(AuthorizationPolicyRuleOperand.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.operators.push(reader.int32() as any);
            }
          } else {
            message.operators.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthorizationPolicyRule {
    return {
      operands: Array.isArray(object?.operands)
        ? object.operands.map((e: any) => AuthorizationPolicyRuleOperand.fromJSON(e))
        : [],
      operators: Array.isArray(object?.operators) ? object.operators.map((e: any) => operatorFromJSON(e)) : [],
    };
  },

  toJSON(message: AuthorizationPolicyRule): unknown {
    const obj: any = {};
    if (message.operands) {
      obj.operands = message.operands.map((e) => e ? AuthorizationPolicyRuleOperand.toJSON(e) : undefined);
    } else {
      obj.operands = [];
    }
    if (message.operators) {
      obj.operators = message.operators.map((e) => operatorToJSON(e));
    } else {
      obj.operators = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AuthorizationPolicyRule>): AuthorizationPolicyRule {
    const message = createBaseAuthorizationPolicyRule();
    message.operands = object.operands?.map((e) => AuthorizationPolicyRuleOperand.fromPartial(e)) || [];
    message.operators = object.operators?.map((e) => e) || [];
    return message;
  },
};

function createBaseAuthorizationPolicyRuleOperand(): AuthorizationPolicyRuleOperand {
  return {};
}

export const AuthorizationPolicyRuleOperand = {
  encode(message: AuthorizationPolicyRuleOperand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expr !== undefined) {
      AuthorizationPolicyRuleExpr.encode(message.expr, writer.uint32(10).fork()).ldelim();
    }
    if (message.rule !== undefined) {
      AuthorizationPolicyRule.encode(message.rule, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicyRuleOperand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizationPolicyRuleOperand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expr = AuthorizationPolicyRuleExpr.decode(reader, reader.uint32());
          break;
        case 2:
          message.rule = AuthorizationPolicyRule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthorizationPolicyRuleOperand {
    return {
      expr: isSet(object.expr) ? AuthorizationPolicyRuleExpr.fromJSON(object.expr) : undefined,
      rule: isSet(object.rule) ? AuthorizationPolicyRule.fromJSON(object.rule) : undefined,
    };
  },

  toJSON(message: AuthorizationPolicyRuleOperand): unknown {
    const obj: any = {};
    message.expr !== undefined &&
      (obj.expr = message.expr ? AuthorizationPolicyRuleExpr.toJSON(message.expr) : undefined);
    message.rule !== undefined && (obj.rule = message.rule ? AuthorizationPolicyRule.toJSON(message.rule) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AuthorizationPolicyRuleOperand>): AuthorizationPolicyRuleOperand {
    const message = createBaseAuthorizationPolicyRuleOperand();
    message.expr = (object.expr !== undefined && object.expr !== null)
      ? AuthorizationPolicyRuleExpr.fromPartial(object.expr)
      : undefined;
    message.rule = (object.rule !== undefined && object.rule !== null)
      ? AuthorizationPolicyRule.fromPartial(object.rule)
      : undefined;
    return message;
  },
};

function createBaseAuthorizationPolicyRuleExpr(): AuthorizationPolicyRuleExpr {
  return { column: "", operator: 0 };
}

export const AuthorizationPolicyRuleExpr = {
  encode(message: AuthorizationPolicyRuleExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.column !== "") {
      writer.uint32(10).string(message.column);
    }
    if (message.value !== undefined) {
      writer.uint32(18).string(message.value);
    }
    if (message.paths !== undefined) {
      writer.uint32(26).string(message.paths);
    }
    if (message.dataType !== undefined) {
      DataType.encode(message.dataType, writer.uint32(34).fork()).ldelim();
    }
    if (message.operator !== 0) {
      writer.uint32(40).int32(message.operator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicyRuleExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizationPolicyRuleExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.column = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.paths = reader.string();
          break;
        case 4:
          message.dataType = DataType.decode(reader, reader.uint32());
          break;
        case 5:
          message.operator = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthorizationPolicyRuleExpr {
    return {
      column: isSet(object.column) ? String(object.column) : "",
      value: isSet(object.value) ? String(object.value) : undefined,
      paths: isSet(object.paths) ? String(object.paths) : undefined,
      dataType: isSet(object.dataType) ? DataType.fromJSON(object.dataType) : undefined,
      operator: isSet(object.operator) ? operatorFromJSON(object.operator) : 0,
    };
  },

  toJSON(message: AuthorizationPolicyRuleExpr): unknown {
    const obj: any = {};
    message.column !== undefined && (obj.column = message.column);
    message.value !== undefined && (obj.value = message.value);
    message.paths !== undefined && (obj.paths = message.paths);
    message.dataType !== undefined && (obj.dataType = message.dataType ? DataType.toJSON(message.dataType) : undefined);
    message.operator !== undefined && (obj.operator = operatorToJSON(message.operator));
    return obj;
  },

  fromPartial(object: DeepPartial<AuthorizationPolicyRuleExpr>): AuthorizationPolicyRuleExpr {
    const message = createBaseAuthorizationPolicyRuleExpr();
    message.column = object.column ?? "";
    message.value = object.value ?? undefined;
    message.paths = object.paths ?? undefined;
    message.dataType = (object.dataType !== undefined && object.dataType !== null)
      ? DataType.fromPartial(object.dataType)
      : undefined;
    message.operator = object.operator ?? 0;
    return message;
  },
};

function createBaseFeature(): Feature {
  return { name: 0, env: 0 };
}

export const Feature = {
  encode(message: Feature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== 0) {
      writer.uint32(8).int32(message.name);
    }
    if (message.env !== 0) {
      writer.uint32(16).int32(message.env);
    }
    if (message.emailLogin !== undefined) {
      FeatureEmailLogin.encode(message.emailLogin, writer.uint32(26).fork()).ldelim();
    }
    if (message.jpBankData !== undefined) {
      FeatureJPBankData.encode(message.jpBankData, writer.uint32(34).fork()).ldelim();
    }
    if (message.basicAuth !== undefined) {
      FeatureBasicAuth.encode(message.basicAuth, writer.uint32(42).fork()).ldelim();
    }
    if (message.twilioLogin !== undefined) {
      FeatureTwilioLogin.encode(message.twilioLogin, writer.uint32(50).fork()).ldelim();
    }
    if (message.rollbar !== undefined) {
      FeatureRollbar.encode(message.rollbar, writer.uint32(58).fork()).ldelim();
    }
    if (message.deepLink !== undefined) {
      FeatureDeepLink.encode(message.deepLink, writer.uint32(66).fork()).ldelim();
    }
    if (message.stripe !== undefined) {
      FeatureStripe.encode(message.stripe, writer.uint32(74).fork()).ldelim();
    }
    if (message.lineLogin !== undefined) {
      FeatureLineLogin.encode(message.lineLogin, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Feature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.int32() as any;
          break;
        case 2:
          message.env = reader.int32() as any;
          break;
        case 3:
          message.emailLogin = FeatureEmailLogin.decode(reader, reader.uint32());
          break;
        case 4:
          message.jpBankData = FeatureJPBankData.decode(reader, reader.uint32());
          break;
        case 5:
          message.basicAuth = FeatureBasicAuth.decode(reader, reader.uint32());
          break;
        case 6:
          message.twilioLogin = FeatureTwilioLogin.decode(reader, reader.uint32());
          break;
        case 7:
          message.rollbar = FeatureRollbar.decode(reader, reader.uint32());
          break;
        case 8:
          message.deepLink = FeatureDeepLink.decode(reader, reader.uint32());
          break;
        case 9:
          message.stripe = FeatureStripe.decode(reader, reader.uint32());
          break;
        case 10:
          message.lineLogin = FeatureLineLogin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Feature {
    return {
      name: isSet(object.name) ? featureFeatureNameFromJSON(object.name) : 0,
      env: isSet(object.env) ? featureEnvironmentFromJSON(object.env) : 0,
      emailLogin: isSet(object.emailLogin) ? FeatureEmailLogin.fromJSON(object.emailLogin) : undefined,
      jpBankData: isSet(object.jpBankData) ? FeatureJPBankData.fromJSON(object.jpBankData) : undefined,
      basicAuth: isSet(object.basicAuth) ? FeatureBasicAuth.fromJSON(object.basicAuth) : undefined,
      twilioLogin: isSet(object.twilioLogin) ? FeatureTwilioLogin.fromJSON(object.twilioLogin) : undefined,
      rollbar: isSet(object.rollbar) ? FeatureRollbar.fromJSON(object.rollbar) : undefined,
      deepLink: isSet(object.deepLink) ? FeatureDeepLink.fromJSON(object.deepLink) : undefined,
      stripe: isSet(object.stripe) ? FeatureStripe.fromJSON(object.stripe) : undefined,
      lineLogin: isSet(object.lineLogin) ? FeatureLineLogin.fromJSON(object.lineLogin) : undefined,
    };
  },

  toJSON(message: Feature): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = featureFeatureNameToJSON(message.name));
    message.env !== undefined && (obj.env = featureEnvironmentToJSON(message.env));
    message.emailLogin !== undefined &&
      (obj.emailLogin = message.emailLogin ? FeatureEmailLogin.toJSON(message.emailLogin) : undefined);
    message.jpBankData !== undefined &&
      (obj.jpBankData = message.jpBankData ? FeatureJPBankData.toJSON(message.jpBankData) : undefined);
    message.basicAuth !== undefined &&
      (obj.basicAuth = message.basicAuth ? FeatureBasicAuth.toJSON(message.basicAuth) : undefined);
    message.twilioLogin !== undefined &&
      (obj.twilioLogin = message.twilioLogin ? FeatureTwilioLogin.toJSON(message.twilioLogin) : undefined);
    message.rollbar !== undefined &&
      (obj.rollbar = message.rollbar ? FeatureRollbar.toJSON(message.rollbar) : undefined);
    message.deepLink !== undefined &&
      (obj.deepLink = message.deepLink ? FeatureDeepLink.toJSON(message.deepLink) : undefined);
    message.stripe !== undefined && (obj.stripe = message.stripe ? FeatureStripe.toJSON(message.stripe) : undefined);
    message.lineLogin !== undefined &&
      (obj.lineLogin = message.lineLogin ? FeatureLineLogin.toJSON(message.lineLogin) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Feature>): Feature {
    const message = createBaseFeature();
    message.name = object.name ?? 0;
    message.env = object.env ?? 0;
    message.emailLogin = (object.emailLogin !== undefined && object.emailLogin !== null)
      ? FeatureEmailLogin.fromPartial(object.emailLogin)
      : undefined;
    message.jpBankData = (object.jpBankData !== undefined && object.jpBankData !== null)
      ? FeatureJPBankData.fromPartial(object.jpBankData)
      : undefined;
    message.basicAuth = (object.basicAuth !== undefined && object.basicAuth !== null)
      ? FeatureBasicAuth.fromPartial(object.basicAuth)
      : undefined;
    message.twilioLogin = (object.twilioLogin !== undefined && object.twilioLogin !== null)
      ? FeatureTwilioLogin.fromPartial(object.twilioLogin)
      : undefined;
    message.rollbar = (object.rollbar !== undefined && object.rollbar !== null)
      ? FeatureRollbar.fromPartial(object.rollbar)
      : undefined;
    message.deepLink = (object.deepLink !== undefined && object.deepLink !== null)
      ? FeatureDeepLink.fromPartial(object.deepLink)
      : undefined;
    message.stripe = (object.stripe !== undefined && object.stripe !== null)
      ? FeatureStripe.fromPartial(object.stripe)
      : undefined;
    message.lineLogin = (object.lineLogin !== undefined && object.lineLogin !== null)
      ? FeatureLineLogin.fromPartial(object.lineLogin)
      : undefined;
    return message;
  },
};

function createBaseFeatureEmailLogin(): FeatureEmailLogin {
  return {
    tables: [],
    passwordMinLength: 0,
    rememberFor: 0,
    resetPasswordWithin: 0,
    maximumRetries: 0,
    unlockStrategy: 0,
    unlockIn: 0,
    passwordRegex: "",
    confirmationEmail: false,
  };
}

export const FeatureEmailLogin = {
  encode(message: FeatureEmailLogin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tables) {
      writer.uint32(10).string(v!);
    }
    if (message.passwordMinLength !== 0) {
      writer.uint32(16).int32(message.passwordMinLength);
    }
    if (message.rememberFor !== 0) {
      writer.uint32(24).int32(message.rememberFor);
    }
    if (message.resetPasswordWithin !== 0) {
      writer.uint32(32).int32(message.resetPasswordWithin);
    }
    if (message.maximumRetries !== 0) {
      writer.uint32(40).int32(message.maximumRetries);
    }
    if (message.unlockStrategy !== 0) {
      writer.uint32(48).int32(message.unlockStrategy);
    }
    if (message.unlockIn !== 0) {
      writer.uint32(56).int32(message.unlockIn);
    }
    if (message.passwordRegex !== "") {
      writer.uint32(66).string(message.passwordRegex);
    }
    if (message.confirmationEmail === true) {
      writer.uint32(72).bool(message.confirmationEmail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureEmailLogin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureEmailLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tables.push(reader.string());
          break;
        case 2:
          message.passwordMinLength = reader.int32();
          break;
        case 3:
          message.rememberFor = reader.int32();
          break;
        case 4:
          message.resetPasswordWithin = reader.int32();
          break;
        case 5:
          message.maximumRetries = reader.int32();
          break;
        case 6:
          message.unlockStrategy = reader.int32() as any;
          break;
        case 7:
          message.unlockIn = reader.int32();
          break;
        case 8:
          message.passwordRegex = reader.string();
          break;
        case 9:
          message.confirmationEmail = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureEmailLogin {
    return {
      tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => String(e)) : [],
      passwordMinLength: isSet(object.passwordMinLength) ? Number(object.passwordMinLength) : 0,
      rememberFor: isSet(object.rememberFor) ? Number(object.rememberFor) : 0,
      resetPasswordWithin: isSet(object.resetPasswordWithin) ? Number(object.resetPasswordWithin) : 0,
      maximumRetries: isSet(object.maximumRetries) ? Number(object.maximumRetries) : 0,
      unlockStrategy: isSet(object.unlockStrategy) ? featureEmailLoginUnlockStrategyFromJSON(object.unlockStrategy) : 0,
      unlockIn: isSet(object.unlockIn) ? Number(object.unlockIn) : 0,
      passwordRegex: isSet(object.passwordRegex) ? String(object.passwordRegex) : "",
      confirmationEmail: isSet(object.confirmationEmail) ? Boolean(object.confirmationEmail) : false,
    };
  },

  toJSON(message: FeatureEmailLogin): unknown {
    const obj: any = {};
    if (message.tables) {
      obj.tables = message.tables.map((e) => e);
    } else {
      obj.tables = [];
    }
    message.passwordMinLength !== undefined && (obj.passwordMinLength = Math.round(message.passwordMinLength));
    message.rememberFor !== undefined && (obj.rememberFor = Math.round(message.rememberFor));
    message.resetPasswordWithin !== undefined && (obj.resetPasswordWithin = Math.round(message.resetPasswordWithin));
    message.maximumRetries !== undefined && (obj.maximumRetries = Math.round(message.maximumRetries));
    message.unlockStrategy !== undefined &&
      (obj.unlockStrategy = featureEmailLoginUnlockStrategyToJSON(message.unlockStrategy));
    message.unlockIn !== undefined && (obj.unlockIn = Math.round(message.unlockIn));
    message.passwordRegex !== undefined && (obj.passwordRegex = message.passwordRegex);
    message.confirmationEmail !== undefined && (obj.confirmationEmail = message.confirmationEmail);
    return obj;
  },

  fromPartial(object: DeepPartial<FeatureEmailLogin>): FeatureEmailLogin {
    const message = createBaseFeatureEmailLogin();
    message.tables = object.tables?.map((e) => e) || [];
    message.passwordMinLength = object.passwordMinLength ?? 0;
    message.rememberFor = object.rememberFor ?? 0;
    message.resetPasswordWithin = object.resetPasswordWithin ?? 0;
    message.maximumRetries = object.maximumRetries ?? 0;
    message.unlockStrategy = object.unlockStrategy ?? 0;
    message.unlockIn = object.unlockIn ?? 0;
    message.passwordRegex = object.passwordRegex ?? "";
    message.confirmationEmail = object.confirmationEmail ?? false;
    return message;
  },
};

function createBaseFeatureJPBankData(): FeatureJPBankData {
  return {};
}

export const FeatureJPBankData = {
  encode(_: FeatureJPBankData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureJPBankData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureJPBankData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): FeatureJPBankData {
    return {};
  },

  toJSON(_: FeatureJPBankData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<FeatureJPBankData>): FeatureJPBankData {
    const message = createBaseFeatureJPBankData();
    return message;
  },
};

function createBaseFeatureBasicAuth(): FeatureBasicAuth {
  return { username: "", password: "" };
}

export const FeatureBasicAuth = {
  encode(message: FeatureBasicAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureBasicAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureBasicAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureBasicAuth {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: FeatureBasicAuth): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial(object: DeepPartial<FeatureBasicAuth>): FeatureBasicAuth {
    const message = createBaseFeatureBasicAuth();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseFeatureTwilioLogin(): FeatureTwilioLogin {
  return { userTables: [], serviceId: "", sid: "", token: "", otpLength: 0 };
}

export const FeatureTwilioLogin = {
  encode(message: FeatureTwilioLogin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userTables) {
      writer.uint32(10).string(v!);
    }
    if (message.serviceId !== "") {
      writer.uint32(18).string(message.serviceId);
    }
    if (message.sid !== "") {
      writer.uint32(26).string(message.sid);
    }
    if (message.token !== "") {
      writer.uint32(34).string(message.token);
    }
    if (message.otpLength !== 0) {
      writer.uint32(40).int32(message.otpLength);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureTwilioLogin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureTwilioLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userTables.push(reader.string());
          break;
        case 2:
          message.serviceId = reader.string();
          break;
        case 3:
          message.sid = reader.string();
          break;
        case 4:
          message.token = reader.string();
          break;
        case 5:
          message.otpLength = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureTwilioLogin {
    return {
      userTables: Array.isArray(object?.userTables) ? object.userTables.map((e: any) => String(e)) : [],
      serviceId: isSet(object.serviceId) ? String(object.serviceId) : "",
      sid: isSet(object.sid) ? String(object.sid) : "",
      token: isSet(object.token) ? String(object.token) : "",
      otpLength: isSet(object.otpLength) ? Number(object.otpLength) : 0,
    };
  },

  toJSON(message: FeatureTwilioLogin): unknown {
    const obj: any = {};
    if (message.userTables) {
      obj.userTables = message.userTables.map((e) => e);
    } else {
      obj.userTables = [];
    }
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.sid !== undefined && (obj.sid = message.sid);
    message.token !== undefined && (obj.token = message.token);
    message.otpLength !== undefined && (obj.otpLength = Math.round(message.otpLength));
    return obj;
  },

  fromPartial(object: DeepPartial<FeatureTwilioLogin>): FeatureTwilioLogin {
    const message = createBaseFeatureTwilioLogin();
    message.userTables = object.userTables?.map((e) => e) || [];
    message.serviceId = object.serviceId ?? "";
    message.sid = object.sid ?? "";
    message.token = object.token ?? "";
    message.otpLength = object.otpLength ?? 0;
    return message;
  },
};

function createBaseFeatureRollbar(): FeatureRollbar {
  return { accessToken: "" };
}

export const FeatureRollbar = {
  encode(message: FeatureRollbar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureRollbar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureRollbar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureRollbar {
    return { accessToken: isSet(object.accessToken) ? String(object.accessToken) : "" };
  },

  toJSON(message: FeatureRollbar): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    return obj;
  },

  fromPartial(object: DeepPartial<FeatureRollbar>): FeatureRollbar {
    const message = createBaseFeatureRollbar();
    message.accessToken = object.accessToken ?? "";
    return message;
  },
};

function createBaseFeatureDeepLink(): FeatureDeepLink {
  return {
    iosAppStoreId: "",
    iosBundleId: "",
    iosAppLink: "",
    androidPackageName: "",
    androidCertFingerprints: "",
    androidAppLink: "",
    firebaseDomain: "",
  };
}

export const FeatureDeepLink = {
  encode(message: FeatureDeepLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iosAppStoreId !== "") {
      writer.uint32(10).string(message.iosAppStoreId);
    }
    if (message.iosBundleId !== "") {
      writer.uint32(18).string(message.iosBundleId);
    }
    if (message.iosAppLink !== "") {
      writer.uint32(26).string(message.iosAppLink);
    }
    if (message.androidPackageName !== "") {
      writer.uint32(34).string(message.androidPackageName);
    }
    if (message.androidCertFingerprints !== "") {
      writer.uint32(42).string(message.androidCertFingerprints);
    }
    if (message.androidAppLink !== "") {
      writer.uint32(50).string(message.androidAppLink);
    }
    if (message.firebaseDomain !== "") {
      writer.uint32(58).string(message.firebaseDomain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureDeepLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureDeepLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iosAppStoreId = reader.string();
          break;
        case 2:
          message.iosBundleId = reader.string();
          break;
        case 3:
          message.iosAppLink = reader.string();
          break;
        case 4:
          message.androidPackageName = reader.string();
          break;
        case 5:
          message.androidCertFingerprints = reader.string();
          break;
        case 6:
          message.androidAppLink = reader.string();
          break;
        case 7:
          message.firebaseDomain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureDeepLink {
    return {
      iosAppStoreId: isSet(object.iosAppStoreId) ? String(object.iosAppStoreId) : "",
      iosBundleId: isSet(object.iosBundleId) ? String(object.iosBundleId) : "",
      iosAppLink: isSet(object.iosAppLink) ? String(object.iosAppLink) : "",
      androidPackageName: isSet(object.androidPackageName) ? String(object.androidPackageName) : "",
      androidCertFingerprints: isSet(object.androidCertFingerprints) ? String(object.androidCertFingerprints) : "",
      androidAppLink: isSet(object.androidAppLink) ? String(object.androidAppLink) : "",
      firebaseDomain: isSet(object.firebaseDomain) ? String(object.firebaseDomain) : "",
    };
  },

  toJSON(message: FeatureDeepLink): unknown {
    const obj: any = {};
    message.iosAppStoreId !== undefined && (obj.iosAppStoreId = message.iosAppStoreId);
    message.iosBundleId !== undefined && (obj.iosBundleId = message.iosBundleId);
    message.iosAppLink !== undefined && (obj.iosAppLink = message.iosAppLink);
    message.androidPackageName !== undefined && (obj.androidPackageName = message.androidPackageName);
    message.androidCertFingerprints !== undefined && (obj.androidCertFingerprints = message.androidCertFingerprints);
    message.androidAppLink !== undefined && (obj.androidAppLink = message.androidAppLink);
    message.firebaseDomain !== undefined && (obj.firebaseDomain = message.firebaseDomain);
    return obj;
  },

  fromPartial(object: DeepPartial<FeatureDeepLink>): FeatureDeepLink {
    const message = createBaseFeatureDeepLink();
    message.iosAppStoreId = object.iosAppStoreId ?? "";
    message.iosBundleId = object.iosBundleId ?? "";
    message.iosAppLink = object.iosAppLink ?? "";
    message.androidPackageName = object.androidPackageName ?? "";
    message.androidCertFingerprints = object.androidCertFingerprints ?? "";
    message.androidAppLink = object.androidAppLink ?? "";
    message.firebaseDomain = object.firebaseDomain ?? "";
    return message;
  },
};

function createBaseFeatureStripe(): FeatureStripe {
  return {
    subscriptionTables: [],
    userTables: [],
    publicKey: "",
    secretKey: "",
    stripeEndpointSecret: "",
    httpStripeSignature: "",
    addStripeSubscription: false,
    addChargeApi: false,
    addIntentApi: false,
  };
}

export const FeatureStripe = {
  encode(message: FeatureStripe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subscriptionTables) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.userTables) {
      writer.uint32(18).string(v!);
    }
    if (message.publicKey !== "") {
      writer.uint32(26).string(message.publicKey);
    }
    if (message.secretKey !== "") {
      writer.uint32(34).string(message.secretKey);
    }
    if (message.stripeEndpointSecret !== "") {
      writer.uint32(42).string(message.stripeEndpointSecret);
    }
    if (message.httpStripeSignature !== "") {
      writer.uint32(50).string(message.httpStripeSignature);
    }
    if (message.addStripeSubscription === true) {
      writer.uint32(56).bool(message.addStripeSubscription);
    }
    if (message.addChargeApi === true) {
      writer.uint32(64).bool(message.addChargeApi);
    }
    if (message.addIntentApi === true) {
      writer.uint32(72).bool(message.addIntentApi);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureStripe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureStripe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionTables.push(reader.string());
          break;
        case 2:
          message.userTables.push(reader.string());
          break;
        case 3:
          message.publicKey = reader.string();
          break;
        case 4:
          message.secretKey = reader.string();
          break;
        case 5:
          message.stripeEndpointSecret = reader.string();
          break;
        case 6:
          message.httpStripeSignature = reader.string();
          break;
        case 7:
          message.addStripeSubscription = reader.bool();
          break;
        case 8:
          message.addChargeApi = reader.bool();
          break;
        case 9:
          message.addIntentApi = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureStripe {
    return {
      subscriptionTables: Array.isArray(object?.subscriptionTables)
        ? object.subscriptionTables.map((e: any) => String(e))
        : [],
      userTables: Array.isArray(object?.userTables) ? object.userTables.map((e: any) => String(e)) : [],
      publicKey: isSet(object.publicKey) ? String(object.publicKey) : "",
      secretKey: isSet(object.secretKey) ? String(object.secretKey) : "",
      stripeEndpointSecret: isSet(object.stripeEndpointSecret) ? String(object.stripeEndpointSecret) : "",
      httpStripeSignature: isSet(object.httpStripeSignature) ? String(object.httpStripeSignature) : "",
      addStripeSubscription: isSet(object.addStripeSubscription) ? Boolean(object.addStripeSubscription) : false,
      addChargeApi: isSet(object.addChargeApi) ? Boolean(object.addChargeApi) : false,
      addIntentApi: isSet(object.addIntentApi) ? Boolean(object.addIntentApi) : false,
    };
  },

  toJSON(message: FeatureStripe): unknown {
    const obj: any = {};
    if (message.subscriptionTables) {
      obj.subscriptionTables = message.subscriptionTables.map((e) => e);
    } else {
      obj.subscriptionTables = [];
    }
    if (message.userTables) {
      obj.userTables = message.userTables.map((e) => e);
    } else {
      obj.userTables = [];
    }
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.secretKey !== undefined && (obj.secretKey = message.secretKey);
    message.stripeEndpointSecret !== undefined && (obj.stripeEndpointSecret = message.stripeEndpointSecret);
    message.httpStripeSignature !== undefined && (obj.httpStripeSignature = message.httpStripeSignature);
    message.addStripeSubscription !== undefined && (obj.addStripeSubscription = message.addStripeSubscription);
    message.addChargeApi !== undefined && (obj.addChargeApi = message.addChargeApi);
    message.addIntentApi !== undefined && (obj.addIntentApi = message.addIntentApi);
    return obj;
  },

  fromPartial(object: DeepPartial<FeatureStripe>): FeatureStripe {
    const message = createBaseFeatureStripe();
    message.subscriptionTables = object.subscriptionTables?.map((e) => e) || [];
    message.userTables = object.userTables?.map((e) => e) || [];
    message.publicKey = object.publicKey ?? "";
    message.secretKey = object.secretKey ?? "";
    message.stripeEndpointSecret = object.stripeEndpointSecret ?? "";
    message.httpStripeSignature = object.httpStripeSignature ?? "";
    message.addStripeSubscription = object.addStripeSubscription ?? false;
    message.addChargeApi = object.addChargeApi ?? false;
    message.addIntentApi = object.addIntentApi ?? false;
    return message;
  },
};

function createBaseFeatureLineLogin(): FeatureLineLogin {
  return { userTables: [], clientId: "", secretKey: "" };
}

export const FeatureLineLogin = {
  encode(message: FeatureLineLogin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userTables) {
      writer.uint32(10).string(v!);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.secretKey !== "") {
      writer.uint32(26).string(message.secretKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureLineLogin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureLineLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userTables.push(reader.string());
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.secretKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureLineLogin {
    return {
      userTables: Array.isArray(object?.userTables) ? object.userTables.map((e: any) => String(e)) : [],
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      secretKey: isSet(object.secretKey) ? String(object.secretKey) : "",
    };
  },

  toJSON(message: FeatureLineLogin): unknown {
    const obj: any = {};
    if (message.userTables) {
      obj.userTables = message.userTables.map((e) => e);
    } else {
      obj.userTables = [];
    }
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.secretKey !== undefined && (obj.secretKey = message.secretKey);
    return obj;
  },

  fromPartial(object: DeepPartial<FeatureLineLogin>): FeatureLineLogin {
    const message = createBaseFeatureLineLogin();
    message.userTables = object.userTables?.map((e) => e) || [];
    message.clientId = object.clientId ?? "";
    message.secretKey = object.secretKey ?? "";
    return message;
  },
};

function createBaseController(): Controller {
  return { name: "", endpoints: [] };
}

export const Controller = {
  encode(message: Controller, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.endpoints) {
      ControllerEndpoint.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Controller {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseController();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.endpoints.push(ControllerEndpoint.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Controller {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      endpoints: Array.isArray(object?.endpoints)
        ? object.endpoints.map((e: any) => ControllerEndpoint.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Controller): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map((e) => e ? ControllerEndpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Controller>): Controller {
    const message = createBaseController();
    message.name = object.name ?? "";
    message.endpoints = object.endpoints?.map((e) => ControllerEndpoint.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControllerEndpoint(): ControllerEndpoint {
  return { path: "", name: "", writable: false };
}

export const ControllerEndpoint = {
  encode(message: ControllerEndpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.table !== undefined) {
      writer.uint32(26).string(message.table);
    }
    if (message.feature !== undefined) {
      writer.uint32(32).int32(message.feature);
    }
    if (message.list !== undefined) {
      ControllerEndpointList.encode(message.list, writer.uint32(42).fork()).ldelim();
    }
    if (message.get !== undefined) {
      ControllerEndpointGet.encode(message.get, writer.uint32(50).fork()).ldelim();
    }
    if (message.create !== undefined) {
      ControllerEndpointCreate.encode(message.create, writer.uint32(58).fork()).ldelim();
    }
    if (message.update !== undefined) {
      ControllerEndpointUpdate.encode(message.update, writer.uint32(66).fork()).ldelim();
    }
    if (message.delete !== undefined) {
      ControllerEndpointDelete.encode(message.delete, writer.uint32(74).fork()).ldelim();
    }
    if (message.authentication !== undefined) {
      ControllerAuthentication.encode(message.authentication, writer.uint32(82).fork()).ldelim();
    }
    if (message.authorization !== undefined) {
      ControllerAuthorization.encode(message.authorization, writer.uint32(90).fork()).ldelim();
    }
    if (message.responses !== undefined) {
      ControllerResponse.encode(message.responses, writer.uint32(98).fork()).ldelim();
    }
    if (message.params !== undefined) {
      ControllerRequestContent.encode(message.params, writer.uint32(106).fork()).ldelim();
    }
    if (message.writable === true) {
      writer.uint32(112).bool(message.writable);
    }
    if (message.featureAction !== undefined) {
      writer.uint32(122).string(message.featureAction);
    }
    if (message.featureTable !== undefined) {
      writer.uint32(130).string(message.featureTable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerEndpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.table = reader.string();
          break;
        case 4:
          message.feature = reader.int32() as any;
          break;
        case 5:
          message.list = ControllerEndpointList.decode(reader, reader.uint32());
          break;
        case 6:
          message.get = ControllerEndpointGet.decode(reader, reader.uint32());
          break;
        case 7:
          message.create = ControllerEndpointCreate.decode(reader, reader.uint32());
          break;
        case 8:
          message.update = ControllerEndpointUpdate.decode(reader, reader.uint32());
          break;
        case 9:
          message.delete = ControllerEndpointDelete.decode(reader, reader.uint32());
          break;
        case 10:
          message.authentication = ControllerAuthentication.decode(reader, reader.uint32());
          break;
        case 11:
          message.authorization = ControllerAuthorization.decode(reader, reader.uint32());
          break;
        case 12:
          message.responses = ControllerResponse.decode(reader, reader.uint32());
          break;
        case 13:
          message.params = ControllerRequestContent.decode(reader, reader.uint32());
          break;
        case 14:
          message.writable = reader.bool();
          break;
        case 15:
          message.featureAction = reader.string();
          break;
        case 16:
          message.featureTable = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerEndpoint {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      name: isSet(object.name) ? String(object.name) : "",
      table: isSet(object.table) ? String(object.table) : undefined,
      feature: isSet(object.feature) ? featureFeatureNameFromJSON(object.feature) : undefined,
      list: isSet(object.list) ? ControllerEndpointList.fromJSON(object.list) : undefined,
      get: isSet(object.get) ? ControllerEndpointGet.fromJSON(object.get) : undefined,
      create: isSet(object.create) ? ControllerEndpointCreate.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? ControllerEndpointUpdate.fromJSON(object.update) : undefined,
      delete: isSet(object.delete) ? ControllerEndpointDelete.fromJSON(object.delete) : undefined,
      authentication: isSet(object.authentication)
        ? ControllerAuthentication.fromJSON(object.authentication)
        : undefined,
      authorization: isSet(object.authorization) ? ControllerAuthorization.fromJSON(object.authorization) : undefined,
      responses: isSet(object.responses) ? ControllerResponse.fromJSON(object.responses) : undefined,
      params: isSet(object.params) ? ControllerRequestContent.fromJSON(object.params) : undefined,
      writable: isSet(object.writable) ? Boolean(object.writable) : false,
      featureAction: isSet(object.featureAction) ? String(object.featureAction) : undefined,
      featureTable: isSet(object.featureTable) ? String(object.featureTable) : undefined,
    };
  },

  toJSON(message: ControllerEndpoint): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.name !== undefined && (obj.name = message.name);
    message.table !== undefined && (obj.table = message.table);
    message.feature !== undefined &&
      (obj.feature = message.feature !== undefined ? featureFeatureNameToJSON(message.feature) : undefined);
    message.list !== undefined && (obj.list = message.list ? ControllerEndpointList.toJSON(message.list) : undefined);
    message.get !== undefined && (obj.get = message.get ? ControllerEndpointGet.toJSON(message.get) : undefined);
    message.create !== undefined &&
      (obj.create = message.create ? ControllerEndpointCreate.toJSON(message.create) : undefined);
    message.update !== undefined &&
      (obj.update = message.update ? ControllerEndpointUpdate.toJSON(message.update) : undefined);
    message.delete !== undefined &&
      (obj.delete = message.delete ? ControllerEndpointDelete.toJSON(message.delete) : undefined);
    message.authentication !== undefined &&
      (obj.authentication = message.authentication
        ? ControllerAuthentication.toJSON(message.authentication)
        : undefined);
    message.authorization !== undefined &&
      (obj.authorization = message.authorization ? ControllerAuthorization.toJSON(message.authorization) : undefined);
    message.responses !== undefined &&
      (obj.responses = message.responses ? ControllerResponse.toJSON(message.responses) : undefined);
    message.params !== undefined &&
      (obj.params = message.params ? ControllerRequestContent.toJSON(message.params) : undefined);
    message.writable !== undefined && (obj.writable = message.writable);
    message.featureAction !== undefined && (obj.featureAction = message.featureAction);
    message.featureTable !== undefined && (obj.featureTable = message.featureTable);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerEndpoint>): ControllerEndpoint {
    const message = createBaseControllerEndpoint();
    message.path = object.path ?? "";
    message.name = object.name ?? "";
    message.table = object.table ?? undefined;
    message.feature = object.feature ?? undefined;
    message.list = (object.list !== undefined && object.list !== null)
      ? ControllerEndpointList.fromPartial(object.list)
      : undefined;
    message.get = (object.get !== undefined && object.get !== null)
      ? ControllerEndpointGet.fromPartial(object.get)
      : undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? ControllerEndpointCreate.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? ControllerEndpointUpdate.fromPartial(object.update)
      : undefined;
    message.delete = (object.delete !== undefined && object.delete !== null)
      ? ControllerEndpointDelete.fromPartial(object.delete)
      : undefined;
    message.authentication = (object.authentication !== undefined && object.authentication !== null)
      ? ControllerAuthentication.fromPartial(object.authentication)
      : undefined;
    message.authorization = (object.authorization !== undefined && object.authorization !== null)
      ? ControllerAuthorization.fromPartial(object.authorization)
      : undefined;
    message.responses = (object.responses !== undefined && object.responses !== null)
      ? ControllerResponse.fromPartial(object.responses)
      : undefined;
    message.params = (object.params !== undefined && object.params !== null)
      ? ControllerRequestContent.fromPartial(object.params)
      : undefined;
    message.writable = object.writable ?? false;
    message.featureAction = object.featureAction ?? undefined;
    message.featureTable = object.featureTable ?? undefined;
    return message;
  },
};

function createBaseControllerEndpointList(): ControllerEndpointList {
  return {};
}

export const ControllerEndpointList = {
  encode(message: ControllerEndpointList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queries !== undefined) {
      ControllerRequestContent.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ControllerResourceCondition.encode(message.conditions, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerEndpointList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries = ControllerRequestContent.decode(reader, reader.uint32());
          break;
        case 2:
          message.conditions = ControllerResourceCondition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerEndpointList {
    return {
      queries: isSet(object.queries) ? ControllerRequestContent.fromJSON(object.queries) : undefined,
      conditions: isSet(object.conditions) ? ControllerResourceCondition.fromJSON(object.conditions) : undefined,
    };
  },

  toJSON(message: ControllerEndpointList): unknown {
    const obj: any = {};
    message.queries !== undefined &&
      (obj.queries = message.queries ? ControllerRequestContent.toJSON(message.queries) : undefined);
    message.conditions !== undefined &&
      (obj.conditions = message.conditions ? ControllerResourceCondition.toJSON(message.conditions) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerEndpointList>): ControllerEndpointList {
    const message = createBaseControllerEndpointList();
    message.queries = (object.queries !== undefined && object.queries !== null)
      ? ControllerRequestContent.fromPartial(object.queries)
      : undefined;
    message.conditions = (object.conditions !== undefined && object.conditions !== null)
      ? ControllerResourceCondition.fromPartial(object.conditions)
      : undefined;
    return message;
  },
};

function createBaseControllerEndpointGet(): ControllerEndpointGet {
  return {};
}

export const ControllerEndpointGet = {
  encode(message: ControllerEndpointGet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queries !== undefined) {
      ControllerRequestContent.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ControllerResourceCondition.encode(message.conditions, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointGet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerEndpointGet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries = ControllerRequestContent.decode(reader, reader.uint32());
          break;
        case 2:
          message.conditions = ControllerResourceCondition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerEndpointGet {
    return {
      queries: isSet(object.queries) ? ControllerRequestContent.fromJSON(object.queries) : undefined,
      conditions: isSet(object.conditions) ? ControllerResourceCondition.fromJSON(object.conditions) : undefined,
    };
  },

  toJSON(message: ControllerEndpointGet): unknown {
    const obj: any = {};
    message.queries !== undefined &&
      (obj.queries = message.queries ? ControllerRequestContent.toJSON(message.queries) : undefined);
    message.conditions !== undefined &&
      (obj.conditions = message.conditions ? ControllerResourceCondition.toJSON(message.conditions) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerEndpointGet>): ControllerEndpointGet {
    const message = createBaseControllerEndpointGet();
    message.queries = (object.queries !== undefined && object.queries !== null)
      ? ControllerRequestContent.fromPartial(object.queries)
      : undefined;
    message.conditions = (object.conditions !== undefined && object.conditions !== null)
      ? ControllerResourceCondition.fromPartial(object.conditions)
      : undefined;
    return message;
  },
};

function createBaseControllerEndpointCreate(): ControllerEndpointCreate {
  return {};
}

export const ControllerEndpointCreate = {
  encode(message: ControllerEndpointCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body !== undefined) {
      ControllerRequestContent.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ControllerResourceCondition.encode(message.conditions, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      ControllerResourceUpdate.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerEndpointCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = ControllerRequestContent.decode(reader, reader.uint32());
          break;
        case 2:
          message.conditions = ControllerResourceCondition.decode(reader, reader.uint32());
          break;
        case 3:
          message.resources = ControllerResourceUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerEndpointCreate {
    return {
      body: isSet(object.body) ? ControllerRequestContent.fromJSON(object.body) : undefined,
      conditions: isSet(object.conditions) ? ControllerResourceCondition.fromJSON(object.conditions) : undefined,
      resources: isSet(object.resources) ? ControllerResourceUpdate.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: ControllerEndpointCreate): unknown {
    const obj: any = {};
    message.body !== undefined && (obj.body = message.body ? ControllerRequestContent.toJSON(message.body) : undefined);
    message.conditions !== undefined &&
      (obj.conditions = message.conditions ? ControllerResourceCondition.toJSON(message.conditions) : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources ? ControllerResourceUpdate.toJSON(message.resources) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerEndpointCreate>): ControllerEndpointCreate {
    const message = createBaseControllerEndpointCreate();
    message.body = (object.body !== undefined && object.body !== null)
      ? ControllerRequestContent.fromPartial(object.body)
      : undefined;
    message.conditions = (object.conditions !== undefined && object.conditions !== null)
      ? ControllerResourceCondition.fromPartial(object.conditions)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? ControllerResourceUpdate.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

function createBaseControllerEndpointUpdate(): ControllerEndpointUpdate {
  return {};
}

export const ControllerEndpointUpdate = {
  encode(message: ControllerEndpointUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body !== undefined) {
      ControllerRequestContent.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ControllerResourceCondition.encode(message.conditions, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      ControllerResourceUpdate.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerEndpointUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = ControllerRequestContent.decode(reader, reader.uint32());
          break;
        case 2:
          message.conditions = ControllerResourceCondition.decode(reader, reader.uint32());
          break;
        case 3:
          message.resources = ControllerResourceUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerEndpointUpdate {
    return {
      body: isSet(object.body) ? ControllerRequestContent.fromJSON(object.body) : undefined,
      conditions: isSet(object.conditions) ? ControllerResourceCondition.fromJSON(object.conditions) : undefined,
      resources: isSet(object.resources) ? ControllerResourceUpdate.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: ControllerEndpointUpdate): unknown {
    const obj: any = {};
    message.body !== undefined && (obj.body = message.body ? ControllerRequestContent.toJSON(message.body) : undefined);
    message.conditions !== undefined &&
      (obj.conditions = message.conditions ? ControllerResourceCondition.toJSON(message.conditions) : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources ? ControllerResourceUpdate.toJSON(message.resources) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerEndpointUpdate>): ControllerEndpointUpdate {
    const message = createBaseControllerEndpointUpdate();
    message.body = (object.body !== undefined && object.body !== null)
      ? ControllerRequestContent.fromPartial(object.body)
      : undefined;
    message.conditions = (object.conditions !== undefined && object.conditions !== null)
      ? ControllerResourceCondition.fromPartial(object.conditions)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? ControllerResourceUpdate.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

function createBaseControllerEndpointDelete(): ControllerEndpointDelete {
  return {};
}

export const ControllerEndpointDelete = {
  encode(message: ControllerEndpointDelete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body !== undefined) {
      ControllerRequestContent.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ControllerResourceCondition.encode(message.conditions, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointDelete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerEndpointDelete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = ControllerRequestContent.decode(reader, reader.uint32());
          break;
        case 2:
          message.conditions = ControllerResourceCondition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerEndpointDelete {
    return {
      body: isSet(object.body) ? ControllerRequestContent.fromJSON(object.body) : undefined,
      conditions: isSet(object.conditions) ? ControllerResourceCondition.fromJSON(object.conditions) : undefined,
    };
  },

  toJSON(message: ControllerEndpointDelete): unknown {
    const obj: any = {};
    message.body !== undefined && (obj.body = message.body ? ControllerRequestContent.toJSON(message.body) : undefined);
    message.conditions !== undefined &&
      (obj.conditions = message.conditions ? ControllerResourceCondition.toJSON(message.conditions) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerEndpointDelete>): ControllerEndpointDelete {
    const message = createBaseControllerEndpointDelete();
    message.body = (object.body !== undefined && object.body !== null)
      ? ControllerRequestContent.fromPartial(object.body)
      : undefined;
    message.conditions = (object.conditions !== undefined && object.conditions !== null)
      ? ControllerResourceCondition.fromPartial(object.conditions)
      : undefined;
    return message;
  },
};

function createBaseControllerRequestContent(): ControllerRequestContent {
  return { fields: [] };
}

export const ControllerRequestContent = {
  encode(message: ControllerRequestContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fields) {
      ControllerRequestContentField.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerRequestContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerRequestContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields.push(ControllerRequestContentField.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerRequestContent {
    return {
      fields: Array.isArray(object?.fields)
        ? object.fields.map((e: any) => ControllerRequestContentField.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ControllerRequestContent): unknown {
    const obj: any = {};
    if (message.fields) {
      obj.fields = message.fields.map((e) => e ? ControllerRequestContentField.toJSON(e) : undefined);
    } else {
      obj.fields = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerRequestContent>): ControllerRequestContent {
    const message = createBaseControllerRequestContent();
    message.fields = object.fields?.map((e) => ControllerRequestContentField.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControllerRequestContentField(): ControllerRequestContentField {
  return { name: "", children: [] };
}

export const ControllerRequestContentField = {
  encode(message: ControllerRequestContentField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.dataType !== undefined) {
      DataType.encode(message.dataType, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.children) {
      ControllerRequestContentField.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerRequestContentField {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerRequestContentField();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.dataType = DataType.decode(reader, reader.uint32());
          break;
        case 3:
          message.children.push(ControllerRequestContentField.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerRequestContentField {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      dataType: isSet(object.dataType) ? DataType.fromJSON(object.dataType) : undefined,
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => ControllerRequestContentField.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ControllerRequestContentField): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.dataType !== undefined && (obj.dataType = message.dataType ? DataType.toJSON(message.dataType) : undefined);
    if (message.children) {
      obj.children = message.children.map((e) => e ? ControllerRequestContentField.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerRequestContentField>): ControllerRequestContentField {
    const message = createBaseControllerRequestContentField();
    message.name = object.name ?? "";
    message.dataType = (object.dataType !== undefined && object.dataType !== null)
      ? DataType.fromPartial(object.dataType)
      : undefined;
    message.children = object.children?.map((e) => ControllerRequestContentField.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControllerResponse(): ControllerResponse {
  return { fields: [] };
}

export const ControllerResponse = {
  encode(message: ControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fields) {
      ControllerResponseField.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields.push(ControllerResponseField.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerResponse {
    return {
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => ControllerResponseField.fromJSON(e)) : [],
    };
  },

  toJSON(message: ControllerResponse): unknown {
    const obj: any = {};
    if (message.fields) {
      obj.fields = message.fields.map((e) => e ? ControllerResponseField.toJSON(e) : undefined);
    } else {
      obj.fields = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerResponse>): ControllerResponse {
    const message = createBaseControllerResponse();
    message.fields = object.fields?.map((e) => ControllerResponseField.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControllerResponseField(): ControllerResponseField {
  return { name: "", children: [], category: "" };
}

export const ControllerResponseField = {
  encode(message: ControllerResponseField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resource !== undefined) {
      writer.uint32(18).string(message.resource);
    }
    if (message.property !== undefined) {
      writer.uint32(26).string(message.property);
    }
    if (message.value !== undefined) {
      writer.uint32(34).string(message.value);
    }
    if (message.dataType !== undefined) {
      DataType.encode(message.dataType, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.children) {
      ControllerResponseField.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.category !== "") {
      writer.uint32(58).string(message.category);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResponseField {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerResponseField();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.resource = reader.string();
          break;
        case 3:
          message.property = reader.string();
          break;
        case 4:
          message.value = reader.string();
          break;
        case 5:
          message.dataType = DataType.decode(reader, reader.uint32());
          break;
        case 6:
          message.children.push(ControllerResponseField.decode(reader, reader.uint32()));
          break;
        case 7:
          message.category = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerResponseField {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      resource: isSet(object.resource) ? String(object.resource) : undefined,
      property: isSet(object.property) ? String(object.property) : undefined,
      value: isSet(object.value) ? String(object.value) : undefined,
      dataType: isSet(object.dataType) ? DataType.fromJSON(object.dataType) : undefined,
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => ControllerResponseField.fromJSON(e))
        : [],
      category: isSet(object.category) ? String(object.category) : "",
    };
  },

  toJSON(message: ControllerResponseField): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.resource !== undefined && (obj.resource = message.resource);
    message.property !== undefined && (obj.property = message.property);
    message.value !== undefined && (obj.value = message.value);
    message.dataType !== undefined && (obj.dataType = message.dataType ? DataType.toJSON(message.dataType) : undefined);
    if (message.children) {
      obj.children = message.children.map((e) => e ? ControllerResponseField.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    message.category !== undefined && (obj.category = message.category);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerResponseField>): ControllerResponseField {
    const message = createBaseControllerResponseField();
    message.name = object.name ?? "";
    message.resource = object.resource ?? undefined;
    message.property = object.property ?? undefined;
    message.value = object.value ?? undefined;
    message.dataType = (object.dataType !== undefined && object.dataType !== null)
      ? DataType.fromPartial(object.dataType)
      : undefined;
    message.children = object.children?.map((e) => ControllerResponseField.fromPartial(e)) || [];
    message.category = object.category ?? "";
    return message;
  },
};

function createBaseControllerResourceCondition(): ControllerResourceCondition {
  return { operands: [], operators: [] };
}

export const ControllerResourceCondition = {
  encode(message: ControllerResourceCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operands) {
      ControllerResourceConditionOperand.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.operators) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceCondition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerResourceCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operands.push(ControllerResourceConditionOperand.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.operators.push(reader.int32() as any);
            }
          } else {
            message.operators.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerResourceCondition {
    return {
      operands: Array.isArray(object?.operands)
        ? object.operands.map((e: any) => ControllerResourceConditionOperand.fromJSON(e))
        : [],
      operators: Array.isArray(object?.operators) ? object.operators.map((e: any) => operatorFromJSON(e)) : [],
    };
  },

  toJSON(message: ControllerResourceCondition): unknown {
    const obj: any = {};
    if (message.operands) {
      obj.operands = message.operands.map((e) => e ? ControllerResourceConditionOperand.toJSON(e) : undefined);
    } else {
      obj.operands = [];
    }
    if (message.operators) {
      obj.operators = message.operators.map((e) => operatorToJSON(e));
    } else {
      obj.operators = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerResourceCondition>): ControllerResourceCondition {
    const message = createBaseControllerResourceCondition();
    message.operands = object.operands?.map((e) => ControllerResourceConditionOperand.fromPartial(e)) || [];
    message.operators = object.operators?.map((e) => e) || [];
    return message;
  },
};

function createBaseControllerResourceConditionOperand(): ControllerResourceConditionOperand {
  return {};
}

export const ControllerResourceConditionOperand = {
  encode(message: ControllerResourceConditionOperand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expr !== undefined) {
      ControllerResourceConditionExpr.encode(message.expr, writer.uint32(10).fork()).ldelim();
    }
    if (message.condition !== undefined) {
      ControllerResourceCondition.encode(message.condition, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceConditionOperand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerResourceConditionOperand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expr = ControllerResourceConditionExpr.decode(reader, reader.uint32());
          break;
        case 2:
          message.condition = ControllerResourceCondition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerResourceConditionOperand {
    return {
      expr: isSet(object.expr) ? ControllerResourceConditionExpr.fromJSON(object.expr) : undefined,
      condition: isSet(object.condition) ? ControllerResourceCondition.fromJSON(object.condition) : undefined,
    };
  },

  toJSON(message: ControllerResourceConditionOperand): unknown {
    const obj: any = {};
    message.expr !== undefined &&
      (obj.expr = message.expr ? ControllerResourceConditionExpr.toJSON(message.expr) : undefined);
    message.condition !== undefined &&
      (obj.condition = message.condition ? ControllerResourceCondition.toJSON(message.condition) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerResourceConditionOperand>): ControllerResourceConditionOperand {
    const message = createBaseControllerResourceConditionOperand();
    message.expr = (object.expr !== undefined && object.expr !== null)
      ? ControllerResourceConditionExpr.fromPartial(object.expr)
      : undefined;
    message.condition = (object.condition !== undefined && object.condition !== null)
      ? ControllerResourceCondition.fromPartial(object.condition)
      : undefined;
    return message;
  },
};

function createBaseControllerResourceConditionExpr(): ControllerResourceConditionExpr {
  return { paths: [], operator: 0 };
}

export const ControllerResourceConditionExpr = {
  encode(message: ControllerResourceConditionExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paths) {
      writer.uint32(10).string(v!);
    }
    if (message.query !== undefined) {
      writer.uint32(18).string(message.query);
    }
    if (message.params !== undefined) {
      writer.uint32(26).string(message.params);
    }
    if (message.body !== undefined) {
      writer.uint32(34).string(message.body);
    }
    if (message.value !== undefined) {
      writer.uint32(42).string(message.value);
    }
    if (message.system !== undefined) {
      writer.uint32(56).int32(message.system);
    }
    if (message.dataType !== undefined) {
      DataType.encode(message.dataType, writer.uint32(66).fork()).ldelim();
    }
    if (message.operator !== 0) {
      writer.uint32(72).int32(message.operator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceConditionExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerResourceConditionExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
          break;
        case 2:
          message.query = reader.string();
          break;
        case 3:
          message.params = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.value = reader.string();
          break;
        case 7:
          message.system = reader.int32() as any;
          break;
        case 8:
          message.dataType = DataType.decode(reader, reader.uint32());
          break;
        case 9:
          message.operator = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerResourceConditionExpr {
    return {
      paths: Array.isArray(object?.paths) ? object.paths.map((e: any) => String(e)) : [],
      query: isSet(object.query) ? String(object.query) : undefined,
      params: isSet(object.params) ? String(object.params) : undefined,
      body: isSet(object.body) ? String(object.body) : undefined,
      value: isSet(object.value) ? String(object.value) : undefined,
      system: isSet(object.system) ? controllerResourceConditionSystemFromJSON(object.system) : undefined,
      dataType: isSet(object.dataType) ? DataType.fromJSON(object.dataType) : undefined,
      operator: isSet(object.operator) ? operatorFromJSON(object.operator) : 0,
    };
  },

  toJSON(message: ControllerResourceConditionExpr): unknown {
    const obj: any = {};
    if (message.paths) {
      obj.paths = message.paths.map((e) => e);
    } else {
      obj.paths = [];
    }
    message.query !== undefined && (obj.query = message.query);
    message.params !== undefined && (obj.params = message.params);
    message.body !== undefined && (obj.body = message.body);
    message.value !== undefined && (obj.value = message.value);
    message.system !== undefined &&
      (obj.system = message.system !== undefined ? controllerResourceConditionSystemToJSON(message.system) : undefined);
    message.dataType !== undefined && (obj.dataType = message.dataType ? DataType.toJSON(message.dataType) : undefined);
    message.operator !== undefined && (obj.operator = operatorToJSON(message.operator));
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerResourceConditionExpr>): ControllerResourceConditionExpr {
    const message = createBaseControllerResourceConditionExpr();
    message.paths = object.paths?.map((e) => e) || [];
    message.query = object.query ?? undefined;
    message.params = object.params ?? undefined;
    message.body = object.body ?? undefined;
    message.value = object.value ?? undefined;
    message.system = object.system ?? undefined;
    message.dataType = (object.dataType !== undefined && object.dataType !== null)
      ? DataType.fromPartial(object.dataType)
      : undefined;
    message.operator = object.operator ?? 0;
    return message;
  },
};

function createBaseControllerResourceUpdate(): ControllerResourceUpdate {
  return { fields: [] };
}

export const ControllerResourceUpdate = {
  encode(message: ControllerResourceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fields) {
      ControllerResourceUpdateField.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerResourceUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields.push(ControllerResourceUpdateField.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerResourceUpdate {
    return {
      fields: Array.isArray(object?.fields)
        ? object.fields.map((e: any) => ControllerResourceUpdateField.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ControllerResourceUpdate): unknown {
    const obj: any = {};
    if (message.fields) {
      obj.fields = message.fields.map((e) => e ? ControllerResourceUpdateField.toJSON(e) : undefined);
    } else {
      obj.fields = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerResourceUpdate>): ControllerResourceUpdate {
    const message = createBaseControllerResourceUpdate();
    message.fields = object.fields?.map((e) => ControllerResourceUpdateField.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControllerResourceUpdateField(): ControllerResourceUpdateField {
  return { name: "", children: [] };
}

export const ControllerResourceUpdateField = {
  encode(message: ControllerResourceUpdateField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.query !== undefined) {
      writer.uint32(18).string(message.query);
    }
    if (message.params !== undefined) {
      writer.uint32(26).string(message.params);
    }
    if (message.body !== undefined) {
      writer.uint32(34).string(message.body);
    }
    if (message.value !== undefined) {
      writer.uint32(42).string(message.value);
    }
    if (message.dataType !== undefined) {
      DataType.encode(message.dataType, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.children) {
      ControllerResourceUpdateField.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceUpdateField {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerResourceUpdateField();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.query = reader.string();
          break;
        case 3:
          message.params = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.value = reader.string();
          break;
        case 6:
          message.dataType = DataType.decode(reader, reader.uint32());
          break;
        case 7:
          message.children.push(ControllerResourceUpdateField.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerResourceUpdateField {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      query: isSet(object.query) ? String(object.query) : undefined,
      params: isSet(object.params) ? String(object.params) : undefined,
      body: isSet(object.body) ? String(object.body) : undefined,
      value: isSet(object.value) ? String(object.value) : undefined,
      dataType: isSet(object.dataType) ? DataType.fromJSON(object.dataType) : undefined,
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => ControllerResourceUpdateField.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ControllerResourceUpdateField): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.query !== undefined && (obj.query = message.query);
    message.params !== undefined && (obj.params = message.params);
    message.body !== undefined && (obj.body = message.body);
    message.value !== undefined && (obj.value = message.value);
    message.dataType !== undefined && (obj.dataType = message.dataType ? DataType.toJSON(message.dataType) : undefined);
    if (message.children) {
      obj.children = message.children.map((e) => e ? ControllerResourceUpdateField.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerResourceUpdateField>): ControllerResourceUpdateField {
    const message = createBaseControllerResourceUpdateField();
    message.name = object.name ?? "";
    message.query = object.query ?? undefined;
    message.params = object.params ?? undefined;
    message.body = object.body ?? undefined;
    message.value = object.value ?? undefined;
    message.dataType = (object.dataType !== undefined && object.dataType !== null)
      ? DataType.fromPartial(object.dataType)
      : undefined;
    message.children = object.children?.map((e) => ControllerResourceUpdateField.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControllerAuthentication(): ControllerAuthentication {
  return { tableName: "" };
}

export const ControllerAuthentication = {
  encode(message: ControllerAuthentication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerAuthentication {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerAuthentication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tableName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerAuthentication {
    return { tableName: isSet(object.tableName) ? String(object.tableName) : "" };
  },

  toJSON(message: ControllerAuthentication): unknown {
    const obj: any = {};
    message.tableName !== undefined && (obj.tableName = message.tableName);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerAuthentication>): ControllerAuthentication {
    const message = createBaseControllerAuthentication();
    message.tableName = object.tableName ?? "";
    return message;
  },
};

function createBaseControllerAuthorization(): ControllerAuthorization {
  return { authorizationId: 0, tableName: "" };
}

export const ControllerAuthorization = {
  encode(message: ControllerAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorizationId !== 0) {
      writer.uint32(8).int32(message.authorizationId);
    }
    if (message.tableName !== "") {
      writer.uint32(18).string(message.tableName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorizationId = reader.int32();
          break;
        case 2:
          message.tableName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerAuthorization {
    return {
      authorizationId: isSet(object.authorizationId) ? Number(object.authorizationId) : 0,
      tableName: isSet(object.tableName) ? String(object.tableName) : "",
    };
  },

  toJSON(message: ControllerAuthorization): unknown {
    const obj: any = {};
    message.authorizationId !== undefined && (obj.authorizationId = Math.round(message.authorizationId));
    message.tableName !== undefined && (obj.tableName = message.tableName);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerAuthorization>): ControllerAuthorization {
    const message = createBaseControllerAuthorization();
    message.authorizationId = object.authorizationId ?? 0;
    message.tableName = object.tableName ?? "";
    return message;
  },
};

function createBaseTable(): Table {
  return { name: "", columns: [], relations: [], indexes: [] };
}

export const Table = {
  encode(message: Table, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.columns) {
      TableColumn.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.relations) {
      TableRelation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.indexes) {
      TableIndex.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Table {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.columns.push(TableColumn.decode(reader, reader.uint32()));
          break;
        case 3:
          message.relations.push(TableRelation.decode(reader, reader.uint32()));
          break;
        case 4:
          message.indexes.push(TableIndex.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Table {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      columns: Array.isArray(object?.columns) ? object.columns.map((e: any) => TableColumn.fromJSON(e)) : [],
      relations: Array.isArray(object?.relations) ? object.relations.map((e: any) => TableRelation.fromJSON(e)) : [],
      indexes: Array.isArray(object?.indexes) ? object.indexes.map((e: any) => TableIndex.fromJSON(e)) : [],
    };
  },

  toJSON(message: Table): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.columns) {
      obj.columns = message.columns.map((e) => e ? TableColumn.toJSON(e) : undefined);
    } else {
      obj.columns = [];
    }
    if (message.relations) {
      obj.relations = message.relations.map((e) => e ? TableRelation.toJSON(e) : undefined);
    } else {
      obj.relations = [];
    }
    if (message.indexes) {
      obj.indexes = message.indexes.map((e) => e ? TableIndex.toJSON(e) : undefined);
    } else {
      obj.indexes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Table>): Table {
    const message = createBaseTable();
    message.name = object.name ?? "";
    message.columns = object.columns?.map((e) => TableColumn.fromPartial(e)) || [];
    message.relations = object.relations?.map((e) => TableRelation.fromPartial(e)) || [];
    message.indexes = object.indexes?.map((e) => TableIndex.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTableColumn(): TableColumn {
  return { name: "", constraints: [] };
}

export const TableColumn = {
  encode(message: TableColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== undefined) {
      TableColumnColumnType.encode(message.type, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.constraints) {
      TableConstraint.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.hidden !== undefined) {
      writer.uint32(32).bool(message.hidden);
    }
    if (message.columnValidation !== undefined) {
      TableColumnValidation.encode(message.columnValidation, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = TableColumnColumnType.decode(reader, reader.uint32());
          break;
        case 3:
          message.constraints.push(TableConstraint.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hidden = reader.bool();
          break;
        case 5:
          message.columnValidation = TableColumnValidation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumn {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? TableColumnColumnType.fromJSON(object.type) : undefined,
      constraints: Array.isArray(object?.constraints)
        ? object.constraints.map((e: any) => TableConstraint.fromJSON(e))
        : [],
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : undefined,
      columnValidation: isSet(object.columnValidation)
        ? TableColumnValidation.fromJSON(object.columnValidation)
        : undefined,
    };
  },

  toJSON(message: TableColumn): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type ? TableColumnColumnType.toJSON(message.type) : undefined);
    if (message.constraints) {
      obj.constraints = message.constraints.map((e) => e ? TableConstraint.toJSON(e) : undefined);
    } else {
      obj.constraints = [];
    }
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.columnValidation !== undefined && (obj.columnValidation = message.columnValidation
      ? TableColumnValidation.toJSON(message.columnValidation)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumn>): TableColumn {
    const message = createBaseTableColumn();
    message.name = object.name ?? "";
    message.type = (object.type !== undefined && object.type !== null)
      ? TableColumnColumnType.fromPartial(object.type)
      : undefined;
    message.constraints = object.constraints?.map((e) => TableConstraint.fromPartial(e)) || [];
    message.hidden = object.hidden ?? undefined;
    message.columnValidation = (object.columnValidation !== undefined && object.columnValidation !== null)
      ? TableColumnValidation.fromPartial(object.columnValidation)
      : undefined;
    return message;
  },
};

function createBaseTableColumnColumnType(): TableColumnColumnType {
  return {};
}

export const TableColumnColumnType = {
  encode(message: TableColumnColumnType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.integerType !== undefined) {
      TableColumnIntegerType.encode(message.integerType, writer.uint32(10).fork()).ldelim();
    }
    if (message.stringType !== undefined) {
      TableColumnStringType.encode(message.stringType, writer.uint32(18).fork()).ldelim();
    }
    if (message.floatType !== undefined) {
      TableColumnFloatType.encode(message.floatType, writer.uint32(26).fork()).ldelim();
    }
    if (message.booleanType !== undefined) {
      TableColumnBooleanType.encode(message.booleanType, writer.uint32(34).fork()).ldelim();
    }
    if (message.dateType !== undefined) {
      TableColumnDateType.encode(message.dateType, writer.uint32(42).fork()).ldelim();
    }
    if (message.fileType !== undefined) {
      TableColumnFileType.encode(message.fileType, writer.uint32(50).fork()).ldelim();
    }
    if (message.enumType !== undefined) {
      TableColumnEnumType.encode(message.enumType, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnColumnType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnColumnType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.integerType = TableColumnIntegerType.decode(reader, reader.uint32());
          break;
        case 2:
          message.stringType = TableColumnStringType.decode(reader, reader.uint32());
          break;
        case 3:
          message.floatType = TableColumnFloatType.decode(reader, reader.uint32());
          break;
        case 4:
          message.booleanType = TableColumnBooleanType.decode(reader, reader.uint32());
          break;
        case 5:
          message.dateType = TableColumnDateType.decode(reader, reader.uint32());
          break;
        case 6:
          message.fileType = TableColumnFileType.decode(reader, reader.uint32());
          break;
        case 7:
          message.enumType = TableColumnEnumType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnColumnType {
    return {
      integerType: isSet(object.integerType) ? TableColumnIntegerType.fromJSON(object.integerType) : undefined,
      stringType: isSet(object.stringType) ? TableColumnStringType.fromJSON(object.stringType) : undefined,
      floatType: isSet(object.floatType) ? TableColumnFloatType.fromJSON(object.floatType) : undefined,
      booleanType: isSet(object.booleanType) ? TableColumnBooleanType.fromJSON(object.booleanType) : undefined,
      dateType: isSet(object.dateType) ? TableColumnDateType.fromJSON(object.dateType) : undefined,
      fileType: isSet(object.fileType) ? TableColumnFileType.fromJSON(object.fileType) : undefined,
      enumType: isSet(object.enumType) ? TableColumnEnumType.fromJSON(object.enumType) : undefined,
    };
  },

  toJSON(message: TableColumnColumnType): unknown {
    const obj: any = {};
    message.integerType !== undefined &&
      (obj.integerType = message.integerType ? TableColumnIntegerType.toJSON(message.integerType) : undefined);
    message.stringType !== undefined &&
      (obj.stringType = message.stringType ? TableColumnStringType.toJSON(message.stringType) : undefined);
    message.floatType !== undefined &&
      (obj.floatType = message.floatType ? TableColumnFloatType.toJSON(message.floatType) : undefined);
    message.booleanType !== undefined &&
      (obj.booleanType = message.booleanType ? TableColumnBooleanType.toJSON(message.booleanType) : undefined);
    message.dateType !== undefined &&
      (obj.dateType = message.dateType ? TableColumnDateType.toJSON(message.dateType) : undefined);
    message.fileType !== undefined &&
      (obj.fileType = message.fileType ? TableColumnFileType.toJSON(message.fileType) : undefined);
    message.enumType !== undefined &&
      (obj.enumType = message.enumType ? TableColumnEnumType.toJSON(message.enumType) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnColumnType>): TableColumnColumnType {
    const message = createBaseTableColumnColumnType();
    message.integerType = (object.integerType !== undefined && object.integerType !== null)
      ? TableColumnIntegerType.fromPartial(object.integerType)
      : undefined;
    message.stringType = (object.stringType !== undefined && object.stringType !== null)
      ? TableColumnStringType.fromPartial(object.stringType)
      : undefined;
    message.floatType = (object.floatType !== undefined && object.floatType !== null)
      ? TableColumnFloatType.fromPartial(object.floatType)
      : undefined;
    message.booleanType = (object.booleanType !== undefined && object.booleanType !== null)
      ? TableColumnBooleanType.fromPartial(object.booleanType)
      : undefined;
    message.dateType = (object.dateType !== undefined && object.dateType !== null)
      ? TableColumnDateType.fromPartial(object.dateType)
      : undefined;
    message.fileType = (object.fileType !== undefined && object.fileType !== null)
      ? TableColumnFileType.fromPartial(object.fileType)
      : undefined;
    message.enumType = (object.enumType !== undefined && object.enumType !== null)
      ? TableColumnEnumType.fromPartial(object.enumType)
      : undefined;
    return message;
  },
};

function createBaseTableColumnStringType(): TableColumnStringType {
  return { isText: false, formats: [], conditions: [] };
}

export const TableColumnStringType = {
  encode(message: TableColumnStringType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultValue !== undefined) {
      writer.uint32(10).string(message.defaultValue);
    }
    if (message.isText === true) {
      writer.uint32(16).bool(message.isText);
    }
    writer.uint32(26).fork();
    for (const v of message.formats) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.conditions) {
      TableColumnStringTypeCondition.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnStringType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnStringType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultValue = reader.string();
          break;
        case 2:
          message.isText = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.formats.push(reader.int32() as any);
            }
          } else {
            message.formats.push(reader.int32() as any);
          }
          break;
        case 4:
          message.conditions.push(TableColumnStringTypeCondition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnStringType {
    return {
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : undefined,
      isText: isSet(object.isText) ? Boolean(object.isText) : false,
      formats: Array.isArray(object?.formats)
        ? object.formats.map((e: any) => tableColumnStringTypeFormatFromJSON(e))
        : [],
      conditions: Array.isArray(object?.conditions)
        ? object.conditions.map((e: any) => TableColumnStringTypeCondition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TableColumnStringType): unknown {
    const obj: any = {};
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.isText !== undefined && (obj.isText = message.isText);
    if (message.formats) {
      obj.formats = message.formats.map((e) => tableColumnStringTypeFormatToJSON(e));
    } else {
      obj.formats = [];
    }
    if (message.conditions) {
      obj.conditions = message.conditions.map((e) => e ? TableColumnStringTypeCondition.toJSON(e) : undefined);
    } else {
      obj.conditions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnStringType>): TableColumnStringType {
    const message = createBaseTableColumnStringType();
    message.defaultValue = object.defaultValue ?? undefined;
    message.isText = object.isText ?? false;
    message.formats = object.formats?.map((e) => e) || [];
    message.conditions = object.conditions?.map((e) => TableColumnStringTypeCondition.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTableColumnStringTypeCondition(): TableColumnStringTypeCondition {
  return { operator: 0 };
}

export const TableColumnStringTypeCondition = {
  encode(message: TableColumnStringTypeCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== 0) {
      writer.uint32(8).int32(message.operator);
    }
    if (message.value !== undefined) {
      writer.uint32(16).int32(message.value);
    }
    if (message.columnName !== undefined) {
      writer.uint32(26).string(message.columnName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnStringTypeCondition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnStringTypeCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.int32() as any;
          break;
        case 2:
          message.value = reader.int32();
          break;
        case 3:
          message.columnName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnStringTypeCondition {
    return {
      operator: isSet(object.operator) ? tableColumnOperatorFromJSON(object.operator) : 0,
      value: isSet(object.value) ? Number(object.value) : undefined,
      columnName: isSet(object.columnName) ? String(object.columnName) : undefined,
    };
  },

  toJSON(message: TableColumnStringTypeCondition): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = tableColumnOperatorToJSON(message.operator));
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.columnName !== undefined && (obj.columnName = message.columnName);
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnStringTypeCondition>): TableColumnStringTypeCondition {
    const message = createBaseTableColumnStringTypeCondition();
    message.operator = object.operator ?? 0;
    message.value = object.value ?? undefined;
    message.columnName = object.columnName ?? undefined;
    return message;
  },
};

function createBaseTableColumnIntegerType(): TableColumnIntegerType {
  return { conditions: [] };
}

export const TableColumnIntegerType = {
  encode(message: TableColumnIntegerType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultValue !== undefined) {
      writer.uint32(8).int32(message.defaultValue);
    }
    for (const v of message.conditions) {
      TableColumnIntegerTypeCondition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnIntegerType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnIntegerType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultValue = reader.int32();
          break;
        case 2:
          message.conditions.push(TableColumnIntegerTypeCondition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnIntegerType {
    return {
      defaultValue: isSet(object.defaultValue) ? Number(object.defaultValue) : undefined,
      conditions: Array.isArray(object?.conditions)
        ? object.conditions.map((e: any) => TableColumnIntegerTypeCondition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TableColumnIntegerType): unknown {
    const obj: any = {};
    message.defaultValue !== undefined && (obj.defaultValue = Math.round(message.defaultValue));
    if (message.conditions) {
      obj.conditions = message.conditions.map((e) => e ? TableColumnIntegerTypeCondition.toJSON(e) : undefined);
    } else {
      obj.conditions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnIntegerType>): TableColumnIntegerType {
    const message = createBaseTableColumnIntegerType();
    message.defaultValue = object.defaultValue ?? undefined;
    message.conditions = object.conditions?.map((e) => TableColumnIntegerTypeCondition.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTableColumnIntegerTypeCondition(): TableColumnIntegerTypeCondition {
  return { operator: 0 };
}

export const TableColumnIntegerTypeCondition = {
  encode(message: TableColumnIntegerTypeCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== 0) {
      writer.uint32(8).int32(message.operator);
    }
    if (message.value !== undefined) {
      writer.uint32(16).int32(message.value);
    }
    if (message.columnName !== undefined) {
      writer.uint32(26).string(message.columnName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnIntegerTypeCondition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnIntegerTypeCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.int32() as any;
          break;
        case 2:
          message.value = reader.int32();
          break;
        case 3:
          message.columnName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnIntegerTypeCondition {
    return {
      operator: isSet(object.operator) ? tableColumnOperatorFromJSON(object.operator) : 0,
      value: isSet(object.value) ? Number(object.value) : undefined,
      columnName: isSet(object.columnName) ? String(object.columnName) : undefined,
    };
  },

  toJSON(message: TableColumnIntegerTypeCondition): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = tableColumnOperatorToJSON(message.operator));
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.columnName !== undefined && (obj.columnName = message.columnName);
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnIntegerTypeCondition>): TableColumnIntegerTypeCondition {
    const message = createBaseTableColumnIntegerTypeCondition();
    message.operator = object.operator ?? 0;
    message.value = object.value ?? undefined;
    message.columnName = object.columnName ?? undefined;
    return message;
  },
};

function createBaseTableColumnFloatType(): TableColumnFloatType {
  return { conditions: [] };
}

export const TableColumnFloatType = {
  encode(message: TableColumnFloatType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultValue !== undefined) {
      writer.uint32(13).float(message.defaultValue);
    }
    for (const v of message.conditions) {
      TableColumnFloatTypeCondition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnFloatType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnFloatType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultValue = reader.float();
          break;
        case 2:
          message.conditions.push(TableColumnFloatTypeCondition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnFloatType {
    return {
      defaultValue: isSet(object.defaultValue) ? Number(object.defaultValue) : undefined,
      conditions: Array.isArray(object?.conditions)
        ? object.conditions.map((e: any) => TableColumnFloatTypeCondition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TableColumnFloatType): unknown {
    const obj: any = {};
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    if (message.conditions) {
      obj.conditions = message.conditions.map((e) => e ? TableColumnFloatTypeCondition.toJSON(e) : undefined);
    } else {
      obj.conditions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnFloatType>): TableColumnFloatType {
    const message = createBaseTableColumnFloatType();
    message.defaultValue = object.defaultValue ?? undefined;
    message.conditions = object.conditions?.map((e) => TableColumnFloatTypeCondition.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTableColumnFloatTypeCondition(): TableColumnFloatTypeCondition {
  return { operator: 0 };
}

export const TableColumnFloatTypeCondition = {
  encode(message: TableColumnFloatTypeCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== 0) {
      writer.uint32(8).int32(message.operator);
    }
    if (message.value !== undefined) {
      writer.uint32(21).float(message.value);
    }
    if (message.columnName !== undefined) {
      writer.uint32(26).string(message.columnName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnFloatTypeCondition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnFloatTypeCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.int32() as any;
          break;
        case 2:
          message.value = reader.float();
          break;
        case 3:
          message.columnName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnFloatTypeCondition {
    return {
      operator: isSet(object.operator) ? tableColumnOperatorFromJSON(object.operator) : 0,
      value: isSet(object.value) ? Number(object.value) : undefined,
      columnName: isSet(object.columnName) ? String(object.columnName) : undefined,
    };
  },

  toJSON(message: TableColumnFloatTypeCondition): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = tableColumnOperatorToJSON(message.operator));
    message.value !== undefined && (obj.value = message.value);
    message.columnName !== undefined && (obj.columnName = message.columnName);
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnFloatTypeCondition>): TableColumnFloatTypeCondition {
    const message = createBaseTableColumnFloatTypeCondition();
    message.operator = object.operator ?? 0;
    message.value = object.value ?? undefined;
    message.columnName = object.columnName ?? undefined;
    return message;
  },
};

function createBaseTableColumnBooleanType(): TableColumnBooleanType {
  return { defaultValue: false };
}

export const TableColumnBooleanType = {
  encode(message: TableColumnBooleanType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultValue === true) {
      writer.uint32(8).bool(message.defaultValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnBooleanType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnBooleanType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultValue = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnBooleanType {
    return { defaultValue: isSet(object.defaultValue) ? Boolean(object.defaultValue) : false };
  },

  toJSON(message: TableColumnBooleanType): unknown {
    const obj: any = {};
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnBooleanType>): TableColumnBooleanType {
    const message = createBaseTableColumnBooleanType();
    message.defaultValue = object.defaultValue ?? false;
    return message;
  },
};

function createBaseTableColumnDateType(): TableColumnDateType {
  return { withTime: false, conditions: [] };
}

export const TableColumnDateType = {
  encode(message: TableColumnDateType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withTime === true) {
      writer.uint32(8).bool(message.withTime);
    }
    writer.uint32(18).fork();
    for (const v of message.conditions) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnDateType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnDateType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withTime = reader.bool();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.conditions.push(reader.int32() as any);
            }
          } else {
            message.conditions.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnDateType {
    return {
      withTime: isSet(object.withTime) ? Boolean(object.withTime) : false,
      conditions: Array.isArray(object?.conditions)
        ? object.conditions.map((e: any) => tableColumnDateTypeConditionFromJSON(e))
        : [],
    };
  },

  toJSON(message: TableColumnDateType): unknown {
    const obj: any = {};
    message.withTime !== undefined && (obj.withTime = message.withTime);
    if (message.conditions) {
      obj.conditions = message.conditions.map((e) => tableColumnDateTypeConditionToJSON(e));
    } else {
      obj.conditions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnDateType>): TableColumnDateType {
    const message = createBaseTableColumnDateType();
    message.withTime = object.withTime ?? false;
    message.conditions = object.conditions?.map((e) => e) || [];
    return message;
  },
};

function createBaseTableColumnFileType(): TableColumnFileType {
  return { maximumSize: 0, contentTypes: [], multiple: false };
}

export const TableColumnFileType = {
  encode(message: TableColumnFileType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maximumSize !== 0) {
      writer.uint32(8).int32(message.maximumSize);
    }
    if (message.numberOfFiles !== undefined) {
      TableColumnFileTypeNumberOfFiles.encode(message.numberOfFiles, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.contentTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.multiple === true) {
      writer.uint32(32).bool(message.multiple);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnFileType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnFileType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maximumSize = reader.int32();
          break;
        case 2:
          message.numberOfFiles = TableColumnFileTypeNumberOfFiles.decode(reader, reader.uint32());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.contentTypes.push(reader.int32() as any);
            }
          } else {
            message.contentTypes.push(reader.int32() as any);
          }
          break;
        case 4:
          message.multiple = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnFileType {
    return {
      maximumSize: isSet(object.maximumSize) ? Number(object.maximumSize) : 0,
      numberOfFiles: isSet(object.numberOfFiles)
        ? TableColumnFileTypeNumberOfFiles.fromJSON(object.numberOfFiles)
        : undefined,
      contentTypes: Array.isArray(object?.contentTypes)
        ? object.contentTypes.map((e: any) => tableColumnFileTypeContentTypeFromJSON(e))
        : [],
      multiple: isSet(object.multiple) ? Boolean(object.multiple) : false,
    };
  },

  toJSON(message: TableColumnFileType): unknown {
    const obj: any = {};
    message.maximumSize !== undefined && (obj.maximumSize = Math.round(message.maximumSize));
    message.numberOfFiles !== undefined && (obj.numberOfFiles = message.numberOfFiles
      ? TableColumnFileTypeNumberOfFiles.toJSON(message.numberOfFiles)
      : undefined);
    if (message.contentTypes) {
      obj.contentTypes = message.contentTypes.map((e) => tableColumnFileTypeContentTypeToJSON(e));
    } else {
      obj.contentTypes = [];
    }
    message.multiple !== undefined && (obj.multiple = message.multiple);
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnFileType>): TableColumnFileType {
    const message = createBaseTableColumnFileType();
    message.maximumSize = object.maximumSize ?? 0;
    message.numberOfFiles = (object.numberOfFiles !== undefined && object.numberOfFiles !== null)
      ? TableColumnFileTypeNumberOfFiles.fromPartial(object.numberOfFiles)
      : undefined;
    message.contentTypes = object.contentTypes?.map((e) => e) || [];
    message.multiple = object.multiple ?? false;
    return message;
  },
};

function createBaseTableColumnFileTypeNumberOfFiles(): TableColumnFileTypeNumberOfFiles {
  return { minimum: 0, maximum: 0 };
}

export const TableColumnFileTypeNumberOfFiles = {
  encode(message: TableColumnFileTypeNumberOfFiles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minimum !== 0) {
      writer.uint32(8).int32(message.minimum);
    }
    if (message.maximum !== 0) {
      writer.uint32(16).int32(message.maximum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnFileTypeNumberOfFiles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnFileTypeNumberOfFiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimum = reader.int32();
          break;
        case 2:
          message.maximum = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnFileTypeNumberOfFiles {
    return {
      minimum: isSet(object.minimum) ? Number(object.minimum) : 0,
      maximum: isSet(object.maximum) ? Number(object.maximum) : 0,
    };
  },

  toJSON(message: TableColumnFileTypeNumberOfFiles): unknown {
    const obj: any = {};
    message.minimum !== undefined && (obj.minimum = Math.round(message.minimum));
    message.maximum !== undefined && (obj.maximum = Math.round(message.maximum));
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnFileTypeNumberOfFiles>): TableColumnFileTypeNumberOfFiles {
    const message = createBaseTableColumnFileTypeNumberOfFiles();
    message.minimum = object.minimum ?? 0;
    message.maximum = object.maximum ?? 0;
    return message;
  },
};

function createBaseTableColumnEnumType(): TableColumnEnumType {
  return { defaultValue: "", values: [] };
}

export const TableColumnEnumType = {
  encode(message: TableColumnEnumType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultValue !== "") {
      writer.uint32(10).string(message.defaultValue);
    }
    for (const v of message.values) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnEnumType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnEnumType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultValue = reader.string();
          break;
        case 2:
          message.values.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnEnumType {
    return {
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
      values: Array.isArray(object?.values) ? object.values.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: TableColumnEnumType): unknown {
    const obj: any = {};
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnEnumType>): TableColumnEnumType {
    const message = createBaseTableColumnEnumType();
    message.defaultValue = object.defaultValue ?? "";
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseTableColumnValidation(): TableColumnValidation {
  return { columnValidationOptions: [], presence: false, uniqueness: false, allowNil: false };
}

export const TableColumnValidation = {
  encode(message: TableColumnValidation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.columnValidationOptions) {
      TableColumnValidationOption.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.presence === true) {
      writer.uint32(16).bool(message.presence);
    }
    if (message.uniqueness === true) {
      writer.uint32(24).bool(message.uniqueness);
    }
    if (message.allowNil === true) {
      writer.uint32(32).bool(message.allowNil);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnValidation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.columnValidationOptions.push(TableColumnValidationOption.decode(reader, reader.uint32()));
          break;
        case 2:
          message.presence = reader.bool();
          break;
        case 3:
          message.uniqueness = reader.bool();
          break;
        case 4:
          message.allowNil = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnValidation {
    return {
      columnValidationOptions: Array.isArray(object?.columnValidationOptions)
        ? object.columnValidationOptions.map((e: any) => TableColumnValidationOption.fromJSON(e))
        : [],
      presence: isSet(object.presence) ? Boolean(object.presence) : false,
      uniqueness: isSet(object.uniqueness) ? Boolean(object.uniqueness) : false,
      allowNil: isSet(object.allowNil) ? Boolean(object.allowNil) : false,
    };
  },

  toJSON(message: TableColumnValidation): unknown {
    const obj: any = {};
    if (message.columnValidationOptions) {
      obj.columnValidationOptions = message.columnValidationOptions.map((e) =>
        e ? TableColumnValidationOption.toJSON(e) : undefined
      );
    } else {
      obj.columnValidationOptions = [];
    }
    message.presence !== undefined && (obj.presence = message.presence);
    message.uniqueness !== undefined && (obj.uniqueness = message.uniqueness);
    message.allowNil !== undefined && (obj.allowNil = message.allowNil);
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnValidation>): TableColumnValidation {
    const message = createBaseTableColumnValidation();
    message.columnValidationOptions =
      object.columnValidationOptions?.map((e) => TableColumnValidationOption.fromPartial(e)) || [];
    message.presence = object.presence ?? false;
    message.uniqueness = object.uniqueness ?? false;
    message.allowNil = object.allowNil ?? false;
    return message;
  },
};

function createBaseTableColumnValidationOption(): TableColumnValidationOption {
  return {};
}

export const TableColumnValidationOption = {
  encode(message: TableColumnValidationOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lengthValidation !== undefined) {
      TableColumnValidationOptionLengthValidation.encode(message.lengthValidation, writer.uint32(10).fork()).ldelim();
    }
    if (message.charValidation !== undefined) {
      TableColumnValidationOptionCharValidation.encode(message.charValidation, writer.uint32(18).fork()).ldelim();
    }
    if (message.dateValidation !== undefined) {
      TableColumnValidationOptionDateValidation.encode(message.dateValidation, writer.uint32(26).fork()).ldelim();
    }
    if (message.dateTimeValidation !== undefined) {
      TableColumnValidationOptionDateValidation.encode(message.dateTimeValidation, writer.uint32(34).fork()).ldelim();
    }
    if (message.numericalityValidation !== undefined) {
      TableColumnValidationOptionNumericalityValidation.encode(message.numericalityValidation, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.fileValidation !== undefined) {
      TableColumnValidationOptionFileValidation.encode(message.fileValidation, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnValidationOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnValidationOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lengthValidation = TableColumnValidationOptionLengthValidation.decode(reader, reader.uint32());
          break;
        case 2:
          message.charValidation = TableColumnValidationOptionCharValidation.decode(reader, reader.uint32());
          break;
        case 3:
          message.dateValidation = TableColumnValidationOptionDateValidation.decode(reader, reader.uint32());
          break;
        case 4:
          message.dateTimeValidation = TableColumnValidationOptionDateValidation.decode(reader, reader.uint32());
          break;
        case 5:
          message.numericalityValidation = TableColumnValidationOptionNumericalityValidation.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.fileValidation = TableColumnValidationOptionFileValidation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnValidationOption {
    return {
      lengthValidation: isSet(object.lengthValidation)
        ? TableColumnValidationOptionLengthValidation.fromJSON(object.lengthValidation)
        : undefined,
      charValidation: isSet(object.charValidation)
        ? TableColumnValidationOptionCharValidation.fromJSON(object.charValidation)
        : undefined,
      dateValidation: isSet(object.dateValidation)
        ? TableColumnValidationOptionDateValidation.fromJSON(object.dateValidation)
        : undefined,
      dateTimeValidation: isSet(object.dateTimeValidation)
        ? TableColumnValidationOptionDateValidation.fromJSON(object.dateTimeValidation)
        : undefined,
      numericalityValidation: isSet(object.numericalityValidation)
        ? TableColumnValidationOptionNumericalityValidation.fromJSON(object.numericalityValidation)
        : undefined,
      fileValidation: isSet(object.fileValidation)
        ? TableColumnValidationOptionFileValidation.fromJSON(object.fileValidation)
        : undefined,
    };
  },

  toJSON(message: TableColumnValidationOption): unknown {
    const obj: any = {};
    message.lengthValidation !== undefined && (obj.lengthValidation = message.lengthValidation
      ? TableColumnValidationOptionLengthValidation.toJSON(message.lengthValidation)
      : undefined);
    message.charValidation !== undefined && (obj.charValidation = message.charValidation
      ? TableColumnValidationOptionCharValidation.toJSON(message.charValidation)
      : undefined);
    message.dateValidation !== undefined && (obj.dateValidation = message.dateValidation
      ? TableColumnValidationOptionDateValidation.toJSON(message.dateValidation)
      : undefined);
    message.dateTimeValidation !== undefined && (obj.dateTimeValidation = message.dateTimeValidation
      ? TableColumnValidationOptionDateValidation.toJSON(message.dateTimeValidation)
      : undefined);
    message.numericalityValidation !== undefined && (obj.numericalityValidation = message.numericalityValidation
      ? TableColumnValidationOptionNumericalityValidation.toJSON(message.numericalityValidation)
      : undefined);
    message.fileValidation !== undefined && (obj.fileValidation = message.fileValidation
      ? TableColumnValidationOptionFileValidation.toJSON(message.fileValidation)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnValidationOption>): TableColumnValidationOption {
    const message = createBaseTableColumnValidationOption();
    message.lengthValidation = (object.lengthValidation !== undefined && object.lengthValidation !== null)
      ? TableColumnValidationOptionLengthValidation.fromPartial(object.lengthValidation)
      : undefined;
    message.charValidation = (object.charValidation !== undefined && object.charValidation !== null)
      ? TableColumnValidationOptionCharValidation.fromPartial(object.charValidation)
      : undefined;
    message.dateValidation = (object.dateValidation !== undefined && object.dateValidation !== null)
      ? TableColumnValidationOptionDateValidation.fromPartial(object.dateValidation)
      : undefined;
    message.dateTimeValidation = (object.dateTimeValidation !== undefined && object.dateTimeValidation !== null)
      ? TableColumnValidationOptionDateValidation.fromPartial(object.dateTimeValidation)
      : undefined;
    message.numericalityValidation =
      (object.numericalityValidation !== undefined && object.numericalityValidation !== null)
        ? TableColumnValidationOptionNumericalityValidation.fromPartial(object.numericalityValidation)
        : undefined;
    message.fileValidation = (object.fileValidation !== undefined && object.fileValidation !== null)
      ? TableColumnValidationOptionFileValidation.fromPartial(object.fileValidation)
      : undefined;
    return message;
  },
};

function createBaseTableColumnValidationOptionLengthValidation(): TableColumnValidationOptionLengthValidation {
  return { maximum: 0, minimum: 0, is: 0 };
}

export const TableColumnValidationOptionLengthValidation = {
  encode(message: TableColumnValidationOptionLengthValidation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maximum !== 0) {
      writer.uint32(8).int32(message.maximum);
    }
    if (message.minimum !== 0) {
      writer.uint32(16).int32(message.minimum);
    }
    if (message.is !== 0) {
      writer.uint32(24).int32(message.is);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnValidationOptionLengthValidation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnValidationOptionLengthValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maximum = reader.int32();
          break;
        case 2:
          message.minimum = reader.int32();
          break;
        case 3:
          message.is = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnValidationOptionLengthValidation {
    return {
      maximum: isSet(object.maximum) ? Number(object.maximum) : 0,
      minimum: isSet(object.minimum) ? Number(object.minimum) : 0,
      is: isSet(object.is) ? Number(object.is) : 0,
    };
  },

  toJSON(message: TableColumnValidationOptionLengthValidation): unknown {
    const obj: any = {};
    message.maximum !== undefined && (obj.maximum = Math.round(message.maximum));
    message.minimum !== undefined && (obj.minimum = Math.round(message.minimum));
    message.is !== undefined && (obj.is = Math.round(message.is));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TableColumnValidationOptionLengthValidation>,
  ): TableColumnValidationOptionLengthValidation {
    const message = createBaseTableColumnValidationOptionLengthValidation();
    message.maximum = object.maximum ?? 0;
    message.minimum = object.minimum ?? 0;
    message.is = object.is ?? 0;
    return message;
  },
};

function createBaseTableColumnValidationOptionCharValidation(): TableColumnValidationOptionCharValidation {
  return { email: false, hiragana: false, katakana: false, phoneNumber: false, url: false };
}

export const TableColumnValidationOptionCharValidation = {
  encode(message: TableColumnValidationOptionCharValidation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email === true) {
      writer.uint32(8).bool(message.email);
    }
    if (message.hiragana === true) {
      writer.uint32(16).bool(message.hiragana);
    }
    if (message.katakana === true) {
      writer.uint32(24).bool(message.katakana);
    }
    if (message.phoneNumber === true) {
      writer.uint32(32).bool(message.phoneNumber);
    }
    if (message.url === true) {
      writer.uint32(40).bool(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnValidationOptionCharValidation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnValidationOptionCharValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.bool();
          break;
        case 2:
          message.hiragana = reader.bool();
          break;
        case 3:
          message.katakana = reader.bool();
          break;
        case 4:
          message.phoneNumber = reader.bool();
          break;
        case 5:
          message.url = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnValidationOptionCharValidation {
    return {
      email: isSet(object.email) ? Boolean(object.email) : false,
      hiragana: isSet(object.hiragana) ? Boolean(object.hiragana) : false,
      katakana: isSet(object.katakana) ? Boolean(object.katakana) : false,
      phoneNumber: isSet(object.phoneNumber) ? Boolean(object.phoneNumber) : false,
      url: isSet(object.url) ? Boolean(object.url) : false,
    };
  },

  toJSON(message: TableColumnValidationOptionCharValidation): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.hiragana !== undefined && (obj.hiragana = message.hiragana);
    message.katakana !== undefined && (obj.katakana = message.katakana);
    message.phoneNumber !== undefined && (obj.phoneNumber = message.phoneNumber);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TableColumnValidationOptionCharValidation>,
  ): TableColumnValidationOptionCharValidation {
    const message = createBaseTableColumnValidationOptionCharValidation();
    message.email = object.email ?? false;
    message.hiragana = object.hiragana ?? false;
    message.katakana = object.katakana ?? false;
    message.phoneNumber = object.phoneNumber ?? false;
    message.url = object.url ?? false;
    return message;
  },
};

function createBaseTableColumnValidationOptionDateValidation(): TableColumnValidationOptionDateValidation {
  return { past: false, future: false };
}

export const TableColumnValidationOptionDateValidation = {
  encode(message: TableColumnValidationOptionDateValidation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.past === true) {
      writer.uint32(8).bool(message.past);
    }
    if (message.future === true) {
      writer.uint32(16).bool(message.future);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnValidationOptionDateValidation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnValidationOptionDateValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.past = reader.bool();
          break;
        case 2:
          message.future = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnValidationOptionDateValidation {
    return {
      past: isSet(object.past) ? Boolean(object.past) : false,
      future: isSet(object.future) ? Boolean(object.future) : false,
    };
  },

  toJSON(message: TableColumnValidationOptionDateValidation): unknown {
    const obj: any = {};
    message.past !== undefined && (obj.past = message.past);
    message.future !== undefined && (obj.future = message.future);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TableColumnValidationOptionDateValidation>,
  ): TableColumnValidationOptionDateValidation {
    const message = createBaseTableColumnValidationOptionDateValidation();
    message.past = object.past ?? false;
    message.future = object.future ?? false;
    return message;
  },
};

function createBaseTableColumnValidationOptionNumericalityValidation(): TableColumnValidationOptionNumericalityValidation {
  return { greaterThan: 0, greaterThanOrEqualTo: 0, lessThan: 0, lessThanOrEqualTo: 0 };
}

export const TableColumnValidationOptionNumericalityValidation = {
  encode(
    message: TableColumnValidationOptionNumericalityValidation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.greaterThan !== 0) {
      writer.uint32(8).int32(message.greaterThan);
    }
    if (message.greaterThanOrEqualTo !== 0) {
      writer.uint32(16).int32(message.greaterThanOrEqualTo);
    }
    if (message.lessThan !== 0) {
      writer.uint32(24).int32(message.lessThan);
    }
    if (message.lessThanOrEqualTo !== 0) {
      writer.uint32(32).int32(message.lessThanOrEqualTo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnValidationOptionNumericalityValidation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnValidationOptionNumericalityValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.greaterThan = reader.int32();
          break;
        case 2:
          message.greaterThanOrEqualTo = reader.int32();
          break;
        case 3:
          message.lessThan = reader.int32();
          break;
        case 4:
          message.lessThanOrEqualTo = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnValidationOptionNumericalityValidation {
    return {
      greaterThan: isSet(object.greaterThan) ? Number(object.greaterThan) : 0,
      greaterThanOrEqualTo: isSet(object.greaterThanOrEqualTo) ? Number(object.greaterThanOrEqualTo) : 0,
      lessThan: isSet(object.lessThan) ? Number(object.lessThan) : 0,
      lessThanOrEqualTo: isSet(object.lessThanOrEqualTo) ? Number(object.lessThanOrEqualTo) : 0,
    };
  },

  toJSON(message: TableColumnValidationOptionNumericalityValidation): unknown {
    const obj: any = {};
    message.greaterThan !== undefined && (obj.greaterThan = Math.round(message.greaterThan));
    message.greaterThanOrEqualTo !== undefined && (obj.greaterThanOrEqualTo = Math.round(message.greaterThanOrEqualTo));
    message.lessThan !== undefined && (obj.lessThan = Math.round(message.lessThan));
    message.lessThanOrEqualTo !== undefined && (obj.lessThanOrEqualTo = Math.round(message.lessThanOrEqualTo));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TableColumnValidationOptionNumericalityValidation>,
  ): TableColumnValidationOptionNumericalityValidation {
    const message = createBaseTableColumnValidationOptionNumericalityValidation();
    message.greaterThan = object.greaterThan ?? 0;
    message.greaterThanOrEqualTo = object.greaterThanOrEqualTo ?? 0;
    message.lessThan = object.lessThan ?? 0;
    message.lessThanOrEqualTo = object.lessThanOrEqualTo ?? 0;
    return message;
  },
};

function createBaseTableColumnValidationOptionFileValidation(): TableColumnValidationOptionFileValidation {
  return { single: false, contentTypes: [] };
}

export const TableColumnValidationOptionFileValidation = {
  encode(message: TableColumnValidationOptionFileValidation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.single === true) {
      writer.uint32(8).bool(message.single);
    }
    for (const v of message.contentTypes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnValidationOptionFileValidation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableColumnValidationOptionFileValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = reader.bool();
          break;
        case 2:
          message.contentTypes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableColumnValidationOptionFileValidation {
    return {
      single: isSet(object.single) ? Boolean(object.single) : false,
      contentTypes: Array.isArray(object?.contentTypes) ? object.contentTypes.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: TableColumnValidationOptionFileValidation): unknown {
    const obj: any = {};
    message.single !== undefined && (obj.single = message.single);
    if (message.contentTypes) {
      obj.contentTypes = message.contentTypes.map((e) => e);
    } else {
      obj.contentTypes = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<TableColumnValidationOptionFileValidation>,
  ): TableColumnValidationOptionFileValidation {
    const message = createBaseTableColumnValidationOptionFileValidation();
    message.single = object.single ?? false;
    message.contentTypes = object.contentTypes?.map((e) => e) || [];
    return message;
  },
};

function createBaseTableConstraint(): TableConstraint {
  return {};
}

export const TableConstraint = {
  encode(message: TableConstraint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.primaryKey !== undefined) {
      TableConstraintPrimaryKey.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.foreignKey !== undefined) {
      TableConstraintForeignKey.encode(message.foreignKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.notNull !== undefined) {
      TableConstraintNotNull.encode(message.notNull, writer.uint32(26).fork()).ldelim();
    }
    if (message.unique !== undefined) {
      TableConstraintUnique.encode(message.unique, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableConstraint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.primaryKey = TableConstraintPrimaryKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.foreignKey = TableConstraintForeignKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.notNull = TableConstraintNotNull.decode(reader, reader.uint32());
          break;
        case 4:
          message.unique = TableConstraintUnique.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableConstraint {
    return {
      primaryKey: isSet(object.primaryKey) ? TableConstraintPrimaryKey.fromJSON(object.primaryKey) : undefined,
      foreignKey: isSet(object.foreignKey) ? TableConstraintForeignKey.fromJSON(object.foreignKey) : undefined,
      notNull: isSet(object.notNull) ? TableConstraintNotNull.fromJSON(object.notNull) : undefined,
      unique: isSet(object.unique) ? TableConstraintUnique.fromJSON(object.unique) : undefined,
    };
  },

  toJSON(message: TableConstraint): unknown {
    const obj: any = {};
    message.primaryKey !== undefined &&
      (obj.primaryKey = message.primaryKey ? TableConstraintPrimaryKey.toJSON(message.primaryKey) : undefined);
    message.foreignKey !== undefined &&
      (obj.foreignKey = message.foreignKey ? TableConstraintForeignKey.toJSON(message.foreignKey) : undefined);
    message.notNull !== undefined &&
      (obj.notNull = message.notNull ? TableConstraintNotNull.toJSON(message.notNull) : undefined);
    message.unique !== undefined &&
      (obj.unique = message.unique ? TableConstraintUnique.toJSON(message.unique) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TableConstraint>): TableConstraint {
    const message = createBaseTableConstraint();
    message.primaryKey = (object.primaryKey !== undefined && object.primaryKey !== null)
      ? TableConstraintPrimaryKey.fromPartial(object.primaryKey)
      : undefined;
    message.foreignKey = (object.foreignKey !== undefined && object.foreignKey !== null)
      ? TableConstraintForeignKey.fromPartial(object.foreignKey)
      : undefined;
    message.notNull = (object.notNull !== undefined && object.notNull !== null)
      ? TableConstraintNotNull.fromPartial(object.notNull)
      : undefined;
    message.unique = (object.unique !== undefined && object.unique !== null)
      ? TableConstraintUnique.fromPartial(object.unique)
      : undefined;
    return message;
  },
};

function createBaseTableConstraintPrimaryKey(): TableConstraintPrimaryKey {
  return {};
}

export const TableConstraintPrimaryKey = {
  encode(_: TableConstraintPrimaryKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraintPrimaryKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableConstraintPrimaryKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): TableConstraintPrimaryKey {
    return {};
  },

  toJSON(_: TableConstraintPrimaryKey): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<TableConstraintPrimaryKey>): TableConstraintPrimaryKey {
    const message = createBaseTableConstraintPrimaryKey();
    return message;
  },
};

function createBaseTableConstraintForeignKey(): TableConstraintForeignKey {
  return { tableName: "", primaryKey: "" };
}

export const TableConstraintForeignKey = {
  encode(message: TableConstraintForeignKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    if (message.primaryKey !== "") {
      writer.uint32(18).string(message.primaryKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraintForeignKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableConstraintForeignKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tableName = reader.string();
          break;
        case 2:
          message.primaryKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableConstraintForeignKey {
    return {
      tableName: isSet(object.tableName) ? String(object.tableName) : "",
      primaryKey: isSet(object.primaryKey) ? String(object.primaryKey) : "",
    };
  },

  toJSON(message: TableConstraintForeignKey): unknown {
    const obj: any = {};
    message.tableName !== undefined && (obj.tableName = message.tableName);
    message.primaryKey !== undefined && (obj.primaryKey = message.primaryKey);
    return obj;
  },

  fromPartial(object: DeepPartial<TableConstraintForeignKey>): TableConstraintForeignKey {
    const message = createBaseTableConstraintForeignKey();
    message.tableName = object.tableName ?? "";
    message.primaryKey = object.primaryKey ?? "";
    return message;
  },
};

function createBaseTableConstraintNotNull(): TableConstraintNotNull {
  return {};
}

export const TableConstraintNotNull = {
  encode(_: TableConstraintNotNull, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraintNotNull {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableConstraintNotNull();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): TableConstraintNotNull {
    return {};
  },

  toJSON(_: TableConstraintNotNull): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<TableConstraintNotNull>): TableConstraintNotNull {
    const message = createBaseTableConstraintNotNull();
    return message;
  },
};

function createBaseTableConstraintUnique(): TableConstraintUnique {
  return {};
}

export const TableConstraintUnique = {
  encode(_: TableConstraintUnique, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraintUnique {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableConstraintUnique();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): TableConstraintUnique {
    return {};
  },

  toJSON(_: TableConstraintUnique): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<TableConstraintUnique>): TableConstraintUnique {
    const message = createBaseTableConstraintUnique();
    return message;
  },
};

function createBaseTableIndex(): TableIndex {
  return { name: "", unique: false, columns: [] };
}

export const TableIndex = {
  encode(message: TableIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.unique === true) {
      writer.uint32(16).bool(message.unique);
    }
    for (const v of message.columns) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableIndex {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.unique = reader.bool();
          break;
        case 3:
          message.columns.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableIndex {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      unique: isSet(object.unique) ? Boolean(object.unique) : false,
      columns: Array.isArray(object?.columns) ? object.columns.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: TableIndex): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.unique !== undefined && (obj.unique = message.unique);
    if (message.columns) {
      obj.columns = message.columns.map((e) => e);
    } else {
      obj.columns = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TableIndex>): TableIndex {
    const message = createBaseTableIndex();
    message.name = object.name ?? "";
    message.unique = object.unique ?? false;
    message.columns = object.columns?.map((e) => e) || [];
    return message;
  },
};

function createBaseTableRelation(): TableRelation {
  return {};
}

export const TableRelation = {
  encode(message: TableRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hasOne !== undefined) {
      TableRelationRelationHasOne.encode(message.hasOne, writer.uint32(10).fork()).ldelim();
    }
    if (message.belongTo !== undefined) {
      TableRelationRelationBelongTo.encode(message.belongTo, writer.uint32(18).fork()).ldelim();
    }
    if (message.oneMany !== undefined) {
      TableRelationRelationOneMany.encode(message.oneMany, writer.uint32(26).fork()).ldelim();
    }
    if (message.manyOne !== undefined) {
      TableRelationRelationManyOne.encode(message.manyOne, writer.uint32(34).fork()).ldelim();
    }
    if (message.manyMany !== undefined) {
      TableRelationRelationManyMany.encode(message.manyMany, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableRelation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasOne = TableRelationRelationHasOne.decode(reader, reader.uint32());
          break;
        case 2:
          message.belongTo = TableRelationRelationBelongTo.decode(reader, reader.uint32());
          break;
        case 3:
          message.oneMany = TableRelationRelationOneMany.decode(reader, reader.uint32());
          break;
        case 4:
          message.manyOne = TableRelationRelationManyOne.decode(reader, reader.uint32());
          break;
        case 5:
          message.manyMany = TableRelationRelationManyMany.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableRelation {
    return {
      hasOne: isSet(object.hasOne) ? TableRelationRelationHasOne.fromJSON(object.hasOne) : undefined,
      belongTo: isSet(object.belongTo) ? TableRelationRelationBelongTo.fromJSON(object.belongTo) : undefined,
      oneMany: isSet(object.oneMany) ? TableRelationRelationOneMany.fromJSON(object.oneMany) : undefined,
      manyOne: isSet(object.manyOne) ? TableRelationRelationManyOne.fromJSON(object.manyOne) : undefined,
      manyMany: isSet(object.manyMany) ? TableRelationRelationManyMany.fromJSON(object.manyMany) : undefined,
    };
  },

  toJSON(message: TableRelation): unknown {
    const obj: any = {};
    message.hasOne !== undefined &&
      (obj.hasOne = message.hasOne ? TableRelationRelationHasOne.toJSON(message.hasOne) : undefined);
    message.belongTo !== undefined &&
      (obj.belongTo = message.belongTo ? TableRelationRelationBelongTo.toJSON(message.belongTo) : undefined);
    message.oneMany !== undefined &&
      (obj.oneMany = message.oneMany ? TableRelationRelationOneMany.toJSON(message.oneMany) : undefined);
    message.manyOne !== undefined &&
      (obj.manyOne = message.manyOne ? TableRelationRelationManyOne.toJSON(message.manyOne) : undefined);
    message.manyMany !== undefined &&
      (obj.manyMany = message.manyMany ? TableRelationRelationManyMany.toJSON(message.manyMany) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TableRelation>): TableRelation {
    const message = createBaseTableRelation();
    message.hasOne = (object.hasOne !== undefined && object.hasOne !== null)
      ? TableRelationRelationHasOne.fromPartial(object.hasOne)
      : undefined;
    message.belongTo = (object.belongTo !== undefined && object.belongTo !== null)
      ? TableRelationRelationBelongTo.fromPartial(object.belongTo)
      : undefined;
    message.oneMany = (object.oneMany !== undefined && object.oneMany !== null)
      ? TableRelationRelationOneMany.fromPartial(object.oneMany)
      : undefined;
    message.manyOne = (object.manyOne !== undefined && object.manyOne !== null)
      ? TableRelationRelationManyOne.fromPartial(object.manyOne)
      : undefined;
    message.manyMany = (object.manyMany !== undefined && object.manyMany !== null)
      ? TableRelationRelationManyMany.fromPartial(object.manyMany)
      : undefined;
    return message;
  },
};

function createBaseTableRelationRelationHasOne(): TableRelationRelationHasOne {
  return { tableName: "", columnName: "" };
}

export const TableRelationRelationHasOne = {
  encode(message: TableRelationRelationHasOne, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    if (message.columnName !== "") {
      writer.uint32(18).string(message.columnName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationHasOne {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableRelationRelationHasOne();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tableName = reader.string();
          break;
        case 2:
          message.columnName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableRelationRelationHasOne {
    return {
      tableName: isSet(object.tableName) ? String(object.tableName) : "",
      columnName: isSet(object.columnName) ? String(object.columnName) : "",
    };
  },

  toJSON(message: TableRelationRelationHasOne): unknown {
    const obj: any = {};
    message.tableName !== undefined && (obj.tableName = message.tableName);
    message.columnName !== undefined && (obj.columnName = message.columnName);
    return obj;
  },

  fromPartial(object: DeepPartial<TableRelationRelationHasOne>): TableRelationRelationHasOne {
    const message = createBaseTableRelationRelationHasOne();
    message.tableName = object.tableName ?? "";
    message.columnName = object.columnName ?? "";
    return message;
  },
};

function createBaseTableRelationRelationBelongTo(): TableRelationRelationBelongTo {
  return { tableName: "", columnName: "" };
}

export const TableRelationRelationBelongTo = {
  encode(message: TableRelationRelationBelongTo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    if (message.columnName !== "") {
      writer.uint32(18).string(message.columnName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationBelongTo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableRelationRelationBelongTo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tableName = reader.string();
          break;
        case 2:
          message.columnName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableRelationRelationBelongTo {
    return {
      tableName: isSet(object.tableName) ? String(object.tableName) : "",
      columnName: isSet(object.columnName) ? String(object.columnName) : "",
    };
  },

  toJSON(message: TableRelationRelationBelongTo): unknown {
    const obj: any = {};
    message.tableName !== undefined && (obj.tableName = message.tableName);
    message.columnName !== undefined && (obj.columnName = message.columnName);
    return obj;
  },

  fromPartial(object: DeepPartial<TableRelationRelationBelongTo>): TableRelationRelationBelongTo {
    const message = createBaseTableRelationRelationBelongTo();
    message.tableName = object.tableName ?? "";
    message.columnName = object.columnName ?? "";
    return message;
  },
};

function createBaseTableRelationRelationManyOne(): TableRelationRelationManyOne {
  return { tableName: "", columnName: "" };
}

export const TableRelationRelationManyOne = {
  encode(message: TableRelationRelationManyOne, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    if (message.columnName !== "") {
      writer.uint32(18).string(message.columnName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationManyOne {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableRelationRelationManyOne();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tableName = reader.string();
          break;
        case 2:
          message.columnName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableRelationRelationManyOne {
    return {
      tableName: isSet(object.tableName) ? String(object.tableName) : "",
      columnName: isSet(object.columnName) ? String(object.columnName) : "",
    };
  },

  toJSON(message: TableRelationRelationManyOne): unknown {
    const obj: any = {};
    message.tableName !== undefined && (obj.tableName = message.tableName);
    message.columnName !== undefined && (obj.columnName = message.columnName);
    return obj;
  },

  fromPartial(object: DeepPartial<TableRelationRelationManyOne>): TableRelationRelationManyOne {
    const message = createBaseTableRelationRelationManyOne();
    message.tableName = object.tableName ?? "";
    message.columnName = object.columnName ?? "";
    return message;
  },
};

function createBaseTableRelationRelationOneMany(): TableRelationRelationOneMany {
  return { tableName: "", columnName: "" };
}

export const TableRelationRelationOneMany = {
  encode(message: TableRelationRelationOneMany, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    if (message.columnName !== "") {
      writer.uint32(18).string(message.columnName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationOneMany {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableRelationRelationOneMany();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tableName = reader.string();
          break;
        case 2:
          message.columnName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableRelationRelationOneMany {
    return {
      tableName: isSet(object.tableName) ? String(object.tableName) : "",
      columnName: isSet(object.columnName) ? String(object.columnName) : "",
    };
  },

  toJSON(message: TableRelationRelationOneMany): unknown {
    const obj: any = {};
    message.tableName !== undefined && (obj.tableName = message.tableName);
    message.columnName !== undefined && (obj.columnName = message.columnName);
    return obj;
  },

  fromPartial(object: DeepPartial<TableRelationRelationOneMany>): TableRelationRelationOneMany {
    const message = createBaseTableRelationRelationOneMany();
    message.tableName = object.tableName ?? "";
    message.columnName = object.columnName ?? "";
    return message;
  },
};

function createBaseTableRelationRelationManyMany(): TableRelationRelationManyMany {
  return { tableName: "", joinedName: "" };
}

export const TableRelationRelationManyMany = {
  encode(message: TableRelationRelationManyMany, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tableName !== "") {
      writer.uint32(10).string(message.tableName);
    }
    if (message.joinedName !== "") {
      writer.uint32(18).string(message.joinedName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationManyMany {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableRelationRelationManyMany();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tableName = reader.string();
          break;
        case 2:
          message.joinedName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableRelationRelationManyMany {
    return {
      tableName: isSet(object.tableName) ? String(object.tableName) : "",
      joinedName: isSet(object.joinedName) ? String(object.joinedName) : "",
    };
  },

  toJSON(message: TableRelationRelationManyMany): unknown {
    const obj: any = {};
    message.tableName !== undefined && (obj.tableName = message.tableName);
    message.joinedName !== undefined && (obj.joinedName = message.joinedName);
    return obj;
  },

  fromPartial(object: DeepPartial<TableRelationRelationManyMany>): TableRelationRelationManyMany {
    const message = createBaseTableRelationRelationManyMany();
    message.tableName = object.tableName ?? "";
    message.joinedName = object.joinedName ?? "";
    return message;
  },
};

function createBaseMigration(): Migration {
  return { migrationId: "", changes: [] };
}

export const Migration = {
  encode(message: Migration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.migrationId !== "") {
      writer.uint32(10).string(message.migrationId);
    }
    for (const v of message.changes) {
      MigrationChange.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Migration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.migrationId = reader.string();
          break;
        case 2:
          message.changes.push(MigrationChange.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Migration {
    return {
      migrationId: isSet(object.migrationId) ? String(object.migrationId) : "",
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => MigrationChange.fromJSON(e)) : [],
    };
  },

  toJSON(message: Migration): unknown {
    const obj: any = {};
    message.migrationId !== undefined && (obj.migrationId = message.migrationId);
    if (message.changes) {
      obj.changes = message.changes.map((e) => e ? MigrationChange.toJSON(e) : undefined);
    } else {
      obj.changes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Migration>): Migration {
    const message = createBaseMigration();
    message.migrationId = object.migrationId ?? "";
    message.changes = object.changes?.map((e) => MigrationChange.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMigrationChange(): MigrationChange {
  return {};
}

export const MigrationChange = {
  encode(message: MigrationChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.createTable !== undefined) {
      CreateTable.encode(message.createTable, writer.uint32(10).fork()).ldelim();
    }
    if (message.changeTableName !== undefined) {
      ChangeTableName.encode(message.changeTableName, writer.uint32(18).fork()).ldelim();
    }
    if (message.changeTableComment !== undefined) {
      ChangeTableComment.encode(message.changeTableComment, writer.uint32(26).fork()).ldelim();
    }
    if (message.addColumn !== undefined) {
      AddColumn.encode(message.addColumn, writer.uint32(34).fork()).ldelim();
    }
    if (message.renameColumn !== undefined) {
      RenameColumn.encode(message.renameColumn, writer.uint32(42).fork()).ldelim();
    }
    if (message.changeColumnComment !== undefined) {
      ChangeColumnComment.encode(message.changeColumnComment, writer.uint32(50).fork()).ldelim();
    }
    if (message.changeColumn !== undefined) {
      ChangeColumn.encode(message.changeColumn, writer.uint32(58).fork()).ldelim();
    }
    if (message.changeColumnDefault !== undefined) {
      ChangeColumnDefault.encode(message.changeColumnDefault, writer.uint32(66).fork()).ldelim();
    }
    if (message.changeColumnNull !== undefined) {
      ChangeColumnNull.encode(message.changeColumnNull, writer.uint32(74).fork()).ldelim();
    }
    if (message.removeTableIndex !== undefined) {
      RemoveTableIndex.encode(message.removeTableIndex, writer.uint32(82).fork()).ldelim();
    }
    if (message.removeTableRelation !== undefined) {
      RemoveTableRelation.encode(message.removeTableRelation, writer.uint32(90).fork()).ldelim();
    }
    if (message.createTableRelation !== undefined) {
      CreateTableRelation.encode(message.createTableRelation, writer.uint32(98).fork()).ldelim();
    }
    if (message.removeColumn !== undefined) {
      RemoveColumn.encode(message.removeColumn, writer.uint32(106).fork()).ldelim();
    }
    if (message.dropTable !== undefined) {
      DropTable.encode(message.dropTable, writer.uint32(114).fork()).ldelim();
    }
    if (message.changeTableIndex !== undefined) {
      ChangeTableIndex.encode(message.changeTableIndex, writer.uint32(122).fork()).ldelim();
    }
    if (message.createTableIndex !== undefined) {
      CreateTableIndex.encode(message.createTableIndex, writer.uint32(130).fork()).ldelim();
    }
    if (message.addUniqColumn !== undefined) {
      AddUniqColumn.encode(message.addUniqColumn, writer.uint32(138).fork()).ldelim();
    }
    if (message.changeColumnUnique !== undefined) {
      ChangeColumnUnique.encode(message.changeColumnUnique, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrationChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrationChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createTable = CreateTable.decode(reader, reader.uint32());
          break;
        case 2:
          message.changeTableName = ChangeTableName.decode(reader, reader.uint32());
          break;
        case 3:
          message.changeTableComment = ChangeTableComment.decode(reader, reader.uint32());
          break;
        case 4:
          message.addColumn = AddColumn.decode(reader, reader.uint32());
          break;
        case 5:
          message.renameColumn = RenameColumn.decode(reader, reader.uint32());
          break;
        case 6:
          message.changeColumnComment = ChangeColumnComment.decode(reader, reader.uint32());
          break;
        case 7:
          message.changeColumn = ChangeColumn.decode(reader, reader.uint32());
          break;
        case 8:
          message.changeColumnDefault = ChangeColumnDefault.decode(reader, reader.uint32());
          break;
        case 9:
          message.changeColumnNull = ChangeColumnNull.decode(reader, reader.uint32());
          break;
        case 10:
          message.removeTableIndex = RemoveTableIndex.decode(reader, reader.uint32());
          break;
        case 11:
          message.removeTableRelation = RemoveTableRelation.decode(reader, reader.uint32());
          break;
        case 12:
          message.createTableRelation = CreateTableRelation.decode(reader, reader.uint32());
          break;
        case 13:
          message.removeColumn = RemoveColumn.decode(reader, reader.uint32());
          break;
        case 14:
          message.dropTable = DropTable.decode(reader, reader.uint32());
          break;
        case 15:
          message.changeTableIndex = ChangeTableIndex.decode(reader, reader.uint32());
          break;
        case 16:
          message.createTableIndex = CreateTableIndex.decode(reader, reader.uint32());
          break;
        case 17:
          message.addUniqColumn = AddUniqColumn.decode(reader, reader.uint32());
          break;
        case 18:
          message.changeColumnUnique = ChangeColumnUnique.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MigrationChange {
    return {
      createTable: isSet(object.createTable) ? CreateTable.fromJSON(object.createTable) : undefined,
      changeTableName: isSet(object.changeTableName) ? ChangeTableName.fromJSON(object.changeTableName) : undefined,
      changeTableComment: isSet(object.changeTableComment)
        ? ChangeTableComment.fromJSON(object.changeTableComment)
        : undefined,
      addColumn: isSet(object.addColumn) ? AddColumn.fromJSON(object.addColumn) : undefined,
      renameColumn: isSet(object.renameColumn) ? RenameColumn.fromJSON(object.renameColumn) : undefined,
      changeColumnComment: isSet(object.changeColumnComment)
        ? ChangeColumnComment.fromJSON(object.changeColumnComment)
        : undefined,
      changeColumn: isSet(object.changeColumn) ? ChangeColumn.fromJSON(object.changeColumn) : undefined,
      changeColumnDefault: isSet(object.changeColumnDefault)
        ? ChangeColumnDefault.fromJSON(object.changeColumnDefault)
        : undefined,
      changeColumnNull: isSet(object.changeColumnNull) ? ChangeColumnNull.fromJSON(object.changeColumnNull) : undefined,
      removeTableIndex: isSet(object.removeTableIndex) ? RemoveTableIndex.fromJSON(object.removeTableIndex) : undefined,
      removeTableRelation: isSet(object.removeTableRelation)
        ? RemoveTableRelation.fromJSON(object.removeTableRelation)
        : undefined,
      createTableRelation: isSet(object.createTableRelation)
        ? CreateTableRelation.fromJSON(object.createTableRelation)
        : undefined,
      removeColumn: isSet(object.removeColumn) ? RemoveColumn.fromJSON(object.removeColumn) : undefined,
      dropTable: isSet(object.dropTable) ? DropTable.fromJSON(object.dropTable) : undefined,
      changeTableIndex: isSet(object.changeTableIndex) ? ChangeTableIndex.fromJSON(object.changeTableIndex) : undefined,
      createTableIndex: isSet(object.createTableIndex) ? CreateTableIndex.fromJSON(object.createTableIndex) : undefined,
      addUniqColumn: isSet(object.addUniqColumn) ? AddUniqColumn.fromJSON(object.addUniqColumn) : undefined,
      changeColumnUnique: isSet(object.changeColumnUnique)
        ? ChangeColumnUnique.fromJSON(object.changeColumnUnique)
        : undefined,
    };
  },

  toJSON(message: MigrationChange): unknown {
    const obj: any = {};
    message.createTable !== undefined &&
      (obj.createTable = message.createTable ? CreateTable.toJSON(message.createTable) : undefined);
    message.changeTableName !== undefined &&
      (obj.changeTableName = message.changeTableName ? ChangeTableName.toJSON(message.changeTableName) : undefined);
    message.changeTableComment !== undefined && (obj.changeTableComment = message.changeTableComment
      ? ChangeTableComment.toJSON(message.changeTableComment)
      : undefined);
    message.addColumn !== undefined &&
      (obj.addColumn = message.addColumn ? AddColumn.toJSON(message.addColumn) : undefined);
    message.renameColumn !== undefined &&
      (obj.renameColumn = message.renameColumn ? RenameColumn.toJSON(message.renameColumn) : undefined);
    message.changeColumnComment !== undefined && (obj.changeColumnComment = message.changeColumnComment
      ? ChangeColumnComment.toJSON(message.changeColumnComment)
      : undefined);
    message.changeColumn !== undefined &&
      (obj.changeColumn = message.changeColumn ? ChangeColumn.toJSON(message.changeColumn) : undefined);
    message.changeColumnDefault !== undefined && (obj.changeColumnDefault = message.changeColumnDefault
      ? ChangeColumnDefault.toJSON(message.changeColumnDefault)
      : undefined);
    message.changeColumnNull !== undefined &&
      (obj.changeColumnNull = message.changeColumnNull ? ChangeColumnNull.toJSON(message.changeColumnNull) : undefined);
    message.removeTableIndex !== undefined &&
      (obj.removeTableIndex = message.removeTableIndex ? RemoveTableIndex.toJSON(message.removeTableIndex) : undefined);
    message.removeTableRelation !== undefined && (obj.removeTableRelation = message.removeTableRelation
      ? RemoveTableRelation.toJSON(message.removeTableRelation)
      : undefined);
    message.createTableRelation !== undefined && (obj.createTableRelation = message.createTableRelation
      ? CreateTableRelation.toJSON(message.createTableRelation)
      : undefined);
    message.removeColumn !== undefined &&
      (obj.removeColumn = message.removeColumn ? RemoveColumn.toJSON(message.removeColumn) : undefined);
    message.dropTable !== undefined &&
      (obj.dropTable = message.dropTable ? DropTable.toJSON(message.dropTable) : undefined);
    message.changeTableIndex !== undefined &&
      (obj.changeTableIndex = message.changeTableIndex ? ChangeTableIndex.toJSON(message.changeTableIndex) : undefined);
    message.createTableIndex !== undefined &&
      (obj.createTableIndex = message.createTableIndex ? CreateTableIndex.toJSON(message.createTableIndex) : undefined);
    message.addUniqColumn !== undefined &&
      (obj.addUniqColumn = message.addUniqColumn ? AddUniqColumn.toJSON(message.addUniqColumn) : undefined);
    message.changeColumnUnique !== undefined && (obj.changeColumnUnique = message.changeColumnUnique
      ? ChangeColumnUnique.toJSON(message.changeColumnUnique)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MigrationChange>): MigrationChange {
    const message = createBaseMigrationChange();
    message.createTable = (object.createTable !== undefined && object.createTable !== null)
      ? CreateTable.fromPartial(object.createTable)
      : undefined;
    message.changeTableName = (object.changeTableName !== undefined && object.changeTableName !== null)
      ? ChangeTableName.fromPartial(object.changeTableName)
      : undefined;
    message.changeTableComment = (object.changeTableComment !== undefined && object.changeTableComment !== null)
      ? ChangeTableComment.fromPartial(object.changeTableComment)
      : undefined;
    message.addColumn = (object.addColumn !== undefined && object.addColumn !== null)
      ? AddColumn.fromPartial(object.addColumn)
      : undefined;
    message.renameColumn = (object.renameColumn !== undefined && object.renameColumn !== null)
      ? RenameColumn.fromPartial(object.renameColumn)
      : undefined;
    message.changeColumnComment = (object.changeColumnComment !== undefined && object.changeColumnComment !== null)
      ? ChangeColumnComment.fromPartial(object.changeColumnComment)
      : undefined;
    message.changeColumn = (object.changeColumn !== undefined && object.changeColumn !== null)
      ? ChangeColumn.fromPartial(object.changeColumn)
      : undefined;
    message.changeColumnDefault = (object.changeColumnDefault !== undefined && object.changeColumnDefault !== null)
      ? ChangeColumnDefault.fromPartial(object.changeColumnDefault)
      : undefined;
    message.changeColumnNull = (object.changeColumnNull !== undefined && object.changeColumnNull !== null)
      ? ChangeColumnNull.fromPartial(object.changeColumnNull)
      : undefined;
    message.removeTableIndex = (object.removeTableIndex !== undefined && object.removeTableIndex !== null)
      ? RemoveTableIndex.fromPartial(object.removeTableIndex)
      : undefined;
    message.removeTableRelation = (object.removeTableRelation !== undefined && object.removeTableRelation !== null)
      ? RemoveTableRelation.fromPartial(object.removeTableRelation)
      : undefined;
    message.createTableRelation = (object.createTableRelation !== undefined && object.createTableRelation !== null)
      ? CreateTableRelation.fromPartial(object.createTableRelation)
      : undefined;
    message.removeColumn = (object.removeColumn !== undefined && object.removeColumn !== null)
      ? RemoveColumn.fromPartial(object.removeColumn)
      : undefined;
    message.dropTable = (object.dropTable !== undefined && object.dropTable !== null)
      ? DropTable.fromPartial(object.dropTable)
      : undefined;
    message.changeTableIndex = (object.changeTableIndex !== undefined && object.changeTableIndex !== null)
      ? ChangeTableIndex.fromPartial(object.changeTableIndex)
      : undefined;
    message.createTableIndex = (object.createTableIndex !== undefined && object.createTableIndex !== null)
      ? CreateTableIndex.fromPartial(object.createTableIndex)
      : undefined;
    message.addUniqColumn = (object.addUniqColumn !== undefined && object.addUniqColumn !== null)
      ? AddUniqColumn.fromPartial(object.addUniqColumn)
      : undefined;
    message.changeColumnUnique = (object.changeColumnUnique !== undefined && object.changeColumnUnique !== null)
      ? ChangeColumnUnique.fromPartial(object.changeColumnUnique)
      : undefined;
    return message;
  },
};

function createBaseCreateTable(): CreateTable {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const CreateTable = {
  encode(message: CreateTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeTo !== undefined) {
      CreateTableChange.encode(message.changeTo, writer.uint32(18).fork()).ldelim();
    }
    if (message.prevUuid !== "") {
      writer.uint32(26).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(34).string(message.nextUuid);
    }
    if (message.nextRecord !== undefined) {
      CreateTableNextRecord.encode(message.nextRecord, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeTo = CreateTableChange.decode(reader, reader.uint32());
          break;
        case 3:
          message.prevUuid = reader.string();
          break;
        case 4:
          message.nextUuid = reader.string();
          break;
        case 5:
          message.nextRecord = CreateTableNextRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTable {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeTo: isSet(object.changeTo) ? CreateTableChange.fromJSON(object.changeTo) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      nextRecord: isSet(object.nextRecord) ? CreateTableNextRecord.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: CreateTable): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeTo !== undefined &&
      (obj.changeTo = message.changeTo ? CreateTableChange.toJSON(message.changeTo) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? CreateTableNextRecord.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateTable>): CreateTable {
    const message = createBaseCreateTable();
    message.key = object.key ?? "";
    message.changeTo = (object.changeTo !== undefined && object.changeTo !== null)
      ? CreateTableChange.fromPartial(object.changeTo)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? CreateTableNextRecord.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeTableName(): ChangeTableName {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeTableName = {
  encode(message: ChangeTableName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== "") {
      writer.uint32(18).string(message.changeFrom);
    }
    if (message.changeTo !== "") {
      writer.uint32(26).string(message.changeTo);
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      CreateTableNextRecord.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      CreateTableNextRecord.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeTableName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeTableName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeFrom = reader.string();
          break;
        case 3:
          message.changeTo = reader.string();
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = CreateTableNextRecord.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = CreateTableNextRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeTableName {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeFrom: isSet(object.changeFrom) ? String(object.changeFrom) : "",
      changeTo: isSet(object.changeTo) ? String(object.changeTo) : "",
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? CreateTableNextRecord.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? CreateTableNextRecord.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: ChangeTableName): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined && (obj.changeFrom = message.changeFrom);
    message.changeTo !== undefined && (obj.changeTo = message.changeTo);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? CreateTableNextRecord.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? CreateTableNextRecord.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChangeTableName>): ChangeTableName {
    const message = createBaseChangeTableName();
    message.key = object.key ?? "";
    message.changeFrom = object.changeFrom ?? "";
    message.changeTo = object.changeTo ?? "";
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? CreateTableNextRecord.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? CreateTableNextRecord.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeTableComment(): ChangeTableComment {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeTableComment = {
  encode(message: ChangeTableComment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== "") {
      writer.uint32(18).string(message.changeFrom);
    }
    if (message.changeTo !== "") {
      writer.uint32(26).string(message.changeTo);
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      CreateTableNextRecord.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      CreateTableNextRecord.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeTableComment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeTableComment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeFrom = reader.string();
          break;
        case 3:
          message.changeTo = reader.string();
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = CreateTableNextRecord.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = CreateTableNextRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeTableComment {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeFrom: isSet(object.changeFrom) ? String(object.changeFrom) : "",
      changeTo: isSet(object.changeTo) ? String(object.changeTo) : "",
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? CreateTableNextRecord.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? CreateTableNextRecord.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: ChangeTableComment): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined && (obj.changeFrom = message.changeFrom);
    message.changeTo !== undefined && (obj.changeTo = message.changeTo);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? CreateTableNextRecord.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? CreateTableNextRecord.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChangeTableComment>): ChangeTableComment {
    const message = createBaseChangeTableComment();
    message.key = object.key ?? "";
    message.changeFrom = object.changeFrom ?? "";
    message.changeTo = object.changeTo ?? "";
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? CreateTableNextRecord.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? CreateTableNextRecord.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseCreateTableChange(): CreateTableChange {
  return { name: "", uuid: "" };
}

export const CreateTableChange = {
  encode(message: CreateTableChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.comment !== undefined) {
      writer.uint32(26).string(message.comment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTableChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTableChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.comment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTableChange {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      comment: isSet(object.comment) ? String(object.comment) : undefined,
    };
  },

  toJSON(message: CreateTableChange): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.comment !== undefined && (obj.comment = message.comment);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateTableChange>): CreateTableChange {
    const message = createBaseCreateTableChange();
    message.name = object.name ?? "";
    message.uuid = object.uuid ?? "";
    message.comment = object.comment ?? undefined;
    return message;
  },
};

function createBaseAddColumn(): AddColumn {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const AddColumn = {
  encode(message: AddColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeTo !== undefined) {
      MigrationColumnDefinition.encode(message.changeTo, writer.uint32(18).fork()).ldelim();
    }
    if (message.prevUuid !== "") {
      writer.uint32(26).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(34).string(message.nextUuid);
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinition.encode(message.nextRecord, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddColumn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddColumn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeTo = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        case 3:
          message.prevUuid = reader.string();
          break;
        case 4:
          message.nextUuid = reader.string();
          break;
        case 5:
          message.nextRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddColumn {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeTo: isSet(object.changeTo) ? MigrationColumnDefinition.fromJSON(object.changeTo) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinition.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: AddColumn): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeTo !== undefined &&
      (obj.changeTo = message.changeTo ? MigrationColumnDefinition.toJSON(message.changeTo) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinition.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AddColumn>): AddColumn {
    const message = createBaseAddColumn();
    message.key = object.key ?? "";
    message.changeTo = (object.changeTo !== undefined && object.changeTo !== null)
      ? MigrationColumnDefinition.fromPartial(object.changeTo)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseRenameColumn(): RenameColumn {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const RenameColumn = {
  encode(message: RenameColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== "") {
      writer.uint32(18).string(message.changeFrom);
    }
    if (message.changeTo !== "") {
      writer.uint32(26).string(message.changeTo);
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      MigrationColumnDefinition.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinition.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameColumn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRenameColumn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeFrom = reader.string();
          break;
        case 3:
          message.changeTo = reader.string();
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenameColumn {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeFrom: isSet(object.changeFrom) ? String(object.changeFrom) : "",
      changeTo: isSet(object.changeTo) ? String(object.changeTo) : "",
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinition.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinition.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: RenameColumn): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined && (obj.changeFrom = message.changeFrom);
    message.changeTo !== undefined && (obj.changeTo = message.changeTo);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinition.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinition.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RenameColumn>): RenameColumn {
    const message = createBaseRenameColumn();
    message.key = object.key ?? "";
    message.changeFrom = object.changeFrom ?? "";
    message.changeTo = object.changeTo ?? "";
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeColumnComment(): ChangeColumnComment {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeColumnComment = {
  encode(message: ChangeColumnComment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== "") {
      writer.uint32(18).string(message.changeFrom);
    }
    if (message.changeTo !== "") {
      writer.uint32(26).string(message.changeTo);
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      MigrationColumnDefinition.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinition.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumnComment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeColumnComment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeFrom = reader.string();
          break;
        case 3:
          message.changeTo = reader.string();
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeColumnComment {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeFrom: isSet(object.changeFrom) ? String(object.changeFrom) : "",
      changeTo: isSet(object.changeTo) ? String(object.changeTo) : "",
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinition.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinition.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: ChangeColumnComment): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined && (obj.changeFrom = message.changeFrom);
    message.changeTo !== undefined && (obj.changeTo = message.changeTo);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinition.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinition.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChangeColumnComment>): ChangeColumnComment {
    const message = createBaseChangeColumnComment();
    message.key = object.key ?? "";
    message.changeFrom = object.changeFrom ?? "";
    message.changeTo = object.changeTo ?? "";
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeColumn(): ChangeColumn {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeColumn = {
  encode(message: ChangeColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== "") {
      writer.uint32(18).string(message.changeFrom);
    }
    if (message.changeTo !== "") {
      writer.uint32(26).string(message.changeTo);
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      MigrationColumnDefinition.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinition.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeColumn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeFrom = reader.string();
          break;
        case 3:
          message.changeTo = reader.string();
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeColumn {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeFrom: isSet(object.changeFrom) ? String(object.changeFrom) : "",
      changeTo: isSet(object.changeTo) ? String(object.changeTo) : "",
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinition.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinition.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: ChangeColumn): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined && (obj.changeFrom = message.changeFrom);
    message.changeTo !== undefined && (obj.changeTo = message.changeTo);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinition.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinition.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChangeColumn>): ChangeColumn {
    const message = createBaseChangeColumn();
    message.key = object.key ?? "";
    message.changeFrom = object.changeFrom ?? "";
    message.changeTo = object.changeTo ?? "";
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeColumnDefault(): ChangeColumnDefault {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeColumnDefault = {
  encode(message: ChangeColumnDefault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== "") {
      writer.uint32(18).string(message.changeFrom);
    }
    if (message.changeTo !== "") {
      writer.uint32(26).string(message.changeTo);
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      MigrationColumnDefinition.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinition.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumnDefault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeColumnDefault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeFrom = reader.string();
          break;
        case 3:
          message.changeTo = reader.string();
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeColumnDefault {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeFrom: isSet(object.changeFrom) ? String(object.changeFrom) : "",
      changeTo: isSet(object.changeTo) ? String(object.changeTo) : "",
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinition.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinition.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: ChangeColumnDefault): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined && (obj.changeFrom = message.changeFrom);
    message.changeTo !== undefined && (obj.changeTo = message.changeTo);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinition.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinition.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChangeColumnDefault>): ChangeColumnDefault {
    const message = createBaseChangeColumnDefault();
    message.key = object.key ?? "";
    message.changeFrom = object.changeFrom ?? "";
    message.changeTo = object.changeTo ?? "";
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeColumnNull(): ChangeColumnNull {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeColumnNull = {
  encode(message: ChangeColumnNull, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== "") {
      writer.uint32(18).string(message.changeFrom);
    }
    if (message.changeTo !== "") {
      writer.uint32(26).string(message.changeTo);
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      MigrationColumnDefinition.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinition.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumnNull {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeColumnNull();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeFrom = reader.string();
          break;
        case 3:
          message.changeTo = reader.string();
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeColumnNull {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeFrom: isSet(object.changeFrom) ? String(object.changeFrom) : "",
      changeTo: isSet(object.changeTo) ? String(object.changeTo) : "",
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinition.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinition.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: ChangeColumnNull): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined && (obj.changeFrom = message.changeFrom);
    message.changeTo !== undefined && (obj.changeTo = message.changeTo);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinition.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinition.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChangeColumnNull>): ChangeColumnNull {
    const message = createBaseChangeColumnNull();
    message.key = object.key ?? "";
    message.changeFrom = object.changeFrom ?? "";
    message.changeTo = object.changeTo ?? "";
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseRemoveTableIndex(): RemoveTableIndex {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const RemoveTableIndex = {
  encode(message: RemoveTableIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== undefined) {
      TableIndexMigration.encode(message.changeFrom, writer.uint32(18).fork()).ldelim();
    }
    if (message.prevUuid !== "") {
      writer.uint32(26).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(34).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      TableIndexMigration.encode(message.prevRecord, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTableIndex {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveTableIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeFrom = TableIndexMigration.decode(reader, reader.uint32());
          break;
        case 3:
          message.prevUuid = reader.string();
          break;
        case 4:
          message.nextUuid = reader.string();
          break;
        case 5:
          message.prevRecord = TableIndexMigration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveTableIndex {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeFrom: isSet(object.changeFrom) ? TableIndexMigration.fromJSON(object.changeFrom) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? TableIndexMigration.fromJSON(object.prevRecord) : undefined,
    };
  },

  toJSON(message: RemoveTableIndex): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined &&
      (obj.changeFrom = message.changeFrom ? TableIndexMigration.toJSON(message.changeFrom) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? TableIndexMigration.toJSON(message.prevRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoveTableIndex>): RemoveTableIndex {
    const message = createBaseRemoveTableIndex();
    message.key = object.key ?? "";
    message.changeFrom = (object.changeFrom !== undefined && object.changeFrom !== null)
      ? TableIndexMigration.fromPartial(object.changeFrom)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? TableIndexMigration.fromPartial(object.prevRecord)
      : undefined;
    return message;
  },
};

function createBaseRemoveTableRelation(): RemoveTableRelation {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const RemoveTableRelation = {
  encode(message: RemoveTableRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.prevUuid !== "") {
      writer.uint32(26).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(34).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      TableRelationMigration.encode(message.prevRecord, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTableRelation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveTableRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 3:
          message.prevUuid = reader.string();
          break;
        case 4:
          message.nextUuid = reader.string();
          break;
        case 5:
          message.prevRecord = TableRelationMigration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveTableRelation {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? TableRelationMigration.fromJSON(object.prevRecord) : undefined,
    };
  },

  toJSON(message: RemoveTableRelation): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? TableRelationMigration.toJSON(message.prevRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoveTableRelation>): RemoveTableRelation {
    const message = createBaseRemoveTableRelation();
    message.key = object.key ?? "";
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? TableRelationMigration.fromPartial(object.prevRecord)
      : undefined;
    return message;
  },
};

function createBaseCreateTableRelation(): CreateTableRelation {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const CreateTableRelation = {
  encode(message: CreateTableRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeTo !== undefined) {
      TableRelationMigration.encode(message.changeTo, writer.uint32(18).fork()).ldelim();
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.nextRecord !== undefined) {
      TableRelationMigration.encode(message.nextRecord, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTableRelation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTableRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeTo = TableRelationMigration.decode(reader, reader.uint32());
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.nextRecord = TableRelationMigration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTableRelation {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeTo: isSet(object.changeTo) ? TableRelationMigration.fromJSON(object.changeTo) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      nextRecord: isSet(object.nextRecord) ? TableRelationMigration.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: CreateTableRelation): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeTo !== undefined &&
      (obj.changeTo = message.changeTo ? TableRelationMigration.toJSON(message.changeTo) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? TableRelationMigration.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateTableRelation>): CreateTableRelation {
    const message = createBaseCreateTableRelation();
    message.key = object.key ?? "";
    message.changeTo = (object.changeTo !== undefined && object.changeTo !== null)
      ? TableRelationMigration.fromPartial(object.changeTo)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? TableRelationMigration.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseRemoveColumn(): RemoveColumn {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const RemoveColumn = {
  encode(message: RemoveColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== undefined) {
      MigrationColumnDefinition.encode(message.changeFrom, writer.uint32(18).fork()).ldelim();
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      MigrationColumnDefinition.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveColumn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveColumn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeFrom = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveColumn {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeFrom: isSet(object.changeFrom) ? MigrationColumnDefinition.fromJSON(object.changeFrom) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinition.fromJSON(object.prevRecord) : undefined,
    };
  },

  toJSON(message: RemoveColumn): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined &&
      (obj.changeFrom = message.changeFrom ? MigrationColumnDefinition.toJSON(message.changeFrom) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinition.toJSON(message.prevRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoveColumn>): RemoveColumn {
    const message = createBaseRemoveColumn();
    message.key = object.key ?? "";
    message.changeFrom = (object.changeFrom !== undefined && object.changeFrom !== null)
      ? MigrationColumnDefinition.fromPartial(object.changeFrom)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.prevRecord)
      : undefined;
    return message;
  },
};

function createBaseDropTable(): DropTable {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const DropTable = {
  encode(message: DropTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== undefined) {
      CreateTableNextRecord.encode(message.changeFrom, writer.uint32(18).fork()).ldelim();
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      CreateTableNextRecord.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropTable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeFrom = CreateTableNextRecord.decode(reader, reader.uint32());
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = CreateTableNextRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DropTable {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeFrom: isSet(object.changeFrom) ? CreateTableNextRecord.fromJSON(object.changeFrom) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? CreateTableNextRecord.fromJSON(object.prevRecord) : undefined,
    };
  },

  toJSON(message: DropTable): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined &&
      (obj.changeFrom = message.changeFrom ? CreateTableNextRecord.toJSON(message.changeFrom) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? CreateTableNextRecord.toJSON(message.prevRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DropTable>): DropTable {
    const message = createBaseDropTable();
    message.key = object.key ?? "";
    message.changeFrom = (object.changeFrom !== undefined && object.changeFrom !== null)
      ? CreateTableNextRecord.fromPartial(object.changeFrom)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? CreateTableNextRecord.fromPartial(object.prevRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeTableIndex(): ChangeTableIndex {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeTableIndex = {
  encode(message: ChangeTableIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== "") {
      writer.uint32(18).string(message.changeFrom);
    }
    if (message.changeTo !== "") {
      writer.uint32(26).string(message.changeTo);
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      TableIndexMigration.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      TableIndexMigration.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeTableIndex {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeTableIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeFrom = reader.string();
          break;
        case 3:
          message.changeTo = reader.string();
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = TableIndexMigration.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = TableIndexMigration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeTableIndex {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeFrom: isSet(object.changeFrom) ? String(object.changeFrom) : "",
      changeTo: isSet(object.changeTo) ? String(object.changeTo) : "",
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? TableIndexMigration.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? TableIndexMigration.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: ChangeTableIndex): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined && (obj.changeFrom = message.changeFrom);
    message.changeTo !== undefined && (obj.changeTo = message.changeTo);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? TableIndexMigration.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? TableIndexMigration.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChangeTableIndex>): ChangeTableIndex {
    const message = createBaseChangeTableIndex();
    message.key = object.key ?? "";
    message.changeFrom = object.changeFrom ?? "";
    message.changeTo = object.changeTo ?? "";
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? TableIndexMigration.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? TableIndexMigration.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseCreateTableIndex(): CreateTableIndex {
  return { key: "", nextUuid: "" };
}

export const CreateTableIndex = {
  encode(message: CreateTableIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeTo !== undefined) {
      TableIndexMigration.encode(message.changeTo, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.nextRecord !== undefined) {
      TableIndexMigration.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTableIndex {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTableIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeTo = TableIndexMigration.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 7:
          message.nextRecord = TableIndexMigration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTableIndex {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeTo: isSet(object.changeTo) ? TableIndexMigration.fromJSON(object.changeTo) : undefined,
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      nextRecord: isSet(object.nextRecord) ? TableIndexMigration.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: CreateTableIndex): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeTo !== undefined &&
      (obj.changeTo = message.changeTo ? TableIndexMigration.toJSON(message.changeTo) : undefined);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? TableIndexMigration.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateTableIndex>): CreateTableIndex {
    const message = createBaseCreateTableIndex();
    message.key = object.key ?? "";
    message.changeTo = (object.changeTo !== undefined && object.changeTo !== null)
      ? TableIndexMigration.fromPartial(object.changeTo)
      : undefined;
    message.nextUuid = object.nextUuid ?? "";
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? TableIndexMigration.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseAddUniqColumn(): AddUniqColumn {
  return {};
}

export const AddUniqColumn = {
  encode(message: AddUniqColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinition.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddUniqColumn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddUniqColumn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          message.nextRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddUniqColumn {
    return { nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinition.fromJSON(object.nextRecord) : undefined };
  },

  toJSON(message: AddUniqColumn): unknown {
    const obj: any = {};
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinition.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AddUniqColumn>): AddUniqColumn {
    const message = createBaseAddUniqColumn();
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeColumnUnique(): ChangeColumnUnique {
  return { key: "", changeFrom: false, changeTo: false, prevUuid: "", nextUuid: "" };
}

export const ChangeColumnUnique = {
  encode(message: ChangeColumnUnique, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom === true) {
      writer.uint32(16).bool(message.changeFrom);
    }
    if (message.changeTo === true) {
      writer.uint32(24).bool(message.changeTo);
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      MigrationColumnDefinition.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinition.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumnUnique {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeColumnUnique();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.changeFrom = reader.bool();
          break;
        case 3:
          message.changeTo = reader.bool();
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = MigrationColumnDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeColumnUnique {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      changeFrom: isSet(object.changeFrom) ? Boolean(object.changeFrom) : false,
      changeTo: isSet(object.changeTo) ? Boolean(object.changeTo) : false,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinition.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinition.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: ChangeColumnUnique): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined && (obj.changeFrom = message.changeFrom);
    message.changeTo !== undefined && (obj.changeTo = message.changeTo);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinition.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinition.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChangeColumnUnique>): ChangeColumnUnique {
    const message = createBaseChangeColumnUnique();
    message.key = object.key ?? "";
    message.changeFrom = object.changeFrom ?? false;
    message.changeTo = object.changeTo ?? false;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinition.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseCreateTableNextRecord(): CreateTableNextRecord {
  return { name: "", uuid: "", comment: "", columnDefinitions: [] };
}

export const CreateTableNextRecord = {
  encode(message: CreateTableNextRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.comment !== "") {
      writer.uint32(26).string(message.comment);
    }
    for (const v of message.columnDefinitions) {
      MigrationColumnDefinition.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTableNextRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTableNextRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.comment = reader.string();
          break;
        case 4:
          message.columnDefinitions.push(MigrationColumnDefinition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTableNextRecord {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      comment: isSet(object.comment) ? String(object.comment) : "",
      columnDefinitions: Array.isArray(object?.columnDefinitions)
        ? object.columnDefinitions.map((e: any) => MigrationColumnDefinition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateTableNextRecord): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.comment !== undefined && (obj.comment = message.comment);
    if (message.columnDefinitions) {
      obj.columnDefinitions = message.columnDefinitions.map((e) => e ? MigrationColumnDefinition.toJSON(e) : undefined);
    } else {
      obj.columnDefinitions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CreateTableNextRecord>): CreateTableNextRecord {
    const message = createBaseCreateTableNextRecord();
    message.name = object.name ?? "";
    message.uuid = object.uuid ?? "";
    message.comment = object.comment ?? "";
    message.columnDefinitions = object.columnDefinitions?.map((e) => MigrationColumnDefinition.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMigrationColumnDefinition(): MigrationColumnDefinition {
  return {
    name: "",
    columnType: "",
    required: false,
    unique: false,
    defaultValue: "",
    comment: "",
    uuid: "",
    tableDefinitionUuid: "",
    id: 0,
  };
}

export const MigrationColumnDefinition = {
  encode(message: MigrationColumnDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.columnType !== "") {
      writer.uint32(18).string(message.columnType);
    }
    if (message.required === true) {
      writer.uint32(24).bool(message.required);
    }
    if (message.unique === true) {
      writer.uint32(32).bool(message.unique);
    }
    if (message.defaultValue !== "") {
      writer.uint32(42).string(message.defaultValue);
    }
    if (message.comment !== "") {
      writer.uint32(50).string(message.comment);
    }
    if (message.uuid !== "") {
      writer.uint32(58).string(message.uuid);
    }
    if (message.tableDefinitionUuid !== "") {
      writer.uint32(66).string(message.tableDefinitionUuid);
    }
    if (message.customForeignKey !== undefined) {
      writer.uint32(72).bool(message.customForeignKey);
    }
    if (message.tableDefinition !== undefined) {
      TableMetaDataMigration.encode(message.tableDefinition, writer.uint32(82).fork()).ldelim();
    }
    if (message.id !== 0) {
      writer.uint32(88).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrationColumnDefinition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrationColumnDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.columnType = reader.string();
          break;
        case 3:
          message.required = reader.bool();
          break;
        case 4:
          message.unique = reader.bool();
          break;
        case 5:
          message.defaultValue = reader.string();
          break;
        case 6:
          message.comment = reader.string();
          break;
        case 7:
          message.uuid = reader.string();
          break;
        case 8:
          message.tableDefinitionUuid = reader.string();
          break;
        case 9:
          message.customForeignKey = reader.bool();
          break;
        case 10:
          message.tableDefinition = TableMetaDataMigration.decode(reader, reader.uint32());
          break;
        case 11:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MigrationColumnDefinition {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      columnType: isSet(object.columnType) ? String(object.columnType) : "",
      required: isSet(object.required) ? Boolean(object.required) : false,
      unique: isSet(object.unique) ? Boolean(object.unique) : false,
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
      comment: isSet(object.comment) ? String(object.comment) : "",
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      tableDefinitionUuid: isSet(object.tableDefinitionUuid) ? String(object.tableDefinitionUuid) : "",
      customForeignKey: isSet(object.customForeignKey) ? Boolean(object.customForeignKey) : undefined,
      tableDefinition: isSet(object.tableDefinition)
        ? TableMetaDataMigration.fromJSON(object.tableDefinition)
        : undefined,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MigrationColumnDefinition): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.columnType !== undefined && (obj.columnType = message.columnType);
    message.required !== undefined && (obj.required = message.required);
    message.unique !== undefined && (obj.unique = message.unique);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.comment !== undefined && (obj.comment = message.comment);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.tableDefinitionUuid !== undefined && (obj.tableDefinitionUuid = message.tableDefinitionUuid);
    message.customForeignKey !== undefined && (obj.customForeignKey = message.customForeignKey);
    message.tableDefinition !== undefined && (obj.tableDefinition = message.tableDefinition
      ? TableMetaDataMigration.toJSON(message.tableDefinition)
      : undefined);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial(object: DeepPartial<MigrationColumnDefinition>): MigrationColumnDefinition {
    const message = createBaseMigrationColumnDefinition();
    message.name = object.name ?? "";
    message.columnType = object.columnType ?? "";
    message.required = object.required ?? false;
    message.unique = object.unique ?? false;
    message.defaultValue = object.defaultValue ?? "";
    message.comment = object.comment ?? "";
    message.uuid = object.uuid ?? "";
    message.tableDefinitionUuid = object.tableDefinitionUuid ?? "";
    message.customForeignKey = object.customForeignKey ?? undefined;
    message.tableDefinition = (object.tableDefinition !== undefined && object.tableDefinition !== null)
      ? TableMetaDataMigration.fromPartial(object.tableDefinition)
      : undefined;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseTableMetaDataMigration(): TableMetaDataMigration {
  return { name: "", uuid: "" };
}

export const TableMetaDataMigration = {
  encode(message: TableMetaDataMigration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableMetaDataMigration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableMetaDataMigration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableMetaDataMigration {
    return { name: isSet(object.name) ? String(object.name) : "", uuid: isSet(object.uuid) ? String(object.uuid) : "" };
  },

  toJSON(message: TableMetaDataMigration): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial(object: DeepPartial<TableMetaDataMigration>): TableMetaDataMigration {
    const message = createBaseTableMetaDataMigration();
    message.name = object.name ?? "";
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseTableIndexMigration(): TableIndexMigration {
  return {
    name: "",
    unique: false,
    uuid: "",
    tableDefinitionUuid: "",
    columnDefinitions: [],
    singleIndex: false,
    id: 0,
  };
}

export const TableIndexMigration = {
  encode(message: TableIndexMigration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.unique === true) {
      writer.uint32(16).bool(message.unique);
    }
    if (message.uuid !== "") {
      writer.uint32(26).string(message.uuid);
    }
    if (message.tableDefinitionUuid !== "") {
      writer.uint32(34).string(message.tableDefinitionUuid);
    }
    for (const v of message.columnDefinitions) {
      MigrationColumnDefinition.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.singleIndex === true) {
      writer.uint32(48).bool(message.singleIndex);
    }
    if (message.tableDefinition !== undefined) {
      TableMetaDataMigration.encode(message.tableDefinition, writer.uint32(58).fork()).ldelim();
    }
    if (message.id !== 0) {
      writer.uint32(64).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableIndexMigration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableIndexMigration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.unique = reader.bool();
          break;
        case 3:
          message.uuid = reader.string();
          break;
        case 4:
          message.tableDefinitionUuid = reader.string();
          break;
        case 5:
          message.columnDefinitions.push(MigrationColumnDefinition.decode(reader, reader.uint32()));
          break;
        case 6:
          message.singleIndex = reader.bool();
          break;
        case 7:
          message.tableDefinition = TableMetaDataMigration.decode(reader, reader.uint32());
          break;
        case 8:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableIndexMigration {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      unique: isSet(object.unique) ? Boolean(object.unique) : false,
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      tableDefinitionUuid: isSet(object.tableDefinitionUuid) ? String(object.tableDefinitionUuid) : "",
      columnDefinitions: Array.isArray(object?.columnDefinitions)
        ? object.columnDefinitions.map((e: any) => MigrationColumnDefinition.fromJSON(e))
        : [],
      singleIndex: isSet(object.singleIndex) ? Boolean(object.singleIndex) : false,
      tableDefinition: isSet(object.tableDefinition)
        ? TableMetaDataMigration.fromJSON(object.tableDefinition)
        : undefined,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: TableIndexMigration): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.unique !== undefined && (obj.unique = message.unique);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.tableDefinitionUuid !== undefined && (obj.tableDefinitionUuid = message.tableDefinitionUuid);
    if (message.columnDefinitions) {
      obj.columnDefinitions = message.columnDefinitions.map((e) => e ? MigrationColumnDefinition.toJSON(e) : undefined);
    } else {
      obj.columnDefinitions = [];
    }
    message.singleIndex !== undefined && (obj.singleIndex = message.singleIndex);
    message.tableDefinition !== undefined && (obj.tableDefinition = message.tableDefinition
      ? TableMetaDataMigration.toJSON(message.tableDefinition)
      : undefined);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial(object: DeepPartial<TableIndexMigration>): TableIndexMigration {
    const message = createBaseTableIndexMigration();
    message.name = object.name ?? "";
    message.unique = object.unique ?? false;
    message.uuid = object.uuid ?? "";
    message.tableDefinitionUuid = object.tableDefinitionUuid ?? "";
    message.columnDefinitions = object.columnDefinitions?.map((e) => MigrationColumnDefinition.fromPartial(e)) || [];
    message.singleIndex = object.singleIndex ?? false;
    message.tableDefinition = (object.tableDefinition !== undefined && object.tableDefinition !== null)
      ? TableMetaDataMigration.fromPartial(object.tableDefinition)
      : undefined;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseTableRelationMigration(): TableRelationMigration {
  return {
    foreignKey: "",
    relationType: "",
    required: false,
    uuid: "",
    tableDefinitionUuid: "",
    relatedTableUuid: "",
    id: 0,
  };
}

export const TableRelationMigration = {
  encode(message: TableRelationMigration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.foreignKey !== "") {
      writer.uint32(10).string(message.foreignKey);
    }
    if (message.relationType !== "") {
      writer.uint32(18).string(message.relationType);
    }
    if (message.required === true) {
      writer.uint32(24).bool(message.required);
    }
    if (message.uuid !== "") {
      writer.uint32(34).string(message.uuid);
    }
    if (message.tableDefinitionUuid !== "") {
      writer.uint32(42).string(message.tableDefinitionUuid);
    }
    if (message.relatedTableUuid !== "") {
      writer.uint32(50).string(message.relatedTableUuid);
    }
    if (message.customForeignKey !== undefined) {
      writer.uint32(56).bool(message.customForeignKey);
    }
    if (message.tableDefinition !== undefined) {
      CreateTableChange.encode(message.tableDefinition, writer.uint32(66).fork()).ldelim();
    }
    if (message.relatedTable !== undefined) {
      CreateTableChange.encode(message.relatedTable, writer.uint32(74).fork()).ldelim();
    }
    if (message.id !== 0) {
      writer.uint32(80).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationMigration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableRelationMigration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.foreignKey = reader.string();
          break;
        case 2:
          message.relationType = reader.string();
          break;
        case 3:
          message.required = reader.bool();
          break;
        case 4:
          message.uuid = reader.string();
          break;
        case 5:
          message.tableDefinitionUuid = reader.string();
          break;
        case 6:
          message.relatedTableUuid = reader.string();
          break;
        case 7:
          message.customForeignKey = reader.bool();
          break;
        case 8:
          message.tableDefinition = CreateTableChange.decode(reader, reader.uint32());
          break;
        case 9:
          message.relatedTable = CreateTableChange.decode(reader, reader.uint32());
          break;
        case 10:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableRelationMigration {
    return {
      foreignKey: isSet(object.foreignKey) ? String(object.foreignKey) : "",
      relationType: isSet(object.relationType) ? String(object.relationType) : "",
      required: isSet(object.required) ? Boolean(object.required) : false,
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      tableDefinitionUuid: isSet(object.tableDefinitionUuid) ? String(object.tableDefinitionUuid) : "",
      relatedTableUuid: isSet(object.relatedTableUuid) ? String(object.relatedTableUuid) : "",
      customForeignKey: isSet(object.customForeignKey) ? Boolean(object.customForeignKey) : undefined,
      tableDefinition: isSet(object.tableDefinition) ? CreateTableChange.fromJSON(object.tableDefinition) : undefined,
      relatedTable: isSet(object.relatedTable) ? CreateTableChange.fromJSON(object.relatedTable) : undefined,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: TableRelationMigration): unknown {
    const obj: any = {};
    message.foreignKey !== undefined && (obj.foreignKey = message.foreignKey);
    message.relationType !== undefined && (obj.relationType = message.relationType);
    message.required !== undefined && (obj.required = message.required);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.tableDefinitionUuid !== undefined && (obj.tableDefinitionUuid = message.tableDefinitionUuid);
    message.relatedTableUuid !== undefined && (obj.relatedTableUuid = message.relatedTableUuid);
    message.customForeignKey !== undefined && (obj.customForeignKey = message.customForeignKey);
    message.tableDefinition !== undefined &&
      (obj.tableDefinition = message.tableDefinition ? CreateTableChange.toJSON(message.tableDefinition) : undefined);
    message.relatedTable !== undefined &&
      (obj.relatedTable = message.relatedTable ? CreateTableChange.toJSON(message.relatedTable) : undefined);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial(object: DeepPartial<TableRelationMigration>): TableRelationMigration {
    const message = createBaseTableRelationMigration();
    message.foreignKey = object.foreignKey ?? "";
    message.relationType = object.relationType ?? "";
    message.required = object.required ?? false;
    message.uuid = object.uuid ?? "";
    message.tableDefinitionUuid = object.tableDefinitionUuid ?? "";
    message.relatedTableUuid = object.relatedTableUuid ?? "";
    message.customForeignKey = object.customForeignKey ?? undefined;
    message.tableDefinition = (object.tableDefinition !== undefined && object.tableDefinition !== null)
      ? CreateTableChange.fromPartial(object.tableDefinition)
      : undefined;
    message.relatedTable = (object.relatedTable !== undefined && object.relatedTable !== null)
      ? CreateTableChange.fromPartial(object.relatedTable)
      : undefined;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseWebApp(): WebApp {
  return { appPages: [], assets: [], variables: [], categories: [] };
}

export const WebApp = {
  encode(message: WebApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.appPages) {
      AppPage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.variables) {
      WebAppVariable.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.categories) {
      AppPageCategory.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebApp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appPages.push(AppPage.decode(reader, reader.uint32()));
          break;
        case 2:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        case 3:
          message.variables.push(WebAppVariable.decode(reader, reader.uint32()));
          break;
        case 4:
          message.categories.push(AppPageCategory.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebApp {
    return {
      appPages: Array.isArray(object?.appPages) ? object.appPages.map((e: any) => AppPage.fromJSON(e)) : [],
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [],
      variables: Array.isArray(object?.variables) ? object.variables.map((e: any) => WebAppVariable.fromJSON(e)) : [],
      categories: Array.isArray(object?.categories)
        ? object.categories.map((e: any) => AppPageCategory.fromJSON(e))
        : [],
    };
  },

  toJSON(message: WebApp): unknown {
    const obj: any = {};
    if (message.appPages) {
      obj.appPages = message.appPages.map((e) => e ? AppPage.toJSON(e) : undefined);
    } else {
      obj.appPages = [];
    }
    if (message.assets) {
      obj.assets = message.assets.map((e) => e ? Asset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    if (message.variables) {
      obj.variables = message.variables.map((e) => e ? WebAppVariable.toJSON(e) : undefined);
    } else {
      obj.variables = [];
    }
    if (message.categories) {
      obj.categories = message.categories.map((e) => e ? AppPageCategory.toJSON(e) : undefined);
    } else {
      obj.categories = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<WebApp>): WebApp {
    const message = createBaseWebApp();
    message.appPages = object.appPages?.map((e) => AppPage.fromPartial(e)) || [];
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    message.variables = object.variables?.map((e) => WebAppVariable.fromPartial(e)) || [];
    message.categories = object.categories?.map((e) => AppPageCategory.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWebAppVariable(): WebAppVariable {
  return { type: 0, name: "", value: "" };
}

export const WebAppVariable = {
  encode(message: WebAppVariable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebAppVariable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebAppVariable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebAppVariable {
    return {
      type: isSet(object.type) ? webAppVariableTypeFromJSON(object.type) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: WebAppVariable): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = webAppVariableTypeToJSON(message.type));
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<WebAppVariable>): WebAppVariable {
    const message = createBaseWebAppVariable();
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseAsset(): Asset {
  return { id: "", url: "", fileName: "", fileSize: 0, contentType: "" };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.fileName !== "") {
      writer.uint32(26).string(message.fileName);
    }
    if (message.fileSize !== 0) {
      writer.uint32(32).int32(message.fileSize);
    }
    if (message.contentType !== "") {
      writer.uint32(42).string(message.contentType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.fileName = reader.string();
          break;
        case 4:
          message.fileSize = reader.int32();
          break;
        case 5:
          message.contentType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      url: isSet(object.url) ? String(object.url) : "",
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.url !== undefined && (obj.url = message.url);
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.contentType !== undefined && (obj.contentType = message.contentType);
    return obj;
  },

  fromPartial(object: DeepPartial<Asset>): Asset {
    const message = createBaseAsset();
    message.id = object.id ?? "";
    message.url = object.url ?? "";
    message.fileName = object.fileName ?? "";
    message.fileSize = object.fileSize ?? 0;
    message.contentType = object.contentType ?? "";
    return message;
  },
};

function createBaseAppPage(): AppPage {
  return { id: "", pageName: "", slug: "", pageType: 0, nodes: [], categoryId: "" };
}

export const AppPage = {
  encode(message: AppPage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.pageName !== "") {
      writer.uint32(18).string(message.pageName);
    }
    if (message.slug !== "") {
      writer.uint32(26).string(message.slug);
    }
    if (message.pageType !== 0) {
      writer.uint32(32).int32(message.pageType);
    }
    for (const v of message.nodes) {
      PageNode.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.categoryId !== "") {
      writer.uint32(50).string(message.categoryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppPage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppPage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.pageName = reader.string();
          break;
        case 3:
          message.slug = reader.string();
          break;
        case 4:
          message.pageType = reader.int32() as any;
          break;
        case 5:
          message.nodes.push(PageNode.decode(reader, reader.uint32()));
          break;
        case 6:
          message.categoryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppPage {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      pageName: isSet(object.pageName) ? String(object.pageName) : "",
      slug: isSet(object.slug) ? String(object.slug) : "",
      pageType: isSet(object.pageType) ? appPagePageTypeFromJSON(object.pageType) : 0,
      nodes: Array.isArray(object?.nodes) ? object.nodes.map((e: any) => PageNode.fromJSON(e)) : [],
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : "",
    };
  },

  toJSON(message: AppPage): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.pageName !== undefined && (obj.pageName = message.pageName);
    message.slug !== undefined && (obj.slug = message.slug);
    message.pageType !== undefined && (obj.pageType = appPagePageTypeToJSON(message.pageType));
    if (message.nodes) {
      obj.nodes = message.nodes.map((e) => e ? PageNode.toJSON(e) : undefined);
    } else {
      obj.nodes = [];
    }
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    return obj;
  },

  fromPartial(object: DeepPartial<AppPage>): AppPage {
    const message = createBaseAppPage();
    message.id = object.id ?? "";
    message.pageName = object.pageName ?? "";
    message.slug = object.slug ?? "";
    message.pageType = object.pageType ?? 0;
    message.nodes = object.nodes?.map((e) => PageNode.fromPartial(e)) || [];
    message.categoryId = object.categoryId ?? "";
    return message;
  },
};

function createBaseAppPageCategory(): AppPageCategory {
  return { id: "", name: "" };
}

export const AppPageCategory = {
  encode(message: AppPageCategory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppPageCategory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppPageCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppPageCategory {
    return { id: isSet(object.id) ? String(object.id) : "", name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: AppPageCategory): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<AppPageCategory>): AppPageCategory {
    const message = createBaseAppPageCategory();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBasePageNode(): PageNode {
  return { id: "", displayName: "", name: "", parent: "", nodes: [], linkedNodes: {}, componentName: "" };
}

export const PageNode = {
  encode(message: PageNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.parent !== "") {
      writer.uint32(34).string(message.parent);
    }
    for (const v of message.nodes) {
      writer.uint32(42).string(v!);
    }
    Object.entries(message.linkedNodes).forEach(([key, value]) => {
      PageNodeLinkedNodesEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.componentName !== "") {
      writer.uint32(58).string(message.componentName);
    }
    if (message.custom !== undefined) {
      NodeCustom.encode(message.custom, writer.uint32(66).fork()).ldelim();
    }
    if (message.webProps !== undefined) {
      WebNodeProps.encode(message.webProps, writer.uint32(74).fork()).ldelim();
    }
    if (message.mobileProps !== undefined) {
      MobileNodeProps.encode(message.mobileProps, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.parent = reader.string();
          break;
        case 5:
          message.nodes.push(reader.string());
          break;
        case 6:
          const entry6 = PageNodeLinkedNodesEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.linkedNodes[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.componentName = reader.string();
          break;
        case 8:
          message.custom = NodeCustom.decode(reader, reader.uint32());
          break;
        case 9:
          message.webProps = WebNodeProps.decode(reader, reader.uint32());
          break;
        case 10:
          message.mobileProps = MobileNodeProps.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PageNode {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      name: isSet(object.name) ? String(object.name) : "",
      parent: isSet(object.parent) ? String(object.parent) : "",
      nodes: Array.isArray(object?.nodes) ? object.nodes.map((e: any) => String(e)) : [],
      linkedNodes: isObject(object.linkedNodes)
        ? Object.entries(object.linkedNodes).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      componentName: isSet(object.componentName) ? String(object.componentName) : "",
      custom: isSet(object.custom) ? NodeCustom.fromJSON(object.custom) : undefined,
      webProps: isSet(object.webProps) ? WebNodeProps.fromJSON(object.webProps) : undefined,
      mobileProps: isSet(object.mobileProps) ? MobileNodeProps.fromJSON(object.mobileProps) : undefined,
    };
  },

  toJSON(message: PageNode): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.name !== undefined && (obj.name = message.name);
    message.parent !== undefined && (obj.parent = message.parent);
    if (message.nodes) {
      obj.nodes = message.nodes.map((e) => e);
    } else {
      obj.nodes = [];
    }
    obj.linkedNodes = {};
    if (message.linkedNodes) {
      Object.entries(message.linkedNodes).forEach(([k, v]) => {
        obj.linkedNodes[k] = v;
      });
    }
    message.componentName !== undefined && (obj.componentName = message.componentName);
    message.custom !== undefined && (obj.custom = message.custom ? NodeCustom.toJSON(message.custom) : undefined);
    message.webProps !== undefined &&
      (obj.webProps = message.webProps ? WebNodeProps.toJSON(message.webProps) : undefined);
    message.mobileProps !== undefined &&
      (obj.mobileProps = message.mobileProps ? MobileNodeProps.toJSON(message.mobileProps) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PageNode>): PageNode {
    const message = createBasePageNode();
    message.id = object.id ?? "";
    message.displayName = object.displayName ?? "";
    message.name = object.name ?? "";
    message.parent = object.parent ?? "";
    message.nodes = object.nodes?.map((e) => e) || [];
    message.linkedNodes = Object.entries(object.linkedNodes ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.componentName = object.componentName ?? "";
    message.custom = (object.custom !== undefined && object.custom !== null)
      ? NodeCustom.fromPartial(object.custom)
      : undefined;
    message.webProps = (object.webProps !== undefined && object.webProps !== null)
      ? WebNodeProps.fromPartial(object.webProps)
      : undefined;
    message.mobileProps = (object.mobileProps !== undefined && object.mobileProps !== null)
      ? MobileNodeProps.fromPartial(object.mobileProps)
      : undefined;
    return message;
  },
};

function createBasePageNodeLinkedNodesEntry(): PageNodeLinkedNodesEntry {
  return { key: "", value: "" };
}

export const PageNodeLinkedNodesEntry = {
  encode(message: PageNodeLinkedNodesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageNodeLinkedNodesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageNodeLinkedNodesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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

  fromJSON(object: any): PageNodeLinkedNodesEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: PageNodeLinkedNodesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<PageNodeLinkedNodesEntry>): PageNodeLinkedNodesEntry {
    const message = createBasePageNodeLinkedNodesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseWebNodeProps(): WebNodeProps {
  return {
    elementKey: "",
    gutter: [],
    drawerTitle: [],
    placeholder: [],
    inputLabel: [],
    href: [],
    action: [],
    data: [],
    totalPage: [],
    defaultValue: [],
    source: [],
    title: [],
    childrenData: [],
    responsiveVisibility: [],
    dataSource: [],
    tableColumns: [],
    tableActions: [],
    onPaginationChange: [],
    onDataSortingChange: [],
  };
}

export const WebNodeProps = {
  encode(message: WebNodeProps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elementKey !== "") {
      writer.uint32(10).string(message.elementKey);
    }
    if (message.buttonType !== undefined) {
      writer.uint32(18).string(message.buttonType);
    }
    if (message.span !== undefined) {
      writer.uint32(26).string(message.span);
    }
    if (message.offset !== undefined) {
      writer.uint32(34).string(message.offset);
    }
    if (message.pushProp !== undefined) {
      writer.uint32(42).string(message.pushProp);
    }
    if (message.pullProp !== undefined) {
      writer.uint32(50).string(message.pullProp);
    }
    if (message.order !== undefined) {
      writer.uint32(58).string(message.order);
    }
    writer.uint32(66).fork();
    for (const v of message.gutter) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.wrap !== undefined) {
      writer.uint32(74).string(message.wrap);
    }
    if (message.justify !== undefined) {
      writer.uint32(82).string(message.justify);
    }
    if (message.align !== undefined) {
      writer.uint32(90).string(message.align);
    }
    if (message.pinCount !== undefined) {
      writer.uint32(96).int32(message.pinCount);
    }
    if (message.autoFocus !== undefined) {
      writer.uint32(104).bool(message.autoFocus);
    }
    if (message.otpInputType !== undefined) {
      writer.uint32(114).string(message.otpInputType);
    }
    if (message.iconName !== undefined) {
      writer.uint32(122).string(message.iconName);
    }
    if (message.iconPosition !== undefined) {
      writer.uint32(130).string(message.iconPosition);
    }
    if (message.color !== undefined) {
      writer.uint32(138).string(message.color);
    }
    if (message.activeColor !== undefined) {
      writer.uint32(146).string(message.activeColor);
    }
    if (message.inactiveColor !== undefined) {
      writer.uint32(154).string(message.inactiveColor);
    }
    if (message.checkColor !== undefined) {
      writer.uint32(162).string(message.checkColor);
    }
    if (message.direction !== undefined) {
      writer.uint32(170).string(message.direction);
    }
    if (message.size !== undefined) {
      writer.uint32(178).string(message.size);
    }
    if (message.label !== undefined) {
      writer.uint32(186).string(message.label);
    }
    if (message.dateMode !== undefined) {
      writer.uint32(194).string(message.dateMode);
    }
    if (message.dateFormat !== undefined) {
      writer.uint32(202).string(message.dateFormat);
    }
    if (message.weekFormat !== undefined) {
      writer.uint32(210).string(message.weekFormat);
    }
    if (message.monthFormat !== undefined) {
      writer.uint32(218).string(message.monthFormat);
    }
    if (message.timeFormat !== undefined) {
      writer.uint32(226).string(message.timeFormat);
    }
    if (message.mode !== undefined) {
      writer.uint32(234).string(message.mode);
    }
    if (message.spaceBetween !== undefined) {
      writer.uint32(240).int32(message.spaceBetween);
    }
    if (message.isRequiredAuthentication !== undefined) {
      writer.uint32(248).bool(message.isRequiredAuthentication);
    }
    if (message.redirectUrl !== undefined) {
      writer.uint32(258).string(message.redirectUrl);
    }
    if (message.flex !== undefined) {
      writer.uint32(266).string(message.flex);
    }
    if (message.sourceType !== undefined) {
      writer.uint32(274).string(message.sourceType);
    }
    if (message.isPasswordField !== undefined) {
      writer.uint32(280).bool(message.isPasswordField);
    }
    if (message.alignItems !== undefined) {
      writer.uint32(290).string(message.alignItems);
    }
    if (message.justifyContent !== undefined) {
      writer.uint32(298).string(message.justifyContent);
    }
    if (message.xs !== undefined) {
      writer.uint32(304).int32(message.xs);
    }
    if (message.sm !== undefined) {
      writer.uint32(312).int32(message.sm);
    }
    if (message.md !== undefined) {
      writer.uint32(320).int32(message.md);
    }
    if (message.lg !== undefined) {
      writer.uint32(328).int32(message.lg);
    }
    if (message.xl !== undefined) {
      writer.uint32(336).int32(message.xl);
    }
    if (message.xxl !== undefined) {
      writer.uint32(344).int32(message.xxl);
    }
    if (message.grid !== undefined) {
      Struct.encode(Struct.wrap(message.grid), writer.uint32(354).fork()).ldelim();
    }
    if (message.xlResponsive !== undefined) {
      Struct.encode(Struct.wrap(message.xlResponsive), writer.uint32(362).fork()).ldelim();
    }
    if (message.mdResponsive !== undefined) {
      Struct.encode(Struct.wrap(message.mdResponsive), writer.uint32(370).fork()).ldelim();
    }
    if (message.xsResponsive !== undefined) {
      Struct.encode(Struct.wrap(message.xsResponsive), writer.uint32(378).fork()).ldelim();
    }
    if (message.picker !== undefined) {
      writer.uint32(386).string(message.picker);
    }
    if (message.showTime !== undefined) {
      writer.uint32(392).bool(message.showTime);
    }
    if (message.format !== undefined) {
      writer.uint32(402).string(message.format);
    }
    if (message.disabledOverflow !== undefined) {
      writer.uint32(408).bool(message.disabledOverflow);
    }
    if (message.multiple !== undefined) {
      writer.uint32(416).bool(message.multiple);
    }
    if (message.maxCount !== undefined) {
      writer.uint32(424).int32(message.maxCount);
    }
    if (message.placement !== undefined) {
      writer.uint32(434).string(message.placement);
    }
    if (message.width !== undefined) {
      writer.uint32(440).int32(message.width);
    }
    if (message.closable !== undefined) {
      writer.uint32(448).bool(message.closable);
    }
    if (message.headerVisible !== undefined) {
      writer.uint32(456).bool(message.headerVisible);
    }
    if (message.type !== undefined) {
      writer.uint32(466).string(message.type);
    }
    if (message.textType !== undefined) {
      writer.uint32(474).string(message.textType);
    }
    if (message.slidesToShow !== undefined) {
      writer.uint32(480).int32(message.slidesToShow);
    }
    if (message.variableWidth !== undefined) {
      writer.uint32(488).bool(message.variableWidth);
    }
    if (message.infinity !== undefined) {
      writer.uint32(496).bool(message.infinity);
    }
    if (message.infinite !== undefined) {
      writer.uint32(504).bool(message.infinite);
    }
    if (message.centered !== undefined) {
      writer.uint32(512).bool(message.centered);
    }
    if (message.tabPosition !== undefined) {
      writer.uint32(522).string(message.tabPosition);
    }
    if (message.tabs !== undefined) {
      Struct.encode(Struct.wrap(message.tabs), writer.uint32(530).fork()).ldelim();
    }
    if (message.tabLabelStyle !== undefined) {
      Struct.encode(Struct.wrap(message.tabLabelStyle), writer.uint32(538).fork()).ldelim();
    }
    if (message.defaultActiveKey !== undefined) {
      writer.uint32(546).string(message.defaultActiveKey);
    }
    if (message.isHeaderVisible !== undefined) {
      writer.uint32(552).bool(message.isHeaderVisible);
    }
    if (message.isFooterVisible !== undefined) {
      writer.uint32(560).bool(message.isFooterVisible);
    }
    if (message.isDataSortable !== undefined) {
      writer.uint32(568).bool(message.isDataSortable);
    }
    if (message.isPaginationEnabled !== undefined) {
      writer.uint32(576).bool(message.isPaginationEnabled);
    }
    if (message.paginationPosition !== undefined) {
      writer.uint32(586).string(message.paginationPosition);
    }
    if (message.pageSize !== undefined) {
      writer.uint32(592).int32(message.pageSize);
    }
    if (message.bodyStyle !== undefined) {
      Struct.encode(Struct.wrap(message.bodyStyle), writer.uint32(602).fork()).ldelim();
    }
    if (message.placeholderStyle !== undefined) {
      Struct.encode(Struct.wrap(message.placeholderStyle), writer.uint32(610).fork()).ldelim();
    }
    if (message.containerStyle !== undefined) {
      Struct.encode(Struct.wrap(message.containerStyle), writer.uint32(618).fork()).ldelim();
    }
    if (message.dropdownStyle !== undefined) {
      Struct.encode(Struct.wrap(message.dropdownStyle), writer.uint32(626).fork()).ldelim();
    }
    if (message.optionStyle !== undefined) {
      Struct.encode(Struct.wrap(message.optionStyle), writer.uint32(634).fork()).ldelim();
    }
    if (message.cellStyle !== undefined) {
      Struct.encode(Struct.wrap(message.cellStyle), writer.uint32(642).fork()).ldelim();
    }
    if (message.cellTextStyle !== undefined) {
      Struct.encode(Struct.wrap(message.cellTextStyle), writer.uint32(650).fork()).ldelim();
    }
    if (message.style !== undefined) {
      Struct.encode(Struct.wrap(message.style), writer.uint32(658).fork()).ldelim();
    }
    if (message.buttonStyle !== undefined) {
      Struct.encode(Struct.wrap(message.buttonStyle), writer.uint32(666).fork()).ldelim();
    }
    if (message.headerStyle !== undefined) {
      Struct.encode(Struct.wrap(message.headerStyle), writer.uint32(674).fork()).ldelim();
    }
    if (message.wrapperStyle !== undefined) {
      Struct.encode(Struct.wrap(message.wrapperStyle), writer.uint32(682).fork()).ldelim();
    }
    if (message.tableStyle !== undefined) {
      Struct.encode(Struct.wrap(message.tableStyle), writer.uint32(690).fork()).ldelim();
    }
    if (message.headerRowStyle !== undefined) {
      Struct.encode(Struct.wrap(message.headerRowStyle), writer.uint32(698).fork()).ldelim();
    }
    if (message.headerColumnStyle !== undefined) {
      Struct.encode(Struct.wrap(message.headerColumnStyle), writer.uint32(706).fork()).ldelim();
    }
    if (message.bodyRowStyle !== undefined) {
      Struct.encode(Struct.wrap(message.bodyRowStyle), writer.uint32(714).fork()).ldelim();
    }
    if (message.bodyColumnStyle !== undefined) {
      Struct.encode(Struct.wrap(message.bodyColumnStyle), writer.uint32(722).fork()).ldelim();
    }
    if (message.sortColumnStyle !== undefined) {
      Struct.encode(Struct.wrap(message.sortColumnStyle), writer.uint32(730).fork()).ldelim();
    }
    if (message.footerRowStyle !== undefined) {
      Struct.encode(Struct.wrap(message.footerRowStyle), writer.uint32(738).fork()).ldelim();
    }
    if (message.footerColumnStyle !== undefined) {
      Struct.encode(Struct.wrap(message.footerColumnStyle), writer.uint32(746).fork()).ldelim();
    }
    if (message.paginationWrapperStyle !== undefined) {
      Struct.encode(Struct.wrap(message.paginationWrapperStyle), writer.uint32(754).fork()).ldelim();
    }
    if (message.labelStyle !== undefined) {
      Struct.encode(Struct.wrap(message.labelStyle), writer.uint32(762).fork()).ldelim();
    }
    if (message.inputStyle !== undefined) {
      Struct.encode(Struct.wrap(message.inputStyle), writer.uint32(770).fork()).ldelim();
    }
    if (message.ascendingIconProps !== undefined) {
      WebNodeProps.encode(message.ascendingIconProps, writer.uint32(778).fork()).ldelim();
    }
    if (message.descendingIconProps !== undefined) {
      WebNodeProps.encode(message.descendingIconProps, writer.uint32(786).fork()).ldelim();
    }
    if (message.iconProps !== undefined) {
      WebNodeProps.encode(message.iconProps, writer.uint32(794).fork()).ldelim();
    }
    if (message.drawerProps !== undefined) {
      WebNodeProps.encode(message.drawerProps, writer.uint32(802).fork()).ldelim();
    }
    if (message.buttonProps !== undefined) {
      WebNodeProps.encode(message.buttonProps, writer.uint32(810).fork()).ldelim();
    }
    if (message.prefixIconProps !== undefined) {
      WebNodeProps.encode(message.prefixIconProps, writer.uint32(818).fork()).ldelim();
    }
    if (message.suffixIconProps !== undefined) {
      WebNodeProps.encode(message.suffixIconProps, writer.uint32(826).fork()).ldelim();
    }
    if (message.renderItem !== undefined) {
      RenderMolecule.encode(message.renderItem, writer.uint32(874).fork()).ldelim();
    }
    if (message.header !== undefined) {
      MoleculeComponent.encode(message.header, writer.uint32(882).fork()).ldelim();
    }
    if (message.footer !== undefined) {
      MoleculeComponent.encode(message.footer, writer.uint32(890).fork()).ldelim();
    }
    for (const v of message.drawerTitle) {
      NodeVariable.encode(v!, writer.uint32(898).fork()).ldelim();
    }
    for (const v of message.placeholder) {
      NodeVariable.encode(v!, writer.uint32(906).fork()).ldelim();
    }
    for (const v of message.inputLabel) {
      NodeVariable.encode(v!, writer.uint32(914).fork()).ldelim();
    }
    for (const v of message.href) {
      NodeVariable.encode(v!, writer.uint32(922).fork()).ldelim();
    }
    for (const v of message.action) {
      NodeVariable.encode(v!, writer.uint32(930).fork()).ldelim();
    }
    for (const v of message.data) {
      NodeVariable.encode(v!, writer.uint32(938).fork()).ldelim();
    }
    for (const v of message.totalPage) {
      NodeVariable.encode(v!, writer.uint32(946).fork()).ldelim();
    }
    for (const v of message.defaultValue) {
      NodeVariable.encode(v!, writer.uint32(954).fork()).ldelim();
    }
    for (const v of message.source) {
      NodeVariable.encode(v!, writer.uint32(962).fork()).ldelim();
    }
    for (const v of message.title) {
      NodeVariable.encode(v!, writer.uint32(970).fork()).ldelim();
    }
    for (const v of message.childrenData) {
      NodeVariable.encode(v!, writer.uint32(978).fork()).ldelim();
    }
    for (const v of message.responsiveVisibility) {
      NodeVariable.encode(v!, writer.uint32(986).fork()).ldelim();
    }
    for (const v of message.dataSource) {
      NodeVariable.encode(v!, writer.uint32(994).fork()).ldelim();
    }
    for (const v of message.tableColumns) {
      WebNodePropsTableColumn.encode(v!, writer.uint32(1002).fork()).ldelim();
    }
    for (const v of message.tableActions) {
      WebNodePropsTableColumn.encode(v!, writer.uint32(1010).fork()).ldelim();
    }
    for (const v of message.onPaginationChange) {
      NodeAction.encode(v!, writer.uint32(1018).fork()).ldelim();
    }
    for (const v of message.onDataSortingChange) {
      NodeAction.encode(v!, writer.uint32(1026).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebNodeProps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebNodeProps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elementKey = reader.string();
          break;
        case 2:
          message.buttonType = reader.string();
          break;
        case 3:
          message.span = reader.string();
          break;
        case 4:
          message.offset = reader.string();
          break;
        case 5:
          message.pushProp = reader.string();
          break;
        case 6:
          message.pullProp = reader.string();
          break;
        case 7:
          message.order = reader.string();
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.gutter.push(reader.int32());
            }
          } else {
            message.gutter.push(reader.int32());
          }
          break;
        case 9:
          message.wrap = reader.string();
          break;
        case 10:
          message.justify = reader.string();
          break;
        case 11:
          message.align = reader.string();
          break;
        case 12:
          message.pinCount = reader.int32();
          break;
        case 13:
          message.autoFocus = reader.bool();
          break;
        case 14:
          message.otpInputType = reader.string();
          break;
        case 15:
          message.iconName = reader.string();
          break;
        case 16:
          message.iconPosition = reader.string();
          break;
        case 17:
          message.color = reader.string();
          break;
        case 18:
          message.activeColor = reader.string();
          break;
        case 19:
          message.inactiveColor = reader.string();
          break;
        case 20:
          message.checkColor = reader.string();
          break;
        case 21:
          message.direction = reader.string();
          break;
        case 22:
          message.size = reader.string();
          break;
        case 23:
          message.label = reader.string();
          break;
        case 24:
          message.dateMode = reader.string();
          break;
        case 25:
          message.dateFormat = reader.string();
          break;
        case 26:
          message.weekFormat = reader.string();
          break;
        case 27:
          message.monthFormat = reader.string();
          break;
        case 28:
          message.timeFormat = reader.string();
          break;
        case 29:
          message.mode = reader.string();
          break;
        case 30:
          message.spaceBetween = reader.int32();
          break;
        case 31:
          message.isRequiredAuthentication = reader.bool();
          break;
        case 32:
          message.redirectUrl = reader.string();
          break;
        case 33:
          message.flex = reader.string();
          break;
        case 34:
          message.sourceType = reader.string();
          break;
        case 35:
          message.isPasswordField = reader.bool();
          break;
        case 36:
          message.alignItems = reader.string();
          break;
        case 37:
          message.justifyContent = reader.string();
          break;
        case 38:
          message.xs = reader.int32();
          break;
        case 39:
          message.sm = reader.int32();
          break;
        case 40:
          message.md = reader.int32();
          break;
        case 41:
          message.lg = reader.int32();
          break;
        case 42:
          message.xl = reader.int32();
          break;
        case 43:
          message.xxl = reader.int32();
          break;
        case 44:
          message.grid = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 45:
          message.xlResponsive = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 46:
          message.mdResponsive = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 47:
          message.xsResponsive = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 48:
          message.picker = reader.string();
          break;
        case 49:
          message.showTime = reader.bool();
          break;
        case 50:
          message.format = reader.string();
          break;
        case 51:
          message.disabledOverflow = reader.bool();
          break;
        case 52:
          message.multiple = reader.bool();
          break;
        case 53:
          message.maxCount = reader.int32();
          break;
        case 54:
          message.placement = reader.string();
          break;
        case 55:
          message.width = reader.int32();
          break;
        case 56:
          message.closable = reader.bool();
          break;
        case 57:
          message.headerVisible = reader.bool();
          break;
        case 58:
          message.type = reader.string();
          break;
        case 59:
          message.textType = reader.string();
          break;
        case 60:
          message.slidesToShow = reader.int32();
          break;
        case 61:
          message.variableWidth = reader.bool();
          break;
        case 62:
          message.infinity = reader.bool();
          break;
        case 63:
          message.infinite = reader.bool();
          break;
        case 64:
          message.centered = reader.bool();
          break;
        case 65:
          message.tabPosition = reader.string();
          break;
        case 66:
          message.tabs = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 67:
          message.tabLabelStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 68:
          message.defaultActiveKey = reader.string();
          break;
        case 69:
          message.isHeaderVisible = reader.bool();
          break;
        case 70:
          message.isFooterVisible = reader.bool();
          break;
        case 71:
          message.isDataSortable = reader.bool();
          break;
        case 72:
          message.isPaginationEnabled = reader.bool();
          break;
        case 73:
          message.paginationPosition = reader.string();
          break;
        case 74:
          message.pageSize = reader.int32();
          break;
        case 75:
          message.bodyStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 76:
          message.placeholderStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 77:
          message.containerStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 78:
          message.dropdownStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 79:
          message.optionStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 80:
          message.cellStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 81:
          message.cellTextStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 82:
          message.style = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 83:
          message.buttonStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 84:
          message.headerStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 85:
          message.wrapperStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 86:
          message.tableStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 87:
          message.headerRowStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 88:
          message.headerColumnStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 89:
          message.bodyRowStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 90:
          message.bodyColumnStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 91:
          message.sortColumnStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 92:
          message.footerRowStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 93:
          message.footerColumnStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 94:
          message.paginationWrapperStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 95:
          message.labelStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 96:
          message.inputStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 97:
          message.ascendingIconProps = WebNodeProps.decode(reader, reader.uint32());
          break;
        case 98:
          message.descendingIconProps = WebNodeProps.decode(reader, reader.uint32());
          break;
        case 99:
          message.iconProps = WebNodeProps.decode(reader, reader.uint32());
          break;
        case 100:
          message.drawerProps = WebNodeProps.decode(reader, reader.uint32());
          break;
        case 101:
          message.buttonProps = WebNodeProps.decode(reader, reader.uint32());
          break;
        case 102:
          message.prefixIconProps = WebNodeProps.decode(reader, reader.uint32());
          break;
        case 103:
          message.suffixIconProps = WebNodeProps.decode(reader, reader.uint32());
          break;
        case 109:
          message.renderItem = RenderMolecule.decode(reader, reader.uint32());
          break;
        case 110:
          message.header = MoleculeComponent.decode(reader, reader.uint32());
          break;
        case 111:
          message.footer = MoleculeComponent.decode(reader, reader.uint32());
          break;
        case 112:
          message.drawerTitle.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 113:
          message.placeholder.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 114:
          message.inputLabel.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 115:
          message.href.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 116:
          message.action.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 117:
          message.data.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 118:
          message.totalPage.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 119:
          message.defaultValue.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 120:
          message.source.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 121:
          message.title.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 122:
          message.childrenData.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 123:
          message.responsiveVisibility.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 124:
          message.dataSource.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 125:
          message.tableColumns.push(WebNodePropsTableColumn.decode(reader, reader.uint32()));
          break;
        case 126:
          message.tableActions.push(WebNodePropsTableColumn.decode(reader, reader.uint32()));
          break;
        case 127:
          message.onPaginationChange.push(NodeAction.decode(reader, reader.uint32()));
          break;
        case 128:
          message.onDataSortingChange.push(NodeAction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebNodeProps {
    return {
      elementKey: isSet(object.elementKey) ? String(object.elementKey) : "",
      buttonType: isSet(object.buttonType) ? String(object.buttonType) : undefined,
      span: isSet(object.span) ? String(object.span) : undefined,
      offset: isSet(object.offset) ? String(object.offset) : undefined,
      pushProp: isSet(object.pushProp) ? String(object.pushProp) : undefined,
      pullProp: isSet(object.pullProp) ? String(object.pullProp) : undefined,
      order: isSet(object.order) ? String(object.order) : undefined,
      gutter: Array.isArray(object?.gutter) ? object.gutter.map((e: any) => Number(e)) : [],
      wrap: isSet(object.wrap) ? String(object.wrap) : undefined,
      justify: isSet(object.justify) ? String(object.justify) : undefined,
      align: isSet(object.align) ? String(object.align) : undefined,
      pinCount: isSet(object.pinCount) ? Number(object.pinCount) : undefined,
      autoFocus: isSet(object.autoFocus) ? Boolean(object.autoFocus) : undefined,
      otpInputType: isSet(object.otpInputType) ? String(object.otpInputType) : undefined,
      iconName: isSet(object.iconName) ? String(object.iconName) : undefined,
      iconPosition: isSet(object.iconPosition) ? String(object.iconPosition) : undefined,
      color: isSet(object.color) ? String(object.color) : undefined,
      activeColor: isSet(object.activeColor) ? String(object.activeColor) : undefined,
      inactiveColor: isSet(object.inactiveColor) ? String(object.inactiveColor) : undefined,
      checkColor: isSet(object.checkColor) ? String(object.checkColor) : undefined,
      direction: isSet(object.direction) ? String(object.direction) : undefined,
      size: isSet(object.size) ? String(object.size) : undefined,
      label: isSet(object.label) ? String(object.label) : undefined,
      dateMode: isSet(object.dateMode) ? String(object.dateMode) : undefined,
      dateFormat: isSet(object.dateFormat) ? String(object.dateFormat) : undefined,
      weekFormat: isSet(object.weekFormat) ? String(object.weekFormat) : undefined,
      monthFormat: isSet(object.monthFormat) ? String(object.monthFormat) : undefined,
      timeFormat: isSet(object.timeFormat) ? String(object.timeFormat) : undefined,
      mode: isSet(object.mode) ? String(object.mode) : undefined,
      spaceBetween: isSet(object.spaceBetween) ? Number(object.spaceBetween) : undefined,
      isRequiredAuthentication: isSet(object.isRequiredAuthentication)
        ? Boolean(object.isRequiredAuthentication)
        : undefined,
      redirectUrl: isSet(object.redirectUrl) ? String(object.redirectUrl) : undefined,
      flex: isSet(object.flex) ? String(object.flex) : undefined,
      sourceType: isSet(object.sourceType) ? String(object.sourceType) : undefined,
      isPasswordField: isSet(object.isPasswordField) ? Boolean(object.isPasswordField) : undefined,
      alignItems: isSet(object.alignItems) ? String(object.alignItems) : undefined,
      justifyContent: isSet(object.justifyContent) ? String(object.justifyContent) : undefined,
      xs: isSet(object.xs) ? Number(object.xs) : undefined,
      sm: isSet(object.sm) ? Number(object.sm) : undefined,
      md: isSet(object.md) ? Number(object.md) : undefined,
      lg: isSet(object.lg) ? Number(object.lg) : undefined,
      xl: isSet(object.xl) ? Number(object.xl) : undefined,
      xxl: isSet(object.xxl) ? Number(object.xxl) : undefined,
      grid: isObject(object.grid) ? object.grid : undefined,
      xlResponsive: isObject(object.xlResponsive) ? object.xlResponsive : undefined,
      mdResponsive: isObject(object.mdResponsive) ? object.mdResponsive : undefined,
      xsResponsive: isObject(object.xsResponsive) ? object.xsResponsive : undefined,
      picker: isSet(object.picker) ? String(object.picker) : undefined,
      showTime: isSet(object.showTime) ? Boolean(object.showTime) : undefined,
      format: isSet(object.format) ? String(object.format) : undefined,
      disabledOverflow: isSet(object.disabledOverflow) ? Boolean(object.disabledOverflow) : undefined,
      multiple: isSet(object.multiple) ? Boolean(object.multiple) : undefined,
      maxCount: isSet(object.maxCount) ? Number(object.maxCount) : undefined,
      placement: isSet(object.placement) ? String(object.placement) : undefined,
      width: isSet(object.width) ? Number(object.width) : undefined,
      closable: isSet(object.closable) ? Boolean(object.closable) : undefined,
      headerVisible: isSet(object.headerVisible) ? Boolean(object.headerVisible) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      textType: isSet(object.textType) ? String(object.textType) : undefined,
      slidesToShow: isSet(object.slidesToShow) ? Number(object.slidesToShow) : undefined,
      variableWidth: isSet(object.variableWidth) ? Boolean(object.variableWidth) : undefined,
      infinity: isSet(object.infinity) ? Boolean(object.infinity) : undefined,
      infinite: isSet(object.infinite) ? Boolean(object.infinite) : undefined,
      centered: isSet(object.centered) ? Boolean(object.centered) : undefined,
      tabPosition: isSet(object.tabPosition) ? String(object.tabPosition) : undefined,
      tabs: isObject(object.tabs) ? object.tabs : undefined,
      tabLabelStyle: isObject(object.tabLabelStyle) ? object.tabLabelStyle : undefined,
      defaultActiveKey: isSet(object.defaultActiveKey) ? String(object.defaultActiveKey) : undefined,
      isHeaderVisible: isSet(object.isHeaderVisible) ? Boolean(object.isHeaderVisible) : undefined,
      isFooterVisible: isSet(object.isFooterVisible) ? Boolean(object.isFooterVisible) : undefined,
      isDataSortable: isSet(object.isDataSortable) ? Boolean(object.isDataSortable) : undefined,
      isPaginationEnabled: isSet(object.isPaginationEnabled) ? Boolean(object.isPaginationEnabled) : undefined,
      paginationPosition: isSet(object.paginationPosition) ? String(object.paginationPosition) : undefined,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : undefined,
      bodyStyle: isObject(object.bodyStyle) ? object.bodyStyle : undefined,
      placeholderStyle: isObject(object.placeholderStyle) ? object.placeholderStyle : undefined,
      containerStyle: isObject(object.containerStyle) ? object.containerStyle : undefined,
      dropdownStyle: isObject(object.dropdownStyle) ? object.dropdownStyle : undefined,
      optionStyle: isObject(object.optionStyle) ? object.optionStyle : undefined,
      cellStyle: isObject(object.cellStyle) ? object.cellStyle : undefined,
      cellTextStyle: isObject(object.cellTextStyle) ? object.cellTextStyle : undefined,
      style: isObject(object.style) ? object.style : undefined,
      buttonStyle: isObject(object.buttonStyle) ? object.buttonStyle : undefined,
      headerStyle: isObject(object.headerStyle) ? object.headerStyle : undefined,
      wrapperStyle: isObject(object.wrapperStyle) ? object.wrapperStyle : undefined,
      tableStyle: isObject(object.tableStyle) ? object.tableStyle : undefined,
      headerRowStyle: isObject(object.headerRowStyle) ? object.headerRowStyle : undefined,
      headerColumnStyle: isObject(object.headerColumnStyle) ? object.headerColumnStyle : undefined,
      bodyRowStyle: isObject(object.bodyRowStyle) ? object.bodyRowStyle : undefined,
      bodyColumnStyle: isObject(object.bodyColumnStyle) ? object.bodyColumnStyle : undefined,
      sortColumnStyle: isObject(object.sortColumnStyle) ? object.sortColumnStyle : undefined,
      footerRowStyle: isObject(object.footerRowStyle) ? object.footerRowStyle : undefined,
      footerColumnStyle: isObject(object.footerColumnStyle) ? object.footerColumnStyle : undefined,
      paginationWrapperStyle: isObject(object.paginationWrapperStyle) ? object.paginationWrapperStyle : undefined,
      labelStyle: isObject(object.labelStyle) ? object.labelStyle : undefined,
      inputStyle: isObject(object.inputStyle) ? object.inputStyle : undefined,
      ascendingIconProps: isSet(object.ascendingIconProps)
        ? WebNodeProps.fromJSON(object.ascendingIconProps)
        : undefined,
      descendingIconProps: isSet(object.descendingIconProps)
        ? WebNodeProps.fromJSON(object.descendingIconProps)
        : undefined,
      iconProps: isSet(object.iconProps) ? WebNodeProps.fromJSON(object.iconProps) : undefined,
      drawerProps: isSet(object.drawerProps) ? WebNodeProps.fromJSON(object.drawerProps) : undefined,
      buttonProps: isSet(object.buttonProps) ? WebNodeProps.fromJSON(object.buttonProps) : undefined,
      prefixIconProps: isSet(object.prefixIconProps) ? WebNodeProps.fromJSON(object.prefixIconProps) : undefined,
      suffixIconProps: isSet(object.suffixIconProps) ? WebNodeProps.fromJSON(object.suffixIconProps) : undefined,
      renderItem: isSet(object.renderItem) ? RenderMolecule.fromJSON(object.renderItem) : undefined,
      header: isSet(object.header) ? MoleculeComponent.fromJSON(object.header) : undefined,
      footer: isSet(object.footer) ? MoleculeComponent.fromJSON(object.footer) : undefined,
      drawerTitle: Array.isArray(object?.drawerTitle)
        ? object.drawerTitle.map((e: any) => NodeVariable.fromJSON(e))
        : [],
      placeholder: Array.isArray(object?.placeholder)
        ? object.placeholder.map((e: any) => NodeVariable.fromJSON(e))
        : [],
      inputLabel: Array.isArray(object?.inputLabel) ? object.inputLabel.map((e: any) => NodeVariable.fromJSON(e)) : [],
      href: Array.isArray(object?.href) ? object.href.map((e: any) => NodeVariable.fromJSON(e)) : [],
      action: Array.isArray(object?.action) ? object.action.map((e: any) => NodeVariable.fromJSON(e)) : [],
      data: Array.isArray(object?.data) ? object.data.map((e: any) => NodeVariable.fromJSON(e)) : [],
      totalPage: Array.isArray(object?.totalPage) ? object.totalPage.map((e: any) => NodeVariable.fromJSON(e)) : [],
      defaultValue: Array.isArray(object?.defaultValue)
        ? object.defaultValue.map((e: any) => NodeVariable.fromJSON(e))
        : [],
      source: Array.isArray(object?.source) ? object.source.map((e: any) => NodeVariable.fromJSON(e)) : [],
      title: Array.isArray(object?.title) ? object.title.map((e: any) => NodeVariable.fromJSON(e)) : [],
      childrenData: Array.isArray(object?.childrenData)
        ? object.childrenData.map((e: any) => NodeVariable.fromJSON(e))
        : [],
      responsiveVisibility: Array.isArray(object?.responsiveVisibility)
        ? object.responsiveVisibility.map((e: any) => NodeVariable.fromJSON(e))
        : [],
      dataSource: Array.isArray(object?.dataSource) ? object.dataSource.map((e: any) => NodeVariable.fromJSON(e)) : [],
      tableColumns: Array.isArray(object?.tableColumns)
        ? object.tableColumns.map((e: any) => WebNodePropsTableColumn.fromJSON(e))
        : [],
      tableActions: Array.isArray(object?.tableActions)
        ? object.tableActions.map((e: any) => WebNodePropsTableColumn.fromJSON(e))
        : [],
      onPaginationChange: Array.isArray(object?.onPaginationChange)
        ? object.onPaginationChange.map((e: any) => NodeAction.fromJSON(e))
        : [],
      onDataSortingChange: Array.isArray(object?.onDataSortingChange)
        ? object.onDataSortingChange.map((e: any) => NodeAction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: WebNodeProps): unknown {
    const obj: any = {};
    message.elementKey !== undefined && (obj.elementKey = message.elementKey);
    message.buttonType !== undefined && (obj.buttonType = message.buttonType);
    message.span !== undefined && (obj.span = message.span);
    message.offset !== undefined && (obj.offset = message.offset);
    message.pushProp !== undefined && (obj.pushProp = message.pushProp);
    message.pullProp !== undefined && (obj.pullProp = message.pullProp);
    message.order !== undefined && (obj.order = message.order);
    if (message.gutter) {
      obj.gutter = message.gutter.map((e) => Math.round(e));
    } else {
      obj.gutter = [];
    }
    message.wrap !== undefined && (obj.wrap = message.wrap);
    message.justify !== undefined && (obj.justify = message.justify);
    message.align !== undefined && (obj.align = message.align);
    message.pinCount !== undefined && (obj.pinCount = Math.round(message.pinCount));
    message.autoFocus !== undefined && (obj.autoFocus = message.autoFocus);
    message.otpInputType !== undefined && (obj.otpInputType = message.otpInputType);
    message.iconName !== undefined && (obj.iconName = message.iconName);
    message.iconPosition !== undefined && (obj.iconPosition = message.iconPosition);
    message.color !== undefined && (obj.color = message.color);
    message.activeColor !== undefined && (obj.activeColor = message.activeColor);
    message.inactiveColor !== undefined && (obj.inactiveColor = message.inactiveColor);
    message.checkColor !== undefined && (obj.checkColor = message.checkColor);
    message.direction !== undefined && (obj.direction = message.direction);
    message.size !== undefined && (obj.size = message.size);
    message.label !== undefined && (obj.label = message.label);
    message.dateMode !== undefined && (obj.dateMode = message.dateMode);
    message.dateFormat !== undefined && (obj.dateFormat = message.dateFormat);
    message.weekFormat !== undefined && (obj.weekFormat = message.weekFormat);
    message.monthFormat !== undefined && (obj.monthFormat = message.monthFormat);
    message.timeFormat !== undefined && (obj.timeFormat = message.timeFormat);
    message.mode !== undefined && (obj.mode = message.mode);
    message.spaceBetween !== undefined && (obj.spaceBetween = Math.round(message.spaceBetween));
    message.isRequiredAuthentication !== undefined && (obj.isRequiredAuthentication = message.isRequiredAuthentication);
    message.redirectUrl !== undefined && (obj.redirectUrl = message.redirectUrl);
    message.flex !== undefined && (obj.flex = message.flex);
    message.sourceType !== undefined && (obj.sourceType = message.sourceType);
    message.isPasswordField !== undefined && (obj.isPasswordField = message.isPasswordField);
    message.alignItems !== undefined && (obj.alignItems = message.alignItems);
    message.justifyContent !== undefined && (obj.justifyContent = message.justifyContent);
    message.xs !== undefined && (obj.xs = Math.round(message.xs));
    message.sm !== undefined && (obj.sm = Math.round(message.sm));
    message.md !== undefined && (obj.md = Math.round(message.md));
    message.lg !== undefined && (obj.lg = Math.round(message.lg));
    message.xl !== undefined && (obj.xl = Math.round(message.xl));
    message.xxl !== undefined && (obj.xxl = Math.round(message.xxl));
    message.grid !== undefined && (obj.grid = message.grid);
    message.xlResponsive !== undefined && (obj.xlResponsive = message.xlResponsive);
    message.mdResponsive !== undefined && (obj.mdResponsive = message.mdResponsive);
    message.xsResponsive !== undefined && (obj.xsResponsive = message.xsResponsive);
    message.picker !== undefined && (obj.picker = message.picker);
    message.showTime !== undefined && (obj.showTime = message.showTime);
    message.format !== undefined && (obj.format = message.format);
    message.disabledOverflow !== undefined && (obj.disabledOverflow = message.disabledOverflow);
    message.multiple !== undefined && (obj.multiple = message.multiple);
    message.maxCount !== undefined && (obj.maxCount = Math.round(message.maxCount));
    message.placement !== undefined && (obj.placement = message.placement);
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.closable !== undefined && (obj.closable = message.closable);
    message.headerVisible !== undefined && (obj.headerVisible = message.headerVisible);
    message.type !== undefined && (obj.type = message.type);
    message.textType !== undefined && (obj.textType = message.textType);
    message.slidesToShow !== undefined && (obj.slidesToShow = Math.round(message.slidesToShow));
    message.variableWidth !== undefined && (obj.variableWidth = message.variableWidth);
    message.infinity !== undefined && (obj.infinity = message.infinity);
    message.infinite !== undefined && (obj.infinite = message.infinite);
    message.centered !== undefined && (obj.centered = message.centered);
    message.tabPosition !== undefined && (obj.tabPosition = message.tabPosition);
    message.tabs !== undefined && (obj.tabs = message.tabs);
    message.tabLabelStyle !== undefined && (obj.tabLabelStyle = message.tabLabelStyle);
    message.defaultActiveKey !== undefined && (obj.defaultActiveKey = message.defaultActiveKey);
    message.isHeaderVisible !== undefined && (obj.isHeaderVisible = message.isHeaderVisible);
    message.isFooterVisible !== undefined && (obj.isFooterVisible = message.isFooterVisible);
    message.isDataSortable !== undefined && (obj.isDataSortable = message.isDataSortable);
    message.isPaginationEnabled !== undefined && (obj.isPaginationEnabled = message.isPaginationEnabled);
    message.paginationPosition !== undefined && (obj.paginationPosition = message.paginationPosition);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.bodyStyle !== undefined && (obj.bodyStyle = message.bodyStyle);
    message.placeholderStyle !== undefined && (obj.placeholderStyle = message.placeholderStyle);
    message.containerStyle !== undefined && (obj.containerStyle = message.containerStyle);
    message.dropdownStyle !== undefined && (obj.dropdownStyle = message.dropdownStyle);
    message.optionStyle !== undefined && (obj.optionStyle = message.optionStyle);
    message.cellStyle !== undefined && (obj.cellStyle = message.cellStyle);
    message.cellTextStyle !== undefined && (obj.cellTextStyle = message.cellTextStyle);
    message.style !== undefined && (obj.style = message.style);
    message.buttonStyle !== undefined && (obj.buttonStyle = message.buttonStyle);
    message.headerStyle !== undefined && (obj.headerStyle = message.headerStyle);
    message.wrapperStyle !== undefined && (obj.wrapperStyle = message.wrapperStyle);
    message.tableStyle !== undefined && (obj.tableStyle = message.tableStyle);
    message.headerRowStyle !== undefined && (obj.headerRowStyle = message.headerRowStyle);
    message.headerColumnStyle !== undefined && (obj.headerColumnStyle = message.headerColumnStyle);
    message.bodyRowStyle !== undefined && (obj.bodyRowStyle = message.bodyRowStyle);
    message.bodyColumnStyle !== undefined && (obj.bodyColumnStyle = message.bodyColumnStyle);
    message.sortColumnStyle !== undefined && (obj.sortColumnStyle = message.sortColumnStyle);
    message.footerRowStyle !== undefined && (obj.footerRowStyle = message.footerRowStyle);
    message.footerColumnStyle !== undefined && (obj.footerColumnStyle = message.footerColumnStyle);
    message.paginationWrapperStyle !== undefined && (obj.paginationWrapperStyle = message.paginationWrapperStyle);
    message.labelStyle !== undefined && (obj.labelStyle = message.labelStyle);
    message.inputStyle !== undefined && (obj.inputStyle = message.inputStyle);
    message.ascendingIconProps !== undefined &&
      (obj.ascendingIconProps = message.ascendingIconProps
        ? WebNodeProps.toJSON(message.ascendingIconProps)
        : undefined);
    message.descendingIconProps !== undefined && (obj.descendingIconProps = message.descendingIconProps
      ? WebNodeProps.toJSON(message.descendingIconProps)
      : undefined);
    message.iconProps !== undefined &&
      (obj.iconProps = message.iconProps ? WebNodeProps.toJSON(message.iconProps) : undefined);
    message.drawerProps !== undefined &&
      (obj.drawerProps = message.drawerProps ? WebNodeProps.toJSON(message.drawerProps) : undefined);
    message.buttonProps !== undefined &&
      (obj.buttonProps = message.buttonProps ? WebNodeProps.toJSON(message.buttonProps) : undefined);
    message.prefixIconProps !== undefined &&
      (obj.prefixIconProps = message.prefixIconProps ? WebNodeProps.toJSON(message.prefixIconProps) : undefined);
    message.suffixIconProps !== undefined &&
      (obj.suffixIconProps = message.suffixIconProps ? WebNodeProps.toJSON(message.suffixIconProps) : undefined);
    message.renderItem !== undefined &&
      (obj.renderItem = message.renderItem ? RenderMolecule.toJSON(message.renderItem) : undefined);
    message.header !== undefined &&
      (obj.header = message.header ? MoleculeComponent.toJSON(message.header) : undefined);
    message.footer !== undefined &&
      (obj.footer = message.footer ? MoleculeComponent.toJSON(message.footer) : undefined);
    if (message.drawerTitle) {
      obj.drawerTitle = message.drawerTitle.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.drawerTitle = [];
    }
    if (message.placeholder) {
      obj.placeholder = message.placeholder.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.placeholder = [];
    }
    if (message.inputLabel) {
      obj.inputLabel = message.inputLabel.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.inputLabel = [];
    }
    if (message.href) {
      obj.href = message.href.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.href = [];
    }
    if (message.action) {
      obj.action = message.action.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.action = [];
    }
    if (message.data) {
      obj.data = message.data.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    if (message.totalPage) {
      obj.totalPage = message.totalPage.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.totalPage = [];
    }
    if (message.defaultValue) {
      obj.defaultValue = message.defaultValue.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.defaultValue = [];
    }
    if (message.source) {
      obj.source = message.source.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.source = [];
    }
    if (message.title) {
      obj.title = message.title.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.title = [];
    }
    if (message.childrenData) {
      obj.childrenData = message.childrenData.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.childrenData = [];
    }
    if (message.responsiveVisibility) {
      obj.responsiveVisibility = message.responsiveVisibility.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.responsiveVisibility = [];
    }
    if (message.dataSource) {
      obj.dataSource = message.dataSource.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.dataSource = [];
    }
    if (message.tableColumns) {
      obj.tableColumns = message.tableColumns.map((e) => e ? WebNodePropsTableColumn.toJSON(e) : undefined);
    } else {
      obj.tableColumns = [];
    }
    if (message.tableActions) {
      obj.tableActions = message.tableActions.map((e) => e ? WebNodePropsTableColumn.toJSON(e) : undefined);
    } else {
      obj.tableActions = [];
    }
    if (message.onPaginationChange) {
      obj.onPaginationChange = message.onPaginationChange.map((e) => e ? NodeAction.toJSON(e) : undefined);
    } else {
      obj.onPaginationChange = [];
    }
    if (message.onDataSortingChange) {
      obj.onDataSortingChange = message.onDataSortingChange.map((e) => e ? NodeAction.toJSON(e) : undefined);
    } else {
      obj.onDataSortingChange = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<WebNodeProps>): WebNodeProps {
    const message = createBaseWebNodeProps();
    message.elementKey = object.elementKey ?? "";
    message.buttonType = object.buttonType ?? undefined;
    message.span = object.span ?? undefined;
    message.offset = object.offset ?? undefined;
    message.pushProp = object.pushProp ?? undefined;
    message.pullProp = object.pullProp ?? undefined;
    message.order = object.order ?? undefined;
    message.gutter = object.gutter?.map((e) => e) || [];
    message.wrap = object.wrap ?? undefined;
    message.justify = object.justify ?? undefined;
    message.align = object.align ?? undefined;
    message.pinCount = object.pinCount ?? undefined;
    message.autoFocus = object.autoFocus ?? undefined;
    message.otpInputType = object.otpInputType ?? undefined;
    message.iconName = object.iconName ?? undefined;
    message.iconPosition = object.iconPosition ?? undefined;
    message.color = object.color ?? undefined;
    message.activeColor = object.activeColor ?? undefined;
    message.inactiveColor = object.inactiveColor ?? undefined;
    message.checkColor = object.checkColor ?? undefined;
    message.direction = object.direction ?? undefined;
    message.size = object.size ?? undefined;
    message.label = object.label ?? undefined;
    message.dateMode = object.dateMode ?? undefined;
    message.dateFormat = object.dateFormat ?? undefined;
    message.weekFormat = object.weekFormat ?? undefined;
    message.monthFormat = object.monthFormat ?? undefined;
    message.timeFormat = object.timeFormat ?? undefined;
    message.mode = object.mode ?? undefined;
    message.spaceBetween = object.spaceBetween ?? undefined;
    message.isRequiredAuthentication = object.isRequiredAuthentication ?? undefined;
    message.redirectUrl = object.redirectUrl ?? undefined;
    message.flex = object.flex ?? undefined;
    message.sourceType = object.sourceType ?? undefined;
    message.isPasswordField = object.isPasswordField ?? undefined;
    message.alignItems = object.alignItems ?? undefined;
    message.justifyContent = object.justifyContent ?? undefined;
    message.xs = object.xs ?? undefined;
    message.sm = object.sm ?? undefined;
    message.md = object.md ?? undefined;
    message.lg = object.lg ?? undefined;
    message.xl = object.xl ?? undefined;
    message.xxl = object.xxl ?? undefined;
    message.grid = object.grid ?? undefined;
    message.xlResponsive = object.xlResponsive ?? undefined;
    message.mdResponsive = object.mdResponsive ?? undefined;
    message.xsResponsive = object.xsResponsive ?? undefined;
    message.picker = object.picker ?? undefined;
    message.showTime = object.showTime ?? undefined;
    message.format = object.format ?? undefined;
    message.disabledOverflow = object.disabledOverflow ?? undefined;
    message.multiple = object.multiple ?? undefined;
    message.maxCount = object.maxCount ?? undefined;
    message.placement = object.placement ?? undefined;
    message.width = object.width ?? undefined;
    message.closable = object.closable ?? undefined;
    message.headerVisible = object.headerVisible ?? undefined;
    message.type = object.type ?? undefined;
    message.textType = object.textType ?? undefined;
    message.slidesToShow = object.slidesToShow ?? undefined;
    message.variableWidth = object.variableWidth ?? undefined;
    message.infinity = object.infinity ?? undefined;
    message.infinite = object.infinite ?? undefined;
    message.centered = object.centered ?? undefined;
    message.tabPosition = object.tabPosition ?? undefined;
    message.tabs = object.tabs ?? undefined;
    message.tabLabelStyle = object.tabLabelStyle ?? undefined;
    message.defaultActiveKey = object.defaultActiveKey ?? undefined;
    message.isHeaderVisible = object.isHeaderVisible ?? undefined;
    message.isFooterVisible = object.isFooterVisible ?? undefined;
    message.isDataSortable = object.isDataSortable ?? undefined;
    message.isPaginationEnabled = object.isPaginationEnabled ?? undefined;
    message.paginationPosition = object.paginationPosition ?? undefined;
    message.pageSize = object.pageSize ?? undefined;
    message.bodyStyle = object.bodyStyle ?? undefined;
    message.placeholderStyle = object.placeholderStyle ?? undefined;
    message.containerStyle = object.containerStyle ?? undefined;
    message.dropdownStyle = object.dropdownStyle ?? undefined;
    message.optionStyle = object.optionStyle ?? undefined;
    message.cellStyle = object.cellStyle ?? undefined;
    message.cellTextStyle = object.cellTextStyle ?? undefined;
    message.style = object.style ?? undefined;
    message.buttonStyle = object.buttonStyle ?? undefined;
    message.headerStyle = object.headerStyle ?? undefined;
    message.wrapperStyle = object.wrapperStyle ?? undefined;
    message.tableStyle = object.tableStyle ?? undefined;
    message.headerRowStyle = object.headerRowStyle ?? undefined;
    message.headerColumnStyle = object.headerColumnStyle ?? undefined;
    message.bodyRowStyle = object.bodyRowStyle ?? undefined;
    message.bodyColumnStyle = object.bodyColumnStyle ?? undefined;
    message.sortColumnStyle = object.sortColumnStyle ?? undefined;
    message.footerRowStyle = object.footerRowStyle ?? undefined;
    message.footerColumnStyle = object.footerColumnStyle ?? undefined;
    message.paginationWrapperStyle = object.paginationWrapperStyle ?? undefined;
    message.labelStyle = object.labelStyle ?? undefined;
    message.inputStyle = object.inputStyle ?? undefined;
    message.ascendingIconProps = (object.ascendingIconProps !== undefined && object.ascendingIconProps !== null)
      ? WebNodeProps.fromPartial(object.ascendingIconProps)
      : undefined;
    message.descendingIconProps = (object.descendingIconProps !== undefined && object.descendingIconProps !== null)
      ? WebNodeProps.fromPartial(object.descendingIconProps)
      : undefined;
    message.iconProps = (object.iconProps !== undefined && object.iconProps !== null)
      ? WebNodeProps.fromPartial(object.iconProps)
      : undefined;
    message.drawerProps = (object.drawerProps !== undefined && object.drawerProps !== null)
      ? WebNodeProps.fromPartial(object.drawerProps)
      : undefined;
    message.buttonProps = (object.buttonProps !== undefined && object.buttonProps !== null)
      ? WebNodeProps.fromPartial(object.buttonProps)
      : undefined;
    message.prefixIconProps = (object.prefixIconProps !== undefined && object.prefixIconProps !== null)
      ? WebNodeProps.fromPartial(object.prefixIconProps)
      : undefined;
    message.suffixIconProps = (object.suffixIconProps !== undefined && object.suffixIconProps !== null)
      ? WebNodeProps.fromPartial(object.suffixIconProps)
      : undefined;
    message.renderItem = (object.renderItem !== undefined && object.renderItem !== null)
      ? RenderMolecule.fromPartial(object.renderItem)
      : undefined;
    message.header = (object.header !== undefined && object.header !== null)
      ? MoleculeComponent.fromPartial(object.header)
      : undefined;
    message.footer = (object.footer !== undefined && object.footer !== null)
      ? MoleculeComponent.fromPartial(object.footer)
      : undefined;
    message.drawerTitle = object.drawerTitle?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.placeholder = object.placeholder?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.inputLabel = object.inputLabel?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.href = object.href?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.action = object.action?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.data = object.data?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.totalPage = object.totalPage?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.defaultValue = object.defaultValue?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.source = object.source?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.title = object.title?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.childrenData = object.childrenData?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.responsiveVisibility = object.responsiveVisibility?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.dataSource = object.dataSource?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.tableColumns = object.tableColumns?.map((e) => WebNodePropsTableColumn.fromPartial(e)) || [];
    message.tableActions = object.tableActions?.map((e) => WebNodePropsTableColumn.fromPartial(e)) || [];
    message.onPaginationChange = object.onPaginationChange?.map((e) => NodeAction.fromPartial(e)) || [];
    message.onDataSortingChange = object.onDataSortingChange?.map((e) => NodeAction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWebNodePropsTableColumn(): WebNodePropsTableColumn {
  return { sortable: [], filterable: [], columnIndex: [], columnName: [], columnPath: [] };
}

export const WebNodePropsTableColumn = {
  encode(message: WebNodePropsTableColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.molecule !== undefined) {
      RenderMolecule.encode(message.molecule, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.sortable) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.filterable) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.columnIndex) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.columnName) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.columnPath) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebNodePropsTableColumn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebNodePropsTableColumn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.molecule = RenderMolecule.decode(reader, reader.uint32());
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sortable.push(reader.bool());
            }
          } else {
            message.sortable.push(reader.bool());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.filterable.push(reader.bool());
            }
          } else {
            message.filterable.push(reader.bool());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.columnIndex.push(reader.int32());
            }
          } else {
            message.columnIndex.push(reader.int32());
          }
          break;
        case 5:
          message.columnName.push(reader.string());
          break;
        case 6:
          message.columnPath.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebNodePropsTableColumn {
    return {
      molecule: isSet(object.molecule) ? RenderMolecule.fromJSON(object.molecule) : undefined,
      sortable: Array.isArray(object?.sortable) ? object.sortable.map((e: any) => Boolean(e)) : [],
      filterable: Array.isArray(object?.filterable) ? object.filterable.map((e: any) => Boolean(e)) : [],
      columnIndex: Array.isArray(object?.columnIndex) ? object.columnIndex.map((e: any) => Number(e)) : [],
      columnName: Array.isArray(object?.columnName) ? object.columnName.map((e: any) => String(e)) : [],
      columnPath: Array.isArray(object?.columnPath) ? object.columnPath.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: WebNodePropsTableColumn): unknown {
    const obj: any = {};
    message.molecule !== undefined &&
      (obj.molecule = message.molecule ? RenderMolecule.toJSON(message.molecule) : undefined);
    if (message.sortable) {
      obj.sortable = message.sortable.map((e) => e);
    } else {
      obj.sortable = [];
    }
    if (message.filterable) {
      obj.filterable = message.filterable.map((e) => e);
    } else {
      obj.filterable = [];
    }
    if (message.columnIndex) {
      obj.columnIndex = message.columnIndex.map((e) => Math.round(e));
    } else {
      obj.columnIndex = [];
    }
    if (message.columnName) {
      obj.columnName = message.columnName.map((e) => e);
    } else {
      obj.columnName = [];
    }
    if (message.columnPath) {
      obj.columnPath = message.columnPath.map((e) => e);
    } else {
      obj.columnPath = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<WebNodePropsTableColumn>): WebNodePropsTableColumn {
    const message = createBaseWebNodePropsTableColumn();
    message.molecule = (object.molecule !== undefined && object.molecule !== null)
      ? RenderMolecule.fromPartial(object.molecule)
      : undefined;
    message.sortable = object.sortable?.map((e) => e) || [];
    message.filterable = object.filterable?.map((e) => e) || [];
    message.columnIndex = object.columnIndex?.map((e) => e) || [];
    message.columnName = object.columnName?.map((e) => e) || [];
    message.columnPath = object.columnPath?.map((e) => e) || [];
    return message;
  },
};

function createBaseMobileNodeProps(): MobileNodeProps {
  return { elementKey: "", placeholder: [], data: [], source: [], title: [], childrenData: [] };
}

export const MobileNodeProps = {
  encode(message: MobileNodeProps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elementKey !== "") {
      writer.uint32(10).string(message.elementKey);
    }
    if (message.backgroundColor !== undefined) {
      writer.uint32(18).string(message.backgroundColor);
    }
    if (message.safeArea !== undefined) {
      writer.uint32(26).string(message.safeArea);
    }
    if (message.placeholderTextColor !== undefined) {
      writer.uint32(34).string(message.placeholderTextColor);
    }
    if (message.secureTextEntry !== undefined) {
      writer.uint32(40).bool(message.secureTextEntry);
    }
    if (message.autoCorrect !== undefined) {
      writer.uint32(48).bool(message.autoCorrect);
    }
    if (message.showClearText !== undefined) {
      writer.uint32(56).bool(message.showClearText);
    }
    if (message.showCharacterCounter !== undefined) {
      writer.uint32(64).bool(message.showCharacterCounter);
    }
    if (message.maxLength !== undefined) {
      writer.uint32(72).int32(message.maxLength);
    }
    if (message.clearIconColor !== undefined) {
      writer.uint32(82).string(message.clearIconColor);
    }
    if (message.secureEyeIconColor !== undefined) {
      writer.uint32(90).string(message.secureEyeIconColor);
    }
    if (message.editable !== undefined) {
      writer.uint32(96).bool(message.editable);
    }
    if (message.numberOfLines !== undefined) {
      writer.uint32(104).int32(message.numberOfLines);
    }
    if (message.vertical !== undefined) {
      writer.uint32(112).bool(message.vertical);
    }
    if (message.loop !== undefined) {
      writer.uint32(120).bool(message.loop);
    }
    if (message.timeout !== undefined) {
      writer.uint32(128).int32(message.timeout);
    }
    if (message.horizontal !== undefined) {
      writer.uint32(136).bool(message.horizontal);
    }
    if (message.numColumns !== undefined) {
      writer.uint32(144).int32(message.numColumns);
    }
    if (message.sourceType !== undefined) {
      writer.uint32(154).string(message.sourceType);
    }
    if (message.useDefaultBackButton !== undefined) {
      writer.uint32(160).bool(message.useDefaultBackButton);
    }
    if (message.autoFocus !== undefined) {
      writer.uint32(168).bool(message.autoFocus);
    }
    if (message.pinCount !== undefined) {
      writer.uint32(176).int32(message.pinCount);
    }
    if (message.position !== undefined) {
      writer.uint32(186).string(message.position);
    }
    if (message.returnKeyType !== undefined) {
      writer.uint32(194).string(message.returnKeyType);
    }
    if (message.resizeMode !== undefined) {
      writer.uint32(202).string(message.resizeMode);
    }
    if (message.keyboardType !== undefined) {
      writer.uint32(210).string(message.keyboardType);
    }
    if (message.autoCapitalize !== undefined) {
      writer.uint32(218).string(message.autoCapitalize);
    }
    if (message.dateMode !== undefined) {
      writer.uint32(226).string(message.dateMode);
    }
    if (message.mode !== undefined) {
      writer.uint32(234).string(message.mode);
    }
    if (message.infinity !== undefined) {
      writer.uint32(240).bool(message.infinity);
    }
    if (message.inverted !== undefined) {
      writer.uint32(248).bool(message.inverted);
    }
    if (message.name !== undefined) {
      writer.uint32(258).string(message.name);
    }
    if (message.size !== undefined) {
      writer.uint32(264).int32(message.size);
    }
    if (message.color !== undefined) {
      writer.uint32(274).string(message.color);
    }
    if (message.type !== undefined) {
      writer.uint32(282).string(message.type);
    }
    if (message.leftIconName !== undefined) {
      writer.uint32(290).string(message.leftIconName);
    }
    if (message.leftIconType !== undefined) {
      writer.uint32(298).string(message.leftIconType);
    }
    if (message.leftIconSize !== undefined) {
      writer.uint32(304).int32(message.leftIconSize);
    }
    if (message.leftIconColor !== undefined) {
      writer.uint32(314).string(message.leftIconColor);
    }
    if (message.rightIconName !== undefined) {
      writer.uint32(322).string(message.rightIconName);
    }
    if (message.rightIconType !== undefined) {
      writer.uint32(330).string(message.rightIconType);
    }
    if (message.rightIconSize !== undefined) {
      writer.uint32(336).int32(message.rightIconSize);
    }
    if (message.rightIconColor !== undefined) {
      writer.uint32(346).string(message.rightIconColor);
    }
    if (message.launcherType !== undefined) {
      writer.uint32(354).string(message.launcherType);
    }
    if (message.otpInputType !== undefined) {
      writer.uint32(362).string(message.otpInputType);
    }
    if (message.borderBottomWidth !== undefined) {
      writer.uint32(373).float(message.borderBottomWidth);
    }
    if (message.borderBottomColor !== undefined) {
      writer.uint32(378).string(message.borderBottomColor);
    }
    if (message.style !== undefined) {
      Struct.encode(Struct.wrap(message.style), writer.uint32(386).fork()).ldelim();
    }
    if (message.contentContainerStyle !== undefined) {
      Struct.encode(Struct.wrap(message.contentContainerStyle), writer.uint32(394).fork()).ldelim();
    }
    if (message.inputStyle !== undefined) {
      Struct.encode(Struct.wrap(message.inputStyle), writer.uint32(402).fork()).ldelim();
    }
    if (message.labelStyle !== undefined) {
      Struct.encode(Struct.wrap(message.labelStyle), writer.uint32(410).fork()).ldelim();
    }
    if (message.characterCounterStyle !== undefined) {
      Struct.encode(Struct.wrap(message.characterCounterStyle), writer.uint32(418).fork()).ldelim();
    }
    if (message.cellStyle !== undefined) {
      Struct.encode(Struct.wrap(message.cellStyle), writer.uint32(426).fork()).ldelim();
    }
    if (message.cellTextStyle !== undefined) {
      Struct.encode(Struct.wrap(message.cellTextStyle), writer.uint32(434).fork()).ldelim();
    }
    if (message.titleStyle !== undefined) {
      Struct.encode(Struct.wrap(message.titleStyle), writer.uint32(442).fork()).ldelim();
    }
    if (message.renderItem !== undefined) {
      RenderMolecule.encode(message.renderItem, writer.uint32(450).fork()).ldelim();
    }
    if (message.preview !== undefined) {
      RenderMolecule.encode(message.preview, writer.uint32(458).fork()).ldelim();
    }
    if (message.component !== undefined) {
      RenderMolecule.encode(message.component, writer.uint32(466).fork()).ldelim();
    }
    if (message.listEmptyComponent !== undefined) {
      MoleculeComponent.encode(message.listEmptyComponent, writer.uint32(474).fork()).ldelim();
    }
    if (message.listHeaderComponent !== undefined) {
      MoleculeComponent.encode(message.listHeaderComponent, writer.uint32(482).fork()).ldelim();
    }
    if (message.listFooterComponent !== undefined) {
      MoleculeComponent.encode(message.listFooterComponent, writer.uint32(490).fork()).ldelim();
    }
    if (message.itemSeparatorComponent !== undefined) {
      MoleculeComponent.encode(message.itemSeparatorComponent, writer.uint32(498).fork()).ldelim();
    }
    if (message.keyExtractor !== undefined) {
      NodeReference.encode(message.keyExtractor, writer.uint32(506).fork()).ldelim();
    }
    for (const v of message.placeholder) {
      NodeVariable.encode(v!, writer.uint32(514).fork()).ldelim();
    }
    for (const v of message.data) {
      NodeVariable.encode(v!, writer.uint32(522).fork()).ldelim();
    }
    for (const v of message.source) {
      NodeVariable.encode(v!, writer.uint32(530).fork()).ldelim();
    }
    for (const v of message.title) {
      NodeVariable.encode(v!, writer.uint32(538).fork()).ldelim();
    }
    for (const v of message.childrenData) {
      NodeVariable.encode(v!, writer.uint32(546).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MobileNodeProps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMobileNodeProps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elementKey = reader.string();
          break;
        case 2:
          message.backgroundColor = reader.string();
          break;
        case 3:
          message.safeArea = reader.string();
          break;
        case 4:
          message.placeholderTextColor = reader.string();
          break;
        case 5:
          message.secureTextEntry = reader.bool();
          break;
        case 6:
          message.autoCorrect = reader.bool();
          break;
        case 7:
          message.showClearText = reader.bool();
          break;
        case 8:
          message.showCharacterCounter = reader.bool();
          break;
        case 9:
          message.maxLength = reader.int32();
          break;
        case 10:
          message.clearIconColor = reader.string();
          break;
        case 11:
          message.secureEyeIconColor = reader.string();
          break;
        case 12:
          message.editable = reader.bool();
          break;
        case 13:
          message.numberOfLines = reader.int32();
          break;
        case 14:
          message.vertical = reader.bool();
          break;
        case 15:
          message.loop = reader.bool();
          break;
        case 16:
          message.timeout = reader.int32();
          break;
        case 17:
          message.horizontal = reader.bool();
          break;
        case 18:
          message.numColumns = reader.int32();
          break;
        case 19:
          message.sourceType = reader.string();
          break;
        case 20:
          message.useDefaultBackButton = reader.bool();
          break;
        case 21:
          message.autoFocus = reader.bool();
          break;
        case 22:
          message.pinCount = reader.int32();
          break;
        case 23:
          message.position = reader.string();
          break;
        case 24:
          message.returnKeyType = reader.string();
          break;
        case 25:
          message.resizeMode = reader.string();
          break;
        case 26:
          message.keyboardType = reader.string();
          break;
        case 27:
          message.autoCapitalize = reader.string();
          break;
        case 28:
          message.dateMode = reader.string();
          break;
        case 29:
          message.mode = reader.string();
          break;
        case 30:
          message.infinity = reader.bool();
          break;
        case 31:
          message.inverted = reader.bool();
          break;
        case 32:
          message.name = reader.string();
          break;
        case 33:
          message.size = reader.int32();
          break;
        case 34:
          message.color = reader.string();
          break;
        case 35:
          message.type = reader.string();
          break;
        case 36:
          message.leftIconName = reader.string();
          break;
        case 37:
          message.leftIconType = reader.string();
          break;
        case 38:
          message.leftIconSize = reader.int32();
          break;
        case 39:
          message.leftIconColor = reader.string();
          break;
        case 40:
          message.rightIconName = reader.string();
          break;
        case 41:
          message.rightIconType = reader.string();
          break;
        case 42:
          message.rightIconSize = reader.int32();
          break;
        case 43:
          message.rightIconColor = reader.string();
          break;
        case 44:
          message.launcherType = reader.string();
          break;
        case 45:
          message.otpInputType = reader.string();
          break;
        case 46:
          message.borderBottomWidth = reader.float();
          break;
        case 47:
          message.borderBottomColor = reader.string();
          break;
        case 48:
          message.style = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 49:
          message.contentContainerStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 50:
          message.inputStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 51:
          message.labelStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 52:
          message.characterCounterStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 53:
          message.cellStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 54:
          message.cellTextStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 55:
          message.titleStyle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 56:
          message.renderItem = RenderMolecule.decode(reader, reader.uint32());
          break;
        case 57:
          message.preview = RenderMolecule.decode(reader, reader.uint32());
          break;
        case 58:
          message.component = RenderMolecule.decode(reader, reader.uint32());
          break;
        case 59:
          message.listEmptyComponent = MoleculeComponent.decode(reader, reader.uint32());
          break;
        case 60:
          message.listHeaderComponent = MoleculeComponent.decode(reader, reader.uint32());
          break;
        case 61:
          message.listFooterComponent = MoleculeComponent.decode(reader, reader.uint32());
          break;
        case 62:
          message.itemSeparatorComponent = MoleculeComponent.decode(reader, reader.uint32());
          break;
        case 63:
          message.keyExtractor = NodeReference.decode(reader, reader.uint32());
          break;
        case 64:
          message.placeholder.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 65:
          message.data.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 66:
          message.source.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 67:
          message.title.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 68:
          message.childrenData.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MobileNodeProps {
    return {
      elementKey: isSet(object.elementKey) ? String(object.elementKey) : "",
      backgroundColor: isSet(object.backgroundColor) ? String(object.backgroundColor) : undefined,
      safeArea: isSet(object.safeArea) ? String(object.safeArea) : undefined,
      placeholderTextColor: isSet(object.placeholderTextColor) ? String(object.placeholderTextColor) : undefined,
      secureTextEntry: isSet(object.secureTextEntry) ? Boolean(object.secureTextEntry) : undefined,
      autoCorrect: isSet(object.autoCorrect) ? Boolean(object.autoCorrect) : undefined,
      showClearText: isSet(object.showClearText) ? Boolean(object.showClearText) : undefined,
      showCharacterCounter: isSet(object.showCharacterCounter) ? Boolean(object.showCharacterCounter) : undefined,
      maxLength: isSet(object.maxLength) ? Number(object.maxLength) : undefined,
      clearIconColor: isSet(object.clearIconColor) ? String(object.clearIconColor) : undefined,
      secureEyeIconColor: isSet(object.secureEyeIconColor) ? String(object.secureEyeIconColor) : undefined,
      editable: isSet(object.editable) ? Boolean(object.editable) : undefined,
      numberOfLines: isSet(object.numberOfLines) ? Number(object.numberOfLines) : undefined,
      vertical: isSet(object.vertical) ? Boolean(object.vertical) : undefined,
      loop: isSet(object.loop) ? Boolean(object.loop) : undefined,
      timeout: isSet(object.timeout) ? Number(object.timeout) : undefined,
      horizontal: isSet(object.horizontal) ? Boolean(object.horizontal) : undefined,
      numColumns: isSet(object.numColumns) ? Number(object.numColumns) : undefined,
      sourceType: isSet(object.sourceType) ? String(object.sourceType) : undefined,
      useDefaultBackButton: isSet(object.useDefaultBackButton) ? Boolean(object.useDefaultBackButton) : undefined,
      autoFocus: isSet(object.autoFocus) ? Boolean(object.autoFocus) : undefined,
      pinCount: isSet(object.pinCount) ? Number(object.pinCount) : undefined,
      position: isSet(object.position) ? String(object.position) : undefined,
      returnKeyType: isSet(object.returnKeyType) ? String(object.returnKeyType) : undefined,
      resizeMode: isSet(object.resizeMode) ? String(object.resizeMode) : undefined,
      keyboardType: isSet(object.keyboardType) ? String(object.keyboardType) : undefined,
      autoCapitalize: isSet(object.autoCapitalize) ? String(object.autoCapitalize) : undefined,
      dateMode: isSet(object.dateMode) ? String(object.dateMode) : undefined,
      mode: isSet(object.mode) ? String(object.mode) : undefined,
      infinity: isSet(object.infinity) ? Boolean(object.infinity) : undefined,
      inverted: isSet(object.inverted) ? Boolean(object.inverted) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      size: isSet(object.size) ? Number(object.size) : undefined,
      color: isSet(object.color) ? String(object.color) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      leftIconName: isSet(object.leftIconName) ? String(object.leftIconName) : undefined,
      leftIconType: isSet(object.leftIconType) ? String(object.leftIconType) : undefined,
      leftIconSize: isSet(object.leftIconSize) ? Number(object.leftIconSize) : undefined,
      leftIconColor: isSet(object.leftIconColor) ? String(object.leftIconColor) : undefined,
      rightIconName: isSet(object.rightIconName) ? String(object.rightIconName) : undefined,
      rightIconType: isSet(object.rightIconType) ? String(object.rightIconType) : undefined,
      rightIconSize: isSet(object.rightIconSize) ? Number(object.rightIconSize) : undefined,
      rightIconColor: isSet(object.rightIconColor) ? String(object.rightIconColor) : undefined,
      launcherType: isSet(object.launcherType) ? String(object.launcherType) : undefined,
      otpInputType: isSet(object.otpInputType) ? String(object.otpInputType) : undefined,
      borderBottomWidth: isSet(object.borderBottomWidth) ? Number(object.borderBottomWidth) : undefined,
      borderBottomColor: isSet(object.borderBottomColor) ? String(object.borderBottomColor) : undefined,
      style: isObject(object.style) ? object.style : undefined,
      contentContainerStyle: isObject(object.contentContainerStyle) ? object.contentContainerStyle : undefined,
      inputStyle: isObject(object.inputStyle) ? object.inputStyle : undefined,
      labelStyle: isObject(object.labelStyle) ? object.labelStyle : undefined,
      characterCounterStyle: isObject(object.characterCounterStyle) ? object.characterCounterStyle : undefined,
      cellStyle: isObject(object.cellStyle) ? object.cellStyle : undefined,
      cellTextStyle: isObject(object.cellTextStyle) ? object.cellTextStyle : undefined,
      titleStyle: isObject(object.titleStyle) ? object.titleStyle : undefined,
      renderItem: isSet(object.renderItem) ? RenderMolecule.fromJSON(object.renderItem) : undefined,
      preview: isSet(object.preview) ? RenderMolecule.fromJSON(object.preview) : undefined,
      component: isSet(object.component) ? RenderMolecule.fromJSON(object.component) : undefined,
      listEmptyComponent: isSet(object.listEmptyComponent)
        ? MoleculeComponent.fromJSON(object.listEmptyComponent)
        : undefined,
      listHeaderComponent: isSet(object.listHeaderComponent)
        ? MoleculeComponent.fromJSON(object.listHeaderComponent)
        : undefined,
      listFooterComponent: isSet(object.listFooterComponent)
        ? MoleculeComponent.fromJSON(object.listFooterComponent)
        : undefined,
      itemSeparatorComponent: isSet(object.itemSeparatorComponent)
        ? MoleculeComponent.fromJSON(object.itemSeparatorComponent)
        : undefined,
      keyExtractor: isSet(object.keyExtractor) ? NodeReference.fromJSON(object.keyExtractor) : undefined,
      placeholder: Array.isArray(object?.placeholder)
        ? object.placeholder.map((e: any) => NodeVariable.fromJSON(e))
        : [],
      data: Array.isArray(object?.data) ? object.data.map((e: any) => NodeVariable.fromJSON(e)) : [],
      source: Array.isArray(object?.source) ? object.source.map((e: any) => NodeVariable.fromJSON(e)) : [],
      title: Array.isArray(object?.title) ? object.title.map((e: any) => NodeVariable.fromJSON(e)) : [],
      childrenData: Array.isArray(object?.childrenData)
        ? object.childrenData.map((e: any) => NodeVariable.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MobileNodeProps): unknown {
    const obj: any = {};
    message.elementKey !== undefined && (obj.elementKey = message.elementKey);
    message.backgroundColor !== undefined && (obj.backgroundColor = message.backgroundColor);
    message.safeArea !== undefined && (obj.safeArea = message.safeArea);
    message.placeholderTextColor !== undefined && (obj.placeholderTextColor = message.placeholderTextColor);
    message.secureTextEntry !== undefined && (obj.secureTextEntry = message.secureTextEntry);
    message.autoCorrect !== undefined && (obj.autoCorrect = message.autoCorrect);
    message.showClearText !== undefined && (obj.showClearText = message.showClearText);
    message.showCharacterCounter !== undefined && (obj.showCharacterCounter = message.showCharacterCounter);
    message.maxLength !== undefined && (obj.maxLength = Math.round(message.maxLength));
    message.clearIconColor !== undefined && (obj.clearIconColor = message.clearIconColor);
    message.secureEyeIconColor !== undefined && (obj.secureEyeIconColor = message.secureEyeIconColor);
    message.editable !== undefined && (obj.editable = message.editable);
    message.numberOfLines !== undefined && (obj.numberOfLines = Math.round(message.numberOfLines));
    message.vertical !== undefined && (obj.vertical = message.vertical);
    message.loop !== undefined && (obj.loop = message.loop);
    message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
    message.horizontal !== undefined && (obj.horizontal = message.horizontal);
    message.numColumns !== undefined && (obj.numColumns = Math.round(message.numColumns));
    message.sourceType !== undefined && (obj.sourceType = message.sourceType);
    message.useDefaultBackButton !== undefined && (obj.useDefaultBackButton = message.useDefaultBackButton);
    message.autoFocus !== undefined && (obj.autoFocus = message.autoFocus);
    message.pinCount !== undefined && (obj.pinCount = Math.round(message.pinCount));
    message.position !== undefined && (obj.position = message.position);
    message.returnKeyType !== undefined && (obj.returnKeyType = message.returnKeyType);
    message.resizeMode !== undefined && (obj.resizeMode = message.resizeMode);
    message.keyboardType !== undefined && (obj.keyboardType = message.keyboardType);
    message.autoCapitalize !== undefined && (obj.autoCapitalize = message.autoCapitalize);
    message.dateMode !== undefined && (obj.dateMode = message.dateMode);
    message.mode !== undefined && (obj.mode = message.mode);
    message.infinity !== undefined && (obj.infinity = message.infinity);
    message.inverted !== undefined && (obj.inverted = message.inverted);
    message.name !== undefined && (obj.name = message.name);
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.color !== undefined && (obj.color = message.color);
    message.type !== undefined && (obj.type = message.type);
    message.leftIconName !== undefined && (obj.leftIconName = message.leftIconName);
    message.leftIconType !== undefined && (obj.leftIconType = message.leftIconType);
    message.leftIconSize !== undefined && (obj.leftIconSize = Math.round(message.leftIconSize));
    message.leftIconColor !== undefined && (obj.leftIconColor = message.leftIconColor);
    message.rightIconName !== undefined && (obj.rightIconName = message.rightIconName);
    message.rightIconType !== undefined && (obj.rightIconType = message.rightIconType);
    message.rightIconSize !== undefined && (obj.rightIconSize = Math.round(message.rightIconSize));
    message.rightIconColor !== undefined && (obj.rightIconColor = message.rightIconColor);
    message.launcherType !== undefined && (obj.launcherType = message.launcherType);
    message.otpInputType !== undefined && (obj.otpInputType = message.otpInputType);
    message.borderBottomWidth !== undefined && (obj.borderBottomWidth = message.borderBottomWidth);
    message.borderBottomColor !== undefined && (obj.borderBottomColor = message.borderBottomColor);
    message.style !== undefined && (obj.style = message.style);
    message.contentContainerStyle !== undefined && (obj.contentContainerStyle = message.contentContainerStyle);
    message.inputStyle !== undefined && (obj.inputStyle = message.inputStyle);
    message.labelStyle !== undefined && (obj.labelStyle = message.labelStyle);
    message.characterCounterStyle !== undefined && (obj.characterCounterStyle = message.characterCounterStyle);
    message.cellStyle !== undefined && (obj.cellStyle = message.cellStyle);
    message.cellTextStyle !== undefined && (obj.cellTextStyle = message.cellTextStyle);
    message.titleStyle !== undefined && (obj.titleStyle = message.titleStyle);
    message.renderItem !== undefined &&
      (obj.renderItem = message.renderItem ? RenderMolecule.toJSON(message.renderItem) : undefined);
    message.preview !== undefined &&
      (obj.preview = message.preview ? RenderMolecule.toJSON(message.preview) : undefined);
    message.component !== undefined &&
      (obj.component = message.component ? RenderMolecule.toJSON(message.component) : undefined);
    message.listEmptyComponent !== undefined && (obj.listEmptyComponent = message.listEmptyComponent
      ? MoleculeComponent.toJSON(message.listEmptyComponent)
      : undefined);
    message.listHeaderComponent !== undefined && (obj.listHeaderComponent = message.listHeaderComponent
      ? MoleculeComponent.toJSON(message.listHeaderComponent)
      : undefined);
    message.listFooterComponent !== undefined && (obj.listFooterComponent = message.listFooterComponent
      ? MoleculeComponent.toJSON(message.listFooterComponent)
      : undefined);
    message.itemSeparatorComponent !== undefined && (obj.itemSeparatorComponent = message.itemSeparatorComponent
      ? MoleculeComponent.toJSON(message.itemSeparatorComponent)
      : undefined);
    message.keyExtractor !== undefined &&
      (obj.keyExtractor = message.keyExtractor ? NodeReference.toJSON(message.keyExtractor) : undefined);
    if (message.placeholder) {
      obj.placeholder = message.placeholder.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.placeholder = [];
    }
    if (message.data) {
      obj.data = message.data.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    if (message.source) {
      obj.source = message.source.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.source = [];
    }
    if (message.title) {
      obj.title = message.title.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.title = [];
    }
    if (message.childrenData) {
      obj.childrenData = message.childrenData.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.childrenData = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MobileNodeProps>): MobileNodeProps {
    const message = createBaseMobileNodeProps();
    message.elementKey = object.elementKey ?? "";
    message.backgroundColor = object.backgroundColor ?? undefined;
    message.safeArea = object.safeArea ?? undefined;
    message.placeholderTextColor = object.placeholderTextColor ?? undefined;
    message.secureTextEntry = object.secureTextEntry ?? undefined;
    message.autoCorrect = object.autoCorrect ?? undefined;
    message.showClearText = object.showClearText ?? undefined;
    message.showCharacterCounter = object.showCharacterCounter ?? undefined;
    message.maxLength = object.maxLength ?? undefined;
    message.clearIconColor = object.clearIconColor ?? undefined;
    message.secureEyeIconColor = object.secureEyeIconColor ?? undefined;
    message.editable = object.editable ?? undefined;
    message.numberOfLines = object.numberOfLines ?? undefined;
    message.vertical = object.vertical ?? undefined;
    message.loop = object.loop ?? undefined;
    message.timeout = object.timeout ?? undefined;
    message.horizontal = object.horizontal ?? undefined;
    message.numColumns = object.numColumns ?? undefined;
    message.sourceType = object.sourceType ?? undefined;
    message.useDefaultBackButton = object.useDefaultBackButton ?? undefined;
    message.autoFocus = object.autoFocus ?? undefined;
    message.pinCount = object.pinCount ?? undefined;
    message.position = object.position ?? undefined;
    message.returnKeyType = object.returnKeyType ?? undefined;
    message.resizeMode = object.resizeMode ?? undefined;
    message.keyboardType = object.keyboardType ?? undefined;
    message.autoCapitalize = object.autoCapitalize ?? undefined;
    message.dateMode = object.dateMode ?? undefined;
    message.mode = object.mode ?? undefined;
    message.infinity = object.infinity ?? undefined;
    message.inverted = object.inverted ?? undefined;
    message.name = object.name ?? undefined;
    message.size = object.size ?? undefined;
    message.color = object.color ?? undefined;
    message.type = object.type ?? undefined;
    message.leftIconName = object.leftIconName ?? undefined;
    message.leftIconType = object.leftIconType ?? undefined;
    message.leftIconSize = object.leftIconSize ?? undefined;
    message.leftIconColor = object.leftIconColor ?? undefined;
    message.rightIconName = object.rightIconName ?? undefined;
    message.rightIconType = object.rightIconType ?? undefined;
    message.rightIconSize = object.rightIconSize ?? undefined;
    message.rightIconColor = object.rightIconColor ?? undefined;
    message.launcherType = object.launcherType ?? undefined;
    message.otpInputType = object.otpInputType ?? undefined;
    message.borderBottomWidth = object.borderBottomWidth ?? undefined;
    message.borderBottomColor = object.borderBottomColor ?? undefined;
    message.style = object.style ?? undefined;
    message.contentContainerStyle = object.contentContainerStyle ?? undefined;
    message.inputStyle = object.inputStyle ?? undefined;
    message.labelStyle = object.labelStyle ?? undefined;
    message.characterCounterStyle = object.characterCounterStyle ?? undefined;
    message.cellStyle = object.cellStyle ?? undefined;
    message.cellTextStyle = object.cellTextStyle ?? undefined;
    message.titleStyle = object.titleStyle ?? undefined;
    message.renderItem = (object.renderItem !== undefined && object.renderItem !== null)
      ? RenderMolecule.fromPartial(object.renderItem)
      : undefined;
    message.preview = (object.preview !== undefined && object.preview !== null)
      ? RenderMolecule.fromPartial(object.preview)
      : undefined;
    message.component = (object.component !== undefined && object.component !== null)
      ? RenderMolecule.fromPartial(object.component)
      : undefined;
    message.listEmptyComponent = (object.listEmptyComponent !== undefined && object.listEmptyComponent !== null)
      ? MoleculeComponent.fromPartial(object.listEmptyComponent)
      : undefined;
    message.listHeaderComponent = (object.listHeaderComponent !== undefined && object.listHeaderComponent !== null)
      ? MoleculeComponent.fromPartial(object.listHeaderComponent)
      : undefined;
    message.listFooterComponent = (object.listFooterComponent !== undefined && object.listFooterComponent !== null)
      ? MoleculeComponent.fromPartial(object.listFooterComponent)
      : undefined;
    message.itemSeparatorComponent =
      (object.itemSeparatorComponent !== undefined && object.itemSeparatorComponent !== null)
        ? MoleculeComponent.fromPartial(object.itemSeparatorComponent)
        : undefined;
    message.keyExtractor = (object.keyExtractor !== undefined && object.keyExtractor !== null)
      ? NodeReference.fromPartial(object.keyExtractor)
      : undefined;
    message.placeholder = object.placeholder?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.data = object.data?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.source = object.source?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.title = object.title?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.childrenData = object.childrenData?.map((e) => NodeVariable.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRenderMolecule(): RenderMolecule {
  return { arguments: [], props: [] };
}

export const RenderMolecule = {
  encode(message: RenderMolecule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reference !== undefined) {
      NodeReference.encode(message.reference, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.arguments) {
      FunctionArgument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.props) {
      NodeParam.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenderMolecule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRenderMolecule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reference = NodeReference.decode(reader, reader.uint32());
          break;
        case 2:
          message.arguments.push(FunctionArgument.decode(reader, reader.uint32()));
          break;
        case 3:
          message.props.push(NodeParam.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenderMolecule {
    return {
      reference: isSet(object.reference) ? NodeReference.fromJSON(object.reference) : undefined,
      arguments: Array.isArray(object?.arguments) ? object.arguments.map((e: any) => FunctionArgument.fromJSON(e)) : [],
      props: Array.isArray(object?.props) ? object.props.map((e: any) => NodeParam.fromJSON(e)) : [],
    };
  },

  toJSON(message: RenderMolecule): unknown {
    const obj: any = {};
    message.reference !== undefined &&
      (obj.reference = message.reference ? NodeReference.toJSON(message.reference) : undefined);
    if (message.arguments) {
      obj.arguments = message.arguments.map((e) => e ? FunctionArgument.toJSON(e) : undefined);
    } else {
      obj.arguments = [];
    }
    if (message.props) {
      obj.props = message.props.map((e) => e ? NodeParam.toJSON(e) : undefined);
    } else {
      obj.props = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RenderMolecule>): RenderMolecule {
    const message = createBaseRenderMolecule();
    message.reference = (object.reference !== undefined && object.reference !== null)
      ? NodeReference.fromPartial(object.reference)
      : undefined;
    message.arguments = object.arguments?.map((e) => FunctionArgument.fromPartial(e)) || [];
    message.props = object.props?.map((e) => NodeParam.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodeReference(): NodeReference {
  return { name: "", refId: "", value: "", refType: 0 };
}

export const NodeReference = {
  encode(message: NodeReference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.refId !== "") {
      writer.uint32(18).string(message.refId);
    }
    if (message.refData !== undefined) {
      Struct.encode(Struct.wrap(message.refData), writer.uint32(26).fork()).ldelim();
    }
    if (message.value !== "") {
      writer.uint32(34).string(message.value);
    }
    if (message.refType !== 0) {
      writer.uint32(40).int32(message.refType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeReference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.refId = reader.string();
          break;
        case 3:
          message.refData = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 4:
          message.value = reader.string();
          break;
        case 5:
          message.refType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeReference {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      refId: isSet(object.refId) ? String(object.refId) : "",
      refData: isObject(object.refData) ? object.refData : undefined,
      value: isSet(object.value) ? String(object.value) : "",
      refType: isSet(object.refType) ? nodeReferenceReferenceRefTypeFromJSON(object.refType) : 0,
    };
  },

  toJSON(message: NodeReference): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.refId !== undefined && (obj.refId = message.refId);
    message.refData !== undefined && (obj.refData = message.refData);
    message.value !== undefined && (obj.value = message.value);
    message.refType !== undefined && (obj.refType = nodeReferenceReferenceRefTypeToJSON(message.refType));
    return obj;
  },

  fromPartial(object: DeepPartial<NodeReference>): NodeReference {
    const message = createBaseNodeReference();
    message.name = object.name ?? "";
    message.refId = object.refId ?? "";
    message.refData = object.refData ?? undefined;
    message.value = object.value ?? "";
    message.refType = object.refType ?? 0;
    return message;
  },
};

function createBaseFunctionArgument(): FunctionArgument {
  return { name: "", argumentType: "", plural: false };
}

export const FunctionArgument = {
  encode(message: FunctionArgument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.argumentType !== "") {
      writer.uint32(18).string(message.argumentType);
    }
    if (message.plural === true) {
      writer.uint32(24).bool(message.plural);
    }
    if (message.reference !== undefined) {
      NodeReference.encode(message.reference, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FunctionArgument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunctionArgument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.argumentType = reader.string();
          break;
        case 3:
          message.plural = reader.bool();
          break;
        case 4:
          message.reference = NodeReference.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FunctionArgument {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      argumentType: isSet(object.argumentType) ? String(object.argumentType) : "",
      plural: isSet(object.plural) ? Boolean(object.plural) : false,
      reference: isSet(object.reference) ? NodeReference.fromJSON(object.reference) : undefined,
    };
  },

  toJSON(message: FunctionArgument): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.argumentType !== undefined && (obj.argumentType = message.argumentType);
    message.plural !== undefined && (obj.plural = message.plural);
    message.reference !== undefined &&
      (obj.reference = message.reference ? NodeReference.toJSON(message.reference) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FunctionArgument>): FunctionArgument {
    const message = createBaseFunctionArgument();
    message.name = object.name ?? "";
    message.argumentType = object.argumentType ?? "";
    message.plural = object.plural ?? false;
    message.reference = (object.reference !== undefined && object.reference !== null)
      ? NodeReference.fromPartial(object.reference)
      : undefined;
    return message;
  },
};

function createBaseNodeParam(): NodeParam {
  return {
    name: "",
    paramType: "",
    paramTypeEnum: [],
    defaultValue: "",
    plural: false,
    automated: false,
    actions: [],
    functionArguments: [],
  };
}

export const NodeParam = {
  encode(message: NodeParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.paramType !== "") {
      writer.uint32(18).string(message.paramType);
    }
    for (const v of message.paramTypeEnum) {
      writer.uint32(26).string(v!);
    }
    if (message.defaultValue !== "") {
      writer.uint32(34).string(message.defaultValue);
    }
    if (message.plural === true) {
      writer.uint32(40).bool(message.plural);
    }
    if (message.automated === true) {
      writer.uint32(48).bool(message.automated);
    }
    if (message.reference !== undefined) {
      NodeReference.encode(message.reference, writer.uint32(58).fork()).ldelim();
    }
    if (message.value !== undefined) {
      NodeVariable.encode(message.value, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.actions) {
      NodeAction.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.functionArguments) {
      FunctionArgument.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.paramType = reader.string();
          break;
        case 3:
          message.paramTypeEnum.push(reader.string());
          break;
        case 4:
          message.defaultValue = reader.string();
          break;
        case 5:
          message.plural = reader.bool();
          break;
        case 6:
          message.automated = reader.bool();
          break;
        case 7:
          message.reference = NodeReference.decode(reader, reader.uint32());
          break;
        case 8:
          message.value = NodeVariable.decode(reader, reader.uint32());
          break;
        case 9:
          message.actions.push(NodeAction.decode(reader, reader.uint32()));
          break;
        case 10:
          message.functionArguments.push(FunctionArgument.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeParam {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      paramType: isSet(object.paramType) ? String(object.paramType) : "",
      paramTypeEnum: Array.isArray(object?.paramTypeEnum) ? object.paramTypeEnum.map((e: any) => String(e)) : [],
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
      plural: isSet(object.plural) ? Boolean(object.plural) : false,
      automated: isSet(object.automated) ? Boolean(object.automated) : false,
      reference: isSet(object.reference) ? NodeReference.fromJSON(object.reference) : undefined,
      value: isSet(object.value) ? NodeVariable.fromJSON(object.value) : undefined,
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => NodeAction.fromJSON(e)) : [],
      functionArguments: Array.isArray(object?.functionArguments)
        ? object.functionArguments.map((e: any) => FunctionArgument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NodeParam): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.paramType !== undefined && (obj.paramType = message.paramType);
    if (message.paramTypeEnum) {
      obj.paramTypeEnum = message.paramTypeEnum.map((e) => e);
    } else {
      obj.paramTypeEnum = [];
    }
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.plural !== undefined && (obj.plural = message.plural);
    message.automated !== undefined && (obj.automated = message.automated);
    message.reference !== undefined &&
      (obj.reference = message.reference ? NodeReference.toJSON(message.reference) : undefined);
    message.value !== undefined && (obj.value = message.value ? NodeVariable.toJSON(message.value) : undefined);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? NodeAction.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    if (message.functionArguments) {
      obj.functionArguments = message.functionArguments.map((e) => e ? FunctionArgument.toJSON(e) : undefined);
    } else {
      obj.functionArguments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<NodeParam>): NodeParam {
    const message = createBaseNodeParam();
    message.name = object.name ?? "";
    message.paramType = object.paramType ?? "";
    message.paramTypeEnum = object.paramTypeEnum?.map((e) => e) || [];
    message.defaultValue = object.defaultValue ?? "";
    message.plural = object.plural ?? false;
    message.automated = object.automated ?? false;
    message.reference = (object.reference !== undefined && object.reference !== null)
      ? NodeReference.fromPartial(object.reference)
      : undefined;
    message.value = (object.value !== undefined && object.value !== null)
      ? NodeVariable.fromPartial(object.value)
      : undefined;
    message.actions = object.actions?.map((e) => NodeAction.fromPartial(e)) || [];
    message.functionArguments = object.functionArguments?.map((e) => FunctionArgument.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodeVariable(): NodeVariable {
  return {
    localId: "",
    name: "",
    value: "",
    valuePath: "",
    defaultValue: "",
    valueType: "",
    defaultType: 0,
    source: 0,
    variableType: 0,
    values: [],
  };
}

export const NodeVariable = {
  encode(message: NodeVariable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.localId !== "") {
      writer.uint32(10).string(message.localId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.valuePath !== "") {
      writer.uint32(34).string(message.valuePath);
    }
    if (message.defaultValue !== "") {
      writer.uint32(42).string(message.defaultValue);
    }
    if (message.valueType !== "") {
      writer.uint32(50).string(message.valueType);
    }
    if (message.defaultType !== 0) {
      writer.uint32(56).int32(message.defaultType);
    }
    if (message.source !== 0) {
      writer.uint32(64).int32(message.source);
    }
    if (message.variableType !== 0) {
      writer.uint32(72).int32(message.variableType);
    }
    for (const v of message.values) {
      NodeReference.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeVariable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeVariable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.localId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.valuePath = reader.string();
          break;
        case 5:
          message.defaultValue = reader.string();
          break;
        case 6:
          message.valueType = reader.string();
          break;
        case 7:
          message.defaultType = reader.int32() as any;
          break;
        case 8:
          message.source = reader.int32() as any;
          break;
        case 9:
          message.variableType = reader.int32() as any;
          break;
        case 10:
          message.values.push(NodeReference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeVariable {
    return {
      localId: isSet(object.localId) ? String(object.localId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
      valuePath: isSet(object.valuePath) ? String(object.valuePath) : "",
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
      valueType: isSet(object.valueType) ? String(object.valueType) : "",
      defaultType: isSet(object.defaultType) ? nodeVariableVariableDefaultTypeFromJSON(object.defaultType) : 0,
      source: isSet(object.source) ? nodeVariableVariableSourceFromJSON(object.source) : 0,
      variableType: isSet(object.variableType) ? nodeVariableVariableTypeFromJSON(object.variableType) : 0,
      values: Array.isArray(object?.values) ? object.values.map((e: any) => NodeReference.fromJSON(e)) : [],
    };
  },

  toJSON(message: NodeVariable): unknown {
    const obj: any = {};
    message.localId !== undefined && (obj.localId = message.localId);
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    message.valuePath !== undefined && (obj.valuePath = message.valuePath);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.valueType !== undefined && (obj.valueType = message.valueType);
    message.defaultType !== undefined && (obj.defaultType = nodeVariableVariableDefaultTypeToJSON(message.defaultType));
    message.source !== undefined && (obj.source = nodeVariableVariableSourceToJSON(message.source));
    message.variableType !== undefined && (obj.variableType = nodeVariableVariableTypeToJSON(message.variableType));
    if (message.values) {
      obj.values = message.values.map((e) => e ? NodeReference.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<NodeVariable>): NodeVariable {
    const message = createBaseNodeVariable();
    message.localId = object.localId ?? "";
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.valuePath = object.valuePath ?? "";
    message.defaultValue = object.defaultValue ?? "";
    message.valueType = object.valueType ?? "";
    message.defaultType = object.defaultType ?? 0;
    message.source = object.source ?? 0;
    message.variableType = object.variableType ?? 0;
    message.values = object.values?.map((e) => NodeReference.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodeAction(): NodeAction {
  return {
    action: "",
    value: "",
    actionType: 0,
    source: 0,
    payload: [],
    response: [],
    values: [],
    successActions: [],
    errorActions: [],
  };
}

export const NodeAction = {
  encode(message: NodeAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.actionType !== 0) {
      writer.uint32(24).int32(message.actionType);
    }
    if (message.source !== 0) {
      writer.uint32(32).int32(message.source);
    }
    for (const v of message.payload) {
      NodePayload.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.response) {
      NodePayload.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.values) {
      NodeReference.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.successActions) {
      NodeAction.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.errorActions) {
      NodeAction.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.actionType = reader.int32() as any;
          break;
        case 4:
          message.source = reader.int32() as any;
          break;
        case 5:
          message.payload.push(NodePayload.decode(reader, reader.uint32()));
          break;
        case 6:
          message.response.push(NodePayload.decode(reader, reader.uint32()));
          break;
        case 7:
          message.values.push(NodeReference.decode(reader, reader.uint32()));
          break;
        case 8:
          message.successActions.push(NodeAction.decode(reader, reader.uint32()));
          break;
        case 9:
          message.errorActions.push(NodeAction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeAction {
    return {
      action: isSet(object.action) ? String(object.action) : "",
      value: isSet(object.value) ? String(object.value) : "",
      actionType: isSet(object.actionType) ? nodeActionActionTypeFromJSON(object.actionType) : 0,
      source: isSet(object.source) ? nodeActionActionSourceFromJSON(object.source) : 0,
      payload: Array.isArray(object?.payload) ? object.payload.map((e: any) => NodePayload.fromJSON(e)) : [],
      response: Array.isArray(object?.response) ? object.response.map((e: any) => NodePayload.fromJSON(e)) : [],
      values: Array.isArray(object?.values) ? object.values.map((e: any) => NodeReference.fromJSON(e)) : [],
      successActions: Array.isArray(object?.successActions)
        ? object.successActions.map((e: any) => NodeAction.fromJSON(e))
        : [],
      errorActions: Array.isArray(object?.errorActions)
        ? object.errorActions.map((e: any) => NodeAction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NodeAction): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    message.value !== undefined && (obj.value = message.value);
    message.actionType !== undefined && (obj.actionType = nodeActionActionTypeToJSON(message.actionType));
    message.source !== undefined && (obj.source = nodeActionActionSourceToJSON(message.source));
    if (message.payload) {
      obj.payload = message.payload.map((e) => e ? NodePayload.toJSON(e) : undefined);
    } else {
      obj.payload = [];
    }
    if (message.response) {
      obj.response = message.response.map((e) => e ? NodePayload.toJSON(e) : undefined);
    } else {
      obj.response = [];
    }
    if (message.values) {
      obj.values = message.values.map((e) => e ? NodeReference.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    if (message.successActions) {
      obj.successActions = message.successActions.map((e) => e ? NodeAction.toJSON(e) : undefined);
    } else {
      obj.successActions = [];
    }
    if (message.errorActions) {
      obj.errorActions = message.errorActions.map((e) => e ? NodeAction.toJSON(e) : undefined);
    } else {
      obj.errorActions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<NodeAction>): NodeAction {
    const message = createBaseNodeAction();
    message.action = object.action ?? "";
    message.value = object.value ?? "";
    message.actionType = object.actionType ?? 0;
    message.source = object.source ?? 0;
    message.payload = object.payload?.map((e) => NodePayload.fromPartial(e)) || [];
    message.response = object.response?.map((e) => NodePayload.fromPartial(e)) || [];
    message.values = object.values?.map((e) => NodeReference.fromPartial(e)) || [];
    message.successActions = object.successActions?.map((e) => NodeAction.fromPartial(e)) || [];
    message.errorActions = object.errorActions?.map((e) => NodeAction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodePayload(): NodePayload {
  return { actions: [] };
}

export const NodePayload = {
  encode(message: NodePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      NodeVariable.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    if (message.reference !== undefined) {
      NodeReference.encode(message.reference, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.actions) {
      NodeAction.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = NodeVariable.decode(reader, reader.uint32());
          break;
        case 2:
          message.reference = NodeReference.decode(reader, reader.uint32());
          break;
        case 3:
          message.actions.push(NodeAction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodePayload {
    return {
      value: isSet(object.value) ? NodeVariable.fromJSON(object.value) : undefined,
      reference: isSet(object.reference) ? NodeReference.fromJSON(object.reference) : undefined,
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => NodeAction.fromJSON(e)) : [],
    };
  },

  toJSON(message: NodePayload): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? NodeVariable.toJSON(message.value) : undefined);
    message.reference !== undefined &&
      (obj.reference = message.reference ? NodeReference.toJSON(message.reference) : undefined);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? NodeAction.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<NodePayload>): NodePayload {
    const message = createBaseNodePayload();
    message.value = (object.value !== undefined && object.value !== null)
      ? NodeVariable.fromPartial(object.value)
      : undefined;
    message.reference = (object.reference !== undefined && object.reference !== null)
      ? NodeReference.fromPartial(object.reference)
      : undefined;
    message.actions = object.actions?.map((e) => NodeAction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMoleculeComponent(): MoleculeComponent {
  return { props: [] };
}

export const MoleculeComponent = {
  encode(message: MoleculeComponent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reference !== undefined) {
      NodeReference.encode(message.reference, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.props) {
      NodeParam.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoleculeComponent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoleculeComponent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reference = NodeReference.decode(reader, reader.uint32());
          break;
        case 2:
          message.props.push(NodeParam.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MoleculeComponent {
    return {
      reference: isSet(object.reference) ? NodeReference.fromJSON(object.reference) : undefined,
      props: Array.isArray(object?.props) ? object.props.map((e: any) => NodeParam.fromJSON(e)) : [],
    };
  },

  toJSON(message: MoleculeComponent): unknown {
    const obj: any = {};
    message.reference !== undefined &&
      (obj.reference = message.reference ? NodeReference.toJSON(message.reference) : undefined);
    if (message.props) {
      obj.props = message.props.map((e) => e ? NodeParam.toJSON(e) : undefined);
    } else {
      obj.props = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MoleculeComponent>): MoleculeComponent {
    const message = createBaseMoleculeComponent();
    message.reference = (object.reference !== undefined && object.reference !== null)
      ? NodeReference.fromPartial(object.reference)
      : undefined;
    message.props = object.props?.map((e) => NodeParam.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodeCustom(): NodeCustom {
  return {
    mediaQueries: [],
    seoTitle: [],
    seoDescription: [],
    actions: [],
    params: [],
    props: [],
    childrenData: [],
    formValidations: [],
  };
}

export const NodeCustom = {
  encode(message: NodeCustom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.usePropStyle !== undefined) {
      writer.uint32(8).bool(message.usePropStyle);
    }
    if (message.ignorePropStyle !== undefined) {
      writer.uint32(16).bool(message.ignorePropStyle);
    }
    if (message.form !== undefined) {
      NodeReference.encode(message.form, writer.uint32(26).fork()).ldelim();
    }
    if (message.molecule !== undefined) {
      NodeReference.encode(message.molecule, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.mediaQueries) {
      NodeMediaQuery.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.authentication !== undefined) {
      NodeReference.encode(message.authentication, writer.uint32(50).fork()).ldelim();
    }
    if (message.renderCondition !== undefined) {
      RenderCondition.encode(message.renderCondition, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.seoTitle) {
      NodeVariable.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.seoDescription) {
      NodeVariable.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.actions) {
      NodeAction.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.params) {
      NodeParam.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.props) {
      NodeParam.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.childrenData) {
      NodeVariable.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.formValidations) {
      FormValidation.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeCustom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeCustom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usePropStyle = reader.bool();
          break;
        case 2:
          message.ignorePropStyle = reader.bool();
          break;
        case 3:
          message.form = NodeReference.decode(reader, reader.uint32());
          break;
        case 4:
          message.molecule = NodeReference.decode(reader, reader.uint32());
          break;
        case 5:
          message.mediaQueries.push(NodeMediaQuery.decode(reader, reader.uint32()));
          break;
        case 6:
          message.authentication = NodeReference.decode(reader, reader.uint32());
          break;
        case 7:
          message.renderCondition = RenderCondition.decode(reader, reader.uint32());
          break;
        case 8:
          message.seoTitle.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 9:
          message.seoDescription.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 10:
          message.actions.push(NodeAction.decode(reader, reader.uint32()));
          break;
        case 11:
          message.params.push(NodeParam.decode(reader, reader.uint32()));
          break;
        case 12:
          message.props.push(NodeParam.decode(reader, reader.uint32()));
          break;
        case 13:
          message.childrenData.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        case 14:
          message.formValidations.push(FormValidation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeCustom {
    return {
      usePropStyle: isSet(object.usePropStyle) ? Boolean(object.usePropStyle) : undefined,
      ignorePropStyle: isSet(object.ignorePropStyle) ? Boolean(object.ignorePropStyle) : undefined,
      form: isSet(object.form) ? NodeReference.fromJSON(object.form) : undefined,
      molecule: isSet(object.molecule) ? NodeReference.fromJSON(object.molecule) : undefined,
      mediaQueries: Array.isArray(object?.mediaQueries)
        ? object.mediaQueries.map((e: any) => NodeMediaQuery.fromJSON(e))
        : [],
      authentication: isSet(object.authentication) ? NodeReference.fromJSON(object.authentication) : undefined,
      renderCondition: isSet(object.renderCondition) ? RenderCondition.fromJSON(object.renderCondition) : undefined,
      seoTitle: Array.isArray(object?.seoTitle) ? object.seoTitle.map((e: any) => NodeVariable.fromJSON(e)) : [],
      seoDescription: Array.isArray(object?.seoDescription)
        ? object.seoDescription.map((e: any) => NodeVariable.fromJSON(e))
        : [],
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => NodeAction.fromJSON(e)) : [],
      params: Array.isArray(object?.params) ? object.params.map((e: any) => NodeParam.fromJSON(e)) : [],
      props: Array.isArray(object?.props) ? object.props.map((e: any) => NodeParam.fromJSON(e)) : [],
      childrenData: Array.isArray(object?.childrenData)
        ? object.childrenData.map((e: any) => NodeVariable.fromJSON(e))
        : [],
      formValidations: Array.isArray(object?.formValidations)
        ? object.formValidations.map((e: any) => FormValidation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NodeCustom): unknown {
    const obj: any = {};
    message.usePropStyle !== undefined && (obj.usePropStyle = message.usePropStyle);
    message.ignorePropStyle !== undefined && (obj.ignorePropStyle = message.ignorePropStyle);
    message.form !== undefined && (obj.form = message.form ? NodeReference.toJSON(message.form) : undefined);
    message.molecule !== undefined &&
      (obj.molecule = message.molecule ? NodeReference.toJSON(message.molecule) : undefined);
    if (message.mediaQueries) {
      obj.mediaQueries = message.mediaQueries.map((e) => e ? NodeMediaQuery.toJSON(e) : undefined);
    } else {
      obj.mediaQueries = [];
    }
    message.authentication !== undefined &&
      (obj.authentication = message.authentication ? NodeReference.toJSON(message.authentication) : undefined);
    message.renderCondition !== undefined &&
      (obj.renderCondition = message.renderCondition ? RenderCondition.toJSON(message.renderCondition) : undefined);
    if (message.seoTitle) {
      obj.seoTitle = message.seoTitle.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.seoTitle = [];
    }
    if (message.seoDescription) {
      obj.seoDescription = message.seoDescription.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.seoDescription = [];
    }
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? NodeAction.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    if (message.params) {
      obj.params = message.params.map((e) => e ? NodeParam.toJSON(e) : undefined);
    } else {
      obj.params = [];
    }
    if (message.props) {
      obj.props = message.props.map((e) => e ? NodeParam.toJSON(e) : undefined);
    } else {
      obj.props = [];
    }
    if (message.childrenData) {
      obj.childrenData = message.childrenData.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.childrenData = [];
    }
    if (message.formValidations) {
      obj.formValidations = message.formValidations.map((e) => e ? FormValidation.toJSON(e) : undefined);
    } else {
      obj.formValidations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<NodeCustom>): NodeCustom {
    const message = createBaseNodeCustom();
    message.usePropStyle = object.usePropStyle ?? undefined;
    message.ignorePropStyle = object.ignorePropStyle ?? undefined;
    message.form = (object.form !== undefined && object.form !== null)
      ? NodeReference.fromPartial(object.form)
      : undefined;
    message.molecule = (object.molecule !== undefined && object.molecule !== null)
      ? NodeReference.fromPartial(object.molecule)
      : undefined;
    message.mediaQueries = object.mediaQueries?.map((e) => NodeMediaQuery.fromPartial(e)) || [];
    message.authentication = (object.authentication !== undefined && object.authentication !== null)
      ? NodeReference.fromPartial(object.authentication)
      : undefined;
    message.renderCondition = (object.renderCondition !== undefined && object.renderCondition !== null)
      ? RenderCondition.fromPartial(object.renderCondition)
      : undefined;
    message.seoTitle = object.seoTitle?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.seoDescription = object.seoDescription?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.actions = object.actions?.map((e) => NodeAction.fromPartial(e)) || [];
    message.params = object.params?.map((e) => NodeParam.fromPartial(e)) || [];
    message.props = object.props?.map((e) => NodeParam.fromPartial(e)) || [];
    message.childrenData = object.childrenData?.map((e) => NodeVariable.fromPartial(e)) || [];
    message.formValidations = object.formValidations?.map((e) => FormValidation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodeMediaQuery(): NodeMediaQuery {
  return { lower: 0, upper: 0 };
}

export const NodeMediaQuery = {
  encode(message: NodeMediaQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lower !== 0) {
      writer.uint32(8).int32(message.lower);
    }
    if (message.upper !== 0) {
      writer.uint32(16).int32(message.upper);
    }
    if (message.style !== undefined) {
      Struct.encode(Struct.wrap(message.style), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeMediaQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeMediaQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lower = reader.int32();
          break;
        case 2:
          message.upper = reader.int32();
          break;
        case 3:
          message.style = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeMediaQuery {
    return {
      lower: isSet(object.lower) ? Number(object.lower) : 0,
      upper: isSet(object.upper) ? Number(object.upper) : 0,
      style: isObject(object.style) ? object.style : undefined,
    };
  },

  toJSON(message: NodeMediaQuery): unknown {
    const obj: any = {};
    message.lower !== undefined && (obj.lower = Math.round(message.lower));
    message.upper !== undefined && (obj.upper = Math.round(message.upper));
    message.style !== undefined && (obj.style = message.style);
    return obj;
  },

  fromPartial(object: DeepPartial<NodeMediaQuery>): NodeMediaQuery {
    const message = createBaseNodeMediaQuery();
    message.lower = object.lower ?? 0;
    message.upper = object.upper ?? 0;
    message.style = object.style ?? undefined;
    return message;
  },
};

function createBaseRenderCondition(): RenderCondition {
  return { enabled: false, conditions: [] };
}

export const RenderCondition = {
  encode(message: RenderCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    for (const v of message.conditions) {
      RenderConditionCondition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenderCondition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRenderCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.conditions.push(RenderConditionCondition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenderCondition {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      conditions: Array.isArray(object?.conditions)
        ? object.conditions.map((e: any) => RenderConditionCondition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RenderCondition): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.conditions) {
      obj.conditions = message.conditions.map((e) => e ? RenderConditionCondition.toJSON(e) : undefined);
    } else {
      obj.conditions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RenderCondition>): RenderCondition {
    const message = createBaseRenderCondition();
    message.enabled = object.enabled ?? false;
    message.conditions = object.conditions?.map((e) => RenderConditionCondition.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRenderConditionCondition(): RenderConditionCondition {
  return { source: 0, operator: 0 };
}

export const RenderConditionCondition = {
  encode(message: RenderConditionCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    if (message.operator !== 0) {
      writer.uint32(16).int32(message.operator);
    }
    if (message.left !== undefined) {
      NodeVariable.encode(message.left, writer.uint32(26).fork()).ldelim();
    }
    if (message.right !== undefined) {
      NodeVariable.encode(message.right, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenderConditionCondition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRenderConditionCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.int32() as any;
          break;
        case 2:
          message.operator = reader.int32() as any;
          break;
        case 3:
          message.left = NodeVariable.decode(reader, reader.uint32());
          break;
        case 4:
          message.right = NodeVariable.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenderConditionCondition {
    return {
      source: isSet(object.source) ? renderConditionSourceFromJSON(object.source) : 0,
      operator: isSet(object.operator) ? renderConditionOperatorFromJSON(object.operator) : 0,
      left: isSet(object.left) ? NodeVariable.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? NodeVariable.fromJSON(object.right) : undefined,
    };
  },

  toJSON(message: RenderConditionCondition): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = renderConditionSourceToJSON(message.source));
    message.operator !== undefined && (obj.operator = renderConditionOperatorToJSON(message.operator));
    message.left !== undefined && (obj.left = message.left ? NodeVariable.toJSON(message.left) : undefined);
    message.right !== undefined && (obj.right = message.right ? NodeVariable.toJSON(message.right) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RenderConditionCondition>): RenderConditionCondition {
    const message = createBaseRenderConditionCondition();
    message.source = object.source ?? 0;
    message.operator = object.operator ?? 0;
    message.left = (object.left !== undefined && object.left !== null)
      ? NodeVariable.fromPartial(object.left)
      : undefined;
    message.right = (object.right !== undefined && object.right !== null)
      ? NodeVariable.fromPartial(object.right)
      : undefined;
    return message;
  },
};

function createBaseFormValidation(): FormValidation {
  return { validationType: 0, validationRules: [] };
}

export const FormValidation = {
  encode(message: FormValidation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validationType !== 0) {
      writer.uint32(8).int32(message.validationType);
    }
    for (const v of message.validationRules) {
      FormValidationFormValidationsRule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FormValidation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFormValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validationType = reader.int32() as any;
          break;
        case 2:
          message.validationRules.push(FormValidationFormValidationsRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FormValidation {
    return {
      validationType: isSet(object.validationType) ? formValidationValidationTypeFromJSON(object.validationType) : 0,
      validationRules: Array.isArray(object?.validationRules)
        ? object.validationRules.map((e: any) => FormValidationFormValidationsRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FormValidation): unknown {
    const obj: any = {};
    message.validationType !== undefined &&
      (obj.validationType = formValidationValidationTypeToJSON(message.validationType));
    if (message.validationRules) {
      obj.validationRules = message.validationRules.map((e) =>
        e ? FormValidationFormValidationsRule.toJSON(e) : undefined
      );
    } else {
      obj.validationRules = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FormValidation>): FormValidation {
    const message = createBaseFormValidation();
    message.validationType = object.validationType ?? 0;
    message.validationRules = object.validationRules?.map((e) => FormValidationFormValidationsRule.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseFormValidationFormValidationsRule(): FormValidationFormValidationsRule {
  return { value: "", valueType: "", errorMessages: [] };
}

export const FormValidationFormValidationsRule = {
  encode(message: FormValidationFormValidationsRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    if (message.valueType !== "") {
      writer.uint32(18).string(message.valueType);
    }
    for (const v of message.errorMessages) {
      NodeVariable.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FormValidationFormValidationsRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFormValidationFormValidationsRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        case 2:
          message.valueType = reader.string();
          break;
        case 3:
          message.errorMessages.push(NodeVariable.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FormValidationFormValidationsRule {
    return {
      value: isSet(object.value) ? String(object.value) : "",
      valueType: isSet(object.valueType) ? String(object.valueType) : "",
      errorMessages: Array.isArray(object?.errorMessages)
        ? object.errorMessages.map((e: any) => NodeVariable.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FormValidationFormValidationsRule): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.valueType !== undefined && (obj.valueType = message.valueType);
    if (message.errorMessages) {
      obj.errorMessages = message.errorMessages.map((e) => e ? NodeVariable.toJSON(e) : undefined);
    } else {
      obj.errorMessages = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FormValidationFormValidationsRule>): FormValidationFormValidationsRule {
    const message = createBaseFormValidationFormValidationsRule();
    message.value = object.value ?? "";
    message.valueType = object.valueType ?? "";
    message.errorMessages = object.errorMessages?.map((e) => NodeVariable.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetWebAppRequest(): GetWebAppRequest {
  return { projectId: 0 };
}

export const GetWebAppRequest = {
  encode(message: GetWebAppRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetWebAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetWebAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetWebAppRequest {
    return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
  },

  toJSON(message: GetWebAppRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  fromPartial(object: DeepPartial<GetWebAppRequest>): GetWebAppRequest {
    const message = createBaseGetWebAppRequest();
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseGetWebAppResponse(): GetWebAppResponse {
  return {};
}

export const GetWebAppResponse = {
  encode(message: GetWebAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.webApp !== undefined) {
      WebApp.encode(message.webApp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetWebAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetWebAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.webApp = WebApp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetWebAppResponse {
    return { webApp: isSet(object.webApp) ? WebApp.fromJSON(object.webApp) : undefined };
  },

  toJSON(message: GetWebAppResponse): unknown {
    const obj: any = {};
    message.webApp !== undefined && (obj.webApp = message.webApp ? WebApp.toJSON(message.webApp) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetWebAppResponse>): GetWebAppResponse {
    const message = createBaseGetWebAppResponse();
    message.webApp = (object.webApp !== undefined && object.webApp !== null)
      ? WebApp.fromPartial(object.webApp)
      : undefined;
    return message;
  },
};

function createBaseGetBackendRequest(): GetBackendRequest {
  return { projectId: 0 };
}

export const GetBackendRequest = {
  encode(message: GetBackendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBackendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBackendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBackendRequest {
    return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
  },

  toJSON(message: GetBackendRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  fromPartial(object: DeepPartial<GetBackendRequest>): GetBackendRequest {
    const message = createBaseGetBackendRequest();
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseGetBackendResponse(): GetBackendResponse {
  return {};
}

export const GetBackendResponse = {
  encode(message: GetBackendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backend !== undefined) {
      Backend.encode(message.backend, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBackendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBackendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backend = Backend.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBackendResponse {
    return { backend: isSet(object.backend) ? Backend.fromJSON(object.backend) : undefined };
  },

  toJSON(message: GetBackendResponse): unknown {
    const obj: any = {};
    message.backend !== undefined && (obj.backend = message.backend ? Backend.toJSON(message.backend) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetBackendResponse>): GetBackendResponse {
    const message = createBaseGetBackendResponse();
    message.backend = (object.backend !== undefined && object.backend !== null)
      ? Backend.fromPartial(object.backend)
      : undefined;
    return message;
  },
};

function createBaseListTablesRequest(): ListTablesRequest {
  return { projectId: 0 };
}

export const ListTablesRequest = {
  encode(message: ListTablesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTablesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTablesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTablesRequest {
    return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
  },

  toJSON(message: ListTablesRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  fromPartial(object: DeepPartial<ListTablesRequest>): ListTablesRequest {
    const message = createBaseListTablesRequest();
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseListTablesResponse(): ListTablesResponse {
  return { tables: [] };
}

export const ListTablesResponse = {
  encode(message: ListTablesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tables) {
      Table.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTablesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTablesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tables.push(Table.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTablesResponse {
    return { tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => Table.fromJSON(e)) : [] };
  },

  toJSON(message: ListTablesResponse): unknown {
    const obj: any = {};
    if (message.tables) {
      obj.tables = message.tables.map((e) => e ? Table.toJSON(e) : undefined);
    } else {
      obj.tables = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListTablesResponse>): ListTablesResponse {
    const message = createBaseListTablesResponse();
    message.tables = object.tables?.map((e) => Table.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListMigrationsRequest(): ListMigrationsRequest {
  return { projectId: 0 };
}

export const ListMigrationsRequest = {
  encode(message: ListMigrationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMigrationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMigrationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListMigrationsRequest {
    return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
  },

  toJSON(message: ListMigrationsRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  fromPartial(object: DeepPartial<ListMigrationsRequest>): ListMigrationsRequest {
    const message = createBaseListMigrationsRequest();
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseListControllersRequest(): ListControllersRequest {
  return { projectId: 0 };
}

export const ListControllersRequest = {
  encode(message: ListControllersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListControllersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListControllersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListControllersRequest {
    return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
  },

  toJSON(message: ListControllersRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  fromPartial(object: DeepPartial<ListControllersRequest>): ListControllersRequest {
    const message = createBaseListControllersRequest();
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseListControllersResponse(): ListControllersResponse {
  return { controllers: [] };
}

export const ListControllersResponse = {
  encode(message: ListControllersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.controllers) {
      Controller.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListControllersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListControllersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controllers.push(Controller.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListControllersResponse {
    return {
      controllers: Array.isArray(object?.controllers) ? object.controllers.map((e: any) => Controller.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListControllersResponse): unknown {
    const obj: any = {};
    if (message.controllers) {
      obj.controllers = message.controllers.map((e) => e ? Controller.toJSON(e) : undefined);
    } else {
      obj.controllers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListControllersResponse>): ListControllersResponse {
    const message = createBaseListControllersResponse();
    message.controllers = object.controllers?.map((e) => Controller.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListFeaturesRequest(): ListFeaturesRequest {
  return { projectId: 0 };
}

export const ListFeaturesRequest = {
  encode(message: ListFeaturesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFeaturesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFeaturesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListFeaturesRequest {
    return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
  },

  toJSON(message: ListFeaturesRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  fromPartial(object: DeepPartial<ListFeaturesRequest>): ListFeaturesRequest {
    const message = createBaseListFeaturesRequest();
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseListFeaturesResponse(): ListFeaturesResponse {
  return { features: [] };
}

export const ListFeaturesResponse = {
  encode(message: ListFeaturesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.features) {
      Feature.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFeaturesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFeaturesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.features.push(Feature.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListFeaturesResponse {
    return { features: Array.isArray(object?.features) ? object.features.map((e: any) => Feature.fromJSON(e)) : [] };
  },

  toJSON(message: ListFeaturesResponse): unknown {
    const obj: any = {};
    if (message.features) {
      obj.features = message.features.map((e) => e ? Feature.toJSON(e) : undefined);
    } else {
      obj.features = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListFeaturesResponse>): ListFeaturesResponse {
    const message = createBaseListFeaturesResponse();
    message.features = object.features?.map((e) => Feature.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListAuthorizationsRequest(): ListAuthorizationsRequest {
  return { projectId: 0 };
}

export const ListAuthorizationsRequest = {
  encode(message: ListAuthorizationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthorizationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAuthorizationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAuthorizationsRequest {
    return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
  },

  toJSON(message: ListAuthorizationsRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  fromPartial(object: DeepPartial<ListAuthorizationsRequest>): ListAuthorizationsRequest {
    const message = createBaseListAuthorizationsRequest();
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseListAuthorizationsResponse(): ListAuthorizationsResponse {
  return { authorizations: [] };
}

export const ListAuthorizationsResponse = {
  encode(message: ListAuthorizationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.authorizations) {
      Authorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthorizationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAuthorizationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorizations.push(Authorization.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAuthorizationsResponse {
    return {
      authorizations: Array.isArray(object?.authorizations)
        ? object.authorizations.map((e: any) => Authorization.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListAuthorizationsResponse): unknown {
    const obj: any = {};
    if (message.authorizations) {
      obj.authorizations = message.authorizations.map((e) => e ? Authorization.toJSON(e) : undefined);
    } else {
      obj.authorizations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListAuthorizationsResponse>): ListAuthorizationsResponse {
    const message = createBaseListAuthorizationsResponse();
    message.authorizations = object.authorizations?.map((e) => Authorization.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListLocalizationsRequest(): ListLocalizationsRequest {
  return { projectId: 0 };
}

export const ListLocalizationsRequest = {
  encode(message: ListLocalizationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLocalizationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLocalizationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListLocalizationsRequest {
    return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
  },

  toJSON(message: ListLocalizationsRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  fromPartial(object: DeepPartial<ListLocalizationsRequest>): ListLocalizationsRequest {
    const message = createBaseListLocalizationsRequest();
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseListLocalizationsResponse(): ListLocalizationsResponse {
  return { localizations: [] };
}

export const ListLocalizationsResponse = {
  encode(message: ListLocalizationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.localizations) {
      Localization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLocalizationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLocalizationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.localizations.push(Localization.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListLocalizationsResponse {
    return {
      localizations: Array.isArray(object?.localizations)
        ? object.localizations.map((e: any) => Localization.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListLocalizationsResponse): unknown {
    const obj: any = {};
    if (message.localizations) {
      obj.localizations = message.localizations.map((e) => e ? Localization.toJSON(e) : undefined);
    } else {
      obj.localizations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListLocalizationsResponse>): ListLocalizationsResponse {
    const message = createBaseListLocalizationsResponse();
    message.localizations = object.localizations?.map((e) => Localization.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListMigrationsResponse(): ListMigrationsResponse {
  return { migrations: [] };
}

export const ListMigrationsResponse = {
  encode(message: ListMigrationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.migrations) {
      Migration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMigrationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMigrationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.migrations.push(Migration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListMigrationsResponse {
    return {
      migrations: Array.isArray(object?.migrations) ? object.migrations.map((e: any) => Migration.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListMigrationsResponse): unknown {
    const obj: any = {};
    if (message.migrations) {
      obj.migrations = message.migrations.map((e) => e ? Migration.toJSON(e) : undefined);
    } else {
      obj.migrations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListMigrationsResponse>): ListMigrationsResponse {
    const message = createBaseListMigrationsResponse();
    message.migrations = object.migrations?.map((e) => Migration.fromPartial(e)) || [];
    return message;
  },
};

export type CoreServiceDefinition = typeof CoreServiceDefinition;
export const CoreServiceDefinition = {
  name: "CoreService",
  fullName: "schema.v1.CoreService",
  methods: {
    listTables: {
      name: "ListTables",
      requestType: ListTablesRequest,
      requestStream: false,
      responseType: ListTablesResponse,
      responseStream: false,
      options: {},
    },
    listControllers: {
      name: "ListControllers",
      requestType: ListControllersRequest,
      requestStream: false,
      responseType: ListControllersResponse,
      responseStream: false,
      options: {},
    },
    listFeatures: {
      name: "ListFeatures",
      requestType: ListFeaturesRequest,
      requestStream: false,
      responseType: ListFeaturesResponse,
      responseStream: false,
      options: {},
    },
    listAuthorizations: {
      name: "ListAuthorizations",
      requestType: ListAuthorizationsRequest,
      requestStream: false,
      responseType: ListAuthorizationsResponse,
      responseStream: false,
      options: {},
    },
    listLocalizations: {
      name: "ListLocalizations",
      requestType: ListLocalizationsRequest,
      requestStream: false,
      responseType: ListLocalizationsResponse,
      responseStream: false,
      options: {},
    },
    listMigrations: {
      name: "ListMigrations",
      requestType: ListMigrationsRequest,
      requestStream: false,
      responseType: ListMigrationsResponse,
      responseStream: false,
      options: {},
    },
    getBackend: {
      name: "GetBackend",
      requestType: GetBackendRequest,
      requestStream: false,
      responseType: GetBackendResponse,
      responseStream: false,
      options: {},
    },
    getWebApp: {
      name: "GetWebApp",
      requestType: GetWebAppRequest,
      requestStream: false,
      responseType: GetWebAppResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface CoreServiceImplementation<CallContextExt = {}> {
  listTables(
    request: ListTablesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListTablesResponse>>;
  listControllers(
    request: ListControllersRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListControllersResponse>>;
  listFeatures(
    request: ListFeaturesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListFeaturesResponse>>;
  listAuthorizations(
    request: ListAuthorizationsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListAuthorizationsResponse>>;
  listLocalizations(
    request: ListLocalizationsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListLocalizationsResponse>>;
  listMigrations(
    request: ListMigrationsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListMigrationsResponse>>;
  getBackend(
    request: GetBackendRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetBackendResponse>>;
  getWebApp(request: GetWebAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetWebAppResponse>>;
}

export interface CoreServiceClient<CallOptionsExt = {}> {
  listTables(
    request: DeepPartial<ListTablesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListTablesResponse>;
  listControllers(
    request: DeepPartial<ListControllersRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListControllersResponse>;
  listFeatures(
    request: DeepPartial<ListFeaturesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListFeaturesResponse>;
  listAuthorizations(
    request: DeepPartial<ListAuthorizationsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListAuthorizationsResponse>;
  listLocalizations(
    request: DeepPartial<ListLocalizationsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListLocalizationsResponse>;
  listMigrations(
    request: DeepPartial<ListMigrationsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListMigrationsResponse>;
  getBackend(
    request: DeepPartial<GetBackendRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetBackendResponse>;
  getWebApp(request: DeepPartial<GetWebAppRequest>, options?: CallOptions & CallOptionsExt): Promise<GetWebAppResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
