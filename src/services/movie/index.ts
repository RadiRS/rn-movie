import { api } from '@/services/api';
import { getMovie, getMovies } from './movie.service';

const movieApi = api.injectEndpoints({
  endpoints: builder => ({
    getMovies: getMovies(builder),
    getMovie: getMovie(builder),
  }),

  overrideExisting: true,
});

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi;

export * from './types';
