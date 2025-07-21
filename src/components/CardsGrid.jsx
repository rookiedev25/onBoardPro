// components/CardsGrid.jsx
import React from "react";
import Card from "./Card";
import { useCards } from "../contexts/CardsContext";

const CardsGrid = ({ type, variant = "default", gridCols = 3 }) => {
  const { cardsData } = useCards();

  const cards = cardsData[type] || [];

  const getGridStyles = () => {
    // Use predefined Tailwind classes
    const gridColsMap = {
      1: "grid-cols-1",
      2: "grid-cols-2", 
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6"
    };
    
    return `grid ${gridColsMap[gridCols] || "grid-cols-3"} gap-6 w-fit`;
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
