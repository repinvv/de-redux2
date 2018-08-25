import { ParsedField } from "./parsedField.type";
import { TypeName } from "./typeName.type";
export interface ParsedType {
    name: TypeName;
    fields: ParsedField[];
}
