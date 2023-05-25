import { FC } from "react";

interface Movie {
  id: string;
  originalTitleText: { text: string };
  primaryImage: { url: string };
}

interface MovieCardProps {
  id: string;
  movie: Movie;
}
const MovieCard: FC<MovieCardProps> = ({ id, movie }) => {
  return (
    <a href={movie.id} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={movie.primaryImage?.url}
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">
        {movie.originalTitleText.text}
      </h3>
      {/* <p className="mt-1 text-lg font-medium text-gray-900">$48</p> */}
    </a>
  );
};

export { MovieCard };
