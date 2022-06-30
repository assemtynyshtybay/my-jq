import {createContext} from "react";

export interface AuthInterface{
  token: string | null;
  isLoggedIn: boolean;
  login(token:string | null, uid:string | null) : void;
  logout(): void;
}

export const Auth = createContext<AuthInterface| null>(null);