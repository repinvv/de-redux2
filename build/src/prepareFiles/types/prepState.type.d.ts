import { PrepField } from "./prepField.type";
import { StateId } from "./stateId.type";
export interface PrepState {
    id: StateId;
    fields: PrepField[];
}
