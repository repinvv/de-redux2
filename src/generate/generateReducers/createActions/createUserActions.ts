import { Tree } from "../../../createTree/types";
import { stateHasIdInTree } from "../../helpers/stateHasId";
import { ModelPath } from "../createPaths/types";
import { ReducerGenAction, StateReductionsBlock } from "../types";
import { createDefaultActions } from "./createDefaultUserActions";
import { createFullActions } from "./createFullUserActions";

export function createUserActions(paths: ModelPath[], block: StateReductionsBlock, tree: Tree): ReducerGenAction[] {
  if (stateHasIdInTree(block.stateId, tree)) {
    return createFullActions(paths, block, tree);
  }

  return createDefaultActions(paths, block, tree);
}


