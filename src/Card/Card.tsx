import * as React from "react";
import { useRenderCount } from "../hooks";
import "./styles.scss";

interface CardProps {
  title: string;
  enableRenderCount?: boolean;
  size?: "large" | "mini";
  actionButton?: JSX.Element;
}

export const Card = ({
  title,
  actionButton,
  children,
  size,
  enableRenderCount,
}: React.PropsWithChildren<CardProps>) => {
  const count = useRenderCount();
  console.log(`>>: Card title=${title} count=${count}`);
  return (
    <>
      <section
        className={`card ${size === "large" && "xl-card"} ${
          size === "mini" && "mn-card"
        }`}
      >
        {enableRenderCount && <p className="counter">{count}</p>}
        <div className="card__container">
          <p className="card__title">{title}</p>
          <div className="card__content">{children}</div>
        </div>
        <div className="card__button">{actionButton}</div>
      </section>
    </>
  );
};
