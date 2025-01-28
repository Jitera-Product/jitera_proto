/* eslint-disable */
import _m0 from "protobufjs/minimal";

export class TeamDeletionRequest {
  projectData: ProjectDeletedData[];
}

export class ProjectDeletedData {
  projectId: number;
  projectSourceId: number[];
  projectGenerateId: number[];
}

function createBaseTeamDeletionRequest(): TeamDeletionRequest {
  return { projectData: [] };
}

export const TeamDeletionRequestData = {
  encode(message: TeamDeletionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projectData) {
      ProjectDeletedDataData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TeamDeletionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTeamDeletionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectData.push(ProjectDeletedDataData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TeamDeletionRequest {
    return {
      projectData: Array.isArray(object?.projectData)
        ? object.projectData.map((e: any) => ProjectDeletedDataData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TeamDeletionRequest): unknown {
    const obj: any = {};
    if (message.projectData) {
      obj.projectData = message.projectData.map((e) => e ? ProjectDeletedDataData.toJSON(e) : undefined);
    } else {
      obj.projectData = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TeamDeletionRequest>): TeamDeletionRequest {
    const message = createBaseTeamDeletionRequest();
    message.projectData = object.projectData?.map((e) => ProjectDeletedDataData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProjectDeletedData(): ProjectDeletedData {
  return { projectId: 0, projectSourceId: [], projectGenerateId: [] };
}

export const ProjectDeletedDataData = {
  encode(message: ProjectDeletedData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    writer.uint32(18).fork();
    for (const v of message.projectSourceId) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.projectGenerateId) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectDeletedData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectDeletedData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.projectSourceId.push(reader.int32());
            }
          } else {
            message.projectSourceId.push(reader.int32());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.projectGenerateId.push(reader.int32());
            }
          } else {
            message.projectGenerateId.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectDeletedData {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectSourceId: Array.isArray(object?.projectSourceId) ? object.projectSourceId.map((e: any) => Number(e)) : [],
      projectGenerateId: Array.isArray(object?.projectGenerateId)
        ? object.projectGenerateId.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: ProjectDeletedData): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.projectSourceId) {
      obj.projectSourceId = message.projectSourceId.map((e) => Math.round(e));
    } else {
      obj.projectSourceId = [];
    }
    if (message.projectGenerateId) {
      obj.projectGenerateId = message.projectGenerateId.map((e) => Math.round(e));
    } else {
      obj.projectGenerateId = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProjectDeletedData>): ProjectDeletedData {
    const message = createBaseProjectDeletedData();
    message.projectId = object.projectId ?? 0;
    message.projectSourceId = object.projectSourceId?.map((e) => e) || [];
    message.projectGenerateId = object.projectGenerateId?.map((e) => e) || [];
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
