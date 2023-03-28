import styles from './buttonPrimary.module.scss';

interface IButton {
  text: string;
  src?: string;
}

const ButtonPrimary: React.FC<IButton> = ({ text = '', src = '' }: IButton) => {
  if (src) {
    return (
      <button className={styles.button}>
        <span className={styles.text}>{text}</span>
        <img src={src} alt={text} className={styles.icon} />
      </button>
    );
  }

  return (
    <button className={styles.button}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default ButtonPrimary;
