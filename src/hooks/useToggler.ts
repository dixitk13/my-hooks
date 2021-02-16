import * as React from "react";

export const useToggler = (
  initialState: boolean = false
): [boolean, React.DispatchWithoutAction] => {
  const [state, toggleState] = React.useReducer((a) => !a, initialState);

  return [state, toggleState];
};

export const stringUseToggler = `
export const useToggler = (
  initialState: boolean = false
): [boolean, React.DispatchWithoutAction] => {
  const [state, toggleState] = React.useReducer((a) => !a, initialState);

  return [state, toggleState];
};
`;
