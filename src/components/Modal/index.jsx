import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';

import ModalOverlay from '../ModalOverlay';

import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ onClose, children }) {
  const buttonRef = useRef(null);
  const handleClose = React.useCallback(
    (e) => {
      if (e.code !== 'Escape' && e.type === 'keydown') {
        return;
      }
      onClose();
    },
    [onClose],
  );
  useEffect(() => {
    document.addEventListener('keydown', handleClose);
    return () => document.removeEventListener('keydown', handleClose);
  }, [handleClose]);

  useEffect(() => {
    if (buttonRef && buttonRef?.current) {
      buttonRef.current.focus();
    }
  }, [children]);

  return ReactDOM.createPortal(
    <>
      <FocusTrap>
        <div className={styles.modal}>
          <div className={`${styles.modal__container}`}>
            <button
              ref={buttonRef}
              type="button"
              onClick={onClose}
              className={`${styles.modal__button}`}
              aria-label="Закрыть модальное окно"
            >
              Х
            </button>
            {children}
          </div>
        </div>
      </FocusTrap>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot,
  );
}
