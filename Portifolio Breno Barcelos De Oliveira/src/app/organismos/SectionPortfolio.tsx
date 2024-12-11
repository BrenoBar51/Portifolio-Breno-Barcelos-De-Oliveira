import React from "react";
import { Card, CardProps } from "../celulas/CardPortfolio";

export interface SectionProps {
  title: string;
  cards: CardProps[];
}

export const SectionPortfolio: React.FC<SectionProps> = ({ title, cards }) => {
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}