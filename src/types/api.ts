import { Title } from "./title";

export type InfoType =
  | "base_info"
  | "mini_info"
  | "image"
  | "creators_directors_writers"
  | "revenue_budget"
  | "extendedCast"
  | "rating"
  | "awards"
  | "custom_info";

export interface TitlesRequest {
  page: number;
  list?: string;
  genre?: string;
  info?: InfoType;
}

export interface TitlesResponse {
  entries: number;
  next: string;
  page: string;
  results: Title[];
}
