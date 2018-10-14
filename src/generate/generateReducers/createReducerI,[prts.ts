import { GenImport } from "./types";
import { FolderPath } from "./types/folderPath.type";
import { StateReductionsBlock } from "./types/stateReductionsBlock.type";
import { flatMap } from "@vlr/array-tools";
import { getStateName } from "./helpers/getStateName";
import { paramCase } from "change-case";

export function createReducerImports(folder: FolderPath, blocks: StateReductionsBlock[]): GenImport[] {
  return flatMap(blocks, block => createImports(folder, block));
}

function createImports(folder: FolderPath, block: StateReductionsBlock): GenImport[] {
  return block.blocks.map((red, index) => {
    const convertedName = paramCase(getStateName(block.stateId));
    const path = getRelativePath(folder, red.path);
    return {
      importName: convertedName,
      path
    };
  });
}


