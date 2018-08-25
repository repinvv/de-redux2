"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_tools_1 = require("@vlr/array-tools");
function parseTypes(content) {
    return parseInterfaces(content)
        .concat(parseReadonlyTypes(content));
}
exports.parseTypes = parseTypes;
const interfaceRegex = /export\s*interface\s*(.*)\s*?{\r?\n((?:.*?\r?\n?)*?)\s*?}/g;
function parseInterfaces(content) {
    const matches = array_tools_1.regexToArray(interfaceRegex, content);
    return matches.map(match => parseType(match[1], match[2]));
}
const typeRegex = /\s*?export\s*type\s*([^\s]*)\s*?=\s*?(?:Recursive)?Readonly<{\s*?\r?\n((?:.*?\r?\n)*?)\s*?}>;/g;
function parseReadonlyTypes(content) {
    const matches = array_tools_1.regexToArray(typeRegex, content);
    return matches.map(match => parseType(match[1], match[2])).filter(x => x);
}
const fieldRegex = /\s*(.*)\s*:\s*([^;]*);?/g;
function parseType(name, content) {
    const matches = array_tools_1.regexToArray(fieldRegex, content);
    const fields = matches.map(match => createField(match[1], match[2]));
    name = name.trim().split(" ")[0];
    if (!name.length) {
        return null;
    }
    if (fields.some(p => !p)) {
        console.log(`Type, name: ${name} is ignored, can't parse fields`);
        return null;
    }
    if (!fields.length) {
        console.log(`Type, name: ${name} is ignored, no fields found`);
        return null;
    }
    return {
        name: { typeName: name },
        fields
    };
}
function createField(name, typeName) {
    if (!name || !typeName) {
        return null;
    }
    return {
        name,
        typeName: { typeName: typeName.trim() }
    };
}
//# sourceMappingURL=parseTypes.js.map