import { PrepReduction } from "./types/prepReduction.type";
import { FilePath } from "../readFiles/types/filePath.type";
import { PrepImportsMap } from "./prepImportsMap.type";
import { ParsedMethod } from "../parseFiles/types/parsedMethod.type";
export declare function prepareReduction(method: ParsedMethod, path: FilePath, imports: PrepImportsMap): PrepReduction;
