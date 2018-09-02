import { NodeId } from "./types/nodeId.type";
import { IdType } from "../options";
export declare type CreateId = () => NodeId;
export declare function getCreateId(idtype: IdType): CreateId;
