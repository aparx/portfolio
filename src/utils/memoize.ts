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

/** Uses `memoizeSync` if not in `development` mode */
export function memoizeSyncIfProduction<T>(fn: () => T): () => T {
  if (process.env.NODE_ENV === "development") return fn;
  return memoizeSync<T>(fn);
}

/** Uses `memoizeAsync` if not in `development` mode */
export function memoizeAsyncIfProduction<T>(
  fn: () => Promise<T>
): () => Promise<T> {
  if (process.env.NODE_ENV === "development") return fn;
  return memoizeAsync<T>(fn);
}
