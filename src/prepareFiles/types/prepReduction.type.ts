import { PrepField } from "./prepField.type";
import { PrepType } from "./prepType.type";
import { FilePath } from "../../readFiles/types";

export interface PrepReduction {
  filePath: FilePath;
  name: string;
  parameters: PrepField[];
  returnType: PrepType;
}