export function splitInGroups<T>(items: T[], by: number): T[][] {
  const result: T[][] = [];
  let i = 0;
  while (i < items.length) {
    const next = i + by;
    result.push(items.slice(i, next));
    i = next;
  }
  return result;
}
