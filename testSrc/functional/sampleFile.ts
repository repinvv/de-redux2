import { ParsedImport } from "../../src/parseFiles/types/parsedImport.type";
import { ParsedType } from "../../src/parseFiles/types/parsedType.type";
import { ParsedMethod } from "../../src/parseFiles/types/parsedMethod.type";
import { ParsedFile } from "../../src/parseFiles/types/parsedFile.type";

const path = { filePath: "./sampleFolder/child1/child1.state" };
const imports: ParsedImport[] = [{
  type: "DeepChildState",
  alias: "DeepChildState",
  path: { importPath: "../child2/deepChild/deepChild.state" }
}];
const types: ParsedType[] = [
  {
    name: { typeName: "Child1State" },
    fields: [
      { name: "nonState", typeName: { typeName: "NonState" } },
      { name: "bool?", typeName: { typeName: "boolean" } },
      { name: "deep", typeName: { typeName: "DeepChildState" } },
    ]
  },
  {
    name: { typeName: "NonState" },
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

export const sampleFile: ParsedFile = {
  path,
  imports,
  types,
  methods
};
