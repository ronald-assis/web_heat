// import 'dotenv/config';

import { VscGithubInverted } from 'react-icons/vsc';
import styles from './styles.module.scss';

export function LoginBox() {
  //const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_ID = '7d14d98817eeb35ba9bf';
  const signInUrl =`https://github.com/login/oauth/authorize?scope=user&client_id=${CLIENT_ID}`

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
