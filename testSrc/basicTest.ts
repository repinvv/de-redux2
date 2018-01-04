import { expect } from "chai";
import { basicFunction } from "../src";

describe("basic function", function (): void {
  it("should return sum of two numbers", function (): void {
    // arrange

    // act
    const result = basicFunction(2, 3);

    // assert
    expect(result).to.be.equal(5);
  });
});
