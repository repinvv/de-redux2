"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_tools_1 = require("@vlr/array-tools");
const src_1 = require("@vlr/object-tools/build/src");
const combinePath_1 = require("../tools/combinePath");
function translateImportPathToFilePath(parsedFile, importPath, tsconfig) {
    const splitPath = parsedSplit(parsedFile);
    const splitImport = referenceSplit(importPath);
    const filePath = splitImport[0] !== "." && splitImport[0] !== ".."
        ? applyPath(tsconfig, splitImport)
        : calculateDiff(splitPath, splitImport);
    return { filePath };
}
exports.translateImportPathToFilePath = translateImportPathToFilePath;
function parsedSplit(parsedFile) {
    const split = parsedFile.filePath.split("/");
    return split.slice(0, split.length - 1);
}
function referenceSplit(ref) {
    return filteredSplit(ref.importPath);
}
function filteredSplit(src) {
    return src.replace(/\\/g, "/").split("/").filter(part => part.length);
}
function applyPath(tsconfig, split) {
    split[0] = tryReplace(tsconfig, split[0]);
    return split.join("/");
}
function tryReplace(tsconfig, first) {
    if (!tsconfig || !tsconfig.baseUrl) {
        return first;
    }
    const pathstart = tsconfig.baseUrl;
    let result = first;
    src_1.forIn(tsconfig.paths, (repl, path) => {
        if (path === first) {
            result = combinePath_1.combinePath(pathstart, repl[0]);
        }
        else if (path === first + "/*") {
            result = combinePath_1.combinePath(pathstart, repl[0].substr(0, repl[0].length - 2));
        }
    });
    return filteredSplit(result).join("/");
}
function calculateDiff(path, imp) {
    imp.forEach(line => {
        if (line === "..") {
            path = subtractPath(path);
        }
        else if (line !== ".") {
            path = [...path, line];
        }
    });
    return path.join("/");
}
function subtractPath(path) {
    const lastLine = array_tools_1.last(path);
    if (lastLine === ".") {
        const lastRemoved = path.slice(0, path.length - 1);
        return [...lastRemoved, ".."];
    }
    else if (lastLine === "..") {
        return [...path, ".."];
    }
    else {
        return path.slice(0, path.length - 1);
    }
}
//# sourceMappingURL=translateImportPathToFilePath.js.map