import { StateId } from "../../../prepareFiles/types";
import { stripFrom } from "../../../tools/stripPath";

export function getStateName(stateId: StateId): string {
  return stripFrom(stateId.stateId, "#");
}
