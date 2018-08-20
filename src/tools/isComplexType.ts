export function isComplexType(typeName: string): boolean {
  return !!typeName.match(/[\[|\]|\s|\t|<|>]/);
}
