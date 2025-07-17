// components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCards } from "../contexts/CardsContext";

const Card = ({ card, variant = "default" }) => {
  const { progress, updateProgress } = useCards();

  const getCardStyles = () => {
    const baseStyles =
          "bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 cursor-pointer";

    switch (variant) {
      case "threeByThreeCards":
        return `${baseStyles} h-80 w-90`;
      case "twoByTwoCards":
        return `${baseStyles} h-80 w-90`;
    case "singleCard":
        return `${baseStyles} h-80 w-90`;
      default:
        return `${baseStyles} h-80 w-90`;
    }
  };

  return (
    <Link to={card.routePath} className="card">
      <div className={getCardStyles()}>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{card.cardName}</h2>
        
          {/* Show progress if available */}
          {card.progress && (
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${card.progress}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">
                {card.progress}%
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
