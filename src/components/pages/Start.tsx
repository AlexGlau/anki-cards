import { useSelector } from 'react-redux';

import Button from '../controls/Button';

import { ICard } from '../../models/models';
import { RootState } from '../../store';

import './Start.scss';

function Start() {
  const wordsList = useSelector((state: RootState): ICard[][] => (
    state.words
  ));

  // Handler draft
  const ButtonHandler = (): void => {};

  return (
    <div className="start container">
      <div className="row">
        <div className="lists col">
          {(function () {
            if (wordsList.length === 0) {
              return null;
            }
          })}
          {wordsList.map((word: ICard[], index: number): JSX.Element => (
            <Button
              key={`${index}-${word[0]?.word}`}
              className="list-button btn btn-light"
              onClick={ButtonHandler}
            >
              {word[0]?.word}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Start;
