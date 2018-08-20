import { Child1State as Child1State1 } from "./child1.state";

export function set(prev: Child1State1, bool: boolean): Child1State1 {
  return {
    ...prev,
    bool
  };
}
