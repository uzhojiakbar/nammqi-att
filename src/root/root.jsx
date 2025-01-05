import React from "react";
import "./index.css";
import Body from "../components/Body/Body";
import Navbar from "../components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Direction from "../components/Direction/Direction";
import About from "../components/About/about";

const Root = () => {
  return (
    <div className="main">
      <Navbar />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/direction" element={<Direction />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default Root;
