import { NavLink, useNavigate } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

const NavBar = ({ isLoggedIn, logoutHandler }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutHandler();
    navigate("/");
  };

  return (
    <nav className="bg-black text-white shadow-lg flex items-center justify-between px-10 py-4 fixed top-0 left-0 w-full z-20 backdrop-blur-md">
      <NavLink to="/" className="text-3xl font-extrabold tracking-tight">
        OnBoardPro
      </NavLink>
      {isLoggedIn && (
        <div className="flex flex-row mr-21 items-center">
          <NavLink
            to="/dashboard"
            className="text-lg font-thin px-4 py-2 transition-all duration-200 hover:font-bold"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="https://github.com/rookiedev25"
            target="_blank"
            className="text-lg font-thin px-4 py-2 transition-all duration-200 hover:font-bold"
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
      )}
      <div className="rightMostButton">
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="text-md text-black font-thin px-4 py-2 transition-all duration-200 hover:font-bold bg-gray-200 hover:bg-white rounded-xl cursor-pointer"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
