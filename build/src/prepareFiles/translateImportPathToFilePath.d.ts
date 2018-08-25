import { ImportPath } from "../parseFiles/types/importPath.type";
import { FilePath } from "../readFiles/types/filePath.type";
export declare function translateImportPathToFilePath(parsedFile: FilePath, importPath: ImportPath, tsconfig: any): FilePath;
