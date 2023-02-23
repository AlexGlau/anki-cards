import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IStore {
  word: string;
  translation: string;
}

const initialState: IStore[] = [];

const wordsSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    addWord(state, action: PayloadAction<IStore>) {
      state.push(action.payload);
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
