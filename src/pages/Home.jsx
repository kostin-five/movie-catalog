// import React from "react";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import axios from "axios";

const Home = ({ query }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=792d42b959dcf4279f988bd6b9e5cff6&language=ru-RU"
      );
      setMovies(response.data.results);
    };
    fetchData();
  }, []);

  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()));

  return <MovieList movies={filteredMovies} />;
};

export default Home;
