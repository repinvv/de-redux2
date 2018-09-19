import { ModelPath } from "./types";
import { Tree, NodeId, TreeNode, NodeChild } from "../createTree/types";
import { flatMap } from "@vlr/array-tools";

export function createPaths(tree: Tree): ModelPath[] {
  return flatMap(tree.roots, root => createRootPaths(root, tree));
}

function createRootPaths(root: NodeId, tree: Tree): ModelPath[] {
  const node = tree.nodes.get(root);
  return createNodePaths(root, node, tree, []);
}

function createNodePaths(root: NodeId, node: TreeNode, tree: Tree, currentPath: string[]): ModelPath[] {
  const childPaths = flatMap(node.children, child => createChildPaths(root, child, tree, currentPath));
  return [nodePath(root, node, currentPath), ...childPaths];
}

function createChildPaths(root: NodeId, child: NodeChild, tree: Tree, currentPath: string[]): ModelPath[] {
  const path = [...currentPath, child.field];
  const node = tree.nodes.get(child.id);
  return createNodePaths(root, node, tree, path);
}

function nodePath(root: NodeId, node: TreeNode, path: string[]): ModelPath {
  return {
    root,
    node: node.id,
    state: node.stateId,
    path
  };
}


