import { useRef, useEffect } from "react";

export const usePrevious = <T>(t: T): T => {
  const ref = useRef<T>(t);

  useEffect(() => {
    ref.current = t;
  }, [t]);

  return ref.current;
};

export const stringUsePrevious = `
export const usePrevious = <T>(t: T): T => {
  const ref = useRef<T>(t);

  useEffect(() => {
    ref.current = t;
  }, [t]);

  return ref.current;
};
`;
