"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isComplexType(typeName) {
    return !!typeName.match(/[\[|\]|\s|\t|<|>]/);
}
exports.isComplexType = isComplexType;
//# sourceMappingURL=isComplexType.js.map