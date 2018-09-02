import { StateId } from "../prepareFiles/types/stateId.type";
import { StateMap } from "./types/maps.type";
import { TreeNode } from "./types/treeNode.type";
import { CreateId } from "./getCreateId";
import { PrepField } from "../prepareFiles/types/prepField.type";
import { NodeChild } from "./types/nodeChild.type";
import { flatMap } from "@vlr/array-tools";

export function createNode(stateId: StateId, stateMap: StateMap, createId: CreateId): [TreeNode, TreeNode[]] {
  const state = stateMap.get(stateId);
  const id = createId();
  const children = state.fields.filter(field => stateMap.has(field.type.stateId))
    .map(field => createNodeChild(field, stateMap, createId));
  const node: TreeNode = {
    id,
    stateId,
    children: children.map(child => child[0])
  };
  const childNodes = flatMap(children, c => c[1]);
  return [node, [node, ...childNodes]];
}

function createNodeChild(field: PrepField, stateMap: StateMap, createId: CreateId): [NodeChild, TreeNode[]] {
  const nodeResult = createNode(field.type.stateId, stateMap, createId);
  const child: NodeChild = {
    field: field.name,
    id: nodeResult[0].id
  };
  return [child, nodeResult[1]];
}
