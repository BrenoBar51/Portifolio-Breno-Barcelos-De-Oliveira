import React from "react";
import { Card, CardProps } from "../celulas/Card";

export interface SectionProps {
  title: string;
  cards: CardProps[];
  className: string;
}

export const SectionBody: React.FC<SectionProps> = ({ title, cards, className }) => {
  return (
    <section className="grid items-center content-center mx-6 py-16">
      <h1 className="text-6xl laptop:text-7xl lg-laptop:text-8xl xl-desktop:text-9xl font-bold text-center text-white">
        {title}
      </h1>
      <div className={`grid py-16 gap-x-6 gap-y-6 ${className}`}>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}