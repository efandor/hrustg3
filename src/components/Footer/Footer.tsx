import { Link } from 'react-router-dom';
import logo from '@images/logo.svg';
import arrowRignt from '@images/arrow-right.svg';
import download from '@images/download.svg';
import whatsapp from '@images/messengers/whatsapp.svg';
import telegram from '@images/messengers/telegram.svg';
import visa from '@images/payment/visa.svg';
import mastercard from '@images/payment/mastercard.svg';
import styles from './footer.module.scss';
import FormPrimary from 'components/UIElements/Form/FormPrimary';
import MenuList from 'components/MenuList/menuList';
import ButtonPrimary from 'components/UIElements/Button/ButtonPrimary';
import Callback from 'components/CallBack/Callback';
import { EMAIL, GOODS_CATEGORIES } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.action}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Логотип - голова султана" />
          </Link>
          <p className={styles.text}>
            Компания «Султан» — снабжаем розничные магазины товарами &quot;под ключ&quot; в
            Кокчетаве и Акмолинской области
          </p>
          <div className={styles.actionContainer}>
            <span className={styles.textSmall}>Подпишись на скидки и акции</span>
            <FormPrimary placeholder="Введите ваш E-mail" src={arrowRignt} lightTheme={true} />
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.column}>
            <h2 className={styles.title}>Меню сайта:</h2>
            <MenuList row={false} lightTheme={true} />
          </div>
          <div className={styles.column}>
            <h2 className={styles.title}>Категории:</h2>
            <MenuList row={false} lightTheme={true} items={GOODS_CATEGORIES} />
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.pricelist}>
            <div className={styles.pricelistContent}>
              <h2 className={styles.titlePricelist}>Скачать прайс-лист:</h2>
              <ButtonPrimary text="Прайс-лист" src={download} />
            </div>
            <span className={styles.textMedium}>Связь в мессенджерах:</span>
            <div className={styles.messengers}>
              <a href="#">
                <img className={styles.messengerIcon} src={whatsapp} alt="WhatsApp" />
              </a>
              <a href="#">
                <img className={styles.messengerIcon} src={telegram} alt="Telegram" />
              </a>
            </div>
          </div>
          <div className={styles.contacts}>
            <h2 className={styles.title}>Контакты:</h2>
            <Callback lightTheme={true} rightAlign={false} />
            <div className={styles.email}>
              <span className={styles.emailText}>{EMAIL.VALUE}</span>
              <span className={styles.emailTextThin}>{EMAIL.EXPLICATION}</span>
            </div>
            <div className={styles.payment}>
              <img className={styles.paymentIcon} src={visa} alt="Visa" />
              <img className={styles.paymentIcon} src={mastercard} alt="Mastercard" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
