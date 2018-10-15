import { FolderPath } from "../types/folderPath.type";
import { FilePath } from "../../readFiles/types";

export function getRelativePath(folderPath: FolderPath, imported: FilePath): string {
  const path = imported.filePath;
  const src = folderPath.folderPath;
  if (!path.startsWith(".") && !path.startsWith("..")) {
    return path;
  }

  let pathSplit = path.split("/");
  let srcSplit = src.split("/");
  while (pathSplit.length && srcSplit.length && pathSplit[0] === srcSplit[0]) {
    pathSplit = pathSplit.slice(1);
    srcSplit = srcSplit.slice(1);
  }

  const resultSplit = [...srcSplit.map(s => ".."), ...pathSplit];
  const result = resultSplit.join("/");
  if (!result.length) {
    return ".";
  }

  return result.startsWith(".") ? result : "./";
}
