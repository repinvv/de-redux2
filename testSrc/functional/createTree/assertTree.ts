import { TreeNode, Tree, NodeId } from "../../../src/createTree/types";
import { expect } from "chai";
import { StateId } from "../../../src/prepareFiles/types";

export function assertTree(expected: Tree, tree: Tree): void {
  expect(tree.roots.length).equals(expected.roots.length);
  expected.roots.forEach(root => assertNode(root, tree.roots, expected, tree));
}

function assertNode(id: NodeId, ids: NodeId[], expected: Tree, tree: Tree): void {
  const exNode = expected.nodes.get(id);
  const node = findByStateId(exNode.stateId, ids, tree);
  expect(node != null).equals(true);
  expect(node.children.length).equals(exNode.children.length);
  const childIds = node.children.map(child => child.id);
  exNode.children.forEach(child => assertNode(child.id, childIds, expected, tree));
}

function findByStateId(stateId: StateId, ids: NodeId[], tree: Tree): TreeNode {
  return ids.map(id => tree.nodes.get(id)).find(node => sameStateId(node.stateId, stateId));
}

function sameStateId(id1: StateId, id2: StateId): boolean {
  return id1.stateId === id2.stateId;
}
