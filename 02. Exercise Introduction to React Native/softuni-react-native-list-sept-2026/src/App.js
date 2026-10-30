import { Text, View, StatusBar } from "react-native";

import { colors } from "./theme";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { useState } from "react";
import { MovieProvider } from "./contexts/MovieContext";

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectMovieHandler = (movie) => {
    setSelectedMovie(movie);
  };

  const backHandler = () => {
    setSelectedMovie(null);
  };

  return (
    <MovieProvider>
      <View
        style={{
          backgroundColor: colors.background,
          flex: 1,
        }}
      >
        <StatusBar barStyle="light-content" />
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onBack={backHandler} />
        ) : (
          <MovieList onSelect={selectMovieHandler} />
        )}
      </View>
    </MovieProvider>
  );
}
