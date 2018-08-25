
import { IdType, Options } from "./options";
import { Paths } from "./readFiles/globs.type";
import { readFiles } from "./readFiles/readFiles";
import { parseFiles } from "./parseFiles/parseFiles";
import { prepareFiles } from "./prepareFiles/prepareFiles";

const defaultOptions: Options = {
  lineFeed: "\r\n",
  IdType: IdType.number
};

export async function generate(paths: Paths, options: Options = {}, tsconfig: any = {}): Promise<void> {
  options = {
    ...defaultOptions,
    ...options
  };

  const files = await readFiles(paths);
  const parsed = await parseFiles(files);
  const prepared = prepareFiles(parsed, tsconfig);
  // const tree = createTree(parsed);
  console.log(prepared);
}
