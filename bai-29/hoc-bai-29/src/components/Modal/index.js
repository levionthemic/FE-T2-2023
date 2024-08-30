import { useState } from "react";
import "./Modal.scss";

function Modal() {
  const [showModal, setShowModal] = useState(true);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>

      {showModal && (
        <div className="modal">
          <div className="modal__body">
            <button className="modal__close" onClick={handleClose}>
              X
            </button>
            <div className="modal__content">Nội dung...</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
