import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bg-black text-white flex flex-row items-center justify-around py-4 absolute w-full gap-15 z-10">
        <NavLink to="/" activeclassname="active" className='text-2xl font-bold'>
          OnBoardPro
        </NavLink>
        <div className="flex flex-row gap-5">
          <NavLink to="/about" activeclassname="active" className='text-lg'>
            About
          </NavLink>
          {/* <NavLink to="/contact" activeclassname="active" className='text-lg'>
            Contact
          </NavLink> */}
        </div>
      </nav>

      {/* <nav className="bg-black text-white flex flex-row items-center justify-around py-4 absolute w-full gap-28 z-10">
        <div>
          <Link to={"/"}>
            {" "}
            <h1 className="text-2xl font-bold">OnBoardPro</h1>
          </Link>
        </div>
        <ul className="flex flex-row gap-5">
          <Link to={"/about"}>
            <li className="text-xl font-thin px-2 py-0.5 hover:font-medium transition-all cursor-pointer">
              About{" "}
            </li>
          </Link>
        </ul>
      </nav> */}
    </>
  );
};

export default NavBar;
