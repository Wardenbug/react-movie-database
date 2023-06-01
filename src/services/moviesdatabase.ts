import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type infoType =
  | "base_info"
  | "mini_info"
  | "image"
  | "creators_directors_writers"
  | "revenue_budget"
  | "extendedCast"
  | "rating"
  | "awards" | 'custom_info';
interface TitlesRequest {
  page: number;
  list?: string;
  genre?: string;
  info?: infoType;
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
      query: (request: TitlesRequest) => {
        const { page, list, genre, info } = request;
        return {
          url: "titles",
          params: { page, list, genre, info },
        };
      },
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
