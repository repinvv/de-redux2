import { expect } from "chai";
import { parseFiles } from "../../src/parseFiles/parseFiles";
import { parsedSample } from "./parsedSample";

describe("parseFiles", function (): void {
  it("should parse a file", async function (): Promise<void> {
    // arrange
    const fullPath = { fullFilePath: "./sampleFolder/child1/child1.state.ts" };
    const expected = [parsedSample];

    // act
    const result = await parseFiles([fullPath]);

    // assert
    expect(result).deep.equals(expected);
  });
});
