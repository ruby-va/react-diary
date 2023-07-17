import { useCallback, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: any[]) => void;

export function useDebounce<Func extends SomeFunction>(callback: Func, delay: number) {
  const timer = useRef<Timer>();

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback;
}
