import { StateId } from "../../prepareFiles/types";
import { stripToLast } from "../../tools/stripPath";
import { genConstants } from "../genConstants";
import { FullFilePath } from "../../readFiles/types";
import { createReducerName } from "./createReducerName";
import { FolderPath } from "../types";

export function getReducerFolder(stateId: StateId): FolderPath {
  const stateFolder = stripToLast(stateId.stateId, "/");
  return { folderPath: `${stateFolder}/${genConstants.generatedFolder}` };
}

export function createReducerPath(stateId: StateId): FullFilePath {
  return { fullFilePath: `${getReducerFolder(stateId)}/${createReducerName(stateId)}.ts` };
}
