import { createContext, useState } from "react";
import data from "../../data.json";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const values = {
    movies: selectedGenre
      ? data.movies.filter((movie) => movie.genre.includes(selectedGenre))
      : data.movies,
    selectedGenre,
    setSelectedGenre,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
