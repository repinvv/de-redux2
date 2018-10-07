import { Tree } from "./types";
import { getParentlessStates } from "./getParentlessStates";
import { IdType } from "../options";
import { getCreateId } from "./getCreateId";
import { createNode } from "./createNode";
import { flatMap } from "@vlr/array-tools";
import { KeyMap, mapBy } from "@vlr/map-tools";
import { PrepState } from "../prepareFiles/types";

export function createTree(states: PrepState[], idType: IdType): Tree {
  const stateMap = new KeyMap(state => state.id, states);
  const parentless = getParentlessStates(states, stateMap);
  const nodeResults = parentless.map(stateId => createNode(stateId, stateMap, getCreateId(idType)));
  const allNodes = flatMap(nodeResults, nr => nr[1]);
  const roots = nodeResults.map(nr => nr[0].id);
  return {
    nodes: mapBy(allNodes, node => node.id),
    states: mapBy(states, state => state.id),
    roots
  };
}
