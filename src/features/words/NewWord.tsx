import React, { useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../hooks';

import { addWord } from './wordsSlice';

import Input from '../../components/Input';
import Button from '../../components/Button';

function New() {
  const [ word, setWord ] = useState('');
  const [ translation, setTranslation ] = useState('');

  const dispatch = useAppDispatch();

  const addWordHandler = () => {
    dispatch(
      addWord({ word, translation })
    );

    setWord('');
    setTranslation('');
  };

  const setWordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const setTranslationHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTranslation(e.target.value);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <Input
            id="word"
            className={''}
            inputName="Word"
            onChange={setWordHandler}
            value={word}
          />
        </div>
        <div className="col-12">
          <Input
            id="translate"
            className={''}
            inputName="Translation"
            onChange={setTranslationHandler}
            value={translation}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <Button
            className="btn btn-primary"
            onClick={addWordHandler}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

export default New;
