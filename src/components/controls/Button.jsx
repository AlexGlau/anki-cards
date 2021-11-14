import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children }) => {
  return (
    <button className={className}>{children}</button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ])
};

export default Button;
