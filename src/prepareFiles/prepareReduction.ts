import { PrepReduction } from "./types/prepReduction.type";
import { FilePath } from "../readFiles/types/filePath.type";
import { PrepImportsMap } from "./prepImportsMap.type";
import { ParsedMethod } from "../parseFiles/types/parsedMethod.type";
import { prepareField, prepareType } from "./prepareField";

export function prepareReduction(method: ParsedMethod, path: FilePath, imports: PrepImportsMap): PrepReduction {
  return {
    name: method.name,
    filePath: path,
    parameters: method.parameters.map(parm => prepareField(parm, imports)),
    returnType: prepareType(method.returnType, imports)
  };
}
