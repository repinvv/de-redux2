import { PrepState } from "./prepState.type";
import { PrepReduction } from "./prepReduction.type";

export interface PrepModel {
  states: PrepState[];
  reductions: PrepReduction[];
}
