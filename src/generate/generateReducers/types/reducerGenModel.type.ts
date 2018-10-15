import { GenImport } from "../../types/genImport.type";
import { FullFilePath } from "../../../readFiles/types";

export interface ReducerGenModel {
  path: FullFilePath; // full file path to write reducer to
  actionsFile: string; // name of actions file next to reducer file
  imports: GenImport[]; // imports to address reductions
  reducerName: string; // name of the reducer, like "employeesStateReducer"
  rootStateType: string; // type name of the root state
  actions: ReducerGenAction[]; // action processed by the reducer
}

export interface ReducerGenAction {
  type: string; // name of the action type constant to use as actionTypes.employeeState_addEmployee;
  alterById: boolean; // if state has id, and is present more than once in the tree,
  // then there should be a switch by id in order to choose alter code;
  // if not, or if the id is not recognized(default), then all the states of this type need to alter;
  defaultAlter: string; // method to alter all states of the type
  alters: ReductionAlter[];
}

export interface ReductionAlter {
  id: string;
  code: string;
}
