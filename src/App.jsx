import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import GoodBye from "./components/GoodBye";

const App = () => {
  const [loggedStatus, setLoggedInStatus] = useState(false);
 
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  const loginHandler = () => {
    setLoggedInStatus(true);
  };
  
  const logoutHandler = () => {
    setLoggedInStatus(false);
  };

  return (
    <>
      <NavBar
        isLoggedIn={loggedStatus}
        onLogout={logoutHandler}
        onLogin={loginHandler}
      />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/goodbye" element={<GoodBye />} />
        </Routes>
    </>
  );
};

export default App;
