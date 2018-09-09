import { StateId } from "./types";
import { TypeName } from "../parseFiles/types";
import { FilePath } from "../readFiles/types";

export function createStateId(typeName: TypeName, filePath: FilePath): StateId {
  return { stateId: `${filePath.filePath}#${typeName.typeName}` };
}
