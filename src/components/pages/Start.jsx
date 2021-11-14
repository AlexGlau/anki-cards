import React from 'react';

import Button from '../controls/Button';

import './Start.scss';

const Start = () => {
  return (
    <div className="start container">
      <div className="row">
        <div className="lists col">
          <Button className="list-button btn btn-light">List of words</Button>
          <Button className="list-button btn btn-light">List of words</Button>
          <Button className="list-button btn btn-light">List of words</Button>
          <Button className="list-button btn btn-light">List of words</Button>
          <Button className="list-button btn btn-light">List of words</Button>
          <Button className="list-button btn btn-light">List of words</Button>
        </div>
      </div>
    </div>
  );
};

export default Start;
