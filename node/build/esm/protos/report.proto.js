/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
function createBaseReport() {
    return {
        projectName: "",
        projectId: 0,
        progress: undefined,
        complete: undefined,
        projectExport: undefined,
        projectPreview: undefined,
    };
}
export const Report = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectName !== "") {
            writer.uint32(10).string(message.projectName);
        }
        if (message.projectId !== 0) {
            writer.uint32(16).int32(message.projectId);
        }
        if (message.progress !== undefined) {
            ReportProgress.encode(message.progress, writer.uint32(26).fork()).ldelim();
        }
        if (message.complete !== undefined) {
            ReportComplete.encode(message.complete, writer.uint32(34).fork()).ldelim();
        }
        if (message.projectExport !== undefined) {
            ReportProjectExport.encode(message.projectExport, writer.uint32(42).fork()).ldelim();
        }
        if (message.projectPreview !== undefined) {
            ReportProjectPreview.encode(message.projectPreview, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectName = reader.string();
                    break;
                case 2:
                    message.projectId = reader.int32();
                    break;
                case 3:
                    message.progress = ReportProgress.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.complete = ReportComplete.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.projectExport = ReportProjectExport.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.projectPreview = ReportProjectPreview.decode(reader, reader.uint32());
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
            projectName: isSet(object.projectName) ? String(object.projectName) : "",
            projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
            progress: isSet(object.progress) ? ReportProgress.fromJSON(object.progress) : undefined,
            complete: isSet(object.complete) ? ReportComplete.fromJSON(object.complete) : undefined,
            projectExport: isSet(object.projectExport) ? ReportProjectExport.fromJSON(object.projectExport) : undefined,
            projectPreview: isSet(object.projectPreview) ? ReportProjectPreview.fromJSON(object.projectPreview) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectName !== undefined && (obj.projectName = message.projectName);
        message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
        message.progress !== undefined &&
            (obj.progress = message.progress ? ReportProgress.toJSON(message.progress) : undefined);
        message.complete !== undefined &&
            (obj.complete = message.complete ? ReportComplete.toJSON(message.complete) : undefined);
        message.projectExport !== undefined &&
            (obj.projectExport = message.projectExport ? ReportProjectExport.toJSON(message.projectExport) : undefined);
        message.projectPreview !== undefined &&
            (obj.projectPreview = message.projectPreview ? ReportProjectPreview.toJSON(message.projectPreview) : undefined);
        return obj;
    },
    create(base) {
        return Report.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseReport();
        message.projectName = (_a = object.projectName) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : 0;
        message.progress = (object.progress !== undefined && object.progress !== null)
            ? ReportProgress.fromPartial(object.progress)
            : undefined;
        message.complete = (object.complete !== undefined && object.complete !== null)
            ? ReportComplete.fromPartial(object.complete)
            : undefined;
        message.projectExport = (object.projectExport !== undefined && object.projectExport !== null)
            ? ReportProjectExport.fromPartial(object.projectExport)
            : undefined;
        message.projectPreview = (object.projectPreview !== undefined && object.projectPreview !== null)
            ? ReportProjectPreview.fromPartial(object.projectPreview)
            : undefined;
        return message;
    },
};
function createBaseReportProgress() {
    return { percentage: 0, message: "" };
}
export const ReportProgress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.percentage !== 0) {
            writer.uint32(13).float(message.percentage);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReportProgress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.percentage = reader.float();
                    break;
                case 2:
                    message.message = reader.string();
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
            percentage: isSet(object.percentage) ? Number(object.percentage) : 0,
            message: isSet(object.message) ? String(object.message) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.percentage !== undefined && (obj.percentage = message.percentage);
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    create(base) {
        return ReportProgress.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseReportProgress();
        message.percentage = (_a = object.percentage) !== null && _a !== void 0 ? _a : 0;
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseReportComplete() {
    return { path: "" };
}
export const ReportComplete = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReportComplete();
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
        return ReportComplete.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseReportComplete();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseReportProjectExport() {
    return { id: 0 };
}
export const ReportProjectExport = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReportProjectExport();
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
        return ReportProjectExport.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseReportProjectExport();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseReportProjectPreview() {
    return { id: 0 };
}
export const ReportProjectPreview = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReportProjectPreview();
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
        return ReportProjectPreview.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseReportProjectPreview();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=report.proto.js.map