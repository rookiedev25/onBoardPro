import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

const NavBar = ({isLoggedIn, onLogout, onLogin}) => {
    return (
      <>
        <nav className="bg-black text-white flex flex-row items-center justify-around py-4 absolute w-full gap-28">
          <div>
            <Link to={"/"}>
              {" "}
              <h1 className="text-2xl font-bold">OnBoarder</h1>
            </Link>
          </div>
          <ul className="flex flex-row gap-5">
            <Link to={"/about"}>
              <li className="text-l px-2 py-0.5 hover:font-bold transition-all cursor-pointer">
                About Us
              </li>
            </Link>

            {/** show logout button when user is logged in  */}
            {isLoggedIn && (
              <Link to={"/goodbye"}>
                <button
                  className="text-l hover:font-bold transition-all cursor-pointer bg-white text-black px-2 rounded py-0.5"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </Link>
            )}
            {!isLoggedIn && (
              <Link to={"/login"}>
                <button
                  className="text-l hover:font-bold transition-all cursor-pointer bg-black border-white border-1 px-2.5 rounded py-0.5"
                  onClick={onLogin}
                >
                  Login
                </button>
              </Link>
            )}
          </ul>
        </nav>
      </>
    );
};

export default NavBar;
