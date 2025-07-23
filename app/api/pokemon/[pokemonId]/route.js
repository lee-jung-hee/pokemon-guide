
import { NextResponse } from 'next/server';

async function fetchPokemonDetails(id) {
  const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

  if (!pokemonRes.ok || !speciesRes.ok) {
    throw new Error(`Failed to fetch data for pokemon ${id}`);
  }

  const pokemonData = await pokemonRes.json();
  const speciesData = await speciesRes.json();

  const descriptionEntry = speciesData.flavor_text_entries.find(
    (entry) => entry.language.name === 'ko'
  ) || speciesData.flavor_text_entries.find(
    (entry) => entry.language.name === 'en'
  );

  const description = descriptionEntry ? descriptionEntry.flavor_text.replace(/\n/g, ' ') : '설명 없음';

  return {
    id: pokemonData.id,
    name: speciesData.names.find(name => name.language.name === 'ko')?.name || pokemonData.name,
    description: description,
    front: pokemonData.sprites.front_default,
    back: pokemonData.sprites.back_default,
  };
}

export async function GET(request, { params }) {
  const { pokemonId } = params;
  try {
    const pokemon = await fetchPokemonDetails(pokemonId);
    return NextResponse.json(pokemon);
  } catch (error) {
    console.error(`Error fetching Pokémon ${pokemonId} data:`, error);
    return NextResponse.json({ error: 'Pokemon not found' }, { status: 404 });
  }
}
