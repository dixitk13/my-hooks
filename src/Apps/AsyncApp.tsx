import * as React from "react";
import { useAsync, myPromise } from "../hooks";

// Usage
export const AsyncApp = () => {
  const { execute, status, value, error } = useAsync(myPromise, false);

  return (
    <section>
      <h1>useAsync app</h1>
      <div>
        {status === "idle" && (
          <div>Start your journey by clicking a button</div>
        )}
        {status === "success" && <div>{value}</div>}
        {status === "error" && <div>{error}</div>}
        <button onClick={execute} disabled={status === "pending"}>
          {status !== "pending" ? "Click me" : "Loading..."}
        </button>
      </div>
    </section>
  );
};
