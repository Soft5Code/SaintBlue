import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import styles from '../../pages/LandPaging/Land.module.css';
import HomeBackgroundImg from '../../assets/home-banner-background.png';
import estoque from '../../assets/estoque.png';
import Navbar from './navBar';

const Home = () => {
  const navigate = useNavigate(); // Hook de navegação

  const handleRedirect = () => {
    navigate('/inicio'); // Caminho para a outra página
  }

  return (
    <div className={styles.container} id="inicio">
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
            Com o Saint Blue, você leva seu controle de estoque a um novo patamar. Nosso sistema intuitivo e eficiente ajuda a monitorar produtos, reduzir erros e economizar tempo. Tudo isso com informações em tempo real para decisões mais rápidas e estratégicas. Seja qual for o tamanho do seu negócio, o Saint Blue é a solução ideal para otimizar sua operação e impulsionar seu crescimento!
          </p>
          <button className={styles.secondaryButton} onClick={handleRedirect}>
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
