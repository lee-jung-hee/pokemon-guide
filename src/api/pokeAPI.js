async function fetchPokeAPI(id) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    );
    if (!response.ok) {
      throw new Error("네트워크 에러");
    }
    const data = await response.json();
    const pokemonData = {
      id: id,
      name: data.names.find((el) => el.language.name === "ko").name,
      description: data.flavor_text_entries.find(
        (el) => el.language.name === "ko"
      ).flavor_text,
      front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
    };

    return pokemonData;
  } catch (error) {
    console.log("포켓몬 불러오기 에러:" + error);
    return null;
  }
}

export default fetchPokeAPI;

// 포켓몬 이름 : pokemon-species/id
// names, language, name: 'ko'
// flavor_text_entries.language.name

// const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
// data.names.find((el) => el.language.name === "ko").name;  // 이름
// data.flavor_text_entries.find((el) => el.language.name === "ko").flavor_text; // 설명
// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" // 앞모습
// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" // 뒷모습
