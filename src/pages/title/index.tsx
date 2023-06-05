import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetTitleQuery } from "../../services/moviesdatabase";
import { Typography, Badge } from "../../components";

const TitlePage: FC = () => {
  const { id } = useParams();
  const { data } = useGetTitleQuery({ id, info: "custom_info" });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white w-full">
      <div className="h-80 w-full">
        <img
          className="object-cover h-80 w-full"
          src={data?.results.primaryImage?.url}
        />
      </div>
      <Typography tag="h1">{data?.results.titleText.text}</Typography>
      <Typography tag="p">{data?.results.plot.plotText.plainText}</Typography>
      {data?.results.directors.map((director) => {
        return (
          <Typography tag="p">
            <span className="font-bold">{director.category.text}</span>:{" "}
            {director.credits.map((el) => el.name.nameText.text)}
          </Typography>
        );
      })}
      <Typography tag="span">
        IMDb rating: {data?.results.ratingsSummary.aggregateRating} / 10
      </Typography>

      {data?.results.trailer && (
        <div className="mt-4">
          <Typography tag="h4" className="mt-4">
            Trailer
          </Typography>
          <iframe
            className="w-full aspect-video mt-2"
            src={data.results.trailer}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <Typography tag="h4" className="mt-4">
        Genres:{" "}
      </Typography>
      <div className="flex flex-1">
        {data?.results.genres.genres.map((el) => (
          <div key={el.id}>
            <Badge linkTo="/movies" className="mr-1">
              {el.text}
            </Badge>
          </div>
        ))}
      </div>
      <Typography tag="h4" className="mt-4">
        Actors:{" "}
      </Typography>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data?.results.principalCast[0].credits.map((credit) => {
          return (
            <div className="aspect-square">
              <Typography tag="p" className="text-center font-bold">
                {credit.name.nameText.text}
              </Typography>
              <img
                src={credit.name.primaryImage.url}
                className="rounded-full object-cover aspect-square"
              />
            </div>
          );
        })}
      </div>

      <Typography tag="h5" className="mt-4">
        Keywords:{" "}
      </Typography>
      {data?.results.keywords.edges.map((edge, index) => {
        return (
          <Typography tag="span">
            <span className="text-blue-400">#{edge.node.text}</span>
            {index < data?.results.keywords.edges.length - 1 && ", "}
          </Typography>
        );
      })}
    </div>
  );
};

export { TitlePage };
