// import React from "react";
import styles from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({movies}) => {

  return (
    <div className={styles.list}>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
