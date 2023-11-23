import "./App.css";
import App from "./App";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/fitness" exact element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/app/*" element={<App />} />
      </Routes>
    </div>
  );
}

export default Main;
