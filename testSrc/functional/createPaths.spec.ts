import { expectedTree } from "./createTree/expectedTree";
import { expect } from "chai";
import { ModelPath } from "../../src/generate/generateReducers/createPaths/types";
import { createPaths } from "../../src/generate/generateReducers/createPaths/createPaths";

describe("createPaths", function (): void {
  it("should create paths", async function (): Promise<void> {
    // arrange
    const expected: ModelPath[] = [
      {
        root: { nodeId: "1" },
        nodeId: { nodeId: "1" },
        path: { fieldPath: [] },
        stateId: { stateId: "./sampleFolder/child1/child1.state#Child1State" }
      },
      {
        root: { nodeId: "1" },
        nodeId: { nodeId: "2" },
        path: { fieldPath: ["subState"] },
        stateId: { stateId: "./sampleFolder/child1/child1.state#SubState" }
      },
      {
        root: { nodeId: "1" },
        nodeId: { nodeId: "3" },
        path: { fieldPath: ["deep"] },
        stateId: { stateId: "./sampleFolder/child2/deepChild/deepChild.state#DeepChildState" }
      },
      {
        root: { nodeId: "1" },
        nodeId: { nodeId: "4" },
        path: { fieldPath: ["subState", "deep2"] },
        stateId: { stateId: "./sampleFolder/child2/deepChild/deepChild.state#DeepChildState" }
      }
    ];
    // act
    const result = await createPaths(expectedTree);

    // assert
    assertPaths(result, expected);
  });
});

function assertPaths(result: ModelPath[], expected: ModelPath[]): void {
  expect(result.length).equals(expected.length);
  expected.forEach(expPath => assertPath(result, expPath));
}

function assertPath(result: ModelPath[], expPath: ModelPath): void {
  const resultPath = result.find(res => res.nodeId.nodeId === expPath.nodeId.nodeId);
  expect(resultPath).deep.equals(expPath);
}
