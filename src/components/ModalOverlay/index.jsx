import React from 'react';
import styles from './ModalOverlay.module.css';

function ModalOverlay({ onClose }) {
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return <div onClick={onClose} role="button" className={styles.overlay} tabIndex={-1} aria-label="Закрыть" />;
}

export default ModalOverlay;
