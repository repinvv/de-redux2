import { StateId } from "../prepareFiles/types/stateId.type";
import { StateMap } from "./types/maps.type";
import { TreeNode } from "./types/treeNode.type";
import { CreateId } from "./getCreateId";
export declare function createNode(stateId: StateId, stateMap: StateMap, createId: CreateId): [TreeNode, TreeNode[]];
