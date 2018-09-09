import { expect } from "chai";
import { prepareFiles } from "../../src/prepareFiles/prepareFiles";
import { sampleFile } from "./sampleFile";
import { PrepState, PrepReduction, PrepModel } from "../../src/prepareFiles/types";

describe("prepareFiles", function (): void {
  it("should prepare a model", async function (): Promise<void> {
    // arrange

    const states: PrepState[] = [
      {
        id: { stateId: "./sampleFolder/child1/child1.state#Child1State" },
        fields: [
          {
            name: "nonState",
            isOptional: false,
            type: {
              typeName: { typeName: "NonState" },
              stateId: { stateId: "./sampleFolder/child1/child1.state#NonState" },
              imports: [{
                type: "NonState",
                alias: "NonState",
                path: { filePath: "./sampleFolder/child1/child1.state" }
              }]
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
              imports: [
                {
                  type: "DeepChildState",
                  alias: "DeepChildState",
                  path: { filePath: "./sampleFolder/child2/deepChild/deepChild.state" }
                }
              ]
            }
          }
        ]
      },
      {
        id: { stateId: "./sampleFolder/child1/child1.state#NonState" },
        fields: [{
          name: "int",
          isOptional: false,
          type: {
            typeName: { typeName: "number" },
            stateId: null,
            imports: []
          }
        }]
      }
    ];

    const reductions: PrepReduction[] = [
      {
        name: "flip",
        filePath: { filePath: "./sampleFolder/child1/child1.state" },
        parameters: [
          {
            name: "prev",
            isOptional: false,
            type: {
              typeName: { typeName: "Child1State" },
              stateId: { stateId: "./sampleFolder/child1/child1.state#Child1State" },
              imports: [{
                type: "Child1State",
                alias: "Child1State",
                path: { filePath: "./sampleFolder/child1/child1.state" }
              }]
            }
          }
        ],
        returnType: {
          typeName: { typeName: "Child1State" },
          stateId: { stateId: "./sampleFolder/child1/child1.state#Child1State" },
          imports: [{
            type: "Child1State",
            alias: "Child1State",
            path: { filePath: "./sampleFolder/child1/child1.state" }
          }]
        }
      }
    ];

    const expected: PrepModel = {
      states,
      reductions
    };

    // act
    const result = await prepareFiles([sampleFile], {});

    // assert
    expect(result).deep.equals(expected);
  });
});
