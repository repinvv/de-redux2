export function unique<T>(arr: T[]): T[];
export function unique<T, T2>(arr: T[], by?: (t: T) => T2): T[];

export function unique<T, T2>(arr: T[], by?: (t: T) => T2): T[] {
  if (by) {
    return uniqueBy(arr, by);
  } else {
    return uniqueVal(arr);
  }
}

function uniqueVal<T>(arr: T[]): T[] {
  const map = new Map<T, boolean>();
  return arr.filter(item => {
    if (map.has(item)) {
      return false;
    }
    map.set(item, true);
    return true;
  });
}

function uniqueBy<T, T2>(arr: T[], by: (t: T) => T2): T[] {
  const map = new Map<T2, boolean>();
  return arr.filter(item => {
    const key = by(item);
    if (map.has(key)) {
      return false;
    }
    map.set(key, true);
    return true;
  });
}
