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

export type UserContextType = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

export type searchPropsType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

interface ThumbnailType {
  small: string;
  medium?: string; // Optional property
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
