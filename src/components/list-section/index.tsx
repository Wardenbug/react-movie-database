import { FC } from "react";
import { ListTypes } from "../../enums";
import { Typography, MovieCard } from "..";
import { useGetTiltesQuery } from "../../services/moviesdatabase";
import { Swiper, SwiperSlide } from "swiper/react";

interface ListSectionProps {
  heading: string;
  listType: ListTypes;
}

const ListSection: FC<ListSectionProps> = ({ heading, listType }) => {
  const { data } = useGetTiltesQuery({
    list: listType,
    page: 1,
    info: "custom_info",
  });
  return (
    <section>
      <Typography tag="h3" className="mb-4 mt-4">
        {heading}
      </Typography>
      <Swiper spaceBetween={50} slidesPerView={4}>
        {data?.results.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <MovieCard title={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export { ListSection };
export type { ListSectionProps };
