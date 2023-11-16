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
}

export type UserContextType = {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}