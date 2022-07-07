import React from "react";

function IndividualProject(props) {
    const { project } = props
    return (
        <div className="individualProject">
            <h3 className="projectName">{project.name}</h3>
            <p>{project.description}</p>
            <details>
                <summary>What I learned:</summary>
                {project.experience}</details>
            <div className="projectLinks">
                <a className="site growHover linkBtn" href={project.siteUrl} target="_blank" rel="noreferrer">Checkout the site!</a>
                <a className="code growHover linkBtn" href={project.githubUrl} target="_blank" rel="noreferrer"><code>Checkout the code;</code></a>
            </div>
        </div>
    );
}

export default IndividualProject;