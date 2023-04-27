import { createContext } from "react";
import { User } from "../../interface/IUser";

export type AuthContextType ={
    user: User | null;
    signin: (login:string, passowrd: string) => Promise<boolean>;
    signout: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = createContext<AuthContextType>(null!);