import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-black text-white shadow-lg flex items-center justify-between px-10 py-4 fixed top-0 left-0 w-full z-20 backdrop-blur-md">
      <NavLink
        to="/"
        className="text-3xl font-extrabold tracking-tight"
      >
        OnBoardPro
      </NavLink>
      <div className="flex gap-8">
        <NavLink
          to="https://github.com/rookiedev25"
          target="_blank"
          className="text-md font-thin px-4 py-2 transition-all duration-200 hover:font-bold border rounded-xl"
        >
          GitHub
        </NavLink>
        {/* <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-lg font-medium px-4 py-2 transition-all duration-200 border-1 ${
              isActive
                ? "bg-white bg-opacity-10 text-black shadow-md rounded-xl"
                : "hover:bg-white hover:bg-opacity-5 rounded-xl transition-colors duration-200"
            }`
          }
        >
          About
        </NavLink> */}
        {/* <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-lg font-medium px-4 py-2 transition-all duration-200 ${
              isActive
                ? "bg-white bg-opacity-10 text-pink-400 shadow-md"
                : "hover:bg-white hover:bg-opacity-5 hover:text-indigo-200"
            }`
          }
        >
          Contact
        </NavLink> */}
      </div>
    </nav>
  );
};

export default NavBar;
