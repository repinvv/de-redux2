import { groupBy } from "@vlr/map-tools";
import { NodeId, Tree } from "../../createTree/types";
import { PrepReduction } from "../../prepareFiles/types";
import { createPaths } from "./createPaths/createPaths";
import { ModelPath } from "./createPaths/types";
import { ReducerGenModel } from "./types";
import { getReducerFolder, createReducerPath } from "./getReducerFolder";
import { getNode } from "./helpers/getNode";
import { createReducerImports } from "./createReducerI,[prts";
import { filterReductions } from "./filterReductions";
import { FilePath } from "../../readFiles/types";
import { createReductionBlocks } from "./createReductionBlocks";

export function prepareReducerModels(reductions: PrepReduction[], tree: Tree): ReducerGenModel[] {
  const paths = groupBy(createPaths(tree), path => path.root);
  return tree.roots.map(root => prepareReducerModel(root, paths.get(root), reductions, tree));
}

function prepareReducerModel(root: NodeId, paths: ModelPath[], reductions: PrepReduction[], tree: Tree): ReducerGenModel {
  const filtered = filterReductions(reductions, paths);
  const folder = getReducerFolder(getNode(tree, root).stateId);
  const blocks = createReductionBlocks(reductions);
  // const genPath = createGenPath(rootState);
  const groups = groupBy<PrepReduction, FilePath>(reductions, red => red.filePath);
  // const imports = groups.keys().map(key => createReductionImport(key, groups.get(key)));
  return {
    path: createReducerPath(getNode(tree, root).stateId),
    imports: createReducerImports(folder, blocks)
  };
}

