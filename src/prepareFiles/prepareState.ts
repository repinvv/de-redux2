import { PrepImportsMap } from "./prepImportsMap.type";
import { createStateId } from "./createStateId";
import { prepareField } from "./prepareField";
import { ParsedType } from "../parseFiles/types";
import { FilePath } from "../readFiles/types";
import { PrepState } from "./types";

export function prepareState(type: ParsedType, path: FilePath, imports: PrepImportsMap): PrepState {
  return {
    id: createStateId(type.name, path),
    fields: type.fields.map(field => prepareField(field, imports))
  };
}
