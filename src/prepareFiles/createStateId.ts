import { TypeName } from "../parseFiles/types/typeName.type";
import { FilePath } from "../readFiles/types/filePath.type";
import { StateId } from "./types/stateId.type";

export function createStateId(typeName: TypeName, filePath: FilePath): StateId {
  return { stateId: `${filePath.filePath}#${typeName.typeName}` };
}
