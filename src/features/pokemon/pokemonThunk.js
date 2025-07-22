import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchPokeAPI from "../../api/pokeAPI";

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (maxPokemonId, { rejectWithValue }) => {
    try {
      const pokemonIds = Array.from({ length: maxPokemonId }, (_, i) => i + 1);
      const pokemonPromises = pokemonIds.map((id) => fetchPokeAPI(id));
      return await Promise.all(pokemonPromises);
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);
