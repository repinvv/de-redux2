import { FullFilePath } from "../readFiles/types/fullFilePath.type";
import { ParsedFile } from "./types/parsedFile.type";
export declare function parseFiles(files: FullFilePath[]): Promise<ParsedFile[]>;
