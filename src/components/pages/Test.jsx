import React from 'react';

import Button from '../controls/Button';

import './Test.scss';

const Test = () => {
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
            <Button className="btn btn-light">Option 1</Button>
            <Button className="btn btn-light">Option 1</Button>
            <Button className="btn btn-light">Option 1</Button>
            <Button className="btn btn-light">Option 1</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
