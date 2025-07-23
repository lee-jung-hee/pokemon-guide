"use client";

import React, { memo, useState } from "react";
import { useRouter } from "next/navigation";
import FavoriteButton from "./FavoriteButton";

const Card = memo(({ pokemon }) => {
  const router = useRouter();
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <section
      onClick={(e) => {
        if (e.target.dataset.favoriteButton !== undefined) {
          return;
        }
        router.push(`/detail/${pokemon.id}`);
      }}
      className="p-3 border-2 border-solid border-gray-400 rounded-xl text-center w-[150px] h-[150px] flex justify-center items-center flex-col ease-in-out hover:scale-110 duration-200 hover:drop-shadow-[0_0_5px_rgba(0,0,0,0.2)] bg-white"
    >
      {isImageLoading ? <div>Loading...</div> : null}
      <img
        onLoad={() => setIsImageLoading(false)}
        src={pokemon.front}
        alt={pokemon.name}
        className="w-[130px]"
        style={{ display: isImageLoading ? "none" : "block" }}
      />
      <div className="mb-2">
        <span className="mb-1.5 pr-2">{pokemon.name}</span>
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </section>
  );
});

export default Card;
