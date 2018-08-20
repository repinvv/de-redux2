export type RecursiveReadonlyItem<T> = {
  readonly [P in keyof T]: RecursiveReadonly<T[P]>;
};

export type RecursiveReadonlyField<T> = T extends Array<any>
  ? ReadonlyArray<RecursiveReadonly<T[0]>>
  : RecursiveReadonly<T>;

export type RecursiveReadonly<T> = T extends number | string | boolean
  ? T : (
    T extends Array<any>
    ? ReadonlyArray<RecursiveReadonlyItem<T[0]>>
    : RecursiveReadonlyItem<T>);
