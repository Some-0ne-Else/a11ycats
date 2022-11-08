import React from 'react';
import './styles.css';

export default function Status({ appereanceCondition, children }) {
  return (
    <div className={`visually-hidden status ${appereanceCondition && 'status_visible'}  `} aria-hidden={!appereanceCondition} role="status" aria-live="polite">{children}</div>
  );
}
