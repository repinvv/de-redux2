"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStatePairs_1 = require("./getStatePairs");
const map_tools_1 = require("@vlr/map-tools");
function getParentlessStates(states, stateMap) {
    const pairs = getStatePairs_1.getStatePairs(states, stateMap);
    const childMap = new map_tools_1.KeyMap(pair => pair.child, pairs);
    return states.map(state => state.id).filter(id => !childMap.has(id));
}
exports.getParentlessStates = getParentlessStates;
//# sourceMappingURL=getParentlessStates.js.map