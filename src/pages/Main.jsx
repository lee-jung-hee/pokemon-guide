import { useSelector } from "react-redux";
import Card from "../components/Card";

function Main() {
  const pokemon = useSelector((state) => state.pokemon.data);
  return (
    <>
      {pokemon.map((mon) => (
        <Card key={mon.id} pokemon={mon} />
      ))}
    </>
  );
}

export default Main;
