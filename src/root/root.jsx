import React from "react";
import "./index.css";
import Body from "../components/Body/Body";
import Navbar from "../components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Direction from "../components/Direction/Direction";

const Root = () => {
  return (
    <div className="main">
      <Navbar />
      <Body />

      <Routes>
        <Route path="/direction" element={<Direction />} />
      </Routes>
    </div>
  );
};

export default Root;
