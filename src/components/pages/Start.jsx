import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../controls/Button';

import './Start.scss';

const Start = () => {
  const wordsList = useSelector((state) => {
    return state.words;
  });

  return (
    <div className="start container">
      <div className="row">
        <div className="lists col">
          {wordsList.map((word, index) => {
            return (
              <Button
                key={`${index}-${word.word}`}
                className="list-button btn btn-light"
              >
                {word.word}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Start;
