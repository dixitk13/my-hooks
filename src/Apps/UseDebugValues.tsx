import * as React from "react";
import { useRenderCount } from "../hooks";

const animals = ["dog", "cat", "elephant", "fox"];
function useMyState1<T>(def: T) {
  const props = React.useState<T>(def);

  React.useDebugValue(props[0], (val) => `my-${val}`);
  React.useDebugValue(new Date(), (date) => date.toString());

  return props;
}

export const UseDebugValues = () => {
  const [, setState] = useMyState1<string>("dog");
  const count = useRenderCount();

  React.useEffect(() => {
    setState("cat");
  }, []);

  return (
    <>
      <p>Open devtools to see the debug values</p>
      <p>Chooses animal from [{animals.join(", ")}]</p>
      <button
        className="start-btn"
        onClick={() => setState(animals[count % animals.length])}
      >
        Change Animal
      </button>
    </>
  );
};
