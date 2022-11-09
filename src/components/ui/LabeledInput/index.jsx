import React from 'react';
import './styles.css';

export default function LabeledInput({
  children, placeholder, id, isError, errorText, name, state, setState, inputMode = 'text', required = false,
  type = 'text',
}) {
  const handleChange = (event) => {
    const { target: { value } } = event;
    setState({ ...state, [name]: value });
  };

  if (type === 'textarea') {
    console.log('name', name);
    return (
      <>
        <span className="labeled-input__error" id="text-input-error">{errorText}</span>
        <label className="labeled-input__label" htmlFor={id}>
          {children}
          <textarea
            className="labeled-input__input labeled-input__input_textarea"
            onChange={handleChange}
            name={name}
            required={required}
            id={id}
            type={type}
            placeholder={placeholder}
            rows="4"
            cols="50"
          />
        </label>
      </>
    );
  }
  return (
    <>
      <span className="labeled-input__error" id="text-input-error">{errorText}</span>
      <label className="labeled-input__label" htmlFor={id}>
        {children}
        <input
          className="labeled-input__input"
          aria-describedby="text-input-error"
          required={required}
          id={id}
          type={type}
          inputMode={inputMode}
          placeholder={placeholder}
          aria-invalid={isError}
          onChange={handleChange}
          name={name}
        />
      </label>
    </>
  );
}
