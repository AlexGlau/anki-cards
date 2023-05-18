import React, { ChangeEvent } from 'react';

interface IInput {
  id: string;
  className?: string;
  inputName: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: IInput) {
  const{ id, className = '', inputName, value, onChange } = props;

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
}

export default Input;
