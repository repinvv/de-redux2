import { PrepReduction } from "../../prepareFiles/types";
import { ModelPath } from "./createPaths/types";
import { mapBy } from "@vlr/map-tools";

export function filterReductions(reductions: PrepReduction[], paths: ModelPath[]): PrepReduction[] {
  const map = mapBy(paths, path => path.stateId);
  return reductions.filter(red => map.has(red.returnType.stateId));
}
