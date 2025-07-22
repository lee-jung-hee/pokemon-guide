import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    ids: [],
  },
  reducers: {
    addToFavorite(state, action) {
      const { id } = action.payload;
      if (!state.ids.includes(id)) {
        state.ids.push(id);
      }
    },
    removeFromFavorite(state, action) {
      const { id } = action.payload;
      state.ids = state.ids.filter((existingId) => existingId !== id);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
