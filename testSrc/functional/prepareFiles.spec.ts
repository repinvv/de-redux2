import { expect } from "chai";
import { prepareFiles } from "../../src/prepareFiles/prepareFiles";
import { parsedSample } from "./parsedSample";
import { preparedSample } from "./preparedSample";

describe("prepareFiles", function (): void {
  it("should prepare a model", async function (): Promise<void> {
    // arrange



    // act
    const result = await prepareFiles([parsedSample], {});

    // assert
    expect(result).deep.equals(preparedSample);
  });
});
