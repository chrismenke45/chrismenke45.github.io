import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <body>
      <Home />
      <main>
        <About />
        <Projects />
      </main>

      <Contact />
    </body>
  );
}

export default App;
