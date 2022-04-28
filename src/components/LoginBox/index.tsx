// import 'dotenv/config';

import { useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { api } from '../../services/api';
import styles from './styles.module.scss';

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

export function LoginBox() {
  //const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_ID = '7d14d98817eeb35ba9bf';
  const signInUrl =`https://github.com/login/oauth/authorize?scope=user&client_id=${CLIENT_ID}`

  const signIn = async (githubCode: string) => {
   const response = await api.post<AuthResponse>('authenticate',{
      code: githubCode,
    }) 

    const {token, user} = response.data;
    localStorage.setItem('token', token);
    console.log(user);
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
  return (
    <div className={styles.loginBoxWrappe}>
      <strong>Entre e compartilhe sua messegem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>

    </div>
  )
}
