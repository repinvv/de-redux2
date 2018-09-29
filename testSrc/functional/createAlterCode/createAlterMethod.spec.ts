
import { expect } from "chai";
import { createAlterMethod } from "../../../src/createAlterCode.ts/createAlterCode";
import { collapseSpaces } from "../../../src/createAlterCode.ts/collapseSpaces";

describe("createAlterMethod", function (): void {
  it("should create a method off single path", async function (): Promise<void> {
    // arrange
    const path = ["field1", "field2", "field3"];
    const act = str => `call(${str})`;
    const expected = "";
    // act
    const result = createAlterMethod([path], act, {});

    // assert
    expect(collapseSpaces(result)).equals(collapseSpaces(expected));
  });
});
