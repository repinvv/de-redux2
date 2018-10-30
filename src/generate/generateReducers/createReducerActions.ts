import { ModelPath } from "./createPaths/types";
import { StateReductionsBlock, ReducerGenAction } from "./types";
import { groupBy } from "@vlr/map-tools";
import { flatMap } from "@vlr/array-tools";
import { Tree } from "../../createTree/types";

export function createReducerActions(paths: ModelPath[], blocks: StateReductionsBlock[], tree: Tree): ReducerGenAction[] {
  const pathsByState = groupBy(paths, path => path.stateId);
  var userActions = flatMap(blocks, block => createUserActions(pathsByState.get(block.stateId), block, tree));
  var alterActions = createAlterActions(paths, tree);
  return userActions.concat(alterActions);
}

function createUserActions(paths: ModelPath[], block: StateReductionsBlock, tree: Tree): ReducerGenAction[] {
  return [];
}

function createAlterActions(paths: ModelPath[], tree: Tree): ReducerGenAction[] {
  return [];
}
