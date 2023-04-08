import { ReactDOM } from "react-dom"

import "./styles.css"

export const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div>
      <div className="modal">{children}</div>
      <div
        onClick={onClose}
        className="backdrop"
      ></div>
    </div>,
    document.getElementById("modal-root")
  )
}