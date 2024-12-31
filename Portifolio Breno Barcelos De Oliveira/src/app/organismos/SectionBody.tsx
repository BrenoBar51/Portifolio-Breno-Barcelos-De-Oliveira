import React from "react";
import { Card, CardProps } from "../celulas/Card";

export interface SectionProps {
  title: string;
  cards: CardProps[];
}

export const SectionBody: React.FC<SectionProps> = ({ title, cards }) => {
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-6xl laptop:text-7xl lg-laptop:text-8xl xl-desktop:text-9xl font-bold text-center text-white">
        {title}
      </h1>
      <div className="grid py-16 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 lg-laptop:grid-cols-4 xl-laptop:grid-cols-5 gap-x-6 gap-y-6">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}