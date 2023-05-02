import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../controls/Button';

import './Start.scss';

function Start() {
  // TODO: get rid of any type
  const wordsList = useSelector((state: any) => {
    return state.words;
  });

  // Handler draft
  const ButtonHandler = (): void => {
    console.log('click');
  };

  return (
    <div className="start container">
      <div className="row">
        <div className="lists col">
          {/* TODO: get rid of any type */}
          {wordsList.map((word: any, index: number) => {
            return (
              <Button
                key={`${index}-${word.word}`}
                className="list-button btn btn-light"
                onClick={ButtonHandler}
              >
                {word.word}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Start;
