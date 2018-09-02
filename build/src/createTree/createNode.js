"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_tools_1 = require("@vlr/array-tools");
function createNode(stateId, stateMap, createId) {
    const state = stateMap.get(stateId);
    const id = createId();
    const children = state.fields.filter(field => stateMap.has(field.type.stateId))
        .map(field => createNodeChild(field, stateMap, createId));
    const node = {
        id,
        stateId,
        children: children.map(child => child[0])
    };
    const childNodes = array_tools_1.flatMap(children, c => c[1]);
    return [node, [node, ...childNodes]];
}
exports.createNode = createNode;
function createNodeChild(field, stateMap, createId) {
    const nodeResult = createNode(field.type.stateId, stateMap, createId);
    const child = {
        field: field.name,
        id: nodeResult[0].id
    };
    return [child, nodeResult[1]];
}
//# sourceMappingURL=createNode.js.map