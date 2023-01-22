import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
export declare enum DataTypeName {
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
    UNRECOGNIZED = -1
}
export declare function dataTypeNameFromJSON(object: any): DataTypeName;
export declare function dataTypeNameToJSON(object: DataTypeName): string;
export declare enum Operator {
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
    UNRECOGNIZED = -1
}
export declare function operatorFromJSON(object: any): Operator;
export declare function operatorToJSON(object: Operator): string;
export declare class Project {
    id: string;
    projectName: string;
    projectId: number;
    infra?: Infra | undefined;
    projectExport?: ProjectExport | undefined;
    projectPreview?: ProjectPreview | undefined;
}
export declare class ProjectExport {
    id: number;
}
export declare class ProjectPreview {
    id: number;
}
export declare class Infra {
    path: string;
}
export declare class Backend {
    tables: Table[];
    controllers: Controller[];
    features: Feature[];
    authorizations: Authorization[];
    localizations: Localization[];
    migrations: Migration[];
}
export declare class Localization {
    lang: string;
    namespaces: LocalizationNamespace[];
}
export declare class LocalizationNamespace {
    name: string;
    translates: LocalizationTranslate[];
}
export declare class LocalizationTranslate {
    key: string;
    value: string;
}
export declare class DataType {
    name: DataTypeName;
}
export declare class Authorization {
    name: string;
    id: number;
    policies: AuthorizationPolicy[];
}
export declare class AuthorizationPolicy {
    resource: string;
    roleBinding: AuthorizationPolicyRoleBinding | undefined;
    rule: AuthorizationPolicyRule | undefined;
    scope: AuthorizationPolicyScope;
}
export declare enum AuthorizationPolicyScope {
    ALL = 0,
    ASSOCIATED = 1,
    UNRECOGNIZED = -1
}
export declare function authorizationPolicyScopeFromJSON(object: any): AuthorizationPolicyScope;
export declare function authorizationPolicyScopeToJSON(object: AuthorizationPolicyScope): string;
export declare class AuthorizationPolicyRoleBinding {
    table: string;
    column: string;
    role: string;
}
export declare class AuthorizationPolicyRule {
    operands: AuthorizationPolicyRuleOperand[];
    operators: Operator[];
}
export declare class AuthorizationPolicyRuleOperand {
    expr?: AuthorizationPolicyRuleExpr | undefined;
    rule?: AuthorizationPolicyRule | undefined;
}
export declare class AuthorizationPolicyRuleExpr {
    column: string;
    value?: string | undefined;
    paths?: string | undefined;
    dataType: DataType | undefined;
    operator: Operator;
}
export declare class Feature {
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
export declare enum FeatureFeatureName {
    EMAIL_LOGIN = 0,
    JP_BANKS_DATA = 1,
    BASIC_AUTH = 2,
    TWILIO_LOGIN = 3,
    ROLLBAR = 4,
    DEEP_LINK = 5,
    STRIPE = 6,
    LINE_LOGIN = 7,
    UNRECOGNIZED = -1
}
export declare function featureFeatureNameFromJSON(object: any): FeatureFeatureName;
export declare function featureFeatureNameToJSON(object: FeatureFeatureName): string;
export declare enum FeatureEnvironment {
    DEVELOPMENT = 0,
    STAGING = 1,
    PRODUCTION = 2,
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function featureEnvironmentFromJSON(object: any): FeatureEnvironment;
export declare function featureEnvironmentToJSON(object: FeatureEnvironment): string;
export declare class FeatureEmailLogin {
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
export declare enum FeatureEmailLoginUnlockStrategy {
    TIME = 0,
    EMAIL = 1,
    BOTH = 2,
    UNRECOGNIZED = -1
}
export declare function featureEmailLoginUnlockStrategyFromJSON(object: any): FeatureEmailLoginUnlockStrategy;
export declare function featureEmailLoginUnlockStrategyToJSON(object: FeatureEmailLoginUnlockStrategy): string;
export declare class FeatureJPBankData {
}
export declare class FeatureBasicAuth {
    username: string;
    password: string;
}
export declare class FeatureTwilioLogin {
    userTables: string[];
    serviceId: string;
    sid: string;
    token: string;
    otpLength: number;
}
export declare class FeatureRollbar {
    accessToken: string;
}
export declare class FeatureDeepLink {
    iosAppStoreId: string;
    iosBundleId: string;
    iosAppLink: string;
    androidPackageName: string;
    androidCertFingerprints: string;
    androidAppLink: string;
    firebaseDomain: string;
}
export declare class FeatureStripe {
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
export declare class FeatureLineLogin {
    userTables: string[];
    clientId: string;
    secretKey: string;
}
export declare class Controller {
    name: string;
    endpoints: ControllerEndpoint[];
}
export declare class ControllerEndpoint {
    path: string;
    name: string;
    table?: string | undefined;
    feature?: FeatureFeatureName | undefined;
    list?: ControllerEndpointList | undefined;
    get?: ControllerEndpointGet | undefined;
    create?: ControllerEndpointCreate | undefined;
    update?: ControllerEndpointUpdate | undefined;
    delete?: ControllerEndpointDelete | undefined;
    authentication: ControllerAuthentication | undefined;
    authorization: ControllerAuthorization | undefined;
    responses: ControllerResponse | undefined;
    params: ControllerRequestContent | undefined;
    writable: boolean;
}
export declare class ControllerEndpointList {
    queries: ControllerRequestContent | undefined;
    conditions: ControllerResourceCondition | undefined;
}
export declare class ControllerEndpointGet {
    queries: ControllerRequestContent | undefined;
    conditions: ControllerResourceCondition | undefined;
}
export declare class ControllerEndpointCreate {
    body: ControllerRequestContent | undefined;
    conditions: ControllerResourceCondition | undefined;
    resources: ControllerResourceUpdate | undefined;
}
export declare class ControllerEndpointUpdate {
    body: ControllerRequestContent | undefined;
    conditions: ControllerResourceCondition | undefined;
    resources: ControllerResourceUpdate | undefined;
}
export declare class ControllerEndpointDelete {
    body: ControllerRequestContent | undefined;
    conditions: ControllerResourceCondition | undefined;
}
export declare class ControllerRequestContent {
    fields: ControllerRequestContentField[];
}
export declare class ControllerRequestContentField {
    name: string;
    dataType: DataType | undefined;
    children: ControllerRequestContentField[];
}
export declare class ControllerResponse {
    fields: ControllerResponseField[];
}
export declare class ControllerResponseField {
    name: string;
    resource?: string | undefined;
    property?: string | undefined;
    value?: string | undefined;
    dataType: DataType | undefined;
    children: ControllerResponseField[];
}
export declare class ControllerResourceCondition {
    operands: ControllerResourceConditionOperand[];
    operators: Operator[];
}
export declare enum ControllerResourceConditionSystem {
    RESOURCE_OWNER = 0,
    UNRECOGNIZED = -1
}
export declare function controllerResourceConditionSystemFromJSON(object: any): ControllerResourceConditionSystem;
export declare function controllerResourceConditionSystemToJSON(object: ControllerResourceConditionSystem): string;
export declare class ControllerResourceConditionOperand {
    expr?: ControllerResourceConditionExpr | undefined;
    condition?: ControllerResourceCondition | undefined;
}
export declare class ControllerResourceConditionExpr {
    paths: string[];
    query?: string | undefined;
    params?: string | undefined;
    body?: string | undefined;
    value?: string | undefined;
    system?: ControllerResourceConditionSystem | undefined;
    dataType: DataType | undefined;
    operator: Operator;
}
export declare class ControllerResourceUpdate {
    fields: ControllerResourceUpdateField[];
}
export declare class ControllerResourceUpdateField {
    name: string;
    query?: string | undefined;
    params?: string | undefined;
    body?: string | undefined;
    value?: string | undefined;
    dataType: DataType | undefined;
    children: ControllerResourceUpdateField[];
}
export declare class ControllerAuthentication {
    tableName: string;
}
export declare class ControllerAuthorization {
    authorizationId: number;
    tableName: string;
}
export declare class Table {
    name: string;
    columns: TableColumn[];
    relations: TableRelation[];
    indexes: TableIndex[];
}
export declare class TableColumn {
    name: string;
    type: TableColumnColumnType | undefined;
    constraints: TableConstraint[];
}
export declare enum TableColumnOperator {
    GREATER_THAN = 0,
    GREATER_THAN_OR_EQUAL = 1,
    EQUAL = 2,
    LESS_THAN = 3,
    LESS_THAN_OR_EQUAL = 4,
    NOT_EQUAL = 5,
    UNRECOGNIZED = -1
}
export declare function tableColumnOperatorFromJSON(object: any): TableColumnOperator;
export declare function tableColumnOperatorToJSON(object: TableColumnOperator): string;
export declare class TableColumnColumnType {
    integerType?: TableColumnIntegerType | undefined;
    stringType?: TableColumnStringType | undefined;
    floatType?: TableColumnFloatType | undefined;
    booleanType?: TableColumnBooleanType | undefined;
    dateType?: TableColumnDateType | undefined;
    fileType?: TableColumnFileType | undefined;
    enumType?: TableColumnEnumType | undefined;
}
export declare class TableColumnStringType {
    defaultValue?: string | undefined;
    isText: boolean;
    formats: TableColumnStringTypeFormat[];
    conditions: TableColumnStringTypeCondition[];
}
export declare enum TableColumnStringTypeFormat {
    EMAIL = 0,
    HIRAGANA = 1,
    KATAKANA = 2,
    PHONE_NUMBER = 3,
    URL = 4,
    UNRECOGNIZED = -1
}
export declare function tableColumnStringTypeFormatFromJSON(object: any): TableColumnStringTypeFormat;
export declare function tableColumnStringTypeFormatToJSON(object: TableColumnStringTypeFormat): string;
export declare class TableColumnStringTypeCondition {
    operator: TableColumnOperator;
    value?: number | undefined;
    columnName?: string | undefined;
}
export declare class TableColumnIntegerType {
    defaultValue?: number | undefined;
    conditions: TableColumnIntegerTypeCondition[];
}
export declare class TableColumnIntegerTypeCondition {
    operator: TableColumnOperator;
    value?: number | undefined;
    columnName?: string | undefined;
}
export declare class TableColumnFloatType {
    defaultValue?: number | undefined;
    conditions: TableColumnFloatTypeCondition[];
}
export declare class TableColumnFloatTypeCondition {
    operator: TableColumnOperator;
    value?: number | undefined;
    columnName?: string | undefined;
}
export declare class TableColumnBooleanType {
    defaultValue: boolean;
}
export declare class TableColumnDateType {
    withTime: boolean;
    conditions: TableColumnDateTypeCondition[];
}
export declare enum TableColumnDateTypeCondition {
    IN_PAST = 0,
    IN_FUTURE = 1,
    UNRECOGNIZED = -1
}
export declare function tableColumnDateTypeConditionFromJSON(object: any): TableColumnDateTypeCondition;
export declare function tableColumnDateTypeConditionToJSON(object: TableColumnDateTypeCondition): string;
export declare class TableColumnFileType {
    maximumSize: number;
    numberOfFiles: TableColumnFileTypeNumberOfFiles | undefined;
    contentTypes: TableColumnFileTypeContentType[];
    multiple: boolean;
}
export declare enum TableColumnFileTypeContentType {
    IMAGE = 0,
    VIDEO = 1,
    AUDIO = 2,
    CSV = 3,
    PDF = 4,
    JSON = 5,
    UNRECOGNIZED = -1
}
export declare function tableColumnFileTypeContentTypeFromJSON(object: any): TableColumnFileTypeContentType;
export declare function tableColumnFileTypeContentTypeToJSON(object: TableColumnFileTypeContentType): string;
export declare class TableColumnFileTypeNumberOfFiles {
    minimum: number;
    maximum: number;
}
export declare class TableColumnEnumType {
    defaultValue: string;
    values: string[];
}
export declare class TableConstraint {
    primaryKey?: TableConstraintPrimaryKey | undefined;
    foreignKey?: TableConstraintForeignKey | undefined;
    notNull?: TableConstraintNotNull | undefined;
    unique?: TableConstraintUnique | undefined;
}
export declare class TableConstraintPrimaryKey {
}
export declare class TableConstraintForeignKey {
    tableName: string;
    primaryKey: string;
}
export declare class TableConstraintNotNull {
}
export declare class TableConstraintUnique {
}
export declare class TableIndex {
    name: string;
    unique: boolean;
    columns: string[];
}
export declare class TableRelation {
    hasOne?: TableRelationRelationHasOne | undefined;
    belongTo?: TableRelationRelationBelongTo | undefined;
    oneMany?: TableRelationRelationOneMany | undefined;
    manyOne?: TableRelationRelationManyOne | undefined;
    manyMany?: TableRelationRelationManyMany | undefined;
}
export declare class TableRelationRelationHasOne {
    tableName: string;
    columnName: string;
}
export declare class TableRelationRelationBelongTo {
    tableName: string;
    columnName: string;
}
export declare class TableRelationRelationManyOne {
    tableName: string;
    columnName: string;
}
export declare class TableRelationRelationOneMany {
    tableName: string;
    columnName: string;
}
export declare class TableRelationRelationManyMany {
    tableName: string;
    joinedName: string;
}
export declare class Migration {
    migrationId: string;
    changes: MigrationChange[];
}
export declare class MigrationChange {
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
export declare class CreateTable {
    key: string;
    changeTo: CreateTableChange | undefined;
    prevUuid: string;
    nextUuid: string;
    nextRecord: CreateTableNextRecord | undefined;
}
export declare class ChangeTableName {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: CreateTableNextRecord | undefined;
    nextRecord: CreateTableNextRecord | undefined;
}
export declare class ChangeTableComment {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: CreateTableNextRecord | undefined;
    nextRecord: CreateTableNextRecord | undefined;
}
export declare class CreateTableChange {
    name: string;
    uuid: string;
    comment?: string | undefined;
}
export declare class AddColumn {
    key: string;
    changeTo: MigrationColumnDefinition | undefined;
    prevUuid: string;
    nextUuid: string;
    nextRecord: MigrationColumnDefinition | undefined;
}
export declare class RenameColumn {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
    nextRecord: MigrationColumnDefinition | undefined;
}
export declare class ChangeColumnComment {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
    nextRecord: MigrationColumnDefinition | undefined;
}
export declare class ChangeColumn {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
    nextRecord: MigrationColumnDefinition | undefined;
}
export declare class ChangeColumnDefault {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
    nextRecord: MigrationColumnDefinition | undefined;
}
export declare class ChangeColumnNull {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
    nextRecord: MigrationColumnDefinition | undefined;
}
export declare class RemoveTableIndex {
    key: string;
    changeFrom: TableIndexMigration | undefined;
    prevUuid: string;
    nextUuid: string;
    prevRecord: TableIndexMigration | undefined;
}
export declare class RemoveTableRelation {
    key: string;
    changeFrom: TableRelationMigration | undefined;
    prevUuid: string;
    nextUuid: string;
    prevRecord: TableIndexMigration | undefined;
}
export declare class CreateTableRelation {
    key: string;
    changeTo: TableRelationMigration | undefined;
    prevUuid: string;
    nextUuid: string;
    nextRecord: TableRelationMigration | undefined;
}
export declare class RemoveColumn {
    key: string;
    changeFrom: MigrationColumnDefinition | undefined;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
}
export declare class DropTable {
    key: string;
    changeFrom: CreateTableNextRecord | undefined;
    prevUuid: string;
    nextUuid: string;
    prevRecord: CreateTableNextRecord | undefined;
}
export declare class ChangeTableIndex {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: TableIndexMigration | undefined;
    nextRecord: TableIndexMigration | undefined;
}
export declare class CreateTableIndex {
    key: string;
    changeTo: TableIndexMigration | undefined;
    nextUuid: string;
    nextRecord: TableIndexMigration | undefined;
}
export declare class AddUniqColumn {
    nextRecord: MigrationColumnDefinition | undefined;
}
export declare class ChangeColumnUnique {
    key: string;
    changeFrom: boolean;
    changeTo: boolean;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
    nextRecord: MigrationColumnDefinition | undefined;
}
export declare class CreateTableNextRecord {
    name: string;
    uuid: string;
    comment: string;
    columnDefinitions: MigrationColumnDefinition[];
}
export declare class MigrationColumnDefinition {
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
export declare class TableMetaDataMigration {
    name: string;
    uuid: string;
}
export declare class TableIndexMigration {
    name: string;
    unique: boolean;
    uuid: string;
    tableDefinitionUuid: string;
    columnDefinitions: MigrationColumnDefinition[];
    singleIndex: boolean;
}
export declare class TableRelationMigration {
    foreignKey: string;
    relationType: string;
    required: boolean;
    uuid: string;
    tableDefinitionUuid: string;
    relatedTableUuid: string;
    customForeignKey?: boolean | undefined;
    tableDefinition: CreateTableChange | undefined;
    relatedTable: CreateTableChange | undefined;
}
export declare class GetBackendRequest {
    projectId: number;
}
export declare class GetBackendResponse {
    backend: Backend | undefined;
}
export declare class ListTablesRequest {
    projectId: number;
}
export declare class ListTablesResponse {
    tables: Table[];
}
export declare class ListMigrationsRequest {
    projectId: number;
}
export declare class ListControllersRequest {
    projectId: number;
}
export declare class ListControllersResponse {
    controllers: Controller[];
}
export declare class ListFeaturesRequest {
    projectId: number;
}
export declare class ListFeaturesResponse {
    features: Feature[];
}
export declare class ListAuthorizationsRequest {
    projectId: number;
}
export declare class ListAuthorizationsResponse {
    authorizations: Authorization[];
}
export declare class ListLocalizationsRequest {
    projectId: number;
}
export declare class ListLocalizationsResponse {
    localizations: Localization[];
}
export declare class ListMigrationsResponse {
    migrations: Migration[];
}
export declare const ProjectData: {
    encode(message: Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Project;
    fromJSON(object: any): Project;
    toJSON(message: Project): unknown;
    fromPartial(object: DeepPartial<Project>): Project;
};
export declare const ProjectExportData: {
    encode(message: ProjectExport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectExport;
    fromJSON(object: any): ProjectExport;
    toJSON(message: ProjectExport): unknown;
    fromPartial(object: DeepPartial<ProjectExport>): ProjectExport;
};
export declare const ProjectPreviewData: {
    encode(message: ProjectPreview, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPreview;
    fromJSON(object: any): ProjectPreview;
    toJSON(message: ProjectPreview): unknown;
    fromPartial(object: DeepPartial<ProjectPreview>): ProjectPreview;
};
export declare const InfraData: {
    encode(message: Infra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Infra;
    fromJSON(object: any): Infra;
    toJSON(message: Infra): unknown;
    fromPartial(object: DeepPartial<Infra>): Infra;
};
export declare const BackendData: {
    encode(message: Backend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Backend;
    fromJSON(object: any): Backend;
    toJSON(message: Backend): unknown;
    fromPartial(object: DeepPartial<Backend>): Backend;
};
export declare const LocalizationData: {
    encode(message: Localization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Localization;
    fromJSON(object: any): Localization;
    toJSON(message: Localization): unknown;
    fromPartial(object: DeepPartial<Localization>): Localization;
};
export declare const LocalizationNamespaceData: {
    encode(message: LocalizationNamespace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LocalizationNamespace;
    fromJSON(object: any): LocalizationNamespace;
    toJSON(message: LocalizationNamespace): unknown;
    fromPartial(object: DeepPartial<LocalizationNamespace>): LocalizationNamespace;
};
export declare const LocalizationTranslateData: {
    encode(message: LocalizationTranslate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LocalizationTranslate;
    fromJSON(object: any): LocalizationTranslate;
    toJSON(message: LocalizationTranslate): unknown;
    fromPartial(object: DeepPartial<LocalizationTranslate>): LocalizationTranslate;
};
export declare const DataTypeData: {
    encode(message: DataType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataType;
    fromJSON(object: any): DataType;
    toJSON(message: DataType): unknown;
    fromPartial(object: DeepPartial<DataType>): DataType;
};
export declare const AuthorizationData: {
    encode(message: Authorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Authorization;
    fromJSON(object: any): Authorization;
    toJSON(message: Authorization): unknown;
    fromPartial(object: DeepPartial<Authorization>): Authorization;
};
export declare const AuthorizationPolicyData: {
    encode(message: AuthorizationPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicy;
    fromJSON(object: any): AuthorizationPolicy;
    toJSON(message: AuthorizationPolicy): unknown;
    fromPartial(object: DeepPartial<AuthorizationPolicy>): AuthorizationPolicy;
};
export declare const AuthorizationPolicyRoleBindingData: {
    encode(message: AuthorizationPolicyRoleBinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicyRoleBinding;
    fromJSON(object: any): AuthorizationPolicyRoleBinding;
    toJSON(message: AuthorizationPolicyRoleBinding): unknown;
    fromPartial(object: DeepPartial<AuthorizationPolicyRoleBinding>): AuthorizationPolicyRoleBinding;
};
export declare const AuthorizationPolicyRuleData: {
    encode(message: AuthorizationPolicyRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicyRule;
    fromJSON(object: any): AuthorizationPolicyRule;
    toJSON(message: AuthorizationPolicyRule): unknown;
    fromPartial(object: DeepPartial<AuthorizationPolicyRule>): AuthorizationPolicyRule;
};
export declare const AuthorizationPolicyRuleOperandData: {
    encode(message: AuthorizationPolicyRuleOperand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicyRuleOperand;
    fromJSON(object: any): AuthorizationPolicyRuleOperand;
    toJSON(message: AuthorizationPolicyRuleOperand): unknown;
    fromPartial(object: DeepPartial<AuthorizationPolicyRuleOperand>): AuthorizationPolicyRuleOperand;
};
export declare const AuthorizationPolicyRuleExprData: {
    encode(message: AuthorizationPolicyRuleExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicyRuleExpr;
    fromJSON(object: any): AuthorizationPolicyRuleExpr;
    toJSON(message: AuthorizationPolicyRuleExpr): unknown;
    fromPartial(object: DeepPartial<AuthorizationPolicyRuleExpr>): AuthorizationPolicyRuleExpr;
};
export declare const FeatureData: {
    encode(message: Feature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Feature;
    fromJSON(object: any): Feature;
    toJSON(message: Feature): unknown;
    fromPartial(object: DeepPartial<Feature>): Feature;
};
export declare const FeatureEmailLoginData: {
    encode(message: FeatureEmailLogin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureEmailLogin;
    fromJSON(object: any): FeatureEmailLogin;
    toJSON(message: FeatureEmailLogin): unknown;
    fromPartial(object: DeepPartial<FeatureEmailLogin>): FeatureEmailLogin;
};
export declare const FeatureJPBankDataData: {
    encode(_: FeatureJPBankData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureJPBankData;
    fromJSON(_: any): FeatureJPBankData;
    toJSON(_: FeatureJPBankData): unknown;
    fromPartial(_: DeepPartial<FeatureJPBankData>): FeatureJPBankData;
};
export declare const FeatureBasicAuthData: {
    encode(message: FeatureBasicAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureBasicAuth;
    fromJSON(object: any): FeatureBasicAuth;
    toJSON(message: FeatureBasicAuth): unknown;
    fromPartial(object: DeepPartial<FeatureBasicAuth>): FeatureBasicAuth;
};
export declare const FeatureTwilioLoginData: {
    encode(message: FeatureTwilioLogin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureTwilioLogin;
    fromJSON(object: any): FeatureTwilioLogin;
    toJSON(message: FeatureTwilioLogin): unknown;
    fromPartial(object: DeepPartial<FeatureTwilioLogin>): FeatureTwilioLogin;
};
export declare const FeatureRollbarData: {
    encode(message: FeatureRollbar, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureRollbar;
    fromJSON(object: any): FeatureRollbar;
    toJSON(message: FeatureRollbar): unknown;
    fromPartial(object: DeepPartial<FeatureRollbar>): FeatureRollbar;
};
export declare const FeatureDeepLinkData: {
    encode(message: FeatureDeepLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureDeepLink;
    fromJSON(object: any): FeatureDeepLink;
    toJSON(message: FeatureDeepLink): unknown;
    fromPartial(object: DeepPartial<FeatureDeepLink>): FeatureDeepLink;
};
export declare const FeatureStripeData: {
    encode(message: FeatureStripe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureStripe;
    fromJSON(object: any): FeatureStripe;
    toJSON(message: FeatureStripe): unknown;
    fromPartial(object: DeepPartial<FeatureStripe>): FeatureStripe;
};
export declare const FeatureLineLoginData: {
    encode(message: FeatureLineLogin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureLineLogin;
    fromJSON(object: any): FeatureLineLogin;
    toJSON(message: FeatureLineLogin): unknown;
    fromPartial(object: DeepPartial<FeatureLineLogin>): FeatureLineLogin;
};
export declare const ControllerData: {
    encode(message: Controller, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Controller;
    fromJSON(object: any): Controller;
    toJSON(message: Controller): unknown;
    fromPartial(object: DeepPartial<Controller>): Controller;
};
export declare const ControllerEndpointData: {
    encode(message: ControllerEndpoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpoint;
    fromJSON(object: any): ControllerEndpoint;
    toJSON(message: ControllerEndpoint): unknown;
    fromPartial(object: DeepPartial<ControllerEndpoint>): ControllerEndpoint;
};
export declare const ControllerEndpointListData: {
    encode(message: ControllerEndpointList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointList;
    fromJSON(object: any): ControllerEndpointList;
    toJSON(message: ControllerEndpointList): unknown;
    fromPartial(object: DeepPartial<ControllerEndpointList>): ControllerEndpointList;
};
export declare const ControllerEndpointGetData: {
    encode(message: ControllerEndpointGet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointGet;
    fromJSON(object: any): ControllerEndpointGet;
    toJSON(message: ControllerEndpointGet): unknown;
    fromPartial(object: DeepPartial<ControllerEndpointGet>): ControllerEndpointGet;
};
export declare const ControllerEndpointCreateData: {
    encode(message: ControllerEndpointCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointCreate;
    fromJSON(object: any): ControllerEndpointCreate;
    toJSON(message: ControllerEndpointCreate): unknown;
    fromPartial(object: DeepPartial<ControllerEndpointCreate>): ControllerEndpointCreate;
};
export declare const ControllerEndpointUpdateData: {
    encode(message: ControllerEndpointUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointUpdate;
    fromJSON(object: any): ControllerEndpointUpdate;
    toJSON(message: ControllerEndpointUpdate): unknown;
    fromPartial(object: DeepPartial<ControllerEndpointUpdate>): ControllerEndpointUpdate;
};
export declare const ControllerEndpointDeleteData: {
    encode(message: ControllerEndpointDelete, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointDelete;
    fromJSON(object: any): ControllerEndpointDelete;
    toJSON(message: ControllerEndpointDelete): unknown;
    fromPartial(object: DeepPartial<ControllerEndpointDelete>): ControllerEndpointDelete;
};
export declare const ControllerRequestContentData: {
    encode(message: ControllerRequestContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerRequestContent;
    fromJSON(object: any): ControllerRequestContent;
    toJSON(message: ControllerRequestContent): unknown;
    fromPartial(object: DeepPartial<ControllerRequestContent>): ControllerRequestContent;
};
export declare const ControllerRequestContentFieldData: {
    encode(message: ControllerRequestContentField, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerRequestContentField;
    fromJSON(object: any): ControllerRequestContentField;
    toJSON(message: ControllerRequestContentField): unknown;
    fromPartial(object: DeepPartial<ControllerRequestContentField>): ControllerRequestContentField;
};
export declare const ControllerResponseData: {
    encode(message: ControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResponse;
    fromJSON(object: any): ControllerResponse;
    toJSON(message: ControllerResponse): unknown;
    fromPartial(object: DeepPartial<ControllerResponse>): ControllerResponse;
};
export declare const ControllerResponseFieldData: {
    encode(message: ControllerResponseField, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResponseField;
    fromJSON(object: any): ControllerResponseField;
    toJSON(message: ControllerResponseField): unknown;
    fromPartial(object: DeepPartial<ControllerResponseField>): ControllerResponseField;
};
export declare const ControllerResourceConditionData: {
    encode(message: ControllerResourceCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceCondition;
    fromJSON(object: any): ControllerResourceCondition;
    toJSON(message: ControllerResourceCondition): unknown;
    fromPartial(object: DeepPartial<ControllerResourceCondition>): ControllerResourceCondition;
};
export declare const ControllerResourceConditionOperandData: {
    encode(message: ControllerResourceConditionOperand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceConditionOperand;
    fromJSON(object: any): ControllerResourceConditionOperand;
    toJSON(message: ControllerResourceConditionOperand): unknown;
    fromPartial(object: DeepPartial<ControllerResourceConditionOperand>): ControllerResourceConditionOperand;
};
export declare const ControllerResourceConditionExprData: {
    encode(message: ControllerResourceConditionExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceConditionExpr;
    fromJSON(object: any): ControllerResourceConditionExpr;
    toJSON(message: ControllerResourceConditionExpr): unknown;
    fromPartial(object: DeepPartial<ControllerResourceConditionExpr>): ControllerResourceConditionExpr;
};
export declare const ControllerResourceUpdateData: {
    encode(message: ControllerResourceUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceUpdate;
    fromJSON(object: any): ControllerResourceUpdate;
    toJSON(message: ControllerResourceUpdate): unknown;
    fromPartial(object: DeepPartial<ControllerResourceUpdate>): ControllerResourceUpdate;
};
export declare const ControllerResourceUpdateFieldData: {
    encode(message: ControllerResourceUpdateField, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceUpdateField;
    fromJSON(object: any): ControllerResourceUpdateField;
    toJSON(message: ControllerResourceUpdateField): unknown;
    fromPartial(object: DeepPartial<ControllerResourceUpdateField>): ControllerResourceUpdateField;
};
export declare const ControllerAuthenticationData: {
    encode(message: ControllerAuthentication, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerAuthentication;
    fromJSON(object: any): ControllerAuthentication;
    toJSON(message: ControllerAuthentication): unknown;
    fromPartial(object: DeepPartial<ControllerAuthentication>): ControllerAuthentication;
};
export declare const ControllerAuthorizationData: {
    encode(message: ControllerAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerAuthorization;
    fromJSON(object: any): ControllerAuthorization;
    toJSON(message: ControllerAuthorization): unknown;
    fromPartial(object: DeepPartial<ControllerAuthorization>): ControllerAuthorization;
};
export declare const TableData: {
    encode(message: Table, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Table;
    fromJSON(object: any): Table;
    toJSON(message: Table): unknown;
    fromPartial(object: DeepPartial<Table>): Table;
};
export declare const TableColumnData: {
    encode(message: TableColumn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumn;
    fromJSON(object: any): TableColumn;
    toJSON(message: TableColumn): unknown;
    fromPartial(object: DeepPartial<TableColumn>): TableColumn;
};
export declare const TableColumnColumnTypeData: {
    encode(message: TableColumnColumnType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnColumnType;
    fromJSON(object: any): TableColumnColumnType;
    toJSON(message: TableColumnColumnType): unknown;
    fromPartial(object: DeepPartial<TableColumnColumnType>): TableColumnColumnType;
};
export declare const TableColumnStringTypeData: {
    encode(message: TableColumnStringType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnStringType;
    fromJSON(object: any): TableColumnStringType;
    toJSON(message: TableColumnStringType): unknown;
    fromPartial(object: DeepPartial<TableColumnStringType>): TableColumnStringType;
};
export declare const TableColumnStringTypeConditionData: {
    encode(message: TableColumnStringTypeCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnStringTypeCondition;
    fromJSON(object: any): TableColumnStringTypeCondition;
    toJSON(message: TableColumnStringTypeCondition): unknown;
    fromPartial(object: DeepPartial<TableColumnStringTypeCondition>): TableColumnStringTypeCondition;
};
export declare const TableColumnIntegerTypeData: {
    encode(message: TableColumnIntegerType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnIntegerType;
    fromJSON(object: any): TableColumnIntegerType;
    toJSON(message: TableColumnIntegerType): unknown;
    fromPartial(object: DeepPartial<TableColumnIntegerType>): TableColumnIntegerType;
};
export declare const TableColumnIntegerTypeConditionData: {
    encode(message: TableColumnIntegerTypeCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnIntegerTypeCondition;
    fromJSON(object: any): TableColumnIntegerTypeCondition;
    toJSON(message: TableColumnIntegerTypeCondition): unknown;
    fromPartial(object: DeepPartial<TableColumnIntegerTypeCondition>): TableColumnIntegerTypeCondition;
};
export declare const TableColumnFloatTypeData: {
    encode(message: TableColumnFloatType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnFloatType;
    fromJSON(object: any): TableColumnFloatType;
    toJSON(message: TableColumnFloatType): unknown;
    fromPartial(object: DeepPartial<TableColumnFloatType>): TableColumnFloatType;
};
export declare const TableColumnFloatTypeConditionData: {
    encode(message: TableColumnFloatTypeCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnFloatTypeCondition;
    fromJSON(object: any): TableColumnFloatTypeCondition;
    toJSON(message: TableColumnFloatTypeCondition): unknown;
    fromPartial(object: DeepPartial<TableColumnFloatTypeCondition>): TableColumnFloatTypeCondition;
};
export declare const TableColumnBooleanTypeData: {
    encode(message: TableColumnBooleanType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnBooleanType;
    fromJSON(object: any): TableColumnBooleanType;
    toJSON(message: TableColumnBooleanType): unknown;
    fromPartial(object: DeepPartial<TableColumnBooleanType>): TableColumnBooleanType;
};
export declare const TableColumnDateTypeData: {
    encode(message: TableColumnDateType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnDateType;
    fromJSON(object: any): TableColumnDateType;
    toJSON(message: TableColumnDateType): unknown;
    fromPartial(object: DeepPartial<TableColumnDateType>): TableColumnDateType;
};
export declare const TableColumnFileTypeData: {
    encode(message: TableColumnFileType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnFileType;
    fromJSON(object: any): TableColumnFileType;
    toJSON(message: TableColumnFileType): unknown;
    fromPartial(object: DeepPartial<TableColumnFileType>): TableColumnFileType;
};
export declare const TableColumnFileTypeNumberOfFilesData: {
    encode(message: TableColumnFileTypeNumberOfFiles, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnFileTypeNumberOfFiles;
    fromJSON(object: any): TableColumnFileTypeNumberOfFiles;
    toJSON(message: TableColumnFileTypeNumberOfFiles): unknown;
    fromPartial(object: DeepPartial<TableColumnFileTypeNumberOfFiles>): TableColumnFileTypeNumberOfFiles;
};
export declare const TableColumnEnumTypeData: {
    encode(message: TableColumnEnumType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnEnumType;
    fromJSON(object: any): TableColumnEnumType;
    toJSON(message: TableColumnEnumType): unknown;
    fromPartial(object: DeepPartial<TableColumnEnumType>): TableColumnEnumType;
};
export declare const TableConstraintData: {
    encode(message: TableConstraint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraint;
    fromJSON(object: any): TableConstraint;
    toJSON(message: TableConstraint): unknown;
    fromPartial(object: DeepPartial<TableConstraint>): TableConstraint;
};
export declare const TableConstraintPrimaryKeyData: {
    encode(_: TableConstraintPrimaryKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraintPrimaryKey;
    fromJSON(_: any): TableConstraintPrimaryKey;
    toJSON(_: TableConstraintPrimaryKey): unknown;
    fromPartial(_: DeepPartial<TableConstraintPrimaryKey>): TableConstraintPrimaryKey;
};
export declare const TableConstraintForeignKeyData: {
    encode(message: TableConstraintForeignKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraintForeignKey;
    fromJSON(object: any): TableConstraintForeignKey;
    toJSON(message: TableConstraintForeignKey): unknown;
    fromPartial(object: DeepPartial<TableConstraintForeignKey>): TableConstraintForeignKey;
};
export declare const TableConstraintNotNullData: {
    encode(_: TableConstraintNotNull, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraintNotNull;
    fromJSON(_: any): TableConstraintNotNull;
    toJSON(_: TableConstraintNotNull): unknown;
    fromPartial(_: DeepPartial<TableConstraintNotNull>): TableConstraintNotNull;
};
export declare const TableConstraintUniqueData: {
    encode(_: TableConstraintUnique, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraintUnique;
    fromJSON(_: any): TableConstraintUnique;
    toJSON(_: TableConstraintUnique): unknown;
    fromPartial(_: DeepPartial<TableConstraintUnique>): TableConstraintUnique;
};
export declare const TableIndexData: {
    encode(message: TableIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableIndex;
    fromJSON(object: any): TableIndex;
    toJSON(message: TableIndex): unknown;
    fromPartial(object: DeepPartial<TableIndex>): TableIndex;
};
export declare const TableRelationData: {
    encode(message: TableRelation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelation;
    fromJSON(object: any): TableRelation;
    toJSON(message: TableRelation): unknown;
    fromPartial(object: DeepPartial<TableRelation>): TableRelation;
};
export declare const TableRelationRelationHasOneData: {
    encode(message: TableRelationRelationHasOne, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationHasOne;
    fromJSON(object: any): TableRelationRelationHasOne;
    toJSON(message: TableRelationRelationHasOne): unknown;
    fromPartial(object: DeepPartial<TableRelationRelationHasOne>): TableRelationRelationHasOne;
};
export declare const TableRelationRelationBelongToData: {
    encode(message: TableRelationRelationBelongTo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationBelongTo;
    fromJSON(object: any): TableRelationRelationBelongTo;
    toJSON(message: TableRelationRelationBelongTo): unknown;
    fromPartial(object: DeepPartial<TableRelationRelationBelongTo>): TableRelationRelationBelongTo;
};
export declare const TableRelationRelationManyOneData: {
    encode(message: TableRelationRelationManyOne, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationManyOne;
    fromJSON(object: any): TableRelationRelationManyOne;
    toJSON(message: TableRelationRelationManyOne): unknown;
    fromPartial(object: DeepPartial<TableRelationRelationManyOne>): TableRelationRelationManyOne;
};
export declare const TableRelationRelationOneManyData: {
    encode(message: TableRelationRelationOneMany, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationOneMany;
    fromJSON(object: any): TableRelationRelationOneMany;
    toJSON(message: TableRelationRelationOneMany): unknown;
    fromPartial(object: DeepPartial<TableRelationRelationOneMany>): TableRelationRelationOneMany;
};
export declare const TableRelationRelationManyManyData: {
    encode(message: TableRelationRelationManyMany, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationManyMany;
    fromJSON(object: any): TableRelationRelationManyMany;
    toJSON(message: TableRelationRelationManyMany): unknown;
    fromPartial(object: DeepPartial<TableRelationRelationManyMany>): TableRelationRelationManyMany;
};
export declare const MigrationData: {
    encode(message: Migration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Migration;
    fromJSON(object: any): Migration;
    toJSON(message: Migration): unknown;
    fromPartial(object: DeepPartial<Migration>): Migration;
};
export declare const MigrationChangeData: {
    encode(message: MigrationChange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MigrationChange;
    fromJSON(object: any): MigrationChange;
    toJSON(message: MigrationChange): unknown;
    fromPartial(object: DeepPartial<MigrationChange>): MigrationChange;
};
export declare const CreateTableData: {
    encode(message: CreateTable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTable;
    fromJSON(object: any): CreateTable;
    toJSON(message: CreateTable): unknown;
    fromPartial(object: DeepPartial<CreateTable>): CreateTable;
};
export declare const ChangeTableNameData: {
    encode(message: ChangeTableName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeTableName;
    fromJSON(object: any): ChangeTableName;
    toJSON(message: ChangeTableName): unknown;
    fromPartial(object: DeepPartial<ChangeTableName>): ChangeTableName;
};
export declare const ChangeTableCommentData: {
    encode(message: ChangeTableComment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeTableComment;
    fromJSON(object: any): ChangeTableComment;
    toJSON(message: ChangeTableComment): unknown;
    fromPartial(object: DeepPartial<ChangeTableComment>): ChangeTableComment;
};
export declare const CreateTableChangeData: {
    encode(message: CreateTableChange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTableChange;
    fromJSON(object: any): CreateTableChange;
    toJSON(message: CreateTableChange): unknown;
    fromPartial(object: DeepPartial<CreateTableChange>): CreateTableChange;
};
export declare const AddColumnData: {
    encode(message: AddColumn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddColumn;
    fromJSON(object: any): AddColumn;
    toJSON(message: AddColumn): unknown;
    fromPartial(object: DeepPartial<AddColumn>): AddColumn;
};
export declare const RenameColumnData: {
    encode(message: RenameColumn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RenameColumn;
    fromJSON(object: any): RenameColumn;
    toJSON(message: RenameColumn): unknown;
    fromPartial(object: DeepPartial<RenameColumn>): RenameColumn;
};
export declare const ChangeColumnCommentData: {
    encode(message: ChangeColumnComment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumnComment;
    fromJSON(object: any): ChangeColumnComment;
    toJSON(message: ChangeColumnComment): unknown;
    fromPartial(object: DeepPartial<ChangeColumnComment>): ChangeColumnComment;
};
export declare const ChangeColumnData: {
    encode(message: ChangeColumn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumn;
    fromJSON(object: any): ChangeColumn;
    toJSON(message: ChangeColumn): unknown;
    fromPartial(object: DeepPartial<ChangeColumn>): ChangeColumn;
};
export declare const ChangeColumnDefaultData: {
    encode(message: ChangeColumnDefault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumnDefault;
    fromJSON(object: any): ChangeColumnDefault;
    toJSON(message: ChangeColumnDefault): unknown;
    fromPartial(object: DeepPartial<ChangeColumnDefault>): ChangeColumnDefault;
};
export declare const ChangeColumnNullData: {
    encode(message: ChangeColumnNull, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumnNull;
    fromJSON(object: any): ChangeColumnNull;
    toJSON(message: ChangeColumnNull): unknown;
    fromPartial(object: DeepPartial<ChangeColumnNull>): ChangeColumnNull;
};
export declare const RemoveTableIndexData: {
    encode(message: RemoveTableIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTableIndex;
    fromJSON(object: any): RemoveTableIndex;
    toJSON(message: RemoveTableIndex): unknown;
    fromPartial(object: DeepPartial<RemoveTableIndex>): RemoveTableIndex;
};
export declare const RemoveTableRelationData: {
    encode(message: RemoveTableRelation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTableRelation;
    fromJSON(object: any): RemoveTableRelation;
    toJSON(message: RemoveTableRelation): unknown;
    fromPartial(object: DeepPartial<RemoveTableRelation>): RemoveTableRelation;
};
export declare const CreateTableRelationData: {
    encode(message: CreateTableRelation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTableRelation;
    fromJSON(object: any): CreateTableRelation;
    toJSON(message: CreateTableRelation): unknown;
    fromPartial(object: DeepPartial<CreateTableRelation>): CreateTableRelation;
};
export declare const RemoveColumnData: {
    encode(message: RemoveColumn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveColumn;
    fromJSON(object: any): RemoveColumn;
    toJSON(message: RemoveColumn): unknown;
    fromPartial(object: DeepPartial<RemoveColumn>): RemoveColumn;
};
export declare const DropTableData: {
    encode(message: DropTable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropTable;
    fromJSON(object: any): DropTable;
    toJSON(message: DropTable): unknown;
    fromPartial(object: DeepPartial<DropTable>): DropTable;
};
export declare const ChangeTableIndexData: {
    encode(message: ChangeTableIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeTableIndex;
    fromJSON(object: any): ChangeTableIndex;
    toJSON(message: ChangeTableIndex): unknown;
    fromPartial(object: DeepPartial<ChangeTableIndex>): ChangeTableIndex;
};
export declare const CreateTableIndexData: {
    encode(message: CreateTableIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTableIndex;
    fromJSON(object: any): CreateTableIndex;
    toJSON(message: CreateTableIndex): unknown;
    fromPartial(object: DeepPartial<CreateTableIndex>): CreateTableIndex;
};
export declare const AddUniqColumnData: {
    encode(message: AddUniqColumn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddUniqColumn;
    fromJSON(object: any): AddUniqColumn;
    toJSON(message: AddUniqColumn): unknown;
    fromPartial(object: DeepPartial<AddUniqColumn>): AddUniqColumn;
};
export declare const ChangeColumnUniqueData: {
    encode(message: ChangeColumnUnique, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumnUnique;
    fromJSON(object: any): ChangeColumnUnique;
    toJSON(message: ChangeColumnUnique): unknown;
    fromPartial(object: DeepPartial<ChangeColumnUnique>): ChangeColumnUnique;
};
export declare const CreateTableNextRecordData: {
    encode(message: CreateTableNextRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTableNextRecord;
    fromJSON(object: any): CreateTableNextRecord;
    toJSON(message: CreateTableNextRecord): unknown;
    fromPartial(object: DeepPartial<CreateTableNextRecord>): CreateTableNextRecord;
};
export declare const MigrationColumnDefinitionData: {
    encode(message: MigrationColumnDefinition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MigrationColumnDefinition;
    fromJSON(object: any): MigrationColumnDefinition;
    toJSON(message: MigrationColumnDefinition): unknown;
    fromPartial(object: DeepPartial<MigrationColumnDefinition>): MigrationColumnDefinition;
};
export declare const TableMetaDataMigrationData: {
    encode(message: TableMetaDataMigration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableMetaDataMigration;
    fromJSON(object: any): TableMetaDataMigration;
    toJSON(message: TableMetaDataMigration): unknown;
    fromPartial(object: DeepPartial<TableMetaDataMigration>): TableMetaDataMigration;
};
export declare const TableIndexMigrationData: {
    encode(message: TableIndexMigration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableIndexMigration;
    fromJSON(object: any): TableIndexMigration;
    toJSON(message: TableIndexMigration): unknown;
    fromPartial(object: DeepPartial<TableIndexMigration>): TableIndexMigration;
};
export declare const TableRelationMigrationData: {
    encode(message: TableRelationMigration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationMigration;
    fromJSON(object: any): TableRelationMigration;
    toJSON(message: TableRelationMigration): unknown;
    fromPartial(object: DeepPartial<TableRelationMigration>): TableRelationMigration;
};
export declare const GetBackendRequestData: {
    encode(message: GetBackendRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBackendRequest;
    fromJSON(object: any): GetBackendRequest;
    toJSON(message: GetBackendRequest): unknown;
    fromPartial(object: DeepPartial<GetBackendRequest>): GetBackendRequest;
};
export declare const GetBackendResponseData: {
    encode(message: GetBackendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBackendResponse;
    fromJSON(object: any): GetBackendResponse;
    toJSON(message: GetBackendResponse): unknown;
    fromPartial(object: DeepPartial<GetBackendResponse>): GetBackendResponse;
};
export declare const ListTablesRequestData: {
    encode(message: ListTablesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListTablesRequest;
    fromJSON(object: any): ListTablesRequest;
    toJSON(message: ListTablesRequest): unknown;
    fromPartial(object: DeepPartial<ListTablesRequest>): ListTablesRequest;
};
export declare const ListTablesResponseData: {
    encode(message: ListTablesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListTablesResponse;
    fromJSON(object: any): ListTablesResponse;
    toJSON(message: ListTablesResponse): unknown;
    fromPartial(object: DeepPartial<ListTablesResponse>): ListTablesResponse;
};
export declare const ListMigrationsRequestData: {
    encode(message: ListMigrationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMigrationsRequest;
    fromJSON(object: any): ListMigrationsRequest;
    toJSON(message: ListMigrationsRequest): unknown;
    fromPartial(object: DeepPartial<ListMigrationsRequest>): ListMigrationsRequest;
};
export declare const ListControllersRequestData: {
    encode(message: ListControllersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListControllersRequest;
    fromJSON(object: any): ListControllersRequest;
    toJSON(message: ListControllersRequest): unknown;
    fromPartial(object: DeepPartial<ListControllersRequest>): ListControllersRequest;
};
export declare const ListControllersResponseData: {
    encode(message: ListControllersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListControllersResponse;
    fromJSON(object: any): ListControllersResponse;
    toJSON(message: ListControllersResponse): unknown;
    fromPartial(object: DeepPartial<ListControllersResponse>): ListControllersResponse;
};
export declare const ListFeaturesRequestData: {
    encode(message: ListFeaturesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFeaturesRequest;
    fromJSON(object: any): ListFeaturesRequest;
    toJSON(message: ListFeaturesRequest): unknown;
    fromPartial(object: DeepPartial<ListFeaturesRequest>): ListFeaturesRequest;
};
export declare const ListFeaturesResponseData: {
    encode(message: ListFeaturesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFeaturesResponse;
    fromJSON(object: any): ListFeaturesResponse;
    toJSON(message: ListFeaturesResponse): unknown;
    fromPartial(object: DeepPartial<ListFeaturesResponse>): ListFeaturesResponse;
};
export declare const ListAuthorizationsRequestData: {
    encode(message: ListAuthorizationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthorizationsRequest;
    fromJSON(object: any): ListAuthorizationsRequest;
    toJSON(message: ListAuthorizationsRequest): unknown;
    fromPartial(object: DeepPartial<ListAuthorizationsRequest>): ListAuthorizationsRequest;
};
export declare const ListAuthorizationsResponseData: {
    encode(message: ListAuthorizationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthorizationsResponse;
    fromJSON(object: any): ListAuthorizationsResponse;
    toJSON(message: ListAuthorizationsResponse): unknown;
    fromPartial(object: DeepPartial<ListAuthorizationsResponse>): ListAuthorizationsResponse;
};
export declare const ListLocalizationsRequestData: {
    encode(message: ListLocalizationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLocalizationsRequest;
    fromJSON(object: any): ListLocalizationsRequest;
    toJSON(message: ListLocalizationsRequest): unknown;
    fromPartial(object: DeepPartial<ListLocalizationsRequest>): ListLocalizationsRequest;
};
export declare const ListLocalizationsResponseData: {
    encode(message: ListLocalizationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLocalizationsResponse;
    fromJSON(object: any): ListLocalizationsResponse;
    toJSON(message: ListLocalizationsResponse): unknown;
    fromPartial(object: DeepPartial<ListLocalizationsResponse>): ListLocalizationsResponse;
};
export declare const ListMigrationsResponseData: {
    encode(message: ListMigrationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMigrationsResponse;
    fromJSON(object: any): ListMigrationsResponse;
    toJSON(message: ListMigrationsResponse): unknown;
    fromPartial(object: DeepPartial<ListMigrationsResponse>): ListMigrationsResponse;
};
export type CoreServiceDefinition = typeof CoreServiceDefinition;
export declare const CoreServiceDefinition: {
    readonly name: "CoreService";
    readonly fullName: "schema.v1.CoreService";
    readonly methods: {
        readonly listTables: {
            readonly name: "ListTables";
            readonly requestType: {
                encode(message: ListTablesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListTablesRequest;
                fromJSON(object: any): ListTablesRequest;
                toJSON(message: ListTablesRequest): unknown;
                fromPartial(object: DeepPartial<ListTablesRequest>): ListTablesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListTablesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListTablesResponse;
                fromJSON(object: any): ListTablesResponse;
                toJSON(message: ListTablesResponse): unknown;
                fromPartial(object: DeepPartial<ListTablesResponse>): ListTablesResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly listControllers: {
            readonly name: "ListControllers";
            readonly requestType: {
                encode(message: ListControllersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListControllersRequest;
                fromJSON(object: any): ListControllersRequest;
                toJSON(message: ListControllersRequest): unknown;
                fromPartial(object: DeepPartial<ListControllersRequest>): ListControllersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListControllersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListControllersResponse;
                fromJSON(object: any): ListControllersResponse;
                toJSON(message: ListControllersResponse): unknown;
                fromPartial(object: DeepPartial<ListControllersResponse>): ListControllersResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly listFeatures: {
            readonly name: "ListFeatures";
            readonly requestType: {
                encode(message: ListFeaturesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListFeaturesRequest;
                fromJSON(object: any): ListFeaturesRequest;
                toJSON(message: ListFeaturesRequest): unknown;
                fromPartial(object: DeepPartial<ListFeaturesRequest>): ListFeaturesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListFeaturesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListFeaturesResponse;
                fromJSON(object: any): ListFeaturesResponse;
                toJSON(message: ListFeaturesResponse): unknown;
                fromPartial(object: DeepPartial<ListFeaturesResponse>): ListFeaturesResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly listAuthorizations: {
            readonly name: "ListAuthorizations";
            readonly requestType: {
                encode(message: ListAuthorizationsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthorizationsRequest;
                fromJSON(object: any): ListAuthorizationsRequest;
                toJSON(message: ListAuthorizationsRequest): unknown;
                fromPartial(object: DeepPartial<ListAuthorizationsRequest>): ListAuthorizationsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListAuthorizationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthorizationsResponse;
                fromJSON(object: any): ListAuthorizationsResponse;
                toJSON(message: ListAuthorizationsResponse): unknown;
                fromPartial(object: DeepPartial<ListAuthorizationsResponse>): ListAuthorizationsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly listLocalizations: {
            readonly name: "ListLocalizations";
            readonly requestType: {
                encode(message: ListLocalizationsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListLocalizationsRequest;
                fromJSON(object: any): ListLocalizationsRequest;
                toJSON(message: ListLocalizationsRequest): unknown;
                fromPartial(object: DeepPartial<ListLocalizationsRequest>): ListLocalizationsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListLocalizationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListLocalizationsResponse;
                fromJSON(object: any): ListLocalizationsResponse;
                toJSON(message: ListLocalizationsResponse): unknown;
                fromPartial(object: DeepPartial<ListLocalizationsResponse>): ListLocalizationsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly listMigrations: {
            readonly name: "ListMigrations";
            readonly requestType: {
                encode(message: ListMigrationsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMigrationsRequest;
                fromJSON(object: any): ListMigrationsRequest;
                toJSON(message: ListMigrationsRequest): unknown;
                fromPartial(object: DeepPartial<ListMigrationsRequest>): ListMigrationsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMigrationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMigrationsResponse;
                fromJSON(object: any): ListMigrationsResponse;
                toJSON(message: ListMigrationsResponse): unknown;
                fromPartial(object: DeepPartial<ListMigrationsResponse>): ListMigrationsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getBackend: {
            readonly name: "GetBackend";
            readonly requestType: {
                encode(message: GetBackendRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetBackendRequest;
                fromJSON(object: any): GetBackendRequest;
                toJSON(message: GetBackendRequest): unknown;
                fromPartial(object: DeepPartial<GetBackendRequest>): GetBackendRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetBackendResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetBackendResponse;
                fromJSON(object: any): GetBackendResponse;
                toJSON(message: GetBackendResponse): unknown;
                fromPartial(object: DeepPartial<GetBackendResponse>): GetBackendResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface CoreServiceImplementation<CallContextExt = {}> {
    listTables(request: ListTablesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListTablesResponse>>;
    listControllers(request: ListControllersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListControllersResponse>>;
    listFeatures(request: ListFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFeaturesResponse>>;
    listAuthorizations(request: ListAuthorizationsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAuthorizationsResponse>>;
    listLocalizations(request: ListLocalizationsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListLocalizationsResponse>>;
    listMigrations(request: ListMigrationsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMigrationsResponse>>;
    getBackend(request: GetBackendRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetBackendResponse>>;
}
export interface CoreServiceClient<CallOptionsExt = {}> {
    listTables(request: DeepPartial<ListTablesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListTablesResponse>;
    listControllers(request: DeepPartial<ListControllersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListControllersResponse>;
    listFeatures(request: DeepPartial<ListFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFeaturesResponse>;
    listAuthorizations(request: DeepPartial<ListAuthorizationsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAuthorizationsResponse>;
    listLocalizations(request: DeepPartial<ListLocalizationsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListLocalizationsResponse>;
    listMigrations(request: DeepPartial<ListMigrationsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMigrationsResponse>;
    getBackend(request: DeepPartial<GetBackendRequest>, options?: CallOptions & CallOptionsExt): Promise<GetBackendResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
