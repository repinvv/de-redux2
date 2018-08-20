"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stripExtension(fullName) {
    return stripToLast(fullName, ".");
}
exports.stripExtension = stripExtension;
function stripToLast(input, symbol) {
    const index = input.lastIndexOf(symbol);
    return input.substr(0, index);
}
exports.stripToLast = stripToLast;
//# sourceMappingURL=stripPath.js.map