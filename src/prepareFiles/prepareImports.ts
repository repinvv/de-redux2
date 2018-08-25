import { ParsedFile } from "../parseFiles/types/parsedFile.type";
import { ParsedImport } from "../parseFiles/types/parsedImport.type";
import { FilePath } from "../readFiles/types/filePath.type";
import { translateImportPathToFilePath } from "./translateImportPathToFilePath";
import { PrepImport } from "./types/prepType.type";

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
