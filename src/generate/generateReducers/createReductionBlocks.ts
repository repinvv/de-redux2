import { PrepReduction } from "../../prepareFiles/types";
import { StateReductionsBlock, ReductionsBlock } from "./types/stateReductionsBlock.type";
import { groupBy } from "@vlr/map-tools";
import { getReductionState } from "./helpers/getReducerState";

export function createReductionBlocks(reductions: PrepReduction[]): StateReductionsBlock[] {
  const byState = groupBy(reductions, getReductionState);
  return byState.values().map(createStateReductionsBlock);
}

function createStateReductionsBlock(reductions: PrepReduction[]): StateReductionsBlock {
  const byPath = groupBy(reductions, reduction => reduction.filePath);
  return {
    stateId: getReductionState(reductions[0]),
    blocks: byPath.values().map(createBlock)
  };
}

function createBlock(reductions: PrepReduction[]): ReductionsBlock {
  return {
    path: reductions[0].filePath,
    reductions
  };
}
