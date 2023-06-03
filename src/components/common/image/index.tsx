import { FC, ChangeEvent } from "react";

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

const NO_IMAGE_SRC = "https://placehold.co/600x400?text=No+Image";

const Image: FC<ImageProps> = ({ src, ...props }) => {
  const handleError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = NO_IMAGE_SRC;
  };

  return <img src={src || NO_IMAGE_SRC} {...props} onError={handleError} />;
};

export { Image };
export type { ImageProps };
