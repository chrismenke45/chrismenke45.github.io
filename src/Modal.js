import React from "react"

function Modal({ children, showModal, hideModal }) {
  return (
    showModal && (
      <div className="modalBackDrop" onClick={hideModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  )
}

export default Modal
