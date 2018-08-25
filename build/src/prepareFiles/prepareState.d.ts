import { ParsedType } from "../parseFiles/types/parsedType.type";
import { FilePath } from "../readFiles/types/filePath.type";
import { PrepImportsMap } from "./prepImportsMap.type";
import { PrepState } from "./types/prepState.type";
export declare function prepareState(type: ParsedType, path: FilePath, imports: PrepImportsMap): PrepState;
