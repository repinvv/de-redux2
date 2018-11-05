import { getParamStateName, getStateName } from "../naming/getStateName";
import { StateReductionsBlock } from "./types";
import { paramCase } from "change-case";
import { StateId } from "../../prepareFiles/types";

export function getReductionsBlockImportName(block: StateReductionsBlock, index: number): string {
  const suffix = index || "";
  return getParamStateName(block.stateId) + suffix;
}

function getParamStateName(stateId: StateId): string {
  return paramCase(getStateName(stateId));
}
