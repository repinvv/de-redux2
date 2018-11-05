import { flatMap } from "@vlr/array-tools";
import { toMap } from "@vlr/map-tools";
import { ParsedFile } from "../parseFiles/types";
import { prepareImports } from "./prepareImports";
import { prepareReduction } from "./prepareReduction";
import { prepareState } from "./prepareState";
import { PrepModel } from "./types";

export function prepareFiles(parsed: ParsedFile[], tsconfig: any): PrepModel {
  const models = parsed.map(file => prepareFile(file, tsconfig));
  const reductions = flatMap(models, model => model.reductions);
  return {
    states: flatMap(models, model => model.states),
    reductions: reductions.map((r, i) => ({ ...r, castIndex: i })
  };
}

function prepareFile(file: ParsedFile, tsconfig: any): PrepModel {
  const imports = toMap(prepareImports(file, tsconfig), imp => imp.alias);
  return {
    states: file.types.map(type => prepareState(type, file.path, imports)),
    reductions: file.methods.map(method => prepareReduction(method, file.path, imports))
  };
}
