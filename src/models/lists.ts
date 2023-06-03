import { ListItem } from "../types";
import { ListTypes } from "../enums";

const Lists: ListItem[] = [
  {
    title: "Top 250 Movies",
    slug: ListTypes.TopRated250,
  },
  {
    title: "Most Pop Movies",
    slug: ListTypes.MostPopMovies,
  },
  {
    title: "Most Pop Series",
    slug: ListTypes.MostPopSeries,
  },
  {
    title: "Top Box Office 200",
    slug: ListTypes.TopBoxOffice200,
  },
  {
    title: "Top Box Office Last Weekend",
    slug: ListTypes.TopBoxOfficeLastWeekend,
  },
  {
    title: "top_rated_lowest_100",
    slug: ListTypes.TopRatedLowest100,
  },
  {
    title: "top_rated_series_250",
    slug: ListTypes.TopRatedSeries250,
  },
  {
    title: "Titles",
    slug: ListTypes.Titles,
  },
];

export type { ListItem };
export { Lists };
