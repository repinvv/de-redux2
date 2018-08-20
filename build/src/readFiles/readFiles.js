"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glob = require("globby");
const createGlobs_1 = require("./createGlobs");
function readFiles(paths) {
    const globs = createGlobs_1.createGlobs(paths);
    return findByGlobs(globs);
}
exports.readFiles = readFiles;
async function findByGlobs(globs) {
    const filePaths = await glob(globs);
    return filePaths.map(fullFilePath => ({ fullFilePath }));
}
//# sourceMappingURL=readFiles.js.map