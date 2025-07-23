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
      trainingModules: [
        {
          id: 1,
          cardName: "ST4 Introduction",
          cardDescription: "Introduction to ST4 and its features",
          link: "https://siemensapc-my.sharepoint.com/:p:/r/personal/yaswanth_sudhi_siemens_com/_layouts/15/Doc.aspx?sourcedoc=%7B82D7D78D-7169-4DA3-BFBE-FED48B433A83%7D&file=01%20ST4%20Introduction%20(1).pptx&action=edit&mobileredirect=true",
          style: "module",
        },
        {
          id: 2,
          cardName: "ST4 User Interface",
          cardDescription: "Understanding the ST4 user interface",
          link: "https://siemensapc-my.sharepoint.com/:p:/r/personal/yaswanth_sudhi_siemens_com/_layouts/15/Doc.aspx?sourcedoc=%7B48C34168-5F58-4C64-9A5A-7420D5BD313C%7D&file=02%20ST4%20User%20Interface.pptx&action=edit&mobileredirect=true",
          style: "module",
        },
        {
          id: 3,
          cardName: "Topic Oriented Writing Basics",
          cardDescription: "Fundamentals of topic-oriented writing",
          link: "https://siemensapc-my.sharepoint.com/:p:/r/personal/yaswanth_sudhi_siemens_com/_layouts/15/Doc.aspx?sourcedoc=%7B3F7E3628-E97A-481F-81DA-F923598CCA24%7D&file=08_Topic-oriented%20writing%20basics.pptx&action=edit&mobileredirect=true",
          style: "module",
        },
        {
          id: 4,
          cardName: "Getting Started with XMetal",
          cardDescription: "Introduction to XMetal and its features",
          link: "https://siemensapc-my.sharepoint.com/:v:/r/personal/yaswanth_sudhi_siemens_com/Documents/On%20Board%20Pro/Trainings%20related%20to%20ST4%20and%20X-metal/Set%201/Getting%20started%20with%20X-metal/1_Getting%20started%20with%20ST4%20using%20XMetal%20by%20Ramkrushna.mp4?csf=1&web=1&e=RQYBRO&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
          style: "module",
        },
        {
          id: 5,
          cardName: "ST4 Overview",
          cardDescription: "Overview of ST4 features and functionalities",
          link: "https://siemensapc-my.sharepoint.com/:v:/r/personal/yaswanth_sudhi_siemens_com/Documents/On%20Board%20Pro/Trainings%20related%20to%20ST4%20and%20X-metal/Set%201/ST4%20Overview/1_ST4%20-%20Introduction%20and%20Overview-20210608_161354-Meeting%20Recording.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=zyPA0p",
          style: "module",
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
        {
          id: 3,
          cardName: "Git",
          routePath: "/guidelines/git",
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
          cardName: "Wiki Page",
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
