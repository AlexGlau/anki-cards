import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStore } from '../models/models';

const initialState: IStore[][] = [[]];

const wordsSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    addWord(state, action: PayloadAction<IStore>) {
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

const store = configureStore({
  reducer: {
    words: wordsSlice.reducer,
  },
});

store.getState();

export { store };
export const { addWord } = wordsSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
