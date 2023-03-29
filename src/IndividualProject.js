import React, { useEffect, useLayoutEffect, useRef } from "react";
import UnderLineStyle from "./UnderLineStyle"

function IndividualProject(props) {
    const { project } = props

    const fadeInRef = useRef(null)

    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollFadeIn)
        return () => window.removeEventListener('scroll', scrollFadeIn)
    }, [])

    const scrollFadeIn = () => {
        const topPosition = fadeInRef.current.getBoundingClientRect().top
        if (topPosition < window.innerHeight * .775) {
            fadeInRef.current.classList.add("fadeIn")
            fadeInRef.current.classList.remove("hiddenForFadeIn")
        }
    }


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
        <section key={`project${project.id}`} id={`project${project.id}`} ref={fadeInRef} className="hiddenForFadeIn individualProject">
            <div className="projectText">
                <h3 className="projectName">{project.name}</h3>
                <UnderLineStyle />
                <p>{project.description}</p>
                <details>
                    <summary>What I learned:</summary>
                    {project.experience}
                </details>
            </div>
            <div>
                {project.desktopPhoto && <a href={project.siteUrl} target="_blank" rel="noreferrer"><img className="desktopProject project" src={project.desktopPhoto} alt={`${project.name} on desktop`}></img></a>}
                {project.mobilePhoto && <a href={project.siteUrl} target="_blank" rel="noreferrer"><img className="mobileProject project" src={project.mobilePhoto} alt={`${project.name} on mobile`}></img></a>}
            </div>


            {/*<a className="code growHover linkBtn" href={project.githubUrl} target="_blank" rel="noreferrer"><code>Checkout the code;</code></a>*/}
        </section>
    );
}

export default IndividualProject;