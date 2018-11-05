import { ModelPath } from "../createPaths/types";
import { StateReductionsBlock, ReducerGenAction, ReductionsBlock, ReductionAlter } from "../types";
import { Tree } from "../../../createTree/types";
import { flatMap } from "@vlr/array-tools";
import { getReductionsBlockImportName } from "../getReductionsBlockImportName";
import { PrepReduction } from "../../../prepareFiles/types";
import { createDefaultReductionAction } from "./createDefaultUserActions";
import { createAlterMethod, AlterOptions } from "../../../createAlterCode/createAlterCode";

export function createFullActions(paths: ModelPath[], block: StateReductionsBlock, tree: Tree): ReducerGenAction[] {
  return flatMap(block.blocks, (b, i) => createFullBlockActions(paths, b, tree, getReductionsBlockImportName(block, i)));
}

function createFullBlockActions(paths: ModelPath[], block: ReductionsBlock, tree: Tree, name: string): ReducerGenAction[] {
  return block.reductions.map(reduction => createFullReductionAction(paths, reduction, tree, name));
}

function createFullReductionAction(paths: ModelPath[], reduction: PrepReduction, tree: Tree, name: string): ReducerGenAction {
  return {
    ...createDefaultReductionAction(paths, reduction, tree, name),
    alterById: true,
    alters: paths.map(path => createReductionAlter(path, reduction, tree, name))
  };
}
function createReductionAlter(path: ModelPath, reduction: PrepReduction, name: string, options: AlterOptions): ReductionAlter {
  const alterAction = (path) => `${name}.${reduction.name}(${path}${createReductionParams(reduction)})`;
  return {
    id: path.nodeId.nodeId,
    code: createAlterMethod([path.path.fieldPath], alterAction, options)
  };
}

function createReductionParams(reduction: PrepReduction): string {
  if (!reduction.castIndex) {
    return "";
  }

  return ", " + reduction.parameters.slice(1).map(p => `a${reduction.castIndex}.${p.name}`).join(", ");
}
