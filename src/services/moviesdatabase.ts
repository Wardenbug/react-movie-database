import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface TitlesRequest {
  page: number;
  list?: string;
  genre?: string;
}

export const moviesDatabaseApi = createApi({
  reducerPath: "moviesDatabaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://moviesdatabase.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_MOVIES_DATABASE_RAPID_API_KEY,
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    getActors: builder.query({
      query: () => "actors",
    }),
    getTiltes: builder.query({
      query: (request: TitlesRequest) => `titles?page=${request.page}`,
    }),
    getTitle: builder.query({
      query: (id: string) => `titles/${id}`,
    }),
    getGenres: builder.query({
      query: () => "titles/utils/genres",
    }),
  }),
});

export const {
  useGetActorsQuery,
  useGetTiltesQuery,
  useGetTitleQuery,
  useGetGenresQuery,
} = moviesDatabaseApi;
