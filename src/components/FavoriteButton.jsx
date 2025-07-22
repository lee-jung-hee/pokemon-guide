import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../features/favorite/favoriteSlice";

function FavoriteButton({ pokemonId }) {
  const favoriteIds = useSelector((state) => state.favorite.ids);
  const isFavorite = favoriteIds.includes(pokemonId);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(
            isFavorite
              ? removeFromFavorite({ id: pokemonId })
              : addToFavorite({ id: pokemonId })
          );
        }}
      >
        {isFavorite ? "❤️" : "🩶"}
      </button>
    </>
  );
}

export default FavoriteButton;
