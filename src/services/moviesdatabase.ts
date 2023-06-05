import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TitlesRequest,
  TitlesResponse,
  TitleRequest,
  TitleResponse,
} from "../types";

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
    getTiltes: builder.query<TitlesResponse>({
      query: (request: TitlesRequest) => {
        const { page, list, genre, info } = request;
        return {
          url: "titles",
          params: { page, list, genre, info },
        };
      },
    }),
    getTitle: builder.query<TitleResponse>({
      query: (request: TitleRequest) => {
        const { id, info } = request;
        return {
          url: `titles/${id}/`,
          params: { info },
        };
      },
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
