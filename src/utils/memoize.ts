export function memoizeSync<T>(getter: () => T): () => T {
  let value: T | undefined = undefined;
  return () => {
    if (value !== undefined) return value;
    return (value = getter());
  };
}

export function memoizeAsync<T>(getter: () => Promise<T>): () => Promise<T> {
  let value: T | undefined = undefined;
  return async () => {
    if (value !== undefined) return value;
    return (value = await getter());
  };
}
