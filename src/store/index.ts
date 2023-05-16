import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStore } from '../models/models';

const initialState: IStore[][] = [[]];

const wordsSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    addWord(state, action: PayloadAction<IStore>) {
      let lastTrain = state[state.length - 1];
      
      if (lastTrain.length > 9) {
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
