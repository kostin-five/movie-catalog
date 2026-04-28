import axios from "axios";
import { IMovie, IMoviesResponse } from "../types/types";

export default class MovieService {
  static async getMovies(page: number, query: string): Promise<IMovie[]> {
    if (query) {
      const response = await axios.get<IMoviesResponse>(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=ru-RU&query=${query}&page=${page}`
      );

      return response.data.results;
    }

    const response = await axios.get<IMoviesResponse>(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=ru-RU&page=${page}`
    );
    return response.data.results;
  }

  static async getMovie(id: number): Promise<IMovie> {
    const response = await axios.get<IMovie>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=ru-RU`
    );
    return response.data;
  }
}
