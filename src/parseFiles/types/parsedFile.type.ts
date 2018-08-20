import { FullFilePath } from "../../readFiles/types/fullFilePath.type";
import { ParsedImport } from "./parsedImport.type";
import { ParsedType } from "./parsedType.type";
import { ParsedMethod } from "./parsedMethod.type";

export interface ParsedFile {
  path: FullFilePath;
  imports: ParsedImport[];
  types: ParsedType[];
  methods: ParsedMethod[];
}
