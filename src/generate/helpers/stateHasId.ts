import { StateId, PrepState, PrepField } from "../../prepareFiles/types";
import { Tree } from "../../createTree/types";
import { getState } from "./getNode";

export function stateHasIdInTree(stateId: StateId, tree: Tree): boolean {
  return stateHasId(getState(tree, stateId));
}

export function stateHasId(state: PrepState): boolean {
  return state.fields.some(isIdField);
}

export function isIdField(field: PrepField): boolean {
  return field.name === "id" && field.type.typeName.typeName === "string";
}
