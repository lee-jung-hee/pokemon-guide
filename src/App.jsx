import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./features/pokemon/pokemonThunk";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

function App() {
  const loading = useSelector((state) => state.pokemon.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="text-center text-5xl font-extrabold mt-5">포켓몬 도감</h1>
      <nav className="flex gap-6 justify-center pt-5 text-2xl font-bold">
        <Link to={"/"}>메인</Link>
        <Link to={"/favorite"}>즐겨찾기</Link>
        <input
          onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
          type="text"
          className="border-b border-gray-300 px-2 text-lg"
          placeholder="검색어를 입력하세요"
        />
      </nav>
      <main className="flex flex-wrap justify-center gap-6 pt-[20px]">
        <Suspense fallback={<>loading</>}>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/detail/:id"} element={<Detail />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/favorite"} element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
