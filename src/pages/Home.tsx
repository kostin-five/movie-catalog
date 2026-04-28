// import React from "react";
import { ReactNode, useEffect, useRef, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import MovieService from "../API/MovieService";
import { useFetching } from "../hooks/useFetching";
import { ClipLoader } from "react-spinners";
import useObserver from "../hooks/useObserver";
import { IMovie } from "../types/types";
type queryType = { query: string };

const Home = ({ query }: queryType): ReactNode | null => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [prevQuery, setPrevQuery] = useState<string>(query);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [fetchMovies, isMovieLoading, movieError] = useFetching(
    async (currentPage, currentQuery): Promise<void> => {
      const newMovies = await MovieService.getMovies(currentPage, currentQuery);

      if (newMovies.length < 20) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }

      if (currentPage === 1) {
        setMovies(newMovies);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      }
    }
  );

  if (query !== prevQuery) {
    setPrevQuery(query);
    setPage(1);
    setMovies([]);
    setHasMore(true);
  }

  const lastElement = useRef<HTMLDivElement>(null);

  useObserver(lastElement, !isMovieLoading && hasMore, () =>
    setPage((prevPage) => prevPage + 1)
  );

  useEffect((): void => {
    fetchMovies(page, query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  if (movieError) {
    return (
      <h1 style={{ color: "red", padding: "50px" }}>
        Ошибка сети: {movieError}
      </h1>
    );
  }

  return (
    <>
      {!isMovieLoading && movies.length === 0 ? (
        <h1>Фильмы не найдены</h1>
      ) : (
        <>
          <MovieList movies={movies} />
          {isMovieLoading && <ClipLoader color="#36d7b7" size={50} />}
          <div ref={lastElement}></div>
        </>
      )}
    </>
  );
};

export default Home;
