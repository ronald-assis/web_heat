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
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/ronald-assis.png" alt="Ronald Assis" />
            </div>
            <span>Ronald Assis</span>
          </div>
        </li>

          <li className={styles.message}>
          <p className={styles.messageContent}>
            Qualquer mensagem
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/ronald-assis.png" alt="Ronald Assis" />
            </div>
            <span>Ronald Assis</span>
          </div>
        </li>
        
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Qualquer mensagem
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/ronald-assis.png" alt="Ronald Assis" />
            </div>
            <span>Ronald Assis</span>
          </div>
        </li>
          
      </ul>
    </div>
  )
}
