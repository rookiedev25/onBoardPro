// components/CardsGrid.jsx
import React from "react";
import Card from "./Card";
import { useCards } from "../contexts/CardsContext";

const CardsGrid = ({ type, variant = "default", gridCols = 3 }) => {
  const { cardsData } = useCards();

  const cards = cardsData[type] || [];

  const getGridStyles = () => {
    return `grid grid-cols-${gridCols} gap-6 w-fit`;
  };

  return (
    <div className={getGridStyles()}>
      {cards.map((card) => (
        <Card key={card.id} card={card} variant={variant} />
      ))}
    </div>
  );
};

export default CardsGrid;
