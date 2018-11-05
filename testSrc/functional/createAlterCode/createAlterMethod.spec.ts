
import { expect } from "chai";
import { createAlterMethod } from "../../../src/createAlterCode/createAlterCode";
import { collapseSpaces } from "../../../src/createAlterCode/collapseSpaces";

const options = { lineFeed: "\n", srcName: "prev", indent: 2 };

describe("createAlterMethod", function (): void {
  it("should create a method off single path", async function (): Promise<void> {
    // arrange
    const path = ["field1", "field2", "field3"];
    const act = str => `call(${str})`;
    const expected = `{
   ...prev,
   field1: {
     ...prev.field1,
     field2: {
       ...prev.field1.field2,
       field3: call(prev.field1.field2.field3),
     },
   },
 }
`;
    // act
    const result = createAlterMethod([path], act, options);

    // assert
    var collapsedResult = collapseSpaces(result);
    var collapsedExpected = collapseSpaces(expected);
    expect(collapsedResult).equals(collapsedExpected);
  });

  it("should create a method off several paths", async function (): Promise<void> {
    // arrange
    const paths = [
      ["field1", "field2", "field3"],
      ["field1", "field2", "field4"],
      ["field1", "field5"],
      ["field6"],
      ["field7", "field8"]
    ];

    const act = str => `call(${str})`;
    const expected = `{
   ...prev,
   field1: {
     ...prev.field1,
     field2: {
       ...prev.field1.field2,
       field3: call(prev.field1.field2.field3),
       field4: call(prev.field1.field2.field4),
     },
     field5: call(prev.field1.field5),
   },
   field6: call(prev.field6),
   field7: {
     ...prev.field7,
     field8: call(prev.field7.field8),
   },
 }
`;
    // act
    const result = createAlterMethod(paths, act, options);

    // assert
    expect(collapseSpaces(result)).equals(collapseSpaces(expected));
  });
});
