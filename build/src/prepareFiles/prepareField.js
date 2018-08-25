"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createStateId_1 = require("./createStateId");
function prepareField(field, imports) {
    const isOptional = field.name.endsWith("?");
    const name = isOptional
        ? field.name.substr(0, field.name.length - 1)
        : field.name;
    return {
        name,
        isOptional,
        type: prepareType(field.typeName, imports)
    };
}
exports.prepareField = prepareField;
function prepareType(type, imports) {
    const imported = getImported(type, imports);
    const stateId = imported.length === 1
        ? createStateId_1.createStateId(type, imported[0].path)
        : null;
    return {
        typeName: type,
        stateId,
        imports: imported
    };
}
exports.prepareType = prepareType;
function getImported(type, imports) {
    const split = type.typeName.replace(/[\[|\]|\s|\t]/g, "").split(/[<|>]/);
    return split.map(type => imports.get(type.trim())).filter(type => type);
}
//# sourceMappingURL=prepareField.js.map