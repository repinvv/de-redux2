import { ParsedField } from "./parsedField.type";
import { TypeName } from "./typeName.type";
export interface ParsedMethod {
    name: string;
    parameters: ParsedField[];
    returnType: TypeName;
}
