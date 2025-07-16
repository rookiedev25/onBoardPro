import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bg-black text-white flex flex-row items-center justify-around py-4 absolute w-full gap-28 z-10">
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
          {/* <Link to={"/goodbye"}>
              <button
                className="text-l hover:font-bold transition-all cursor-pointer bg-white text-black px-2 rounded py-0.5"
                onClick={onLogout}
              >
                <p>Logout</p>
              </button>
            </Link> */}

          {/** show logout button when user is logged in  */}
          {/* {isLoggedIn && (
              <Link to={"/goodbye"}>
                <button
                  className="text-l hover:font-bold transition-all cursor-pointer bg-white text-black px-2 rounded py-0.5"
                  onClick={onLogout}
                >
                  <p>Logout</p>
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
            )} */}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
