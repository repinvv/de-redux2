import { NodeId, Tree, TreeNode } from "../../../createTree/types";
import { StateId, PrepState } from "../../../prepareFiles/types";

export function getNode(tree: Tree, nodeId: NodeId): TreeNode {
  return tree.nodes.get(nodeId);
}

export function getState(tree: Tree, stateId: StateId): PrepState {
  return tree.states.get(stateId);
}

export function getNodeState(tree: Tree, nodeId: NodeId): PrepState {
  const node = getNode(tree, nodeId);
  return getState(tree, node.stateId);
}
