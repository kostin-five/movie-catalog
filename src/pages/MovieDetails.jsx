import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieService from "../API/MovieService";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await MovieService.getMovie(params.id);
      setMovie(response);
    };
    fetchData();
  }, []);

  return (
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
