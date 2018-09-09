import { PrepImportsMap } from "./prepImportsMap.type";
import { createStateId } from "./createStateId";
import { ParsedField, TypeName } from "../parseFiles/types";
import { PrepField, PrepType, PrepImport } from "./types";

export function prepareField(field: ParsedField, imports: PrepImportsMap): PrepField {
  const isOptional = field.name.endsWith("?");
  const name = isOptional
    ? field.name.substr(0, field.name.length - 1)
    : field.name;
  return {
    name,
    isOptional,
    type: prepareType(field.typeName, imports)
  };
}

export function prepareType(type: TypeName, imports: PrepImportsMap): PrepType {
  const imported = getImported(type, imports);
  const stateId = imported.length === 1
    ? createStateId(type, imported[0].path)
    : null;
  return {
    typeName: type,
    stateId,
    imports: imported
  };
}

function getImported(type: TypeName, imports: PrepImportsMap): PrepImport[] {
  const split = type.typeName.replace(/[\[|\]|\s|\t]/g, "").split(/[<|>]/);
  return split.map(type => imports.get(type.trim())).filter(type => type);
}
