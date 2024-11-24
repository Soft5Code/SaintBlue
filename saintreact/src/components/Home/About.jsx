import AboutBackground from '../../assets/about-background.png';
// import AboutBackgroundImage from '../Assets/about-background-image.png';
import AboutBackgroundImage from '../../assets/pexels.jpg';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import styles from '../../pages/LandPaging/Land.module.css';

const About = () => {
  return (
    <div className={styles.aboutSectionContainer}>
        <div className={styles.aboutBackgroundImageContainer}>
            <img src={AboutBackground} alt="" />
        </div>
        <div className={styles.aboutSectionImageContainer}>
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className={styles.aboutSectionTextContainer}>
            <p className={styles.primarySubHeading}>Sobre</p>
            <h1 className={styles.primaryHeading}>
                Nossa Jornada e Compromisso com a Inovação
            </h1>
            <p className={styles.primaryText}>
                Somos uma equipe de quatro estudantes apaixonados por tecnologia e inovação, unidos pelo desejo de criar soluções práticas e eficientes para empresas. O Saint Blue nasceu da nossa vontade de ajudar negócios a organizarem seus estoques com mais facilidade e controle, oferecendo ferramentas que cabem na palma da sua mão.
            </p>
            <p className={styles.primaryText}>
                Nosso sistema é totalmente customizável para atender às necessidades de qualquer empresa, independentemente do porte ou setor. Utilizamos as tecnologias mais avançadas do mercado para garantir um serviço ágil, moderno e seguro, sempre pensando em oferecer a melhor experiência para nossos usuários.
            </p>
        </div>
    </div>
  )
}

export default About