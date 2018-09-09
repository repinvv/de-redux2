import { PrepImportsMap } from "./prepImportsMap.type";
import { prepareField, prepareType } from "./prepareField";
import { ParsedMethod } from "../parseFiles/types";
import { FilePath } from "../readFiles/types";
import { PrepReduction } from "./types";

export function prepareReduction(method: ParsedMethod, path: FilePath, imports: PrepImportsMap): PrepReduction {
  return {
    name: method.name,
    filePath: path,
    parameters: method.parameters.map(parm => prepareField(parm, imports)),
    returnType: prepareType(method.returnType, imports)
  };
}
