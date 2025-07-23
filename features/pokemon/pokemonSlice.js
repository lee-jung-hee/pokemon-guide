
import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./pokemonThunk";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMultiplePokemonById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default pokemonSlice.reducer;
