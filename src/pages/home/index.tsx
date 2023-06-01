import { useGetTiltesQuery } from "../../services/moviesdatabase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Badge, Button } from "../../components";
import "swiper/css/pagination";
import "swiper/css";

const HomePage = () => {
  const { data, isLoading, error } = useGetTiltesQuery({
    list: "top_boxoffice_last_weekend_10",
    page: 1,
    info: "custom_info",
  });

  const card = data?.results[1];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white max-h-96">
      {data?.results && (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          //   autoplay={{
          //     delay: 3000
          //   }}
          pagination={{ clickable: true }}
        >
          {data?.results.map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:pr-8 lg:pt-4">
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {el.titleText.text}
                    </h2>
                    <div className="mt-6 text-lg leading-8 text-gray-600">
                      {el.plot.plotText.plainText}
                    </div>
                    <div className="genres flex flex-1">
                      {el.genres.genres.map((el) => (
                        <div key={el.id}>
                          <Badge linkTo="/movies">{el.text}</Badge>
                        </div>
                      ))}
                    </div>

                    <Button type="primary" disabled>View More</Button>
                  </div>
                  <div>
                    <img
                      src={el.primaryImage?.url}
                      className="md:-ml-4 lg:-ml-0"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {/* {card && (
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {card.titleText.text}
            </h2>
            <div className="mt-6 text-lg leading-8 text-gray-600">
              {card.plot.plotText.plainText}
            </div>
            <div className="genres flex justify-between flex-1">
              {card.genres.genres.map((el) => (
                <div key={el.id}>{el.text}</div>
              ))}
            </div>
          </div>
          <div>
            <img
              src={card.primaryImage.url}
              className="shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      )} */}
      I am home page!
    </div>
  );
};

export { HomePage };
