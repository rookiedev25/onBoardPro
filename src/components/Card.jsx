// components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCards } from "../contexts/CardsContext";

const Card = ({ card, variant = "default" }) => {
  const { progress, updateProgress } = useCards();

  const getCardStyles = () => {
    const baseStyles =
          "bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 cursor-pointer";

    switch (variant || card.style) {
      case "threeByThreeCards":
        return `${baseStyles} h-80 w-90`;
      case "twoByTwoCards":
        return `${baseStyles} h-80 w-90`;
    case "singleCard":
        return `${baseStyles} h-80 w-90`;
      case "module":
        return `${baseStyles} h-40 w-250`;
      default:
        return `${baseStyles} h-80 w-90`;
    }
  };

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
      <div className={`${getCardStyles()} relative overflow-hidden flex flex-row justify-space-between gap-20`}>
        {/* Card content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full ">
          {/* Icon or image */}
          {card.icon && (
            <div className="mb-4">
              <img src={card.icon} alt="" className="h-12 w-12 object-contain drop-shadow-xl" />
            </div>
          )}
          { 
            (card.link && card.linkText) ? (
              
              <a href={card.link} className="text-blue-500 hover:underline">
                {card.linkText}
              </a>
            ) : (
              true
            )
          }
          <h2 className="text-xl font-bold text-black-xl group-hover:text-blue-700 transition-colors duration-200">
            {card.cardName}
          </h2>
          <p className="text-lg font-light max-w-120 text-center">{card.cardDescription}</p>
          {/* Progress bar */}
          {card.progress !== undefined && (
            <div className="mt-6 w-40 flex flex-col items-center">

              {/* link to resource */}
              {/* <button className="bg-blue-700 text-white py-2 px-4 rounded cursor-pointer" onClick={() => window.open(card.link, "_blank")}>Link</button> */}

              {/* Progress bar */}
              {/* <div className="w-full bg-blue-100 rounded-full h-3 shadow-inner">
                <div
                  className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${card.progress}%` }}
                ></div>
              </div> */}
              {/* percentage caculation display here */}
                {/* <span className="block text-xs text-blue-600 mt-2 text-center font-medium tracking-wide">
                  {card.progress}%
                </span> */}
            </div>
          )}
        </div>
        {/* Blue border hover effect */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 pointer-events-none"></div>
          {
            card.link!== undefined && (
              <button 
                className="bg-blue-700 text-white py-2 px-4 rounded cursor-pointer mt-2 float-end absolute right-5 bottom-5"
                onClick={() => window.open(card.link, "_blank")}
              >
                View
              </button>
            )
          }
      </div>
    </Link>
  );
};

export default Card;
