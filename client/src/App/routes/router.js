// Packages
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Compose from "../pages/Compose";
import Sent from "../pages/Sent";
import SentDetails from "../pages/SentDetails";
import Draft from "../pages/Draft";
import DraftDetails from "../pages/DraftDetails";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/compose" element={<Compose />} />
      <Route path="/sent" element={<Sent />} />
      <Route path="/sent/:id" element={<SentDetails />} />
      <Route path="/draft" element={<Draft />} />
      <Route path="/draft/:id" element={<DraftDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
