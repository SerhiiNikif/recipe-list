import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = process.env.REACT_APP_STAGE === 'development' ? process.env.REACT_APP_API_URL : process.env.REACT_APP_VERSEL_URL;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: builder => ({
    getRecipes: builder.query({
      query: () => '/'
    }),
  })
})

export const { useGetRecipesQuery } = api