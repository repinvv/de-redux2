"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_tools_1 = require("@vlr/array-tools");
function getStatePairs(states, stateMap) {
    return array_tools_1.flatMap(states, state => getPairs(state, stateMap));
}
exports.getStatePairs = getStatePairs;
function getPairs(state, stateMap) {
    return state.fields
        .filter(field => stateMap.has(field.type.stateId))
        .map(field => ({ parent: state.id, child: field.type.stateId }));
}
//# sourceMappingURL=getStatePairs.js.map