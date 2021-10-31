import React from 'react';


import Button from '../controls/Button';

import './Start.scss';

const Start = () => {
  return (
    <div className="start">
      <div className="ui container lists one column grid">
        <div className="one column row">
          <Button>List of words</Button>
          <Button>List of words</Button>
          <Button>List of words</Button>
          <Button>List of words</Button>
          <Button>List of words</Button>
        </div>
      </div>
      <div className="ui container buttons">
        buttons
      </div>
    </div>
  );
};

export default Start;
