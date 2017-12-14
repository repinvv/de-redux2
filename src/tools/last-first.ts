export function last<T>(items: T[]): T {
  return (items && items.length) ? items[items.length - 1] : null;
}

export function first<T>(items: T[]): T {
  return (items && items.length) ? items[0] : null;
}
