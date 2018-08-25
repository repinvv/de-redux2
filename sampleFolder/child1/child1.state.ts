import { DeepChildState } from "../child2/deepChild/deepChild.state";

export interface Child1State {
  nonState: NonState;
  bool?: boolean;
  deep: DeepChildState;
}

export interface NonState {
  int: number;
}

export function flip(prev: Child1State): Child1State {
  return {
    ...prev,
    bool: !prev.bool
  };
}
