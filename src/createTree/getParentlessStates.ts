import { getStatePairs } from "./getStatePairs";
import { StateMap } from "./types";
import { KeyMap } from "@vlr/map-tools";
import { PrepState, StateId } from "../prepareFiles/types";

export function getParentlessStates(states: PrepState[], stateMap: StateMap): StateId[] {
  const pairs = getStatePairs(states, stateMap);
  const childMap = new KeyMap(pair => pair.child, pairs);
  return states.map(state => state.id).filter(id => !childMap.has(id));
}
