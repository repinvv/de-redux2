import { collapseSpaces } from "../../../src/createAlterCode/collapseSpaces";
import { expect } from "chai";

describe("collapseSpaces", function (): void {
  it("should collapse spaces", async function (): Promise<void> {
    // arrange
    const input = ` a   b  c
    d   e     f`;
    const expected = ` a b c
 d e f`;

    // act
    const result = collapseSpaces(input);

    // assert
    expect(result).deep.equals(expected);
  });
});
