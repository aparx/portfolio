import { useCallback, useEffect, useMemo, useRef } from "react";

export interface UseTimeoutResult {
  stop: () => void;
  start: () => void;
  restart: () => void;
  isRunning: () => boolean;
}

export function useInterval({
  callback,
  timeInMs,
  startByDefault = true,
}: {
  callback: () => any;
  timeInMs: number;
  startByDefault?: boolean;
}): UseTimeoutResult {
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
  }, [timeInMs, stop]);

  useEffect(() => {
    if (startByDefault) start();
    return stop;
  }, [startByDefault, start, stop]);

  return useMemo(
    () => ({
      isRunning: () => timeoutRef.current != null,
      stop,
      start,
      restart: () => {
        stop();
        start();
      },
    }),
    [start, stop]
  );
}
