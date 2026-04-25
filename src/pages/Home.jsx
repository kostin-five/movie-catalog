// import React from "react";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import MovieService from "../API/MovieService";
import { useFetching } from "../hooks/useFetching";

const Home = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [fetchMovies, isMovieLoading, movieError] = useFetching(async () =>
    setMovies(await MovieService.getMovies())
  );
  useEffect(() => {
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  console.log("Состояние:", {
    isMovieLoading,
    movieError,
    moviesCount: movies.length,
  });
  
  if (movieError) {
    return (
      <h1 style={{ color: "red", padding: "50px" }}>
        Ошибка сети: {movieError}
      </h1>
    );
  }
  return isMovieLoading ? (
    <h1>Идет загрузка...</h1>
  ) : (
    <MovieList movies={filteredMovies} />
  );
};

export default Home;
