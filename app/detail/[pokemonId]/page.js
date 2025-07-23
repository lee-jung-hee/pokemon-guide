"use client";

import { useSelector } from "react-redux";
import { selectPokemon } from "../../../features/pokemon/pokemonSelector";
import FavoriteButton from "../../../components/FavoriteButton";
import FlipCard from "../../../components/FlipCard";
export default function DetailPage({ params }) {
  const { pokemonId } = params;
  const pokemon = useSelector(selectPokemon(Number(pokemonId)));

  if (!pokemon) {
    return <div>Loading or Pokemon not found...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center border-1 border-gray-300 rounded-xl p-3 w-[300px]">
      <div>
        <span className="text-3xl">{pokemon.name}</span>
        <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className="whitespace-pre-wrap text-center mt-2">
        {pokemon.description}
      </div>
      <FilpCard front={pokemon.front} back={pokemon.back} />
    </div>
  );
}
