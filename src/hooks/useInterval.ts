import { useEffect, useRef } from "react";

export const useInterval = (
  fn: Function,
  delay: number = 500,
  deps: React.DependencyList = []
) => {
  const timeoutId = useRef<number | undefined>();

  useEffect(() => {
    if (!fn) return;

    if (timeoutId.current) clearInterval(timeoutId.current);

    if (delay !== null && delay !== undefined) {
      timeoutId.current = setInterval(fn, delay);
    }

    return () => clearInterval(timeoutId.current);
  }, [delay, ...deps]);

  return fn;
};

export const stringUseInterval = `
export const useInterval = (
  fn: Function,
  delay: number = 500,
  deps: React.DependencyList = []
) => {
  const timeoutId = useRef<number | undefined>();

  useEffect(() => {
    if (!fn) return;

    if (timeoutId.current) clearInterval(timeoutId.current);

    if (delay !== null && delay !== undefined) {
      timeoutId.current = setInterval(fn, delay);
    }

    return () => clearInterval(timeoutId.current);
  }, [delay, ...deps]);

  return fn;
};
`;
