import React from 'react';
import './syles.css';

export default function SkipLink() {
  return (
    <a className="skiplink" href="#main">
      <p className="skiplink__text">
        К основному контенту
      </p>
    </a>
  );
}
