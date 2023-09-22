import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Prevent scrolling behind the modal
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="h-full">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal absolute h-screen">
        <div className="flex justify-between items-center text-orange-600">
          {" "}
          <div className=""></div>{" "}
          <button className="close-button font-bold p-2" onClick={onClose}>X</button>
        </div>

        {children}
      </div>
    </div>,
    document.body // Append the modal to the body of the HTML document
  );
};

export default Modal;
