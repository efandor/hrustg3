import styles from './formPrimary.module.scss';

interface IForm {
  placeholder: string;
  src: string;
  lightTheme?: boolean;
}

const FormPrimary: React.FC<IForm> = ({
  placeholder = '',
  src = '',
  lightTheme = false,
}: IForm) => (
  <form className={lightTheme ? styles.formLight : styles.form}>
    <input
      className={lightTheme ? styles.inputLight : styles.input}
      placeholder={placeholder}
      type="text"
    ></input>
    <button className={styles.button}>
      <img className={styles.icon} src={src} alt="Кнопка" />
    </button>
  </form>
);

export default FormPrimary;
