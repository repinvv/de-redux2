import { PrepReduction, StateId } from "../../prepareFiles/types";

export function getReductionState(reduction: PrepReduction): StateId {
  return reduction.returnType.stateId;
}
