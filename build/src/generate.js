"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("./options");
const readFiles_1 = require("./readFiles/readFiles");
const parseFiles_1 = require("./parseFiles/parseFiles");
const prepareFiles_1 = require("./prepareFiles/prepareFiles");
const defaultOptions = {
    lineFeed: "\r\n",
    IdType: options_1.IdType.number
};
async function generate(paths, options = {}, tsconfig = {}) {
    options = Object.assign({}, defaultOptions, options);
    const files = await readFiles_1.readFiles(paths);
    const parsed = await parseFiles_1.parseFiles(files);
    const prepared = prepareFiles_1.prepareFiles(parsed, tsconfig);
    console.log(prepared);
}
exports.generate = generate;
//# sourceMappingURL=generate.js.map