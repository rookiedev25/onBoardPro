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
import { useState, useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import TrainingModulesPage from "./components/TrainingModulesPage";

const App = () => {
  // Authentication state management
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [currentUser, setCurrentUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Load user data from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    const savedLoginStatus = localStorage.getItem("isLoggedIn");

    if (savedUser && savedLoginStatus === "true") {
      setCurrentUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }

    // Set loading to false after checking localStorage
    setIsLoading(false);
  }, []);

  // Login handler - called when user successfully enters email
  const loginHandler = (userInfo) => {
    setCurrentUser(userInfo);
    setIsLoggedIn(true);

    // Save to localStorage
    localStorage.setItem("currentUser", JSON.stringify(userInfo));
    localStorage.setItem("isLoggedIn", "true");
  };

  // Logout handler - clears user data and redirects to home
  const logoutHandler = () => {
    setCurrentUser({
      firstName: "",
      lastName: "",
      email: "",
    });
    setIsLoggedIn(false);

    // Clear localStorage
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      <CardsProvider>
        <NavBar isLoggedIn={isLoggedIn} logoutHandler={logoutHandler} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                loginHandler={loginHandler}
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} isLoading={isLoading}>
                <Dashboard
                  username={`${currentUser.firstName} ${currentUser.lastName}`}
                  isLoggedIn={isLoggedIn}
                />
              </ProtectedRoute>
            }
          />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/goodbye" element={<GoodBye />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training-essentials" element={<TrainingEssentials />} />
          <Route
            path="/training-essentials/set/:setNumber"
            element={<TrainingModulesPage />}
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
