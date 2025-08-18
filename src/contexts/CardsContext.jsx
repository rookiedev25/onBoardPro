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
          routePath: "/dashboard/training-essentials",
          style: "twoByTwoCards",
        },
        {
          id: 2,
          cardName: "Optional",
          routePath: "/dashboard/training-optional",
          style: "twoByTwoCards",
        },
      ],
      dashboard: [
        {
          id: 1,
          cardName: "Meet the Team",
          routePath: "/dashboard/meet-the-team",
          style: "threeByThreeCards",
        },
        {
          id: 2,
          cardName: "Guidelines",
          routePath: "/dashboard/guidelines",
          style: "threeByThreeCards",
        },
        {
          id: 3,
          cardName: "Training",
          routePath: "/dashboard/training",
          style: "threeByThreeCards",
        },
        {
          id: 4,
          cardName: "Graphic Tools",
          routePath: "/dashboard/graphic-tools",
          style: "threeByThreeCards",
        },
        {
          id: 5,
          cardName: "Ticket Management",
          routePath: "/dashboard/ticket-management",
          style: "threeByThreeCards",
        },
        {
          id: 6,
          cardName: "FAQs",
          routePath: "/dashboard/faqs",
          style: "threeByThreeCards",
        },
      ],
      trainingEssentials: [
        {
          id: 1,
          cardName: "SET-1",
          cardDescription: "Introduction to ST4 and XMetal",
          routePath: "/dashboard/training-essentials/set/1",
          moduleLearnings:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam neque consectetur eaque, praesentium facilis sunt? Incidunt illo accusantium culpa id error voluptatibus sapiente expedita. Illo aliquam, itaque quas quo odit nisi earum quam exercitationem nulla, illum similique eos rem veritatis!",
          progress: "20",
        },
        {
          id: 2,
          cardName: "SET-2",
          cardDescription: "Working with ST4 and XMetal",
          routePath: "/dashboard/training-essentials/set/2",
          style: "threeByThreeCards",
          moduleLearnings: "",
          progress: "50",
        },
        {
          id: 3,
          cardName: "SET-3",
          cardDescription: "Working with types of Graphics",
          routePath: "/dashboard/training-essentials/set/3",
          moduleLearnings: "",
          style: "threeByThreeCards",
          progress: "90",
        },
        {
          id: 4,
          cardName: "SET-4",
          cardDescription: "Working with Fragments",
          routePath: "/dashboard/training-essentials/set/4",
          moduleLearnings: "",
          style: "threeByThreeCards",
          progress: "60",
        },
        {
          id: 5,
          cardName: "SET-5",
          cardDescription: "Working with Projects and Production in ST4",
          routePath: "/dashboard/training-essentials/set/5",
          moduleLearnings: "",
          style: "threeByThreeCards",
          progress: "35",
        },
        {
          id: 6,
          cardName: "SET-6",
          cardDescription: "Working with Contextual Help",
          routePath: "/dashboard/training-essentials/set/6",
          moduleLearnings: "",
          style: "threeByThreeCards",
          progress: "70",
        },
        {
          id: 7,
          cardName: "SET-7",
          cardDescription: "Editorial Review Process",
          routePath: "/dashboard/training-essentials/set/7",
          style: "threeByThreeCards",
          moduleLearnings: "",
          progress: "45",
        },
      ],
      trainingModules_SET1: [
        // {
        //   id: 1,
        //   cardName: " ",
        //   cardDescription: " ",
        //   link: " ",
        //   style: "module",
        // },
        {
          id: 1,
          cardName: "Getting Started with Xmetal",
          videoLink:
            "https://siemensapc.sharepoint.com/:v:/r/teams/TechCommPUNE/Shared%20Documents/Onboard%20Pro/Training%20set%201/Getting%20started%20with%20Xmetal/1_Getting%20started%20with%20ST4%20using%20XMetal%20by%20Ramkrushna.mp4?csf=1&web=1&e=lhZnRf",
          pptLink:
            "https://siemensapc.sharepoint.com/:p:/r/teams/TechCommPUNE/Shared%20Documents/Onboard%20Pro/Training%20set%201/Getting%20started%20with%20Xmetal/1_Getting%20Started%20with%20ST4%20using%20XMetal.pptx?d=wc58efa3b8be14c88a09749bd6b76e73a&csf=1&web=1&e=I1ukVR",
          style: "module",
        },
        {
          id: 2,
          cardName: "ST4 Overview",
          videoLink:
            "https://siemensapc.sharepoint.com/:v:/r/teams/TechCommPUNE/Shared%20Documents/Onboard%20Pro/Training%20set%201/ST4%20overview/1_ST4%20-%20Introduction%20and%20Overview-20210608_161354-Meeting%20Recording.mp4?csf=1&web=1&e=IFwF18",
          style: "module",
        },
        {
          id: 3,
          cardName: "ST4 Introduction",
          pptLink:
            "https://siemensapc.sharepoint.com/:p:/r/teams/TechCommPUNE/Shared%20Documents/Onboard%20Pro/Training%20set%201/01%20ST4%20Introduction%20(1).pptx?d=w0e0b0e5798dc412eacadceaf9d59cf2b&csf=1&web=1&e=DDJWMU",
          style: "module",
        },
        {
          id: 4,
          cardName: "ST4 User Interface",
          pptLink:
            "https://siemensapc.sharepoint.com/:p:/r/teams/TechCommPUNE/Shared%20Documents/Onboard%20Pro/Training%20set%201/02%20ST4%20User%20Interface.pptx?d=we27a401073a64e1e8f3a5589b8e49e57&csf=1&web=1&e=WXgeWB",
          style: "module",
        },
        {
          id: 5,
          cardName: "Topic Oriented Writing Basics",
          pptLink:
            "https://siemensapc.sharepoint.com/:p:/r/teams/TechCommPUNE/Shared%20Documents/Onboard%20Pro/Training%20set%201/08_Topic-oriented%20writing%20basics.pptx?d=wdc322394e34d4af19de6d865e3660d0a&csf=1&web=1&e=g6VKn5",
          style: "module",
        },
      ],
      trainingModules_SET2: [
        {
          id: 1,
          cardName: "ST4 Introduction",
          cardDescription: "Introduction to ST4 and its features",
          link: "https://siemensapc-my.sharepoint.com/:p:/r/personal/yaswanth_sudhi_siemens_com/_layouts/15/Doc.aspx?sourcedoc=%7B82D7D78D-7169-4DA3-BFBE-FED48B433A83%7D&file=01%20ST4%20Introduction%20(1).pptx&action=edit&mobileredirect=true",
          style: "module",
        },
      ],
      trainingModules_SET3: [
        {
          id: 1,
          cardName: "ST4 Introduction",
          cardDescription: "Introduction to ST4 and its features",
          link: "https://siemensapc-my.sharepoint.com/:p:/r/personal/yaswanth_sudhi_siemens_com/_layouts/15/Doc.aspx?sourcedoc=%7B82D7D78D-7169-4DA3-BFBE-FED48B433A83%7D&file=01%20ST4%20Introduction%20(1).pptx&action=edit&mobileredirect=true",
          style: "module",
        },
      ],
      trainingModules_SET4: [
        {
          id: 1,
          cardName: "ST4 Introduction",
          cardDescription: "Introduction to ST4 and its features",
          link: "https://siemensapc-my.sharepoint.com/:p:/r/personal/yaswanth_sudhi_siemens_com/_layouts/15/Doc.aspx?sourcedoc=%7B82D7D78D-7169-4DA3-BFBE-FED48B433A83%7D&file=01%20ST4%20Introduction%20(1).pptx&action=edit&mobileredirect=true",
          style: "module",
        },
      ],
      trainingModules_SET5: [
        {
          id: 1,
          cardName: "ST4 Introduction",
          cardDescription: "Introduction to ST4 and its features",
          link: "https://siemensapc-my.sharepoint.com/:p:/r/personal/yaswanth_sudhi_siemens_com/_layouts/15/Doc.aspx?sourcedoc=%7B82D7D78D-7169-4DA3-BFBE-FED48B433A83%7D&file=01%20ST4%20Introduction%20(1).pptx&action=edit&mobileredirect=true",
          style: "module",
        },
      ],
      trainingModules_SET6: [
        {
          id: 1,
          cardName: "ST4 Introduction",
          cardDescription: "Introduction to ST4 and its features",
          link: "https://siemensapc-my.sharepoint.com/:p:/r/personal/yaswanth_sudhi_siemens_com/_layouts/15/Doc.aspx?sourcedoc=%7B82D7D78D-7169-4DA3-BFBE-FED48B433A83%7D&file=01%20ST4%20Introduction%20(1).pptx&action=edit&mobileredirect=true",
          style: "module",
        },
      ],
      trainingModules_SET7: [
        {
          id: 1,
          cardName: "ST4 Introduction",
          cardDescription: "Introduction to ST4 and its features",
          link: "https://siemensapc-my.sharepoint.com/:p:/r/personal/yaswanth_sudhi_siemens_com/_layouts/15/Doc.aspx?sourcedoc=%7B82D7D78D-7169-4DA3-BFBE-FED48B433A83%7D&file=01%20ST4%20Introduction%20(1).pptx&action=edit&mobileredirect=true",
          style: "module",
        },
      ],
      trainingModules_SET8: [
        {
          id: 1,
          cardName: "ST4 Introduction",
          cardDescription: "Introduction to ST4 and its features",
          link: "https://siemensapc-my.sharepoint.com/:p:/r/personal/yaswanth_sudhi_siemens_com/_layouts/15/Doc.aspx?sourcedoc=%7B82D7D78D-7169-4DA3-BFBE-FED48B433A83%7D&file=01%20ST4%20Introduction%20(1).pptx&action=edit&mobileredirect=true",
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
