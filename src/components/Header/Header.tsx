import HeaderExtra from 'components/HeaderExtra/HeaderExtra';
import HeaderMain from 'components/HeaderMain/HeaderMain';
import HeaderOptional from 'components/HeaderOptional/HeaderOptional';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <HeaderExtra />
      <HeaderMain />
      <HeaderOptional />
    </header>
  );
};

export default Header;
