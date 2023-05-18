import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICard } from '../../models/models';

const initialState: ICard[][] = [[]];

const wordsSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    addWord(state, action: PayloadAction<ICard>) {
      const WORDS_IN_TRAINING = 9;

      let lastTrain = state[state.length - 1];

      if (lastTrain.length > WORDS_IN_TRAINING) {
        state.push([]);
        lastTrain = state[state.length - 1];
      }

      lastTrain.push(action.payload);
    },
  },
});

export default wordsSlice.reducer;

export const { addWord } = wordsSlice.actions;
