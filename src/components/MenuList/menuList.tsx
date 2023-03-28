import styles from './menuList.module.scss';

const menuItems = ['О компании', 'Доставка и оплата', 'Возврат', 'Контакты'];

interface IMenu {
  row?: boolean;
  lightTheme?: boolean;
  items?: string[];
}

const MenuList: React.FC<IMenu> = ({
  lightTheme = false,
  row = true,
  items = menuItems,
}: IMenu) => {
  return (
    <>
      <nav className={row ? styles.menu : styles.menuColumn}>
        <ul className={row ? styles.list : styles.listColumn}>
          {items.map((item: string, index) => (
            <li className={row ? styles.item : styles.itemColumn} key={index}>
              <span className={lightTheme ? styles.textLight : styles.text}>{item}</span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MenuList;
