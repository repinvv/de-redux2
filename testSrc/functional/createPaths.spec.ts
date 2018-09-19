import { createPaths } from "../../src/createPaths/createPaths";
import { expectedTree } from "./createTree/expectedTree";
import { ModelPath } from "../../src/createPaths/types";
import { expect } from "chai";

describe("createPaths", function (): void {
  it("should create paths", async function (): Promise<void> {
    // arrange
    const expected: ModelPath[] = [
      {
        root: { nodeId: "1" },
        node: { nodeId: "1" },
        path: [],
        state: { stateId: "./sampleFolder/child1/child1.state#Child1State" }
      },
      {
        root: { nodeId: "1" },
        node: { nodeId: "2" },
        path: ["subState"],
        state: { stateId: "./sampleFolder/child1/child1.state#SubState" }
      },
      {
        root: { nodeId: "1" },
        node: { nodeId: "3" },
        path: ["deep"],
        state: { stateId: "./sampleFolder/child2/deepChild/deepChild.state#DeepChildState" }
      },
      {
        root: { nodeId: "1" },
        node: { nodeId: "4" },
        path: ["subState", "deep2"],
        state: { stateId: "./sampleFolder/child2/deepChild/deepChild.state#DeepChildState" }
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
  const resultPath = result.find(res => res.node.nodeId === expPath.node.nodeId);
  expect(resultPath).deep.equals(expPath);
}
