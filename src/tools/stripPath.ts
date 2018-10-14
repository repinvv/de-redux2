import { FullFilePath, FilePath } from "../readFiles/types";

export function stripExtension(fullPath: FullFilePath): FilePath {
  const filePath = stripToLast(fullPath.fullFilePath, ".");
  return { filePath };
}

export function stripToLast(input: string, symbol: string): string {
  const index = input.lastIndexOf(symbol);
  return input.substr(0, index);
}

export function stripFrom(input: string, symbol: string): string {
  const index = input.lastIndexOf(symbol);
  return input.substr(index + 1);
}
