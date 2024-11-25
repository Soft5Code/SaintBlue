import { GitHub } from "@mui/icons-material"
import { Instagram } from '@mui/icons-material'
import styles from '../../pages/LandPaging/Land.module.css';

const Footer = () => {
  return (
    <div className={styles.footerWrappper}>
        <div className='footer-section-one'>
            {/* <div className='footer-logo-container'>
                <img src={Logo} alt="" />
            </div> */}
            <div className={styles.footerIcons}>
                <GitHub/>
                <Instagram />
            </div>
        </div>
        <div className={styles.footerSectionTwo}>
            <div className={styles.footerSectionColumns}>
                <span>Help</span>
                <span>Sobre</span>
                <span>Contatos</span>
                <span>Feedback</span>
                <span>Funcionalidades</span>
            </div>
            <div className={styles.footerSectionColumns}>
                <span>(19)-97117-5279</span>
                <span>saintbluesb@gmail.com</span>
            </div>
            <div className={styles.footerSectionColumns}>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer