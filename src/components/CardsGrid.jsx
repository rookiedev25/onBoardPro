// components/CardsGrid.jsx
import React from "react";
import Card from "./Card";
import { useCards } from "../contexts/CardsContext";

const CardsGrid = ({ type, variant = "default", gridCols = 3 }) => {
  const { cardsData } = useCards();

  const cards = cardsData[type] || [];

  const getGridStyles = () => {
    // Responsive grid that adapts to screen size
    // Mobile: 1 column, Tablet: 2 columns, Desktop: 3+ columns based on gridCols prop
    const baseClasses =
      "grid gap-4 md:gap-6 w-full max-w-7xl mx-auto px-2 sm:px-4";

    // Create responsive grid classes based on gridCols prop
    let responsiveClasses = "grid-cols-1"; // Mobile default

    if (gridCols >= 2) {
      responsiveClasses += " sm:grid-cols-2"; // Tablet: 2 columns
    }

    if (gridCols >= 3) {
      responsiveClasses += " lg:grid-cols-3"; // Desktop: 3 columns
    }

    if (gridCols >= 4) {
      responsiveClasses += " xl:grid-cols-4"; // Large desktop: 4 columns
    }

    if (gridCols >= 5) {
      responsiveClasses += " 2xl:grid-cols-5"; // Extra large: 5 columns
    }

    if (gridCols >= 6) {
      responsiveClasses += " 2xl:grid-cols-6"; // Extra large: 6 columns
    }

    return `${baseClasses} ${responsiveClasses}`;
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
