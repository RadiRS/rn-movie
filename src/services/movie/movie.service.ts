import { API_KEY } from '@env';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

import { MovieResponse, MovieParams } from './types';

const initParams: MovieParams = {
  page: 1,
  path: 'popular',
};

export const getMovies = (builder: EndpointBuilder<any, any, any>) =>
  builder.query<MovieResponse, void | MovieParams>({
    query: (params = initParams) =>
      `/movie/${params?.path}?api_key=${API_KEY}&&page=${params?.page}`,
  });
