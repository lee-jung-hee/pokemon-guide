'use client';

import { useSelector } from 'react-redux';
import { selectPokemon } from '../../../features/pokemon/pokemonSelector';
import FavoriteButton from '../../../components/FavoriteButton';
import FlipCard from '../../../components/FlipCard';
import { useRouter } from 'next/navigation';

export default function DetailPage({ params }) {
  const router = useRouter();
  const { pokemonId } = params;
  const pokemon = useSelector(selectPokemon(Number(pokemonId)));

  if (!pokemon) {
    return <div>Loading or Pokemon not found...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">{pokemon.name}</h1>
      <div className="flex space-x-4 mb-4">
        <FlipCard pokemon={pokemon} />
      </div>
      <p className="text-lg text-center whitespace-pre-line">{pokemon.description}</p>
      <button
        onClick={() => router.back()}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        뒤로 가기
      </button>
    </div>
  );
}