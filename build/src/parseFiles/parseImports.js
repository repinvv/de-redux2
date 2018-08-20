"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_tools_1 = require("@vlr/array-tools");
const importRegex = /import[\s]*{(.*)}[\s]*from[\s]*["|"](.*)["|"]/g;
function parseImports(content) {
    const matches = array_tools_1.regexToArray(importRegex, content);
    return array_tools_1.flatMap(matches, match => parseMatch(match[1], match[2]));
}
exports.parseImports = parseImports;
function parseMatch(types, importPath) {
    return types.split(",").map(type => createImport(type, importPath)).filter(x => x);
}
function createImport(type, importPath) {
    const parts = type.split(" ").filter(s => s.length);
    if (!parts.length) {
        return null;
    }
    const index = parts.length === 3 && parts[1] === "as" ? 2 : 0;
    return {
        type: parts[0],
        alias: parts[index],
        path: { importPath }
    };
}
//# sourceMappingURL=parseImports.js.map