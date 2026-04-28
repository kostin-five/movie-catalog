import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieService from "../API/MovieService";
import styles from "./MovieDetails.module.css";
import { useFetching } from "../hooks/useFetching";
import { IMovie } from "../types/types";

const MovieDetails = (): ReactNode | null => {
  const params = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [fetchMovie, isMovieLoading, movieError] = useFetching(
    async (): Promise<void> => {
      setMovie(await MovieService.getMovie(Number(params.id)));
    }
  );
  useEffect(() => {
    params.id && fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (movieError) {
    return (
      <h1 style={{ color: "red", padding: "50px" }}>
        Ошибка сети: {movieError}
      </h1>
    );
  }

  return isMovieLoading || !movie ? (
    <h1>Идет загрузка...</h1>
  ) : (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.overview}>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
