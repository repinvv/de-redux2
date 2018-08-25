import { flatMap } from "@vlr/array-tools";
import { toMap } from "@vlr/map-tools";
import { ParsedFile } from "../parseFiles/types/parsedFile.type";
import { prepareImports } from "./prepareImports";
import { prepareReduction } from "./prepareReduction";
import { prepareState } from "./prepareState";
import { PrepModel } from "./types/prepModel.type";

export function prepareFiles(parsed: ParsedFile[], tsconfig: any): PrepModel {
  const models = parsed.map(file => prepareFile(file, tsconfig));
  return {
    states: flatMap(models, model => model.states),
    reductions: flatMap(models, model => model.reductions)
  };
}

function prepareFile(file: ParsedFile, tsconfig: any): PrepModel {
  const imports = toMap(prepareImports(file, tsconfig), imp => imp.alias);
  return {
    states:  file.types.map(type => prepareState(type, file.path, imports)),
    reductions:  file.methods.map(method => prepareReduction(method, file.path, imports))
  };
}
