// import React from "react";
import { useEffect, useRef, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import MovieService from "../API/MovieService";
import { useFetching } from "../hooks/useFetching";

const Home = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [fetchMovies, isMovieLoading, movieError] = useFetching(
    async (currentPage) => {
      const newMovies = await MovieService.getMovies(currentPage);
      return setMovies((prevMovies) => [...prevMovies, ...newMovies]);
    }
  );

  const lastElement = useRef();

  useEffect(() => {
    if (isMovieLoading) return;

    const observerCallback = (entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    const observer = new IntersectionObserver(observerCallback);

    if (lastElement.current) {
      observer.observe(lastElement.current);
    }

    return () => observer.disconnect();
  }, [isMovieLoading]);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  if (movieError) {
    return (
      <h1 style={{ color: "red", padding: "50px" }}>
        Ошибка сети: {movieError}
      </h1>
    );
  }

  return (
    <>
      <MovieList movies={filteredMovies} />
      {isMovieLoading && <h1>Идет загрузка...</h1>}
      <div ref={lastElement}></div>
    </>
  );
};

export default Home;
