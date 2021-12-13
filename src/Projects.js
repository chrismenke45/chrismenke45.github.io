import React from "react";
import IndividualProject from "./IndividualProject";
import wheresWaldo from "./projects/wheresWaldo";
import shoppingCart from "./projects/shoppingCart";
import memory from "./projects/memory";

function Projects() {
    const projects = [wheresWaldo, shoppingCart, memory]
    return (
        <main id="projects">
            {projects.map(project => {
                return <IndividualProject project={project} />
            })}
        </main>
    );
}

export default Projects;