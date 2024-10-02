import React from "react"
import UnderLineStyle from "./UnderLineStyle"
import IndividualProject from "./IndividualProject"
import instaClone from "./projects/instaClone"
import twitterClone from "./projects/twitterClone"
import trivia from "./projects/trivia"
import chess from "./projects/chess"
import snake from "./projects/snake"

function Projects({ setModalInfo }) {
  const projects = [instaClone, trivia, twitterClone, snake, chess]
  return (
    <section id="projects">
      <h2 className="sectionTitle">My Projects:</h2>
      <UnderLineStyle />
      {projects.map((project, i) => {
        return (
          <IndividualProject
            key={project.id}
            project={project}
            setModalInfo={setModalInfo}
          />
        )
      })}
    </section>
  )
}

export default Projects
