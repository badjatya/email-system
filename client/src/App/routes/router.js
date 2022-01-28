// Packages
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Compose from "../pages/Compose";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/compose" element={<Compose />} />
    </Routes>
  );
};

export default Router;
