export function last<T>(items: T[]): T;
export function last<T>(items: T[], func: (item: T) => boolean): T;
export function last<T>(items: T[], func?: (item: T) => boolean): T {
  if (!items || !items.length) {
    return undefined;
  }
  if (!func) {
    return items[items.length - 1];
  }

  let i = items.length;
  while (i--) {
    if (func(items[i])) {
      return items[i];
    }
  }
  return undefined;
}


export function first<T>(items: T[]): T;
export function first<T>(items: T[], func: (item: T) => boolean): T;
export function first<T>(items: T[], func?: (item: T) => boolean): T {
  if (!items) {
    return undefined;
  }
  if (!func) {
    return items[0];
  }
  for (let item of items) {
    if (func(item)) {
      return item;
    }
  }

  return undefined;
}
