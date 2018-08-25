"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createStateId_1 = require("./createStateId");
const prepareField_1 = require("./prepareField");
function prepareState(type, path, imports) {
    return {
        id: createStateId_1.createStateId(type.name, path),
        fields: type.fields.map(field => prepareField_1.prepareField(field, imports))
    };
}
exports.prepareState = prepareState;
//# sourceMappingURL=prepareState.js.map