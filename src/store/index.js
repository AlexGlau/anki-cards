import { configureStore, createSlice } from '@reduxjs/toolkit';

const wordsSlice = createSlice({
  name: 'word',
  initialState: [],
  reducers: {
    addWord(state, action) {
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
