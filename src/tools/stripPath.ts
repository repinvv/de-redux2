export function stripExtension(fullName: string): string {
  return stripToLast(fullName, ".");
}

export function stripToLast(input: string, symbol: string): string {
  const index = input.lastIndexOf(symbol);
  return input.substr(0, index);
}
