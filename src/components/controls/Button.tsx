import React from 'react';

interface IButton {
  className: string;
  children: any;
  onClick: () => void;
}

function Button(props: IButton) {
  const { className, onClick, children } = props;

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
