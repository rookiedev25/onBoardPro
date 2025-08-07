import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CardsGrid from "./CardsGrid";

const Dashboard = ({ username, isLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // If not logged in and no username, redirect to home
  if (!isLoggedIn && !username) {
    navigate("/");
    return null;
  }

  // Fallback to location state if username prop is not available
  let displayUsername = username;
  if (!displayUsername && location.state && location.state.username) {
    displayUsername = location.state.username;
  }

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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center py-16 px-4">
        <img
          // src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Technical Documentation Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 -z-0"
        />

        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-10 mb-7 mt-7 flex flex-col items-start gap-4 z-2">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">
            Welcome back,{" "}
            <span className="text-blue-600">{displayUsername}</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full mr-2">
              {formattedDate}
            </span>
            Hope you have a productive day!
          </p>
        </div>
        <div className="">
          <CardsGrid
            type="dashboard"
            variant="threeByThreeCards"
            gridCols={3}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
