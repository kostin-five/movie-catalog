// import React from "react";
import styles from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { IMovie } from "../../types/types";
import { ReactNode } from "react";

interface IMovies {
  movies: IMovie[];
}

const MovieList = ({ movies }: IMovies): ReactNode | null => {
  return (
    <div className={styles.list}>
      {movies.map(
        (movie: IMovie): ReactNode => (
          <MovieCard movie={movie} key={movie.id} />
        )
      )}
    </div>
  );
};

export default MovieList;
