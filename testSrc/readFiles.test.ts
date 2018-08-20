import { expect } from "chai";
import { FullFilePath } from "../src/readFiles/types/fullFilePath.type";
import { readFiles } from "../src/readFiles/readFiles";

describe("readFiles", function (): void {
  it("should read one path", async function (): Promise<void> {
    // arrange
    const expected: FullFilePath[] = [
      { fullFilePath: "./sampleFolder/child2/child2.state.ts" },
      { fullFilePath: "./sampleFolder/child2/deepChild/deepChild.state.ts" }
    ];

    // act
    const result = await readFiles("./sampleFolder/child2");

    // assert
    expect(result).deep.equals(expected);
  });

  it("should read two paths", async function (): Promise<void> {
    // arrange
    const expected: FullFilePath[] = [
      { fullFilePath: "./sampleFolder/child1/child1.state.ts" },
      { fullFilePath: "./sampleFolder/child1/child1.reduction.ts" },
      { fullFilePath: "./sampleFolder/child2/deepChild/deepChild.state.ts" }
    ];

    // act
    const result = await readFiles(["./sampleFolder/child1", "./sampleFolder/child2/deepChild"]);

    // assert
    expect(result).deep.equals(expected);
  });
});
