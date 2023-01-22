import * as _m0 from "protobufjs/minimal";
export var DataTypeName;
(function (DataTypeName) {
    DataTypeName[DataTypeName["BOOLEAN"] = 0] = "BOOLEAN";
    DataTypeName[DataTypeName["INTEGER"] = 1] = "INTEGER";
    DataTypeName[DataTypeName["FLOAT"] = 2] = "FLOAT";
    DataTypeName[DataTypeName["STRING"] = 3] = "STRING";
    DataTypeName[DataTypeName["TEXT"] = 4] = "TEXT";
    DataTypeName[DataTypeName["DATE"] = 5] = "DATE";
    DataTypeName[DataTypeName["DATETIME"] = 6] = "DATETIME";
    DataTypeName[DataTypeName["ARRAY"] = 7] = "ARRAY";
    DataTypeName[DataTypeName["OBJECT"] = 8] = "OBJECT";
    DataTypeName[DataTypeName["PAGE_SIZE"] = 9] = "PAGE_SIZE";
    DataTypeName[DataTypeName["PAGE_NUMBER"] = 10] = "PAGE_NUMBER";
    DataTypeName[DataTypeName["FILE"] = 11] = "FILE";
    DataTypeName[DataTypeName["TABLE"] = 12] = "TABLE";
    DataTypeName[DataTypeName["ENUM"] = 13] = "ENUM";
    DataTypeName[DataTypeName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DataTypeName || (DataTypeName = {}));
export function dataTypeNameFromJSON(object) {
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
export function dataTypeNameToJSON(object) {
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
export var Operator;
(function (Operator) {
    Operator[Operator["WHERE"] = 0] = "WHERE";
    Operator[Operator["PAGINATION"] = 1] = "PAGINATION";
    Operator[Operator["ORDER"] = 2] = "ORDER";
    Operator[Operator["ORDER_ASC"] = 3] = "ORDER_ASC";
    Operator[Operator["ORDER_DESC"] = 4] = "ORDER_DESC";
    Operator[Operator["JOIN_AND"] = 5] = "JOIN_AND";
    Operator[Operator["JOIN_OR"] = 6] = "JOIN_OR";
    Operator[Operator["EQUAL"] = 7] = "EQUAL";
    Operator[Operator["START_WITH"] = 8] = "START_WITH";
    Operator[Operator["END_WITH"] = 9] = "END_WITH";
    Operator[Operator["CONTAIN"] = 10] = "CONTAIN";
    Operator[Operator["NOT_EQUAL"] = 11] = "NOT_EQUAL";
    Operator[Operator["GREATER_THAN"] = 12] = "GREATER_THAN";
    Operator[Operator["LESS_THAN"] = 13] = "LESS_THAN";
    Operator[Operator["GREATER_OR_EQUAL_THAN"] = 14] = "GREATER_OR_EQUAL_THAN";
    Operator[Operator["LESS_OR_EQUAL_THAN"] = 15] = "LESS_OR_EQUAL_THAN";
    Operator[Operator["WHERE_AND"] = 16] = "WHERE_AND";
    Operator[Operator["WHERE_OR"] = 17] = "WHERE_OR";
    Operator[Operator["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Operator || (Operator = {}));
export function operatorFromJSON(object) {
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
export function operatorToJSON(object) {
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
export var AuthorizationPolicyScope;
(function (AuthorizationPolicyScope) {
    AuthorizationPolicyScope[AuthorizationPolicyScope["ALL"] = 0] = "ALL";
    AuthorizationPolicyScope[AuthorizationPolicyScope["ASSOCIATED"] = 1] = "ASSOCIATED";
    AuthorizationPolicyScope[AuthorizationPolicyScope["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthorizationPolicyScope || (AuthorizationPolicyScope = {}));
export function authorizationPolicyScopeFromJSON(object) {
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
export function authorizationPolicyScopeToJSON(object) {
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
export var FeatureFeatureName;
(function (FeatureFeatureName) {
    FeatureFeatureName[FeatureFeatureName["EMAIL_LOGIN"] = 0] = "EMAIL_LOGIN";
    FeatureFeatureName[FeatureFeatureName["JP_BANKS_DATA"] = 1] = "JP_BANKS_DATA";
    FeatureFeatureName[FeatureFeatureName["BASIC_AUTH"] = 2] = "BASIC_AUTH";
    FeatureFeatureName[FeatureFeatureName["TWILIO_LOGIN"] = 3] = "TWILIO_LOGIN";
    FeatureFeatureName[FeatureFeatureName["ROLLBAR"] = 4] = "ROLLBAR";
    FeatureFeatureName[FeatureFeatureName["DEEP_LINK"] = 5] = "DEEP_LINK";
    FeatureFeatureName[FeatureFeatureName["STRIPE"] = 6] = "STRIPE";
    FeatureFeatureName[FeatureFeatureName["LINE_LOGIN"] = 7] = "LINE_LOGIN";
    FeatureFeatureName[FeatureFeatureName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureFeatureName || (FeatureFeatureName = {}));
export function featureFeatureNameFromJSON(object) {
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
export function featureFeatureNameToJSON(object) {
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
export var FeatureEnvironment;
(function (FeatureEnvironment) {
    FeatureEnvironment[FeatureEnvironment["DEVELOPMENT"] = 0] = "DEVELOPMENT";
    FeatureEnvironment[FeatureEnvironment["STAGING"] = 1] = "STAGING";
    FeatureEnvironment[FeatureEnvironment["PRODUCTION"] = 2] = "PRODUCTION";
    FeatureEnvironment[FeatureEnvironment["ALL"] = 3] = "ALL";
    FeatureEnvironment[FeatureEnvironment["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureEnvironment || (FeatureEnvironment = {}));
export function featureEnvironmentFromJSON(object) {
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
export function featureEnvironmentToJSON(object) {
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
export var FeatureEmailLoginUnlockStrategy;
(function (FeatureEmailLoginUnlockStrategy) {
    FeatureEmailLoginUnlockStrategy[FeatureEmailLoginUnlockStrategy["TIME"] = 0] = "TIME";
    FeatureEmailLoginUnlockStrategy[FeatureEmailLoginUnlockStrategy["EMAIL"] = 1] = "EMAIL";
    FeatureEmailLoginUnlockStrategy[FeatureEmailLoginUnlockStrategy["BOTH"] = 2] = "BOTH";
    FeatureEmailLoginUnlockStrategy[FeatureEmailLoginUnlockStrategy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureEmailLoginUnlockStrategy || (FeatureEmailLoginUnlockStrategy = {}));
export function featureEmailLoginUnlockStrategyFromJSON(object) {
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
export function featureEmailLoginUnlockStrategyToJSON(object) {
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
export var ControllerResourceConditionSystem;
(function (ControllerResourceConditionSystem) {
    ControllerResourceConditionSystem[ControllerResourceConditionSystem["RESOURCE_OWNER"] = 0] = "RESOURCE_OWNER";
    ControllerResourceConditionSystem[ControllerResourceConditionSystem["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ControllerResourceConditionSystem || (ControllerResourceConditionSystem = {}));
export function controllerResourceConditionSystemFromJSON(object) {
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
export function controllerResourceConditionSystemToJSON(object) {
    switch (object) {
        case ControllerResourceConditionSystem.RESOURCE_OWNER:
            return "RESOURCE_OWNER";
        case ControllerResourceConditionSystem.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var TableColumnOperator;
(function (TableColumnOperator) {
    TableColumnOperator[TableColumnOperator["GREATER_THAN"] = 0] = "GREATER_THAN";
    TableColumnOperator[TableColumnOperator["GREATER_THAN_OR_EQUAL"] = 1] = "GREATER_THAN_OR_EQUAL";
    TableColumnOperator[TableColumnOperator["EQUAL"] = 2] = "EQUAL";
    TableColumnOperator[TableColumnOperator["LESS_THAN"] = 3] = "LESS_THAN";
    TableColumnOperator[TableColumnOperator["LESS_THAN_OR_EQUAL"] = 4] = "LESS_THAN_OR_EQUAL";
    TableColumnOperator[TableColumnOperator["NOT_EQUAL"] = 5] = "NOT_EQUAL";
    TableColumnOperator[TableColumnOperator["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TableColumnOperator || (TableColumnOperator = {}));
export function tableColumnOperatorFromJSON(object) {
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
export function tableColumnOperatorToJSON(object) {
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
export var TableColumnStringTypeFormat;
(function (TableColumnStringTypeFormat) {
    TableColumnStringTypeFormat[TableColumnStringTypeFormat["EMAIL"] = 0] = "EMAIL";
    TableColumnStringTypeFormat[TableColumnStringTypeFormat["HIRAGANA"] = 1] = "HIRAGANA";
    TableColumnStringTypeFormat[TableColumnStringTypeFormat["KATAKANA"] = 2] = "KATAKANA";
    TableColumnStringTypeFormat[TableColumnStringTypeFormat["PHONE_NUMBER"] = 3] = "PHONE_NUMBER";
    TableColumnStringTypeFormat[TableColumnStringTypeFormat["URL"] = 4] = "URL";
    TableColumnStringTypeFormat[TableColumnStringTypeFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TableColumnStringTypeFormat || (TableColumnStringTypeFormat = {}));
export function tableColumnStringTypeFormatFromJSON(object) {
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
export function tableColumnStringTypeFormatToJSON(object) {
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
export var TableColumnDateTypeCondition;
(function (TableColumnDateTypeCondition) {
    TableColumnDateTypeCondition[TableColumnDateTypeCondition["IN_PAST"] = 0] = "IN_PAST";
    TableColumnDateTypeCondition[TableColumnDateTypeCondition["IN_FUTURE"] = 1] = "IN_FUTURE";
    TableColumnDateTypeCondition[TableColumnDateTypeCondition["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TableColumnDateTypeCondition || (TableColumnDateTypeCondition = {}));
export function tableColumnDateTypeConditionFromJSON(object) {
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
export function tableColumnDateTypeConditionToJSON(object) {
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
export var TableColumnFileTypeContentType;
(function (TableColumnFileTypeContentType) {
    TableColumnFileTypeContentType[TableColumnFileTypeContentType["IMAGE"] = 0] = "IMAGE";
    TableColumnFileTypeContentType[TableColumnFileTypeContentType["VIDEO"] = 1] = "VIDEO";
    TableColumnFileTypeContentType[TableColumnFileTypeContentType["AUDIO"] = 2] = "AUDIO";
    TableColumnFileTypeContentType[TableColumnFileTypeContentType["CSV"] = 3] = "CSV";
    TableColumnFileTypeContentType[TableColumnFileTypeContentType["PDF"] = 4] = "PDF";
    TableColumnFileTypeContentType[TableColumnFileTypeContentType["JSON"] = 5] = "JSON";
    TableColumnFileTypeContentType[TableColumnFileTypeContentType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TableColumnFileTypeContentType || (TableColumnFileTypeContentType = {}));
export function tableColumnFileTypeContentTypeFromJSON(object) {
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
export function tableColumnFileTypeContentTypeToJSON(object) {
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
function createBaseProject() {
    return {
        id: "",
        projectName: "",
        projectId: 0,
        infra: undefined,
        projectExport: undefined,
        projectPreview: undefined,
    };
}
export const Project = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            projectName: isSet(object.projectName) ? String(object.projectName) : "",
            projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
            infra: isSet(object.infra) ? Infra.fromJSON(object.infra) : undefined,
            projectExport: isSet(object.projectExport) ? ProjectExport.fromJSON(object.projectExport) : undefined,
            projectPreview: isSet(object.projectPreview) ? ProjectPreview.fromJSON(object.projectPreview) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return Project.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseProject();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.projectName = (_b = object.projectName) !== null && _b !== void 0 ? _b : "";
        message.projectId = (_c = object.projectId) !== null && _c !== void 0 ? _c : 0;
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
function createBaseProjectExport() {
    return { id: 0 };
}
export const ProjectExport = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create(base) {
        return ProjectExport.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseProjectExport();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseProjectPreview() {
    return { id: 0 };
}
export const ProjectPreview = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create(base) {
        return ProjectPreview.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseProjectPreview();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseInfra() {
    return { path: "" };
}
export const Infra = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { path: isSet(object.path) ? String(object.path) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    create(base) {
        return Infra.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInfra();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseBackend() {
    return { tables: [], controllers: [], features: [], authorizations: [], localizations: [], migrations: [] };
}
export const Backend = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tables) {
            Table.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.controllers) {
            Controller.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.features) {
            Feature.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.authorizations) {
            Authorization.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.localizations) {
            Localization.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.migrations) {
            Migration.encode(v, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            tables: Array.isArray(object === null || object === void 0 ? void 0 : object.tables) ? object.tables.map((e) => Table.fromJSON(e)) : [],
            controllers: Array.isArray(object === null || object === void 0 ? void 0 : object.controllers) ? object.controllers.map((e) => Controller.fromJSON(e)) : [],
            features: Array.isArray(object === null || object === void 0 ? void 0 : object.features) ? object.features.map((e) => Feature.fromJSON(e)) : [],
            authorizations: Array.isArray(object === null || object === void 0 ? void 0 : object.authorizations)
                ? object.authorizations.map((e) => Authorization.fromJSON(e))
                : [],
            localizations: Array.isArray(object === null || object === void 0 ? void 0 : object.localizations)
                ? object.localizations.map((e) => Localization.fromJSON(e))
                : [],
            migrations: Array.isArray(object === null || object === void 0 ? void 0 : object.migrations) ? object.migrations.map((e) => Migration.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tables) {
            obj.tables = message.tables.map((e) => e ? Table.toJSON(e) : undefined);
        }
        else {
            obj.tables = [];
        }
        if (message.controllers) {
            obj.controllers = message.controllers.map((e) => e ? Controller.toJSON(e) : undefined);
        }
        else {
            obj.controllers = [];
        }
        if (message.features) {
            obj.features = message.features.map((e) => e ? Feature.toJSON(e) : undefined);
        }
        else {
            obj.features = [];
        }
        if (message.authorizations) {
            obj.authorizations = message.authorizations.map((e) => e ? Authorization.toJSON(e) : undefined);
        }
        else {
            obj.authorizations = [];
        }
        if (message.localizations) {
            obj.localizations = message.localizations.map((e) => e ? Localization.toJSON(e) : undefined);
        }
        else {
            obj.localizations = [];
        }
        if (message.migrations) {
            obj.migrations = message.migrations.map((e) => e ? Migration.toJSON(e) : undefined);
        }
        else {
            obj.migrations = [];
        }
        return obj;
    },
    create(base) {
        return Backend.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseBackend();
        message.tables = ((_a = object.tables) === null || _a === void 0 ? void 0 : _a.map((e) => Table.fromPartial(e))) || [];
        message.controllers = ((_b = object.controllers) === null || _b === void 0 ? void 0 : _b.map((e) => Controller.fromPartial(e))) || [];
        message.features = ((_c = object.features) === null || _c === void 0 ? void 0 : _c.map((e) => Feature.fromPartial(e))) || [];
        message.authorizations = ((_d = object.authorizations) === null || _d === void 0 ? void 0 : _d.map((e) => Authorization.fromPartial(e))) || [];
        message.localizations = ((_e = object.localizations) === null || _e === void 0 ? void 0 : _e.map((e) => Localization.fromPartial(e))) || [];
        message.migrations = ((_f = object.migrations) === null || _f === void 0 ? void 0 : _f.map((e) => Migration.fromPartial(e))) || [];
        return message;
    },
};
function createBaseLocalization() {
    return { lang: "", namespaces: [] };
}
export const Localization = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lang !== "") {
            writer.uint32(10).string(message.lang);
        }
        for (const v of message.namespaces) {
            LocalizationNamespace.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            lang: isSet(object.lang) ? String(object.lang) : "",
            namespaces: Array.isArray(object === null || object === void 0 ? void 0 : object.namespaces)
                ? object.namespaces.map((e) => LocalizationNamespace.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.lang !== undefined && (obj.lang = message.lang);
        if (message.namespaces) {
            obj.namespaces = message.namespaces.map((e) => e ? LocalizationNamespace.toJSON(e) : undefined);
        }
        else {
            obj.namespaces = [];
        }
        return obj;
    },
    create(base) {
        return Localization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLocalization();
        message.lang = (_a = object.lang) !== null && _a !== void 0 ? _a : "";
        message.namespaces = ((_b = object.namespaces) === null || _b === void 0 ? void 0 : _b.map((e) => LocalizationNamespace.fromPartial(e))) || [];
        return message;
    },
};
function createBaseLocalizationNamespace() {
    return { name: "", translates: [] };
}
export const LocalizationNamespace = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.translates) {
            LocalizationTranslate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            translates: Array.isArray(object === null || object === void 0 ? void 0 : object.translates)
                ? object.translates.map((e) => LocalizationTranslate.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.translates) {
            obj.translates = message.translates.map((e) => e ? LocalizationTranslate.toJSON(e) : undefined);
        }
        else {
            obj.translates = [];
        }
        return obj;
    },
    create(base) {
        return LocalizationNamespace.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLocalizationNamespace();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.translates = ((_b = object.translates) === null || _b === void 0 ? void 0 : _b.map((e) => LocalizationTranslate.fromPartial(e))) || [];
        return message;
    },
};
function createBaseLocalizationTranslate() {
    return { key: "", value: "" };
}
export const LocalizationTranslate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return LocalizationTranslate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLocalizationTranslate();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDataType() {
    return { name: 0 };
}
export const DataType = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== 0) {
            writer.uint32(8).int32(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { name: isSet(object.name) ? dataTypeNameFromJSON(object.name) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = dataTypeNameToJSON(message.name));
        return obj;
    },
    create(base) {
        return DataType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDataType();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseAuthorization() {
    return { name: "", id: 0, policies: [] };
}
export const Authorization = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.id !== 0) {
            writer.uint32(16).int32(message.id);
        }
        for (const v of message.policies) {
            AuthorizationPolicy.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            id: isSet(object.id) ? Number(object.id) : 0,
            policies: Array.isArray(object === null || object === void 0 ? void 0 : object.policies) ? object.policies.map((e) => AuthorizationPolicy.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.id !== undefined && (obj.id = Math.round(message.id));
        if (message.policies) {
            obj.policies = message.policies.map((e) => e ? AuthorizationPolicy.toJSON(e) : undefined);
        }
        else {
            obj.policies = [];
        }
        return obj;
    },
    create(base) {
        return Authorization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAuthorization();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : 0;
        message.policies = ((_c = object.policies) === null || _c === void 0 ? void 0 : _c.map((e) => AuthorizationPolicy.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAuthorizationPolicy() {
    return { resource: "", roleBinding: undefined, rule: undefined, scope: 0 };
}
export const AuthorizationPolicy = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.scope = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            resource: isSet(object.resource) ? String(object.resource) : "",
            roleBinding: isSet(object.roleBinding) ? AuthorizationPolicyRoleBinding.fromJSON(object.roleBinding) : undefined,
            rule: isSet(object.rule) ? AuthorizationPolicyRule.fromJSON(object.rule) : undefined,
            scope: isSet(object.scope) ? authorizationPolicyScopeFromJSON(object.scope) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined && (obj.resource = message.resource);
        message.roleBinding !== undefined &&
            (obj.roleBinding = message.roleBinding ? AuthorizationPolicyRoleBinding.toJSON(message.roleBinding) : undefined);
        message.rule !== undefined && (obj.rule = message.rule ? AuthorizationPolicyRule.toJSON(message.rule) : undefined);
        message.scope !== undefined && (obj.scope = authorizationPolicyScopeToJSON(message.scope));
        return obj;
    },
    create(base) {
        return AuthorizationPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAuthorizationPolicy();
        message.resource = (_a = object.resource) !== null && _a !== void 0 ? _a : "";
        message.roleBinding = (object.roleBinding !== undefined && object.roleBinding !== null)
            ? AuthorizationPolicyRoleBinding.fromPartial(object.roleBinding)
            : undefined;
        message.rule = (object.rule !== undefined && object.rule !== null)
            ? AuthorizationPolicyRule.fromPartial(object.rule)
            : undefined;
        message.scope = (_b = object.scope) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseAuthorizationPolicyRoleBinding() {
    return { table: "", column: "", role: "" };
}
export const AuthorizationPolicyRoleBinding = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            table: isSet(object.table) ? String(object.table) : "",
            column: isSet(object.column) ? String(object.column) : "",
            role: isSet(object.role) ? String(object.role) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.table !== undefined && (obj.table = message.table);
        message.column !== undefined && (obj.column = message.column);
        message.role !== undefined && (obj.role = message.role);
        return obj;
    },
    create(base) {
        return AuthorizationPolicyRoleBinding.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAuthorizationPolicyRoleBinding();
        message.table = (_a = object.table) !== null && _a !== void 0 ? _a : "";
        message.column = (_b = object.column) !== null && _b !== void 0 ? _b : "";
        message.role = (_c = object.role) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseAuthorizationPolicyRule() {
    return { operands: [], operators: [] };
}
export const AuthorizationPolicyRule = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.operands) {
            AuthorizationPolicyRuleOperand.encode(v, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.operators) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
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
                            message.operators.push(reader.int32());
                        }
                    }
                    else {
                        message.operators.push(reader.int32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            operands: Array.isArray(object === null || object === void 0 ? void 0 : object.operands)
                ? object.operands.map((e) => AuthorizationPolicyRuleOperand.fromJSON(e))
                : [],
            operators: Array.isArray(object === null || object === void 0 ? void 0 : object.operators) ? object.operators.map((e) => operatorFromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operands) {
            obj.operands = message.operands.map((e) => e ? AuthorizationPolicyRuleOperand.toJSON(e) : undefined);
        }
        else {
            obj.operands = [];
        }
        if (message.operators) {
            obj.operators = message.operators.map((e) => operatorToJSON(e));
        }
        else {
            obj.operators = [];
        }
        return obj;
    },
    create(base) {
        return AuthorizationPolicyRule.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAuthorizationPolicyRule();
        message.operands = ((_a = object.operands) === null || _a === void 0 ? void 0 : _a.map((e) => AuthorizationPolicyRuleOperand.fromPartial(e))) || [];
        message.operators = ((_b = object.operators) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseAuthorizationPolicyRuleOperand() {
    return { expr: undefined, rule: undefined };
}
export const AuthorizationPolicyRuleOperand = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.expr !== undefined) {
            AuthorizationPolicyRuleExpr.encode(message.expr, writer.uint32(10).fork()).ldelim();
        }
        if (message.rule !== undefined) {
            AuthorizationPolicyRule.encode(message.rule, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            expr: isSet(object.expr) ? AuthorizationPolicyRuleExpr.fromJSON(object.expr) : undefined,
            rule: isSet(object.rule) ? AuthorizationPolicyRule.fromJSON(object.rule) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.expr !== undefined &&
            (obj.expr = message.expr ? AuthorizationPolicyRuleExpr.toJSON(message.expr) : undefined);
        message.rule !== undefined && (obj.rule = message.rule ? AuthorizationPolicyRule.toJSON(message.rule) : undefined);
        return obj;
    },
    create(base) {
        return AuthorizationPolicyRuleOperand.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
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
function createBaseAuthorizationPolicyRuleExpr() {
    return { column: "", value: undefined, paths: undefined, dataType: undefined, operator: 0 };
}
export const AuthorizationPolicyRuleExpr = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.operator = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            column: isSet(object.column) ? String(object.column) : "",
            value: isSet(object.value) ? String(object.value) : undefined,
            paths: isSet(object.paths) ? String(object.paths) : undefined,
            dataType: isSet(object.dataType) ? DataType.fromJSON(object.dataType) : undefined,
            operator: isSet(object.operator) ? operatorFromJSON(object.operator) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.column !== undefined && (obj.column = message.column);
        message.value !== undefined && (obj.value = message.value);
        message.paths !== undefined && (obj.paths = message.paths);
        message.dataType !== undefined && (obj.dataType = message.dataType ? DataType.toJSON(message.dataType) : undefined);
        message.operator !== undefined && (obj.operator = operatorToJSON(message.operator));
        return obj;
    },
    create(base) {
        return AuthorizationPolicyRuleExpr.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseAuthorizationPolicyRuleExpr();
        message.column = (_a = object.column) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        message.paths = (_c = object.paths) !== null && _c !== void 0 ? _c : undefined;
        message.dataType = (object.dataType !== undefined && object.dataType !== null)
            ? DataType.fromPartial(object.dataType)
            : undefined;
        message.operator = (_d = object.operator) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseFeature() {
    return {
        name: 0,
        env: 0,
        emailLogin: undefined,
        jpBankData: undefined,
        basicAuth: undefined,
        twilioLogin: undefined,
        rollbar: undefined,
        deepLink: undefined,
        stripe: undefined,
        lineLogin: undefined,
    };
}
export const Feature = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.int32();
                    break;
                case 2:
                    message.env = reader.int32();
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return Feature.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeature();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : 0;
        message.env = (_b = object.env) !== null && _b !== void 0 ? _b : 0;
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
function createBaseFeatureEmailLogin() {
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
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tables) {
            writer.uint32(10).string(v);
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
    decode(input, length) {
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
                    message.unlockStrategy = reader.int32();
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
    fromJSON(object) {
        return {
            tables: Array.isArray(object === null || object === void 0 ? void 0 : object.tables) ? object.tables.map((e) => String(e)) : [],
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
    toJSON(message) {
        const obj = {};
        if (message.tables) {
            obj.tables = message.tables.map((e) => e);
        }
        else {
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
    create(base) {
        return FeatureEmailLogin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseFeatureEmailLogin();
        message.tables = ((_a = object.tables) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.passwordMinLength = (_b = object.passwordMinLength) !== null && _b !== void 0 ? _b : 0;
        message.rememberFor = (_c = object.rememberFor) !== null && _c !== void 0 ? _c : 0;
        message.resetPasswordWithin = (_d = object.resetPasswordWithin) !== null && _d !== void 0 ? _d : 0;
        message.maximumRetries = (_e = object.maximumRetries) !== null && _e !== void 0 ? _e : 0;
        message.unlockStrategy = (_f = object.unlockStrategy) !== null && _f !== void 0 ? _f : 0;
        message.unlockIn = (_g = object.unlockIn) !== null && _g !== void 0 ? _g : 0;
        message.passwordRegex = (_h = object.passwordRegex) !== null && _h !== void 0 ? _h : "";
        message.confirmationEmail = (_j = object.confirmationEmail) !== null && _j !== void 0 ? _j : false;
        return message;
    },
};
function createBaseFeatureJPBankData() {
    return {};
}
export const FeatureJPBankData = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return FeatureJPBankData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseFeatureJPBankData();
        return message;
    },
};
function createBaseFeatureBasicAuth() {
    return { username: "", password: "" };
}
export const FeatureBasicAuth = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            username: isSet(object.username) ? String(object.username) : "",
            password: isSet(object.password) ? String(object.password) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.username !== undefined && (obj.username = message.username);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    create(base) {
        return FeatureBasicAuth.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeatureBasicAuth();
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : "";
        message.password = (_b = object.password) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseFeatureTwilioLogin() {
    return { userTables: [], serviceId: "", sid: "", token: "", otpLength: 0 };
}
export const FeatureTwilioLogin = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.userTables) {
            writer.uint32(10).string(v);
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            userTables: Array.isArray(object === null || object === void 0 ? void 0 : object.userTables) ? object.userTables.map((e) => String(e)) : [],
            serviceId: isSet(object.serviceId) ? String(object.serviceId) : "",
            sid: isSet(object.sid) ? String(object.sid) : "",
            token: isSet(object.token) ? String(object.token) : "",
            otpLength: isSet(object.otpLength) ? Number(object.otpLength) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userTables) {
            obj.userTables = message.userTables.map((e) => e);
        }
        else {
            obj.userTables = [];
        }
        message.serviceId !== undefined && (obj.serviceId = message.serviceId);
        message.sid !== undefined && (obj.sid = message.sid);
        message.token !== undefined && (obj.token = message.token);
        message.otpLength !== undefined && (obj.otpLength = Math.round(message.otpLength));
        return obj;
    },
    create(base) {
        return FeatureTwilioLogin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseFeatureTwilioLogin();
        message.userTables = ((_a = object.userTables) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.serviceId = (_b = object.serviceId) !== null && _b !== void 0 ? _b : "";
        message.sid = (_c = object.sid) !== null && _c !== void 0 ? _c : "";
        message.token = (_d = object.token) !== null && _d !== void 0 ? _d : "";
        message.otpLength = (_e = object.otpLength) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseFeatureRollbar() {
    return { accessToken: "" };
}
export const FeatureRollbar = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { accessToken: isSet(object.accessToken) ? String(object.accessToken) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.accessToken !== undefined && (obj.accessToken = message.accessToken);
        return obj;
    },
    create(base) {
        return FeatureRollbar.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFeatureRollbar();
        message.accessToken = (_a = object.accessToken) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseFeatureDeepLink() {
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
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
        message.iosAppStoreId !== undefined && (obj.iosAppStoreId = message.iosAppStoreId);
        message.iosBundleId !== undefined && (obj.iosBundleId = message.iosBundleId);
        message.iosAppLink !== undefined && (obj.iosAppLink = message.iosAppLink);
        message.androidPackageName !== undefined && (obj.androidPackageName = message.androidPackageName);
        message.androidCertFingerprints !== undefined && (obj.androidCertFingerprints = message.androidCertFingerprints);
        message.androidAppLink !== undefined && (obj.androidAppLink = message.androidAppLink);
        message.firebaseDomain !== undefined && (obj.firebaseDomain = message.firebaseDomain);
        return obj;
    },
    create(base) {
        return FeatureDeepLink.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseFeatureDeepLink();
        message.iosAppStoreId = (_a = object.iosAppStoreId) !== null && _a !== void 0 ? _a : "";
        message.iosBundleId = (_b = object.iosBundleId) !== null && _b !== void 0 ? _b : "";
        message.iosAppLink = (_c = object.iosAppLink) !== null && _c !== void 0 ? _c : "";
        message.androidPackageName = (_d = object.androidPackageName) !== null && _d !== void 0 ? _d : "";
        message.androidCertFingerprints = (_e = object.androidCertFingerprints) !== null && _e !== void 0 ? _e : "";
        message.androidAppLink = (_f = object.androidAppLink) !== null && _f !== void 0 ? _f : "";
        message.firebaseDomain = (_g = object.firebaseDomain) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseFeatureStripe() {
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
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.subscriptionTables) {
            writer.uint32(10).string(v);
        }
        for (const v of message.userTables) {
            writer.uint32(18).string(v);
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            subscriptionTables: Array.isArray(object === null || object === void 0 ? void 0 : object.subscriptionTables)
                ? object.subscriptionTables.map((e) => String(e))
                : [],
            userTables: Array.isArray(object === null || object === void 0 ? void 0 : object.userTables) ? object.userTables.map((e) => String(e)) : [],
            publicKey: isSet(object.publicKey) ? String(object.publicKey) : "",
            secretKey: isSet(object.secretKey) ? String(object.secretKey) : "",
            stripeEndpointSecret: isSet(object.stripeEndpointSecret) ? String(object.stripeEndpointSecret) : "",
            httpStripeSignature: isSet(object.httpStripeSignature) ? String(object.httpStripeSignature) : "",
            addStripeSubscription: isSet(object.addStripeSubscription) ? Boolean(object.addStripeSubscription) : false,
            addChargeApi: isSet(object.addChargeApi) ? Boolean(object.addChargeApi) : false,
            addIntentApi: isSet(object.addIntentApi) ? Boolean(object.addIntentApi) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.subscriptionTables) {
            obj.subscriptionTables = message.subscriptionTables.map((e) => e);
        }
        else {
            obj.subscriptionTables = [];
        }
        if (message.userTables) {
            obj.userTables = message.userTables.map((e) => e);
        }
        else {
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
    create(base) {
        return FeatureStripe.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseFeatureStripe();
        message.subscriptionTables = ((_a = object.subscriptionTables) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.userTables = ((_b = object.userTables) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.publicKey = (_c = object.publicKey) !== null && _c !== void 0 ? _c : "";
        message.secretKey = (_d = object.secretKey) !== null && _d !== void 0 ? _d : "";
        message.stripeEndpointSecret = (_e = object.stripeEndpointSecret) !== null && _e !== void 0 ? _e : "";
        message.httpStripeSignature = (_f = object.httpStripeSignature) !== null && _f !== void 0 ? _f : "";
        message.addStripeSubscription = (_g = object.addStripeSubscription) !== null && _g !== void 0 ? _g : false;
        message.addChargeApi = (_h = object.addChargeApi) !== null && _h !== void 0 ? _h : false;
        message.addIntentApi = (_j = object.addIntentApi) !== null && _j !== void 0 ? _j : false;
        return message;
    },
};
function createBaseFeatureLineLogin() {
    return { userTables: [], clientId: "", secretKey: "" };
}
export const FeatureLineLogin = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.userTables) {
            writer.uint32(10).string(v);
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        if (message.secretKey !== "") {
            writer.uint32(26).string(message.secretKey);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            userTables: Array.isArray(object === null || object === void 0 ? void 0 : object.userTables) ? object.userTables.map((e) => String(e)) : [],
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            secretKey: isSet(object.secretKey) ? String(object.secretKey) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userTables) {
            obj.userTables = message.userTables.map((e) => e);
        }
        else {
            obj.userTables = [];
        }
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.secretKey !== undefined && (obj.secretKey = message.secretKey);
        return obj;
    },
    create(base) {
        return FeatureLineLogin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseFeatureLineLogin();
        message.userTables = ((_a = object.userTables) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.clientId = (_b = object.clientId) !== null && _b !== void 0 ? _b : "";
        message.secretKey = (_c = object.secretKey) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseController() {
    return { name: "", endpoints: [] };
}
export const Controller = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.endpoints) {
            ControllerEndpoint.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            endpoints: Array.isArray(object === null || object === void 0 ? void 0 : object.endpoints)
                ? object.endpoints.map((e) => ControllerEndpoint.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map((e) => e ? ControllerEndpoint.toJSON(e) : undefined);
        }
        else {
            obj.endpoints = [];
        }
        return obj;
    },
    create(base) {
        return Controller.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseController();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.endpoints = ((_b = object.endpoints) === null || _b === void 0 ? void 0 : _b.map((e) => ControllerEndpoint.fromPartial(e))) || [];
        return message;
    },
};
function createBaseControllerEndpoint() {
    return {
        path: "",
        name: "",
        table: undefined,
        feature: undefined,
        list: undefined,
        get: undefined,
        create: undefined,
        update: undefined,
        delete: undefined,
        authentication: undefined,
        authorization: undefined,
        responses: undefined,
        params: undefined,
        writable: false,
    };
}
export const ControllerEndpoint = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.feature = reader.int32();
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return ControllerEndpoint.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseControllerEndpoint();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.table = (_c = object.table) !== null && _c !== void 0 ? _c : undefined;
        message.feature = (_d = object.feature) !== null && _d !== void 0 ? _d : undefined;
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
        message.writable = (_e = object.writable) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseControllerEndpointList() {
    return { queries: undefined, conditions: undefined };
}
export const ControllerEndpointList = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.queries !== undefined) {
            ControllerRequestContent.encode(message.queries, writer.uint32(10).fork()).ldelim();
        }
        if (message.conditions !== undefined) {
            ControllerResourceCondition.encode(message.conditions, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            queries: isSet(object.queries) ? ControllerRequestContent.fromJSON(object.queries) : undefined,
            conditions: isSet(object.conditions) ? ControllerResourceCondition.fromJSON(object.conditions) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.queries !== undefined &&
            (obj.queries = message.queries ? ControllerRequestContent.toJSON(message.queries) : undefined);
        message.conditions !== undefined &&
            (obj.conditions = message.conditions ? ControllerResourceCondition.toJSON(message.conditions) : undefined);
        return obj;
    },
    create(base) {
        return ControllerEndpointList.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
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
function createBaseControllerEndpointGet() {
    return { queries: undefined, conditions: undefined };
}
export const ControllerEndpointGet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.queries !== undefined) {
            ControllerRequestContent.encode(message.queries, writer.uint32(10).fork()).ldelim();
        }
        if (message.conditions !== undefined) {
            ControllerResourceCondition.encode(message.conditions, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            queries: isSet(object.queries) ? ControllerRequestContent.fromJSON(object.queries) : undefined,
            conditions: isSet(object.conditions) ? ControllerResourceCondition.fromJSON(object.conditions) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.queries !== undefined &&
            (obj.queries = message.queries ? ControllerRequestContent.toJSON(message.queries) : undefined);
        message.conditions !== undefined &&
            (obj.conditions = message.conditions ? ControllerResourceCondition.toJSON(message.conditions) : undefined);
        return obj;
    },
    create(base) {
        return ControllerEndpointGet.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
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
function createBaseControllerEndpointCreate() {
    return { body: undefined, conditions: undefined, resources: undefined };
}
export const ControllerEndpointCreate = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            body: isSet(object.body) ? ControllerRequestContent.fromJSON(object.body) : undefined,
            conditions: isSet(object.conditions) ? ControllerResourceCondition.fromJSON(object.conditions) : undefined,
            resources: isSet(object.resources) ? ControllerResourceUpdate.fromJSON(object.resources) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.body !== undefined && (obj.body = message.body ? ControllerRequestContent.toJSON(message.body) : undefined);
        message.conditions !== undefined &&
            (obj.conditions = message.conditions ? ControllerResourceCondition.toJSON(message.conditions) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? ControllerResourceUpdate.toJSON(message.resources) : undefined);
        return obj;
    },
    create(base) {
        return ControllerEndpointCreate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
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
function createBaseControllerEndpointUpdate() {
    return { body: undefined, conditions: undefined, resources: undefined };
}
export const ControllerEndpointUpdate = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            body: isSet(object.body) ? ControllerRequestContent.fromJSON(object.body) : undefined,
            conditions: isSet(object.conditions) ? ControllerResourceCondition.fromJSON(object.conditions) : undefined,
            resources: isSet(object.resources) ? ControllerResourceUpdate.fromJSON(object.resources) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.body !== undefined && (obj.body = message.body ? ControllerRequestContent.toJSON(message.body) : undefined);
        message.conditions !== undefined &&
            (obj.conditions = message.conditions ? ControllerResourceCondition.toJSON(message.conditions) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources ? ControllerResourceUpdate.toJSON(message.resources) : undefined);
        return obj;
    },
    create(base) {
        return ControllerEndpointUpdate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
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
function createBaseControllerEndpointDelete() {
    return { body: undefined, conditions: undefined };
}
export const ControllerEndpointDelete = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.body !== undefined) {
            ControllerRequestContent.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.conditions !== undefined) {
            ControllerResourceCondition.encode(message.conditions, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            body: isSet(object.body) ? ControllerRequestContent.fromJSON(object.body) : undefined,
            conditions: isSet(object.conditions) ? ControllerResourceCondition.fromJSON(object.conditions) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.body !== undefined && (obj.body = message.body ? ControllerRequestContent.toJSON(message.body) : undefined);
        message.conditions !== undefined &&
            (obj.conditions = message.conditions ? ControllerResourceCondition.toJSON(message.conditions) : undefined);
        return obj;
    },
    create(base) {
        return ControllerEndpointDelete.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
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
function createBaseControllerRequestContent() {
    return { fields: [] };
}
export const ControllerRequestContent = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.fields) {
            ControllerRequestContentField.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            fields: Array.isArray(object === null || object === void 0 ? void 0 : object.fields)
                ? object.fields.map((e) => ControllerRequestContentField.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fields) {
            obj.fields = message.fields.map((e) => e ? ControllerRequestContentField.toJSON(e) : undefined);
        }
        else {
            obj.fields = [];
        }
        return obj;
    },
    create(base) {
        return ControllerRequestContent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseControllerRequestContent();
        message.fields = ((_a = object.fields) === null || _a === void 0 ? void 0 : _a.map((e) => ControllerRequestContentField.fromPartial(e))) || [];
        return message;
    },
};
function createBaseControllerRequestContentField() {
    return { name: "", dataType: undefined, children: [] };
}
export const ControllerRequestContentField = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.dataType !== undefined) {
            DataType.encode(message.dataType, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.children) {
            ControllerRequestContentField.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            dataType: isSet(object.dataType) ? DataType.fromJSON(object.dataType) : undefined,
            children: Array.isArray(object === null || object === void 0 ? void 0 : object.children)
                ? object.children.map((e) => ControllerRequestContentField.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.dataType !== undefined && (obj.dataType = message.dataType ? DataType.toJSON(message.dataType) : undefined);
        if (message.children) {
            obj.children = message.children.map((e) => e ? ControllerRequestContentField.toJSON(e) : undefined);
        }
        else {
            obj.children = [];
        }
        return obj;
    },
    create(base) {
        return ControllerRequestContentField.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseControllerRequestContentField();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.dataType = (object.dataType !== undefined && object.dataType !== null)
            ? DataType.fromPartial(object.dataType)
            : undefined;
        message.children = ((_b = object.children) === null || _b === void 0 ? void 0 : _b.map((e) => ControllerRequestContentField.fromPartial(e))) || [];
        return message;
    },
};
function createBaseControllerResponse() {
    return { fields: [] };
}
export const ControllerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.fields) {
            ControllerResponseField.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            fields: Array.isArray(object === null || object === void 0 ? void 0 : object.fields) ? object.fields.map((e) => ControllerResponseField.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fields) {
            obj.fields = message.fields.map((e) => e ? ControllerResponseField.toJSON(e) : undefined);
        }
        else {
            obj.fields = [];
        }
        return obj;
    },
    create(base) {
        return ControllerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseControllerResponse();
        message.fields = ((_a = object.fields) === null || _a === void 0 ? void 0 : _a.map((e) => ControllerResponseField.fromPartial(e))) || [];
        return message;
    },
};
function createBaseControllerResponseField() {
    return { name: "", resource: undefined, property: undefined, value: undefined, dataType: undefined, children: [] };
}
export const ControllerResponseField = {
    encode(message, writer = _m0.Writer.create()) {
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
            ControllerResponseField.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            resource: isSet(object.resource) ? String(object.resource) : undefined,
            property: isSet(object.property) ? String(object.property) : undefined,
            value: isSet(object.value) ? String(object.value) : undefined,
            dataType: isSet(object.dataType) ? DataType.fromJSON(object.dataType) : undefined,
            children: Array.isArray(object === null || object === void 0 ? void 0 : object.children)
                ? object.children.map((e) => ControllerResponseField.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.resource !== undefined && (obj.resource = message.resource);
        message.property !== undefined && (obj.property = message.property);
        message.value !== undefined && (obj.value = message.value);
        message.dataType !== undefined && (obj.dataType = message.dataType ? DataType.toJSON(message.dataType) : undefined);
        if (message.children) {
            obj.children = message.children.map((e) => e ? ControllerResponseField.toJSON(e) : undefined);
        }
        else {
            obj.children = [];
        }
        return obj;
    },
    create(base) {
        return ControllerResponseField.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseControllerResponseField();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.resource = (_b = object.resource) !== null && _b !== void 0 ? _b : undefined;
        message.property = (_c = object.property) !== null && _c !== void 0 ? _c : undefined;
        message.value = (_d = object.value) !== null && _d !== void 0 ? _d : undefined;
        message.dataType = (object.dataType !== undefined && object.dataType !== null)
            ? DataType.fromPartial(object.dataType)
            : undefined;
        message.children = ((_e = object.children) === null || _e === void 0 ? void 0 : _e.map((e) => ControllerResponseField.fromPartial(e))) || [];
        return message;
    },
};
function createBaseControllerResourceCondition() {
    return { operands: [], operators: [] };
}
export const ControllerResourceCondition = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.operands) {
            ControllerResourceConditionOperand.encode(v, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.operators) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
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
                            message.operators.push(reader.int32());
                        }
                    }
                    else {
                        message.operators.push(reader.int32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            operands: Array.isArray(object === null || object === void 0 ? void 0 : object.operands)
                ? object.operands.map((e) => ControllerResourceConditionOperand.fromJSON(e))
                : [],
            operators: Array.isArray(object === null || object === void 0 ? void 0 : object.operators) ? object.operators.map((e) => operatorFromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operands) {
            obj.operands = message.operands.map((e) => e ? ControllerResourceConditionOperand.toJSON(e) : undefined);
        }
        else {
            obj.operands = [];
        }
        if (message.operators) {
            obj.operators = message.operators.map((e) => operatorToJSON(e));
        }
        else {
            obj.operators = [];
        }
        return obj;
    },
    create(base) {
        return ControllerResourceCondition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseControllerResourceCondition();
        message.operands = ((_a = object.operands) === null || _a === void 0 ? void 0 : _a.map((e) => ControllerResourceConditionOperand.fromPartial(e))) || [];
        message.operators = ((_b = object.operators) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseControllerResourceConditionOperand() {
    return { expr: undefined, condition: undefined };
}
export const ControllerResourceConditionOperand = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.expr !== undefined) {
            ControllerResourceConditionExpr.encode(message.expr, writer.uint32(10).fork()).ldelim();
        }
        if (message.condition !== undefined) {
            ControllerResourceCondition.encode(message.condition, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            expr: isSet(object.expr) ? ControllerResourceConditionExpr.fromJSON(object.expr) : undefined,
            condition: isSet(object.condition) ? ControllerResourceCondition.fromJSON(object.condition) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.expr !== undefined &&
            (obj.expr = message.expr ? ControllerResourceConditionExpr.toJSON(message.expr) : undefined);
        message.condition !== undefined &&
            (obj.condition = message.condition ? ControllerResourceCondition.toJSON(message.condition) : undefined);
        return obj;
    },
    create(base) {
        return ControllerResourceConditionOperand.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
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
function createBaseControllerResourceConditionExpr() {
    return {
        paths: [],
        query: undefined,
        params: undefined,
        body: undefined,
        value: undefined,
        system: undefined,
        dataType: undefined,
        operator: 0,
    };
}
export const ControllerResourceConditionExpr = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.paths) {
            writer.uint32(10).string(v);
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
    decode(input, length) {
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
                    message.system = reader.int32();
                    break;
                case 8:
                    message.dataType = DataType.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.operator = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            paths: Array.isArray(object === null || object === void 0 ? void 0 : object.paths) ? object.paths.map((e) => String(e)) : [],
            query: isSet(object.query) ? String(object.query) : undefined,
            params: isSet(object.params) ? String(object.params) : undefined,
            body: isSet(object.body) ? String(object.body) : undefined,
            value: isSet(object.value) ? String(object.value) : undefined,
            system: isSet(object.system) ? controllerResourceConditionSystemFromJSON(object.system) : undefined,
            dataType: isSet(object.dataType) ? DataType.fromJSON(object.dataType) : undefined,
            operator: isSet(object.operator) ? operatorFromJSON(object.operator) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        }
        else {
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
    create(base) {
        return ControllerResourceConditionExpr.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseControllerResourceConditionExpr();
        message.paths = ((_a = object.paths) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.query = (_b = object.query) !== null && _b !== void 0 ? _b : undefined;
        message.params = (_c = object.params) !== null && _c !== void 0 ? _c : undefined;
        message.body = (_d = object.body) !== null && _d !== void 0 ? _d : undefined;
        message.value = (_e = object.value) !== null && _e !== void 0 ? _e : undefined;
        message.system = (_f = object.system) !== null && _f !== void 0 ? _f : undefined;
        message.dataType = (object.dataType !== undefined && object.dataType !== null)
            ? DataType.fromPartial(object.dataType)
            : undefined;
        message.operator = (_g = object.operator) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
function createBaseControllerResourceUpdate() {
    return { fields: [] };
}
export const ControllerResourceUpdate = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.fields) {
            ControllerResourceUpdateField.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            fields: Array.isArray(object === null || object === void 0 ? void 0 : object.fields)
                ? object.fields.map((e) => ControllerResourceUpdateField.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fields) {
            obj.fields = message.fields.map((e) => e ? ControllerResourceUpdateField.toJSON(e) : undefined);
        }
        else {
            obj.fields = [];
        }
        return obj;
    },
    create(base) {
        return ControllerResourceUpdate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseControllerResourceUpdate();
        message.fields = ((_a = object.fields) === null || _a === void 0 ? void 0 : _a.map((e) => ControllerResourceUpdateField.fromPartial(e))) || [];
        return message;
    },
};
function createBaseControllerResourceUpdateField() {
    return {
        name: "",
        query: undefined,
        params: undefined,
        body: undefined,
        value: undefined,
        dataType: undefined,
        children: [],
    };
}
export const ControllerResourceUpdateField = {
    encode(message, writer = _m0.Writer.create()) {
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
            ControllerResourceUpdateField.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            query: isSet(object.query) ? String(object.query) : undefined,
            params: isSet(object.params) ? String(object.params) : undefined,
            body: isSet(object.body) ? String(object.body) : undefined,
            value: isSet(object.value) ? String(object.value) : undefined,
            dataType: isSet(object.dataType) ? DataType.fromJSON(object.dataType) : undefined,
            children: Array.isArray(object === null || object === void 0 ? void 0 : object.children)
                ? object.children.map((e) => ControllerResourceUpdateField.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.query !== undefined && (obj.query = message.query);
        message.params !== undefined && (obj.params = message.params);
        message.body !== undefined && (obj.body = message.body);
        message.value !== undefined && (obj.value = message.value);
        message.dataType !== undefined && (obj.dataType = message.dataType ? DataType.toJSON(message.dataType) : undefined);
        if (message.children) {
            obj.children = message.children.map((e) => e ? ControllerResourceUpdateField.toJSON(e) : undefined);
        }
        else {
            obj.children = [];
        }
        return obj;
    },
    create(base) {
        return ControllerResourceUpdateField.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseControllerResourceUpdateField();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.query = (_b = object.query) !== null && _b !== void 0 ? _b : undefined;
        message.params = (_c = object.params) !== null && _c !== void 0 ? _c : undefined;
        message.body = (_d = object.body) !== null && _d !== void 0 ? _d : undefined;
        message.value = (_e = object.value) !== null && _e !== void 0 ? _e : undefined;
        message.dataType = (object.dataType !== undefined && object.dataType !== null)
            ? DataType.fromPartial(object.dataType)
            : undefined;
        message.children = ((_f = object.children) === null || _f === void 0 ? void 0 : _f.map((e) => ControllerResourceUpdateField.fromPartial(e))) || [];
        return message;
    },
};
function createBaseControllerAuthentication() {
    return { tableName: "" };
}
export const ControllerAuthentication = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { tableName: isSet(object.tableName) ? String(object.tableName) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.tableName !== undefined && (obj.tableName = message.tableName);
        return obj;
    },
    create(base) {
        return ControllerAuthentication.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseControllerAuthentication();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseControllerAuthorization() {
    return { authorizationId: 0, tableName: "" };
}
export const ControllerAuthorization = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authorizationId !== 0) {
            writer.uint32(8).int32(message.authorizationId);
        }
        if (message.tableName !== "") {
            writer.uint32(18).string(message.tableName);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            authorizationId: isSet(object.authorizationId) ? Number(object.authorizationId) : 0,
            tableName: isSet(object.tableName) ? String(object.tableName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.authorizationId !== undefined && (obj.authorizationId = Math.round(message.authorizationId));
        message.tableName !== undefined && (obj.tableName = message.tableName);
        return obj;
    },
    create(base) {
        return ControllerAuthorization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseControllerAuthorization();
        message.authorizationId = (_a = object.authorizationId) !== null && _a !== void 0 ? _a : 0;
        message.tableName = (_b = object.tableName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTable() {
    return { name: "", columns: [], relations: [], indexes: [] };
}
export const Table = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.columns) {
            TableColumn.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.relations) {
            TableRelation.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.indexes) {
            TableIndex.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            columns: Array.isArray(object === null || object === void 0 ? void 0 : object.columns) ? object.columns.map((e) => TableColumn.fromJSON(e)) : [],
            relations: Array.isArray(object === null || object === void 0 ? void 0 : object.relations) ? object.relations.map((e) => TableRelation.fromJSON(e)) : [],
            indexes: Array.isArray(object === null || object === void 0 ? void 0 : object.indexes) ? object.indexes.map((e) => TableIndex.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.columns) {
            obj.columns = message.columns.map((e) => e ? TableColumn.toJSON(e) : undefined);
        }
        else {
            obj.columns = [];
        }
        if (message.relations) {
            obj.relations = message.relations.map((e) => e ? TableRelation.toJSON(e) : undefined);
        }
        else {
            obj.relations = [];
        }
        if (message.indexes) {
            obj.indexes = message.indexes.map((e) => e ? TableIndex.toJSON(e) : undefined);
        }
        else {
            obj.indexes = [];
        }
        return obj;
    },
    create(base) {
        return Table.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTable();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.columns = ((_b = object.columns) === null || _b === void 0 ? void 0 : _b.map((e) => TableColumn.fromPartial(e))) || [];
        message.relations = ((_c = object.relations) === null || _c === void 0 ? void 0 : _c.map((e) => TableRelation.fromPartial(e))) || [];
        message.indexes = ((_d = object.indexes) === null || _d === void 0 ? void 0 : _d.map((e) => TableIndex.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTableColumn() {
    return { name: "", type: undefined, constraints: [] };
}
export const TableColumn = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== undefined) {
            TableColumnColumnType.encode(message.type, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.constraints) {
            TableConstraint.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            type: isSet(object.type) ? TableColumnColumnType.fromJSON(object.type) : undefined,
            constraints: Array.isArray(object === null || object === void 0 ? void 0 : object.constraints)
                ? object.constraints.map((e) => TableConstraint.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined && (obj.type = message.type ? TableColumnColumnType.toJSON(message.type) : undefined);
        if (message.constraints) {
            obj.constraints = message.constraints.map((e) => e ? TableConstraint.toJSON(e) : undefined);
        }
        else {
            obj.constraints = [];
        }
        return obj;
    },
    create(base) {
        return TableColumn.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableColumn();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.type = (object.type !== undefined && object.type !== null)
            ? TableColumnColumnType.fromPartial(object.type)
            : undefined;
        message.constraints = ((_b = object.constraints) === null || _b === void 0 ? void 0 : _b.map((e) => TableConstraint.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTableColumnColumnType() {
    return {
        integerType: undefined,
        stringType: undefined,
        floatType: undefined,
        booleanType: undefined,
        dateType: undefined,
        fileType: undefined,
        enumType: undefined,
    };
}
export const TableColumnColumnType = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return TableColumnColumnType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
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
function createBaseTableColumnStringType() {
    return { defaultValue: undefined, isText: false, formats: [], conditions: [] };
}
export const TableColumnStringType = {
    encode(message, writer = _m0.Writer.create()) {
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
            TableColumnStringTypeCondition.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                            message.formats.push(reader.int32());
                        }
                    }
                    else {
                        message.formats.push(reader.int32());
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
    fromJSON(object) {
        return {
            defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : undefined,
            isText: isSet(object.isText) ? Boolean(object.isText) : false,
            formats: Array.isArray(object === null || object === void 0 ? void 0 : object.formats)
                ? object.formats.map((e) => tableColumnStringTypeFormatFromJSON(e))
                : [],
            conditions: Array.isArray(object === null || object === void 0 ? void 0 : object.conditions)
                ? object.conditions.map((e) => TableColumnStringTypeCondition.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
        message.isText !== undefined && (obj.isText = message.isText);
        if (message.formats) {
            obj.formats = message.formats.map((e) => tableColumnStringTypeFormatToJSON(e));
        }
        else {
            obj.formats = [];
        }
        if (message.conditions) {
            obj.conditions = message.conditions.map((e) => e ? TableColumnStringTypeCondition.toJSON(e) : undefined);
        }
        else {
            obj.conditions = [];
        }
        return obj;
    },
    create(base) {
        return TableColumnStringType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTableColumnStringType();
        message.defaultValue = (_a = object.defaultValue) !== null && _a !== void 0 ? _a : undefined;
        message.isText = (_b = object.isText) !== null && _b !== void 0 ? _b : false;
        message.formats = ((_c = object.formats) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.conditions = ((_d = object.conditions) === null || _d === void 0 ? void 0 : _d.map((e) => TableColumnStringTypeCondition.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTableColumnStringTypeCondition() {
    return { operator: 0, value: undefined, columnName: undefined };
}
export const TableColumnStringTypeCondition = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTableColumnStringTypeCondition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator = reader.int32();
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
    fromJSON(object) {
        return {
            operator: isSet(object.operator) ? tableColumnOperatorFromJSON(object.operator) : 0,
            value: isSet(object.value) ? Number(object.value) : undefined,
            columnName: isSet(object.columnName) ? String(object.columnName) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.operator !== undefined && (obj.operator = tableColumnOperatorToJSON(message.operator));
        message.value !== undefined && (obj.value = Math.round(message.value));
        message.columnName !== undefined && (obj.columnName = message.columnName);
        return obj;
    },
    create(base) {
        return TableColumnStringTypeCondition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTableColumnStringTypeCondition();
        message.operator = (_a = object.operator) !== null && _a !== void 0 ? _a : 0;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        message.columnName = (_c = object.columnName) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseTableColumnIntegerType() {
    return { defaultValue: undefined, conditions: [] };
}
export const TableColumnIntegerType = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.defaultValue !== undefined) {
            writer.uint32(8).int32(message.defaultValue);
        }
        for (const v of message.conditions) {
            TableColumnIntegerTypeCondition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            defaultValue: isSet(object.defaultValue) ? Number(object.defaultValue) : undefined,
            conditions: Array.isArray(object === null || object === void 0 ? void 0 : object.conditions)
                ? object.conditions.map((e) => TableColumnIntegerTypeCondition.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.defaultValue !== undefined && (obj.defaultValue = Math.round(message.defaultValue));
        if (message.conditions) {
            obj.conditions = message.conditions.map((e) => e ? TableColumnIntegerTypeCondition.toJSON(e) : undefined);
        }
        else {
            obj.conditions = [];
        }
        return obj;
    },
    create(base) {
        return TableColumnIntegerType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableColumnIntegerType();
        message.defaultValue = (_a = object.defaultValue) !== null && _a !== void 0 ? _a : undefined;
        message.conditions = ((_b = object.conditions) === null || _b === void 0 ? void 0 : _b.map((e) => TableColumnIntegerTypeCondition.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTableColumnIntegerTypeCondition() {
    return { operator: 0, value: undefined, columnName: undefined };
}
export const TableColumnIntegerTypeCondition = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTableColumnIntegerTypeCondition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator = reader.int32();
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
    fromJSON(object) {
        return {
            operator: isSet(object.operator) ? tableColumnOperatorFromJSON(object.operator) : 0,
            value: isSet(object.value) ? Number(object.value) : undefined,
            columnName: isSet(object.columnName) ? String(object.columnName) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.operator !== undefined && (obj.operator = tableColumnOperatorToJSON(message.operator));
        message.value !== undefined && (obj.value = Math.round(message.value));
        message.columnName !== undefined && (obj.columnName = message.columnName);
        return obj;
    },
    create(base) {
        return TableColumnIntegerTypeCondition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTableColumnIntegerTypeCondition();
        message.operator = (_a = object.operator) !== null && _a !== void 0 ? _a : 0;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        message.columnName = (_c = object.columnName) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseTableColumnFloatType() {
    return { defaultValue: undefined, conditions: [] };
}
export const TableColumnFloatType = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.defaultValue !== undefined) {
            writer.uint32(13).float(message.defaultValue);
        }
        for (const v of message.conditions) {
            TableColumnFloatTypeCondition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            defaultValue: isSet(object.defaultValue) ? Number(object.defaultValue) : undefined,
            conditions: Array.isArray(object === null || object === void 0 ? void 0 : object.conditions)
                ? object.conditions.map((e) => TableColumnFloatTypeCondition.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
        if (message.conditions) {
            obj.conditions = message.conditions.map((e) => e ? TableColumnFloatTypeCondition.toJSON(e) : undefined);
        }
        else {
            obj.conditions = [];
        }
        return obj;
    },
    create(base) {
        return TableColumnFloatType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableColumnFloatType();
        message.defaultValue = (_a = object.defaultValue) !== null && _a !== void 0 ? _a : undefined;
        message.conditions = ((_b = object.conditions) === null || _b === void 0 ? void 0 : _b.map((e) => TableColumnFloatTypeCondition.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTableColumnFloatTypeCondition() {
    return { operator: 0, value: undefined, columnName: undefined };
}
export const TableColumnFloatTypeCondition = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTableColumnFloatTypeCondition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator = reader.int32();
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
    fromJSON(object) {
        return {
            operator: isSet(object.operator) ? tableColumnOperatorFromJSON(object.operator) : 0,
            value: isSet(object.value) ? Number(object.value) : undefined,
            columnName: isSet(object.columnName) ? String(object.columnName) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.operator !== undefined && (obj.operator = tableColumnOperatorToJSON(message.operator));
        message.value !== undefined && (obj.value = message.value);
        message.columnName !== undefined && (obj.columnName = message.columnName);
        return obj;
    },
    create(base) {
        return TableColumnFloatTypeCondition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTableColumnFloatTypeCondition();
        message.operator = (_a = object.operator) !== null && _a !== void 0 ? _a : 0;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        message.columnName = (_c = object.columnName) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseTableColumnBooleanType() {
    return { defaultValue: false };
}
export const TableColumnBooleanType = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.defaultValue === true) {
            writer.uint32(8).bool(message.defaultValue);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { defaultValue: isSet(object.defaultValue) ? Boolean(object.defaultValue) : false };
    },
    toJSON(message) {
        const obj = {};
        message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
        return obj;
    },
    create(base) {
        return TableColumnBooleanType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTableColumnBooleanType();
        message.defaultValue = (_a = object.defaultValue) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseTableColumnDateType() {
    return { withTime: false, conditions: [] };
}
export const TableColumnDateType = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                            message.conditions.push(reader.int32());
                        }
                    }
                    else {
                        message.conditions.push(reader.int32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            withTime: isSet(object.withTime) ? Boolean(object.withTime) : false,
            conditions: Array.isArray(object === null || object === void 0 ? void 0 : object.conditions)
                ? object.conditions.map((e) => tableColumnDateTypeConditionFromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.withTime !== undefined && (obj.withTime = message.withTime);
        if (message.conditions) {
            obj.conditions = message.conditions.map((e) => tableColumnDateTypeConditionToJSON(e));
        }
        else {
            obj.conditions = [];
        }
        return obj;
    },
    create(base) {
        return TableColumnDateType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableColumnDateType();
        message.withTime = (_a = object.withTime) !== null && _a !== void 0 ? _a : false;
        message.conditions = ((_b = object.conditions) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseTableColumnFileType() {
    return { maximumSize: 0, numberOfFiles: undefined, contentTypes: [], multiple: false };
}
export const TableColumnFileType = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                            message.contentTypes.push(reader.int32());
                        }
                    }
                    else {
                        message.contentTypes.push(reader.int32());
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
    fromJSON(object) {
        return {
            maximumSize: isSet(object.maximumSize) ? Number(object.maximumSize) : 0,
            numberOfFiles: isSet(object.numberOfFiles)
                ? TableColumnFileTypeNumberOfFiles.fromJSON(object.numberOfFiles)
                : undefined,
            contentTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.contentTypes)
                ? object.contentTypes.map((e) => tableColumnFileTypeContentTypeFromJSON(e))
                : [],
            multiple: isSet(object.multiple) ? Boolean(object.multiple) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.maximumSize !== undefined && (obj.maximumSize = Math.round(message.maximumSize));
        message.numberOfFiles !== undefined && (obj.numberOfFiles = message.numberOfFiles
            ? TableColumnFileTypeNumberOfFiles.toJSON(message.numberOfFiles)
            : undefined);
        if (message.contentTypes) {
            obj.contentTypes = message.contentTypes.map((e) => tableColumnFileTypeContentTypeToJSON(e));
        }
        else {
            obj.contentTypes = [];
        }
        message.multiple !== undefined && (obj.multiple = message.multiple);
        return obj;
    },
    create(base) {
        return TableColumnFileType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTableColumnFileType();
        message.maximumSize = (_a = object.maximumSize) !== null && _a !== void 0 ? _a : 0;
        message.numberOfFiles = (object.numberOfFiles !== undefined && object.numberOfFiles !== null)
            ? TableColumnFileTypeNumberOfFiles.fromPartial(object.numberOfFiles)
            : undefined;
        message.contentTypes = ((_b = object.contentTypes) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.multiple = (_c = object.multiple) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseTableColumnFileTypeNumberOfFiles() {
    return { minimum: 0, maximum: 0 };
}
export const TableColumnFileTypeNumberOfFiles = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.minimum !== 0) {
            writer.uint32(8).int32(message.minimum);
        }
        if (message.maximum !== 0) {
            writer.uint32(16).int32(message.maximum);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            minimum: isSet(object.minimum) ? Number(object.minimum) : 0,
            maximum: isSet(object.maximum) ? Number(object.maximum) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.minimum !== undefined && (obj.minimum = Math.round(message.minimum));
        message.maximum !== undefined && (obj.maximum = Math.round(message.maximum));
        return obj;
    },
    create(base) {
        return TableColumnFileTypeNumberOfFiles.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableColumnFileTypeNumberOfFiles();
        message.minimum = (_a = object.minimum) !== null && _a !== void 0 ? _a : 0;
        message.maximum = (_b = object.maximum) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseTableColumnEnumType() {
    return { defaultValue: "", values: [] };
}
export const TableColumnEnumType = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.defaultValue !== "") {
            writer.uint32(10).string(message.defaultValue);
        }
        for (const v of message.values) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
            values: Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? object.values.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    create(base) {
        return TableColumnEnumType.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableColumnEnumType();
        message.defaultValue = (_a = object.defaultValue) !== null && _a !== void 0 ? _a : "";
        message.values = ((_b = object.values) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseTableConstraint() {
    return { primaryKey: undefined, foreignKey: undefined, notNull: undefined, unique: undefined };
}
export const TableConstraint = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            primaryKey: isSet(object.primaryKey) ? TableConstraintPrimaryKey.fromJSON(object.primaryKey) : undefined,
            foreignKey: isSet(object.foreignKey) ? TableConstraintForeignKey.fromJSON(object.foreignKey) : undefined,
            notNull: isSet(object.notNull) ? TableConstraintNotNull.fromJSON(object.notNull) : undefined,
            unique: isSet(object.unique) ? TableConstraintUnique.fromJSON(object.unique) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return TableConstraint.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
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
function createBaseTableConstraintPrimaryKey() {
    return {};
}
export const TableConstraintPrimaryKey = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return TableConstraintPrimaryKey.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseTableConstraintPrimaryKey();
        return message;
    },
};
function createBaseTableConstraintForeignKey() {
    return { tableName: "", primaryKey: "" };
}
export const TableConstraintForeignKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.primaryKey !== "") {
            writer.uint32(18).string(message.primaryKey);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            tableName: isSet(object.tableName) ? String(object.tableName) : "",
            primaryKey: isSet(object.primaryKey) ? String(object.primaryKey) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tableName !== undefined && (obj.tableName = message.tableName);
        message.primaryKey !== undefined && (obj.primaryKey = message.primaryKey);
        return obj;
    },
    create(base) {
        return TableConstraintForeignKey.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableConstraintForeignKey();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.primaryKey = (_b = object.primaryKey) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTableConstraintNotNull() {
    return {};
}
export const TableConstraintNotNull = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return TableConstraintNotNull.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseTableConstraintNotNull();
        return message;
    },
};
function createBaseTableConstraintUnique() {
    return {};
}
export const TableConstraintUnique = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return TableConstraintUnique.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseTableConstraintUnique();
        return message;
    },
};
function createBaseTableIndex() {
    return { name: "", unique: false, columns: [] };
}
export const TableIndex = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.unique === true) {
            writer.uint32(16).bool(message.unique);
        }
        for (const v of message.columns) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            unique: isSet(object.unique) ? Boolean(object.unique) : false,
            columns: Array.isArray(object === null || object === void 0 ? void 0 : object.columns) ? object.columns.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.unique !== undefined && (obj.unique = message.unique);
        if (message.columns) {
            obj.columns = message.columns.map((e) => e);
        }
        else {
            obj.columns = [];
        }
        return obj;
    },
    create(base) {
        return TableIndex.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTableIndex();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.unique = (_b = object.unique) !== null && _b !== void 0 ? _b : false;
        message.columns = ((_c = object.columns) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseTableRelation() {
    return { hasOne: undefined, belongTo: undefined, oneMany: undefined, manyOne: undefined, manyMany: undefined };
}
export const TableRelation = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            hasOne: isSet(object.hasOne) ? TableRelationRelationHasOne.fromJSON(object.hasOne) : undefined,
            belongTo: isSet(object.belongTo) ? TableRelationRelationBelongTo.fromJSON(object.belongTo) : undefined,
            oneMany: isSet(object.oneMany) ? TableRelationRelationOneMany.fromJSON(object.oneMany) : undefined,
            manyOne: isSet(object.manyOne) ? TableRelationRelationManyOne.fromJSON(object.manyOne) : undefined,
            manyMany: isSet(object.manyMany) ? TableRelationRelationManyMany.fromJSON(object.manyMany) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return TableRelation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
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
function createBaseTableRelationRelationHasOne() {
    return { tableName: "", columnName: "" };
}
export const TableRelationRelationHasOne = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.columnName !== "") {
            writer.uint32(18).string(message.columnName);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            tableName: isSet(object.tableName) ? String(object.tableName) : "",
            columnName: isSet(object.columnName) ? String(object.columnName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tableName !== undefined && (obj.tableName = message.tableName);
        message.columnName !== undefined && (obj.columnName = message.columnName);
        return obj;
    },
    create(base) {
        return TableRelationRelationHasOne.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableRelationRelationHasOne();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.columnName = (_b = object.columnName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTableRelationRelationBelongTo() {
    return { tableName: "", columnName: "" };
}
export const TableRelationRelationBelongTo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.columnName !== "") {
            writer.uint32(18).string(message.columnName);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            tableName: isSet(object.tableName) ? String(object.tableName) : "",
            columnName: isSet(object.columnName) ? String(object.columnName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tableName !== undefined && (obj.tableName = message.tableName);
        message.columnName !== undefined && (obj.columnName = message.columnName);
        return obj;
    },
    create(base) {
        return TableRelationRelationBelongTo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableRelationRelationBelongTo();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.columnName = (_b = object.columnName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTableRelationRelationManyOne() {
    return { tableName: "", columnName: "" };
}
export const TableRelationRelationManyOne = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.columnName !== "") {
            writer.uint32(18).string(message.columnName);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            tableName: isSet(object.tableName) ? String(object.tableName) : "",
            columnName: isSet(object.columnName) ? String(object.columnName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tableName !== undefined && (obj.tableName = message.tableName);
        message.columnName !== undefined && (obj.columnName = message.columnName);
        return obj;
    },
    create(base) {
        return TableRelationRelationManyOne.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableRelationRelationManyOne();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.columnName = (_b = object.columnName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTableRelationRelationOneMany() {
    return { tableName: "", columnName: "" };
}
export const TableRelationRelationOneMany = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.columnName !== "") {
            writer.uint32(18).string(message.columnName);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            tableName: isSet(object.tableName) ? String(object.tableName) : "",
            columnName: isSet(object.columnName) ? String(object.columnName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tableName !== undefined && (obj.tableName = message.tableName);
        message.columnName !== undefined && (obj.columnName = message.columnName);
        return obj;
    },
    create(base) {
        return TableRelationRelationOneMany.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableRelationRelationOneMany();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.columnName = (_b = object.columnName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTableRelationRelationManyMany() {
    return { tableName: "", joinedName: "" };
}
export const TableRelationRelationManyMany = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tableName !== "") {
            writer.uint32(10).string(message.tableName);
        }
        if (message.joinedName !== "") {
            writer.uint32(18).string(message.joinedName);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            tableName: isSet(object.tableName) ? String(object.tableName) : "",
            joinedName: isSet(object.joinedName) ? String(object.joinedName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tableName !== undefined && (obj.tableName = message.tableName);
        message.joinedName !== undefined && (obj.joinedName = message.joinedName);
        return obj;
    },
    create(base) {
        return TableRelationRelationManyMany.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableRelationRelationManyMany();
        message.tableName = (_a = object.tableName) !== null && _a !== void 0 ? _a : "";
        message.joinedName = (_b = object.joinedName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMigration() {
    return { migrationId: "", changes: [] };
}
export const Migration = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.migrationId !== "") {
            writer.uint32(10).string(message.migrationId);
        }
        for (const v of message.changes) {
            MigrationChange.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            migrationId: isSet(object.migrationId) ? String(object.migrationId) : "",
            changes: Array.isArray(object === null || object === void 0 ? void 0 : object.changes) ? object.changes.map((e) => MigrationChange.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.migrationId !== undefined && (obj.migrationId = message.migrationId);
        if (message.changes) {
            obj.changes = message.changes.map((e) => e ? MigrationChange.toJSON(e) : undefined);
        }
        else {
            obj.changes = [];
        }
        return obj;
    },
    create(base) {
        return Migration.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMigration();
        message.migrationId = (_a = object.migrationId) !== null && _a !== void 0 ? _a : "";
        message.changes = ((_b = object.changes) === null || _b === void 0 ? void 0 : _b.map((e) => MigrationChange.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMigrationChange() {
    return {
        createTable: undefined,
        changeTableName: undefined,
        changeTableComment: undefined,
        addColumn: undefined,
        renameColumn: undefined,
        changeColumnComment: undefined,
        changeColumn: undefined,
        changeColumnDefault: undefined,
        changeColumnNull: undefined,
        removeTableIndex: undefined,
        removeTableRelation: undefined,
        createTableRelation: undefined,
        removeColumn: undefined,
        dropTable: undefined,
        changeTableIndex: undefined,
        createTableIndex: undefined,
        addUniqColumn: undefined,
        changeColumnUnique: undefined,
    };
}
export const MigrationChange = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return MigrationChange.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
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
function createBaseCreateTable() {
    return { key: "", changeTo: undefined, prevUuid: "", nextUuid: "", nextRecord: undefined };
}
export const CreateTable = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            changeTo: isSet(object.changeTo) ? CreateTableChange.fromJSON(object.changeTo) : undefined,
            prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
            nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
            nextRecord: isSet(object.nextRecord) ? CreateTableNextRecord.fromJSON(object.nextRecord) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.changeTo !== undefined &&
            (obj.changeTo = message.changeTo ? CreateTableChange.toJSON(message.changeTo) : undefined);
        message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
        message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
        message.nextRecord !== undefined &&
            (obj.nextRecord = message.nextRecord ? CreateTableNextRecord.toJSON(message.nextRecord) : undefined);
        return obj;
    },
    create(base) {
        return CreateTable.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateTable();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeTo = (object.changeTo !== undefined && object.changeTo !== null)
            ? CreateTableChange.fromPartial(object.changeTo)
            : undefined;
        message.prevUuid = (_b = object.prevUuid) !== null && _b !== void 0 ? _b : "";
        message.nextUuid = (_c = object.nextUuid) !== null && _c !== void 0 ? _c : "";
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? CreateTableNextRecord.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseChangeTableName() {
    return {
        key: "",
        changeFrom: "",
        changeTo: "",
        prevUuid: "",
        nextUuid: "",
        prevRecord: undefined,
        nextRecord: undefined,
    };
}
export const ChangeTableName = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return ChangeTableName.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseChangeTableName();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (_b = object.changeFrom) !== null && _b !== void 0 ? _b : "";
        message.changeTo = (_c = object.changeTo) !== null && _c !== void 0 ? _c : "";
        message.prevUuid = (_d = object.prevUuid) !== null && _d !== void 0 ? _d : "";
        message.nextUuid = (_e = object.nextUuid) !== null && _e !== void 0 ? _e : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? CreateTableNextRecord.fromPartial(object.prevRecord)
            : undefined;
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? CreateTableNextRecord.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseChangeTableComment() {
    return {
        key: "",
        changeFrom: "",
        changeTo: "",
        prevUuid: "",
        nextUuid: "",
        prevRecord: undefined,
        nextRecord: undefined,
    };
}
export const ChangeTableComment = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return ChangeTableComment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseChangeTableComment();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (_b = object.changeFrom) !== null && _b !== void 0 ? _b : "";
        message.changeTo = (_c = object.changeTo) !== null && _c !== void 0 ? _c : "";
        message.prevUuid = (_d = object.prevUuid) !== null && _d !== void 0 ? _d : "";
        message.nextUuid = (_e = object.nextUuid) !== null && _e !== void 0 ? _e : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? CreateTableNextRecord.fromPartial(object.prevRecord)
            : undefined;
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? CreateTableNextRecord.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseCreateTableChange() {
    return { name: "", uuid: "", comment: undefined };
}
export const CreateTableChange = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            uuid: isSet(object.uuid) ? String(object.uuid) : "",
            comment: isSet(object.comment) ? String(object.comment) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.comment !== undefined && (obj.comment = message.comment);
        return obj;
    },
    create(base) {
        return CreateTableChange.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateTableChange();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.uuid = (_b = object.uuid) !== null && _b !== void 0 ? _b : "";
        message.comment = (_c = object.comment) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseAddColumn() {
    return { key: "", changeTo: undefined, prevUuid: "", nextUuid: "", nextRecord: undefined };
}
export const AddColumn = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            changeTo: isSet(object.changeTo) ? MigrationColumnDefinition.fromJSON(object.changeTo) : undefined,
            prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
            nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
            nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinition.fromJSON(object.nextRecord) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.changeTo !== undefined &&
            (obj.changeTo = message.changeTo ? MigrationColumnDefinition.toJSON(message.changeTo) : undefined);
        message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
        message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
        message.nextRecord !== undefined &&
            (obj.nextRecord = message.nextRecord ? MigrationColumnDefinition.toJSON(message.nextRecord) : undefined);
        return obj;
    },
    create(base) {
        return AddColumn.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddColumn();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeTo = (object.changeTo !== undefined && object.changeTo !== null)
            ? MigrationColumnDefinition.fromPartial(object.changeTo)
            : undefined;
        message.prevUuid = (_b = object.prevUuid) !== null && _b !== void 0 ? _b : "";
        message.nextUuid = (_c = object.nextUuid) !== null && _c !== void 0 ? _c : "";
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseRenameColumn() {
    return {
        key: "",
        changeFrom: "",
        changeTo: "",
        prevUuid: "",
        nextUuid: "",
        prevRecord: undefined,
        nextRecord: undefined,
    };
}
export const RenameColumn = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return RenameColumn.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseRenameColumn();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (_b = object.changeFrom) !== null && _b !== void 0 ? _b : "";
        message.changeTo = (_c = object.changeTo) !== null && _c !== void 0 ? _c : "";
        message.prevUuid = (_d = object.prevUuid) !== null && _d !== void 0 ? _d : "";
        message.nextUuid = (_e = object.nextUuid) !== null && _e !== void 0 ? _e : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.prevRecord)
            : undefined;
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseChangeColumnComment() {
    return {
        key: "",
        changeFrom: "",
        changeTo: "",
        prevUuid: "",
        nextUuid: "",
        prevRecord: undefined,
        nextRecord: undefined,
    };
}
export const ChangeColumnComment = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return ChangeColumnComment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseChangeColumnComment();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (_b = object.changeFrom) !== null && _b !== void 0 ? _b : "";
        message.changeTo = (_c = object.changeTo) !== null && _c !== void 0 ? _c : "";
        message.prevUuid = (_d = object.prevUuid) !== null && _d !== void 0 ? _d : "";
        message.nextUuid = (_e = object.nextUuid) !== null && _e !== void 0 ? _e : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.prevRecord)
            : undefined;
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseChangeColumn() {
    return {
        key: "",
        changeFrom: "",
        changeTo: "",
        prevUuid: "",
        nextUuid: "",
        prevRecord: undefined,
        nextRecord: undefined,
    };
}
export const ChangeColumn = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return ChangeColumn.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseChangeColumn();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (_b = object.changeFrom) !== null && _b !== void 0 ? _b : "";
        message.changeTo = (_c = object.changeTo) !== null && _c !== void 0 ? _c : "";
        message.prevUuid = (_d = object.prevUuid) !== null && _d !== void 0 ? _d : "";
        message.nextUuid = (_e = object.nextUuid) !== null && _e !== void 0 ? _e : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.prevRecord)
            : undefined;
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseChangeColumnDefault() {
    return {
        key: "",
        changeFrom: "",
        changeTo: "",
        prevUuid: "",
        nextUuid: "",
        prevRecord: undefined,
        nextRecord: undefined,
    };
}
export const ChangeColumnDefault = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return ChangeColumnDefault.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseChangeColumnDefault();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (_b = object.changeFrom) !== null && _b !== void 0 ? _b : "";
        message.changeTo = (_c = object.changeTo) !== null && _c !== void 0 ? _c : "";
        message.prevUuid = (_d = object.prevUuid) !== null && _d !== void 0 ? _d : "";
        message.nextUuid = (_e = object.nextUuid) !== null && _e !== void 0 ? _e : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.prevRecord)
            : undefined;
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseChangeColumnNull() {
    return {
        key: "",
        changeFrom: "",
        changeTo: "",
        prevUuid: "",
        nextUuid: "",
        prevRecord: undefined,
        nextRecord: undefined,
    };
}
export const ChangeColumnNull = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return ChangeColumnNull.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseChangeColumnNull();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (_b = object.changeFrom) !== null && _b !== void 0 ? _b : "";
        message.changeTo = (_c = object.changeTo) !== null && _c !== void 0 ? _c : "";
        message.prevUuid = (_d = object.prevUuid) !== null && _d !== void 0 ? _d : "";
        message.nextUuid = (_e = object.nextUuid) !== null && _e !== void 0 ? _e : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.prevRecord)
            : undefined;
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseRemoveTableIndex() {
    return { key: "", changeFrom: undefined, prevUuid: "", nextUuid: "", prevRecord: undefined };
}
export const RemoveTableIndex = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            changeFrom: isSet(object.changeFrom) ? TableIndexMigration.fromJSON(object.changeFrom) : undefined,
            prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
            nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
            prevRecord: isSet(object.prevRecord) ? TableIndexMigration.fromJSON(object.prevRecord) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.changeFrom !== undefined &&
            (obj.changeFrom = message.changeFrom ? TableIndexMigration.toJSON(message.changeFrom) : undefined);
        message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
        message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
        message.prevRecord !== undefined &&
            (obj.prevRecord = message.prevRecord ? TableIndexMigration.toJSON(message.prevRecord) : undefined);
        return obj;
    },
    create(base) {
        return RemoveTableIndex.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRemoveTableIndex();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (object.changeFrom !== undefined && object.changeFrom !== null)
            ? TableIndexMigration.fromPartial(object.changeFrom)
            : undefined;
        message.prevUuid = (_b = object.prevUuid) !== null && _b !== void 0 ? _b : "";
        message.nextUuid = (_c = object.nextUuid) !== null && _c !== void 0 ? _c : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? TableIndexMigration.fromPartial(object.prevRecord)
            : undefined;
        return message;
    },
};
function createBaseRemoveTableRelation() {
    return { key: "", changeFrom: undefined, prevUuid: "", nextUuid: "", prevRecord: undefined };
}
export const RemoveTableRelation = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            changeFrom: isSet(object.changeFrom) ? TableRelationMigration.fromJSON(object.changeFrom) : undefined,
            prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
            nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
            prevRecord: isSet(object.prevRecord) ? TableIndexMigration.fromJSON(object.prevRecord) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.changeFrom !== undefined &&
            (obj.changeFrom = message.changeFrom ? TableRelationMigration.toJSON(message.changeFrom) : undefined);
        message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
        message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
        message.prevRecord !== undefined &&
            (obj.prevRecord = message.prevRecord ? TableIndexMigration.toJSON(message.prevRecord) : undefined);
        return obj;
    },
    create(base) {
        return RemoveTableRelation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRemoveTableRelation();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (object.changeFrom !== undefined && object.changeFrom !== null)
            ? TableRelationMigration.fromPartial(object.changeFrom)
            : undefined;
        message.prevUuid = (_b = object.prevUuid) !== null && _b !== void 0 ? _b : "";
        message.nextUuid = (_c = object.nextUuid) !== null && _c !== void 0 ? _c : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? TableIndexMigration.fromPartial(object.prevRecord)
            : undefined;
        return message;
    },
};
function createBaseCreateTableRelation() {
    return { key: "", changeTo: undefined, prevUuid: "", nextUuid: "", nextRecord: undefined };
}
export const CreateTableRelation = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            changeTo: isSet(object.changeTo) ? TableRelationMigration.fromJSON(object.changeTo) : undefined,
            prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
            nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
            nextRecord: isSet(object.nextRecord) ? TableRelationMigration.fromJSON(object.nextRecord) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.changeTo !== undefined &&
            (obj.changeTo = message.changeTo ? TableRelationMigration.toJSON(message.changeTo) : undefined);
        message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
        message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
        message.nextRecord !== undefined &&
            (obj.nextRecord = message.nextRecord ? TableRelationMigration.toJSON(message.nextRecord) : undefined);
        return obj;
    },
    create(base) {
        return CreateTableRelation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateTableRelation();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeTo = (object.changeTo !== undefined && object.changeTo !== null)
            ? TableRelationMigration.fromPartial(object.changeTo)
            : undefined;
        message.prevUuid = (_b = object.prevUuid) !== null && _b !== void 0 ? _b : "";
        message.nextUuid = (_c = object.nextUuid) !== null && _c !== void 0 ? _c : "";
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? TableRelationMigration.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseRemoveColumn() {
    return { key: "", changeFrom: undefined, prevUuid: "", nextUuid: "", prevRecord: undefined };
}
export const RemoveColumn = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            changeFrom: isSet(object.changeFrom) ? MigrationColumnDefinition.fromJSON(object.changeFrom) : undefined,
            prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
            nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
            prevRecord: isSet(object.prevRecord) ? MigrationColumnDefinition.fromJSON(object.prevRecord) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.changeFrom !== undefined &&
            (obj.changeFrom = message.changeFrom ? MigrationColumnDefinition.toJSON(message.changeFrom) : undefined);
        message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
        message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
        message.prevRecord !== undefined &&
            (obj.prevRecord = message.prevRecord ? MigrationColumnDefinition.toJSON(message.prevRecord) : undefined);
        return obj;
    },
    create(base) {
        return RemoveColumn.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRemoveColumn();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (object.changeFrom !== undefined && object.changeFrom !== null)
            ? MigrationColumnDefinition.fromPartial(object.changeFrom)
            : undefined;
        message.prevUuid = (_b = object.prevUuid) !== null && _b !== void 0 ? _b : "";
        message.nextUuid = (_c = object.nextUuid) !== null && _c !== void 0 ? _c : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.prevRecord)
            : undefined;
        return message;
    },
};
function createBaseDropTable() {
    return { key: "", changeFrom: undefined, prevUuid: "", nextUuid: "", prevRecord: undefined };
}
export const DropTable = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            changeFrom: isSet(object.changeFrom) ? CreateTableNextRecord.fromJSON(object.changeFrom) : undefined,
            prevUuid: isSet(object.prevUuid) ? String(object.prevUuid) : "",
            nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
            prevRecord: isSet(object.prevRecord) ? CreateTableNextRecord.fromJSON(object.prevRecord) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.changeFrom !== undefined &&
            (obj.changeFrom = message.changeFrom ? CreateTableNextRecord.toJSON(message.changeFrom) : undefined);
        message.prevUuid !== undefined && (obj.prevUuid = message.prevUuid);
        message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
        message.prevRecord !== undefined &&
            (obj.prevRecord = message.prevRecord ? CreateTableNextRecord.toJSON(message.prevRecord) : undefined);
        return obj;
    },
    create(base) {
        return DropTable.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDropTable();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (object.changeFrom !== undefined && object.changeFrom !== null)
            ? CreateTableNextRecord.fromPartial(object.changeFrom)
            : undefined;
        message.prevUuid = (_b = object.prevUuid) !== null && _b !== void 0 ? _b : "";
        message.nextUuid = (_c = object.nextUuid) !== null && _c !== void 0 ? _c : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? CreateTableNextRecord.fromPartial(object.prevRecord)
            : undefined;
        return message;
    },
};
function createBaseChangeTableIndex() {
    return {
        key: "",
        changeFrom: "",
        changeTo: "",
        prevUuid: "",
        nextUuid: "",
        prevRecord: undefined,
        nextRecord: undefined,
    };
}
export const ChangeTableIndex = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return ChangeTableIndex.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseChangeTableIndex();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (_b = object.changeFrom) !== null && _b !== void 0 ? _b : "";
        message.changeTo = (_c = object.changeTo) !== null && _c !== void 0 ? _c : "";
        message.prevUuid = (_d = object.prevUuid) !== null && _d !== void 0 ? _d : "";
        message.nextUuid = (_e = object.nextUuid) !== null && _e !== void 0 ? _e : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? TableIndexMigration.fromPartial(object.prevRecord)
            : undefined;
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? TableIndexMigration.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseCreateTableIndex() {
    return { key: "", changeTo: undefined, nextUuid: "", nextRecord: undefined };
}
export const CreateTableIndex = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            changeTo: isSet(object.changeTo) ? TableIndexMigration.fromJSON(object.changeTo) : undefined,
            nextUuid: isSet(object.nextUuid) ? String(object.nextUuid) : "",
            nextRecord: isSet(object.nextRecord) ? TableIndexMigration.fromJSON(object.nextRecord) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.changeTo !== undefined &&
            (obj.changeTo = message.changeTo ? TableIndexMigration.toJSON(message.changeTo) : undefined);
        message.nextUuid !== undefined && (obj.nextUuid = message.nextUuid);
        message.nextRecord !== undefined &&
            (obj.nextRecord = message.nextRecord ? TableIndexMigration.toJSON(message.nextRecord) : undefined);
        return obj;
    },
    create(base) {
        return CreateTableIndex.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateTableIndex();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeTo = (object.changeTo !== undefined && object.changeTo !== null)
            ? TableIndexMigration.fromPartial(object.changeTo)
            : undefined;
        message.nextUuid = (_b = object.nextUuid) !== null && _b !== void 0 ? _b : "";
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? TableIndexMigration.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseAddUniqColumn() {
    return { nextRecord: undefined };
}
export const AddUniqColumn = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextRecord !== undefined) {
            MigrationColumnDefinition.encode(message.nextRecord, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { nextRecord: isSet(object.nextRecord) ? MigrationColumnDefinition.fromJSON(object.nextRecord) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.nextRecord !== undefined &&
            (obj.nextRecord = message.nextRecord ? MigrationColumnDefinition.toJSON(message.nextRecord) : undefined);
        return obj;
    },
    create(base) {
        return AddUniqColumn.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseAddUniqColumn();
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseChangeColumnUnique() {
    return {
        key: "",
        changeFrom: false,
        changeTo: false,
        prevUuid: "",
        nextUuid: "",
        prevRecord: undefined,
        nextRecord: undefined,
    };
}
export const ChangeColumnUnique = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return ChangeColumnUnique.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseChangeColumnUnique();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.changeFrom = (_b = object.changeFrom) !== null && _b !== void 0 ? _b : false;
        message.changeTo = (_c = object.changeTo) !== null && _c !== void 0 ? _c : false;
        message.prevUuid = (_d = object.prevUuid) !== null && _d !== void 0 ? _d : "";
        message.nextUuid = (_e = object.nextUuid) !== null && _e !== void 0 ? _e : "";
        message.prevRecord = (object.prevRecord !== undefined && object.prevRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.prevRecord)
            : undefined;
        message.nextRecord = (object.nextRecord !== undefined && object.nextRecord !== null)
            ? MigrationColumnDefinition.fromPartial(object.nextRecord)
            : undefined;
        return message;
    },
};
function createBaseCreateTableNextRecord() {
    return { name: "", uuid: "", comment: "", columnDefinitions: [] };
}
export const CreateTableNextRecord = {
    encode(message, writer = _m0.Writer.create()) {
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
            MigrationColumnDefinition.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            uuid: isSet(object.uuid) ? String(object.uuid) : "",
            comment: isSet(object.comment) ? String(object.comment) : "",
            columnDefinitions: Array.isArray(object === null || object === void 0 ? void 0 : object.columnDefinitions)
                ? object.columnDefinitions.map((e) => MigrationColumnDefinition.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.comment !== undefined && (obj.comment = message.comment);
        if (message.columnDefinitions) {
            obj.columnDefinitions = message.columnDefinitions.map((e) => e ? MigrationColumnDefinition.toJSON(e) : undefined);
        }
        else {
            obj.columnDefinitions = [];
        }
        return obj;
    },
    create(base) {
        return CreateTableNextRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCreateTableNextRecord();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.uuid = (_b = object.uuid) !== null && _b !== void 0 ? _b : "";
        message.comment = (_c = object.comment) !== null && _c !== void 0 ? _c : "";
        message.columnDefinitions = ((_d = object.columnDefinitions) === null || _d === void 0 ? void 0 : _d.map((e) => MigrationColumnDefinition.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMigrationColumnDefinition() {
    return {
        name: "",
        columnType: "",
        required: false,
        unique: false,
        defaultValue: "",
        comment: "",
        uuid: "",
        tableDefinitionUuid: "",
        customForeignKey: undefined,
        tableDefinition: undefined,
    };
}
export const MigrationColumnDefinition = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return MigrationColumnDefinition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseMigrationColumnDefinition();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.columnType = (_b = object.columnType) !== null && _b !== void 0 ? _b : "";
        message.required = (_c = object.required) !== null && _c !== void 0 ? _c : false;
        message.unique = (_d = object.unique) !== null && _d !== void 0 ? _d : false;
        message.defaultValue = (_e = object.defaultValue) !== null && _e !== void 0 ? _e : "";
        message.comment = (_f = object.comment) !== null && _f !== void 0 ? _f : "";
        message.uuid = (_g = object.uuid) !== null && _g !== void 0 ? _g : "";
        message.tableDefinitionUuid = (_h = object.tableDefinitionUuid) !== null && _h !== void 0 ? _h : "";
        message.customForeignKey = (_j = object.customForeignKey) !== null && _j !== void 0 ? _j : undefined;
        message.tableDefinition = (object.tableDefinition !== undefined && object.tableDefinition !== null)
            ? TableMetaDataMigration.fromPartial(object.tableDefinition)
            : undefined;
        return message;
    },
};
function createBaseTableMetaDataMigration() {
    return { name: "", uuid: "" };
}
export const TableMetaDataMigration = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.uuid !== "") {
            writer.uint32(18).string(message.uuid);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { name: isSet(object.name) ? String(object.name) : "", uuid: isSet(object.uuid) ? String(object.uuid) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.uuid !== undefined && (obj.uuid = message.uuid);
        return obj;
    },
    create(base) {
        return TableMetaDataMigration.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableMetaDataMigration();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.uuid = (_b = object.uuid) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTableIndexMigration() {
    return { name: "", unique: false, uuid: "", tableDefinitionUuid: "", columnDefinitions: [], singleIndex: false };
}
export const TableIndexMigration = {
    encode(message, writer = _m0.Writer.create()) {
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
            MigrationColumnDefinition.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.singleIndex === true) {
            writer.uint32(48).bool(message.singleIndex);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            unique: isSet(object.unique) ? Boolean(object.unique) : false,
            uuid: isSet(object.uuid) ? String(object.uuid) : "",
            tableDefinitionUuid: isSet(object.tableDefinitionUuid) ? String(object.tableDefinitionUuid) : "",
            columnDefinitions: Array.isArray(object === null || object === void 0 ? void 0 : object.columnDefinitions)
                ? object.columnDefinitions.map((e) => MigrationColumnDefinition.fromJSON(e))
                : [],
            singleIndex: isSet(object.singleIndex) ? Boolean(object.singleIndex) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.unique !== undefined && (obj.unique = message.unique);
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.tableDefinitionUuid !== undefined && (obj.tableDefinitionUuid = message.tableDefinitionUuid);
        if (message.columnDefinitions) {
            obj.columnDefinitions = message.columnDefinitions.map((e) => e ? MigrationColumnDefinition.toJSON(e) : undefined);
        }
        else {
            obj.columnDefinitions = [];
        }
        message.singleIndex !== undefined && (obj.singleIndex = message.singleIndex);
        return obj;
    },
    create(base) {
        return TableIndexMigration.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseTableIndexMigration();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.unique = (_b = object.unique) !== null && _b !== void 0 ? _b : false;
        message.uuid = (_c = object.uuid) !== null && _c !== void 0 ? _c : "";
        message.tableDefinitionUuid = (_d = object.tableDefinitionUuid) !== null && _d !== void 0 ? _d : "";
        message.columnDefinitions = ((_e = object.columnDefinitions) === null || _e === void 0 ? void 0 : _e.map((e) => MigrationColumnDefinition.fromPartial(e))) || [];
        message.singleIndex = (_f = object.singleIndex) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
function createBaseTableRelationMigration() {
    return {
        foreignKey: "",
        relationType: "",
        required: false,
        uuid: "",
        tableDefinitionUuid: "",
        relatedTableUuid: "",
        customForeignKey: undefined,
        tableDefinition: undefined,
        relatedTable: undefined,
    };
}
export const TableRelationMigration = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return TableRelationMigration.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseTableRelationMigration();
        message.foreignKey = (_a = object.foreignKey) !== null && _a !== void 0 ? _a : "";
        message.relationType = (_b = object.relationType) !== null && _b !== void 0 ? _b : "";
        message.required = (_c = object.required) !== null && _c !== void 0 ? _c : false;
        message.uuid = (_d = object.uuid) !== null && _d !== void 0 ? _d : "";
        message.tableDefinitionUuid = (_e = object.tableDefinitionUuid) !== null && _e !== void 0 ? _e : "";
        message.relatedTableUuid = (_f = object.relatedTableUuid) !== null && _f !== void 0 ? _f : "";
        message.customForeignKey = (_g = object.customForeignKey) !== null && _g !== void 0 ? _g : undefined;
        message.tableDefinition = (object.tableDefinition !== undefined && object.tableDefinition !== null)
            ? CreateTableChange.fromPartial(object.tableDefinition)
            : undefined;
        message.relatedTable = (object.relatedTable !== undefined && object.relatedTable !== null)
            ? CreateTableChange.fromPartial(object.relatedTable)
            : undefined;
        return message;
    },
};
function createBaseGetBackendRequest() {
    return { projectId: 0 };
}
export const GetBackendRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== 0) {
            writer.uint32(8).int32(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
        return obj;
    },
    create(base) {
        return GetBackendRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetBackendRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseGetBackendResponse() {
    return { backend: undefined };
}
export const GetBackendResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.backend !== undefined) {
            Backend.encode(message.backend, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { backend: isSet(object.backend) ? Backend.fromJSON(object.backend) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.backend !== undefined && (obj.backend = message.backend ? Backend.toJSON(message.backend) : undefined);
        return obj;
    },
    create(base) {
        return GetBackendResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetBackendResponse();
        message.backend = (object.backend !== undefined && object.backend !== null)
            ? Backend.fromPartial(object.backend)
            : undefined;
        return message;
    },
};
function createBaseListTablesRequest() {
    return { projectId: 0 };
}
export const ListTablesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== 0) {
            writer.uint32(8).int32(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
        return obj;
    },
    create(base) {
        return ListTablesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListTablesRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseListTablesResponse() {
    return { tables: [] };
}
export const ListTablesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tables) {
            Table.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { tables: Array.isArray(object === null || object === void 0 ? void 0 : object.tables) ? object.tables.map((e) => Table.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.tables) {
            obj.tables = message.tables.map((e) => e ? Table.toJSON(e) : undefined);
        }
        else {
            obj.tables = [];
        }
        return obj;
    },
    create(base) {
        return ListTablesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListTablesResponse();
        message.tables = ((_a = object.tables) === null || _a === void 0 ? void 0 : _a.map((e) => Table.fromPartial(e))) || [];
        return message;
    },
};
function createBaseListMigrationsRequest() {
    return { projectId: 0 };
}
export const ListMigrationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== 0) {
            writer.uint32(8).int32(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
        return obj;
    },
    create(base) {
        return ListMigrationsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListMigrationsRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseListControllersRequest() {
    return { projectId: 0 };
}
export const ListControllersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== 0) {
            writer.uint32(8).int32(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
        return obj;
    },
    create(base) {
        return ListControllersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListControllersRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseListControllersResponse() {
    return { controllers: [] };
}
export const ListControllersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.controllers) {
            Controller.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            controllers: Array.isArray(object === null || object === void 0 ? void 0 : object.controllers) ? object.controllers.map((e) => Controller.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.controllers) {
            obj.controllers = message.controllers.map((e) => e ? Controller.toJSON(e) : undefined);
        }
        else {
            obj.controllers = [];
        }
        return obj;
    },
    create(base) {
        return ListControllersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListControllersResponse();
        message.controllers = ((_a = object.controllers) === null || _a === void 0 ? void 0 : _a.map((e) => Controller.fromPartial(e))) || [];
        return message;
    },
};
function createBaseListFeaturesRequest() {
    return { projectId: 0 };
}
export const ListFeaturesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== 0) {
            writer.uint32(8).int32(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
        return obj;
    },
    create(base) {
        return ListFeaturesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListFeaturesRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseListFeaturesResponse() {
    return { features: [] };
}
export const ListFeaturesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.features) {
            Feature.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { features: Array.isArray(object === null || object === void 0 ? void 0 : object.features) ? object.features.map((e) => Feature.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.features) {
            obj.features = message.features.map((e) => e ? Feature.toJSON(e) : undefined);
        }
        else {
            obj.features = [];
        }
        return obj;
    },
    create(base) {
        return ListFeaturesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListFeaturesResponse();
        message.features = ((_a = object.features) === null || _a === void 0 ? void 0 : _a.map((e) => Feature.fromPartial(e))) || [];
        return message;
    },
};
function createBaseListAuthorizationsRequest() {
    return { projectId: 0 };
}
export const ListAuthorizationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== 0) {
            writer.uint32(8).int32(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
        return obj;
    },
    create(base) {
        return ListAuthorizationsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListAuthorizationsRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseListAuthorizationsResponse() {
    return { authorizations: [] };
}
export const ListAuthorizationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.authorizations) {
            Authorization.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            authorizations: Array.isArray(object === null || object === void 0 ? void 0 : object.authorizations)
                ? object.authorizations.map((e) => Authorization.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authorizations) {
            obj.authorizations = message.authorizations.map((e) => e ? Authorization.toJSON(e) : undefined);
        }
        else {
            obj.authorizations = [];
        }
        return obj;
    },
    create(base) {
        return ListAuthorizationsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListAuthorizationsResponse();
        message.authorizations = ((_a = object.authorizations) === null || _a === void 0 ? void 0 : _a.map((e) => Authorization.fromPartial(e))) || [];
        return message;
    },
};
function createBaseListLocalizationsRequest() {
    return { projectId: 0 };
}
export const ListLocalizationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== 0) {
            writer.uint32(8).int32(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
        return obj;
    },
    create(base) {
        return ListLocalizationsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListLocalizationsRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseListLocalizationsResponse() {
    return { localizations: [] };
}
export const ListLocalizationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.localizations) {
            Localization.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            localizations: Array.isArray(object === null || object === void 0 ? void 0 : object.localizations)
                ? object.localizations.map((e) => Localization.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.localizations) {
            obj.localizations = message.localizations.map((e) => e ? Localization.toJSON(e) : undefined);
        }
        else {
            obj.localizations = [];
        }
        return obj;
    },
    create(base) {
        return ListLocalizationsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListLocalizationsResponse();
        message.localizations = ((_a = object.localizations) === null || _a === void 0 ? void 0 : _a.map((e) => Localization.fromPartial(e))) || [];
        return message;
    },
};
function createBaseListMigrationsResponse() {
    return { migrations: [] };
}
export const ListMigrationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.migrations) {
            Migration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            migrations: Array.isArray(object === null || object === void 0 ? void 0 : object.migrations) ? object.migrations.map((e) => Migration.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.migrations) {
            obj.migrations = message.migrations.map((e) => e ? Migration.toJSON(e) : undefined);
        }
        else {
            obj.migrations = [];
        }
        return obj;
    },
    create(base) {
        return ListMigrationsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListMigrationsResponse();
        message.migrations = ((_a = object.migrations) === null || _a === void 0 ? void 0 : _a.map((e) => Migration.fromPartial(e))) || [];
        return message;
    },
};
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
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=payloads.proto.js.map