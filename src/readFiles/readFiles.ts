import * as glob from "globby";
import { createGlobs } from "./createGlobs";
import { Globs, Paths } from "./globs.type";
import { FullFilePath } from "./types";

export function readFiles(paths: Paths): Promise<FullFilePath[]> {
  const globs = createGlobs(paths);
  return findByGlobs(globs);
}

async function findByGlobs(globs: Globs): Promise<FullFilePath[]> {
  const filePaths = await glob(globs);
  return filePaths.map(fullFilePath => ({ fullFilePath }));
}
