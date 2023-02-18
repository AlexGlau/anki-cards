import React from 'react';

import Button from '../controls/Button';

import './Test.scss';

function Test() {
  // Draft function
  const ButtonHandler = (): void => {
    console.log('click');
  };

  return (
    <div className="test container">
      <div className="row">
        <div className="col">
          <div className="flash-card bg-light text-center">flash-card</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="options">
            <Button
              className="btn btn-light"
              onClick={ButtonHandler}
            >
              Option 1
            </Button>
            <Button
              className="btn btn-light"
              onClick={ButtonHandler}
            >
              Option 1
            </Button>
            <Button
              className="btn btn-light"
              onClick={ButtonHandler}
            >
              Option 1
            </Button>
            <Button
              className="btn btn-light"
              onClick={ButtonHandler}
            >
              Option 1
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
