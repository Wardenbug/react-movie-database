export interface Genre {
  id: string;
  text: string;
}

export interface PrimaryImage {
  id: string;
  height: number;
  width: number;
  url: string;
  caption: {
    plainText: string;
  };
}

export interface Title {
  id: string;
  titleText: {
    text: string;
  };
  plot: {
    plotText: {
      plainText: string;
    };
  };
  primaryImage?: PrimaryImage;
  genres: {
    genres: Genre[];
  };
  ratingsSummary: {
    aggregateRating: number;
    voteCount: number;
  };
  releaseYear?: {
    endYear?: number;
    year?: number;
  };
}
