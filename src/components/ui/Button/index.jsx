import React from 'react';
import './styles.css';

export default function Button({
  classValue, children, onClick, type = 'button', ...props
}) {
  const handleClick = () => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };
  return (

    <button
      className={`button ${classValue}`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={handleClick}
      {...props}
    >
      {children}

    </button>
  );
}
