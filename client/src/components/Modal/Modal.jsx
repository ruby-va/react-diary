import { useState } from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const { isOpen, children, onClose } = props;

  return (
    isOpen &&
    createPortal(
      <div className={styles.modal} onClick={onClose}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles.modalContent}
        >
          {children}
        </div>
      </div>,
      document.body
    )
  );
};
export default Modal;
