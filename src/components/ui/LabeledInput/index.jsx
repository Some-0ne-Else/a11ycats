import React from 'react';
import './styles.css';

export default function LabeledInput({
  children, placeholder, id, required = true,
  type = 'text',
}) {
  if (type === 'textarea') {
    return (
      <label className="labeled-input__label" htmlFor={id}>
        {children}
        <textarea className="labeled-input__input labeled-input__input_textarea" required={required} id={id} type={type} placeholder={placeholder} rows="4" cols="50" />
      </label>
    );
  }
  return (
    <label className="labeled-input__label" htmlFor={id}>
      {children}
      <input className="labeled-input__input" required={required} id={id} type={type} placeholder={placeholder} />
    </label>
  );
}
