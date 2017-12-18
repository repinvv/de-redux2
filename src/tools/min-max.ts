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

export function maxBy<TItem, TVal>(array: TItem[], func: (item: TItem) => TVal): TItem {
  if (!array || !array.length) {
    return undefined;
  }
  let i = array.length - 1;
  let maxItem = array[i];
  let maxVal = func(maxItem);
  while (i--) {
    const nextItem = array[i];
    const nextVal = func(nextItem);
    if (maxVal < nextVal) {
      maxItem = nextItem;
      maxVal = nextVal;
    }
  }
  return maxItem;
}

export function minBy<TItem, TVal>(array: TItem[], func: (item: TItem) => TVal): TItem {
  if (!array || !array.length) {
    return undefined;
  }
  let i = array.length - 1;
  let minItem = array[i];
  let minVal = func(minItem);
  while (i--) {
    const nextItem = array[i];
    const nextVal = func(nextItem);
    if (minVal > nextVal) {
      minItem = nextItem;
      minVal = nextVal;
    }
  }

  return minItem;
}
