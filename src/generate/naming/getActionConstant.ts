import { constantCase } from "change-case";
import { PrepReduction } from "../../prepareFiles/types";
import { getReductionStateName } from "./getStateName";

export function getActionConstant(reduction: PrepReduction): string {
  return `${constantCase(getReductionStateName(reduction))}__${constantCase(reduction.name)}`;
}
