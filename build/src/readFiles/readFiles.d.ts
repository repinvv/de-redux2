import { Paths } from "./globs.type";
import { FullFilePath } from "./types/fullFilePath.type";
export declare function readFiles(paths: Paths): Promise<FullFilePath[]>;
