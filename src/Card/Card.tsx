import * as React from "react";
import "./styles.scss";

interface CardProps {
  title: string;
  value: number;
}

export const Card = ({ title, value }: CardProps) => {
  return (
    <section className="card">
      <p className="card__title">{title}</p>
      <p className="card__value">{value}</p>
    </section>
  );
};
