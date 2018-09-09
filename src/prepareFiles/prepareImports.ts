import { translateImportPathToFilePath } from "./translateImportPathToFilePath";
import { ParsedFile, ParsedImport } from "../parseFiles/types";
import { PrepImport } from "./types";
import { FilePath } from "../readFiles/types";

export function prepareImports(file: ParsedFile, tsconfig: any): PrepImport[] {
  return file.imports.map(imp => prepareImport(imp, file.path, tsconfig)).concat(createLocalImports(file));
}

function prepareImport(imp: ParsedImport, path: FilePath, tsconfig: any): PrepImport {
  return {
    type: imp.type,
    alias: imp.alias,
    path: translateImportPathToFilePath(path, imp.path, tsconfig)
  };
}

function createLocalImports(file: ParsedFile): PrepImport[] {
  return file.types.map(type => ({
    type: type.name.typeName,
    alias: type.name.typeName,
    path: file.path
  }));
}
