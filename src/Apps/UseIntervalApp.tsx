import * as React from "react";
import { CodeAccordion } from "../CodeAccordion";
import { useInterval, stringUseInterval } from "../hooks";

const INTERVAL = 600;

export const UseIntervalApp = () => {
  const [val, setVal] = React.useState<number>(0);
  const [interval, setInterval] = React.useState<number | undefined>(undefined);

  const incrHelper = React.useCallback(() => {
    setVal(val + 1);
  }, [val]);

  useInterval(incrHelper, interval);

  return (
    <>
      <p>
        Click to
        <button
          className="start-btn"
          onClick={() =>
            interval ? setInterval(undefined) : setInterval(INTERVAL)
          }
        >
          {!interval ? `Start interval` : "end interval"}
        </button>
      </p>
      <div className="status-bar">VALUE: {String(val)}</div>
      <CodeAccordion code={stringUseInterval} />
    </>
  );
};
