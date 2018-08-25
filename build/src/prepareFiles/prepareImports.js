"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const translateImportPathToFilePath_1 = require("./translateImportPathToFilePath");
function prepareImports(file, tsconfig) {
    return file.imports.map(imp => prepareImport(imp, file.path, tsconfig)).concat(createLocalImports(file));
}
exports.prepareImports = prepareImports;
function prepareImport(imp, path, tsconfig) {
    return {
        type: imp.type,
        alias: imp.alias,
        path: translateImportPathToFilePath_1.translateImportPathToFilePath(path, imp.path, tsconfig)
    };
}
function createLocalImports(file) {
    return file.types.map(type => ({
        type: type.name.typeName,
        alias: type.name.typeName,
        path: file.path
    }));
}
//# sourceMappingURL=prepareImports.js.map