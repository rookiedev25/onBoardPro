import React from "react";
import { Link } from "react-router-dom";
import CardsGrid from "./CardsGrid";

const Dashboard = () => {
//   const dashBoardCards = [
//     {
//       id: 1,
//       cardName: "Meet the Team",
//       routePath: "/about",
//     },
//     {
//       id: 2,
//       cardName: "Guidelines",
//       routePath: "/guidelines",
//     },
//     {
//       id: 3,
//       cardName: "Trainings",
//       routePath: "/trainings",
//     },
//     {
//       id: 4,
//       cardName: "Graphic Tools",
//       routePath: "/graphic-tools",
//     },
//     {
//       id: 5,
//       cardName: "Ticket Management",
//       routePath: "/ticket-management",
//     },
//     {
//       id: 6,
//       cardName: "FAQs",
//       routePath: "/faqs",
//     },
//   ];

  //calculate current date:
  const date = new Date();
  let day = date.getDate();
  let year = date.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getDaySuffix = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  let formattedDate = `${day}${getDaySuffix(day)} ${
    monthNames[date.getMonth()]
  }, ${year}`;

  return (
    <>
      <div className="flex flex-col items-left py-20 min-h-screen bg-gray-100">
        <div className="greetingContainer ml-100 flex flex-col items-left gap-2 mb-10">
          <h1 className="text-3xl font-semibold">Hello User,</h1>
          <p className="text-xl font-light">Today is {formattedDate}</p>
        </div>
        <div className="cards flex justify-center">
          <CardsGrid type="dashboard" variant="threeByThreeCards" gridCols={3} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
