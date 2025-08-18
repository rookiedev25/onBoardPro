// components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";
// import { useCards } from "../contexts/CardsContext";

const Card = ({ card, variant = "default" }) => {
  // const { progress, updateProgress } = useCards();

  const getCardStyles = () => {
    const baseStyles =
      "bg-white shadow-md rounded-lg p-4 sm:p-6 flex items-center justify-center transition-shadow duration-300 cursor-pointer outline-none ring-0 group-hover:ring-2 group-hover:ring-blue-700 w-full";

    switch (variant || card.style) {
      case "threeByThreeCards":
        return `${baseStyles} h-64 sm:h-72 md:h-80 min-h-[16rem]`;
      case "twoByTwoCards":
        return `${baseStyles} h-64 sm:h-72 md:h-80 min-h-[16rem]`;
      case "singleCard":
        return `${baseStyles} h-64 sm:h-72 md:h-80 min-h-[16rem]`;
      case "module":
        return `${baseStyles} h-32 sm:h-36 md:h-40 min-h-[8rem]`;
      default:
        return `${baseStyles} h-64 sm:h-72 md:h-80 min-h-[16rem]`;
    }
  };

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`${getCardStyles()} animate-pulse`}>
        <div className="flex flex-col items-center justify-center h-full space-y-4 w-full">
          {/* <div className="w-12 h-12 bg-gray-200 rounded-full"></div> */}
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          {/* <div className="h-3 bg-gray-200 rounded w-40 mt-4"></div> */}
        </div>
      </div>
    );
  }

  return (
    <Link to={card.routePath} className="card group">
      <div className={`${getCardStyles()} relative overflow-hidden flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 md:gap-20`}>
        {/* Card content */}
        <div className={`relative z-10 flex flex-col ${variant === "module" ? "items-start justify-center" : "items-center justify-center"} h-full min-w-0 flex-1`}>
          {/* Icon or image */}
          {card.icon && (
            <div className="mb-2 sm:mb-4">
              <img
                src={card.icon}
                alt=""
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain drop-shadow-xl"
              />
            </div>
          )}
          {card.link && card.linkText ? (
            <a href={card.link} className="text-blue-500 hover:underline text-sm sm:text-base">
              {card.linkText}
            </a>
          ) : (
            true
          )}
          <h2 className={`text-lg sm:text-xl md:text-xl font-bold text-black group-hover:text-blue-700 transition-colors duration-200 ${variant === "module" ? "text-left" : "text-center"}`}>
            {card.cardName}
          </h2>
          <p className={`text-sm sm:text-base md:text-lg font-light px-2 leading-relaxed ${variant === "module" ? "text-left" : "text-center"}`}>
            {card.cardDescription}
          </p>
        </div>
        {/* Buttons for learning modules */}
        <div className={`gap-2 flex ${variant === "module" ? "flex-row" : "flex-row sm:flex-col"} justify-center ${variant === "module" ? "sm:justify-center items-center" : "sm:justify-end items-center sm:absolute sm:right-3 sm:bottom-3 md:right-5 md:bottom-5"}`}>
          {card.videoLink !== undefined && (
            <button
              className="bg-blue-700 text-white py-1.5 px-3 sm:py-2 sm:px-4 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-200 text-xs sm:text-sm"
              onClick={(e) => {
                e.preventDefault();
                window.open(card.videoLink, "_blank");
              }}
            >
              Video
            </button>
          )}
          {card.pptLink !== undefined && (
            <button
              className="bg-blue-700 text-white py-1.5 px-3 sm:py-2 sm:px-4 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-200 text-xs sm:text-sm"
              onClick={(e) => {
                e.preventDefault();
                window.open(card.pptLink, "_blank");
              }}
            >
              PPT
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
