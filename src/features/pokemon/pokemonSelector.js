import { createSelector } from "@reduxjs/toolkit";

export const selectPokemon = (pokemonId) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.find((el) => el.id === pokemonId)
  );

export const selectPokemonKorReg = (reg) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.filter((el) => el.name.match(reg))
  );
