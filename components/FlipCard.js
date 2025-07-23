
'use client';

import { useState } from 'react';
import FavoriteButton from './FavoriteButton';

export default function FlipCard({ pokemon }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-48 h-64 perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden bg-white border border-gray-300 rounded-lg shadow-md flex flex-col items-center justify-center p-4">
          <img src={pokemon.front} alt={pokemon.name} className="w-32 h-32 mb-2" />
          <h2 className="text-xl font-bold text-center">{pokemon.name}</h2>
          <div className="absolute top-2 right-2">
            <FavoriteButton pokemonId={pokemon.id} />
          </div>
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden bg-white border border-gray-300 rounded-lg shadow-md flex flex-col items-center justify-center p-4 rotate-y-180">
          <img src={pokemon.back} alt={pokemon.name} className="w-32 h-32 mb-2" />
          <p className="text-sm text-center whitespace-pre-line">{pokemon.description}</p>
          <div className="absolute top-2 right-2">
            <FavoriteButton pokemonId={pokemon.id} />
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click from triggering
          handleFlip();
        }}
        className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 w-full"
      >
        뒤집기
      </button>
    </div>
  );
}
