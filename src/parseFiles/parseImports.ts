import { ParsedImport } from "./types/parsedImport.type";
import { regexToArray, flatMap } from "@vlr/array-tools";

const importRegex = /import[\s]*{(.*)}[\s]*from[\s]*["|"](.*)["|"]/g;
export function parseImports(content: string): ParsedImport[] {
  const matches = regexToArray(importRegex, content);
  return flatMap(matches, match => parseMatch(match[1], match[2]));
}

function parseMatch(types: string, importPath: string): ParsedImport[] {
  return types.split(",").map(type => createImport(type, importPath)).filter(x => x);
}

function createImport(type: string, importPath: string): ParsedImport {
  const parts = type.split(" ").filter(s => s.length);
  if (!parts.length) { return null; }
  const index = parts.length === 3 && parts[1] === "as" ? 2 : 0;
  return {
    type: parts[0],
    alias: parts[index],
    path: { importPath }
  };
}
