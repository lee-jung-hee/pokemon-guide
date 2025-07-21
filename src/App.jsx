import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./features/pokemon/pokemonThunk";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

function App() {
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
      <h1 className="text-center text-5xl">포켓몬 도감</h1>
      <nav className="flex gap-2.5 justify-center pt-5">
        <Link to={"/"}>메인</Link>
        <Link to={"/detail"}>상세정보</Link>
        <Link to={"/search"}>검색</Link>
        <Link to={"/favorite"}>즐겨찾기</Link>
      </nav>
      <main className="flex flex-wrap justify-center gap-6 pt-[20px]">
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/detail/:id"} element={<Detail />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/favorite"} element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
