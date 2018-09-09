import { last } from "@vlr/array-tools";
import { forIn } from "@vlr/object-tools/build/src";
import { ImportPath } from "../parseFiles/types";
import { FilePath } from "../readFiles/types";
import { combinePath } from "../tools/combinePath";

export function translateImportPathToFilePath(parsedFile: FilePath, importPath: ImportPath, tsconfig: any): FilePath {
  const splitPath = parsedSplit(parsedFile);
  const splitImport = referenceSplit(importPath);
  const filePath = splitImport[0] !== "." && splitImport[0] !== ".."
    ? applyPath(tsconfig, splitImport)
    : calculateDiff(splitPath, splitImport);
  return { filePath };
}

function parsedSplit(parsedFile: FilePath): string[] {
  const split = parsedFile.filePath.split("/");
  return split.slice(0, split.length - 1);
}

function referenceSplit(ref: ImportPath): string[] {
  return filteredSplit(ref.importPath);
}

function filteredSplit(src: string): string[] {
  return src.replace(/\\/g, "/").split("/").filter(part => part.length);
}

function applyPath(tsconfig: any, split: string[]): string {
  split[0] = tryReplace(tsconfig, split[0]);
  return split.join("/");
}

function tryReplace(tsconfig: any, first: string): string {
  if (!tsconfig || !tsconfig.baseUrl) {
    return first;
  }

  const pathstart: string = tsconfig.baseUrl;
  let result = first;
  forIn(tsconfig.paths, (repl, path) => {
    if (path === first) {
      result = combinePath(pathstart, repl[0]);
    } else if (path === first + "/*") {
      result = combinePath(pathstart, repl[0].substr(0, repl[0].length - 2));
    }
  });

  return filteredSplit(result).join("/");
}

function calculateDiff(path: string[], imp: string[]): string {
  imp.forEach(line => {
    if (line === "..") {
      path = subtractPath(path);
    } else if (line !== ".") {
      path = [...path, line];
    }
  });
  return path.join("/");
}

function subtractPath(path: string[]): string[] {
  const lastLine = last(path);
  if (lastLine === ".") {
    const lastRemoved = path.slice(0, path.length - 1);
    return [...lastRemoved, ".."];
  } else if (lastLine === "..") {
    return [...path, ".."];
  } else {
    return path.slice(0, path.length - 1);
  }
}
