import Addresses from 'components/Addresses/Addresses';
import MenuList from 'components/MenuList/menuList';
import styles from './headerExtra.module.scss';

const HeaderExtra: React.FC = () => {
  return (
    <div className={styles.headerExtra}>
      <div className={styles.container}>
        <Addresses />
        <MenuList />
      </div>
    </div>
  );
};

export default HeaderExtra;
