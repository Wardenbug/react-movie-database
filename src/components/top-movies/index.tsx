import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Button, Typography, Badge, Image } from "..";
import { Title } from "../../types";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/routes";

import "swiper/css/pagination";
import "swiper/css";

interface TopMoviesProps {
  titles: Title[];
}

const TopMovies: FC<TopMoviesProps> = ({ titles }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      //   autoplay={{
      //     delay: 5000,
      //   }}
      pagination={{ clickable: true }}
    >
      {titles.map((el) => {
        return (
          <SwiperSlide key={el.id}>
            <div className="mx-auto grid max-h-96 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <Link to={`${RoutePaths.Title}/${el.id}`}>
                  <Typography tag="h2" className="mt-2">
                    {el.titleText.text}
                  </Typography>
                </Link>
                <Typography tag="span">
                  IMDb rating: {el.ratingsSummary.aggregateRating} / 10
                </Typography>

                <Typography tag="p" className="mt-6 mb-2">
                  {el.plot.plotText.plainText}
                </Typography>
                <div className="genres flex flex-1">
                  {el.genres.genres.map((el) => (
                    <div key={el.id}>
                      <Badge linkTo="/movies" className="mr-1">
                        {el.text}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end mt-4">
                  <Link to={`${RoutePaths.Title}/${el.id}`}>
                    <Button type="outline">View More</Button>
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src={el.primaryImage?.url || ""}
                  className="md:-ml-4 lg:-ml-0"
                  alt={el.primaryImage?.caption.plainText || el.titleText.text}
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export { TopMovies };
