import { StateId } from "../../prepareFiles/types";
import { FolderPath } from "../types";
import { stripToLast } from "../../tools/stripPath";
import { genConstants } from "../genConstants";

export function getGenerationFolder(stateId: StateId): FolderPath {
  const stateFolder = stripToLast(stateId.stateId, "/");
  return { folderPath: `${stateFolder}/${genConstants.generatedFolder}` };
}
