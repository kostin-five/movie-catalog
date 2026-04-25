import axios from "axios";

export default class MovieService {
  static async getMovies(page) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=ru-RU&page=${page}`
    );
    return response.data.results;
  }

  static async getMovie(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=ru-RU`
    );
    return response.data;
  }
}
