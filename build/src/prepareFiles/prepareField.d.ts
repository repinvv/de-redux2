import { ParsedField } from "../parseFiles/types/parsedField.type";
import { PrepImportsMap } from "./prepImportsMap.type";
import { PrepField } from "./types/prepField.type";
import { TypeName } from "../parseFiles/types/typeName.type";
import { PrepType } from "./types/prepType.type";
export declare function prepareField(field: ParsedField, imports: PrepImportsMap): PrepField;
export declare function prepareType(type: TypeName, imports: PrepImportsMap): PrepType;
