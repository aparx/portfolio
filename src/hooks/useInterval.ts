import { useCallback, useEffect, useRef } from "react";

export function useInterval({
  callback,
  timeInMs,
  enabled = true,
}: {
  callback: () => any;
  timeInMs: number;
  enabled?: boolean;
}): () => void {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const timeoutRef = useRef<NodeJS.Timeout>();

  const stop = useCallback(() => {
    if (!timeoutRef.current) return;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = undefined;
  }, []);

  const start = useCallback(() => {
    if (timeoutRef.current != null)
      throw new Error("Timeout is already started. Stop first.");
    timeoutRef.current = setInterval(() => callbackRef.current(), timeInMs);
  }, [timeInMs]);

  useEffect(() => {
    if (enabled) start();
    return stop;
  }, [enabled, start, stop]);

  // TODO is useCallback really necessary / is referential equality important?
  return useCallback(() => {
    stop();
    start();
  }, [stop, start]);
}
