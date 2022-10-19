import { api } from '@/services/api';
import { getMovies } from './movie.service';

const movieApi = api.injectEndpoints({
  endpoints: builder => ({
    getMovies: getMovies(builder),
  }),

  overrideExisting: true,
});

export const { useGetMoviesQuery } = movieApi;

export * from './types';
