import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./NavBar";
import Home from "./Home";
import Resume from "./Resume";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/projects" element={<h1>projects</h1>} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<h1>contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
