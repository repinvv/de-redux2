const indents = new Map<number, string>();
const indentSize = 2;

export function createIndent(amount: number = 1): string {
  if (indents[amount]) {
    return indents[amount];
  }

  return indents[amount] = new Array(amount * indentSize).map(i => " ").join("");
}
