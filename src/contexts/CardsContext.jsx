// contexts/CardsContext.jsx
import React, { createContext, useContext, useState } from "react";

const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
    // Initial card data
    // This can be fetched from an API or defined statically -- this acts as a centralized data allocation for all sorts of cards we use in our application.
    const [cardsData, setCardsData] = useState({
      training: [
        {
          id: 1,
          cardName: "Essentials",
          routePath: "/training-essentials",
          style: "twoByTwoCards",
        },
        {
          id: 2,
          cardName: "Optional",
          routePath: "/training-optional",
          style: "twoByTwoCards",
        },
      ],

      dashboard: [
        {
          id: 1,
          cardName: "Meet the Team",
          routePath: "/meet-the-team",
          style: "threeByThreeCards",
        },
        {
          id: 2,
          cardName: "Guidelines",
          routePath: "/guidelines",
          style: "threeByThreeCards",
        },
        {
          id: 3,
          cardName: "Training",
          routePath: "/training",
          style: "threeByThreeCards",
        },
        {
          id: 4,
          cardName: "Graphic Tools",
          routePath: "/graphic-tools",
          style: "threeByThreeCards",
        },
        {
          id: 5,
          cardName: "Ticket Management",
          routePath: "/ticket-management",
          style: "threeByThreeCards",
        },
        {
          id: 6,
          cardName: "FAQs",
          routePath: "/faqs",
          style: "threeByThreeCards",
        },
      ],
      trainingEssentials: [
        {
          id: 1,
          cardName: "SET-1",
          cardDescription: "Introduction to ST4 and XMetal",
          routePath: "/training-essentials/set-1",
          style: "threeByThreeCards",
          progress: "20",
        },
        {
          id: 2,
          cardName: "SET-2",
          cardDescription: "Working with ST4 and XMetal",
          routePath: "/training-essentials/set-2",
          style: "threeByThreeCards",
          progress: "50",
        },
        {
          id: 3,
          cardName: "SET-3",
          cardDescription: "Working with types of Graphics",
          routePath: "/training-essentials/set-3",
          style: "threeByThreeCards",
          progress: "90",
        },
        {
          id: 4,
          cardName: "SET-4",
          cardDescription: "Working with Fragments",
          routePath: "/training-essentials/set-4",
          style: "threeByThreeCards",
          progress: "60",
        },
        {
          id: 5,
          cardName: "SET-5",
          cardDescription: "Working with Projects and Production in ST4",
          routePath: "/training-essentials/set-5",
          style: "threeByThreeCards",
          progress: "35",
        },
        {
          id: 6,
          cardName: "SET-6",
          cardDescription: "Working with Contextual Help",
          routePath: "/training-essentials/set-6",
          style: "threeByThreeCards",
          progress: "70",
        },
        {
          id: 7,
          cardName: "SET-7",
          cardDescription: "Editorial Review Process",
          routePath: "/training-essentials/set-7",
          style: "threeByThreeCards",
          progress: "45",
        },
      ],
      ticketManagement: [
        {
          id: 1,
          cardName: "RTC-JAZZ",
          routePath: "/ticket-management/rtc-jazz",
          style: "twoByTwoCards",
        },
        {
          id: 2,
          cardName: "JIRA",
          routePath: "/ticket-management/jira",
          style: "twoByTwoCards",
        },
      ],
      faqs: [
        {
          id: 1,
          cardName: "General FAQs",
          routePath: "/faqs/general",
          style: "faqs",
        },
      ],
      graphicTools: [
        {
          id: 1,
          cardName: "SnagIT",
          routePath: "/graphic-tools/snag-it",
          style: "twoByTwoCards",
        },
        {
          id: 2,
          cardName: "Visio",
          routePath: "/graphic-tools/visio",
          style: "twoByTwoCards",
        },
        {
          id: 3,
          cardName: "ScreenToGIF",
          routePath: "/graphic-tools/screen-to-gif",
          style: "twoByTwoCards",
        },
        {
          id: 4,
          cardName: "Camtasia",
          routePath: "/graphic-tools/camtasia",
          style: "twoByTwoCards",
        },
      ],
      guidelines: [
        {
          id: 1,
          cardName: "CPS StyleGuide",
          routePath: "/guidelines/cps",
          style: "twoByTwoCards",
        },
        {
          id: 2,
          cardName: "Confluence",
          routePath: "/guidelines/confluence",
          style: "twoByTwoCards",
        },
        {
          id: 3,
          cardName: "Wiki",
          routePath: "/guidelines/wiki",
          style: "twoByTwoCards",
        },
      ],
    });

  const [progress, setProgress] = useState({});

  const updateProgress = (cardId, progressValue) => {
    setProgress((prev) => ({
      ...prev,
      [cardId]: progressValue,
    }));
  };

  return (
    <CardsContext.Provider
      value={{
        cardsData,
        setCardsData,
        progress,
        updateProgress,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

// Custom hook for easy access
export const useCards = () => {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCards must be used within CardsProvider");
  }
  return context;
};
