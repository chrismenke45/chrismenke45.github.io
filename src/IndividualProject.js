import React from "react";

function IndividualProject(props) {
    const { project } = props
    return (
        <div className="individualProject">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="projectLinks">
                <a className="site" href={project.siteUrl} target="_blank" rel="noreferrer">Checkout the site!</a>
                <a className="code" href={project.githubUrl} target="_blank" rel="noreferrer"><code>Checkout the code;</code></a>
            </div>
        </div>
    );
}

export default IndividualProject;