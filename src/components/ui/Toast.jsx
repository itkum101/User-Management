// Toast.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Toast.css';

const Toast = ({ message, type = 'info', onClose }) => {
  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button className="toast-close" onClick={onClose}>&times;</button>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  onClose: PropTypes.func.isRequired,
};

export default Toast;