import axios from "axios";

export default class MovieService {
  static async getMovies(page) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=792d42b959dcf4279f988bd6b9e5cff6&language=ru-RU&page=${page}`
    );
    return response.data.results;
  }

  static async getMovie(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=792d42b959dcf4279f988bd6b9e5cff6&language=ru-RU`
    );
    return response.data;
  }
}
