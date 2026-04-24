// import React from "react";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import MovieService from "../API/MovieService";

const Home = ({ query }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await MovieService.getMovies();
      setMovies(response);
    };
    fetchData();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return <MovieList movies={filteredMovies} />;
};

export default Home;
