import * as _m0 from "protobufjs/minimal";
export interface Report {
    projectName: string;
    projectId: number;
    progress?: ReportProgress | undefined;
    complete?: ReportComplete | undefined;
    projectExport?: ReportProjectExport | undefined;
    projectPreview?: ReportProjectPreview | undefined;
}
export interface ReportProgress {
    percentage: number;
    message: string;
}
export interface ReportComplete {
    path: string;
}
export interface ReportProjectExport {
    id: number;
}
export interface ReportProjectPreview {
    id: number;
}
export declare const Report: {
    encode(message: Report, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Report;
    fromJSON(object: any): Report;
    toJSON(message: Report): unknown;
    create(base?: DeepPartial<Report>): Report;
    fromPartial(object: DeepPartial<Report>): Report;
};
export declare const ReportProgress: {
    encode(message: ReportProgress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportProgress;
    fromJSON(object: any): ReportProgress;
    toJSON(message: ReportProgress): unknown;
    create(base?: DeepPartial<ReportProgress>): ReportProgress;
    fromPartial(object: DeepPartial<ReportProgress>): ReportProgress;
};
export declare const ReportComplete: {
    encode(message: ReportComplete, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportComplete;
    fromJSON(object: any): ReportComplete;
    toJSON(message: ReportComplete): unknown;
    create(base?: DeepPartial<ReportComplete>): ReportComplete;
    fromPartial(object: DeepPartial<ReportComplete>): ReportComplete;
};
export declare const ReportProjectExport: {
    encode(message: ReportProjectExport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportProjectExport;
    fromJSON(object: any): ReportProjectExport;
    toJSON(message: ReportProjectExport): unknown;
    create(base?: DeepPartial<ReportProjectExport>): ReportProjectExport;
    fromPartial(object: DeepPartial<ReportProjectExport>): ReportProjectExport;
};
export declare const ReportProjectPreview: {
    encode(message: ReportProjectPreview, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportProjectPreview;
    fromJSON(object: any): ReportProjectPreview;
    toJSON(message: ReportProjectPreview): unknown;
    create(base?: DeepPartial<ReportProjectPreview>): ReportProjectPreview;
    fromPartial(object: DeepPartial<ReportProjectPreview>): ReportProjectPreview;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
