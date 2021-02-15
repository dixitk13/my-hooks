import * as React from "react";

import { stringUsePrevious, usePrevious } from "../hooks/usePrevious";

import { Card } from "../Card";
import { CodeAccordion } from "../CodeAccordion";

export const UsePreviousApp = () => {
  const [count, setCount] = React.useState<number>(0);
  const increment = () => setCount(count + 1);

  const prevValue = usePrevious<number>(count);

  return (
    <>
      <p>
        <button className="start-btn" onClick={increment}>
          Click me
        </button>
        to increment!
      </p>
      <div className="card-list">
        <Card title="Current" value={count} />
        <Card title="Previous" value={prevValue} />
      </div>
      <CodeAccordion code={stringUsePrevious} />
    </>
  );
};
