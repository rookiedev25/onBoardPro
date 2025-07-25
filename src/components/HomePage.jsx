import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import demoImage from "../../public/caraousel"


const HomePage = () => {

  const [firstName, setFirstName] = useState("");

  const navigator = useNavigate();


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
    if (firstName.includes("@siemens.com")) {
      let displayName = emailArray.map((person) => {
        if(person.email === firstName) {
          return person.fName + " " + person.lName;
        }
      })
      console.log(displayName);
      navigator("/dashboard", { state: { username: displayName } });
    } else {
      alert("Please enter a valid Siemens email address");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100">
      <img
        src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Technical Documentation Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />
      {/* <div className="carousel w-full max-w-5xl bg-white rounded-3xl shadow-xl p-10 mb-7 mt-7 flex flex-row items-start gap-4 z-10">
        {carouselImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`carousel-${idx}`}
            className="rounded-xl shadow-md w-48 h-32 object-cover"
          />
        ))}
      </div> */}
      <div className="max-w-4xl w-full flex flex-col justify-center items-center gap-6 bg-white/80 rounded-3xl shadow-2xl p-10 border border-gray-200 backdrop-blur-md">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 leading-tight tracking-tight">
          Empowering TechWriters to learn and connect with a supportive
          community
        </h1>
        <p className="text-lg text-center text-gray-600 px-2">
          Discover a supportive environment where your growth as a Technical
          Writer is our priority.
        </p>
        <input
          type="text"
          className="rounded-lg border-gray-200 border-1 p-2 active:border-red-50 text-center max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          placeholder="Enter your email-ID"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Link to={"/dashboard"} className="w-fit flex justify-center">
          <button
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
            onClick={handleInputChange}
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
