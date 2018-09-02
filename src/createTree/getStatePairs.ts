import { PrepState } from "../prepareFiles/types/prepState.type";
import { StateMap } from "./types/maps.type";
import { StatePair } from "./types/statePair.type";
import { flatMap } from "@vlr/array-tools";

export function getStatePairs(states: PrepState[], stateMap: StateMap): StatePair[] {
  return flatMap(states, state => getPairs(state, stateMap));
}

function getPairs(state: PrepState, stateMap: StateMap): StatePair[] {
  return state.fields
    .filter(field => stateMap.has(field.type.stateId))
    .map(field => ({ parent: state.id, child: field.type.stateId }));
}
