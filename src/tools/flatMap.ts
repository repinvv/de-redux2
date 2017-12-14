export function flatMap<TIn, TOut>(input: TIn[], selector: (item: TIn) => TOut[]): TOut[] {
  let result: TOut[] = [];
  input.forEach(item => result = result.concat(selector(item)));
  return result;
}
