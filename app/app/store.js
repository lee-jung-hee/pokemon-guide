
import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../../features/pokemon/pokemonSlice";
import favoriteReducer from "../../features/favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    favorite: favoriteReducer,
  },
});
