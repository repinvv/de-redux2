import { NodeId } from "./types";
import { IdType } from "../options";
import { v4 as uuid } from "uuid";

let counter = 1;

function numberId(): NodeId {
  return {
    nodeId: (counter++).toString()
  };
}

function uuId(): NodeId {
  return {
    nodeId: uuid()
  };
}

export type CreateId = () => NodeId;
export function getCreateId(idtype: IdType): CreateId {
  switch (idtype) {
    case IdType.uuid:
      return uuId;
    case IdType.number:
    default:
      return numberId;
  }
}
