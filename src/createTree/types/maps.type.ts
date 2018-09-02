import { KeyMap } from "@vlr/map-tools";
import { NodeId } from "./nodeId.type";
import { TreeNode } from "./treeNode.type";
import { PrepState } from "../../prepareFiles/types/prepState.type";
import { StateId } from "../../prepareFiles/types/stateId.type";

export type NodeMap = KeyMap<NodeId, TreeNode>;

export type StateMap = KeyMap<StateId, PrepState>;
