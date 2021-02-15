import * as React from "react";
import { CodeAccordion } from "../CodeAccordion";
import { useAsync, stringUseAsync, myPromise } from "../hooks";

export const AsyncApp = () => {
  const { execute, status, value, error } = useAsync(myPromise, false);

  return (
    <article className="small-app">
      <h3>useAsync</h3>
      <p>
        Click
        <button
          className="start-btn"
          onClick={execute}
          disabled={status === "pending"}
        >
          {status !== "pending" ? "here" : "Loading..."}
        </button>
        invoke an async API hook
      </p>

      <div className="status-bar">STATUS: {status}</div>
      {status === "success" && <div>{value}</div>}
      {status === "error" && <div>{error}</div>}
      <CodeAccordion code={stringUseAsync} />
    </article>
  );
};
