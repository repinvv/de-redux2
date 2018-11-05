import { GenImport } from "../../types/genImport.type";
import { FullFilePath } from "../../../readFiles/types";

export interface ReducerGenModel {
  path: FullFilePath; // full file path to write reducer to
  actionsFile: string; // name of actions file next to reducer file
  imports: GenImport[]; // imports to address reductions
  reducerName: string; // name of the reducer, like "employeesStateReducer"
  rootStateType: string; // type name of the root state
  actions: ReducerGenAction[]; // actions processed by the reducer
}

export interface ReducerGenAction {
  castIndex: boolean; // assigned when there are parameters in action, we need to do a cast to a1, for example
  actionClass: string; // action type, for example actions.EmployeeState_AddEmployeeAction;
  actionConstant: string; // name of the action type constant to use, like actionTypes.employeeState_AddEmployee;
  alterById: boolean; // if state has id, and is present more than once in the tree,
  // then there should be a switch by id in order to choose alter code;
  // if not, or if the id is not recognized(default), then all the states of this type need to alter;
  defaultAlter: string; // method to alter all states of the type
  alters: ReductionAlter[]; // methods to alter specific state in the tree by id
}

export interface ReductionAlter {
  id: string; // id of the state to alter
  code: string; // generated code altering the state
}
