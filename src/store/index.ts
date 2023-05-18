import { configureStore } from '@reduxjs/toolkit';

import wordsReducer from '../features/words/wordsSlice';

const store = configureStore({
  reducer: {
    words: wordsReducer,
  }
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
