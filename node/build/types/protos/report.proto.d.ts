import * as _m0 from "protobufjs/minimal";
export declare class Report {
    projectName: string;
    projectId: number;
    progress?: ReportProgress | undefined;
    complete?: ReportComplete | undefined;
    projectExport?: ReportProjectExport | undefined;
    projectPreview?: ReportProjectPreview | undefined;
}
export declare class ReportProgress {
    percentage: number;
    message: string;
}
export declare class ReportComplete {
    path: string;
}
export declare class ReportProjectExport {
    id: number;
}
export declare class ReportProjectPreview {
    id: number;
}
export declare const ReportData: {
    encode(message: Report, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Report;
    fromJSON(object: any): Report;
    toJSON(message: Report): unknown;
    fromPartial(object: DeepPartial<Report>): Report;
};
export declare const ReportProgressData: {
    encode(message: ReportProgress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportProgress;
    fromJSON(object: any): ReportProgress;
    toJSON(message: ReportProgress): unknown;
    fromPartial(object: DeepPartial<ReportProgress>): ReportProgress;
};
export declare const ReportCompleteData: {
    encode(message: ReportComplete, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportComplete;
    fromJSON(object: any): ReportComplete;
    toJSON(message: ReportComplete): unknown;
    fromPartial(object: DeepPartial<ReportComplete>): ReportComplete;
};
export declare const ReportProjectExportData: {
    encode(message: ReportProjectExport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportProjectExport;
    fromJSON(object: any): ReportProjectExport;
    toJSON(message: ReportProjectExport): unknown;
    fromPartial(object: DeepPartial<ReportProjectExport>): ReportProjectExport;
};
export declare const ReportProjectPreviewData: {
    encode(message: ReportProjectPreview, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportProjectPreview;
    fromJSON(object: any): ReportProjectPreview;
    toJSON(message: ReportProjectPreview): unknown;
    fromPartial(object: DeepPartial<ReportProjectPreview>): ReportProjectPreview;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
