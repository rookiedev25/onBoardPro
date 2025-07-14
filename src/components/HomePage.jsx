import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {

  
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-4xl flex flex-col justify-center items-center h-100 gap-5 m-4 p-5">
          <h1 className="text-5xl font-extrabold text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p className="text-xl text-center px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi
            consectetur rerum ipsum!
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
