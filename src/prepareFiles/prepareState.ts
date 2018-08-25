import { ParsedType } from "../parseFiles/types/parsedType.type";
import { FilePath } from "../readFiles/types/filePath.type";
import { PrepImportsMap } from "./prepImportsMap.type";
import { PrepState } from "./types/prepState.type";
import { createStateId } from "./createStateId";
import { prepareField } from "./prepareField";

export function prepareState(type: ParsedType, path: FilePath, imports: PrepImportsMap): PrepState {
  return {
    id: createStateId(type.name, path),
    fields: type.fields.map(field => prepareField(field, imports))
  };
}
