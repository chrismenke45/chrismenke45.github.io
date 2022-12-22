import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div id="app">
      <Home />
      <main>
        <About />
        <Projects />
      </main>

      <Contact />
    </div>
  );
}

export default App;
