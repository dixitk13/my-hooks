import * as React from "react";

import { CodeAccordion } from "../CodeAccordion";
import { Card } from "../Card";

export const UseCallbackApp = () => {
  return (
    <>
      <p>Click both buttons to play with UseCallbackApp</p>
      <div className="card-list">
        <NonCallbackApp />
        <CallbackApp />
      </div>
      <CodeAccordion code={stringCallbackCode} />
    </>
  );
};

const NonCallbackApp = () => {
  const [, setVal] = React.useState<number>(0);
  const setter = () => {
    setVal(Math.random() * 1);
  };

  return <PureCard title="Non-callback Card" text="👻" fn={setter} />;
};

const CallbackApp = () => {
  const [, setVal] = React.useState<number>(0);
  const setter = React.useCallback(() => {
    setVal(Math.random() * 1);
  }, []);

  return <PureCard text="👽" title="With Callback Card" fn={setter} />;
};

const PureCard = React.memo(
  ({ fn, title, text }: { text: string; title: string; fn: () => void }) => {
    return (
      <Card
        title={title}
        enableRenderCount={true}
        actionButton={<button onClick={fn}>{text}</button>}
      />
    );
  }
);

const stringCallbackCode = `
const NonCallbackApp = () => {
  const [, setVal] = React.useState<number>(0);
  const setter = () => {
    setVal(Math.random() * 1);
  };

  return (
    <PureCard 
      title="Non-callback Card" 
      text="👻" 
      fn={setter} 
    />
  );
};

const CallbackApp = () => {
  const [, setVal] = React.useState<number>(0);
  const setter = React.useCallback(() => {
    setVal(Math.random() * 1);
  }, []);

  return (
    <PureCard 
      text="👽" 
      title="Callback Card" 
      fn={setter} 
    />
  );
};
`;
