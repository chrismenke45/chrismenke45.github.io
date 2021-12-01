import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
