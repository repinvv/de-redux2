"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("./options");
const readFiles_1 = require("./readFiles/readFiles");
const defaultOptions = {
    lineFeed: "\r\n",
    IdType: options_1.IdType.number
};
async function generate(paths, options = {}, tsconfig = {}) {
    options = Object.assign({}, defaultOptions, options);
    const files = await readFiles_1.readFiles(paths);
    console.log(files);
}
exports.generate = generate;
//# sourceMappingURL=generate.js.map