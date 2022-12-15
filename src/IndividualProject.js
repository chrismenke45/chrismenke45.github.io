import React, { useEffect } from "react";

function IndividualProject(props) {
    const { project } = props


    useEffect(() => {
        if (project.pingUrl) {
            let apiUrl = project.pingUrl
            const options = {
                method: 'GET',
            };
            return fetch(apiUrl, options)
                .then((response) => {
                    console.log(`${project.name} pinged`);
                })
                .catch(error => {
                    console.error('Error:', error)
                })
        }
    })
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