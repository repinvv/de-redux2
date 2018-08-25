import { ParsedImport } from "./parsedImport.type";
import { ParsedType } from "./parsedType.type";
import { ParsedMethod } from "./parsedMethod.type";
import { FilePath } from "../../readFiles/types/filePath.type";

export interface ParsedFile {
  path: FilePath;
  imports: ParsedImport[];
  types: ParsedType[];
  methods: ParsedMethod[];
}
