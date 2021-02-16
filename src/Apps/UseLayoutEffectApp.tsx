import * as React from "react";
import { Card } from "../Card";

export const UseLayoutEffectApp = () => {
  return (
    <>
      <p className="status-bar">useEffect vs useLayoutEffect</p>
      <div className="radio-list">
        <UsingEffectApp />
        <UsingLayoutEffectApp />
      </div>
    </>
  );
};

const UsingLayoutEffectApp = () => {
  const [count, setCount] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    if (count === 0) setCount(3.14);
  }, [count]);

  return (
    <Card
      title="useLayoutEffect"
      actionButton={<button onClick={() => setCount(0)}>✨</button>}
    >
      {`🥧 = ${count}`}
    </Card>
  );
};

const UsingEffectApp = () => {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    if (count === 0) setCount(3.14);
  }, [count]);

  return (
    <Card
      title="useEffect"
      actionButton={
        <button onClick={() => setCount(0)}>{count !== 0 ? "✨" : "⏱️"}</button>
      }
    >
      {`🥧 = ${count}`}
    </Card>
  );
};
