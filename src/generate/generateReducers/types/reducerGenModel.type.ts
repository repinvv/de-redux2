import { GenImport } from "./genImport.type";
import { FullFilePath } from "../../../readFiles/types";

export interface ReducerGenModel {
  path: FullFilePath;
  imports: GenImport[];
}
