import { groupBy } from "@vlr/map-tools";
import { flatMap } from "@vlr/array-tools";
import { createAlterActions } from "./createAlterActions";
import { createUserActions } from "./createUserActions";
import { ModelPath } from "../createPaths/types";
import { StateReductionsBlock, ReducerGenAction } from "../types";
import { Tree } from "../../../createTree/types";

export function createReducerActions(paths: ModelPath[], blocks: StateReductionsBlock[], tree: Tree): ReducerGenAction[] {
  const pathsByState = groupBy(paths, path => path.stateId);
  var userActions = flatMap(blocks, block => createUserActions(pathsByState.get(block.stateId), block, tree));
  var alterActions = flatMap(pathsByState.values(), p => createAlterActions(p, tree));
  return userActions.concat(alterActions);
}



