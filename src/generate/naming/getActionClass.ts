import { pascalCase } from "change-case";
import { PrepReduction } from "../../prepareFiles/types";
import { getReductionStateName } from "./getStateName";

export function createActionClass(reduction: PrepReduction): string {
 return `${pascalCase(getReductionStateName(reduction))}_${pascalCase(reduction.name)}_Action`;
}
