import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemon } from "../features/pokemon/pokemonSelector";
import FavoriteButton from "../components/FavoriteButton";
import FilpCard from "../components/FilpCard";

function Detail() {
  const { id } = useParams();
  const pokemon = useSelector(selectPokemon(Number(id)));
  return (
    <div className="flex flex-col justify-center items-center border-1 border-gray-300 rounded-xl p-3 w-[300px]">
      <div>
        <span className="text-3xl">{pokemon.name}</span>
        <FavoriteButton pokemonId={Number(id)} />
      </div>
      <div className="whitespace-pre-wrap text-center mt-2">
        {pokemon.description}
      </div>
      <FilpCard front={pokemon.front} back={pokemon.back} />
    </div>
  );
}

export default Detail;
