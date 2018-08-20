"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fse = require("fs-extra");
const parseImports_1 = require("./parseImports");
const parseTypes_1 = require("./parseTypes");
const parseMethods_1 = require("./parseMethods");
async function parseFiles(files) {
    return await Promise.all(files.map(readAndParseFile));
}
exports.parseFiles = parseFiles;
async function readAndParseFile(file) {
    const content = await fse.readFile(file.fullFilePath, "utf8");
    return {
        path: file,
        imports: parseImports_1.parseImports(content),
        types: parseTypes_1.parseTypes(content),
        methods: parseMethods_1.parseMethods(content)
    };
}
//# sourceMappingURL=parseFiles.js.map