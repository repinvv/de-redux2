import { PrepState } from "../prepareFiles/types/prepState.type";
import { StateId } from "../prepareFiles/types/stateId.type";
import { getStatePairs } from "./getStatePairs";
import { StateMap } from "./types/maps.type";
import { KeyMap } from "@vlr/map-tools";

export function getParentlessStates(states: PrepState[], stateMap: StateMap): StateId[] {
  const pairs = getStatePairs(states, stateMap);
  const childMap = new KeyMap(pair => pair.child, pairs);
  return states.map(state => state.id).filter(id => !childMap.has(id));
}
