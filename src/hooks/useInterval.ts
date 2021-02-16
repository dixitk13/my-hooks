import { useEffect, useRef } from "react";

// ref: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useInterval(callback: Function, delay: number | undefined) {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (!delay) return;

    function tick() {
      savedCallback?.current?.();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export const stringUseInterval = `
export function useInterval(callback: Function, delay: number | undefined) {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (!delay) return;

    function tick() {
      savedCallback?.current?.();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
`;
