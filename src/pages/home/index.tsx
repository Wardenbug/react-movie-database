import { useGetTiltesQuery } from "../../services/moviesdatabase";
import { TopMovies } from "../../components";
import "swiper/css/pagination";
import "swiper/css";

const HomePage = () => {
  const { data, isLoading, error } = useGetTiltesQuery({
    list: "top_boxoffice_last_weekend_10",
    page: 1,
    info: "custom_info",
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white max-h-96">
      {data?.results && <TopMovies titles={data.results} />}
    </div>
  );
};

export { HomePage };
