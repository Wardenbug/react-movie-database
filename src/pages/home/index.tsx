import { useGetTiltesQuery } from "../../services/moviesdatabase";
import { TopMovies, ListSection } from "../../components";
import { ListTypes } from "../../enums";

const HomePage = () => {
  const { data, isLoading, error } = useGetTiltesQuery({
    list: "top_boxoffice_last_weekend_10",
    page: 1,
    info: "custom_info",
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
      {data?.results && <TopMovies titles={data.results} />}
      <ListSection
        heading="Most Pop Movies"
        listType={ListTypes.MostPopMovies}
      />
      <ListSection
        heading="Most Pop Series"
        listType={ListTypes.MostPopSeries}
      />
      <ListSection
        heading="Top Rated Movies 250"
        listType={ListTypes.TopRated250}
      />
      <ListSection
        heading="Top Rated Series 250"
        listType={ListTypes.TopRatedSeries250}
      />
    </div>
  );
};

export { HomePage };
