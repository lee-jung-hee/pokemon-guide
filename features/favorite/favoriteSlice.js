import { createSlice } from "@reduxjs/toolkit";

const loadFavoriteIds = () => {
  if (typeof window !== 'undefined') {
    const storedIds = localStorage.getItem('favoritePokemonIds');
    return storedIds ? JSON.parse(storedIds) : [];
  }
  return [];
};

const saveFavoriteIds = (ids) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('favoritePokemonIds', JSON.stringify(ids));
  }
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    ids: loadFavoriteIds(),
  },
  reducers: {
    addToFavorite(state, action) {
      const { id } = action.payload;
      if (!state.ids.includes(id)) {
        state.ids.push(id);
        saveFavoriteIds(state.ids);
      }
    },
    removeFromFavorite(state, action) {
      const { id } = action.payload;
      state.ids = state.ids.filter((existingId) => existingId !== id);
      saveFavoriteIds(state.ids);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;