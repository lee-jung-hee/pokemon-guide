import { getRegExp } from "korean-regexp";
import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { pokemonKorRegSelector } from "../features/pokemon/pokemonSelector";
import Card from "../components/Card";

function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  const reg = getRegExp(param);

  const pokemon = useSelector(pokemonKorRegSelector(reg));
  console.log(pokemon);

  return (
    <>
      {pokemon.map((mon) => (
        <Card key={mon.id} pokemon={mon} />
      ))}
    </>
  );
}

export default Search;
