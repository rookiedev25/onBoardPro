// import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import GoodBye from "./components/GoodBye";
import TrainingEssentials from "./components/TrainingEssentials";
import Training from "./components/Training";
import { CardsProvider } from "./contexts/CardsContext";
import TicketManagement from "./components/TicketManagement";
import GraphicTools from "./components/GraphicTools";
import Guidelines from "./components/Guidelines";
import MeetTheTeam from "./components/MeetTheTeam";
import FAQs from "./components/FAQs";
import { useState } from "react";
import TrainingModules from "./components/TrainingModules";

const App = () => {
  // const [loggedStatus, setLoggedInStatus] = useState(false);

  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  // const loginHandler = () => {
  //   setLoggedInStatus(true);
  // };

  // const logoutHandler = () => {
  //   setLoggedInStatus(false);
  // };

  // prop-drill to dashboard to fetch and show username
  const [firstName, setFirstName] = useState("");



  return (
    <>
      <CardsProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route
            path="/dashboard"
            element={<Dashboard username={firstName} />}
          />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/goodbye" element={<GoodBye />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training-essentials" element={<TrainingEssentials />} />
          <Route
            path="/training-essentials/set-1"
            element={<TrainingModules />}
          />
          <Route path="/graphic-tools" element={<GraphicTools />} />
          <Route path="/ticket-management" element={<TicketManagement />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </CardsProvider>
    </>
  );
};

export default App;
