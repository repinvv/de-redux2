"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function combinePath(path, file) {
    if (path.endsWith("/")) {
        return path + file;
    }
    return path + "/" + file;
}
exports.combinePath = combinePath;
//# sourceMappingURL=combinePath.js.map