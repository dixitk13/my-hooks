import * as React from "react";
import { CodeAccordion } from "../CodeAccordion";
import { useInterval, stringUseInterval } from "../hooks";

export const UseIntervalApp = () => {
  const [intervalState, toggleIntervalState] = React.useReducer(
    (a) => !a,
    false
  );
  const [start, toggleStart] = React.useReducer((a) => !a, false);

  const toggleHelper = React.useCallback(() => start && toggleIntervalState(), [
    start,
  ]);

  React.useEffect(() => {
    if (start) toggleIntervalState();
  }, [start]);

  useInterval(toggleHelper, 600, [start]);

  return (
    <>
      <p>
        Click to
        <button className="start-btn" onClick={toggleStart}>
          {!start ? "start" : "end"}
        </button>
        toggling status
      </p>
      <div className="status-bar">STATUS: {String(intervalState)}</div>
      <CodeAccordion code={stringUseInterval} />
    </>
  );
};
