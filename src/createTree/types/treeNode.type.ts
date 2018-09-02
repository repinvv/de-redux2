import { StateId } from "../../prepareFiles/types/stateId.type";
import { NodeChild } from "./nodeChild.type";
import { NodeId } from "./nodeId.type";

export interface TreeNode {
  id: NodeId;
  stateId: StateId;
  children: NodeChild[];
}


