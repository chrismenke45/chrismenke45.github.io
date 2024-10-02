import React, { useCallback, useState } from "react"
import Home from "./Home"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import ProjectNoticeModal from "./ProjectNoticeModal"

function App() {
  const [modalMessage, setModalMessage] = useState("")
  const [modalLink, setModalLink] = useState("")

  const closeModal = useCallback(() => {
    setModalMessage("")
    setModalLink("")
  }, [])

  const setModalInfo = useCallback((message, link) => {
    setModalMessage(message)
    setModalLink(link)
  }, [])

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
