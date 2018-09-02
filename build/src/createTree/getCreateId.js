"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("../options");
const uuid_1 = require("uuid");
let counter = 1;
function numberId() {
    return {
        nodeId: (counter++).toString()
    };
}
function uuId() {
    return {
        nodeId: uuid_1.v4()
    };
}
function getCreateId(idtype) {
    switch (idtype) {
        case options_1.IdType.uuid:
            return uuId;
        case options_1.IdType.number:
        default:
            return numberId;
    }
}
exports.getCreateId = getCreateId;
//# sourceMappingURL=getCreateId.js.map