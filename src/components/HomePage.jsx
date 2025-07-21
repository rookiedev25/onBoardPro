import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100">
        <img 
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Technical Documentation Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />
      <div className="max-w-4xl w-full flex flex-col justify-center items-center gap-6 bg-white/80 rounded-3xl shadow-2xl p-10 border border-gray-200 backdrop-blur-md">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 leading-tight tracking-tight">
          Empowering TechWriters to learn and connect with a supportive community
        </h1>
        <p className="text-lg text-center text-gray-600 px-2">
          Discover a supportive environment where your growth as a Technical Writer is our priority.
        </p>
        <Link to={"/dashboard"} className="w-fit flex justify-center">
          <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
