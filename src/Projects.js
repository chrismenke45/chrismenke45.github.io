import React from "react";
import IndividualProject from "./IndividualProject";
import twitterClone from "./projects/twitterClone";
import wheresWaldo from "./projects/wheresWaldo";
import shoppingCart from "./projects/shoppingCart";
//import memory from "./projects/memory";
import pikPak from "./projects/pikPak";

function Projects() {
    const projects = [twitterClone, pikPak, wheresWaldo, shoppingCart]
    return (
        <main id="projects">
            <div className="projectsTitleContainer">
                <h2 className="projectsTitle">My Projects:</h2>
            </div>
            {projects.map(project => {
                return <IndividualProject project={project} />
            })}
        </main>
    );
}

export default Projects;