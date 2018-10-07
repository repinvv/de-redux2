import { groupBy } from "@vlr/map-tools";
import { NodeId, Tree } from "../../createTree/types";
import { PrepReduction } from "../../prepareFiles/types";
import { createPaths } from "./createPaths/createPaths";
import { ModelPath } from "./createPaths/types";
import { ReducerGenModel } from "./types";

export function prepareReducerModels(reductions: PrepReduction[], tree: Tree): ReducerGenModel[] {
  const paths = groupBy(createPaths(tree), path => path.root);
  return tree.roots.map(root => prepareReducerModel(root, paths.get(root), reductions, tree));
}

function prepareReducerModel(root: NodeId, paths: ModelPath[], reductions: PrepReduction[], tree: Tree): ReducerGenModel {
  // const rootState = tree.nodes.get(root).stateId;
  // const genPath = createGenPath(rootState);
  // const groups = groupBy<PrepReduction, FilePath>(reductions, red => red.filePath);
  // const imports = groups.keys().map(key => createReductionImport(key, groups.get(key)));
  return null;
}

// function createReductionImport(path: FilePath, reduction: PrepReduction[]): GenImport {
//   return null;
// }

// function createGenPath(state: StateId): FilePath {
//   return null;
// }
