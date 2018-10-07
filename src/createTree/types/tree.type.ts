import { NodeId } from "./nodeId.type";
import { NodeMap, StateMap } from "./maps.type";

export interface Tree {
  states: StateMap;
  nodes: NodeMap;
  roots: NodeId[];
}
