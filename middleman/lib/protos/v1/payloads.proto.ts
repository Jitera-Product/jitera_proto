/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

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

export class Project {
  id: string;
  projectName: string;
  projectId: number;
  infra?: Infra | undefined;
  projectExport?: ProjectExport | undefined;
  projectPreview?: ProjectPreview | undefined;
}

export class ProjectExport {
  id: number;
}

export class ProjectPreview {
  id: number;
}

export class Infra {
  path: string;
}

export class Backend {
  tables: Table[];
  controllers: Controller[];
  features: Feature[];
  authorizations: Authorization[];
  localizations: Localization[];
  migrations: Migration[];
}

export class Localization {
  lang: string;
  namespaces: LocalizationNamespace[];
}

export class LocalizationNamespace {
  name: string;
  translates: LocalizationTranslate[];
}

export class LocalizationTranslate {
  key: string;
  value: string;
}

export class DataType {
  name: DataTypeName;
}

export class Authorization {
  name: string;
  id: number;
  policies: AuthorizationPolicy[];
}

export class AuthorizationPolicy {
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

export class AuthorizationPolicyRoleBinding {
  table: string;
  column: string;
  role: string;
}

export class AuthorizationPolicyRule {
  operands: AuthorizationPolicyRuleOperand[];
  operators: Operator[];
}

export class AuthorizationPolicyRuleOperand {
  expr?: AuthorizationPolicyRuleExpr | undefined;
  rule?: AuthorizationPolicyRule | undefined;
}

export class AuthorizationPolicyRuleExpr {
  column: string;
  value?: string | undefined;
  paths?: string | undefined;
  dataType?: DataType;
  operator: Operator;
}

export class Feature {
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
  EMAIL_LOGIN = 0,
  JP_BANKS_DATA = 1,
  BASIC_AUTH = 2,
  TWILIO_LOGIN = 3,
  ROLLBAR = 4,
  DEEP_LINK = 5,
  STRIPE = 6,
  LINE_LOGIN = 7,
  UNRECOGNIZED = -1,
}

export function featureFeatureNameFromJSON(object: any): FeatureFeatureName {
  switch (object) {
    case 0:
    case "EMAIL_LOGIN":
      return FeatureFeatureName.EMAIL_LOGIN;
    case 1:
    case "JP_BANKS_DATA":
      return FeatureFeatureName.JP_BANKS_DATA;
    case 2:
    case "BASIC_AUTH":
      return FeatureFeatureName.BASIC_AUTH;
    case 3:
    case "TWILIO_LOGIN":
      return FeatureFeatureName.TWILIO_LOGIN;
    case 4:
    case "ROLLBAR":
      return FeatureFeatureName.ROLLBAR;
    case 5:
    case "DEEP_LINK":
      return FeatureFeatureName.DEEP_LINK;
    case 6:
    case "STRIPE":
      return FeatureFeatureName.STRIPE;
    case 7:
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

export class FeatureEmailLogin {
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

export class FeatureJPBankData {
}

export class FeatureBasicAuth {
  username: string;
  password: string;
}

export class FeatureTwilioLogin {
  userTables: string[];
  serviceId: string;
  sid: string;
  token: string;
  otpLength: number;
}

export class FeatureRollbar {
  accessToken: string;
}

export class FeatureDeepLink {
  iosAppStoreId: string;
  iosBundleId: string;
  iosAppLink: string;
  androidPackageName: string;
  androidCertFingerprints: string;
  androidAppLink: string;
  firebaseDomain: string;
}

export class FeatureStripe {
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

export class FeatureLineLogin {
  userTables: string[];
  clientId: string;
  secretKey: string;
}

export class Controller {
  name: string;
  endpoints: ControllerEndpoint[];
}

export class ControllerEndpoint {
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
}

export class ControllerEndpointList {
  queries?: ControllerRequestContent;
  conditions?: ControllerResourceCondition;
}

export class ControllerEndpointGet {
  queries?: ControllerRequestContent;
  conditions?: ControllerResourceCondition;
}

export class ControllerEndpointCreate {
  body?: ControllerRequestContent;
  conditions?: ControllerResourceCondition;
  resources?: ControllerResourceUpdate;
}

export class ControllerEndpointUpdate {
  body?: ControllerRequestContent;
  conditions?: ControllerResourceCondition;
  resources?: ControllerResourceUpdate;
}

export class ControllerEndpointDelete {
  body?: ControllerRequestContent;
  conditions?: ControllerResourceCondition;
}

export class ControllerRequestContent {
  fields: ControllerRequestContentField[];
}

export class ControllerRequestContentField {
  name: string;
  dataType?: DataType;
  children: ControllerRequestContentField[];
}

export class ControllerResponse {
  fields: ControllerResponseField[];
}

export class ControllerResponseField {
  name: string;
  resource?: string | undefined;
  property?: string | undefined;
  value?: string | undefined;
  dataType?: DataType;
  children: ControllerResponseField[];
  category: string;
}

export class ControllerResourceCondition {
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

export class ControllerResourceConditionOperand {
  expr?: ControllerResourceConditionExpr | undefined;
  condition?: ControllerResourceCondition | undefined;
}

export class ControllerResourceConditionExpr {
  paths: string[];
  query?: string | undefined;
  params?: string | undefined;
  body?: string | undefined;
  value?: string | undefined;
  system?: ControllerResourceConditionSystem | undefined;
  dataType?: DataType;
  operator: Operator;
}

export class ControllerResourceUpdate {
  fields: ControllerResourceUpdateField[];
}

export class ControllerResourceUpdateField {
  name: string;
  query?: string | undefined;
  params?: string | undefined;
  body?: string | undefined;
  value?: string | undefined;
  dataType?: DataType;
  children: ControllerResourceUpdateField[];
}

export class ControllerAuthentication {
  tableName: string;
}

export class ControllerAuthorization {
  authorizationId: number;
  tableName: string;
}

export class Table {
  name: string;
  columns: TableColumn[];
  relations: TableRelation[];
  indexes: TableIndex[];
}

export class TableColumn {
  name: string;
  type?: TableColumnColumnType;
  constraints: TableConstraint[];
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

export class TableColumnColumnType {
  integerType?: TableColumnIntegerType | undefined;
  stringType?: TableColumnStringType | undefined;
  floatType?: TableColumnFloatType | undefined;
  booleanType?: TableColumnBooleanType | undefined;
  dateType?: TableColumnDateType | undefined;
  fileType?: TableColumnFileType | undefined;
  enumType?: TableColumnEnumType | undefined;
}

export class TableColumnStringType {
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

export class TableColumnStringTypeCondition {
  operator: TableColumnOperator;
  value?: number | undefined;
  columnName?: string | undefined;
}

export class TableColumnIntegerType {
  defaultValue?: number | undefined;
  conditions: TableColumnIntegerTypeCondition[];
}

export class TableColumnIntegerTypeCondition {
  operator: TableColumnOperator;
  value?: number | undefined;
  columnName?: string | undefined;
}

export class TableColumnFloatType {
  defaultValue?: number | undefined;
  conditions: TableColumnFloatTypeCondition[];
}

export class TableColumnFloatTypeCondition {
  operator: TableColumnOperator;
  value?: number | undefined;
  columnName?: string | undefined;
}

export class TableColumnBooleanType {
  defaultValue: boolean;
}

export class TableColumnDateType {
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

export class TableColumnFileType {
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

export class TableColumnFileTypeNumberOfFiles {
  minimum: number;
  maximum: number;
}

export class TableColumnEnumType {
  defaultValue: string;
  values: string[];
}

export class TableConstraint {
  primaryKey?: TableConstraintPrimaryKey | undefined;
  foreignKey?: TableConstraintForeignKey | undefined;
  notNull?: TableConstraintNotNull | undefined;
  unique?: TableConstraintUnique | undefined;
}

export class TableConstraintPrimaryKey {
}

export class TableConstraintForeignKey {
  tableName: string;
  primaryKey: string;
}

export class TableConstraintNotNull {
}

export class TableConstraintUnique {
}

export class TableIndex {
  name: string;
  unique: boolean;
  columns: string[];
}

export class TableRelation {
  hasOne?: TableRelationRelationHasOne | undefined;
  belongTo?: TableRelationRelationBelongTo | undefined;
  oneMany?: TableRelationRelationOneMany | undefined;
  manyOne?: TableRelationRelationManyOne | undefined;
  manyMany?: TableRelationRelationManyMany | undefined;
}

export class TableRelationRelationHasOne {
  tableName: string;
  columnName: string;
}

export class TableRelationRelationBelongTo {
  tableName: string;
  columnName: string;
}

export class TableRelationRelationManyOne {
  tableName: string;
  columnName: string;
}

export class TableRelationRelationOneMany {
  tableName: string;
  columnName: string;
}

export class TableRelationRelationManyMany {
  tableName: string;
  joinedName: string;
}

export class Migration {
  migrationId: string;
  changes: MigrationChange[];
}

export class MigrationChange {
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

export class CreateTable {
  key: string;
  changeTo?: CreateTableChange;
  prevUuid: string;
  nextUuid: string;
  nextRecord?: CreateTableNextRecord;
}

export class ChangeTableName {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: CreateTableNextRecord;
  nextRecord?: CreateTableNextRecord;
}

export class ChangeTableComment {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: CreateTableNextRecord;
  nextRecord?: CreateTableNextRecord;
}

export class CreateTableChange {
  name: string;
  uuid: string;
  comment?: string | undefined;
}

export class AddColumn {
  key: string;
  changeTo?: MigrationColumnDefinition;
  prevUuid: string;
  nextUuid: string;
  nextRecord?: MigrationColumnDefinition;
}

export class RenameColumn {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
  nextRecord?: MigrationColumnDefinition;
}

export class ChangeColumnComment {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
  nextRecord?: MigrationColumnDefinition;
}

export class ChangeColumn {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
  nextRecord?: MigrationColumnDefinition;
}

export class ChangeColumnDefault {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
  nextRecord?: MigrationColumnDefinition;
}

export class ChangeColumnNull {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
  nextRecord?: MigrationColumnDefinition;
}

export class RemoveTableIndex {
  key: string;
  changeFrom?: TableIndexMigration;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: TableIndexMigration;
}

export class RemoveTableRelation {
  key: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: TableRelationMigration;
}

export class CreateTableRelation {
  key: string;
  changeTo?: TableRelationMigration;
  prevUuid: string;
  nextUuid: string;
  nextRecord?: TableRelationMigration;
}

export class RemoveColumn {
  key: string;
  changeFrom?: MigrationColumnDefinition;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
}

export class DropTable {
  key: string;
  changeFrom?: CreateTableNextRecord;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: CreateTableNextRecord;
}

export class ChangeTableIndex {
  key: string;
  changeFrom: string;
  changeTo: string;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: TableIndexMigration;
  nextRecord?: TableIndexMigration;
}

export class CreateTableIndex {
  key: string;
  changeTo?: TableIndexMigration;
  nextUuid: string;
  nextRecord?: TableIndexMigration;
}

export class AddUniqColumn {
  nextRecord?: MigrationColumnDefinition;
}

export class ChangeColumnUnique {
  key: string;
  changeFrom: boolean;
  changeTo: boolean;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: MigrationColumnDefinition;
  nextRecord?: MigrationColumnDefinition;
}

export class CreateTableNextRecord {
  name: string;
  uuid: string;
  comment: string;
  columnDefinitions: MigrationColumnDefinition[];
}

export class MigrationColumnDefinition {
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

export class TableMetaDataMigration {
  name: string;
  uuid: string;
}

export class TableIndexMigration {
  name: string;
  unique: boolean;
  uuid: string;
  tableDefinitionUuid: string;
  columnDefinitions: MigrationColumnDefinition[];
  singleIndex: boolean;
  tableDefinition?: TableMetaDataMigration | undefined;
  id: number;
}

export class TableRelationMigration {
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

export class GetBackendRequest {
  projectId: number;
}

export class GetBackendResponse {
  backend?: Backend;
}

export class ListTablesRequest {
  projectId: number;
}

export class ListTablesResponse {
  tables: Table[];
}

export class ListMigrationsRequest {
  projectId: number;
}

export class ListControllersRequest {
  projectId: number;
}

export class ListControllersResponse {
  controllers: Controller[];
}

export class ListFeaturesRequest {
  projectId: number;
}

export class ListFeaturesResponse {
  features: Feature[];
}

export class ListAuthorizationsRequest {
  projectId: number;
}

export class ListAuthorizationsResponse {
  authorizations: Authorization[];
}

export class ListLocalizationsRequest {
  projectId: number;
}

export class ListLocalizationsResponse {
  localizations: Localization[];
}

export class ListMigrationsResponse {
  migrations: Migration[];
}

function createBaseProject(): Project {
  return { id: "", projectName: "", projectId: 0 };
}

export const ProjectData = {
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
      InfraData.encode(message.infra, writer.uint32(34).fork()).ldelim();
    }
    if (message.projectExport !== undefined) {
      ProjectExportData.encode(message.projectExport, writer.uint32(74).fork()).ldelim();
    }
    if (message.projectPreview !== undefined) {
      ProjectPreviewData.encode(message.projectPreview, writer.uint32(82).fork()).ldelim();
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
          message.infra = InfraData.decode(reader, reader.uint32());
          break;
        case 9:
          message.projectExport = ProjectExportData.decode(reader, reader.uint32());
          break;
        case 10:
          message.projectPreview = ProjectPreviewData.decode(reader, reader.uint32());
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
      infra: isSet(object.infra) ? InfraData.fromJSON(object.infra) : undefined,
      projectExport: isSet(object.projectExport) ? ProjectExportData.fromJSON(object.projectExport) : undefined,
      projectPreview: isSet(object.projectPreview) ? ProjectPreviewData.fromJSON(object.projectPreview) : undefined,
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.projectName !== undefined && (obj.projectName = message.projectName);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.infra !== undefined && (obj.infra = message.infra ? InfraData.toJSON(message.infra) : undefined);
    message.projectExport !== undefined &&
      (obj.projectExport = message.projectExport ? ProjectExportData.toJSON(message.projectExport) : undefined);
    message.projectPreview !== undefined &&
      (obj.projectPreview = message.projectPreview ? ProjectPreviewData.toJSON(message.projectPreview) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Project>): Project {
    const message = createBaseProject();
    message.id = object.id ?? "";
    message.projectName = object.projectName ?? "";
    message.projectId = object.projectId ?? 0;
    message.infra = (object.infra !== undefined && object.infra !== null)
      ? InfraData.fromPartial(object.infra)
      : undefined;
    message.projectExport = (object.projectExport !== undefined && object.projectExport !== null)
      ? ProjectExportData.fromPartial(object.projectExport)
      : undefined;
    message.projectPreview = (object.projectPreview !== undefined && object.projectPreview !== null)
      ? ProjectPreviewData.fromPartial(object.projectPreview)
      : undefined;
    return message;
  },
};

function createBaseProjectExport(): ProjectExport {
  return { id: 0 };
}

export const ProjectExportData = {
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

export const ProjectPreviewData = {
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

export const InfraData = {
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

export const BackendData = {
  encode(message: Backend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tables) {
      TableData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.controllers) {
      ControllerData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.features) {
      FeatureData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.authorizations) {
      AuthorizationData.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.localizations) {
      LocalizationData.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.migrations) {
      MigrationData.encode(v!, writer.uint32(74).fork()).ldelim();
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
          message.tables.push(TableData.decode(reader, reader.uint32()));
          break;
        case 5:
          message.controllers.push(ControllerData.decode(reader, reader.uint32()));
          break;
        case 6:
          message.features.push(FeatureData.decode(reader, reader.uint32()));
          break;
        case 7:
          message.authorizations.push(AuthorizationData.decode(reader, reader.uint32()));
          break;
        case 8:
          message.localizations.push(LocalizationData.decode(reader, reader.uint32()));
          break;
        case 9:
          message.migrations.push(MigrationData.decode(reader, reader.uint32()));
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
      tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => TableData.fromJSON(e)) : [],
      controllers: Array.isArray(object?.controllers)
        ? object.controllers.map((e: any) => ControllerData.fromJSON(e))
        : [],
      features: Array.isArray(object?.features) ? object.features.map((e: any) => FeatureData.fromJSON(e)) : [],
      authorizations: Array.isArray(object?.authorizations)
        ? object.authorizations.map((e: any) => AuthorizationData.fromJSON(e))
        : [],
      localizations: Array.isArray(object?.localizations)
        ? object.localizations.map((e: any) => LocalizationData.fromJSON(e))
        : [],
      migrations: Array.isArray(object?.migrations) ? object.migrations.map((e: any) => MigrationData.fromJSON(e)) : [],
    };
  },

  toJSON(message: Backend): unknown {
    const obj: any = {};
    if (message.tables) {
      obj.tables = message.tables.map((e) => e ? TableData.toJSON(e) : undefined);
    } else {
      obj.tables = [];
    }
    if (message.controllers) {
      obj.controllers = message.controllers.map((e) => e ? ControllerData.toJSON(e) : undefined);
    } else {
      obj.controllers = [];
    }
    if (message.features) {
      obj.features = message.features.map((e) => e ? FeatureData.toJSON(e) : undefined);
    } else {
      obj.features = [];
    }
    if (message.authorizations) {
      obj.authorizations = message.authorizations.map((e) => e ? AuthorizationData.toJSON(e) : undefined);
    } else {
      obj.authorizations = [];
    }
    if (message.localizations) {
      obj.localizations = message.localizations.map((e) => e ? LocalizationData.toJSON(e) : undefined);
    } else {
      obj.localizations = [];
    }
    if (message.migrations) {
      obj.migrations = message.migrations.map((e) => e ? MigrationData.toJSON(e) : undefined);
    } else {
      obj.migrations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Backend>): Backend {
    const message = createBaseBackend();
    message.tables = object.tables?.map((e) => TableData.fromPartial(e)) || [];
    message.controllers = object.controllers?.map((e) => ControllerData.fromPartial(e)) || [];
    message.features = object.features?.map((e) => FeatureData.fromPartial(e)) || [];
    message.authorizations = object.authorizations?.map((e) => AuthorizationData.fromPartial(e)) || [];
    message.localizations = object.localizations?.map((e) => LocalizationData.fromPartial(e)) || [];
    message.migrations = object.migrations?.map((e) => MigrationData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLocalization(): Localization {
  return { lang: "", namespaces: [] };
}

export const LocalizationData = {
  encode(message: Localization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lang !== "") {
      writer.uint32(10).string(message.lang);
    }
    for (const v of message.namespaces) {
      LocalizationNamespaceData.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.namespaces.push(LocalizationNamespaceData.decode(reader, reader.uint32()));
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
        ? object.namespaces.map((e: any) => LocalizationNamespaceData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Localization): unknown {
    const obj: any = {};
    message.lang !== undefined && (obj.lang = message.lang);
    if (message.namespaces) {
      obj.namespaces = message.namespaces.map((e) => e ? LocalizationNamespaceData.toJSON(e) : undefined);
    } else {
      obj.namespaces = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Localization>): Localization {
    const message = createBaseLocalization();
    message.lang = object.lang ?? "";
    message.namespaces = object.namespaces?.map((e) => LocalizationNamespaceData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLocalizationNamespace(): LocalizationNamespace {
  return { name: "", translates: [] };
}

export const LocalizationNamespaceData = {
  encode(message: LocalizationNamespace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.translates) {
      LocalizationTranslateData.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.translates.push(LocalizationTranslateData.decode(reader, reader.uint32()));
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
        ? object.translates.map((e: any) => LocalizationTranslateData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LocalizationNamespace): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.translates) {
      obj.translates = message.translates.map((e) => e ? LocalizationTranslateData.toJSON(e) : undefined);
    } else {
      obj.translates = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<LocalizationNamespace>): LocalizationNamespace {
    const message = createBaseLocalizationNamespace();
    message.name = object.name ?? "";
    message.translates = object.translates?.map((e) => LocalizationTranslateData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLocalizationTranslate(): LocalizationTranslate {
  return { key: "", value: "" };
}

export const LocalizationTranslateData = {
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

export const DataTypeData = {
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

export const AuthorizationData = {
  encode(message: Authorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== 0) {
      writer.uint32(16).int32(message.id);
    }
    for (const v of message.policies) {
      AuthorizationPolicyData.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.policies.push(AuthorizationPolicyData.decode(reader, reader.uint32()));
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
      policies: Array.isArray(object?.policies)
        ? object.policies.map((e: any) => AuthorizationPolicyData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Authorization): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined && (obj.id = Math.round(message.id));
    if (message.policies) {
      obj.policies = message.policies.map((e) => e ? AuthorizationPolicyData.toJSON(e) : undefined);
    } else {
      obj.policies = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Authorization>): Authorization {
    const message = createBaseAuthorization();
    message.name = object.name ?? "";
    message.id = object.id ?? 0;
    message.policies = object.policies?.map((e) => AuthorizationPolicyData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAuthorizationPolicy(): AuthorizationPolicy {
  return { resource: "", scope: 0 };
}

export const AuthorizationPolicyData = {
  encode(message: AuthorizationPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== "") {
      writer.uint32(26).string(message.resource);
    }
    if (message.roleBinding !== undefined) {
      AuthorizationPolicyRoleBindingData.encode(message.roleBinding, writer.uint32(34).fork()).ldelim();
    }
    if (message.rule !== undefined) {
      AuthorizationPolicyRuleData.encode(message.rule, writer.uint32(42).fork()).ldelim();
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
          message.roleBinding = AuthorizationPolicyRoleBindingData.decode(reader, reader.uint32());
          break;
        case 5:
          message.rule = AuthorizationPolicyRuleData.decode(reader, reader.uint32());
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
      roleBinding: isSet(object.roleBinding)
        ? AuthorizationPolicyRoleBindingData.fromJSON(object.roleBinding)
        : undefined,
      rule: isSet(object.rule) ? AuthorizationPolicyRuleData.fromJSON(object.rule) : undefined,
      scope: isSet(object.scope) ? authorizationPolicyScopeFromJSON(object.scope) : 0,
    };
  },

  toJSON(message: AuthorizationPolicy): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource);
    message.roleBinding !== undefined && (obj.roleBinding = message.roleBinding
      ? AuthorizationPolicyRoleBindingData.toJSON(message.roleBinding)
      : undefined);
    message.rule !== undefined &&
      (obj.rule = message.rule ? AuthorizationPolicyRuleData.toJSON(message.rule) : undefined);
    message.scope !== undefined && (obj.scope = authorizationPolicyScopeToJSON(message.scope));
    return obj;
  },

  fromPartial(object: DeepPartial<AuthorizationPolicy>): AuthorizationPolicy {
    const message = createBaseAuthorizationPolicy();
    message.resource = object.resource ?? "";
    message.roleBinding = (object.roleBinding !== undefined && object.roleBinding !== null)
      ? AuthorizationPolicyRoleBindingData.fromPartial(object.roleBinding)
      : undefined;
    message.rule = (object.rule !== undefined && object.rule !== null)
      ? AuthorizationPolicyRuleData.fromPartial(object.rule)
      : undefined;
    message.scope = object.scope ?? 0;
    return message;
  },
};

function createBaseAuthorizationPolicyRoleBinding(): AuthorizationPolicyRoleBinding {
  return { table: "", column: "", role: "" };
}

export const AuthorizationPolicyRoleBindingData = {
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

export const AuthorizationPolicyRuleData = {
  encode(message: AuthorizationPolicyRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operands) {
      AuthorizationPolicyRuleOperandData.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.operands.push(AuthorizationPolicyRuleOperandData.decode(reader, reader.uint32()));
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
        ? object.operands.map((e: any) => AuthorizationPolicyRuleOperandData.fromJSON(e))
        : [],
      operators: Array.isArray(object?.operators) ? object.operators.map((e: any) => operatorFromJSON(e)) : [],
    };
  },

  toJSON(message: AuthorizationPolicyRule): unknown {
    const obj: any = {};
    if (message.operands) {
      obj.operands = message.operands.map((e) => e ? AuthorizationPolicyRuleOperandData.toJSON(e) : undefined);
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
    message.operands = object.operands?.map((e) => AuthorizationPolicyRuleOperandData.fromPartial(e)) || [];
    message.operators = object.operators?.map((e) => e) || [];
    return message;
  },
};

function createBaseAuthorizationPolicyRuleOperand(): AuthorizationPolicyRuleOperand {
  return {};
}

export const AuthorizationPolicyRuleOperandData = {
  encode(message: AuthorizationPolicyRuleOperand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expr !== undefined) {
      AuthorizationPolicyRuleExprData.encode(message.expr, writer.uint32(10).fork()).ldelim();
    }
    if (message.rule !== undefined) {
      AuthorizationPolicyRuleData.encode(message.rule, writer.uint32(18).fork()).ldelim();
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
          message.expr = AuthorizationPolicyRuleExprData.decode(reader, reader.uint32());
          break;
        case 2:
          message.rule = AuthorizationPolicyRuleData.decode(reader, reader.uint32());
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
      expr: isSet(object.expr) ? AuthorizationPolicyRuleExprData.fromJSON(object.expr) : undefined,
      rule: isSet(object.rule) ? AuthorizationPolicyRuleData.fromJSON(object.rule) : undefined,
    };
  },

  toJSON(message: AuthorizationPolicyRuleOperand): unknown {
    const obj: any = {};
    message.expr !== undefined &&
      (obj.expr = message.expr ? AuthorizationPolicyRuleExprData.toJSON(message.expr) : undefined);
    message.rule !== undefined &&
      (obj.rule = message.rule ? AuthorizationPolicyRuleData.toJSON(message.rule) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AuthorizationPolicyRuleOperand>): AuthorizationPolicyRuleOperand {
    const message = createBaseAuthorizationPolicyRuleOperand();
    message.expr = (object.expr !== undefined && object.expr !== null)
      ? AuthorizationPolicyRuleExprData.fromPartial(object.expr)
      : undefined;
    message.rule = (object.rule !== undefined && object.rule !== null)
      ? AuthorizationPolicyRuleData.fromPartial(object.rule)
      : undefined;
    return message;
  },
};

function createBaseAuthorizationPolicyRuleExpr(): AuthorizationPolicyRuleExpr {
  return { column: "", operator: 0 };
}

export const AuthorizationPolicyRuleExprData = {
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
      DataTypeData.encode(message.dataType, writer.uint32(34).fork()).ldelim();
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
          message.dataType = DataTypeData.decode(reader, reader.uint32());
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
      dataType: isSet(object.dataType) ? DataTypeData.fromJSON(object.dataType) : undefined,
      operator: isSet(object.operator) ? operatorFromJSON(object.operator) : 0,
    };
  },

  toJSON(message: AuthorizationPolicyRuleExpr): unknown {
    const obj: any = {};
    message.column !== undefined && (obj.column = message.column);
    message.value !== undefined && (obj.value = message.value);
    message.paths !== undefined && (obj.paths = message.paths);
    message.dataType !== undefined &&
      (obj.dataType = message.dataType ? DataTypeData.toJSON(message.dataType) : undefined);
    message.operator !== undefined && (obj.operator = operatorToJSON(message.operator));
    return obj;
  },

  fromPartial(object: DeepPartial<AuthorizationPolicyRuleExpr>): AuthorizationPolicyRuleExpr {
    const message = createBaseAuthorizationPolicyRuleExpr();
    message.column = object.column ?? "";
    message.value = object.value ?? undefined;
    message.paths = object.paths ?? undefined;
    message.dataType = (object.dataType !== undefined && object.dataType !== null)
      ? DataTypeData.fromPartial(object.dataType)
      : undefined;
    message.operator = object.operator ?? 0;
    return message;
  },
};

function createBaseFeature(): Feature {
  return { name: 0, env: 0 };
}

export const FeatureData = {
  encode(message: Feature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== 0) {
      writer.uint32(8).int32(message.name);
    }
    if (message.env !== 0) {
      writer.uint32(16).int32(message.env);
    }
    if (message.emailLogin !== undefined) {
      FeatureEmailLoginData.encode(message.emailLogin, writer.uint32(26).fork()).ldelim();
    }
    if (message.jpBankData !== undefined) {
      FeatureJPBankDataData.encode(message.jpBankData, writer.uint32(34).fork()).ldelim();
    }
    if (message.basicAuth !== undefined) {
      FeatureBasicAuthData.encode(message.basicAuth, writer.uint32(42).fork()).ldelim();
    }
    if (message.twilioLogin !== undefined) {
      FeatureTwilioLoginData.encode(message.twilioLogin, writer.uint32(50).fork()).ldelim();
    }
    if (message.rollbar !== undefined) {
      FeatureRollbarData.encode(message.rollbar, writer.uint32(58).fork()).ldelim();
    }
    if (message.deepLink !== undefined) {
      FeatureDeepLinkData.encode(message.deepLink, writer.uint32(66).fork()).ldelim();
    }
    if (message.stripe !== undefined) {
      FeatureStripeData.encode(message.stripe, writer.uint32(74).fork()).ldelim();
    }
    if (message.lineLogin !== undefined) {
      FeatureLineLoginData.encode(message.lineLogin, writer.uint32(82).fork()).ldelim();
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
          message.emailLogin = FeatureEmailLoginData.decode(reader, reader.uint32());
          break;
        case 4:
          message.jpBankData = FeatureJPBankDataData.decode(reader, reader.uint32());
          break;
        case 5:
          message.basicAuth = FeatureBasicAuthData.decode(reader, reader.uint32());
          break;
        case 6:
          message.twilioLogin = FeatureTwilioLoginData.decode(reader, reader.uint32());
          break;
        case 7:
          message.rollbar = FeatureRollbarData.decode(reader, reader.uint32());
          break;
        case 8:
          message.deepLink = FeatureDeepLinkData.decode(reader, reader.uint32());
          break;
        case 9:
          message.stripe = FeatureStripeData.decode(reader, reader.uint32());
          break;
        case 10:
          message.lineLogin = FeatureLineLoginData.decode(reader, reader.uint32());
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
      emailLogin: isSet(object.emailLogin) ? FeatureEmailLoginData.fromJSON(object.emailLogin) : undefined,
      jpBankData: isSet(object.jpBankData) ? FeatureJPBankDataData.fromJSON(object.jpBankData) : undefined,
      basicAuth: isSet(object.basicAuth) ? FeatureBasicAuthData.fromJSON(object.basicAuth) : undefined,
      twilioLogin: isSet(object.twilioLogin) ? FeatureTwilioLoginData.fromJSON(object.twilioLogin) : undefined,
      rollbar: isSet(object.rollbar) ? FeatureRollbarData.fromJSON(object.rollbar) : undefined,
      deepLink: isSet(object.deepLink) ? FeatureDeepLinkData.fromJSON(object.deepLink) : undefined,
      stripe: isSet(object.stripe) ? FeatureStripeData.fromJSON(object.stripe) : undefined,
      lineLogin: isSet(object.lineLogin) ? FeatureLineLoginData.fromJSON(object.lineLogin) : undefined,
    };
  },

  toJSON(message: Feature): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = featureFeatureNameToJSON(message.name));
    message.env !== undefined && (obj.env = featureEnvironmentToJSON(message.env));
    message.emailLogin !== undefined &&
      (obj.emailLogin = message.emailLogin ? FeatureEmailLoginData.toJSON(message.emailLogin) : undefined);
    message.jpBankData !== undefined &&
      (obj.jpBankData = message.jpBankData ? FeatureJPBankDataData.toJSON(message.jpBankData) : undefined);
    message.basicAuth !== undefined &&
      (obj.basicAuth = message.basicAuth ? FeatureBasicAuthData.toJSON(message.basicAuth) : undefined);
    message.twilioLogin !== undefined &&
      (obj.twilioLogin = message.twilioLogin ? FeatureTwilioLoginData.toJSON(message.twilioLogin) : undefined);
    message.rollbar !== undefined &&
      (obj.rollbar = message.rollbar ? FeatureRollbarData.toJSON(message.rollbar) : undefined);
    message.deepLink !== undefined &&
      (obj.deepLink = message.deepLink ? FeatureDeepLinkData.toJSON(message.deepLink) : undefined);
    message.stripe !== undefined &&
      (obj.stripe = message.stripe ? FeatureStripeData.toJSON(message.stripe) : undefined);
    message.lineLogin !== undefined &&
      (obj.lineLogin = message.lineLogin ? FeatureLineLoginData.toJSON(message.lineLogin) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Feature>): Feature {
    const message = createBaseFeature();
    message.name = object.name ?? 0;
    message.env = object.env ?? 0;
    message.emailLogin = (object.emailLogin !== undefined && object.emailLogin !== null)
      ? FeatureEmailLoginData.fromPartial(object.emailLogin)
      : undefined;
    message.jpBankData = (object.jpBankData !== undefined && object.jpBankData !== null)
      ? FeatureJPBankDataData.fromPartial(object.jpBankData)
      : undefined;
    message.basicAuth = (object.basicAuth !== undefined && object.basicAuth !== null)
      ? FeatureBasicAuthData.fromPartial(object.basicAuth)
      : undefined;
    message.twilioLogin = (object.twilioLogin !== undefined && object.twilioLogin !== null)
      ? FeatureTwilioLoginData.fromPartial(object.twilioLogin)
      : undefined;
    message.rollbar = (object.rollbar !== undefined && object.rollbar !== null)
      ? FeatureRollbarData.fromPartial(object.rollbar)
      : undefined;
    message.deepLink = (object.deepLink !== undefined && object.deepLink !== null)
      ? FeatureDeepLinkData.fromPartial(object.deepLink)
      : undefined;
    message.stripe = (object.stripe !== undefined && object.stripe !== null)
      ? FeatureStripeData.fromPartial(object.stripe)
      : undefined;
    message.lineLogin = (object.lineLogin !== undefined && object.lineLogin !== null)
      ? FeatureLineLoginData.fromPartial(object.lineLogin)
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

export const FeatureEmailLoginData = {
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

export const FeatureJPBankDataData = {
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

export const FeatureBasicAuthData = {
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

export const FeatureTwilioLoginData = {
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

export const FeatureRollbarData = {
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

export const FeatureDeepLinkData = {
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

export const FeatureStripeData = {
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

export const FeatureLineLoginData = {
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

export const ControllerData = {
  encode(message: Controller, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.endpoints) {
      ControllerEndpointData.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.endpoints.push(ControllerEndpointData.decode(reader, reader.uint32()));
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
        ? object.endpoints.map((e: any) => ControllerEndpointData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Controller): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map((e) => e ? ControllerEndpointData.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Controller>): Controller {
    const message = createBaseController();
    message.name = object.name ?? "";
    message.endpoints = object.endpoints?.map((e) => ControllerEndpointData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControllerEndpoint(): ControllerEndpoint {
  return { path: "", name: "", writable: false };
}

export const ControllerEndpointData = {
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
      ControllerEndpointListData.encode(message.list, writer.uint32(42).fork()).ldelim();
    }
    if (message.get !== undefined) {
      ControllerEndpointGetData.encode(message.get, writer.uint32(50).fork()).ldelim();
    }
    if (message.create !== undefined) {
      ControllerEndpointCreateData.encode(message.create, writer.uint32(58).fork()).ldelim();
    }
    if (message.update !== undefined) {
      ControllerEndpointUpdateData.encode(message.update, writer.uint32(66).fork()).ldelim();
    }
    if (message.delete !== undefined) {
      ControllerEndpointDeleteData.encode(message.delete, writer.uint32(74).fork()).ldelim();
    }
    if (message.authentication !== undefined) {
      ControllerAuthenticationData.encode(message.authentication, writer.uint32(82).fork()).ldelim();
    }
    if (message.authorization !== undefined) {
      ControllerAuthorizationData.encode(message.authorization, writer.uint32(90).fork()).ldelim();
    }
    if (message.responses !== undefined) {
      ControllerResponseData.encode(message.responses, writer.uint32(98).fork()).ldelim();
    }
    if (message.params !== undefined) {
      ControllerRequestContentData.encode(message.params, writer.uint32(106).fork()).ldelim();
    }
    if (message.writable === true) {
      writer.uint32(112).bool(message.writable);
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
          message.list = ControllerEndpointListData.decode(reader, reader.uint32());
          break;
        case 6:
          message.get = ControllerEndpointGetData.decode(reader, reader.uint32());
          break;
        case 7:
          message.create = ControllerEndpointCreateData.decode(reader, reader.uint32());
          break;
        case 8:
          message.update = ControllerEndpointUpdateData.decode(reader, reader.uint32());
          break;
        case 9:
          message.delete = ControllerEndpointDeleteData.decode(reader, reader.uint32());
          break;
        case 10:
          message.authentication = ControllerAuthenticationData.decode(reader, reader.uint32());
          break;
        case 11:
          message.authorization = ControllerAuthorizationData.decode(reader, reader.uint32());
          break;
        case 12:
          message.responses = ControllerResponseData.decode(reader, reader.uint32());
          break;
        case 13:
          message.params = ControllerRequestContentData.decode(reader, reader.uint32());
          break;
        case 14:
          message.writable = reader.bool();
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
      list: isSet(object.list) ? ControllerEndpointListData.fromJSON(object.list) : undefined,
      get: isSet(object.get) ? ControllerEndpointGetData.fromJSON(object.get) : undefined,
      create: isSet(object.create) ? ControllerEndpointCreateData.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? ControllerEndpointUpdateData.fromJSON(object.update) : undefined,
      delete: isSet(object.delete) ? ControllerEndpointDeleteData.fromJSON(object.delete) : undefined,
      authentication: isSet(object.authentication)
        ? ControllerAuthenticationData.fromJSON(object.authentication)
        : undefined,
      authorization: isSet(object.authorization)
        ? ControllerAuthorizationData.fromJSON(object.authorization)
        : undefined,
      responses: isSet(object.responses) ? ControllerResponseData.fromJSON(object.responses) : undefined,
      params: isSet(object.params) ? ControllerRequestContentData.fromJSON(object.params) : undefined,
      writable: isSet(object.writable) ? Boolean(object.writable) : false,
    };
  },

  toJSON(message: ControllerEndpoint): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.name !== undefined && (obj.name = message.name);
    message.table !== undefined && (obj.table = message.table);
    message.feature !== undefined &&
      (obj.feature = message.feature !== undefined ? featureFeatureNameToJSON(message.feature) : undefined);
    message.list !== undefined &&
      (obj.list = message.list ? ControllerEndpointListData.toJSON(message.list) : undefined);
    message.get !== undefined && (obj.get = message.get ? ControllerEndpointGetData.toJSON(message.get) : undefined);
    message.create !== undefined &&
      (obj.create = message.create ? ControllerEndpointCreateData.toJSON(message.create) : undefined);
    message.update !== undefined &&
      (obj.update = message.update ? ControllerEndpointUpdateData.toJSON(message.update) : undefined);
    message.delete !== undefined &&
      (obj.delete = message.delete ? ControllerEndpointDeleteData.toJSON(message.delete) : undefined);
    message.authentication !== undefined && (obj.authentication = message.authentication
      ? ControllerAuthenticationData.toJSON(message.authentication)
      : undefined);
    message.authorization !== undefined &&
      (obj.authorization = message.authorization
        ? ControllerAuthorizationData.toJSON(message.authorization)
        : undefined);
    message.responses !== undefined &&
      (obj.responses = message.responses ? ControllerResponseData.toJSON(message.responses) : undefined);
    message.params !== undefined &&
      (obj.params = message.params ? ControllerRequestContentData.toJSON(message.params) : undefined);
    message.writable !== undefined && (obj.writable = message.writable);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerEndpoint>): ControllerEndpoint {
    const message = createBaseControllerEndpoint();
    message.path = object.path ?? "";
    message.name = object.name ?? "";
    message.table = object.table ?? undefined;
    message.feature = object.feature ?? undefined;
    message.list = (object.list !== undefined && object.list !== null)
      ? ControllerEndpointListData.fromPartial(object.list)
      : undefined;
    message.get = (object.get !== undefined && object.get !== null)
      ? ControllerEndpointGetData.fromPartial(object.get)
      : undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? ControllerEndpointCreateData.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? ControllerEndpointUpdateData.fromPartial(object.update)
      : undefined;
    message.delete = (object.delete !== undefined && object.delete !== null)
      ? ControllerEndpointDeleteData.fromPartial(object.delete)
      : undefined;
    message.authentication = (object.authentication !== undefined && object.authentication !== null)
      ? ControllerAuthenticationData.fromPartial(object.authentication)
      : undefined;
    message.authorization = (object.authorization !== undefined && object.authorization !== null)
      ? ControllerAuthorizationData.fromPartial(object.authorization)
      : undefined;
    message.responses = (object.responses !== undefined && object.responses !== null)
      ? ControllerResponseData.fromPartial(object.responses)
      : undefined;
    message.params = (object.params !== undefined && object.params !== null)
      ? ControllerRequestContentData.fromPartial(object.params)
      : undefined;
    message.writable = object.writable ?? false;
    return message;
  },
};

function createBaseControllerEndpointList(): ControllerEndpointList {
  return {};
}

export const ControllerEndpointListData = {
  encode(message: ControllerEndpointList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queries !== undefined) {
      ControllerRequestContentData.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ControllerResourceConditionData.encode(message.conditions, writer.uint32(18).fork()).ldelim();
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
          message.queries = ControllerRequestContentData.decode(reader, reader.uint32());
          break;
        case 2:
          message.conditions = ControllerResourceConditionData.decode(reader, reader.uint32());
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
      queries: isSet(object.queries) ? ControllerRequestContentData.fromJSON(object.queries) : undefined,
      conditions: isSet(object.conditions) ? ControllerResourceConditionData.fromJSON(object.conditions) : undefined,
    };
  },

  toJSON(message: ControllerEndpointList): unknown {
    const obj: any = {};
    message.queries !== undefined &&
      (obj.queries = message.queries ? ControllerRequestContentData.toJSON(message.queries) : undefined);
    message.conditions !== undefined &&
      (obj.conditions = message.conditions ? ControllerResourceConditionData.toJSON(message.conditions) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerEndpointList>): ControllerEndpointList {
    const message = createBaseControllerEndpointList();
    message.queries = (object.queries !== undefined && object.queries !== null)
      ? ControllerRequestContentData.fromPartial(object.queries)
      : undefined;
    message.conditions = (object.conditions !== undefined && object.conditions !== null)
      ? ControllerResourceConditionData.fromPartial(object.conditions)
      : undefined;
    return message;
  },
};

function createBaseControllerEndpointGet(): ControllerEndpointGet {
  return {};
}

export const ControllerEndpointGetData = {
  encode(message: ControllerEndpointGet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queries !== undefined) {
      ControllerRequestContentData.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ControllerResourceConditionData.encode(message.conditions, writer.uint32(18).fork()).ldelim();
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
          message.queries = ControllerRequestContentData.decode(reader, reader.uint32());
          break;
        case 2:
          message.conditions = ControllerResourceConditionData.decode(reader, reader.uint32());
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
      queries: isSet(object.queries) ? ControllerRequestContentData.fromJSON(object.queries) : undefined,
      conditions: isSet(object.conditions) ? ControllerResourceConditionData.fromJSON(object.conditions) : undefined,
    };
  },

  toJSON(message: ControllerEndpointGet): unknown {
    const obj: any = {};
    message.queries !== undefined &&
      (obj.queries = message.queries ? ControllerRequestContentData.toJSON(message.queries) : undefined);
    message.conditions !== undefined &&
      (obj.conditions = message.conditions ? ControllerResourceConditionData.toJSON(message.conditions) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerEndpointGet>): ControllerEndpointGet {
    const message = createBaseControllerEndpointGet();
    message.queries = (object.queries !== undefined && object.queries !== null)
      ? ControllerRequestContentData.fromPartial(object.queries)
      : undefined;
    message.conditions = (object.conditions !== undefined && object.conditions !== null)
      ? ControllerResourceConditionData.fromPartial(object.conditions)
      : undefined;
    return message;
  },
};

function createBaseControllerEndpointCreate(): ControllerEndpointCreate {
  return {};
}

export const ControllerEndpointCreateData = {
  encode(message: ControllerEndpointCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body !== undefined) {
      ControllerRequestContentData.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ControllerResourceConditionData.encode(message.conditions, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      ControllerResourceUpdateData.encode(message.resources, writer.uint32(26).fork()).ldelim();
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
          message.body = ControllerRequestContentData.decode(reader, reader.uint32());
          break;
        case 2:
          message.conditions = ControllerResourceConditionData.decode(reader, reader.uint32());
          break;
        case 3:
          message.resources = ControllerResourceUpdateData.decode(reader, reader.uint32());
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
      body: isSet(object.body) ? ControllerRequestContentData.fromJSON(object.body) : undefined,
      conditions: isSet(object.conditions) ? ControllerResourceConditionData.fromJSON(object.conditions) : undefined,
      resources: isSet(object.resources) ? ControllerResourceUpdateData.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: ControllerEndpointCreate): unknown {
    const obj: any = {};
    message.body !== undefined &&
      (obj.body = message.body ? ControllerRequestContentData.toJSON(message.body) : undefined);
    message.conditions !== undefined &&
      (obj.conditions = message.conditions ? ControllerResourceConditionData.toJSON(message.conditions) : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources ? ControllerResourceUpdateData.toJSON(message.resources) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerEndpointCreate>): ControllerEndpointCreate {
    const message = createBaseControllerEndpointCreate();
    message.body = (object.body !== undefined && object.body !== null)
      ? ControllerRequestContentData.fromPartial(object.body)
      : undefined;
    message.conditions = (object.conditions !== undefined && object.conditions !== null)
      ? ControllerResourceConditionData.fromPartial(object.conditions)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? ControllerResourceUpdateData.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

function createBaseControllerEndpointUpdate(): ControllerEndpointUpdate {
  return {};
}

export const ControllerEndpointUpdateData = {
  encode(message: ControllerEndpointUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body !== undefined) {
      ControllerRequestContentData.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ControllerResourceConditionData.encode(message.conditions, writer.uint32(18).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      ControllerResourceUpdateData.encode(message.resources, writer.uint32(26).fork()).ldelim();
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
          message.body = ControllerRequestContentData.decode(reader, reader.uint32());
          break;
        case 2:
          message.conditions = ControllerResourceConditionData.decode(reader, reader.uint32());
          break;
        case 3:
          message.resources = ControllerResourceUpdateData.decode(reader, reader.uint32());
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
      body: isSet(object.body) ? ControllerRequestContentData.fromJSON(object.body) : undefined,
      conditions: isSet(object.conditions) ? ControllerResourceConditionData.fromJSON(object.conditions) : undefined,
      resources: isSet(object.resources) ? ControllerResourceUpdateData.fromJSON(object.resources) : undefined,
    };
  },

  toJSON(message: ControllerEndpointUpdate): unknown {
    const obj: any = {};
    message.body !== undefined &&
      (obj.body = message.body ? ControllerRequestContentData.toJSON(message.body) : undefined);
    message.conditions !== undefined &&
      (obj.conditions = message.conditions ? ControllerResourceConditionData.toJSON(message.conditions) : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources ? ControllerResourceUpdateData.toJSON(message.resources) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerEndpointUpdate>): ControllerEndpointUpdate {
    const message = createBaseControllerEndpointUpdate();
    message.body = (object.body !== undefined && object.body !== null)
      ? ControllerRequestContentData.fromPartial(object.body)
      : undefined;
    message.conditions = (object.conditions !== undefined && object.conditions !== null)
      ? ControllerResourceConditionData.fromPartial(object.conditions)
      : undefined;
    message.resources = (object.resources !== undefined && object.resources !== null)
      ? ControllerResourceUpdateData.fromPartial(object.resources)
      : undefined;
    return message;
  },
};

function createBaseControllerEndpointDelete(): ControllerEndpointDelete {
  return {};
}

export const ControllerEndpointDeleteData = {
  encode(message: ControllerEndpointDelete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body !== undefined) {
      ControllerRequestContentData.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ControllerResourceConditionData.encode(message.conditions, writer.uint32(18).fork()).ldelim();
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
          message.body = ControllerRequestContentData.decode(reader, reader.uint32());
          break;
        case 2:
          message.conditions = ControllerResourceConditionData.decode(reader, reader.uint32());
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
      body: isSet(object.body) ? ControllerRequestContentData.fromJSON(object.body) : undefined,
      conditions: isSet(object.conditions) ? ControllerResourceConditionData.fromJSON(object.conditions) : undefined,
    };
  },

  toJSON(message: ControllerEndpointDelete): unknown {
    const obj: any = {};
    message.body !== undefined &&
      (obj.body = message.body ? ControllerRequestContentData.toJSON(message.body) : undefined);
    message.conditions !== undefined &&
      (obj.conditions = message.conditions ? ControllerResourceConditionData.toJSON(message.conditions) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerEndpointDelete>): ControllerEndpointDelete {
    const message = createBaseControllerEndpointDelete();
    message.body = (object.body !== undefined && object.body !== null)
      ? ControllerRequestContentData.fromPartial(object.body)
      : undefined;
    message.conditions = (object.conditions !== undefined && object.conditions !== null)
      ? ControllerResourceConditionData.fromPartial(object.conditions)
      : undefined;
    return message;
  },
};

function createBaseControllerRequestContent(): ControllerRequestContent {
  return { fields: [] };
}

export const ControllerRequestContentData = {
  encode(message: ControllerRequestContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fields) {
      ControllerRequestContentFieldData.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.fields.push(ControllerRequestContentFieldData.decode(reader, reader.uint32()));
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
        ? object.fields.map((e: any) => ControllerRequestContentFieldData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ControllerRequestContent): unknown {
    const obj: any = {};
    if (message.fields) {
      obj.fields = message.fields.map((e) => e ? ControllerRequestContentFieldData.toJSON(e) : undefined);
    } else {
      obj.fields = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerRequestContent>): ControllerRequestContent {
    const message = createBaseControllerRequestContent();
    message.fields = object.fields?.map((e) => ControllerRequestContentFieldData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControllerRequestContentField(): ControllerRequestContentField {
  return { name: "", children: [] };
}

export const ControllerRequestContentFieldData = {
  encode(message: ControllerRequestContentField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.dataType !== undefined) {
      DataTypeData.encode(message.dataType, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.children) {
      ControllerRequestContentFieldData.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.dataType = DataTypeData.decode(reader, reader.uint32());
          break;
        case 3:
          message.children.push(ControllerRequestContentFieldData.decode(reader, reader.uint32()));
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
      dataType: isSet(object.dataType) ? DataTypeData.fromJSON(object.dataType) : undefined,
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => ControllerRequestContentFieldData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ControllerRequestContentField): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.dataType !== undefined &&
      (obj.dataType = message.dataType ? DataTypeData.toJSON(message.dataType) : undefined);
    if (message.children) {
      obj.children = message.children.map((e) => e ? ControllerRequestContentFieldData.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerRequestContentField>): ControllerRequestContentField {
    const message = createBaseControllerRequestContentField();
    message.name = object.name ?? "";
    message.dataType = (object.dataType !== undefined && object.dataType !== null)
      ? DataTypeData.fromPartial(object.dataType)
      : undefined;
    message.children = object.children?.map((e) => ControllerRequestContentFieldData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControllerResponse(): ControllerResponse {
  return { fields: [] };
}

export const ControllerResponseData = {
  encode(message: ControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fields) {
      ControllerResponseFieldData.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.fields.push(ControllerResponseFieldData.decode(reader, reader.uint32()));
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
      fields: Array.isArray(object?.fields)
        ? object.fields.map((e: any) => ControllerResponseFieldData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ControllerResponse): unknown {
    const obj: any = {};
    if (message.fields) {
      obj.fields = message.fields.map((e) => e ? ControllerResponseFieldData.toJSON(e) : undefined);
    } else {
      obj.fields = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerResponse>): ControllerResponse {
    const message = createBaseControllerResponse();
    message.fields = object.fields?.map((e) => ControllerResponseFieldData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControllerResponseField(): ControllerResponseField {
  return { name: "", children: [], category: "" };
}

export const ControllerResponseFieldData = {
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
      DataTypeData.encode(message.dataType, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.children) {
      ControllerResponseFieldData.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.dataType = DataTypeData.decode(reader, reader.uint32());
          break;
        case 6:
          message.children.push(ControllerResponseFieldData.decode(reader, reader.uint32()));
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
      dataType: isSet(object.dataType) ? DataTypeData.fromJSON(object.dataType) : undefined,
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => ControllerResponseFieldData.fromJSON(e))
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
    message.dataType !== undefined &&
      (obj.dataType = message.dataType ? DataTypeData.toJSON(message.dataType) : undefined);
    if (message.children) {
      obj.children = message.children.map((e) => e ? ControllerResponseFieldData.toJSON(e) : undefined);
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
      ? DataTypeData.fromPartial(object.dataType)
      : undefined;
    message.children = object.children?.map((e) => ControllerResponseFieldData.fromPartial(e)) || [];
    message.category = object.category ?? "";
    return message;
  },
};

function createBaseControllerResourceCondition(): ControllerResourceCondition {
  return { operands: [], operators: [] };
}

export const ControllerResourceConditionData = {
  encode(message: ControllerResourceCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operands) {
      ControllerResourceConditionOperandData.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.operands.push(ControllerResourceConditionOperandData.decode(reader, reader.uint32()));
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
        ? object.operands.map((e: any) => ControllerResourceConditionOperandData.fromJSON(e))
        : [],
      operators: Array.isArray(object?.operators) ? object.operators.map((e: any) => operatorFromJSON(e)) : [],
    };
  },

  toJSON(message: ControllerResourceCondition): unknown {
    const obj: any = {};
    if (message.operands) {
      obj.operands = message.operands.map((e) => e ? ControllerResourceConditionOperandData.toJSON(e) : undefined);
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
    message.operands = object.operands?.map((e) => ControllerResourceConditionOperandData.fromPartial(e)) || [];
    message.operators = object.operators?.map((e) => e) || [];
    return message;
  },
};

function createBaseControllerResourceConditionOperand(): ControllerResourceConditionOperand {
  return {};
}

export const ControllerResourceConditionOperandData = {
  encode(message: ControllerResourceConditionOperand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expr !== undefined) {
      ControllerResourceConditionExprData.encode(message.expr, writer.uint32(10).fork()).ldelim();
    }
    if (message.condition !== undefined) {
      ControllerResourceConditionData.encode(message.condition, writer.uint32(18).fork()).ldelim();
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
          message.expr = ControllerResourceConditionExprData.decode(reader, reader.uint32());
          break;
        case 2:
          message.condition = ControllerResourceConditionData.decode(reader, reader.uint32());
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
      expr: isSet(object.expr) ? ControllerResourceConditionExprData.fromJSON(object.expr) : undefined,
      condition: isSet(object.condition) ? ControllerResourceConditionData.fromJSON(object.condition) : undefined,
    };
  },

  toJSON(message: ControllerResourceConditionOperand): unknown {
    const obj: any = {};
    message.expr !== undefined &&
      (obj.expr = message.expr ? ControllerResourceConditionExprData.toJSON(message.expr) : undefined);
    message.condition !== undefined &&
      (obj.condition = message.condition ? ControllerResourceConditionData.toJSON(message.condition) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerResourceConditionOperand>): ControllerResourceConditionOperand {
    const message = createBaseControllerResourceConditionOperand();
    message.expr = (object.expr !== undefined && object.expr !== null)
      ? ControllerResourceConditionExprData.fromPartial(object.expr)
      : undefined;
    message.condition = (object.condition !== undefined && object.condition !== null)
      ? ControllerResourceConditionData.fromPartial(object.condition)
      : undefined;
    return message;
  },
};

function createBaseControllerResourceConditionExpr(): ControllerResourceConditionExpr {
  return { paths: [], operator: 0 };
}

export const ControllerResourceConditionExprData = {
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
      DataTypeData.encode(message.dataType, writer.uint32(66).fork()).ldelim();
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
          message.dataType = DataTypeData.decode(reader, reader.uint32());
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
      dataType: isSet(object.dataType) ? DataTypeData.fromJSON(object.dataType) : undefined,
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
    message.dataType !== undefined &&
      (obj.dataType = message.dataType ? DataTypeData.toJSON(message.dataType) : undefined);
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
      ? DataTypeData.fromPartial(object.dataType)
      : undefined;
    message.operator = object.operator ?? 0;
    return message;
  },
};

function createBaseControllerResourceUpdate(): ControllerResourceUpdate {
  return { fields: [] };
}

export const ControllerResourceUpdateData = {
  encode(message: ControllerResourceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fields) {
      ControllerResourceUpdateFieldData.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.fields.push(ControllerResourceUpdateFieldData.decode(reader, reader.uint32()));
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
        ? object.fields.map((e: any) => ControllerResourceUpdateFieldData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ControllerResourceUpdate): unknown {
    const obj: any = {};
    if (message.fields) {
      obj.fields = message.fields.map((e) => e ? ControllerResourceUpdateFieldData.toJSON(e) : undefined);
    } else {
      obj.fields = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerResourceUpdate>): ControllerResourceUpdate {
    const message = createBaseControllerResourceUpdate();
    message.fields = object.fields?.map((e) => ControllerResourceUpdateFieldData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControllerResourceUpdateField(): ControllerResourceUpdateField {
  return { name: "", children: [] };
}

export const ControllerResourceUpdateFieldData = {
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
      DataTypeData.encode(message.dataType, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.children) {
      ControllerResourceUpdateFieldData.encode(v!, writer.uint32(58).fork()).ldelim();
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
          message.dataType = DataTypeData.decode(reader, reader.uint32());
          break;
        case 7:
          message.children.push(ControllerResourceUpdateFieldData.decode(reader, reader.uint32()));
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
      dataType: isSet(object.dataType) ? DataTypeData.fromJSON(object.dataType) : undefined,
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => ControllerResourceUpdateFieldData.fromJSON(e))
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
    message.dataType !== undefined &&
      (obj.dataType = message.dataType ? DataTypeData.toJSON(message.dataType) : undefined);
    if (message.children) {
      obj.children = message.children.map((e) => e ? ControllerResourceUpdateFieldData.toJSON(e) : undefined);
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
      ? DataTypeData.fromPartial(object.dataType)
      : undefined;
    message.children = object.children?.map((e) => ControllerResourceUpdateFieldData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControllerAuthentication(): ControllerAuthentication {
  return { tableName: "" };
}

export const ControllerAuthenticationData = {
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

export const ControllerAuthorizationData = {
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

export const TableData = {
  encode(message: Table, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.columns) {
      TableColumnData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.relations) {
      TableRelationData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.indexes) {
      TableIndexData.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.columns.push(TableColumnData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.relations.push(TableRelationData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.indexes.push(TableIndexData.decode(reader, reader.uint32()));
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
      columns: Array.isArray(object?.columns) ? object.columns.map((e: any) => TableColumnData.fromJSON(e)) : [],
      relations: Array.isArray(object?.relations)
        ? object.relations.map((e: any) => TableRelationData.fromJSON(e))
        : [],
      indexes: Array.isArray(object?.indexes) ? object.indexes.map((e: any) => TableIndexData.fromJSON(e)) : [],
    };
  },

  toJSON(message: Table): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.columns) {
      obj.columns = message.columns.map((e) => e ? TableColumnData.toJSON(e) : undefined);
    } else {
      obj.columns = [];
    }
    if (message.relations) {
      obj.relations = message.relations.map((e) => e ? TableRelationData.toJSON(e) : undefined);
    } else {
      obj.relations = [];
    }
    if (message.indexes) {
      obj.indexes = message.indexes.map((e) => e ? TableIndexData.toJSON(e) : undefined);
    } else {
      obj.indexes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Table>): Table {
    const message = createBaseTable();
    message.name = object.name ?? "";
    message.columns = object.columns?.map((e) => TableColumnData.fromPartial(e)) || [];
    message.relations = object.relations?.map((e) => TableRelationData.fromPartial(e)) || [];
    message.indexes = object.indexes?.map((e) => TableIndexData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTableColumn(): TableColumn {
  return { name: "", constraints: [] };
}

export const TableColumnData = {
  encode(message: TableColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== undefined) {
      TableColumnColumnTypeData.encode(message.type, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.constraints) {
      TableConstraintData.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.type = TableColumnColumnTypeData.decode(reader, reader.uint32());
          break;
        case 3:
          message.constraints.push(TableConstraintData.decode(reader, reader.uint32()));
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
      type: isSet(object.type) ? TableColumnColumnTypeData.fromJSON(object.type) : undefined,
      constraints: Array.isArray(object?.constraints)
        ? object.constraints.map((e: any) => TableConstraintData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TableColumn): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined &&
      (obj.type = message.type ? TableColumnColumnTypeData.toJSON(message.type) : undefined);
    if (message.constraints) {
      obj.constraints = message.constraints.map((e) => e ? TableConstraintData.toJSON(e) : undefined);
    } else {
      obj.constraints = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumn>): TableColumn {
    const message = createBaseTableColumn();
    message.name = object.name ?? "";
    message.type = (object.type !== undefined && object.type !== null)
      ? TableColumnColumnTypeData.fromPartial(object.type)
      : undefined;
    message.constraints = object.constraints?.map((e) => TableConstraintData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTableColumnColumnType(): TableColumnColumnType {
  return {};
}

export const TableColumnColumnTypeData = {
  encode(message: TableColumnColumnType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.integerType !== undefined) {
      TableColumnIntegerTypeData.encode(message.integerType, writer.uint32(10).fork()).ldelim();
    }
    if (message.stringType !== undefined) {
      TableColumnStringTypeData.encode(message.stringType, writer.uint32(18).fork()).ldelim();
    }
    if (message.floatType !== undefined) {
      TableColumnFloatTypeData.encode(message.floatType, writer.uint32(26).fork()).ldelim();
    }
    if (message.booleanType !== undefined) {
      TableColumnBooleanTypeData.encode(message.booleanType, writer.uint32(34).fork()).ldelim();
    }
    if (message.dateType !== undefined) {
      TableColumnDateTypeData.encode(message.dateType, writer.uint32(42).fork()).ldelim();
    }
    if (message.fileType !== undefined) {
      TableColumnFileTypeData.encode(message.fileType, writer.uint32(50).fork()).ldelim();
    }
    if (message.enumType !== undefined) {
      TableColumnEnumTypeData.encode(message.enumType, writer.uint32(58).fork()).ldelim();
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
          message.integerType = TableColumnIntegerTypeData.decode(reader, reader.uint32());
          break;
        case 2:
          message.stringType = TableColumnStringTypeData.decode(reader, reader.uint32());
          break;
        case 3:
          message.floatType = TableColumnFloatTypeData.decode(reader, reader.uint32());
          break;
        case 4:
          message.booleanType = TableColumnBooleanTypeData.decode(reader, reader.uint32());
          break;
        case 5:
          message.dateType = TableColumnDateTypeData.decode(reader, reader.uint32());
          break;
        case 6:
          message.fileType = TableColumnFileTypeData.decode(reader, reader.uint32());
          break;
        case 7:
          message.enumType = TableColumnEnumTypeData.decode(reader, reader.uint32());
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
      integerType: isSet(object.integerType) ? TableColumnIntegerTypeData.fromJSON(object.integerType) : undefined,
      stringType: isSet(object.stringType) ? TableColumnStringTypeData.fromJSON(object.stringType) : undefined,
      floatType: isSet(object.floatType) ? TableColumnFloatTypeData.fromJSON(object.floatType) : undefined,
      booleanType: isSet(object.booleanType) ? TableColumnBooleanTypeData.fromJSON(object.booleanType) : undefined,
      dateType: isSet(object.dateType) ? TableColumnDateTypeData.fromJSON(object.dateType) : undefined,
      fileType: isSet(object.fileType) ? TableColumnFileTypeData.fromJSON(object.fileType) : undefined,
      enumType: isSet(object.enumType) ? TableColumnEnumTypeData.fromJSON(object.enumType) : undefined,
    };
  },

  toJSON(message: TableColumnColumnType): unknown {
    const obj: any = {};
    message.integerType !== undefined &&
      (obj.integerType = message.integerType ? TableColumnIntegerTypeData.toJSON(message.integerType) : undefined);
    message.stringType !== undefined &&
      (obj.stringType = message.stringType ? TableColumnStringTypeData.toJSON(message.stringType) : undefined);
    message.floatType !== undefined &&
      (obj.floatType = message.floatType ? TableColumnFloatTypeData.toJSON(message.floatType) : undefined);
    message.booleanType !== undefined &&
      (obj.booleanType = message.booleanType ? TableColumnBooleanTypeData.toJSON(message.booleanType) : undefined);
    message.dateType !== undefined &&
      (obj.dateType = message.dateType ? TableColumnDateTypeData.toJSON(message.dateType) : undefined);
    message.fileType !== undefined &&
      (obj.fileType = message.fileType ? TableColumnFileTypeData.toJSON(message.fileType) : undefined);
    message.enumType !== undefined &&
      (obj.enumType = message.enumType ? TableColumnEnumTypeData.toJSON(message.enumType) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnColumnType>): TableColumnColumnType {
    const message = createBaseTableColumnColumnType();
    message.integerType = (object.integerType !== undefined && object.integerType !== null)
      ? TableColumnIntegerTypeData.fromPartial(object.integerType)
      : undefined;
    message.stringType = (object.stringType !== undefined && object.stringType !== null)
      ? TableColumnStringTypeData.fromPartial(object.stringType)
      : undefined;
    message.floatType = (object.floatType !== undefined && object.floatType !== null)
      ? TableColumnFloatTypeData.fromPartial(object.floatType)
      : undefined;
    message.booleanType = (object.booleanType !== undefined && object.booleanType !== null)
      ? TableColumnBooleanTypeData.fromPartial(object.booleanType)
      : undefined;
    message.dateType = (object.dateType !== undefined && object.dateType !== null)
      ? TableColumnDateTypeData.fromPartial(object.dateType)
      : undefined;
    message.fileType = (object.fileType !== undefined && object.fileType !== null)
      ? TableColumnFileTypeData.fromPartial(object.fileType)
      : undefined;
    message.enumType = (object.enumType !== undefined && object.enumType !== null)
      ? TableColumnEnumTypeData.fromPartial(object.enumType)
      : undefined;
    return message;
  },
};

function createBaseTableColumnStringType(): TableColumnStringType {
  return { isText: false, formats: [], conditions: [] };
}

export const TableColumnStringTypeData = {
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
      TableColumnStringTypeConditionData.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.conditions.push(TableColumnStringTypeConditionData.decode(reader, reader.uint32()));
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
        ? object.conditions.map((e: any) => TableColumnStringTypeConditionData.fromJSON(e))
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
      obj.conditions = message.conditions.map((e) => e ? TableColumnStringTypeConditionData.toJSON(e) : undefined);
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
    message.conditions = object.conditions?.map((e) => TableColumnStringTypeConditionData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTableColumnStringTypeCondition(): TableColumnStringTypeCondition {
  return { operator: 0 };
}

export const TableColumnStringTypeConditionData = {
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

export const TableColumnIntegerTypeData = {
  encode(message: TableColumnIntegerType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultValue !== undefined) {
      writer.uint32(8).int32(message.defaultValue);
    }
    for (const v of message.conditions) {
      TableColumnIntegerTypeConditionData.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.conditions.push(TableColumnIntegerTypeConditionData.decode(reader, reader.uint32()));
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
        ? object.conditions.map((e: any) => TableColumnIntegerTypeConditionData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TableColumnIntegerType): unknown {
    const obj: any = {};
    message.defaultValue !== undefined && (obj.defaultValue = Math.round(message.defaultValue));
    if (message.conditions) {
      obj.conditions = message.conditions.map((e) => e ? TableColumnIntegerTypeConditionData.toJSON(e) : undefined);
    } else {
      obj.conditions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnIntegerType>): TableColumnIntegerType {
    const message = createBaseTableColumnIntegerType();
    message.defaultValue = object.defaultValue ?? undefined;
    message.conditions = object.conditions?.map((e) => TableColumnIntegerTypeConditionData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTableColumnIntegerTypeCondition(): TableColumnIntegerTypeCondition {
  return { operator: 0 };
}

export const TableColumnIntegerTypeConditionData = {
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

export const TableColumnFloatTypeData = {
  encode(message: TableColumnFloatType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultValue !== undefined) {
      writer.uint32(13).float(message.defaultValue);
    }
    for (const v of message.conditions) {
      TableColumnFloatTypeConditionData.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.conditions.push(TableColumnFloatTypeConditionData.decode(reader, reader.uint32()));
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
        ? object.conditions.map((e: any) => TableColumnFloatTypeConditionData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TableColumnFloatType): unknown {
    const obj: any = {};
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    if (message.conditions) {
      obj.conditions = message.conditions.map((e) => e ? TableColumnFloatTypeConditionData.toJSON(e) : undefined);
    } else {
      obj.conditions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumnFloatType>): TableColumnFloatType {
    const message = createBaseTableColumnFloatType();
    message.defaultValue = object.defaultValue ?? undefined;
    message.conditions = object.conditions?.map((e) => TableColumnFloatTypeConditionData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTableColumnFloatTypeCondition(): TableColumnFloatTypeCondition {
  return { operator: 0 };
}

export const TableColumnFloatTypeConditionData = {
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

export const TableColumnBooleanTypeData = {
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

export const TableColumnDateTypeData = {
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

export const TableColumnFileTypeData = {
  encode(message: TableColumnFileType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maximumSize !== 0) {
      writer.uint32(8).int32(message.maximumSize);
    }
    if (message.numberOfFiles !== undefined) {
      TableColumnFileTypeNumberOfFilesData.encode(message.numberOfFiles, writer.uint32(18).fork()).ldelim();
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
          message.numberOfFiles = TableColumnFileTypeNumberOfFilesData.decode(reader, reader.uint32());
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
        ? TableColumnFileTypeNumberOfFilesData.fromJSON(object.numberOfFiles)
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
      ? TableColumnFileTypeNumberOfFilesData.toJSON(message.numberOfFiles)
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
      ? TableColumnFileTypeNumberOfFilesData.fromPartial(object.numberOfFiles)
      : undefined;
    message.contentTypes = object.contentTypes?.map((e) => e) || [];
    message.multiple = object.multiple ?? false;
    return message;
  },
};

function createBaseTableColumnFileTypeNumberOfFiles(): TableColumnFileTypeNumberOfFiles {
  return { minimum: 0, maximum: 0 };
}

export const TableColumnFileTypeNumberOfFilesData = {
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

export const TableColumnEnumTypeData = {
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

function createBaseTableConstraint(): TableConstraint {
  return {};
}

export const TableConstraintData = {
  encode(message: TableConstraint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.primaryKey !== undefined) {
      TableConstraintPrimaryKeyData.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.foreignKey !== undefined) {
      TableConstraintForeignKeyData.encode(message.foreignKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.notNull !== undefined) {
      TableConstraintNotNullData.encode(message.notNull, writer.uint32(26).fork()).ldelim();
    }
    if (message.unique !== undefined) {
      TableConstraintUniqueData.encode(message.unique, writer.uint32(34).fork()).ldelim();
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
          message.primaryKey = TableConstraintPrimaryKeyData.decode(reader, reader.uint32());
          break;
        case 2:
          message.foreignKey = TableConstraintForeignKeyData.decode(reader, reader.uint32());
          break;
        case 3:
          message.notNull = TableConstraintNotNullData.decode(reader, reader.uint32());
          break;
        case 4:
          message.unique = TableConstraintUniqueData.decode(reader, reader.uint32());
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
      primaryKey: isSet(object.primaryKey) ? TableConstraintPrimaryKeyData.fromJSON(object.primaryKey) : undefined,
      foreignKey: isSet(object.foreignKey) ? TableConstraintForeignKeyData.fromJSON(object.foreignKey) : undefined,
      notNull: isSet(object.notNull) ? TableConstraintNotNullData.fromJSON(object.notNull) : undefined,
      unique: isSet(object.unique) ? TableConstraintUniqueData.fromJSON(object.unique) : undefined,
    };
  },

  toJSON(message: TableConstraint): unknown {
    const obj: any = {};
    message.primaryKey !== undefined &&
      (obj.primaryKey = message.primaryKey ? TableConstraintPrimaryKeyData.toJSON(message.primaryKey) : undefined);
    message.foreignKey !== undefined &&
      (obj.foreignKey = message.foreignKey ? TableConstraintForeignKeyData.toJSON(message.foreignKey) : undefined);
    message.notNull !== undefined &&
      (obj.notNull = message.notNull ? TableConstraintNotNullData.toJSON(message.notNull) : undefined);
    message.unique !== undefined &&
      (obj.unique = message.unique ? TableConstraintUniqueData.toJSON(message.unique) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TableConstraint>): TableConstraint {
    const message = createBaseTableConstraint();
    message.primaryKey = (object.primaryKey !== undefined && object.primaryKey !== null)
      ? TableConstraintPrimaryKeyData.fromPartial(object.primaryKey)
      : undefined;
    message.foreignKey = (object.foreignKey !== undefined && object.foreignKey !== null)
      ? TableConstraintForeignKeyData.fromPartial(object.foreignKey)
      : undefined;
    message.notNull = (object.notNull !== undefined && object.notNull !== null)
      ? TableConstraintNotNullData.fromPartial(object.notNull)
      : undefined;
    message.unique = (object.unique !== undefined && object.unique !== null)
      ? TableConstraintUniqueData.fromPartial(object.unique)
      : undefined;
    return message;
  },
};

function createBaseTableConstraintPrimaryKey(): TableConstraintPrimaryKey {
  return {};
}

export const TableConstraintPrimaryKeyData = {
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

export const TableConstraintForeignKeyData = {
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

export const TableConstraintNotNullData = {
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

export const TableConstraintUniqueData = {
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

export const TableIndexData = {
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

export const TableRelationData = {
  encode(message: TableRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hasOne !== undefined) {
      TableRelationRelationHasOneData.encode(message.hasOne, writer.uint32(10).fork()).ldelim();
    }
    if (message.belongTo !== undefined) {
      TableRelationRelationBelongToData.encode(message.belongTo, writer.uint32(18).fork()).ldelim();
    }
    if (message.oneMany !== undefined) {
      TableRelationRelationOneManyData.encode(message.oneMany, writer.uint32(26).fork()).ldelim();
    }
    if (message.manyOne !== undefined) {
      TableRelationRelationManyOneData.encode(message.manyOne, writer.uint32(34).fork()).ldelim();
    }
    if (message.manyMany !== undefined) {
      TableRelationRelationManyManyData.encode(message.manyMany, writer.uint32(42).fork()).ldelim();
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
          message.hasOne = TableRelationRelationHasOneData.decode(reader, reader.uint32());
          break;
        case 2:
          message.belongTo = TableRelationRelationBelongToData.decode(reader, reader.uint32());
          break;
        case 3:
          message.oneMany = TableRelationRelationOneManyData.decode(reader, reader.uint32());
          break;
        case 4:
          message.manyOne = TableRelationRelationManyOneData.decode(reader, reader.uint32());
          break;
        case 5:
          message.manyMany = TableRelationRelationManyManyData.decode(reader, reader.uint32());
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
      hasOne: isSet(object.hasOne) ? TableRelationRelationHasOneData.fromJSON(object.hasOne) : undefined,
      belongTo: isSet(object.belongTo) ? TableRelationRelationBelongToData.fromJSON(object.belongTo) : undefined,
      oneMany: isSet(object.oneMany) ? TableRelationRelationOneManyData.fromJSON(object.oneMany) : undefined,
      manyOne: isSet(object.manyOne) ? TableRelationRelationManyOneData.fromJSON(object.manyOne) : undefined,
      manyMany: isSet(object.manyMany) ? TableRelationRelationManyManyData.fromJSON(object.manyMany) : undefined,
    };
  },

  toJSON(message: TableRelation): unknown {
    const obj: any = {};
    message.hasOne !== undefined &&
      (obj.hasOne = message.hasOne ? TableRelationRelationHasOneData.toJSON(message.hasOne) : undefined);
    message.belongTo !== undefined &&
      (obj.belongTo = message.belongTo ? TableRelationRelationBelongToData.toJSON(message.belongTo) : undefined);
    message.oneMany !== undefined &&
      (obj.oneMany = message.oneMany ? TableRelationRelationOneManyData.toJSON(message.oneMany) : undefined);
    message.manyOne !== undefined &&
      (obj.manyOne = message.manyOne ? TableRelationRelationManyOneData.toJSON(message.manyOne) : undefined);
    message.manyMany !== undefined &&
      (obj.manyMany = message.manyMany ? TableRelationRelationManyManyData.toJSON(message.manyMany) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TableRelation>): TableRelation {
    const message = createBaseTableRelation();
    message.hasOne = (object.hasOne !== undefined && object.hasOne !== null)
      ? TableRelationRelationHasOneData.fromPartial(object.hasOne)
      : undefined;
    message.belongTo = (object.belongTo !== undefined && object.belongTo !== null)
      ? TableRelationRelationBelongToData.fromPartial(object.belongTo)
      : undefined;
    message.oneMany = (object.oneMany !== undefined && object.oneMany !== null)
      ? TableRelationRelationOneManyData.fromPartial(object.oneMany)
      : undefined;
    message.manyOne = (object.manyOne !== undefined && object.manyOne !== null)
      ? TableRelationRelationManyOneData.fromPartial(object.manyOne)
      : undefined;
    message.manyMany = (object.manyMany !== undefined && object.manyMany !== null)
      ? TableRelationRelationManyManyData.fromPartial(object.manyMany)
      : undefined;
    return message;
  },
};

function createBaseTableRelationRelationHasOne(): TableRelationRelationHasOne {
  return { tableName: "", columnName: "" };
}

export const TableRelationRelationHasOneData = {
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

export const TableRelationRelationBelongToData = {
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

export const TableRelationRelationManyOneData = {
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

export const TableRelationRelationOneManyData = {
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

export const TableRelationRelationManyManyData = {
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

export const MigrationData = {
  encode(message: Migration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.migrationId !== "") {
      writer.uint32(10).string(message.migrationId);
    }
    for (const v of message.changes) {
      MigrationChangeData.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.changes.push(MigrationChangeData.decode(reader, reader.uint32()));
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
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => MigrationChangeData.fromJSON(e)) : [],
    };
  },

  toJSON(message: Migration): unknown {
    const obj: any = {};
    message.migrationId !== undefined && (obj.migrationId = message.migrationId);
    if (message.changes) {
      obj.changes = message.changes.map((e) => e ? MigrationChangeData.toJSON(e) : undefined);
    } else {
      obj.changes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Migration>): Migration {
    const message = createBaseMigration();
    message.migrationId = object.migrationId ?? "";
    message.changes = object.changes?.map((e) => MigrationChangeData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMigrationChange(): MigrationChange {
  return {};
}

export const MigrationChangeData = {
  encode(message: MigrationChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.createTable !== undefined) {
      CreateTableData.encode(message.createTable, writer.uint32(10).fork()).ldelim();
    }
    if (message.changeTableName !== undefined) {
      ChangeTableNameData.encode(message.changeTableName, writer.uint32(18).fork()).ldelim();
    }
    if (message.changeTableComment !== undefined) {
      ChangeTableCommentData.encode(message.changeTableComment, writer.uint32(26).fork()).ldelim();
    }
    if (message.addColumn !== undefined) {
      AddColumnData.encode(message.addColumn, writer.uint32(34).fork()).ldelim();
    }
    if (message.renameColumn !== undefined) {
      RenameColumnData.encode(message.renameColumn, writer.uint32(42).fork()).ldelim();
    }
    if (message.changeColumnComment !== undefined) {
      ChangeColumnCommentData.encode(message.changeColumnComment, writer.uint32(50).fork()).ldelim();
    }
    if (message.changeColumn !== undefined) {
      ChangeColumnData.encode(message.changeColumn, writer.uint32(58).fork()).ldelim();
    }
    if (message.changeColumnDefault !== undefined) {
      ChangeColumnDefaultData.encode(message.changeColumnDefault, writer.uint32(66).fork()).ldelim();
    }
    if (message.changeColumnNull !== undefined) {
      ChangeColumnNullData.encode(message.changeColumnNull, writer.uint32(74).fork()).ldelim();
    }
    if (message.removeTableIndex !== undefined) {
      RemoveTableIndexData.encode(message.removeTableIndex, writer.uint32(82).fork()).ldelim();
    }
    if (message.removeTableRelation !== undefined) {
      RemoveTableRelationData.encode(message.removeTableRelation, writer.uint32(90).fork()).ldelim();
    }
    if (message.createTableRelation !== undefined) {
      CreateTableRelationData.encode(message.createTableRelation, writer.uint32(98).fork()).ldelim();
    }
    if (message.removeColumn !== undefined) {
      RemoveColumnData.encode(message.removeColumn, writer.uint32(106).fork()).ldelim();
    }
    if (message.dropTable !== undefined) {
      DropTableData.encode(message.dropTable, writer.uint32(114).fork()).ldelim();
    }
    if (message.changeTableIndex !== undefined) {
      ChangeTableIndexData.encode(message.changeTableIndex, writer.uint32(122).fork()).ldelim();
    }
    if (message.createTableIndex !== undefined) {
      CreateTableIndexData.encode(message.createTableIndex, writer.uint32(130).fork()).ldelim();
    }
    if (message.addUniqColumn !== undefined) {
      AddUniqColumnData.encode(message.addUniqColumn, writer.uint32(138).fork()).ldelim();
    }
    if (message.changeColumnUnique !== undefined) {
      ChangeColumnUniqueData.encode(message.changeColumnUnique, writer.uint32(146).fork()).ldelim();
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
          message.createTable = CreateTableData.decode(reader, reader.uint32());
          break;
        case 2:
          message.changeTableName = ChangeTableNameData.decode(reader, reader.uint32());
          break;
        case 3:
          message.changeTableComment = ChangeTableCommentData.decode(reader, reader.uint32());
          break;
        case 4:
          message.addColumn = AddColumnData.decode(reader, reader.uint32());
          break;
        case 5:
          message.renameColumn = RenameColumnData.decode(reader, reader.uint32());
          break;
        case 6:
          message.changeColumnComment = ChangeColumnCommentData.decode(reader, reader.uint32());
          break;
        case 7:
          message.changeColumn = ChangeColumnData.decode(reader, reader.uint32());
          break;
        case 8:
          message.changeColumnDefault = ChangeColumnDefaultData.decode(reader, reader.uint32());
          break;
        case 9:
          message.changeColumnNull = ChangeColumnNullData.decode(reader, reader.uint32());
          break;
        case 10:
          message.removeTableIndex = RemoveTableIndexData.decode(reader, reader.uint32());
          break;
        case 11:
          message.removeTableRelation = RemoveTableRelationData.decode(reader, reader.uint32());
          break;
        case 12:
          message.createTableRelation = CreateTableRelationData.decode(reader, reader.uint32());
          break;
        case 13:
          message.removeColumn = RemoveColumnData.decode(reader, reader.uint32());
          break;
        case 14:
          message.dropTable = DropTableData.decode(reader, reader.uint32());
          break;
        case 15:
          message.changeTableIndex = ChangeTableIndexData.decode(reader, reader.uint32());
          break;
        case 16:
          message.createTableIndex = CreateTableIndexData.decode(reader, reader.uint32());
          break;
        case 17:
          message.addUniqColumn = AddUniqColumnData.decode(reader, reader.uint32());
          break;
        case 18:
          message.changeColumnUnique = ChangeColumnUniqueData.decode(reader, reader.uint32());
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
      createTable: isSet(object.createTable) ? CreateTableData.fromJSON(object.createTable) : undefined,
      changeTableName: isSet(object.changeTableName) ? ChangeTableNameData.fromJSON(object.changeTableName) : undefined,
      changeTableComment: isSet(object.changeTableComment)
        ? ChangeTableCommentData.fromJSON(object.changeTableComment)
        : undefined,
      addColumn: isSet(object.addColumn) ? AddColumnData.fromJSON(object.addColumn) : undefined,
      renameColumn: isSet(object.renameColumn) ? RenameColumnData.fromJSON(object.renameColumn) : undefined,
      changeColumnComment: isSet(object.changeColumnComment)
        ? ChangeColumnCommentData.fromJSON(object.changeColumnComment)
        : undefined,
      changeColumn: isSet(object.changeColumn) ? ChangeColumnData.fromJSON(object.changeColumn) : undefined,
      changeColumnDefault: isSet(object.changeColumnDefault)
        ? ChangeColumnDefaultData.fromJSON(object.changeColumnDefault)
        : undefined,
      changeColumnNull: isSet(object.changeColumnNull)
        ? ChangeColumnNullData.fromJSON(object.changeColumnNull)
        : undefined,
      removeTableIndex: isSet(object.removeTableIndex)
        ? RemoveTableIndexData.fromJSON(object.removeTableIndex)
        : undefined,
      removeTableRelation: isSet(object.removeTableRelation)
        ? RemoveTableRelationData.fromJSON(object.removeTableRelation)
        : undefined,
      createTableRelation: isSet(object.createTableRelation)
        ? CreateTableRelationData.fromJSON(object.createTableRelation)
        : undefined,
      removeColumn: isSet(object.removeColumn) ? RemoveColumnData.fromJSON(object.removeColumn) : undefined,
      dropTable: isSet(object.dropTable) ? DropTableData.fromJSON(object.dropTable) : undefined,
      changeTableIndex: isSet(object.changeTableIndex)
        ? ChangeTableIndexData.fromJSON(object.changeTableIndex)
        : undefined,
      createTableIndex: isSet(object.createTableIndex)
        ? CreateTableIndexData.fromJSON(object.createTableIndex)
        : undefined,
      addUniqColumn: isSet(object.addUniqColumn) ? AddUniqColumnData.fromJSON(object.addUniqColumn) : undefined,
      changeColumnUnique: isSet(object.changeColumnUnique)
        ? ChangeColumnUniqueData.fromJSON(object.changeColumnUnique)
        : undefined,
    };
  },

  toJSON(message: MigrationChange): unknown {
    const obj: any = {};
    message.createTable !== undefined &&
      (obj.createTable = message.createTable ? CreateTableData.toJSON(message.createTable) : undefined);
    message.changeTableName !== undefined &&
      (obj.changeTableName = message.changeTableName ? ChangeTableNameData.toJSON(message.changeTableName) : undefined);
    message.changeTableComment !== undefined && (obj.changeTableComment = message.changeTableComment
      ? ChangeTableCommentData.toJSON(message.changeTableComment)
      : undefined);
    message.addColumn !== undefined &&
      (obj.addColumn = message.addColumn ? AddColumnData.toJSON(message.addColumn) : undefined);
    message.renameColumn !== undefined &&
      (obj.renameColumn = message.renameColumn ? RenameColumnData.toJSON(message.renameColumn) : undefined);
    message.changeColumnComment !== undefined && (obj.changeColumnComment = message.changeColumnComment
      ? ChangeColumnCommentData.toJSON(message.changeColumnComment)
      : undefined);
    message.changeColumn !== undefined &&
      (obj.changeColumn = message.changeColumn ? ChangeColumnData.toJSON(message.changeColumn) : undefined);
    message.changeColumnDefault !== undefined && (obj.changeColumnDefault = message.changeColumnDefault
      ? ChangeColumnDefaultData.toJSON(message.changeColumnDefault)
      : undefined);
    message.changeColumnNull !== undefined && (obj.changeColumnNull = message.changeColumnNull
      ? ChangeColumnNullData.toJSON(message.changeColumnNull)
      : undefined);
    message.removeTableIndex !== undefined && (obj.removeTableIndex = message.removeTableIndex
      ? RemoveTableIndexData.toJSON(message.removeTableIndex)
      : undefined);
    message.removeTableRelation !== undefined && (obj.removeTableRelation = message.removeTableRelation
      ? RemoveTableRelationData.toJSON(message.removeTableRelation)
      : undefined);
    message.createTableRelation !== undefined && (obj.createTableRelation = message.createTableRelation
      ? CreateTableRelationData.toJSON(message.createTableRelation)
      : undefined);
    message.removeColumn !== undefined &&
      (obj.removeColumn = message.removeColumn ? RemoveColumnData.toJSON(message.removeColumn) : undefined);
    message.dropTable !== undefined &&
      (obj.dropTable = message.dropTable ? DropTableData.toJSON(message.dropTable) : undefined);
    message.changeTableIndex !== undefined && (obj.changeTableIndex = message.changeTableIndex
      ? ChangeTableIndexData.toJSON(message.changeTableIndex)
      : undefined);
    message.createTableIndex !== undefined && (obj.createTableIndex = message.createTableIndex
      ? CreateTableIndexData.toJSON(message.createTableIndex)
      : undefined);
    message.addUniqColumn !== undefined &&
      (obj.addUniqColumn = message.addUniqColumn ? AddUniqColumnData.toJSON(message.addUniqColumn) : undefined);
    message.changeColumnUnique !== undefined && (obj.changeColumnUnique = message.changeColumnUnique
      ? ChangeColumnUniqueData.toJSON(message.changeColumnUnique)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MigrationChange>): MigrationChange {
    const message = createBaseMigrationChange();
    message.createTable = (object.createTable !== undefined && object.createTable !== null)
      ? CreateTableData.fromPartial(object.createTable)
      : undefined;
    message.changeTableName = (object.changeTableName !== undefined && object.changeTableName !== null)
      ? ChangeTableNameData.fromPartial(object.changeTableName)
      : undefined;
    message.changeTableComment = (object.changeTableComment !== undefined && object.changeTableComment !== null)
      ? ChangeTableCommentData.fromPartial(object.changeTableComment)
      : undefined;
    message.addColumn = (object.addColumn !== undefined && object.addColumn !== null)
      ? AddColumnData.fromPartial(object.addColumn)
      : undefined;
    message.renameColumn = (object.renameColumn !== undefined && object.renameColumn !== null)
      ? RenameColumnData.fromPartial(object.renameColumn)
      : undefined;
    message.changeColumnComment = (object.changeColumnComment !== undefined && object.changeColumnComment !== null)
      ? ChangeColumnCommentData.fromPartial(object.changeColumnComment)
      : undefined;
    message.changeColumn = (object.changeColumn !== undefined && object.changeColumn !== null)
      ? ChangeColumnData.fromPartial(object.changeColumn)
      : undefined;
    message.changeColumnDefault = (object.changeColumnDefault !== undefined && object.changeColumnDefault !== null)
      ? ChangeColumnDefaultData.fromPartial(object.changeColumnDefault)
      : undefined;
    message.changeColumnNull = (object.changeColumnNull !== undefined && object.changeColumnNull !== null)
      ? ChangeColumnNullData.fromPartial(object.changeColumnNull)
      : undefined;
    message.removeTableIndex = (object.removeTableIndex !== undefined && object.removeTableIndex !== null)
      ? RemoveTableIndexData.fromPartial(object.removeTableIndex)
      : undefined;
    message.removeTableRelation = (object.removeTableRelation !== undefined && object.removeTableRelation !== null)
      ? RemoveTableRelationData.fromPartial(object.removeTableRelation)
      : undefined;
    message.createTableRelation = (object.createTableRelation !== undefined && object.createTableRelation !== null)
      ? CreateTableRelationData.fromPartial(object.createTableRelation)
      : undefined;
    message.removeColumn = (object.removeColumn !== undefined && object.removeColumn !== null)
      ? RemoveColumnData.fromPartial(object.removeColumn)
      : undefined;
    message.dropTable = (object.dropTable !== undefined && object.dropTable !== null)
      ? DropTableData.fromPartial(object.dropTable)
      : undefined;
    message.changeTableIndex = (object.changeTableIndex !== undefined && object.changeTableIndex !== null)
      ? ChangeTableIndexData.fromPartial(object.changeTableIndex)
      : undefined;
    message.createTableIndex = (object.createTableIndex !== undefined && object.createTableIndex !== null)
      ? CreateTableIndexData.fromPartial(object.createTableIndex)
      : undefined;
    message.addUniqColumn = (object.addUniqColumn !== undefined && object.addUniqColumn !== null)
      ? AddUniqColumnData.fromPartial(object.addUniqColumn)
      : undefined;
    message.changeColumnUnique = (object.changeColumnUnique !== undefined && object.changeColumnUnique !== null)
      ? ChangeColumnUniqueData.fromPartial(object.changeColumnUnique)
      : undefined;
    return message;
  },
};

function createBaseCreateTable(): CreateTable {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const CreateTableData = {
  encode(message: CreateTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeTo !== undefined) {
      CreateTableChangeData.encode(message.changeTo, writer.uint32(18).fork()).ldelim();
    }
    if (message.prevUuid !== "") {
      writer.uint32(26).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(34).string(message.nextUuid);
    }
    if (message.nextRecord !== undefined) {
      CreateTableNextRecordData.encode(message.nextRecord, writer.uint32(42).fork()).ldelim();
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
          message.changeTo = CreateTableChangeData.decode(reader, reader.uint32());
          break;
        case 3:
          message.prevUuid = reader.string();
          break;
        case 4:
          message.nextUuid = reader.string();
          break;
        case 5:
          message.nextRecord = CreateTableNextRecordData.decode(reader, reader.uint32());
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
      changeTo: isSet(object.changeTo) ? CreateTableChangeData.fromJSON(object.changeTo) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      nextRecord: isSet(object.nextRecord) ? CreateTableNextRecordData.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: CreateTable): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeTo !== undefined &&
      (obj.changeTo = message.changeTo ? CreateTableChangeData.toJSON(message.changeTo) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? CreateTableNextRecordData.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateTable>): CreateTable {
    const message = createBaseCreateTable();
    message.key = object.key ?? "";
    message.changeTo = (object.changeTo !== undefined && object.changeTo !== null)
      ? CreateTableChangeData.fromPartial(object.changeTo)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? CreateTableNextRecordData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeTableName(): ChangeTableName {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeTableNameData = {
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
      CreateTableNextRecordData.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      CreateTableNextRecordData.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
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
          message.prevRecord = CreateTableNextRecordData.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = CreateTableNextRecordData.decode(reader, reader.uint32());
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
      prevRecord: isSet(object.prevRecord) ? CreateTableNextRecordData.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? CreateTableNextRecordData.fromJSON(object.nextRecord) : undefined,
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
      (obj.prevRecord = message.prevRecord ? CreateTableNextRecordData.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? CreateTableNextRecordData.toJSON(message.nextRecord) : undefined);
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
      ? CreateTableNextRecordData.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? CreateTableNextRecordData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeTableComment(): ChangeTableComment {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeTableCommentData = {
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
      CreateTableNextRecordData.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      CreateTableNextRecordData.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
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
          message.prevRecord = CreateTableNextRecordData.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = CreateTableNextRecordData.decode(reader, reader.uint32());
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
      prevRecord: isSet(object.prevRecord) ? CreateTableNextRecordData.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? CreateTableNextRecordData.fromJSON(object.nextRecord) : undefined,
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
      (obj.prevRecord = message.prevRecord ? CreateTableNextRecordData.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? CreateTableNextRecordData.toJSON(message.nextRecord) : undefined);
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
      ? CreateTableNextRecordData.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? CreateTableNextRecordData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseCreateTableChange(): CreateTableChange {
  return { name: "", uuid: "" };
}

export const CreateTableChangeData = {
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

export const AddColumnData = {
  encode(message: AddColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeTo !== undefined) {
      MigrationColumnDefinitionData.encode(message.changeTo, writer.uint32(18).fork()).ldelim();
    }
    if (message.prevUuid !== "") {
      writer.uint32(26).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(34).string(message.nextUuid);
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinitionData.encode(message.nextRecord, writer.uint32(42).fork()).ldelim();
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
          message.changeTo = MigrationColumnDefinitionData.decode(reader, reader.uint32());
          break;
        case 3:
          message.prevUuid = reader.string();
          break;
        case 4:
          message.nextUuid = reader.string();
          break;
        case 5:
          message.nextRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
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
      changeTo: isSet(object.changeTo) ? MigrationColumnDefinitionData.fromJSON(object.changeTo) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinitionData.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: AddColumn): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeTo !== undefined &&
      (obj.changeTo = message.changeTo ? MigrationColumnDefinitionData.toJSON(message.changeTo) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinitionData.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AddColumn>): AddColumn {
    const message = createBaseAddColumn();
    message.key = object.key ?? "";
    message.changeTo = (object.changeTo !== undefined && object.changeTo !== null)
      ? MigrationColumnDefinitionData.fromPartial(object.changeTo)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinitionData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseRenameColumn(): RenameColumn {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const RenameColumnData = {
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
      MigrationColumnDefinitionData.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinitionData.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
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
          message.prevRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
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
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinitionData.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinitionData.fromJSON(object.nextRecord) : undefined,
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
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinitionData.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinitionData.toJSON(message.nextRecord) : undefined);
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
      ? MigrationColumnDefinitionData.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinitionData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeColumnComment(): ChangeColumnComment {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeColumnCommentData = {
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
      MigrationColumnDefinitionData.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinitionData.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
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
          message.prevRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
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
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinitionData.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinitionData.fromJSON(object.nextRecord) : undefined,
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
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinitionData.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinitionData.toJSON(message.nextRecord) : undefined);
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
      ? MigrationColumnDefinitionData.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinitionData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeColumn(): ChangeColumn {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeColumnData = {
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
      MigrationColumnDefinitionData.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinitionData.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
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
          message.prevRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
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
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinitionData.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinitionData.fromJSON(object.nextRecord) : undefined,
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
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinitionData.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinitionData.toJSON(message.nextRecord) : undefined);
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
      ? MigrationColumnDefinitionData.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinitionData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeColumnDefault(): ChangeColumnDefault {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeColumnDefaultData = {
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
      MigrationColumnDefinitionData.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinitionData.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
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
          message.prevRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
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
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinitionData.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinitionData.fromJSON(object.nextRecord) : undefined,
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
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinitionData.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinitionData.toJSON(message.nextRecord) : undefined);
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
      ? MigrationColumnDefinitionData.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinitionData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeColumnNull(): ChangeColumnNull {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeColumnNullData = {
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
      MigrationColumnDefinitionData.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinitionData.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
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
          message.prevRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
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
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinitionData.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinitionData.fromJSON(object.nextRecord) : undefined,
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
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinitionData.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinitionData.toJSON(message.nextRecord) : undefined);
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
      ? MigrationColumnDefinitionData.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinitionData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseRemoveTableIndex(): RemoveTableIndex {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const RemoveTableIndexData = {
  encode(message: RemoveTableIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== undefined) {
      TableIndexMigrationData.encode(message.changeFrom, writer.uint32(18).fork()).ldelim();
    }
    if (message.prevUuid !== "") {
      writer.uint32(26).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(34).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      TableIndexMigrationData.encode(message.prevRecord, writer.uint32(42).fork()).ldelim();
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
          message.changeFrom = TableIndexMigrationData.decode(reader, reader.uint32());
          break;
        case 3:
          message.prevUuid = reader.string();
          break;
        case 4:
          message.nextUuid = reader.string();
          break;
        case 5:
          message.prevRecord = TableIndexMigrationData.decode(reader, reader.uint32());
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
      changeFrom: isSet(object.changeFrom) ? TableIndexMigrationData.fromJSON(object.changeFrom) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? TableIndexMigrationData.fromJSON(object.prevRecord) : undefined,
    };
  },

  toJSON(message: RemoveTableIndex): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined &&
      (obj.changeFrom = message.changeFrom ? TableIndexMigrationData.toJSON(message.changeFrom) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? TableIndexMigrationData.toJSON(message.prevRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoveTableIndex>): RemoveTableIndex {
    const message = createBaseRemoveTableIndex();
    message.key = object.key ?? "";
    message.changeFrom = (object.changeFrom !== undefined && object.changeFrom !== null)
      ? TableIndexMigrationData.fromPartial(object.changeFrom)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? TableIndexMigrationData.fromPartial(object.prevRecord)
      : undefined;
    return message;
  },
};

function createBaseRemoveTableRelation(): RemoveTableRelation {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const RemoveTableRelationData = {
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
      TableRelationMigrationData.encode(message.prevRecord, writer.uint32(42).fork()).ldelim();
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
          message.prevRecord = TableRelationMigrationData.decode(reader, reader.uint32());
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
      prevRecord: isSet(object.prevRecord) ? TableRelationMigrationData.fromJSON(object.prevRecord) : undefined,
    };
  },

  toJSON(message: RemoveTableRelation): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? TableRelationMigrationData.toJSON(message.prevRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoveTableRelation>): RemoveTableRelation {
    const message = createBaseRemoveTableRelation();
    message.key = object.key ?? "";
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? TableRelationMigrationData.fromPartial(object.prevRecord)
      : undefined;
    return message;
  },
};

function createBaseCreateTableRelation(): CreateTableRelation {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const CreateTableRelationData = {
  encode(message: CreateTableRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeTo !== undefined) {
      TableRelationMigrationData.encode(message.changeTo, writer.uint32(18).fork()).ldelim();
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.nextRecord !== undefined) {
      TableRelationMigrationData.encode(message.nextRecord, writer.uint32(50).fork()).ldelim();
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
          message.changeTo = TableRelationMigrationData.decode(reader, reader.uint32());
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.nextRecord = TableRelationMigrationData.decode(reader, reader.uint32());
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
      changeTo: isSet(object.changeTo) ? TableRelationMigrationData.fromJSON(object.changeTo) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      nextRecord: isSet(object.nextRecord) ? TableRelationMigrationData.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: CreateTableRelation): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeTo !== undefined &&
      (obj.changeTo = message.changeTo ? TableRelationMigrationData.toJSON(message.changeTo) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? TableRelationMigrationData.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateTableRelation>): CreateTableRelation {
    const message = createBaseCreateTableRelation();
    message.key = object.key ?? "";
    message.changeTo = (object.changeTo !== undefined && object.changeTo !== null)
      ? TableRelationMigrationData.fromPartial(object.changeTo)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? TableRelationMigrationData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseRemoveColumn(): RemoveColumn {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const RemoveColumnData = {
  encode(message: RemoveColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== undefined) {
      MigrationColumnDefinitionData.encode(message.changeFrom, writer.uint32(18).fork()).ldelim();
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      MigrationColumnDefinitionData.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
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
          message.changeFrom = MigrationColumnDefinitionData.decode(reader, reader.uint32());
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
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
      changeFrom: isSet(object.changeFrom) ? MigrationColumnDefinitionData.fromJSON(object.changeFrom) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinitionData.fromJSON(object.prevRecord) : undefined,
    };
  },

  toJSON(message: RemoveColumn): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined &&
      (obj.changeFrom = message.changeFrom ? MigrationColumnDefinitionData.toJSON(message.changeFrom) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinitionData.toJSON(message.prevRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoveColumn>): RemoveColumn {
    const message = createBaseRemoveColumn();
    message.key = object.key ?? "";
    message.changeFrom = (object.changeFrom !== undefined && object.changeFrom !== null)
      ? MigrationColumnDefinitionData.fromPartial(object.changeFrom)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? MigrationColumnDefinitionData.fromPartial(object.prevRecord)
      : undefined;
    return message;
  },
};

function createBaseDropTable(): DropTable {
  return { key: "", prevUuid: "", nextUuid: "" };
}

export const DropTableData = {
  encode(message: DropTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeFrom !== undefined) {
      CreateTableNextRecordData.encode(message.changeFrom, writer.uint32(18).fork()).ldelim();
    }
    if (message.prevUuid !== "") {
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      CreateTableNextRecordData.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
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
          message.changeFrom = CreateTableNextRecordData.decode(reader, reader.uint32());
          break;
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
          message.prevRecord = CreateTableNextRecordData.decode(reader, reader.uint32());
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
      changeFrom: isSet(object.changeFrom) ? CreateTableNextRecordData.fromJSON(object.changeFrom) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? CreateTableNextRecordData.fromJSON(object.prevRecord) : undefined,
    };
  },

  toJSON(message: DropTable): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined &&
      (obj.changeFrom = message.changeFrom ? CreateTableNextRecordData.toJSON(message.changeFrom) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? CreateTableNextRecordData.toJSON(message.prevRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DropTable>): DropTable {
    const message = createBaseDropTable();
    message.key = object.key ?? "";
    message.changeFrom = (object.changeFrom !== undefined && object.changeFrom !== null)
      ? CreateTableNextRecordData.fromPartial(object.changeFrom)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? CreateTableNextRecordData.fromPartial(object.prevRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeTableIndex(): ChangeTableIndex {
  return { key: "", changeFrom: "", changeTo: "", prevUuid: "", nextUuid: "" };
}

export const ChangeTableIndexData = {
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
      TableIndexMigrationData.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      TableIndexMigrationData.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
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
          message.prevRecord = TableIndexMigrationData.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = TableIndexMigrationData.decode(reader, reader.uint32());
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
      prevRecord: isSet(object.prevRecord) ? TableIndexMigrationData.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? TableIndexMigrationData.fromJSON(object.nextRecord) : undefined,
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
      (obj.prevRecord = message.prevRecord ? TableIndexMigrationData.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? TableIndexMigrationData.toJSON(message.nextRecord) : undefined);
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
      ? TableIndexMigrationData.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? TableIndexMigrationData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseCreateTableIndex(): CreateTableIndex {
  return { key: "", nextUuid: "" };
}

export const CreateTableIndexData = {
  encode(message: CreateTableIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.changeTo !== undefined) {
      TableIndexMigrationData.encode(message.changeTo, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.nextRecord !== undefined) {
      TableIndexMigrationData.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
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
          message.changeTo = TableIndexMigrationData.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 7:
          message.nextRecord = TableIndexMigrationData.decode(reader, reader.uint32());
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
      changeTo: isSet(object.changeTo) ? TableIndexMigrationData.fromJSON(object.changeTo) : undefined,
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      nextRecord: isSet(object.nextRecord) ? TableIndexMigrationData.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: CreateTableIndex): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeTo !== undefined &&
      (obj.changeTo = message.changeTo ? TableIndexMigrationData.toJSON(message.changeTo) : undefined);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? TableIndexMigrationData.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateTableIndex>): CreateTableIndex {
    const message = createBaseCreateTableIndex();
    message.key = object.key ?? "";
    message.changeTo = (object.changeTo !== undefined && object.changeTo !== null)
      ? TableIndexMigrationData.fromPartial(object.changeTo)
      : undefined;
    message.nextUuid = object.nextUuid ?? "";
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? TableIndexMigrationData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseAddUniqColumn(): AddUniqColumn {
  return {};
}

export const AddUniqColumnData = {
  encode(message: AddUniqColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinitionData.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
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
          message.nextRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddUniqColumn {
    return {
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinitionData.fromJSON(object.nextRecord) : undefined,
    };
  },

  toJSON(message: AddUniqColumn): unknown {
    const obj: any = {};
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinitionData.toJSON(message.nextRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AddUniqColumn>): AddUniqColumn {
    const message = createBaseAddUniqColumn();
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinitionData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseChangeColumnUnique(): ChangeColumnUnique {
  return { key: "", changeFrom: false, changeTo: false, prevUuid: "", nextUuid: "" };
}

export const ChangeColumnUniqueData = {
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
      MigrationColumnDefinitionData.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextRecord !== undefined) {
      MigrationColumnDefinitionData.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
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
          message.prevRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
          break;
        case 7:
          message.nextRecord = MigrationColumnDefinitionData.decode(reader, reader.uint32());
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
      prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinitionData.fromJSON(object.prevRecord) : undefined,
      nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinitionData.fromJSON(object.nextRecord) : undefined,
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
      (obj.prevRecord = message.prevRecord ? MigrationColumnDefinitionData.toJSON(message.prevRecord) : undefined);
    message.nextRecord !== undefined &&
      (obj.nextRecord = message.nextRecord ? MigrationColumnDefinitionData.toJSON(message.nextRecord) : undefined);
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
      ? MigrationColumnDefinitionData.fromPartial(object.prevRecord)
      : undefined;
    message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
      ? MigrationColumnDefinitionData.fromPartial(object.nextRecord)
      : undefined;
    return message;
  },
};

function createBaseCreateTableNextRecord(): CreateTableNextRecord {
  return { name: "", uuid: "", comment: "", columnDefinitions: [] };
}

export const CreateTableNextRecordData = {
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
      MigrationColumnDefinitionData.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.columnDefinitions.push(MigrationColumnDefinitionData.decode(reader, reader.uint32()));
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
        ? object.columnDefinitions.map((e: any) => MigrationColumnDefinitionData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateTableNextRecord): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.comment !== undefined && (obj.comment = message.comment);
    if (message.columnDefinitions) {
      obj.columnDefinitions = message.columnDefinitions.map((e) =>
        e ? MigrationColumnDefinitionData.toJSON(e) : undefined
      );
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
    message.columnDefinitions = object.columnDefinitions?.map((e) => MigrationColumnDefinitionData.fromPartial(e)) ||
      [];
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

export const MigrationColumnDefinitionData = {
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
      TableMetaDataMigrationData.encode(message.tableDefinition, writer.uint32(82).fork()).ldelim();
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
          message.tableDefinition = TableMetaDataMigrationData.decode(reader, reader.uint32());
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
        ? TableMetaDataMigrationData.fromJSON(object.tableDefinition)
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
      ? TableMetaDataMigrationData.toJSON(message.tableDefinition)
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
      ? TableMetaDataMigrationData.fromPartial(object.tableDefinition)
      : undefined;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseTableMetaDataMigration(): TableMetaDataMigration {
  return { name: "", uuid: "" };
}

export const TableMetaDataMigrationData = {
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

export const TableIndexMigrationData = {
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
      MigrationColumnDefinitionData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.singleIndex === true) {
      writer.uint32(48).bool(message.singleIndex);
    }
    if (message.tableDefinition !== undefined) {
      TableMetaDataMigrationData.encode(message.tableDefinition, writer.uint32(58).fork()).ldelim();
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
          message.columnDefinitions.push(MigrationColumnDefinitionData.decode(reader, reader.uint32()));
          break;
        case 6:
          message.singleIndex = reader.bool();
          break;
        case 7:
          message.tableDefinition = TableMetaDataMigrationData.decode(reader, reader.uint32());
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
        ? object.columnDefinitions.map((e: any) => MigrationColumnDefinitionData.fromJSON(e))
        : [],
      singleIndex: isSet(object.singleIndex) ? Boolean(object.singleIndex) : false,
      tableDefinition: isSet(object.tableDefinition)
        ? TableMetaDataMigrationData.fromJSON(object.tableDefinition)
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
      obj.columnDefinitions = message.columnDefinitions.map((e) =>
        e ? MigrationColumnDefinitionData.toJSON(e) : undefined
      );
    } else {
      obj.columnDefinitions = [];
    }
    message.singleIndex !== undefined && (obj.singleIndex = message.singleIndex);
    message.tableDefinition !== undefined && (obj.tableDefinition = message.tableDefinition
      ? TableMetaDataMigrationData.toJSON(message.tableDefinition)
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
    message.columnDefinitions = object.columnDefinitions?.map((e) => MigrationColumnDefinitionData.fromPartial(e)) ||
      [];
    message.singleIndex = object.singleIndex ?? false;
    message.tableDefinition = (object.tableDefinition !== undefined && object.tableDefinition !== null)
      ? TableMetaDataMigrationData.fromPartial(object.tableDefinition)
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

export const TableRelationMigrationData = {
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
      CreateTableChangeData.encode(message.tableDefinition, writer.uint32(66).fork()).ldelim();
    }
    if (message.relatedTable !== undefined) {
      CreateTableChangeData.encode(message.relatedTable, writer.uint32(74).fork()).ldelim();
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
          message.tableDefinition = CreateTableChangeData.decode(reader, reader.uint32());
          break;
        case 9:
          message.relatedTable = CreateTableChangeData.decode(reader, reader.uint32());
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
      tableDefinition: isSet(object.tableDefinition)
        ? CreateTableChangeData.fromJSON(object.tableDefinition)
        : undefined,
      relatedTable: isSet(object.relatedTable) ? CreateTableChangeData.fromJSON(object.relatedTable) : undefined,
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
      (obj.tableDefinition = message.tableDefinition
        ? CreateTableChangeData.toJSON(message.tableDefinition)
        : undefined);
    message.relatedTable !== undefined &&
      (obj.relatedTable = message.relatedTable ? CreateTableChangeData.toJSON(message.relatedTable) : undefined);
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
      ? CreateTableChangeData.fromPartial(object.tableDefinition)
      : undefined;
    message.relatedTable = (object.relatedTable !== undefined && object.relatedTable !== null)
      ? CreateTableChangeData.fromPartial(object.relatedTable)
      : undefined;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetBackendRequest(): GetBackendRequest {
  return { projectId: 0 };
}

export const GetBackendRequestData = {
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

export const GetBackendResponseData = {
  encode(message: GetBackendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backend !== undefined) {
      BackendData.encode(message.backend, writer.uint32(10).fork()).ldelim();
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
          message.backend = BackendData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBackendResponse {
    return { backend: isSet(object.backend) ? BackendData.fromJSON(object.backend) : undefined };
  },

  toJSON(message: GetBackendResponse): unknown {
    const obj: any = {};
    message.backend !== undefined && (obj.backend = message.backend ? BackendData.toJSON(message.backend) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetBackendResponse>): GetBackendResponse {
    const message = createBaseGetBackendResponse();
    message.backend = (object.backend !== undefined && object.backend !== null)
      ? BackendData.fromPartial(object.backend)
      : undefined;
    return message;
  },
};

function createBaseListTablesRequest(): ListTablesRequest {
  return { projectId: 0 };
}

export const ListTablesRequestData = {
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

export const ListTablesResponseData = {
  encode(message: ListTablesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tables) {
      TableData.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.tables.push(TableData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTablesResponse {
    return { tables: Array.isArray(object?.tables) ? object.tables.map((e: any) => TableData.fromJSON(e)) : [] };
  },

  toJSON(message: ListTablesResponse): unknown {
    const obj: any = {};
    if (message.tables) {
      obj.tables = message.tables.map((e) => e ? TableData.toJSON(e) : undefined);
    } else {
      obj.tables = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListTablesResponse>): ListTablesResponse {
    const message = createBaseListTablesResponse();
    message.tables = object.tables?.map((e) => TableData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListMigrationsRequest(): ListMigrationsRequest {
  return { projectId: 0 };
}

export const ListMigrationsRequestData = {
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

export const ListControllersRequestData = {
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

export const ListControllersResponseData = {
  encode(message: ListControllersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.controllers) {
      ControllerData.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.controllers.push(ControllerData.decode(reader, reader.uint32()));
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
      controllers: Array.isArray(object?.controllers)
        ? object.controllers.map((e: any) => ControllerData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListControllersResponse): unknown {
    const obj: any = {};
    if (message.controllers) {
      obj.controllers = message.controllers.map((e) => e ? ControllerData.toJSON(e) : undefined);
    } else {
      obj.controllers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListControllersResponse>): ListControllersResponse {
    const message = createBaseListControllersResponse();
    message.controllers = object.controllers?.map((e) => ControllerData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListFeaturesRequest(): ListFeaturesRequest {
  return { projectId: 0 };
}

export const ListFeaturesRequestData = {
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

export const ListFeaturesResponseData = {
  encode(message: ListFeaturesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.features) {
      FeatureData.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.features.push(FeatureData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListFeaturesResponse {
    return {
      features: Array.isArray(object?.features) ? object.features.map((e: any) => FeatureData.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListFeaturesResponse): unknown {
    const obj: any = {};
    if (message.features) {
      obj.features = message.features.map((e) => e ? FeatureData.toJSON(e) : undefined);
    } else {
      obj.features = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListFeaturesResponse>): ListFeaturesResponse {
    const message = createBaseListFeaturesResponse();
    message.features = object.features?.map((e) => FeatureData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListAuthorizationsRequest(): ListAuthorizationsRequest {
  return { projectId: 0 };
}

export const ListAuthorizationsRequestData = {
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

export const ListAuthorizationsResponseData = {
  encode(message: ListAuthorizationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.authorizations) {
      AuthorizationData.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.authorizations.push(AuthorizationData.decode(reader, reader.uint32()));
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
        ? object.authorizations.map((e: any) => AuthorizationData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListAuthorizationsResponse): unknown {
    const obj: any = {};
    if (message.authorizations) {
      obj.authorizations = message.authorizations.map((e) => e ? AuthorizationData.toJSON(e) : undefined);
    } else {
      obj.authorizations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListAuthorizationsResponse>): ListAuthorizationsResponse {
    const message = createBaseListAuthorizationsResponse();
    message.authorizations = object.authorizations?.map((e) => AuthorizationData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListLocalizationsRequest(): ListLocalizationsRequest {
  return { projectId: 0 };
}

export const ListLocalizationsRequestData = {
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

export const ListLocalizationsResponseData = {
  encode(message: ListLocalizationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.localizations) {
      LocalizationData.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.localizations.push(LocalizationData.decode(reader, reader.uint32()));
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
        ? object.localizations.map((e: any) => LocalizationData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListLocalizationsResponse): unknown {
    const obj: any = {};
    if (message.localizations) {
      obj.localizations = message.localizations.map((e) => e ? LocalizationData.toJSON(e) : undefined);
    } else {
      obj.localizations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListLocalizationsResponse>): ListLocalizationsResponse {
    const message = createBaseListLocalizationsResponse();
    message.localizations = object.localizations?.map((e) => LocalizationData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListMigrationsResponse(): ListMigrationsResponse {
  return { migrations: [] };
}

export const ListMigrationsResponseData = {
  encode(message: ListMigrationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.migrations) {
      MigrationData.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.migrations.push(MigrationData.decode(reader, reader.uint32()));
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
      migrations: Array.isArray(object?.migrations) ? object.migrations.map((e: any) => MigrationData.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListMigrationsResponse): unknown {
    const obj: any = {};
    if (message.migrations) {
      obj.migrations = message.migrations.map((e) => e ? MigrationData.toJSON(e) : undefined);
    } else {
      obj.migrations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListMigrationsResponse>): ListMigrationsResponse {
    const message = createBaseListMigrationsResponse();
    message.migrations = object.migrations?.map((e) => MigrationData.fromPartial(e)) || [];
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
      requestType: ListTablesRequestData,
      requestStream: false,
      responseType: ListTablesResponseData,
      responseStream: false,
      options: {},
    },
    listControllers: {
      name: "ListControllers",
      requestType: ListControllersRequestData,
      requestStream: false,
      responseType: ListControllersResponseData,
      responseStream: false,
      options: {},
    },
    listFeatures: {
      name: "ListFeatures",
      requestType: ListFeaturesRequestData,
      requestStream: false,
      responseType: ListFeaturesResponseData,
      responseStream: false,
      options: {},
    },
    listAuthorizations: {
      name: "ListAuthorizations",
      requestType: ListAuthorizationsRequestData,
      requestStream: false,
      responseType: ListAuthorizationsResponseData,
      responseStream: false,
      options: {},
    },
    listLocalizations: {
      name: "ListLocalizations",
      requestType: ListLocalizationsRequestData,
      requestStream: false,
      responseType: ListLocalizationsResponseData,
      responseStream: false,
      options: {},
    },
    listMigrations: {
      name: "ListMigrations",
      requestType: ListMigrationsRequestData,
      requestStream: false,
      responseType: ListMigrationsResponseData,
      responseStream: false,
      options: {},
    },
    getBackend: {
      name: "GetBackend",
      requestType: GetBackendRequestData,
      requestStream: false,
      responseType: GetBackendResponseData,
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
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
