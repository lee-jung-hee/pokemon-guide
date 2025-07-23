
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import FlipCard from '../components/FlipCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMultiplePokemonById } from '../features/pokemon/pokemonThunk';

export default function Home() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemon.data);
  const loading = useSelector((state) => state.pokemon.loading);
  const error = useSelector((state) => state.pokemon.error);

  useEffect(() => {
    dispatch(fetchMultiplePokemonById());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemonList.map((pokemon) => (
        <Link key={pokemon.id} href={`/detail/${pokemon.id}`}>
          <FlipCard pokemon={pokemon} />
        </Link>
      ))}
    </div>
  );
}
