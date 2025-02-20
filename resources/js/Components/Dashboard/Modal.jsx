import React from "react";

const Modal = ({ isOpen, onClose, title, content, actionText, onAction }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal modal-open">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{content}</p>
          <div className="modal-action">
            <button
              className="btn btn-primary"
              onClick={onAction}
            >
              {actionText}
            </button>
            <button
              className="btn"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
    </div>
  );
};

export default Modal;
