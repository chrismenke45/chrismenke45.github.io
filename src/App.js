import React, { useState } from "react"
import Home from "./Home"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import ProjectNoticeModal from "./ProjectNoticeModal"

function App() {
  const [modalMessage, setModalMessage] = useState("")
  const [modalLink, setModalLink] = useState("")

  const closeModal = () => {
    setModalMessage("")
    setModalLink("")
  }

  const setModalInfo = (message, link) => {
    setModalMessage(message)
    console.log(message)
    setModalLink(link)
    console.log(link)
  }

  return (
    <div id="app">
      <Home />
      <main>
        <About />
        <Projects setModalInfo={setModalInfo} />
      </main>

      <Contact />
      <ProjectNoticeModal
        showModal={!!modalMessage}
        message={modalMessage}
        hideModal={closeModal}
        link={modalLink}
      />
    </div>
  )
}

export default App
