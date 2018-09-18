import { expect } from "chai";
import { translateImportPathToFilePath } from "../src/prepareFiles/translateImportPathToFilePath";

describe("translateImportPathToFilePath", function (): void {
  it("should return same directory", async function (): Promise<void> {
    // arrange
    const parsed = { filePath: "./someDir/dir2/file" };
    const refPath = { importPath: "." };
    const expected = "./someDir/dir2";

    // act
    const result = translateImportPathToFilePath(parsed, refPath, {});

    // assert
    expect(result.filePath).equals(expected);
  });

  it("should return same directory when slashed", async function (): Promise<void> {
    // arrange
    const parsed = { filePath: "./someDir/dir2/file" };
    const refPath = { importPath: "./" };
    const expected = "./someDir/dir2";

    // act
    const result = translateImportPathToFilePath(parsed, refPath, {});

    // assert
    expect(result.filePath).equals(expected);
  });

  it("should return same directory from root", async function (): Promise<void> {
    // arrange
    const parsed = { filePath: "./file" };
    const refPath = { importPath: "." };
    const expected = ".";

    // act
    const result = translateImportPathToFilePath(parsed, refPath, {});

    // assert
    expect(result.filePath).equals(expected);
  });

  it("should return path of subdirectory or neighbour file", async function (): Promise<void> {
    // arrange
    const parsed = { filePath: "./parent/file" };
    const refPath = { importPath: "./child" };
    const expected = "./parent/child";

    // act
    const result = translateImportPathToFilePath(parsed, refPath, {});

    // assert
    expect(result.filePath).equals(expected);
  });

  it("should return path of parent directory", async function (): Promise<void> {
    // arrange
    const parsed = { filePath: "./parent/child/file" };
    const refPath = { importPath: ".." };
    const expected = "./parent";

    // act
    const result = translateImportPathToFilePath(parsed, refPath, {});

    // assert
    expect(result.filePath).equals(expected);
  });

  it("should return path of neighbour directory or parent file", async function (): Promise<void> {
    // arrange
    const parsed = { filePath: "./parent/child/file" };
    const refPath = { importPath: "../neighbour" };
    const expected = "./parent/neighbour";

    // act
    const result = translateImportPathToFilePath(parsed, refPath, {});

    // assert
    expect(result.filePath).equals(expected);
  });

  it("should return path from outside root", async function (): Promise<void> {
    // arrange
    const parsed = { filePath: "./parent/file" };
    const refPath = { importPath: "../../otherPath" };
    const expected = "../otherPath";

    // act
    const result = translateImportPathToFilePath(parsed, refPath, {});

    // assert
    expect(result.filePath).equals(expected);
  });

  it("should return aliased path without star", async function (): Promise<void> {
    // arrange
    const parsed = { filePath: "./someDir/dir2/file" };
    const refPath = { importPath: "@tools" };
    const expected = "./app/tools";
    const paths = {
      "@api/*": ["api/*"],
      "@tools": ["tools/"]
    };
    const baseUrl = "./app";

    // act
    const result = translateImportPathToFilePath(parsed, refPath, { baseUrl, paths });

    // assert
    expect(result.filePath).equals(expected);
  });

  it("should return aliased path with star", async function (): Promise<void> {
    // arrange
    const parsed = { filePath: "./someDir/dir2/file" };
    const refPath = { importPath: "@api/dir" };
    const expected = "./app/api/dir";
    const paths = {
      "@api/*": ["api/*"],
      "@tools": ["tools/"]
    };
    const baseUrl = "./app";

    // act
    const result = translateImportPathToFilePath(parsed, refPath, { baseUrl, paths });

    // assert
    expect(result.filePath).equals(expected);
  });

  it("should not alter non-aliased path", async function (): Promise<void> {
    // arrange
    const parsed = { filePath: "./someDir/dir2/file" };
    const refPath = { importPath: "some-lib" };
    const expected = "some-lib";
    const paths = {
      "@api/*": ["api/*"],
      "@tools": ["tools/"]
    };
    const baseUrl = "./app";

    // act
    const result = translateImportPathToFilePath(parsed, refPath, { baseUrl, paths });

    // assert
    expect(result.filePath).equals(expected);
  });

});
