import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import demoImage from "../../public/caraousel"

const HomePage = ({ loginHandler, isLoggedIn, currentUser }) => {
  const [email, setEmail] = useState("");

  const navigator = useNavigate();

  // Don't auto-redirect, instead show different content based on login status

  const emailArray = [
    {
      id: 1,
      email: "alice@siemens.com",
      fName: "Alice",
      lName: "Phumale",
    },
    {
      id: 2,
      email: "yogesh.andar@siemens.com",
      fName: "Yogesh",
      lName: "Andar",
    },
    {
      id: 3,
      email: "pooja.ratnaparkhi@siemens.com",
      fName: "Pooja",
      lName: "Ratnaparkhi",
    },
    {
      id: 4,
      email: "ramkrushna.nevase@siemens.com",
      fName: "Ramkrushna",
      lName: "Nevase",
    },
    {
      id: 5,
      email: "gouranga.bhattacherjee@siemens.com",
      fName: "Gouranga",
      lName: "Bhattacherjee",
    },
    {
      id: 6,
      email: "vishwajeet.gunale@siemens.com",
      fName: "Vishwajeet",
      lName: "Gunale",
    },
    {
      id: 7,
      email: "yaswanth.sudhi@siemens.com",
      fName: "Yaswanth",
      lName: "Sudhi",
    },
    {
      id: 8,
      email: "praful.deshmukh@siemens.com",
      fName: "Praful",
      lName: "Deshmukh",
    },
    {
      id: 9,
      email: "trupti.palwekar@siemens.com",
      fName: "Trupti",
      lName: "Palwekar",
    },
    {
      id: 10,
      email: "deepali.malewadi@siemens.com",
      fName: "Deepali",
      lName: "Malewadi",
    },
    {
      id: 11,
      email: "padmini.l@siemens.com",
      fName: "Padmini",
      lName: "L",
    },
    {
      id: 12,
      email: "sakthi.vel@siemens.com",
      fName: "Sakthi",
      lName: "Vel",
    },
    {
      id: 13,
      email: "nancy.delalia@siemens.com",
      fName: "Nancy",
      lName: "Delalia",
    },
    {
      id: 14,
      email: "swetha.deepthi.ganja@siemens.com",
      fName: "Swetha Deepthi",
      lName: "Ganja",
    },
    {
      id: 15,
      email: "praveen.s@siemens.com",
      fName: "Praveen",
      lName: "S",
    },
    {
      id: 16,
      email: "vignesh.rajamohan@siemens.com",
      fName: "Vignesh",
      lName: "Rajamohan",
    },
    {
      id: 17,
      email: "monica.tiwari@siemens.com",
      fName: "Monica",
      lName: "Tiwari",
    },
  ];
  // Function to handle input change
  const handleInputChange = (e) => {
    e.preventDefault();
    if (email.includes("@siemens.com")) {
      const foundUser = emailArray.find((person) => person.email === email);

      if (foundUser) {
        // Call loginHandler with user information
        loginHandler({
          firstName: foundUser.fName,
          lastName: foundUser.lName,
          email: foundUser.email,
        });

        // Navigate to dashboard
        navigator("/dashboard");
      } else {
        alert("Email not found in our system");
      }
    } else {
      alert("Please enter a valid Siemens email address");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 px-4 sm:px-6 py-8">
      <img
        src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Technical Documentation Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Conditional rendering based on login status */}
      {isLoggedIn ? (
        // Already logged in - show welcome back message
        <div className="max-w-4xl w-full flex flex-col justify-center items-center gap-4 sm:gap-6 bg-white/80 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 backdrop-blur-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center text-gray-900 leading-tight tracking-tight">
            Welcome back,{" "}
            <span className="break-words">
              {currentUser?.firstName} {currentUser?.lastName}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-center text-gray-600 px-2">
            You're already logged in. Ready to continue your learning journey?
          </p>
          <Link to="/dashboard" className="w-fit flex justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer text-sm sm:text-base">
              Go to Dashboard
            </button>
          </Link>
        </div>
      ) : (
        // Not logged in - show login form
        <div className="max-w-4xl w-full flex flex-col justify-center items-center gap-4 sm:gap-6 bg-white/80 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 backdrop-blur-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center text-gray-900 leading-tight tracking-tight">
            Empowering TechWriters to learn and connect with a supportive
            community
          </h1>
          <p className="text-base sm:text-lg text-center text-gray-600 px-2">
            Discover a supportive environment where your growth as a Technical
            Writer is our priority.
          </p>
          <div className="inputContainer flex flex-col sm:flex-row w-full max-w-lg gap-2 sm:gap-0">
            <input
              type="text"
              className="flex-1 rounded-lg sm:rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none sm:rounded-br-none border-gray-200 border-1 p-3 sm:p-2 text-center focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base"
              placeholder="Enter your email-ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Link
              to={"/dashboard"}
              className="w-full sm:w-fit flex justify-center"
            >
              <button
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-2 px-6 rounded-lg sm:rounded-br-lg sm:rounded-tr-lg sm:rounded-tl-none sm:rounded-bl-none shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer text-sm sm:text-base"
                onClick={handleInputChange}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
