import { regexToArray } from "@vlr/array-tools";
import { splitParameters } from "./splitParameters";
import { isComplexType } from "./isComplexType";
import { ParsedMethod, ParsedField } from "./types";

const funcRegex = /export\s*function\s*([^\(\s]*)\s*?\(([^\)]*)\): ([^{\s]*)\s*?{/g;
export function parseMethods(content: string): ParsedMethod[] {
  const matches = regexToArray(funcRegex, content);
  return matches.map(match => toMethod(match)).filter(r => r);
}

function toMethod(match: string[]): ParsedMethod {
  const [, name, args, returnTypeName] = match;
  const parameters = parseParameters(args);
  if (!parameters.length) {
    console.log(`Method ${name} is ignored due to no parameters, reduction should recieve previous state`);
    return null;
  }

  if (parameters.some(p => !p)) {
    console.log(`Method ${name} is ignored, cant parse parameters`);
    return null;
  }

  if (returnTypeName !== parameters[0].typeName.typeName) {
    console.log(`Method ${name} is ignored, return parameter should be the same as first parameter to be a reduction`);
    return null;
  }

  if (isComplexType(parameters[0].typeName)) {
    console.log(`Method ${name} is ignored, return parameter cant be array or generic in a reduction`);
    return null;
  }

  return {
    name,
    parameters,
    returnType: { typeName: returnTypeName }
  };
}

function parseParameters(args: string): ParsedField[] {
  const split = splitParameters(args);
  return split.map(parm => createParameter(parm));
}

function createParameter(parm: string): ParsedField {
  const split = parm.split(":");
  if (split.length !== 2) { return null; }
  return {
    name: split[0].trim(),
    typeName: { typeName: split[1].trim() }
  };
}
