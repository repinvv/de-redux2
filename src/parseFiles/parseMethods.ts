import { ParsedMethod } from "./types/parsedMethod.type";
import { regexToArray } from "@vlr/array-tools";
import { ParsedField } from "./types/parsedField";
import { splitParameters } from "./splitParameters";

const funcRegex = /export\s*function\s*([^\(\s]*)\s*?\(([^\)]*)\): ([^{\s]*)\s*?{/g;
export function parseMethods(content: string): ParsedMethod[] {
  const matches = regexToArray(funcRegex, content);
  return matches.map(match => toMethod(match)).filter(r => r);
}

function toMethod(match: string[]): ParsedMethod {
  const [, name, args, returnTypeName] = match;
  const parameters = parseParameters(args);
  if (!parameters.length || parameters.some(p => !p)
    || returnTypeName !== parameters[0].typeName.typeName) {
    console.log(`Method ${name} is ignored`);
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
