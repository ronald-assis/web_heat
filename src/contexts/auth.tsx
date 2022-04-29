import { createContext, ReactNode, useEffect, useState } from "react";
import {api}  from '../services/api';  

type User = {
  id: string;
  name: string;
  avatar_url: string;
  login: string;
}

type AuthContextData = {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
}


type AuthResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    github_id: number;
    avatar_url: string;
    login: string;
  }
}

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
  children: ReactNode;
}

export function AuthProvider(props: AuthProvider){
  const [user, setUser] = useState<User | null>(null);  
  //const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_ID = '7d14d98817eeb35ba9bf';
  const signInUrl =`https://github.com/login/oauth/authorize?scope=user&client_id=${CLIENT_ID}`

  const signIn = async (githubCode: string) => {
   const response = await api.post<AuthResponse>('authenticate',{
      code: githubCode,
    }) 

    const {token, user} = response.data;
    localStorage.setItem('token', token);
    setUser(user);
  }

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  }

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutcode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutcode);

      signIn(githubCode);
    }

  },[]);

  useEffect(() => {
    const token = localStorage.getItem('token'); 

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`; 

      api.get<User>('profile').then((response) => {
        setUser(response.data);
      })
    }
  },[])

  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut}}> {props.children}
    </AuthContext.Provider>
  )
}
