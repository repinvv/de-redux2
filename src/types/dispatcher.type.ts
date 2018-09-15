import { IAction } from "./action.type";

export interface IDispatcher {
  dispatch: (action: IAction) => void;
}
