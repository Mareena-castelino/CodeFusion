import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Editior from "./pages/Editior";
import NoPage from "./pages/NoPage";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // On component mount, check if the user is logged in
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(storedLoginStatus);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Routes */}
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/editior/:projectID"
          element={isLoggedIn ? <Editior /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={isLoggedIn ? <NoPage /> : <Navigate to="/login" />}
        />

        {/* Public Routes */}
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
