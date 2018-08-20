"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_tools_1 = require("@vlr/array-tools");
const combinePath_1 = require("../tools/combinePath");
const reductionPostfix = "**/*.reduction.ts";
const statePostfix = "**/*.state.ts";
function createGlobs(paths) {
    if (Array.isArray(paths)) {
        return array_tools_1.flatMap(paths, path => createTwoGlobs(path));
    }
    else {
        return createTwoGlobs(paths);
    }
}
exports.createGlobs = createGlobs;
function createTwoGlobs(path) {
    path = path.replace(/\\/g, "/");
    return [combinePath_1.combinePath(path, statePostfix), combinePath_1.combinePath(path, reductionPostfix)];
}
//# sourceMappingURL=createGlobs.js.map