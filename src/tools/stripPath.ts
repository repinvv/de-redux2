import { FullFilePath } from "../readFiles/types/fullFilePath.type";
import { FilePath } from "../readFiles/types/filePath.type";

export function stripExtension(fullPath: FullFilePath): FilePath {
  const filePath = stripToLast(fullPath.fullFilePath, ".");
  return { filePath };
}

export function stripToLast(input: string, symbol: string): string {
  const index = input.lastIndexOf(symbol);
  return input.substr(0, index);
}
