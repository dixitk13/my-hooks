import { useRef, useEffect } from "react";

export const useRenderCount = (): number => {
  const ref = useRef<number>(1);

  useEffect(() => {
    ref.current++;
  });

  return ref.current;
};

export const stringUseRenderCount = `
export const useRenderCount = (): number => {
  const ref = useRef<number>(1);

  useEffect(() => {
    ref.current++;
  });

  return ref.current;
};
`;
