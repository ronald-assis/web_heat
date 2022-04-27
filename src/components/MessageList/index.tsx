import styles from './styles.module.scss';

import logImg from '../../assets/logo.svg';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logImg} alt='DoWhile 2021' />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Qualquer mensagem
          </p>
        </li>
      </ul>
    </div>
  )
}
