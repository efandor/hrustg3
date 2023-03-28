import marker from '@images/location.svg';
import envelope from '@images/envelope.svg';
import styles from './addresses.module.scss';
import { ADDRESS, EMAIL } from '../../constants';

interface IaddressesData {
  value: string;
  explication: string;
  src: string;
  alt: string;
}

const addressesData: IaddressesData[] = [
  {
    value: ADDRESS.VALUE,
    explication: ADDRESS.EXPLICATION,
    src: marker,
    alt: 'Маркер на карте',
  },
  {
    value: EMAIL.VALUE,
    explication: EMAIL.EXPLICATION,
    src: envelope,
    alt: 'Почтовый конверт',
  },
];

const Addresses: React.FC = () => (
  <div className={styles.addresses}>
    {addressesData.map((data, index) => (
      <div className={styles.address} key={index}>
        <div className={styles.imageContainer}>
          <img className={styles.addressIcon} src={data.src} alt={data.alt} />
        </div>
        <div className={styles.textContainer}>
          <span className={styles.text}>{data.value}</span>
          <span className={styles.textThin}>{data.explication}</span>
        </div>
      </div>
    ))}
  </div>
);

export default Addresses;
