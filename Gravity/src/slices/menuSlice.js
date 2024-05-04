import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
  searchResults: [],
  index: 0,
  user: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    updateGames(state, action) {
      state.games = action.payload;
    },
    increaseIndex(state, action) {
      state.index =
        state.index === state.games.length - 1 ? 0 : state.index + 1;
    },
    decreaseIndex(state, action) {
      state.index =
        state.index === 0 ? state.games.length - 1 : state.index - 1;
    },
    updateSearchResults(state, action) {
      state.searchResults = action.payload;
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default menuSlice.reducer;
export const {
  updateGames,
  increaseIndex,
  decreaseIndex,
  updateSearchResults,
  updateUser,
} = menuSlice.actions;
