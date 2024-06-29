export function memoizeSync<T>(getter: () => T): () => T {
  let value: T | undefined;
  return () => {
    if (value !== undefined) return value;
    return (value = getter());
  };
}

export function memoizeAsync<T>(getter: () => Promise<T>): () => Promise<T> {
  let value: T | undefined;
  return async () => {
    if (value !== undefined) return value;
    return (value = await getter());
  };
}
