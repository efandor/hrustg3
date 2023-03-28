import catalogIcon from '@images/catalog-dark.svg';
import searchIcon from '@images/search-dark.svg';
import styles from './headerOptional.module.scss';

const HeaderOptional: React.FC = () => {
  return (
    <div className={styles.headerOptional}>
      <div className={styles.container}>
        <div className={styles.catalog}>
          <img className={styles.icon} src={catalogIcon} alt="Каталог" />
          <span className={styles.text}>Каталог</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.search}>
          <img className={styles.icon} src={searchIcon} alt="Поиск" />
          <span className={styles.text}>Поиск</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderOptional;
