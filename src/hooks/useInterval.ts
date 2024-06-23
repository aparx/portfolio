import { useCallback, useEffect, useRef } from "react";

export interface UseTimeoutResult {
  stop: () => void;
  start: () => void;
  restart: () => void;
}

export function useInterval(
  callback: () => any,
  timeInMs: number,
  startByDefault: boolean = true
): UseTimeoutResult {
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
  }, [stop]);

  useEffect(() => {
    if (startByDefault) start();
    return stop;
  }, [timeInMs]);

  return {
    stop,
    start,
    restart: () => {
      stop();
      start();
    },
  };
}
