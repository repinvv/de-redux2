import { TreeNode, Tree } from "../../../src/createTree/types";
import { KeyMap } from "@vlr/map-tools";

const expectedNodes: TreeNode[] = [
  {
    id: { nodeId: "1" },
    stateId: { stateId: "./sampleFolder/child1/child1.state#Child1State" },
    children: [
      {
        id: { nodeId: "2" },
        field: "subState"
      },
      {
        id: { nodeId: "3" },
        field: "deep"
      }
    ]
  },
  {
    id: { nodeId: "2" },
    stateId: { stateId: "./sampleFolder/child1/child1.state#SubState" },
    children: [
      {
        id: { nodeId: "4" },
        field: "deep2"
      }
    ]
  },
  {
    id: { nodeId: "3" },
    stateId: { stateId: "./sampleFolder/child2/deepChild/deepChild.state#DeepChildState" },
    children: []
  },
  {
    id: { nodeId: "4" },
    stateId: { stateId: "./sampleFolder/child2/deepChild/deepChild.state#DeepChildState" },
    children: []
  }
];

export const expectedTree: Tree = {
  nodes: new KeyMap(node => node.id, expectedNodes),
  roots: [{ nodeId: "1" }]
};
