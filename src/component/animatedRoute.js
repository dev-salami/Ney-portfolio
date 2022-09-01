import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Stack from "./Stack";
import Project from "./Project";
import About from "./about";

function AnimatedRoute() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/Project" element={<Project />}></Route>
        <Route path="/Stack" element={<Stack />}></Route>
      </Routes>
    </>
  );
}
export default AnimatedRoute;
