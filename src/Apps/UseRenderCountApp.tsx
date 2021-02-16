import * as React from "react";
import { CodeAccordion } from "../CodeAccordion";
import { Card } from "../Card";
import { useRenderCount, stringUseRenderCount } from "../hooks";

export const UseRenderCountApp = () => {
  const [bool, setBool] = React.useState<boolean>(false);
  const [renderFlag, setRenderFlag] = React.useState<boolean>(false);

  const randomSetBoolean = () => {
    if (Math.random() > 0.5) {
      setRenderFlag(true);
      setBool(!bool);
    } else {
      setRenderFlag(false);
    }
  };

  return (
    <>
      <p>
        Click to
        <button className="start-btn" onClick={randomSetBoolean}>
          Toggle
        </button>
        to re-render the child "randomly"
      </p>
      <div className="status-bar">Re-rendered?: {renderFlag ? "✅" : "⚔️"}</div>
      <UseRenderCountChild bool={bool} />
      <CodeAccordion code={stringUseRenderCount} />
    </>
  );
};

interface Props {
  bool: boolean;
}
const UseRenderCountChild = React.memo(({ bool }: Props) => {
  const count = useRenderCount();
  console.log(`This component rendered ${count} times, bool = ${bool}`);
  return <Card title="Child render#">{count}</Card>;
});
