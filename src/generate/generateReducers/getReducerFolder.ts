import { StateId } from "../../prepareFiles/types";
import { FolderPath } from "./types";
import { stripToLast } from "../../tools/stripPath";
import { genConstants } from "../genConstants";
import { FullFilePath } from "../../readFiles/types";
import { getStateName } from "./helpers/getStateName";

export function getReducerFolder(stateId: StateId): FolderPath {
  const stateFolder = stripToLast(stateId.stateId, "/");
  return { folderPath: `${stateFolder}/${genConstants.generatedFolder}` };
}

export function createReducerPath(stateId: StateId): FullFilePath {
  return { fullFilePath: `${getReducerFolder(stateId)}/${getStateName(stateId)}Reducer.ts` };
}
