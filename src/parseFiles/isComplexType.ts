import { TypeName } from "./types/typeName.type";

export function isComplexType(typeName: TypeName): boolean {
  return !!typeName.typeName.match(/[\[|\]|\s|\t|<|>]/);
}
