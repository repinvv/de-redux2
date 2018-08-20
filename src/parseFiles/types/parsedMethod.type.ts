import { ParsedField } from "./parsedField";
import { TypeName } from "./typeName.type";

export interface ParsedMethod {
  name: string;
  parameters: ParsedField[];
  returnType: TypeName;
}
