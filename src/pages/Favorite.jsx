import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "../features/favorite/favoriteSelector";
import Card from "../components/Card";

function Favorite() {
  const pokemonSelector = useSelector(selectFavoritePokemons);
  return (
    <>
      {pokemonSelector.map((mon) => (
        <Card key={mon.id} pokemon={mon} />
      ))}
    </>
  );
}

export default Favorite;
