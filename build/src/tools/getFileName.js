"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stripPath_1 = require("./stripPath");
function getFileName(path) {
    const index = path.lastIndexOf("/");
    return stripPath_1.stripExtension(path.substr(index + 1));
}
exports.getFileName = getFileName;
//# sourceMappingURL=getFileName.js.map