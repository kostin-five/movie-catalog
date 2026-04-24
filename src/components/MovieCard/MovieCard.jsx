// import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.image}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.rating}>{movie.vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
