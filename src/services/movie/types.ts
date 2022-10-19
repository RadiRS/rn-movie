export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres: MovieGenre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  status: string;
  budget: string;
  revenue: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  tagline: string;
}

interface MovieGenre {
  id: number;
  name: string;
}

export interface MovieParams {
  path?: string;
  page?: number;
}
