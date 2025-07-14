import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {

  
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-4xl flex flex-col justify-center items-center h-100 gap-5 m-4 p-5">
          <h1 className="text-5xl font-extrabold text-center">
           Empowering TechWriters to learn and connect with a supportive community
          </h1>
          <p className="text-xl text-center px-1 text-gray-500">
            Discover a supportive environment where your growth as a Technical Writer is our priority
          </p>
          <Link to={"/dashboard"}>
            <button className="bg-green-600 h-10 py-1 px-5 rounded-xl cursor-pointer hover:font-bold transition-all text-white">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
