import * as React from "react";
import "./styles.scss";

interface CodeAccordionProps {
  code: any;
}

export const CodeAccordion = ({ code }: CodeAccordionProps) => {
  const [open, setOpen] = React.useReducer((a) => !a, false);
  return (
    <article className="code-accordion">
      <button onClick={setOpen}>{open ? "x" : "View Code"}</button>
      <div className={`code-panel ${open ? "open" : "close"} `}>
        <pre>{String(code)}</pre>
      </div>
    </article>
  );
};
