import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { pokemonSelector } from "../features/pokemon/pokemonSelector";

function Detail() {
  const { id } = useParams();
  const pokemon = useSelector(pokemonSelector(Number(id)));
  console.log(pokemon);
  return (
    <div className="flex flex-col justify-center items-center border-1 border-gray-300 rounded-xl p-3 w-[300px]">
      <div className="text-3xl">{pokemon.name}</div>
      <div className="whitespace-pre-wrap text-center mt-2">
        {pokemon.description}
      </div>
      <img src={pokemon.front} alt={pokemon.name} />
      <img src={pokemon.back} alt={pokemon.name} />
    </div>
  );
}

export default Detail;
