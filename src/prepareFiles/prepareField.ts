import { ParsedField } from "../parseFiles/types/parsedField.type";
import { PrepImportsMap } from "./prepImportsMap.type";
import { PrepField } from "./types/prepField.type";
import { TypeName } from "../parseFiles/types/typeName.type";
import { PrepType, PrepImport } from "./types/prepType.type";
import { createStateId } from "./createStateId";

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
