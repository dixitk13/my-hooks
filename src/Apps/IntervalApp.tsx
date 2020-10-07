import * as React from "react";
import { useInterval } from "../hooks";

export const IntervalApp = () => {
  const [state, toggleState] = React.useReducer((a) => !a, false);

  useInterval(() => toggleState(), 600);

  return (
    <section>
      <h3>useInterval app</h3>
      <div>Status: {String(state)}</div>
      <div>Interval is toggling status</div>
    </section>
  );
};
