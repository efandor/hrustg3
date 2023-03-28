import { Link } from 'react-router-dom';
import phoneOperator from '@images/phoneOperator.png';
import cart from '@images/cart.svg';
import download from '@images/download.svg';
import logo from '@images/logo.svg';
import search from '@images/search.svg';
import burger from '@images/burger.svg';
import Callback from 'components/CallBack/Callback';
import ButtonPrimary from 'components/UIElements/Button/ButtonPrimary';
import FormPrimary from 'components/UIElements/Form/FormPrimary';
import catalogIcon from '@images/catalog.svg';
import styles from './headerMain.module.scss';

const HeaderMain: React.FC = () => {
  return (
    <div className={styles.headerMain}>
      <div className={styles.container}>
        <div className={styles.burger}>
          <img className={styles.burgerIcon} src={burger} alt="Раскрыть меню" />
        </div>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Логотип - голова султана" />
        </Link>
        <div className={styles.catalog}>
          <Link to="/catalog">
            <ButtonPrimary text="Каталог" src={catalogIcon} />
          </Link>
        </div>
        <div className={styles.search}>
          <FormPrimary placeholder="Поиск..." src={search} />
        </div>
        <div className={styles.callback}>
          <Callback />
          <div className={styles.imageContainer}>
            <img
              className={styles.callBackImage}
              src={phoneOperator}
              alt="Девушка оператор телефона"
            />
          </div>
        </div>
        <div className={styles.bordered}>
          <ButtonPrimary text="Прайс-лист" src={download} />
        </div>
        <Link to="/cart" className={styles.cart}>
          <div className={styles.imageContainer}>
            <img className={styles.cartImage} src={cart} alt="Корзина для покупок" />
            <div className={styles.cartPopUp}>
              <span className={styles.cartCounter}>3</span>
            </div>
          </div>
          <div className={styles.cartContent}>
            <div className={styles.textSmall}>Корзина</div>
            <div className={styles.textBold}>12 478 ₸</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderMain;
