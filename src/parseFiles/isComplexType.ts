import { TypeName } from "./types";

export function isComplexType(typeName: TypeName): boolean {
  return !!typeName.typeName.match(/[\[|\]|\s|\t|<|>]/);
}
