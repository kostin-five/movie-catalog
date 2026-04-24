import React from "react";
import styles from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const mockMovies = [
    { id: 1, title: "Матрица", vote_average: 8.7, poster_path: null },
    { id: 2, title: "Начало", vote_average: 8.8, poster_path: null },
    { id: 3, title: "Интерстеллар", vote_average: 8.6, poster_path: null },
  ];

  return (
    <div className={styles.list}>
      {mockMovies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
