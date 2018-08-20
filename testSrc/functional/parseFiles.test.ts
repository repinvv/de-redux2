import { parseFiles } from "../../src/parseFiles/parseFiles";
import { expect } from "chai";
import { ParsedFile } from "../../src/parseFiles/types/parsedFile.type";
import { ParsedType } from "../../src/parseFiles/types/parsedType.type";
import { ParsedMethod } from "../../src/parseFiles/types/parsedMethod.type";
import { ParsedImport } from "../../src/parseFiles/types/parsedImport.type";

describe("parseFile", function (): void {
  it("should parse a file", async function (): Promise<void> {
    // arrange
    const path = { fullFilePath: "./sampleFolder/child1/child1.state.ts" };
    const imports: ParsedImport[] = [{
      type: "DeepChildState",
      alias: "DeepChildState",
      path: { importPath: "../child2/deepChild/deepChild.state" }
    }];
    const types: ParsedType[] = [
      {
        name: "Child1State",
        fields: [
          { name: "nonState", typeName: { typeName: "NonState" } },
          { name: "bool", typeName: { typeName: "boolean" } },
          { name: "deep", typeName: { typeName: "DeepChildState" } },
        ]
      },
      {
        name: "NonState",
        fields: [
          { name: "int", typeName: { typeName: "number" } },
        ]
      }
    ];
    const methods: ParsedMethod[] = [
      {
        name: "flip",
        parameters: [
          { name: "prev", typeName: { typeName: "Child1State" } },
        ],
        returnType: { typeName: "Child1State" }
      }
    ];
    const expected: ParsedFile[] = [{
      path,
      imports,
      types,
      methods
    }];

    // act
    const result = await parseFiles([path]);

    // assert
    expect(result).deep.equals(expected);
  });
});
