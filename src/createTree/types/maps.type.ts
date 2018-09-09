import { KeyMap } from "@vlr/map-tools";
import { NodeId } from "./nodeId.type";
import { TreeNode } from "./treeNode.type";
import { StateId, PrepState } from "../../prepareFiles/types";

export type NodeMap = KeyMap<NodeId, TreeNode>;

export type StateMap = KeyMap<StateId, PrepState>;
