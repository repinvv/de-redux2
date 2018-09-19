import { PrepState } from "../../../src/prepareFiles/types";

export const testStates: PrepState[] = [
  {
    id: { stateId: "./sampleFolder/child1/child1.state#Child1State" },
    fields: [
      {
        name: "subState",
        isOptional: false,
        type: {
          typeName: { typeName: "NonState" },
          stateId: { stateId: "./sampleFolder/child1/child1.state#SubState" },
          imports: []
        }
      },
      {
        name: "bool",
        isOptional: true,
        type: {
          typeName: { typeName: "boolean" },
          stateId: null,
          imports: []
        }
      },
      {
        name: "deep",
        isOptional: false,
        type: {
          typeName: { typeName: "DeepChildState" },
          stateId: { stateId: "./sampleFolder/child2/deepChild/deepChild.state#DeepChildState" },
          imports: []
        }
      }
    ]
  },
  {
    id: { stateId: "./sampleFolder/child1/child1.state#SubState" },
    fields: [{
      name: "deep2",
      isOptional: false,
      type: {
        typeName: { typeName: "DeepChildState" },
        stateId: { stateId: "./sampleFolder/child2/deepChild/deepChild.state#DeepChildState" },
        imports: []
      }
    }]
  },
  {
    id: { stateId: "./sampleFolder/child2/deepChild/deepChild.state#DeepChildState" },
    fields: [
      {
        name: "int",
        isOptional: false,
        type: {
          typeName: { typeName: "number" },
          stateId: null,
          imports: []
        }
      }
    ]
  }
];
