// import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.rating}>{movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
