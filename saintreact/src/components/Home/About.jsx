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
                Lorem ipsum dolor sit amet consectetur 
            </h1>
            <p className={styles.primaryText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus debitis quidem sunt facilis consequatur, iusto et quisquam, inventore veniam impedit iure, eos doloremque facere nihil quos? Cupiditate, consequuntur maiores.
            </p>
            <p className={styles.primaryText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, qui. Quaerat molestiae, sed amet modi recusandae a veritatis illo officia cupiditate dignissimos! Error quasi, aspernatur minima itaque praesentium vel impedit?
                <div className={styles.aboutButtonsContainer}>
                    <button className={styles.secondaryButton}>Learn More
                    <BsFillPlayCircleFill/>
                    </button>
                    <button className={styles.watchVideoButton}></button>
                </div>
            </p>
        </div>
    </div>
  )
}

export default About