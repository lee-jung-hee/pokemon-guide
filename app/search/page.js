
'use client';

import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { getRegExp } from "korean-regexp";
import { selectPokemonKorReg } from "../../features/pokemon/pokemonSelector";
import Link from 'next/link';
import Card from '../../components/Card';
import { Suspense } from 'react';

function SearchContent() {
  const searchParams = useSearchParams();
  const param = searchParams.get("pokemon");
  const reg = param ? getRegExp(param) : null;

  const pokemon = useSelector((state) =>
    reg ? selectPokemonKorReg(reg)(state) : []
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemon.length === 0 && param ? (
        <p className="text-center col-span-full">검색 결과가 없습니다.</p>
      ) : pokemon.length === 0 && !param ? (
        <p className="text-center col-span-full">검색어를 입력해주세요.</p>
      ) : (
        pokemon.map((mon) => (
          <Card key={mon.id} pokemon={mon} />
        ))
      )}
    </div>
  );
}

export default function Search() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
