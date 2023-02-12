import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, className, inputName, value, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{inputName}</label>
      <input
        id={id}
        type="text"
        className={`form-control ${className}`}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  inputName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default Input;
