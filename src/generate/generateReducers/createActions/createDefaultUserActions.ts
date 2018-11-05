import { ModelPath } from "../createPaths/types";
import { StateReductionsBlock, ReducerGenAction, ReductionsBlock, ReductionAlter } from "../types";
import { Tree } from "../../../createTree/types";
import { flatMap } from "@vlr/array-tools";
import { getReductionsBlockImportName } from "../getReductionsBlockImportName";
import { PrepReduction } from "../../../prepareFiles/types";
import { getActionConstant } from "../../naming/getActionConstant";

export function createDefaultActions(paths: ModelPath[], block: StateReductionsBlock, tree: Tree): ReducerGenAction[] {
  return flatMap(block.blocks, (b, i) => createDefaultBlockActions(paths, b, tree, getReductionsBlockImportName(block, i)));
}

function createDefaultBlockActions(paths: ModelPath[], block: ReductionsBlock, tree: Tree, name: string): ReducerGenAction[] {
  return block.reductions.map(reduction => createDefaultReductionAction(paths, reduction, tree, name));
}

export function createDefaultReductionAction(paths: ModelPath[], reduction: PrepReduction, tree: Tree, name: string): ReducerGenAction {
  return {
    type: getActionConstant(reduction),
    alterById: false,
    alters: [] 
  };
}

