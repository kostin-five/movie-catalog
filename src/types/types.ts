export interface IMovie {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
}

export interface IMoviesResponse {
  results: IMovie[];
}
