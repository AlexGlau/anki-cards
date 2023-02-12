import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),
  onClick: PropTypes.func
};

export default Button;
