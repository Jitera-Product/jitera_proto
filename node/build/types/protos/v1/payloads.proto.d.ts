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
    dataType: DataType | undefined;
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
export declare enum FeatureEmailLoginUnlockStrategy {
    TIME = 0,
    EMAIL = 1,
    BOTH = 2,
    UNRECOGNIZED = -1
}
export declare function featureEmailLoginUnlockStrategyFromJSON(object: any): FeatureEmailLoginUnlockStrategy;
export declare function featureEmailLoginUnlockStrategyToJSON(object: FeatureEmailLoginUnlockStrategy): string;
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
    authentication: ControllerAuthentication | undefined;
    authorization: ControllerAuthorization | undefined;
    responses: ControllerResponse | undefined;
    params: ControllerRequestContent | undefined;
    writable: boolean;
}
export interface ControllerEndpointList {
    queries: ControllerRequestContent | undefined;
    conditions: ControllerResourceCondition | undefined;
}
export interface ControllerEndpointGet {
    queries: ControllerRequestContent | undefined;
    conditions: ControllerResourceCondition | undefined;
}
export interface ControllerEndpointCreate {
    body: ControllerRequestContent | undefined;
    conditions: ControllerResourceCondition | undefined;
    resources: ControllerResourceUpdate | undefined;
}
export interface ControllerEndpointUpdate {
    body: ControllerRequestContent | undefined;
    conditions: ControllerResourceCondition | undefined;
    resources: ControllerResourceUpdate | undefined;
}
export interface ControllerEndpointDelete {
    body: ControllerRequestContent | undefined;
    conditions: ControllerResourceCondition | undefined;
}
export interface ControllerRequestContent {
    fields: ControllerRequestContentField[];
}
export interface ControllerRequestContentField {
    name: string;
    dataType: DataType | undefined;
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
    dataType: DataType | undefined;
    children: ControllerResponseField[];
}
export interface ControllerResourceCondition {
    operands: ControllerResourceConditionOperand[];
    operators: Operator[];
}
export declare enum ControllerResourceConditionSystem {
    RESOURCE_OWNER = 0,
    UNRECOGNIZED = -1
}
export declare function controllerResourceConditionSystemFromJSON(object: any): ControllerResourceConditionSystem;
export declare function controllerResourceConditionSystemToJSON(object: ControllerResourceConditionSystem): string;
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
    dataType: DataType | undefined;
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
    dataType: DataType | undefined;
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
export declare enum TableColumnDateTypeCondition {
    IN_PAST = 0,
    IN_FUTURE = 1,
    UNRECOGNIZED = -1
}
export declare function tableColumnDateTypeConditionFromJSON(object: any): TableColumnDateTypeCondition;
export declare function tableColumnDateTypeConditionToJSON(object: TableColumnDateTypeCondition): string;
export interface TableColumnFileType {
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
    changeTo: CreateTableChange | undefined;
    prevUuid: string;
    nextUuid: string;
    nextRecord: CreateTableNextRecord | undefined;
}
export interface ChangeTableName {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: CreateTableNextRecord | undefined;
    nextRecord: CreateTableNextRecord | undefined;
}
export interface ChangeTableComment {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: CreateTableNextRecord | undefined;
    nextRecord: CreateTableNextRecord | undefined;
}
export interface CreateTableChange {
    name: string;
    uuid: string;
    comment?: string | undefined;
}
export interface AddColumn {
    key: string;
    changeTo: MigrationColumnDefinition | undefined;
    prevUuid: string;
    nextUuid: string;
    nextRecord: MigrationColumnDefinition | undefined;
}
export interface RenameColumn {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
    nextRecord: MigrationColumnDefinition | undefined;
}
export interface ChangeColumnComment {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
    nextRecord: MigrationColumnDefinition | undefined;
}
export interface ChangeColumn {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
    nextRecord: MigrationColumnDefinition | undefined;
}
export interface ChangeColumnDefault {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
    nextRecord: MigrationColumnDefinition | undefined;
}
export interface ChangeColumnNull {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
    nextRecord: MigrationColumnDefinition | undefined;
}
export interface RemoveTableIndex {
    key: string;
    changeFrom: TableIndexMigration | undefined;
    prevUuid: string;
    nextUuid: string;
    prevRecord: TableIndexMigration | undefined;
}
export interface RemoveTableRelation {
    key: string;
    changeFrom: TableRelationMigration | undefined;
    prevUuid: string;
    nextUuid: string;
    prevRecord: TableIndexMigration | undefined;
}
export interface CreateTableRelation {
    key: string;
    changeTo: TableRelationMigration | undefined;
    prevUuid: string;
    nextUuid: string;
    nextRecord: TableRelationMigration | undefined;
}
export interface RemoveColumn {
    key: string;
    changeFrom: MigrationColumnDefinition | undefined;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
}
export interface DropTable {
    key: string;
    changeFrom: CreateTableNextRecord | undefined;
    prevUuid: string;
    nextUuid: string;
    prevRecord: CreateTableNextRecord | undefined;
}
export interface ChangeTableIndex {
    key: string;
    changeFrom: string;
    changeTo: string;
    prevUuid: string;
    nextUuid: string;
    prevRecord: TableIndexMigration | undefined;
    nextRecord: TableIndexMigration | undefined;
}
export interface CreateTableIndex {
    key: string;
    changeTo: TableIndexMigration | undefined;
    nextUuid: string;
    nextRecord: TableIndexMigration | undefined;
}
export interface AddUniqColumn {
    nextRecord: MigrationColumnDefinition | undefined;
}
export interface ChangeColumnUnique {
    key: string;
    changeFrom: boolean;
    changeTo: boolean;
    prevUuid: string;
    nextUuid: string;
    prevRecord: MigrationColumnDefinition | undefined;
    nextRecord: MigrationColumnDefinition | undefined;
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
    tableDefinition: CreateTableChange | undefined;
    relatedTable: CreateTableChange | undefined;
}
export interface GetBackendRequest {
    projectId: number;
}
export interface GetBackendResponse {
    backend: Backend | undefined;
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
export declare const Project: {
    encode(message: Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Project;
    fromJSON(object: any): Project;
    toJSON(message: Project): unknown;
    create(base?: DeepPartial<Project>): Project;
    fromPartial(object: DeepPartial<Project>): Project;
};
export declare const ProjectExport: {
    encode(message: ProjectExport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectExport;
    fromJSON(object: any): ProjectExport;
    toJSON(message: ProjectExport): unknown;
    create(base?: DeepPartial<ProjectExport>): ProjectExport;
    fromPartial(object: DeepPartial<ProjectExport>): ProjectExport;
};
export declare const ProjectPreview: {
    encode(message: ProjectPreview, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPreview;
    fromJSON(object: any): ProjectPreview;
    toJSON(message: ProjectPreview): unknown;
    create(base?: DeepPartial<ProjectPreview>): ProjectPreview;
    fromPartial(object: DeepPartial<ProjectPreview>): ProjectPreview;
};
export declare const Infra: {
    encode(message: Infra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Infra;
    fromJSON(object: any): Infra;
    toJSON(message: Infra): unknown;
    create(base?: DeepPartial<Infra>): Infra;
    fromPartial(object: DeepPartial<Infra>): Infra;
};
export declare const Backend: {
    encode(message: Backend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Backend;
    fromJSON(object: any): Backend;
    toJSON(message: Backend): unknown;
    create(base?: DeepPartial<Backend>): Backend;
    fromPartial(object: DeepPartial<Backend>): Backend;
};
export declare const Localization: {
    encode(message: Localization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Localization;
    fromJSON(object: any): Localization;
    toJSON(message: Localization): unknown;
    create(base?: DeepPartial<Localization>): Localization;
    fromPartial(object: DeepPartial<Localization>): Localization;
};
export declare const LocalizationNamespace: {
    encode(message: LocalizationNamespace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LocalizationNamespace;
    fromJSON(object: any): LocalizationNamespace;
    toJSON(message: LocalizationNamespace): unknown;
    create(base?: DeepPartial<LocalizationNamespace>): LocalizationNamespace;
    fromPartial(object: DeepPartial<LocalizationNamespace>): LocalizationNamespace;
};
export declare const LocalizationTranslate: {
    encode(message: LocalizationTranslate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LocalizationTranslate;
    fromJSON(object: any): LocalizationTranslate;
    toJSON(message: LocalizationTranslate): unknown;
    create(base?: DeepPartial<LocalizationTranslate>): LocalizationTranslate;
    fromPartial(object: DeepPartial<LocalizationTranslate>): LocalizationTranslate;
};
export declare const DataType: {
    encode(message: DataType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataType;
    fromJSON(object: any): DataType;
    toJSON(message: DataType): unknown;
    create(base?: DeepPartial<DataType>): DataType;
    fromPartial(object: DeepPartial<DataType>): DataType;
};
export declare const Authorization: {
    encode(message: Authorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Authorization;
    fromJSON(object: any): Authorization;
    toJSON(message: Authorization): unknown;
    create(base?: DeepPartial<Authorization>): Authorization;
    fromPartial(object: DeepPartial<Authorization>): Authorization;
};
export declare const AuthorizationPolicy: {
    encode(message: AuthorizationPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicy;
    fromJSON(object: any): AuthorizationPolicy;
    toJSON(message: AuthorizationPolicy): unknown;
    create(base?: DeepPartial<AuthorizationPolicy>): AuthorizationPolicy;
    fromPartial(object: DeepPartial<AuthorizationPolicy>): AuthorizationPolicy;
};
export declare const AuthorizationPolicyRoleBinding: {
    encode(message: AuthorizationPolicyRoleBinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicyRoleBinding;
    fromJSON(object: any): AuthorizationPolicyRoleBinding;
    toJSON(message: AuthorizationPolicyRoleBinding): unknown;
    create(base?: DeepPartial<AuthorizationPolicyRoleBinding>): AuthorizationPolicyRoleBinding;
    fromPartial(object: DeepPartial<AuthorizationPolicyRoleBinding>): AuthorizationPolicyRoleBinding;
};
export declare const AuthorizationPolicyRule: {
    encode(message: AuthorizationPolicyRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicyRule;
    fromJSON(object: any): AuthorizationPolicyRule;
    toJSON(message: AuthorizationPolicyRule): unknown;
    create(base?: DeepPartial<AuthorizationPolicyRule>): AuthorizationPolicyRule;
    fromPartial(object: DeepPartial<AuthorizationPolicyRule>): AuthorizationPolicyRule;
};
export declare const AuthorizationPolicyRuleOperand: {
    encode(message: AuthorizationPolicyRuleOperand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicyRuleOperand;
    fromJSON(object: any): AuthorizationPolicyRuleOperand;
    toJSON(message: AuthorizationPolicyRuleOperand): unknown;
    create(base?: DeepPartial<AuthorizationPolicyRuleOperand>): AuthorizationPolicyRuleOperand;
    fromPartial(object: DeepPartial<AuthorizationPolicyRuleOperand>): AuthorizationPolicyRuleOperand;
};
export declare const AuthorizationPolicyRuleExpr: {
    encode(message: AuthorizationPolicyRuleExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationPolicyRuleExpr;
    fromJSON(object: any): AuthorizationPolicyRuleExpr;
    toJSON(message: AuthorizationPolicyRuleExpr): unknown;
    create(base?: DeepPartial<AuthorizationPolicyRuleExpr>): AuthorizationPolicyRuleExpr;
    fromPartial(object: DeepPartial<AuthorizationPolicyRuleExpr>): AuthorizationPolicyRuleExpr;
};
export declare const Feature: {
    encode(message: Feature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Feature;
    fromJSON(object: any): Feature;
    toJSON(message: Feature): unknown;
    create(base?: DeepPartial<Feature>): Feature;
    fromPartial(object: DeepPartial<Feature>): Feature;
};
export declare const FeatureEmailLogin: {
    encode(message: FeatureEmailLogin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureEmailLogin;
    fromJSON(object: any): FeatureEmailLogin;
    toJSON(message: FeatureEmailLogin): unknown;
    create(base?: DeepPartial<FeatureEmailLogin>): FeatureEmailLogin;
    fromPartial(object: DeepPartial<FeatureEmailLogin>): FeatureEmailLogin;
};
export declare const FeatureJPBankData: {
    encode(_: FeatureJPBankData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureJPBankData;
    fromJSON(_: any): FeatureJPBankData;
    toJSON(_: FeatureJPBankData): unknown;
    create(base?: DeepPartial<FeatureJPBankData>): FeatureJPBankData;
    fromPartial(_: DeepPartial<FeatureJPBankData>): FeatureJPBankData;
};
export declare const FeatureBasicAuth: {
    encode(message: FeatureBasicAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureBasicAuth;
    fromJSON(object: any): FeatureBasicAuth;
    toJSON(message: FeatureBasicAuth): unknown;
    create(base?: DeepPartial<FeatureBasicAuth>): FeatureBasicAuth;
    fromPartial(object: DeepPartial<FeatureBasicAuth>): FeatureBasicAuth;
};
export declare const FeatureTwilioLogin: {
    encode(message: FeatureTwilioLogin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureTwilioLogin;
    fromJSON(object: any): FeatureTwilioLogin;
    toJSON(message: FeatureTwilioLogin): unknown;
    create(base?: DeepPartial<FeatureTwilioLogin>): FeatureTwilioLogin;
    fromPartial(object: DeepPartial<FeatureTwilioLogin>): FeatureTwilioLogin;
};
export declare const FeatureRollbar: {
    encode(message: FeatureRollbar, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureRollbar;
    fromJSON(object: any): FeatureRollbar;
    toJSON(message: FeatureRollbar): unknown;
    create(base?: DeepPartial<FeatureRollbar>): FeatureRollbar;
    fromPartial(object: DeepPartial<FeatureRollbar>): FeatureRollbar;
};
export declare const FeatureDeepLink: {
    encode(message: FeatureDeepLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureDeepLink;
    fromJSON(object: any): FeatureDeepLink;
    toJSON(message: FeatureDeepLink): unknown;
    create(base?: DeepPartial<FeatureDeepLink>): FeatureDeepLink;
    fromPartial(object: DeepPartial<FeatureDeepLink>): FeatureDeepLink;
};
export declare const FeatureStripe: {
    encode(message: FeatureStripe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureStripe;
    fromJSON(object: any): FeatureStripe;
    toJSON(message: FeatureStripe): unknown;
    create(base?: DeepPartial<FeatureStripe>): FeatureStripe;
    fromPartial(object: DeepPartial<FeatureStripe>): FeatureStripe;
};
export declare const FeatureLineLogin: {
    encode(message: FeatureLineLogin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeatureLineLogin;
    fromJSON(object: any): FeatureLineLogin;
    toJSON(message: FeatureLineLogin): unknown;
    create(base?: DeepPartial<FeatureLineLogin>): FeatureLineLogin;
    fromPartial(object: DeepPartial<FeatureLineLogin>): FeatureLineLogin;
};
export declare const Controller: {
    encode(message: Controller, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Controller;
    fromJSON(object: any): Controller;
    toJSON(message: Controller): unknown;
    create(base?: DeepPartial<Controller>): Controller;
    fromPartial(object: DeepPartial<Controller>): Controller;
};
export declare const ControllerEndpoint: {
    encode(message: ControllerEndpoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpoint;
    fromJSON(object: any): ControllerEndpoint;
    toJSON(message: ControllerEndpoint): unknown;
    create(base?: DeepPartial<ControllerEndpoint>): ControllerEndpoint;
    fromPartial(object: DeepPartial<ControllerEndpoint>): ControllerEndpoint;
};
export declare const ControllerEndpointList: {
    encode(message: ControllerEndpointList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointList;
    fromJSON(object: any): ControllerEndpointList;
    toJSON(message: ControllerEndpointList): unknown;
    create(base?: DeepPartial<ControllerEndpointList>): ControllerEndpointList;
    fromPartial(object: DeepPartial<ControllerEndpointList>): ControllerEndpointList;
};
export declare const ControllerEndpointGet: {
    encode(message: ControllerEndpointGet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointGet;
    fromJSON(object: any): ControllerEndpointGet;
    toJSON(message: ControllerEndpointGet): unknown;
    create(base?: DeepPartial<ControllerEndpointGet>): ControllerEndpointGet;
    fromPartial(object: DeepPartial<ControllerEndpointGet>): ControllerEndpointGet;
};
export declare const ControllerEndpointCreate: {
    encode(message: ControllerEndpointCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointCreate;
    fromJSON(object: any): ControllerEndpointCreate;
    toJSON(message: ControllerEndpointCreate): unknown;
    create(base?: DeepPartial<ControllerEndpointCreate>): ControllerEndpointCreate;
    fromPartial(object: DeepPartial<ControllerEndpointCreate>): ControllerEndpointCreate;
};
export declare const ControllerEndpointUpdate: {
    encode(message: ControllerEndpointUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointUpdate;
    fromJSON(object: any): ControllerEndpointUpdate;
    toJSON(message: ControllerEndpointUpdate): unknown;
    create(base?: DeepPartial<ControllerEndpointUpdate>): ControllerEndpointUpdate;
    fromPartial(object: DeepPartial<ControllerEndpointUpdate>): ControllerEndpointUpdate;
};
export declare const ControllerEndpointDelete: {
    encode(message: ControllerEndpointDelete, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerEndpointDelete;
    fromJSON(object: any): ControllerEndpointDelete;
    toJSON(message: ControllerEndpointDelete): unknown;
    create(base?: DeepPartial<ControllerEndpointDelete>): ControllerEndpointDelete;
    fromPartial(object: DeepPartial<ControllerEndpointDelete>): ControllerEndpointDelete;
};
export declare const ControllerRequestContent: {
    encode(message: ControllerRequestContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerRequestContent;
    fromJSON(object: any): ControllerRequestContent;
    toJSON(message: ControllerRequestContent): unknown;
    create(base?: DeepPartial<ControllerRequestContent>): ControllerRequestContent;
    fromPartial(object: DeepPartial<ControllerRequestContent>): ControllerRequestContent;
};
export declare const ControllerRequestContentField: {
    encode(message: ControllerRequestContentField, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerRequestContentField;
    fromJSON(object: any): ControllerRequestContentField;
    toJSON(message: ControllerRequestContentField): unknown;
    create(base?: DeepPartial<ControllerRequestContentField>): ControllerRequestContentField;
    fromPartial(object: DeepPartial<ControllerRequestContentField>): ControllerRequestContentField;
};
export declare const ControllerResponse: {
    encode(message: ControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResponse;
    fromJSON(object: any): ControllerResponse;
    toJSON(message: ControllerResponse): unknown;
    create(base?: DeepPartial<ControllerResponse>): ControllerResponse;
    fromPartial(object: DeepPartial<ControllerResponse>): ControllerResponse;
};
export declare const ControllerResponseField: {
    encode(message: ControllerResponseField, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResponseField;
    fromJSON(object: any): ControllerResponseField;
    toJSON(message: ControllerResponseField): unknown;
    create(base?: DeepPartial<ControllerResponseField>): ControllerResponseField;
    fromPartial(object: DeepPartial<ControllerResponseField>): ControllerResponseField;
};
export declare const ControllerResourceCondition: {
    encode(message: ControllerResourceCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceCondition;
    fromJSON(object: any): ControllerResourceCondition;
    toJSON(message: ControllerResourceCondition): unknown;
    create(base?: DeepPartial<ControllerResourceCondition>): ControllerResourceCondition;
    fromPartial(object: DeepPartial<ControllerResourceCondition>): ControllerResourceCondition;
};
export declare const ControllerResourceConditionOperand: {
    encode(message: ControllerResourceConditionOperand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceConditionOperand;
    fromJSON(object: any): ControllerResourceConditionOperand;
    toJSON(message: ControllerResourceConditionOperand): unknown;
    create(base?: DeepPartial<ControllerResourceConditionOperand>): ControllerResourceConditionOperand;
    fromPartial(object: DeepPartial<ControllerResourceConditionOperand>): ControllerResourceConditionOperand;
};
export declare const ControllerResourceConditionExpr: {
    encode(message: ControllerResourceConditionExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceConditionExpr;
    fromJSON(object: any): ControllerResourceConditionExpr;
    toJSON(message: ControllerResourceConditionExpr): unknown;
    create(base?: DeepPartial<ControllerResourceConditionExpr>): ControllerResourceConditionExpr;
    fromPartial(object: DeepPartial<ControllerResourceConditionExpr>): ControllerResourceConditionExpr;
};
export declare const ControllerResourceUpdate: {
    encode(message: ControllerResourceUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceUpdate;
    fromJSON(object: any): ControllerResourceUpdate;
    toJSON(message: ControllerResourceUpdate): unknown;
    create(base?: DeepPartial<ControllerResourceUpdate>): ControllerResourceUpdate;
    fromPartial(object: DeepPartial<ControllerResourceUpdate>): ControllerResourceUpdate;
};
export declare const ControllerResourceUpdateField: {
    encode(message: ControllerResourceUpdateField, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerResourceUpdateField;
    fromJSON(object: any): ControllerResourceUpdateField;
    toJSON(message: ControllerResourceUpdateField): unknown;
    create(base?: DeepPartial<ControllerResourceUpdateField>): ControllerResourceUpdateField;
    fromPartial(object: DeepPartial<ControllerResourceUpdateField>): ControllerResourceUpdateField;
};
export declare const ControllerAuthentication: {
    encode(message: ControllerAuthentication, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerAuthentication;
    fromJSON(object: any): ControllerAuthentication;
    toJSON(message: ControllerAuthentication): unknown;
    create(base?: DeepPartial<ControllerAuthentication>): ControllerAuthentication;
    fromPartial(object: DeepPartial<ControllerAuthentication>): ControllerAuthentication;
};
export declare const ControllerAuthorization: {
    encode(message: ControllerAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerAuthorization;
    fromJSON(object: any): ControllerAuthorization;
    toJSON(message: ControllerAuthorization): unknown;
    create(base?: DeepPartial<ControllerAuthorization>): ControllerAuthorization;
    fromPartial(object: DeepPartial<ControllerAuthorization>): ControllerAuthorization;
};
export declare const Table: {
    encode(message: Table, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Table;
    fromJSON(object: any): Table;
    toJSON(message: Table): unknown;
    create(base?: DeepPartial<Table>): Table;
    fromPartial(object: DeepPartial<Table>): Table;
};
export declare const TableColumn: {
    encode(message: TableColumn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumn;
    fromJSON(object: any): TableColumn;
    toJSON(message: TableColumn): unknown;
    create(base?: DeepPartial<TableColumn>): TableColumn;
    fromPartial(object: DeepPartial<TableColumn>): TableColumn;
};
export declare const TableColumnColumnType: {
    encode(message: TableColumnColumnType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnColumnType;
    fromJSON(object: any): TableColumnColumnType;
    toJSON(message: TableColumnColumnType): unknown;
    create(base?: DeepPartial<TableColumnColumnType>): TableColumnColumnType;
    fromPartial(object: DeepPartial<TableColumnColumnType>): TableColumnColumnType;
};
export declare const TableColumnStringType: {
    encode(message: TableColumnStringType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnStringType;
    fromJSON(object: any): TableColumnStringType;
    toJSON(message: TableColumnStringType): unknown;
    create(base?: DeepPartial<TableColumnStringType>): TableColumnStringType;
    fromPartial(object: DeepPartial<TableColumnStringType>): TableColumnStringType;
};
export declare const TableColumnStringTypeCondition: {
    encode(message: TableColumnStringTypeCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnStringTypeCondition;
    fromJSON(object: any): TableColumnStringTypeCondition;
    toJSON(message: TableColumnStringTypeCondition): unknown;
    create(base?: DeepPartial<TableColumnStringTypeCondition>): TableColumnStringTypeCondition;
    fromPartial(object: DeepPartial<TableColumnStringTypeCondition>): TableColumnStringTypeCondition;
};
export declare const TableColumnIntegerType: {
    encode(message: TableColumnIntegerType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnIntegerType;
    fromJSON(object: any): TableColumnIntegerType;
    toJSON(message: TableColumnIntegerType): unknown;
    create(base?: DeepPartial<TableColumnIntegerType>): TableColumnIntegerType;
    fromPartial(object: DeepPartial<TableColumnIntegerType>): TableColumnIntegerType;
};
export declare const TableColumnIntegerTypeCondition: {
    encode(message: TableColumnIntegerTypeCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnIntegerTypeCondition;
    fromJSON(object: any): TableColumnIntegerTypeCondition;
    toJSON(message: TableColumnIntegerTypeCondition): unknown;
    create(base?: DeepPartial<TableColumnIntegerTypeCondition>): TableColumnIntegerTypeCondition;
    fromPartial(object: DeepPartial<TableColumnIntegerTypeCondition>): TableColumnIntegerTypeCondition;
};
export declare const TableColumnFloatType: {
    encode(message: TableColumnFloatType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnFloatType;
    fromJSON(object: any): TableColumnFloatType;
    toJSON(message: TableColumnFloatType): unknown;
    create(base?: DeepPartial<TableColumnFloatType>): TableColumnFloatType;
    fromPartial(object: DeepPartial<TableColumnFloatType>): TableColumnFloatType;
};
export declare const TableColumnFloatTypeCondition: {
    encode(message: TableColumnFloatTypeCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnFloatTypeCondition;
    fromJSON(object: any): TableColumnFloatTypeCondition;
    toJSON(message: TableColumnFloatTypeCondition): unknown;
    create(base?: DeepPartial<TableColumnFloatTypeCondition>): TableColumnFloatTypeCondition;
    fromPartial(object: DeepPartial<TableColumnFloatTypeCondition>): TableColumnFloatTypeCondition;
};
export declare const TableColumnBooleanType: {
    encode(message: TableColumnBooleanType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnBooleanType;
    fromJSON(object: any): TableColumnBooleanType;
    toJSON(message: TableColumnBooleanType): unknown;
    create(base?: DeepPartial<TableColumnBooleanType>): TableColumnBooleanType;
    fromPartial(object: DeepPartial<TableColumnBooleanType>): TableColumnBooleanType;
};
export declare const TableColumnDateType: {
    encode(message: TableColumnDateType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnDateType;
    fromJSON(object: any): TableColumnDateType;
    toJSON(message: TableColumnDateType): unknown;
    create(base?: DeepPartial<TableColumnDateType>): TableColumnDateType;
    fromPartial(object: DeepPartial<TableColumnDateType>): TableColumnDateType;
};
export declare const TableColumnFileType: {
    encode(message: TableColumnFileType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnFileType;
    fromJSON(object: any): TableColumnFileType;
    toJSON(message: TableColumnFileType): unknown;
    create(base?: DeepPartial<TableColumnFileType>): TableColumnFileType;
    fromPartial(object: DeepPartial<TableColumnFileType>): TableColumnFileType;
};
export declare const TableColumnFileTypeNumberOfFiles: {
    encode(message: TableColumnFileTypeNumberOfFiles, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnFileTypeNumberOfFiles;
    fromJSON(object: any): TableColumnFileTypeNumberOfFiles;
    toJSON(message: TableColumnFileTypeNumberOfFiles): unknown;
    create(base?: DeepPartial<TableColumnFileTypeNumberOfFiles>): TableColumnFileTypeNumberOfFiles;
    fromPartial(object: DeepPartial<TableColumnFileTypeNumberOfFiles>): TableColumnFileTypeNumberOfFiles;
};
export declare const TableColumnEnumType: {
    encode(message: TableColumnEnumType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableColumnEnumType;
    fromJSON(object: any): TableColumnEnumType;
    toJSON(message: TableColumnEnumType): unknown;
    create(base?: DeepPartial<TableColumnEnumType>): TableColumnEnumType;
    fromPartial(object: DeepPartial<TableColumnEnumType>): TableColumnEnumType;
};
export declare const TableConstraint: {
    encode(message: TableConstraint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraint;
    fromJSON(object: any): TableConstraint;
    toJSON(message: TableConstraint): unknown;
    create(base?: DeepPartial<TableConstraint>): TableConstraint;
    fromPartial(object: DeepPartial<TableConstraint>): TableConstraint;
};
export declare const TableConstraintPrimaryKey: {
    encode(_: TableConstraintPrimaryKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraintPrimaryKey;
    fromJSON(_: any): TableConstraintPrimaryKey;
    toJSON(_: TableConstraintPrimaryKey): unknown;
    create(base?: DeepPartial<TableConstraintPrimaryKey>): TableConstraintPrimaryKey;
    fromPartial(_: DeepPartial<TableConstraintPrimaryKey>): TableConstraintPrimaryKey;
};
export declare const TableConstraintForeignKey: {
    encode(message: TableConstraintForeignKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraintForeignKey;
    fromJSON(object: any): TableConstraintForeignKey;
    toJSON(message: TableConstraintForeignKey): unknown;
    create(base?: DeepPartial<TableConstraintForeignKey>): TableConstraintForeignKey;
    fromPartial(object: DeepPartial<TableConstraintForeignKey>): TableConstraintForeignKey;
};
export declare const TableConstraintNotNull: {
    encode(_: TableConstraintNotNull, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraintNotNull;
    fromJSON(_: any): TableConstraintNotNull;
    toJSON(_: TableConstraintNotNull): unknown;
    create(base?: DeepPartial<TableConstraintNotNull>): TableConstraintNotNull;
    fromPartial(_: DeepPartial<TableConstraintNotNull>): TableConstraintNotNull;
};
export declare const TableConstraintUnique: {
    encode(_: TableConstraintUnique, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableConstraintUnique;
    fromJSON(_: any): TableConstraintUnique;
    toJSON(_: TableConstraintUnique): unknown;
    create(base?: DeepPartial<TableConstraintUnique>): TableConstraintUnique;
    fromPartial(_: DeepPartial<TableConstraintUnique>): TableConstraintUnique;
};
export declare const TableIndex: {
    encode(message: TableIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableIndex;
    fromJSON(object: any): TableIndex;
    toJSON(message: TableIndex): unknown;
    create(base?: DeepPartial<TableIndex>): TableIndex;
    fromPartial(object: DeepPartial<TableIndex>): TableIndex;
};
export declare const TableRelation: {
    encode(message: TableRelation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelation;
    fromJSON(object: any): TableRelation;
    toJSON(message: TableRelation): unknown;
    create(base?: DeepPartial<TableRelation>): TableRelation;
    fromPartial(object: DeepPartial<TableRelation>): TableRelation;
};
export declare const TableRelationRelationHasOne: {
    encode(message: TableRelationRelationHasOne, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationHasOne;
    fromJSON(object: any): TableRelationRelationHasOne;
    toJSON(message: TableRelationRelationHasOne): unknown;
    create(base?: DeepPartial<TableRelationRelationHasOne>): TableRelationRelationHasOne;
    fromPartial(object: DeepPartial<TableRelationRelationHasOne>): TableRelationRelationHasOne;
};
export declare const TableRelationRelationBelongTo: {
    encode(message: TableRelationRelationBelongTo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationBelongTo;
    fromJSON(object: any): TableRelationRelationBelongTo;
    toJSON(message: TableRelationRelationBelongTo): unknown;
    create(base?: DeepPartial<TableRelationRelationBelongTo>): TableRelationRelationBelongTo;
    fromPartial(object: DeepPartial<TableRelationRelationBelongTo>): TableRelationRelationBelongTo;
};
export declare const TableRelationRelationManyOne: {
    encode(message: TableRelationRelationManyOne, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationManyOne;
    fromJSON(object: any): TableRelationRelationManyOne;
    toJSON(message: TableRelationRelationManyOne): unknown;
    create(base?: DeepPartial<TableRelationRelationManyOne>): TableRelationRelationManyOne;
    fromPartial(object: DeepPartial<TableRelationRelationManyOne>): TableRelationRelationManyOne;
};
export declare const TableRelationRelationOneMany: {
    encode(message: TableRelationRelationOneMany, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationOneMany;
    fromJSON(object: any): TableRelationRelationOneMany;
    toJSON(message: TableRelationRelationOneMany): unknown;
    create(base?: DeepPartial<TableRelationRelationOneMany>): TableRelationRelationOneMany;
    fromPartial(object: DeepPartial<TableRelationRelationOneMany>): TableRelationRelationOneMany;
};
export declare const TableRelationRelationManyMany: {
    encode(message: TableRelationRelationManyMany, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationRelationManyMany;
    fromJSON(object: any): TableRelationRelationManyMany;
    toJSON(message: TableRelationRelationManyMany): unknown;
    create(base?: DeepPartial<TableRelationRelationManyMany>): TableRelationRelationManyMany;
    fromPartial(object: DeepPartial<TableRelationRelationManyMany>): TableRelationRelationManyMany;
};
export declare const Migration: {
    encode(message: Migration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Migration;
    fromJSON(object: any): Migration;
    toJSON(message: Migration): unknown;
    create(base?: DeepPartial<Migration>): Migration;
    fromPartial(object: DeepPartial<Migration>): Migration;
};
export declare const MigrationChange: {
    encode(message: MigrationChange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MigrationChange;
    fromJSON(object: any): MigrationChange;
    toJSON(message: MigrationChange): unknown;
    create(base?: DeepPartial<MigrationChange>): MigrationChange;
    fromPartial(object: DeepPartial<MigrationChange>): MigrationChange;
};
export declare const CreateTable: {
    encode(message: CreateTable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTable;
    fromJSON(object: any): CreateTable;
    toJSON(message: CreateTable): unknown;
    create(base?: DeepPartial<CreateTable>): CreateTable;
    fromPartial(object: DeepPartial<CreateTable>): CreateTable;
};
export declare const ChangeTableName: {
    encode(message: ChangeTableName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeTableName;
    fromJSON(object: any): ChangeTableName;
    toJSON(message: ChangeTableName): unknown;
    create(base?: DeepPartial<ChangeTableName>): ChangeTableName;
    fromPartial(object: DeepPartial<ChangeTableName>): ChangeTableName;
};
export declare const ChangeTableComment: {
    encode(message: ChangeTableComment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeTableComment;
    fromJSON(object: any): ChangeTableComment;
    toJSON(message: ChangeTableComment): unknown;
    create(base?: DeepPartial<ChangeTableComment>): ChangeTableComment;
    fromPartial(object: DeepPartial<ChangeTableComment>): ChangeTableComment;
};
export declare const CreateTableChange: {
    encode(message: CreateTableChange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTableChange;
    fromJSON(object: any): CreateTableChange;
    toJSON(message: CreateTableChange): unknown;
    create(base?: DeepPartial<CreateTableChange>): CreateTableChange;
    fromPartial(object: DeepPartial<CreateTableChange>): CreateTableChange;
};
export declare const AddColumn: {
    encode(message: AddColumn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddColumn;
    fromJSON(object: any): AddColumn;
    toJSON(message: AddColumn): unknown;
    create(base?: DeepPartial<AddColumn>): AddColumn;
    fromPartial(object: DeepPartial<AddColumn>): AddColumn;
};
export declare const RenameColumn: {
    encode(message: RenameColumn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RenameColumn;
    fromJSON(object: any): RenameColumn;
    toJSON(message: RenameColumn): unknown;
    create(base?: DeepPartial<RenameColumn>): RenameColumn;
    fromPartial(object: DeepPartial<RenameColumn>): RenameColumn;
};
export declare const ChangeColumnComment: {
    encode(message: ChangeColumnComment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumnComment;
    fromJSON(object: any): ChangeColumnComment;
    toJSON(message: ChangeColumnComment): unknown;
    create(base?: DeepPartial<ChangeColumnComment>): ChangeColumnComment;
    fromPartial(object: DeepPartial<ChangeColumnComment>): ChangeColumnComment;
};
export declare const ChangeColumn: {
    encode(message: ChangeColumn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumn;
    fromJSON(object: any): ChangeColumn;
    toJSON(message: ChangeColumn): unknown;
    create(base?: DeepPartial<ChangeColumn>): ChangeColumn;
    fromPartial(object: DeepPartial<ChangeColumn>): ChangeColumn;
};
export declare const ChangeColumnDefault: {
    encode(message: ChangeColumnDefault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumnDefault;
    fromJSON(object: any): ChangeColumnDefault;
    toJSON(message: ChangeColumnDefault): unknown;
    create(base?: DeepPartial<ChangeColumnDefault>): ChangeColumnDefault;
    fromPartial(object: DeepPartial<ChangeColumnDefault>): ChangeColumnDefault;
};
export declare const ChangeColumnNull: {
    encode(message: ChangeColumnNull, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumnNull;
    fromJSON(object: any): ChangeColumnNull;
    toJSON(message: ChangeColumnNull): unknown;
    create(base?: DeepPartial<ChangeColumnNull>): ChangeColumnNull;
    fromPartial(object: DeepPartial<ChangeColumnNull>): ChangeColumnNull;
};
export declare const RemoveTableIndex: {
    encode(message: RemoveTableIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTableIndex;
    fromJSON(object: any): RemoveTableIndex;
    toJSON(message: RemoveTableIndex): unknown;
    create(base?: DeepPartial<RemoveTableIndex>): RemoveTableIndex;
    fromPartial(object: DeepPartial<RemoveTableIndex>): RemoveTableIndex;
};
export declare const RemoveTableRelation: {
    encode(message: RemoveTableRelation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTableRelation;
    fromJSON(object: any): RemoveTableRelation;
    toJSON(message: RemoveTableRelation): unknown;
    create(base?: DeepPartial<RemoveTableRelation>): RemoveTableRelation;
    fromPartial(object: DeepPartial<RemoveTableRelation>): RemoveTableRelation;
};
export declare const CreateTableRelation: {
    encode(message: CreateTableRelation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTableRelation;
    fromJSON(object: any): CreateTableRelation;
    toJSON(message: CreateTableRelation): unknown;
    create(base?: DeepPartial<CreateTableRelation>): CreateTableRelation;
    fromPartial(object: DeepPartial<CreateTableRelation>): CreateTableRelation;
};
export declare const RemoveColumn: {
    encode(message: RemoveColumn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveColumn;
    fromJSON(object: any): RemoveColumn;
    toJSON(message: RemoveColumn): unknown;
    create(base?: DeepPartial<RemoveColumn>): RemoveColumn;
    fromPartial(object: DeepPartial<RemoveColumn>): RemoveColumn;
};
export declare const DropTable: {
    encode(message: DropTable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropTable;
    fromJSON(object: any): DropTable;
    toJSON(message: DropTable): unknown;
    create(base?: DeepPartial<DropTable>): DropTable;
    fromPartial(object: DeepPartial<DropTable>): DropTable;
};
export declare const ChangeTableIndex: {
    encode(message: ChangeTableIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeTableIndex;
    fromJSON(object: any): ChangeTableIndex;
    toJSON(message: ChangeTableIndex): unknown;
    create(base?: DeepPartial<ChangeTableIndex>): ChangeTableIndex;
    fromPartial(object: DeepPartial<ChangeTableIndex>): ChangeTableIndex;
};
export declare const CreateTableIndex: {
    encode(message: CreateTableIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTableIndex;
    fromJSON(object: any): CreateTableIndex;
    toJSON(message: CreateTableIndex): unknown;
    create(base?: DeepPartial<CreateTableIndex>): CreateTableIndex;
    fromPartial(object: DeepPartial<CreateTableIndex>): CreateTableIndex;
};
export declare const AddUniqColumn: {
    encode(message: AddUniqColumn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddUniqColumn;
    fromJSON(object: any): AddUniqColumn;
    toJSON(message: AddUniqColumn): unknown;
    create(base?: DeepPartial<AddUniqColumn>): AddUniqColumn;
    fromPartial(object: DeepPartial<AddUniqColumn>): AddUniqColumn;
};
export declare const ChangeColumnUnique: {
    encode(message: ChangeColumnUnique, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeColumnUnique;
    fromJSON(object: any): ChangeColumnUnique;
    toJSON(message: ChangeColumnUnique): unknown;
    create(base?: DeepPartial<ChangeColumnUnique>): ChangeColumnUnique;
    fromPartial(object: DeepPartial<ChangeColumnUnique>): ChangeColumnUnique;
};
export declare const CreateTableNextRecord: {
    encode(message: CreateTableNextRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTableNextRecord;
    fromJSON(object: any): CreateTableNextRecord;
    toJSON(message: CreateTableNextRecord): unknown;
    create(base?: DeepPartial<CreateTableNextRecord>): CreateTableNextRecord;
    fromPartial(object: DeepPartial<CreateTableNextRecord>): CreateTableNextRecord;
};
export declare const MigrationColumnDefinition: {
    encode(message: MigrationColumnDefinition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MigrationColumnDefinition;
    fromJSON(object: any): MigrationColumnDefinition;
    toJSON(message: MigrationColumnDefinition): unknown;
    create(base?: DeepPartial<MigrationColumnDefinition>): MigrationColumnDefinition;
    fromPartial(object: DeepPartial<MigrationColumnDefinition>): MigrationColumnDefinition;
};
export declare const TableMetaDataMigration: {
    encode(message: TableMetaDataMigration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableMetaDataMigration;
    fromJSON(object: any): TableMetaDataMigration;
    toJSON(message: TableMetaDataMigration): unknown;
    create(base?: DeepPartial<TableMetaDataMigration>): TableMetaDataMigration;
    fromPartial(object: DeepPartial<TableMetaDataMigration>): TableMetaDataMigration;
};
export declare const TableIndexMigration: {
    encode(message: TableIndexMigration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableIndexMigration;
    fromJSON(object: any): TableIndexMigration;
    toJSON(message: TableIndexMigration): unknown;
    create(base?: DeepPartial<TableIndexMigration>): TableIndexMigration;
    fromPartial(object: DeepPartial<TableIndexMigration>): TableIndexMigration;
};
export declare const TableRelationMigration: {
    encode(message: TableRelationMigration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableRelationMigration;
    fromJSON(object: any): TableRelationMigration;
    toJSON(message: TableRelationMigration): unknown;
    create(base?: DeepPartial<TableRelationMigration>): TableRelationMigration;
    fromPartial(object: DeepPartial<TableRelationMigration>): TableRelationMigration;
};
export declare const GetBackendRequest: {
    encode(message: GetBackendRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBackendRequest;
    fromJSON(object: any): GetBackendRequest;
    toJSON(message: GetBackendRequest): unknown;
    create(base?: DeepPartial<GetBackendRequest>): GetBackendRequest;
    fromPartial(object: DeepPartial<GetBackendRequest>): GetBackendRequest;
};
export declare const GetBackendResponse: {
    encode(message: GetBackendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBackendResponse;
    fromJSON(object: any): GetBackendResponse;
    toJSON(message: GetBackendResponse): unknown;
    create(base?: DeepPartial<GetBackendResponse>): GetBackendResponse;
    fromPartial(object: DeepPartial<GetBackendResponse>): GetBackendResponse;
};
export declare const ListTablesRequest: {
    encode(message: ListTablesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListTablesRequest;
    fromJSON(object: any): ListTablesRequest;
    toJSON(message: ListTablesRequest): unknown;
    create(base?: DeepPartial<ListTablesRequest>): ListTablesRequest;
    fromPartial(object: DeepPartial<ListTablesRequest>): ListTablesRequest;
};
export declare const ListTablesResponse: {
    encode(message: ListTablesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListTablesResponse;
    fromJSON(object: any): ListTablesResponse;
    toJSON(message: ListTablesResponse): unknown;
    create(base?: DeepPartial<ListTablesResponse>): ListTablesResponse;
    fromPartial(object: DeepPartial<ListTablesResponse>): ListTablesResponse;
};
export declare const ListMigrationsRequest: {
    encode(message: ListMigrationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMigrationsRequest;
    fromJSON(object: any): ListMigrationsRequest;
    toJSON(message: ListMigrationsRequest): unknown;
    create(base?: DeepPartial<ListMigrationsRequest>): ListMigrationsRequest;
    fromPartial(object: DeepPartial<ListMigrationsRequest>): ListMigrationsRequest;
};
export declare const ListControllersRequest: {
    encode(message: ListControllersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListControllersRequest;
    fromJSON(object: any): ListControllersRequest;
    toJSON(message: ListControllersRequest): unknown;
    create(base?: DeepPartial<ListControllersRequest>): ListControllersRequest;
    fromPartial(object: DeepPartial<ListControllersRequest>): ListControllersRequest;
};
export declare const ListControllersResponse: {
    encode(message: ListControllersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListControllersResponse;
    fromJSON(object: any): ListControllersResponse;
    toJSON(message: ListControllersResponse): unknown;
    create(base?: DeepPartial<ListControllersResponse>): ListControllersResponse;
    fromPartial(object: DeepPartial<ListControllersResponse>): ListControllersResponse;
};
export declare const ListFeaturesRequest: {
    encode(message: ListFeaturesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFeaturesRequest;
    fromJSON(object: any): ListFeaturesRequest;
    toJSON(message: ListFeaturesRequest): unknown;
    create(base?: DeepPartial<ListFeaturesRequest>): ListFeaturesRequest;
    fromPartial(object: DeepPartial<ListFeaturesRequest>): ListFeaturesRequest;
};
export declare const ListFeaturesResponse: {
    encode(message: ListFeaturesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFeaturesResponse;
    fromJSON(object: any): ListFeaturesResponse;
    toJSON(message: ListFeaturesResponse): unknown;
    create(base?: DeepPartial<ListFeaturesResponse>): ListFeaturesResponse;
    fromPartial(object: DeepPartial<ListFeaturesResponse>): ListFeaturesResponse;
};
export declare const ListAuthorizationsRequest: {
    encode(message: ListAuthorizationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthorizationsRequest;
    fromJSON(object: any): ListAuthorizationsRequest;
    toJSON(message: ListAuthorizationsRequest): unknown;
    create(base?: DeepPartial<ListAuthorizationsRequest>): ListAuthorizationsRequest;
    fromPartial(object: DeepPartial<ListAuthorizationsRequest>): ListAuthorizationsRequest;
};
export declare const ListAuthorizationsResponse: {
    encode(message: ListAuthorizationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthorizationsResponse;
    fromJSON(object: any): ListAuthorizationsResponse;
    toJSON(message: ListAuthorizationsResponse): unknown;
    create(base?: DeepPartial<ListAuthorizationsResponse>): ListAuthorizationsResponse;
    fromPartial(object: DeepPartial<ListAuthorizationsResponse>): ListAuthorizationsResponse;
};
export declare const ListLocalizationsRequest: {
    encode(message: ListLocalizationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLocalizationsRequest;
    fromJSON(object: any): ListLocalizationsRequest;
    toJSON(message: ListLocalizationsRequest): unknown;
    create(base?: DeepPartial<ListLocalizationsRequest>): ListLocalizationsRequest;
    fromPartial(object: DeepPartial<ListLocalizationsRequest>): ListLocalizationsRequest;
};
export declare const ListLocalizationsResponse: {
    encode(message: ListLocalizationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLocalizationsResponse;
    fromJSON(object: any): ListLocalizationsResponse;
    toJSON(message: ListLocalizationsResponse): unknown;
    create(base?: DeepPartial<ListLocalizationsResponse>): ListLocalizationsResponse;
    fromPartial(object: DeepPartial<ListLocalizationsResponse>): ListLocalizationsResponse;
};
export declare const ListMigrationsResponse: {
    encode(message: ListMigrationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMigrationsResponse;
    fromJSON(object: any): ListMigrationsResponse;
    toJSON(message: ListMigrationsResponse): unknown;
    create(base?: DeepPartial<ListMigrationsResponse>): ListMigrationsResponse;
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
                create(base?: DeepPartial<ListTablesRequest>): ListTablesRequest;
                fromPartial(object: DeepPartial<ListTablesRequest>): ListTablesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListTablesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListTablesResponse;
                fromJSON(object: any): ListTablesResponse;
                toJSON(message: ListTablesResponse): unknown;
                create(base?: DeepPartial<ListTablesResponse>): ListTablesResponse;
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
                create(base?: DeepPartial<ListControllersRequest>): ListControllersRequest;
                fromPartial(object: DeepPartial<ListControllersRequest>): ListControllersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListControllersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListControllersResponse;
                fromJSON(object: any): ListControllersResponse;
                toJSON(message: ListControllersResponse): unknown;
                create(base?: DeepPartial<ListControllersResponse>): ListControllersResponse;
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
                create(base?: DeepPartial<ListFeaturesRequest>): ListFeaturesRequest;
                fromPartial(object: DeepPartial<ListFeaturesRequest>): ListFeaturesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListFeaturesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListFeaturesResponse;
                fromJSON(object: any): ListFeaturesResponse;
                toJSON(message: ListFeaturesResponse): unknown;
                create(base?: DeepPartial<ListFeaturesResponse>): ListFeaturesResponse;
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
                create(base?: DeepPartial<ListAuthorizationsRequest>): ListAuthorizationsRequest;
                fromPartial(object: DeepPartial<ListAuthorizationsRequest>): ListAuthorizationsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListAuthorizationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthorizationsResponse;
                fromJSON(object: any): ListAuthorizationsResponse;
                toJSON(message: ListAuthorizationsResponse): unknown;
                create(base?: DeepPartial<ListAuthorizationsResponse>): ListAuthorizationsResponse;
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
                create(base?: DeepPartial<ListLocalizationsRequest>): ListLocalizationsRequest;
                fromPartial(object: DeepPartial<ListLocalizationsRequest>): ListLocalizationsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListLocalizationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListLocalizationsResponse;
                fromJSON(object: any): ListLocalizationsResponse;
                toJSON(message: ListLocalizationsResponse): unknown;
                create(base?: DeepPartial<ListLocalizationsResponse>): ListLocalizationsResponse;
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
                create(base?: DeepPartial<ListMigrationsRequest>): ListMigrationsRequest;
                fromPartial(object: DeepPartial<ListMigrationsRequest>): ListMigrationsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMigrationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMigrationsResponse;
                fromJSON(object: any): ListMigrationsResponse;
                toJSON(message: ListMigrationsResponse): unknown;
                create(base?: DeepPartial<ListMigrationsResponse>): ListMigrationsResponse;
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
                create(base?: DeepPartial<GetBackendRequest>): GetBackendRequest;
                fromPartial(object: DeepPartial<GetBackendRequest>): GetBackendRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetBackendResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetBackendResponse;
                fromJSON(object: any): GetBackendResponse;
                toJSON(message: GetBackendResponse): unknown;
                create(base?: DeepPartial<GetBackendResponse>): GetBackendResponse;
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
