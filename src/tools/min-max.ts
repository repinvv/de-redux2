export function max<T>(array: T[]): T;
export function max<TItem, TVal>(array: TItem[], func: (item: TItem) => TVal): TVal;
export function max<TItem, TVal>(array: TItem[], func?: (item: TItem) => TVal): TVal {
  if (!func) {
    return Math.max.apply(null, array);
  } else {
    return Math.max.apply(null, array.map(func));
  }
}

export function min<T>(array: T[]): T;
export function min<TItem, TVal>(array: TItem[], func: (item: TItem) => TVal): TVal;
export function min<TItem, TVal>(array: TItem[], func?: (item: TItem) => TVal): TVal {
  if (!func) {
    return Math.min.apply(null, array);
  } else {
    return Math.min.apply(null, array.map(func));
  }
}
