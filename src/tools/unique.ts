export function unique<T>(arr: T[]): T[];
export function unique<T, T2>(arr: T[], func: (t: T) => T2): T2[];
export function unique<T, T2>(arr: T[], func?: (t: T) => T2): T[] {
  if (func) {
    return <any>uniqueVal(arr, func);
  } else {
    return uniqueItem(arr);
  }
}

function uniqueItem<T>(arr: T[]): T[] {
  const set = new Set<T>(arr);
  return [...set];
}

function uniqueVal<T, T2>(arr: T[], func: (t: T) => T2): T2[] {
  const set = new Set<T2>(arr.map(func));
  return [...set];
}

export function uniqueBy<T, T2>(arr: T[], by: (t: T) => T2): T[] {
  const set = new Set<T2>();
  return arr.filter(item => {
    const key = by(item);
    if (set.has(key)) {
      return false;
    }
    set.add(key);
    return true;
  });
}
