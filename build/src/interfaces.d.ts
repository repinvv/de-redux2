export interface IAction {
    type: string;
    stateId: string;
}
export interface IDispatcher {
    dispatch: (action: IAction) => void;
}
