import { StateId, PrepReduction } from "../../prepareFiles/types";
import { stripFrom } from "../../tools/stripPath";

export function getStateName(stateId: StateId): string {
  return stripFrom(stateId.stateId, "#");
}

export function getReductionStateName(reduction: PrepReduction): string {
  return getStateName(reduction.returnType.stateId);
}
