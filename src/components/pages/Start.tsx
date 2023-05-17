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
          {wordsList.map((card: ICard[], index: number): JSX.Element => {
            // A first word in a training list is used as a training name
            const trainingName = card[0]?.word;

            return (
              <Button
                key={`${index}-${trainingName}`}
                className="list-button btn btn-light"
                onClick={ButtonHandler}
              >
                {trainingName}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Start;
