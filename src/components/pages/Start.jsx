import React from 'react';

import Button from '../controls/Button';

import './Start.scss';

const Start = () => {
  return (
    <div className="start container">
      <div className="lists">
        <Button className="list-button btn btn-light">List of words</Button>
        <Button className="list-button btn btn-light">List of words</Button>
        <Button className="list-button btn btn-light">List of words</Button>
        <Button className="list-button btn btn-light">List of words</Button>
        <Button className="list-button btn btn-light">List of words</Button>
        <Button className="list-button btn btn-light">List of words</Button>
      </div>
      <div className="buttons">
        <Button className="new-list-button btn btn-primary">New list</Button>
        <Button className="menu-button btn btn-primary">Menu</Button>
      </div>
    </div>
  );
};

export default Start;
