"use client";

import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "../../features/favorite/favoriteSelector";
import Link from "next/link";
import FlipCard from "../../components/FlipCard";
import Card from "../../components/Card";

export default function Favorite() {
  const favoritePokemons = useSelector(selectFavoritePokemons);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {favoritePokemons.length === 0 ? (
        <p className="text-center col-span-full">
          즐겨찾기한 포켓몬이 없습니다.
        </p>
      ) : (
        favoritePokemons.map((mon) => (
          <Link key={mon.id} href={`/detail/${mon.id}`}>
            <Card pokemon={mon} />
          </Link>
        ))
      )}
    </div>
  );
}
