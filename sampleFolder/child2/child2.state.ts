import { DeepChildState } from "./deepChild/deepChild.state";

export interface Child2State {
  stateId: string;
  num: number;
  deep: DeepChildState;
}
