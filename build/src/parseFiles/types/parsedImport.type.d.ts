import { ImportPath } from "./importPath.type";
export interface ParsedImport {
    type: string;
    alias: string;
    path: ImportPath;
}
