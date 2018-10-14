import { PrepReduction, StateId } from "../../../prepareFiles/types";
import { FilePath } from "../../../readFiles/types";

export interface StateReductionsBlock {
  stateId: StateId;
  blocks: ReductionsBlock[];
}

export interface ReductionsBlock {
  path: FilePath;
  reductions: PrepReduction[];
}
