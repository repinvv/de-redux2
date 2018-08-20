import { FullFilePath } from "../readFiles/types/fullFilePath.type";
import { ParsedFile } from "./types/parsedFile.type";
import * as fse from "fs-extra";
import { parseFile } from "./parseFile";

export async function parseFiles(files: FullFilePath[]): Promise<ParsedFile[]> {
  return await Promise.all(files.map(readAndParseFile));
}

async function readAndParseFile(file: FullFilePath): Promise<ParsedFile> {
  const content = await fse.readFile(file.fullFilePath, "utf8");
  return parseFile(file, content);
}
