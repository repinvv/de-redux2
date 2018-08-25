import { TypeName } from "../../parseFiles/types/typeName.type";
import { StateId } from "./stateId.type";
import { FilePath } from "../../readFiles/types/filePath.type";

export interface PrepType {
  typeName: TypeName;
  stateId: StateId;
  imports: PrepImport[];
}

export interface PrepImport {
  type: string;
  alias: string;
  path: FilePath;
}
