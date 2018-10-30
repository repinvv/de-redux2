import { groupBy } from "@vlr/map-tools";
import { NodeId, Tree } from "../../createTree/types";
import { PrepReduction } from "../../prepareFiles/types";
import { createPaths } from "./createPaths/createPaths";
import { ModelPath } from "./createPaths/types";
import { createReducerModel } from "./createReducerModel";
import { createReductionBlocks } from "./createReductionBlocks";
import { filterReductions } from "./filterReductions";
import { ReducerGenModel } from "./types";

export function prepareReducerModels(reductions: PrepReduction[], tree: Tree): ReducerGenModel[] {
  const paths = groupBy(createPaths(tree), path => path.root);
  return tree.roots.map(root => prepareReducerModel(root, paths.get(root), reductions, tree));
}

function prepareReducerModel(root: NodeId, paths: ModelPath[], reductions: PrepReduction[], tree: Tree): ReducerGenModel {
  const filtered = filterReductions(reductions, paths);
  const blocks = createReductionBlocks(filtered);
  return createReducerModel(root, paths, blocks, tree);
}
