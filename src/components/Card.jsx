import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ pokemon }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/detail/${pokemon.id}`)}
      className="border-1 border-solid border-gray-400 rounded-xl text-center w-[150px] h-[150px] flex justify-center items-center flex-col p-1.5"
    >
      <img src={pokemon.front} alt={pokemon.name} className="w-[130px]" />
      <h2 className="mb-1.5">{pokemon.name}</h2>
    </div>
  );
}

export default Card;
