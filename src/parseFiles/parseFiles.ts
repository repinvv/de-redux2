import * as fse from "fs-extra";
import { parseImports } from "./parseImports";
import { parseTypes } from "./parseTypes";
import { parseMethods } from "./parseMethods";
import { stripExtension } from "../tools/stripPath";
import { ParsedFile } from "./types";
import { FullFilePath } from "../readFiles/types";

export async function parseFiles(files: FullFilePath[]): Promise<ParsedFile[]> {
  return await Promise.all(files.map(readAndParseFile));
}

async function readAndParseFile(file: FullFilePath): Promise<ParsedFile> {
  const content = await fse.readFile(file.fullFilePath, "utf8");
  return {
    path: stripExtension(file),
    imports: parseImports(content),
    types: parseTypes(content),
    methods: parseMethods(content)
  };
}
