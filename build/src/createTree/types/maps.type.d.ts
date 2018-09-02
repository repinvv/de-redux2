import { KeyMap } from "@vlr/map-tools";
import { NodeId } from "./nodeId.type";
import { TreeNode } from "./treeNode.type";
import { PrepState } from "../../prepareFiles/types/prepState.type";
import { StateId } from "../../prepareFiles/types/stateId.type";
export declare type NodeMap = KeyMap<NodeId, TreeNode>;
export declare type StateMap = KeyMap<StateId, PrepState>;
