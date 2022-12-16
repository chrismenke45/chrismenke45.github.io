import React, { useEffect, useLayoutEffect, useRef } from "react";

function IndividualProject(props) {
    const { project } = props
    
    const fadeInRef = useRef(null)

    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollFadeIn)
        return () => window.removeEventListener('scroll', scrollFadeIn)
      }, [])
  
      const scrollFadeIn = () => {
        const topPosition = fadeInRef.current.getBoundingClientRect().top
          const scrollPosition = window.scrollY + window.innerHeight * 1.4
          if (topPosition < scrollPosition) {
            console.log(topPosition, scrollPosition, window.scrollY + window.innerHeight)
            fadeInRef.current.classList.add("fadeIn")
            fadeInRef.current.classList.remove("hiddenForFadeIn")
          }
      }


    // useEffect(() => {
    //     if (project.pingUrl) {
    //         let apiUrl = project.pingUrl
    //         const options = {
    //             method: 'GET',
    //         };
    //         return fetch(apiUrl, options)
    //             .then((response) => {
    //                 console.log(`${project.name} pinged`);
    //             })
    //             .catch(error => {
    //                 console.error('Error:', error)
    //             })
    //     }
    // })
    return (
        <div ref={fadeInRef} className="hiddenForFadeIn individualProject">
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