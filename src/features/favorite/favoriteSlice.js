import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload.id);
    },
    removeFromFavorite(state, action) {
      const index = state.indexOf(action.payload.id);
      if (index !== -1) state.splice(index, 1);
    },
  },
});

export default favoriteSlice.reducer;
