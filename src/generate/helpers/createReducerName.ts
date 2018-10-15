import { getStateName } from "./getStateName";
import { StateId } from "../../prepareFiles/types";

export function createReducerName(stateId: StateId): string {
  return getStateName(stateId) + "Reducer";
}

export function createReducerFileName(stateId: StateId): string {
  return getStateName(stateId) + ".reducer";
}
