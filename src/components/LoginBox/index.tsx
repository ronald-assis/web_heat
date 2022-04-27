import styles from './styles.module.scss';

export function LoginBox() {
  return (
    <div className={styles.loginBoxWrappe}>
      <strong>Entre e compartilhe sua messegem</strong>
      <a href='#' className={styles.signInWithGithub}>
        Entrar com Github
      </a>

    </div>
  )
}
