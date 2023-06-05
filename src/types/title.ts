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

interface Character {
  name: string;
}
export interface Actor {
  characters: Character[];
  name: {
    id: string;
    nameText: {
      text: string;
    };
    primaryImage: {
      height: number;
      width: number;
      url: string;
    };
  };
}

interface Director {
  category: {
    text: string;
  };
  credits: {
    name: {
      id: string;
      nameText: {
        text: string;
      };
    };
  }[];
}
interface PrincipalCast {
  credits: Actor[];
}

interface Edge {
  node: {
    text: string;
  };
}
interface Keywords {
  total: number;
  edges: Edge[];
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
  principalCast: PrincipalCast[];
  ratingsSummary: {
    aggregateRating: number;
    voteCount: number;
  };
  releaseYear?: {
    endYear?: number;
    year?: number;
  };
  directors: Director[];
  trailer?: string;
  keywords: Keywords;
}
