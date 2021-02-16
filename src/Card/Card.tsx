import * as React from "react";
import "./styles.scss";

interface CardProps {
  title: string;
  // value: number | string;
  actionButton?: JSX.Element;
}

export const Card = ({
  title,
  actionButton,
  children,
}: React.PropsWithChildren<CardProps>) => {
  return (
    <>
      <section className="card">
        <div className="card__container">
          <p className="card__title">{title}</p>
          <p className="card__content">{children}</p>
        </div>
        <div className="card__button">{actionButton}</div>
      </section>
    </>
  );
};
