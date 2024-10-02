import React from "react"

function Modal({ children, showModal }) {
  return (
    showModal && (
      <div className="modalBackDrop">
        <div className="modal">{children}</div>
      </div>
    )
  )
}

export default Modal
