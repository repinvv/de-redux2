import { NodeId, Tree } from "../../createTree/types";
import { ModelPath } from "./createPaths/types";
import { StateReductionsBlock, ReducerGenModel } from "./types";
import { getNode } from "../helpers/getNode";
import { getReducerFolder, createReducerPath } from "../helpers/createReducerPath";
import { createReducerImports } from "./createReducerImports";
import { createReducerName } from "../helpers/createReducerName";
import { createDirectActionsFileImport } from "./createDirectActionsFileImport";
import { getStateName } from "../helpers/getStateName";
import { createReducerActions } from "./createReducerActions";

export function createReducerModel(root: NodeId, paths: ModelPath[], blocks: StateReductionsBlock[], tree: Tree): ReducerGenModel {
  const rootStateId = getNode(tree, root).stateId;
  const folder = getReducerFolder(rootStateId);
  return {
    path: createReducerPath(rootStateId),
    imports: createReducerImports(folder, blocks),
    reducerName: createReducerName(rootStateId),
    actionsFile: createDirectActionsFileImport(rootStateId),
    rootStateType: getStateName(rootStateId),
    actions: createReducerActions(paths, blocks)
  };
}
