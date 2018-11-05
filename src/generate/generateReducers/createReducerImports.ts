import { StateReductionsBlock } from "./types/stateReductionsBlock.type";
import { flatMap } from "@vlr/array-tools";
import { FolderPath } from "../types";
import { GenImport } from "../types/genImport.type";
import { getRelativePath } from "../helpers/getRelativePath";
import { getReductionsBlockImportName } from "./getReductionsBlockImportName";

export function createReducerImports(folder: FolderPath, blocks: StateReductionsBlock[]): GenImport[] {
  return flatMap(blocks, block => createImports(folder, block));
}

function createImports(folder: FolderPath, block: StateReductionsBlock): GenImport[] {
  return block.blocks.map((red, index) => {
    const path = getRelativePath(folder, red.path);
    return {
      importName: getReductionsBlockImportName(block, index),
      path
    };
  });
}


