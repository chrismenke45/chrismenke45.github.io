import React, { useEffect, useLayoutEffect, useRef } from "react"
import UnderLineStyle from "./UnderLineStyle"
import TechnologyLogo from "./TechnologyLogo"

function IndividualProject(props) {
  const { project, setModalInfo } = props

  const handleProjectClick = () => {
    setModalInfo(project.message, project.siteUrl)
  }

  const fadeInRef = useRef(null)

  useLayoutEffect(() => {
    window.addEventListener("scroll", scrollFadeIn)
    return () => window.removeEventListener("scroll", scrollFadeIn)
  }, [])

  const scrollFadeIn = () => {
    const topPosition = fadeInRef.current.getBoundingClientRect().top
    if (topPosition < window.innerHeight * 0.775) {
      fadeInRef.current.classList.add("fadeIn")
      fadeInRef.current.classList.remove("hiddenForFadeIn")
    }
  }

  useEffect(() => {
    if (project.pingUrl) {
      let apiUrl = project.pingUrl
      const options = {
        method: "GET",
      }
      return fetch(apiUrl, options)
        .then((response) => {
          console.log(`${project.name} pinged`)
        })
        .catch((error) => {
          console.error("Error:", error)
        })
    }
  })

  return (
    <section
      key={`project${project.id}`}
      id={`project${project.id}`}
      ref={fadeInRef}
      className="hiddenForFadeIn individualProject"
    >
      <div className="projectText">
        <h3 className="projectName">{project.name}</h3>
        <UnderLineStyle />
        <p>{project.description}</p>
        <div className="technologies">
          {project.technologies.map((technology) => {
            return <TechnologyLogo key={technology} technology={technology} />
          })}
        </div>
      </div>
      <div>
        {project.desktopPhoto && (
          <button className="projectImgWrapperBtn" onClick={handleProjectClick}>
            <img
              className="desktopProject project"
              src={project.desktopPhoto}
              alt={`${project.name} on desktop`}
            ></img>
          </button>
        )}
        {project.mobilePhoto && (
          <button className="projectImgWrapperBtn" onClick={handleProjectClick}>
            <img
              className="mobileProject project"
              src={project.mobilePhoto}
              alt={`${project.name} on mobile`}
            ></img>
          </button>
        )}
      </div>

      {/*<a className="code growHover linkBtn" href={project.githubUrl} target="_blank" rel="noreferrer"><code>Checkout the code;</code></a>*/}
    </section>
  )
}

export default IndividualProject
