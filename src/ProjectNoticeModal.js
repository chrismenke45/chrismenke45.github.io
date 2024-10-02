import React, { useEffect } from "react"
import Modal from "./Modal"

function ProjectNoticeModal({ showModal, message, hideModal, link }) {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        hideModal()
      }
    }

    document.addEventListener("keydown", handleEscapeKey)
    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [hideModal])

  return (
    <Modal showModal={showModal}>
      <div className="modalCloseWrapper">
        <button
          onClick={hideModal}
          className="modalBtn"
          aria-label="close modal"
        >
          &#x2715;
        </button>
      </div>
      <div className="modalContent">
        <p>{message}</p>
        <a href={link} className="modalBtn">
          Go To Site
        </a>
      </div>
    </Modal>
  )
}

export default ProjectNoticeModal
