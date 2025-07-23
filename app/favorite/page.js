
'use client';

import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "../../features/favorite/favoriteSelector";
import Link from 'next/link';
import FlipCard from '../../components/FlipCard';

export default function Favorite() {
  const favoritePokemons = useSelector(selectFavoritePokemons);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {favoritePokemons.length === 0 ? (
        <p className="text-center col-span-full">즐겨찾기한 포켓몬이 없습니다.</p>
      ) : (
        favoritePokemons.map((pokemon) => (
          <Link key={pokemon.id} href={`/detail/${pokemon.id}`}>
            <FlipCard pokemon={pokemon} />
          </Link>
        ))
      )}
    </div>
  );
}
