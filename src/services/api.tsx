import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './interceptor';

export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
});
