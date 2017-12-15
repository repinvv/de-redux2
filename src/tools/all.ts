export function all<T>(array: T[], func: (item: T) => boolean): boolean {
  return !array.some(item => !func(item));
}
