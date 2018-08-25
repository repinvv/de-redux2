"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_tools_1 = require("@vlr/array-tools");
const splitParameters_1 = require("./splitParameters");
const isComplexType_1 = require("./isComplexType");
const funcRegex = /export\s*function\s*([^\(\s]*)\s*?\(([^\)]*)\): ([^{\s]*)\s*?{/g;
function parseMethods(content) {
    const matches = array_tools_1.regexToArray(funcRegex, content);
    return matches.map(match => toMethod(match)).filter(r => r);
}
exports.parseMethods = parseMethods;
function toMethod(match) {
    const [, name, args, returnTypeName] = match;
    const parameters = parseParameters(args);
    if (!parameters.length) {
        console.log(`Method ${name} is ignored due to no parameters, reduction should recieve previous state`);
        return null;
    }
    if (parameters.some(p => !p)) {
        console.log(`Method ${name} is ignored, cant parse parameters`);
        return null;
    }
    if (returnTypeName !== parameters[0].typeName.typeName) {
        console.log(`Method ${name} is ignored, return parameter should be the same as first parameter to be a reduction`);
        return null;
    }
    if (isComplexType_1.isComplexType(parameters[0].typeName)) {
        console.log(`Method ${name} is ignored, return parameter cant be array or generic in a reduction`);
        return null;
    }
    return {
        name,
        parameters,
        returnType: { typeName: returnTypeName }
    };
}
function parseParameters(args) {
    const split = splitParameters_1.splitParameters(args);
    return split.map(parm => createParameter(parm));
}
function createParameter(parm) {
    const split = parm.split(":");
    if (split.length !== 2) {
        return null;
    }
    return {
        name: split[0].trim(),
        typeName: { typeName: split[1].trim() }
    };
}
//# sourceMappingURL=parseMethods.js.map