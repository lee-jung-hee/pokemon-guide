
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/pokemon');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.pokemonData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
