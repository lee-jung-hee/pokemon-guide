import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchPokeAPI from "../../api/pokeAPI";

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (maxPokemonId, { rejectWithValue }) => {
    try {
      const pokemonIds = Array.from({ length: maxPokemonId }, (_, i) => i + 1);
      const pokemonPromises = pokemonIds.map((id) => fetchPokeAPI(id));
      return await Promise.all(pokemonPromises);
      // API 요청 실패 시 반환된 null 값을 필터링합니다.
    } catch (error) {
      // 에러 발생 시 rejectWithValue를 사용하여 에러 정보를 전달합니다.
      return rejectWithValue(error.toString());
    }
  }
);
