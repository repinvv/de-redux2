import { flatMap } from "@vlr/array-tools";
import { combinePath } from "../tools/combinePath";
import { Globs, Paths } from "./globs.type";

const reductionPostfix = "**/*.reduction.ts";
const statePostfix = "**/*.state.ts";

export function createGlobs(paths: Paths): Globs {
  if (Array.isArray(paths)) {
    return flatMap(paths, path => createTwoGlobs(path));
  } else {
    return createTwoGlobs(paths);
  }
}

function createTwoGlobs(path: string): Globs {
  path = path.replace(/\\/g, "/");
  return [combinePath(path, statePostfix), combinePath(path, reductionPostfix)];
}
