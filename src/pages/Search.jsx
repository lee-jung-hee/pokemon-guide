import { getRegExp } from "korean-regexp";
import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonKorReg } from "../features/pokemon/pokemonSelector";
import Card from "../components/Card";

function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  const reg = getRegExp(param);

  const pokemon = useSelector(selectPokemonKorReg(reg));

  return (
    <>
      {pokemon.map((mon) => (
        <Card key={mon.id} pokemon={mon} />
      ))}
    </>
  );
}

export default Search;
