"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_tools_1 = require("@vlr/array-tools");
const map_tools_1 = require("@vlr/map-tools");
const prepareImports_1 = require("./prepareImports");
const prepareReduction_1 = require("./prepareReduction");
const prepareState_1 = require("./prepareState");
function prepareFiles(parsed, tsconfig) {
    const models = parsed.map(file => prepareFile(file, tsconfig));
    return {
        states: array_tools_1.flatMap(models, model => model.states),
        reductions: array_tools_1.flatMap(models, model => model.reductions)
    };
}
exports.prepareFiles = prepareFiles;
function prepareFile(file, tsconfig) {
    const imports = map_tools_1.toMap(prepareImports_1.prepareImports(file, tsconfig), imp => imp.alias);
    return {
        states: file.types.map(type => prepareState_1.prepareState(type, file.path, imports)),
        reductions: file.methods.map(method => prepareReduction_1.prepareReduction(method, file.path, imports))
    };
}
//# sourceMappingURL=prepareFiles.js.map