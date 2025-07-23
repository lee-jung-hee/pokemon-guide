"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "../features/pokemon/pokemonThunk";

function ReduxProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById());
  }, [dispatch]);

  return children;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ReduxProvider>
            <nav className="bg-gray-800 p-4">
              <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white font-bold text-xl">
                  Pokémon 도감
                </a>
                <div className="flex items-center space-x-4">
                  <a href="/favorite" className="text-white">
                    즐겨찾기
                  </a>
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    className="border-b border-gray-300 px-2 py-1 text-lg text-gray-800 rounded"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        window.location.href = `/search?pokemon=${e.target.value}`;
                      }
                    }}
                  />
                </div>
              </div>
            </nav>
            <main className="container mx-auto p-4">{children}</main>
          </ReduxProvider>
        </Provider>
      </body>
    </html>
  );
}
