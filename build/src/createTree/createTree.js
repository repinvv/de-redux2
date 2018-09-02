"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getParentlessStates_1 = require("./getParentlessStates");
const getCreateId_1 = require("./getCreateId");
const createNode_1 = require("./createNode");
const array_tools_1 = require("@vlr/array-tools");
const map_tools_1 = require("@vlr/map-tools");
function createTree(states, idType) {
    const stateMap = new map_tools_1.KeyMap(state => state.id, states);
    const parentless = getParentlessStates_1.getParentlessStates(states, stateMap);
    const nodeResults = parentless.map(stateId => createNode_1.createNode(stateId, stateMap, getCreateId_1.getCreateId(idType)));
    const allNodes = array_tools_1.flatMap(nodeResults, nr => nr[1]);
    const roots = nodeResults.map(nr => nr[0].id);
    return {
        nodes: new map_tools_1.KeyMap(node => node.id, allNodes),
        roots
    };
}
exports.createTree = createTree;
//# sourceMappingURL=createTree.js.map