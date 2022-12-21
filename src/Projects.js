import React from "react";
import UnderLineStyle from "./UnderLineStyle"
import IndividualProject from "./IndividualProject";
import twitterClone from "./projects/twitterClone";
//import wheresWaldo from "./projects/wheresWaldo";
//import shoppingCart from "./projects/shoppingCart";
import chess from "./projects/chess";
import snake from "./projects/snake";
//import memory from "./projects/memory";
//import pikPak from "./projects/pikPak";

function Projects() {
    const projects = [twitterClone, snake, chess]
    return (
        <main id="projects">
                <h2 className="sectionTitle">My Projects:</h2>
                <UnderLineStyle />
            {projects.map((project, i) => {
                return <IndividualProject key={project.id} project={project} />
            })}
        </main>
    );
}

export default Projects;