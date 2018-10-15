import { StateId } from "../../prepareFiles/types";
import { stripFrom } from "../../tools/stripPath";
import { paramCase } from "change-case";

export function getStateName(stateId: StateId): string {
  return stripFrom(stateId.stateId, "#");
}

export function getParamStateName(stateId: StateId): string {
  return paramCase(getStateName(stateId));
}
