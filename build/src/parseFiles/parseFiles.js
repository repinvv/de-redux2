"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fse = require("fs-extra");
const parseFile_1 = require("./parseFile");
async function parseFiles(files) {
    return await Promise.all(files.map(readAndParseFile));
}
exports.parseFiles = parseFiles;
async function readAndParseFile(file) {
    const content = await fse.readFile(file.fullFilePath, "utf8");
    return parseFile_1.parseFile(file, content);
}
//# sourceMappingURL=parseFiles.js.map