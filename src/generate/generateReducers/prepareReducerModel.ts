import { groupBy } from "@vlr/map-tools";
import { NodeId, Tree } from "../../createTree/types";
import { PrepReduction } from "../../prepareFiles/types";
import { createPaths } from "./createPaths/createPaths";
import { ModelPath } from "./createPaths/types";
import { createReducerImports } from "./createReducerImports";
import { createReductionBlocks } from "./createReductionBlocks";
import { filterReductions } from "./filterReductions";
import { createReducerPath, getReducerFolder } from "./helpers/createReducerPath";
import { getNode } from "./helpers/getNode";
import { ReducerGenModel } from "./types";
import { createReducerName } from "./helpers/createReducerName";

export function prepareReducerModels(reductions: PrepReduction[], tree: Tree): ReducerGenModel[] {
  const paths = groupBy(createPaths(tree), path => path.root);
  return tree.roots.map(root => prepareReducerModel(root, paths.get(root), reductions, tree));
}

function prepareReducerModel(root: NodeId, paths: ModelPath[], reductions: PrepReduction[], tree: Tree): ReducerGenModel {
  const filtered = filterReductions(reductions, paths);
  const folder = getReducerFolder(getNode(tree, root).stateId);
  const blocks = createReductionBlocks(filtered);
  const stateId = getNode(tree, root).stateId;
  return {
    path: createReducerPath(stateId),
    imports: createReducerImports(folder, blocks),
    reducerName: createReducerName(stateId),
    actionsFile
  };
}

