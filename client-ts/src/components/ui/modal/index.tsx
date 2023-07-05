import { ReactElement, useState } from 'react';
import styles from './styles.module.scss';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
}
const Index = (props: Props) => {
  const { isOpen, children, onClose } = props;

  return (
    isOpen &&
    createPortal(
      <div className={styles.modal} onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
          {children}
        </div>
      </div>,
      document.body,
    )
  );
};
export default Index;
