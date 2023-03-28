import styles from './callback.module.scss';

interface ICallback {
  lightTheme?: boolean;
  rightAlign?: boolean;
}

const Callback: React.FC<ICallback> = ({ lightTheme = false, rightAlign = true }: ICallback) => {
  return (
    <div className={rightAlign ? styles.callbackRight : styles.callback}>
      <span className={lightTheme ? styles.textBoldLight : styles.textBold}>
        +7 (777) 490-00-91
      </span>
      <span className={lightTheme ? styles.textSmallLight : styles.textSmall}>
        время работы: 9:00-20:00
      </span>
      <a className={styles.link} href="#">
        <span className={lightTheme ? styles.textUnderlinedLight : styles.textUnderlined}>
          Заказать звонок
        </span>
      </a>
    </div>
  );
};

export default Callback;
