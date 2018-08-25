"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prepareField_1 = require("./prepareField");
function prepareReduction(method, path, imports) {
    return {
        name: method.name,
        filePath: path,
        parameters: method.parameters.map(parm => prepareField_1.prepareField(parm, imports)),
        returnType: prepareField_1.prepareType(method.returnType, imports)
    };
}
exports.prepareReduction = prepareReduction;
//# sourceMappingURL=prepareReduction.js.map