export interface PreloaderProps {
  load: boolean;
}

export type LoginInputs = {
  email: string;
  password: string;
};

export type SignUpInputs = {
  email: string;
  password: string;
  repeatPassword: string;
};

export type headerPropsType = {
  expired: boolean;
  setExpired: React.Dispatch<React.SetStateAction<boolean>>;
};

export type searchPropsType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};
export type PagePropsType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  pathname: string;
  header: string;
};

interface ThumbnailType {
  small: string;
  medium?: string;
  large: string;
  _id: string;
}

export interface DataType {
  thumbnail: {
    trending: ThumbnailType;
    regular: ThumbnailType;
  };
  title: string;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
  isBookmarked: boolean;
  id: string;
}

export interface auth {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
