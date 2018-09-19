import { createTree } from "../../../src/createTree/createTree";
import { IdType } from "../../../src/options";
import { testStates } from "./testStates";
import {  expectedTree } from "./expectedTree";
import { assertTree } from "./assertTree";

describe("createTree", function (): void {
  it("should create a tree", async function (): Promise<void> {
    // arrange

    // act
    const result = await createTree(testStates, IdType.number);

    // assert
    assertTree(expectedTree, result);
  });
});


