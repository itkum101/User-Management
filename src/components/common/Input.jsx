// Input.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ type = 'text', placeholder, value, onChange, label, error }) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className={`input-field ${error ? 'input-error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default Input;