import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ isLoggedIn, logoutHandler }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutHandler();
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white shadow-lg fixed top-0 left-0 w-full z-20 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight"
        >
          OnBoardPro
        </NavLink>

        {/* Desktop Menu */}
        {isLoggedIn && (
          <div className="hidden md:flex flex-row gap-3 items-center">
            <NavLink
              to="/dashboard"
              className="text-lg font-thin px-4 py-2 transition-all duration-200 hover:font-bold"
            >
              Home
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-md sm:text-md text-white font-bold px-4 py-2 transition-all duration-200 hover:font-bold bg-gray-600 hover:bg-blue-600 rounded-lg cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isLoggedIn && (
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 border-0 bg-transparent text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-1"
                  : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-1"
                  : "translate-y-0.5"
              }`}
            ></span>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isLoggedIn && (
        <div
          className={`md:hidden bg-black border-t border-gray-700 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-48 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-2 space-y-2">
            <NavLink
              to="/dashboard"
              onClick={closeMobileMenu}
              className="block text-lg font-thin px-4 py-3 transition-all duration-200 hover:bg-gray-800 rounded-lg"
            >
              Home
            </NavLink>
            <button
              onClick={handleLogout}
              className="w-full text-left text-md text-white font-bold px-4 py-3 transition-all duration-200 hover:bg-blue-600 bg-gray-600 rounded-lg cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
