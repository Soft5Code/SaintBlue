import HomeBackgroundImg from '../../assets/home-banner-background.png';
import { FiArrowRight } from 'react-icons/fi';
import styles from '../../pages/LandPaging/Land.module.css';
import estoque from '../../assets/estoque.png';
import Navbar from './navBar';

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.homeBannerContainer}>
        <div className={styles.homeBannerImageContainer}>
          <img src={HomeBackgroundImg} alt="" />
        </div>
        <div className={styles.homeTextSection}>
          <h1 className={styles.primaryHeading}>
            Seu controle de Estoque favorito
          </h1>
          <p className={styles.primaryText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae possimus est adipisci voluptatibus nulla neque cum! Rem, ipsam cupiditate totam placeat consequuntur dignissimos quod reiciendis sequi fuga animi libero.
          </p>
          <button className={styles.secondaryButton}>
            Use de graça agora
            <FiArrowRight />
          </button>
        </div>
        <div className={styles.homeImageSection}>
          <img src={estoque} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
