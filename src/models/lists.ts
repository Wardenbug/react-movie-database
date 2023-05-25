interface ListItem {
  title: string;
  slug: string;
}

const Lists: ListItem[] = [
  {
    title: "Top 250 Movies",
    slug: "top_rated_250",
  },
  {
    title: "Most Pop Movies",
    slug: "most_pop_movies",
  },
  {
    title: "Most Pop Series",
    slug: "most_pop_series",
  },
  {
    title: "Top Box Office 200",
    slug: "top_boxoffice_200",
  },
  {
    title: "Top Box Office Last Weekend",
    slug: "top_boxoffice_last_weekend_10",
  },
  {
    title: "top_rated_lowest_100",
    slug: "top_rated_lowest_100",
  },
  {
    title: "top_rated_series_250",
    slug: "top_rated_series_250",
  },
  {
    title: "Titles",
    slug: "titles",
  },
];

export type { ListItem };
export { Lists };
