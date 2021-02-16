import * as React from "react";
import { CodeAccordion } from "../CodeAccordion";
import { useToggler, stringUseToggler } from "../hooks";

export const UseTogglerApp = () => {
  const [state, toggleState] = useToggler();

  return (
    <>
      <p>
        Click to
        <button className="start-btn" onClick={toggleState}>
          Toggle
        </button>
      </p>
      <div className="status-bar">STATUS: {String(state)}</div>
      <CodeAccordion code={stringUseToggler} />
    </>
  );
};
