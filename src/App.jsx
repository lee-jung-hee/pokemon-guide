import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./features/pokemon/pokemonThunk";

function App() {
  const pokemon = useSelector((state) => state.pokemon.data);
  const loading = useSelector((state) => state.pokemon.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>포켓몬 도감</h1>
      <div className="pokemon-grid">
        {pokemon.map((p) => (
          <div key={p.id} className="pokemon-card">
            <img src={p.front} alt={p.name} />
            <h2>{p.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
