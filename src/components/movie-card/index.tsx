import { FC } from "react";
import { Title } from "../../types";
import { Image, Typography } from "..";
import { RoutePaths } from "../../routes/routes";
import { Link } from "react-router-dom";

interface MovieCardProps {
  title: Title;
}
const MovieCard: FC<MovieCardProps> = ({ title }) => {
  return (
    <Link to={`${RoutePaths.Title}/${title.id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={title.primaryImage?.url || ""}
          alt={title.primaryImage?.caption.plainText || title.titleText.text}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      {title.releaseYear?.year && (
        <Typography tag="span">{title.releaseYear?.year}</Typography>
      )}
      <Typography tag="h5" className="font-bold">
        {title.titleText.text}
      </Typography>
      {/* <h3 className="mt-1  text-sm text-gray-700">{title.titleText.text}</h3> */}
      {/* <p className="mt-1 text-lg font-medium text-gray-900">$48</p> */}
    </Link>
  );
};

export { MovieCard };
