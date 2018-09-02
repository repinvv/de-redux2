import { NodeId } from "./nodeId.type";
import { NodeMap } from "./maps.type";

export interface Tree {
  nodes: NodeMap;
  roots: NodeId[];
}
