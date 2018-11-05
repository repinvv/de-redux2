import { PrepField } from "./prepField.type";
import { PrepType } from "./prepType.type";
import { FilePath } from "../../readFiles/types";

export interface PrepReduction {
  filePath: FilePath; // path to a file where reduction is declared
  name: string; // reduction method name
  parameters: PrepField[]; // parameters of reduction method
  returnType: PrepType; // self explanatory
  castIndex: number; // is assigned if reduction has parameters other than prev
}
