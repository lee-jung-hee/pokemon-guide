import { createSelector } from "@reduxjs/toolkit";

export const selectFavoritePokemons = createSelector(
  (state) => state.pokemon.data,
  (state) => state.favorite.ids,
  (pokemon, favorite) => {
    return pokemon.filter((m) => favorite.includes(m.id));
  }
);
