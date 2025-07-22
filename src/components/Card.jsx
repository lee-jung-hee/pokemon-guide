import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const Card = memo(({ pokemon }) => {
  const navigate = useNavigate();
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <section
      onClick={() => navigate(`/detail/${pokemon.id}`)}
      className="border-1 border-solid border-gray-400 rounded-xl text-center w-[150px] h-[150px] flex justify-center items-center flex-col p-1.5 ease-in-out hover:scale-110 duration-200 hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white"
    >
      {isImageLoading ? <div>Loading...</div> : null}
      <img
        onLoad={() => setIsImageLoading(false)}
        src={pokemon.front}
        alt={pokemon.name}
        className="w-[130px]"
        style={{ display: isImageLoading ? "none" : "block" }}
      />
      <div>
        <span className="mb-1.5 pr-2">{pokemon.name}</span>
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </section>
  );
});

export default Card;
