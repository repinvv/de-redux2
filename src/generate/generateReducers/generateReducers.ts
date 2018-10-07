import { Options } from "../../options";
import { PrepReduction } from "../../prepareFiles/types";
import { Tree } from "../../createTree/types";
import { prepareReducerModels } from "./prepareReducerModel";

export async function generateReducers(reductions: PrepReduction[], tree: Tree, options: Options): Promise<void> {
  const models = prepareReducerModels(reductions, tree);
  console.log(models);
}
