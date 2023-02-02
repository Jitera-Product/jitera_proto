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
  changeFrom?: TableRelationMigration;
  prevUuid: string;
  nextUuid: string;
  prevRecord?: TableIndexMigration;
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
  return { id: "", projectName: "", projectId: 0 };
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
  return { name: "", children: [] };
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
    return obj;
  },

  fromPartial(object: DeepPartial<TableColumn>): TableColumn {
    const message = createBaseTableColumn();
    message.name = object.name ?? "";
    message.type = (object.type !== undefined && object.type !== null)
      ? TableColumnColumnType.fromPartial(object.type)
      : undefined;
    message.constraints = object.constraints?.map((e) => TableConstraint.fromPartial(e)) || [];
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
      writer.uint32(34).string(message.prevUuid);
    }
    if (message.nextUuid !== "") {
      writer.uint32(42).string(message.nextUuid);
    }
    if (message.prevRecord !== undefined) {
      TableIndexMigration.encode(message.prevRecord, writer.uint32(50).fork()).ldelim();
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
        case 4:
          message.prevUuid = reader.string();
          break;
        case 5:
          message.nextUuid = reader.string();
          break;
        case 6:
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
    if (message.changeFrom !== undefined) {
      TableRelationMigration.encode(message.changeFrom, writer.uint32(18).fork()).ldelim();
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
        case 2:
          message.changeFrom = TableRelationMigration.decode(reader, reader.uint32());
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
      changeFrom: isSet(object.changeFrom) ? TableRelationMigration.fromJSON(object.changeFrom) : undefined,
      prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
      nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
      prevRecord: isSet(object.prevRecord) ? TableIndexMigration.fromJSON(object.prevRecord) : undefined,
    };
  },

  toJSON(message: RemoveTableRelation): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.changeFrom !== undefined &&
      (obj.changeFrom = message.changeFrom ? TableRelationMigration.toJSON(message.changeFrom) : undefined);
    message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
    message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
    message.prevRecord !== undefined &&
      (obj.prevRecord = message.prevRecord ? TableIndexMigration.toJSON(message.prevRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoveTableRelation>): RemoveTableRelation {
    const message = createBaseRemoveTableRelation();
    message.key = object.key ?? "";
    message.changeFrom = (object.changeFrom !== undefined && object.changeFrom !== null)
      ? TableRelationMigration.fromPartial(object.changeFrom)
      : undefined;
    message.prevUuid = object.prevUuid ?? "";
    message.nextUuid = object.nextUuid ?? "";
    message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
      ? TableIndexMigration.fromPartial(object.prevRecord)
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
  return { name: "", unique: false, uuid: "", tableDefinitionUuid: "", columnDefinitions: [], singleIndex: false };
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
    return message;
  },
};

function createBaseTableRelationMigration(): TableRelationMigration {
  return { foreignKey: "", relationType: "", required: false, uuid: "", tableDefinitionUuid: "", relatedTableUuid: "" };
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
